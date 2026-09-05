import React, { useState, useEffect, useRef } from "react";
import {
  ChatbotPersona,
  GeminiModelId,
  ChatMessage,
  ProductConfig,
  ProductId,
  GroundingSource,
} from "../types";
import { PRODUCTS_CONFIG } from "../data/templates";
import {
  PERSONA_CONFIGS,
  MODEL_OPTIONS,
  sendChatMessage,
  loadSavedChatHistory,
  saveChatHistory,
  clearSavedChatHistory,
  getProductSuggestedPrompts,
} from "../services/chatService";
import Markdown from "react-markdown";
import {
  X,
  Send,
  Sparkles,
  Globe,
  Trash2,
  Copy,
  Check,
  RotateCcw,
  Zap,
  ExternalLink,
  ChevronDown,
  Download,
  Flame,
  Languages,
  Cpu,
  Search,
  Bot,
  User,
  Lightbulb,
  Maximize2,
  Minimize2,
} from "lucide-react";

interface GeminiChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentProduct: ProductConfig;
  currentLanguage: string;
  onApplyKeyword?: (keyword: string) => void;
}

export const GeminiChatModal: React.FC<GeminiChatModalProps> = ({
  isOpen,
  onClose,
  currentProduct,
  currentLanguage,
  onApplyKeyword,
}) => {
  const [persona, setPersona] = useState<ChatbotPersona>("tiktok_strategist");
  const [model, setModel] = useState<GeminiModelId>("gemini-3.7-flash");
  const [enableSearchGrounding, setEnableSearchGrounding] = useState<boolean>(true);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCopiedId, setIsCopiedId] = useState<string | null>(null);
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [showClearConfirm, setShowClearConfirm] = useState<boolean>(false);

  // Universal Cross-Product Scope Selector State
  const [focusScope, setFocusScope] = useState<string>("current");
  const [isScopeDropdownOpen, setIsScopeDropdownOpen] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Universal virtual product representation
  const UNIVERSAL_PRODUCT: ProductConfig = {
    id: "all" as any,
    brand: "FOSMET & DyMona",
    model: "全矩阵通用",
    name: "全矩阵通用搜索模式",
    japaneseType: "FOSMET ＆ DyMona 全矩阵跨品类生态",
    shortDesc: "支持随时检索/对比旗下 14 款智能硬件（吸尘器/录音卡/儿童与成人手表/拍摄眼镜）及海外竞品",
    fixedTags: "#FOSMET #DyMona #AI #TikTokShop #跨境出海",
    badge: "全品类通用",
    accentColor: "#06B6D4",
    tiktokFormula: "跨品类痛点反转 + 硬件差异化对比 + 全球出海高转化",
    specs: [],
    highlights: [
      "支持跨模块任意提问 DyMona 吸尘器 (V17/V18)、REC10 录音卡、T40/QS40/T20/KT80 手表、E12/E05/E09 眼镜",
      "无论当前在哪个页面，均可自由对比多款产品参数与选品策略",
      "可启用 Google 实时搜索调研戴森、Shark、Apple Watch、Garmin 等竞品差评与市场痛点",
    ],
  };

  const activeProduct: ProductConfig =
    focusScope === "all"
      ? UNIVERSAL_PRODUCT
      : focusScope === "current"
      ? currentProduct
      : PRODUCTS_CONFIG[focusScope as ProductId] || currentProduct;

  const currentStorageKey = focusScope === "current" ? currentProduct.id : focusScope;

  // Load chat history keyed by currentStorageKey on mount or scope change
  useEffect(() => {
    const saved = loadSavedChatHistory(currentStorageKey);
    if (saved.length > 0) {
      setMessages(saved);
    } else {
      const isUniversal = focusScope === "all";
      const initialGreeting: ChatMessage = {
        id: `msg-welcome-${Date.now()}`,
        role: "model",
        content: isUniversal
          ? `👋 **你好！我是 FOSMET & DyMona「AI 智能搜索」全品类出海智库（全网实时检索与现实对齐常驻已开启）**。\n\n🌐 **每次回答均与现实深度对齐**：已自动连接全球检索大盘，实时对照 2025-2026 年最新海外市场竞争格局、真实社媒趋势、真实消费者偏好与真实竞品数据！\n\n🌟 **全品类畅搜与跨模块对比已就绪**：无论你在哪个页面，你都可以向我自由提问、对比或检索：\n- 🌪️ **DyMona 无线吸尘器**：V17 MAX（德国大户型 58kPa）与 V18 PRO（西语折叠显尘 50kPa）；\n- 🎙️ **FOSMET AI 录音卡**：REC10（35h 连续录音 / 64GB / 双 AI 会议纪要与思维导图）；\n- ⌚ **FOSMET 智能手表**：T40（4G 儿童安全手表 / GPS+WiFi定位 / 课堂模式 / 爱的奖励）、QS40（9.8mm 对腕 ChatGPT）、T20（GNSS 越野物理排水）、KT80（800mAh+LED 手电）、G58/G2（女性生理健康）；\n- 👓 **FOSMET 智能视听**：E12（SONY 800万 POV 拍照识物耳机）、E05（4档电致变色眼镜）、E09（40g 极轻录像眼镜）；\n- 🌍 **全球竞品与大盘**：戴森、Shark、Apple Watch、Garmin 等海外竞品口碑、真实参数与选品策略随时横向对比！\n\n直接在下方输入任何问题，或点击灵感胶囊开启！`
          : `👋 **你好！我是 FOSMET & DyMona「AI 智能搜索」出海智库**。\n\n🌐 **全网实时检索与现实对齐已常驻就绪**：每次回答均与海外真实大盘和客观规格严密对齐。\n\n当前已自动关联：**${activeProduct.name}**（${activeProduct.japaneseType}）。\n- 🏷️ **核心定位**：${activeProduct.shortDesc}\n- ⚡ **主打卖点**：${(activeProduct.highlights || []).join(" ； ")}\n\n💡 **通用搜索已就绪**：即使当前在【${activeProduct.name}】模块，你也可以直接向我提问或对比**旗下其他任意产品**（如吸尘器、录音卡、儿童手表、拍摄眼镜）或**外部竞品大盘**，AI 将全方位深度解答！`,
        timestamp: new Date().toISOString(),
        persona: "tiktok_strategist",
        modelUsed: "gemini-3.7-flash",
        searchGroundingUsed: true,
      };
      setMessages([initialGreeting]);
      saveChatHistory([initialGreeting], currentStorageKey);
    }
  }, [currentStorageKey, activeProduct.name, activeProduct.japaneseType, activeProduct.shortDesc, focusScope]);

  // Auto scroll to bottom
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen]);

  // Auto adjust grounding toggle when switching to market_scout
  const handleSelectPersona = (p: ChatbotPersona) => {
    setPersona(p);
    if (p === "market_scout") {
      setEnableSearchGrounding(true);
    }
    setModel(PERSONA_CONFIGS[p].recommendedModel);
  };

  const handleSendMessage = async (textToSend?: string) => {
    const content = (textToSend || inputValue).trim();
    if (!content || isLoading) return;

    const userMsg: ChatMessage = {
      id: `msg-user-${Date.now()}`,
      role: "user",
      content,
      timestamp: new Date().toISOString(),
      persona,
    };

    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    saveChatHistory(updatedMessages, currentStorageKey);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await sendChatMessage({
        messages: updatedMessages.map((m) => ({
          role: m.role,
          content: m.content,
        })),
        persona,
        model,
        enableSearchGrounding,
        productContext: activeProduct,
      });

      if (response.success) {
        const assistantMsg: ChatMessage = {
          id: `msg-assistant-${Date.now()}`,
          role: "model",
          content: response.text,
          timestamp: new Date().toISOString(),
          persona,
          modelUsed: response.modelUsed || model,
          searchGroundingUsed: response.searchGroundingUsed,
          groundingSources: response.groundingSources,
        };
        const finalMessages = [...updatedMessages, assistantMsg];
        setMessages(finalMessages);
        saveChatHistory(finalMessages, currentStorageKey);
      } else {
        const errorMsg: ChatMessage = {
          id: `msg-error-${Date.now()}`,
          role: "model",
          content: `⚠️ **请求未能成功完成**\n\n原因: ${response.error || "未知异常，请稍后重试。"}`,
          timestamp: new Date().toISOString(),
          persona,
          isError: true,
        };
        const finalMessages = [...updatedMessages, errorMsg];
        setMessages(finalMessages);
        saveChatHistory(finalMessages, currentStorageKey);
      }
    } catch (err: any) {
      const errorMsg: ChatMessage = {
        id: `msg-error-${Date.now()}`,
        role: "model",
        content: `⚠️ **网络通信异常**: ${err.message || "请检查网络连接"}`,
        timestamp: new Date().toISOString(),
        persona,
        isError: true,
      };
      const finalMessages = [...updatedMessages, errorMsg];
      setMessages(finalMessages);
      saveChatHistory(finalMessages, currentStorageKey);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleConfirmClear = () => {
    clearSavedChatHistory(currentStorageKey);
    const isUniversal = focusScope === "all";
    const welcome: ChatMessage = {
      id: `msg-welcome-${Date.now()}`,
      role: "model",
      content: isUniversal
        ? `👋 **已清空全矩阵通用搜索记录**。\n\n已重新就绪，随时为你检索或对比旗下 13 款智能硬件与全球市场趋势！`
        : `👋 **已清空当前产品【${activeProduct.name}】的对话历史**。\n\n已重新就绪，随时为你提供关于 **${activeProduct.name}** 的定制化出海营销与爆款策略，亦支持直接提问其他产品！`,
      timestamp: new Date().toISOString(),
      persona,
      modelUsed: model,
    };
    setMessages([welcome]);
    saveChatHistory([welcome], currentStorageKey);
    setShowClearConfirm(false);
  };

  const handleCopyMessage = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopiedId(id);
      setTimeout(() => setIsCopiedId(null), 2000);
    } catch (e) {
      console.error("Copy error:", e);
    }
  };

  const handleExportChat = () => {
    const textData = messages
      .map(
        (m) =>
          `[${m.role === "user" ? "用户" : "Gemini AI " + (m.persona || "")}] (${new Date(
            m.timestamp
          ).toLocaleString()}):\n${m.content}\n${
            m.groundingSources && m.groundingSources.length > 0
              ? `\nGoogle 检索来源:\n` +
                m.groundingSources.map((s, idx) => `  ${idx + 1}. ${s.title} (${s.uri})`).join("\n")
              : ""
          }\n----------------------------------------\n`
      )
      .join("\n");

    const blob = new Blob([textData], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `FOSMET_Gemini_Chat_${currentProduct.model}_${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  const currentPersonaConfig = PERSONA_CONFIGS[persona];
  const selectedModelConfig = MODEL_OPTIONS.find((m) => m.id === model) || MODEL_OPTIONS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className={`relative w-full ${
          isExpanded ? "max-w-6xl h-[94vh]" : "max-w-4xl h-[86vh]"
        } flex flex-col rounded-2xl bg-[#090C15]/95 border border-cyan-500/25 shadow-[0_0_50px_rgba(6,182,212,0.15)] overflow-hidden transition-all duration-300`}
      >
        {/* Top Header Bar */}
        <header className="flex-shrink-0 px-4 sm:px-6 py-3.5 border-b border-white/[0.08] bg-gradient-to-r from-cyan-950/40 via-purple-950/30 to-blue-950/40 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 flex-shrink-0">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-base sm:text-lg font-bold text-white tracking-wide flex items-center gap-1.5">
                  <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-blue-300 bg-clip-text text-transparent">
                    AI 智能搜索 · 出海爆款智库
                  </span>
                </h2>

                {/* Interactive Scope / Product Selector */}
                <div className="relative">
                  <button
                    id="chat-scope-selector-button"
                    type="button"
                    onClick={() => setIsScopeDropdownOpen(!isScopeDropdownOpen)}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 border border-cyan-500/40 flex items-center gap-1.5 transition-all shadow-sm"
                    title="点击切换搜索范围或指定硬件"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    <span className="font-semibold">
                      {focusScope === "all"
                        ? "🌐 全矩阵通用搜索"
                        : focusScope === "current"
                        ? `当前: ${activeProduct.model || activeProduct.name}`
                        : `关注: ${activeProduct.model || activeProduct.name}`}
                    </span>
                    <ChevronDown className="w-3 h-3 text-cyan-300/80" />
                  </button>

                  {isScopeDropdownOpen && (
                    <div className="absolute left-0 top-full mt-1.5 w-72 max-h-80 overflow-y-auto bg-[#0C1222]/98 border border-cyan-500/40 rounded-xl shadow-[0_12px_36px_rgba(0,0,0,0.85)] p-1.5 z-50 animate-fade-in backdrop-blur-xl custom-scrollbar">
                      <div className="px-2 py-1 text-[10px] text-cyan-300/80 font-semibold tracking-wider uppercase border-b border-white/10 mb-1 flex items-center justify-between">
                        <span>关联模块 / 检索范围</span>
                        <span className="text-[9px] text-emerald-400">全域支持</span>
                      </div>

                      {/* Option 1: Universal Mode */}
                      <button
                        type="button"
                        onClick={() => {
                          setFocusScope("all");
                          setIsScopeDropdownOpen(false);
                        }}
                        className={`w-full text-left px-2.5 py-2 rounded-lg text-xs flex items-center gap-2 transition-all ${
                          focusScope === "all"
                            ? "bg-cyan-500/25 text-cyan-200 font-bold border border-cyan-500/50"
                            : "hover:bg-white/5 text-white/80"
                        }`}
                      >
                        <span className="text-base">🌐</span>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-cyan-300 flex items-center justify-between">
                            <span>全矩阵通用搜索模式</span>
                            <span className="text-[9px] px-1 py-0.5 rounded bg-cyan-500/20 text-cyan-200">推荐</span>
                          </div>
                          <div className="text-[10px] text-white/45 truncate">自由检索、对比旗下 13 款硬件及海外竞品大盘</div>
                        </div>
                      </button>

                      {/* Option 2: Current Module Product */}
                      <button
                        type="button"
                        onClick={() => {
                          setFocusScope("current");
                          setIsScopeDropdownOpen(false);
                        }}
                        className={`w-full text-left px-2.5 py-2 rounded-lg text-xs flex items-center gap-2 transition-all mt-1 ${
                          focusScope === "current"
                            ? "bg-cyan-500/25 text-cyan-200 font-bold border border-cyan-500/50"
                            : "hover:bg-white/5 text-white/80"
                        }`}
                      >
                        <span className="text-base">💎</span>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-white flex items-center gap-1.5">
                            <span className="truncate">{currentProduct.name}</span>
                            <span className="text-[9px] px-1 rounded bg-white/10 text-cyan-300 flex-shrink-0">当前模块</span>
                          </div>
                          <div className="text-[10px] text-white/45 truncate">{currentProduct.shortDesc}</div>
                        </div>
                      </button>

                      {/* Group other matrix products */}
                      <div className="px-2 pt-2.5 pb-1 text-[10px] text-white/40 font-medium uppercase border-t border-white/10 mt-1.5">
                        切换对齐至其他产品
                      </div>

                      {Object.values(PRODUCTS_CONFIG)
                        .filter((p) => p.id !== currentProduct.id)
                        .map((p) => {
                          const isSelected = focusScope === p.id;
                          return (
                            <button
                              key={p.id}
                              type="button"
                              onClick={() => {
                                setFocusScope(p.id);
                                setIsScopeDropdownOpen(false);
                              }}
                              className={`w-full text-left px-2 py-1.5 rounded-lg text-xs flex items-center gap-2 transition-all ${
                                isSelected
                                  ? "bg-cyan-500/25 text-cyan-200 font-bold border border-cyan-500/50"
                                  : "hover:bg-white/5 text-white/70"
                              }`}
                            >
                              <span
                                className="w-2 h-2 rounded-full flex-shrink-0"
                                style={{ backgroundColor: p.accentColor || "#38BDF8" }}
                              />
                              <div className="flex-1 min-w-0">
                                <div className="font-medium text-white/90 truncate">{p.name}</div>
                                <div className="text-[10px] text-white/40 truncate">{p.japaneseType}</div>
                              </div>
                            </button>
                          );
                        })}
                    </div>
                  )}
                </div>

                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                  <span>支持跨模块畅搜任意产品</span>
                </span>

                {enableSearchGrounding && (
                  <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <Globe className="w-3 h-3 text-emerald-300" />
                    <span>全网实时搜索: 常驻开启 (现实对齐)</span>
                  </span>
                )}
              </div>
              <p className="text-xs text-white/50 truncate">
                全网实时检索 • 现实客观大盘对齐 • 4 大出海专家 • 全品类矩阵短视频赋能
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            {/* Export */}
            <button
              id="export-chat-button"
              type="button"
              onClick={handleExportChat}
              title="导出对话记录"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors border border-white/10 text-xs flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">导出</span>
            </button>

            {/* Clear Button with Inline Confirmation */}
            {showClearConfirm ? (
              <div className="flex items-center gap-1 bg-rose-950/80 border border-rose-500/40 rounded-lg p-1 animate-fade-in text-xs">
                <span className="text-rose-200 text-[11px] px-1 whitespace-nowrap">清空本产品记录?</span>
                <button
                  type="button"
                  onClick={handleConfirmClear}
                  className="px-2 py-0.5 rounded bg-rose-600 hover:bg-rose-500 text-white font-medium text-[11px]"
                >
                  确认
                </button>
                <button
                  type="button"
                  onClick={() => setShowClearConfirm(false)}
                  className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-white/70 text-[11px]"
                >
                  取消
                </button>
              </div>
            ) : (
              <button
                id="clear-chat-button"
                type="button"
                onClick={() => setShowClearConfirm(true)}
                title="清空当前产品对话历史"
                className="p-2 rounded-lg bg-white/5 hover:bg-rose-500/20 text-white/70 hover:text-rose-300 transition-colors border border-white/10 text-xs flex items-center gap-1"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">清空</span>
              </button>
            )}

            {/* Expand / Minimize */}
            <button
              id="toggle-expand-chat-button"
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors border border-white/10"
              title={isExpanded ? "还原窗口" : "最大化"}
            >
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {/* Close */}
            <button
              id="close-gemini-chat-modal-button"
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-rose-500/20 text-white/70 hover:text-rose-300 transition-colors border border-white/10"
              title="关闭"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Persona Switcher Bar & Settings */}
        <div className="flex-shrink-0 px-4 sm:px-6 py-2.5 bg-black/40 border-b border-white/[0.06] flex flex-wrap items-center justify-between gap-2.5">
          {/* Persona Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            <span className="text-xs text-white/40 font-mono hidden md:inline mr-1">角色:</span>
            {(
              [
                { id: "tiktok_strategist", label: "TikTok 爆款操盘手", icon: Flame },
                { id: "market_scout", label: "全球市场情报官 (联网)", icon: Globe },
                { id: "localization_master", label: "本土化润色大师", icon: Languages },
                { id: "specs_engineer", label: "硬核技术拆解师", icon: Cpu },
              ] as const
            ).map((item) => {
              const Icon = item.icon;
              const isActive = persona === item.id;
              return (
                <button
                  key={item.id}
                  id={`persona-tab-${item.id}`}
                  type="button"
                  onClick={() => handleSelectPersona(item.id)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-cyan-500/20 text-cyan-200 border border-cyan-500/40 shadow-sm"
                      : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/90 border border-white/5"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-cyan-400" : "text-white/40"}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Model & Search Grounding Controls */}
          <div className="flex items-center gap-2 ml-auto">
            {/* Live Web Search Grounding Quick Toggle */}
            <button
              id="toggle-search-grounding-button"
              type="button"
              onClick={() => {
                setEnableSearchGrounding(!enableSearchGrounding);
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-all border ${
                enableSearchGrounding
                  ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.2)]"
                  : "bg-white/5 text-white/50 border-white/10 hover:bg-white/10 hover:text-white/80"
              }`}
              title="全网实时搜索与现实大盘对齐（常驻开启，确保每次回答都与客观事实一致）"
            >
              <Search className={`w-3 h-3 ${enableSearchGrounding ? "text-emerald-400" : ""}`} />
              <span>全网实时搜索: {enableSearchGrounding ? "常驻开启 (现实对齐)" : "已暂停"}</span>
            </button>

            {/* Model Selector Dropdown */}
            <div className="relative">
              <button
                id="model-selector-dropdown-button"
                type="button"
                onClick={() => setIsModelDropdownOpen(!isModelDropdownOpen)}
                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 hover:bg-white/10 text-white/80 border border-white/10 flex items-center gap-1.5 transition-colors"
              >
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span className="truncate max-w-[120px] sm:max-w-[160px]">
                  {selectedModelConfig.name.replace("Gemini ", "")}
                </span>
                <ChevronDown className="w-3 h-3 text-white/40" />
              </button>

              {isModelDropdownOpen && (
                <div className="absolute right-0 top-full mt-1.5 w-72 rounded-xl bg-[#0D121F] border border-white/10 shadow-2xl p-2 z-50 animate-scale-in">
                  <div className="text-[11px] font-semibold text-white/40 px-2 py-1 uppercase tracking-wider font-mono">
                    选择 Gemini 推理模型
                  </div>
                  <div className="space-y-1 mt-1">
                    {MODEL_OPTIONS.map((opt) => (
                      <button
                        key={opt.id}
                        id={`select-model-${opt.id}`}
                        type="button"
                        onClick={() => {
                          setModel(opt.id);
                          setIsModelDropdownOpen(false);
                        }}
                        className={`w-full text-left p-2 rounded-lg transition-all text-xs flex flex-col gap-0.5 ${
                          model === opt.id
                            ? "bg-cyan-500/20 text-cyan-200 border border-cyan-500/30"
                            : "hover:bg-white/5 text-white/70 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center justify-between font-semibold">
                          <span>{opt.name}</span>
                          {model === opt.id && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                        </div>
                        <span className="text-[10px] text-white/40">{opt.tag}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Chat Messages Scrollable Area */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-4 font-sans text-sm custom-scrollbar">
          {messages.map((msg) => {
            const isUser = msg.role === "user";
            return (
              <div
                key={msg.id}
                className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"} animate-fade-in`}
              >
                {/* Assistant Avatar */}
                {!isUser && (
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center flex-shrink-0 text-sm shadow-md mt-0.5">
                    {PERSONA_CONFIGS[msg.persona || "tiktok_strategist"]?.avatarEmoji || "🤖"}
                  </div>
                )}

                {/* Message Bubble Container */}
                <div
                  className={`max-w-[88%] sm:max-w-[80%] rounded-2xl p-4 transition-all relative group ${
                    isUser
                      ? "bg-gradient-to-br from-cyan-600/90 to-blue-700/90 text-white rounded-tr-sm shadow-md shadow-cyan-900/20 border border-cyan-400/30"
                      : msg.isError
                      ? "bg-rose-950/40 text-rose-200 border border-rose-500/30 rounded-tl-sm"
                      : "bg-[#13192B]/90 text-white/90 border border-white/[0.08] rounded-tl-sm shadow-lg backdrop-blur-sm"
                  }`}
                >
                  {/* Assistant Message Header Info */}
                  {!isUser && (
                    <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-white/[0.06] text-[11px] text-white/40 font-mono">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-semibold text-cyan-300">
                          {PERSONA_CONFIGS[msg.persona || "tiktok_strategist"]?.name || "AI 智能搜索"}
                        </span>
                        {msg.modelUsed && (
                          <span className="px-1.5 py-0.2 rounded bg-white/5 text-white/50 border border-white/5 text-[10px]">
                            {msg.modelUsed}
                          </span>
                        )}
                        {msg.searchGroundingUsed && (
                          <span className="px-1.5 py-0.2 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/20 text-[10px] flex items-center gap-1">
                            <Globe className="w-2.5 h-2.5" />
                            <span>全网实时检索 · 现实对齐</span>
                          </span>
                        )}
                      </div>

                      {/* Copy Action */}
                      <button
                        id={`copy-msg-${msg.id}`}
                        type="button"
                        onClick={() => handleCopyMessage(msg.id, msg.content)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-white/10 text-white/60 hover:text-white flex items-center gap-1 text-[10px]"
                        title="复制回答"
                      >
                        {isCopiedId === msg.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">已复制</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>复制</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}

                  {/* Message Content Rendered with Markdown */}
                  <div className="prose prose-invert prose-sm max-w-none leading-relaxed text-white/90 break-words">
                    <div className="markdown-body">
                      <Markdown>{msg.content}</Markdown>
                    </div>
                  </div>

                  {/* Google Search Grounding Sources (Citations) */}
                  {!isUser && msg.groundingSources && msg.groundingSources.length > 0 && (
                    <div className="mt-3.5 pt-3 border-t border-white/[0.08] bg-black/20 rounded-xl p-2.5">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-300 mb-2">
                        <Globe className="w-3.5 h-3.5" />
                        <span>全网实时检索客观来源引用 (Grounding Sources)</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {msg.groundingSources.map((source, sIdx) => (
                          <a
                            key={sIdx}
                            href={source.uri}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] text-white/70 hover:text-emerald-300 transition-colors flex items-center justify-between gap-1 group/link truncate"
                            title={source.title}
                          >
                            <span className="truncate">{source.title || source.uri}</span>
                            <ExternalLink className="w-3 h-3 opacity-60 group-hover/link:opacity-100 flex-shrink-0" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Message Timestamp */}
                  <div
                    className={`text-[10px] mt-2 text-right ${
                      isUser ? "text-cyan-100/60" : "text-white/30"
                    } font-mono`}
                  >
                    {new Date(msg.timestamp).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>

                {/* User Avatar */}
                {isUser && (
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center flex-shrink-0 text-sm shadow-md mt-0.5">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            );
          })}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex gap-3 justify-start animate-fade-in">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center flex-shrink-0 text-sm shadow-md">
                <Bot className="w-4 h-4 text-white animate-spin" />
              </div>
              <div className="bg-[#13192B]/90 border border-cyan-500/30 rounded-2xl rounded-tl-sm p-3.5 shadow-lg flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
                  <div
                    className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  />
                  <div
                    className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  />
                </div>
                <span className="text-xs text-cyan-300 font-mono">
                  {enableSearchGrounding
                    ? `正在连接 Google 实时检索并由 ${selectedModelConfig.name} 思考中...`
                    : `${selectedModelConfig.name} 正在深度构思爆款策略...`}
                </span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Pre-built Prompt Suggestions Chips */}
        <div className="flex-shrink-0 px-4 sm:px-6 py-2 bg-[#060810]/70 border-t border-white/[0.04] flex items-center gap-2 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 text-[11px] text-white/50 flex-shrink-0 font-medium">
            <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-cyan-300 font-medium">{activeProduct.model || activeProduct.name} 灵感提问:</span>
          </div>
          {getProductSuggestedPrompts(persona, activeProduct).map((promptText, idx) => (
            <button
              key={idx}
              id={`suggested-prompt-${idx}`}
              type="button"
              disabled={isLoading}
              onClick={() => handleSendMessage(promptText)}
              className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-cyan-500/15 text-white/75 hover:text-cyan-200 border border-white/[0.08] hover:border-cyan-500/30 text-xs whitespace-nowrap transition-all flex-shrink-0 hover:scale-105 active:scale-95"
            >
              {promptText}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <footer className="flex-shrink-0 p-3 sm:p-4 bg-[#0A0E1A] border-t border-white/[0.08]">
          <div className="relative flex items-end gap-2 bg-[#121829] rounded-xl border border-white/15 focus-within:border-cyan-500/60 focus-within:shadow-[0_0_20px_rgba(6,182,212,0.15)] p-2 transition-all">
            <textarea
              ref={inputRef}
              id="gemini-chat-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
              placeholder={`向「${currentPersonaConfig.name}」提问【${activeProduct.name}】或输入任意产品（如 REC10、V17、QS40、竞品对比等）... (Enter 发送)`}
              rows={2}
              className="flex-1 bg-transparent text-white placeholder-white/40 text-xs sm:text-sm resize-none focus:outline-none px-2 py-1 leading-relaxed custom-scrollbar"
            />

            <div className="flex items-center gap-1.5 flex-shrink-0 pb-0.5">
              <button
                id="send-gemini-chat-message-button"
                type="button"
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim() || isLoading}
                className={`p-2.5 rounded-lg flex items-center justify-center transition-all ${
                  inputValue.trim() && !isLoading
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 hover:scale-105 active:scale-95"
                    : "bg-white/5 text-white/30 cursor-not-allowed"
                }`}
                title="发送消息 (Enter)"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between text-[11px] text-white/40 mt-1.5 px-1">
            <span>支持多轮连续对话与上下文记忆 • 模型: {selectedModelConfig.name}</span>
            <span>按 Enter 发送 / Shift+Enter 换行</span>
          </div>
        </footer>
      </div>
    </div>
  );
};
