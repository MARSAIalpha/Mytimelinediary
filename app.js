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
    
   // --- 新增：滚动到今天 ---
    scrollToToday: function() {
        // 1. 尝试找今天的条目
        const todayStr = new Date().toDateString(); // e.g., "Tue Nov 25 2025"
        const entries = document.querySelectorAll('.entry-item');
        let target = null;

        for (let el of entries) {
            const ts = parseInt(el.dataset.ts);
            if (new Date(ts).toDateString() === todayStr) {
                target = el;
                break;
            }
        }

        // 2. 如果今天没写日记，就找最近的一条（列表最上面的通常是最近的）
        if (!target && entries.length > 0) {
            target = entries[0];
        }

        // 3. 执行平滑滚动
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // 闪烁一下提醒用户
            const card = target.querySelector('.entry-card');
            if(card) {
                card.style.transition = 'transform 0.2s';
                card.style.transform = 'scale(1.1)';
                setTimeout(() => card.style.transform = 'scale(1)', 300);
            }
        }
    },

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
// --- 1. 切换选择模式 (控制按钮显隐) ---
    toggleSelectionMode: function() {
        this.state.selectionMode = !this.state.selectionMode;
        const btnText = document.getElementById('select-btn-text');
        const btnAll = document.getElementById('btn-select-all'); // 获取全选按钮
        const t = I18N[this.state.lang];
        
        if (this.state.selectionMode) {
            // [开启模式]
            btnText.innerText = t.btn_cancel_select || "Done";
            document.getElementById('export-bar').classList.remove('hidden'); // 显示底部操作栏
            btnAll.classList.remove('hidden'); // 显示全选按钮
            
            // 按钮变红
            document.getElementById('btn-select-mode').classList.replace('bg-[var(--text)]', 'bg-red-500');
            document.getElementById('btn-select-mode').classList.replace('text-[var(--card-bg)]', 'text-white');
            
            this.renderDataList(); // 刷新列表显示复选框
        } else {
            // [关闭模式]
            this.state.selectedIds.clear();
            btnText.innerText = t.btn_select || "Select";
            document.getElementById('export-bar').classList.add('hidden');
            btnAll.classList.add('hidden'); 
            
            // 按钮恢复
            document.getElementById('btn-select-mode').classList.replace('bg-red-500', 'bg-[var(--text)]');
            document.getElementById('btn-select-mode').classList.replace('text-white', 'text-[var(--card-bg)]');
            
            this.renderDataList(); 
            document.getElementById('selected-count').innerText = '0';
        }
    },

    // --- 2. 全选 / 取消全选 ---
    toggleSelectAll: async function() {
        const btnText = document.getElementById('btn-select-all-text');
        const allData = await DataManager.getAll();
        
        // 如果当前选中的数量少于总数，说明还没全选 -> 执行全选
        if (this.state.selectedIds.size < allData.length) {
            allData.forEach(e => this.state.selectedIds.add(e.id));
            btnText.innerText = "None"; // 按钮变更为“全不选”
        } else {
            // 否则清空
            this.state.selectedIds.clear();
            btnText.innerText = "All";
        }
        
        // 更新界面
        document.getElementById('selected-count').innerText = this.state.selectedIds.size;
        this.renderDataList(); // 重新渲染打钩状态
    },

    // --- 3. 批量删除 (核心修复) ---
    deleteSelectedEntries: async function() {
        if(this.state.selectedIds.size === 0) return alert("Please select items first.");
        
        if(confirm(`Delete ${this.state.selectedIds.size} items permanently?`)) {
            const ids = Array.from(this.state.selectedIds);
            
            // 循环删除
            for(let id of ids) {
                await DataManager.delete(id); // 注意：DataManager.delete 里不要每次都 refreshAll，否则会慢
            }
            
            // 删除完成后，手动刷新一次即可
            await DataManager.updateStats();
            
            // 退出选择模式，回归正常状态
            this.toggleSelectionMode(); 
            
            // 强制刷新所有视图
            this.refreshAll();
            if(!document.getElementById('data-container').classList.contains('hidden')) {
                this.renderDataList(); // 如果在数据页，刷新列表
            }
            
            alert("Deleted successfully.");
        }
    },

    toggleSelectAll: async function() {
        const btnText = document.getElementById('btn-select-all-text');
        const allData = await DataManager.getAll();
        
        // 如果当前选中的数量少于总数，说明还没全选 -> 执行全选
        if (this.state.selectedIds.size < allData.length) {
            allData.forEach(e => this.state.selectedIds.add(e.id));
            btnText.innerText = "None"; // 按钮变更为“全不选”
        } else {
            // 否则清空
            this.state.selectedIds.clear();
            btnText.innerText = "All";
        }
        
        // 更新界面
        document.getElementById('selected-count').innerText = this.state.selectedIds.size;
        this.renderDataList(); // 重新渲染打钩状态
    },
deleteSelectedEntries: async function() {
        if(this.state.selectedIds.size === 0) return alert("Please select items first.");
        
        if(confirm(`Delete ${this.state.selectedIds.size} items permanently?`)) {
            const ids = Array.from(this.state.selectedIds);
            
            // 循环删除
            for(let id of ids) {
                await DataManager.delete(id); // 注意：DataManager.delete 里不要每次都 refreshAll，否则会慢
            }
            
            // 删除完成后，手动刷新一次即可
            await DataManager.updateStats();
            
            // 退出选择模式，回归正常状态
            this.toggleSelectionMode(); 
            
            // 强制刷新所有视图
            this.refreshAll();
            if(!document.getElementById('data-container').classList.contains('hidden')) {
                this.renderDataList(); // 如果在数据页，刷新列表
            }
            
            alert("Deleted successfully.");
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
    // --- 替换 app.js 中的 renderTimeline ---
    // --- 极致性能版：初始化时间轴 ---
    renderTimeline: async function() {
        const c = document.getElementById('diary-list'); 
        const mainContainer = document.getElementById('main-container');
        
        // 1. 暂时关闭滚动吸附，防止初始化跳动
        if(mainContainer) mainContainer.style.scrollSnapType = 'none';

        // 2. 清空画布
        c.innerHTML = ''; 
        const layer = document.getElementById('task-lines-layer'); 
        if(layer) layer.innerHTML = ''; else { const l = document.createElement('div'); l.id = 'task-lines-layer'; l.className = 'absolute top-0 left-0 w-full h-full pointer-events-none z-0'; c.appendChild(l); }
        
        // 3. 数据准备 (内存操作，极快)
        const allData = await DataManager.getAll(); 
        
        // 排序：新 -> 旧
        let entries = allData.sort((a, b) => { const diff = b.ts - a.ts; return diff !== 0 ? diff : String(b.id).localeCompare(String(a.id)); }); 
        
        // 过滤
        entries = entries.filter(e => { 
            if(e.isHoliday) return this.state.filters.holiday; 
            if(e.anni) return this.state.filters.anni; 
            return this.state.filters.normal; 
        });

        if(entries.length === 0) { c.innerHTML += `<div class="text-center opacity-50 py-20">Tap + to start.</div>`; return; }

        // 【关键】存入全局缓存，重置指针
        this.allSortedEntries = entries;
        this.currentRenderIndex = 0; 
        this.isRendering = false;
        
        // 4. 启动渲染引擎 (第一批)
        this.renderBatch(20);

        // 5. 延迟恢复吸附效果
        setTimeout(() => { 
            if(mainContainer) mainContainer.style.scrollSnapType = 'y proximity';
            // 初始化一下视觉状态
            this.handleScroll(); 
        }, 100);
    },
// --- 极致性能版：渲染引擎 ---
    renderBatch: function(batchSize = 20) {
        // 安全锁：如果数据没准备好或正在渲染，直接跳过
        if (!this.allSortedEntries || this.isRendering) return;
        
        const c = document.getElementById('diary-list');
        const main = document.getElementById('main-container');
        const total = this.allSortedEntries.length;
        
        // 边界检查：全部渲染完毕
        if (this.currentRenderIndex >= total) return;

        this.isRendering = true; // 上锁

        // 计算这一批的数据切片
        const nextIndex = Math.min(this.currentRenderIndex + batchSize, total);
        const batch = this.allSortedEntries.slice(this.currentRenderIndex, nextIndex);
        
        // 使用 DocumentFragment 在内存中构建，极快
        const fragment = document.createDocumentFragment();
        const MOOD_STYLES = { smile: {icon:'smile',color:'#f59e0b'}, meh: {icon:'meh',color:'#64748b'}, frown: {icon:'frown',color:'#3b82f6'}, heart: {icon:'heart',color:'#ec4899'}, sparkles: {icon:'sparkles',color:'#8b5cf6'} };
        const todayStr = new Date().toDateString();

        batch.forEach(i => {
            const safeId = String(i.id).replace(/[^a-zA-Z0-9-_]/g, '');
            const d = new Date(i.ts);
            const isToday = d.toDateString() === todayStr;

            const div = document.createElement('div'); 
            div.className = `entry-item`; 
            // 移除 CSS 动画，减少合成层开销，提升上屏速度
            
            div.dataset.ts = i.ts; div.id = `entry-${safeId}`; div.dataset.hour = d.getHours(); div.dataset.day = d.getDate(); div.dataset.month = d.toLocaleString(this.state.lang === 'zh' ? 'zh-CN' : 'en-US', {month:'short'}); div.dataset.year = d.getFullYear(); div.dataset.time = this.formatTime(d); div.dataset.weather = i.weather || 'sun';
            if (i.isTask) { div.dataset.isTask = true; div.dataset.taskType = i.taskType; div.dataset.taskCat = i.taskCat; }

            let cardClass = isToday ? ' card-today-highlight' : '';
            if (i.mood === 'sparkles') cardClass += ' glow-purple';
            if (i.isHoliday) cardClass += ' card-holiday';
            if (i.recurrence && i.recurrence !== 'none') cardClass += ' card-task';

            const mStyle = MOOD_STYLES[i.mood] || MOOD_STYLES.smile;
            const rawContent = i.content ? i.content.replace(/<[^>]*>/g, '').replace(/!\[.*?\]\(.*?\)/g, '') : '';
            // 增加了 decoding="async" 和宽高限制样式
const thumbHtml = i.img ? `<div class="card-thumb-col"><img src="${i.img}" class="card-thumb-img" loading="lazy" decoding="async"></div>` : '';

            // 拼接 HTML 字符串 (比 createElement 更快)
            let activeColor = '#f59e0b';
            let extraHtml = '';
            if (i.isHoliday) { activeColor = '#22c55e'; extraHtml += `<div class="holiday-badge anni-badge">Festival</div>`; }
            if (i.recurrence && i.recurrence!=='none') { activeColor = '#eab308'; extraHtml += `<div class="anni-badge bg-yellow-100 text-yellow-600"><i data-lucide="repeat" class="inline w-3 h-3"></i> ${i.recurrence}</div>`; }
            if (i.anni) { const days = Math.ceil((i.ts - Date.now())/86400000); extraHtml += days>0 ? `<div class="anni-badge anni-future-badge">${days} Days Left</div>` : `<div class="anni-badge anni-past-badge">${Math.abs(days)} Days Ago</div>`; }
            if (i.calories) extraHtml += `<div class="anni-badge bg-orange-100 text-orange-600">${i.calories} kcal</div>`;
            if (i.isTask && i.taskCat) { 
               const cMap={'Exercise':'#ef4444','Sleep':'#3b82f6','Focus':'#10b981','Meditation':'#a855f7'}; 
               activeColor=cMap[i.taskCat]||'#f59e0b'; 
               if(i.taskType==='start') extraHtml+=`<div class="mt-2 pt-2 border-t border-[var(--line)]"><button onclick="event.stopPropagation();UI.endTask('${i.taskCat}')" class="task-end-btn btn-end-${i.taskCat}">End ${i.taskCat}</button></div>`;
            }
            div.style.setProperty('--node-active-color', activeColor);

            div.innerHTML = `
                <div class="timeline-node-wrapper"><div class="timeline-node"></div></div>
                <div class="entry-card-wrapper">
                    <div class="entry-card ${cardClass}" onclick="UI.handleEntryClick('${i.id}')" style="${!i.img ? 'padding-left:1.2rem' : ''}">
                        ${thumbHtml}
                        <div class="card-main-col">
                            <div class="card-mood-sticker absolute top-3 right-3"><i data-lucide="${mStyle.icon}" style="color:${mStyle.color};width:1.2rem;"></i></div>
                            <div class="flex flex-wrap gap-2 mb-1">${extraHtml}</div>
                            <h3 class="text-xl font-bold font-display leading-tight mb-2 line-clamp-1 pr-6">${i.title}</h3>
                            <p class="text-sm opacity-70 font-serif leading-relaxed line-clamp-2">${rawContent.substring(0,80)}</p>
                        </div>
                    </div>
                </div>`;
            fragment.appendChild(div);
        });

        // 一次性插入 DOM
        c.appendChild(fragment);
        
        // 更新指针 & 解锁
        this.currentRenderIndex = nextIndex;
        this.isRendering = false;
        
        // 更新 UI 状态
        if(typeof lucide !== 'undefined') lucide.createIcons();
        this.cachedEntryItems = Array.from(document.querySelectorAll('.entry-item')); // 更新缓存
        this.drawTaskConnectors();

        // 【究极防卡死逻辑】
        // 使用 setTimeout 将“检查是否填满”推迟到下一个事件循环。
        // 这给了浏览器渲染线程宝贵的 50ms 去计算布局。
        // 如果高度不够，自动加载下一批。
        setTimeout(() => {
            if (main && main.scrollHeight <= main.clientHeight + 100 && this.currentRenderIndex < total) {
                this.renderBatch(10); 
            }
        }, 50);
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
        // 使用 RAF 锁，防止在一帧内重复计算
        if (this.scrollTick) return;
        
        this.scrollTick = true;
        window.requestAnimationFrame(() => {
            this.actualScrollLogic();
            this.scrollTick = false;
        });
    },

    actualScrollLogic: function() {
        const main = document.getElementById('main-container');
        if (!main) return;

        // 1. 无限加载触发 (阈值设为 1000px，提前量大一点，用户无感知)
        if (main.scrollHeight - main.scrollTop - main.clientHeight < 1000) {
            this.renderBatch(10);
        }

        // 2. 视觉特效计算
        if (!this.cachedEntryItems || this.cachedEntryItems.length === 0) {
            this.cachedEntryItems = Array.from(document.querySelectorAll('.entry-item'));
        }
        
        const entries = this.cachedEntryItems; 
        if (!entries || entries.length === 0) return; 

        const viewCenter = window.innerHeight / 2; 
        let closest = null; 
        let minDiff = Infinity; 
        const viewportHeight = window.innerHeight;

        // 【极速循环】
        for (let i = 0; i < entries.length; i++) {
            const el = entries[i];
            const rect = el.getBoundingClientRect(); 

            // 【核心优化】视口剔除：屏幕上下 300px 以外的元素，完全不操作 DOM
            if (rect.bottom < -300 || rect.top > viewportHeight + 300) continue;

            const dist = Math.abs(rect.top + rect.height/2 - viewCenter); 
            
            // 找最近的元素
            if(dist < minDiff) { minDiff = dist; closest = el; } 
            
            // 只有在屏幕中间区域 (距离中心 300px 内) 才做缩放，边缘不做
            // 减少重绘区域
            if (dist < 300) {
                 const card = el.querySelector('.entry-card'); 
                 if (card && !card.classList.contains('selected')) { 
                     // 极简缩放算法
                     const scale = 1; // 性能优先，暂时移除缩放，或者改回 0.95
                     const opacity = dist < 250 ? 1 : 0.8; 
                     
                     // 只在值改变时才写入 DOM (虽然浏览器会优化，但我们可以做得更好)
                     if (card.style.opacity != opacity) card.style.opacity = opacity;
                 }
            }
        }

        // 3. 更新 HUD (只在最近元素变化时更新)
        if(closest && !closest.classList.contains('active-focus')) {
            // 移除旧焦点的类
            const oldFocus = document.querySelector('.entry-item.active-focus');
            if(oldFocus) oldFocus.classList.remove('active-focus');
            
            closest.classList.add('active-focus'); 
            
            // 更新光标
            const cursor = document.getElementById('beam-cursor'); 
            if(cursor) {
                const rect = closest.getBoundingClientRect();
                const magnetY = rect.top + rect.height/2 - viewCenter;
                // 只有非常靠近中间才吸附，否则居中
                cursor.style.top = (Math.abs(magnetY) < 60) ? `calc(50% + ${magnetY}px)` : '50%';
            }
            
            // 更新 HUD 文字
            const activeColor = closest.style.getPropertyValue('--node-active-color') || '#f59e0b'; 
            document.documentElement.style.setProperty('--current-beam-color', activeColor);
            
            // 缓存 DOM 查询
            const hudDay = document.getElementById('hud-day');
            const hudMeta = document.getElementById('hud-month-year');
            const hudTime = document.getElementById('hud-time');
            
            if(hudDay.innerText !== closest.dataset.day) hudDay.innerText = String(closest.dataset.day).padStart(2, '0');
            if(hudMeta.innerText !== `${closest.dataset.month} ${closest.dataset.year}`) hudMeta.innerText = `${closest.dataset.month} ${closest.dataset.year}`;
            if(hudTime.innerText !== closest.dataset.time) hudTime.innerText = closest.dataset.time;
            
            this.updateCelestialPosition(parseInt(closest.dataset.hour)); 
            if(closest.dataset.weather) ParticleSystem.setWeather(closest.dataset.weather);
        }
    },
    drawTaskConnectors: function() {
        const layer = document.getElementById('task-lines-layer');
        if(!layer) return;
        layer.innerHTML = ''; // 清空旧线

        // 1. 获取所有 DOM 元素并按位置排序
        // 使用 Array.from 确保是数组
        const items = Array.from(document.querySelectorAll('.entry-item'));
        
        // 2. 提取任务节点信息
        const tasks = [];
        items.forEach(el => {
            if (el.dataset.isTask === 'true') {
                const rect = el.querySelector('.timeline-node').getBoundingClientRect();
                // 必须根据 main-container 的相对位置计算，因为它是滚动的
                const containerRect = document.getElementById('main-container').getBoundingClientRect();
                
                tasks.push({
                    id: el.id,
                    type: el.dataset.taskType, // 'start' or 'end'
                    cat: el.dataset.taskCat,   // 'Exercise', 'Sleep'...
                    ts: parseInt(el.dataset.ts),
                    // 计算相对于容器列表的绝对 Top 值
                    top: el.offsetTop + (el.offsetHeight / 2), 
                    dom: el
                });
            }
        });

        // 3. 配对逻辑：从上往下找 (时间倒序：上面是 End，下面是 Start)
        // 我们遍历所有的 'end' 节点，去寻找它下面最近的一个同类型 'start' 节点
        tasks.filter(t => t.type === 'end').forEach(endNode => {
            // 在这个 end 节点之下（top 值比它大），且类型相同的最近一个 start
            const startNode = tasks.find(t => 
                t.cat === endNode.cat && 
                t.type === 'start' && 
                t.top > endNode.top
            );

            if (startNode) {
                // --- A. 画线 ---
                const height = startNode.top - endNode.top;
                const line = document.createElement('div');
                line.className = 'task-highlight-line';
                
                // 颜色映射
                const colors = { 'Exercise':'#ef4444', 'Sleep':'#3b82f6', 'Focus':'#10b981', 'Meditation':'#a855f7' };
                const color = colors[endNode.cat] || '#eab308';
                
                line.style.background = `linear-gradient(to bottom, ${color}, ${color})`;
                line.style.top = `${endNode.top}px`;
                line.style.height = `${height}px`;
                line.style.backgroundColor = color; // 备用
                
                // --- B. 计算时长 ---
                const diffMs = endNode.ts - startNode.ts;
                const mins = Math.floor(diffMs / 60000);
                const hrs = (diffMs / 3600000).toFixed(1);
                let timeLabel = mins + 'm';
                if (mins > 60) timeLabel = hrs + 'h';

                // --- C. 添加标签 ---
                line.innerHTML = `<div class="task-line-label label-mid" style="color:${color}">${timeLabel}</div>`;
                
                layer.appendChild(line);
            }
        });
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

// --- 在 app.js 中替换 generateReport 函数 ---

// --- 在 app.js 中替换 generateReport 函数 ---

generateReport: async function() {
    const zodiac = document.getElementById('oracle-zodiac').value || "Unknown";
    const bazi = document.getElementById('oracle-bazi').value || "Unknown";
    const container = document.getElementById('summary-ai-content');
    const lang = this.state.lang;
    const currentPersona = this.state.persona || 'western';

    // 1. 界面切换
    document.getElementById('oracle-input-view').classList.add('hidden');
    document.getElementById('oracle-result-view').classList.remove('hidden');

    // 显示加载动画
    container.innerHTML = `<div class="flex flex-col items-center justify-center h-full opacity-60 animate-pulse space-y-4">
        <i data-lucide="sparkles" class="w-8 h-8 text-purple-500"></i>
        <p class="text-xs font-bold tracking-widest opacity-50">Connecting to the stars...</p>
    </div>`;
    if(typeof lucide !== 'undefined') lucide.createIcons();
    
    // 2. 准备数据（关键修复：清理图片代码）
    const allData = await DataManager.getAll();
    const sevenDaysAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
    
    const recentData = allData
        .filter(e => e.ts > sevenDaysAgo)
        .sort((a,b) => a.ts - b.ts)
        .map(e => {
            const d = new Date(e.ts);
            const weekDay = d.toLocaleDateString(lang==='zh'?'zh-CN':'en-US', {weekday: 'long'});
            
            // 【核心修复】使用正则移除所有 Markdown 图片和 HTML 图片标签，防止 Token 爆炸
            // 匹配 ![...](...) 或 <img ...> 或 base64 引用
            let cleanContent = (e.content || "")
                .replace(/!\[.*?\]\(.*?\)/g, '[Image]') 
                .replace(/<img[^>]*>/g, '[Image]')
                .replace(/\[.*?\]:\s*data:image\/.*?(?:\n|$)/g, ''); 

            return `[${weekDay}] ${e.title} (Mood:${e.mood}, Weather:${e.weather}): ${cleanContent}`;
        })
        .join('\n');

    const dataContext = recentData.length > 10 ? recentData : "(User was quiet this week)";

    // 3. 构建 Prompt (保持你原有的设定)
    const prompts = {
        western: { role: "Astrologer Luna", tone: "Mystical, poetic, intimate." },
        eastern: { role: "Taoist Sage", tone: "Zen, philosophical, calm." },
        coach: { role: "Life Coach", tone: "Analytical, encouraging, sharp." }
    };
    const pConfig = prompts[currentPersona] || prompts.western;
    
    const finalPrompt = `
Role: ${pConfig.role}. Tone: ${pConfig.tone}.
User Info: Zodiac ${zodiac}, Bazi ${bazi}.
Context: This is the user's diary from the last 7 days:
---
${dataContext}
---
Task: Write a weekly insight letter in ${lang === 'zh' ? 'Chinese' : 'English'}.
Requirements:
1. Use Markdown (## for titles, ** for highlights).
2. Keep it under 250 words.
3. Be personal and specific to the diary content.
`;

    // 4. 调用 API
    try {
        let report = await DataManager.callDeepseek(finalPrompt, 1000);
        report = report.replace(/```markdown/g, '').replace(/```/g, '').trim();
        container.innerHTML = marked.parse(report);
    } catch(e) {
        console.error(e);
        container.innerHTML = `<div class="p-4 text-center opacity-70"><p>Connection faded...</p><p class="text-xs mt-2">${e.message}</p></div>`;
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
// 在 app.js 中替换 handleImageUpload

    handleImageUpload: async function(input) { 
        if(input.files[0]) { 
            const file = input.files[0];
            
            // 视觉反馈：显示加载中
            const previewArea = document.getElementById('image-preview-area');
            const previewImg = document.getElementById('preview-img');
            previewArea.classList.remove('hidden');
            previewImg.style.opacity = '0.5'; // 变灰表示处理中
            
            try {
                // 使用 db.js 的新压缩函数 (最大宽度 1024px, 质量 0.7)
                // 这会将 10MB 的图压缩到 200KB 左右，彻底解决卡顿
                const compressedBase64 = await DataManager.compressImage(file, 1024, 0.7);
                
                this.state.tempImage = compressedBase64;
                previewImg.src = compressedBase64;
                previewImg.style.opacity = '1'; // 恢复亮度
                
            } catch (e) {
                console.error("Compression failed", e);
                alert("Failed to process image.");
                this.clearImage();
            }
        } 
        input.value = ''; 
    },
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
    // 在 app.js 中替换 handleInlineMedia

    handleInlineMedia: async function(input, type) {
        const file = input.files[0];
        if (!file) return;

        const editor = document.getElementById('editor-content');
        const uniqueId = `${type}-${Date.now()}-${Math.floor(Math.random() * 999)}`;
        const loadingTag = ` [Processing ${type}...] `;
        
        // 1. 插入占位符
        if (editor.tagName === 'TEXTAREA') {
            // ...兼容 textarea 的代码保持不变...
             const start = editor.selectionStart;
             const end = editor.selectionEnd;
             const text = editor.value;
             editor.value = text.substring(0, start) + loadingTag + text.substring(end);
        } else {
             // 兼容 contenteditable div
             UI.insertText(loadingTag);
        }

        try {
            let resultBase64 = null;

            if (type === 'image') {
                // --- 核心修改：压缩图片 ---
                // 文内图片可以稍微大一点点，设为 1200px
                resultBase64 = await DataManager.compressImage(file, 1200, 0.7);
            } else if (type === 'video') {
                // 视频暂时不做压缩（太复杂），但维持大小限制
                if (file.size > 10 * 1024 * 1024) {
                    alert("❌ Video too large (Max 10MB).");
                    // 移除占位符
                    editor.innerHTML = editor.innerHTML.replace(loadingTag, '');
                    return;
                }
                // 视频转 Base64
                resultBase64 = await new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.onload = (e) => resolve(e.target.result);
                    reader.readAsDataURL(file);
                });
            }

            // 2. 替换内容
            let currentContent = editor.innerText; // 注意：contenteditable 取 innerText 比较稳
            if(editor.value !== undefined) currentContent = editor.value; // Textarea 取 value

            if (type === 'image') {
                const shortTag = `\n![Image][${uniqueId}]\n`;
                const footerCode = `\n\n[${uniqueId}]: ${resultBase64}`;
                currentContent = currentContent.replace(loadingTag, shortTag) + footerCode;
            } else {
                const videoTag = `\n<video src="${resultBase64}" controls></video>\n`;
                currentContent = currentContent.replace(loadingTag, videoTag);
            }

            // 回填内容
            if(editor.value !== undefined) editor.value = currentContent;
            else editor.innerText = currentContent;

            // 触发预览更新
            if(editor.oninput) editor.oninput();
            if(document.getElementById('editor-preview').classList.contains('active-preview')) {
                // 如果正在预览，强制刷新预览
                document.getElementById('editor-preview').innerHTML = marked.parse(currentContent);
            }

        } catch (e) {
            console.error(e);
            alert("Upload failed.");
        } finally {
            input.value = '';
        }
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
        const g = document.getElementById('calendar-grid'); 
        if (!g) return;
        g.innerHTML = ''; 
        
        const y = this.state.calendarDate.getFullYear();
        const m = this.state.calendarDate.getMonth(); 
        
        // 1. 更新标题
        document.getElementById('cal-month-display').innerText = new Date(y, m).toLocaleString(this.state.lang === 'zh' ? 'zh-CN' : 'en-US', { month: 'short' }); 
        
        // 2. 更新年份（带刷新按钮）
        const yearEl = document.getElementById('cal-year-display');
        yearEl.innerHTML = `
            ${y} 
            <button onclick="event.stopPropagation(); DataManager.checkAndAddHolidays(true)" class="ml-2 opacity-50 hover:opacity-100 hover:text-[var(--primary)] transition-all cursor-pointer" title="Update Holidays">
                <i data-lucide="refresh-cw" class="w-3 h-3 inline"></i>
            </button>
        `;

        // 3. 计算日历结构
        const fd = new Date(y, m, 1).getDay(); // 本月第一天是周几
        const dim = new Date(y, m + 1, 0).getDate(); // 本月有多少天
        const allData = await DataManager.getAll();
        
        // 获取今天的日期，用于标记
        const today = new Date();
        const isCurrentMonth = today.getFullYear() === y && today.getMonth() === m;
        const todayDate = today.getDate();

        // 4. 填充空白格
        for(let i=0; i<fd; i++) {
            g.appendChild(document.createElement('div')); 
        }
        
        // 5. 填充日期格
        for(let i=1; i<=dim; i++) { 
            const d = document.createElement('div'); 
            d.className = 'calendar-cell hover:bg-[var(--line)]/30 transition-colors cursor-pointer'; 
            
            // 农历计算
            let lunarText = ''; 
            if (window.Lunar) { 
                try { 
                    const solar = Solar.fromYmd(y, m+1, i); 
                    lunarText = solar.getLunar().getDayInChinese(); 
                } catch(e){} 
            }
            
            // 查找这一天是否有日记
            const dayEntries = allData.filter(x => { 
                const t = new Date(x.ts); 
                return t.getFullYear()===y && t.getMonth()===m && t.getDate()===i; 
            }); 
            
            // 判断这格是不是今天
            const isTodayCell = isCurrentMonth && i === todayDate;
            if (isTodayCell) d.classList.add('current-day'); 
            
            // 构建小圆点 HTML
            let dotHtml = '';
            if (dayEntries.length > 0) {
                // 如果是今天，用 cal-dot-today (红色)，否则用 cal-dot (灰色)
                const dotClass = isTodayCell ? 'cal-dot-today' : 'cal-dot';
                dotHtml = `<div class="${dotClass}"></div>`;
                d.classList.add('font-bold'); 
                d.onclick=()=>this.openDetail(dayEntries[0]); 
            } else { 
                d.onclick=()=>this.openEditor(`${y}-${String(m+1).padStart(2,'0')}-${String(i).padStart(2,'0')}`); 
            }
            
            // 插入 HTML：日期数字 + 农历 + 小圆点
            d.innerHTML = `<span>${i}</span><span class="calendar-lunar">${lunarText}</span>${dotHtml}`;
            g.appendChild(d); 
        } 
        
        // 6. 渲染底部的列表
        this.renderArchiveList(allData.filter(x => { 
            const t=new Date(x.ts); 
            return t.getFullYear()===y && t.getMonth()===m; 
        }).sort((a,b)=>b.ts-a.ts)); 

        // 7. 刷新图标
        if(typeof lucide !== 'undefined') lucide.createIcons();
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
        // 【核心修复】获取保存按钮
        const btnSave = document.querySelector('#editor-panel button[onclick="DataManager.saveFromEditor()"]');
        
        // 1. 防止重复点击：如果按钮已经被禁用了，直接停止执行！
        if (btnSave && btnSave.disabled) return;

        // 2. 立即禁用按钮，改文字
        const originalText = btnSave ? btnSave.innerText : 'Save';
        if(btnSave) {
            btnSave.disabled = true;
            btnSave.innerHTML = '<i data-lucide="loader" class="w-3 h-3 animate-spin"></i> Saving...';
            btnSave.classList.add('opacity-50', 'cursor-not-allowed');
            if(typeof lucide !== 'undefined') lucide.createIcons();
        }

        try {
            // ... (这里是你原有的保存逻辑，无需改动，为了节省篇幅我省略了中间取值的代码) ...
            // 请保留原本的 id, t, content, d, tm 等获取逻辑 ...
            const id = document.getElementById('editor-id').value; 
            const t = document.getElementById('editor-title').value || "Untitled"; 
            const contentDiv = document.getElementById('editor-content');
            const c = contentDiv.innerHTML; 
            let coverImg = null;
            const firstImg = contentDiv.querySelector('img');
            if (firstImg) coverImg = firstImg.src;
            const d = document.getElementById('editor-date').value; 
            const tm = document.getElementById('editor-time').value; 
            const cal = document.getElementById('editor-calories').value;
            const type = document.getElementById('editor-entry-type').value;
            const taskCat = document.getElementById('editor-task-cat').value; 
            const recurrence = document.getElementById('editor-recurrence').value;
            let anni = (type === 'anni');
            let isTask = (type === 'task');
            let taskType = null; 
            if (taskCat) { isTask = true; taskType = 'start'; }

            if(d) { 
                const [y,m,day] = d.split('-').map(Number); 
                const [hr,min] = tm ? tm.split(':').map(Number) : [12,0]; 
                const ts = new Date(y,m-1,day,hr,min).getTime(); 
                
                const payload = { 
                    ts, h: hr, title: t, content: c, mood: UI.state.mood, weather: UI.state.weather, 
                    img: coverImg, calories: cal ? parseInt(cal) : null, 
                    anni, isTask, taskCat, taskType, 
                    recurrence: (taskCat) ? 'none' : ((type === 'diary') ? 'none' : recurrence)
                }; 

                // 数据库操作
                if (id) await this.update(id, payload); 
                else await this.add(payload); 
                
                UI.closeEditor(); 
            } else { 
                alert('Date required'); 
            }
        } catch (e) {
            console.error(e);
            alert("Save failed: " + e.message);
        } finally {
            // 3. 无论成功失败，恢复按钮状态
            if(btnSave) {
                btnSave.disabled = false;
                btnSave.innerText = originalText;
                btnSave.classList.remove('opacity-50', 'cursor-not-allowed');
            }
        }
    };
}
}

window.onload = () => UI.init();