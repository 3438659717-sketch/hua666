import React, { useState } from "react";
import { GeneratedTitle } from "../types";
import { Copy, Check, Bookmark, Smartphone, Hash, Sparkles, Zap, Flame, ShieldAlert, Trophy, Star, TrendingUp } from "lucide-react";
import { TiltGlassCard, CardThemeColor } from "./TiltGlassCard";
import { MagneticButton } from "./MagneticButton";

interface TitleCardProps {
  item: GeneratedTitle;
  index: number;
  isSelected: boolean;
  onToggleSelect: (id: string) => void;
  onCopy: (text: string, titleId: string) => void;
  onToggleFavorite: (item: GeneratedTitle) => void;
  onOpenPreview: (item: GeneratedTitle) => void;
  isFavorite: boolean;
}

const HIGHLIGHT_REGEX = /(FOSMET|REC10|QS40|T20|KT80|E12|E05|E09|G58|G2|FOS10|神コスパ|ヤバい|神機能|AI搭載|16mm|SONY|4K|14\.9g|800mAh|5ATM|FitCloudPro|爆売れ|限定|話題|圧倒的|衝撃|必須|プロ級|禁断|驚愕|linterna LED|supervivencia)/g;

const TitleCardComponent: React.FC<TitleCardProps> = ({
  item,
  index,
  isSelected,
  onToggleSelect,
  onCopy,
  onToggleFavorite,
  onOpenPreview,
  isFavorite,
}) => {
  const [copied, setCopied] = useState(false);
  const [copiedHookOnly, setCopiedHookOnly] = useState(false);

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

  // Angle category pill chromatic badge - Soft, pastel luxury glass aesthetic
  const getAngleBadge = (angle: string) => {
    if (angle.includes("痛点") || angle.includes("反转") || angle.includes("避坑")) {
      return {
        bg: "bg-rose-400/10 text-rose-200 border-rose-300/20 shadow-xs",
        icon: <ShieldAlert className="w-3 h-3 text-rose-300" />
      };
    }
    if (angle.includes("黑科技") || angle.includes("猎奇") || angle.includes("参数") || angle.includes("极客") || angle.includes("POV") || angle.includes("800万")) {
      return {
        bg: "bg-sky-400/10 text-sky-200 border-sky-300/20 shadow-xs",
        icon: <Zap className="w-3 h-3 text-sky-300" />
      };
    }
    if (angle.includes("对比") || angle.includes("降维") || angle.includes("平替") || angle.includes("性价比") || angle.includes("高见え")) {
      return {
        bg: "bg-purple-400/10 text-purple-200 border-purple-300/20 shadow-xs",
        icon: <Sparkles className="w-3 h-3 text-purple-300" />
      };
    }
    if (angle.includes("身份") || angle.includes("认同") || angle.includes("高级") || angle.includes("商务") || angle.includes("女性") || angle.includes("推活")) {
      return {
        bg: "bg-amber-400/10 text-amber-200 border-amber-300/20 shadow-xs",
        icon: <Trophy className="w-3 h-3 text-amber-300" />
      };
    }
    if (angle.includes("从众") || angle.includes("紧迫") || angle.includes("爆款") || angle.includes("趋势") || angle.includes("神")) {
      return {
        bg: "bg-emerald-400/10 text-emerald-200 border-emerald-300/20 shadow-xs",
        icon: <Flame className="w-3 h-3 text-emerald-300" />
      };
    }
    return {
      bg: "bg-white/[0.05] text-white/80 border-white/[0.10]",
      icon: <Star className="w-3 h-3 text-white/50" />
    };
  };

  // Rich multi-color keyword and model renderer in hook text
  const renderHookText = (hook: string) => {
    const parts = hook.split(HIGHLIGHT_REGEX);

    return parts.map((part, i) => {
      if (part === "FOSMET") {
        return (
          <span
            key={i}
            className="font-black text-white bg-gradient-to-r from-white/20 to-white/10 px-1.5 py-0.5 rounded-md border border-white/20 mx-0.5 font-mono text-[13px] tracking-wide inline-block shadow-xs"
          >
            FOSMET
          </span>
        );
      }
      if (["E12", "E09"].includes(part)) {
        return (
          <span
            key={i}
            className="font-black text-cyan-200 bg-cyan-500/25 px-1.5 py-0.5 rounded-md border border-cyan-400/40 mx-0.5 font-mono text-[13px] shadow-[0_0_12px_rgba(6,182,212,0.35)] inline-block"
          >
            {part}
          </span>
        );
      }
      if (["E05", "G58"].includes(part)) {
        return (
          <span
            key={i}
            className="font-black text-pink-200 bg-pink-500/25 px-1.5 py-0.5 rounded-md border border-pink-400/40 mx-0.5 font-mono text-[13px] shadow-[0_0_12px_rgba(244,114,182,0.35)] inline-block"
          >
            {part}
          </span>
        );
      }
      if (part === "KT80") {
        return (
          <span
            key={i}
            className="font-black text-amber-200 bg-amber-500/25 px-1.5 py-0.5 rounded-md border border-amber-400/40 mx-0.5 font-mono text-[13px] shadow-[0_0_12px_rgba(245,158,11,0.35)] inline-block"
          >
            KT80
          </span>
        );
      }
      if (part === "REC10") {
        return (
          <span
            key={i}
            className="font-black text-blue-200 bg-blue-500/25 px-1.5 py-0.5 rounded-md border border-blue-400/40 mx-0.5 font-mono text-[13px] shadow-[0_0_12px_rgba(59,130,246,0.35)] inline-block"
          >
            REC10
          </span>
        );
      }
      if (["QS40", "G2"].includes(part)) {
        return (
          <span
            key={i}
            className="font-black text-purple-200 bg-purple-500/25 px-1.5 py-0.5 rounded-md border border-purple-400/40 mx-0.5 font-mono text-[13px] shadow-[0_0_12px_rgba(168,85,247,0.35)] inline-block"
          >
            {part}
          </span>
        );
      }
      if (["T20", "FOS10"].includes(part)) {
        return (
          <span
            key={i}
            className="font-black text-teal-200 bg-teal-500/25 px-1.5 py-0.5 rounded-md border border-teal-400/40 mx-0.5 font-mono text-[13px] shadow-[0_0_12px_rgba(20,184,166,0.35)] inline-block"
          >
            {part}
          </span>
        );
      }
      // Highlight high-conversion trigger words with vibrant hues
      if (["神コスパ", "神機能", "圧倒的", "プロ級"].includes(part)) {
        return (
          <span key={i} className="font-bold text-amber-300 bg-amber-500/10 px-1 py-0.5 rounded border border-amber-500/25 mx-0.5">
            {part}
          </span>
        );
      }
      if (["ヤバい", "衝撃", "驚愕", "禁断"].includes(part)) {
        return (
          <span key={i} className="font-bold text-rose-300 bg-rose-500/10 px-1 py-0.5 rounded border border-rose-500/25 mx-0.5">
            {part}
          </span>
        );
      }
      if (["AI搭載", "16mm", "SONY", "4K", "14.9g", "800mAh", "5ATM", "FitCloudPro", "linterna LED"].includes(part)) {
        return (
          <span key={i} className="font-bold text-cyan-300 bg-cyan-500/10 px-1 py-0.5 rounded border border-cyan-500/25 mx-0.5 font-mono">
            {part}
          </span>
        );
      }
      if (["爆売れ", "限定", "話題", "必須", "supervivencia"].includes(part)) {
        return (
          <span key={i} className="font-bold text-emerald-300 bg-emerald-500/10 px-1 py-0.5 rounded border border-emerald-500/25 mx-0.5">
            {part}
          </span>
        );
      }
      return <span key={i}>{part}</span>;
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
      maxTilt={6.5}
      iridescentBorder={isSelected}
      className={`group p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 ${
        isSelected
          ? "border-cyan-400 ring-2 ring-cyan-500/50 shadow-2xl shadow-cyan-900/60 bg-[#0a1522]/95 animate-pulse-glow"
          : "hover:border-white/40 shadow-xl hover:shadow-2xl hover:shadow-black/80 hover:-translate-y-1"
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
                className="w-4 h-4 rounded-md border-white/20 bg-[#0c0d12] cursor-pointer text-blue-500 focus:ring-blue-500/40"
              />
            </label>

            {/* Glowing Index Badge */}
            <span className="font-mono text-xs font-black px-2 py-0.5 rounded-md border bg-white/[0.08] text-white/90 border-white/20 shadow-xs">
              #{indexFormatted}
            </span>

            {/* Semantic Angle Badge */}
            <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-[11px] font-bold border backdrop-blur-xs transition-transform group-hover:scale-105 ${angleBadge.bg}`}>
              {angleBadge.icon}
              <span>{item.angle}</span>
            </span>

            {item.targetAudience && (
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-medium text-white/70 bg-white/[0.04] px-2 py-0.5 rounded-md border border-white/[0.08] max-w-[180px] truncate">
                <span className="text-amber-400">🎯</span>
                <span className="truncate">{item.targetAudience}</span>
              </span>
            )}
          </div>

          {/* Character Counter & Score */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <span
              className={`text-[10px] font-mono px-2 py-0.5 rounded-full border font-bold ${
                isOptimalLength
                  ? "text-emerald-300 bg-emerald-500/15 border-emerald-500/40 shadow-[0_0_8px_rgba(16,185,129,0.25)]"
                  : "text-amber-300 bg-amber-500/15 border-amber-500/40"
              }`}
              title="TikTok 黄金前置文案长度建议在 20-60 字符区间"
            >
              正文 {hookLength} 字
            </span>

            {/* Simulated Viral Potential Indicator */}
            <span className="hidden xl:inline-flex items-center gap-1 text-[10px] font-mono font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20 shadow-xs" title="TikTok 算法推荐潜能评分">
              <TrendingUp className="w-3 h-3 text-amber-400" />
              <span>爆款指数 9.8</span>
            </span>

            {/* Favorite toggle */}
            <button
              type="button"
              onClick={handleFavClick}
              className={`p-1.5 rounded-xl border transition-all cursor-pointer active:scale-90 ${
                isFavorite
                  ? "bg-amber-500/25 text-amber-300 border-amber-400/60 shadow-[0_0_12px_rgba(245,158,11,0.4)] scale-110"
                  : "bg-white/[0.04] text-white/40 hover:text-amber-300 hover:bg-amber-500/10 border-white/[0.08] hover:border-amber-500/30"
              }`}
              title={isFavorite ? "取消收藏" : "加入收藏夹"}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isFavorite ? "fill-amber-400" : ""}`} />
            </button>
          </div>
        </div>

        {/* Main Hook Body Text */}
        <div className="mb-3.5">
          <p className="text-[14.5px] sm:text-[15.5px] font-medium text-white/95 leading-relaxed tracking-normal font-sans select-all group-hover:text-white transition-colors">
            {renderHookText(item.hook)}
          </p>
        </div>

        {/* Colorful Tags Container */}
        <div className="bento-glass-tile rounded-xl p-2.5 border border-white/15 flex items-center justify-between gap-2 mb-3 shadow-inner">
          <div className="flex items-center gap-1.5 flex-wrap overflow-hidden select-all">
            {parsedTagsList.length > 0 ? (
              parsedTagsList.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className={`inline-flex items-center gap-0.5 text-[10.5px] font-mono font-semibold px-2 py-0.5 rounded-md border transition-transform hover:scale-105 ${
                    tIdx === 0
                      ? "bg-white/15 text-white border-white/30 font-bold shadow-xs"
                      : "bg-blue-500/15 text-blue-200 border-blue-400/30"
                  }`}
                >
                  <Hash className="w-2.5 h-2.5 opacity-70" />
                  <span>{tag}</span>
                </span>
              ))
            ) : (
              <span className="text-[11px] font-mono text-white/60 truncate">{item.tags}</span>
            )}
          </div>

          <button
            type="button"
            onClick={handleCopyHookClick}
            className="text-[10px] font-semibold text-white/60 hover:text-white px-2 py-1 rounded-lg hover:bg-white/15 border border-white/10 transition-all flex-shrink-0 cursor-pointer shadow-xs"
            title="仅复制主标题（不含标签）"
          >
            {copiedHookOnly ? "✓ 已拷正文" : "仅正文"}
          </button>
        </div>
      </div>

      {/* Bottom Action Footer */}
      <div className="pt-2.5 border-t border-white/[0.06] flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={handlePreviewClick}
          className="inline-flex items-center gap-1.5 text-[11.5px] font-medium text-white/60 hover:text-white transition-all cursor-pointer py-1.5 px-2.5 rounded-xl hover:bg-white/[0.08] border border-transparent hover:border-white/[0.1]"
        >
          <Smartphone className="w-3.5 h-3.5 text-rose-400 drop-shadow-[0_0_8px_rgba(251,113,133,0.5)]" />
          <span>TikTok 模拟</span>
        </button>

        <MagneticButton
          onClick={handleCopyClick}
          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-lg active:scale-95 ${
            copied
              ? "bg-emerald-500 text-white shadow-emerald-500/40"
              : "bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 shadow-md"
          }`}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-white" />
              <span>已复制全文</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>复制标题+标签</span>
            </>
          )}
        </MagneticButton>
      </div>
    </TiltGlassCard>
  );
};

export const TitleCard = React.memo(TitleCardComponent);
