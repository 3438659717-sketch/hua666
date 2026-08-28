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

  // Angle category pill chromatic badge - HyperOS Minimalist Squircle
  const getAngleBadge = (angle: string) => {
    if (angle.includes("痛点") || angle.includes("反转") || angle.includes("避坑")) {
      return {
        bg: "bg-rose-500/10 text-rose-300 border-rose-500/20",
        icon: <ShieldAlert className="w-3 h-3 text-rose-400" />
      };
    }
    if (angle.includes("黑科技") || angle.includes("猎奇") || angle.includes("参数") || angle.includes("极客") || angle.includes("POV") || angle.includes("800万")) {
      return {
        bg: "bg-sky-500/10 text-sky-300 border-sky-500/20",
        icon: <Zap className="w-3 h-3 text-sky-400" />
      };
    }
    if (angle.includes("对比") || angle.includes("降维") || angle.includes("平替") || angle.includes("性价比") || angle.includes("高见え")) {
      return {
        bg: "bg-purple-500/10 text-purple-300 border-purple-500/20",
        icon: <Sparkles className="w-3 h-3 text-purple-400" />
      };
    }
    if (angle.includes("身份") || angle.includes("认同") || angle.includes("高级") || angle.includes("商务") || angle.includes("女性") || angle.includes("推活")) {
      return {
        bg: "bg-amber-500/10 text-amber-300 border-amber-500/20",
        icon: <Trophy className="w-3 h-3 text-amber-400" />
      };
    }
    if (angle.includes("从众") || angle.includes("紧迫") || angle.includes("爆款") || angle.includes("趋势") || angle.includes("神")) {
      return {
        bg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
        icon: <Flame className="w-3 h-3 text-emerald-400" />
      };
    }
    return {
      bg: "bg-white/[0.06] text-white/80 border-white/[0.10]",
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
            className="font-bold text-white bg-white/10 px-1.5 py-0.5 rounded-[6px] border border-white/20 mx-0.5 font-mono text-[13px] inline-block"
          >
            FOSMET
          </span>
        );
      }
      if (["E12", "E09", "E05", "KT80", "REC10", "QS40", "G58", "G2", "T20", "FOS10"].includes(part)) {
        return (
          <span
            key={i}
            className="font-bold text-white bg-white/[0.12] px-1.5 py-0.5 rounded-[6px] border border-white/25 mx-0.5 font-mono text-[13px] inline-block"
          >
            {part}
          </span>
        );
      }
      if (["神コスパ", "神機能", "圧倒的", "プロ級"].includes(part)) {
        return (
          <span key={i} className="font-semibold text-amber-300 bg-amber-500/15 px-1 py-0.5 rounded-[6px] border border-amber-500/30 mx-0.5">
            {part}
          </span>
        );
      }
      if (["ヤバい", "衝撃", "驚愕", "禁断"].includes(part)) {
        return (
          <span key={i} className="font-semibold text-rose-300 bg-rose-500/15 px-1 py-0.5 rounded-[6px] border border-rose-500/30 mx-0.5">
            {part}
          </span>
        );
      }
      if (["AI搭載", "16mm", "SONY", "4K", "14.9g", "800mAh", "5ATM", "FitCloudPro", "linterna LED"].includes(part)) {
        return (
          <span key={i} className="font-semibold text-cyan-300 bg-cyan-500/15 px-1 py-0.5 rounded-[6px] border border-cyan-500/30 mx-0.5 font-mono">
            {part}
          </span>
        );
      }
      if (["爆売れ", "限定", "話題", "必须", "supervivencia"].includes(part)) {
        return (
          <span key={i} className="font-semibold text-emerald-300 bg-emerald-500/15 px-1 py-0.5 rounded-[6px] border border-emerald-500/30 mx-0.5">
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
      maxTilt={5}
      iridescentBorder={isSelected}
      className={`group p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 ${
        isSelected
          ? "ring-2 ring-white/60 bg-white/[0.14] shadow-2xl"
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
                className="w-4 h-4 rounded-[6px] border-white/20 bg-black/40 cursor-pointer text-white focus:ring-white/30"
              />
            </label>

            {/* Dashboard Index Number */}
            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-[8px] bg-white/[0.06] text-white/90 border border-white/[0.08]">
              #{indexFormatted}
            </span>

            {/* Semantic Angle Badge */}
            <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-[8px] text-[11px] font-semibold border ${angleBadge.bg}`}>
              {angleBadge.icon}
              <span>{item.angle}</span>
            </span>

            {item.targetAudience && (
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-medium text-white/60 bg-white/[0.03] px-2 py-0.5 rounded-[8px] border border-white/[0.06] max-w-[160px] truncate">
                <span className="text-white/40">🎯</span>
                <span className="truncate">{item.targetAudience}</span>
              </span>
            )}
          </div>

          {/* Character Counter & Score */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <span
              className={`text-[10px] font-mono px-2 py-0.5 rounded-full border font-semibold ${
                isOptimalLength
                  ? "text-emerald-300 bg-emerald-500/10 border-emerald-500/30"
                  : "text-amber-300 bg-amber-500/10 border-amber-500/30"
              }`}
            >
              {hookLength} 字
            </span>

            <span className="hidden xl:inline-flex items-center gap-1 text-[10px] font-mono font-semibold text-white/70 bg-white/[0.05] px-2 py-0.5 rounded-full border border-white/[0.08]">
              <TrendingUp className="w-3 h-3 text-[#00d287]" />
              <span>爆款 9.8</span>
            </span>

            {/* Favorite toggle */}
            <button
              type="button"
              onClick={handleFavClick}
              className={`p-1.5 rounded-[10px] border transition-all cursor-pointer ${
                isFavorite
                  ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                  : "bg-white/[0.03] text-white/40 hover:text-amber-300 hover:bg-white/[0.08] border-white/[0.06]"
              }`}
              title={isFavorite ? "取消收藏" : "加入收藏夹"}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isFavorite ? "fill-amber-400" : ""}`} />
            </button>
          </div>
        </div>

        {/* Main Hook Body Text */}
        <div className="mb-3.5">
          <p className="text-[14px] sm:text-[15px] font-normal text-white/95 leading-relaxed tracking-normal select-all">
            {renderHookText(item.hook)}
          </p>
        </div>

        {/* HyperOS Tags Container */}
        <div className="rounded-[14px] p-2 bg-white/[0.03] border border-white/[0.06] flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5 flex-wrap overflow-hidden select-all">
            {parsedTagsList.length > 0 ? (
              parsedTagsList.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className={`inline-flex items-center gap-0.5 text-[10.5px] font-mono px-2 py-0.5 rounded-[6px] border ${
                    tIdx === 0
                      ? "bg-white/10 text-white border-white/20 font-bold"
                      : "bg-white/[0.04] text-white/70 border-white/[0.06]"
                  }`}
                >
                  <Hash className="w-2.5 h-2.5 opacity-50" />
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
            className="text-[10px] font-medium text-white/60 hover:text-white px-2 py-1 rounded-[8px] hover:bg-white/10 border border-white/10 transition-all flex-shrink-0 cursor-pointer"
          >
            {copiedHookOnly ? "✓ 已拷正文" : "仅正文"}
          </button>
        </div>
      </div>

      {/* Bottom Action Footer */}
      <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={handlePreviewClick}
          className="inline-flex items-center gap-1.5 text-[11.5px] font-medium text-white/60 hover:text-white transition-all cursor-pointer py-1.5 px-2.5 rounded-[10px] hover:bg-white/[0.06]"
        >
          <Smartphone className="w-3.5 h-3.5 text-white/70" />
          <span>TikTok 模拟</span>
        </button>

        <MagneticButton
          onClick={handleCopyClick}
          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[12px] text-xs font-semibold transition-all cursor-pointer ${
            copied
              ? "bg-white text-black shadow-md font-bold"
              : "bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/[0.12]"
          }`}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-black" />
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
