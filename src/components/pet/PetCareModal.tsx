import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Sparkles,
  Heart,
  Zap,
  Lightbulb,
  Award,
  ShoppingBag,
  CheckCircle2,
  Gift,
  Plus,
  Flame,
  Volume2,
  VolumeX,
  BrainCircuit,
  BookOpen,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import {
  PetGrowthState,
  PET_FOOD_ITEMS,
  DAILY_QUESTS,
  getRequiredExpForLevel,
  getPetRankTitle,
  PetFoodItem,
  getCreatorCareerRank,
  CREATOR_CAREER_RANKS,
} from "../../data/petGrowthStorage";
import { PIXEL_SPRITES, PixelPetType } from "../../data/petData";
import { playPetSound, isPetSoundMuted, setPetSoundMuted } from "../../utils/petSound";

interface PetCareModalProps {
  isOpen: boolean;
  onClose: () => void;
  state: PetGrowthState;
  onUpdateState: (updater: (prev: PetGrowthState) => PetGrowthState) => void;
  onShowToast: (msg: string, type?: "success" | "info" | "error") => void;
  onTriggerPetAction?: (action: "pet" | "feed" | "bath" | "trick" | "sleep") => void;
  onOpenQuiz?: () => void;
  onOpenKnowledge?: () => void;
}

export const PetCareModal: React.FC<PetCareModalProps> = ({
  isOpen,
  onClose,
  state,
  onUpdateState,
  onShowToast,
  onTriggerPetAction,
  onOpenQuiz,
  onOpenKnowledge,
}) => {
  const [activeTab, setActiveTab] = useState<"status" | "feed" | "shop" | "career" | "quests">("status");
  const [soundMuted, setSoundMutedState] = useState(isPetSoundMuted());

  if (!isOpen) return null;

  const currentPetDef = PIXEL_SPRITES[state.selectedPet] || PIXEL_SPRITES.cat;
  const rankInfo = getPetRankTitle(state.level);
  const careerRank = getCreatorCareerRank(state.affinity);
  const requiredExp = getRequiredExpForLevel(state.level);
  const expProgress = Math.min(100, Math.round((state.exp / requiredExp) * 100));

  const toggleSound = () => {
    const next = !soundMuted;
    setPetSoundMuted(next);
    setSoundMutedState(next);
    if (!next) playPetSound("click");
  };

  // Daily Check-In
  const handleCheckIn = () => {
    const todayStr = new Date().toISOString().slice(0, 10);
    if (state.lastCheckInDate === todayStr) {
      onShowToast("今日已签到过啦，明天继续来领金币哦！", "info");
      return;
    }

    playPetSound("levelUp");
    onUpdateState((prev) => {
      const isConsecutive =
        prev.lastCheckInDate &&
        new Date(prev.lastCheckInDate).getTime() >= Date.now() - 86400000 * 2;
      const streak = isConsecutive ? prev.checkInStreak + 1 : 1;
      const bonusCoins = 100 + Math.min(streak * 10, 100);

      return {
        ...prev,
        coins: prev.coins + bonusCoins,
        exp: prev.exp + 60,
        affinity: Math.min(1000, prev.affinity + 25),
        lastCheckInDate: todayStr,
        checkInStreak: streak,
      };
    });
    onShowToast(
      `🎉 签到成功！获得 +100 星际金币、+60 EXP 与 +25 亲密度！当前连续打卡 ${state.checkInStreak + 1} 天`,
      "success"
    );
  };

  // Feed food item
  const handleFeedFood = (food: PetFoodItem) => {
    const isFree = food.isFreeDaily || food.price === 0;
    const count = state.inventory[food.id] || (isFree ? 99 : 0);
    if (!isFree && count <= 0) {
      onShowToast(`背包里没有【${food.name}】，可前往小卖部购买哦！`, "info");
      return;
    }

    playPetSound("feed");
    if (onTriggerPetAction) onTriggerPetAction("feed");

    const affinityGain = food.affinityGain || 15;

    onUpdateState((prev) => {
      const nextInv = { ...prev.inventory };
      if (!isFree) {
        nextInv[food.id] = (prev.inventory[food.id] || 1) - 1;
        if (nextInv[food.id] <= 0) delete nextInv[food.id];
      } else {
        nextInv[food.id] = 99;
      }

      let nextExp = prev.exp + food.expGain;
      let nextLvl = prev.level;
      let req = getRequiredExpForLevel(nextLvl);
      while (nextExp >= req && nextLvl < 50) {
        nextExp -= req;
        nextLvl += 1;
        req = getRequiredExpForLevel(nextLvl);
        playPetSound("levelUp");
      }

      // Update quest progress
      const qProgress = { ...prev.dailyQuestProgress };
      qProgress["feed_pet"] = (qProgress["feed_pet"] || 0) + 1;

      return {
        ...prev,
        level: nextLvl,
        exp: nextExp,
        hunger: Math.min(100, prev.hunger + food.hungerGain),
        happiness: Math.min(100, prev.happiness + food.happinessGain),
        energy: Math.min(100, prev.energy + food.energyGain),
        inspiration: Math.min(100, prev.inspiration + food.inspirationGain),
        affinity: Math.min(1000, prev.affinity + affinityGain),
        inventory: nextInv,
        dailyQuestProgress: qProgress,
      };
    });

    onShowToast(
      `😋 投喂了【${food.name}】！饱食度+${food.hungerGain}，亲密度+${affinityGain}，EXP+${food.expGain}`,
      "success"
    );
  };

  // Buy food item from shop
  const handleBuyFood = (food: PetFoodItem, andFeed: boolean = false) => {
    if (food.price > 0 && state.coins < food.price) {
      onShowToast("🪙 星际金币不足！可通过知识问答、完成专注或生成文案赚取金币哦~", "error");
      return;
    }

    playPetSound(andFeed ? "feed" : "coin");

    if (andFeed) {
      if (onTriggerPetAction) onTriggerPetAction("feed");
      const affinityGain = food.affinityGain || 15;

      onUpdateState((prev) => {
        let nextExp = prev.exp + food.expGain;
        let nextLvl = prev.level;
        let req = getRequiredExpForLevel(nextLvl);
        while (nextExp >= req && nextLvl < 50) {
          nextExp -= req;
          nextLvl += 1;
          req = getRequiredExpForLevel(nextLvl);
          playPetSound("levelUp");
        }

        const qProgress = { ...prev.dailyQuestProgress };
        qProgress["feed_pet"] = (qProgress["feed_pet"] || 0) + 1;

        return {
          ...prev,
          coins: prev.coins - food.price,
          level: nextLvl,
          exp: nextExp,
          hunger: Math.min(100, prev.hunger + food.hungerGain),
          happiness: Math.min(100, prev.happiness + food.happinessGain),
          energy: Math.min(100, prev.energy + food.energyGain),
          inspiration: Math.min(100, prev.inspiration + food.inspirationGain),
          affinity: Math.min(1000, prev.affinity + affinityGain),
          dailyQuestProgress: qProgress,
        };
      });

      onShowToast(
        `😋 购买并立即投喂【${food.name}】！亲密度+${affinityGain}，饱食+${food.hungerGain}，EXP+${food.expGain}`,
        "success"
      );
    } else {
      onUpdateState((prev) => ({
        ...prev,
        coins: prev.coins - food.price,
        inventory: {
          ...prev.inventory,
          [food.id]: (prev.inventory[food.id] || 0) + 1,
        },
      }));

      onShowToast(`🛍️ 成功购买【${food.name}】，已放入投喂背包！`, "success");
    }
  };

  // Claim Quest Reward
  const handleClaimQuest = (quest: typeof DAILY_QUESTS[0]) => {
    const current = state.dailyQuestProgress[quest.id] || 0;
    if (current < quest.targetCount) {
      onShowToast(`任务尚未达成 (${current}/${quest.targetCount})，继续加油！`, "info");
      return;
    }
    if (state.completedQuestClaims.includes(quest.id)) {
      onShowToast("该任务今日已领取过奖励啦！", "info");
      return;
    }

    playPetSound("quest");
    onUpdateState((prev) => {
      let nextExp = prev.exp + quest.rewardExp;
      let nextLvl = prev.level;
      let req = getRequiredExpForLevel(nextLvl);
      while (nextExp >= req && nextLvl < 50) {
        nextExp -= req;
        nextLvl += 1;
        req = getRequiredExpForLevel(nextLvl);
      }

      const affinityReward = quest.rewardAffinity || 20;

      return {
        ...prev,
        level: nextLvl,
        exp: nextExp,
        coins: prev.coins + quest.rewardCoins,
        affinity: Math.min(1000, prev.affinity + affinityReward),
        completedQuestClaims: [...prev.completedQuestClaims, quest.id],
      };
    });

    onShowToast(
      `🎖️ 成功领取任务奖励：+${quest.rewardCoins} 金币，+${quest.rewardAffinity} 亲密度，+${quest.rewardExp} EXP！`,
      "success"
    );
  };

  const todayStr = new Date().toISOString().slice(0, 10);
  const isCheckedInToday = state.lastCheckInDate === todayStr;

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
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 via-pink-500/20 to-amber-500/20 border border-cyan-400/30 flex items-center justify-center text-xl shadow-inner">
              {currentPetDef.emoji}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-base sm:text-lg text-white font-sans">
                  {currentPetDef.name}
                </h2>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold bg-white/10 border border-white/15 ${rankInfo.color}`}
                >
                  {rankInfo.badge} · {rankInfo.title}
                </span>
              </div>
              <p className="text-xs text-white/50">{currentPetDef.intro}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleSound}
              title={soundMuted ? "开启 8-Bit 萌宠音效" : "静音萌宠音效"}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-colors"
            >
              {soundMuted ? (
                <VolumeX className="w-4 h-4 text-rose-400" />
              ) : (
                <Volume2 className="w-4 h-4 text-cyan-400" />
              )}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Currency & Level Quick Bar */}
        <div className="px-5 py-3 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-slate-950/80 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 font-mono">
              <span className="text-amber-400 font-bold text-sm">🪙 {state.coins}</span>
              <span className="text-white/40">金币</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono">
              <span className="text-pink-400 font-bold text-sm">💖 {state.affinity}</span>
              <span className="text-white/40">亲密度</span>
            </div>
            <span className={`text-[10px] px-2 py-0.5 rounded-full border ${careerRank.color}`}>
              {careerRank.title}
            </span>
          </div>

          {/* Level & EXP */}
          <div className="flex items-center gap-2.5 flex-1 max-w-xs justify-end">
            <span className="font-mono font-bold text-cyan-400">Lv.{state.level}</span>
            <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden border border-white/10">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full transition-all duration-300"
                style={{ width: `${expProgress}%` }}
              />
            </div>
            <span className="font-mono text-[10px] text-white/50">
              {state.exp}/{requiredExp}
            </span>
          </div>

          {/* Daily Check in Button */}
          <button
            onClick={handleCheckIn}
            disabled={isCheckedInToday}
            className={`px-3 py-1 rounded-lg font-medium text-xs flex items-center gap-1.5 transition-all shadow-md ${
              isCheckedInToday
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 cursor-default"
                : "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-bold active:scale-95"
            }`}
          >
            {isCheckedInToday ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                已打卡 (第{state.checkInStreak}天)
              </>
            ) : (
              <>
                <Gift className="w-3.5 h-3.5" />
                每日签到 (+25💖/100币)
              </>
            )}
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 bg-slate-950/30 px-5 pt-2 gap-1 overflow-x-auto scrollbar-none text-xs font-medium">
          {[
            { id: "status", label: "🌟 状态互动", icon: Heart },
            { id: "feed", label: "🍱 零食投喂", icon: Sparkles },
            { id: "shop", label: "🛒 美味小卖部", icon: ShoppingBag },
            { id: "career", label: "🎓 创作者头衔", icon: Award },
            { id: "quests", label: "📜 每日委托", icon: Flame },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  playPetSound("click");
                }}
                className={`pb-2.5 px-3 flex items-center gap-1.5 border-b-2 whitespace-nowrap transition-all ${
                  active
                    ? "border-cyan-400 text-cyan-300 font-bold"
                    : "border-transparent text-white/50 hover:text-white/80"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Contents */}
        <div className="p-5 overflow-y-auto flex-1 space-y-4 max-h-[62vh]">
          {/* TAB 1: STATUS & CARE */}
          {activeTab === "status" && (
            <div className="space-y-4">
              {/* Creator Synergy Booster Banner */}
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-cyan-950/60 via-slate-900/60 to-purple-950/60 border border-cyan-500/30 flex flex-wrap items-center justify-between gap-3 shadow-md">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎓</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-white">
                        当前创作者职级：{careerRank.title}
                      </span>
                      <span className="text-[10px] text-cyan-300 font-mono">
                        亲密度 {state.affinity}/1000
                      </span>
                    </div>
                    <p className="text-[11px] text-white/70 mt-0.5">{careerRank.buff}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {onOpenQuiz && (
                    <button
                      onClick={() => {
                        onClose();
                        onOpenQuiz();
                      }}
                      className="px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/40 text-amber-300 text-xs font-bold flex items-center gap-1 active:scale-95 transition-all shadow-sm"
                    >
                      <BrainCircuit className="w-3.5 h-3.5" />
                      <span>知识大冲关 (+30💖)</span>
                    </button>
                  )}
                  {onOpenKnowledge && (
                    <button
                      onClick={() => {
                        onClose();
                        onOpenKnowledge();
                      }}
                      className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 text-xs font-bold flex items-center gap-1 active:scale-95 transition-all shadow-sm"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>爆款宝典 (+18💖)</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Pet Status Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {/* Hunger */}
                <div className="p-3 rounded-xl bg-slate-800/60 border border-white/10 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/60 flex items-center gap-1">🍗 饱食度</span>
                    <span
                      className={`font-mono font-bold ${
                        state.hunger < 30 ? "text-rose-400" : "text-emerald-400"
                      }`}
                    >
                      {state.hunger}/100
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full transition-all duration-300"
                      style={{ width: `${state.hunger}%` }}
                    />
                  </div>
                </div>

                {/* Happiness */}
                <div className="p-3 rounded-xl bg-slate-800/60 border border-white/10 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/60 flex items-center gap-1">💖 心情值</span>
                    <span
                      className={`font-mono font-bold ${
                        state.happiness < 30 ? "text-rose-400" : "text-pink-400"
                      }`}
                    >
                      {state.happiness}/100
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-rose-500 to-pink-400 rounded-full transition-all duration-300"
                      style={{ width: `${state.happiness}%` }}
                    />
                  </div>
                </div>

                {/* Energy */}
                <div className="p-3 rounded-xl bg-slate-800/60 border border-white/10 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/60 flex items-center gap-1">⚡ 活力值</span>
                    <span
                      className={`font-mono font-bold ${
                        state.energy < 30 ? "text-rose-400" : "text-cyan-400"
                      }`}
                    >
                      {state.energy}/100
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-300"
                      style={{ width: `${state.energy}%` }}
                    />
                  </div>
                </div>

                {/* Inspiration */}
                <div className="p-3 rounded-xl bg-slate-800/60 border border-white/10 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/60 flex items-center gap-1">💡 灵感值</span>
                    <span className="font-mono font-bold text-purple-300">
                      {state.inspiration}/100
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-400 rounded-full transition-all duration-300"
                      style={{ width: `${state.inspiration}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Instant Care Actions */}
              <div>
                <h3 className="text-xs font-bold text-white/70 mb-2">🐾 即时互动与照料</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <button
                    onClick={() => {
                      playPetSound("pet");
                      if (onTriggerPetAction) onTriggerPetAction("pet");
                      onUpdateState((prev) => ({
                        ...prev,
                        happiness: Math.min(100, prev.happiness + 10),
                        affinity: Math.min(1000, prev.affinity + 8),
                        exp: prev.exp + 15,
                        dailyQuestProgress: {
                          ...prev.dailyQuestProgress,
                          pet_interact: (prev.dailyQuestProgress["pet_interact"] || 0) + 1,
                        },
                      }));
                      onShowToast("🖐️ 抚摸了桌宠，心情+10，亲密度+8，EXP+15！", "success");
                    }}
                    className="p-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 hover:border-pink-400/40 text-left transition-all active:scale-95 group"
                  >
                    <div className="text-xl mb-1 group-hover:scale-110 transition-transform">
                      🖐️
                    </div>
                    <div className="text-xs font-bold text-white">温柔抚摸</div>
                    <div className="text-[10px] text-pink-300 font-mono">心情+10 / 亲密+8</div>
                  </button>

                  <button
                    onClick={() => {
                      const freeBento = PET_FOOD_ITEMS.find((f) => f.id === "free_energy_bento");
                      if (freeBento) handleFeedFood(freeBento);
                    }}
                    className="p-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 hover:border-emerald-400/40 text-left transition-all active:scale-95 group"
                  >
                    <div className="text-xl mb-1 group-hover:scale-110 transition-transform">
                      🍱
                    </div>
                    <div className="text-xs font-bold text-white">快捷元气便当</div>
                    <div className="text-[10px] text-emerald-300 font-mono">免费无限 / 亲密+15</div>
                  </button>

                  <button
                    onClick={() => {
                      playPetSound("bubble");
                      if (onTriggerPetAction) onTriggerPetAction("bath");
                      onUpdateState((prev) => ({
                        ...prev,
                        happiness: Math.min(100, prev.happiness + 20),
                        affinity: Math.min(1000, prev.affinity + 8),
                        exp: prev.exp + 15,
                      }));
                      onShowToast("🧼 打了清爽沐浴泡泡！桌宠干干净净，亲密度+8！", "success");
                    }}
                    className="p-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 hover:border-cyan-400/40 text-left transition-all active:scale-95 group"
                  >
                    <div className="text-xl mb-1 group-hover:scale-110 transition-transform">
                      🧼
                    </div>
                    <div className="text-xs font-bold text-white">洗香香清洁</div>
                    <div className="text-[10px] text-cyan-300 font-mono">心情+20 / 亲密+8</div>
                  </button>

                  <button
                    onClick={() => {
                      playPetSound("trick");
                      if (onTriggerPetAction) onTriggerPetAction("trick");
                      onUpdateState((prev) => ({
                        ...prev,
                        inspiration: Math.min(100, prev.inspiration + 15),
                        affinity: Math.min(1000, prev.affinity + 6),
                        exp: prev.exp + 10,
                      }));
                      onShowToast("🎭 桌宠展示了翻滚特技！灵感+15，亲密度+6！", "success");
                    }}
                    className="p-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 hover:border-purple-400/40 text-left transition-all active:scale-95 group"
                  >
                    <div className="text-xl mb-1 group-hover:scale-110 transition-transform">
                      🎭
                    </div>
                    <div className="text-xs font-bold text-white">翻滚特技</div>
                    <div className="text-[10px] text-purple-300 font-mono">灵感+15 / 亲密+6</div>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: FEED SNACK BAG */}
          {activeTab === "feed" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-white/80">🎒 我的零食投喂背包</h3>
                <button
                  onClick={() => setActiveTab("shop")}
                  className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> 前往小卖部补货
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PET_FOOD_ITEMS.map((food) => {
                  const isFree = food.isFreeDaily || food.price === 0;
                  const count = state.inventory[food.id] || (isFree ? 99 : 0);
                  if (!isFree && count <= 0) return null;

                  return (
                    <div
                      key={food.id}
                      className="p-3.5 rounded-xl bg-slate-800/60 border border-white/10 flex items-center justify-between gap-3 hover:border-cyan-400/30 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{food.emoji}</span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-xs text-white">{food.name}</span>
                            <span
                              className={`px-1.5 py-0.5 rounded-full font-mono text-[10px] ${
                                isFree
                                  ? "bg-emerald-500/20 text-emerald-300 font-bold"
                                  : "bg-cyan-500/20 text-cyan-300"
                              }`}
                            >
                              {isFree ? "无限免费" : `剩余 ×${count}`}
                            </span>
                          </div>
                          <p className="text-[11px] text-white/50 mt-0.5">{food.desc}</p>
                          <div className="flex items-center gap-2 mt-1 text-[10px] font-mono">
                            <span className="text-pink-300 font-bold">
                              💖+{food.affinityGain || 15}
                            </span>
                            <span className="text-amber-300">🍗+{food.hungerGain}</span>
                            <span className="text-cyan-300">EXP+{food.expGain}</span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => handleFeedFood(food)}
                        className="px-3.5 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-bold text-xs shrink-0 shadow-md active:scale-95 transition-all"
                      >
                        投喂
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: SNACK SHOP */}
          {activeTab === "shop" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-white/80">🏪 美味能量小卖部</h3>
                <span className="text-xs font-mono text-amber-400 font-bold">
                  当前余额: 🪙 {state.coins} 金币
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PET_FOOD_ITEMS.map((food) => {
                  const ownedCount = state.inventory[food.id] || 0;
                  const isFree = food.isFreeDaily || food.price === 0;
                  const canAfford = isFree || state.coins >= food.price;

                  return (
                    <div
                      key={food.id}
                      className="p-3.5 rounded-xl bg-slate-800/60 border border-white/10 flex flex-col justify-between gap-3 hover:border-amber-400/30 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{food.emoji}</span>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-xs text-white">{food.name}</span>
                            {isFree ? (
                              <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                                免费
                              </span>
                            ) : (
                              ownedCount > 0 && (
                                <span className="text-[10px] text-white/40 font-mono">
                                  已存 ×{ownedCount}
                                </span>
                              )
                            )}
                          </div>
                          <p className="text-[11px] text-white/50 mt-0.5">{food.desc}</p>
                          <div className="flex items-center gap-2 mt-1 text-[10px] font-mono">
                            <span className="text-pink-300 font-bold">
                              💖+{food.affinityGain || 15}
                            </span>
                            <span className="text-amber-300">🍗+{food.hungerGain}</span>
                            <span className="text-cyan-300">EXP+{food.expGain}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-end gap-2 pt-1 border-t border-white/5">
                        <button
                          onClick={() => handleBuyFood(food, true)}
                          disabled={!canAfford}
                          className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all active:scale-95 ${
                            canAfford
                              ? "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black shadow-md"
                              : "bg-white/10 text-white/30 cursor-not-allowed"
                          }`}
                        >
                          {isFree ? "免费投喂" : `买并直接投喂 (🪙${food.price})`}
                        </button>

                        {!isFree && (
                          <button
                            onClick={() => handleBuyFood(food, false)}
                            disabled={!canAfford}
                            className={`px-2.5 py-1.5 rounded-lg font-medium text-xs transition-all active:scale-95 ${
                              canAfford
                                ? "bg-white/10 hover:bg-white/20 text-white"
                                : "bg-white/5 text-white/20 cursor-not-allowed"
                            }`}
                          >
                            存背包
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 4: CREATOR CAREER RANKS */}
          {activeTab === "career" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-white/80">🎓 创作者职场羁绊成长树</h3>
                <span className="text-xs font-mono text-pink-400 font-bold">
                  当前亲密度: 💖 {state.affinity} / 1000
                </span>
              </div>

              <div className="space-y-3">
                {CREATOR_CAREER_RANKS.map((rk, idx) => {
                  const isReached = state.affinity >= rk.minAffinity;
                  const isCurrent = careerRank.title === rk.title;

                  return (
                    <div
                      key={rk.title}
                      className={`p-3.5 rounded-xl border transition-all ${
                        isCurrent
                          ? "bg-gradient-to-r from-cyan-950/60 to-purple-950/60 border-cyan-400/60 shadow-lg shadow-cyan-500/10"
                          : isReached
                          ? "bg-slate-800/60 border-emerald-500/30"
                          : "bg-slate-900/40 border-white/5 opacity-60"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-white">{rk.title}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white/60">
                            {rk.stage} · 需要亲密度 {rk.minAffinity}+
                          </span>
                        </div>
                        {isCurrent ? (
                          <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-400/40">
                            当前阶位
                          </span>
                        ) : isReached ? (
                          <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> 已解锁
                          </span>
                        ) : (
                          <span className="text-xs text-white/40">未解锁</span>
                        )}
                      </div>

                      <p className="text-xs text-white/70 mt-1">{rk.desc}</p>
                      <div className="mt-2 p-2 rounded-lg bg-black/30 border border-white/5 text-[11px] text-amber-300 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>【特权加成】{rk.buff}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 5: DAILY QUESTS */}
          {activeTab === "quests" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-white/80">📜 今日实战与创作日常委托</h3>
                <span className="text-[11px] text-white/40">每日 00:00 自动刷新</span>
              </div>

              <div className="space-y-2.5">
                {DAILY_QUESTS.map((quest) => {
                  const current = state.dailyQuestProgress[quest.id] || 0;
                  const isCompleted = current >= quest.targetCount;
                  const isClaimed = state.completedQuestClaims.includes(quest.id);

                  return (
                    <div
                      key={quest.id}
                      className="p-3.5 rounded-xl bg-slate-800/60 border border-white/10 flex items-center justify-between gap-3 hover:border-white/20 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{quest.icon}</span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-xs text-white">{quest.title}</span>
                            <span className="text-[10px] text-pink-300 font-mono font-bold">
                              +{quest.rewardAffinity} 亲密度
                            </span>
                            <span className="text-[10px] text-amber-400 font-mono">
                              +{quest.rewardCoins}金币
                            </span>
                          </div>
                          <p className="text-[11px] text-white/50 mt-0.5">{quest.desc}</p>
                          <div className="flex items-center gap-2 mt-1.5">
                            <div className="w-32 h-1.5 bg-slate-900 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-cyan-400 rounded-full transition-all duration-300"
                                style={{
                                  width: `${Math.min(100, (current / quest.targetCount) * 100)}%`,
                                }}
                              />
                            </div>
                            <span className="font-mono text-[10px] text-white/60">
                              {current}/{quest.targetCount}
                            </span>
                          </div>
                        </div>
                      </div>

                      {isClaimed ? (
                        <span className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-medium flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> 已领取
                        </span>
                      ) : (
                        <button
                          onClick={() => handleClaimQuest(quest)}
                          disabled={!isCompleted}
                          className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all active:scale-95 ${
                            isCompleted
                              ? "bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 text-white shadow-md shadow-cyan-500/20"
                              : "bg-white/10 text-white/40 cursor-not-allowed"
                          }`}
                        >
                          {isCompleted ? "领取奖励" : "未达成"}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
