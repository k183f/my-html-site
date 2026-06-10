/* ============================================
   星缘 - 数据文件 (超级详细版)
   ============================================ */

// ===================== 十二星座超级数据 =====================
const ZODIAC_SIGNS = [
    {
        id: 'aries',
        name: '白羊座',
        emoji: '♈',
        english: 'Aries',
        date: '3月21日-4月19日',
        element: '火',
        quality: '基本宫',
        ruler: '火星',
        house: '第一宫（命宫）',
        luckyNum: '6, 7, 18, 27, 36',
        luckyColor: '红色、朱红色、金色',
        luckyItem: '琥珀、红宝石、血石',
        birthstone: '钻石、红宝石',
        flower: '玫瑰花、雏菊、罂粟花',
        tree: '橡树、冬青、杉木',
        metal: '铁、钢',
        body: '头部、面部、大脑',
        season: '春季',
        planet: '火星（战神）',
        day: '星期二',
        tarot: '皇帝牌',
        chineseZodiac: '虎、龙',
        greekMyth: '白羊座源于古希腊神话中金羊毛的故事。佛里克索斯和赫勒被继母迫害，神使赫尔墨斯送来一只长着金色羊毛的公羊驮着他们逃离。佛里克索斯安全到达科尔基斯后，将金羊献祭给宙斯，金羊升上天空成为白羊座。',
        personalityType: '热情冲动型｜领导创业型｜直率坦诚型｜竞争进取型',
        matchScore: { aries: 70, taurus: 60, gemini: 85, cancer: 50, leo: 90, virgo: 45, libra: 65, scorpio: 55, sagittarius: 95, capricorn: 40, aquarius: 75, pisces: 55 },
        famous: ['成龙', '张国荣', '刘烨', '陈奕迅', '郭富城', 'Lady Gaga', 'Leonardo DiCaprio', 'Robert Downey Jr.', 'Mariah Carey', 'Elton John'],
        personality: '白羊座的人热情冲动、充满活力，是天生的领导者。他们勇敢直率，做事果断，但有时也会显得急躁和缺乏耐心。白羊座拥有无限的激情和创造力，总是充满斗志地追求自己的目标。',
        love: '在爱情中，白羊座热情直接，会主动追求自己喜欢的人。他们重视真诚和坦率，不喜欢拐弯抹角。白羊座在感情中充满激情，但有时也需要学会控制自己的冲动。',
        career: '白羊座适合需要勇气和决断力的工作，如创业者、军人、运动员、外科医生等。他们行动力强，敢于创新，在竞争激烈的环境中表现出色。',
        health: '白羊座需要注意头部和面部的健康问题，容易因为压力大而导致头痛。建议保持规律作息，适当进行剧烈运动释放压力。',
        strength: '勇敢、自信、热情、直率、行动力强、创新、乐观、坦诚',
        weakness: '急躁、冲动、缺乏耐心、容易放弃、自私、好斗、鲁莽',
        description: '白羊座是黄道十二宫的第一个星座，象征着新的开始和无限的可能性。他们如同春天般充满生机与活力。'
    },
    {
        id: 'taurus',
        name: '金牛座',
        emoji: '♉',
        english: 'Taurus',
        date: '4月20日-5月20日',
        element: '土',
        quality: '固定宫',
        ruler: '金星',
        house: '第二宫（财帛宫）',
        luckyNum: '2, 8, 12, 20, 28',
        luckyColor: '绿色、粉色、天蓝色',
        luckyItem: '翡翠、祖母绿、铜',
        birthstone: '祖母绿、蓝宝石',
        flower: '玫瑰花、百合花、紫罗兰',
        tree: '苹果树、柏树、无花果树',
        metal: '铜、银',
        body: '咽喉、颈部、声带',
        season: '春季',
        planet: '金星（爱与美之神）',
        day: '星期五',
        tarot: '教皇牌',
        chineseZodiac: '蛇、鸡',
        greekMyth: '金牛座源于宙斯追求欧罗巴的故事。宙斯化身为一头美丽的白色公牛，混在牛群中接近欧罗巴。欧罗巴被公牛的美貌吸引，骑上牛背后，宙斯便驮着她穿越海洋到达克里特岛。后来这头公牛升上天空成为金牛座。',
        personalityType: '稳重踏实型｜艺术鉴赏型｜固执坚守型｜物质享受型',
        matchScore: { aries: 60, taurus: 80, gemini: 55, cancer: 90, leo: 50, virgo: 85, libra: 70, scorpio: 75, sagittarius: 45, capricorn: 95, aquarius: 50, pisces: 80 },
        famous: ['周润发', '刘德华', '李连杰', '那英', '赵薇', 'Adele', 'David Beckham', 'George Clooney', 'Kendrick Lamar', 'Stevie Wonder'],
        personality: '金牛座的人稳重踏实、注重实际，是可靠的伙伴。他们有着坚韧的意志力，一旦决定就会坚持到底。金牛座热爱美好的事物，享受生活的乐趣，但有时也会显得固执。',
        love: '金牛座的爱情是细水长流的类型，他们不追求轰轰烈烈，但求稳定长久。他们忠诚专一，会用实际行动表达爱意，重视物质基础带来的安全感。',
        career: '金牛座适合需要耐心和稳定性的工作，如金融、会计、建筑师、园艺师、厨师等。他们对价值和美感有敏锐的感知力。',
        health: '金牛座需要注意咽喉和颈部的健康，容易因为饮食不当导致喉咙问题。建议注意饮食均衡，适当进行户外运动。',
        strength: '稳重、耐心、忠诚、务实、有艺术眼光、坚韧、可靠',
        weakness: '固执、保守、过于物质、不善变通、懒惰、占有欲强',
        description: '金牛座是黄道十二宫的第二个星座，代表着稳定和丰饶。他们如同大地般沉稳可靠，追求物质与精神的双重富足。'
    },
    {
        id: 'gemini',
        name: '双子座',
        emoji: '♊',
        english: 'Gemini',
        date: '5月21日-6月21日',
        element: '风',
        quality: '变动宫',
        ruler: '水星',
        house: '第三宫（兄弟宫）',
        luckyNum: '5, 14, 23, 32, 41',
        luckyColor: '黄色、浅蓝色、白色',
        luckyItem: '玛瑙、黄水晶、银',
        birthstone: '珍珠、月光石',
        flower: '薰衣草、百合花、茉莉花',
        tree: '白杨树、枫树、橡树',
        metal: '水银、黄金',
        body: '肺部、手臂、肩部、神经系统',
        season: '春季',
        planet: '水星（信使之神）',
        day: '星期三',
        tarot: '恋人牌',
        chineseZodiac: '猴、鼠',
        greekMyth: '双子座源于卡斯托尔和波鲁克斯两兄弟的故事。他们是斯巴达王后的双胞胎儿子，一个凡人一个神子。兄弟情深，卡斯托尔战死后，波鲁克斯请求宙斯让自己与兄弟同死。宙斯被感动，让他们轮流在天上和地下生活，并将他们升上天空成为双子座。',
        personalityType: '聪明机智型｜多才多艺型｜社交达人型｜好奇探索型',
        matchScore: { aries: 85, taurus: 55, gemini: 75, cancer: 50, leo: 80, virgo: 65, libra: 95, scorpio: 40, sagittarius: 85, capricorn: 45, aquarius: 90, pisces: 60 },
        famous: ['周星驰', '林志玲', '张柏芝', '王菲', '张雨绮', 'Angelina Jolie', 'Johnny Depp', 'Kanye West', 'Marilyn Monroe', 'Morgan Freeman'],
        personality: '双子座的人聪明机智、好奇心强，是多才多艺的沟通高手。他们思维敏捷，善于表达，适应能力强。但有时也会显得善变和不够专注。',
        love: '双子座在爱情中需要精神上的共鸣和有趣的交流。他们喜欢新鲜感，需要伴侣能够跟上他们的思维节奏。双子座擅长浪漫，但也要学会专一。',
        career: '双子座适合需要沟通和灵活性的工作，如记者、作家、销售、教师、主持人等。他们的多才多艺使他们在各个领域都能有所建树。',
        health: '双子座需要注意呼吸系统和手部的健康，容易因为压力大导致失眠。建议通过冥想和呼吸练习来放松身心。',
        strength: '聪明、幽默、适应力强、善于沟通、多才多艺、灵活、好学',
        weakness: '善变、不够专注、情绪化、容易焦虑、浮躁、不够深入',
        description: '双子座是黄道十二宫的第三个星座，代表着沟通和交流。他们如同风一般自由灵动，充满智慧和好奇心。'
    },
    {
        id: 'cancer',
        name: '巨蟹座',
        emoji: '♋',
        english: 'Cancer',
        date: '6月22日-7月22日',
        element: '水',
        quality: '基本宫',
        ruler: '月亮',
        house: '第四宫（田宅宫）',
        luckyNum: '2, 7, 16, 25, 34',
        luckyColor: '白色、银色、浅紫色',
        luckyItem: '珍珠、月光石、水晶',
        birthstone: '红宝石、珍珠',
        flower: '百合花、莲花、牵牛花',
        tree: '柳树、梧桐、白桦',
        metal: '银、铂',
        body: '胸部、胃部、消化系统',
        season: '夏季',
        planet: '月亮（情感与直觉）',
        day: '星期一',
        tarot: '战车牌',
        chineseZodiac: '羊、兔',
        greekMyth: '巨蟹座源于赫拉克勒斯十二功绩的故事。在赫拉克勒斯与九头蛇许德拉战斗时，赫拉派出巨蟹去干扰他。巨蟹夹住赫拉克勒斯的脚，却被他一脚踩碎。赫拉为了纪念巨蟹的忠诚，将其升上天空成为巨蟹座。',
        personalityType: '温柔敏感型｜顾家守护型｜情感丰富型｜直觉敏锐型',
        matchScore: { aries: 50, taurus: 90, gemini: 50, cancer: 75, leo: 55, virgo: 80, libra: 60, scorpio: 95, sagittarius: 45, capricorn: 70, aquarius: 50, pisces: 90 },
        famous: ['梁朝伟', '周星驰', '张国荣', '刘青云', '张曼玉', 'Tom Hanks', 'Tom Cruise', 'Selena Gomez', 'Ariana Grande', 'Meryl Streep'],
        personality: '巨蟹座的人温柔敏感、富有同情心，是家庭的守护者。他们情感丰富，直觉敏锐，非常重视家庭和亲情。但有时也会过于情绪化和自我保护。',
        love: '巨蟹座在爱情中极度渴望安全感和归属感。他们温柔体贴，会无微不至地照顾伴侣。巨蟹座的爱情以家庭为导向，希望建立稳定的亲密关系。',
        career: '巨蟹座适合需要关怀和创造力的工作，如教师、护士、心理咨询师、艺术家、厨师等。他们有着出色的记忆力和直觉。',
        health: '巨蟹座需要注意消化系统和胸部的健康，容易因为情绪问题影响胃部。建议保持心情愉快，注意饮食规律。',
        strength: '温柔、体贴、直觉强、顾家、有创造力、记忆力好、同情心',
        weakness: '情绪化、敏感、过度保护、容易忧虑、难以放下、防御心强',
        description: '巨蟹座是黄道十二宫的第四个星座，代表着家庭和情感。他们如同月光般温柔细腻，充满母性的光辉。'
    },
    {
        id: 'leo',
        name: '狮子座',
        emoji: '♌',
        english: 'Leo',
        date: '7月23日-8月22日',
        element: '火',
        quality: '固定宫',
        ruler: '太阳',
        house: '第五宫（子女宫）',
        luckyNum: '1, 9, 19, 28, 37',
        luckyColor: '金色、橙色、深红色',
        luckyItem: '钻石、琥珀、红玛瑙',
        birthstone: '橄榄石、红宝石',
        flower: '向日葵、玫瑰、牡丹',
        tree: '棕榈树、月桂树',
        metal: '黄金、青铜',
        body: '心脏、背部、脊柱',
        season: '夏季',
        planet: '太阳（生命与力量）',
        day: '星期日',
        tarot: '力量牌',
        chineseZodiac: '龙、马',
        greekMyth: '狮子座源于赫拉克勒斯的第一项功绩。他奉命杀死涅墨亚巨狮，这头狮子刀枪不入，赫拉克勒斯最终用神力将狮子勒死。后来宙斯将狮子升上天空，成为狮子座。',
        personalityType: '自信大方型｜领导王者型｜热情慷慨型｜表演型人格',
        matchScore: { aries: 90, taurus: 50, gemini: 80, cancer: 55, leo: 75, virgo: 50, libra: 85, scorpio: 60, sagittarius: 90, capricorn: 55, aquarius: 70, pisces: 65 },
        famous: ['周润发', '刘德华', '王菲', '孙俪', '陈坤', 'Barack Obama', 'Jennifer Lawrence', 'Madonna', 'Dwayne Johnson', 'Whitney Houston'],
        personality: '狮子座的人自信大方、热情慷慨，是天生的王者。他们有着强烈的领导欲望和表现欲，总是成为人群中的焦点。狮子座心胸宽广，但有时也会显得自负。',
        love: '狮子座在爱情中热情似火，喜欢浪漫和惊喜。他们会大方地表达爱意，希望被伴侣崇拜和赞美。狮子座是忠诚的爱人，但需要学会照顾对方的感受。',
        career: '狮子座适合需要领导力和创造力的工作，如管理者、演员、导演、设计师、政治家等。他们天生具有吸引力和感召力。',
        health: '狮子座需要注意心脏和背部的健康，容易因为过度劳累导致心脏负担。建议适当休息，保持适度运动。',
        strength: '自信、大方、领导力强、慷慨、热情、忠诚、有魅力',
        weakness: '自负、固执、好面子、控制欲强、霸道、虚荣',
        description: '狮子座是黄道十二宫的第五个星座，代表着荣誉和力量。他们如同太阳般耀眼夺目，充满自信和魅力。'
    },
    {
        id: 'virgo',
        name: '处女座',
        emoji: '♍',
        english: 'Virgo',
        date: '8月23日-9月22日',
        element: '土',
        quality: '变动宫',
        ruler: '水星',
        house: '第六宫（奴仆宫）',
        luckyNum: '5, 12, 21, 30, 42',
        luckyColor: '蓝色、灰色、米白色',
        luckyItem: '蓝宝石、紫水晶、玛瑙',
        birthstone: '蓝宝石、橄榄石',
        flower: '薰衣草、勿忘我、矢车菊',
        tree: '核桃树、杏仁树',
        metal: '白金、镍',
        body: '肠道、消化系统、神经系统',
        season: '夏季',
        planet: '水星（智慧与分析）',
        day: '星期三',
        tarot: '隐士牌',
        chineseZodiac: '蛇、牛',
        greekMyth: '处女座源于农业女神得墨忒耳和珀耳塞福涅的故事。珀耳塞福涅被冥王哈迪斯掳走后，得墨忒耳四处寻找女儿，导致大地荒芜。后来宙斯调解，让珀耳塞福涅半年在冥界半年在人间。珀耳塞福涅的纯洁形象升上天空成为处女座。',
        personalityType: '细致谨慎型｜完美主义型｜理性分析型｜服务奉献型',
        matchScore: { aries: 45, taurus: 85, gemini: 65, cancer: 80, leo: 50, virgo: 80, libra: 65, scorpio: 85, sagittarius: 40, capricorn: 90, aquarius: 55, pisces: 70 },
        famous: ['范冰冰', '杨幂', '蔡依林', '胡歌', '吴亦凡', 'Beyonce', 'Adam Sandler', 'Keanu Reeves', 'Mother Teresa', 'Stephen King'],
        personality: '处女座的人细致谨慎、追求完美，是精益求精的匠人。他们理性分析，做事有条不紊，有着强烈的责任感。但有时也会显得挑剔和过于苛求。',
        love: '处女座在爱情中谨慎而专一，不会轻易投入一段感情。他们用行动而非言语表达爱意，注重细节和实际的付出。处女座需要学会放松和接纳不完美。',
        career: '处女座适合需要精确和分析能力的工作，如医生、程序员、会计、编辑、研究员等。他们追求卓越，有着完美主义倾向。',
        health: '处女座需要注意消化系统和神经系统的健康，容易因为过度焦虑导致肠胃问题。建议学会放松，适当进行瑜伽等舒缓运动。',
        strength: '细心、理性、勤奋、有责任心、追求完美、分析力强、善良',
        weakness: '挑剔、焦虑、过于苛刻、缺乏变通、过于保守、唠叨',
        description: '处女座是黄道十二宫的第六个星座，代表着服务和完美。他们如同匠人般精益求精，追求极致和完美。'
    },
    {
        id: 'libra',
        name: '天秤座',
        emoji: '♎',
        english: 'Libra',
        date: '9月23日-10月23日',
        element: '风',
        quality: '基本宫',
        ruler: '金星',
        house: '第七宫（夫妻宫）',
        luckyNum: '6, 15, 24, 33, 52',
        luckyColor: '粉色、淡紫色、天蓝色',
        luckyItem: '水晶、玉石、翡翠',
        birthstone: '蓝宝石、蛋白石',
        flower: '玫瑰、绣球花、紫罗兰',
        tree: '白杨树、橄榄树',
        metal: '铜、青铜',
        body: '腰部、肾脏、内分泌系统',
        season: '秋季',
        planet: '金星（爱与和谐）',
        day: '星期五',
        tarot: '正义牌',
        chineseZodiac: '猪、兔',
        greekMyth: '天秤座源于正义女神阿斯特赖亚的故事。她手持天秤衡量人间的善恶，在黄金时代人们善良正直，随着时代堕落她失望地返回天上。她的天秤成为了天秤座，象征着公平与正义。',
        personalityType: '优雅迷人型｜公平公正型｜社交达人型｜审美品味型',
        matchScore: { aries: 65, taurus: 70, gemini: 95, cancer: 60, leo: 85, virgo: 65, libra: 80, scorpio: 55, sagittarius: 85, capricorn: 60, aquarius: 90, pisces: 75 },
        famous: ['吴彦祖', '古天乐', '刘亦菲', '周迅', '陈冠希', 'Bruno Mars', 'Kim Kardashian', 'Matt Damon', 'Will Smith', 'Hugh Jackman'],
        personality: '天秤座的人优雅迷人、公平公正，是和平的使者。他们有着极高的审美品味，善于社交和协调。天秤座追求和谐美好，但有时也会优柔寡断。',
        love: '天秤座是浪漫的爱情高手，他们懂得营造美好的氛围。在感情中追求平衡和和谐，重视伴侣关系和精神层面的契合。天秤座需要学会做出果断的决定。',
        career: '天秤座适合需要审美和协调能力的工作，如设计师、外交官、律师、公关、艺术家等。他们有着出色的交际手腕和品味。',
        health: '天秤座需要注意肾脏和腰部的健康，容易因为压力大导致内分泌失调。建议保持规律的作息和适度的运动。',
        strength: '优雅、公正、有魅力、善于交际、审美高、和平、合作',
        weakness: '优柔寡断、过于在意他人看法、容易妥协、好逸恶劳',
        description: '天秤座是黄道十二宫的第七个星座，代表着平衡和美。他们如同天平般追求和谐，充满优雅和魅力。'
    },
    {
        id: 'scorpio',
        name: '天蝎座',
        emoji: '♏',
        english: 'Scorpio',
        date: '10月24日-11月22日',
        element: '水',
        quality: '固定宫',
        ruler: '冥王星',
        house: '第八宫（疾厄宫）',
        luckyNum: '4, 9, 18, 27, 36',
        luckyColor: '深红色、黑色、深紫色',
        luckyItem: '黑曜石、红宝石、石榴石',
        birthstone: '石榴石、黄玉',
        flower: '杜鹃花、菊花、红玫瑰',
        tree: '黑檀树、松树',
        metal: '铁、不锈钢',
        body: '生殖系统、泌尿系统',
        season: '秋季',
        planet: '冥王星（蜕变与重生）',
        day: '星期二',
        tarot: '死神牌',
        chineseZodiac: '虎、鸡',
        greekMyth: '天蝎座源于猎户俄里翁的故事。俄里翁夸口能杀死所有野兽，大地女神盖亚派出一只巨大的蝎子追赶他。俄里翁被蝎子蜇死，宙斯将他俩都升上天空，成为猎户座和天蝎座。天蝎座升起时猎户座便落下，永不相见。',
        personalityType: '深沉神秘型｜意志坚定型｜激情强烈型｜洞察敏锐型',
        matchScore: { aries: 55, taurus: 75, gemini: 40, cancer: 95, leo: 60, virgo: 85, libra: 55, scorpio: 70, sagittarius: 55, capricorn: 85, aquarius: 45, pisces: 95 },
        famous: ['周渝民', '张艺谋', '孙俪', '林青霞', '郭富城', 'Leonardo DiCaprio', 'Julia Roberts', 'Drake', 'Kendall Jenner', 'Bill Gates'],
        personality: '天蝎座的人深沉神秘、意志坚定，是充满魅力的探索者。他们直觉敏锐，洞察力强，有着强大的意志力和执行力。但有时也会显得过于极端和占有欲强。',
        love: '天蝎座的爱情浓烈而深刻，一旦爱上就会全身心投入。他们忠诚专一，但占有欲和嫉妒心也很强。天蝎座需要学会信任和放手。',
        career: '天蝎座适合需要深度和洞察力的工作，如侦探、心理学家、研究员、投资分析师、医生等。他们有着不屈不挠的精神。',
        health: '天蝎座需要注意泌尿系统和生殖系统的健康，容易因为情绪压抑导致身体问题。建议学会释放情绪，保持心理平衡。',
        strength: '深沉、坚定、直觉强、执行力强、忠诚、有魅力、洞察力',
        weakness: '极端、占有欲强、多疑、报复心重、控制欲强、记仇',
        description: '天蝎座是黄道十二宫的第八个星座，代表着蜕变和重生。他们如同凤凰般浴火重生，充满神秘的力量。'
    },
    {
        id: 'sagittarius',
        name: '射手座',
        emoji: '♐',
        english: 'Sagittarius',
        date: '11月23日-12月21日',
        element: '火',
        quality: '变动宫',
        ruler: '木星',
        house: '第九宫（迁移宫）',
        luckyNum: '3, 12, 21, 30, 48',
        luckyColor: '紫色、深蓝色、酒红色',
        luckyItem: '紫水晶、绿松石、青金石',
        birthstone: '紫水晶、绿松石',
        flower: '康乃馨、鸢尾花、兰花',
        tree: '椴树、栗子树',
        metal: '锡、锌',
        body: '肝脏、臀部、大腿',
        season: '秋季',
        planet: '木星（幸运与扩张）',
        day: '星期四',
        tarot: '节制牌',
        chineseZodiac: '虎、马',
        greekMyth: '射手座源于半人马喀戎的故事。喀戎是半人马中最智慧和善良的，他教导了众多英雄。在一次意外中被赫拉克勒斯的毒箭误伤，因拥有不死之身而承受永恒的痛苦。最终他放弃不死之身，被宙斯升上天空成为射手座。',
        personalityType: '乐观开朗型｜热爱自由型｜冒险探索型｜哲学思考型',
        matchScore: { aries: 95, taurus: 45, gemini: 85, cancer: 45, leo: 90, virgo: 40, libra: 85, scorpio: 55, sagittarius: 80, capricorn: 45, aquarius: 85, pisces: 60 },
        famous: ['林志玲', '张柏芝', '陈奕迅', '周杰伦', '郭采洁', 'Brad Pitt', 'Taylor Swift', 'Britney Spears', 'Jay-Z', 'Steven Spielberg'],
        personality: '射手座的人乐观开朗、热爱自由，是追求真理的冒险家。他们热情奔放，幽默风趣，有着广阔的视野和无限的活力。但有时也会显得不够负责任。',
        love: '射手座在爱情中需要自由和空间，不喜欢被束缚。他们喜欢有趣的灵魂和共同的冒险，追求精神层面的契合。射手座需要学会承担责任。',
        career: '射手座适合需要冒险和开拓精神的工作，如旅行家、摄影师、教授、外交官、运动员等。他们有着乐观积极的态度。',
        health: '射手座需要注意肝脏和臀部的健康，容易因为过度运动导致关节问题。建议适度运动，注意休息和营养均衡。',
        strength: '乐观、开朗、幽默、热爱自由、视野广阔、正直、热情',
        weakness: '不够细心、容易冲动、责任感不强、过于直接、承诺恐惧',
        description: '射手座是黄道十二宫的第九个星座，代表着探索和智慧。他们如同箭矢般勇往直前，追求真理和自由。'
    },
    {
        id: 'capricorn',
        name: '摩羯座',
        emoji: '♑',
        english: 'Capricorn',
        date: '12月22日-1月19日',
        element: '土',
        quality: '基本宫',
        ruler: '土星',
        house: '第十宫（官禄宫）',
        luckyNum: '8, 16, 24, 32, 40',
        luckyColor: '棕色、深绿色、灰色',
        luckyItem: '黑曜石、翡翠、绿松石',
        birthstone: '石榴石、蓝宝石',
        flower: '康乃馨、山茶花、紫丁香',
        tree: '松树、柏树、榆树',
        metal: '铅、铁',
        body: '骨骼、关节、膝盖、皮肤',
        season: '冬季',
        planet: '土星（责任与纪律）',
        day: '星期六',
        tarot: '恶魔牌',
        chineseZodiac: '蛇、鸡',
        greekMyth: '摩羯座源于牧神潘的故事。在众神与巨人提丰的战斗中，潘慌乱中跳入河中，由于仓促变身，下半身变成鱼尾、上半身仍是山羊。宙斯觉得这副模样很有趣，将它升上天空成为摩羯座，象征着面对困境时的应变能力。',
        personalityType: '沉稳务实型｜事业奋斗型｜管理组织型｜刻苦耐劳型',
        matchScore: { aries: 40, taurus: 95, gemini: 45, cancer: 70, leo: 55, virgo: 90, libra: 60, scorpio: 85, sagittarius: 45, capricorn: 85, aquarius: 55, pisces: 75 },
        famous: ['周杰伦', '巩俐', '章子怡', '刘若英', '霍建华', 'Michelle Obama', 'Denzel Washington', 'Jim Carrey', 'Kate Middleton', 'Elvis Presley'],
        personality: '摩羯座的人沉稳务实、意志力强，是努力攀登的奋斗者。他们有着强烈的责任感和事业心，做事脚踏实地。但有时也会显得过于严肃和保守。',
        love: '摩羯座在爱情中务实而谨慎，不会轻易付出真心。他们重视经济和地位的匹配，用行动证明爱意。摩羯座需要学会表达情感和放松自己。',
        career: '摩羯座适合需要耐心和管理能力的工作，如管理者、银行家、工程师、公务员、律师等。他们有着出色的组织能力和执行力。',
        health: '摩羯座需要注意骨骼和关节的健康，容易因为过度劳累导致身体透支。建议注意劳逸结合，适当补充钙质。',
        strength: '稳重、务实、有毅力、责任心强、善于管理、自律、可靠',
        weakness: '严肃、保守、过于功利、不善表达情感、悲观、固执',
        description: '摩羯座是黄道十二宫的第十个星座，代表着成就和责任。他们如同山峰般坚韧不拔，追求事业和成就的高峰。'
    },
    {
        id: 'aquarius',
        name: '水瓶座',
        emoji: '♒',
        english: 'Aquarius',
        date: '1月20日-2月18日',
        element: '风',
        quality: '固定宫',
        ruler: '天王星',
        house: '第十一宫（福德宫）',
        luckyNum: '4, 11, 22, 33, 44',
        luckyColor: '天蓝色、银色、电光蓝',
        luckyItem: '青金石、紫水晶、蓝宝石',
        birthstone: '紫水晶、蓝宝石',
        flower: '兰花、百合、勿忘我',
        tree: '白杨树、椰子树',
        metal: '铝、钛',
        body: '脚踝、小腿、循环系统',
        season: '冬季',
        planet: '天王星（创新与变革）',
        day: '星期六',
        tarot: '星星牌',
        chineseZodiac: '虎、猴',
        greekMyth: '水瓶座源于特洛伊王子伽倪墨得斯的故事。他是凡间最美的少年，宙斯化身为鹰将他掳到奥林匹斯山，让他代替赫柏为众神斟酒。伽倪墨得斯手持水瓶的形象被升上天空成为水瓶座。',
        personalityType: '独立创新型｜思想前卫型｜人道主义型｜自由理智型',
        matchScore: { aries: 75, taurus: 50, gemini: 90, cancer: 50, leo: 70, virgo: 55, libra: 90, scorpio: 45, sagittarius: 85, capricorn: 55, aquarius: 85, pisces: 65 },
        famous: ['周星驰', '林志颖', '邓紫棋', '萧敬腾', '李宇春', 'Oprah Winfrey', 'Bob Marley', 'Michael Jordan', 'Justin Timberlake', 'Shakira'],
        personality: '水瓶座的人独立创新、思想前卫，是改变世界的革新者。他们有着独特的思维方式和人道主义精神，追求自由和平等。但有时也会显得叛逆和冷漠。',
        love: '水瓶座在爱情中需要精神上的理解和自由的空间。他们不喜欢传统的约束，追求独特而平等的感情关系。水瓶座需要学会关注对方的情感需求。',
        career: '水瓶座适合需要创新和独立思考的工作，如科学家、发明家、程序员、社会活动家、艺术家等。他们有着超前的思维和创造力。',
        health: '水瓶座需要注意循环系统和脚踝的健康，容易因为压力大导致失眠。建议保持规律的运动和充足的睡眠。',
        strength: '独立、创新、博爱、理性、有远见、友善、独创性',
        weakness: '叛逆、冷漠、不切实际、过于理性、情绪疏离、古怪',
        description: '水瓶座是黄道十二宫的第十一个星座，代表着创新和人道。他们如同清泉般清新独特，充满智慧和创造力。'
    },
    {
        id: 'pisces',
        name: '双鱼座',
        emoji: '♓',
        english: 'Pisces',
        date: '2月19日-3月20日',
        element: '水',
        quality: '变动宫',
        ruler: '海王星',
        house: '第十二宫（玄秘宫）',
        luckyNum: '7, 16, 25, 34, 43',
        luckyColor: '海蓝色、淡紫色、薄荷绿',
        luckyItem: '月光石、海蓝宝石、珊瑚',
        birthstone: '海蓝宝石、紫水晶',
        flower: '荷花、睡莲、水仙',
        tree: '柳树、无花果树',
        metal: '铂、锡',
        body: '脚部、免疫系统、淋巴系统',
        season: '冬季',
        planet: '海王星（梦幻与灵性）',
        day: '星期四',
        tarot: '月亮牌',
        chineseZodiac: '兔、龙',
        greekMyth: '双鱼座源于爱与美女神阿佛洛狄忒和儿子厄洛斯的故事。在巨怪提丰来袭时，母子二人跳入河中变成两条鱼逃走。为了防止走散，他们用丝带将尾巴系在一起。这个形象被升上天空成为双鱼座，象征着母子之爱。',
        personalityType: '温柔浪漫型｜艺术创造型｜灵性直觉型｜梦幻理想型',
        matchScore: { aries: 55, taurus: 80, gemini: 60, cancer: 90, leo: 65, virgo: 70, libra: 75, scorpio: 95, sagittarius: 60, capricorn: 75, aquarius: 65, pisces: 80 },
        famous: ['林黛玉(曹雪芹)', '韩寒', '邓紫棋', '王源', '易烊千玺', 'Rihanna', 'Steve Jobs', 'Albert Einstein', 'Kurt Cobain', 'Elizabeth Taylor'],
        personality: '双鱼座的人温柔浪漫、富有想象力，是充满灵性的梦想家。他们善解人意，有着极强的共情能力和艺术天赋。但有时也会显得优柔寡断和脱离现实。',
        love: '双鱼座是无可救药的浪漫主义者，在爱情中追求极致的浪漫和灵魂的共鸣。他们温柔体贴，愿意为爱人付出一切。双鱼座需要学会保护自己。',
        career: '双鱼座适合需要想象力和创造力的工作，如艺术家、音乐家、作家、心理咨询师、社工等。他们有着丰富的情感和灵感。',
        health: '双鱼座需要注意脚部和免疫系统的健康，容易因为情绪波动影响身体。建议多接触大自然，保持心情愉悦。',
        strength: '温柔、浪漫、有同情心、创造力强、直觉敏锐、无私、灵性',
        weakness: '优柔寡断、容易逃避现实、过于理想化、缺乏界限、易沉迷',
        description: '双鱼座是黄道十二宫的第十二个星座，代表着梦想和超越。他们如同海洋般深邃广阔，充满灵性和想象力。'
    }
];

// ===================== 配对数据库 (超级详细版) =====================
const COMPATIBILITY_DETAIL = {};

function buildCompatibilityData() {
    ZODIAC_SIGNS.forEach(s1 => {
        COMPATIBILITY_DETAIL[s1.id] = {};
        ZODIAC_SIGNS.forEach(s2 => {
            const base = s1.matchScore[s2.id] || 50;
            const sameElement = s1.element === s2.element;
            const oppositeElement = 
                (s1.element === '火' && s2.element === '水') ||
                (s1.element === '水' && s2.element === '火') ||
                (s1.element === '土' && s2.element === '风') ||
                (s1.element === '风' && s2.element === '土');
            const sameQuality = s1.quality === s2.quality;
            
            const love = Math.min(100, base + (sameElement ? 10 : oppositeElement ? -5 : 0) + (Math.random() * 6 - 3));
            const communication = Math.min(100, base + (sameElement ? 5 : -8) + (s1.ruler === s2.ruler ? 10 : 0) + (Math.random() * 6 - 3));
            const trust = Math.min(100, base + (sameQuality ? 8 : -5) + (Math.random() * 6 - 3));
            const values = Math.min(100, base + (sameElement ? 12 : -10) + (Math.random() * 6 - 3));
            const intimacy = Math.min(100, base + (oppositeElement ? 8 : 2) + (Math.random() * 6 - 3));
            const growth = Math.min(100, base + (s1.quality === '变动宫' || s2.quality === '变动宫' ? 8 : 3) + (Math.random() * 6 - 3));
            
            const avg = Math.round((love + communication + trust + values + intimacy + growth) / 6);
            const maxScore = Math.max(love, communication, trust, values, intimacy, growth);
            const minScore = Math.min(love, communication, trust, values, intimacy, growth);
            
            let matchLevel, matchColor;
            if (avg >= 90) { matchLevel = '天作之合'; matchColor = '#FF6B6B'; }
            else if (avg >= 80) { matchLevel = '完美匹配'; matchColor = '#E74C3C'; }
            else if (avg >= 70) { matchLevel = '非常合拍'; matchColor = '#F39C12'; }
            else if (avg >= 60) { matchLevel = '相处融洽'; matchColor = '#2ECC71'; }
            else if (avg >= 50) { matchLevel = '还算不错'; matchColor = '#3498DB'; }
            else if (avg >= 40) { matchLevel = '需要磨合'; matchColor = '#9B59B6'; }
            else { matchLevel = '挑战重重'; matchColor = '#E74C3C'; }
            
            const advantages = [];
            if (love > 80) advantages.push('情感上高度契合');
            if (communication > 80) advantages.push('沟通非常顺畅');
            if (trust > 80) advantages.push('彼此信任感强');
            if (values > 80) advantages.push('三观高度一致');
            if (intimacy > 80) advantages.push('亲密关系和谐');
            if (growth > 80) advantages.push('能共同成长进步');
            if (advantages.length === 0) advantages.push('需要更多时间培养默契');
            
            const challenges = [];
            if (love < 50) challenges.push('情感需求不太匹配');
            if (communication < 50) challenges.push('沟通方式存在差异');
            if (trust < 50) challenges.push('需要建立更多信任');
            if (values < 50) challenges.push('价值观有较大差异');
            if (intimacy < 50) challenges.push('亲密节奏不一致');
            if (growth < 50) challenges.push('成长步调不同');
            
            const desc = generateCompatDesc(s1, s2, avg, sameElement, oppositeElement);
            
            COMPATIBILITY_DETAIL[s1.id][s2.id] = {
                score: avg,
                love: Math.round(love),
                communication: Math.round(communication),
                trust: Math.round(trust),
                values: Math.round(values),
                intimacy: Math.round(intimacy),
                growth: Math.round(growth),
                matchLevel: matchLevel,
                matchColor: matchColor,
                maxScore: Math.round(maxScore),
                minScore: Math.round(minScore),
                advantages: advantages,
                challenges: challenges,
                desc: desc
            };
        });
    });
}

function generateCompatDesc(s1, s2, score, sameElement, oppositeElement) {
    if (score >= 85) {
        return `${s1.name}和${s2.name}是令人羡慕的星座组合！${sameElement ? '同属' + s1.element + '象星座的你们，有着天然的默契和共鸣，在一起就像找到了世界上的另一个自己。' : '虽然属于不同的元素，但却能完美互补，创造出令人惊喜的化学反应。'}你们互相欣赏、彼此成就，是一对让人艳羡的CP！`;
    } else if (score >= 70) {
        return `${s1.name}和${s2.name}的配对非常不错！${sameElement ? '同属' + s1.element + '象星座让你们有很多共同语言。' : '不同元素的碰撞带来新鲜感和吸引力。'}只要注意沟通和理解，你们的关系会越来越甜蜜。`;
    } else if (score >= 55) {
        return `${s1.name}和${s2.name}的配对需要一些经营。你们有着各自的优点和魅力，但也需要包容对方的缺点。${sameElement ? '同元素的共性让你们容易理解对方。' : '学会欣赏彼此的差异是关系的关键。'}多一份耐心，少一份计较，关系会更加和谐。`;
    } else {
        return `${s1.name}和${s2.name}的配对具有挑战性。你们的性格和需求差异较大，${sameElement ? '即使同属' + s1.element + '象星座也需要更多磨合。' : '不同元素带来的差异需要双方付出更多努力去理解和包容。'}如果真心相爱，需要用爱和智慧去跨越这些差异。`;
    }
}

buildCompatibilityData();

// ===================== 每日运势增强版 =====================
function generateDailyFortune(signId) {
    const sign = ZODIAC_SIGNS.find(s => s.id === signId);
    const seed = getDaySeed(signId);
    
    const overallScores = [5, 4.5, 4, 3.5, 3, 2.5, 4, 3, 4.5, 3.5, 2, 4];
    const overall = overallScores[seed % overallScores.length];
    
    const stars = overall >= 5 ? '★★★★★' : overall >= 4 ? '★★★★☆' : overall >= 3 ? '★★★☆☆' : overall >= 2 ? '★★☆☆☆' : '★☆☆☆☆';
    
    const descs = {
        love: [
            '今天爱情运势极佳，单身的你有机会遇到心动的对象，保持开放的心态。', 
            '感情方面温馨甜蜜，适合和伴侣共度浪漫时光。', 
            '爱情运平稳，享受当下的感情状态就好。', 
            '感情方面需要多些耐心，给对方一些空间。', 
            '今天在爱情方面会有意外惊喜，保持期待！',
            '适合主动表达心意，今天你的魅力值爆表。',
            '感情上可能会有些小摩擦，沟通是解决问题的关键。'
        ],
        career: [
            '事业运势强劲，你的能力和努力将得到认可和回报。', 
            '工作效率很高，适合处理重要的项目和任务。', 
            '事业发展平稳，按部就班地推进工作计划。', 
            '工作中可能会遇到一些小挑战，冷静应对即可。', 
            '职场人际关系和谐，合作愉快。',
            '今天适合做出重要的职业决策，你的判断力很好。',
            '工作上有新的机会出现，抓住它！'
        ],
        wealth: [
            '财运亨通，投资和理财都会有不错的收获。', 
            '正财运稳定，偏财运也不错，适合小试身手。', 
            '财务状况平稳，适合做好长期理财规划。', 
            '财运略有波动，注意控制不必要的开支。', 
            '今天有意外之财的可能，但也不要过于投机。',
            '适合学习新的理财知识，为未来做规划。',
            '财运方面需要谨慎，避免冲动消费。'
        ],
        health: [
            '身体状况良好，精力充沛，适合运动锻炼。', 
            '健康运势不错，继续保持良好的生活习惯。', 
            '需要注意劳逸结合，不要过度透支体力。', 
            '身体状况稳定，适合开始新的健康计划。', 
            '精神压力有些大，建议通过冥想或散步放松。',
            '今天适合做一些舒缓的运动，如瑜伽或太极。',
            '注意饮食健康，多吃蔬菜水果。'
        ]
    };
    
    const tips = [
        '把握今天的好运势，勇敢追求自己想要的目标。',
        '保持积极乐观的心态，好运自然来。',
        '今天适合社交，多和朋友交流会有意外收获。',
        '相信自己的直觉，它会指引你做出正确的选择。',
        '注意休息，好的身体是幸福的基础。',
        '今天适合学习新事物，你的学习能力很强。',
        '不要被小事困扰，放眼大局。',
        '与人分享快乐，快乐会加倍。',
        '今天宜主动，不宜被动等待。',
        '给自己一个小奖励，你值得拥有。'
    ];
    
    const loveScore = Math.min(5, Math.max(1, Math.round(overall + (Math.random() * 2 - 1))));
    const careerScore = Math.min(5, Math.max(1, Math.round(overall + (Math.random() * 2 - 1))));
    const wealthScore = Math.min(5, Math.max(1, Math.round(overall + (Math.random() * 2 - 1))));
    const healthScore = Math.min(5, Math.max(1, Math.round(overall + (Math.random() * 2 - 1))));
    
    const directions = ['东南', '正南', '西南', '正西', '西北', '正北', '东北', '正东'];
    const luckyDir = directions[seed % directions.length];
    
    const dayZodiac = ['子鼠', '丑牛', '寅虎', '卯兔', '辰龙', '巳蛇', '午马', '未羊', '申猴', '酉鸡', '戌狗', '亥猪'][seed % 12];
    
    return {
        sign: sign,
        date: new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' }),
        overall: overall,
        stars: stars,
        scores: { love: loveScore, career: careerScore, wealth: wealthScore, health: healthScore },
        detailed: {
            love: descs.love[seed % descs.love.length],
            career: descs.career[seed % descs.career.length],
            wealth: descs.wealth[seed % descs.wealth.length],
            health: descs.health[seed % descs.health.length]
        },
        tip: tips[seed % tips.length],
        luckyNum: (seed % 9) + 1,
        luckyColor: sign.luckyColor.split('、')[0],
        luckyDirection: luckyDir,
        dayZodiac: dayZodiac,
        yi: ['签约', '出行', '聚会', '学习', '运动'][seed % 5],
        ji: ['投资', '争执', '熬夜', '冲动消费'][(seed + 3) % 4]
    };
}

// ===================== 十二时辰运势 =====================
const SHICHEN_FORTUNE = [
    { name: '子时', time: '23:00-00:59', desc: '夜半时分，宜静不宜动。适合休息和冥想，不宜做重要决定。', element: '水', advice: '放松身心，准备就寝' },
    { name: '丑时', time: '01:00-02:59', desc: '深度睡眠时间，身体在进行自我修复。确保充足睡眠。', element: '土', advice: '保持睡眠，不宜熬夜' },
    { name: '寅时', time: '03:00-04:59', desc: '黎明前的黑暗，阳气渐生。适合早起修行或思考。', element: '木', advice: '早起者可此时开始一天的计划' },
    { name: '卯时', time: '05:00-06:59', desc: '日出时分，万物苏醒。适合晨练和规划一天的工作。', element: '木', advice: '起床运动，迎接新的一天' },
    { name: '辰时', time: '07:00-08:59', desc: '早餐时间，精神饱满。适合处理需要集中注意力的工作。', element: '土', advice: '好好吃早餐，补充能量' },
    { name: '巳时', time: '09:00-10:59', desc: '上午黄金时间，工作效率高。适合处理重要事务。', element: '火', advice: '把握高效时段，完成重要工作' },
    { name: '午时', time: '11:00-12:59', desc: '正午时分，阳气最盛。适合午餐和短暂休息。', element: '火', advice: '适当午休，为下午充电' },
    { name: '未时', time: '13:00-14:59', desc: '午后时光，适合创意工作和团队协作。', element: '土', advice: '适合开会讨论和创意工作' },
    { name: '申时', time: '15:00-16:59', desc: '下午精力回升，适合处理复杂问题。', element: '金', advice: '攻克难题的好时机' },
    { name: '酉时', time: '17:00-18:59', desc: '黄昏时分，适合放松和社交活动。', element: '金', advice: '下班后适合社交和运动' },
    { name: '戌时', time: '19:00-20:59', desc: '晚间时光，适合家庭聚会和学习充电。', element: '土', advice: '陪伴家人或学习新知识' },
    { name: '亥时', time: '21:00-22:59', desc: '入夜时分，宜静养心神。准备入睡。', element: '水', advice: '放下手机，准备休息' }
];

// ===================== 血型分析 =====================
const BLOOD_TYPE = {
    'A': {
        title: 'A型血',
        personality: '认真负责、严谨细致、有强烈的责任感。做事有条理，追求完美，但也容易焦虑和紧张。重视规则和秩序，是非常可靠的伙伴。',
        strength: '责任心强、细致周到、有耐心、守时守信',
        weakness: '容易焦虑、过于谨慎、难以放松、固执',
        love: '在感情中认真专一，会用心经营关系。比较含蓄内敛，不善于表达浪漫，但会用实际行动证明爱意。',
        career: '适合需要细致和耐心的工作，如会计、医生、研究员、编辑等。在工作中表现稳定可靠。',
        compatibility: { 'A': '互相理解，相处和谐', 'B': '性格互补，互相吸引', 'AB': '思想共鸣，交流顺畅', 'O': '互相依赖，关系稳定' }
    },
    'B': {
        title: 'B型血',
        personality: '乐观开朗、自由奔放、充满热情。兴趣广泛，喜欢新鲜事物，富有创造力。但有时也会显得不够专注和缺乏耐心。',
        strength: '乐观开朗、创造力强、适应力好、善于社交',
        weakness: '缺乏耐心、不够细致、容易冲动、三分热度',
        love: '在感情中热情直接，喜欢追求浪漫和新鲜感。需要一个能理解和支持他们自由的伴侣。',
        career: '适合需要创意和灵活性的工作，如设计师、艺术家、销售、主持人等。',
        compatibility: { 'A': '需要互相包容和理解', 'B': '自由奔放，快乐无限', 'AB': '互相欣赏，各取所长', 'O': '互相支持，关系和谐' }
    },
    'O': {
        title: 'O型血',
        personality: '自信果断、开朗大方、有强烈的自我意识。做事目标明确，执行力强，是天生的领导者。但有时也会显得固执和以自我为中心。',
        strength: '自信果断、领导力强、执行力好、乐观自信',
        weakness: '固执己见、不够细腻、容易独断、自我中心',
        love: '在感情中主动大方，会直接表达爱意。重视伴侣关系，愿意为爱情付出努力和承诺。',
        career: '适合需要决断力和领导力的工作，如管理者、创业者、政治家、销售总监等。',
        compatibility: { 'A': '互相需要，关系互补', 'B': '互相吸引，热情洋溢', 'AB': '互相欣赏，关系和谐', 'O': '强强联合，但也需包容' }
    },
    'AB': {
        title: 'AB型血',
        personality: '冷静理性、思维独特、有着双重性格魅力。既有A型的细致，又有B型的创造力。但有时会显得冷漠和难以捉摸。',
        strength: '思维敏捷、理性冷静、有创造力、适应力强',
        weakness: '情绪多变、不够热情、有时冷漠、难以捉摸',
        love: '在感情中理性而浪漫，追求精神层面的契合。需要一个能够理解和尊重他们独立空间的伴侣。',
        career: '适合需要理性分析和创意的工作，如科学家、设计师、顾问、作家等。',
        compatibility: { 'A': '理性共鸣，互相理解', 'B': '互相启发，思想碰撞', 'AB': '深度理解，灵魂共鸣', 'O': '互补中有吸引力' }
    }
};

// ===================== 姓名测试五格 =====================
const WUGE_NAMES = {
    tianGe: { name: '天格', desc: '由姓氏决定，代表祖先和家庭背景对命运的影响。', luck: ['吉', '凶'] },
    renGe: { name: '人格', desc: '姓名核心，代表一个人的主要性格和命运走向。', luck: ['大吉', '吉', '半吉', '凶'] },
    diGe: { name: '地格', desc: '由名字决定，代表中年前运和基础运势。', luck: ['吉', '半吉', '凶'] },
    waiGe: { name: '外格', desc: '代表社交能力和外界对他人的印象。', luck: ['吉', '凶'] },
    zongGe: { name: '总格', desc: '代表一生总运势，中年到老年的发展。', luck: ['大吉', '吉', '半吉', '凶', '大凶'] }
};

function calculateNameScore(name) {
    if (!name || name.trim().length < 2) return null;
    const strokes = [...name].map(c => {
        const code = c.charCodeAt(0);
        if (code >= 0x4E00 && code <= 0x9FFF) {
            return (code % 20) + 1;
        }
        return c.length;
    });
    
    const totalStrokes = strokes.reduce((a, b) => a + b, 0);
    const luckLevels = ['大吉', '吉', '半吉', '凶'];
    const score = Math.min(100, Math.max(20, 100 - (totalStrokes % 10) * 3 + (totalStrokes % 7) * 2));
    
    const descs = [
        '此名笔画配置合理，五行相生，寓意吉祥。',
        '姓名中蕴含着积极的能量，能够带来好运和机遇。',
        '此名音律优美，寓意深远，有助于个人发展。',
        '名字与姓氏搭配和谐，整体运势呈上升趋势。',
        '此名蕴含着智慧和才华的能量，有利于学业和事业。'
    ];
    
    return {
        name: name,
        totalStrokes: totalStrokes,
        score: Math.round(score),
        level: score >= 85 ? '上上吉' : score >= 70 ? '大吉' : score >= 55 ? '吉' : score >= 40 ? '半吉' : '凶',
        wuge: {
            tianGe: { strokes: strokes[0], luck: score > 60 ? '吉' : '凶' },
            renGe: { strokes: strokes.length > 1 ? strokes[0] + strokes[1] : strokes[0], luck: score > 70 ? '大吉' : score > 50 ? '吉' : '凶' },
            diGe: { strokes: strokes.slice(1).reduce((a, b) => a + b, 0) || strokes[0], luck: score > 65 ? '吉' : '凶' },
            zongGe: { strokes: totalStrokes, luck: score > 75 ? '大吉' : score > 55 ? '吉' : '凶' }
        },
        personality: score > 80 ? '此名主人性格开朗、自信大方，有领导才能，人际关系良好。' :
                     score > 60 ? '此名主人性格温和、待人真诚，做事稳重可靠。' :
                     '此名主人性格内敛、心思细腻，需要更多的自信和勇气。',
        career: score > 75 ? '事业运势旺盛，适合管理、创业、艺术等领域。' :
                score > 55 ? '事业发展平稳，适合技术、教育、服务等行业。' :
                '事业上需要更加努力，适合稳步发展。',
        love: score > 75 ? '感情运势良好，容易遇到志同道合的伴侣，关系和谐美满。' :
              '感情方面需要主动经营，真诚是维系关系的关键。',
        desc: descs[totalStrokes % descs.length]
    };
}

// ===================== 手机号吉凶 =====================
function calculatePhoneScore(phone) {
    if (!phone || phone.replace(/\D/g, '').length < 11) return null;
    const numbers = phone.replace(/\D/g, '').split('').map(Number);
    const sum = numbers.reduce((a, b) => a + b, 0);
    const lastFour = parseInt(numbers.slice(-4).join(''), 10);
    const score = Math.min(100, Math.max(20, 80 - (sum % 9) * 2 + (lastFour % 10) * 3));
    
    const meaning = [
        '这个号码充满了积极的能量，能够带来好运和机遇。',
        '号码磁场平稳，有利于事业和人际关系的发展。',
        '这个号码寓意吉祥，有助于提升个人魅力和财运。',
        '号码能量较为活跃，适合充满激情和创造力的人。',
        '这个号码具有稳定的能量场，适合追求平稳生活的人。'
    ];
    
    const fortuneTypes = ['财运', '事业运', '爱情运', '贵人运', '健康运'];
    const fortuneScores = fortuneTypes.map(() => Math.round(50 + Math.random() * 45));
    
    return {
        phone: phone,
        score: Math.round(score),
        level: score >= 85 ? '上上大吉' : score >= 70 ? '大吉' : score >= 55 ? '吉' : score >= 40 ? '半吉' : '凶',
        meaning: meaning[sum % meaning.length],
        numbers: {
            total: sum,
            lastFour: lastFour,
            balance: sum > 40 ? '偏阳刚' : sum < 30 ? '偏阴柔' : '阴阳平衡'
        },
        fortune: fortuneTypes.map((t, i) => ({ type: t, score: fortuneScores[i] })),
        advice: score > 75 ? '这个号码非常好，建议长期使用。' :
                score > 55 ? '号码不错，可以放心使用。' :
                '建议考虑更换一个更吉利的号码。'
    };
}

// ===================== 周公解梦 =====================
const DREAM_INTERPRETATION = {
    水: { meaning: '水代表着财富和情感流动。梦见清水预示着好运和财运，浑浊的水则可能预示着一些困扰。', good: '清澈的水、大海、瀑布', bad: '洪水、污水、干涸' },
    火: { meaning: '火代表着激情和能量。梦见温暖的火预示着热情和好运，大火则可能暗示着愤怒或变革。', good: '温暖的火、烛光、篝火', bad: '火灾、烧伤、爆炸' },
    动物: { meaning: '动物代表着本能和直觉。不同的动物有不同的寓意，龙代表着权势，凤凰代表着重生，鱼代表着财富。', good: '龙、凤凰、鱼、蝴蝶、鹿', bad: '蛇、蜘蛛、老鼠、狼' },
    飞行: { meaning: '梦见飞行代表着渴望自由和超越。在天空自由飞翔预示着事业上升，坠落则可能暗示着焦虑。', good: '自由飞翔、高空俯瞰', bad: '坠落、无法起飞' },
    钱财: { meaning: '梦见钱财与自我价值相关。捡到钱预示着好运，丢失钱财可能暗示着对失去的恐惧。', good: '捡到钱、收到礼物', bad: '丢钱、被盗、破财' },
    亲人: { meaning: '梦见已故亲人可能代表着思念，也可能是一种精神上的指引和慰藉。', good: '温馨团聚、得到指引', bad: '争吵、离别、生病' },
    考试: { meaning: '梦见考试代表着面临挑战和压力。考得好预示着顺利通过，考不好可能反映了内心的焦虑。', good: '考出好成绩、提前交卷', bad: '找不到考场、没复习' },
    食物: { meaning: '食物代表着满足和滋养。丰盛的食物预示着富足，腐烂的食物可能暗示着不满。', good: '丰盛大餐、美食', bad: '腐烂、变质、饥饿' },
    鬼神: { meaning: '梦见鬼神可能与内心的恐惧或精神追求有关。神佛代表着庇佑，鬼怪可能反映了内心的不安。', good: '神佛、菩萨、天使', bad: '恶鬼、恶魔、幽灵' },
    婚礼: { meaning: '梦见婚礼代表着新的开始和承诺。自己的婚礼预示着幸福，参加别人的婚礼可能暗示着社交需求。', good: '自己的婚礼、喜庆场面', bad: '婚礼出丑、逃婚' },
    死亡: { meaning: '梦见死亡不代表真的死亡，而是象征着转变和新生的开始。旧的结束意味着新的开始。', good: '平静离世、重生', bad: '惨死、亲人离世' },
    牙齿: { meaning: '梦见牙齿与自信和表达能力有关。牙齿掉落可能暗示着对衰老或失去魅力的恐惧。', good: '牙齿洁白、坚固', bad: '掉牙、蛀牙、碎裂' }
};

const DREAM_ITEMS = [
    '梦见清澈的湖水', '梦见自己在飞翔', '梦见金色的龙', '梦见捡到很多钱',
    '梦见去世的亲人', '梦见考试考满分', '梦见吃大餐', '梦见结婚',
    '梦见牙齿掉了', '梦见大火燃烧', '梦见下雨', '梦见花开',
    '梦见蛇', '梦见掉进水里', '梦见被追赶', '梦见迷路',
    '梦见死去的人复活', '梦见出海', '梦见爬山', '梦见彩虹'
];

function getDreamInterpretation(keyword) {
    const categories = Object.keys(DREAM_INTERPRETATION);
    for (const cat of categories) {
        const data = DREAM_INTERPRETATION[cat];
        if (data.good.includes(keyword) || data.bad.includes(keyword)) {
            const isGood = data.good.includes(keyword);
            return {
                dream: keyword,
                category: cat,
                meaning: data.meaning,
                isGood: isGood,
                suggestion: isGood ? '这个梦预示着好运，可以期待好消息！' : '这个梦提醒你需要关注某些方面的问题。'
            };
        }
    }
    return {
        dream: keyword,
        category: 'general',
        meaning: '梦境是你潜意识的反映，不必过分在意具体的寓意，更多的关注自己的内心感受。',
        isGood: true,
        suggestion: '保持良好的心态，梦境只是生活的一种映射。'
    };
}

// ===================== 工具函数 =====================
function getDaySeed(signId) {
    const today = new Date();
    const dateStr = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let hash = 0;
    const str = dateStr + signId;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash);
}

// ===================== 每日一言 =====================
const DAILY_QUOTES = [
    '星辰指引着前行的方向，命运掌握在自己手中。',
    '每一个星座都有属于自己的光芒。',
    '仰望星空，脚踏实地。',
    '命运不是机遇，而是选择。',
    '星星会说话，命运有答案。',
    '你的星座里，藏着你的性格密码。',
    '宇宙之大，总有属于你的一片星空。',
    '星辰大海，皆是征途。',
    '占星不是预言，而是认识自己的工具。',
    '今夜星光灿烂，明日必定辉煌。',
    '星座告诉我们的是可能性，而非必然性。',
    '你是什么星座，就会有什么样的精彩。',
    '星空之所以美丽，是因为它包容了所有的星星。',
    '每个人都是一颗独特的星星，闪耀着属于自己的光芒。',
    '命运不是一条预设的道路，而是一片等待探索的星空。',
    '当你仰望星空时，星空也在注视着你。',
    '心中若有星辰，脚下便是银河。',
    '所有的星星都在为你指路，只是你需要学会阅读。'
];

function getTodayQuote() {
    const seed = getDaySeed('quote');
    return DAILY_QUOTES[seed % DAILY_QUOTES.length];
}