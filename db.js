const DataManager = {
    dbName: 'TimelineDB',
    storeName: 'entries',
    dbVersion: 1,
    db: null,

    // Secure API key management
    getAPIKey: function(service) {
        const key = service === 'deepseek' 
            ? localStorage.getItem('deepseek_api_key')
            : localStorage.getItem('qwen_vl_api_key');
        if (!key) {
            throw new Error(`Missing ${service.toUpperCase()} API key. Please configure in Settings.`);
        }
        return key;
    },

    // Deepseek Text Generation (OpenAI-compatible)
    callDeepseek: async function(prompt, maxTokens = 800) {
        const apiKey = this.getAPIKey('deepseek');
        const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'deepseek-chat',
                messages: [{ role: 'user', content: prompt }],
                temperature: 0.7,
                max_tokens: maxTokens,
                stream: false
            })
        });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(`Deepseek ${response.status}: ${error.error?.message || 'API Error'}`);
        }
        
        const data = await response.json();
        return data.choices[0].message.content;
    },

    // Qwen-VL Multimodal Generation (Alibaba Cloud)
    callQwenVL: async function(textPrompt, imageBase64 = null) {
        const apiKey = this.getAPIKey('qwen_vl');
        const content = imageBase64 
            ? [{ image: imageBase64.split(',')[1] }, { text: textPrompt }]
            : [{ text: textPrompt }];
        
        const response = await fetch('https://dashscope.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'qwen-vl-plus',
                input: { messages: [{ role: 'user', content }] },
                parameters: {
                    seed: Math.floor(Math.random() * 10000),
                    top_p: 0.8
                }
            })
        });
        
        if (!response.ok) {
            const error = await response.text();
            throw new Error(`Qwen-VL ${response.status}: ${error}`);
        }
        
        const data = await response.json();
        if (data.code !== 'Success') {
            throw new Error(`Qwen-VL Generation Failed: ${data.message}`);
        }
        
        return data.output.choices[0].message.content[0].text;
    },

    // Database operations (unchanged)
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
            const store = this.getStore();
            // 1. 尝试直接用传进来的 ID (可能是字符串) 去找
            const request = store.get(id);
            
            request.onsuccess = () => {
                if (request.result) {
                    resolve(request.result);
                } else {
                    // 2. 如果没找到，且这个 ID 看起来是个纯数字 (兼容旧数据)
                    // 因为从 HTML onclick 传过来的 id 永远是字符串
                    if (!isNaN(Number(id))) {
                        const reqNum = store.get(Number(id));
                        reqNum.onsuccess = () => resolve(reqNum.result);
                        reqNum.onerror = () => resolve(null);
                    } else {
                        resolve(null);
                    }
                }
            };
            request.onerror = () => resolve(null);
        });
    },
   // --- 替换 db.js 中的 add 函数 ---
    add: async function(entry) {
        return new Promise((resolve, reject) => {
            // 【关键修复】生成绝对唯一的 ID：时间戳 + 随机数
            // 这样即使一秒钟点三次，ID 也不会重复
            entry.id = entry.id || (Date.now() + '-' + Math.floor(Math.random() * 10000));
            
            const request = this.getStore('readwrite').add(entry);
            request.onsuccess = () => { this.updateStats(); UI.refreshAll(); resolve(entry); };
            request.onerror = () => reject(request.error);
        });
    },

   update: async function(id, updates) {
        // 先获取完整的条目 (getById 已经修复了，所以这里能拿到了)
        const entry = await this.getById(id);
        if (!entry) return;
        
        return new Promise((resolve, reject) => {
            const updatedEntry = { ...entry, ...updates };
            // 使用 put 直接存对象，不需要手动指定 key (keyPath 会自动从对象里的 id 字段取)
            const request = this.getStore('readwrite').put(updatedEntry);
            request.onsuccess = () => { this.updateStats(); UI.refreshAll(); resolve(updatedEntry); };
            request.onerror = () => reject(request.error);
        });
    },
   delete: async function(id) {
        return new Promise((resolve, reject) => {
            const store = this.getStore('readwrite');
            // 1. 尝试直接删除
            const request = store.delete(id);
            
            request.onsuccess = () => { 
                // 成功了就刷新
                this.updateStats(); 
                UI.refreshAll(); 
                resolve(true); 
            };
            
            // 2. 如果没删掉 (通常 delete 不会报错只是不生效，但为了保险)
            // 这里其实不需要像 getById 那样做双重检查，因为调用 delete 前通常已经获取到对象了
            // 但为了防止直接传个字符串数字进来删不掉旧数据：
            if (!isNaN(Number(id))) {
                 store.delete(Number(id)); // 顺手把数字类型的也尝试删一下
            }
            
            request.onerror = () => reject(request.error);
        });
    },

    checkAndAddHolidays: async function() {
        const entries = await this.getAll();
        const newEntries = [];
        const HOLIDAYS_CHECK = [
            { name: "春节", date: "2025-01-29" }, { name: "元宵节", date: "2025-02-12" },
            { name: "清明节", date: "2025-04-04" }, { name: "端午节", date: "2025-05-31" },
            { name: "七夕节", date: "2025-08-29" }, { name: "中秋节", date: "2025-10-06" },
            { name: "国庆节", date: "2025-10-01" }, { name: "重阳节", date: "2025-10-29" },
            { name: "圣诞节", date: "2025-12-25" }, { name: "元旦", date: "2026-01-01" },
            { name: "除夕", date: "2026-02-16" }, { name: "春节", date: "2026-02-17" },
            { name: "情人节", date: "2026-02-14" }, { name: "元宵节", date: "2026-03-03" }
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

    // 完全替换原 fetchInspiration
// --- 修复版：AI 灵感生成 (适配新编辑器 + 你的定制 Prompt) ---
    fetchInspiration: async function() {
        // 1. 按钮状态反馈 (转圈圈)
        const btn = document.querySelector('button[onclick="DataManager.fetchInspiration()"]');
        const originalHTML = btn ? btn.innerHTML : '';
        if (btn) {
            btn.innerHTML = '<i data-lucide="loader" class="w-4 h-4 animate-spin"></i> <span class="text-xs">Thinking...</span>';
            btn.disabled = true;
            if(typeof lucide !== 'undefined') lucide.createIcons();
        }

        try {
            // 2. 获取当前环境数据
            const dateStr = document.getElementById('editor-date').value;
            const timeStr = document.getElementById('editor-time').value || '12:00';
            const [y, m, d] = (dateStr || new Date().toISOString().slice(0, 10)).split('-');
            const [hour] = timeStr.split(':').map(Number);
            const dateObj = new Date(y, m - 1, d, hour);

            // 计算季节
            const monthIdx = dateObj.getMonth() + 1;
            let season = 'Season';
            if (monthIdx <= 2 || monthIdx === 12) season = UI.state.lang === 'zh' ? '冬季' : 'Winter';
            else if (monthIdx <= 5) season = UI.state.lang === 'zh' ? '春季' : 'Spring';
            else if (monthIdx <= 8) season = UI.state.lang === 'zh' ? '夏季' : 'Summer';
            else season = UI.state.lang === 'zh' ? '秋季' : 'Autumn';

            // 计算时段
            let dayPhase = 'Day';
            if (hour < 5) dayPhase = UI.state.lang === 'zh' ? '深夜' : 'Late Night';
            else if (hour < 9) dayPhase = UI.state.lang === 'zh' ? '清晨' : 'Early Morning';
            else if (hour < 12) dayPhase = UI.state.lang === 'zh' ? '上午' : 'Morning';
            else if (hour < 14) dayPhase = UI.state.lang === 'zh' ? '正午' : 'Noon';
            else if (hour < 18) dayPhase = UI.state.lang === 'zh' ? '下午' : 'Afternoon';
            else dayPhase = UI.state.lang === 'zh' ? '夜晚' : 'Evening';

            const weekDay = dateObj.toLocaleDateString(UI.state.lang === 'zh' ? 'zh-CN' : 'en-US', { weekday: 'long' });
            const weather = UI.state.weather || 'sun';
            const mood = UI.state.mood || 'smile';

            // 3. 构建 Prompt (根据你的要求定制)
            const prompt = UI.state.lang === 'zh' 
                ? `现在的设定：今天是${weekDay}，${season}的${dayPhase}，天气${weather}，心情${mood}。
请用 Markdown 写一段 120-150 字的启示：
- 标题用 ## 启示
- 首句用一句灵活贴心的问候/提示（例子：上午可问“今天有什么安排？”；雨天提醒“带伞了吗？”；心情低落时说“先深呼吸，慢慢来”）
- 语气温柔、诗意，像写给老朋友，不要分段太多。` 
                : `Current Context: Today is ${weekDay}, ${dayPhase} in ${season}, weather: ${weather}, mood: ${mood}.
Write a 120-150 word Markdown insight:
- Start with title: ## Insight
- Begin with a flexible, caring prompt (e.g. "Any plans today?" in the morning, "Got your umbrella?" on rainy days, "Take a slow breath" when mood is down)
- Poetic and gentle, as if to an old friend.`;

            // 4. 调用 API
            const md = await this.callDeepseek(prompt, 350);

            // 5. 插入内容 (使用新版插入方法，不会报错)
            UI.insertText('\n' + md.trim() + '\n');

        } catch (e) {
            console.error(e);
            alert(`Inspiration failed: ${e.message}`);
        } finally {
            // 恢复按钮状态
            if (btn) {
                btn.innerHTML = originalHTML;
                btn.disabled = false;
                if(typeof lucide !== 'undefined') lucide.createIcons();
            }
        }
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
                        store.transaction.oncomplete = () => { alert("✅ Restored!"); this.updateStats(); UI.refreshAll(); };
                    } 
                } catch(err) { alert("❌ Invalid JSON"); } 
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
        catch (e) { alert("PDF Error: " + e.message); } finally { document.body.removeChild(el); }
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