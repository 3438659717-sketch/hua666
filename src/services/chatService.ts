import { ChatbotPersona, GeminiModelId, ChatMessage, GroundingSource, ProductConfig } from "../types";

export interface SendChatOptions {
  messages: Array<{ role: "user" | "model" | "system"; content: string }>;
  persona: ChatbotPersona;
  model: GeminiModelId;
  enableSearchGrounding: boolean;
  productContext?: Partial<ProductConfig>;
}

export interface ChatResponse {
  success: boolean;
  text: string;
  groundingSources?: GroundingSource[];
  modelUsed?: GeminiModelId;
  persona?: ChatbotPersona;
  searchGroundingUsed?: boolean;
  error?: string;
}

export const PERSONA_CONFIGS: Record<
  ChatbotPersona,
  {
    name: string;
    title: string;
    description: string;
    badge: string;
    avatarEmoji: string;
    accentColor: string;
    recommendedModel: GeminiModelId;
    suggestedPrompts: string[];
  }
> = {
  tiktok_strategist: {
    name: "AI 搜索 · TikTok 操盘手",
    title: "TikTok 完播与算法增长总监",
    description: "专注 3 秒完播黄金钩子、痛点反转分镜、神级 BGM 节奏与出海投流爆单公式。",
    badge: "爆款转化",
    avatarEmoji: "🔥",
    accentColor: "from-amber-500 to-rose-500",
    recommendedModel: "gemini-3.7-flash",
    suggestedPrompts: [
      "为当前产品设计 3 套 15 秒极速完播的 TikTok 短视频分镜与台词",
      "针对核心目标市场，如何做出第一秒抓眼球的视觉打破模式钩子？",
      "帮我写 5 条适合置顶在评论区的神评与引流转化购买话术",
      "如果投流测试，推荐哪 3 种前置痛点冲突角度？",
    ],
  },
  market_scout: {
    name: "AI 搜索 · 全球情报官",
    title: "实时全网趋势与竞品分析",
    description: "联网实时检索日区/西语区/德语区最新消费电子趋势、竞品痛点及差评挖掘。",
    badge: "全网检索",
    avatarEmoji: "🌐",
    accentColor: "from-cyan-500 to-blue-500",
    recommendedModel: "gemini-3.7-flash",
    suggestedPrompts: [
      "搜索并调研当前品类在目标市场近期最火的爆款话题与消费者诉求",
      "检索该品类在海外市场的核心买点与同类竞品差评抱怨痛点",
      "目标市场消费者在选择该品类时，最看重的 3 项硬核参数是什么？",
      "目前同类竞品在 TikTok 上的平均定价区间与核心竞品对比",
    ],
  },
  localization_master: {
    name: "AI 搜索 · 本土化大师",
    title: "多语言母语级文案与文化润色",
    description: "精通日语、西语、德语地道文化俚语与消费心理学，消除一切机械机翻感。",
    badge: "母语润色",
    avatarEmoji: "🎌",
    accentColor: "from-purple-500 to-pink-500",
    recommendedModel: "gemini-3.7-flash",
    suggestedPrompts: [
      "把当前产品的核心卖点转化为 3 句极具当地文化共鸣的短视频地道标题",
      "目标市场年轻人最喜欢的口语化表达有哪些？请帮我给文案润色",
      "该国家消费者对当前产品核心特质有哪些严谨地道的习惯用词？",
      "对照解析这几句外语文案在文化语境中的吸引力与改良建议",
    ],
  },
  specs_engineer: {
    name: "AI 搜索 · 技术拆解师",
    title: "工程技术架构与 FABE 销售转换",
    description: "深度拆解传感器、电机、GNSS、潜水防水与光学结构，将硬核参数秒变痛点卖点。",
    badge: "参数拆解",
    avatarEmoji: "⚡",
    accentColor: "from-emerald-500 to-teal-500",
    recommendedModel: "gemini-3.7-flash",
    suggestedPrompts: [
      "用 FABE 法则（特征-优势-利益-证据）拆解当前产品的核心硬件配置",
      "普通用户看不懂专业硬件参数，如何用通俗又震撼的比喻讲清楚？",
      "该产品在续航、耐用性与结构设计上有哪些超越同级的工程细节？",
      "针对科技数码博主测评，提供一份硬核专业的技术拆解问答指南",
    ],
  },
};

export const MODEL_OPTIONS: Array<{
  id: GeminiModelId;
  name: string;
  tag: string;
  description: string;
  badgeColor: string;
}> = [
  {
    id: "gemini-3.7-flash",
    name: "AI 搜索 · PRO 深度推理引擎 (Gemini 3.7 Pro)",
    tag: "PRO 深度思考 · 零跑题",
    description: "Google 旗舰深度思维与复杂策略推理引擎，直击核心问题，逻辑缜密不跑题",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  },
  {
    id: "gemini-3.6-flash",
    name: "AI 搜索 · 推荐旗舰引擎 (Gemini 3.6 Flash)",
    tag: "推荐 · 深度推理 & 全网对齐",
    description: "高效旗舰模型，全网知识与现实大盘深度对齐，兼顾逻辑深度与极速生成",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  },
  {
    id: "gemini-3.1-flash-lite",
    name: "AI 搜索 · 极速轻量引擎 (3.1 Flash Lite)",
    tag: "毫秒极速 · 充足配额",
    description: "具备极高可用性与充足配额，超低延迟极速响应，连续多轮对话超稳不掉线",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  },
  {
    id: "gemini-flash-lite-latest",
    name: "AI 搜索 · 稳定通用引擎 (Flash Lite Latest)",
    tag: "高吞吐 · 稳定可靠",
    description: "经典稳定模型，具备出色的多轮对话记忆与产品策略理解能力",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  },
];

export function getChatStorageKey(productId?: string): string {
  return `fosmet_gemini_chat_history_v2_${productId || "default"}`;
}

export function loadSavedChatHistory(productId?: string): ChatMessage[] {
  try {
    const key = getChatStorageKey(productId);
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error("Failed to load chat history:", e);
    return [];
  }
}

export function saveChatHistory(messages: ChatMessage[], productId?: string) {
  try {
    const key = getChatStorageKey(productId);
    localStorage.setItem(key, JSON.stringify(messages));
  } catch (e) {
    console.error("Failed to save chat history:", e);
  }
}

export function clearSavedChatHistory(productId?: string) {
  try {
    const key = getChatStorageKey(productId);
    localStorage.removeItem(key);
  } catch (e) {
    console.error("Failed to clear chat history:", e);
  }
}

/**
 * Dynamically provides strictly product-specific suggested prompts
 * to prevent confusion between vacuum cleaners, smartwatches, voice recorders, and smart glasses.
 */
export function getProductSuggestedPrompts(
  persona: ChatbotPersona,
  product?: Partial<ProductConfig>
): string[] {
  if (!product) {
    return PERSONA_CONFIGS[persona].suggestedPrompts;
  }

  const pId = (product.id || "").toLowerCase();
  const name = product.name || product.model || "当前产品";
  const model = product.model || "";

  // 0. Universal Cross-Product Mode (全品类通用 / 全局搜索模式)
  if (pId === "all" || pId === "universal" || name.includes("全品类") || name.includes("通用")) {
    if (persona === "tiktok_strategist") {
      return [
        "对比 V17 MAX 与 V18 PRO：针对欧洲大户型与痛点清洁分别设计 15 秒完播脚本",
        "REC10 相比传统录音笔在商务办公与会议整理上的核心差异分镜",
        "QS40 对腕唤醒 ChatGPT 语音助手：如何做出一秒打破模式的视觉钩子？",
        "FOSMET 旗下 13 款智能硬件（手表/录音卡/拍摄眼镜/吸尘器）全矩阵定位总览",
      ];
    }
    if (persona === "market_scout") {
      return [
        "搜索调研日本/欧洲当前最火的 TikTok 消费电子与跨境智能硬件爆款榜单",
        "戴森与 Shark 在欧洲市场的差评痛点分析，对比 DyMona V17/V18 的破局点",
        "调研全球市场对于超薄 AI 录音卡片（REC10）与对腕 AI 手表（QS40）的接受度",
        "户外运动手表（T20/KT80）在海外市场的价格带与用户核心关注点",
      ];
    }
    if (persona === "localization_master") {
      return [
        "对比解析德语区（严谨大吸力）与西语区（轻巧免弯腰）的吸尘器宣传文案调优",
        "把 REC10 与 QS40 的核心功能转化为日本上班族最受用的地道短视频文案",
        "德语/西语/日语跨境电商文案中关于产品核心黑科技的地道俚语表达汇总",
        "如何将中国消费电子硬件卖点本土化为欧美用户一听就懂的痛点语言？",
      ];
    }
    return [
      "对比 DyMona V17 MAX 与 V18 PRO 的无刷电机功率、真空负压与防缠绕结构",
      "深度拆解 FOSMET T20 智能物理高频排水与独立多星 GNSS 定位原理",
      "拆解 FOSMET E12 开放式 AI 摄像头耳机的光学防抖、OpenAI 助手与 HiFi 音频架构",
      "用通俗震撼的 FABE 语言向海外用户讲清 14 款产品的硬核核心差异",
    ];
  }

  // 0. T40 Children's Smart Watch
  if (pId.includes("t40") || model.includes("T40")) {
    if (persona === "tiktok_strategist") {
      return [
        `为 ${name} 设计 3 套针对年轻父母的 15 秒极速完播儿童安全守护 TikTok 分镜`,
        `如何用「4G双向视频一键面对面」和「GPS+LBS+WiFi三重定位」做打动家长的痛点钩子？`,
        `设计 5 条适合置顶在评论区的「告别手机成瘾/平安上下学/爱的奖励」神评与种草话术`,
        `投流西班牙与德国父母人群，推荐哪 3 种儿童手表亲子营销切入角度？`,
      ];
    }
    if (persona === "market_scout") {
      return [
        `调研西班牙与德国儿童智能穿戴（Kinder-Smartwatch / Reloj Niños）近期热度与需求`,
        `欧洲父母在为孩子选购首款可穿戴设备时最关心的 3 项核心指标（安全性/防沉迷/防水）`,
        `欧洲市场同类 4G 儿童手表的平均定价、主流卖点与常见差评痛点分析`,
        `分析「课堂免打扰模式」与「爱的奖励积分」在欧洲家校场景下的核心吸引力`,
      ];
    }
    if (persona === "localization_master") {
      return [
        `把 ${name} 的 4G 高清视频与 GPS 三重定位转化为 3 句打动西语/德语家长的文案标题`,
        `德语与西语区关于「Kindersicherheit / Seguridad Infantil」最地道的家教词汇有哪些？`,
        `如何用地道的西语/德语表达「课堂模式不分心」与「爱的奖励鼓励做家务」？`,
        `分析德西两国不同文化背景下，家长对儿童智能手表替代智能手机的心智认知`,
      ];
    }
    return [
      `用 FABE 模型深度拆解 ${name} 的 4G 双向通信、GPS+LBS+WiFi 定位与 IP68 防水`,
      `向家长通俗讲解 GPS+LBS+WiFi 多重定位与单个 GPS 定位在室内外的精度区别`,
      `该手表在低功耗续航管理、安全联系人白名单与紧急 SOS 触发上有何工程亮点？`,
      `针对儿童科技博主或育儿测评，提供一份硬核专业的技术拆解问答指南`,
    ];
  }

  // 1. Vacuum Cleaners (v17max, v18pro)
  if (pId.includes("v17") || pId.includes("v18") || model.includes("V17") || model.includes("V18")) {
    const isV17 = pId.includes("v17") || model.includes("V17");
    const suction = isV17 ? "58kPa 怪兽吸力" : "50kPa 强劲吸力";
    const highlight = isV17 ? "双电池150min长续航与2L大尘桶" : "65cm免弯腰折叠臂与绿光显尘2.0";

    if (persona === "tiktok_strategist") {
      return [
        `为 ${name} 设计 3 套针对大户型/养宠家庭的 15 秒极速完播 TikTok 分镜`,
        `如何用 ${suction} 和一次吸净深层毛发做第一秒抓眼球的视觉暴击钩子？`,
        `帮我写 5 条适合置顶在评论区的养宠/家庭清洁神评与抢购话术`,
        `如果投流欧洲（德/西）市场，推荐哪 3 种清洁痛点冲突角度？`,
      ];
    }
    if (persona === "market_scout") {
      return [
        `搜索调研德国与西班牙 TikTok 近期最火的大吸力吸尘器趋势与用户痛点`,
        `欧美同类大户型吸尘器在亚马逊的核心差评（缠毛发/虚标）与应对策略`,
        `德国消费者在购买高端大吸力吸尘器时最在乎的 3 项硬核指标`,
        `目前同类无线吸尘器在欧洲 TikTok Shop 上的主流定价与爆款玩法`,
      ];
    }
    if (persona === "localization_master") {
      return [
        `把 ${suction} 与 ${highlight} 翻译为 3 句极具德语共鸣的严谨短视频标题`,
        `西语市场年轻人与家庭最喜欢的家电口语化表达有哪些？请帮我润色`,
        `德语区严谨消费者对「防缠绕 V 刷与 HEPA 过滤」有哪些地道用词？`,
        `对照解析西语/德语宣传文案在文化语境中的吸引力与改良建议`,
      ];
    }
    return [
      `用 FABE 模型深度拆解 ${name} 的 650W 无刷电机与 ${suction}`,
      `普通用户看不懂真空吸力压强，如何用震撼的比喻通俗解释？`,
      `该吸尘器在防缠绕结构与多重过滤系统上有哪些超越同级的工程细节？`,
      `针对海外家电测评博主，提供一份专业硬核的技术拆解 Q&A 指南`,
    ];
  }

  // 2. AI Voice Recorder (rec10)
  if (pId.includes("rec10") || model.includes("REC10")) {
    if (persona === "tiktok_strategist") {
      return [
        `为 ${name} 设计 3 套 15 秒极速完播的职场会议与学习效率短视频分镜`,
        `如何用「名片般极薄平放桌面」做第一秒打破模式的反常识视觉钩子？`,
        `帮我写 5 条适合置顶在评论区的打工人/商务谈判神器神评`,
        `投流日本职场白领与大学生人群，推荐哪 3 种会议痛点切入角度？`,
      ];
    }
    if (persona === "market_scout") {
      return [
        `搜索调研日本 TikTok 与亚马逊近期最火的 AI 会议记录与职场效率工具`,
        `日本职场消费者对 AI 录音设备的真实痛点（准确率/续航/便携度）分析`,
        `ChatGPT 与双 AI 大模型类硬件在日区的流行趋势与受众接受度`,
        `日本同类 AI 录音笔在 Rakuten/Amazon 的核心竞品定价与评价痛点`,
      ];
    }
    if (persona === "localization_master") {
      return [
        `把 ${name} 核心卖点转化为 3 句打动日本商务人士的「タイパ神道具」标题`,
        `日本商务日语中关于「会議の議事録・商談・効率化」的地道表达有哪些？`,
        `如何用地道的日文文案表达「名片级超薄磁吸与 35h 连续录音」？`,
        `对照解析日区短视频文案在本土职场文化中的心理共鸣与修改建议`,
      ];
    }
    return [
      `用 FABE 模型拆解 35 小时连续录音、64GB 容量与 ChatGPT/Gemini 双大模型`,
      `如何用生动的语言向用户解释云端 AI 会议纪要与思维导图生成原理？`,
      `该录音卡片在降噪芯片、拾音距离与低功耗架构上有哪些工程细节？`,
      `针对商务数码博主测评，提供一份专业硬核的技术问答指南`,
    ];
  }

  // 3. Outdoor Smartwatch (t20, kt80)
  if (pId.includes("t20") || pId.includes("kt80") || model.includes("T20") || model.includes("KT80")) {
    const isKt80 = pId.includes("kt80") || model.includes("KT80");
    const special = isKt80 ? "800mAh 超大电池与侧边 LED 强光手电筒" : "独立多星 GNSS 轨迹与智能物理高频排水";

    if (persona === "tiktok_strategist") {
      return [
        `为 ${name} 设计 3 套突出硬核越野与生存工具属性的 15 秒 TikTok 完播分镜`,
        `如何用「${special}」做第一秒户外极度吸睛的视觉反转钩子？`,
        `帮我写 5 条适合置顶在评论区的越野露营/硬核运动爱好者神评`,
        `如果投流户外运动与战术工具人群，推荐哪 3 种场景痛点切入？`,
      ];
    }
    if (persona === "market_scout") {
      return [
        `调研海外（欧美/日区）TikTok 近期最火的户外运动与硬核战术手表趋势`,
        `户外探险人群对 GPS 定位、长续航与防水防尘的真实差评痛点有哪些？`,
        `目前同类硬核户外智能手表在 TikTok 上的平均定价与爆款受众画像`,
      ];
    }
    if (persona === "localization_master") {
      return [
        `把 ${special} 转化为 3 句极具母语共鸣的户外短视频标题`,
        `目标市场越野与徒步运动爱好者最常用的俚语口语有哪些？`,
        `对照解析外语文案在户外探险文化中的吸引力与改良建议`,
      ];
    }
    return [
      `用 FABE 模型拆解 ${name} 的 ${special} 与 5ATM 潜水级防水`,
      `普通用户不了解气压高度计与物理排水，如何用通俗震撼的比喻讲清楚？`,
      `该手表在机身坚固合金、低温耐受与电池管理上有哪些硬核工程细节？`,
    ];
  }

  // 4. Fashion Smartwatch (g58, g2, i228, fos10)
  if (pId.includes("g58") || pId.includes("g2") || pId.includes("i228") || pId.includes("fos10")) {
    if (persona === "tiktok_strategist") {
      return [
        `为 ${name} 设计 3 套突出女性优雅穿搭与生理周期关怀的 15 秒 TikTok 分镜`,
        `如何用「米兰尼斯+硅胶双表带百搭 OOTD」做第一秒高颜值视觉钩子？`,
        `帮我写 5 条适合置顶在评论区的女生闺蜜/自用送礼高转化神评`,
        `投流年轻女性与白领人群，推荐哪 3 种健康与穿搭痛点冲突切入？`,
      ];
    }
    if (persona === "market_scout") {
      return [
        `调研海外 TikTok 近期最火的女性健康管理与智能手表时尚穿搭话题`,
        `女性消费者在挑选智能手表时对外观材质、经期记录的核心评价诉求`,
      ];
    }
    if (persona === "localization_master") {
      return [
        `把 1.27" 390x390 高清屏与女性生理周期管理转化为 3 句优雅地道的外语文案`,
        `目标市场年轻女性在分享穿搭好物时最爱用的口语词汇有哪些？`,
      ];
    }
    return [
      `用 FABE 模型拆解女性生理周期预测算法、24/7 心率血氧与睡眠深度监测`,
      `该手表在 98% 超高屏占比高硬度玻璃与双表带快拆上有哪些工业亮点？`,
    ];
  }

  // 5. Smart Glasses & Camera Headphones (e05, e09, e12)
  if (pId.includes("e05") || pId.includes("e09") || pId.includes("e12")) {
    const isE12 = pId.includes("e12");
    const isE05 = pId.includes("e05");
    const highlight = isE12
      ? "内置 SONY 800万摄像头第一视角 POV 与 OpenAI 拍照识物"
      : isE05
      ? "4 档指尖电致变色调光与 ENC 双麦通话"
      : "40g 极轻机身与 SONY 800万 POV 录像";

    if (persona === "tiktok_strategist") {
      return [
        `为 ${name} 设计 3 套突出解放双手 POV 第一视角的 15 秒极速完播 TikTok 分镜`,
        `如何用「${highlight}」做第一秒科技感拉满的视觉反转钩子？`,
        `帮我写 5 条适合置顶在评论区的科技潮人/骑行 Vlog 神评与话术`,
      ];
    }
    if (persona === "market_scout") {
      return [
        `调研日区及海外 TikTok 近期最火的智能穿戴眼镜/第一视角拍摄新趋势`,
        `海外潮人与 Vlog 创作者对第一人称随身拍摄设备的真实评价与痛点`,
      ];
    }
    if (persona === "localization_master") {
      return [
        `把 ${highlight} 转化为 3 句打动年轻潮流用户的地道外语文案`,
      ];
    }
    return [
      `用 FABE 模型拆解 SONY 传感器、光学镜片、蓝牙音质与 AI 交互工程细节`,
    ];
  }

  // 6. QS40 (AI AMOLED Smartwatch)
  if (pId.includes("qs40")) {
    if (persona === "tiktok_strategist") {
      return [
        `为 QS40 设计 3 套突出 9.8mm 超薄洗练银色金属与对腕 ChatGPT 的 15 秒分镜`,
        `如何用「对腕发声秒级解答，告别小屏打字」做第一秒打破模式的反转钩子？`,
        `帮我写 5 条置顶在评论区的「不到1万日元超强神コスパ」神评`,
        `投流日本市场，推荐哪 3 种亚洲人手腕贴合与午休小憩监测切入角度？`,
      ];
    }
    if (persona === "market_scout") {
      return [
        `调研日本 TikTok 与亚马逊近期对「神コスパ」智能手表的大盘趋势与热搜词`,
        `日本消费者对手表明亮度（1400nit AMOLED）与深度睡眠监测的核心痛点`,
      ];
    }
    if (persona === "localization_master") {
      return [
        `把 9.8mm 超薄洗练银色与对腕 ChatGPT 转化为 3 句地道日文爆款标题`,
        `日文里表达「超高性价比、佩戴无感、职场利器」有哪些最接地气的俚语？`,
      ];
    }
    return [
      `用 FABE 模型拆解 1400nit AMOLED 屏幕、30分钟急速快充与 24h 午休监测`,
    ];
  }

  return PERSONA_CONFIGS[persona].suggestedPrompts;
}

export async function sendChatMessage(options: SendChatOptions): Promise<ChatResponse> {
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: options.messages.map((m) => ({
          role: m.role === "model" ? "model" : "user",
          content: m.content,
        })),
        persona: options.persona,
        model: options.model,
        enableSearchGrounding: options.enableSearchGrounding,
        productContext: options.productContext || {},
      }),
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      throw new Error(data.error || "调用 Gemini AI 失败，请检查网络或配置");
    }

    return {
      success: true,
      text: data.text || "",
      groundingSources: data.groundingSources || [],
      modelUsed: data.modelUsed || options.model,
      persona: data.persona || options.persona,
      searchGroundingUsed: data.searchGroundingUsed || false,
    };
  } catch (err: any) {
    console.error("sendChatMessage error:", err);
    return {
      success: false,
      text: "",
      error: err.message || "请求发生未知异常",
    };
  }
}
