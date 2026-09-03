import React, { useState } from "react";
import { GeneratedTitle } from "../types";
import {
  X,
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  Music,
  Check,
  Copy,
  Feather,
  Languages,
} from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { getChineseTranslation } from "../utils/translator";

interface TikTokPreviewModalProps {
  item: GeneratedTitle | null;
  isOpen: boolean;
  onClose: () => void;
  onCopy: (text: string) => void;
}

export const TikTokPreviewModal: React.FC<TikTokPreviewModalProps> = ({
  item,
  isOpen,
  onClose,
  onCopy,
}) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(24680);
  const [saved, setSaved] = useState(false);
  const [saveCount, setSaveCount] = useState(4920);
  const [copied, setCopied] = useState(false);

  if (!isOpen || !item) return null;

  const pid = item.productId;
  const isFos10 = pid === "fos10" || item.title.includes("FOS10");
  const isG2 = !isFos10 && (pid === "g2" || item.title.includes("G2"));
  const isG58 = !isFos10 && !isG2 && (pid === "g58" || item.title.includes("G58"));
  const isE09 = !isFos10 && !isG2 && !isG58 && (pid === "e09" || item.title.includes("E09"));
  const isE05 = !isFos10 && !isG2 && !isG58 && !isE09 && (pid === "e05" || item.title.includes("E05"));
  const isE12 = !isFos10 && !isG2 && !isG58 && !isE09 && !isE05 && (pid === "e12" || item.title.includes("E12"));
  const isKt80 = !isFos10 && !isG2 && !isG58 && !isE09 && !isE05 && !isE12 && (pid === "kt80" || item.title.includes("KT80"));
  const isT20 = !isFos10 && !isG2 && !isG58 && !isE09 && !isE05 && !isE12 && !isKt80 && (pid === "t20" || item.title.includes("T20"));
  const isQs40 = !isFos10 && !isG2 && !isG58 && !isE09 && !isE05 && !isE12 && !isKt80 && !isT20 && (pid === "qs40" || item.title.includes("QS40"));

  const handleCopy = () => {
    onCopy(item.title);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLikeToggle = () => {
    if (liked) {
      setLiked(false);
      setLikeCount((c) => c - 1);
    } else {
      setLiked(true);
      setLikeCount((c) => c + 1);
    }
  };

  const handleSaveToggle = () => {
    if (saved) {
      setSaved(false);
      setSaveCount((c) => c - 1);
    } else {
      setSaved(true);
      setSaveCount((c) => c + 1);
    }
  };

  const getProductModelTitle = () => {
    if (isFos10) return "FOSMET FOS10 14.9g超轻便携女性智能手表";
    if (isG2) return "FOSMET G2 多功能女性健康智能手表";
    if (isG58) return "FOSMET G58 女性时尚健康智能腕表";
    if (isE09) return "FOSMET E09 SONY高清POV摄像防蓝光眼镜";
    if (isE05) return "FOSMET E05 4档电致变色AI同传智能眼镜";
    if (isE12) return "FOSMET E12 摄像AI开放式蓝牙耳机";
    if (isKt80) return "FOSMET KT80 800mAh强光潜水表";
    if (isT20) return "FOSMET T20 户外GPS探险表";
    if (isQs40) return "FOSMET QS40 AI智能腕表";
    return "FOSMET REC10 AI名片录音卡";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-sm sm:max-w-[400px] hyper-glass rounded-[32px] shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Control Bar */}
        <div className="px-5 py-3.5 bg-white/[0.02] border-b border-white/[0.06] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00d287] shadow-[0_0_8px_#00d287]" />
            <span className="text-xs font-bold text-white tracking-tight">
              TikTok 实机发布动态模拟器
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-white/40 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Smartphone Screen Simulator */}
        <div className="relative flex-1 bg-black flex flex-col justify-between p-4 min-h-[480px] select-none overflow-hidden rounded-[24px] m-2">
          {/* Top Dynamic Island Notch Simulation */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-4 rounded-full bg-black border border-white/10 flex items-center justify-between px-3 z-30">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
            <span className="text-[8px] font-mono text-white/50">9:41</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#00d287]" />
          </div>

          {/* Simulated Device Center Presentation Hardware Frame */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-30">
            <div className="w-48 h-48 rounded-[36px] bg-white/[0.04] border border-white/[0.08] p-4 flex flex-col justify-between items-center text-center">
              <span className="font-bold text-xs text-white tracking-widest font-mono">FOSMET HYPEROS</span>
              <div className="w-12 h-12 rounded-[16px] bg-white/[0.08] flex items-center justify-center text-white">
                <Feather className="w-6 h-6" />
              </div>
              <span className="text-[10px] text-white/60 font-mono">ALIVE HARDWARE MATRIX</span>
            </div>
          </div>

          {/* Right Action Icons (TikTok UI) */}
          <div className="absolute right-3.5 bottom-20 flex flex-col items-center gap-4 z-20">
            {/* Like */}
            <button
              type="button"
              onClick={handleLikeToggle}
              className="flex flex-col items-center gap-0.5 text-white/90 hover:scale-110 transition-transform cursor-pointer"
            >
              <div className={`p-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 ${liked ? "text-rose-500 bg-rose-500/20" : ""}`}>
                <Heart className={`w-5 h-5 ${liked ? "fill-rose-500" : ""}`} />
              </div>
              <span className="text-[10px] font-mono font-bold">{likeCount.toLocaleString()}</span>
            </button>

            {/* Comment */}
            <div className="flex flex-col items-center gap-0.5 text-white/90">
              <div className="p-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-bold">1,824</span>
            </div>

            {/* Save */}
            <button
              type="button"
              onClick={handleSaveToggle}
              className="flex flex-col items-center gap-0.5 text-white/90 hover:scale-110 transition-transform cursor-pointer"
            >
              <div className={`p-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 ${saved ? "text-amber-400 bg-amber-500/20" : ""}`}>
                <Bookmark className={`w-5 h-5 ${saved ? "fill-amber-400" : ""}`} />
              </div>
              <span className="text-[10px] font-mono font-bold">{saveCount.toLocaleString()}</span>
            </button>

            {/* Share */}
            <div className="flex flex-col items-center gap-0.5 text-white/90">
              <div className="p-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                <Share2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-bold">892</span>
            </div>
          </div>

          {/* Bottom Title, Creator info, Tags & Audio */}
          <div className="relative z-10 text-white space-y-2 max-w-[82%] pb-2 mt-auto">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-white">
                {isKt80
                  ? (item.language === "de" ? "@fosmet.germany" : "@fosmet.spain")
                  : "@fosmet.official"}
              </span>
              <span className="text-[10px] bg-white/[0.1] px-1.5 py-0.5 rounded-[6px] text-white/80 border border-white/[0.15]">
                认证
              </span>
            </div>

            {/* Title Hook & Tags */}
            <div className="space-y-1.5">
              <p className="text-[13px] sm:text-[14px] font-normal leading-relaxed text-white">
                {item.hook}
              </p>
              {/* Chinese Translation In Preview */}
              <div className="bg-black/60 backdrop-blur-sm border border-white/15 px-2.5 py-1.5 rounded-[8px] flex items-start gap-1.5">
                <span className="text-[9px] font-bold px-1 py-0.2 rounded bg-amber-500/20 text-amber-300 flex-shrink-0 mt-0.5 flex items-center gap-0.5">
                  <Languages className="w-2.5 h-2.5" />
                  <span>译</span>
                </span>
                <p className="text-[11px] text-zinc-300 leading-snug font-normal">
                  {item.translationZh || getChineseTranslation(item)}
                </p>
              </div>
              <p className="text-[11px] font-medium text-white/70 leading-snug break-all font-mono">
                {item.tags}
              </p>
            </div>

            {/* Music track */}
            <div className="flex items-center gap-1.5 text-[10px] text-white/60 pt-1">
              <Music className="w-3 h-3 animate-spin text-white/60" />
              <span className="truncate">
                原声音频 - {getProductModelTitle()}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="p-4 bg-white/[0.02] border-t border-white/[0.06] flex items-center justify-between gap-3">
          <div className="text-xs text-white/50">
            总字数: <strong className="text-white font-mono">{item.charCount}</strong>
          </div>

          <MagneticButton
            id="btn-copy-preview-modal"
            onClick={handleCopy}
            className={`inline-flex items-center gap-1.5 px-5 py-2 rounded-[14px] font-semibold text-xs transition-all cursor-pointer ${
              copied
                ? "bg-white text-black font-bold shadow-md"
                : "bg-white/[0.1] hover:bg-white/[0.16] text-white border border-white/[0.12]"
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-black" />
                <span>已复制全文</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-white" />
                <span>复制完整文案</span>
              </>
            )}
          </MagneticButton>
        </div>
      </div>
    </div>
  );
};
