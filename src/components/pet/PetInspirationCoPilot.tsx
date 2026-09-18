import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Lightbulb,
  X,
  Volume2,
  VolumeX,
  ArrowRight,
  Shuffle,
  Copy,
  Check,
  Zap,
} from "lucide-react";
import { ProductId, AngleCategory } from "../../types";
import { PRODUCTS_CONFIG } from "../../data/templates";
import { getRandomInspiration, InspirationCard } from "../../data/petInspirationGacha";
import { playPetSound } from "../../utils/petSound";

interface PetInspirationCoPilotProps {
  isOpen: boolean;
  onClose: () => void;
  currentProductId: ProductId;
  onApplyInspiration?: (category: AngleCategory, keyword: string) => void;
  onShowToast: (msg: string, type?: "success" | "info" | "error") => void;
}

export const PetInspirationCoPilot: React.FC<PetInspirationCoPilotProps> = ({
  isOpen,
  onClose,
  currentProductId,
  onApplyInspiration,
  onShowToast,
}) => {
  const [currentCard, setCurrentCard] = useState<InspirationCard | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Load new card on open or product change
  useEffect(() => {
    if (isOpen) {
      setCurrentCard(getRandomInspiration(currentProductId));
    }
  }, [isOpen, currentProductId]);

  if (!isOpen || !currentCard) return null;

  const currentProduct = PRODUCTS_CONFIG[currentProductId] || PRODUCTS_CONFIG.rec10;

  const handleNextInspiration = () => {
    playPetSound("sparkle");
    setCurrentCard(getRandomInspiration(currentProductId));
  };

  const handleCopyCopy = () => {
    if (!currentCard) return;
    navigator.clipboard.writeText(currentCard.sampleCopy || currentCard.hookIdea);
    setIsCopied(true);
    playPetSound("coin");
    onShowToast("📋 已复制桌宠推荐爆款文案！", "success");
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSpeak = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window) || !currentCard) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const textToSpeak = currentCard.hookIdea;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = "ja-JP";
    utterance.rate = 1.05;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
    playPetSound("sparkle");
  };

  return (
    <div className="fixed bottom-24 right-4 sm:right-28 z-50 max-w-sm w-[92vw] pointer-events-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="rounded-[24px] bg-slate-950/95 border border-cyan-400/40 shadow-[0_12px_45px_rgba(0,0,0,0.8)] backdrop-blur-xl p-4 text-white space-y-3 relative overflow-hidden"
      >
        {/* Top Rim Specular Glare */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-[10px] bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
              <Lightbulb className="w-4 h-4 text-amber-300 animate-pulse" />
            </div>
            <div>
              <div className="text-xs font-black tracking-tight flex items-center gap-1.5">
                <span>桌宠带货军师 · 灵感锦囊</span>
                <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  AI Co-Pilot
                </span>
              </div>
              <div className="text-[10px] text-white/50">
                针对 {currentProduct.model} 专属爆款切入建议
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-[8px] text-white/40 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Card Body */}
        <div className="p-3 rounded-[16px] bg-white/[0.04] border border-white/[0.08] space-y-2 text-xs">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-bold text-cyan-300 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>{currentCard.theme}</span>
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white/70">
              {currentCard.category}
            </span>
          </div>

          {/* Hook Line with Audio Speaker */}
          <div className="p-2.5 rounded-[12px] bg-black/60 border border-white/10 space-y-1">
            <div className="flex items-center justify-between text-[10px] text-white/40">
              <span>🎯 黄金前 3 秒钩子台词</span>
              <button
                type="button"
                onClick={handleSpeak}
                className={`flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] transition-colors cursor-pointer ${
                  isSpeaking
                    ? "bg-rose-500/30 text-rose-300 animate-pulse"
                    : "text-cyan-300 hover:bg-cyan-500/20"
                }`}
                title="试听母语发音"
              >
                {isSpeaking ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
                <span>{isSpeaking ? "停止" : "试听"}</span>
              </button>
            </div>
            <p className="text-xs font-bold text-amber-200 leading-snug select-all">
              {currentCard.hookIdea}
            </p>
          </div>

          {/* Storyboard tip */}
          <div className="text-[11px] text-white/70 leading-relaxed">
            <span className="text-white/40 font-mono">🎬 分镜要点: </span>
            {currentCard.sceneDescription}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-between gap-2 pt-1">
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handleNextInspiration}
              className="p-2 rounded-[12px] bg-white/[0.06] hover:bg-white/[0.12] text-white/70 hover:text-white border border-white/[0.08] transition-all cursor-pointer"
              title="抽取下一条灵感"
            >
              <Shuffle className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={handleCopyCopy}
              className="p-2 rounded-[12px] bg-white/[0.06] hover:bg-white/[0.12] text-white/70 hover:text-white border border-white/[0.08] transition-all cursor-pointer"
              title="复制文案"
            >
              {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {onApplyInspiration && (
            <button
              type="button"
              onClick={() => {
                onApplyInspiration(currentCard.category, currentCard.keywords.split(" ")[0]);
                onClose();
                playPetSound("sparkle");
              }}
              className="flex-1 py-2 px-3 rounded-[12px] bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black font-black text-xs transition-all cursor-pointer shadow-[0_0_15px_rgba(34,211,238,0.3)] flex items-center justify-center gap-1.5 active:scale-95"
            >
              <span>立即应用此灵感</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};
