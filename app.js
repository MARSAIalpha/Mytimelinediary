const DEFAULT_KEY = "AIzaSyCdaSTI8ssWQkr5JTBc7IksQ5il8loNqTQ";
const I18N = { 
    en: { 
        btn_timeline: "TIMELINE", btn_calendar: "CALENDAR", btn_dashboard: "DASHBOARD", 
        future: "Future Unwritten", origin: "The Beginning", 
        nav_timeline: "TIMELINE", nav_dashboard: "DASHBOARD", nav_calendar: "CALENDAR", 
        dashboard_title: "Life Rhythm", dashboard_tasks: "Pending Tasks", stat_nutrition: "Nutrition (Week)", 
        empty_gallery: "No images.", info_title: "Settings & Guide", data_title: "Data Management", 
        storage_title: "Storage Usage", btn_backup: "Backup JSON", btn_restore: "Restore", 
        btn_reset: "Reset All Data", btn_save: "Save", btn_delete: "Delete", btn_edit: "Edit", 
        btn_cancel: "Cancel", btn_export: "Export MD", btn_consult: "Start Divination", 
        label_zodiac: "Zodiac", label_birth: "Birth Date", ai_title: "AI Oracle", 
        delete_title: "Delete Memory?", delete_desc: "This action cannot be undone.", archive_title: "Archive", 
        empty_month: "No entries.", label_all_entries: "All Entries", 
        doc_f1: "Flow: Timeline stream.", doc_f2: "Vision: Food Analysis.", doc_f4: "Oracle: AI Advice.", 
        label_font_size: "Font Size", btn_select: "Select", btn_cancel_select: "Cancel",
        cat_exercise: "Exercise", cat_sleep: "Sleep", cat_focus: "Focus", cat_meditation: "Meditation",
        lbl_target: "Target", lbl_actual: "Actual", lbl_daily_goals: "Daily Goals", 
        label_personal_info: "Personal Info", label_manual: "Manual",
        btn_photo: "Photo", btn_inspire: "Inspire", btn_todo: "Todo", 
        btn_analyze: "Food", btn_vision: "Vision", btn_remove: "Remove",
        filter_anni: "ANN", filter_holiday: "HOL", filter_diary: "DIARY",
        type_diary: "Diary", type_routine: "Routine", type_anni: "Anniversary",
        label_recurrence: "Recurrence", rec_none: "One-off", rec_daily: "Daily", rec_weekly: "Weekly", rec_workday: "Workdays", rec_yearly: "Yearly",
        label_track: "Track:", ph_title: "Title...", ph_content: "Start writing...", btn_ask_again: "Ask Again", label_est: "Est. 2025",
        btn_coach: "Life Coach"
    }, 
    zh: { 
        btn_timeline: "时间轴", btn_calendar: "日历", btn_dashboard: "仪表盘", 
        future: "未知未来", origin: "起源之时", 
        nav_timeline: "时间轴", nav_dashboard: "仪表盘", nav_calendar: "日历", 
        dashboard_title: "生活韵律", dashboard_tasks: "待办事项", stat_nutrition: "本周营养", 
        empty_gallery: "无图片", info_title: "设置与指南", data_title: "数据管理", 
        storage_title: "存储空间", btn_backup: "备份 JSON", btn_restore: "恢复数据", 
        btn_reset: "重置所有", btn_save: "保存", btn_delete: "删除", btn_edit: "编辑", 
        btn_cancel: "取消", btn_export: "导出 MD", btn_consult: "开始推演", 
        label_zodiac: "星座", label_birth: "生日", ai_title: "AI 预言", 
        delete_title: "删除回忆？", delete_desc: "此操作无法撤销。", archive_title: "归档", 
        empty_month: "无记录。", label_all_entries: "所有条目", 
        doc_f1: "时光流: 像河流一样记录生活。", doc_f2: "AI 视觉: 识别食物热量。", doc_f4: "预言家: AI算命。", 
        label_font_size: "字体大小", btn_select: "选择", btn_cancel_select: "取消",
        cat_exercise: "运动", cat_sleep: "睡眠", cat_focus: "专注", cat_meditation: "冥想",
        lbl_target: "目标", lbl_actual: "实际", lbl_daily_goals: "每日目标", 
        label_personal_info: "个人信息", label_manual: "使用说明",
        btn_photo: "照片", btn_inspire: "灵感", btn_todo: "待办", 
        btn_analyze: "热量", btn_vision: "生文", btn_remove: "移除",
        filter_anni: "纪念日", filter_holiday: "节假日", filter_diary: "日记",
        type_diary: "日记", type_routine: "习惯", type_anni: "纪念日",
        label_recurrence: "重复", rec_none: "一次性", rec_daily: "每天", rec_weekly: "每周", rec_workday: "工作日", rec_yearly: "每年",
        label_track: "追踪:", ph_title: "标题...", ph_content: "开始记录...", btn_ask_again: "再次询问", label_est: "始于 2025",
        btn_coach: "人生教练"
    } 
};

const TIME_THEMES = { dawn: { bgGradient: ['#E6F0FF', '#FFF8E1'], particleConfig: { type: 'mist', count: 50 } }, day: { bgGradient: ['#A0E6FF', '#FFFACD'], particleConfig: { type: 'beam', count: 15 } }, dusk: { bgGradient: ['#24243e', '#FFC3A0'], particleConfig: { type: 'none', count: 0 } }, night: { bgGradient: ['#0B1026', '#1F2F4F'], particleConfig: { type: 'star', count: 80 } } };
let currentThemeConfig = TIME_THEMES.day.particleConfig; let currentWeatherState = 'sun';

const ParticleSystem = {
    canvas: null, ctx: null, particles: [], width: 0, height: 0, running: false, dpr: 1,
    init: function() { 
        this.canvas = document.getElementById('world-canvas'); 
        this.ctx = this.canvas.getContext('2d'); 
        this.dpr = window.devicePixelRatio || 1; 
        this.resize(); 
        window.addEventListener('resize', () => this.resize()); 
        this.switchTheme('day'); 
        this.running = true; 
        this.animate(); 
    },
    resize: function() { 
        this.width = window.innerWidth; 
        this.height = window.innerHeight; 
        this.canvas.width = this.width * this.dpr; 
        this.canvas.height = this.height * this.dpr; 
        this.ctx.scale(this.dpr, this.dpr); 
    },
    setWeather: function(weather) { currentWeatherState = weather; this.resetParticles(); },
    switchTheme: function(themeKey) { const theme = TIME_THEMES[themeKey] || TIME_THEMES.day; document.documentElement.style.setProperty('--bg-start', theme.bgGradient[0]); document.documentElement.style.setProperty('--bg-end', theme.bgGradient[1]); currentThemeConfig = theme.particleConfig; this.resetParticles(); },
    resetParticles: function() { 
        this.particles = []; 
        const baseCount = currentWeatherState==='rain' ? 200 : currentThemeConfig.count; 
        const count = baseCount * (window.innerWidth < 600 ? 0.5 : 1); 
        for(let i=0; i<count; i++) this.particles.push(new Particle(this.width, this.height)); 
    },
    animate: function() { if(!this.running) return; this.ctx.clearRect(0, 0, this.width, this.height); this.particles.forEach(p => { p.update(); p.draw(this.ctx); }); requestAnimationFrame(() => this.animate()); }
};
class Particle {
    constructor(w, h) { this.cw = w; this.ch = h; this.reset(true); }
    reset(initial) { 
        this.type = currentWeatherState==='rain' ? 'rain' : currentThemeConfig.type;
        this.x = Math.random() * this.cw; 
        this.y = Math.random() * this.ch;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.speed = Math.random() * 0.5 + 0.2;
        
        if(this.type === 'star') {
            this.size = Math.random() * 1.5 + 0.5;
            this.blinkSpeed = Math.random() * 0.002 + 0.0005; 
            this.blinkOffset = Math.random() * Math.PI * 2;
            this.speed = 0; 
        } else if (this.type === 'rain') {
            this.y = initial ? Math.random() * this.ch : -20;
            this.speed = Math.random() * 8 + 8; 
            this.wind = -1; 
        } else if (this.type === 'beam') {
            this.width = Math.random() * 100 + 50;
            this.angle = 45 * (Math.PI/180);
        }
    }
    update() {
        if(this.type === 'star') {
            this.opacity = 0.4 + Math.sin(Date.now() * this.blinkSpeed + this.blinkOffset) * 0.3;
        } else if (this.type === 'rain') {
            this.y += this.speed; this.x += this.wind;
            if (this.y > this.ch) this.reset(false);
        } else if (this.type === 'beam') {
            this.x += this.speed * 0.5; this.y += this.speed * 0.2;
            if(this.x > this.cw || this.y > this.ch) { this.x = -100; this.y = Math.random() * this.ch; }
        } else if (this.type === 'mist') {
            this.x += Math.sin(this.y * 0.01) * 0.5;
            this.y -= this.speed;
            if(this.y < 0) this.reset(false);
        }
    }
    draw(ctx) { 
        ctx.fillStyle = `rgba(255,255,255,${this.opacity})`; 
        if(this.type==='rain') { 
            ctx.strokeStyle=`rgba(255,255,255,${this.opacity * 0.6})`; ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(this.x,this.y); ctx.lineTo(this.x+1,this.y+15); ctx.stroke(); 
        } else if (this.type === 'beam') {
            let g = ctx.createLinearGradient(this.x, this.y, this.x+50, this.y+50);
            g.addColorStop(0, `rgba(255,255,255,0)`); g.addColorStop(0.5, `rgba(255,255,255,${this.opacity*0.2})`); g.addColorStop(1, `rgba(255,255,255,0)`);
            ctx.fillStyle = g; ctx.beginPath(); ctx.arc(this.x, this.y, this.width, 0, Math.PI*2); ctx.fill();
        } else if (this.type === 'star') {
            ctx.shadowBlur = 5; ctx.shadowColor = "white";
            ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI*2); ctx.fill();
            ctx.shadowBlur = 0;
        } else if (this.type !== 'none') { 
            ctx.beginPath(); ctx.arc(this.x, this.y, this.type==='mist'?15:2, 0, Math.PI*2); ctx.fill(); 
        } 
    }
}

const UI = {
    DEFAULT_KEY: "AIzaSyCdaSTI8ssWQkr5JTBc7IksQ5il8loNqTQ",
    state: { mood: 'smile', weather: 'sun', calendarDate: new Date(), currentDetailId: null, tempImage: null, lang: 'en', currentRotation: 0, persona: 'western', filters: {anni:true, holiday:true, normal:true}, selectedIds: new Set(), selectionMode: false, goals: {sleep:8, focus:60, exercise:30, meditation:15, cals:2000} },
    cachedEntryItems: [],
    init: async function() { 
        await DataManager.init(); ParticleSystem.init(); lucide.createIcons(); this.initScrollObserver(); 
        if(localStorage.getItem('app_lang')) this.setLanguage(localStorage.getItem('app_lang')); else this.refreshAll(); 
        if(localStorage.getItem('user_goals')) this.state.goals = JSON.parse(localStorage.getItem('user_goals'));
        this.updateCelestialPosition(12); 
        document.getElementById('goal-sleep').value = this.state.goals.sleep;
        document.getElementById('goal-focus').value = this.state.goals.focus;
        document.getElementById('goal-exercise').value = this.state.goals.exercise;
        document.getElementById('goal-meditation').value = this.state.goals.meditation || 15;
        document.getElementById('goal-cals').value = this.state.goals.cals;
    },
    saveGoals: function() {
        this.state.goals = {
            sleep: Number(document.getElementById('goal-sleep').value) || 8,
            focus: Number(document.getElementById('goal-focus').value) || 60,
            exercise: Number(document.getElementById('goal-exercise').value) || 30,
            meditation: Number(document.getElementById('goal-meditation').value) || 15,
            cals: Number(document.getElementById('goal-cals').value) || 2000
        };
        localStorage.setItem('user_goals', JSON.stringify(this.state.goals));
        this.renderDashboard();
    },
    refreshAll: function() { this.renderTimeline(); this.renderCalendar(); },
    toggleFilter: function(type) { this.state.filters[type] = !this.state.filters[type]; document.querySelector(`.f-${type}`).classList.toggle('active', this.state.filters[type]); this.renderTimeline(); },
    
    switchView: function(v) {
        ['timeline', 'calendar', 'dashboard'].forEach(k => document.getElementById(`btn-${k}`).classList.remove('active')); 
        document.getElementById(`btn-${v}`).classList.add('active');
        
        document.getElementById('view-timeline').classList.replace('active-view', 'hidden-view'); 
        document.getElementById('view-calendar').classList.replace('active-view', 'hidden-view'); 
        document.getElementById('view-dashboard').classList.replace('active-view', 'hidden-view'); 
        document.getElementById('focus-hud').classList.add('opacity-0');

        // FORCE RESET SELECTION & HIDE EXPORT BAR
        this.state.selectionMode = false;
        this.state.selectedIds.clear();
        document.getElementById('export-bar').classList.add('hidden');
        if(document.getElementById('btn-select-mode')) {
             const t = I18N[this.state.lang];
             document.getElementById('select-btn-text').innerText = t.btn_select || "Select";
             document.getElementById('btn-select-mode').classList.replace('bg-red-500', 'bg-[var(--text)]');
             document.getElementById('btn-select-mode').classList.replace('text-white', 'text-[var(--card-bg)]');
        }

        document.getElementById('main-container').scrollTop = 0;
        
        const isTl = (v === 'timeline');
        document.getElementById('center-guide-layer').style.opacity = isTl ? '1' : '0'; 
        
        // --- FIX: Toggle Visibility of FABs and Filter ---
        const fabAi = document.querySelector('.fab-ai-btn');
        const fabPen = document.querySelector('.fab-btn');
        const filterGroup = document.getElementById('filter-fab-group');

        if (isTl) {
            fabAi?.classList.remove('hidden');
            fabPen?.classList.remove('hidden');
            filterGroup?.classList.remove('hidden');
        } else {
            fabAi?.classList.add('hidden');
            fabPen?.classList.add('hidden');
            filterGroup?.classList.add('hidden');
        }
        // -----------------------------------------------

        if(isTl) { 
            document.getElementById('view-timeline').classList.replace('hidden-view','active-view'); 
            document.getElementById('focus-hud').classList.remove('opacity-0'); 
            
            // FIX: Delay slightly to allow CSS display:block to apply, THEN re-cache the elements
            setTimeout(() => { 
                this.cachedEntryItems = Array.from(document.querySelectorAll('.entry-item')); 
                this.handleScroll(); 
                this.drawTaskConnectors(); 
            }, 150); 
        } 
        else if (v === 'calendar') { 
            document.getElementById('view-calendar').classList.replace('hidden-view','active-view'); 
            this.renderCalendar(); 
        } 
        else if (v === 'dashboard') { 
            document.getElementById('view-dashboard').classList.replace('hidden-view','active-view'); 
            this.renderDashboard(); 
        }
    },
    switchSubView: function(v) { 
        ['grid','gallery','data'].forEach(k=>{document.getElementById(`btn-sub-${k}`).classList.remove('active');}); document.getElementById(`btn-sub-${v}`).classList.add('active');
        document.getElementById('calendar-container').classList.add('hidden'); document.getElementById('gallery-container').classList.add('hidden'); document.getElementById('data-container').classList.add('hidden');
        if(v==='grid') document.getElementById('calendar-container').classList.remove('hidden'); else if(v==='gallery') { document.getElementById('gallery-container').classList.remove('hidden'); this.renderGallery(); } else if(v==='data') { document.getElementById('data-container').classList.remove('hidden'); this.renderDataList(); }
    },
    renderGallery: async function() {
        const c = document.getElementById('gallery-grid-view'); c.innerHTML = ''; const all = await DataManager.getAll(); const imgs = all.filter(e => e.img).sort((a,b) => b.ts - a.ts);
        if(imgs.length === 0) { document.getElementById('gallery-empty').classList.remove('hidden'); return; }
        document.getElementById('gallery-empty').classList.add('hidden');
        let lastDate = '';
        imgs.forEach(e => {
            const dateStr = new Date(e.ts).toLocaleDateString(this.state.lang === 'zh' ? 'zh-CN' : 'en-US', {year:'numeric', month:'long', day:'numeric'});
            if (dateStr !== lastDate) { const h = document.createElement('div'); h.className = 'gallery-date-header'; h.innerText = dateStr; c.appendChild(h); lastDate = dateStr; }
            const div = document.createElement('div'); div.className = 'gallery-item'; div.innerHTML = `<img src="${e.img}" loading="lazy">`; div.onclick = () => UI.openDetail(e); c.appendChild(div);
        });
    },
    toggleSelectionMode: function() {
        this.state.selectionMode = !this.state.selectionMode;
        const btnText = document.getElementById('select-btn-text');
        const t = I18N[this.state.lang];
        if (this.state.selectionMode) {
            btnText.innerText = t.btn_cancel_select || "Cancel";
            document.getElementById('export-bar').classList.remove('hidden');
            document.getElementById('btn-select-mode').classList.replace('bg-[var(--text)]', 'bg-red-500');
            document.getElementById('btn-select-mode').classList.replace('text-[var(--card-bg)]', 'text-white');
        } else {
            this.state.selectedIds.clear();
            btnText.innerText = t.btn_select || "Select";
            document.getElementById('export-bar').classList.add('hidden');
            document.getElementById('btn-select-mode').classList.replace('bg-red-500', 'bg-[var(--text)]');
            document.getElementById('btn-select-mode').classList.replace('text-white', 'text-[var(--card-bg)]');
            this.renderDataList(); document.getElementById('selected-count').innerText = '0';
        }
    },
    deleteSelectedEntries: async function() {
        if(this.state.selectedIds.size === 0) return;
        if(confirm(`Delete ${this.state.selectedIds.size} entries?`)) {
            for(let id of this.state.selectedIds) await DataManager.delete(id);
            this.toggleSelectionMode();
        }
    },
    handleEntryClick: function(id) {
        this.openDetailById(id);
    },
    renderDataList: async function() {
        const list = document.getElementById('archive-list'); 
        list.innerHTML = ''; 
        const allData = await DataManager.getAll();
        
        allData.sort((a,b) => b.ts - a.ts).forEach(e => {
            const div = document.createElement('div'); 
            div.className = 'archive-item'; 
            const isSel = this.state.selectedIds.has(e.id); 
            
            if(isSel) div.classList.add('selected');
            
            if(this.state.selectionMode) {
                div.innerHTML = `<div class="archive-checkbox pointer-events-none">${isSel?'☑':'☐'}</div><div class="text-xs font-bold flex-1 pointer-events-none">${new Date(e.ts).toLocaleDateString()} - ${e.title}</div>`;
                div.onclick = (evt) => { 
                    evt.stopPropagation();
                    evt.preventDefault();
                    if(this.state.selectedIds.has(e.id)) { 
                        this.state.selectedIds.delete(e.id); 
                        div.classList.remove('selected'); 
                        div.querySelector('.archive-checkbox').innerText='☐'; 
                    } else { 
                        this.state.selectedIds.add(e.id); 
                        div.classList.add('selected'); 
                        div.querySelector('.archive-checkbox').innerText='☑'; 
                    } 
                    const count = this.state.selectedIds.size; 
                    document.getElementById('selected-count').innerText = count; 
                };
            } else {
                div.innerHTML = `<div class="text-xs font-bold flex-1 pointer-events-none">${new Date(e.ts).toLocaleDateString()} - ${e.title}</div>`;
                div.onclick = () => UI.openDetail(e);
            }
            list.appendChild(div);
        });
    },
    exportSelectedMarkdown: async function() {
        if (this.state.selectedIds.size === 0) return alert("Select items first"); const allData = await DataManager.getAll(); const selected = allData.filter(e => this.state.selectedIds.has(e.id)); await DataManager.exportSelectedMarkdown(new Set(selected.map(e=>e.id)));
    },
    renderTimeline: async function() {
        const c = document.getElementById('diary-list'); c.innerHTML = ''; const layer = document.getElementById('task-lines-layer'); if(layer) layer.innerHTML = ''; else { const l = document.createElement('div'); l.id = 'task-lines-layer'; l.className = 'absolute top-0 left-0 w-full h-full pointer-events-none z-0'; c.appendChild(l); }
        const allData = await DataManager.getAll(); let entries = allData.sort((a, b) => b.ts - a.ts); entries = entries.filter(e => { if(e.isHoliday) return this.state.filters.holiday; if(e.anni) return this.state.filters.anni; return this.state.filters.normal; });
        if(entries.length === 0) { c.innerHTML += `<div class="text-center opacity-50 py-20">Tap + to start.</div>`; return; }
        
        // Mood Style Configuration
        const MOOD_STYLES = {
            smile:    { color: '#f59e0b', fill: '#fef3c7', icon: 'smile' },
            meh:      { color: '#64748b', fill: '#f1f5f9', icon: 'meh' },
            frown:    { color: '#3b82f6', fill: '#dbeafe', icon: 'frown' },
            heart:    { color: '#ec4899', fill: '#fce7f3', icon: 'heart' },
            sparkles: { color: '#8b5cf6', fill: '#ede9fe', icon: 'sparkles' }
        };

        const catState = { 'Exercise': null, 'Sleep': null, 'Focus': null, 'Meditation': null };
        const now = Date.now();
        
        entries.forEach(i => {
            const d = new Date(i.ts); const div = document.createElement('div'); div.className = `entry-item`; div.dataset.ts = i.ts; div.id = `entry-${i.id}`; div.dataset.hour = d.getHours(); div.dataset.day = d.getDate(); div.dataset.month = d.toLocaleString(this.state.lang === 'zh' ? 'zh-CN' : 'en-US', {month:'short'}); div.dataset.year = d.getFullYear(); div.dataset.time = this.formatTime(d); div.dataset.weather = i.weather || 'sun';
            if (i.isTask) { div.dataset.isTask = true; div.dataset.taskType = i.taskType; div.dataset.taskCat = i.taskCat; }
            
            let activeColor = '#f59e0b'; let extraHtml = ''; let thumbHtml = i.img ? `<div class="card-thumb-col"><img src="${i.img}" class="card-thumb-img"></div>` : '';
            let cardClass = '';
            if (i.mood === 'sparkles') cardClass += ' glow-purple';
            
            if (i.isHoliday) { activeColor = '#22c55e'; cardClass+='card-holiday'; extraHtml += `<div class="holiday-badge anni-badge text-[0.6rem] mb-1 px-1 rounded font-bold uppercase">Festival</div>`; }
            if (i.recurrence && i.recurrence !== 'none') { activeColor = '#eab308'; cardClass+='card-task'; extraHtml += `<div class="inline-block bg-yellow-100 text-yellow-600 text-[0.6rem] px-2 rounded font-bold uppercase tracking-wide mr-1"><i data-lucide="repeat" class="inline w-3 h-3"></i> ${i.recurrence}</div>`; }
            
            if (i.anni) {
                const diffTime = i.ts - now;
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
                if (diffDays > 0) extraHtml += `<div class="anni-badge anni-future-badge">${diffDays} Days Until</div>`;
                else extraHtml += `<div class="anni-badge anni-past-badge">${Math.abs(diffDays)} Days Since</div>`;
            }

            if (i.isTask) { if (i.taskCat === 'Exercise') activeColor = '#ef4444'; if (i.taskCat === 'Sleep') activeColor = '#3b82f6'; if (i.taskCat === 'Focus') activeColor = '#10b981'; if (i.taskCat === 'Meditation') activeColor = '#a855f7'; }
            if (i.calories) { extraHtml += `<div class="inline-block bg-orange-100 text-orange-600 text-[0.6rem] px-2 rounded font-bold uppercase tracking-wide mr-1"><i data-lucide="utensils" class="inline w-3 h-3"></i> ${i.calories} kcal</div>`; }
            if (i.isTask && !catState[i.taskCat]) { catState[i.taskCat] = i.taskType; if (i.taskType === 'start') { extraHtml += `<div class="mt-2 pt-2 border-t border-[var(--line)]"><button onclick="event.stopPropagation(); UI.endTask('${i.taskCat}')" class="task-end-btn btn-end-${i.taskCat}"><i data-lucide="square" class="w-3 h-3 fill-current"></i> End ${i.taskCat}</button></div>`; } }
            
            div.style.setProperty('--node-active-color', activeColor);
            
            const mStyle = MOOD_STYLES[i.mood] || MOOD_STYLES.smile;
            const moodHtml = `<div class="card-mood-sticker" style="position:absolute; top:0.8rem; right:0.8rem;">
                <i data-lucide="${mStyle.icon}" style="width:1.2rem; height:1.2rem; color:${mStyle.color}; fill:${mStyle.fill}; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));"></i>
            </div>`;

            div.innerHTML = `<div class="timeline-node-wrapper"><div class="timeline-node"></div></div><div class="entry-card-wrapper"><div class="entry-card ${cardClass}" onclick="UI.handleEntryClick(${i.id})" style="${!i.img ? 'padding-left:1.2rem' : ''}">${thumbHtml}<div class="card-main-col">${moodHtml}<div class="flex flex-wrap gap-2 mb-1">${extraHtml}</div><h3 class="text-xl font-bold text-[var(--text)] font-display leading-tight mb-2 line-clamp-2 pr-6">${i.title}</h3><p class="text-sm text-[var(--text)]/70 font-serif leading-relaxed line-clamp-2">${i.content.replace(/<[^>]*>/g, '').substring(0,80)}</p></div></div></div>`;
            c.appendChild(div);
        });
        lucide.createIcons(); 
        this.cachedEntryItems = Array.from(document.querySelectorAll('.entry-item')); 
        setTimeout(() => { this.handleScroll(); this.drawTaskConnectors(); }, 150);
    },
    drawTaskConnectors: function() {
        const layer = document.getElementById('task-lines-layer'); if (!layer) return; layer.innerHTML = ''; const entries = this.cachedEntryItems; if (!entries.length) return; const catColors = { 'Exercise': 'linear-gradient(to bottom, #ef4444, #fca5a5)', 'Sleep': 'linear-gradient(to bottom, #3b82f6, #93c5fd)', 'Focus': 'linear-gradient(to bottom, #10b981, #6ee7b7)', 'Meditation': 'linear-gradient(to bottom, #a855f7, #d8b4fe)' }; const getCenterY = (el) => { return el.offsetTop + el.offsetHeight / 2; }; 
        entries.forEach(endNode => { if (endNode.dataset.taskType === 'end') { const cat = endNode.dataset.taskCat; let startNode = null; for(let i = entries.indexOf(endNode) + 1; i < entries.length; i++) { const candidate = entries[i]; if (candidate.dataset.taskType === 'start' && candidate.dataset.taskCat === cat) { startNode = candidate; break; } if (candidate.dataset.taskType === 'end' && candidate.dataset.taskCat === cat) break; } if (startNode) { const endY = getCenterY(endNode); const startY = getCenterY(startNode); const height = Math.abs(startY - endY); const diffMs = parseInt(endNode.dataset.ts) - parseInt(startNode.dataset.ts); const hrs = Math.floor(diffMs / 3600000); const mins = Math.round((diffMs % 3600000) / 60000); const line = document.createElement('div'); line.className = 'task-highlight-line'; line.style.top = `${endY}px`; line.style.height = `${height}px`; line.style.background = catColors[cat] || '#ccc'; line.innerHTML = `<div class="task-line-label label-mid">${hrs > 0 ? hrs + 'h ' : ''}${mins}m</div>`; layer.appendChild(line); } } });
    },
    initScrollObserver: function() { const main = document.getElementById('main-container'); let ticking = false; main.addEventListener('scroll', () => { if (!ticking) { window.requestAnimationFrame(() => { this.handleScroll(); ticking = false; }); ticking = true; } }, { passive: true }); },
    handleScroll: function() {
        const entries = this.cachedEntryItems; if(!entries || entries.length === 0) return; const viewCenter = window.innerHeight / 2; let closest = null; let minDiff = Infinity; let closestRawDiff = 0;
        entries.forEach(el => { const rect = el.getBoundingClientRect(); const dist = Math.abs(rect.top + rect.height/2 - viewCenter); if(dist < minDiff) { minDiff = dist; closest = el; closestRawDiff = rect.top + rect.height/2 - viewCenter; } el.classList.remove('active-focus'); const card = el.querySelector('.entry-card'); const range = 400; let scale = 0.85; let opacity = 0.5; if (dist < range) { const ratio = 1 - (dist / range); const ease = ratio * ratio; scale = 0.85 + (ease * 0.2); opacity = 0.5 + (ease * 0.5); } if (card) { 
             if(!card.classList.contains('selected')) { card.style.transform = `scale(${scale})`; card.style.opacity = opacity; card.style.zIndex = dist < 60 ? 50 : 1; } else { card.style.opacity = 1; card.style.zIndex = 50; }
        } });
        if(closest) {
            closest.classList.add('active-focus'); const cursor = document.getElementById('beam-cursor'); 
            const rect = closest.getBoundingClientRect();
            const magnetY = rect.top + rect.height/2 - viewCenter;
            if (Math.abs(magnetY) < 50) {
                cursor.style.top = `calc(50% + ${magnetY}px)`;
                document.getElementById('center-guide-layer').style.transform = `translateY(${magnetY}px)`; 
            } else {
                cursor.style.top = `50%`;
                document.getElementById('center-guide-layer').style.transform = `translateY(0px)`;
            }
            
            const activeColor = closest.style.getPropertyValue('--node-active-color') || '#f59e0b'; document.documentElement.style.setProperty('--current-beam-color', activeColor);
            const day = String(closest.dataset.day).padStart(2, '0'); document.getElementById('hud-day').innerText = day; document.getElementById('hud-month-year').innerText = `${closest.dataset.month} ${closest.dataset.year}`; const timeEl = document.getElementById('hud-time'); const newTime = closest.dataset.time; if (timeEl.innerText !== newTime) { timeEl.classList.add('hud-time-updating'); setTimeout(() => { timeEl.innerText = newTime; timeEl.classList.remove('hud-time-updating'); }, 150); }
            this.updateCelestialPosition(parseInt(closest.dataset.hour)); if(closest.dataset.weather) ParticleSystem.setWeather(closest.dataset.weather);
        }
    },
    quickSaveTask: async function(category) { const payload = { ts: Date.now(), title: `${category} Started`, content: `Started ${category} session.`, mood: 'smile', weather: UI.state.weather, isTask: true, taskType: 'start', taskCat: category, img: null }; await DataManager.add(payload); UI.closeEditor(); },
    endTask: async function(category) { if(confirm(`End ${category} session?`)) { const payload = { ts: Date.now(), title: `${category} Finished`, content: `Completed ${category} session.`, mood: 'smile', weather: UI.state.weather, isTask: true, taskType: 'end', taskCat: category, img: null }; await DataManager.add(payload); } },
    updateCelestialPosition: function(hour) { const isMoonTime = (hour >= 19 || hour < 5); const targetAngle = isMoonTime ? 180 : 0; let delta = targetAngle - (this.state.currentRotation % 360); if (delta > 180) delta -= 360; if (delta < -180) delta += 360; this.state.currentRotation += delta; const wheel = document.getElementById('orbit-wheel'); if(wheel) wheel.style.transform = `rotate(${this.state.currentRotation}deg)`; let themeKey = (hour >= 5 && hour < 7) ? 'dawn' : (hour >= 7 && hour < 17) ? 'day' : (hour >= 17 && hour < 19) ? 'dusk' : 'night'; if(document.body.getAttribute('data-theme') !== themeKey) { document.body.setAttribute('data-theme', themeKey); ParticleSystem.switchTheme(themeKey); } },
    analyzeFoodImage: async function() {
        const img = UI.state.tempImage; if (!img) return alert("Upload an image first."); const k = document.getElementById('user-api-key').value || UI.DEFAULT_KEY; const btn = document.querySelector('button[onclick="UI.analyzeFoodImage()"]'); const originalText = btn.innerText; btn.innerText = "...";
        try { const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${k}`, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({contents:[{parts:[{text: `Identify food. Return JSON: {"food": "Name", "calories": 500, "desc": "Short description"}. No markdown.`},{inlineData: {mimeType: img.split(';')[0].split(':')[1], data: img.split(',')[1]}}]}]}) }); const json = await res.json(); const txt = json.candidates[0].content.parts[0].text.replace(/```json|```/g, '').trim(); const data = JSON.parse(txt); document.getElementById('editor-title').value = data.food; document.getElementById('editor-content').value = data.desc; document.getElementById('editor-calories').value = data.calories; alert(`Identified: ${data.food} (~${data.calories} kcal)`); } catch(e) { console.error(e); alert("AI Analysis Failed"); } finally { btn.innerText = originalText; }
    },
    renderDashboard: async function() {
        const allData = await DataManager.getAll(); const now = new Date(); const weekData = allData.filter(e => e.ts > (now.getTime() - 604800000)); const chrono = [...weekData].sort((a,b) => a.ts - b.ts);
        const calculateDuration = (cat) => { let total = 0; chrono.forEach((e, idx) => { if(e.isTask && e.taskCat === cat && e.taskType === 'end') { for(let i=idx-1; i>=0; i--) { if(chrono[i].isTask && chrono[i].taskCat === cat && chrono[i].taskType === 'start') { total += (e.ts - chrono[i].ts); break; } } } }); return total; };
        
        const goals = this.state.goals;
        document.getElementById('target-exercise-disp').innerText = goals.exercise;
        document.getElementById('target-sleep-disp').innerText = goals.sleep;
        document.getElementById('target-focus-disp').innerText = goals.focus;
        document.getElementById('target-meditation-disp').innerText = goals.meditation || 15;
        document.getElementById('target-calories-disp').innerText = goals.cals;

        const msToMin = (ms) => Math.round(ms / 60000);
        const msToHr = (ms) => (ms / 3600000).toFixed(1);

        const durEx = calculateDuration('Exercise'); const durSleep = calculateDuration('Sleep'); const durFocus = calculateDuration('Focus'); const durMed = calculateDuration('Meditation');

        document.getElementById('stat-exercise').innerText = `${msToMin(durEx)}m`; document.getElementById('bar-exercise').style.width = `${Math.min((msToMin(durEx)/goals.exercise)*100, 100)}%`;
        document.getElementById('stat-sleep').innerText = `${msToHr(durSleep)}h`; document.getElementById('bar-sleep').style.width = `${Math.min((msToHr(durSleep)/goals.sleep)*100, 100)}%`;
        document.getElementById('stat-focus').innerText = `${msToMin(durFocus)}m`; document.getElementById('bar-focus').style.width = `${Math.min((msToMin(durFocus)/goals.focus)*100, 100)}%`;
        document.getElementById('stat-meditation').innerText = `${msToMin(durMed)}m`; document.getElementById('bar-meditation').style.width = `${Math.min((msToMin(durMed)/(goals.meditation||15))*100, 100)}%`;
        
        const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']; const dailyCals = new Array(7).fill(0); let weeklyTotal = 0; weekData.forEach(e => { if(e.calories) { const dayIdx = new Date(e.ts).getDay(); dailyCals[dayIdx] += parseInt(e.calories); weeklyTotal += parseInt(e.calories); } });
        document.getElementById('stat-calories-total').innerText = `${weeklyTotal} kcal`; const maxCal = Math.max(...dailyCals, goals.cals + 500); 
        const chartHtml = dailyCals.map((val, idx) => {
            const colorClass = val > goals.cals ? 'bg-red-400' : 'bg-green-400';
            return `<div class="cal-bar-col"><div class="cal-bar-val">${val > 0 ? val : ''}</div><div class="cal-bar-bg"><div class="cal-bar-fill ${colorClass}" style="height: ${(val/maxCal)*100}%"></div></div><div class="cal-label">${days[idx]}</div></div>`;
        }).join(''); 
        document.getElementById('calorie-chart').innerHTML = chartHtml + `<div class="absolute top-0 left-0 w-full h-[1px] border-t border-dashed border-red-300 opacity-50" style="bottom: ${(goals.cals/maxCal)*100}%"></div>`;
        this.renderDashboardTasks(allData); lucide.createIcons();
    },
    
    generateReport: async function() {
        const k = document.getElementById('user-api-key').value || UI.DEFAULT_KEY;
        const zodiac = document.getElementById('oracle-zodiac').value || "Unknown";
        const bazi = document.getElementById('oracle-bazi').value || "Unknown";
        const container = document.getElementById('summary-ai-content');
        const userLang = this.state.lang === 'zh' ? 'Chinese' : 'English';
        
        document.getElementById('oracle-input-view').classList.add('hidden');
        document.getElementById('oracle-result-view').classList.remove('hidden');
        container.innerHTML = '<div class="text-center mt-10"><p class="opacity-70 text-lg">Connecting...</p></div>';
        
        const allData = await DataManager.getAll();
        const sevenDaysAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
        const recentData = allData.filter(e => e.ts > sevenDaysAgo).map(e => `[${new Date(e.ts).toLocaleDateString()}] ${e.title}: ${e.content}`).join('\n');

        let personaPrompt = '';
        
        if (this.state.persona === 'western') {
            if (this.state.lang === 'zh') {
                personaPrompt = `角色：神秘优雅的西方占星师。语调：如诗般优美，提及星辰轨迹。根据星座: ${zodiac}。`;
            } else {
                personaPrompt = `Role: Mystical Western Astrologer. Tone: Poetic, mentioning stars and alignments. Zodiac: ${zodiac}.`;
            }
        } else if (this.state.persona === 'eastern') {
            if (this.state.lang === 'zh') {
                personaPrompt = `角色：隐居山林的得道高人。语调：古朴透彻，自称“贫道”，引用自然意象（风、水）。生辰: ${bazi}。`;
            } else {
                personaPrompt = `Role: Wise Taoist Hermit. Tone: Profound, ancient wisdom, nature metaphors. Birth info: ${bazi}.`;
            }
        } else {
            if (this.state.lang === 'zh') {
                personaPrompt = `角色：顶级人生教练。语调：科学、干练、鼓舞人心。基于行为心理学。`;
            } else {
                personaPrompt = `Role: Elite Life Coach. Tone: Scientific, direct, empowering. Based on behavioral psychology.`;
            }
        }

        const prompt = `
        ${personaPrompt}
        
        Task: Write a personalized letter to the user based on their last 7 days:
        ${recentData.substring(0, 1500)}
        
        Requirements:
        1. **Language**: Strictly ${userLang}.
        2. **Format**: ONE continuous narrative. NO headings like "Part 1" or "Review".
        3. **Flow**: Start by gently reflecting on their past week's journey (achievements or struggles). Then, naturally weave in guidance and predictions for the coming week based on your persona.
        4. **Style**: Immersive and convincing. Make the user feel seen.
        5. **Length**: Concise (approx 150-200 words).
        `;

        try {
            const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${k}`, { 
                method:'POST', headers:{'Content-Type':'application/json'}, 
                body:JSON.stringify({contents:[{parts:[{text: prompt}]}]}) 
            });
            const json = await res.json();
            const mdText = json.candidates[0].content.parts[0].text;
            container.innerHTML = marked.parse(mdText);
        } catch(e) {
            container.innerHTML = "<p class='text-center text-red-400'>Connection faded.</p>";
        }
    },
    openWeeklySummary: function() { 
        document.getElementById('summary-modal').classList.remove('hidden'); 
        document.querySelector('.fab-ai-btn').classList.add('hidden');
        document.querySelector('.fab-btn').classList.add('hidden');
        document.getElementById('filter-fab-group').classList.add('hidden');
    },
    closeWeeklySummary: function() { 
        document.getElementById('summary-modal').classList.add('hidden'); 
        document.querySelector('.fab-ai-btn').classList.remove('hidden');
        document.querySelector('.fab-btn').classList.remove('hidden');
        document.getElementById('filter-fab-group').classList.remove('hidden');
    },
    resetOracle: function() {
        document.getElementById('oracle-input-view').classList.remove('hidden');
        document.getElementById('oracle-result-view').classList.add('hidden');
    },
    saveOracleResult: async function() {
        const content = document.getElementById('summary-ai-content').innerText;
        if(!content || content.length < 10) return;
        const payload = {
            ts: Date.now(),
            title: `🔮 Oracle Report (${new Date().toLocaleDateString()})`,
            content: content,
            mood: 'sparkles',
            weather: UI.state.weather,
            img: null,
            anni: false,
            isTask: false
        };
        await DataManager.add(payload);
        alert("Report saved to Timeline!");
        this.closeWeeklySummary();
    },
    renderDashboardTasks: function(allData) {
        const container = document.getElementById('dashboard-todo-list'); container.innerHTML = '';
        const today = new Date(); const dayOfWeek = today.getDay(); const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
        const tasks = allData.filter(e => e.recurrence && e.recurrence !== 'none');
        const activeTasks = tasks.filter(t => { if (t.recurrence === 'daily') return true; if (t.recurrence === 'weekly') return new Date(t.ts).getDay() === dayOfWeek; if (t.recurrence === 'workday') return !isWeekend; if (t.recurrence === 'yearly') return new Date(t.ts).getDate() === today.getDate() && new Date(t.ts).getMonth() === today.getMonth(); return false; });
        if(activeTasks.length === 0) { container.innerHTML = '<div class="text-sm opacity-50 p-2">No pending tasks.</div>'; return; }
        activeTasks.forEach(t => { 
            const div = document.createElement('div'); 
            div.className = 'todo-item cursor-pointer'; 
            div.innerHTML = `<div class="todo-check"><i data-lucide="circle" class="w-4 h-4"></i></div><div class="todo-text">${t.title}</div>`; 
            div.onclick = () => { 
                const checkEl = div.querySelector('.todo-check');
                const textEl = div.querySelector('.todo-text');
                
                if (textEl.classList.contains('todo-done')) {
                    // Uncheck
                    textEl.classList.remove('todo-done');
                    checkEl.innerHTML = '<i data-lucide="circle" class="w-4 h-4"></i>';
                } else {
                    // Check
                    textEl.classList.add('todo-done');
                    checkEl.innerHTML = '<i data-lucide="check-circle" class="w-4 h-4"></i>';
                }
                lucide.createIcons();
            }; 
            container.appendChild(div); 
        });
    },
    setLanguage: function(lang) { 
        this.state.lang = lang; localStorage.setItem('app_lang', lang); const t = I18N[lang]; 
        document.querySelectorAll('[data-i18n]').forEach(el => { 
            const k = el.getAttribute('data-i18n'); if (t[k]) el.innerText = t[k]; 
        }); 
        document.querySelectorAll('[data-placeholder]').forEach(el => { 
            const k = el.getAttribute('data-placeholder'); if (t[k]) el.placeholder = t[k]; 
        });
        document.getElementById('lang-en').className = lang === 'en' ? "px-4 py-1 rounded-full bg-[var(--primary)] text-white text-xs font-bold" : "px-4 py-1 rounded-full border border-[var(--line)] hover:bg-[var(--primary)] hover:text-white transition-colors text-xs font-bold"; 
        document.getElementById('lang-zh').className = lang === 'zh' ? "px-4 py-1 rounded-full bg-[var(--primary)] text-white text-xs font-bold" : "px-4 py-1 rounded-full border border-[var(--line)] hover:bg-[var(--primary)] hover:text-white transition-colors text-xs font-bold"; 
        this.renderCalendar(); this.renderTimeline(); 
    },
    setPersona: function(p) { this.state.persona = p; 
        ['western', 'eastern', 'coach'].forEach(k => {
            const btn = document.getElementById(`btn-${k}`);
            if (btn) {
                if (k === p) btn.classList.add('active'); 
                else btn.classList.remove('active');
            }
        });
    },
    setEditorType: function(t) {
        document.getElementById('editor-entry-type').value = t;
        ['diary','task','anni'].forEach(k => { 
            const btn = document.getElementById(`type-${k}`);
            btn.classList.replace('bg-[var(--card-bg)]', 'hover:bg-[var(--card-bg)]/50'); 
            btn.classList.remove('shadow-sm', 'text-[var(--text)]'); 
            btn.classList.add('text-[var(--text-sec)]'); 
        });
        
        const activeBtn = document.getElementById(`type-${t}`);
        activeBtn.classList.remove('hover:bg-[var(--card-bg)]/50', 'text-[var(--text-sec)]');
        activeBtn.classList.add('bg-[var(--card-bg)]', 'shadow-sm', 'text-[var(--text)]');
        
        const settingsPanel = document.getElementById('task-settings');
        if (t === 'task' || t === 'anni') {
            settingsPanel.style.display = 'block';
            if (t === 'anni') {
                document.getElementById('editor-recurrence').value = 'yearly';
            } else {
                if(document.getElementById('editor-recurrence').value === 'yearly') {
                     document.getElementById('editor-recurrence').value = 'daily';
                }
            }
        } else {
            settingsPanel.style.display = 'none';
        }
    },
    setFontSize: function(size) { document.body.setAttribute('data-font', size); },
    openEditor: function(dStr, exist) { 
        const m = document.getElementById('editor-modal'), p = document.getElementById('editor-panel'); this.state.tempImage=null; document.getElementById('image-preview-area').classList.add('hidden'); 
        if(exist) { 
            const d=new Date(exist.ts); document.getElementById('editor-id').value=exist.id; document.getElementById('editor-title').value=exist.title; document.getElementById('editor-content').value=exist.content; document.getElementById('editor-date').value=d.toISOString().split('T')[0]; document.getElementById('editor-time').value=this.formatTime(d); document.getElementById('editor-calories').value = exist.calories || '';
            if(exist.recurrence && exist.recurrence !== 'none') { this.setEditorType('task'); document.getElementById('editor-recurrence').value = exist.recurrence; } else if (exist.anni) { this.setEditorType('anni'); } else { this.setEditorType('diary'); }
            if(exist.img){ this.state.tempImage=exist.img; document.getElementById('preview-img').src=exist.img; document.getElementById('image-preview-area').classList.remove('hidden'); } 
        } else { 
            const n=new Date(); document.getElementById('editor-id').value=''; document.getElementById('editor-title').value=''; document.getElementById('editor-content').value=''; document.getElementById('editor-calories').value=''; document.getElementById('editor-date').value=dStr||n.toISOString().split('T')[0]; document.getElementById('editor-time').value=n.toTimeString().slice(0,5); this.setEditorType('diary');
        } 
        m.classList.remove('hidden'); setTimeout(()=>p.classList.remove('translate-y-full'),10); 
    },
    closeEditor: function() { document.getElementById('editor-panel').classList.add('translate-y-full'); setTimeout(()=>document.getElementById('editor-modal').classList.add('hidden'),300); },
    selectMood: function(m) { this.state.mood = m; document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('bg-[var(--primary)]', 'text-white', 'shadow-md')); document.getElementById(`mood-${m}`)?.classList.add('bg-[var(--primary)]', 'text-white', 'shadow-md'); },
    selectWeather: function(w) { this.state.weather = w; document.querySelectorAll('.weather-btn').forEach(b => b.classList.remove('bg-[var(--primary)]', 'text-white', 'shadow-md')); document.getElementById(`weather-${w}`)?.classList.add('bg-[var(--primary)]', 'text-white', 'shadow-md'); ParticleSystem.setWeather(w); },
    triggerImageUpload: () => document.getElementById('image-input').click(),
    handleImageUpload: function(i) { if(i.files[0]) { const r = new FileReader(); r.onload=(e)=>{this.state.tempImage=e.target.result; document.getElementById('preview-img').src=e.target.result; document.getElementById('image-preview-area').classList.remove('hidden');}; r.readAsDataURL(i.files[0]); } i.value=''; },
    clearImage: function() { this.state.tempImage = null; document.getElementById('image-preview-area').classList.add('hidden'); },
    openDetailById: async function(id) { this.openDetail(await DataManager.getById(id)); },
    openDetail: function(i) { 
        if(!i) return; this.state.currentDetailId = i.id; document.getElementById('detail-title').innerText = i.title || 'Untitled'; document.getElementById('detail-date').innerText = new Date(i.ts).toLocaleDateString(); document.getElementById('detail-time').innerText = this.formatTime(new Date(i.ts)); document.getElementById('detail-content').innerHTML = marked.parse(i.content || '');
        const d = new Date(i.ts); try { const lunar = Solar.fromYmd(d.getFullYear(), d.getMonth()+1, d.getDate()).getLunar(); document.getElementById('detail-lunar').innerText = `${lunar.getMonthInChinese()}月${lunar.getDayInChinese()}`; } catch(e) {}
        const calEl = document.getElementById('detail-calories'); if (i.calories) { calEl.innerText = `${i.calories} kcal`; calEl.classList.remove('hidden'); } else { calEl.classList.add('hidden'); }
        if(i.img){ document.getElementById('detail-image').src=i.img; document.getElementById('detail-image-container').classList.remove('hidden'); } else { document.getElementById('detail-image-container').classList.add('hidden'); }
        document.getElementById('detail-modal').classList.remove('hidden'); 
    },
    closeDetail: function() { document.getElementById('detail-modal').classList.add('hidden'); },
    confirmDeleteEntry: function() { document.getElementById('confirm-modal').classList.remove('hidden'); },
    executeDelete: async function() { if(this.state.currentDetailId) { await DataManager.delete(this.state.currentDetailId); document.getElementById('confirm-modal').classList.add('hidden'); this.closeDetail(); } },
    editCurrentEntry: async function() { const id = this.state.currentDetailId; this.closeDetail(); this.openEditor(null, await DataManager.getById(id)); },
    editorInsertMD: function(syntax) { const t = document.getElementById('editor-content'); const start = t.selectionStart; const end = t.selectionEnd; const text = t.value; t.value = text.substring(0, start) + syntax + text.substring(end); t.focus(); t.selectionStart = t.selectionEnd = start + syntax.length; },
    editorInsertWrap: function(startSyntax, endSyntax) { 
        const t = document.getElementById('editor-content'); const start = t.selectionStart; const end = t.selectionEnd; const text = t.value; const selection = text.substring(start, end); 
        if(selection) { t.value = text.substring(0, start) + startSyntax + selection + endSyntax + text.substring(end); t.selectionStart = start; t.selectionEnd = end + startSyntax.length + endSyntax.length; } 
        else { t.value = text.substring(0, start) + startSyntax + "text" + endSyntax + text.substring(end); t.selectionStart = start + startSyntax.length; t.selectionEnd = start + startSyntax.length + 4; }
        t.focus();
    },
    openInfo: function() { DataManager.updateStats(); document.getElementById('info-modal')?.classList.remove('hidden'); },
    closeInfo: function() { document.getElementById('info-modal')?.classList.add('hidden'); },
    changeMonth: function(o) { const d = new Date(this.state.calendarDate); d.setMonth(d.getMonth() + o); this.state.calendarDate = d; this.renderCalendar(); },
    resetCalendarToday: function() { this.state.calendarDate = new Date(); this.renderCalendar(); },
    renderCalendar: async function() { 
        const g = document.getElementById('calendar-grid'); g.innerHTML = ''; const y = this.state.calendarDate.getFullYear(), m = this.state.calendarDate.getMonth(); 
        document.getElementById('cal-month-display').innerText = new Date(y, m).toLocaleString(this.state.lang === 'zh' ? 'zh-CN' : 'en-US', { month: 'short' }); document.getElementById('cal-year-display').innerText = y; 
        const fd = new Date(y, m, 1).getDay(), dim = new Date(y, m + 1, 0).getDate(); 
        const allData = await DataManager.getAll();
        for(let i=0; i<fd; i++) g.appendChild(document.createElement('div')); 
        for(let i=1; i<=dim; i++) { 
            const d = document.createElement('div'); d.className = 'calendar-cell hover:bg-[var(--line)]/30 transition-colors cursor-pointer'; 
            let lunarText = ''; if (window.Lunar) { try { const solar = Solar.fromYmd(y, m+1, i); lunarText = solar.getLunar().getDayInChinese(); } catch(e){} }
            d.innerHTML = `<span>${i}</span><span class="calendar-lunar">${lunarText}</span>`;
            const de = allData.filter(x => { const t = new Date(x.ts); return t.getFullYear()===y && t.getMonth()===m && t.getDate()===i; }); 
            if(de.length>0) { d.classList.add('has-entry', 'font-bold'); d.onclick=()=>this.openDetail(de[0]); } else { d.onclick=()=>this.openEditor(`${y}-${String(m+1).padStart(2,'0')}-${String(i).padStart(2,'0')}`); } g.appendChild(d); 
        } 
        this.renderArchiveList(allData.filter(x => { const t=new Date(x.ts); return t.getFullYear()===y && t.getMonth()===m; }).sort((a,b)=>b.ts-a.ts)); 
    },
    renderArchiveList: function(entries) {
         const container = document.getElementById('month-entries'); const emptyState = document.getElementById('month-empty-state'); 
         if(!container) return; container.innerHTML = '';
         if (entries.length === 0) { container.classList.add('hidden'); emptyState.classList.remove('hidden'); } 
         else { container.classList.remove('hidden'); emptyState.classList.add('hidden'); 
             entries.forEach(entry => {
                 const date = new Date(entry.ts); const div = document.createElement('div');
                 div.className = 'flex items-center gap-4 p-3 bg-[var(--bg)]/30 rounded-lg border border-[var(--line)]/50 cursor-pointer hover:bg-[var(--line)]/20 transition-colors mb-2';
                 div.onclick = () => UI.openDetail(entry);
                 div.innerHTML = `<div class="text-lg font-bold font-num opacity-70 w-8 text-center">${date.getDate()}</div><div class="flex-1 min-w-0"><div class="font-bold text-sm truncate text-[var(--text)]">${entry.title}</div></div><i data-lucide="chevron-right" class="w-4 h-4 opacity-50"></i>`;
                 container.appendChild(div);
             });
             lucide.createIcons();
         }
    },
    formatTime: (d) => d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
    getMoodIcon: (m) => ({smile:'smile',meh:'meh',frown:'frown',heart:'heart'}[m]||'smile'),
    getWeatherIcon: (w) => ({sun:'sun',cloud:'cloud',rain:'cloud-rain'}[w]||'sun')
};

if (typeof DataManager !== 'undefined') {
    DataManager.saveFromEditor = function() {
        const id = document.getElementById('editor-id').value; 
        const t = document.getElementById('editor-title').value || "Untitled"; 
        const c = document.getElementById('editor-content').value; 
        const d = document.getElementById('editor-date').value; 
        const tm = document.getElementById('editor-time').value; 
        const cal = document.getElementById('editor-calories').value;
        const type = document.getElementById('editor-entry-type').value;
        
        let anni = false, anniType = null, recurrence = 'none';
        
        if (type === 'anni') { 
            anni = true; 
            recurrence = document.getElementById('editor-recurrence').value;
        }
        if (type === 'task') { 
            recurrence = document.getElementById('editor-recurrence').value; 
        }
        
        if(d) { 
            const [y,m,day] = d.split('-').map(Number); 
            const [hr,min] = tm ? tm.split(':').map(Number) : [12,0]; 
            const ts = new Date(y,m-1,day,hr,min).getTime(); 
            
            const save = async (processedImg) => { 
                const payload = { ts, h: hr, title: t, content: c, mood: UI.state.mood, weather: UI.state.weather, img: processedImg, calories: cal ? parseInt(cal) : null, anni, anniType, recurrence }; 
                if (id) await this.update(id, payload); else await this.add(payload); 
                UI.closeEditor(); 
                if(document.getElementById('view-calendar').classList.contains('active-view')) {
                   UI.renderCalendar(); 
                   if(document.getElementById('btn-sub-data').classList.contains('active')) UI.renderDataList();
                   if(document.getElementById('btn-sub-gallery').classList.contains('active')) UI.renderGallery();
                }
            };
            const img = UI.state.tempImage; 
            if (img && img.startsWith('data:')) { this.compressImage(img, 1200, 0.8, save); } else { save(img); }
        } else { alert('Date required'); }
    };
}

window.onload = () => UI.init();