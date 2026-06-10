/* ============================================
   星缘 - 塔罗占卜引擎 (完整78张)
   包含：22大阿尔卡纳 + 56小阿尔卡纳 + 3种牌阵
   ============================================ */

// ===================== 22张大阿尔卡纳 =====================
const MAJOR_ARCANA = [
    {
        id: 0, name: '愚者', emoji: '🃏', number: '0',
        category: '大阿尔卡纳', element: '风',
        upright: '新的开始、冒险、天真、自由、无限可能、信任',
        reversed: '鲁莽、冒险行为、不负责任、未知的危险、停滞',
        meaning: {
            love: '在爱情方面，愚者代表新的恋情即将开始，带着天真和勇气去探索。单身的你可能会遇到一个让你心动的人，大胆去追求吧！',
            career: '事业上可能面临新的机会和选择，需要你勇敢地迈出第一步。不要被未知吓倒，新的方向可能带来意想不到的收获。',
            wealth: '财运方面有新的机遇，但需要谨慎评估风险。适合尝试新的理财方式，但不要把所有鸡蛋放在一个篮子里。',
            health: '健康状况整体良好，充满活力和干劲。适合开始新的健身计划或尝试新的健康生活方式。',
            general: '愚者牌象征着全新的开始和无限的可能性。它鼓励你放下过去的包袱，以开放和天真的心态迎接新的旅程。相信你的直觉，勇敢地迈出第一步！'
        },
        advice: '勇敢追梦，保持纯真之心，但也要注意脚下。',
        reverseMeaning: '逆位的愚者提醒你不要过于冲动。在追求新事物之前，先停下来思考可能的风险和后果。'
    },
    {
        id: 1, name: '魔术师', emoji: '🎩', number: 'I',
        category: '大阿尔卡纳', element: '水星',
        upright: '创造力、技能、自信、资源、能力、掌控、沟通',
        reversed: '操纵、才能未发挥、欺骗、资源浪费、缺乏计划',
        meaning: {
            love: '在爱情中，魔术师代表着主动出击和浪漫的表达。你有能力吸引心仪的对象，展现你的魅力和才华。',
            career: '事业运势极佳，你的才华和能力将得到充分发挥。这是一个展现自己、实现目标的好时机。',
            wealth: '财运亨通，你的智慧和技能能够带来丰厚的回报。适合投资和创业。',
            health: '身体状况良好，精力充沛。适合学习新的健康知识来提升生活质量。',
            general: '魔术师牌代表着将想法转化为现实的能力。你拥有所需的全部资源，现在需要的就是自信和行动。'
        },
        advice: '善用你所拥有的资源，创造力是你最大的财富。',
        reverseMeaning: '逆位的魔术师提醒你不要浪费自己的才华。可能有人在操纵局面，保持警惕。'
    },
    {
        id: 2, name: '女祭司', emoji: '🙏', number: 'II',
        category: '大阿尔卡纳', element: '月亮',
        upright: '直觉、神秘、内在智慧、潜意识、沉默、洞察力',
        reversed: '表面化、直觉迟钝、秘密暴露、冷漠、忽视内心',
        meaning: {
            love: '感情上需要更多的倾听和观察，不要急于表达。用心去感受对方的真实想法，沉默往往比言语更有力量。',
            career: '工作上需要深入研究和分析，不要只停留在表面。相信你的直觉，在决策时多听听内心的声音。',
            wealth: '财运平稳，适合保守理财。不要被表面的投资机会所迷惑，深入了解后再做决定。',
            health: '精神状态良好，适合冥想和静心。关注心理健康，倾听身体的声音。',
            general: '女祭司牌代表着内在的智慧和神秘的知识。她邀请你向内探索，倾听直觉的指引。知识的真正来源在于内心。'
        },
        advice: '静心聆听内在的声音，答案就在你心中。',
        reverseMeaning: '逆位的女祭司意味着你可能忽略了自己的直觉，或是在回避某些真相。'
    },
    {
        id: 3, name: '女皇', emoji: '👑', number: 'III',
        category: '大阿尔卡纳', element: '金星',
        upright: '丰饶、母性、自然、美丽、舒适、享受、收获',
        reversed: '依赖、失去自我、创造力受阻、家庭问题、疏忽',
        meaning: {
            love: '爱情生活丰富而满足，享受甜蜜的恋情。女皇牌预示着感情的丰收，可能会有婚姻或确立关系的好消息。',
            career: '事业上收获丰硕，你的努力即将得到回报。适合与美感、艺术、设计相关的工作，创造力充沛。',
            wealth: '财运旺盛，物资丰富。适合投资艺术品、奢侈品或与美相关的产业。',
            health: '身体状况良好，充满女性的柔美与活力。适合瑜伽、舞蹈等优美的运动。',
            general: '女皇牌代表着丰饶、收获和自然的恩赐。她象征着你正处于一个收获的季节，所有的付出都将得到回报。'
        },
        advice: '享受生活的美好，这是你应得的收获时刻。',
        reverseMeaning: '逆位的女皇提醒你注意不要过度依赖他人，重新找回自己的创造力和独立性。'
    },
    {
        id: 4, name: '皇帝', emoji: '🏛️', number: 'IV',
        category: '大阿尔卡纳', element: '白羊座',
        upright: '权威、父亲、结构、稳定、控制、规则、领导力',
        reversed: '专制、暴政、缺乏纪律、滥用权力、固执、软弱',
        meaning: {
            love: '在感情中，皇帝代表着稳定和承诺。你可能需要一个能够给你安全感的伴侣，或者自己需要更加成熟稳重。',
            career: '事业运势强劲，你展现出卓越的领导才能。适合担任管理职位或创业，但需要注意不要过于专断。',
            wealth: '财运稳定，通过规则和纪律获得了稳固的经济基础。适合长期投资和稳健理财。',
            health: '身体健康，骨骼和牙齿状况良好。需要注意不要过度劳累，保持规律作息。',
            general: '皇帝牌象征着权威、结构和父性力量。它提醒你要建立秩序和规则，用纪律和自律来实现目标。'
        },
        advice: '建立秩序，履行责任，用智慧和权威引领他人。',
        reverseMeaning: '逆位的皇帝提醒你避免变得独裁或滥用权力，也可能是你缺乏应有的纪律性。'
    },
    {
        id: 5, name: '教皇', emoji: '⛪', number: 'V',
        category: '大阿尔卡纳', element: '金牛座',
        upright: '传统、信仰、教导、导师、仪式、慈悲、智慧',
        reversed: '教条、固执、不合群、叛逆、质疑权威、另类',
        meaning: {
            love: '感情上可能通过传统的方式遇到对象，如相亲或介绍。重视家庭观念和稳定的感情关系。',
            career: '工作中需要遵循规则和流程，向有经验的前辈学习。适合教育、咨询、宗教等相关行业。',
            wealth: '财运稳定，通过正规渠道获得收入。适合保守的理财方式。',
            health: '身体健康，适合通过传统养生的方式来调理身体。中医、按摩等传统疗法会很有效。',
            general: '教皇牌代表着传统、教导和精神指引。它提醒你要尊重传统和权威，从前辈的智慧中学习。'
        },
        advice: '虚心学习，传承智慧，但不要盲从。',
        reverseMeaning: '逆位的教皇鼓励你打破常规，寻找属于自己的精神之路。'
    },
    {
        id: 6, name: '恋人', emoji: '💑', number: 'VI',
        category: '大阿尔卡纳', element: '双子座',
        upright: '爱情、和谐、关系、选择、吸引力、价值观统一',
        reversed: '分手、冲突、价值观不合、选择困难、关系破裂',
        meaning: {
            love: '恋人牌是爱情的最好象征！预示着甜蜜的恋情、灵魂伴侣的出现或是现有关系的进一步提升。',
            career: '工作中面临重要的选择，需要跟随内心的真实想法。合作和伙伴关系对你的职业发展至关重要。',
            wealth: '财运与合作伙伴相关，共同的财务决策会带来好的结果。适合合资或合伙投资。',
            health: '身心和谐，健康状况良好。与伴侣一起运动可以增进感情和健康。',
            general: '恋人牌代表着爱情、和谐和重要的选择。它象征着心与心的连接，也提醒你在重大决定面前要跟随内心的真实声音。'
        },
        advice: '跟随内心，真爱至上，做出忠于自己的选择。',
        reverseMeaning: '逆位的恋人暗示感情中的冲突和价值观的不合，需要重新审视你们的关系。'
    },
    {
        id: 7, name: '战车', emoji: '⚔️', number: 'VII',
        category: '大阿尔卡纳', element: '巨蟹座',
        upright: '胜利、决心、毅力、控制、自信、行动力',
        reversed: '失败、缺乏方向、失控、侵略性、力量不足',
        meaning: {
            love: '在感情中，战车牌代表着主动追求和坚定的决心。你有能力赢得心仪对象的心，但也需要注意方式方法。',
            career: '事业上即将取得重大胜利！你的毅力和决心将帮助你克服一切困难，达成目标。',
            wealth: '财运旺盛，通过努力获得丰厚的回报。大胆追求你的财务目标。',
            health: '体力充沛，适合进行高强度的运动。注意交通安全和意外伤害。',
            general: '战车牌代表着意志力的胜利。它告诉你只要有坚定的决心和强大的意志力，就能战胜任何困难，取得最终的胜利。'
        },
        advice: '坚定目标，勇往直前，胜利属于你！',
        reverseMeaning: '逆位的战车提醒你可能缺乏方向或自制力，需要重新规划路线。'
    },
    {
        id: 8, name: '力量', emoji: '💪', number: 'VIII',
        category: '大阿尔卡纳', element: '狮子座',
        upright: '勇气、力量、决心、内在力量、坚韧、同情',
        reversed: '懦弱、缺乏勇气、怀疑、力量不足、压抑、自卑',
        meaning: {
            love: '在爱情中，力量牌代表着包容和理解。用温柔和耐心去化解矛盾，爱的力量可以克服一切。',
            career: '事业上需要发挥你的内在力量和毅力。不是蛮力，而是以柔克刚的智慧。',
            wealth: '财运稳定，通过坚持不懈的努力获得回报。不要走捷径，稳步前进。',
            health: '身体状况良好，但需要注意心理压力。内在的力量可以帮助你战胜疾病。',
            general: '力量牌代表着内在的勇气和坚韧不拔的精神。真正的力量不是控制他人，而是战胜自己的恐惧和软弱。'
        },
        advice: '用温柔的力量战胜恐惧，内心的勇气才是最强大的。',
        reverseMeaning: '逆位的力量提示你可能在怀疑自己的能力，需要重新找回内心的勇气。'
    },
    {
        id: 9, name: '隐士', emoji: '🏮', number: 'IX',
        category: '大阿尔卡纳', element: '处女座',
        upright: '内省、智慧、孤独、寻找真理、沉思、指引',
        reversed: '孤立、孤独、偏执、拒绝帮助、迷失、逃避',
        meaning: {
            love: '感情上可能需要一些独处的时间来思考。单身者享受独处的时光，有伴者需要一些个人空间。',
            career: '工作上适合独立思考和深入研究。暂时的隐退是为了找到更好的方向。',
            wealth: '财运平稳，适合保守的理财方式。在投资之前需要做充分的调查研究。',
            health: '精神状态需要关注，适合通过冥想和瑜伽来平衡身心。注意不要过于孤独。',
            general: '隐士牌代表着内省和智慧的追寻。它提醒你要适时地远离喧嚣，去倾听内心真实的声音，寻找生命的真谛。'
        },
        advice: '适时独处，静心思考，智慧在寂静中生长。',
        reverseMeaning: '逆位的隐士提醒你不要过度孤立自己，有时也需要接受他人的帮助。'
    },
    {
        id: 10, name: '命运之轮', emoji: '🎡', number: 'X',
        category: '大阿尔卡纳', element: '木星',
        upright: '转变、循环、命运、幸运、机遇、新的阶段',
        reversed: '厄运、坏运气、循环打破、阻力、失去控制',
        meaning: {
            love: '感情上会有新的变化和转机。命运的车轮正在转动，可能会带来新的恋情或感情的重大转折。',
            career: '事业上将会迎来重要的转机！好运正在向你靠近，抓住机遇会有意想不到的收获。',
            wealth: '财运波动较大，但总体向上。投机运不错，但也要注意风险控制。',
            health: '健康状况会逐渐好转。命运之轮的转动带来了新的生机和活力。',
            general: '命运之轮代表着生命的循环和变化。它提醒你万物皆在变化之中，好运和厄运都在轮转。当机会来临时，要勇敢地抓住它！'
        },
        advice: '把握命运的转折，机遇就在转角处。',
        reverseMeaning: '逆位的命运之轮暗示你可能正处于低谷期，但请记住，轮子总会再次转上去。'
    },
    {
        id: 11, name: '正义', emoji: '⚖️', number: 'XI',
        category: '大阿尔卡纳', element: '天秤座',
        upright: '公平、诚实、真相、法律、因果关系、平衡',
        reversed: '不公、不诚实、欺骗、推卸责任、失衡、逃避',
        meaning: {
            love: '感情上需要公平地对待对方。诚实是维系关系的基础，平衡付出和收获。',
            career: '工作中你的努力会得到公平的回报。适合从事法律、仲裁等需要公正判断的职业。',
            wealth: '财务状况公正透明，通过正当途径获得财富。避免偷税漏税等不正当行为。',
            health: '健康状况平衡，身心和谐。保持规律的生活节奏对健康有益。',
            general: '正义牌代表着公平、真相和因果报应。它提醒你善有善报，恶有恶报，现在就是收获果实的时刻。'
        },
        advice: '种善因得善果，诚实公正地面对一切。',
        reverseMeaning: '逆位的正义提醒你可能在逃避责任，或者遭遇了不公平的对待。'
    },
    {
        id: 12, name: '倒吊人', emoji: '🙃', number: 'XII',
        category: '大阿尔卡纳', element: '水',
        upright: '牺牲、放下、新的视角、暂停、顺其自然',
        reversed: '抗拒、拖延、不愿牺牲、停滞、错失良机',
        meaning: {
            love: '感情上需要换位思考。从对方的角度去看问题，可能会有新的理解。暂时的等待和牺牲是为了更好的未来。',
            career: '事业上可能需要做出一些牺牲，暂时放慢脚步。换一个角度看问题，可能会有新的发现。',
            wealth: '财务上需要耐心，暂时不要有大动作。等待更好的时机。',
            health: '身体健康需要关注，尤其是循环系统。适当倒立或瑜伽可以改善健康。',
            general: '倒吊人牌代表着放下和新的视角。它提醒你在某些时候需要暂停和牺牲，用不同的角度去看待问题，才能找到真正的答案。'
        },
        advice: '换一个角度看世界，有时候放下反而能得到更多。',
        reverseMeaning: '逆位的倒吊人意味着你抗拒必要的改变，继续拖延只会让情况变得更糟。'
    },
    {
        id: 13, name: '死神', emoji: '💀', number: 'XIII',
        category: '大阿尔卡纳', element: '天蝎座',
        upright: '结束、转变、放下过去、重生、新的开始',
        reversed: '抗拒改变、停滞、恐惧、重复旧模式、徒劳',
        meaning: {
            love: '感情上可能面临结束或重大的转变。不要害怕，旧的关系结束意味着新的开始。',
            career: '事业上面临重要的变革。旧的模式已经不再适用，勇敢接受改变才能迎来新的机遇。',
            wealth: '财务上需要结束一些不好的投资习惯。放下旧的理财方式，迎接新的财务管理方法。',
            health: '健康状况可能面临挑战，但转变后会变得更好。手术或治疗可能会有很好的效果。',
            general: '死神牌并不是一张可怕的牌！它代表着转变、结束和新开始。放下不再服务你的一切，才能为新的生命腾出空间。'
        },
        advice: '放下过去，拥抱改变，死亡是新生的开始。',
        reverseMeaning: '逆位的死神意味着你抗拒改变，紧抓着已经结束的事物不放。'
    },
    {
        id: 14, name: '节制', emoji: '🧘', number: 'XIV',
        category: '大阿尔卡纳', element: '射手座',
        upright: '平衡、温和、耐心、和谐、适中、自我调节',
        reversed: '失衡、极端、浪费、过度、不和谐、急躁',
        meaning: {
            love: '感情上需要更多的耐心和包容。平衡付出和索取，不要走极端。和谐的感情需要双方的共同调节。',
            career: '工作中保持平衡的节奏，不要过于急躁。团队合作中做好协调和沟通的角色。',
            wealth: '财务状况平衡，收入支出合理。节制消费，合理理财，财富会稳步增长。',
            health: '身体健康，身心平衡。保持规律的生活习惯，不要过度放纵或过度节食。',
            general: '节制牌代表着平衡、和谐和中庸之道。它提醒你在生活中保持适度，找到平衡点，才能获得真正的幸福和满足。'
        },
        advice: '保持平衡，适可而止，中庸之道是最智慧的选择。',
        reverseMeaning: '逆位的节制提醒你可能在某方面走极端了，需要重新找回平衡。'
    },
    {
        id: 15, name: '恶魔', emoji: '😈', number: 'XV',
        category: '大阿尔卡纳', element: '摩羯座',
        upright: '束缚、物质主义、欲望、沉迷、依赖、控制',
        reversed: '解放、放下执念、觉醒、恢复自由、打破束缚',
        meaning: {
            love: '感情中可能存在不健康的关系或过度的占有欲。需要审视这段关系是否真正让你快乐。',
            career: '工作上可能被物质诱惑或权力欲望所控制。注意不要为了成功不择手段。',
            wealth: '财运旺盛，但要注意不要被金钱欲望所控制。理性的财务管理很重要。',
            health: '需要注意成瘾问题，如烟酒、游戏等。过度放纵会损害健康。',
            general: '恶魔牌代表着束缚、欲望和物质主义的陷阱。它提醒你审视自己被什么所束缚，是时候摆脱这些不健康的执念了。'
        },
        advice: '认清束缚你的是什么，真正的自由在于内心的觉醒。',
        reverseMeaning: '逆位的恶魔意味着你正在努力摆脱某种束缚，重获自由。'
    },
    {
        id: 16, name: '高塔', emoji: '🗼', number: 'XVI',
        category: '大阿尔卡纳', element: '火星',
        upright: '剧变、崩塌、觉醒、颠覆、危机、重建',
        reversed: '避免灾难、抗拒改变、延迟的危机、重新评估',
        meaning: {
            love: '感情上可能经历突然的变化或危机。看似坚固的关系可能会面临考验，但这也是重建更健康关系的机会。',
            career: '事业上可能面临突然的变故，如失业或公司重组。虽然痛苦，但这是重建更好事业的契机。',
            wealth: '财运可能出现意外损失。投资需要格外谨慎，避免高风险操作。',
            health: '身体健康需要警惕突发疾病或意外伤害。定期体检很重要。',
            general: '高塔牌代表着突发的变故和颠覆性的改变。虽然过程痛苦，但旧有的虚假结构被摧毁后，才能建立更坚固的基础。'
        },
        advice: '危机中蕴含着转机，崩塌之后才能重建得更坚固。',
        reverseMeaning: '逆位的高塔暗示你可能暂时避免了危机，但根本问题仍然存在。'
    },
    {
        id: 17, name: '星星', emoji: '⭐', number: 'XVII',
        category: '大阿尔卡纳', element: '水瓶座',
        upright: '希望、灵感、平静、宁静、治愈、指引、乐观',
        reversed: '绝望、失去方向、缺乏灵感、失望、悲观',
        meaning: {
            love: '感情上充满希望和期待。星星牌预示着美好的恋情将会到来，或者现有的感情将会更加深厚。',
            career: '事业上灵感迸发，创意无限。你对未来充满信心，前方的道路一片光明。',
            wealth: '财运逐渐好转，对未来充满希望。适合制定长期的财务规划。',
            health: '身心健康，精神愉悦。星星的能量带来治愈和恢复。',
            general: '星星牌代表着希望、灵感和内心的平静。经历了暴风雨之后，星星为你指引方向，带给你无限的希望和慰藉。'
        },
        advice: '保持希望，相信未来，星光终将照亮你的路。',
        reverseMeaning: '逆位的星星提醒你不要失去希望，即使在最黑暗的时刻，星星依然在闪耀。'
    },
    {
        id: 18, name: '月亮', emoji: '🌙', number: 'XVIII',
        category: '大阿尔卡纳', element: '双鱼座',
        upright: '幻觉、恐惧、不确定性、潜意识、直觉、迷惑',
        reversed: '看清真相、克服恐惧、释放焦虑、走出迷惑',
        meaning: {
            love: '感情中存在不确定性和迷惑。可能有隐藏的真相没有被发现，需要用心去感受和观察。',
            career: '工作上存在一些不明朗的因素。不要被表象所迷惑，深入调查才能发现真相。',
            wealth: '财运不稳定，存在风险。不要轻信他人的投资建议，自己做足功课。',
            health: '精神健康需要关注。焦虑和不安可能影响睡眠质量，建议进行放松练习。',
            general: '月亮牌代表着潜意识、恐惧和迷惑。它提醒你并非所有事情都如表面所见，深入探索才能发现隐藏的真相。'
        },
        advice: '直面内心的恐惧，迷雾终将散去。',
        reverseMeaning: '逆位的月亮意味着你正在克服恐惧，看清真相，走出迷惑。'
    },
    {
        id: 19, name: '太阳', emoji: '☀️', number: 'XIX',
        category: '大阿尔卡纳', element: '太阳',
        upright: '成功、喜悦、光明、活力、自信、成就、繁荣',
        reversed: '暂时的阴霾、过度乐观、傲慢、缺乏热情',
        meaning: {
            love: '爱情的巅峰！太阳牌预示着最幸福的感情状态。无论是单身还是有伴，都将沐浴在爱的阳光下。',
            career: '事业上大获成功！所有的努力都得到了回报，你正处于事业的巅峰期。',
            wealth: '财运极佳，财富源源不断。非常适合投资和商业扩张。',
            health: '身体状态极佳，精力充沛。充满活力和健康的能量。',
            general: '太阳牌是所有塔罗牌中最吉利的一张！它代表着成功、活力和喜悦。你正处于人生的高光时刻，尽情享受这份光明和温暖吧！'
        },
        advice: '享受成功的喜悦，分享你的光芒，照亮他人。',
        reverseMeaning: '逆位的太阳提醒你不要骄傲自满，保持谦逊，暂时的阴霾很快就会过去。'
    },
    {
        id: 20, name: '审判', emoji: '📯', number: 'XX',
        category: '大阿尔卡纳', element: '火',
        upright: '觉醒、重生、审判、评价、宽恕、呼唤、抉择',
        reversed: '自我怀疑、抗拒召唤、不愿面对、错失机会',
        meaning: {
            love: '感情上需要做出重要的决定。审判牌呼唤你诚实地面对感情，也许需要宽恕或重新开始。',
            career: '工作上将面临重要的评估和考核。你的表现将被评判，这也是证明自己的好机会。',
            wealth: '财务状况需要重新评估。审视过去的财务决策，做出必要的调整。',
            health: '健康状况出现转机。身体有自我修复和重生的能力，相信自己会好起来。',
            general: '审判牌代表着觉醒、评估和重生。现在是时候回顾过去，诚实地评估自己，然后朝着新的方向前进。'
        },
        advice: '倾听内心的召唤，诚实地审判过去，迎接新生。',
        reverseMeaning: '逆位的审判暗示你可能在逃避重要的决定或自我评价。'
    },
    {
        id: 21, name: '世界', emoji: '🌍', number: 'XXI',
        category: '大阿尔卡纳', element: '土星',
        upright: '完成、成就、圆满、整合、旅行、实现、成功',
        reversed: '未完成、停滞、缺憾、不完整、延迟、追求完美',
        meaning: {
            love: '感情上达到了圆满的状态。世界牌预示着完美的爱情和灵魂的契合，是修成正果的象征。',
            career: '事业上大功告成！一个重要的项目或阶段圆满结束，你获得了巨大的成就和满足感。',
            wealth: '财务目标达成，财富积累到了一个圆满的阶段。可以庆祝你的成功！',
            health: '身心健康圆满，整个人处于和谐平衡的状态。',
            general: '世界牌是塔罗牌的终点，代表着完成、圆满和成就。一个重要的周期已经结束，你取得了圆满的成功。同时，这也预示着新的旅程即将开始。'
        },
        advice: '庆祝你的成就，圆满不是终点，而是新的起点。',
        reverseMeaning: '逆位的世界提醒你可能还有未完成的事情，或者感觉不够圆满，需要继续努力。'
    }
];

// ===================== 56张小阿尔卡纳 =====================
const SUITS = ['权杖', '圣杯', '宝剑', '星币'];
const SUIT_ELEMENTS = { '权杖': '火', '圣杯': '水', '宝剑': '风', '星币': '土' };
const SUIT_MEANINGS = {
    '权杖': { aspect: '事业、行动、激情、创造力', energy: '积极、主动、向外拓展' },
    '圣杯': { aspect: '情感、关系、直觉、心灵', energy: '感性、包容、向内探索' },
    '宝剑': { aspect: '思想、冲突、决策、挑战', energy: '理性、尖锐、突破障碍' },
    '星币': { aspect: '财富、物质、健康、实际', energy: '务实、稳定、物质积累' }
};

const MINOR_CARDS = [];

function initMinorArcana() {
    const numbers = [
        { num: 'Ace', name: '王牌', keywords: '开始、潜力、新机会', descs: ['新的开始', '纯粹的潜力', '机会来临', '创造的源泉'] },
        { num: '2', name: '二', keywords: '平衡、选择、合作', descs: ['两难选择', '平衡状态', '合作关系', '等待决定'] },
        { num: '3', name: '三', keywords: '成长、扩张、团队', descs: ['团队协作', '初步成果', '扩张发展', '庆祝'] },
        { num: '4', name: '四', keywords: '稳定、停滞、巩固', descs: ['稳固基础', '暂时停滞', '休整期', '安全感'] },
        { num: '5', name: '五', keywords: '冲突、挑战、失落', descs: ['竞争冲突', '失落感', '挑战来临', '需要调整'] },
        { num: '6', name: '六', keywords: '和谐、进步、分享', descs: ['和谐共赢', '进步发展', '分享喜悦', '顺利过渡'] },
        { num: '7', name: '七', keywords: '策略、坚持、评估', descs: ['需要策略', '坚持立场', '重新评估', '面对挑战'] },
        { num: '8', name: '八', keywords: '行动、变化、速度', descs: ['快速行动', '变化来临', '向前迈进', '动态发展'] },
        { num: '9', name: '九', keywords: '圆满、独立、成就', descs: ['接近圆满', '独立自主', '取得成就', '最后的努力'] },
        { num: '10', name: '十', keywords: '完成、结束、负担', descs: ['周期结束', '负担沉重', '完成使命', '新的循环'] }
    ];
    
    const courts = [
        { name: '侍从', keywords: '学习、探索、消息、年轻', descs: ['好奇探索', '学习成长', '新的消息', '年轻的能量'] },
        { name: '骑士', keywords: '行动、追求、冒险、速度', descs: ['积极行动', '热情追求', '冒险精神', '快速进展'] },
        { name: '王后', keywords: '成熟、包容、直觉、丰饶', descs: ['成熟稳重', '包容关怀', '直觉丰富', '内在力量'] },
        { name: '国王', keywords: '权威、掌控、成熟、领导', descs: ['权威地位', '掌控局面', '成熟老练', '领导才能'] }
    ];
    
    let cardId = 22;
    
    SUITS.forEach(suit => {
        const element = SUIT_ELEMENTS[suit];
        const meaning = SUIT_MEANINGS[suit];
        
        numbers.forEach((num, idx) => {
            const id = cardId++;
            const isPositive = idx < 4 || idx === 5 || idx === 8;
            const isChallenging = idx === 4 || idx === 6 || idx === 9;
            
            MINOR_CARDS.push({
                id: id,
                name: `${suit}${num.name}`,
                number: num.num,
                suit: suit,
                element: element,
                category: '小阿尔卡纳',
                upright: num.keywords + '、' + num.descs.join('、'),
                reversed: `阻碍、延迟、${num.keywords.split('、')[0]}受阻、过度`,
                meaning: {
                    love: `${suit}牌组的${num.name}在感情方面${isPositive ? '意味着积极的发展' : '提示需要关注'}。${num.descs[0]}的能量影响着感情关系。`,
                    career: `在事业方面，${suit}${num.name}代表着${num.keywords.split('、')[0]}。${meaning.aspect}相关的领域会受到这张牌的影响。`,
                    wealth: `财运方面${isChallenging ? '需要谨慎对待' : '有不错的发展'}。${num.descs[1]}的能量引导着财务决策。`,
                    health: `健康状况${idx < 3 ? '良好，充满活力' : idx < 7 ? '需要注意调节' : '需要更多关注'}。${element}元素的能量影响着身体状态。`,
                    general: `${suit}${num.name}（${num.num}）属于${suit}牌组。${meaning.aspect}。${meaning.energy}。这张牌在数字${num.num}的位置上代表着${num.keywords}的能量。`
                },
                advice: `${num.descs[idx % num.descs.length]}，保持${element}元素的平衡。`,
                reverseMeaning: `逆位的${suit}${num.name}提醒你注意${num.keywords.split('、')[0]}方面的阻碍和延迟。`
            });
        });
        
        courts.forEach((court, idx) => {
            const id = cardId++;
            const isMature = idx >= 2;
            
            MINOR_CARDS.push({
                id: id,
                name: `${suit}${court.name}`,
                number: court.name,
                suit: suit,
                element: element,
                category: '宫廷牌',
                upright: court.keywords + '、' + court.descs.join('、'),
                reversed: `不成熟、过度、${court.keywords.split('、')[0]}过度、负面`,
                meaning: {
                    love: `${suit}${court.name}在感情中代表着${court.descs[idx % court.descs.length]}的${isMature ? '成熟' : '年轻'}能量。这段感情关系中${court.keywords.split('、')[0]}的特质会很明显。`,
                    career: `在事业方面，${suit}${court.name}象征着${court.descs[(idx + 1) % court.descs.length]}的能量。${isMature ? '展现出领导力和掌控力' : '展现出学习和探索的热情'}。`,
                    wealth: `财运方面，${court.name}的能量带来${isMature ? '稳定和成熟' : '新的机遇和探索'}的财务态度。`,
                    health: `健康状况受到${court.descs[idx % court.descs.length]}能量的影响，${isMature ? '需要保持规律的生活习惯' : '充满活力和生机'}。`,
                    general: `${suit}${court.name}是${suit}牌组的宫廷牌。代表着${court.keywords}的特质。${element}元素的${isMature ? '成熟' : '年轻'}面向通过这张牌展现出来。`
                },
                advice: `${court.descs[idx % court.descs.length]}的心态，善用${element}元素的能量。`,
                reverseMeaning: `逆位的${suit}${court.name}可能意味着${court.keywords.split('、')[0]}方面的特质过度或不足。`
            });
        });
    });
}
initMinorArcana();

// ===================== 完整78张塔罗牌 =====================
const ALL_TAROT = [...MAJOR_ARCANA, ...MINOR_CARDS];

// ===================== 牌阵系统 =====================
const SPREADS = {
    single: {
        name: '单张牌占卜',
        desc: '快速获取针对当前问题的简单指引。适合日常运势、简单决策。',
        cards: 1,
        positions: [{ name: '今日指引', desc: '整体的能量和提醒' }]
    },
    three: {
        name: '三张牌牌阵',
        desc: '经典的过去-现在-未来牌阵，帮助你了解事情的发展脉络。',
        cards: 3,
        positions: [
            { name: '过去', desc: '影响当前状况的过去因素' },
            { name: '现在', desc: '当前的状况和能量' },
            { name: '未来', desc: '未来可能的发展趋势' }
        ]
    },
    cross: {
        name: '凯尔特十字牌阵',
        desc: '最经典全面的牌阵，深入分析问题的各个层面。包含现状、挑战、过去、未来、自我、环境、希望、结果等。',
        cards: 10,
        positions: [
            { name: '当前状况', desc: '问题的核心和现状' },
            { name: '挑战', desc: '面临的挑战或阻碍' },
            { name: '过去基础', desc: '问题的背景和过去' },
            { name: '未来趋势', desc: '近期的发展趋势' },
            { name: '上方目标', desc: '理想目标或意识层面' },
            { name: '下方基础', desc: '潜意识或基础能量' },
            { name: '自我位置', desc: '你对自己的看法' },
            { name: '环境因素', desc: '外部环境的影响' },
            { name: '希望与恐惧', desc: '内心的期望和担忧' },
            { name: '最终结果', desc: '最终的结局和走向' }
        ]
    },
    love: {
        name: '爱情十字牌阵',
        desc: '专门针对感情问题的深度分析牌阵。帮助了解感情现状、问题和未来。',
        cards: 6,
        positions: [
            { name: '你的状态', desc: '你在感情中的状态' },
            { name: '对方状态', desc: '对方在感情中的状态' },
            { name: '你们之间', desc: '你们之间的能量流动' },
            { name: '阻碍因素', desc: '感情中存在的阻碍' },
            { name: '发展走向', desc: '感情发展的趋势' },
            { name: '最终结果', desc: '感情的最终结果' }
        ]
    },
    career: {
        name: '事业分析牌阵',
        desc: '针对事业和职业发展的分析牌阵。帮助你了解工作状况、发展方向。',
        cards: 5,
        positions: [
            { name: '当前状况', desc: '事业现状' },
            { name: '你的优势', desc: '工作中可以发挥的优势' },
            { name: '面临挑战', desc: '工作中需要面对的挑战' },
            { name: '发展方向', desc: '最适合的发展方向' },
            { name: '最终成果', desc: '努力后的成果' }
        ]
    }
};

// ===================== 洗牌和抽牌 =====================
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// 抽取牌阵
function drawSpread(spreadName, question) {
    const spread = SPREADS[spreadName];
    if (!spread) return null;
    
    const shuffled = shuffleArray(ALL_TAROT);
    const drawn = shuffled.slice(0, spread.cards);
    
    const cards = drawn.map((card, index) => {
        const isReversed = Math.random() < 0.3; // 30%概率逆位
        const pos = spread.positions[index];
        
        return {
            card: card,
            position: pos,
            isReversed: isReversed,
            interpretation: isReversed ? card.reverseMeaning : card.meaning.general,
            loveInterpretation: card.meaning.love,
            careerInterpretation: card.meaning.career,
            wealthInterpretation: card.meaning.wealth,
            healthInterpretation: card.meaning.health,
            advice: card.advice
        };
    });
    
    // 生成综合解读
    const overallInterpretation = generateOverallReading(cards, spreadName, question);
    
    return {
        spreadName: spread.name,
        spreadDesc: spread.desc,
        question: question || '无特定问题',
        date: new Date().toLocaleString('zh-CN'),
        cards: cards,
        overallInterpretation: overallInterpretation
    };
}

// 单张快速占卜
function drawSingleTarot() {
    const index = Math.floor(Math.random() * ALL_TAROT.length);
    const card = ALL_TAROT[index];
    const isReversed = Math.random() < 0.3;
    
    return {
        card: card,
        isReversed: isReversed,
        interpretation: isReversed ? card.reverseMeaning : card.meaning.general,
        advice: card.advice
    };
}

// ===================== 综合解读 =====================
function generateOverallReading(cards, spreadName, question) {
    const uprightCount = cards.filter(c => !c.isReversed).length;
    const totalCount = cards.length;
    
    if (uprightCount === totalCount) {
        return '所有牌都正位出现，整体能量非常积极正面！说明事情正朝着有利的方向发展，保持当前的状态，美好的结果即将到来。';
    } else if (uprightCount > totalCount / 2) {
        return '大部分牌为正位，整体趋势积极向上。虽然可能存在一些小挑战，但整体来说情况是乐观的，继续保持努力！';
    } else if (uprightCount === totalCount / 2) {
        return '正逆位牌各占一半，能量处于平衡状态。事情的发展需要你更加谨慎地权衡利弊，不要急于做出决定。';
    } else if (uprightCount > 0) {
        return '大部分牌为逆位，当前的能量可能有些阻塞。需要注意潜在的问题和挑战，但这并不是坏事——逆位提醒你需要调整方向。';
    } else {
        return '所有牌都逆位出现，这是强烈的警示信号！当前的能量严重受阻，需要停下来重新审视你的选择和方向。';
    }
}

// ===================== 获取牌阵列表 =====================
function getSpreadList() {
    return Object.entries(SPREADS).map(([key, value]) => ({
        key: key,
        name: value.name,
        desc: value.desc,
        cards: value.cards
    }));
}

// ===================== 获取所有牌 =====================
function getAllTarotCards() {
    return ALL_TAROT;
}

// ===================== 根据牌名查找 =====================
function findTarotCard(cardName) {
    return ALL_TAROT.find(c => c.name === cardName);
}