import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  BrainCircuit,
  CheckCircle2,
  XCircle,
  Sparkles,
  Flame,
  Award,
  BookOpen,
  ArrowRight,
  RotateCcw,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import {
  PetGrowthState,
  getCreatorCareerRank,
} from "../../data/petGrowthStorage";
import {
  KnowledgeQuizQuestion,
  KNOWLEDGE_QUIZ_QUESTIONS,
} from "../../data/creatorKnowledgeData";
import { playPetSound } from "../../utils/petSound";

interface PetQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  state: PetGrowthState;
  onUpdateState: (updater: (prev: PetGrowthState) => PetGrowthState) => void;
  onShowToast: (msg: string, type?: "success" | "info" | "error") => void;
}

export const PetQuizModal: React.FC<PetQuizModalProps> = ({
  isOpen,
  onClose,
  state,
  onUpdateState,
  onShowToast,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [streak, setStreak] = useState<number>(0);
  const [sessionScore, setSessionScore] = useState<number>(0);

  if (!isOpen) return null;

  const filteredQuestions =
    selectedCategory === "all"
      ? KNOWLEDGE_QUIZ_QUESTIONS
      : KNOWLEDGE_QUIZ_QUESTIONS.filter((q) => q.category === selectedCategory);

  const currentQ: KnowledgeQuizQuestion =
    filteredQuestions[currentIndex % filteredQuestions.length] ||
    KNOWLEDGE_QUIZ_QUESTIONS[0];

  const careerRank = getCreatorCareerRank(state.affinity);

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    const isCorrect = idx === currentQ.correctIndex;
    if (isCorrect) {
      playPetSound("levelUp");
      const nextStreak = streak + 1;
      setStreak(nextStreak);
      setSessionScore((prev) => prev + currentQ.rewardCoins);

      const streakBonusAffinity = nextStreak >= 3 ? 10 : 0;
      const totalAffinity = currentQ.rewardAffinity + streakBonusAffinity;

      onUpdateState((prev) => {
        let nextExp = prev.exp + currentQ.rewardExp;
        let nextLvl = prev.level;

        const qProgress = { ...prev.dailyQuestProgress };
        qProgress["quiz_challenge"] = (qProgress["quiz_challenge"] || 0) + 1;

        return {
          ...prev,
          affinity: Math.min(1000, prev.affinity + totalAffinity),
          exp: nextExp,
          coins: prev.coins + currentQ.rewardCoins,
          level: nextLvl,
          happiness: Math.min(100, prev.happiness + 15),
          inspiration: Math.min(100, prev.inspiration + 20),
          quizAnsweredCount: (prev.quizAnsweredCount || 0) + 1,
          quizCorrectCount: (prev.quizCorrectCount || 0) + 1,
          dailyQuestProgress: qProgress,
        };
      });

      onShowToast(
        `🎉 回答正确！亲密度 +${totalAffinity}，EXP +${currentQ.rewardExp}，金币 +${currentQ.rewardCoins}${
          nextStreak >= 3 ? ` (🔥 ${nextStreak}连对加成)` : ""
        }`,
        "success"
      );
    } else {
      playPetSound("error");
      setStreak(0);
      onUpdateState((prev) => ({
        ...prev,
        affinity: Math.min(1000, prev.affinity + 5), // Even on error, studying increases familiarity
        exp: prev.exp + 10,
        quizAnsweredCount: (prev.quizAnsweredCount || 0) + 1,
      }));
      onShowToast("💡 虽未答对，但也吸收了宝贵经验！亲密度 +5，EXP +10", "info");
    }
  };

  const handleNextQuestion = () => {
    playPetSound("click");
    setSelectedOption(null);
    setIsAnswered(false);
    setCurrentIndex((prev) => (prev + 1) % filteredQuestions.length);
  };

  const categories = [
    { id: "all", label: "全部实战题库", emoji: "🌐" },
    { id: "tiktok_hook", label: "TikTok 黄金3秒", emoji: "🎯" },
    { id: "japan_market", label: "日本消费心理", emoji: "🇯🇵" },
    { id: "product_spec", label: "FOSMET 核心卖点", emoji: "⌚" },
    { id: "algorithm", label: "推荐算法与SEO", emoji: "📈" },
    { id: "copywriting", label: "高转化CTA技巧", emoji: "✍️" },
  ];

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
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500/20 via-pink-500/20 to-cyan-500/20 border border-amber-400/40 flex items-center justify-center text-xl shadow-inner">
              🧠
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-base sm:text-lg text-white font-sans flex items-center gap-1.5">
                  <span>跨境爆款研习社</span>
                  <span className="text-xs px-2 py-0.5 rounded-full font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    实战大冲关
                  </span>
                </h2>
              </div>
              <p className="text-xs text-white/50">
                边玩边掌握 TikTok 黄金钩子、日本本土化与智能硬件转化精髓
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

        {/* Stats Strip */}
        <div className="px-5 py-2.5 bg-slate-950/40 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 font-mono">
              <span className="text-pink-400 font-bold text-sm">💖 {state.affinity}</span>
              <span className="text-white/40">亲密度</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono">
              <span className="text-amber-400 font-bold text-sm">🪙 {state.coins}</span>
              <span className="text-white/40">金币</span>
            </div>
            {streak > 1 && (
              <div className="flex items-center gap-1 text-orange-400 font-bold font-mono animate-pulse">
                <Flame className="w-4 h-4 fill-orange-400" />
                <span>{streak} 连对冲关中！</span>
              </div>
            )}
          </div>

          {/* Creator Career Badge */}
          <div className="flex items-center gap-2">
            <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-medium border ${careerRank.color}`}>
              {careerRank.title}
            </span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="px-5 py-2.5 bg-slate-950/20 border-b border-white/10 overflow-x-auto flex gap-1.5 scrollbar-none text-xs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setCurrentIndex(0);
                setSelectedOption(null);
                setIsAnswered(false);
                playPetSound("click");
              }}
              className={`px-3 py-1 rounded-full whitespace-nowrap transition-all flex items-center gap-1 border ${
                selectedCategory === cat.id
                  ? "bg-cyan-500/20 text-cyan-300 border-cyan-400/40 font-bold shadow-sm shadow-cyan-500/20"
                  : "bg-white/5 text-white/50 hover:text-white/80 border-transparent"
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Main Quiz Body */}
        <div className="p-5 overflow-y-auto flex-1 space-y-4">
          {/* Question Card */}
          <div className="p-4 rounded-xl bg-slate-800/80 border border-white/15 shadow-inner space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 font-mono font-medium flex items-center gap-1 border border-amber-500/30">
                <span>{currentQ.categoryEmoji}</span>
                <span>{currentQ.categoryLabel}</span>
              </span>
              <span className="text-white/40 font-mono text-[11px]">
                第 {(currentIndex % filteredQuestions.length) + 1} / {filteredQuestions.length} 题
              </span>
            </div>

            <h3 className="text-sm sm:text-base font-bold text-white leading-relaxed">
              {currentQ.question}
            </h3>

            <div className="flex items-center gap-3 pt-1 text-[11px] text-white/50 font-mono">
              <span className="text-pink-300 font-bold">💖 亲密度 +{currentQ.rewardAffinity}</span>
              <span className="text-cyan-300 font-bold">✨ EXP +{currentQ.rewardExp}</span>
              <span className="text-amber-300 font-bold">🪙 金币 +{currentQ.rewardCoins}</span>
            </div>
          </div>

          {/* Options List */}
          <div className="space-y-2.5">
            {currentQ.options.map((opt, idx) => {
              const isPicked = selectedOption === idx;
              const isTargetCorrect = idx === currentQ.correctIndex;

              let btnStyle = "bg-slate-800/60 hover:bg-slate-700/80 border-white/10 text-white/90";
              if (isAnswered) {
                if (isTargetCorrect) {
                  btnStyle = "bg-emerald-950/70 border-emerald-500 text-emerald-200 shadow-md shadow-emerald-500/20";
                } else if (isPicked) {
                  btnStyle = "bg-rose-950/70 border-rose-500 text-rose-200 shadow-md shadow-rose-500/20";
                } else {
                  btnStyle = "bg-slate-900/40 border-white/5 text-white/30";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-start gap-3 active:scale-[0.99] ${btnStyle}`}
                >
                  <span className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="flex-1 leading-snug">{opt}</span>
                  {isAnswered && isTargetCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  )}
                  {isAnswered && isPicked && !isTargetCorrect && (
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Answer Explanation Box */}
          <AnimatePresence>
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/30 space-y-2.5 text-xs"
              >
                <div className="flex items-center gap-1.5 font-bold text-cyan-300 text-sm">
                  <Lightbulb className="w-4 h-4 text-amber-400" />
                  <span>爆款深度解析 & 实战底层逻辑</span>
                </div>
                <p className="text-white/80 leading-relaxed">{currentQ.explanation}</p>

                <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-cyan-200 flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{currentQ.workImpact}</span>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={handleNextQuestion}
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 text-black font-bold text-xs shadow-lg shadow-cyan-500/20 flex items-center gap-1.5 active:scale-95 transition-all"
                  >
                    <span>挑战下一题</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
