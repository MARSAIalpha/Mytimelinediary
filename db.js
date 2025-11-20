// Database Manager using IndexedDB
const DataManager = {
    dbName: 'TimelineDB',
    storeName: 'entries',
    dbVersion: 1,
    db: null,

    init: async function() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.dbVersion);
            request.onerror = (event) => { console.error("DB Error"); reject("DB Init Failed"); };
            request.onsuccess = (event) => {
                this.db = event.target.result;
                this.checkAndAddHolidays().then(() => { this.updateStats(); resolve(); });
            };
            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains(this.storeName)) db.createObjectStore(this.storeName, { keyPath: "id" });
            };
        });
    },

    getStore: function(mode = 'readonly') {
        const transaction = this.db.transaction([this.storeName], mode);
        return transaction.objectStore(this.storeName);
    },

    getAll: async function() {
        return new Promise((resolve, reject) => {
            if(!this.db) return resolve([]);
            const request = this.getStore().getAll();
            request.onsuccess = () => resolve(request.result || []);
            request.onerror = () => reject(request.error);
        });
    },

    getById: async function(id) {
        return new Promise((resolve, reject) => {
            const request = this.getStore().get(Number(id));
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    },

    add: async function(entry) {
        return new Promise((resolve, reject) => {
            entry.id = entry.id || Date.now();
            const request = this.getStore('readwrite').add(entry);
            request.onsuccess = () => { this.updateStats(); UI.refreshAll(); resolve(entry); };
            request.onerror = () => reject(request.error);
        });
    },

    update: async function(id, updates) {
        const entry = await this.getById(id);
        if (!entry) return;
        return new Promise((resolve, reject) => {
            const updatedEntry = { ...entry, ...updates };
            const request = this.getStore('readwrite').put(updatedEntry);
            request.onsuccess = () => { this.updateStats(); UI.refreshAll(); resolve(updatedEntry); };
            request.onerror = () => reject(request.error);
        });
    },

    delete: async function(id) {
        return new Promise((resolve, reject) => {
            const request = this.getStore('readwrite').delete(Number(id));
            request.onsuccess = () => { this.updateStats(); UI.refreshAll(); resolve(true); };
            request.onerror = () => reject(request.error);
        });
    },

    checkAndAddHolidays: async function() {
        const entries = await this.getAll();
        const newEntries = [];
        const HOLIDAYS_CHECK = [
            { name: "春节", date: "2025-01-29", desc: "农历新年。" },
            { name: "元宵节", date: "2025-02-12", desc: "农历正月十五。" },
            { name: "清明节", date: "2025-04-04", desc: "祭祀节日。" },
            { name: "端午节", date: "2025-05-31", desc: "农历五月初五。" },
            { name: "七夕节", date: "2025-08-29", desc: "农历七月初七。" },
            { name: "中秋节", date: "2025-10-06", desc: "农历八月十五。" },
            { name: "重阳节", date: "2025-10-29", desc: "农历九月初九。" },
            { name: "国庆节", date: "2025-10-01", desc: "国庆日。" }
        ];
        HOLIDAYS_CHECK.forEach(h => {
            const hDate = new Date(h.date).toDateString();
            if (!entries.some(e => e.title === h.name && new Date(e.ts).toDateString() === hDate)) {
                 newEntries.push({ id: Date.now() + Math.random(), title: h.name, content: h.desc, mood: 'smile', weather: 'sun', ts: new Date(h.date+"T09:00:00").getTime(), h: 9, anni: false, isHoliday: true });
            }
        });
        if(newEntries.length > 0) {
            const store = this.getStore('readwrite');
            newEntries.forEach(e => store.add(e));
            return new Promise(r => { store.transaction.oncomplete = () => r(); });
        }
    },

    updateHolidays: async function() { await this.checkAndAddHolidays(); alert("Holidays Updated!"); UI.renderCalendar(); UI.renderTimeline(); },

    compressImage: function(base64, maxWidth, quality, callback) {
        const img = new Image(); img.src = base64;
        img.onload = () => {
            const canvas = document.createElement('canvas'); let w = img.width; let h = img.height;
            if (w > maxWidth) { h = Math.round(h * maxWidth / w); w = maxWidth; }
            canvas.width = w; canvas.height = h;
            const ctx = canvas.getContext('2d'); ctx.drawImage(img, 0, 0, w, h);
            callback(canvas.toDataURL('image/jpeg', quality));
        };
    },

    saveFromEditor: function() {
        const id = document.getElementById('editor-id').value; 
        const t = document.getElementById('editor-title').value; 
        const c = document.getElementById('editor-content').value; 
        const d = document.getElementById('editor-date').value; 
        const tm = document.getElementById('editor-time').value; 
        const img = UI.state.tempImage; 
        const anni = document.getElementById('editor-anni').checked; 
        const anniType = document.getElementById('editor-anni-type').value;
        if(t && d) { 
            const [y,m,day] = d.split('-').map(Number); 
            const [hr,min] = tm ? tm.split(':').map(Number) : [12,0]; 
            const ts = new Date(y,m-1,day,hr,min).getTime(); 
            const save = async (processedImg) => { 
                const payload = { ts, h: hr, title: t, content: c, mood: UI.state.mood, weather: UI.state.weather, img: processedImg, anni, anniType }; 
                if (id) await this.update(id, payload); else await this.add(payload); 
                UI.closeEditor(); 
            };
            if (img && img.startsWith('data:')) { this.compressImage(img, 1200, 0.8, save); } else { save(img); }
        } else { alert('Title and Date required'); }
    },

    fetchInspiration: async function() {
        const btn = document.getElementById('btn-inspire'); const originalHtml = btn.innerHTML;
        btn.innerHTML = `<i data-lucide="loader-2" class="animate-spin w-3 h-3"></i>`; lucide.createIcons();
        const k = document.getElementById('user-api-key').value || UI.DEFAULT_KEY;
        try {
            const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${k}`, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({contents:[{parts:[{text:`Generate a short, beautiful, healing micro-story (under 50 words). Language: ${UI.state.lang==='zh'?'Chinese':'English'}.`}]}]}) });
            const json = await res.json(); UI.editorInsertMD(`\n> ${json.candidates[0].content.parts[0].text}\n`);
        } catch(e) { alert("Connection failed."); } finally { btn.innerHTML = originalHtml; lucide.createIcons(); }
    },

    generateStoryFromImage: async function() {
        const btn = document.getElementById('btn-vision'); const originalHtml = btn.innerHTML;
        btn.innerHTML = `<i data-lucide="loader-2" class="animate-spin w-3 h-3"></i>`; lucide.createIcons();
        const img = UI.state.tempImage; if (!img) { btn.innerHTML=originalHtml; return alert("Upload image first."); }
        const k = document.getElementById('user-api-key').value || UI.DEFAULT_KEY;
        try {
            const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${k}`, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({contents:[{parts:[{text: `Write a short poetic diary entry based on image. Lang: ${UI.state.lang==='zh'?'Chinese':'English'}.`},{inlineData: {mimeType: img.split(';')[0].split(':')[1], data: img.split(',')[1]}}]}]}) });
            const json = await res.json(); UI.editorInsertMD(`\n${json.candidates[0].content.parts[0].text}\n`);
        } catch(e) { console.error(e); alert("Vision failed."); } finally { btn.innerHTML = originalHtml; lucide.createIcons(); }
    },

    exportBackup: async function() { 
        const allData = await this.getAll();
        const b = new Blob([JSON.stringify(allData, null, 2)], {type: 'application/json'}); 
        const u = URL.createObjectURL(b); const a = document.createElement('a'); a.href = u; a.download = `timeline_backup.json`; a.click(); URL.revokeObjectURL(u); 
    },
    
    importBackup: function(input) { 
        if(input.files[0]) { 
            const r = new FileReader(); 
            r.onload = async (e) => { 
                try { 
                    const i = JSON.parse(e.target.result); 
                    if(Array.isArray(i) && confirm(`Import ${i.length} entries?`)) { 
                        const store = this.getStore('readwrite');
                        i.forEach(entry => store.put(entry)); 
                        store.transaction.oncomplete = () => { alert("Restored!"); this.updateStats(); UI.closeInfo(); UI.refreshAll(); };
                    } 
                } catch(err) { alert("Invalid JSON"); } 
            }; 
            r.readAsText(input.files[0]); 
        } 
        input.value = ''; 
    },

    exportMonthMarkdown: async function() { 
        const y = UI.state.calendarDate.getFullYear(), m = UI.state.calendarDate.getMonth(); 
        const allData = await this.getAll();
        const e = allData.filter(i => { const d = new Date(i.ts); return d.getFullYear() === y && d.getMonth() === m; }); 
        if(!e.length) return alert("No entries."); 
        let md = `# Archive ${y}-${m+1}\n\n` + e.map(i => `## ${i.title}\n${new Date(i.ts).toLocaleString()}\n\n${i.content.replace(/<[^>]*>/g, '')}\n---`).join('\n\n'); 
        const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([md], {type: 'text/markdown'})); a.download = `Journal_${y}_${m+1}.md`; a.click(); 
    },

    // Fixed PDF Export for Mobile
    exportPDF: async function() {
        const allData = await this.getAll();
        if (allData.length === 0) return alert("No entries to export.");
        
        alert("Generating PDF, please wait...");

        const el = document.createElement('div');
        el.style.padding = '40px'; 
        el.style.fontFamily = 'serif'; 
        el.style.color = '#000'; 
        el.style.background = '#fff';
        // Important: Append to body but keep off-screen to ensure rendering
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        el.style.top = '0';
        el.style.width = '800px'; // Fixed width for consistent PDF layout
        
        el.innerHTML = `<h1 style="text-align:center; margin-bottom: 40px;">Timeline Journal</h1>` + allData.sort((a,b)=>b.ts-a.ts).map(e => `
            <div style="margin-bottom: 40px; page-break-inside: avoid; border-bottom: 1px solid #eee; padding-bottom: 20px;">
                <h2 style="font-size: 18px; margin-bottom: 5px;">${e.title}</h2>
                <div style="font-size: 12px; color: #666; margin-bottom: 10px;">${new Date(e.ts).toLocaleString()}</div>
                ${e.img ? `<img src="${e.img}" style="max-width: 100%; max-height: 300px; border-radius: 8px; margin: 10px 0;">` : ''}
                <div style="font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${e.content}</div>
            </div>
        `).join('');

        document.body.appendChild(el);

        const opt = {
            margin: 10,
            filename: `journal_backup_${new Date().toISOString().slice(0,10)}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        try {
            await html2pdf().set(opt).from(el).save();
        } catch (e) {
            alert("PDF Generation Failed: " + e.message);
        } finally {
            document.body.removeChild(el);
        }
    },

    nukeData: async function() { 
        if(confirm("Delete ALL data?")) { 
            const store = this.getStore('readwrite');
            store.clear();
            store.transaction.oncomplete = () => { UI.refreshAll(); this.updateStats(); UI.closeInfo(); };
        } 
    },

    updateStats: function() {
        if (navigator.storage && navigator.storage.estimate) {
            navigator.storage.estimate().then(estimate => {
                const used = estimate.usage || 0; const quota = estimate.quota || 1024 * 1024 * 1024;
                document.getElementById('storage-bar').style.width = `${Math.min((used/quota)*100, 100)}%`; 
                document.getElementById('storage-size').innerText = `${(used/1024/1024).toFixed(2)} MB`;
                this.getAll().then(all => { document.getElementById('entry-count').innerText = `${all.length} Entries`; });
            });
        }
    }
};