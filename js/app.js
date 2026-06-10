/* ============================================
   星缘 - 主逻辑 (超级详细版)
   ============================================ */
let currentPage = 'home';
let isDarkMode = localStorage.getItem('darkMode') === 'true';

// ===================== 初始化 =====================
document.addEventListener('DOMContentLoaded', () => {
    if (isDarkMode) document.body.classList.add('dark-mode');
    initSplash();
    initApp();
});

function initSplash() {
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        if (splash) splash.classList.add('fade-out');
        setTimeout(() => { if (splash) splash.style.display = 'none'; }, 600);
    }, 1500);
}

function initApp() {
    renderZodiacGrid();
    renderAllSigns();
    populateSelects();
    updateDateAndQuote();
    setupDefaultDate();
    renderBloodTypeCards();
    populateDreamSearch();
    renderHomeFeatures();
    initParticles();
    renderTarotSpreads();
    
    document.getElementById('header-title').addEventListener('click', () => {
        navigateTo('home');
    });
}

// ===================== 粒子特效 =====================
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 2 + 0.5,
            dx: (Math.random() - 0.5) * 0.5,
            dy: (Math.random() - 0.5) * 0.5,
            alpha: Math.random() * 0.5 + 0.2
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += p.dx;
            p.y += p.dy;
            if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 107, 107, ${p.alpha})`;
            ctx.fill();
        });
        requestAnimationFrame(animate);
    }
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ===================== 导航 =====================
function navigateTo(page, params) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const targetPage = document.getElementById('page-' + page);
    if (targetPage) {
        targetPage.classList.add('active');
        targetPage.scrollTop = 0;
    }
    
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.page === page);
    });
    
    const titles = {
        'home': '星缘', 'all-signs': '全部星座', 'sign-detail': '星座详情',
        'compatibility': '星座配对', 'daily': '每日运势', 'bazi': '生辰八字',
        'tarot': '塔罗占卜', 'settings': '设置', 'blood': '血型分析',
        'name-test': '姓名测试', 'phone-test': '手机号吉凶', 'dream': '周公解梦'
    };
    document.getElementById('header-title').textContent = titles[page] || '星缘';
    
    currentPage = page;
    
    if (page === 'tarot') {
        renderTarotSpreads();
    }
}

// ===================== 首页 =====================
function renderHomeFeatures() {
    const container = document.getElementById('home-features');
    if (!container) return;
    
    const features = [
        { icon: '☯', name: '生辰八字', page: 'bazi', color: '#9B59B6' },
        { icon: '💕', name: '星座配对', page: 'compatibility', color: '#E74C3C' },
        { icon: '🌟', name: '每日运势', page: 'daily', color: '#F39C12' },
        { icon: '🔮', name: '塔罗占卜', page: 'tarot', color: '#8E44AD' },
        { icon: '🩸', name: '血型分析', page: 'blood', color: '#E74C3C' },
        { icon: '📝', name: '姓名测试', page: 'name-test', color: '#2ECC71' },
        { icon: '📱', name: '手机吉凶', page: 'phone-test', color: '#3498DB' },
        { icon: '💭', name: '周公解梦', page: 'dream', color: '#1ABC9C' }
    ];
    
    container.innerHTML = features.map(f => `
        <div class="feature-card-new" onclick="navigateTo('${f.page}')">
            <div class="feature-icon-wrap" style="background:${f.color}20; color:${f.color}">${f.icon}</div>
            <span>${f.name}</span>
        </div>
    `).join('');
}

// ===================== 星座网格 =====================
function renderZodiacGrid() {
    const grid = document.getElementById('zodiac-grid');
    if (!grid) return;
    
    grid.innerHTML = ZODIAC_SIGNS.map(s => `
        <div class="zodiac-card" onclick="showSignDetail('${s.id}')">
            <div class="zodiac-emoji" style="background:${getSignColor(s.id)}20">${s.emoji}</div>
            <div class="zodiac-name">${s.name}</div>
            <div class="zodiac-date">${s.date}</div>
        </div>
    `).join('');
}

// ===================== 星座颜色 =====================
function getSignColor(id) {
    const colors = {
        aries: '#FF6B6B', taurus: '#2ECC71', gemini: '#F1C40F',
        cancer: '#3498DB', leo: '#E67E22', virgo: '#1ABC9C',
        libra: '#9B59B6', scorpio: '#8E44AD', sagittarius: '#E74C3C',
        capricorn: '#34495E', aquarius: '#00BFFF', pisces: '#2ECC71'
    };
    return colors[id] || '#FF6B6B';
}

// ===================== 星座详情 =====================
function showSignDetail(signId) {
    const sign = ZODIAC_SIGNS.find(s => s.id === signId);
    if (!sign) return;
    
    const detail = document.getElementById('sign-detail-content');
    const container = document.getElementById('page-sign-detail');
    
    const daily = generateDailyFortune(signId);
    
    detail.innerHTML = `
        <div class="detail-header" style="background: linear-gradient(135deg, ${getSignColor(signId)}, ${getSignColor(signId)}88)">
            <div class="detail-emoji">${sign.emoji}</div>
            <div class="detail-title">${sign.name}</div>
            <div class="detail-sub">${sign.english} · ${sign.date}</div>
        </div>
        
        <div class="detail-section">
            <div class="section-title"><span class="section-icon">📋</span>基本信息</div>
            <div class="info-grid">
                <div class="info-item"><span class="info-label">元素</span><span class="info-value">${sign.element}</span></div>
                <div class="info-item"><span class="info-label">宫位</span><span class="info-value">${sign.quality}</span></div>
                <div class="info-item"><span class="info-label">守护星</span><span class="info-value">${sign.planet}</span></div>
                <div class="info-item"><span class="info-label">黄道宫</span><span class="info-value">${sign.house}</span></div>
                <div class="info-item"><span class="info-label">幸运数字</span><span class="info-value">${sign.luckyNum}</span></div>
                <div class="info-item"><span class="info-label">幸运颜色</span><span class="info-value" style="color:${sign.luckyColor.split('、')[0]}">${sign.luckyColor}</span></div>
                <div class="info-item"><span class="info-label">幸运物</span><span class="info-value">${sign.luckyItem}</span></div>
                <div class="info-item"><span class="info-label">诞生石</span><span class="info-value">${sign.birthstone}</span></div>
                <div class="info-item"><span class="info-label">代表花</span><span class="info-value">${sign.flower}</span></div>
                <div class="info-item"><span class="info-label">代表树</span><span class="info-value">${sign.tree}</span></div>
                <div class="info-item"><span class="info-label">守护金属</span><span class="info-value">${sign.metal}</span></div>
                <div class="info-item"><span class="info-label">主管部位</span><span class="info-value">${sign.body}</span></div>
                <div class="info-item"><span class="info-label">季节</span><span class="info-value">${sign.season}</span></div>
                <div class="info-item"><span class="info-label">星期</span><span class="info-value">${sign.day}</span></div>
                <div class="info-item"><span class="info-label">塔罗牌</span><span class="info-value">${sign.tarot}</span></div>
                <div class="info-item"><span class="info-label">相配生肖</span><span class="info-value">${sign.chineseZodiac}</span></div>
            </div>
        </div>
        
        <div class="detail-section">
            <div class="section-title"><span class="section-icon">📖</span>性格概述</div>
            <div class="detail-text">${sign.personality}</div>
        </div>
        
        <div class="detail-section">
            <div class="section-title"><span class="section-icon">🔤</span>性格分类</div>
            <div class="tag-container">
                ${sign.personalityType.split('｜').map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
        </div>
        
        <div class="detail-section">
            <div class="section-title"><span class="section-icon">💪</span>优点 vs 缺点</div>
            <div class="strength-weakness">
                <div class="sw-box sw-strength">
                    <div class="sw-title">👍 优点</div>
                    <div class="sw-content">${sign.strength}</div>
                </div>
                <div class="sw-box sw-weakness">
                    <div class="sw-title">👎 缺点</div>
                    <div class="sw-content">${sign.weakness}</div>
                </div>
            </div>
        </div>
        
        <div class="detail-section">
            <div class="section-title"><span class="section-icon">💕</span>爱情分析</div>
            <div class="detail-text">${sign.love}</div>
        </div>
        
        <div class="detail-section">
            <div class="section-title"><span class="section-icon">💼</span>事业分析</div>
            <div class="detail-text">${sign.career}</div>
        </div>
        
        <div class="detail-section">
            <div class="section-title"><span class="section-icon">🏥</span>健康分析</div>
            <div class="detail-text">${sign.health}</div>
        </div>
        
        <div class="detail-section">
            <div class="section-title"><span class="section-icon">🏛️</span>希腊神话</div>
            <div class="detail-text myth-text">${sign.greekMyth}</div>
        </div>
        
        <div class="detail-section">
            <div class="section-title"><span class="section-icon">🌟</span>名人榜</div>
            <div class="tag-container">
                ${sign.famous.map(f => `<span class="tag famous-tag">${f}</span>`).join('')}
            </div>
        </div>
        
        <div class="detail-section">
            <div class="section-title"><span class="section-icon">📅</span>今日运势</div>
            <div class="daily-mini">
                <div class="daily-mini-rating">${daily.stars}</div>
                <div class="daily-mini-tip">💡 ${daily.tip}</div>
                <div class="daily-mini-detail">
                    <span>❤️ ${'★'.repeat(daily.scores.love)}${'☆'.repeat(5-daily.scores.love)}</span>
                    <span>💼 ${'★'.repeat(daily.scores.career)}${'☆'.repeat(5-daily.scores.career)}</span>
                    <span>💰 ${'★'.repeat(daily.scores.wealth)}${'☆'.repeat(5-daily.scores.wealth)}</span>
                    <span>🏥 ${'★'.repeat(daily.scores.health)}${'☆'.repeat(5-daily.scores.health)}</span>
                </div>
            </div>
        </div>
    `;
    
    navigateTo('sign-detail');
}

// ===================== 全部星座 =====================
function renderAllSigns() {
    const container = document.getElementById('sign-list');
    if (!container) return;
    
    container.innerHTML = ZODIAC_SIGNS.map(s => `
        <div class="sign-list-item" onclick="showSignDetail('${s.id}')">
            <div class="sign-list-emoji" style="background:${getSignColor(s.id)}20">${s.emoji}</div>
            <div class="sign-list-info">
                <div class="sign-list-name">${s.name} <span style="font-size:12px;color:var(--text-light)">${s.english}</span></div>
                <div class="sign-list-date">${s.date} · ${s.element}象星座</div>
            </div>
            <div class="sign-list-arrow">›</div>
        </div>
    `).join('');
}

function filterSigns(query) {
    const container = document.getElementById('sign-list');
    if (!container) return;
    const items = container.querySelectorAll('.sign-list-item');
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query.toLowerCase()) ? 'flex' : 'none';
    });
}

// ===================== 配对系统 =====================
function checkCompatibility() {
    calculateCompatibility();
}

function calculateCompatibility() {
    const s1 = document.getElementById('compat-sign1').value;
    const s2 = document.getElementById('compat-sign2').value;
    if (!s1 || !s2) { showToast('请选择两个星座'); return; }
    
    const sign1 = ZODIAC_SIGNS.find(s => s.id === s1);
    const sign2 = ZODIAC_SIGNS.find(s => s.id === s2);
    const compat = COMPATIBILITY_DETAIL[s1] && COMPATIBILITY_DETAIL[s1][s2];
    if (!compat) { showToast('计算失败，请重试'); return; }
    
    const result = document.getElementById('compatibility-result');
    
    result.innerHTML = `
        <div class="compat-header">
            <div class="compat-signs">
                <div class="compat-sign-icon" style="background:${getSignColor(s1)}20">${sign1.emoji}</div>
                <div class="compat-heart">❤️</div>
                <div class="compat-sign-icon" style="background:${getSignColor(s2)}20">${sign2.emoji}</div>
            </div>
            <div class="compat-names">${sign1.name} × ${sign2.name}</div>
            <div class="compat-level" style="color:${compat.matchColor}">${compat.matchLevel}</div>
            <div class="compat-big-score">
                <div class="big-score-num" style="color:${compat.matchColor}">${compat.score}</div>
                <div class="big-score-label">匹配度</div>
            </div>
        </div>
        
        <div class="compat-desc">${compat.desc}</div>
        
        <div class="compat-chart-container">
            <canvas id="compat-radar" width="280" height="280"></canvas>
        </div>
        
        <div class="compat-dims">
            ${['love','communication','trust','values','intimacy','growth'].map(d => {
                const labels = { love:'情感', communication:'沟通', trust:'信任', values:'三观', intimacy:'亲密', growth:'成长' };
                return `<div class="compat-dim">
                    <div class="dim-label">${labels[d]}</div>
                    <div class="dim-bar-bg">
                        <div class="dim-bar" style="width:${compat[d]}%;background:${compat.matchColor}"></div>
                    </div>
                    <div class="dim-score">${compat[d]}</div>
                </div>`;
            }).join('')}
        </div>
        
        <div class="compat-adv-challenge">
            <div class="compat-adv">
                <div class="ac-title">✅ 优势</div>
                ${compat.advantages.map(a => `<div class="ac-item">${a}</div>`).join('')}
            </div>
            <div class="compat-challenge">
                <div class="ac-title">⚠️ 挑战</div>
                ${compat.challenges.map(c => `<div class="ac-item">${c}</div>`).join('')}
            </div>
        </div>
    `;
    
    // 绘制雷达图
    setTimeout(() => drawRadarChart('compat-radar', compat), 100);
}

function drawRadarChart(canvasId, data) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const size = canvas.width;
    const cx = size / 2, cy = size / 2;
    const radius = size * 0.35;
    const labels = ['情感', '沟通', '信任', '三观', '亲密', '成长'];
    const keys = ['love', 'communication', 'trust', 'values', 'intimacy', 'growth'];
    const angles = labels.map((_, i) => (Math.PI * 2 / 6) * i - Math.PI / 2);
    
    ctx.clearRect(0, 0, size, size);
    
    // 网格
    [0.2, 0.4, 0.6, 0.8, 1.0].forEach(level => {
        ctx.beginPath();
        angles.forEach((angle, i) => {
            const x = cx + radius * level * Math.cos(angle);
            const y = cy + radius * level * Math.sin(angle);
            i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        });
        ctx.closePath();
        ctx.strokeStyle = 'rgba(200,200,200,0.3)';
        ctx.lineWidth = 1;
        ctx.stroke();
    });
    
    // 轴线
    angles.forEach(angle => {
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + radius * Math.cos(angle), cy + radius * Math.sin(angle));
        ctx.strokeStyle = 'rgba(200,200,200,0.3)';
        ctx.stroke();
    });
    
    // 数据
    ctx.beginPath();
    angles.forEach((angle, i) => {
        const val = data[keys[i]] / 100;
        const x = cx + radius * val * Math.cos(angle);
        const y = cy + radius * val * Math.sin(angle);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fillStyle = 'rgba(255, 107, 107, 0.2)';
    ctx.fill();
    ctx.strokeStyle = '#FF6B6B';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // 数据点
    angles.forEach((angle, i) => {
        const val = data[keys[i]] / 100;
        const x = cx + radius * val * Math.cos(angle);
        const y = cy + radius * val * Math.sin(angle);
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#FF6B6B';
        ctx.fill();
    });
    
    // 标签
    ctx.fillStyle = isDarkMode ? '#CCC' : '#666';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    angles.forEach((angle, i) => {
        const x = cx + (radius + 20) * Math.cos(angle);
        const y = cy + (radius + 20) * Math.sin(angle);
        ctx.fillText(labels[i], x, y + 4);
    });
}

// ===================== 日期 =====================
function updateDateAndQuote() {
    const el = document.getElementById('today-date');
    if (el) {
        const now = new Date();
        el.textContent = now.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });
    }
    const q = document.getElementById('daily-quote');
    if (q) q.textContent = getTodayQuote();
}

// ===================== Select填充 =====================
function populateSelects() {
    ['compat-sign1', 'compat-sign2', 'daily-sign', 'bazi-sign-month'].forEach(id => {
        const sel = document.getElementById(id);
        if (!sel) return;
        if (id === 'bazi-sign-month') {
            // bazi uses year/month/day
        } else {
            sel.innerHTML = '<option value="">选择星座</option>' + 
                ZODIAC_SIGNS.map(s => `<option value="${s.id}">${s.emoji} ${s.name}</option>`).join('');
        }
    });
    
    const yearSel = document.getElementById('bazi-year');
    const monthSel = document.getElementById('bazi-month');
    const daySel = document.getElementById('bazi-day');
    
    if (yearSel) {
        yearSel.innerHTML = '<option value="">选择年份</option>' + 
            Array.from({length: 100}, (_, i) => {
                const y = new Date().getFullYear() - i;
                return `<option value="${y}">${y}年</option>`;
            }).join('');
    }
    if (monthSel) {
        monthSel.innerHTML = '<option value="">选择月份</option>' + 
            Array.from({length: 12}, (_, i) => `<option value="${i+1}">${i+1}月</option>`).join('');
    }
    if (daySel) {
        daySel.innerHTML = '<option value="">选择日期</option>' + 
            Array.from({length: 31}, (_, i) => `<option value="${i+1}">${i+1}日</option>`).join('');
    }
}

function setupDefaultDate() {
    const now = new Date();
    const y = document.getElementById('bazi-year');
    const m = document.getElementById('bazi-month');
    const d = document.getElementById('bazi-day');
    if (y) y.value = now.getFullYear();
    if (m) m.value = now.getMonth() + 1;
    if (d) d.value = now.getDate();
}

// ===================== 每日运势 =====================
function showDailyFortune() {
    const signId = document.getElementById('daily-sign').value;
    if (!signId) { showToast('请选择你的星座'); return; }
    
    const fortune = generateDailyFortune(signId);
    const result = document.getElementById('daily-result');
    
    result.innerHTML = `
        <div class="daily-header">
            <div class="daily-sign-icon" style="background:${getSignColor(signId)}20">${fortune.sign.emoji}</div>
            <div class="daily-sign-name">${fortune.sign.name}</div>
            <div class="daily-date">${fortune.date}</div>
            <div class="daily-stars">${fortune.stars}</div>
        </div>
        
        <div class="daily-scores">
            ${['love','career','wealth','health'].map(k => {
                const icons = { love:'❤️爱情', career:'💼事业', wealth:'💰财运', health:'🏥健康' };
                const s = fortune.scores[k];
                return `<div class="daily-score-item">
                    <div class="ds-label">${icons[k]}</div>
                    <div class="ds-bar-bg"><div class="ds-bar" style="width:${s*20}%;background:${['#FF6B6B','#3498DB','#F1C40F','#2ECC71'][['love','career','wealth','health'].indexOf(k)]}"></div></div>
                    <div class="ds-num">${'★'.repeat(s)}${'☆'.repeat(5-s)}</div>
                </div>`;
            }).join('')}
        </div>
        
        <div class="daily-details">
            <div class="daily-detail-item"><span class="dd-icon">❤️</span><div><strong>爱情运势</strong><p>${fortune.detailed.love}</p></div></div>
            <div class="daily-detail-item"><span class="dd-icon">💼</span><div><strong>事业运势</strong><p>${fortune.detailed.career}</p></div></div>
            <div class="daily-detail-item"><span class="dd-icon">💰</span><div><strong>财富运势</strong><p>${fortune.detailed.wealth}</p></div></div>
            <div class="daily-detail-item"><span class="dd-icon">🏥</span><div><strong>健康运势</strong><p>${fortune.detailed.health}</p></div></div>
        </div>
        
        <div class="daily-lucky">
            <div class="daily-lucky-item"><span class="dl-label">幸运数字</span><span class="dl-value">${fortune.luckyNum}</span></div>
            <div class="daily-lucky-item"><span class="dl-label">幸运颜色</span><span class="dl-value" style="color:${signId==='aries'?'#FF6B6B':'#3498DB'}">${fortune.luckyColor}</span></div>
            <div class="daily-lucky-item"><span class="dl-label">幸运方向</span><span class="dl-value">${fortune.luckyDirection}</span></div>
            <div class="daily-lucky-item"><span class="dl-label">今日生肖</span><span class="dl-value">${fortune.dayZodiac}</span></div>
            <div class="daily-lucky-item"><span class="dl-label">宜</span><span class="dl-value good">${fortune.yi}</span></div>
            <div class="daily-lucky-item"><span class="dl-label">忌</span><span class="dl-value bad">${fortune.ji}</span></div>
        </div>
        
        <div class="daily-tip">💡 ${fortune.tip}</div>
        
        <div class="daily-shichen">
            <div class="section-title"><span class="section-icon">🕐</span>十二时辰运势</div>
            ${SHICHEN_FORTUNE.map(sc => `
                <div class="shichen-item">
                    <div class="shichen-name">${sc.name}</div>
                    <div class="shichen-time">${sc.time}</div>
                    <div class="shichen-desc">${sc.desc}</div>
                    <div class="shichen-advice">💡 ${sc.advice}</div>
                </div>
            `).join('')}
        </div>
    `;
}

// ===================== 生辰八字 =====================
function calculateBaziNow() {
    const name = document.getElementById('bazi-name').value || '未知';
    const year = parseInt(document.getElementById('bazi-year').value);
    const month = parseInt(document.getElementById('bazi-month').value);
    const day = parseInt(document.getElementById('bazi-day').value);
    const hour = document.getElementById('bazi-hour').value;
    const gender = document.querySelector('input[name="bazi-gender"]:checked');
    
    if (!year || !month || !day || !hour || !gender) {
        showToast('请填写完整的出生信息');
        return;
    }
    
    const result = calculateBazi(year, month, day, hour, gender.value, name);
    const container = document.getElementById('bazi-result');
    
    container.innerHTML = `
        <div class="bazi-header">
            <div class="bazi-title">${result.name} · ${result.gender}</div>
            <div class="bazi-birth">${result.birthDate}</div>
        </div>
        
        <div class="bazi-pillars">
            ${['year','month','day','hour'].map((p, i) => {
                const labels = {'year':'年柱','month':'月柱','day':'日柱','hour':'时柱'};
                const pillar = result.pillars[p];
                return `<div class="bazi-pillar">
                    <div class="bp-label">${labels[p]}</div>
                    <div class="bp-gan">${pillar.gan}</div>
                    <div class="bp-zhi">${pillar.zhi}</div>
                    <div class="bp-wx">${pillar.wuxing}</div>
                    <div class="bp-nayin">${result.nayin[p]}</div>
                </div>`;
            }).join('')}
        </div>
        
        <div class="bazi-section">
            <div class="section-title"><span class="section-icon">🐭</span>生肖信息</div>
            <div class="bazi-zodiac">年柱生肖：${result.zodiac}（${result.zodiacInfo.element||''}命）</div>
            <div class="bazi-zodiac-desc">${result.zodiacInfo.personality||''}</div>
            <div class="bazi-zodiac-match">最佳配对：${result.zodiacInfo.match||'未知'} · 冲突生肖：${result.zodiacInfo.conflict||'未知'}</div>
        </div>
        
        <div class="bazi-section">
            <div class="section-title"><span class="section-icon">☯</span>日主分析</div>
            <div class="bazi-daymaster">
                <div class="dm-gan">${result.dayMaster.gan}</div>
                <div class="dm-info">${result.dayMaster.yinYang}${result.dayMaster.wuxing} · ${result.dayMaster.desc}</div>
            </div>
        </div>
        
        <div class="bazi-section">
            <div class="section-title"><span class="section-icon">🪵</span>五行分析</div>
            <div class="bazi-wuxing">
                ${Object.entries(result.wuxing.percentages).map(([k, v]) => `
                    <div class="wx-item">
                        <div class="wx-name">${k}</div>
                        <div class="wx-bar-bg"><div class="wx-bar" style="width:${v}%;background:${k==='金'?'#F1C40F':k==='木'?'#2ECC71':k==='水'?'#3498DB':k==='火'?'#E74C3C':'#8B4513'}"></div></div>
                        <div class="wx-num">${v}%</div>
                    </div>
                `).join('')}
            </div>
            <div class="wuxing-detail">
                ${result.wuxing.detail.map(d => `
                    <div class="wuxing-detail-item">${d.position}：天干${d.gan}（${d.ganWx}），地支${d.zhi}（${d.zhiWx}）</div>
                `).join('')}
            </div>
        </div>
        
        <div class="bazi-section">
            <div class="section-title"><span class="section-icon">💡</span>五行建议</div>
            <div class="wuxing-advice-grid">
                <div class="wa-item"><span class="wa-label">补</span><span>${result.wuxingAdvice.supplement}</span></div>
                <div class="wa-item"><span class="wa-label">忌</span><span>${result.wuxingAdvice.avoid}</span></div>
                <div class="wa-item"><span class="wa-label">幸运色</span><span>${result.wuxingAdvice.colors}</span></div>
                <div class="wa-item"><span class="wa-label">吉利方向</span><span>${result.wuxingAdvice.directions}</span></div>
                <div class="wa-item"><span class="wa-label">适合行业</span><span>${result.wuxingAdvice.career}</span></div>
            </div>
        </div>
        
        <div class="bazi-section">
            <div class="section-title"><span class="section-icon">👤</span>十神分析</div>
            ${result.shiShen.map(ss => `
                <div class="shishen-item">
                    <div class="ss-position">${ss.position}</div>
                    <div class="ss-gan">天干 ${ss.gan} → ${ss.ganShiShen}</div>
                    ${ss.zangGanShiShen.length > 0 ? `<div class="ss-zang">藏干：${ss.zangGanShiShen.map(z => `${z.gan}(${z.shishen})`).join('、')}</div>` : ''}
                </div>
            `).join('')}
        </div>
        
        <div class="bazi-section">
            <div class="section-title"><span class="section-icon">📦</span>藏干</div>
            <div class="zanggan-grid">
                ${result.zangGan.map(zg => `
                    <div class="zanggan-item">
                        <div class="zg-zhi">${zg.zhi}</div>
                        <div class="zg-stems">${zg.hiddenStems.join('、') || '无'}</div>
                        <div class="zg-qi">主气：${zg.mainQi}${zg.midQi ? ' · 中气：'+zg.midQi : ''}${zg.restQi ? ' · 余气：'+zg.restQi : ''}</div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        ${result.shensha.length > 0 ? `
        <div class="bazi-section">
            <div class="section-title"><span class="section-icon">✨</span>神煞</div>
            <div class="shensha-grid">
                ${result.shensha.map(ss => `
                    <div class="shensha-item ${ss.type}">
                        <div class="ss-name">${ss.name}</div>
                        <div class="ss-type">${ss.type}</div>
                        <div class="ss-desc">${ss.desc}</div>
                    </div>
                `).join('')}
            </div>
        </div>` : ''}
        
        <div class="bazi-section">
            <div class="section-title"><span class="section-icon">📈</span>大运</div>
            <div class="dayun-grid">
                ${result.dayun.map(dy => `
                    <div class="dayun-item">
                        <div class="dy-age">${dy.age}岁</div>
                        <div class="dy-ganzhi">${dy.gan}${dy.zhi}</div>
                        <div class="dy-wx">${dy.ganWx}${dy.zhiWx}</div>
                        <div class="dy-desc">${dy.desc}</div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="bazi-section">
            <div class="section-title"><span class="section-icon">📅</span>流年分析（${result.liunian.year}年）</div>
            <div class="liunian-info">
                <div class="ln-item"><span class="ln-label">流年干支</span><span class="ln-value">${result.liunian.gan}${result.liunian.zhi}（${result.liunian.ganWx}${result.liunian.zhiWx}）</span></div>
                <div class="ln-item"><span class="ln-label">纳音</span><span class="ln-value">${result.liunian.naYin}</span></div>
                <div class="ln-item"><span class="ln-label">十神</span><span class="ln-value">${result.liunian.shiShen}</span></div>
                <div class="ln-item ln-full"><span class="ln-label">运势</span><span class="ln-value">${result.liunian.overall}</span></div>
                <div class="ln-item ln-full"><span class="ln-label">冲合</span><span class="ln-value">${result.liunian.chong} ${result.liunian.he}</span></div>
            </div>
        </div>
        
        <div class="bazi-section bazi-summary">
            <div class="section-title"><span class="section-icon">📝</span>命格总评</div>
            <div class="summary-text">${result.totalDesc}</div>
            <div class="simple-analysis">${result.simpleAnalysis}</div>
        </div>
    `;
}

// ===================== 塔罗占卜 =====================
function renderTarotSpreads() {
    const container = document.getElementById('tarot-spreads');
    if (!container) return;
    
    const spreads = getSpreadList();
    container.innerHTML = spreads.map(s => `
        <div class="spread-card" onclick="selectSpread('${s.key}')">
            <div class="spread-icon">${s.key === 'single' ? '🃏' : s.key === 'three' ? '💫' : s.key === 'cross' ? '✝️' : s.key === 'love' ? '💕' : '💼'}</div>
            <div class="spread-info">
                <div class="spread-name">${s.name}</div>
                <div class="spread-desc">${s.desc}</div>
                <div class="spread-cards">${s.cards}张牌</div>
            </div>
        </div>
    `).join('');
}

let selectedSpread = null;

function selectSpread(key) {
    selectedSpread = key;
    const container = document.getElementById('tarot-spreads');
    container.querySelectorAll('.spread-card').forEach(c => c.classList.remove('selected'));
    const clicked = container.querySelector(`[onclick="selectSpread('${key}')"]`);
    if (clicked) clicked.classList.add('selected');
    
    document.getElementById('tarot-question-area').style.display = 'block';
}

function doTarotReading() {
    if (!selectedSpread) { showToast('请先选择一种牌阵'); return; }
    const question = document.getElementById('tarot-question').value || '无特定问题';
    
    const result = drawSpread(selectedSpread, question);
    if (!result) { showToast('占卜失败，请重试'); return; }
    
    const container = document.getElementById('tarot-result');
    
    let cardsHtml = result.cards.map((item, i) => `
        <div class="tarot-card-result">
            <div class="tcr-number">${item.card.category === '大阿尔卡纳' ? item.card.number : ''}</div>
            <div class="tcr-name">${item.isReversed ? '↕ ' : ''}${item.card.name}</div>
            <div class="tcr-category">${item.card.category} · ${item.card.suit || ''}</div>
            <div class="tcr-pos">📌 ${item.position.name}：${item.position.desc}</div>
            <div class="tcr-status ${item.isReversed ? 'reversed' : 'upright'}">${item.isReversed ? '逆位' : '正位'}</div>
            <div class="tcr-keys">${item.isReversed ? item.card.reversed : item.card.upright}</div>
            <div class="tcr-interp">${item.interpretation}</div>
            <div class="tcr-advice">💡 ${item.advice}</div>
        </div>
    `).join('');
    
    container.innerHTML = `
        <div class="tarot-result-header">
            <div class="tr-title">${result.spreadName}</div>
            <div class="tr-question">问题：${result.question}</div>
            <div class="tr-date">${result.date}</div>
        </div>
        
        <div class="tarot-overall">${result.overallInterpretation}</div>
        
        <div class="tarot-cards-grid">${cardsHtml}</div>
    `;
}

// ===================== 快速塔罗 =====================
function drawQuickTarot() {
    const result = drawSingleTarot();
    const container = document.getElementById('quick-tarot-result');
    
    container.innerHTML = `
        <div class="quick-tarot-card">
            <div class="qtc-emoji">${result.card.emoji || '🃏'}</div>
            <div class="qtc-name">${result.isReversed ? '↕ ' : ''}${result.card.name}</div>
            <div class="qtc-category">${result.card.category}</div>
            <div class="qtc-status ${result.isReversed ? 'reversed' : 'upright'}">${result.isReversed ? '逆位' : '正位'}</div>
            <div class="qtc-keys">${result.isReversed ? result.card.reversed : result.card.upright}</div>
            <div class="qtc-interp">${result.interpretation}</div>
            <div class="qtc-advice">💡 ${result.advice}</div>
        </div>
    `;
}

// ===================== 血型分析 =====================
function renderBloodTypeCards() {
    const container = document.getElementById('blood-type-cards');
    if (!container) return;
    
    container.innerHTML = Object.entries(BLOOD_TYPE).map(([key, data]) => `
        <div class="blood-card" onclick="showBloodDetail('${key}')">
            <div class="blood-type-badge">${data.title}</div>
            <div class="blood-brief">${data.personality.substring(0, 30)}...</div>
        </div>
    `).join('');
}

function showBloodDetail(key) {
    const data = BLOOD_TYPE[key];
    if (!data) return;
    
    const container = document.getElementById('blood-detail');
    container.innerHTML = `
        <div class="blood-detail-header">
            <div class="blood-big-type">${data.title}</div>
        </div>
        <div class="detail-section"><strong>性格特点</strong><p>${data.personality}</p></div>
        <div class="detail-section"><strong>👍 优点</strong><p>${data.strength}</p></div>
        <div class="detail-section"><strong>👎 缺点</strong><p>${data.weakness}</p></div>
        <div class="detail-section"><strong>💕 爱情</strong><p>${data.love}</p></div>
        <div class="detail-section"><strong>💼 事业</strong><p>${data.career}</p></div>
        <div class="detail-section">
            <strong>🔄 血型配对</strong>
            ${Object.entries(data.compatibility).map(([k, v]) => `<div class="blood-compat-item">${BLOOD_TYPE[k].title}：${v}</div>`).join('')}
        </div>
    `;
}

// ===================== 姓名测试 =====================
function doNameTest() {
    const name = document.getElementById('name-input').value.trim();
    if (!name) { showToast('请输入姓名'); return; }
    
    const result = calculateNameScore(name);
    if (!result) { showToast('请输入至少两个字'); return; }
    
    const container = document.getElementById('name-result');
    container.innerHTML = `
        <div class="name-result-header">
            <div class="nr-name">${result.name}</div>
            <div class="nr-score" style="color:${result.score>70?'#2ECC71':result.score>50?'#F39C12':'#E74C3C'}">${result.score}分</div>
            <div class="nr-level">${result.level}</div>
        </div>
        
        <div class="detail-section">
            <strong>总笔画</strong><p>${result.totalStrokes}画</p>
        </div>
        
        <div class="name-wuge">
            <div class="wg-item ${result.wuge.tianGe.luck==='吉'?'wg-good':'wg-bad'}">
                <span class="wg-name">天格</span>
                <span class="wg-num">${result.wuge.tianGe.strokes}画</span>
                <span class="wg-luck">${result.wuge.tianGe.luck}</span>
            </div>
            <div class="wg-item ${result.wuge.renGe.luck.includes('大吉')?'wg-good':result.wuge.renGe.luck==='吉'?'wg-good':'wg-bad'}">
                <span class="wg-name">人格</span>
                <span class="wg-num">${result.wuge.renGe.strokes}画</span>
                <span class="wg-luck">${result.wuge.renGe.luck}</span>
            </div>
            <div class="wg-item ${result.wuge.diGe.luck==='吉'?'wg-good':'wg-bad'}">
                <span class="wg-name">地格</span>
                <span class="wg-num">${result.wuge.diGe.strokes}画</span>
                <span class="wg-luck">${result.wuge.diGe.luck}</span>
            </div>
            <div class="wg-item ${result.wuge.zongGe.luck.includes('大吉')?'wg-good':result.wuge.zongGe.luck==='吉'?'wg-good':'wg-bad'}">
                <span class="wg-name">总格</span>
                <span class="wg-num">${result.wuge.zongGe.strokes}画</span>
                <span class="wg-luck">${result.wuge.zongGe.luck}</span>
            </div>
        </div>
        
        <div class="detail-section"><strong>🔤 性格分析</strong><p>${result.personality}</p></div>
        <div class="detail-section"><strong>💼 事业分析</strong><p>${result.career}</p></div>
        <div class="detail-section"><strong>💕 感情分析</strong><p>${result.love}</p></div>
        <div class="detail-section"><strong>📝 综合评语</strong><p>${result.desc}</p></div>
    `;
}

// ===================== 手机号吉凶 =====================
function doPhoneTest() {
    const phone = document.getElementById('phone-input').value.trim();
    const result = calculatePhoneScore(phone);
    if (!result) { showToast('请输入有效的11位手机号'); return; }
    
    const container = document.getElementById('phone-result');
    container.innerHTML = `
        <div class="phone-result-header">
            <div class="pr-phone">${result.phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1****$3')}</div>
            <div class="pr-score" style="color:${result.score>70?'#2ECC71':result.score>50?'#F39C12':'#E74C3C'}">${result.score}分</div>
            <div class="pr-level">${result.level}</div>
        </div>
        
        <div class="detail-section"><strong>📖 数理含义</strong><p>${result.meaning}</p></div>
        
        <div class="phone-nums">
            <div class="pn-item"><span class="pn-label">数字总和</span><span class="pn-value">${result.numbers.total}</span></div>
            <div class="pn-item"><span class="pn-label">后四位</span><span class="pn-value">${result.numbers.lastFour}</span></div>
            <div class="pn-item"><span class="pn-label">阴阳平衡</span><span class="pn-value">${result.numbers.balance}</span></div>
        </div>
        
        <div class="phone-fortune">
            ${result.fortune.map(f => `
                <div class="pf-item">
                    <span class="pf-label">${f.type}</span>
                    <div class="pf-bar-bg"><div class="pf-bar" style="width:${f.score}%;background:${['#FF6B6B','#3498DB','#F1C40F','#9B59B6','#2ECC71'][result.fortune.indexOf(f)]}"></div></div>
                    <span class="pf-score">${f.score}</span>
                </div>
            `).join('')}
        </div>
        
        <div class="phone-advice">💡 ${result.advice}</div>
    `;
}

// ===================== 周公解梦 =====================
function populateDreamSearch() {
    const container = document.getElementById('dream-items');
    if (!container) return;
    
    container.innerHTML = DREAM_ITEMS.map(d => `
        <div class="dream-item" onclick="selectDream('${d}')">${d}</div>
    `).join('');
}

function selectDream(keyword) {
    document.getElementById('dream-input').value = keyword;
    doDreamSearch();
}

function doDreamSearch() {
    const keyword = document.getElementById('dream-input').value.trim();
    if (!keyword) { showToast('请选择或输入梦境关键词'); return; }
    
    const result = getDreamInterpretation(keyword);
    const container = document.getElementById('dream-result');
    
    container.innerHTML = `
        <div class="dream-result-header">
            <div class="dr-dream">${result.dream}</div>
            <div class="dr-category">分类：${result.category}</div>
            <div class="dr-badge ${result.isGood ? 'good' : 'bad'}">${result.isGood ? '吉梦' : '需注意'}</div>
        </div>
        <div class="detail-section"><strong>🔮 梦的解析</strong><p>${result.meaning}</p></div>
        <div class="dream-suggestion">💡 ${result.suggestion}</div>
    `;
}

// ===================== 设置 =====================
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode);
}

function clearCache() {
    localStorage.clear();
    showToast('缓存已清除');
}

// ===================== Toast =====================
function showToast(msg) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    document.body.appendChild(toast);
    
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// ===================== 导航工具函数 =====================
function goBack() {
    navigateTo('home');
}

function showSettings() {
    navigateTo('settings');
}

// ===================== 塔罗抽牌（HTML调用） =====================
function drawTarot() {
    const question = document.getElementById('tarot-question') ? document.getElementById('tarot-question').value : 'general';
    const result = drawSingleTarot();
    if (!result) { showToast('抽牌失败，请重试'); return; }
    
    const cardBack = document.getElementById('tarot-card-back');
    const cardFront = document.getElementById('tarot-card-front');
    const interp = document.getElementById('tarot-interpretation');
    
    if (cardBack) cardBack.classList.add('flipped');
    if (cardFront) {
        cardFront.style.display = 'flex';
        cardFront.classList.add('flipped');
        cardFront.innerHTML = `
            <div class="tarot-card-emoji">${result.card.emoji || '🃏'}</div>
            <div class="tarot-card-name">${result.isReversed ? '↕ ' : ''}${result.card.name}</div>
            <div class="tarot-card-type">${result.card.category}</div>
            <div class="tarot-card-status ${result.isReversed ? 'reversed' : 'upright'}">${result.isReversed ? '逆位' : '正位'}</div>
        `;
    }
    
    if (interp) {
        interp.innerHTML = `
            <div class="tarot-interp-card">
                <span class="meaning-tag ${result.isReversed ? 'meaning-reversed' : 'meaning-upright'}">${result.isReversed ? '逆位' : '正位'}</span>
                <h4>${result.card.name}</h4>
                <div class="tarot-keys">${result.isReversed ? result.card.reversed : result.card.upright}</div>
                <div class="tarot-desc">${result.interpretation}</div>
                <div class="tarot-advice">💡 ${result.advice}</div>
            </div>
        `;
    }
}

// ===================== 八字计算（HTML调用） =====================
function calculateBazi() {
    calculateBaziNow();
}

function calculateBaziNow() {
    const name = document.getElementById('bazi-name').value || '未知';
    const year = parseInt(document.getElementById('bazi-year').value);
    const month = parseInt(document.getElementById('bazi-month').value);
    const day = parseInt(document.getElementById('bazi-day').value);
    const hour = parseInt(document.getElementById('bazi-hour').value);
    const gender = document.getElementById('bazi-gender').value;
    
    if (!year || !month || !day) { showToast('请完善出生日期'); return; }
    
    const result = calculateBaziEngine(year, month, day, hour, gender, name);
    if (!result) { showToast('八字计算失败，请检查输入'); return; }
    
    const container = document.getElementById('bazi-result');
    renderBaziResult(container, result);
}

function renderBaziResult(container, result) {
    if (!container) return;
    container.innerHTML = `
        <div class="bazi-header">
            <div class="bazi-title">${result.name} · ${result.gender}</div>
            <div class="bazi-birth">${result.birthDate}</div>
        </div>
        
        <div class="bazi-pillars">
            ${['year','month','day','hour'].map((p, i) => {
                const labels = {'year':'年柱','month':'月柱','day':'日柱','hour':'时柱'};
                const pillar = result.pillars[p];
                return `<div class="pillar-card">
                    <span class="pillar-title">${labels[p]}</span>
                    <span class="pillar-text">${pillar.gan}${pillar.zhi}</span>
                    <span class="pillar-elem">${pillar.wuxing || pillar.ganWx} · ${result.nayin[p] || ''}</span>
                </div>`;
            }).join('')}
        </div>
        
        <div class="bazi-info-card">
            <h4>🐭 生肖信息</h4>
            <p>年柱生肖：${result.zodiac}（${result.zodiacInfo.element||''}命）</p>
            <p>${result.zodiacInfo.personality||''}</p>
            <p>最佳配对：${result.zodiacInfo.match||'未知'} · 冲突生肖：${result.zodiacInfo.conflict||'未知'}</p>
        </div>
        
        <div class="bazi-info-card">
            <h4>☯ 日主分析</h4>
            <p><strong>${result.dayMaster.gan}</strong> · ${result.dayMaster.yinYang}${result.dayMaster.wuxing}</p>
            <p>${result.dayMaster.desc}</p>
        </div>
        
        <div class="bazi-info-card">
            <h4>🪵 五行分析</h4>
            <div class="bazi-wuxing">
                ${Object.entries(result.wuxing.percentages).map(([k, v]) => `
                    <div class="wx-item">
                        <div class="wx-name">${k}</div>
                        <div class="wx-bar-bg"><div class="wx-bar" style="width:${v}%;background:${k==='金'?'#F1C40F':k==='木'?'#2ECC71':k==='水'?'#3498DB':k==='火'?'#E74C3C':'#8B4513'}"></div></div>
                        <div class="wx-num">${v}%</div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="bazi-info-card">
            <h4>💡 五行建议</h4>
            <p>${result.wuxingAdvice.supplement} ${result.wuxingAdvice.avoid}</p>
            <p>幸运色：${result.wuxingAdvice.colors} | 吉利方向：${result.wuxingAdvice.directions}</p>
            <p>适合行业：${result.wuxingAdvice.career}</p>
        </div>
        
        <div class="bazi-info-card">
            <h4>📈 大运</h4>
            <div class="dayun-grid">
                ${result.dayun.map(dy => `
                    <div class="dayun-item">
                        <div class="dy-age">${dy.age}岁</div>
                        <div class="dy-ganzhi">${dy.gan}${dy.zhi}</div>
                        <div class="dy-wx">${dy.ganWx}${dy.zhiWx}</div>
                        <div class="dy-desc">${dy.desc}</div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="bazi-info-card">
            <h4>📅 流年分析（${result.liunian.year}年）</h4>
            <p>流年干支：${result.liunian.gan}${result.liunian.zhi}（${result.liunian.ganWx}${result.liunian.zhiWx}）</p>
            <p>${result.liunian.overall}</p>
        </div>
        
        <div class="bazi-info-card bazi-summary">
            <h4>📝 命格总评</h4>
            <p>${result.totalDesc}</p>
            <p>${result.simpleAnalysis}</p>
        </div>
    `;
}