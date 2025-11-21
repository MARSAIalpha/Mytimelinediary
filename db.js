const DataManager = {
    dbName: 'TimelineDB',
    storeName: 'entries',
    dbVersion: 1,
    db: null,

    init: async function() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.dbVersion);
            request.onerror = () => reject("DB Init Failed");
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
        return new Promise((resolve) => {
            const request = this.getStore().get(Number(id));
            request.onsuccess = () => resolve(request.result);
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
            // 2025 Main
            { name: "春节", date: "2025-01-29" }, { name: "元宵节", date: "2025-02-12" },
            { name: "清明节", date: "2025-04-04" }, { name: "端午节", date: "2025-05-31" },
            { name: "七夕节", date: "2025-08-29" }, 
            // 2025 Late
            { name: "中秋节", date: "2025-10-06" }, { name: "国庆节", date: "2025-10-01" },
            { name: "重阳节", date: "2025-10-29" }, { name: "圣诞节", date: "2025-12-25" },
            // 2026 Early
            { name: "元旦", date: "2026-01-01" }, { name: "除夕", date: "2026-02-16" },
            { name: "春节", date: "2026-02-17" }, { name: "情人节", date: "2026-02-14" },
            { name: "元宵节", date: "2026-03-03" }
        ];
        HOLIDAYS_CHECK.forEach(h => {
            const hDate = new Date(h.date).toDateString();
            if (!entries.some(e => e.title === h.name && new Date(e.ts).toDateString() === hDate)) {
                 newEntries.push({ id: Date.now() + Math.random(), title: h.name, content: "Holiday", mood: 'smile', weather: 'sun', ts: new Date(h.date+"T09:00:00").getTime(), h: 9, anni: false, isHoliday: true });
            }
        });
        if(newEntries.length > 0) {
            const store = this.getStore('readwrite');
            newEntries.forEach(e => store.add(e));
            return new Promise(r => { store.transaction.oncomplete = () => r(); });
        }
    },

    updateHolidays: async function() { await this.checkAndAddHolidays(); alert("Holidays Updated for 2025/2026!"); UI.renderCalendar(); UI.renderTimeline(); },

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

    fetchInspiration: async function() {
        const k = document.getElementById('user-api-key').value || UI.DEFAULT_KEY;
        try {
            const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${k}`, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({contents:[{parts:[{text:`Generate a short, beautiful micro-story (under 50 words). Lang: ${UI.state.lang}`}]}]}) });
            const json = await res.json(); UI.editorInsertMD(`\n> ${json.candidates[0].content.parts[0].text}\n`);
        } catch(e) { alert("AI Error"); }
    },

    analyzeFoodImage: async function() {
        const img = UI.state.tempImage; if (!img) return alert("Upload image first.");
        const k = document.getElementById('user-api-key').value || UI.DEFAULT_KEY;
        const btn = document.querySelector('button[onclick="DataManager.analyzeFoodImage()"]');
        const oldText = btn.innerText; btn.innerText = "...";
        try {
            const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${k}`, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({contents:[{parts:[{text: `Identify food. Return JSON: {"food": "Name", "calories": 500, "desc": "Short description"}. No markdown.`},{inlineData: {mimeType: img.split(';')[0].split(':')[1], data: img.split(',')[1]}}]}]}) });
            const json = await res.json(); const txt = json.candidates[0].content.parts[0].text.replace(/```json|```/g, '').trim(); const data = JSON.parse(txt);
            document.getElementById('editor-title').value = data.food; document.getElementById('editor-content').value = data.desc; document.getElementById('editor-calories').value = data.calories;
            alert(`Identified: ${data.food} (${data.calories} kcal)`);
        } catch(e) { alert("Analysis Failed"); } finally { btn.innerText = oldText; }
    },

    generateStoryFromImage: async function() {
        const img = UI.state.tempImage; if (!img) return alert("Upload image first.");
        const k = document.getElementById('user-api-key').value || UI.DEFAULT_KEY;
        try {
            const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${k}`, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({contents:[{parts:[{text: `Write a poem based on this image. Lang: ${UI.state.lang}`},{inlineData: {mimeType: img.split(';')[0].split(':')[1], data: img.split(',')[1]}}]}]}) });
            const json = await res.json(); UI.editorInsertMD(`\n${json.candidates[0].content.parts[0].text}\n`);
        } catch(e) { alert("Poetify Failed"); }
    },

    exportBackup: async function() { 
        const allData = await this.getAll();
        const b = new Blob([JSON.stringify(allData, null, 2)], {type: 'application/json'}); 
        const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = `timeline_backup.json`; a.click(); 
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
                        store.transaction.oncomplete = () => { alert("Restored!"); this.updateStats(); UI.refreshAll(); };
                    } 
                } catch(err) { alert("Invalid JSON"); } 
            }; 
            r.readAsText(input.files[0]); 
        } 
        input.value = ''; 
    },

    exportPDF: async function() {
        const allData = await this.getAll();
        if (allData.length === 0) return alert("No entries.");
        alert("Generating PDF...");
        const el = document.createElement('div');
        el.style.cssText = 'position:absolute;left:-9999px;top:0;width:800px;padding:40px;background:white;color:black;font-family:serif;';
        el.innerHTML = `<h1 style="text-align:center;margin-bottom:40px;">Timeline Journal</h1>` + allData.sort((a,b)=>b.ts-a.ts).map(e => `
            <div style="margin-bottom:30px;border-bottom:1px solid #ccc;padding-bottom:20px;page-break-inside:avoid;">
                <h2 style="font-size:18px;margin:0;">${e.title}</h2>
                <div style="font-size:12px;color:#666;margin-bottom:10px;">${new Date(e.ts).toLocaleString()} ${e.calories?`| ${e.calories} kcal`:''}</div>
                ${e.img ? `<img src="${e.img}" style="max-width:100%;max-height:300px;border-radius:8px;margin:10px 0;">` : ''}
                <div style="font-size:14px;line-height:1.6;white-space:pre-wrap;">${e.content}</div>
            </div>`).join('');
        document.body.appendChild(el);
        try { await html2pdf().set({ margin:10, filename:`journal.pdf`, image:{type:'jpeg',quality:0.98}, html2canvas:{scale:2}, jsPDF:{unit:'mm',format:'a4'} }).from(el).save(); } 
        catch (e) { alert("PDF Error"); } finally { document.body.removeChild(el); }
    },

    exportSelectedMarkdown: async function(ids) {
        if(!ids || ids.size===0) return alert("Select entries first.");
        const allData = await this.getAll();
        const selected = allData.filter(e => ids.has(e.id));
        let md = `# Timeline Export\n\n` + selected.map(e => `## ${e.title}\nDate: ${new Date(e.ts).toLocaleString()}\n\n${e.content}`).join('\n\n---\n\n');
        const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([md], {type: 'text/markdown'})); a.download = `timeline_export.md`; a.click();
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