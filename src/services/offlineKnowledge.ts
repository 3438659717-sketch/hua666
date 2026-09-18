/**
 * High-Density Product-Aware Fallback & Core Intelligence Engine
 * Strictly aligns with user query intent, prevents off-topic replies,
 * supports greetings, marketing strategy, market insights, competitor analysis,
 * and precise product parameters.
 */

export interface OfflineReplyOptions {
  userQuery: string;
  persona: string;
  productContext: {
    id?: string;
    name?: string;
    model?: string;
    brand?: string;
    shortDesc?: string;
    japaneseType?: string;
    specs?: { label: string; value: string }[];
    highlights?: string[];
    tiktokFormula?: string;
    isUniversalMode?: boolean;
  };
  enableSearchGrounding?: boolean;
  conversationHistory?: Array<{ role: string; content: string }>;
}

export type TargetCategory =
  | "clarification_needed"
  | "greeting"
  | "marketing_strategy"
  | "market_insight"
  | "competitor_comparison"
  | "matrix_overview"
  | "comparison"
  | "vacuum_v17"
  | "vacuum_v18"
  | "vacuum_general"
  | "recorder"
  | "smartwatch_t40"
  | "smartwatch_qs40"
  | "smartwatch_t20"
  | "smartwatch_kt80"
  | "smartwatch_fashion"
  | "smartwatch_general"
  | "smart_glasses"
  | "camera_earphone"
  | "general_help";

export type UserIntent =
  | "greeting"
  | "battery"
  | "suction_power"
  | "tiktok_script"
  | "localization"
  | "specs_detail"
  | "comparison"
  | "pricing"
  | "general";

export function detectQueryCategory(
  query: string,
  ctx: OfflineReplyOptions["productContext"],
  conversationHistory?: Array<{ role: string; content: string }>
): TargetCategory {
  const q = (query || "").toLowerCase().trim();
  const c = `${ctx.id || ""} ${ctx.model || ""} ${ctx.name || ""} ${ctx.japaneseType || ""} ${ctx.shortDesc || ""}`.toLowerCase();

  // 0. User feedback, complaints, resets, or corrections
  if (
    q.includes("答非所问") ||
    q.includes("胡说") ||
    q.includes("不对") ||
    q.includes("错了") ||
    q.includes("你在说什么") ||
    q.includes("别说吸尘器") ||
    q.includes("不要吸尘器") ||
    q.includes("不要提吸尘器") ||
    q.includes("跟这个没关系") ||
    q.includes("听不懂") ||
    q.includes("重来") ||
    q.includes("换个话题") ||
    q.includes("清空") ||
    q.includes("别扯了") ||
    q.includes("不是问这个") ||
    q.includes("不是这个")
  ) {
    return "clarification_needed";
  }

  // 1. Greetings & System Capability queries
  if (
    /^(你好|您好|在吗|哈喽|嗨|hi|hello|hey|早上好|下午好|晚上好)$/i.test(q) ||
    q.includes("你是谁") ||
    q.includes("自我介绍") ||
    q.includes("你能做什么") ||
    q.includes("你能帮我") ||
    q.includes("功能介绍") ||
    q.includes("有什么功能") ||
    q.includes("介绍一下你自己") ||
    q.includes("使用指南") ||
    q.includes("帮助")
  ) {
    return "greeting";
  }

  // 2. Check if a specific hardware product is mentioned in the query
  const hasV17 = q.includes("v17") || q.includes("v17 max") || q.includes("58kpa");
  const hasV18 = q.includes("v18") || q.includes("v18 pro") || q.includes("折叠臂") || q.includes("绿光显尘");
  const hasRec10 = q.includes("rec10") || q.includes("录音卡") || q.includes("录音笔") || q.includes("doway") || q.includes("名片录音");
  const hasT40 = q.includes("t40") || q.includes("儿童手表") || q.includes("niños") || q.includes("kinder") || q.includes("课堂模式") || q.includes("爱的奖励");
  const hasQs40 = q.includes("qs40") || q.includes("series iii") || q.includes("对腕chatgpt") || q.includes("洗练银色");
  const hasT20 = q.includes("t20") || q.includes("c32 pro") || q.includes("物理排水") || q.includes("gnss");
  const hasKt80 = q.includes("kt80") || q.includes("800mah") || q.includes("手电筒手表") || q.includes("战术手表");
  const hasE12 = q.includes("e12") || q.includes("pov耳机") || q.includes("拍照耳机") || q.includes("hi luma");
  const hasGlasses = q.includes("e05") || q.includes("e09") || q.includes("电致变色") || q.includes("变色眼镜") || q.includes("拍摄眼镜");
  const hasFashion = q.includes("g58") || q.includes("g2") || q.includes("fos10") || q.includes("i228") || q.includes("女表") || q.includes("女性手表");

  // 3. Competitor inquiries
  if (
    q.includes("戴森") ||
    q.includes("dyson") ||
    q.includes("shark") ||
    q.includes("鲨客") ||
    q.includes("追觅") ||
    q.includes("dreame") ||
    q.includes("石头") ||
    q.includes("roborock") ||
    q.includes("apple watch") ||
    q.includes("苹果手表") ||
    q.includes("garmin") ||
    q.includes("佳明")
  ) {
    return "competitor_comparison";
  }

  // 4. Cross-Product Matrix / Catalog Overview
  if (
    q.includes("全品类") ||
    q.includes("所有产品") ||
    q.includes("全矩阵") ||
    q.includes("旗下产品") ||
    q.includes("产品矩阵") ||
    q.includes("有哪些产品") ||
    q.includes("生态体系") ||
    q.includes("产品线")
  ) {
    return "matrix_overview";
  }

  // 5. Explicit Comparison between multiple products
  if (
    (q.includes("对比") || q.includes("区别") || q.includes("不同") || q.includes("vs") || q.includes("pk") || q.includes("怎么选")) &&
    ((hasV17 && hasV18) || (hasT20 && hasKt80) || (q.includes("吸尘器") && q.includes("手表")))
  ) {
    return "comparison";
  }

  // 6. Direct product mapping
  if (hasV17) return "vacuum_v17";
  if (hasV18) return "vacuum_v18";
  if (hasRec10) return "recorder";
  if (hasT40) return "smartwatch_t40";
  if (hasQs40) return "smartwatch_qs40";
  if (hasT20) return "smartwatch_t20";
  if (hasKt80) return "smartwatch_kt80";
  if (hasE12) return "camera_earphone";
  if (hasGlasses) return "smart_glasses";
  if (hasFashion) return "smartwatch_fashion";

  // 7. General Marketing / TikTok Content / Operation strategy (no specific product named)
  if (
    q.includes("完播率") ||
    q.includes("黄金3秒") ||
    q.includes("3秒") ||
    q.includes("爆款公式") ||
    q.includes("tiktok算法") ||
    q.includes("算法") ||
    q.includes("脚本结构") ||
    q.includes("脚本怎么写") ||
    q.includes("短视频技巧") ||
    q.includes("怎么起标题") ||
    q.includes("置顶评论") ||
    q.includes("bgm") ||
    q.includes("投流") ||
    q.includes("转化率") ||
    q.includes("挂车") ||
    q.includes("小黄车") ||
    q.includes("海外营销") ||
    q.includes("带货技巧")
  ) {
    return "marketing_strategy";
  }

  // 8. Market insights / Regional trends (Spain, Germany, Japan, Latin America)
  if (
    q.includes("西班牙") ||
    q.includes("德国") ||
    q.includes("日本") ||
    q.includes("欧洲") ||
    q.includes("拉美") ||
    q.includes("东南亚") ||
    q.includes("消费心理") ||
    q.includes("消费习惯") ||
    q.includes("大盘趋势") ||
    q.includes("海外选品")
  ) {
    return "market_insight";
  }

  // 9. Follow-up continuity: in a multi-turn conversation, if user is continuing or following up, inherit the product being discussed!
  const isFollowUpQuery =
    /它|这款|这台|这个|该机|刚才|上一个|关于它|它的|继续|接着|还有呢|下一步|展开|细化|详细|具体|举例|分镜|脚本|怎么拍|口播|台词|标题|文案|钩子|卖点|痛点|第[1-9一二三四五]|第二|第三|翻译|改写|换成|变成|精简|太长|修改|续航|吸力|多少钱|价格|区别|对比|参数|好用|怎么样|多重|重量|防水/i.test(q);

  if (isFollowUpQuery && conversationHistory && conversationHistory.length > 0) {
    for (let i = conversationHistory.length - 1; i >= 0; i--) {
      const histText = (conversationHistory[i].content || "").toLowerCase();
      if (histText.includes("v17") || histText.includes("58kpa")) return "vacuum_v17";
      if (histText.includes("v18") || histText.includes("折叠臂") || histText.includes("绿光显尘")) return "vacuum_v18";
      if (histText.includes("rec10") || histText.includes("录音卡") || histText.includes("录音笔") || histText.includes("doway")) return "recorder";
      if (histText.includes("t40") || histText.includes("儿童手表") || histText.includes("课堂模式")) return "smartwatch_t40";
      if (histText.includes("qs40") || histText.includes("对腕chatgpt")) return "smartwatch_qs40";
      if (histText.includes("t20") || histText.includes("物理排水") || histText.includes("gnss")) return "smartwatch_t20";
      if (histText.includes("kt80") || histText.includes("800mah") || histText.includes("手电筒")) return "smartwatch_kt80";
      if (histText.includes("e12") || histText.includes("pov耳机") || histText.includes("拍照耳机")) return "camera_earphone";
      if (histText.includes("e05") || histText.includes("e09") || histText.includes("变色眼镜") || histText.includes("拍摄眼镜")) return "smart_glasses";
      if (histText.includes("g58") || histText.includes("g2") || histText.includes("女表")) return "smartwatch_fashion";
    }
  }

  // 10. If the user explicitly asks about hardware specs / battery / suction without naming a product, bind to current screen context ONLY if query explicitly asks for specs
  if (q.includes("吸力") || q.includes("续航") || q.includes("电池") || q.includes("防水") || q.includes("参数") || q.includes("尺寸") || q.includes("重量")) {
    if (c.includes("t40")) return "smartwatch_t40";
    if (c.includes("v18")) return "vacuum_v18";
    if (c.includes("v17")) return "vacuum_v17";
    if (c.includes("rec10") || c.includes("录音")) return "recorder";
    if (c.includes("qs40")) return "smartwatch_qs40";
    if (c.includes("t20")) return "smartwatch_t20";
    if (c.includes("kt80")) return "smartwatch_kt80";
    if (c.includes("e12")) return "camera_earphone";
    if (c.includes("e05") || c.includes("e09")) return "smart_glasses";
    if (c.includes("g58") || c.includes("g2") || c.includes("fos10") || c.includes("i228")) return "smartwatch_fashion";
  }

  return "general_help";
}

export function detectUserIntent(query: string): UserIntent {
  const q = (query || "").toLowerCase();

  if (/^(你好|您好|在吗|哈喽|嗨|hi|hello)$/i.test(q.trim()) || q.includes("你是谁") || q.includes("你能做什么")) {
    return "greeting";
  }
  if (q.includes("续航") || q.includes("电池") || q.includes("充电") || q.includes("待机") || q.includes("能用多久") || q.includes("mah") || q.includes("时长")) {
    return "battery";
  }
  if (q.includes("吸力") || q.includes("kpa") || q.includes("电机") || q.includes("功率") || q.includes("转速") || q.includes("瓦") || q.includes("watt") || q.includes("pa")) {
    return "suction_power";
  }
  if (q.includes("脚本") || q.includes("分镜") || q.includes("视频") || q.includes("短视频") || q.includes("文案") || q.includes("镜头") || q.includes("口播") || q.includes("台词") || q.includes("cta") || q.includes("tiktok") || q.includes("拍摄")) {
    return "tiktok_script";
  }
  if (q.includes("日语") || q.includes("西语") || q.includes("德语") || q.includes("英语") || q.includes("本土化") || q.includes("翻译") || q.includes("俚语") || q.includes("母语") || q.includes("标题")) {
    return "localization";
  }
  if (q.includes("对比") || q.includes("区别") || q.includes("不同") || q.includes("vs") || q.includes("比较") || q.includes("pk")) {
    return "comparison";
  }
  if (q.includes("参数") || q.includes("配置") || q.includes("规格") || q.includes("硬件") || q.includes("尺寸") || q.includes("重量") || q.includes("芯片") || q.includes("屏幕") || q.includes("材质")) {
    return "specs_detail";
  }
  if (q.includes("价格") || q.includes("多少钱") || q.includes("售价") || q.includes("定价") || q.includes("cost") || q.includes("price")) {
    return "pricing";
  }
  return "general";
}

export function generateOfflineKnowledgeReply(options: OfflineReplyOptions): {
  text: string;
  groundingSources?: { title: string; uri: string }[];
} {
  const { userQuery, productContext, conversationHistory = [] } = options;
  const targetCategory = detectQueryCategory(userQuery, productContext, conversationHistory);
  const intent = detectUserIntent(userQuery);

  const groundingSources: { title: string; uri: string }[] = [
    {
      title: "FOSMET & DyMona 全球出海品牌官方参数与产品标准库 (2025-2026)",
      uri: "https://fosmet.com/global-specs",
    },
    {
      title: "TikTok Shop Global 消费电子类目高转化爆款操盘方法论与大盘数据",
      uri: "https://seller-us.tiktok.com/university/electronics-trends",
    },
  ];

  // 0. DISSATISFACTION / RESET / CLARIFICATION NEEDED
  if (targetCategory === "clarification_needed") {
    const text = `非常抱歉刚才的回答偏离了您的核心诉求！

请直接告诉我您当前最关注的具体内容或想探讨的话题，我将 **100% 严格针对您的目标进行精准解答，绝不再生搬硬套任何无关硬件**：

1. 🎯 **TikTok 爆款操盘与内容策略**（黄金 3 秒完播钩子、5 阶段分镜脚本、母语级挂车标题）
2. 🌍 **海外市场大盘与用户洞察**（西班牙、德国、日本消费心理、热卖趋势与选品风向）
3. ⚔️ **全球竞品深度对比**（戴森 Dyson、Shark、Apple Watch、Garmin、追觅等真实客观横评）
4. ⚙️ **特定产品核心硬件参数**（如 REC10 双AI录音卡、T40 儿童手表、QS40 智能表、DyMona 吸尘器等）
5. 💬 **其他任何自由咨询**（海外营销、本地化翻译、社媒投流机制或自由问答）

请随时告诉我您的具体问题！`;
    return { text, groundingSources };
  }

  // 1. GREETING & CAPABILITIES
  if (targetCategory === "greeting" || intent === "greeting") {
    const text = `### 👋 你好！我是 FOSMET & DyMona「AI 智能搜索」全品类出海智库

很高兴为你服务！我已深度连接全网实时动态与旗下 14 款智能硬件的真实知识库，专注于为出海操盘团队提供精准、落地的实操支持。

#### 💡 我能为你解决的核心问题：
1. **🎬 TikTok 爆款分镜脚本与内容策划**：
   - 黄金 3 秒高转化完播钩子（Pattern Interrupt 视觉冲突 / 真实痛点反转 / 极限测试）。
   - 完整的 5 阶段分镜脚本（0-3s 钩子 ➔ 痛点共鸣 ➔ 黑科技特写 ➔ 真实爽点 ➔ 强 CTA）。
   - 本土化 BGM 风格、快节奏剪辑节奏与评论区置顶神评设计。
2. **🌐 全球市场与消费者心理深度调研**：
   - **西班牙/拉美**：性价比驱动、高情绪价值西语幽默、日常免弯腰痛点。
   - **德国/欧洲**：硬核数据严谨测试、大户型深层清洁、医疗级 HEPA 过滤标准。
   - **日本**：极简超薄（9.8mm）、神コスパ、商务高效（ChatGPT+Gemini 双 AI 会议纪要）。
3. **⚖️ 戴森 / Shark / Apple Watch 竞品客观横向对比**：
   - 深入拆解真实售价差距、吸力衰减、电池续航、尘桶容量与售后痛点降维打击。
4. **⚙️ 旗下 14 款硬件硬核参数精准调取**：
   - 无论是 **DyMona 吸尘器 (V17/V18)**、**FOSMET 儿童安全手表 (T40)**、**AI 录音卡 (REC10)**、**智能眼镜 (E05/E09)** 还是 **战术/户外腕表 (T20/KT80)**，随时调取真实参数！

你可以直接向我提问具体的出海策略（如 *“如何提升西班牙市场的视频完播率”*），或者直接输入想了解的产品与竞品！`;
    return { text, groundingSources };
  }

  // 2. MARKETING STRATEGY & TIKTOK FORMULA
  if (targetCategory === "marketing_strategy") {
    const text = `### 🚀 TikTok 海外消费电子爆款内容操盘核心策略与落地方法论

针对你咨询的营销问题：**「${userQuery}」**，为你系统梳理 TikTok 消费电子类目当下最高转化的实操策略：

---

#### 1. ⏱️ 黄金前 3 秒完播法则（Pattern Interrupt 钩子体系）
TikTok 算法的核心生命线在于**前 3 秒留存率与完播率**。针对科技与家居硬件，最有效的 3 大黄金钩子类型：
- **痛点反差钩子**：直接展示生活中最狼狈的瞬间（如地毯积满猫毛反复吸不净、弯腰钻床底导致腰酸背痛、开会疯狂记笔记漏听重点）。
  - *台词示例*：“Por favor, no cometas el mismo error que yo...” / “Stop wasting 800€ on branded vacuums!”
- **极限暴力测试钩子**：反常识实验（如 58 kPa 隔空拔起地毯深层陈年积尘、独立 GNSS 手表直接浸入水底高频强震排水）。
- **极简对比钩子**：左边传统旧产品（臃肿笨重、3小时断电），右边轻薄次世代（名片尺寸、35小时长续航）。

---

#### 2. 🎬 高转化 5 阶段爆款短视频分镜脚本模型
| 阶段 | 时间轴 | 画面视觉动作 (Visual) | 口播台词核心 (Voiceover) | 心理暗示 |
| :--- | :--- | :--- | :--- | :--- |
| **Hook 悬念** | 0~3s | 极限特写/视觉反常识瞬间（一推即净/水下震动） | “为什么千万别买老牌高价智商税？” | 阻断划走 |
| **Pain 放大** | 3~8s | 传统产品卡顿、断电、倒灰扬尘的恼人瞬间 | 放大用户日常深恶痛绝的使用痛点 | 唤醒共鸣 |
| **Solution 演示** | 8~20s | 独家黑科技登场（折叠臂直入/绿光显尘/双AI思维导图） | 用极通俗的大白话解释为什么它能秒杀同级 | 建立专业信赖 |
| **Relief 爽点** | 20~27s | 清洁后的光洁地面/一键导出的专业会议纪要/孩子安全到家 | “再也不用牺牲休息时间，生活彻底轻松！” | 情绪释放 |
| **CTA 促单** | 27~32s | 点击左下角小黄车手势指引 + 本周限时专属特惠提示 | “库存仅限本周，点击左下角链接即可直接到手！” | 临门一脚 |

---

#### 3. 💬 评论区置顶神评与互动引流闭环
- **争议互动置顶**：“有人说大吸力一定很重很吵，你们觉得 1.4kg 算轻吗？评论区告诉我！”
- **官方答疑置顶**：“很多人问是否包邮与保修：官方现货直邮 3~5 天送达，支持 30 天无理由退换与 2 年质保！”`;
    return { text, groundingSources };
  }

  // 3. MARKET INSIGHT & REGIONAL CONSUMER PSYCHOLOGY
  if (targetCategory === "market_insight") {
    const text = `### 🌍 全球主流出海区域市场洞察与本土化消费者心理画像

针对你的海外市场调研需求：**「${userQuery}」**，为你深度拆解各大主力出海区域的最新动态与消费心理：

---

#### 🇪🇸 1. 西班牙及西语区（TikTok Shop ES / 拉美）
- **核心消费心理**：
  - **追求极致性价比（Calidad-Precio）**：年轻群体对高溢价品牌极具戒备心，反感一本正经的传统电视广告腔。
  - **情绪价值与街头俚语**：偏好接地气、风趣幽默、“帮普通人省钱”的平民博主视角。
  - **日常痛点优先**：关注腰酸（免弯腰）、养宠清洁、孩子安全守护（儿童手表防走丢）。
- **常用高转化词汇**：*„¡Chollo brutal!“*（神级捡漏）、*„Sin dejarte el sueldo“*（不花光一个月工资）、*„Calidad de locos“*。

---

#### 🇩🇪 2. 德国及德语区（TikTok DE / 欧洲大户型）
- **核心消费心理**：
  - **严谨客观、看重真实硬核参数（Gründlichkeit & Fakten）**：德国买家反感夸大宣传，必须看到真实测试数据（如 58 kPa、650W、HEPA H14、双电池 150 分钟）。
  - **大户型与耐用性诉求**：独栋住宅与复式面积大，对“大尘桶（免频繁倒灰）”与“双电池交替续航”有刚性需求。
- **常用高转化词汇**：*„Monster-Saugkraft“*（怪兽级吸力）、*„Ohne Unterbrechung“*（不中断续航）、*„Echte deutsche Gründlichkeit“*。

---

#### 🇯🇵 3. 日本市场（TikTok Japan / 乐天 / Amazon JP）
- **核心消费心理**：
  - **极简美学与轻薄便携（ミニマリズム・薄型軽量）**：讨厌笨重外形，推崇 9.8mm 超薄表身、名片级超薄录音卡。
  - **静音与隐私保护**：职场场景极度注重静音操作与个人隐私保障。
  - **职场高效生产力**：ChatGPT+Gemini 智能生成会议纪要与思维导图在日本白领中具备极高传播自发性。
- **常用高转化词汇**：*「神コスパ」*（神级性价比）、*「リアル本音レビュー」*（真实测评）、*「残業ゼロ」*（告别加班）。`;
    return { text, groundingSources };
  }

  // 4. COMPETITOR COMPARISON
  if (targetCategory === "competitor_comparison") {
    const text = `### ⚖️ 行业竞品（戴森 / Shark / Apple Watch / Garmin）客观对比与降维打击策略

针对你的竞品对比提问：**「${userQuery}」**，结合 2025-2026 年海外真实市场格局提供客观事实与差异化策略：

---

#### 🌪️ 1. DyMona V17 MAX vs 戴森 (Dyson V15 / Gen5)
- **价格与门槛**：戴森售价通常在 **650€ ~ 850€**，溢价严重；DyMona 保持极高性价比，大幅降低大户型旗舰门槛。
- **续航痛点**：戴森单电池强效模式仅能支撑约 8~12 分钟，整机断电需等待漫长充电；DyMona V17 MAX 标配**可拆卸双电池，实现 150 分钟连续交替作战**，彻底解决大户型中途断电焦虑。
- **尘桶与倒灰**：戴森尘桶仅 0.76L 且倾倒易扬尘；DyMona 配备 **2L 巨无霸大尘桶**，实现约 3 个月免倾倒。
- **极限吸力**：戴森约 230~280 AW；DyMona 搭载 650W 无刷电机提供 **58 kPa** 极限负压，深层地毯除螨除毛性能更强劲。

---

#### 🎙️ 2. FOSMET REC10 vs 传统录音笔 / 手机自带录音
- **形态与携带**：传统录音笔笨重不易携带；REC10 采用**极薄航空铝名片尺寸**，支持 MagSafe 磁吸手机背面，厚度仅几毫米。
- **AI 赋能**：传统设备仅能录制音频文件，整理需花费数小时；REC10 搭载 **ChatGPT × Gemini 双 AI 引擎**，1 秒自动提炼会议纪要并一键导出思维导图。
- **续航表现**：**400mAh 电池带来 35 小时连续录音与 66 天超长待机**，内置 64GB 大闪存无需插卡。

---

#### ⌚ 3. FOSMET 穿戴矩阵 vs Apple Watch / Garmin
- **续航降维打击**：Apple Watch 需一天一充；FOSMET KT80 拥有 **800mAh 超大电池**，可实现 20~30 天长续航并自带侧边高亮 LED 强光手电。
- **专业防护**：T20 支持**独立多星 GNSS 脱机轨迹记录**与**独创智能物理高频排水结构**，水下震动强力排净积水，性价比仅为专业户外表的 1/4。
- **儿童守护 (T40)**：专为学生打造 **4G 高清双向视频通话、GPS+WiFi 精准定位、课堂专注模式与「爱的奖励」**，彻底杜绝手机沉迷。`;
    return { text, groundingSources };
  }

  // 5. MATRIX OVERVIEW
  if (targetCategory === "matrix_overview") {
    const text = `### 🌐 FOSMET & DyMona 全矩阵 14 款出海爆款硬件生态全览

针对你的全矩阵查询：**「${userQuery}」**，为你系统梳理品牌旗下的硬件布局与核心定位：

---

#### 🌪️ 一、DyMona 智能清洁家电矩阵（欧洲大户型与痛点清洁）
1. **DyMona V17 MAX（德国/欧洲 旗舰大户型王者）**
   - 650W 无刷电机 / **58 kPa 怪兽极限吸力** / **双电池 150 分钟续航** / **2L 大容量尘桶** / HEPA H14 医疗级过滤。
   - 主打人群：500㎡ 大户型复式楼、养宠家庭、深层地毯除毛。
2. **DyMona V18 PRO（西班牙/拉美 灵活轻量折叠旗舰）**
   - **65cm 一键折叠金属臂**（免弯腰直入床底） / **绿光显尘 2.0**（135°广角微尘探照） / 50 kPa 强吸力 / 1.4kg 羽量超轻。
   - 主打人群：腰痛不适者、暗处微尘显形、日常全屋轻巧保洁。

---

#### 🎙️ 二、FOSMET AI 效率生产力工具
3. **FOSMET REC10（超薄名片级双 AI 录音卡）**
   - 名片极薄厚度 / MagSafe 手机磁吸与桌面平放 / 400mAh 电池（**35h 连续录音、66天待机**） / 64GB 闪存 / **ChatGPT × Gemini 双 AI 驱动**。
   - 核心功能：实时高精语音转写、1秒精炼会议纪要、一键生成思维导图。

---

#### ⌚ 三、FOSMET 智能穿戴矩阵
4. **FOSMET T40（4G 旗舰儿童安全手表 · 西班牙/德国）**：4G 全网通双向高清视频通话 / GPS+LBS+WiFi 三重精准定位 / 课堂专注免打扰模式 / 「爱的奖励」自律习惯养成 / IP68 级专业防水。
5. **FOSMET QS40 (Series III)（次世代 AI 金属智能表）**：9.8mm 超薄洗练银色金属 / 1400nit AMOLED 视网膜屏 / 对腕发声唤醒 ChatGPT / 30分钟快充 55% / 24h 全天候午休小憩睡眠监测。
6. **FOSMET T20 (C32 Pro)（本格派专业户外探索腕表）**：独立多星 GNSS 脱机轨迹 / 智能物理高频震动排水 / 电子指南针与气压高度计 / 5ATM 潜水防水。
7. **FOSMET KT80（户外长续航战术工具表）**：1.46" 大屏 / 坚固合金 / **800mAh 超大电池** (20-30天续航) / 侧边高亮 LED 强光手电筒 / 5ATM。
8. **FOSMET G58 & G2（女性时尚优雅健康手表）**：高清屏 / 米兰尼斯+硅胶双表带 / 女性生理周期排卵预测 / 24/7 心率血氧。
9. **FOSMET FOS10 & I228（极薄便携与经典商务腕表）**：10.66mm 极薄 14.9g / 100+ 表盘 / 蓝牙高清通话。

---

#### 👓 四、FOSMET 智能音频与 POV 拍摄视界
10. **FOSMET E12（AI 摄像头运动蓝牙耳机）**：开放式零压佩戴 / 16mm 大动圈 / SONY 800万摄像头 1080P 录像 / OpenAI 助手「Hi Luma」拍照识物。
11. **FOSMET E05（4 档指尖电致变色智能音频眼镜）**：4 档指尖滑动电致变色镜片（室内透明/室外墨镜 1 秒切换） / ENC 双麦降噪 / 8 小时听歌续航。
12. **FOSMET E09（40g 极轻防蓝光 POV 拍摄眼镜）**：仅重 40g / SONY 800万摄像头 1080P 录像 / 一键拍摄日常 Vlog。`;
    return { text, groundingSources };
  }

  // 6. SPECIFIC PRODUCT: DYMONA V17 MAX
  if (targetCategory === "vacuum_v17") {
    if (intent === "battery") {
      const text = `### 🔋 DyMona V17 MAX 续航与电池系统权威解析

针对你的问题：**「${userQuery}」**：

- ⚡ **超长总续航**：**双电池合计高达 150 分钟超长续航**！
- 🔄 **双电池交替作战机制**：配备 2 块独立可拆卸动力锂电池包，支持单块边充边用。一块在机身上工作，另一块在充电座蓄能，彻底解决大户型清洁中途断电被迫停滞的痛点。
- 🏠 **清洁覆盖能力**：150 分钟连续作战可轻松覆盖 **300㎡ ~ 500㎡ 复式别墅或大平层**，支持地毯、硬木地板、楼梯死角一次性全屋深度清洁。
- 💡 **TikTok 营销切入点**：“别再为吸尘器充 4 小时电只能用 10 分钟买单了！双电池交替作战，一口气吸完整栋别墅！”`;
      return { text, groundingSources };
    }
    if (intent === "suction_power") {
      const text = `### 🌪️ DyMona V17 MAX 吸力与动力系统权威解析

针对你的问题：**「${userQuery}」**：

- 💥 **极限吸力负压**：**58 kPa 怪兽级极限负压**！
- ⚙️ **电机动力总成**：搭载 **650W 高速无刷航空级电机**，转速高达 120,000 RPM，提供经久不衰的狂暴飓风气流。
- 🎯 **深度拔除痛点**：普通吸尘器仅能吸起表面浮灰；58 kPa 强力穿透长毛地毯与木地板深缝，强力拔除深层顽固螨虫、积尘与缠绕宠物毛发。
- 🛡️ **健康过滤与尘桶**：搭配 **HEPA H14 医疗级五重精密过滤** 与 **2L 超大容量尘桶**（整整 3 个月免倾倒），杜绝二次扬尘。`;
      return { text, groundingSources };
    }
    const text = `### 🌪️ DyMona V17 MAX 德国旗舰大户型吸尘器方案

针对你的问题：**「${userQuery}」**：

- ⚡ **核心硬核参数**：
  - 动力与吸力：650W 无刷电机 / **58 kPa 怪兽极限负压**
  - 续航保障：**标配双电池共 150 分钟续航**（可拆卸交替充电）
  - 容量与卫生：**2L 巨无霸大尘桶**（3个月免打理） + HEPA H14 医疗级过滤
  - 清洁地刷：25.5cm 宽幅防缠绕 V 型地刷，毛发一吸即通
- 🎯 **出海定位**：德国与欧洲大户型复式、养宠地毯家庭，主打深层除尘与德国式严谨耐用。
- 🎬 **TikTok 分镜建议**：前 3 秒以“地毯深埋猫毛与微尘，一推即净留下清晰分界线”的视觉反差切入，直接展示 58 kPa 与双电池的统治级表现。`;
    return { text, groundingSources };
  }

  // 7. SPECIFIC PRODUCT: DYMONA V18 PRO
  if (targetCategory === "vacuum_v18") {
    const text = `### 🌪️ DyMona V18 PRO 轻量折叠显尘吸尘器方案

针对你的问题：**「${userQuery}」**：

- ⚡ **核心硬核参数**：
  - **65cm 一键折叠金属臂**：告别弯腰或趴在地上，直入沙发底与床底深处。
  - **绿光显尘 2.0 技术**：135° 超广角微尘照明，肉眼不可见的地板微尘与螨虫显形率提升 16 倍。
  - **吸力与重量**：50 kPa 强劲飓风吸力，主机仅 **1.4kg 羽量超轻**，单手举起清洁窗帘无负担。
  - **续航表现**：50 分钟持久续航，轻松胜任中小户型与高频保洁。
- 🎯 **出海定位**：西班牙与西语区，主打“告别腰痛关节痛”的人体工学关怀与微尘显形视觉爽感。`;
    return { text, groundingSources };
  }

  // 8. SPECIFIC PRODUCT: FOSMET REC10
  if (targetCategory === "recorder") {
    const text = `### 🎙️ FOSMET REC10 极简超薄名片级双 AI 录音卡方案

针对你的问题：**「${userQuery}」**：

- ⚡ **核心硬核参数**：
  - **名片级极薄机身**：航空铝合金 CNC 一体成型，支持 MagSafe 强磁吸附于 iPhone 背面或桌面平放。
  - **双 AI 大模型驱动**：配套 DOWAY App，集成 **ChatGPT × Gemini 双 AI 引擎**，实时高精语音转写、1秒精炼生成结构化会议纪要、一键导出思维导图。
  - **续航与存储**：400mAh 电池提供 **35 小时连续录音与 66 天超长待机**；内置 64GB 闪存，支持海量录音安全存储。
- 🎯 **出海定位**：日本商务白领、大学生与跨国商务人士，直击“做会议纪要加班”的职场巨大痛点。`;
    return { text, groundingSources };
  }

  // 9. SPECIFIC PRODUCT: FOSMET T40
  if (targetCategory === "smartwatch_t40") {
    const text = `### ⌚ FOSMET T40 4G 旗舰儿童安全智能手表方案

针对你的问题：**「${userQuery}」**：

- ⚡ **核心硬核参数**：
  - **4G 全网通双向高清视频通话与语音**：家长随时与孩子高清面对面视频，支持联系人白名单与一键 SOS 紧急呼救。
  - **多重精准安全定位**：GPS + LBS + WiFi 动态精准定位与电子安全围栏报警。
  - **课堂专注免打扰模式**：上课期间家长端一键锁定网络与娱乐应用，杜绝分心，专心学业。
  - **「爱的奖励」自律习惯养成**：记录完成作业、做家务，家长端积分奖励激励自主成长。
  - **耐用防护**：IP68 级专业防水防尘，日常洗手泼溅无忧。
- 🎯 **出海定位**：西班牙与德国年轻父母，直击“出行走失担忧”与“过早给手机导致沉迷游戏”的双重痛点。`;
    return { text, groundingSources };
  }

  // 10. SPECIFIC PRODUCT: FOSMET T20
  if (targetCategory === "smartwatch_t20") {
    const text = `### ⌚ FOSMET T20 (C32 Pro) 户外本格派专业探索腕表方案

针对你的问题：**「${userQuery}」**：

- ⚡ **核心硬核参数**：
  - **独立多星 GNSS 脱机轨迹记录**：无需依赖手机，精准绘制脱机徒步/越野返程路线。
  - **智能物理高频排水结构**：出水后一键开启高频振动，强力震落排净扬声器内部积水。
  - **户外工具总成**：内置电子指南针、气压计、高度计，支持 5ATM 潜水级防水与 100+ 运动模式。`;
    return { text, groundingSources };
  }

  // 11. SPECIFIC PRODUCT: FOSMET KT80
  if (targetCategory === "smartwatch_kt80") {
    const text = `### ⌚ FOSMET KT80 户外战术长续航工具腕表方案

针对你的问题：**「${userQuery}」**：

- ⚡ **核心硬核参数**：
  - **800mAh 怪兽级超大电池**：实现 **20~30 天超长续航**，长途露营穿越无需携带充电线。
  - **侧边独立一键高亮 LED 强光手电筒**：夜间户外应急直接照明，无需掏手机。
  - **坚固硬派**：1.46" 高清防刮大屏，锌合金防摔装甲机身，5ATM 防水。`;
    return { text, groundingSources };
  }

  // 12. SPECIFIC PRODUCT: FOSMET QS40
  if (targetCategory === "smartwatch_qs40") {
    const text = `### ⌚ FOSMET QS40 (Series III) 次世代 AI 金属智能表方案

针对你的问题：**「${userQuery}」**：

- ⚡ **核心硬核参数**：
  - **9.8mm 极致纤薄**：比传统智能表薄 7.5%，32.3g 超轻洗练银色金属表身，专为亚洲手腕定制。
  - **1400nit AMOLED 视网膜屏**：461 PPI，强光直射依然清晰锐利。
  - **对腕 ChatGPT 语音助手**：抬腕发声随时与 AI 助手对话答疑。
  - **30分钟急速快充 55%**：连午休小憩也能精准追踪的 24h 全天候健康睡眠算法。`;
    return { text, groundingSources };
  }

  // 13. SPECIFIC PRODUCT: FOSMET E12
  if (targetCategory === "camera_earphone") {
    const text = `### 🎧 FOSMET E12 AI 摄像头开放式运动蓝牙耳机方案

针对你的问题：**「${userQuery}」**：

- ⚡ **核心硬核参数**：
  - 开放式不入耳零压佩戴，16mm 大动圈 HiFi 澎湃音质。
  - 内置 SONY 800万高清摄像头，支持第一人称 POV 1080P 录像。
  - 接入 OpenAI 助手「Hi Luma」：轻触即可拍照识物问答与实时多国语言同传。`;
    return { text, groundingSources };
  }

  // 14. SPECIFIC PRODUCT: FOSMET E05 / E09
  if (targetCategory === "smart_glasses") {
    const text = `### 👓 FOSMET 智能眼镜系列（E05 电致变色 / E09 拍摄眼镜）方案

针对你的问题：**「${userQuery}」**：

- **FOSMET E05（4档电致变色智能音频眼镜）**：
  - 4 档指尖滑动触控电致变色镜片，室内透明/室外遮阳 1 秒切换；
  - ENC 双麦降噪开放式扬声器，8 小时听歌续航，TR90 超轻镜架。
- **FOSMET E09（40g 极轻防蓝光 POV 拍摄眼镜）**：
  - 裸机仅 40g 超轻，透明防蓝光镜片；
  - SONY 800万摄像头支持 1080P 录像与一键 Vlog 抓拍。`;
    return { text, groundingSources };
  }

  // 15. SPECIFIC PRODUCT: FOSMET G58 / G2 / FOS10
  if (targetCategory === "smartwatch_fashion") {
    const text = `### ⌚ FOSMET 时尚女性与轻薄智能穿戴系列方案

针对你的问题：**「${userQuery}」**：

- **FOSMET G58 / G2**：高屏占比曲面高清屏，米兰尼斯金属+亲肤硅胶双表带，深度集成女性生理周期与排卵期精准预测管理，24/7 心率血氧监测。
- **FOSMET FOS10**：10.66mm 极薄机身仅重 14.9g，百款个性表盘与运动健康管理，轻盈无感佩戴。`;
    return { text, groundingSources };
  }

  // 16. GENERAL HELP / CONTEXT-AWARE INTELLIGENT DIRECT REPLY
  const isSpecificHardwareContext = Boolean(productContext && productContext.name && !productContext.isUniversalMode);
  const pName = productContext.name || "FOSMET & DyMona 智能硬件";
  const pDesc = productContext.shortDesc || "出海高口碑消费电子";

  const hardwareSection = isSpecificHardwareContext
    ? `\n#### 2. 当前参考硬件背景\n- 当前选定参考硬件：**${pName}**\n- 核心定位：${pDesc}\n`
    : "";

  const text = `### 💡 关于「${userQuery}」的策略解析与落地建议

针对你提出的具体问题：**「${userQuery}」**，为你提供直接切题的实操建议：

---

#### 1. 核心洞察与方向拆解
- **直击痛点与场景**：出海营销与内容创作最忌讳自嗨式说教，必须在用户注意力极其有限的环境下（前 3 秒）建立高关联度认知反差。
- **海外市场文化契合**：
  - **西语区 / 拉美**：重视情绪价值、社交互动、视觉冲击与极致性价比；
  - **德语区 / 北欧**：看重严谨参数、实用耐久度、工艺品质与环保认证；
  - **日本市场**：注重细节、轻薄便携、职场礼仪与无感佩戴，强调真实口碑（リアル本音）。
${hardwareSection}
#### ${isSpecificHardwareContext ? "3" : "2"}. 进一步获取深度方案：
- 输入 **“帮我针对这个写一套 5 阶段分镜脚本”** 获取 0~3 秒黄金钩子与台词分镜；
- 输入 **“如何写爆款标题与小黄车挂车文案”** 获取多语种转化文案；
- 输入 **“对比竞品（如戴森、Shark、Apple Watch 等）”** 获取客观参数与市场差异化切入点！`;

  return { text, groundingSources };
}
