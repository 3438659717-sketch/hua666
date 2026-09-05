/**
 * High-Density Product-Aware Fallback Intelligence Engine
 * Supports universal cross-product querying, multi-product comparisons,
 * and deep multi-facet intent recognition (battery, suction, specs, scripts, localization).
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
}

export type TargetCategory =
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
  | "camera_earphone";

export type UserIntent =
  | "battery"
  | "suction_power"
  | "tiktok_script"
  | "localization"
  | "specs_detail"
  | "comparison"
  | "general";

export function detectQueryCategory(
  query: string,
  ctx: OfflineReplyOptions["productContext"]
): TargetCategory {
  const q = (query || "").toLowerCase();
  const c = `${ctx.id || ""} ${ctx.model || ""} ${ctx.name || ""} ${ctx.japaneseType || ""} ${ctx.shortDesc || ""}`.toLowerCase();

  // 1. Cross-Product Matrix or Catalog Overview
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

  // 2. Comparison between products
  if (
    q.includes("对比") ||
    q.includes("区别") ||
    q.includes("不同") ||
    q.includes("vs") ||
    q.includes("比较") ||
    (q.includes("v17") && q.includes("v18")) ||
    (q.includes("t20") && q.includes("kt80")) ||
    (q.includes("吸尘器") && q.includes("手表"))
  ) {
    return "comparison";
  }

  // 3. Specific Query Targeting - Prioritize what the user explicitly typed!
  if (q.includes("v17") || q.includes("v17 max") || q.includes("58kpa")) {
    return "vacuum_v17";
  }
  if (q.includes("v18") || q.includes("v18 pro") || q.includes("折叠臂") || q.includes("绿光显尘")) {
    return "vacuum_v18";
  }
  if (q.includes("吸尘器") || q.includes("dymona") || q.includes("aspiradora") || q.includes("staubsauger")) {
    if (c.includes("v18")) return "vacuum_v18";
    return "vacuum_v17";
  }
  if (q.includes("rec10") || q.includes("录音") || q.includes("レコーダー") || q.includes("recorder") || q.includes("会议纪要") || q.includes("doway")) {
    return "recorder";
  }
  if (q.includes("qs40") || q.includes("series iii") || q.includes("对腕chatgpt") || q.includes("洗练银色")) {
    return "smartwatch_qs40";
  }
  if (q.includes("t20") || q.includes("c32 pro") || q.includes("物理排水") || q.includes("gnss")) {
    return "smartwatch_t20";
  }
  if (q.includes("kt80") || q.includes("800mah") || q.includes("手电筒") || q.includes("5atm")) {
    return "smartwatch_kt80";
  }
  if (q.includes("t40") || q.includes("儿童手表") || q.includes("niños") || q.includes("kinder") || q.includes("课堂模式") || q.includes("爱的奖励") || q.includes("4g双向") || q.includes("4g通话")) {
    return "smartwatch_t40";
  }
  if (q.includes("e12") || q.includes("耳机") || q.includes("イヤホン") || q.includes("headphone") || q.includes("hi luma")) {
    return "camera_earphone";
  }
  if (q.includes("e05") || q.includes("e09") || q.includes("眼镜") || q.includes("メガネ") || q.includes("glasses") || q.includes("电致变色")) {
    return "smart_glasses";
  }
  if (q.includes("g58") || q.includes("g2") || q.includes("fos10") || q.includes("i228") || q.includes("女表") || q.includes("女性")) {
    return "smartwatch_fashion";
  }

  // 4. If query doesn't specify a product, fallback to the current module context!
  if (c.includes("t40")) return "smartwatch_t40";
  if (c.includes("v17")) return "vacuum_v17";
  if (c.includes("v18")) return "vacuum_v18";
  if (c.includes("aspiradora") || c.includes("staubsauger") || c.includes("吸尘器")) return "vacuum_general";
  if (c.includes("rec10") || c.includes("录音") || c.includes("recorder")) return "recorder";
  if (c.includes("qs40")) return "smartwatch_qs40";
  if (c.includes("t20")) return "smartwatch_t20";
  if (c.includes("kt80")) return "smartwatch_kt80";
  if (c.includes("e12")) return "camera_earphone";
  if (c.includes("e05") || c.includes("e09") || c.includes("眼镜")) return "smart_glasses";
  if (c.includes("g58") || c.includes("g2") || c.includes("fos10") || c.includes("i228") || c.includes("女性")) return "smartwatch_fashion";

  return "smartwatch_general";
}

export function detectUserIntent(query: string): UserIntent {
  const q = (query || "").toLowerCase();

  if (q.includes("续航") || q.includes("电池") || q.includes("充电") || q.includes("待机") || q.includes("能用多久") || q.includes("mah") || q.includes("时长") || q.includes("时间")) {
    return "battery";
  }
  if (q.includes("吸力") || q.includes("功率") || q.includes("电机") || q.includes("kpa") || q.includes("瓦") || q.includes("转速") || q.includes("风压")) {
    return "suction_power";
  }
  if (q.includes("分镜") || q.includes("脚本") || q.includes("钩子") || q.includes("视频") || q.includes("tiktok") || q.includes("神评") || q.includes("怎么拍") || q.includes("短视频") || q.includes("完播")) {
    return "tiktok_script";
  }
  if (q.includes("日语") || q.includes("日文") || q.includes("西语") || q.includes("西班牙语") || q.includes("德语") || q.includes("德文") || q.includes("英语") || q.includes("翻译") || q.includes("地道") || q.includes("母语") || q.includes("标题")) {
    return "localization";
  }
  if (q.includes("参数") || q.includes("配置") || q.includes("规格") || q.includes("芯片") || q.includes("传感器") || q.includes("屏幕") || q.includes("材质") || q.includes("重量") || q.includes("尺寸") || q.includes("防水") || q.includes("排水")) {
    return "specs_detail";
  }
  if (q.includes("对比") || q.includes("区别") || q.includes("选哪个") || q.includes("vs") || q.includes("比较")) {
    return "comparison";
  }

  return "general";
}

export function generateOfflineKnowledgeReply(options: OfflineReplyOptions): {
  text: string;
  groundingSources?: { title: string; uri: string }[];
} {
  const { userQuery, persona, productContext, enableSearchGrounding } = options;
  const targetCategory = detectQueryCategory(userQuery, productContext);
  const intent = detectUserIntent(userQuery);

  const groundingSources = enableSearchGrounding
    ? [
        {
          title: "TikTok Shop 全球出海消费电子品类大盘调研与爆款榜单",
          uri: "https://www.tiktok.com/tag/gadgets",
        },
        {
          title: "Google Trends 日本/欧洲消费电子趋势与竞品口碑洞察",
          uri: `https://trends.google.com/trends/explore?q=${encodeURIComponent(userQuery || "smart electronics")}`,
        },
      ]
    : [];

  let text = "";

  // -------------------------------------------------------------
  // INTENT-SPECIFIC DIRECT ANSWERS (Directly addressing user question!)
  // -------------------------------------------------------------

  // 1. BATTERY & RUNTIME SPECIFIC INTENT
  if (intent === "battery") {
    if (targetCategory === "vacuum_v17") {
      text = `### 🔋 DyMona V17 MAX 电池与续航规格深度解析

针对你的问题：**「${userQuery}」**，DyMona V17 MAX 的续航表现如下：

- ⚡ **双电池独立动力系统**：整机标配两组高倍率动力锂电池包，支持可拆卸互换充电。
- ⏱️ **综合续航长达 150 分钟**（单组电池可达 75 分钟持久运转）。
- 🌪️ **多档位精准续航表现**：
  - **ECO 节能档（日常浮尘）**：约 150 分钟（双电池累计）。
  - **AUTO 智能感应档（脏污自适应）**：约 80-100 分钟。
  - **MAX 极限怪兽档（58 kPa 全力输出）**：约 35-45 分钟，是同级手持吸尘器最高水准。
- 🏠 **户型覆盖能力**：双电充沛续航足以一次性彻底清扫 **500㎡ 超大平层或 3 层复式大别墅**，彻底消除“扫到一半断电”的电量焦虑。
- 🔌 **充电时间**：单块电池支持快速闪充，约 3.5 小时即可充满，并配备双充挂座。`;
      return { text, groundingSources };
    }

    if (targetCategory === "vacuum_v18") {
      text = `### 🔋 DyMona V18 PRO 电池与续航规格解析

针对你的问题：**「${userQuery}」**，DyMona V18 PRO 的续航与电池参数如下：

- ⚡ **电池配置**：采用新一代高能量密度轻量化锂电池组，整机重量仅 1.4kg。
- ⏱️ **标准全屋续航**：**50 分钟**连续强劲吸力，满足 120-180㎡ 户型的整屋全方位立体除尘。
- 💡 **配合绿光显尘 2.0 高效省电**：通过 135° 超广角微尘探照，精准定位顽固污渍，实现“靶向清扫”，避免无意义的反复推拉损耗电量。
- 🔌 **快充与收纳**：支持壁挂式一体化充电收纳，3 小时快速充满。`;
      return { text, groundingSources };
    }

    if (targetCategory === "recorder") {
      text = `### 🔋 FOSMET REC10 电池与超长续航深度解析

针对你的问题：**「${userQuery}」**，FOSMET REC10 的电源架构表现如下：

- 🔋 **电池容量**：内置 400mAh 定制高密度薄型聚合物锂电池。
- ⏱️ **连续高清录音**：长达 **35 小时**连续工作！可全程覆盖长达整周的高强度会议、商务谈判或学术研讨会。
- ⏳ **超长待机时长**：待机时间长达 **66 天**，放在公文包或吸在手机背面随时待命。
- ⚡ **存储与续航协同**：内置 64GB 闪存，可连续存储数百小时原声录音，配合 DOWAY App 云端 AI 同步，完全无需担心断电丢记录。
- 🔌 **充电方式**：磁吸闪充触点设计，约 45 分钟即可充满。`;
      return { text, groundingSources };
    }

    if (targetCategory === "smartwatch_kt80") {
      text = `### 🔋 FOSMET KT80 800mAh 怪兽级续航解析

针对你的问题：**「${userQuery}」**，FOSMET KT80 拥有同级最顶级的续航表现：

- 🔋 **800mAh 超大纯钴电池**：容量是普通智能手表的 2.5 倍以上。
- ⏱️ **综合续航数据**：
  - **日常全功能使用**：长达 **20 至 30 天**！
  - **超长节能待机模式**：高达 **60+ 天**！
  - **侧边高亮 LED 强光手电筒**：可持续点亮 8+ 小时，满足野外应急生存与扎营照明。
- 🏕️ **适用场景**：长线越野徒步、重装露营穿越，一整月出行无需携带充电线。`;
      return { text, groundingSources };
    }

    if (targetCategory === "smartwatch_t20") {
      text = `### 🔋 FOSMET T20 电池与户外续航解析

针对你的问题：**「${userQuery}」**：
- 🔋 **电池容量**：430mAh 耐低温聚合物电池。
- ⏱️ **续航表现**：日常全天候心率血氧监测与蓝牙通话模式下可达 **7-10 天**；独立多星 GNSS 持续搜星运动轨迹记录模式下可连续工作约 **18 小时**。`;
      return { text, groundingSources };
    }

    if (targetCategory === "smartwatch_t40") {
      text = `### 🔋 FOSMET T40 4G儿童手表续航与电量安全解析

针对你的问题：**「${userQuery}」**：
- 🔋 **续航时间**：搭载低功耗儿童专属架构芯片，日常 4G 网络待机可达 **3-5 天**；在全天候多重定位（GPS+LBS+WiFi）、日常 4G 双向视频通话及安全围栏高频上报模式下，续航可满足 **1-2 天** 完整使用。
- 🛡️ **安全快充与防爆电芯**：专为儿童体质配备安全磁吸充电口与阻燃聚合物电芯，充满自动断电防护，杜绝发热过温风险。`;
      return { text, groundingSources };
    }

    if (targetCategory === "smartwatch_qs40") {
      text = `### 🔋 FOSMET QS40 (Series III) 电池与快充解析

针对你的问题：**「${userQuery}」**：
- 🔋 **续航时间**：日常轻薄佩戴模式约 **7-10 天**，24h 包含午休小憩的科学睡眠全开约 **5-7 天**。
- ⚡ **急速快充**：搭载 30 分钟极速回血技术，30 分钟即可充入 55% 电量，早晨洗漱间隙即可充满全天所需电量。`;
      return { text, groundingSources };
    }
  }

  // 2. SUCTION & MOTOR SPECS INTENT
  if (intent === "suction_power") {
    if (targetCategory === "vacuum_v17" || targetCategory === "vacuum_general") {
      text = `### 🌪️ DyMona V17 MAX 吸力与电机技术规格

针对你的问题：**「${userQuery}」**，DyMona V17 MAX 的吸力与动力总成参数如下：

- ⚡ **真空负压吸力**：**58 kPa (58,000 Pa)** 极限怪兽吸力，位列家用手持无线吸尘器行业第一梯队！
- ⚙️ **电机配置**：**650W 航空级无刷变频电机**，转速高达 130,000 RPM，提供持续不衰减的飓风吸力。
- 🧹 **地面实测表现**：
  - 深层厚绒地毯：一推即彻底吸净夹杂在缝隙中的猫砂、陈年螨虫皮屑与深层粉尘。
  - 缝隙大颗粒：甚至能够轻松拔起保龄球或大颗粒坚果壳。
- 🛡️ **防衰减过滤**：多锥旋风分离技术 + HEPA H14 级医疗过滤，排风洁净度达 99.99%，强吸力不堵塞。`;
      return { text, groundingSources };
    }

    if (targetCategory === "vacuum_v18") {
      text = `### 🌪️ DyMona V18 PRO 吸力与动力技术规格

针对你的问题：**「${userQuery}」**：
- ⚡ **真空吸力**：**50 kPa (50,000 Pa)** 强劲飓风吸力。
- ⚙️ **电机配置**：450W 高速轻量化无刷电机，兼顾高转速与超轻量机身（整机仅 1.4kg）。
- 🟢 **绿光显尘 2.0 联动**：135° 广角微尘显形，让 50kPa 强劲吸力精准消灭每一粒潜藏微尘。`;
      return { text, groundingSources };
    }
  }

  // 3. COMPARISON INTENT
  if (intent === "comparison" || targetCategory === "comparison") {
    const isComparingVacuums = userQuery.includes("v17") || userQuery.includes("v18") || userQuery.includes("吸尘器") || targetCategory.includes("vacuum");
    const isComparingWatches = userQuery.includes("t20") || userQuery.includes("kt80") || userQuery.includes("qs40") || userQuery.includes("手表") || targetCategory.includes("smartwatch");

    if (isComparingVacuums) {
      text = `### ⚖️ DyMona 双旗舰吸尘器深度对比：V17 MAX vs V18 PRO

针对你的对比需求：**「${userQuery}」**，为你梳理核心参数与出海定位差异：

| 核心维度 | DyMona V17 MAX (德语区/大户型旗舰) | DyMona V18 PRO (西语区/轻量折叠旗舰) |
| :--- | :--- | :--- |
| **核心定位** | 500㎡ 大户型复式楼、深度毛发清洁怪兽 | 极致灵活、免弯腰床底清洁、显尘健康神器 |
| **真空吸力** | **58 kPa 极限怪兽吸力** (650W 无刷电机) | **50 kPa 强劲飓风吸力** (450W 高速电机) |
| **电池与续航** | **双电池系统，长达 150 分钟不间断** | 单电池高密度，50 分钟全屋续航 |
| **集尘桶容量** | **2.0 L 超大尘桶** (3个月仅需倾倒一次) | 1.2 L 易倒尘桶 (一键底部卸尘) |
| **独特黑科技** | 25.5cm 防缠绕 V 型滚刷 + HEPA H14 级医疗过滤 | **65cm 可折叠金属臂免弯腰** + **绿光显尘 2.0 (135°广角)** |
| **整机重量** | 约 2.6kg (沉稳高配) | **仅 1.4kg 羽量超轻** (单手举起吸窗帘) |
| **主打市场** | 德国、奥地利、瑞士 (追求严谨大吸力与长续航) | 西班牙、墨西哥、意大利 (追求轻便与免弯腰) |

#### 🎯 选品与投流建议：
1. **推 V17 MAX**：主打「养宠深层掉毛」与「大复式整屋清洁」，前 3 秒以地毯深层杂物被 58kPa 瞬间秒吞为视觉冲击。
2. **推 V18 PRO**：主打「老人腰痛不必跪爬」与「关灯见微尘」，前 3 秒以绿光扫过看似干净的地板却现出千万螨虫微尘为反转。`;
      return { text, groundingSources };
    }

    if (isComparingWatches) {
      text = `### ⚖️ FOSMET 户外智能手表深度对比：T20 vs KT80

针对你的对比需求：**「${userQuery}」**，为你梳理 T20 与 KT80 的差异化卖点：

| 核心维度 | FOSMET T20 (本格派专业运动) | FOSMET KT80 (硬核战术长续航) |
| :--- | :--- | :--- |
| **独立卫星定位** | **具备多星 GNSS 独立脱机轨迹记录** | 联动手机 GPS 记录轨迹 |
| **独特黑科技** | **智能物理高频排水** + 电子指南针/气压高度计 | **侧边独立高亮 LED 强光手电筒** |
| **电池与续航** | 430mAh 聚合物电池 (日常 7-10 天) | **800mAh 超大电池** (日常 20-30 天长续航) |
| **防水等级** | 5ATM 潜水级抗水 | 5ATM 潜水级抗水 |
| **外观风格** | 洗练专业仪表盘造型 (双色表圈) | 坚固银色重装铠甲造型 (1.46" 大屏) |
| **核心人群** | 越野跑、登山、徒步探险、经常涉水游泳者 | 露营爱好者、夜跑夜行者、极度追求长续航的用户 |`;
      return { text, groundingSources };
    }
  }

  // 3.5. TIKTOK VIRAL SCRIPT & STORYBOARD INTENT (Directly addressing script requests!)
  if (intent === "tiktok_script") {
    if (targetCategory === "vacuum_v17") {
      text = `### 🎬 DyMona V17 MAX：TikTok 黄金3秒痛点反转分镜脚本

针对你的短视频分镜需求：**「${userQuery}」**，为你定制适合欧洲与大户型养宠市场的爆款脚本：

---

#### 📌 脚本概览
- **视频时长**：25 - 30 秒（极速完播黄金区间）
- **目标人群**：德国/欧洲大户型业主、养猫养狗家庭、深层地毯重度清洁者
- **BGM 建议**：前 3 秒压抑低沉心跳音效，第 4 秒卡点切换为超燃高节奏 Phonk / Trap 重低音

---

#### 🎞️ 分镜台词与画面排布

| 镜头编号 | 画面描述 (Visual) | 动作与特效 (Action & FX) | 旁白 / 台词 (Voiceover / Text on Screen) |
| :--- | :--- | :--- | :--- |
| **01 (0-3s)**<br>💥 **黄金钩子** | 特写镜头：长毛地毯上撒满混杂的狗毛、猫砂与饼干碎，传统吸尘器推过去不仅没吸干净还卡住冒烟。 | 画面灰暗，主角双手抱头做出崩溃叹气动作。屏幕中央大红字闪烁。 | *「如果你家也超过 150㎡ 还养宠物，千万别买普通吸尘器，简直是折磨！」*<br>*(Text: 99% von euch machen diesen Fehler!)* |
| **02 (3-9s)**<br>🌪️ **吸力怪兽登场** | 镜头瞬间提亮！DyMona V17 MAX 登场，推进地毯，58 kPa 怪兽吸力所过之处，深层毛发与猫砂被“瞬间暴风吸入”，留下一道极其分明的洁净分界线！ | 极度解压 ASMR 真实吸尘原声！特写地刷透明视窗，无缠绕高速飞转。 | *「换上 DyMona V17 MAX！650W 航空无刷电机，58 kPa 怪兽吸力，一推彻底吸穿地毯缝隙！」* |
| **03 (9-17s)**<br>🔋 **双电池+大尘桶** | 画面切换：主角从容拆装第二块电池；接着展示 2L 超大尘桶与传统小尘桶对比，三个月无需倒灰。 | 快速蒙太奇：一口气推过客厅、复式楼梯、主卧，电量依然满格。 | *「最爽的是标配双电池，长达 150 分钟不断电，500㎡ 大平层一口气扫完！2L 超大尘桶 3 个月倒一次灰！」* |
| **04 (17-25s)**<br>🛒 **强力促单 CTA** | 主角轻松单手提起吸尘器，地板一尘不染，宠物惬意躺在地毯上打滚。 | 镜头拉近黄车/Bio链接指引，弹出限时 20% OFF 折扣标签。 | *「本周 TikTok Shop 专属补贴开启，点击左下角小黄车，把 58kPa 大怪兽带回家！」* |

---
💡 **评论区置顶神评**：*„终于不用扫到一半到处找插座充电了，双电池+58kPa吸力吸地毯真的绝绝子！现在下单还有专属赠品！“*`;
      return { text, groundingSources };
    }

    if (targetCategory === "vacuum_v18") {
      text = `### 🎬 DyMona V18 PRO：TikTok 免弯腰显尘痛点反转分镜脚本

针对你的短视频分镜需求：**「${userQuery}」**，为你定制高转化爆款短视频方案：

---

#### 📌 脚本概览
- **视频时长**：20 - 25 秒
- **核心痛点**：长期弯腰擦床底腰痛 + 白天肉眼看不见的隐形微尘与尘螨
- **BGM 建议**：悬疑神秘音效切入，开灯瞬间切换为极度轻快的解压流行节奏

---

#### 🎞️ 分镜台词与画面排布

| 镜头编号 | 画面描述 (Visual) | 动作与特效 (Action & FX) | 旁白 / 台词 (Voiceover / Text on Screen) |
| :--- | :--- | :--- | :--- |
| **01 (0-3s)**<br>💥 **黄金钩子** | 主角痛苦地跪在地上，试图趴下去用老式拖把够床底，腰部发出咔咔声，表情痛苦不堪。 | 慢动作特写主角痛苦捂腰，红叉音效提示。大字标题弹出。 | *「停下！别再跪在地上用老旧吸尘器折磨你的腰了！」*<br>*(Text: ¡No te rompas la espalda nunca más!)* |
| **02 (3-10s)**<br>🪄 **一键折叠神操作** | 主角站立优雅直立，手指轻轻按下金属管按键，65cm 折叠金属臂瞬间“90度弯折”，直挺挺滑进 8cm 低矮床底深处！ | 顺畅机械结构卡扣音效，直入床底全程无需弯腰。 | *「DyMona V18 PRO 独家 65cm 一键折叠金属臂，站着不动就能直达床底最深处！」* |
| **03 (10-18s)**<br>🟢 **绿光显尘震撼反转** | 关掉房间顶灯，地刷 135° 广角绿光 2.0 骤然射出！原本看似干净的地板上，成千上万潜藏的细微毛屑、螨虫皮屑无所遁形！ | 绿光高对比度视觉冲击！50 kPa 强吸力一推即净。 | *「不仅如此，打开 135° 绿光显尘，隐形微尘瞬间现形，50kPa 强吸力让脏东西无处可逃！」* |
| **04 (18-24s)**<br>🛒 **轻量与转化 CTA** | 主角单手仅用两根手指轻松举起仅 1.4kg 的整机，吸完窗帘后对准镜头微笑。 | 屏幕弹出购买引导箭头与限时特惠标。 | *「整机才 1.4kg，单手轻松搞定全屋！趁着 TikTok Shop 大促，点击下方链接立即体验！」* |`;
      return { text, groundingSources };
    }

    if (targetCategory === "recorder") {
      text = `### 🎬 FOSMET REC10：TikTok 职场生产力神级卡片分镜脚本

针对你的短视频分镜需求：**「${userQuery}」**，为你定制日本与海外职场爆款分镜：

---

#### 📌 脚本概览
- **视频时长**：20 - 25 秒
- **痛点核心**：冗长跨国会议手敲纪要痛苦加班 -> 磁吸卡片 1 秒生成思维导图与会议纪要
- **BGM 建议**：清脆干练的 Lo-Fi 生产力节拍，突出高智商职场精英氛围

---

#### 🎞️ 分镜台词与画面排布

| 镜头编号 | 画面描述 (Visual) | 动作与特效 (Action & FX) | 旁白 / 台词 (Voiceover / Text on Screen) |
| :--- | :--- | :--- | :--- |
| **01 (0-3s)**<br>💥 **黄金钩子** | 主角面对电脑疯狂敲键盘，桌上放满凌乱草稿纸，时钟显示深夜 11 点，同事却早已下班。 | 画面镜头推近主角疲惫双眼，红色大字醒目标注。 | *「2026年了，你还在开会手动敲纪要加班到半夜吗？」*<br>*(Text: まだ手作業で議事録作ってるの？)* |
| **02 (3-10s)**<br>💳 **名片极薄 MagSafe** | 从衬衫口袋抽出一张名片大小的超薄铝合金卡片，“咔哒”一声紧密吸附在 iPhone 手机背面，质感拉满。 | 清脆磁吸音效 + 金属光泽反光。 | *「看看日本职场都在用的 FOSMET REC10！名片级极薄铝合金，MagSafe 磁吸一贴即合。」* |
| **03 (10-18s)**<br>🤖 **双 AI 纪要神技** | 手机 DOWAY App 界面展示：会议语音实时高精转写，点击「一键总结」，ChatGPT × Gemini 双 AI 引擎 1 秒吐出结构化会议要点与全彩思维导图！ | 画面加速动态生成思维导图，主角潇洒合上笔记本电脑。 | *「内置 400mAh 电池连录 35 小时！不仅实时转写，双 AI 引擎一秒提炼纪要并生成思维导图，直接导出发老板！」* |
| **04 (18-24s)**<br>🛒 **生产力 CTA** | 主角轻松喝着咖啡准点打卡下班，自信离场。 | 画面弹出 App 界面截图与折扣倒计时。 | *「拯救职场人的终极生产力神器，点击左下角链接，告别低效加班！」* |`;
      return { text, groundingSources };
    }

    if (targetCategory === "smartwatch_t40") {
      text = `### 🎬 FOSMET T40：TikTok 4G 儿童安全手表高转化分镜脚本

针对你的短视频分镜需求：**「${userQuery}」**，为你定制适合西班牙与德国年轻父母群体的爆款脚本：

---

#### 📌 脚本概览
- **视频时长**：20 - 25 秒（极速完播黄金区间）
- **目标人群**：西班牙与德国 25-45 岁有学龄子女的父母群体
- **痛点核心**：外出走失焦虑 / 过早给手机导致沉迷短视频游戏 -> 4G 高清双向视频 + GPS 三重精准定位 + 课堂专注模式
- **BGM 建议**：温馨轻快节奏（Warm Upbeat Acoustic / Lo-Fi Family Beats）

---

#### 🎞️ 分镜台词与画面排布

| 镜头编号 | 画面描述 (Visual) | 动作与特效 (Action & FX) | 旁白 / 台词 (Voiceover / Text on Screen) |
| :--- | :--- | :--- | :--- |
| **01 (0-3s)**<br>💥 **黄金钩子** | 妈妈在商场或公园回头，突然发现孩子不在视线内，表情焦虑万分，双手慌张翻找手机。 | 画面镜头推近妈妈焦虑特写，红色心跳警示音效。大字醒目标注。 | *「给孩子手机怕他沉迷游戏，不给又怕走丢？你一定要看看这个！」*<br>*(Text: ¿Miedo a perder de vista a tus hijos?)* |
| **02 (3-10s)**<br>📍 **GPS+4G 实时守护** | 妈妈低头打开手机 App，屏幕秒级显示高精度定位地图（GPS+LBS+WiFi三重定位），一键发起 4G 高清双向视频通话！孩子腕上的 FOSMET T40 响起，孩子开心地向妈妈挥手汇报位置。 | 4G 视频通话高清画质特写，双向语音清晰无杂音。 | *「FOSMET T40 4G 儿童智能手表！GPS+WiFi 多重定位，随时随地 4G 高清视频连线，孩子在哪一目了然！」* |
| **03 (10-18s)**<br>🎒 **课堂模式+爱的奖励** | 教室上课场景：手表自动进入「课堂模式」，屏幕锁闭通讯防沉迷；放学回家孩子主动扫地做家务，手表弹出「爱的奖励」红心与点赞。 | 画面展示 IP68 防水洗手泼溅特写，无惧日常玩水。 | *「上课开启课堂模式，杜绝玩表分心；独家爱的奖励功能，激励孩子主动做家务！更有 IP68 防水无惧泼溅。」* |
| **04 (18-24s)**<br>🛒 **安心促单 CTA** | 妈妈紧紧抱住孩子，孩子戴着手表开心比心，左下角弹出折扣与保障标签。 | 醒目箭头指引左下角小黄车与促销优惠券。 | *「守护孩子安全成长的第一块智能手表，点击左下角小黄车，享专属限时早鸟优惠！」* |

---
💡 **评论区置顶神评**：*„终于不用担心孩子在外面乱跑了，定位超级准，4G视频也很清晰，而且没有游戏不怕沉迷！“*`;
      return { text, groundingSources };
    }

    // Default product-aware script
    text = `### 🎬 ${productContext.name || "FOSMET / DyMona"}：TikTok 高转化完播分镜脚本方案

针对你的问题：**「${userQuery}」**，为你量身定制当前产品的爆款短视频脚本：

- 🎯 **视频目标**：前 3 秒打碎用户注意力惯性（Pattern Interrupt），5-15 秒展示不可替代的技术参数差异，最后 5 秒精准促单。
- 🎵 **配乐节奏**：前奏 3 秒悬疑心跳 -> 节奏卡点鼓点 -> 尾部轻快上扬。

#### 🎞️ 分镜设计表
1. **【0-3 秒 · 视觉打破钩子】**：
   - 画面：直击用户最深恶痛绝的日常痛点场景（如杂乱难以清理、会议繁琐、运动不便）。
   - 台词：*「如果你还在用传统方式解决这个问题，那你的成本高了整整 10 倍！」*
2. **【3-10 秒 · 独家卖点反差】**：
   - 画面：特写当前产品【${productContext.name || "产品"}】的独家黑科技亮点（如${(productContext.highlights || ["核心参数优势"]).slice(0, 2).join("、")}）。
   - 台词：*「看看这个专门解决痛点的黑科技，不仅性能翻倍，体验更是直接拉满！」*
3. **【10-18 秒 · 极度解压与实测证言】**：
   - 画面：展示真实实测效果对比，突出关键参数（如${(productContext.specs || []).slice(0, 2).map(s => `${s.label}: ${s.value}`).join(" / ") || "同级最强配置"}）。
   - 台词：*「无需繁琐操作，一次彻底搞定，这才是 2026 年该有的智能体验。」*
4. **【18-25 秒 · 强力促单 CTA】**：
   - 画面：主角满意微笑，手势指引下方小黄车 / 购买链接，弹出限时早鸟优惠标签。
   - 台词：*「点击左下角小黄车立即抢购，库存有限，先到先得！」*`;
    return { text, groundingSources };
  }

  // 3.8. SPECS & TECHNICAL BREAKDOWN INTENT
  if (intent === "specs_detail") {
    text = `### ⚡ ${productContext.name || "FOSMET / DyMona"} 核心工程技术参数深度拆解

针对你的参数与规格咨询：**「${userQuery}」**，为你提供权威硬核技术拆解：

- 🏷️ **产品名称**：${productContext.name || "智能硬件"} (${productContext.brand || "FOSMET"} ${productContext.model || ""})
- 🌐 **目标海外市场**：${productContext.japaneseType || "全球出海跨国市场"}
- 💡 **核心定位**：${productContext.shortDesc || "出海高口碑消费电子"}

#### 📋 官方硬核技术参数明细表：
${(productContext.specs || [
  { label: "制造工艺", value: "航空级轻量化合金材料 / 精密注塑" },
  { label: "连接协议", value: "BLE 5.3 高清低功耗传输" },
  { label: "续航能力", value: "新一代高能量密度电池" },
  { label: "防护等级", value: "多重严苛工业级防水防尘认证" },
]).map((s: any) => `- **${s.label}**：\`${s.value}\``).join("\n")}

#### 🎯 FABE 销售转化法则拆解（如何把参数讲成人人疯抢的卖点）：
1. **Feature（特征）**：具备同级最强硬核参数配置。
2. **Advantage（优势）**：对比欧美/日本同类高价竞品，具备降维打击级的性价比与技术代差。
3. **Benefit（利益）**：用户无需忍受老旧竞品的繁琐体验，真正获得省心、省力、高颜值的品质生活。
4. **Evidence（证据）**：全网真实海外用户好评与官方严苛质检报告支撑。`;
    return { text, groundingSources };
  }

  // 4. LOCALIZATION & FOREIGN COPY INTENT
  if (intent === "localization") {
    if (targetCategory === "vacuum_v17") {
      text = `### 🇩🇪 DyMona V17 MAX 德国母语级爆款文案与地道表达

针对你的需求：**「${userQuery}」**，为你提供直击德国消费者的地道文案方案：

#### 1. 德语 3 组高转化短视频爆款标题
- **角度 1（大吸力反差）**：*„58 kPa Monster-Saugkraft! Warum mein alter Staubsauger gegen Tierhaare im Teppich völlig versagt hat.“*
  - 中文释义：58 kPa 怪兽级吸力！为什么我之前的吸尘器在地毯宠物毛发面前彻底败下阵来。
- **角度 2（双电池超长续航）**：*„Doppel-Akku mit 150 Minuten Laufzeit: Endlich 500m² ohne Ladepause tiefenreinigen!“*
  - 中文释义：双电池 150 分钟长续航：终于能一口气深度清洁 500㎡ 大户型，告别断电烦恼！
- **角度 3（大尘桶免打理）**：*„2L XXL-Staubbehälter – 3 Monate lang kein lästiges Ausleeren mehr.“*
  - 中文释义：2L 超大尘桶——整整 3 个月不用频繁倾倒垃圾。

#### 2. 德国市场地道心理学术语建议
- 突出 **„Gründlichkeit“**（德国人极度重视的彻底、一丝不苟的深度清洁感）。
- 突出 **„Ohne Unterbrechung“**（不中断的连续工效感）。`;
      return { text, groundingSources };
    }

    if (targetCategory === "vacuum_v18") {
      text = `### 🇪🇸 DyMona V18 PRO 西班牙语地道文案方案

针对你的需求：**「${userQuery}」**：
- **标题 1（免弯腰痛点）**：*„¡Adiós al dolor de espalda! El brazo articulado que llega debajo de la cama sin agacharse.“*
  - 释义：告别腰痛！折叠金属臂无需弯腰直达床底。
- **标题 2（绿光显尘）**：*„Luz verde 2.0: Apaga la luz y alucina con el polvo invisible de tu suelo.“*
  - 释义：绿光显尘 2.0：关掉顶灯，见证地板上肉眼不可见的隐形微尘。`;
      return { text, groundingSources };
    }

    if (targetCategory === "smartwatch_t40") {
      text = `### 🇪🇸 🇩🇪 FOSMET T40 西班牙语与德语母语级爆款文案方案

针对你的多语言本地化需求：**「${userQuery}」**，为你提供直击西班牙与德国年轻父母痛点的母语级文案：

#### 1. 西班牙语 (Español) 高转化爆款标题与短视频文案
- **角度 1（安全防走丢痛点反转）**：*„¿Miedo a perder de vista a tus hijos en el parque? Con el FOSMET T40 tienes videollamada 4G y GPS exacto en tiempo real.“*
  - 中文释义：担心在公园里看不见孩子？有了 FOSMET T40，4G 视频通话与实时精准 GPS 随时随地守护。
- **角度 2（课堂专注无网防沉迷）**：*„Sin juegos adictivos: El modo clase bloquea internet para que se concentren en la escuela mientras tú estás tranquila.“*
  - 中文释义：无沉迷游戏：课堂模式锁闭网络让孩子专注学业，家长百分百安心。
- **角度 3（良好习惯自律奖励）**：*„La función «Recompensas de amor» que hace que hagan los deberes solos y felices.“*
  - 中文释义：「爱的奖励」功能让孩子主动、开心地完成作业。
- 🏷️ **官方标签**：#FOSMET #T40 #españa #Niños #relojinteligente

#### 2. 德语 (Deutsch) 严谨实用文案
- **角度 1（精准安全定位）**：*„Sicherheit fürs Kind, Ruhe für die Eltern: FOSMET T40 4G Kinder-Smartwatch mit GPS-Echtzeitortung & SOS-Taste.“*
  - 中文释义：孩子安全，家长安心：配备 GPS 实时定位与 SOS 按钮的 FOSMET T40 4G 儿童智能手表。
- **角度 2（专注学业与课堂模式）**：*„Schulmodus ohne Ablenkung: Zuverlässige 4G-Videotelefonie und IP68 wasserdicht für den Alltag.“*
  - 中文释义：无干扰课堂模式：可靠的 4G 视频通话与 IP68 日常防水。`;
      return { text, groundingSources };
    }

    if (targetCategory === "recorder" || targetCategory === "smartwatch_qs40") {
      text = `### 🇯🇵 日本市场母语级「神コスパ」文案方案

针对你的需求：**「${userQuery}」**：
- **文案 1**：*「会議の議事録で残業するのはもう終わり。ChatGPT×Geminiが1秒でマインドマップ化！」*
  - 释义：做会议纪要加班的日子结束了。双 AI 引擎 1 秒自动生成思维导图！
- **文案 2**：*「薄さわずか9.8mm、手首に話しかけるだけでChatGPTが即答！1万円以下の神コスパスマートウォッチ。」*
  - 释义：仅 9.8mm 超薄，对腕发声 ChatGPT 秒级解答！不到 1 万日元的神级性价比手表。`;
      return { text, groundingSources };
    }
  }

  // 5. MATRIX OVERVIEW
  if (targetCategory === "matrix_overview") {
    text = `### 🌐 FOSMET & DyMona 全品类出海产品矩阵总览与战略布局

针对你的全品类查询：**「${userQuery}」**，为你系统整理当前品牌旗下 **14 款出海爆款智能硬件** 的核心定位与爆破点：

---

#### 🌪️ 一、DyMona 智能清洁家电矩阵（欧洲大户型与痛点清洁）
1. **DyMona V17 MAX（德国/欧洲 旗舰大户型王者）**
   - 核心配置：650W 无刷电机 / 58 kPa 怪兽吸力 / 双电池 150 分钟续航 / 2L 大尘桶 / HEPA H14 医疗过滤。
   - 主打人群：500㎡ 大户型复式楼、养宠家庭、深层地毯除毛。
2. **DyMona V18 PRO（西班牙/拉美 灵活轻量折叠旗舰）**
   - 核心配置：65cm 一键折叠金属臂免弯腰 / 绿光显尘 2.0 (135°广角) / 50 kPa 强吸力 / 1.4kg 羽量超轻。
   - 主打人群：腰椎不适者、日常快速保洁、健康无尘家庭。

---

#### 🎙️ 二、FOSMET AI 效率工具系列（日本商务/学习生产力）
3. **FOSMET REC10（超薄名片级双 AI 录音卡）**
   - 核心配置：名片极薄厚度 / MagSafe 手机磁吸与桌面平放 / 400mAh 电池（35h 连续录音、66天待机） / 64GB 闪存 / ChatGPT × Gemini 双 AI 驱动 (DOWAY App)。
   - 核心功能：实时高精语音转写、一秒会议纪要、一键生成思维导图。

---

#### ⌚ 三、FOSMET 智能穿戴矩阵（日本/欧美/拉美）
4. **FOSMET T40 —— 4G 旗舰儿童安全守护智能手表（西班牙/德国）**：4G 全网通高清双向视频与语音聊天 / GPS+LBS+WiFi 三重精准定位 / 课堂专注免打扰模式 / 爱的奖励习惯养成 / IP68 级防水 / 一键 SOS 紧急求助。
5. **FOSMET QS40 (Series III) —— 次世代 AI 金属智能表**：9.8mm 超薄银色金属 / 1400nit AMOLED 屏 / 对腕 ChatGPT 语音助手 / 30分钟快充 55% / 连午休小憩也能监测的精准睡眠。
6. **FOSMET T20 (C32 Pro) —— 户外硬核本格派探索腕表**：独立多星 GNSS 脱机轨迹 / 智能物理高频振动排水 / 电子指南针与气压高度计 / 5ATM 潜水防水。
7. **FOSMET KT80 —— 户外长续航战术工具腕表**：1.46" 大屏 / 坚固合金 / 800mAh 超大电池 (20-30天续航) / 侧边高亮 LED 强光手电筒 / 5ATM。
8. **FOSMET G58 & G2 —— 时尚女性优雅健康手表**：高清屏 / 米兰尼斯+硅胶双表带 / 女性生理周期排卵预测 / 24/7 心率血氧。
9. **FOSMET FOS10 & I228 —— 极薄便携与经典商务腕表**：10.66mm 极薄 14.9g / 100+ 表盘 / 蓝牙高清通话。

---

#### 👓 四、FOSMET 智能音频与拍摄视界（第一视角 Vlog 潮品）
10. **FOSMET E12 —— AI 摄像头运动蓝牙耳机**：开放式零压佩戴 / 16mm 大动圈 / SONY 800万摄像头 1080P 录像 / OpenAI 助手「Hi Luma」拍照识物。
11. **FOSMET E05 —— 4 档指尖电致变色智能音频眼镜**：4 档指尖滑动电致变色镜片（室内透明/室外墨镜 1 秒切换） / ENC 双麦降噪 / 8 小时听歌续航。
12. **FOSMET E09 —— 40g 极轻防蓝光 POV 拍摄眼镜**：仅重 40g / SONY 800万摄像头 1080P 录像 / 一键拍摄日常 Vlog。`;
    return { text, groundingSources };
  }

  // 6. DEFAULT PRODUCT-SPECIFIC COMPREHENSIVE ANSWER
  if (targetCategory === "smartwatch_t40") {
    text = `### ⌚ FOSMET T40 4G 儿童安全手表全面方案
针对你的问题：**「${userQuery}」**：
- ⚡ **核心参数**：**4G 全网通高清双向视频与语音聊天** / **GPS+LBS+WiFi 三重精准动态定位** / **IP68 级专业防水** / 联系人白名单与一键 SOS 紧急呼救。
- 🎒 **学习与生活管家**：
  - **课堂专注模式**：上课期间自动锁定通讯与互联网访问，让孩子专注学业；
  - **「爱的奖励」体系**：家长端 App 一键给赞与积分，激励主动完成作业与日常家务；
  - **健康与习惯**：内置高精计步器、睡眠监测与高清拍摄相机。
- 🎯 **出海定位**：西班牙与德国市场，直击欧洲年轻父母对「孩子出行走失焦虑」与「过早给智能手机导致沉迷」的双重痛点。`;
    return { text, groundingSources };
  }

  if (targetCategory === "vacuum_v17") {
    text = `### 🌪️ DyMona V17 MAX 旗舰吸尘器方案
针对你的问题：**「${userQuery}」**：
- ⚡ **核心参数**：650W 航空级无刷电机 / **58 kPa** 怪兽极限负压 / **双电池 150 分钟**长效续航 / **2L** 超大尘桶。
- 🎯 **出海定位**：德国/欧洲大户型复式、养宠地毯家庭，主打深层除尘与工艺严谨。
- 🎬 **短视频建议**：前 3 秒以地毯深层散落猫砂一推即净的视觉反差切入，引出 58kPa 与免倾倒大尘桶。`;
    return { text, groundingSources };
  }

  if (targetCategory === "vacuum_v18") {
    text = `### 🌪️ DyMona V18 PRO 轻量折叠吸尘器方案
针对你的问题：**「${userQuery}」**：
- ⚡ **核心参数**：**65cm 一键折叠金属臂**（免弯腰直入床底） / **绿光显尘 2.0**（135°广角微尘探照） / 50 kPa 强吸力 / 仅 1.4kg 超轻机身。
- 🎯 **出海定位**：西班牙/拉美，主打腰痛关怀与暗处微尘一照即现。`;
    return { text, groundingSources };
  }

  if (targetCategory === "recorder") {
    text = `### 🎙️ FOSMET REC10 AI 录音卡片方案
针对你的问题：**「${userQuery}」**：
- ⚡ **核心参数**：名片级极薄铝合金 / MagSafe 磁吸 / **400mAh 电池（35 小时录音、66 天待机）** / 64GB 存储 / **ChatGPT × Gemini 双 AI 驱动**。
- 🎯 **核心价值**：实时高精转写，1 秒生成精炼会议纪要与思维导图，彻底解放职场加班。`;
    return { text, groundingSources };
  }

  if (targetCategory === "smartwatch_t20") {
    text = `### ⌚ FOSMET T20 户外专业硬核腕表方案
针对你的问题：**「${userQuery}」**：
- ⚡ **核心参数**：**独立多星 GNSS 脱机轨迹记录**（无需手机） / **智能物理高频排水技术** / 电子指南针与气压高度计 / 5ATM 潜水级抗水。`;
    return { text, groundingSources };
  }

  if (targetCategory === "smartwatch_kt80") {
    text = `### ⌚ FOSMET KT80 战术长续航工具表方案
针对你的问题：**「${userQuery}」**：
- ⚡ **核心参数**：**800mAh 超大电池（20-30 天长续航）** / **侧边独立一键高亮 LED 强光手电筒** / 1.46" 大屏坚固机身 / 5ATM 防水。`;
    return { text, groundingSources };
  }

  if (targetCategory === "smartwatch_qs40") {
    text = `### ⌚ FOSMET QS40 (Series III) AI 智能表方案
针对你的问题：**「${userQuery}」**：
- ⚡ **核心参数**：**9.8mm 超薄洗练银色金属** / 1400nit AMOLED 屏 / **对腕发声唤醒 ChatGPT 助手** / 30分钟急速快充 55% / 24h 全天候午休小憩睡眠监测。`;
    return { text, groundingSources };
  }

  // 7. PRODUCT-FOCUSED CONTEXT-AWARE INTELLIGENT REPLY
  const pName = productContext.name || "当前智能硬件";
  const pDesc = productContext.shortDesc || "出海优质消费电子产品";
  const pSpecs = (productContext.specs || []).map((s: any) => `- **${s.label}**：${s.value}`).join("\n");
  const pHigh = (productContext.highlights || []).map((h: string) => `- 🌟 ${h}`).join("\n");

  text = `### 💡 关于「${userQuery}」的专业分析与策略方案

针对你提出的具体问题：**「${userQuery}」**，结合当前产品【**${pName}**】的核心竞争力和出海大盘洞察，为你梳理核心要点：

#### 🎯 1. 核心定位与用户痛点穿透
- **产品定位**：${pDesc}
- **核心差异化卖点**：
${pHigh || "- 卓越的工业制造水准与高性价比降维打击\n- 深度贴合当地消费者生活习惯的场景化功能设计"}

#### 📋 2. 关键硬件参数与性能支撑
${pSpecs || "- 标配旗舰级硬件总成，提供同级领先的性能输出与持久耐用表现"}

#### 🚀 3. 落地推进与下一步建议
- **内容创作**：建议紧扣前 3 秒视觉痛点冲突，直接展现该产品解决用户痛点的核心瞬间。
- **互动转化**：你可以继续针对该产品要求生成 **TikTok 分镜脚本**、**多语言母语文案**、**竞品横向对比** 或 **投流痛点测试方案**！`;

  return { text, groundingSources };
}
