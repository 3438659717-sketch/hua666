import React, { useState } from "react";
import { motion } from "motion/react";
import {
  X,
  BookOpen,
  Sparkles,
  Copy,
  Check,
  Zap,
  Lightbulb,
  ArrowRight,
  Heart,
} from "lucide-react";
import {
  PetGrowthState,
  addWorkAffinity,
} from "../../data/petGrowthStorage";
import {
  CREATOR_MARKETING_TIPS,
  CreatorMarketingTip,
} from "../../data/creatorKnowledgeData";
import { playPetSound } from "../../utils/petSound";
import { AngleCategory } from "../../types";

interface PetKnowledgeCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  state: PetGrowthState;
  onUpdateState: (updater: (prev: PetGrowthState) => PetGrowthState) => void;
  onShowToast: (msg: string, type?: "success" | "info" | "error") => void;
  onApplyInspiration?: (category: AngleCategory, keyword: string) => void;
}

export const PetKnowledgeCardModal: React.FC<PetKnowledgeCardModalProps> = ({
  isOpen,
  onClose,
  state,
  onUpdateState,
  onShowToast,
  onApplyInspiration,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleStudyTip = (tip: CreatorMarketingTip) => {
    playPetSound("levelUp");
    onUpdateState((prev) => {
      const { nextState } = addWorkAffinity(prev, "read_tip", 18);
      const readList = prev.studyTipsRead.includes(tip.id)
        ? prev.studyTipsRead
        : [...prev.studyTipsRead, tip.id];

      return {
        ...nextState,
        studyTipsRead: readList,
      };
    });

    onShowToast(`📖 成功研读【${tip.title}】！亲密度 +18，灵感值 +15，EXP +25！`, "success");
  };

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    playPetSound("coin");
    setTimeout(() => setCopiedId(null), 2000);
    onShowToast("📋 已复制爆款金句到剪贴板！", "success");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 15 }}
        transition={{ type: "spring", stiffness: 350, damping: 28 }}
        className="w-full max-w-2xl bg-slate-900/95 border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] text-slate-100 acrylic-glass"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-500/20 border border-cyan-400/40 flex items-center justify-center text-xl shadow-inner">
              📚
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-base sm:text-lg text-white font-sans flex items-center gap-1.5">
                  <span>TikTok 爆款实战宝典</span>
                  <span className="text-xs px-2 py-0.5 rounded-full font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    速查闪卡
                  </span>
                </h2>
              </div>
              <p className="text-xs text-white/50">
                每研读 1 篇实操秘籍，桌宠亲密度 +18，还能一键复制或应用到脚本生成器
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* List of Tips */}
        <div className="p-5 overflow-y-auto flex-1 space-y-4 max-h-[75vh]">
          {CREATOR_MARKETING_TIPS.map((tip) => {
            const isRead = state.studyTipsRead?.includes(tip.id);
            return (
              <div
                key={tip.id}
                className="p-4 rounded-xl bg-slate-800/60 border border-white/10 hover:border-cyan-400/30 transition-all space-y-3 shadow-md"
              >
                {/* Title & Category */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{tip.emoji}</span>
                    <div>
                      <span className="text-[10px] text-cyan-300/80 font-mono font-bold px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/20">
                        {tip.category}
                      </span>
                      <h3 className="font-bold text-sm text-white mt-1">{tip.title}</h3>
                    </div>
                  </div>

                  <button
                    onClick={() => handleStudyTip(tip)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                      isRead
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        : "bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 text-black font-bold active:scale-95"
                    }`}
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{isRead ? "已研读 (+18💖)" : "研读领亲密 (+18💖)"}</span>
                  </button>
                </div>

                {/* Core Rule */}
                <div className="p-3 rounded-lg bg-slate-900/80 border border-white/5 text-xs text-white/80 leading-relaxed">
                  <span className="font-bold text-amber-300 mr-1.5">【核心法则】</span>
                  {tip.coreRule}
                </div>

                {/* Examples */}
                <div className="space-y-1.5 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-cyan-500/20 flex items-start justify-between gap-2">
                    <div>
                      <div className="text-[10px] text-white/40 font-mono">🇯🇵 日语高转化金句:</div>
                      <div className="font-medium text-cyan-200 mt-0.5">{tip.exampleJP}</div>
                    </div>
                    <button
                      onClick={() => handleCopyText(tip.exampleJP, `${tip.id}_jp`)}
                      className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-white/70 hover:text-white shrink-0"
                      title="复制日语金句"
                    >
                      {copiedId === `${tip.id}_jp` ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-white/10 flex items-start justify-between gap-2">
                    <div>
                      <div className="text-[10px] text-white/40 font-mono">🇨🇳 中文转化解析:</div>
                      <div className="font-medium text-white/90 mt-0.5">{tip.exampleCN}</div>
                    </div>
                    <button
                      onClick={() => handleCopyText(tip.exampleCN, `${tip.id}_cn`)}
                      className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-white/70 hover:text-white shrink-0"
                      title="复制中文金句"
                    >
                      {copiedId === `${tip.id}_cn` ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Practical Action & Apply Button */}
                <div className="pt-1 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-white/50 flex items-center gap-1">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                    <span>{tip.practicalAction}</span>
                  </span>

                  {onApplyInspiration && (
                    <button
                      onClick={() => {
                        onApplyInspiration("pain_point", tip.title);
                        onClose();
                      }}
                      className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-medium"
                    >
                      <span>一键应用到当前工作台</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};
