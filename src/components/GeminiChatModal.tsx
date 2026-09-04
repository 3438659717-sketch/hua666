import React, { useState, useEffect, useRef } from "react";
import {
  ChatbotPersona,
  GeminiModelId,
  ChatMessage,
  ProductConfig,
  GroundingSource,
} from "../types";
import {
  PERSONA_CONFIGS,
  MODEL_OPTIONS,
  sendChatMessage,
  loadSavedChatHistory,
  saveChatHistory,
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
  const [model, setModel] = useState<GeminiModelId>("gemini-3.5-flash");
  const [enableSearchGrounding, setEnableSearchGrounding] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCopiedId, setIsCopiedId] = useState<string | null>(null);
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Load chat history from localStorage on first mount
  useEffect(() => {
    const saved = loadSavedChatHistory();
    if (saved.length > 0) {
      setMessages(saved);
    } else {
      // Create initial greeting
      const initialGreeting: ChatMessage = {
        id: `msg-welcome-${Date.now()}`,
        role: "model",
        content: `👋 **你好！我是 FOSMET & DyMona AI 跨境出海智囊团**。\n\n当前已自动挂载产品上下文：**${currentProduct.name}**（${currentProduct.japaneseType}）。\n\n你可以随时向我提问短视频爆款钩子、分镜脚本、外语母语级本土化润色，或开启 **Google 实时搜索 (Search Grounding)** 检索日区/欧美实时市场与竞品趋势！`,
        timestamp: new Date().toISOString(),
        persona: "tiktok_strategist",
        modelUsed: "gemini-3.5-flash",
      };
      setMessages([initialGreeting]);
      saveChatHistory([initialGreeting]);
    }
  }, [currentProduct.name, currentProduct.japaneseType]);

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
      setModel("gemini-3.5-flash");
    } else {
      setModel(PERSONA_CONFIGS[p].recommendedModel);
    }
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
        productContext: currentProduct,
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
        saveChatHistory(finalMessages);
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
        saveChatHistory(finalMessages);
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
      saveChatHistory(finalMessages);
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

  const handleClearHistory = () => {
    if (window.confirm("确定要清空当前的对话历史记录吗？")) {
      const welcome: ChatMessage = {
        id: `msg-welcome-${Date.now()}`,
        role: "model",
        content: `👋 **对话历史已清空**。\n\n当前已就绪，正在针对 **${currentProduct.name}** 为你提供实时出海营销支持。请选择下方预设问题或直接输入你的想法！`,
        timestamp: new Date().toISOString(),
        persona,
        modelUsed: model,
      };
      setMessages([welcome]);
      saveChatHistory([welcome]);
    }
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
                  <span>Gemini AI 出海爆款智囊团</span>
                </h2>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-mono font-medium bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  {currentProduct.name}
                </span>
                {enableSearchGrounding && (
                  <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1 animate-pulse">
                    <Globe className="w-3 h-3" />
                    <span>Google 实时检索已开启</span>
                  </span>
                )}
              </div>
              <p className="text-xs text-white/50 truncate">
                多轮深度对话 • 4 大专家角色 • Google Search Grounding • 矩阵短视频赋能
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

            {/* Clear */}
            <button
              id="clear-chat-button"
              type="button"
              onClick={handleClearHistory}
              title="清空历史记录"
              className="p-2 rounded-lg bg-white/5 hover:bg-rose-500/20 text-white/70 hover:text-rose-300 transition-colors border border-white/10 text-xs flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">清空</span>
            </button>

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
            {/* Google Search Grounding Quick Toggle */}
            <button
              id="toggle-search-grounding-button"
              type="button"
              onClick={() => {
                const next = !enableSearchGrounding;
                setEnableSearchGrounding(next);
                if (next) {
                  setModel("gemini-3.5-flash");
                }
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-all border ${
                enableSearchGrounding
                  ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.2)]"
                  : "bg-white/5 text-white/50 border-white/10 hover:bg-white/10 hover:text-white/80"
              }`}
              title="切换是否使用 Google 实时搜索获取最新网络数据与趋势"
            >
              <Search className={`w-3 h-3 ${enableSearchGrounding ? "text-emerald-400" : ""}`} />
              <span>Google 实时检索: {enableSearchGrounding ? "ON" : "OFF"}</span>
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
                          {PERSONA_CONFIGS[msg.persona || "tiktok_strategist"]?.name || "Gemini AI"}
                        </span>
                        {msg.modelUsed && (
                          <span className="px-1.5 py-0.2 rounded bg-white/5 text-white/50 border border-white/5 text-[10px]">
                            {msg.modelUsed}
                          </span>
                        )}
                        {msg.searchGroundingUsed && (
                          <span className="px-1.5 py-0.2 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/20 text-[10px] flex items-center gap-1">
                            <Globe className="w-2.5 h-2.5" />
                            <span>Google 实时检索</span>
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
                        <span>Google 实时检索数据来源引用 (Grounding Sources)</span>
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
          <div className="flex items-center gap-1 text-[11px] text-white/40 flex-shrink-0 font-medium">
            <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
            <span>灵感提问:</span>
          </div>
          {currentPersonaConfig.suggestedPrompts.map((promptText, idx) => (
            <button
              key={idx}
              id={`suggested-prompt-${idx}`}
              type="button"
              disabled={isLoading}
              onClick={() => handleSendMessage(promptText)}
              className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-cyan-500/15 text-white/70 hover:text-cyan-200 border border-white/[0.08] hover:border-cyan-500/30 text-xs whitespace-nowrap transition-all flex-shrink-0"
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
              placeholder={`向「${currentPersonaConfig.name}」提问... (Shift+Enter 换行，Enter 发送)`}
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
