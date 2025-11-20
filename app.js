const DEFAULT_KEY = "AIzaSyDjPO6FOcgwrWWVXfovoqsmIJD4xaeUiXE";

const I18N = {
    en: {
        timeline_title: "Timeline Flow", timeline_desc: "A fluid, perspective-based journal.",
        ai_title: "AI Oracle", ai_desc: "Fortune teller.",
        future: "Future Unwritten", origin: "The Beginning",
        nav_timeline: "TIMELINE", nav_calendar: "CALENDAR",
        info_title: "About Timeline", data_title: "Data Management", storage_title: "Storage Usage",
        btn_backup: "Backup", btn_restore: "Restore", btn_reset: "Reset All Data",
        btn_save: "Save", btn_delete: "Delete", btn_cancel: "Cancel", btn_edit: "Edit",
        btn_export: "EXPORT MD", btn_consult: "Consult",
        label_zodiac: "Zodiac", label_birth: "Birth Date", archive_title: "Archive",
        empty_month: "No entries.", empty_gallery: "No images.",
        delete_title: "Delete Memory?", delete_desc: "Undone."
    },
    zh: {
        timeline_title: "时光流", timeline_desc: "透视日记本。",
        ai_title: "AI 预言家", ai_desc: "星光指引。",
        future: "未来篇章", origin: "起源之时",
        nav_timeline: "时间轴", nav_calendar: "日历",
        info_title: "关于时光流", data_title: "数据管理", storage_title: "存储空间",
        btn_backup: "备份", btn_restore: "恢复", btn_reset: "重置",
        btn_save: "保存", btn_delete: "删除", btn_cancel: "取消", btn_edit: "编辑",
        btn_export: "导出 MD", btn_consult: "推演",
        label_zodiac: "星座", label_birth: "生日/八字", archive_title: "归档",
        empty_month: "无记录。", empty_gallery: "无图片。",
        delete_title: "删除回忆？", delete_desc: "无法撤销。"
    }
};

const QUESTIONS = [ "What made you smile?", "Any new ideas?", "What are you grateful for?", "What challenged you?", "Who did you meet?", "Describe the weather." ];

// --- THEME CONFIGURATION ---
const TIME_THEMES = {
    dawn: {
        bgGradient: ['#FF9A8B', '#FF6A88', '#FF99AC'],
        celestialGradient: ['#FFF5E6', '#FFC3A0'],
        particleConfig: { type: 'mist', count: 60, behavior: 'breathing' }
    },
    dusk: {
        bgGradient: ['#24243e', '#7F5A83', '#FFC3A0'], 
        celestialGradient: ['#FFD700', '#FF8C00'],
        particleConfig: { type: 'ember', count: 100, behavior: 'fading' }
    },
    day: {
        bgGradient: ['#5CA0D3', '#9AC6F5', '#E0F7FA'],
        celestialGradient: ['#FFFFFF', '#FFFACD'],
        particleConfig: { type: 'beam_only', count: 7, behavior: 'breathing' } 
    },
    night: {
        bgGradient: ['#0B1026', '#16213E', '#1F2F4F'],
        celestialGradient: ['#E6E6FA', '#C0C0C0'],
        particleConfig: { type: 'star', count: 120, behavior: 'twinkling' }
    }
};

// Special weather override configs
const WEATHER_OVERRIDES = {
    rain: { type: 'rain', count: 300, behavior: 'raining' },
    cloud: { type: 'cloud_only', count: 20, behavior: 'floating' }
};

let currentThemeConfig = TIME_THEMES.day.particleConfig;
let currentWeatherState = 'sun';

const ParticleSystem = {
    canvas: null, ctx: null, particles: [], width: 0, height: 0, running: false,
    init: function() {
        this.canvas = document.getElementById('world-canvas'); this.ctx = this.canvas.getContext('2d');
        this.resize(); window.addEventListener('resize', () => this.resize());
        this.switchTheme('day'); 
        this.running = true; this.animate();
    },
    resize: function() {
        this.width = window.innerWidth; this.height = window.innerHeight;
        this.canvas.width = this.width; this.canvas.height = this.height;
    },
    setWeather: function(weather) {
        currentWeatherState = weather;
        if (weather === 'rain') {
            currentThemeConfig = WEATHER_OVERRIDES.rain;
            this.resetParticles();
        } else if (weather === 'cloud' && currentThemeConfig.type !== 'beam_only') {
             currentThemeConfig = WEATHER_OVERRIDES.cloud;
             this.resetParticles();
        }
    },
    switchTheme: function(themeKey) {
        const theme = TIME_THEMES[themeKey];
        if (!theme) return;
        
        const r = document.documentElement.style;
        r.setProperty('--bg-start', theme.bgGradient[0]);
        r.setProperty('--bg-end', theme.bgGradient[theme.bgGradient.length - 1]);
        r.setProperty('--celestial-start', theme.celestialGradient[0]);
        r.setProperty('--celestial-end', theme.celestialGradient[1]);
        
        if (currentWeatherState !== 'rain') {
            currentThemeConfig = theme.particleConfig;
            if (this.particles.length > 0 && this.particles[0].type !== currentThemeConfig.type) {
                this.resetParticles();
            } else if (this.particles.length === 0) {
                this.resetParticles();
            }
        }
    },
    resetParticles: function() {
        this.particles = [];
        for(let i=0; i<currentThemeConfig.count; i++) this.particles.push(new Particle(this.width, this.height));
    },
    animate: function() {
        if(!this.running) return;
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.particles.forEach(p => { p.update(); p.draw(this.ctx); });
        requestAnimationFrame(() => this.animate());
    }
};

class Particle {
    constructor(w, h) { this.cw = w; this.ch = h; this.reset(true); }
    
    reset(isInitial = false) {
        const cfg = currentThemeConfig;
        this.type = cfg.type;
        
        this.x = Math.random() * this.cw;
        this.y = Math.random() * this.ch;
        this.speedX = 0; this.speedY = 0;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.life = 1;

        if (cfg.type === 'rain') {
            this.x = Math.random() * this.cw;
            this.y = Math.random() * -this.ch; 
            this.speedY = Math.random() * 5 + 2; 
            this.speedX = -0.5; 
            this.len = Math.random() * 15 + 5; 
            this.opacity = Math.random() * 0.4 + 0.2; 
        } 
        else if (cfg.type === 'beam_only') {
            this.width = Math.random() * 60 + 20; 
            this.len = Math.random() * 600 + 300; 
            this.angle = 0.35; 
            this.speedX = 0.02; 
            this.opacity = Math.random() * 0.1 + 0.05; 
        }
        else if (cfg.type === 'tyndall_cloud') { 
            this.size = Math.random() * 80 + 30; 
            this.speedX = Math.random() * 0.15 + 0.05;
            this.opacity = Math.random() * 0.2 + 0.1; 
        }
        else if (cfg.type === 'ember') {
            this.y = this.ch + Math.random() * 20;
            this.size = Math.random() * 3 + 1;
            this.speedY = -(Math.random() * 1 + 0.5);
            this.speedX = (Math.random() - 0.5) * 0.5;
        }
        else if (cfg.type === 'mist') {
             this.size = Math.random() * 20 + 10;
             this.speedY = -0.2;
             this.speedX = Math.random() * 0.2 - 0.1;
        }
        else { 
            this.size = Math.random() * 2;
        }

        this.baseOpacity = this.opacity;
        this.breathOffset = Math.random() * Math.PI * 2;
    }

    update() {
        const cfg = currentThemeConfig;
        
        if (cfg.type === 'rain') {
            this.y += this.speedY;
            this.x += this.speedX;
            if (this.y > this.ch) { this.y = -20; this.x = Math.random() * this.cw; }
        } 
        else if (cfg.type === 'beam_only') {
            this.x += this.speedX;
            if (this.x > this.cw + 200) this.x = -200;
            this.breathOffset += 0.01;
            this.opacity = this.baseOpacity + Math.sin(this.breathOffset) * 0.05;
        }
        else if (cfg.type === 'tyndall_cloud') {
            this.x += this.speedX;
            if (this.x > this.cw + 200) this.x = -200;
        }
        else if (cfg.type === 'ember') {
            this.y += this.speedY;
            this.x += this.speedX;
            this.opacity -= 0.005;
            if (this.opacity <= 0) this.reset();
        }
        else {
            this.y += (this.speedY || 0);
            this.x += (this.speedX || 0);
            if (cfg.behavior === 'breathing' || cfg.behavior === 'twinkling') {
                this.breathOffset += 0.02;
                this.opacity = this.baseOpacity + Math.sin(this.breathOffset) * (cfg.type==='star'?0.5:0.1);
            }
            if (this.x > this.cw) this.x = 0;
            if (this.y < 0) this.y = this.ch;
        }
    }

    draw(ctx) {
        const cfg = currentThemeConfig;
        ctx.save();
        
        if (cfg.type === 'rain') {
            ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.lineWidth = 1; 
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x + this.speedX * 2, this.y + this.len);
            ctx.stroke();
        }
        else if (cfg.type === 'beam_only') {
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            const grad = ctx.createLinearGradient(0, 0, 0, this.len);
            grad.addColorStop(0, `rgba(255,250,240,0)`); 
            grad.addColorStop(0.2, `rgba(255,250,240,${this.opacity})`); 
            grad.addColorStop(1, `rgba(255,250,240,0)`); 
            ctx.fillStyle = grad;
            ctx.fillRect(-this.width/2, 0, this.width, this.len);
        }
        else if (cfg.type === 'tyndall_cloud' || cfg.type === 'cloud_only') {
             ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
             ctx.filter = 'blur(30px)'; 
             ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI*2); ctx.fill();
             ctx.filter = 'none';
        }
        else if (cfg.type === 'ember') {
            ctx.fillStyle = `rgba(255, 100, 50, ${this.opacity})`;
            ctx.beginPath(); 
            ctx.moveTo(this.x, this.y-this.size);
            ctx.lineTo(this.x+this.size, this.y);
            ctx.lineTo(this.x, this.y+this.size);
            ctx.lineTo(this.x-this.size, this.y);
            ctx.fill();
        }
        else {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.beginPath(); ctx.arc(this.x, this.y, this.size || 2, 0, Math.PI*2); ctx.fill();
        }
        ctx.restore();
    }
}

const UI = {
    DEFAULT_KEY: "AIzaSyDjPO6FOcgwrWWVXfovoqsmIJD4xaeUiXE",
    state: { mood: 'smile', weather: 'sun', calendarDate: new Date(), currentDetailId: null, tempImage: null, lang: 'en', currentRotation: 0, persona: 'western', filters: {anni:true, holiday:true, normal:true} },
    cachedEntryItems: [],

    init: async function() {
        await DataManager.init(); 
        ParticleSystem.init(); 
        lucide.createIcons(); 
        this.initScrollObserver(); 
        this.refreshAll();
        if(localStorage.getItem('user_zodiac')) document.getElementById('user-zodiac').value = localStorage.getItem('user_zodiac');
        if(localStorage.getItem('user_bazi')) document.getElementById('user-bazi').value = localStorage.getItem('user_bazi');
        if(localStorage.getItem('app_lang')) this.setLanguage(localStorage.getItem('app_lang'));
        this.updateCelestialPosition(12);
    },

    refreshAll: function() { this.renderTimeline(); this.renderCalendar(); },
    
    toggleFilter: function(type) {
        this.state.filters[type] = !this.state.filters[type];
        document.querySelector(`.f-${type}`).classList.toggle('active', this.state.filters[type]);
        this.renderTimeline();
    },
    
    switchView: function(v) {
        const tl = document.getElementById('view-timeline'), cal = document.getElementById('view-calendar'), hud = document.getElementById('focus-hud');
        if(v === 'timeline') {
            tl.classList.replace('hidden-view','active-view'); cal.classList.replace('active-view','hidden-view');
            document.getElementById('btn-timeline').classList.add('active'); document.getElementById('btn-calendar').classList.remove('active');
            hud.classList.remove('opacity-0'); setTimeout(() => this.handleScroll(), 100);
        } else {
            tl.classList.replace('active-view','hidden-view'); cal.classList.replace('hidden-view','active-view');
            document.getElementById('btn-calendar').classList.add('active'); document.getElementById('btn-timeline').classList.remove('active');
            hud.classList.add('opacity-0'); this.renderCalendar();
        }
    },
    
    switchSubView: function(v) {
        const grid = document.getElementById('calendar-container'); const gallery = document.getElementById('gallery-container'); const btnG = document.getElementById('btn-sub-grid'); const btnP = document.getElementById('btn-sub-gallery');
        if (v === 'grid') { grid.classList.remove('hidden'); gallery.classList.add('hidden'); btnG.classList.add('active'); btnP.classList.remove('active'); } 
        else { grid.classList.add('hidden'); gallery.classList.remove('hidden'); btnG.classList.remove('active'); btnP.classList.add('active'); this.renderGallery(); }
    },

    renderTimeline: async function() {
        const c = document.getElementById('diary-list'); c.innerHTML = ''; 
        const allData = await DataManager.getAll();
        let entries = allData.sort((a, b) => b.ts - a.ts);
        
        entries = entries.filter(e => {
            if(e.isHoliday) return this.state.filters.holiday;
            if(e.anni) return this.state.filters.anni;
            return this.state.filters.normal;
        });

        if(entries.length === 0) { c.innerHTML = `<div class="text-center opacity-50 py-20 flex flex-col items-center gap-2"><i data-lucide="feather" class="w-8 h-8 opacity-50"></i><span>Tap to start.</span></div>`; lucide.createIcons(); return; }
        const now = new Date(); const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();

        entries.forEach(i => {
            const d = new Date(i.ts); const div = document.createElement('div'); div.className = `entry-item`;
            div.dataset.ts = i.ts; div.dataset.hour = d.getHours(); div.dataset.day = d.getDate();
            div.dataset.month = d.toLocaleString(this.state.lang === 'zh' ? 'zh-CN' : 'en-US', {month:'short'}); div.dataset.year = d.getFullYear();
            div.dataset.time = this.formatTime(d);
            div.dataset.weather = i.weather || 'sun';
            
            let nodeClass = ''; let cardClass = ''; let extraHtml = '';
            if (i.isHoliday) {
                cardClass = 'card-holiday'; 
                extraHtml = `<div class="holiday-badge anni-badge text-[0.6rem] mb-1 px-1 rounded font-bold uppercase tracking-wider">Festival</div>`;
                nodeClass = 'node-holiday'; 
                div.style.setProperty('--node-color', '#4ade80');
            } else if (i.anni) {
                let targetDate = new Date(i.ts); let diff = 0;
                if (i.anniType === 'annual') {
                    const currentYear = now.getFullYear(); targetDate.setFullYear(currentYear);
                    if (targetDate.getTime() < todayStart) { targetDate.setFullYear(currentYear + 1); }
                    diff = Math.ceil((targetDate - now) / (1000 * 60 * 60 * 24));
                    extraHtml = `<div class="anni-badge anni-future-badge">IN ${Math.abs(diff)} DAYS</div>`;
                    cardClass='card-anni-future'; 
                } else {
                    diff = Math.ceil((now - d) / (1000 * 60 * 60 * 24));
                    if (diff > 0) { extraHtml = `<div class="anni-badge anni-past-badge">${diff} DAYS AGO</div>`; cardClass='card-anni-past'; } 
                    else { extraHtml = `<div class="anni-badge anni-future-badge">IN ${Math.abs(diff)} DAYS</div>`; cardClass='card-anni-future'; }
                }
                nodeClass = 'node-anni'; 
                div.style.setProperty('--node-color', '#fbbf24');
            } else {
                div.style.setProperty('--node-color', '#e5e7eb');
            }

            let thumbHtml = i.img ? `<div class="card-thumb-col"><img src="${i.img}" class="card-thumb-img"></div>` : '';
            const sum = i.content.replace(/<[^>]*>/g, '').substring(0, 120) + (i.content.length > 120 ? '...' : '');
            
            div.innerHTML = `
                <style>.timeline-node.${nodeClass} { background-color: var(--node-color) !important; border-color: var(--node-color) !important; }</style>
                <div class="timeline-node-wrapper"><div class="timeline-node ${nodeClass}" style="background-color: var(--node-color); border-color: var(--node-color);"></div></div>
                <div class="entry-card-wrapper"><div class="entry-card ${cardClass}" onclick="UI.openDetailById(${i.id})" style="${!i.img ? 'padding-left:1.2rem' : ''}">${thumbHtml}<div class="card-main-col"><div class="card-mood"><i data-lucide="${this.getMoodIcon(i.mood)}" class="w-4 h-4"></i></div>${extraHtml}<h3 class="text-xl font-bold text-[var(--text)] font-display leading-tight mb-2 line-clamp-2 pr-6">${i.title}</h3><p class="text-sm text-[var(--text)]/70 font-serif leading-relaxed line-clamp-2">${sum}</p></div></div></div>`;
            c.appendChild(div);
        });
        lucide.createIcons(); 
        this.cachedEntryItems = Array.from(document.querySelectorAll('.entry-item'));
        setTimeout(() => this.handleScroll(), 50);
    },

    renderArchiveList: function(entries) {
         const container = document.getElementById('month-entries'); 
         const emptyState = document.getElementById('month-empty-state'); 
         container.innerHTML = '';
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

    renderGallery: async function() {
         const container = document.getElementById('gallery-grid-view'); const empty = document.getElementById('gallery-empty'); container.innerHTML = '';
         const allData = await DataManager.getAll();
         const images = allData.filter(e => e.img);
         if(images.length === 0) { empty.classList.remove('hidden'); } else { empty.classList.add('hidden'); images.forEach(e => { const d = new Date(e.ts); const div = document.createElement('div'); div.className = 'gallery-item'; div.onclick = () => UI.openDetail(e); div.innerHTML = `<img src="${e.img}" loading="lazy"><div class="gallery-date">${d.toLocaleDateString()}</div>`; container.appendChild(div); }); }
    },

    initScrollObserver: function() {
        const main = document.getElementById('main-container'); let ticking = false;
        main.addEventListener('scroll', () => { if (!ticking) { window.requestAnimationFrame(() => { this.handleScroll(); ticking = false; }); ticking = true; } }, { passive: true });
    },

    handleScroll: function() {
        const entries = this.cachedEntryItems; 
        if(!entries || entries.length === 0) return;

        const main = document.getElementById('main-container');
        const topPh = document.getElementById('future-placeholder'); const botPh = document.getElementById('origin-placeholder');
        if(topPh) topPh.style.opacity = main.scrollTop < 60 ? 1 - (main.scrollTop / 60) : 0;
        if(botPh) { const d = main.scrollHeight - main.scrollTop - main.clientHeight; botPh.style.opacity = d < 60 ? 1 - (d / 60) : 0; }
        
        const viewCenter = window.innerHeight / 2; let closest = null; let minDiff = Infinity;
        
        for (let i = 0; i < entries.length; i++) {
            const el = entries[i];
            const rect = el.getBoundingClientRect();
            const diff = Math.abs(rect.top + rect.height / 2 - viewCenter);
            
            if (rect.bottom < 0 || rect.top > window.innerHeight) continue;

            const card = el.querySelector('.entry-card-wrapper'); 
            const node = el.querySelector('.timeline-node');
            el.classList.remove('active-focus');
            
            if (card) { card.style.transform = `translate3d(0,0,0) scale(0.95)`; card.style.opacity = 0.6; } 
            if (node) { node.style.transform = `scale(1)`; node.style.boxShadow = ''; }
            
            const distRatio = Math.min(diff / (window.innerHeight * 0.4), 1);
            const scale = 1 - (distRatio * 0.05); // 0.95 to 1.0
            const op = 0.6 + (1 - distRatio) * 0.4; // 0.6 to 1.0
            
            if (card) { card.style.transform = `translate3d(0,0,0) scale(${scale})`; card.style.opacity = op; }
            if(diff < minDiff) { minDiff = diff; closest = el; }
        }
        
        if(closest) {
            closest.classList.add('active-focus');
            const day = String(closest.dataset.day).padStart(2, '0'); const elDay = document.getElementById('hud-day');
            if (elDay && elDay.innerText !== day) { elDay.innerText = day; elDay.style.transform = "scale(1.2)"; elDay.style.color = "var(--primary)"; setTimeout(() => { elDay.style.transform = "scale(1)"; elDay.style.color = "var(--text)"; }, 200); }
            if(document.getElementById('hud-month-year')) document.getElementById('hud-month-year').innerText = `${closest.dataset.month} ${closest.dataset.year}`; 
            if(document.getElementById('hud-time')) document.getElementById('hud-time').innerText = closest.dataset.time;
            
            this.updateCelestialPosition(parseInt(closest.dataset.hour));
            if(closest.dataset.weather) ParticleSystem.setWeather(closest.dataset.weather);
        }
    },

    updateCelestialPosition: function(hour) {
        const isMoonTime = (hour >= 19 || hour < 5);
        const targetAngle = isMoonTime ? 180 : 0;
        
        let delta = targetAngle - (this.state.currentRotation % 360);
        if (delta > 180) delta -= 360;
        if (delta < -180) delta += 360;
        this.state.currentRotation += delta;
        document.getElementById('orbit-wheel').style.transform = `rotate(${this.state.currentRotation}deg)`;
        
        let themeKey = 'day';
        if(hour >= 5 && hour < 7) themeKey = 'dawn';
        else if(hour >= 7 && hour < 17) themeKey = 'day';
        else if(hour >= 17 && hour < 19) themeKey = 'dusk';
        else themeKey = 'night';

        if(document.body.getAttribute('data-theme') !== themeKey) { 
            document.body.setAttribute('data-theme', themeKey); 
            ParticleSystem.switchTheme(themeKey);
        }
    },

    editorInsertMD: function(syntax) {
        const editor = document.getElementById('editor-content');
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        const text = editor.value;
        const before = text.substring(0, start);
        const after = text.substring(end, text.length);
        editor.value = before + syntax + after;
        editor.focus();
        editor.selectionStart = start + syntax.length;
        editor.selectionEnd = start + syntax.length;
    },

    showPromptBubble: function() {
        const bubble = document.getElementById('prompt-bubble');
        bubble.innerText = QUESTIONS[Math.floor(Math.random()*QUESTIONS.length)];
        bubble.classList.remove('hidden');
        setTimeout(() => bubble.style.transform = "scale(1)", 100);
        setTimeout(() => { bubble.style.transform = "scale(0)"; setTimeout(()=>bubble.classList.add('hidden'), 300); }, 4000);
    },

    openInfo: function() { DataManager.updateStats(); document.getElementById('info-modal').classList.remove('hidden'); },
    closeInfo: function() { document.getElementById('info-modal').classList.add('hidden'); },
    
    setLanguage: function(lang) { 
        this.state.lang = lang; localStorage.setItem('app_lang', lang); const t = I18N[lang]; 
        document.querySelectorAll('[data-i18n]').forEach(el => { const k = el.getAttribute('data-i18n'); if (t[k]) el.innerText = t[k]; }); 
        document.getElementById('lang-en').className = lang === 'en' ? "px-4 py-1 rounded-full bg-[var(--primary)] text-white text-xs font-bold" : "px-4 py-1 rounded-full border border-[var(--line)] hover:bg-[var(--primary)] hover:text-white transition-colors text-xs font-bold"; 
        document.getElementById('lang-zh').className = lang === 'zh' ? "px-4 py-1 rounded-full bg-[var(--primary)] text-white text-xs font-bold" : "px-4 py-1 rounded-full border border-[var(--line)] hover:bg-[var(--primary)] hover:text-white transition-colors text-xs font-bold"; 
        this.renderCalendar(); this.renderTimeline(); 
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
            let lunarText = '';
            if (window.Lunar) { try { const solar = Solar.fromYmd(y, m+1, i); const lunar = solar.getLunar(); lunarText = lunar.getDayInChinese(); } catch(e){} }
            d.innerHTML = `<span>${i}</span><span class="calendar-lunar">${lunarText}</span>`;
            const today = new Date(); if(y===today.getFullYear() && m===today.getMonth() && i===today.getDate()) d.classList.add('current-day'); 
            const de = allData.filter(x => { const t = new Date(x.ts); return t.getFullYear()===y && t.getMonth()===m && t.getDate()===i; }); 
            if(de.length>0) { d.classList.add('has-entry', 'font-bold'); d.onclick=()=>this.openDetail(de[0]); } else { d.onclick=()=>this.openEditor(`${y}-${String(m+1).padStart(2,'0')}-${String(i).padStart(2,'0')}`); } g.appendChild(d); 
        } 
        this.renderArchiveList(allData.filter(x => { const t=new Date(x.ts); return t.getFullYear()===y && t.getMonth()===m; }).sort((a,b)=>b.ts-a.ts)); 
    },

    openEditor: function(dStr, exist) { 
        const m = document.getElementById('editor-modal'), p = document.getElementById('editor-panel'); 
        this.state.tempImage=null; document.getElementById('image-preview-area').classList.add('hidden'); 
        this.showPromptBubble();

        if(exist) { 
            const d=new Date(exist.ts); 
            document.getElementById('editor-id').value=exist.id; 
            document.getElementById('editor-title').value=exist.title; 
            document.getElementById('editor-content').value=exist.content; 
            document.getElementById('editor-date').value=d.toISOString().split('T')[0]; 
            document.getElementById('editor-time').value=`${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`; 
            this.selectMood(exist.mood); 
            this.selectWeather(exist.weather); 
            document.getElementById('editor-anni').checked = !!exist.anni; 
            document.getElementById('editor-anni-type').value = exist.anniType || 'once'; 
            if(document.getElementById('editor-anni').checked) document.getElementById('anni-type-wrapper').style.display='block'; 
            if(exist.img){
                this.state.tempImage=exist.img; document.getElementById('preview-img').src=exist.img; document.getElementById('image-preview-area').classList.remove('hidden');
            } 
        } else { 
            const n=new Date(); 
            document.getElementById('editor-id').value=''; 
            document.getElementById('editor-title').value=''; 
            document.getElementById('editor-content').value=''; 
            document.getElementById('editor-date').value=dStr||n.toISOString().split('T')[0]; 
            document.getElementById('editor-time').value=n.toTimeString().slice(0,5); 
            this.selectMood('smile'); 
            this.selectWeather('sun'); 
            document.getElementById('editor-anni').checked = false; 
            document.getElementById('anni-type-wrapper').style.display='none'; 
        } 
        
        this.selectWeather(this.state.weather);

        m.classList.remove('hidden'); setTimeout(()=>p.classList.remove('translate-y-full'),10); 
    },
    
    closeEditor: function() { document.getElementById('editor-panel').classList.add('translate-y-full'); setTimeout(()=>document.getElementById('editor-modal').classList.add('hidden'),300); },
    
    selectMood: function(m) { this.state.mood = m; document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('bg-[var(--primary)]', 'text-white', 'shadow-md')); document.getElementById(`mood-${m}`)?.classList.add('bg-[var(--primary)]', 'text-white', 'shadow-md'); },
    
    selectWeather: function(w) { 
        this.state.weather = w; 
        document.querySelectorAll('.weather-btn').forEach(b => b.classList.remove('bg-[var(--primary)]', 'text-white', 'shadow-md')); 
        document.getElementById(`weather-${w}`)?.classList.add('bg-[var(--primary)]', 'text-white', 'shadow-md'); 
        ParticleSystem.setWeather(w);
    },
    
    triggerImageUpload: () => document.getElementById('image-input').click(),
    handleImageUpload: function(i) { if(i.files[0]) { const r = new FileReader(); r.onload=(e)=>{this.state.tempImage=e.target.result; document.getElementById('preview-img').src=e.target.result; document.getElementById('image-preview-area').classList.remove('hidden');}; r.readAsDataURL(i.files[0]); } i.value=''; },
    clearImage: function() { this.state.tempImage = null; document.getElementById('image-preview-area').classList.add('hidden'); },
    
    openDetailById: async function(id) { this.openDetail(await DataManager.getById(id)); },
    
    openDetail: function(i) { 
        if(!i) return; 
        this.state.currentDetailId = i.id; 
        const d = new Date(i.ts);
        const elTitle = document.getElementById('detail-title');
        if (elTitle) {
            elTitle.innerText = i.title || 'Untitled';
            document.getElementById('detail-date').innerText = d.toLocaleDateString(undefined,{weekday:'short',month:'long',day:'numeric'});
            document.getElementById('detail-time').innerText = this.formatTime(d);
            document.getElementById('detail-content').innerHTML = marked.parse(i.content || '');
            document.getElementById('detail-icons').innerHTML = `<i data-lucide="${this.getMoodIcon(i.mood)}" class="w-4 h-4"></i><i data-lucide="${this.getWeatherIcon(i.weather)}" class="w-4 h-4"></i>`;
            const ic=document.getElementById('detail-image-container'); 
            if(i.img){
                document.getElementById('detail-image').src=i.img; ic.classList.remove('hidden');
            }else{ic.classList.add('hidden');} 
            document.getElementById('detail-modal').classList.remove('hidden'); lucide.createIcons(); 
        }
    },

    closeDetail: function() { document.getElementById('detail-modal').classList.add('hidden'); },
    confirmDeleteEntry: function() { document.getElementById('confirm-modal').classList.remove('hidden'); },
    executeDelete: async function() { if(this.state.currentDetailId) { await DataManager.delete(this.state.currentDetailId); document.getElementById('confirm-modal').classList.add('hidden'); this.closeDetail(); } },
    editCurrentEntry: async function() { const id = this.state.currentDetailId; this.closeDetail(); this.openEditor(null, await DataManager.getById(id)); },
    
    openWeeklySummary: function() { document.getElementById('summary-modal').classList.remove('hidden'); },
    closeWeeklySummary: function() { document.getElementById('summary-modal').classList.add('hidden'); },
    
    setPersona: function(p) {
        this.state.persona = p;
        document.getElementById('persona-western').className = p==='western' ? "px-3 py-1 text-xs font-bold rounded-full bg-[var(--primary)] text-white" : "px-3 py-1 text-xs font-bold rounded-full bg-[var(--line)] text-[var(--text)]";
        document.getElementById('persona-eastern').className = p==='eastern' ? "px-3 py-1 text-xs font-bold rounded-full bg-[var(--primary)] text-white" : "px-3 py-1 text-xs font-bold rounded-full bg-[var(--line)] text-[var(--text)]";
    },

    generateReport: async function() {
        const div = document.getElementById('summary-ai-content'); const k = document.getElementById('user-api-key').value || this.DEFAULT_KEY;
        localStorage.setItem('user_zodiac', document.getElementById('user-zodiac').value); localStorage.setItem('user_bazi', document.getElementById('user-bazi').value);
        div.innerHTML = `<div class="flex justify-center py-8"><i data-lucide="loader-2" class="animate-spin w-6 h-6 text-[var(--primary)]"></i></div>`; lucide.createIcons();
        const allData = await DataManager.getAll();
        const history = allData.slice(0, 10).map(e => ({d: new Date(e.ts).toLocaleDateString(), t: e.title, c: e.content.substring(0,100)}));
        
        let promptRole = "";
        if (this.state.persona === 'eastern') {
            promptRole = "Role: A Daoist Master/Red Chamber Narrator. Tone: Classical Chinese poetry/prose, mystical, wise. Reference: I Ching (周易), Dream of the Red Chamber.";
        } else {
            promptRole = "Role: Mystical Western Fortune Teller. Tone: Magical, mysterious, insightful.";
        }

        const prompt = `${promptRole} Data: User Zodiac: ${document.getElementById('user-zodiac').value}, BaZi/Birth: ${document.getElementById('user-bazi').value}. Diary entries (last 7 days): ${JSON.stringify(history)}. Task: 1. Summarize "Story of the last 7 days". 2. List "Clear Goals/Items". 3. Provide "Fortune & Direction" based on Zodiac/Birth + Diary Context. Format: Markdown. Language: ${this.state.lang === 'zh' ? 'Chinese' : 'English'}.`;
        try { const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${k}`, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({contents:[{parts:[{text:prompt}]}]}) }); const json = await res.json(); div.innerHTML = marked.parse(json.candidates[0].content.parts[0].text); } catch(e) { div.innerHTML = "<p class='text-center text-red-400'>Stars clouded.</p>"; }
    },

    formatTime: (d) => d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
    getMoodIcon: (m) => ({smile:'smile',meh:'meh',frown:'frown',heart:'heart'}[m]||'smile'),
    getWeatherIcon: (w) => ({sun:'sun',cloud:'cloud',rain:'cloud-rain'}[w]||'sun')
};

window.onload = () => UI.init();