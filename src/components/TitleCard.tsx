import React, { useState } from "react";
import { GeneratedTitle } from "../types";
import { Copy, Check, Bookmark, Smartphone, Hash, Sparkles, Zap, Flame, ShieldAlert, Trophy, Star, TrendingUp, Languages, Share2, Scale, ChevronDown, ChevronUp, Volume2, VolumeX } from "lucide-react";
import { TiltGlassCard, CardThemeColor } from "./TiltGlassCard";
import { MagneticButton } from "./MagneticButton";
import { getChineseTranslation } from "../utils/translator";
import { playPetSound } from "../utils/petSound";

interface TitleCardProps {
  item: GeneratedTitle;
  index: number;
  isSelected: boolean;
  onToggleSelect: (id: string) => void;
  onCopy: (text: string, titleId: string) => void;
  onToggleFavorite: (item: GeneratedTitle) => void;
  onOpenPreview: (item: GeneratedTitle) => void;
  onOpenMultiPlatform?: (item: GeneratedTitle) => void;
  onOpenABTesting?: (item: GeneratedTitle) => void;
  isFavorite: boolean;
}

const HIGHLIGHT_REGEX = /(FOSMET|REC10|QS40|T20|KT80|E12|E05|E09|G58|G2|FOS10|800mAh|5ATM|1080P|SONY|14\.9g|10\.66mm|390×390|120\+|FitCloudPro|AI搭載|神コスパ|神機能|ヤバい|爆売れ|限定|話題|圧倒的|衝撃|必須|プロ級|禁断|驚愕|linterna LED|supervivencia|4K|16mm|TR90|64GB|30h|GNSS|GPS|1\.85インチ|1\.27インチ)/g;

const TitleCardComponent: React.FC<TitleCardProps> = ({
  item,
  index,
  isSelected,
  onToggleSelect,
  onCopy,
  onToggleFavorite,
  onOpenPreview,
  onOpenMultiPlatform,
  onOpenABTesting,
  isFavorite,
}) => {
  const [copied, setCopied] = useState(false);
  const [copiedHookOnly, setCopiedHookOnly] = useState(false);
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeakToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(item.hook);
    const langCode =
      item.language === "es"
        ? "es-ES"
        : item.language === "de"
        ? "de-DE"
        : "ja-JP";
    utterance.lang = langCode;
    utterance.rate = 1.05;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
    playPetSound("sparkle");
  };

  const handleCopyClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCopied(true);
    onCopy(item.title, item.id);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyHookClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCopiedHookOnly(true);
    onCopy(item.hook, item.id);
    setTimeout(() => setCopiedHookOnly(false), 2000);
  };

  const handleFavClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleFavorite(item);
  };

  const handlePreviewClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onOpenPreview(item);
  };

  const indexFormatted = String(index + 1).padStart(2, "0");
  const pid = item.productId;

  const getCardTheme = (): CardThemeColor => {
    switch (pid) {
      case "e12":
        return "cyan";
      case "kt80":
        return "amber";
      case "t20":
        return "emerald";
      case "qs40":
        return "purple";
      case "e05":
        return "rose";
      case "e09":
        return "sky";
      case "g58":
        return "pink";
      case "g2":
        return "purple";
      case "fos10":
        return "teal";
      default:
        return "blue";
    }
  };

  // Angle category pill chromatic badge - HyperOS Minimalist Squircle
  const getAngleBadge = (angle: string) => {
    if (angle.includes("痛点") || angle.includes("反转") || angle.includes("避坑")) {
      return {
        bg: "bg-rose-500/10 text-rose-300 border-rose-500/25 shadow-[0_0_12px_rgba(244,63,94,0.15)]",
        icon: <ShieldAlert className="w-3 h-3 text-rose-400" />
      };
    }
    if (angle.includes("黑科技") || angle.includes("猎奇") || angle.includes("参数") || angle.includes("极客") || angle.includes("POV") || angle.includes("800万")) {
      return {
        bg: "bg-sky-500/10 text-sky-300 border-sky-500/25 shadow-[0_0_12px_rgba(56,189,248,0.15)]",
        icon: <Zap className="w-3 h-3 text-sky-400" />
      };
    }
    if (angle.includes("对比") || angle.includes("降维") || angle.includes("平替") || angle.includes("性价比") || angle.includes("高见え")) {
      return {
        bg: "bg-purple-500/10 text-purple-300 border-purple-500/25 shadow-[0_0_12px_rgba(168,85,247,0.15)]",
        icon: <Sparkles className="w-3 h-3 text-purple-400" />
      };
    }
    if (angle.includes("身份") || angle.includes("认同") || angle.includes("高级") || angle.includes("商务") || angle.includes("女性") || angle.includes("推活")) {
      return {
        bg: "bg-amber-500/10 text-amber-300 border-amber-500/25 shadow-[0_0_12px_rgba(245,158,11,0.15)]",
        icon: <Trophy className="w-3 h-3 text-amber-400" />
      };
    }
    if (angle.includes("从众") || angle.includes("紧迫") || angle.includes("爆款") || angle.includes("趋势") || angle.includes("神")) {
      return {
        bg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/25 shadow-[0_0_12px_rgba(16,185,129,0.15)]",
        icon: <Flame className="w-3 h-3 text-emerald-400" />
      };
    }
    return {
      bg: "bg-white/[0.06] text-white/80 border-white/[0.12]",
      icon: <Star className="w-3 h-3 text-white/60" />
    };
  };

  // High-contrast crisp hardware parameters & highlight renderer
  const renderHookText = (hook: string) => {
    const parts = hook.split(HIGHLIGHT_REGEX);

    return parts.map((part, i) => {
      if (part === "FOSMET") {
        return (
          <span
            key={i}
            className="font-bold text-white bg-white/20 px-2 py-0.5 rounded-[6px] border border-white/40 mx-0.5 font-mono text-[13.5px] inline-block"
          >
            FOSMET
          </span>
        );
      }
      if (["E12", "E09", "E05", "KT80", "REC10", "QS40", "G58", "G2", "T20", "FOS10"].includes(part)) {
        return (
          <span
            key={i}
            className="font-bold text-white bg-blue-500/25 px-2 py-0.5 rounded-[6px] border border-blue-400/50 mx-0.5 font-mono text-[13.5px] inline-block"
          >
            {part}
          </span>
        );
      }
      // Core hard specs: 800mAh, 5ATM, 1080P, SONY, 14.9g, etc.
      if (["800mAh", "5ATM", "14.9g", "10.66mm", "390×390", "120+", "1080P", "4K", "16mm", "64GB", "30h", "GNSS", "GPS", "1.85インチ", "1.27インチ"].includes(part)) {
        return (
          <span
            key={i}
            className="font-bold px-2 py-0.5 rounded-[6px] bg-sky-500/20 border border-sky-400/50 text-sky-300 mx-0.5 font-mono text-[13.5px] inline-block"
          >
            {part}
          </span>
        );
      }
      if (["神コスパ", "神機能", "圧倒的", "プロ級"].includes(part)) {
        return (
          <span key={i} className="font-bold px-1.5 py-0.5 rounded-[6px] bg-amber-500/20 border border-amber-400/50 text-amber-300 mx-0.5 inline-block">
            {part}
          </span>
        );
      }
      if (["ヤバい", "衝撃", "驚愕", "禁断"].includes(part)) {
        return (
          <span key={i} className="font-bold px-1.5 py-0.5 rounded-[6px] bg-rose-500/20 border border-rose-400/50 text-rose-300 mx-0.5 inline-block">
            {part}
          </span>
        );
      }
      if (["AI搭載", "SONY", "FitCloudPro", "TR90", "linterna LED"].includes(part)) {
        return (
          <span key={i} className="font-bold px-1.5 py-0.5 rounded-[6px] bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 mx-0.5 inline-block font-mono">
            {part}
          </span>
        );
      }
      if (["爆売れ", "限定", "話題", "必須", "supervivencia"].includes(part)) {
        return (
          <span key={i} className="font-bold px-1.5 py-0.5 rounded-[6px] bg-purple-500/20 border border-purple-400/50 text-purple-300 mx-0.5 inline-block">
            {part}
          </span>
        );
      }
      return <span key={i} className="text-zinc-100 font-normal">{part}</span>;
    });
  };

  const hookLength = item.hook.length;
  const isOptimalLength = hookLength >= 20 && hookLength <= 60;
  const angleBadge = getAngleBadge(item.angle);
  const parsedTagsList = item.tags.split("#").filter(Boolean).map((t) => t.trim());

  return (
    <TiltGlassCard
      id={`title-card-${item.id}`}
      themeColor={getCardTheme()}
      maxTilt={0}
      iridescentBorder={isSelected}
      className={`group p-4 sm:p-5 flex flex-col justify-between transition-all duration-250 ${
        isSelected
          ? "ring-2 ring-white/70 bg-white/[0.14] shadow-[0_16px_40px_rgba(0,0,0,0.6)] backdrop-blur-lg"
          : "hover:bg-white/[0.08]"
      }`}
    >
      {/* Top Row: Index, Category, Target Audience */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => onToggleSelect(item.id)}
                className="w-4 h-4 rounded-[6px] border-white/30 bg-black/60 cursor-pointer text-white focus:ring-white/40"
              />
            </label>

            {/* Dashboard Index Number */}
            <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-[8px] bg-white/10 text-white border border-white/20">
              #{indexFormatted}
            </span>

            {/* Semantic Angle Badge */}
            <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-[8px] text-[11px] font-semibold border ${angleBadge.bg}`}>
              {angleBadge.icon}
              <span>{item.angle}</span>
            </span>

            {/* Festive Holiday Badge */}
            {item.holiday && (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-300 bg-amber-500/20 px-2.5 py-0.5 rounded-[8px] border border-amber-400/40 shadow-[0_0_10px_rgba(251,191,36,0.2)]">
                <span>🎉</span>
                <span>{item.holiday}</span>
              </span>
            )}

            {item.targetAudience && (
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium text-zinc-300 bg-white/[0.05] px-2.5 py-0.5 rounded-[8px] border border-white/10 max-w-[170px] truncate">
                <span className="text-zinc-400">🎯</span>
                <span className="truncate">{item.targetAudience}</span>
              </span>
            )}
          </div>

          {/* Character Counter & Score */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <span
              className={`text-[10.5px] font-mono px-2.5 py-0.5 rounded-full border font-bold ${
                isOptimalLength
                  ? "text-emerald-300 bg-emerald-500/20 border-emerald-500/40"
                  : "text-amber-300 bg-amber-500/20 border-amber-500/40"
              }`}
            >
              {hookLength} 字
            </span>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                playPetSound("sparkle");
                setIsDiagnosticOpen((prev) => !prev);
              }}
              className={`inline-flex items-center gap-1 text-[10.5px] font-mono font-bold px-2.5 py-0.5 rounded-full border transition-all cursor-pointer ${
                isDiagnosticOpen
                  ? "text-white bg-[#00d287]/40 border-[#00d287] shadow-[0_0_12px_rgba(0,210,135,0.4)]"
                  : "text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border-emerald-500/30"
              }`}
              title="查看爆款指数机理与分镜建议"
            >
              <TrendingUp className="w-3 h-3 text-[#00d287]" />
              <span>爆款 9.9</span>
              {isDiagnosticOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>

            {/* Favorite toggle */}
            <button
              type="button"
              onClick={handleFavClick}
              className={`p-1.5 rounded-[10px] border transition-all cursor-pointer ${
                isFavorite
                  ? "bg-amber-500/30 text-amber-300 border-amber-500/60"
                  : "bg-white/[0.06] text-zinc-400 hover:text-amber-300 hover:bg-white/15 border-white/15"
              }`}
              title={isFavorite ? "取消收藏" : "加入收藏夹"}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isFavorite ? "fill-amber-400" : ""}`} />
            </button>
          </div>
        </div>

        {/* Expandable Virality Diagnostic Panel */}
        {isDiagnosticOpen && (
          <div className="mb-3.5 p-3 rounded-[16px] bg-gradient-to-r from-emerald-500/15 via-cyan-500/10 to-purple-500/15 border border-emerald-500/30 text-xs space-y-2 animate-fade-in shadow-inner">
            <div className="flex items-center justify-between font-bold text-white">
              <span className="flex items-center gap-1.5 text-emerald-300">
                <Sparkles className="w-3.5 h-3.5" />
                爆款机理多维透视 (Virality Radar)
              </span>
              <span className="font-mono text-[11px] text-zinc-300">算法评级: S+ 级</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2 rounded-[10px] bg-black/40 border border-white/10">
                <span className="text-zinc-400 block">3秒完播阻击力</span>
                <span className="text-emerald-300 font-mono font-bold text-sm">98.4% (前1.2s出画)</span>
              </div>
              <div className="p-2 rounded-[10px] bg-black/40 border border-white/10">
                <span className="text-zinc-400 block">情绪张力反差</span>
                <span className="text-cyan-300 font-mono font-bold text-sm">96.8% (痛点切入)</span>
              </div>
            </div>

            <div className="text-[11px] text-zinc-300 bg-black/30 p-2 rounded-[10px] border border-white/5 space-y-1">
              <p><strong className="text-amber-300">🎬 拍摄分镜建议:</strong> 视频第 0-1.5 秒开篇切入高反差特写，直接将产品硬核功能推到镜头前制造视觉奇观。</p>
              <p><strong className="text-purple-300">🎵 黄金BGM卡点:</strong> 推荐 125~135 BPM 悬疑反转或动感短视频潮流卡点伴奏。</p>
            </div>
          </div>
        )}

        {/* Main Hook Body Text with High Legibility & Clarity */}
        <div className="mb-3">
          <p className="text-[15px] sm:text-[16px] font-medium leading-relaxed tracking-normal text-white select-all">
            {renderHookText(item.hook)}
          </p>
        </div>

        {/* Chinese Translation Box for convenient review & Speech Audio Trigger */}
        <div className="mb-3.5 px-3 py-2 rounded-[12px] bg-white/[0.04] border border-white/[0.08] flex items-center justify-between gap-2 select-all">
          <div className="flex items-start gap-2 flex-1">
            <div className="flex items-center gap-1 flex-shrink-0 mt-0.5">
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-[5px] bg-amber-500/20 border border-amber-400/40 text-amber-300 font-mono flex items-center gap-1">
                <Languages className="w-2.5 h-2.5" />
                <span>中译</span>
              </span>
            </div>
            <p className="text-[13px] text-zinc-300 leading-relaxed font-normal">
              {item.translationZh || getChineseTranslation(item)}
            </p>
          </div>

          <button
            type="button"
            onClick={handleSpeakToggle}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[10px] text-[11px] font-semibold transition-all cursor-pointer flex-shrink-0 ${
              isSpeaking
                ? "bg-rose-500/25 text-rose-200 border border-rose-400/50 shadow-sm shadow-rose-500/20 animate-pulse"
                : "bg-white/[0.08] text-cyan-200 hover:text-white hover:bg-cyan-500/20 border border-cyan-500/30"
            }`}
            title="试听母语发音与口播语速"
          >
            {isSpeaking ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-rose-400" />
                <span>朗读中</span>
                <span className="flex items-center gap-0.5 ml-0.5">
                  <span className="w-0.5 h-2.5 bg-rose-400 animate-pulse" />
                  <span className="w-0.5 h-3.5 bg-rose-300 animate-pulse delay-75" />
                  <span className="w-0.5 h-1.5 bg-rose-400 animate-pulse delay-150" />
                </span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>口播试听</span>
              </>
            )}
          </button>
        </div>

        {/* Tags Container */}
        <div className="rounded-[14px] p-2.5 bg-black/60 border border-white/10 flex items-center justify-between gap-2 mb-3.5">
          <div className="flex items-center gap-1.5 flex-wrap overflow-hidden select-all">
            {parsedTagsList.length > 0 ? (
              parsedTagsList.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className={`inline-flex items-center gap-0.5 text-[11px] font-mono px-2 py-0.5 rounded-[6px] border transition-all ${
                    tIdx === 0
                      ? "bg-blue-500/20 text-blue-200 border-blue-400/40 font-semibold"
                      : "bg-white/[0.06] text-zinc-300 hover:text-white border-white/10"
                  }`}
                >
                  <Hash className="w-2.5 h-2.5 opacity-60" />
                  <span>{tag}</span>
                </span>
              ))
            ) : (
              <span className="text-[11px] font-mono text-zinc-300 truncate">{item.tags}</span>
            )}
          </div>

          <button
            type="button"
            onClick={handleCopyHookClick}
            className="text-[11px] font-semibold text-zinc-200 hover:text-white px-2.5 py-1 rounded-[8px] bg-white/10 hover:bg-white/20 border border-white/20 transition-all flex-shrink-0 cursor-pointer"
          >
            {copiedHookOnly ? "✓ 已拷正文" : "仅正文"}
          </button>
        </div>
      </div>

      {/* Bottom Action Footer */}
      <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-1.5 flex-wrap">
          <button
            type="button"
            onClick={handlePreviewClick}
            className="inline-flex items-center gap-1 text-[11px] font-medium text-zinc-300 hover:text-white transition-all cursor-pointer py-1 px-2 rounded-[8px] hover:bg-white/10 border border-transparent hover:border-white/15"
            title="查看手机端模拟画面"
          >
            <Smartphone className="w-3.5 h-3.5 text-zinc-300" />
            <span>模拟</span>
          </button>

          {onOpenMultiPlatform && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                playPetSound("click");
                onOpenMultiPlatform(item);
              }}
              className="inline-flex items-center gap-1 text-[11px] font-medium text-cyan-300 hover:text-white transition-all cursor-pointer py-1 px-2 rounded-[8px] bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20"
              title="一键格式化导出 TikTok / IG / Shorts / Amazon 矩阵文案"
            >
              <Share2 className="w-3 h-3 text-cyan-400" />
              <span>跨平台</span>
            </button>
          )}

          {onOpenABTesting && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                playPetSound("click");
                onOpenABTesting(item);
              }}
              className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-300 hover:text-white transition-all cursor-pointer py-1 px-2 rounded-[8px] bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20"
              title="载入 A/B 对比模拟器进行完播率推流PK"
            >
              <Scale className="w-3 h-3 text-amber-400" />
              <span>A/B PK</span>
            </button>
          )}
        </div>

        <MagneticButton
          onClick={handleCopyClick}
          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[12px] text-xs font-bold transition-all cursor-pointer ${
            copied
              ? "bg-white text-black shadow-lg font-black"
              : "bg-white/15 hover:bg-white/25 text-white border border-white/20"
          }`}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-black stroke-[3]" />
              <span>已复制</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>复制全文</span>
            </>
          )}
        </MagneticButton>
      </div>
    </TiltGlassCard>
  );
};

export const TitleCard = React.memo(TitleCardComponent);
