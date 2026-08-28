// TikTok & Cross-Border E-commerce Creator Knowledge Base
// 专门为跨境电商与 TikTok 爆款视频创作者定制的实战知识题库与爆款宝典

export interface KnowledgeQuizQuestion {
  id: string;
  category: "tiktok_hook" | "japan_market" | "product_spec" | "algorithm" | "copywriting";
  categoryLabel: string;
  categoryEmoji: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  workImpact: string; // 职场/实战价值
  rewardAffinity: number;
  rewardExp: number;
  rewardCoins: number;
}

export const KNOWLEDGE_QUIZ_QUESTIONS: KnowledgeQuizQuestion[] = [
  {
    id: "q_hook_3s",
    category: "tiktok_hook",
    categoryLabel: "TikTok 黄金留存",
    categoryEmoji: "🎯",
    question: "在 TikTok 制作 15 秒带货短视频时，决定完播率和进入流量池的最关键时间窗口是？",
    options: [
      "前 1-3 秒（必须出现视觉冲击、痛点或悬念钩子）",
      "第 5-8 秒（详细介绍产品参数）",
      "第 10-12 秒（展示产品包装盒）",
      "最后 3 秒的 CTA 引导点击",
    ],
    correctIndex: 0,
    explanation: "TikTok 的完播率与跳出率主要取决于前 1~3 秒。如果前 3 秒没有通过动态动作、痛点反问或反常识视觉抓住眼球，用户将在 1.5 秒内划走，导致系统判定为低质量视频。",
    workImpact: "实战建议：开篇直接用「14.9g 比羽毛还轻？」「手腕再也不出汗了」等视觉或数字冲击开场！",
    rewardAffinity: 25,
    rewardExp: 35,
    rewardCoins: 20,
  },
  {
    id: "q_japan_mindset",
    category: "japan_market",
    categoryLabel: "日本跨境消费心理",
    categoryEmoji: "🇯🇵",
    question: "面向日本女性用户推广 FOSMET FOS10 智能手表时，哪个文案卖点转化率最高？",
    options: [
      "14.9g 超轻无感佩戴 + 睡眠生理期健康管理（手首負担ゼロ・睡眠記録）",
      "支持 100 种极限越野运动与军工防摔",
      "外放超大音量重低音喇叭",
      "超大 2.2 英寸硬朗方形大表盘",
    ],
    correctIndex: 0,
    explanation: "日本女性消费者极其注重佩戴舒适度（拒绝勒手、异物感）、精致外观与睡眠/生理期健康管理。「14.9g 極軽」「手首の負担ゼロ」「睡眠改善」是日本乐天与亚马逊最高频的好评关键词。",
    workImpact: "实战建议：文案多用「つけているのを忘れる」「上品なデザイン」「睡眠スコア」等细腻词汇。",
    rewardAffinity: 30,
    rewardExp: 40,
    rewardCoins: 25,
  },
  {
    id: "q_fos10_weight",
    category: "product_spec",
    categoryLabel: "FOSMET 核心参数",
    categoryEmoji: "⌚",
    question: "FOSMET 爆款女士智能手表 FOS10 的净重是多少？在文案中如何具象化量化？",
    options: [
      "14.9g（相当于仅 3 枚硬币重量，极致轻薄如若无物）",
      "45.5g（标准机械表重量）",
      "80g（重装战术手表）",
      "5.2g（智能指环重量）",
    ],
    correctIndex: 0,
    explanation: "FOSMET FOS10 主打 14.9g 极轻表身。在文案中将抽象的克重具象化（例如「仅相当于 3 枚 500 日元硬币」「草莓重量」）能让受众瞬间建立感知。",
    workImpact: "实战技巧：永远不要只写参数，要写「数字 + 生活化参照物 + 带来的痛点解脱」！",
    rewardAffinity: 25,
    rewardExp: 35,
    rewardCoins: 20,
  },
  {
    id: "q_air_ring_sleep",
    category: "product_spec",
    categoryLabel: "FOSMET Air-Ring 指环",
    categoryEmoji: "💍",
    question: "推广 FOSMET Air-Ring 智能指环时，相比传统手表的差异化核心杀手锏是？",
    options: [
      "睡眠无感监测（彻底解决戴手表睡觉硌手出汗痛点）+ 陶瓷温润质感",
      "具有 3 英寸高清大屏幕可以看长视频",
      "带有机械实体旋转指针",
      "支持大功率无线反向充电给手机",
    ],
    correctIndex: 0,
    explanation: "许多用户无法忍受睡觉时手腕佩戴厚重手表的束缚感。Air-Ring 指环贴合手指、轻盈亲肤，精准捕捉深睡/浅睡/心率，是解决睡眠监测痛点的终极形态。",
    workImpact: "实战钩子：「時計をつけて寝るのが嫌な人、これ見て！」（讨厌戴手表睡觉的人看过来！）",
    rewardAffinity: 30,
    rewardExp: 40,
    rewardCoins: 25,
  },
  {
    id: "q_tiktok_algo_signals",
    category: "algorithm",
    categoryLabel: "TikTok 算法推荐",
    categoryEmoji: "📈",
    question: "在 TikTok 推荐算法中，哪个指标对推动视频进入下一级百万流量池的权重最高？",
    options: [
      "完播率（Completion Rate）与 5 秒停留率（2秒/5秒留存）",
      "视频封面的文件大小",
      "发布视频时的 Wi-Fi 信号强度",
      "账号的注册年份早晚",
    ],
    correctIndex: 0,
    explanation: "TikTok 算法的核心指标矩阵中：完播率 > 5秒停留率 > 转发分享率 > 评论互动率 > 点赞率。完播率是平台衡量内容是否具有成瘾性和价值的第一要素。",
    workImpact: "实战要求：脚本时长严格控制在 12-22 秒黄金区间，节奏紧凑无废话，结尾设置循环悬念！",
    rewardAffinity: 30,
    rewardExp: 40,
    rewardCoins: 25,
  },
  {
    id: "q_cta_conversion",
    category: "copywriting",
    categoryLabel: "高转化 CTA 技巧",
    categoryEmoji: "✍️",
    question: "以下哪句 CTA（行动号召）在日本 TikTok 跨境电商小黄车带货中最能促成冲动下单？",
    options: [
      "「プロフィールのリンクから今すぐGET！期間限定クーポン配布中✨」",
      "「もしよければいつか買ってみてください」",
      "「製品の仕様書をよく読んでからご検討ください」",
      "「来月また新商品が出ます」",
    ],
    correctIndex: 0,
    explanation: "高转化 CTA 必须具备「明确路径（左下小黄车/主页链接）+ 紧迫感稀缺性（限定优惠/限量库存）+ 利益点（立减券/赠品）」。模糊中立的号召会导致转化率断崖下跌。",
    workImpact: "实战模板：【痛点解决总结】+【限定福利】+【点击指引】三段式收尾！",
    rewardAffinity: 25,
    rewardExp: 35,
    rewardCoins: 20,
  },
  {
    id: "q_lige_battery",
    category: "product_spec",
    categoryLabel: "LIGE 军工硬汉手表",
    categoryEmoji: "🔋",
    question: "LIGE 战术户外运动手表的核心受众痛点与主打卖点是什么？",
    options: [
      "400mAh 超大电池（超长 7-15 天续航、告别天天充电焦虑）+ 军工防摔硬朗造型",
      "极度轻巧仅 10 克，专门面向幼儿园儿童",
      "粉嫩蕾丝表带，面向少女聚会拍照",
      "仅支持室内坐姿监测，不防尘不防水",
    ],
    correctIndex: 0,
    explanation: "LIGE 瞄准户外、运动、硬汉男性群体，最大痛点是 Apple Watch 等产品需要「一天一充」的电量焦虑，以及户外磕碰易碎。因此超长续航与坚固防护是黄金卖点。",
    workImpact: "实战文案：「毎日の充電から解放！」「アウトドアでもビクともしないタフさ」！",
    rewardAffinity: 25,
    rewardExp: 35,
    rewardCoins: 20,
  },
  {
    id: "q_hashtag_strategy",
    category: "algorithm",
    categoryLabel: "标签与 SEO 检索",
    categoryEmoji: "🏷️",
    question: "TikTok 跨境短视频配置标签的最佳配比策略是？",
    options: [
      "3-5个精准标签（1个品牌词 + 2个品类核心词 + 1-2个场景痛点词/趋势词）",
      "堆砌 30 个无关的全局热门大词如 #fyp #foryou #viral",
      "完全不写任何标签",
      "只写纯数字标签如 #12345",
    ],
    correctIndex: 0,
    explanation: "过多的泛标签（#fyp）会稀释算法对精准受众画像（TikTok Shop 潜在买家）的识别。3~5 个垂直场景词（如 #スマートウォッチ #FOSMET #便利グッズ）能精准打入有购买意向的搜索与推荐池。",
    workImpact: "实战规则：生成器已为你严格内置了垂直 5 组标签配比，一键复制即可直接生效！",
    rewardAffinity: 30,
    rewardExp: 40,
    rewardCoins: 25,
  },
  {
    id: "q_painpoint_formula",
    category: "copywriting",
    categoryLabel: "痛点场景化公式",
    categoryEmoji: "💡",
    question: "在撰写「健康睡眠管理」场景文案时，哪种表达最能激发用户购买欲？",
    options: [
      "「朝起きても疲れが取れない…それ、睡眠の質が原因かも？スコアで可視化して改善！」",
      "「本製品は PPG センサーを内包し、光学式計測を行います」",
      "「寝るときに時計を着けると重いです」",
      "「睡眠は体に良いです」",
    ],
    correctIndex: 0,
    explanation: "优秀文案必须是「场景代入 + 痛点揭示 + 科学归因 + 带来希望」。不要讲生硬的传感器原理，要讲「醒来依然疲惫的直观感受」与「可视化的改善方案」。",
    workImpact: "实战公式：【早晨/夜间痛点场景】+【直击共鸣】+【FOSMET数据量化解法】。",
    rewardAffinity: 30,
    rewardExp: 40,
    rewardCoins: 25,
  },
  {
    id: "q_gift_culture",
    category: "japan_market",
    categoryLabel: "日本节日与礼品季",
    categoryEmoji: "🎁",
    question: "在日本市场，智能手表在哪些时间节点会迎来礼品属性（Gift）的爆单高峰？",
    options: [
      "母亲节/父亲节、敬老之日、圣诞节、毕业与入社新生活季（3-4月）",
      "仅在每年 2 月 29 日这一天",
      "智能手表在日本没有任何送礼属性",
      "仅在盛夏季节的台风天",
    ],
    correctIndex: 0,
    explanation: "日本消费者有极强的节日送礼文化（お中元、お歳暮、母の日、父の日、敬老の日、新生活応援）。在这些节点，文案包装「健康を贈る」「大切な人へのプレゼント」转化率往往翻倍。",
    workImpact: "实战打法：针对礼品季，切换【送礼与孝亲】角度文案，强调精美礼盒包装与健康守护寓意！",
    rewardAffinity: 30,
    rewardExp: 40,
    rewardCoins: 25,
  },
  {
    id: "q_rec10_amoled",
    category: "product_spec",
    categoryLabel: "REC10 旗舰特性",
    categoryEmoji: "✨",
    question: "FOSMET REC10 采用的 AMOLED 视网膜高清屏幕在户外阳光下的核心优势是？",
    options: [
      "高亮度高对比度，强光直射下表盘依然清晰可见，色彩鲜艳细腻",
      "在阳光下会自动黑屏关机以保护眼睛",
      "屏幕材质是磨砂塑料，完全不反光但是看不清字",
      "只能在黑暗无光环境下才能亮起",
    ],
    correctIndex: 0,
    explanation: "传统 TFT/LCD 屏幕在户外刺眼阳光下发白看不清，而 AMOLED 自发光高对比度屏幕能在强光下依然保持超高清通透显示，是运动与户外出行的重大加分项。",
    workImpact: "实战演示：短视频在户外大太阳下实拍对比，直观展示清晰度瞬间种草！",
    rewardAffinity: 25,
    rewardExp: 35,
    rewardCoins: 20,
  },
  {
    id: "q_voice_rhythm",
    category: "tiktok_hook",
    categoryLabel: "短视频听觉与节奏",
    categoryEmoji: "🎵",
    question: "制作 TikTok 爆款出海视频时，BGM 背景音乐与配音（TTS/真人）的最佳音量平衡是？",
    options: [
      "人声音量 100%（清晰响亮），BGM 音量调至 15%-25%（作为节奏衬托，不盖过人声）",
      "BGM 音量 100% 把人声完全盖住",
      "完全静音，不加任何声音和音效",
      "人声和 BGM 声音都调到最高发生爆音",
    ],
    correctIndex: 0,
    explanation: "TikTok 用户在嘈杂或通勤环境中刷视频，人声的穿透力是传递卖点的核心。BGM 仅用于烘托情绪和卡点，过大的音乐会导致用户听不清文案而直接跳出。",
    workImpact: "实战细节：善用文字卡点与重要数字音效（叮~ / 嗖~），完播率可提升 20%！",
    rewardAffinity: 25,
    rewardExp: 35,
    rewardCoins: 20,
  },
];

// Practical Marketing Flashcards & Tips
export interface CreatorMarketingTip {
  id: string;
  category: string;
  title: string;
  emoji: string;
  coreRule: string;
  exampleJP: string;
  exampleCN: string;
  practicalAction: string;
}

export const CREATOR_MARKETING_TIPS: CreatorMarketingTip[] = [
  {
    id: "tip_1",
    category: "🔥 爆款黄金钩子",
    title: "反直觉数字冲突法",
    emoji: "⚡",
    coreRule: "用难以置信的极端数字（极轻/极长续航/极高性价比）打破常规认知，制造 3 秒停留。",
    exampleJP: "「えっ、14.9g？！イチゴ1個分より軽いスマートウォッチが凄すぎた…」",
    exampleCN: "「14.9克？！比一颗草莓还轻的智能手表，戴上一整天手腕零负担！」",
    practicalAction: "在生成器中选择【轻量无感佩戴】角度，开篇直接引用克重对比！",
  },
  {
    id: "tip_2",
    category: "💡 痛点直击法",
    title: "讨厌戴表人群反向筛选",
    emoji: "🎯",
    coreRule: "精准叫出受众痛苦（手表太重、出汗过敏、睡觉硌手），反向唤醒强烈共鸣。",
    exampleJP: "「時計つけて寝るのが嫌いな人、正直に手を挙げて！🙋‍♀️ これなら朝までぐっすり！」",
    exampleCN: "「讨厌戴着手表睡觉的人举手！🙋‍♀️ 这款陶瓷指环无感到让你彻底忘记它的存在！」",
    practicalAction: "使用【睡眠与健康监测】角度，用提问句式作为视频首句配音！",
  },
  {
    id: "tip_3",
    category: "🇯🇵 日语高转化词",
    title: "日本乐天亚马逊爆款热词",
    emoji: "🌸",
    coreRule: "日系消费者对品质、轻盈与安心感极其看重，加入特定高频种草形容词。",
    exampleJP: "「手首の負担ゼロ」「上品見え」「着けてるのを忘れる」「コスパ最強」「プレゼントに最適」",
    exampleCN: "「手腕零负担」「高级质感」「戴着如同无物」「性价比天花板」「送礼首选」",
    practicalAction: "在自定义关键词中加入「上品見え」或「負担ゼロ」，生成更贴合本土语感的文案！",
  },
  {
    id: "tip_4",
    category: "📈 流量倍增秘诀",
    title: "互动评论诱导钩子（Engagement Hook）",
    emoji: "💬",
    coreRule: "在视频 1/2 处抛出有争议或易互动的选择题，激发评论区留言提升推荐权重。",
    exampleJP: "「ピンクとシルバー、どっちが可愛いと思う？コメントで教えてね！👇」",
    exampleCN: "「玫瑰金和银曜白，大家觉得哪个颜色更百搭通勤？评论区告诉我！👇」",
    practicalAction: "在视频文案结尾或字幕中增加颜色/款式投票提问，拉高评论率！",
  },
  {
    id: "tip_5",
    category: "⌚ 硬件价值升维",
    title: "将冷冰冰参数升维为美好生活画面",
    emoji: "✨",
    coreRule: "不要只讲「400mAh电池」，要讲「一次充电，陪你跑完两场马拉松还剩半格电」。",
    exampleJP: "「充電器を持って出張に行く生活、もう終わりにしませんか？余裕の15日間バッテリー！」",
    exampleCN: "「还要每天带着充电线出差？超长 15 天强劲续航，彻底告别电量焦虑！」",
    practicalAction: "推广 LIGE 或 REC10 时，将续航天数与出差/旅行/户外徒步场景强关联！",
  },
  {
    id: "tip_6",
    category: "🎁 送礼与情感共鸣",
    title: "健康守护与心意传递",
    emoji: "💖",
    coreRule: "将智能手表包装为「可以时刻守护家人健康的贴心礼物」，提升客单价与冲动送礼。",
    exampleJP: "「母の日に『健康』をプレゼント。離れて暮らすお母さんの体調がアプリで見守れる✨」",
    exampleCN: "「母亲节送妈妈一份『健康守护』，无论相隔多远，心率睡眠数据随时贴心关怀✨」",
    practicalAction: "母亲节/父亲节/敬老节前夕，批量生成【送礼与孝亲】维度的矩阵脚本！",
  },
];
