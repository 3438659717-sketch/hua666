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
    name: "TikTok 爆款操盘手",
    title: "TikTok 完播与算法增长总监",
    description: "专注 3 秒完播黄金钩子、痛点反转分镜、神级 BGM 节奏与出海投流爆单公式。",
    badge: "爆款转化",
    avatarEmoji: "🔥",
    accentColor: "from-amber-500 to-rose-500",
    recommendedModel: "gemini-3.5-flash",
    suggestedPrompts: [
      "为当前产品设计 3 套 15 秒极速完播的 TikTok 短视频分镜与台词",
      "针对日本市场，如何用「Pattern Interrupt (打破模式)」做出第一秒抓眼球的视觉钩子？",
      "帮我写 5 条适合置顶在评论区的神评与引流购买话术",
      "如果投流测试，推荐哪 3 种前置痛点冲突角度？",
    ],
  },
  market_scout: {
    name: "全球实时市场情报官",
    title: "Google Search 实时趋势与竞品分析",
    description: "联网 Google 实时检索日区/西语区/德语区最新消费电子趋势、竞品痛点及差评挖掘。",
    badge: "联网检索",
    avatarEmoji: "🌐",
    accentColor: "from-cyan-500 to-blue-500",
    recommendedModel: "gemini-3.5-flash",
    suggestedPrompts: [
      "搜索并调研日本 TikTok / 亚马逊近期最火的智能穿戴与健康管理话题",
      "检索西班牙与拉美市场无线吸尘器/智能手表的流行买点与用户差评痛点",
      "德国市场消费者在选择高端大吸力吸尘器时，最看重的 3 项硬核参数是什么？",
      "目前同类竞品在 TikTok 上的平均定价区间与核心竞品对比",
    ],
  },
  localization_master: {
    name: "跨文化本土化大师",
    title: "多语言母语级文案与文化润色",
    description: "精通日语、西语、德语地道文化俚语与消费心理学，消除一切机械机翻感。",
    badge: "母语润色",
    avatarEmoji: "🎌",
    accentColor: "from-purple-500 to-pink-500",
    recommendedModel: "gemini-3.1-pro-preview",
    suggestedPrompts: [
      "把当前产品的核心卖点转化为 3 句极具日本本土共鸣的「神コスパ」短视频标题",
      "西语市场年轻人最喜欢的口语化表达有哪些？请帮我给文案润色",
      "德语区消费者对「吸力与折叠弯折」有哪些严谨地道的习惯用词？",
      "对照解析这几句外语文案在文化语境中的吸引力与改良建议",
    ],
  },
  specs_engineer: {
    name: "硬核产品技术拆解师",
    title: "工程技术架构与 FABE 销售转换",
    description: "深度拆解传感器、电机、GNSS、潜水防水与光学结构，将硬核参数秒变痛点卖点。",
    badge: "参数拆解",
    avatarEmoji: "⚡",
    accentColor: "from-emerald-500 to-teal-500",
    recommendedModel: "gemini-3.1-flash-lite",
    suggestedPrompts: [
      "用 FABE 法则（特征-优势-利益-证据）拆解当前产品的核心硬件配置",
      "普通用户看不懂光学传感器/无刷电机，如何用通俗又震撼的比喻讲清楚？",
      "该产品在续航、防水防尘与材料耐用性上有哪些超越同级的工程细节？",
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
    id: "gemini-3.5-flash",
    name: "Gemini 3.5 Flash",
    tag: "平衡全能 & 支持 Google 实时搜索",
    description: "具备极高推理速度与深度知识，支持 Google 实时检索 Grounding，适合综合营销分析与趋势调研",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  },
  {
    id: "gemini-3.1-pro-preview",
    name: "Gemini 3.1 Pro Preview",
    tag: "极高智商 & 深度长篇分镜推理",
    description: "针对复杂市场营销战略、长篇多场景脚本分镜、跨文化深度语义润色提供极致推理",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  },
  {
    id: "gemini-3.1-flash-lite",
    name: "Gemini 3.1 Flash Lite",
    tag: "毫秒极速 & 瞬时头脑风暴",
    description: "超低延迟极速响应，专为高频即时 Q&A、快速词汇替换及灵感闪念打造",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  },
];

const CHAT_STORAGE_KEY = "fosmet_gemini_chat_history_v1";

export function loadSavedChatHistory(): ChatMessage[] {
  try {
    const raw = localStorage.getItem(CHAT_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error("Failed to load chat history:", e);
    return [];
  }
}

export function saveChatHistory(messages: ChatMessage[]) {
  try {
    localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages));
  } catch (e) {
    console.error("Failed to save chat history:", e);
  }
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
