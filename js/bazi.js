/* ============================================
   星缘 - 生辰八字引擎 (超级详细版)
   包含：藏干、十神、大运、流年、神煞
   ============================================ */

// ===================== 天干地支 =====================
const TIAN_GAN = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
const DI_ZHI = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
const SHENGXIAO = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];

const TIAN_GAN_WUXING = {
    '甲': '木', '乙': '木',
    '丙': '火', '丁': '火',
    '戊': '土', '己': '土',
    '庚': '金', '辛': '金',
    '壬': '水', '癸': '水'
};

const DI_ZHI_WUXING = {
    '子': '水', '丑': '土', '寅': '木', '卯': '木',
    '辰': '土', '巳': '火', '午': '火', '未': '土',
    '申': '金', '酉': '金', '戌': '土', '亥': '水'
};

// ===================== 藏干 (Hidden Stems) =====================
const ZANG_GAN = {
    '子': ['癸'],
    '丑': ['己', '癸', '辛'],
    '寅': ['甲', '丙', '戊'],
    '卯': ['乙'],
    '辰': ['戊', '乙', '癸'],
    '巳': ['丙', '庚', '戊'],
    '午': ['丁', '己'],
    '未': ['己', '丁', '乙'],
    '申': ['庚', '壬', '戊'],
    '酉': ['辛'],
    '戌': ['戊', '辛', '丁'],
    '亥': ['壬', '甲']
};

// 地支藏干的主气/中气/余气分类
const ZANG_GAN_QI = {
    '子': { main: '癸', mid: null, rest: null },
    '丑': { main: '己', mid: '癸', rest: '辛' },
    '寅': { main: '甲', mid: '丙', rest: '戊' },
    '卯': { main: '乙', mid: null, rest: null },
    '辰': { main: '戊', mid: '乙', rest: '癸' },
    '巳': { main: '丙', mid: '庚', rest: '戊' },
    '午': { main: '丁', mid: '己', rest: null },
    '未': { main: '己', mid: '丁', rest: '乙' },
    '申': { main: '庚', mid: '壬', rest: '戊' },
    '酉': { main: '辛', mid: null, rest: null },
    '戌': { main: '戊', mid: '辛', rest: '丁' },
    '亥': { main: '壬', mid: '甲', rest: null }
};

// ===================== 十神关系 =====================
const SHI_SHEN = {
    // 生我者为印枭
    '木': { '木': '比肩/劫财', '火': '食神/伤官', '土': '正财/偏财', '金': '正官/七杀', '水': '正印/偏印' },
    '火': { '木': '正印/偏印', '火': '比肩/劫财', '土': '食神/伤官', '金': '正财/偏财', '水': '正官/七杀' },
    '土': { '木': '正官/七杀', '火': '正印/偏印', '土': '比肩/劫财', '金': '食神/伤官', '水': '正财/偏财' },
    '金': { '木': '正财/偏财', '火': '正官/七杀', '土': '正印/偏印', '金': '比肩/劫财', '水': '食神/伤官' },
    '水': { '木': '食神/伤官', '火': '正财/偏财', '土': '正官/七杀', '金': '正印/偏印', '水': '比肩/劫财' }
};

// 阴阳细分十神
function getShiShenDetail(dayGan, otherGan) {
    const dayWx = TIAN_GAN_WUXING[dayGan];
    const otherWx = TIAN_GAN_WUXING[otherGan];
    const dayYin = TIAN_GAN.indexOf(dayGan) % 2 === 1;
    const otherYin = TIAN_GAN.indexOf(otherGan) % 2 === 1;
    
    const relation = SHI_SHEN[dayWx][otherWx];
    if (!relation) return '未知';
    
    const [yang, yin] = relation.split('/');
    return dayYin === otherYin ? yin : yang;
}

// ===================== 神煞系统 =====================
const SHEN_SHA = {
    tianDe: '天德贵人', yueDe: '月德贵人', tianYi: '天乙贵人',
    wenChang: '文昌贵人', huaGai: '华盖', jiangXing: '将星',
    luCun: '禄存', yangRen: '阳刃', taoHua: '桃花',
    guChen: '孤辰', guaSu: '寡宿', wangShen: '亡神',
    jieSha: '劫煞', yiMa: '驿马', kongWang: '空亡'
};

function calculateShenSha(dayGanIndex, yearZhiIndex, monthZhiIndex, dayZhiIndex, hourZhiIndex) {
    const shensha = [];
    
    // 天乙贵人
    const tianYiTable = {
        0: [6, 12], 1: [6, 12], 2: [9, 3], 3: [9, 3],
        4: [1, 7], 5: [1, 7], 6: [3, 9], 7: [3, 9],
        8: [4, 10], 9: [4, 10]
    };
    const ty = tianYiTable[dayGanIndex];
    if (ty && (ty[0] === dayZhiIndex + 1 || ty[1] === dayZhiIndex + 1)) {
        shensha.push({ name: '天乙贵人', type: '吉神', desc: '最吉之神，遇事有贵人相助，逢凶化吉。' });
    }
    
    // 文昌贵人
    const wenChangTable = {
        0: 3, 1: 3, 2: 9, 3: 9, 4: 7, 5: 7, 6: 11, 7: 11, 8: 1, 9: 1
    };
    if (wenChangTable[dayGanIndex] === hourZhiIndex) {
        shensha.push({ name: '文昌贵人', type: '吉神', desc: '聪明好学，才华横溢，利于考试和学术。' });
    }
    
    // 桃花 (子午卯酉)
    const taoHuaTable = { 0: 11, 1: 11, 2: 2, 3: 2, 4: 5, 5: 5, 6: 8, 7: 8, 8: 11, 9: 11 };
    if (taoHuaTable[yearZhiIndex] === dayZhiIndex || taoHuaTable[yearZhiIndex] === hourZhiIndex) {
        shensha.push({ name: '桃花', type: '中性', desc: '异性缘好，有魅力，但需注意感情纠葛。' });
    }
    
    // 华盖
    const huaGaiTable = { 0: 3, 1: 3, 2: 12, 3: 12, 4: 9, 5: 9, 6: 6, 7: 6, 8: 3, 9: 3, 10: 12, 11: 12 };
    if (huaGaiTable[yearZhiIndex] && huaGaiTable[yearZhiIndex] === dayZhiIndex + 1) {
        shensha.push({ name: '华盖', type: '中性', desc: '聪明孤傲，有艺术天赋和宗教缘分。' });
    }
    
    // 驿马
    const yiMaTable = { 0: 9, 1: 9, 2: 12, 3: 12, 4: 3, 5: 3, 6: 6, 7: 6, 8: 9, 9: 9, 10: 12, 11: 12 };
    if (yiMaTable[yearZhiIndex] && yiMaTable[yearZhiIndex] === dayZhiIndex + 1) {
        shensha.push({ name: '驿马', type: '中性', desc: '奔波劳碌，适合外出发展，变动较多。' });
    }
    
    // 将星
    const jiangTable = { 0: 6, 1: 6, 2: 9, 3: 9, 4: 12, 5: 12, 6: 3, 7: 3, 8: 6, 9: 6, 10: 9, 11: 9 };
    if (jiangTable[yearZhiIndex] && jiangTable[yearZhiIndex] === dayZhiIndex + 1) {
        shensha.push({ name: '将星', type: '吉神', desc: '有领导才能，做事果断，能掌权。' });
    }
    
    // 空亡
    const kongWangTable = {
        0: [1, 2], 1: [1, 2], 2: [3, 4], 3: [3, 4],
        4: [5, 6], 5: [5, 6], 6: [7, 8], 7: [7, 8],
        8: [9, 10], 9: [9, 10]
    };
    const kw = kongWangTable[dayGanIndex];
    if (kw && (kw[0] === yearZhiIndex + 1 || kw[1] === yearZhiIndex + 1 ||
               kw[0] === monthZhiIndex + 1 || kw[1] === monthZhiIndex + 1 ||
               kw[0] === dayZhiIndex + 1 || kw[1] === dayZhiIndex + 1 ||
               kw[0] === hourZhiIndex + 1 || kw[1] === hourZhiIndex + 1)) {
        shensha.push({ name: '空亡', type: '凶神', desc: '主虚花无实，努力易成空，需加倍努力。' });
    }
    
    return shensha;
}

// ===================== 纳音五行 =====================
const NAYIN = {};

function initNayin() {
    const nayinNames = [
        '海中金', '炉中火', '大林木', '路旁土', '剑锋金', '山头火',
        '涧下水', '城头土', '白蜡金', '杨柳木', '泉中水', '屋上土',
        '霹雳火', '松柏木', '长流水', '砂石金', '山下火', '平地木',
        '壁上土', '金箔金', '覆灯火', '天河水', '大驿土', '钗钏金',
        '桑柘木', '大溪水', '沙中土', '天上火', '石榴木', '大海水'
    ];
    
    TIAN_GAN.forEach((g, gi) => {
        NAYIN[g] = {};
        DI_ZHI.forEach((z, zi) => {
            const index = (Math.floor(gi / 2) * 6 + Math.floor(zi / 2)) % 30;
            NAYIN[g][z] = nayinNames[index];
        });
    });
}
initNayin();

// ===================== 大运计算 =====================
function calculateDayun(year, gender, monthGanIndex) {
    const isMale = gender === 'male';
    // 阳年男、阴年女为顺排；阴年男、阳年女为逆排
    const yearGanYang = year % 2 === 0; // 甲丙戊庚壬为阳(偶数为阳年)
    const shunPai = (yearGanYang && isMale) || (!yearGanYang && !isMale);
    
    const dayun = [];
    const startAge = 8; // 简化：统一8岁起运
    
    for (let i = 0; i < 8; i++) {
        const offset = shunPai ? (i + 1) : -(i + 1);
        const ganIndex = ((monthGanIndex + offset) % 12 + 12) % 12;
        const gan = TIAN_GAN[ganIndex % 10];
        const zhi = DI_ZHI[((monthGanIndex + offset) % 12 + 12) % 12];
        const age = startAge + i * 10;
        
        const ganWx = TIAN_GAN_WUXING[gan];
        const zhiWx = DI_ZHI_WUXING[zhi];
        
        let desc = '';
        if (gan === zhi) {
            desc = '天干地支相同，运势强旺。';
        } else if (ganWx === zhiWx) {
            desc = '干支五行相同，运势平稳有力。';
        } else if ((ganWx === '木' && zhiWx === '火') || (ganWx === '火' && zhiWx === '土') ||
                   (ganWx === '土' && zhiWx === '金') || (ganWx === '金' && zhiWx === '水') ||
                   (ganWx === '水' && zhiWx === '木')) {
            desc = '干支相生，运势顺遂。';
        } else {
            desc = '干支相克，运势有波折，需努力化解。';
        }
        
        dayun.push({
            gan: gan,
            zhi: zhi,
            ganWx: ganWx,
            zhiWx: zhiWx,
            age: age,
            ganIndex: ganIndex % 10,
            zhiIndex: (monthGanIndex + offset) % 12,
            desc: desc,
            shunPai: shunPai
        });
    }
    
    return dayun;
}

// ===================== 流年分析 =====================
function analyzeLiuNian(year, baziResult) {
    const ganIndex = (year - 4) % 10;
    const zhiIndex = (year - 4) % 12;
    const gan = TIAN_GAN[ganIndex];
    const zhi = DI_ZHI[zhiIndex];
    
    const dayGan = baziResult.pillars[2].gan;
    const riZhu = baziResult.pillars[2].zhi;
    
    const shishen = getShiShenDetail(dayGan, gan);
    const ganWx = TIAN_GAN_WUXING[gan];
    const zhiWx = DI_ZHI_WUXING[zhi];
    const dayWx = TIAN_GAN_WUXING[dayGan];
    
    const naYin = NAYIN[gan] && NAYIN[gan][zhi] ? NAYIN[gan][zhi] : '未知';
    
    const chong = ['午', '未', '申', '酉', '戌', '亥', '子', '丑', '寅', '卯', '辰', '巳'];
    const he = [
        ['子', '丑'], ['寅', '亥'], ['卯', '戌'], ['辰', '酉'],
        ['巳', '申'], ['午', '未']
    ];
    
    const chongZhi = chong[zhiIndex];
    const heZhi = he.find(h => h.includes(zhi));
    
    let chongText = '';
    if (chongZhi === riZhu) chongText = '流年地支与日支相冲，冲则动，生活有较大变化。';
    else chongText = '无冲克。';
    
    let heText = '';
    if (heZhi && heZhi.includes(riZhu)) heText = '流年地支与日支相合，合则吉，人际关系和谐。';
    else heText = '';
    
    const luckDescs = {
        '正官': '官运亨通，事业上有晋升的机会，适合争取更高的职位。',
        '七杀': '压力与机遇并存，挑战较大，但也容易有突破性的进展。',
        '正印': '贵人运佳，适合学习深造，事业发展顺利。',
        '偏印': '思维活跃，适合做研究工作，但需注意孤独感。',
        '正财': '财运旺盛，正财收入稳定增长，理财有方。',
        '偏财': '偏财运好，投资理财有机会获利，但也需谨慎。',
        '比肩': '人际关系活跃，人脉扩展，但竞争也相应增加。',
        '劫财': '开销较大，注意财务管理，避免不必要的破财。',
        '食神': '才华展现，创意丰富，适合从事创作类工作。',
        '伤官': '表达能力强，适合出风头，但需注意言辞。'
    };
    
    return {
        year: year,
        gan: gan,
        zhi: zhi,
        ganWx: ganWx,
        zhiWx: zhiWx,
        naYin: naYin,
        shiShen: shishen,
        chong: chongText,
        he: heText,
        overall: luckDescs[shishen] || '运势平稳，按部就班即可。',
        advice: '保持平和心态，顺势而为。'
    };
}

// ===================== 日柱计算 (完整公式) =====================
function getDayPillar(year, month, day) {
    // 公元后日柱计算公式
    const y = year % 100;
    const c = Math.floor(year / 100);
    let w;
    if (year >= 2000) {
        w = Math.floor(y / 4) + 6 * c + Math.floor(c / 4) + 5 * y + (month <= 2 ? 14 : 15);
    } else {
        w = Math.floor(y / 4) + 6 * c + Math.floor(c / 4) + 5 * y + 15;
    }
    
    const monthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        monthDays[2] = 29;
    }
    
    let dayOfYear = 0;
    for (let i = 1; i < month; i++) dayOfYear += monthDays[i];
    dayOfYear += day;
    
    const total = w + dayOfYear;
    const ganIndex = (total + 9) % 10;
    const zhiIndex = (total + 1) % 12;
    
    const adjustedGan = ((ganIndex % 10) + 10) % 10;
    const adjustedZhi = ((zhiIndex % 12) + 12) % 12;
    
    return {
        gan: TIAN_GAN[adjustedGan],
        zhi: DI_ZHI[adjustedZhi],
        ganIndex: adjustedGan,
        zhiIndex: adjustedZhi,
        ganWx: TIAN_GAN_WUXING[TIAN_GAN[adjustedGan]],
        zhiWx: DI_ZHI_WUXING[DI_ZHI[adjustedZhi]]
    };
}

// ===================== 年柱 =====================
function getYearPillar(year) {
    const ganIndex = (year - 4) % 10;
    const zhiIndex = (year - 4) % 12;
    const adjustedGan = ((ganIndex % 10) + 10) % 10;
    const adjustedZhi = ((zhiIndex % 12) + 12) % 12;
    return {
        gan: TIAN_GAN[adjustedGan],
        zhi: DI_ZHI[adjustedZhi],
        ganIndex: adjustedGan,
        zhiIndex: adjustedZhi,
        ganWx: TIAN_GAN_WUXING[TIAN_GAN[adjustedGan]],
        zhiWx: DI_ZHI_WUXING[DI_ZHI[adjustedZhi]]
    };
}

// ===================== 月柱 =====================
function getMonthPillar(year, month) {
    const yearGanIndex = (year - 4) % 10;
    const start = (yearGanIndex % 5) * 2;
    const ganIndex = (start + month - 1) % 10;
    const zhiIndex = (month + 1) % 12;
    
    const adjustedGan = ((ganIndex % 10) + 10) % 10;
    const adjustedZhi = ((zhiIndex % 12) + 12) % 12;
    
    return {
        gan: TIAN_GAN[adjustedGan],
        zhi: DI_ZHI[adjustedZhi],
        ganIndex: adjustedGan,
        zhiIndex: adjustedZhi,
        ganWx: TIAN_GAN_WUXING[TIAN_GAN[adjustedGan]],
        zhiWx: DI_ZHI_WUXING[DI_ZHI[adjustedZhi]]
    };
}

// ===================== 时柱 =====================
function getHourPillar(dayGan, hourZhiIndex) {
    const dayGanIndex = TIAN_GAN.indexOf(dayGan);
    const start = (dayGanIndex % 5) * 2;
    const ganIndex = (start + Math.floor(hourZhiIndex / 2)) % 10;
    
    const adjustedGan = ((ganIndex % 10) + 10) % 10;
    const adjustedZhi = ((hourZhiIndex % 12) + 12) % 12;
    
    return {
        gan: TIAN_GAN[adjustedGan],
        zhi: DI_ZHI[adjustedZhi],
        ganIndex: adjustedGan,
        zhiIndex: adjustedZhi,
        ganWx: TIAN_GAN_WUXING[TIAN_GAN[adjustedGan]],
        zhiWx: DI_ZHI_WUXING[DI_ZHI[adjustedZhi]]
    };
}

// ===================== 五行分析增强版 =====================
function calculateWuxing(pillars) {
    const wuxingCount = { '金': 0, '木': 0, '水': 0, '火': 0, '土': 0 };
    const detail = [];
    
    pillars.forEach((pillar, i) => {
        const positions = ['年柱', '月柱', '日柱', '时柱'];
        const ganWx = TIAN_GAN_WUXING[pillar.gan];
        const zhiWx = DI_ZHI_WUXING[pillar.zhi];
        
        wuxingCount[ganWx] = (wuxingCount[ganWx] || 0) + 2; // 天干权重2
        wuxingCount[zhiWx] = (wuxingCount[zhiWx] || 0) + 1; // 地支权重1
        
        detail.push({ position: positions[i], gan: pillar.gan, ganWx: ganWx, zhi: pillar.zhi, zhiWx: zhiWx });
        
        // 加入藏干
        const zangGan = ZANG_GAN[pillar.zhi] || [];
        zangGan.forEach(g => {
            const wx = TIAN_GAN_WUXING[g];
            wuxingCount[wx] = (wuxingCount[wx] || 0) + 0.5;
        });
    });
    
    // 计算比例
    const total = Object.values(wuxingCount).reduce((a, b) => a + b, 0);
    const percentages = {};
    Object.keys(wuxingCount).forEach(k => {
        percentages[k] = total > 0 ? Math.round((wuxingCount[k] / total) * 100) : 0;
    });
    
    // 判断五行强弱
    const sorted = Object.entries(percentages).sort((a, b) => b[1] - a[1]);
    const strongest = sorted[0];
    const weakest = sorted[sorted.length - 1];
    
    return {
        count: wuxingCount,
        percentages: percentages,
        strongest: strongest,
        weakest: weakest,
        detail: detail,
        sorted: sorted
    };
}

// ===================== 五行喜忌建议 =====================
function getWuxingAdvice(wuxingCount) {
    const max = Math.max(...Object.values(wuxingCount));
    const min = Math.min(...Object.values(wuxingCount));
    const maxElements = Object.keys(wuxingCount).filter(k => wuxingCount[k] === max);
    const minElements = Object.keys(wuxingCount).filter(k => wuxingCount[k] === min);
    
    const advice = {
        strongElement: maxElements[0],
        weakElement: minElements[0],
        supplement: `需要补${minElements[0]}。`,
        avoid: `不宜过${maxElements[0]}。`,
        colors: '',
        directions: '',
        career: ''
    };
    
    const wxColors = { '金': '白色、金色', '木': '绿色、青色', '水': '黑色、深蓝色', '火': '红色、紫色', '土': '黄色、棕色' };
    const wxDirections = { '金': '西方、西北方', '木': '东方、东南方', '水': '北方', '火': '南方', '土': '中央、西南方' };
    const wxCareers = {
        '金': '金融、法律、机械、汽车',
        '木': '教育、文化、设计、医疗',
        '水': '物流、贸易、旅游、传媒',
        '火': '餐饮、娱乐、能源、科技',
        '土': '房地产、建筑、农业、管理'
    };
    
    advice.colors = wxColors[minElements[0]];
    advice.directions = wxDirections[minElements[0]];
    advice.career = wxCareers[minElements[0]];
    
    return advice;
}

// ===================== 日主分析 =====================
function getDayMasterInfo(dayGan) {
    const ganWx = TIAN_GAN_WUXING[dayGan];
    const ganIndex = TIAN_GAN.indexOf(dayGan);
    const yinYang = ganIndex % 2 === 0 ? '阳' : '阴';
    
    const dayMasterDesc = {
        '甲': '甲木属阳木，如参天大树。性格正直坚毅，有领导风范，心胸宽广，有上进心，但也容易固执。',
        '乙': '乙木属阴木，如花草藤萝。性格柔和灵活，善于应变，有韧性，适应力强，但也容易缺乏主见。',
        '丙': '丙火属阳火，如太阳之火。性格热情开朗，光明磊落，慷慨大方，有感染力，但也容易冲动。',
        '丁': '丁火属阴火，如灯烛之火。性格温和细致，善于思考，有洞察力，内敛含蓄，但也容易多虑。',
        '戊': '戊土属阳土，如城墙之土。性格稳重厚实，诚信可靠，包容力强，有担当，但也容易保守。',
        '己': '己土属阴土，如田园之土。性格温和谦逊，善于协调，有耐心，脚踏实地，但也容易犹豫。',
        '庚': '庚金属阳金，如刀剑之金。性格刚毅果断，意志坚定，勇于创新，有魄力，但也容易冲动。',
        '辛': '辛金属阴金，如珠宝之金。性格细腻精致，追求完美，善于表达，有审美，但也容易敏感。',
        '壬': '壬水属阳水，如江河之水。性格聪慧深邃，思维开阔，善于变通，有智慧，但也容易散漫。',
        '癸': '癸水属阴水，如雨露之水。性格柔和细致，善于筹划，有耐心，直觉敏锐，但也容易消沉。'
    };
    
    return {
        gan: dayGan,
        wuxing: ganWx,
        yinYang: yinYang,
        desc: dayMasterDesc[dayGan] || '未知'
    };
}

// ===================== 生肖信息 =====================
function getZodiacAnimalInfo(zodiac) {
    const info = {
        '鼠': { element: '水', personality: '聪明机敏，善于交际，适应力强', match: '龙、猴、牛', conflict: '马、羊' },
        '牛': { element: '土', personality: '勤劳踏实，忠诚可靠，耐心坚韧', match: '鼠、蛇、鸡', conflict: '羊、马' },
        '虎': { element: '木', personality: '勇敢自信，热情大方，独立自主', match: '马、狗、猪', conflict: '猴、蛇' },
        '兔': { element: '木', personality: '温柔善良，细腻敏感，和平主义', match: '羊、狗、猪', conflict: '鸡、龙' },
        '龙': { element: '土', personality: '自信果断，充满活力，创造力强', match: '鼠、猴、鸡', conflict: '狗、兔' },
        '蛇': { element: '火', personality: '深思熟虑，智慧神秘，直觉敏锐', match: '牛、鸡、龙', conflict: '猪、虎' },
        '马': { element: '火', personality: '热情奔放，自由自在，乐观向上', match: '虎、狗、羊', conflict: '鼠、牛' },
        '羊': { element: '土', personality: '温和善良，艺术气质，多愁善感', match: '兔、马、猪', conflict: '牛、鼠' },
        '猴': { element: '金', personality: '聪明灵活，幽默风趣，创造力强', match: '鼠、龙、蛇', conflict: '虎、猪' },
        '鸡': { element: '金', personality: '勤劳认真，自信果断，组织力强', match: '牛、龙、蛇', conflict: '兔、狗' },
        '狗': { element: '土', personality: '忠诚可靠，正义感强，责任感重', match: '虎、兔、马', conflict: '龙、鸡' },
        '猪': { element: '水', personality: '真诚善良，宽容大度，乐观知足', match: '虎、兔、羊', conflict: '蛇、猴' }
    };
    return info[zodiac] || {};
}

// ===================== 命格总评 =====================
function generateTotalDesc(dayMaster, wuxingCount, gender) {
    const wuxingStr = Object.entries(wuxingCount.percentages)
        .filter(([_, v]) => v > 0)
        .sort((a, b) => b[1] - a[1])
        .map(([k, v]) => `${k}${v}%`)
        .join('、');
    
    const genderText = gender === 'male' ? '乾造' : '坤造';
    const dg = dayMaster.gan;
    const dw = dayMaster.wuxing;
    
    return `${genderText}，${dg}${dayMaster.yinYang}${dw}日主。${dayMaster.desc}五行分布：${wuxingStr}。${wuxingCount.strongest[1] > 40 ? wuxingCount.strongest[0] + '较旺' : '五行较为平衡'}，${wuxingCount.weakest[1] < 10 ? wuxingCount.weakest[0] + '较弱' : '各元素力量均衡'}。`;
}

// ===================== 时辰表 =====================
const SHICHEN = [
    { name: '子时', time: '23:00-00:59', index: 0 },
    { name: '丑时', time: '01:00-02:59', index: 1 },
    { name: '寅时', time: '03:00-04:59', index: 2 },
    { name: '卯时', time: '05:00-06:59', index: 3 },
    { name: '辰时', time: '07:00-08:59', index: 4 },
    { name: '巳时', time: '09:00-10:59', index: 5 },
    { name: '午时', time: '11:00-12:59', index: 6 },
    { name: '未时', time: '13:00-14:59', index: 7 },
    { name: '申时', time: '15:00-16:59', index: 8 },
    { name: '酉时', time: '17:00-18:59', index: 9 },
    { name: '戌时', time: '19:00-20:59', index: 10 },
    { name: '亥时', time: '21:00-22:59', index: 11 }
];

// ===================== 主计算函数 =====================
function calculateBazi(year, month, day, hourIndex, gender, name) {
    const yearPillar = getYearPillar(year);
    const monthPillar = getMonthPillar(year, month);
    const dayPillar = getDayPillar(year, month, day);
    const hourZhiIndex = parseInt(hourIndex);
    const hourPillar = getHourPillar(dayPillar.gan, hourZhiIndex);
    
    const pillars = [yearPillar, monthPillar, dayPillar, hourPillar];
    const wuxingCount = calculateWuxing(pillars);
    const dayMaster = getDayMasterInfo(dayPillar.gan);
    
    // 生肖
    const zodiacIndex = (year - 4) % 12;
    const zodiac = SHENGXIAO[zodiacIndex];
    const zodiacInfo = getZodiacAnimalInfo(zodiac);
    
    // 纳音
    const nayin = [
        NAYIN[yearPillar.gan] && NAYIN[yearPillar.gan][yearPillar.zhi] ? NAYIN[yearPillar.gan][yearPillar.zhi] : '未知',
        NAYIN[monthPillar.gan] && NAYIN[monthPillar.gan][monthPillar.zhi] ? NAYIN[monthPillar.gan][monthPillar.zhi] : '未知',
        NAYIN[dayPillar.gan] && NAYIN[dayPillar.gan][dayPillar.zhi] ? NAYIN[dayPillar.gan][dayPillar.zhi] : '未知',
        NAYIN[hourPillar.gan] && NAYIN[hourPillar.gan][hourPillar.zhi] ? NAYIN[hourPillar.gan][hourPillar.zhi] : '未知'
    ];
    
    // 藏干
    const zangGanList = pillars.map(p => ({
        zhi: p.zhi,
        hiddenStems: ZANG_GAN[p.zhi] || [],
        mainQi: ZANG_GAN_QI[p.zhi].main,
        midQi: ZANG_GAN_QI[p.zhi].mid,
        restQi: ZANG_GAN_QI[p.zhi].rest
    }));
    
    // 十神
    const shiShenList = pillars.map(p => ({
        position: ['年柱', '月柱', '日柱', '时柱'][pillars.indexOf(p)],
        gan: p.gan,
        zhi: p.zhi,
        ganShiShen: getShiShenDetail(dayPillar.gan, p.gan),
        zangGanShiShen: (ZANG_GAN[p.zhi] || []).map(g => ({
            gan: g,
            shishen: getShiShenDetail(dayPillar.gan, g)
        }))
    }));
    
    // 神煞
    const shensha = calculateShenSha(
        dayPillar.ganIndex,
        yearPillar.zhiIndex,
        monthPillar.zhiIndex,
        dayPillar.zhiIndex,
        hourPillar.zhiIndex
    );
    
    // 大运
    const dayun = calculateDayun(year, gender, monthPillar.ganIndex);
    
    // 流年
    const currentYear = new Date().getFullYear();
    const currentLiuNian = analyzeLiuNian(currentYear, { pillars: pillars });
    
    // 五行建议
    const wuxingAdvice = getWuxingAdvice(wuxingCount.count);
    
    // 命格总评
    const totalDesc = generateTotalDesc(dayMaster, wuxingCount, gender);
    
    return {
        name: name || '未知',
        gender: gender === 'male' ? '男' : '女',
        birthDate: `${year}年${month}月${day}日 ${SHICHEN[hourIndex].name}`,
        zodiac: zodiac,
        zodiacInfo: zodiacInfo,
        pillars: {
            year: { gan: yearPillar.gan, zhi: yearPillar.zhi, wuxing: yearPillar.ganWx + yearPillar.zhiWx },
            month: { gan: monthPillar.gan, zhi: monthPillar.zhi, wuxing: monthPillar.ganWx + monthPillar.zhiWx },
            day: { gan: dayPillar.gan, zhi: dayPillar.zhi, wuxing: dayPillar.ganWx + dayPillar.zhiWx },
            hour: { gan: hourPillar.gan, zhi: hourPillar.zhi, wuxing: hourPillar.ganWx + hourPillar.zhiWx }
        },
        nayin: {
            year: nayin[0],
            month: nayin[1],
            day: nayin[2],
            hour: nayin[3]
        },
        zangGan: zangGanList,
        shiShen: shiShenList,
        wuxing: wuxingCount,
        wuxingAdvice: wuxingAdvice,
        dayMaster: dayMaster,
        shensha: shensha,
        dayun: dayun,
        liunian: currentLiuNian,
        totalDesc: totalDesc,
        // 简单命理解读
        simpleAnalysis: generateSimpleAnalysis(dayMaster, wuxingCount, zodiacInfo, shensha)
    };
}

// ===================== 简单命理解读 =====================
function generateSimpleAnalysis(dayMaster, wuxingCount, zodiacInfo, shensha) {
    const lines = [];
    
    lines.push(`日主${dayMaster.gan}${dayMaster.yinYang}${dayMaster.wuxing}，${dayMaster.desc.split('。')[0]}。`);
    
    const strong = wuxingCount.strongest;
    const weak = wuxingCount.weakest;
    lines.push(`五行中${strong[0]}最旺（${strong[1]}%），${weak[0]}最弱（${weak[1]}%）。`);
    
    if (zodiacInfo && zodiacInfo.personality) {
        lines.push(`生肖${zodiacInfo.element}命，${zodiacInfo.personality}。`);
    }
    
    if (shensha.length > 0) {
        const jiShen = shensha.filter(s => s.type === '吉神');
        const xiongShen = shensha.filter(s => s.type === '凶神');
        if (jiShen.length > 0) {
            lines.push(`命带${jiShen.map(s => s.name).join('、')}，主吉。`);
        }
        if (xiongShen.length > 0) {
            lines.push(`遇${xiongShen.map(s => s.name).join('、')}，需注意相关方面的挑战。`);
        }
    }
    
    return lines.join('');
}

// ===================== 获取时柱数组 =====================
function getShiChenArray() {
    return SHICHEN;
}

// ===================== 别名（供app.js调用） =====================
function calculateBaziEngine(year, month, day, hourIndex, gender, name) {
    return calculateBazi(year, month, day, hourIndex, gender, name);
}