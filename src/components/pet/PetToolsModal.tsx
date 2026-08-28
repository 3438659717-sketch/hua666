import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Timer,
  BrainCircuit,
  Dice5,
  ClipboardList,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Copy,
  Check,
  CheckCircle2,
  AlertTriangle,
  Plus,
  Trash2,
  Bell,
  HeartPulse,
} from "lucide-react";
import { ProductId, AngleCategory } from "../../types";
import { PetGrowthState } from "../../data/petGrowthStorage";
import { PIXEL_SPRITES } from "../../data/petData";
import { evaluateTikTokTitle, TitleEvaluationResult } from "../../utils/petTitleEvaluator";
import { getRandomInspiration, InspirationCard } from "../../data/petInspirationGacha";
import { playPetSound } from "../../utils/petSound";

interface PetToolsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentProductId: ProductId;
  state: PetGrowthState;
  onUpdateState: (updater: (prev: PetGrowthState) => PetGrowthState) => void;
  onShowToast: (msg: string, type?: "success" | "info" | "error") => void;
  onApplyInspiration?: (category: AngleCategory, keyword: string) => void;
}

export const PetToolsModal: React.FC<PetToolsModalProps> = ({
  isOpen,
  onClose,
  currentProductId,
  state,
  onUpdateState,
  onShowToast,
  onApplyInspiration,
}) => {
  const [activeTool, setActiveTool] = useState<"pomodoro" | "evaluator" | "gacha" | "scratchpad" | "health">("pomodoro");

  // Pomodoro State
  const [pomoDuration, setPomoDuration] = useState<number>(25 * 60); // 25 min default
  const [pomoRemaining, setPomoRemaining] = useState<number>(25 * 60);
  const [isPomoRunning, setIsPomoRunning] = useState<boolean>(false);
  const [pomoMode, setPomoMode] = useState<"work" | "break">("work");
  const pomoTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Evaluator State
  const [evalInput, setEvalInput] = useState<string>(
    "【14.9g極軽の奇跡】着けているのを忘れるほど軽い！睡眠中も手首の圧迫感ゼロ。 #FOS10 #FOSMET #レディースウォッチ"
  );
  const [evalResult, setEvalResult] = useState<TitleEvaluationResult | null>(null);

  // Gacha State
  const [currentGachaCard, setCurrentGachaCard] = useState<InspirationCard | null>(null);
  const [isGachaFlipping, setIsGachaFlipping] = useState<boolean>(false);

  // Scratchpad State
  const [newNoteInput, setNewNoteInput] = useState<string>("");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Health Reminder State
  const [healthIntervalMin, setHealthIntervalMin] = useState<number>(45);
  const [isHealthEnabled, setIsHealthEnabled] = useState<boolean>(true);

  // Initialize Gacha on open
  useEffect(() => {
    if (isOpen && !currentGachaCard) {
      setCurrentGachaCard(getRandomInspiration(currentProductId));
    }
  }, [isOpen, currentProductId]);

  // Pomodoro Clock Loop
  useEffect(() => {
    if (isPomoRunning) {
      pomoTimerRef.current = setInterval(() => {
        setPomoRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(pomoTimerRef.current!);
            setIsPomoRunning(false);
            playPetSound("pomodoro");

            if (pomoMode === "work") {
              onUpdateState((st) => {
                const focusMin = Math.round(pomoDuration / 60);
                const qProgress = { ...st.dailyQuestProgress };
                qProgress["pomodoro_focus"] = (qProgress["pomodoro_focus"] || 0) + 1;

                return {
                  ...st,
                  coins: st.coins + 35,
                  exp: st.exp + 50,
                  affinity: Math.min(1000, st.affinity + 15),
                  inspiration: Math.min(100, st.inspiration + 30),
                  totalPomodoroMinutes: st.totalPomodoroMinutes + focusMin,
                  dailyQuestProgress: qProgress,
                };
              });
              onShowToast(`🎉 恭喜完成 ${Math.round(pomoDuration / 60)} 分钟深度专注！获得 +35 金币，+50 EXP！`, "success");
              setPomoMode("break");
              return 5 * 60; // 5 min break
            } else {
              onShowToast("☕ 休息时间结束，准备好开启下一轮爆款创作了吗？", "info");
              setPomoMode("work");
              return pomoDuration;
            }
          }
          return prev - 1;
        });
      }, 1000);
    } else if (pomoTimerRef.current) {
      clearInterval(pomoTimerRef.current);
    }

    return () => {
      if (pomoTimerRef.current) clearInterval(pomoTimerRef.current);
    };
  }, [isPomoRunning, pomoMode, pomoDuration, onUpdateState, onShowToast]);

  if (!isOpen) return null;

  const currentPetDef = PIXEL_SPRITES[state.selectedPet] || PIXEL_SPRITES.cat;

  // Formatting seconds to MM:SS
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const pomoProgress = Math.max(0, Math.min(100, ((pomoDuration - pomoRemaining) / pomoDuration) * 100));

  // Run Evaluator
  const handleRunEvaluation = () => {
    playPetSound("click");
    const res = evaluateTikTokTitle(evalInput, currentProductId);
    setEvalResult(res);
  };

  // Pull New Gacha Card
  const handlePullGacha = () => {
    playPetSound("gacha");
    setIsGachaFlipping(true);
    setTimeout(() => {
      setCurrentGachaCard(getRandomInspiration(currentProductId));
      setIsGachaFlipping(false);
    }, 350);
  };

  // Scratchpad Actions
  const handleAddNote = () => {
    if (!newNoteInput.trim()) return;
    playPetSound("click");
    onUpdateState((prev) => ({
      ...prev,
      scratchpadNotes: [newNoteInput.trim(), ...prev.scratchpadNotes],
    }));
    setNewNoteInput("");
    onShowToast("📝 便签已存入桌宠记忆库", "success");
  };

  const handleDeleteNote = (idx: number) => {
    playPetSound("click");
    onUpdateState((prev) => {
      const next = [...prev.scratchpadNotes];
      next.splice(idx, 1);
      return { ...prev, scratchpadNotes: next };
    });
  };

  const handleCopyNote = async (text: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(idx);
      playPetSound("coin");
      onShowToast("📋 已复制到剪贴板", "success");
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      onShowToast("复制失败，请重试", "error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 15 }}
        transition={{ type: "spring", stiffness: 350, damping: 28 }}
        className="w-full max-w-3xl bg-slate-900/95 border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] acrylic-glass text-slate-100"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-slate-950/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 border border-cyan-400/30 flex items-center justify-center text-xl">
              🛠️
            </div>
            <div>
              <h2 className="font-bold text-base sm:text-lg text-white font-sans">
                桌宠生产力百宝箱 (Creator Assist Lab)
              </h2>
              <p className="text-xs text-white/50">
                番茄钟专注时钟 · 标题诊断实验室 · 灵感抽卡机 · 快捷便签
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

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 bg-slate-950/30 px-5 pt-2 gap-2 text-xs font-medium overflow-x-auto">
          {[
            { id: "pomodoro", label: "⏱️ 赛博番茄钟", icon: Timer },
            { id: "evaluator", label: "🧠 标题诊断室", icon: BrainCircuit },
            { id: "gacha", label: "🎲 灵感抽卡机", icon: Dice5 },
            { id: "scratchpad", label: "📋 灵感剪贴板", icon: ClipboardList },
            { id: "health", label: "💧 健康关怀", icon: HeartPulse },
          ].map((tool) => {
            const Icon = tool.icon;
            const active = activeTool === tool.id;
            return (
              <button
                key={tool.id}
                onClick={() => {
                  setActiveTool(tool.id as any);
                  playPetSound("click");
                }}
                className={`pb-2.5 px-3.5 flex items-center gap-1.5 border-b-2 whitespace-nowrap transition-all ${
                  active
                    ? "border-cyan-400 text-cyan-300 font-bold"
                    : "border-transparent text-white/50 hover:text-white/80"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tool.label}
              </button>
            );
          })}
        </div>

        {/* Tab Body */}
        <div className="p-5 overflow-y-auto flex-1 space-y-4 max-h-[60vh]">
          {/* 1. POMODORO FOCUS CLOCK */}
          {activeTool === "pomodoro" && (
            <div className="flex flex-col items-center justify-center py-4 space-y-6">
              {/* Circular Timer Ring */}
              <div className="relative w-48 h-48 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="44"
                    fill="transparent"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="7"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="44"
                    fill="transparent"
                    stroke={pomoMode === "work" ? "#06b6d4" : "#10b981"}
                    strokeWidth="7"
                    strokeDasharray={276.46}
                    strokeDashoffset={276.46 - (276.46 * pomoProgress) / 100}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-linear"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-2xl mb-0.5">{currentPetDef.emoji}</span>
                  <div className="font-mono text-3xl font-black text-white tracking-wider">
                    {formatTime(pomoRemaining)}
                  </div>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-mono mt-1 ${
                      pomoMode === "work"
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                        : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                    }`}
                  >
                    {pomoMode === "work" ? "🔥 深度专注中" : "☕ 轻松休息中"}
                  </span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setIsPomoRunning(!isPomoRunning);
                    playPetSound("click");
                  }}
                  className={`px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all shadow-lg active:scale-95 ${
                    isPomoRunning
                      ? "bg-amber-500 hover:bg-amber-400 text-black shadow-amber-500/20"
                      : "bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 text-white shadow-cyan-500/25"
                  }`}
                >
                  {isPomoRunning ? (
                    <>
                      <Pause className="w-4 h-4" /> 暂停计时
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" /> 开始专注
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    setIsPomoRunning(false);
                    setPomoRemaining(pomoDuration);
                    playPetSound("click");
                  }}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-white/10 text-white/70 hover:text-white transition-colors"
                  title="重置"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Presets */}
              <div className="flex items-center gap-2 text-xs">
                <span className="text-white/40">时长预设:</span>
                {[
                  { label: "15 分钟 (速写)", val: 15 * 60 },
                  { label: "25 分钟 (标准)", val: 25 * 60 },
                  { label: "45 分钟 (深度)", val: 45 * 60 },
                ].map((preset) => (
                  <button
                    key={preset.val}
                    onClick={() => {
                      setIsPomoRunning(false);
                      setPomoDuration(preset.val);
                      setPomoRemaining(preset.val);
                      playPetSound("click");
                    }}
                    className={`px-2.5 py-1 rounded-lg border text-xs transition-all ${
                      pomoDuration === preset.val
                        ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 font-bold"
                        : "bg-slate-800/60 border-white/10 text-white/50 hover:text-white"
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>

              {/* Total Stats */}
              <div className="text-center text-xs text-white/40 font-mono">
                累计陪伴专注:{" "}
                <span className="text-cyan-400 font-bold">{state.totalPomodoroMinutes}</span> 分钟 ·
                完成专注将奖励 <span className="text-amber-300 font-bold">🪙+35 金币</span> 与{" "}
                <span className="text-purple-300 font-bold">+50 EXP</span>
              </div>
            </div>
          )}

          {/* 2. TITLE EVALUATOR */}
          {activeTool === "evaluator" && (
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/80 flex items-center justify-between">
                  <span>📝 输入或粘贴待诊断的 TikTok 标题 / 脚本前三句:</span>
                  <button
                    onClick={() => setEvalInput("")}
                    className="text-[11px] text-white/40 hover:text-white"
                  >
                    清空
                  </button>
                </label>
                <textarea
                  value={evalInput}
                  onChange={(e) => setEvalInput(e.target.value)}
                  placeholder="在此粘贴任意日语、西班牙语或中文标题..."
                  rows={3}
                  className="w-full p-3 rounded-xl bg-slate-950/60 border border-white/15 text-xs text-white placeholder-white/30 focus:outline-none focus:border-cyan-400 resize-none font-mono"
                />
                <button
                  onClick={handleRunEvaluation}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 text-white font-bold text-xs shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-1.5"
                >
                  <BrainCircuit className="w-4 h-4" /> 开始多维度 AI 爆款诊断
                </button>
              </div>

              {/* Evaluation Results */}
              {evalResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-slate-800/70 border border-white/15 space-y-4"
                >
                  {/* Overall Grade */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div>
                      <div className="text-xs text-white/50">综合爆款指数评级</div>
                      <div className="text-2xl font-black text-white font-mono flex items-center gap-2 mt-0.5">
                        <span
                          className={`px-2.5 py-0.5 rounded-lg text-lg ${
                            evalResult.grade === "S+" || evalResult.grade === "S"
                              ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                              : evalResult.grade === "A"
                              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                              : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                          }`}
                        >
                          {evalResult.grade}
                        </span>
                        <span className="text-cyan-400">{evalResult.score}</span>
                        <span className="text-xs text-white/40 font-normal">/ 100 分</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[11px] text-white/50">预估 3 秒完播停留率</div>
                      <div className="text-xs font-mono font-bold text-emerald-400 mt-1">
                        {evalResult.estimatedRetentionRate}
                      </div>
                    </div>
                  </div>

                  {/* 4 Dimension Bars */}
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="space-y-1">
                      <div className="flex justify-between text-white/70 text-[11px]">
                        <span>🎯 黄金悬念钩子 (Hook)</span>
                        <span className="font-mono font-bold text-cyan-400">
                          {evalResult.metrics.hookStrength}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-slate-900 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-cyan-400 rounded-full"
                          style={{ width: `${evalResult.metrics.hookStrength}%` }}
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-white/70 text-[11px]">
                        <span>💥 痛点共鸣度</span>
                        <span className="font-mono font-bold text-pink-400">
                          {evalResult.metrics.painPointMatch}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-slate-900 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-pink-400 rounded-full"
                          style={{ width: `${evalResult.metrics.painPointMatch}%` }}
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-white/70 text-[11px]">
                        <span>⚡ 硬件卖点量化</span>
                        <span className="font-mono font-bold text-amber-400">
                          {evalResult.metrics.specClarity}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-slate-900 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-amber-400 rounded-full"
                          style={{ width: `${evalResult.metrics.specClarity}%` }}
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-white/70 text-[11px]">
                        <span>🏷️ 营销标签配置</span>
                        <span className="font-mono font-bold text-emerald-400">
                          {evalResult.metrics.tagOptimization}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-slate-900 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-400 rounded-full"
                          style={{ width: `${evalResult.metrics.tagOptimization}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Highlights & Suggestions */}
                  <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
                    {evalResult.pros.length > 0 && (
                      <div className="space-y-1">
                        <div className="font-bold text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> 结构亮点:
                        </div>
                        {evalResult.pros.map((p, i) => (
                          <div key={i} className="text-white/80 pl-4">
                            • {p}
                          </div>
                        ))}
                      </div>
                    )}

                    {evalResult.suggestions.length > 0 && (
                      <div className="space-y-1 mt-2">
                        <div className="font-bold text-amber-400 flex items-center gap-1">
                          <AlertTriangle className="w-3.5 h-3.5" /> 优化提升建议:
                        </div>
                        {evalResult.suggestions.map((s, i) => (
                          <div key={i} className="text-white/80 pl-4">
                            • {s}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
          )}

          {/* 3. INSPIRATION GACHA */}
          {activeTool === "gacha" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/60">
                  针对当前【{currentProductId.toUpperCase()}】随机抽取的爆款场景灵感:
                </span>
                <button
                  onClick={handlePullGacha}
                  className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-bold text-xs shadow-md active:scale-95 transition-all flex items-center gap-1.5"
                >
                  <Dice5 className="w-3.5 h-3.5" /> 重新抽一张
                </button>
              </div>

              {currentGachaCard && (
                <div
                  className={`p-5 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 border border-amber-400/30 shadow-xl space-y-3 transition-all duration-300 ${
                    isGachaFlipping ? "scale-95 opacity-50 rotate-y-90" : "scale-100 opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold">
                      ⭐ {currentGachaCard.theme}
                    </span>
                    <span className="text-xs text-white/40 font-mono">
                      {currentGachaCard.productName}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-xs font-bold text-cyan-300">🔥 破局钩子 (Hook):</div>
                    <div className="text-sm font-bold text-white bg-slate-950/60 p-2.5 rounded-xl border border-white/10 font-mono">
                      {currentGachaCard.hookIdea}
                    </div>
                  </div>

                  <div className="space-y-1 text-xs">
                    <span className="font-bold text-pink-300">🎯 受众痛点洞察:</span>
                    <p className="text-white/70">{currentGachaCard.targetPainPoint}</p>
                  </div>

                  <div className="space-y-1 text-xs">
                    <span className="font-bold text-emerald-300">🎬 推荐实拍场景:</span>
                    <p className="text-white/70">{currentGachaCard.sceneDescription}</p>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-2">
                    <button
                      onClick={async () => {
                        try {
                          await navigator.clipboard.writeText(currentGachaCard.sampleCopy);
                          playPetSound("coin");
                          onShowToast("📋 已复制灵感文案模板！", "success");
                        } catch {
                          onShowToast("复制失败", "error");
                        }
                      }}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-white/10 text-xs text-white/80 hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <Copy className="w-3.5 h-3.5" /> 复制整段文案
                    </button>

                    {onApplyInspiration && (
                      <button
                        onClick={() => {
                          onApplyInspiration(currentGachaCard.category, currentGachaCard.keywords);
                          playPetSound("levelUp");
                          onShowToast("✨ 已将此灵感应用至主控制面板！", "success");
                          onClose();
                        }}
                        className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs flex items-center gap-1.5 shadow-md shadow-cyan-500/20"
                      >
                        <Sparkles className="w-3.5 h-3.5" /> 一键应用至主生成器
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 4. SCRATCHPAD CLIPBOARD */}
          {activeTool === "scratchpad" && (
            <div className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newNoteInput}
                  onChange={(e) => setNewNoteInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAddNote()}
                  placeholder="记录一句闪现的灵感、短语或备用文案..."
                  className="flex-1 px-3.5 py-2 rounded-xl bg-slate-950/60 border border-white/15 text-xs text-white placeholder-white/30 focus:outline-none focus:border-cyan-400"
                />
                <button
                  onClick={handleAddNote}
                  className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs flex items-center gap-1 shadow-md transition-all active:scale-95"
                >
                  <Plus className="w-4 h-4" /> 存入便签
                </button>
              </div>

              {state.scratchpadNotes.length === 0 ? (
                <div className="text-center py-10 border border-dashed border-white/10 rounded-xl space-y-1">
                  <p className="text-xs text-white/40">暂无暂存便签，随时在此记录你的爆款灵感</p>
                </div>
              ) : (
                <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                  {state.scratchpadNotes.map((note, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-800/60 border border-white/10 flex items-center justify-between gap-3 group hover:border-cyan-400/30 transition-all"
                    >
                      <span className="text-xs text-white/90 font-mono break-all line-clamp-2">
                        {note}
                      </span>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          onClick={() => handleCopyNote(note, idx)}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white"
                          title="复制"
                        >
                          {copiedIndex === idx ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                        <button
                          onClick={() => handleDeleteNote(idx)}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-rose-500/20 text-white/50 hover:text-rose-400"
                          title="删除"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 5. DESK HEALTH CARE */}
          {activeTool === "health" && (
            <div className="space-y-4 py-2">
              <div className="p-4 rounded-xl bg-slate-800/60 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-bold text-xs text-white flex items-center gap-1.5">
                    <HeartPulse className="w-4 h-4 text-rose-400" /> 喝水与护眼放松提醒
                  </div>
                  <p className="text-[11px] text-white/50 mt-0.5">
                    桌宠会在定时结束时发出可爱提醒气泡，提醒主人喝水与眺望远方
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsHealthEnabled(!isHealthEnabled);
                    playPetSound("click");
                    onShowToast(
                      !isHealthEnabled ? "💧 已开启桌宠健康关怀提醒！" : "已关闭健康关怀提醒",
                      "info"
                    );
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    isHealthEnabled
                      ? "bg-emerald-500 text-black shadow-md shadow-emerald-500/20"
                      : "bg-slate-700 text-white/40"
                  }`}
                >
                  {isHealthEnabled ? "已开启" : "已关闭"}
                </button>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-white/60">提醒间隔周期:</label>
                <div className="grid grid-cols-3 gap-2">
                  {[30, 45, 60].map((min) => (
                    <button
                      key={min}
                      onClick={() => {
                        setHealthIntervalMin(min);
                        playPetSound("click");
                        onShowToast(`💧 已将健康提醒设定为每 ${min} 分钟一次`, "success");
                      }}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        healthIntervalMin === min
                          ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 font-bold"
                          : "bg-slate-800/60 border-white/10 text-white/60 hover:text-white"
                      }`}
                    >
                      <div className="text-sm font-mono font-bold">{min} 分钟</div>
                      <div className="text-[10px] text-white/40 mt-0.5">
                        {min === 30 ? "高频关怀" : min === 45 ? "标准推荐" : "深度沉浸"}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
