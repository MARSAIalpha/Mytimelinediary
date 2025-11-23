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
        btn_coach: "Life Coach",oracle_title: "THE ORACLE",
        oracle_subtitle: "Weekly Celestial Guidance",
        oracle_intro: "The AI sage reads your past 7 days to reveal the path ahead.",
        lbl_persona: "Choose Your Guide",
        p_western: "Astrologer",
        p_eastern: "Taoist Sage",
        p_coach: "Life Coach",
        lbl_zodiac: "Zodiac Sign",
        lbl_bazi: "Birth Date / Bazi",
        ph_zodiac: "e.g. Scorpio",
        ph_bazi: "e.g. 1995-05-20",
        btn_consult: "Reveal Prophecy",
        btn_ask_again: "Consult Again",
        btn_save_oracle: "Seal into Timeline",
        oracle_thinking: "Reading the stars...",
        
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
        btn_coach: "人生教练",oracle_title: "命运织机",
        oracle_subtitle: "本周星象启示",
        oracle_intro: "AI 智者将读取你过去 7 天的记忆，为你指引迷津。",
        lbl_persona: "选择指引者",
        p_western: "星相女巫",
        p_eastern: "隐世道长",
        p_coach: "人生教练",
        lbl_zodiac: "你的星座",
        lbl_bazi: "生辰八字 / 生日",
        ph_zodiac: "例如：天蝎座",
        ph_bazi: "例如：1995年5月20日",
        btn_consult: "开始推演",
        btn_ask_again: "再次询问",
        btn_save_oracle: "铭刻至时间轴",
        oracle_thinking: "正在观星...",
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

    // 强制重置
    this.state.selectionMode = false;
    this.state.selectedIds.clear();
    document.getElementById('export-bar').classList.add('hidden');

    document.getElementById('main-container').scrollTop = 0;
    
    const isTl = (v === 'timeline');
    document.getElementById('center-guide-layer').style.opacity = isTl ? '1' : '0'; 
    
    // --- 【关键修复】获取所有悬浮按钮 ---
    const btnAi = document.getElementById('btn-ai-summary'); // 紫色 AI 按钮
    const btnPen = document.querySelector('.fab-btn');       // 写日记按钮
    const filterGroup = document.getElementById('filter-fab-group'); // 过滤器

    if (isTl) {
        // 在时间轴页面：显示它们
        document.getElementById('view-timeline').classList.replace('hidden-view','active-view'); 
        document.getElementById('focus-hud').classList.remove('opacity-0'); 
        
        if(btnAi) btnAi.classList.remove('hidden');
        if(btnPen) btnPen.classList.remove('hidden');
        if(filterGroup) filterGroup.classList.remove('hidden');

        setTimeout(() => { 
            this.cachedEntryItems = Array.from(document.querySelectorAll('.entry-item')); 
            this.handleScroll(); 
            this.drawTaskConnectors(); 
        }, 150); 
    } 
    else {
        // 在其他页面：隐藏它们
        if(btnAi) btnAi.classList.add('hidden');
        if(btnPen) btnPen.classList.add('hidden');
        if(filterGroup) filterGroup.classList.add('hidden');

        if (v === 'calendar') { 
            document.getElementById('view-calendar').classList.replace('hidden-view','active-view'); 
            this.renderCalendar(); 
        } 
        else if (v === 'dashboard') { 
            document.getElementById('view-dashboard').classList.replace('hidden-view','active-view'); 
            this.renderDashboard(); 
        }
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
            // === 开启选择模式 ===
            btnText.innerText = t.btn_cancel_select || "Cancel";
            document.getElementById('export-bar').classList.remove('hidden');
            
            // 按钮变红
            document.getElementById('btn-select-mode').classList.replace('bg-[var(--text)]', 'bg-red-500');
            document.getElementById('btn-select-mode').classList.replace('text-[var(--card-bg)]', 'text-white');
            
            // 【关键修复】开启模式后，必须立刻刷新列表，让条目变成可勾选状态
            this.renderDataList(); 
        } else {
            // === 关闭选择模式 ===
            this.state.selectedIds.clear();
            btnText.innerText = t.btn_select || "Select";
            document.getElementById('export-bar').classList.add('hidden');
            
            // 按钮恢复
            document.getElementById('btn-select-mode').classList.replace('bg-red-500', 'bg-[var(--text)]');
            document.getElementById('btn-select-mode').classList.replace('text-white', 'text-[var(--card-bg)]');
            
            // 刷新列表，恢复为普通点击打开详情
            this.renderDataList(); 
            document.getElementById('selected-count').innerText = '0';
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
  // --- 在 app.js 中替换 renderTimeline ---
   // --- 替换 app.js 中的 renderTimeline ---
    renderTimeline: async function() {
        const c = document.getElementById('diary-list'); 
        c.innerHTML = ''; 
        
        // 绘制任务连线层
        const layer = document.getElementById('task-lines-layer'); 
        if(layer) layer.innerHTML = ''; 
        else { 
            const l = document.createElement('div'); 
            l.id = 'task-lines-layer'; 
            l.className = 'absolute top-0 left-0 w-full h-full pointer-events-none z-0'; 
            c.appendChild(l); 
        }
        
        const allData = await DataManager.getAll(); 
        let entries = allData.sort((a, b) => b.ts - a.ts); 
        
        // 过滤器
        entries = entries.filter(e => { 
            if(e.isHoliday) return this.state.filters.holiday; 
            if(e.anni) return this.state.filters.anni; 
            return this.state.filters.normal; 
        });
        
        if(entries.length === 0) { c.innerHTML += `<div class="text-center opacity-50 py-20">Tap + to start.</div>`; return; }
        
        // 心情图标样式
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
            const d = new Date(i.ts); 
            const div = document.createElement('div'); 
            div.className = `entry-item`; 
            div.dataset.ts = i.ts; 
            div.id = `entry-${i.id}`; 
            // HUD 数据
            div.dataset.hour = d.getHours(); 
            div.dataset.day = d.getDate(); 
            div.dataset.month = d.toLocaleString(this.state.lang === 'zh' ? 'zh-CN' : 'en-US', {month:'short'}); 
            div.dataset.year = d.getFullYear(); 
            div.dataset.time = this.formatTime(d); 
            div.dataset.weather = i.weather || 'sun';
            
            if (i.isTask) { div.dataset.isTask = true; div.dataset.taskType = i.taskType; div.dataset.taskCat = i.taskCat; }
            
            let activeColor = '#f59e0b'; 
            let extraHtml = ''; 
            let thumbHtml = i.img ? `<div class="card-thumb-col"><img src="${i.img}" class="card-thumb-img"></div>` : '';
            let cardClass = '';
            
            if (i.mood === 'sparkles') cardClass += ' glow-purple';
            
            // 标签
            if (i.isHoliday) { activeColor = '#22c55e'; cardClass+=' card-holiday'; extraHtml += `<div class="holiday-badge anni-badge text-[0.6rem] mb-1 px-1 rounded font-bold uppercase">Festival</div>`; }
            if (i.recurrence && i.recurrence !== 'none') { activeColor = '#eab308'; cardClass+=' card-task'; extraHtml += `<div class="inline-block bg-yellow-100 text-yellow-600 text-[0.6rem] px-2 rounded font-bold uppercase tracking-wide mr-1"><i data-lucide="repeat" class="inline w-3 h-3"></i> ${i.recurrence}</div>`; }
            
            if (i.anni) {
                const diffTime = i.ts - now;
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
                if (diffDays > 0) extraHtml += `<div class="anni-badge anni-future-badge">${diffDays} Days Until</div>`;
                else extraHtml += `<div class="anni-badge anni-past-badge">${Math.abs(diffDays)} Days Since</div>`;
            }

            // 任务颜色
            if (i.isTask) { 
                if (i.taskCat === 'Exercise') activeColor = '#ef4444'; 
                if (i.taskCat === 'Sleep') activeColor = '#3b82f6'; 
                if (i.taskCat === 'Focus') activeColor = '#10b981'; 
                if (i.taskCat === 'Meditation') activeColor = '#a855f7'; 
            }
            
            if (i.calories) { extraHtml += `<div class="inline-block bg-orange-100 text-orange-600 text-[0.6rem] px-2 rounded font-bold uppercase tracking-wide mr-1"><i data-lucide="utensils" class="inline w-3 h-3"></i> ${i.calories} kcal</div>`; }
            
            // End 按钮
            if (i.isTask && !catState[i.taskCat]) { 
                catState[i.taskCat] = i.taskType; 
                if (i.taskType === 'start') { 
                    extraHtml += `<div class="mt-2 pt-2 border-t border-[var(--line)]"><button onclick="event.stopPropagation(); UI.endTask('${i.taskCat}')" class="task-end-btn btn-end-${i.taskCat}"><i data-lucide="square" class="w-3 h-3 fill-current"></i> End ${i.taskCat}</button></div>`; 
                } 
            }
            
            div.style.setProperty('--node-active-color', activeColor);
            
            const mStyle = MOOD_STYLES[i.mood] || MOOD_STYLES.smile;
            const moodHtml = `<div class="card-mood-sticker" style="position:absolute; top:0.8rem; right:0.8rem;">
                <i data-lucide="${mStyle.icon}" style="width:1.2rem; height:1.2rem; color:${mStyle.color}; fill:${mStyle.fill}; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));"></i>
            </div>`;

            // 【关键修复】
            // 1. class 里加上 pointer-events-auto
            // 2. onclick 里给 ID 加上单引号 '${i.id}'，确保字符串ID也能点
            div.innerHTML = `
                <div class="timeline-node-wrapper"><div class="timeline-node"></div></div>
                <div class="entry-card-wrapper">
                    <div class="entry-card ${cardClass} pointer-events-auto" onclick="UI.handleEntryClick('${i.id}')" style="${!i.img ? 'padding-left:1.2rem' : ''}">
                        ${thumbHtml}
                        <div class="card-main-col">
                            ${moodHtml}
                            <div class="flex flex-wrap gap-2 mb-1">${extraHtml}</div>
                            <h3 class="text-xl font-bold text-[var(--text)] font-display leading-tight mb-2 line-clamp-2 pr-6">${i.title}</h3>
                            <p class="text-sm text-[var(--text)]/70 font-serif leading-relaxed line-clamp-2">${i.content.replace(/<[^>]*>/g, '').substring(0,80)}</p>
                        </div>
                    </div>
                </div>`;
            c.appendChild(div);
        });
        
        lucide.createIcons(); 
        this.cachedEntryItems = Array.from(document.querySelectorAll('.entry-item')); 
        setTimeout(() => { this.handleScroll(); this.drawTaskConnectors(); }, 150);
    },
/* --- app.js 中的 initScrollObserver --- */

initScrollObserver: function() { 
    const main = document.getElementById('main-container'); 
    let ticking = false; 

    main.addEventListener('scroll', () => { 
        if (!ticking) { 
            window.requestAnimationFrame(() => { 
                this.handleScroll(); 
                ticking = false; 
            }); 
            ticking = true; 
        } 
    }, { 
        passive: true // 保持这个，这告诉浏览器“我不阻止默认滚动”，能极大提升流畅度
    }); 
},
    handleScroll: function() {
        // --- 【关键修复】如果缓存为空，立刻重新获取一次 ---
        if (!this.cachedEntryItems || this.cachedEntryItems.length === 0) {
            this.cachedEntryItems = Array.from(document.querySelectorAll('.entry-item'));
        }
        
        const entries = this.cachedEntryItems; 
        // 如果还是没有条目，那说明真的没有日记，直接返回
        if (!entries || entries.length === 0) return; 

        const viewCenter = window.innerHeight / 2; 
        let closest = null; 
        let minDiff = Infinity; 
        
        entries.forEach(el => { 
            const rect = el.getBoundingClientRect(); 
            const dist = Math.abs(rect.top + rect.height/2 - viewCenter); 
            
            if(dist < minDiff) { 
                minDiff = dist; 
                closest = el; 
            } 
            
            // 重置非焦点状态
            el.classList.remove('active-focus'); 
            const card = el.querySelector('.entry-card'); 
            
            // 计算缩放淡入效果
            const range = 400; 
            let scale = 0.85; 
            let opacity = 0.5; 
            if (dist < range) { 
                const ratio = 1 - (dist / range); 
                const ease = ratio * ratio; 
                scale = 0.85 + (ease * 0.2); 
                opacity = 0.5 + (ease * 0.5); 
            } 
            
            if (card) { 
                 if(!card.classList.contains('selected')) { 
                     card.style.transform = `scale(${scale})`; 
                     card.style.opacity = opacity; 
                     // 离得近的层级高，防止遮挡
                     card.style.zIndex = dist < 60 ? 50 : 1; 
                 } else { 
                     card.style.opacity = 1; 
                     card.style.zIndex = 50; 
                 }
            } 
        });

        // 如果找到了最近的条目，执行“锁定”视觉效果
        if(closest) {
            closest.classList.add('active-focus'); 
            const cursor = document.getElementById('beam-cursor'); 
            
            // 光标磁吸效果
            const rect = closest.getBoundingClientRect();
            const magnetY = rect.top + rect.height/2 - viewCenter;
            
            if (Math.abs(magnetY) < 50) {
                cursor.style.top = `calc(50% + ${magnetY}px)`;
                document.getElementById('center-guide-layer').style.transform = `translateY(${magnetY}px)`; 
            } else {
                cursor.style.top = `50%`;
                document.getElementById('center-guide-layer').style.transform = `translateY(0px)`;
            }
            
            // 更新 HUD 时间和颜色
            const activeColor = closest.style.getPropertyValue('--node-active-color') || '#f59e0b'; 
            document.documentElement.style.setProperty('--current-beam-color', activeColor);
            
            const day = String(closest.dataset.day).padStart(2, '0'); 
            document.getElementById('hud-day').innerText = day; 
            document.getElementById('hud-month-year').innerText = `${closest.dataset.month} ${closest.dataset.year}`; 
            
            const timeEl = document.getElementById('hud-time'); 
            const newTime = closest.dataset.time; 
            if (timeEl.innerText !== newTime) { 
                timeEl.classList.add('hud-time-updating'); 
                setTimeout(() => { 
                    timeEl.innerText = newTime; 
                    timeEl.classList.remove('hud-time-updating'); 
                }, 150); 
            }
            
            this.updateCelestialPosition(parseInt(closest.dataset.hour)); 
            if(closest.dataset.weather) ParticleSystem.setWeather(closest.dataset.weather);
        }
    },
    quickSaveTask: async function(category) { const payload = { ts: Date.now(), title: `${category} Started`, content: `Started ${category} session.`, mood: 'smile', weather: UI.state.weather, isTask: true, taskType: 'start', taskCat: category, img: null }; await DataManager.add(payload); UI.closeEditor(); },
// --- 找到 UI 对象里的 endTask 方法，替换为这个智能版 ---
    
    endTask: async function(category) {
        if(confirm(`End ${category} session?`)) {
            
            // 1. 智能查找：先找到最近的一个“开始”记录
            const allData = await DataManager.getAll();
            const lastStart = allData
                .filter(e => e.isTask && e.taskCat === category && e.taskType === 'start')
                .sort((a,b) => b.ts - a.ts)[0]; // 按时间倒序，取第一个（最新的）

            let newTs = Date.now();

            // 2. 逻辑修正：如果“现在的结束时间”竟然早于“开始时间”
            // (通常是因为手动选了未来时间，或者秒数差异)
            // 我们强制把结束时间设定为：开始时间 + 1秒
            if (lastStart && newTs <= lastStart.ts) {
                newTs = lastStart.ts + 1000; 
            }

            const payload = {
                ts: newTs, 
                title: `${category} Finished`,
                content: `Completed ${category} session.`,
                mood: 'smile',
                weather: UI.state.weather,
                isTask: true,
                taskType: 'end',
                taskCat: category,
                img: null
            };
            
            await DataManager.add(payload);
        }
    },    updateCelestialPosition: function(hour) { const isMoonTime = (hour >= 19 || hour < 5); const targetAngle = isMoonTime ? 180 : 0; let delta = targetAngle - (this.state.currentRotation % 360); if (delta > 180) delta -= 360; if (delta < -180) delta += 360; this.state.currentRotation += delta; const wheel = document.getElementById('orbit-wheel'); if(wheel) wheel.style.transform = `rotate(${this.state.currentRotation}deg)`; let themeKey = (hour >= 5 && hour < 7) ? 'dawn' : (hour >= 7 && hour < 17) ? 'day' : (hour >= 17 && hour < 19) ? 'dusk' : 'night'; if(document.body.getAttribute('data-theme') !== themeKey) { document.body.setAttribute('data-theme', themeKey); ParticleSystem.switchTheme(themeKey); } },
    // In app.js - locate the UI.analyzeFoodImage method and replace it with:


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
    
    // In app.js, replace the generateReport function with this:

// --- 将此函数完全替换 app.js 中的 generateReport ---

// 找到 app.js 中的 generateReport 函数，完全替换为以下内容：

generateReport: async function() {
    const zodiac = document.getElementById('oracle-zodiac').value || "Unknown";
    const bazi = document.getElementById('oracle-bazi').value || "Unknown";
    const container = document.getElementById('summary-ai-content');
    const lang = this.state.lang; // 'zh' or 'en'
    const currentPersona = this.state.persona || 'western'; // 获取当前选择的角色

    // 1. 切换视图 & 显示动态加载动画 (根据角色定制)
    document.getElementById('oracle-input-view').classList.add('hidden');
    document.getElementById('oracle-result-view').classList.remove('hidden');

    // --- 【新增】角色专属加载配置 ---
    const LOADERS = {
        western: {
            icon: 'sparkles', // 星星/魔法
            color: 'text-purple-600',
            glow: 'bg-purple-500',
            textColor: 'text-purple-900',
            texts: lang === 'zh' 
                ? ["正在点燃香薰...", "正在翻阅星图...", "正在与之共鸣...", "正在倾听时间的回响..."] 
                : ["Lighting the incense...", "Reading the star chart...", "Resonating with energy...", "Listening to time's echo..."]
        },
        eastern: {
            icon: 'scroll', // 卷轴/道经
            color: 'text-emerald-700', // 墨绿/道家感
            glow: 'bg-emerald-500',
            textColor: 'text-emerald-900',
            texts: lang === 'zh' 
                ? ["道长正在起卦...", "推演五行生克...", "感应气场流动...", "正在烹茶待客..."] 
                : ["Casting the hexagram...", "Calculating Five Elements...", "Sensing the Qi flow...", "Brewing tea for you..."]
        },
        coach: {
            icon: 'activity', // 心率/分析/图表
            color: 'text-blue-600', // 商务蓝/理性
            glow: 'bg-blue-500',
            textColor: 'text-blue-900',
            texts: lang === 'zh' 
                ? ["正在分析行为模式...", "连接思维断点...", "正在构建行动方案...", "深度回顾本周数据..."] 
                : ["Analyzing patterns...", "Connecting the dots...", "Building action plan...", "Reviewing data points..."]
        }
    };

    // 获取当前主题，如果获取不到则默认用 western
    const theme = LOADERS[currentPersona] || LOADERS.western;
    const randomText = theme.texts[Math.floor(Math.random() * theme.texts.length)];

    // 渲染加载界面
    container.innerHTML = `<div class="flex flex-col items-center justify-center h-full opacity-60 space-y-6">
        <div class="relative">
            <div class="absolute inset-0 ${theme.glow} blur-xl opacity-20 animate-pulse"></div>
            <i data-lucide="${theme.icon}" class="relative z-10 w-10 h-10 animate-bounce ${theme.color}"></i>
        </div>
        <p class="text-xs font-bold tracking-[0.3em] animate-pulse ${theme.textColor} font-serif">${randomText}</p>
    </div>`;
    
    if(typeof lucide !== 'undefined') lucide.createIcons();
    
    // 2. 准备数据 (保持原有逻辑)
    const allData = await DataManager.getAll();
    const sevenDaysAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
    const recentData = allData
        .filter(e => e.ts > sevenDaysAgo)
        .sort((a,b) => a.ts - b.ts)
        .map(e => {
            const d = new Date(e.ts);
            const weekDay = d.toLocaleDateString(lang==='zh'?'zh-CN':'en-US', {weekday: 'long'});
            // 包含天气和心情，帮助 AI 建立情感链接
            return `[${weekDay}] ${e.title} (Mood:${e.mood}, Weather:${e.weather}): ${e.content}`;
        })
        .join('\n');

    const dataContext = recentData.length > 10 ? recentData : (lang === 'zh' ? "（用户本周很安静，依靠直觉感受ta的能量）" : "(User was quiet this week, rely on intuition.)");

    // 3. 定义沉浸式信件 Prompt (保持原有逻辑)
    const PERSONA_PROMPTS = {
        western: {
            zh: `角色设定：你不是AI，你是一位名为“Luna”的神秘占星师。
场景：深夜，壁炉旁，你正坐在用户对面，手里捧着一杯热茶。
语气：温柔、深邃、像多年未见的知己。
任务：写一封【私人信件】。
要求：
1. 必须引用日记里的具体细节（如“我看到周二那天雨很大...”）来证明你在倾听。
2. 将这些细节与星座[${zodiac}]的当前能量联系起来。
3. 不要用枯燥的标题。用 ## 这种 Markdown 格式来区分段落重点，但要融入信件的流利感。`,
            en: `Role: You are "Luna," a mystic astrologer.
Scene: Late night, by the fireplace. You are sitting across from the user.
Tone: Intimate, poetic, deep. Like an old soulmate.
Task: Write a **Personal Letter**.
Requirements:
1. Cite specific details from their diary (e.g., "I noticed on Tuesday you felt...") to show empathy.
2. Connect these details to the current cosmic energy of [${zodiac}].
3. Use ## Markdown for gentle emphasis, but keep the flow of a letter.`
        },
        eastern: {
            zh: `角色设定：你是一位隐居山林的“云游道长”。
场景：松树下，一壶清茶，你与用户对坐论道。
语气：通透、淡然、充满东方的哲理与抚慰感。
任务：写一封【手书】。
要求：
1. 从日记细节中捕捉“气”的变化（如“周三你的焦虑，其实是心火...”）。
2. 结合生辰[${bazi}]，给出顺势而为的建议。
3. 结尾送一句像“护身符”一样的短句。`,
            en: `Role: A Taoist Hermit.
Scene: Under a pine tree, drinking tea with the user.
Tone: Wise, calm, full of Eastern philosophy.
Task: Write a **Handwritten Letter**.
Requirements:
1. Interpret their diary details through "Qi" and nature metaphors.
2. Give advice based on flow and balance.
3. End with a "Mantra" for protection.`
        },
        coach: {
            zh: `角色设定：你是一位顶级人生导师。
场景：私人工作室，只有你们两人，灯光柔和，进行深度对话。
语气：真诚、有力、不仅是分析，更是情感上的共鸣与鼓舞。
任务：写一封【深度反馈信】。
要求：
1. 敏锐地指出日记细节背后隐藏的心理模式（潜意识的恐惧或渴望）。
2. 像朋友一样拍拍肩膀，给出下一步的具体行动。`,
            en: `Role: Elite Life Coach.
Scene: Private studio, deep conversation.
Tone: Sincere, powerful, empathetic yet sharp.
Task: Write a **Deep Feedback Letter**.
Requirements:
1. Point out psychological patterns hidden in diary details.
2. Like a supportive friend, give one specific next step.`
        }
    };

    const selectedPersona = PERSONA_PROMPTS[this.state.persona] || PERSONA_PROMPTS.western;
    const langPrompt = selectedPersona[lang];

    // 4. 构建最终 Prompt (保持原有逻辑)
    const finalPrompt = `
${langPrompt}

=== THE MEMORY STREAM (User's Week) ===
${dataContext}
=======================================

Write the response in ${lang === 'zh' ? 'Chinese' : 'English'}.
**CRITICAL FORMATTING RULES:**
- Use **Markdown** syntax.
- Start with a warm, personal salutation (e.g., "My dear traveler," "亲爱的...").
- Use **Bold** for key emotions or objects.
- Use "## " (H2) for distinct thematic transitions, NOT rigid headers like "Analysis". Make it flow.
- **DO NOT** wrap the output in a code block (no \`\`\`markdown). Just raw text.
- Length: Approx 200-250 words.
`;

    // 5. 调用 API 并清洗数据 (保持原有逻辑)
    try {
        let report = await DataManager.callDeepseek(finalPrompt, 1000);
        
        // 清洗 AI 可能返回的代码块标记
        report = report.replace(/```markdown/g, '').replace(/```/g, '').trim();
        
        container.innerHTML = marked.parse(report);
        
    } catch(e) {
        console.error(e);
        container.innerHTML = `<div class="text-center text-red-800 bg-red-50 p-4 rounded-xl">
            <p class="font-bold">Connection Faded</p>
            <p class="text-xs opacity-70">${e.message}</p>
        </div>`;
    }
},
  openWeeklySummary: function() { 
    document.getElementById('summary-modal').classList.remove('hidden'); 
    // 隐藏紫色按钮本身、写日记按钮、过滤器
    document.getElementById('btn-ai-summary')?.classList.add('hidden');
    document.querySelector('.fab-btn')?.classList.add('hidden');
    document.getElementById('filter-fab-group')?.classList.add('hidden');
},

// 3. 修复 closeWeeklySummary：关闭 AI 总结弹窗时，恢复按钮显示
closeWeeklySummary: function() { 
    document.getElementById('summary-modal').classList.add('hidden'); 
    // 只有在时间轴视图下才恢复显示
    if(document.getElementById('view-timeline').classList.contains('active-view')) {
        document.getElementById('btn-ai-summary')?.classList.remove('hidden');
        document.querySelector('.fab-btn')?.classList.remove('hidden');
        document.getElementById('filter-fab-group')?.classList.remove('hidden');
    }
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
    // --- 找到 renderDashboardTasks，完全替换为以下内容 ---

    renderDashboardTasks: function(allData) {
        const container = document.getElementById('dashboard-todo-list'); 
        container.innerHTML = '';
        
        const today = new Date();
        const todayStr = today.toDateString(); // 获取今天的日期字符串 (例如 "Mon Nov 24 2025")
        const dayOfWeek = today.getDay();
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

        // 1. 筛选出所有设置了重复的任务 (Routine)
        const tasks = allData.filter(e => e.recurrence && e.recurrence !== 'none');
        
        // 2. 筛选出“今天”应该做的任务
        const activeTasks = tasks.filter(t => {
            if (t.recurrence === 'daily') return true;
            if (t.recurrence === 'weekly') return new Date(t.ts).getDay() === dayOfWeek; // 每周几重复
            if (t.recurrence === 'workday') return !isWeekend; // 工作日
            if (t.recurrence === 'yearly') { // 每年
                const d = new Date(t.ts);
                return d.getDate() === today.getDate() && d.getMonth() === today.getMonth();
            }
            return false;
        });

        if(activeTasks.length === 0) { 
            container.innerHTML = '<div class="text-sm opacity-50 p-2 italic">No routines for today.</div>'; 
            return; 
        }

        // 3. 渲染列表
        activeTasks.forEach(t => { 
            const div = document.createElement('div'); 
            div.className = 'todo-item cursor-pointer group hover:bg-[var(--line)]/30 transition-colors rounded-lg px-2'; 
            
            // 核心逻辑：检查“最后完成时间”是不是今天
            // 如果 lastCompleted 存在且是今天，说明今天做完了
            const isDoneToday = t.lastCompleted && new Date(t.lastCompleted).toDateString() === todayStr;
            
            const icon = isDoneToday 
                ? '<i data-lucide="check-circle" class="w-5 h-5 text-green-500 fill-green-100"></i>' 
                : '<i data-lucide="circle" class="w-5 h-5 text-[var(--text-sec)] group-hover:text-[var(--primary)]"></i>';
            
            const textClass = isDoneToday ? 'todo-done opacity-50 line-through transition-all' : 'font-bold transition-all';

            div.innerHTML = `
                <div class="todo-check mr-3">${icon}</div>
                <div class="todo-text ${textClass} flex-1 py-3 text-sm">${t.title}</div>
            `; 
            
            // 4. 点击事件：更新数据库状态
            div.onclick = async () => { 
                // 如果今天是完成状态，点击则“取消完成” (设为 null)
                // 如果今天是未完成，点击则“标记完成” (设为现在的时间戳)
                const newStatus = isDoneToday ? null : Date.now();
                
                // 视觉反馈 (不等数据库，先变样式，更跟手)
                div.querySelector('.todo-text').classList.toggle('line-through');
                div.querySelector('.todo-text').classList.toggle('opacity-50');
                
                // 写入数据库
                await DataManager.update(t.id, { lastCompleted: newStatus });
                
                // 刷新列表 (确保逻辑正确)
                // 稍微延迟一点，让用户看到点击动画
                setTimeout(() => this.renderDashboardTasks(allData), 200);
            }; 
            
            container.appendChild(div); 
        });
        
        if(typeof lucide !== 'undefined') lucide.createIcons();
    },
    // --- 语言切换 (含指南内容切换) ---
    setLanguage: function(lang) { 
        this.state.lang = lang; 
        localStorage.setItem('app_lang', lang); 
        const t = I18N[lang]; 
        
        // 1. 更新所有带 data-i18n 属性的普通文本
        document.querySelectorAll('[data-i18n]').forEach(el => { 
            const k = el.getAttribute('data-i18n'); if (t[k]) el.innerText = t[k]; 
        }); 
        document.querySelectorAll('[data-placeholder]').forEach(el => { 
            const k = el.getAttribute('data-placeholder'); if (t[k]) el.placeholder = t[k]; 
        });

        // 2. 更新切换按钮样式
        const btnEn = document.getElementById('lang-en');
        const btnZh = document.getElementById('lang-zh');
        if(btnEn && btnZh) {
            if(lang === 'en') {
                btnEn.className = "px-5 py-1.5 rounded-full bg-[var(--primary)] text-white text-xs font-bold shadow-md transform scale-105 transition-all";
                btnZh.className = "px-5 py-1.5 rounded-full border border-[var(--line)] hover:bg-[var(--line)] text-xs font-bold transition-all opacity-60";
            } else {
                btnZh.className = "px-5 py-1.5 rounded-full bg-[var(--primary)] text-white text-xs font-bold shadow-md transform scale-105 transition-all";
                btnEn.className = "px-5 py-1.5 rounded-full border border-[var(--line)] hover:bg-[var(--line)] text-xs font-bold transition-all opacity-60";
            }
        }

        // 3. 【关键】切换指南内容的显示
        const guideEn = document.getElementById('guide-en');
        const guideZh = document.getElementById('guide-zh');
        
        if (guideEn && guideZh) {
            if (lang === 'en') {
                guideEn.classList.remove('hidden');
                guideZh.classList.add('hidden');
            } else {
                guideEn.classList.add('hidden');
                guideZh.classList.remove('hidden');
            }
        }

        // 4. 刷新视图
        this.renderCalendar(); 
        this.renderTimeline(); 
        if(typeof lucide !== 'undefined') lucide.createIcons();
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
   // --- 1. 切换编辑器类型 (适配彩色 Tab) ---
  // --- 替换 app.js 中的 setEditorType ---
    
   // --- 替换 app.js 中的 setEditorType ---
    
    setEditorType: function(type) {
        document.getElementById('editor-entry-type').value = type;
        
        // 1. Tab 按钮视觉切换
        ['diary', 'task', 'anni'].forEach(k => {
            const btn = document.getElementById(`type-${k}`);
            if (k === type) btn.classList.add('active-type');
            else btn.classList.remove('active-type');
        });

        // 2. 获取界面元素
        const guideText = document.getElementById('editor-guide-text');
        const extSettings = document.getElementById('editor-ext-settings');
        const trackButtons = document.getElementById('track-buttons');
        const recurrenceSelect = document.getElementById('editor-recurrence');
        const titleInput = document.getElementById('editor-title');
        
        const metaRow = document.getElementById('editor-meta-row'); 
        const moodRow = document.getElementById('editor-mood-row'); 
        const richArea = document.getElementById('editor-rich-area'); 
        
        const pillDate = document.getElementById('pill-date');
        const pillTime = document.getElementById('pill-time');
        const pillCals = document.getElementById('pill-cals');

        recurrenceSelect.innerHTML = '';
        guideText.classList.remove('hidden');

        // === 场景化逻辑 ===
        if (type === 'diary') {
            // [日记模式]：全显
            guideText.classList.add('hidden'); 
            extSettings.classList.add('hidden');
            
            metaRow.classList.remove('hidden');
            pillDate.classList.remove('hidden');
            pillTime.classList.remove('hidden');
            pillCals.classList.remove('hidden');
            
            moodRow.classList.remove('hidden');
            richArea.classList.remove('hidden');
            
            titleInput.placeholder = "Title...";
        } 
        else if (type === 'task') { 
            // [习惯模式]：极简 + 日期 + 时间
            extSettings.classList.remove('hidden');
            trackButtons.classList.remove('hidden');
            
            // 【修改点】显示元数据行，显示日期和时间，只隐藏卡路里
            metaRow.classList.remove('hidden'); 
            pillDate.classList.remove('hidden');
            pillTime.classList.remove('hidden'); // <--- 开启时间显示
            pillCals.classList.add('hidden');    // 保持卡路里隐藏

            moodRow.classList.add('hidden');
            richArea.classList.add('hidden');
            
            titleInput.placeholder = "Habit Name (e.g., Read Book)";
            
            const opts = [
                {v:'daily', t:'Daily (每天)'},
                {v:'workday', t:'Workdays (工作日)'},
                {v:'weekly', t:'Weekly (每周)'},
                {v:'yearly', t:'Yearly (每年)'},
                {v:'none', t:'One-off (一次性)'}
            ];
            opts.forEach(o => recurrenceSelect.add(new Option(o.t, o.v)));
        } 
        else { 
            // [纪念日模式]：极简 + 日期 (不需要时间)
            extSettings.classList.remove('hidden');
            trackButtons.classList.add('hidden');
            
            // 显示日期，隐藏时间、卡路里
            metaRow.classList.remove('hidden');
            pillDate.classList.remove('hidden');
            pillTime.classList.add('hidden');
            pillCals.classList.add('hidden');
            
            moodRow.classList.add('hidden');
            richArea.classList.add('hidden');
            
            titleInput.placeholder = "Event Name (e.g., Birthday)";
            
            const opts = [
                {v:'yearly', t:'Annual (一年一度)'},
                {v:'none', t:'One-time Event (一次性)'}
            ];
            opts.forEach(o => recurrenceSelect.add(new Option(o.t, o.v)));
        }
    },

    // --- 2. 快速追踪：点击即开始 (Instant Start) ---
    setTaskCat: async function(cat) {
        // 1. 获取用户输入的标题 (如果没写，就自动生成)
        let customTitle = document.getElementById('editor-title').value;
        const finalTitle = customTitle.trim() ? customTitle : `${cat} Session`;

        // 2. 构造数据 (自动设为 Start 节点)
        const payload = {
            id: Date.now(),
            ts: Date.now(), // 立即开始，使用当前时间
            title: finalTitle, 
            content: `Started ${cat} tracking.`, // 简单备注
            mood: UI.state.mood || 'smile',
            weather: UI.state.weather || 'sun',
            img: null,
            
            // 关键标记
            isTask: true,
            taskCat: cat,       // Exercise, Sleep, etc.
            taskType: 'start',  // 标记为开始
            recurrence: 'none'  // 实时追踪通常是一次性的，不设自动重复
        };

        // 3. 视觉反馈 (让按钮闪一下)
        const btn = document.getElementById(`btn-cat-${cat}`);
        const originalText = btn.innerHTML;
        btn.innerHTML = `<i data-lucide="check" class="w-4 h-4"></i> OK`;
        if(typeof lucide !== 'undefined') lucide.createIcons();

        // 4. 立即保存并关闭
        setTimeout(async () => {
            await DataManager.add(payload);
            UI.closeEditor(); 
            // 恢复按钮文字，以防下次打开变了
            btn.innerHTML = originalText;
        }, 300); // 稍微延迟 0.3秒 给用户看一眼“OK”
    },

    // --- 3. 打开编辑器 (初始化) ---
 // --- 2. 打开编辑器 (修复赋值顺序) ---
    openEditor: function(dStr, exist) { 
        const m = document.getElementById('editor-modal'), p = document.getElementById('editor-panel'); 
        const edit = document.getElementById('editor-content');
        
        // 清空旧状态
        edit.innerHTML = '<div><br></div>'; 
        document.getElementById('editor-task-cat').value = '';
        document.querySelectorAll('.track-btn').forEach(b => b.classList.remove('active'));
        document.getElementById('editor-calories').value = '';

        if(exist) { 
            // === 编辑模式 ===
            document.getElementById('editor-id').value = exist.id; 
            document.getElementById('editor-title').value = exist.title; 
            document.getElementById('editor-content').innerHTML = exist.content; 
            
            const d = new Date(exist.ts); 
            document.getElementById('editor-date').value = d.toISOString().split('T')[0]; 
            document.getElementById('editor-time').value = this.formatTime(d); 
            document.getElementById('editor-calories').value = exist.calories || '';
            
            // 1. 先判断并设置类型 (这会生成对应的下拉选项)
            let type = 'diary';
            if (exist.anni) type = 'anni';
            else if (exist.recurrence && exist.recurrence !== 'none') type = 'task';
            else if (exist.isTask) type = 'task'; // 处理之前的一键Track
            
            this.setEditorType(type);

            // 2. 类型确定后，再回填具体的值
            // 如果是 Track 按钮生成的，恢复按钮高亮
            if (exist.taskCat) this.setTaskCat(exist.taskCat); 
            
            // 恢复重复设置 (注意：如果现有值不在当前类型的选项里，比如Anni里存了daily，这里会自动变回默认)
            document.getElementById('editor-recurrence').value = exist.recurrence || 'none';
            
        } else { 
            // === 新建模式 ===
            const n = new Date(); 
            document.getElementById('editor-id').value = ''; 
            document.getElementById('editor-title').value = ''; 
            document.getElementById('editor-date').value = dStr || n.toISOString().split('T')[0]; 
            document.getElementById('editor-time').value = n.toTimeString().slice(0,5); 
            
            // 默认设为日记
            this.setEditorType('diary');
            // 如果初始化就想切到别的，可以在这里改，比如 this.setEditorType('task');
        } 
        
        m.classList.remove('hidden'); 
        setTimeout(() => p.classList.remove('translate-y-full'), 10); 
        if(typeof lucide !== 'undefined') lucide.createIcons();
    },
    setFontSize: function(size) { document.body.setAttribute('data-font', size); },
  // --- 辅助功能 ---
    insertText: function(text) { document.getElementById('editor-content').focus(); document.execCommand('insertText', false, text); },
    execCmd: function(cmd) { document.execCommand(cmd, false, null); },

    // --- 处理图片插入 ---
    handleInlineImage: function(input) {
        const file = input.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            const base64 = e.target.result;
            // 在光标处插入图片 HTML
            const imgHtml = `<img src="${base64}" style="max-width: 90%; max-height: 350px; border-radius: 8px; margin: 10px 0; display: block; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">`;
            document.getElementById('editor-content').focus();
            document.execCommand('insertHTML', false, `<br>${imgHtml}<br>`);
            input.value = ''; // 清空以允许重复选图
        };
        reader.readAsDataURL(file);
    },
    // --- 切换 MD 预览模式 ---
    // --- 修复版：切换 MD 预览模式 ---
    togglePreviewMode: function() {
        const editor = document.getElementById('editor-content');
        const preview = document.getElementById('editor-md-preview');
        const btn = document.getElementById('btn-preview-toggle');
        
        // 检查是否已经在预览
        const isPreviewing = !preview.classList.contains('hidden');

        if (isPreviewing) {
            // [切回编辑模式]
            preview.classList.add('hidden');
            editor.classList.remove('hidden');
            
            // 按钮变灰
            btn.classList.remove('bg-purple-100', 'text-purple-600');
        } else {
            // [切到预览模式]
            
            // 1. 【关键修改】使用 innerText 获取纯文本！
            // 这样能把编辑器里的 <div> 换行自动变成 \n，marked 才能识别
            let rawText = editor.innerText;
            
            // 2. 检查 marked 库
            if(typeof marked !== 'undefined') {
                try {
                    // 转换 Markdown -> HTML
                    preview.innerHTML = marked.parse(rawText);
                } catch(e) { 
                    console.error(e);
                    preview.innerHTML = "<p class='text-red-500'>解析出错，请检查控制台</p>"; 
                }
            } else {
                alert("❌ 错误：lib/marked.min.js 未加载，请检查文件！");
                return;
            }
            
            // 3. 切换显示
            editor.classList.add('hidden');
            preview.classList.remove('hidden');
            
            // 按钮高亮 (紫色)
            btn.classList.add('bg-purple-100', 'text-purple-600');
        }
    },
  
    closeEditor: function() { document.getElementById('editor-panel').classList.add('translate-y-full'); setTimeout(()=>document.getElementById('editor-modal').classList.add('hidden'),300); },
    selectMood: function(m) { this.state.mood = m; document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('bg-[var(--primary)]', 'text-white', 'shadow-md')); document.getElementById(`mood-${m}`)?.classList.add('bg-[var(--primary)]', 'text-white', 'shadow-md'); },
    selectWeather: function(w) { this.state.weather = w; document.querySelectorAll('.weather-btn').forEach(b => b.classList.remove('bg-[var(--primary)]', 'text-white', 'shadow-md')); document.getElementById(`weather-${w}`)?.classList.add('bg-[var(--primary)]', 'text-white', 'shadow-md'); ParticleSystem.setWeather(w); },
    triggerImageUpload: () => document.getElementById('image-input').click(),
    handleImageUpload: function(i) { if(i.files[0]) { const r = new FileReader(); r.onload=(e)=>{this.state.tempImage=e.target.result; document.getElementById('preview-img').src=e.target.result; document.getElementById('image-preview-area').classList.remove('hidden');}; r.readAsDataURL(i.files[0]); } i.value=''; },
    clearImage: function() { this.state.tempImage = null; document.getElementById('image-preview-area').classList.add('hidden'); },
openDetailById: async function(id) { 
        const entry = await DataManager.getById(id);
        if (entry) this.openDetail(entry); 
    },    openDetail: function(i) { 
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
editorInsertMD: function(text) {
        this.insertText(text);
    },    
    toggleEditorPreview: function() {
        const editor = document.getElementById('editor-content');
        const preview = document.getElementById('editor-preview');
        const btn = document.getElementById('btn-preview-toggle');
        const isPreviewing = preview.classList.contains('active-preview');
        
        if (isPreviewing) {
            preview.classList.remove('active-preview'); preview.style.display = 'none';
            editor.classList.remove('hidden-editor');
            btn.classList.remove('active'); btn.querySelector('i').style.color = 'var(--text)';
        } else {
            preview.innerHTML = marked.parse(editor.value || '*No content*');
            editor.classList.add('hidden-editor');
            preview.classList.add('active-preview'); preview.style.display = 'block';
            btn.classList.add('active'); btn.querySelector('i').style.color = '#fff';
        }
    },
    // --- 处理文内图片/视频 (引用式写法) ---
   // --- 修复版：支持多张图片插入 ---
    handleInlineMedia: function(input, type) {
        const file = input.files[0];
        if (!file) return;

        // 1. 限制视频大小 (10MB)
        if (type === 'video' && file.size > 10 * 1024 * 1024) {
            alert("❌ 视频太大，请上传 10MB 以内的短视频。");
            input.value = ''; 
            return;
        }

        const editor = document.getElementById('editor-content');
        
        // 2. 生成绝对唯一的 ID (防止第二张图覆盖第一张)
        // 使用 时间戳 + 随机数
        const uniqueId = `${type}-${Date.now()}-${Math.floor(Math.random() * 999)}`;
        
        // 3. 在光标位置插入“上传中”占位符
        const loadingTag = ` [Uploading...] `;
        
        // 只有 textarea 支持这种光标插入
        if (editor.tagName === 'TEXTAREA') {
            const start = editor.selectionStart;
            const end = editor.selectionEnd;
            const text = editor.value;
            // 把“上传中”塞到光标中间
            editor.value = text.substring(0, start) + loadingTag + text.substring(end);
            // 恢复光标位置
            editor.selectionStart = editor.selectionEnd = start + loadingTag.length;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const base64 = e.target.result;
            let currentContent = editor.value;
            
            if (type === 'image') {
                // --- 图片逻辑：引用式写法 ---
                
                // 1. 放在文字中间的“短标签” (前后加换行，保证不和文字粘连)
                const shortTag = `\n![Image][${uniqueId}]\n`;
                
                // 2. 放在文章最底部的“长代码” (数据源)
                // 注意：这里用了 \n\n 强制换行，防止和上一段代码粘在一起
                const footerCode = `\n\n[${uniqueId}]: ${base64}`;
                
                // 执行替换：
                // A. 把“上传中”变成“短标签”
                currentContent = currentContent.replace(loadingTag, shortTag);
                // B. 把“长代码”追加到全文的最最后面
                currentContent += footerCode;

            } else {
                // --- 视频逻辑：直接插入 ---
                // 视频不支持引用式，只能把代码放中间
                const videoTag = `\n<video src="${base64}" controls></video>\n`;
                currentContent = currentContent.replace(loadingTag, videoTag);
            }

            // 更新编辑器内容
            editor.value = currentContent;
            
            // 【关键】手动触发一次输入事件，让预览框立刻更新！
            if(editor.oninput) editor.oninput();
            
            // 清空文件选择器，允许重复选同一张图
            input.value = '';
        };
        reader.readAsDataURL(file);
    },
    toggleEditorPreview: function() {
        const editor = document.getElementById('editor-content');
        const preview = document.getElementById('editor-preview');
        const btn = document.getElementById('btn-preview-toggle');
        const isPreviewing = preview.classList.contains('active-preview');
        
        if (isPreviewing) {
            preview.classList.remove('active-preview'); preview.style.display = 'none';
            editor.classList.remove('hidden-editor');
            btn.classList.remove('active'); btn.querySelector('i').style.color = 'var(--text)';
        } else {
            // 这里使用了你 lib 文件夹里的 marked.min.js
            preview.innerHTML = marked.parse(editor.value || '*No content*');
            editor.classList.add('hidden-editor');
            preview.classList.add('active-preview'); preview.style.display = 'block';
            btn.classList.add('active'); btn.querySelector('i').style.color = '#fff';
        }
    },
    toggleEditorPreview: function() {
        const editor = document.getElementById('editor-content');
        const preview = document.getElementById('editor-preview');
        const btn = document.getElementById('btn-preview-toggle');
        
        // 检查是否已经是预览模式
        const isPreviewing = preview.classList.contains('active-preview');
        
        if (isPreviewing) {
            // 切换回编辑模式
            preview.classList.remove('active-preview');
            preview.style.display = 'none';
            editor.classList.remove('hidden-editor');
            btn.classList.remove('active');
            btn.querySelector('i').style.color = 'var(--text)';
        } else {
            // 切换到预览模式
            const mdText = editor.value;
            preview.innerHTML = marked.parse(mdText || '<em class="opacity-50">Nothing to preview</em>');
            
            editor.classList.add('hidden-editor');
            preview.classList.add('active-preview');
            preview.style.display = 'block';
            btn.classList.add('active');
            btn.querySelector('i').style.color = 'var(--primary)'; // 激活时变色
        }
    },
editorInsertWrap: function(start, end) {
        // 获取选中的文字
        const selection = window.getSelection().toString();
        // 插入：前缀 + 文字 + 后缀
        this.insertText(start + selection + end);
    },
openInfo: function() { 
        DataManager.updateStats(); 
        document.getElementById('info-modal')?.classList.remove('hidden'); 
        
        // 隐藏干扰元素
        document.getElementById('btn-ai-summary')?.classList.add('hidden');
        document.querySelector('.fab-btn')?.classList.add('hidden');
        document.getElementById('filter-fab-group')?.classList.add('hidden');
    },    
closeInfo: function() { 
        document.getElementById('info-modal')?.classList.add('hidden'); 
        
        // 只有在时间轴视图下，才恢复显示这些按钮
        if (document.getElementById('view-timeline').classList.contains('active-view')) {
            document.getElementById('btn-ai-summary')?.classList.remove('hidden');
            document.querySelector('.fab-btn')?.classList.remove('hidden');
            document.getElementById('filter-fab-group')?.classList.remove('hidden');
        }
    },    
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
  // --- 放在 app.js 最底部 ---

// --- 找到 app.js 最底部的 DataManager.saveFromEditor，完全替换为以下内容 ---

if (typeof DataManager !== 'undefined') {
    DataManager.saveFromEditor = async function() {
        const id = document.getElementById('editor-id').value; 
        const t = document.getElementById('editor-title').value || "Untitled"; 
        const contentDiv = document.getElementById('editor-content');
        const c = contentDiv.innerHTML; 
        
        // 提取封面图
        let coverImg = null;
        const firstImg = contentDiv.querySelector('img');
        if (firstImg) coverImg = firstImg.src;

        const d = document.getElementById('editor-date').value; 
        const tm = document.getElementById('editor-time').value; 
        const cal = document.getElementById('editor-calories').value;
        
        const type = document.getElementById('editor-entry-type').value;
        const taskCat = document.getElementById('editor-task-cat').value; // 获取分类(Exercise, Sleep...)
        const recurrence = document.getElementById('editor-recurrence').value;
        
        let anni = (type === 'anni');
        let isTask = (type === 'task');
        let taskType = null; // 默认为空

        // 【关键修复逻辑】
        // 如果用户点了追踪按钮 (Exercise/Sleep/Focus/Meditation)
        if (taskCat) {
            isTask = true;
            // 强制标记为 "开始节点"，这样 Timeline 渲染时才会出现 "End" 按钮
            taskType = 'start'; 
            // 实时追踪通常是当下的行为，强制设为不重复 (以免变成每天的打卡任务)
            // 如果你确实想要每天重复且能追踪，可以去掉下面这行，但逻辑会变复杂
            /* payload.recurrence = 'none'; */ 
        }

        if(d) { 
            const [y,m,day] = d.split('-').map(Number); 
            const [hr,min] = tm ? tm.split(':').map(Number) : [12,0]; 
            const ts = new Date(y,m-1,day,hr,min).getTime(); 
            
            const payload = { 
                ts, 
                h: hr, 
                title: t, 
                content: c, 
                mood: UI.state.mood, 
                weather: UI.state.weather, 
                img: coverImg, 
                calories: cal ? parseInt(cal) : null, 
                anni, 
                isTask,
                taskCat, 
                taskType, // 保存 start 标记
                // 如果是手动选的 Routine 且没选分类，就用下拉框的重复设置；如果是追踪，就设为一次性
                recurrence: (taskCat) ? 'none' : ((type === 'diary') ? 'none' : recurrence)
            }; 
            
            if (id) await this.update(id, payload); else await this.add(payload); 
            UI.closeEditor(); 
            UI.refreshAll();
        } else { alert('Date required'); }
    };
}
}

window.onload = () => UI.init();