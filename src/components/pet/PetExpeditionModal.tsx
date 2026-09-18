import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Compass,
  MapPin,
  Clock,
  Sparkles,
  Gift,
  Coins,
  TrendingUp,
  Award,
  ArrowRight,
  Zap,
  CheckCircle2,
  Plane,
  Radio,
  Flame,
  Globe,
} from "lucide-react";
import { ProductId, AngleCategory } from "../../types";
import { PetGrowthState, savePetGrowthState } from "../../data/petGrowthStorage";
import { playPetSound } from "../../utils/petSound";
import { PRODUCTS_CONFIG } from "../../data/templates";

interface ExpeditionDestination {
  id: string;
  name: string;
  country: string;
  flag: string;
  tag: string;
  desc: string;
  bgGradient: string;
  durationSec: number;
  rewardCoins: number;
  rewardExp: number;
  rewardAffinity: number;
  hotKeyword: string;
  targetCategory: AngleCategory;
  loreLogs: string[];
}

const EXPEDITION_DESTINATIONS: ExpeditionDestination[] = [
  {
    id: "dest_tokyo",
    name: "东京 · 涩谷 & 银座",
    country: "日本 (Japan)",
    flag: "🇯🇵",
    tag: "乐天高转化 · 极简美学",
    desc: "深入日本乐天市场与 TikTok Japan 创作者社群，搜寻极致羽量化、女生生理期与精致生活爆款灵感。",
    bgGradient: "from-rose-500/20 via-pink-600/10 to-transparent",
    durationSec: 8,
    rewardCoins: 85,
    rewardExp: 120,
    rewardAffinity: 28,
    hotKeyword: "14.9g极限羽量",
    targetCategory: "gadget",
    loreLogs: [
      "桌宠乘坐樱花飞行器降落涩谷十字路口...",
      "正在银座中古店与买手交流 2026 腕表潮流趋势...",
      "捕获一条日区千万播放量视频：前1秒轻盈落水实测！",
      "探索完成！获得日系极轻黑科技灵感宝箱！",
    ],
  },
  {
    id: "dest_berlin",
    name: "柏林 · IFA 智能硬件展",
    country: "德国 (Germany)",
    flag: "🇩🇪",
    tag: "工业精工 · 暴力实测",
    desc: "直击欧洲顶级数码硬件实验室，探秘 28000Pa 飓风吸力、军规 800mAh 续航与极限深潜抗摔数据。",
    bgGradient: "from-amber-500/20 via-orange-600/10 to-transparent",
    durationSec: 8,
    rewardCoins: 110,
    rewardExp: 150,
    rewardAffinity: 32,
    hotKeyword: "28000Pa飓风吸力",
    targetCategory: "pain_point",
    loreLogs: [
      "桌宠佩戴极客护目镜飞抵柏林实验室...",
      "正在围观吸尘器暴力吸起保龄球的震撼对比测试...",
      "记录工程师测试 800mAh 连续30天不充电数据...",
      "成功破译德区高完播率『数据可视化拆解』脚本！",
    ],
  },
  {
    id: "dest_madrid",
    name: "马德里 · 潮流商业街区",
    country: "西班牙 (Spain)",
    flag: "🇪🇸",
    tag: "年轻化 · 第一视角 POV",
    desc: "穿行于马德里年轻人潮流街区，挖掘变色太阳镜、微型 POV 摄录与免掏手机开黑的年轻化神级痛点。",
    bgGradient: "from-emerald-500/20 via-teal-600/10 to-transparent",
    durationSec: 8,
    rewardCoins: 95,
    rewardExp: 130,
    rewardAffinity: 30,
    hotKeyword: "免掏手机视角开黑",
    targetCategory: "gadget",
    loreLogs: [
      "桌宠在马德里阳光广场戴上智能变色太阳镜...",
      "体验第一人称视角拍摄滑板 Vlog，引来路人围观！",
      "收集到西语区买家对『耳机+眼镜二合一』的惊叹好评...",
      "凯旋归来！带回西语社媒高赞吸睛分镜秘宝！",
    ],
  },
  {
    id: "dest_silicon_valley",
    name: "硅谷 & 洛杉矶创作者基地",
    country: "北美 (USA)",
    flag: "🇺🇸",
    tag: "端侧 AI · 效率黑科技",
    desc: "拜访硅谷 AI 实验室与洛杉矶 TikTok Studio，解锁手腕 ChatGPT、1小时会议3秒出纪要的高端职场信息差。",
    bgGradient: "from-cyan-500/20 via-blue-600/10 to-transparent",
    durationSec: 8,
    rewardCoins: 125,
    rewardExp: 180,
    rewardAffinity: 35,
    hotKeyword: "1小时会议3秒出纪要",
    targetCategory: "ai_power",
    loreLogs: [
      "桌宠降落旧金山湾区，手腕佩戴 REC10 录音卡...",
      "在跨国项目例会上单键出 3000 字思维导图纪要...",
      "洛杉矶顶流创作者正在打卡『手腕上的 ChatGPT』...",
      "远征大获全胜！获得职场信息差顶级带货法典！",
    ],
  },
];

interface PetExpeditionModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentProductId: ProductId;
  state: PetGrowthState;
  onUpdateState: (updater: (prev: PetGrowthState) => PetGrowthState) => void;
  onShowToast: (msg: string, type?: "success" | "info" | "error") => void;
  onApplyInspiration?: (category: AngleCategory, keyword: string) => void;
}

export const PetExpeditionModal: React.FC<PetExpeditionModalProps> = ({
  isOpen,
  onClose,
  currentProductId,
  state,
  onUpdateState,
  onShowToast,
  onApplyInspiration,
}) => {
  const [selectedDestId, setSelectedDestId] = useState<string>("dest_tokyo");
  const [isExpeditionRunning, setIsExpeditionRunning] = useState<boolean>(false);
  const [remainingTime, setRemainingTime] = useState<number>(0);
  const [logIndex, setLogIndex] = useState<number>(0);
  const [rewardResult, setRewardResult] = useState<{
    dest: ExpeditionDestination;
    coins: number;
    exp: number;
    affinity: number;
    keyword: string;
    category: AngleCategory;
  } | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const currentDest =
    EXPEDITION_DESTINATIONS.find((d) => d.id === selectedDestId) || EXPEDITION_DESTINATIONS[0];
  const currentProduct = PRODUCTS_CONFIG[currentProductId] || PRODUCTS_CONFIG.rec10;

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  if (!isOpen) return null;

  const handleStartExpedition = () => {
    if (state.energy < 15) {
      onShowToast("桌宠精力不足 15 点，请先投喂元气便当补充精力！", "error");
      playPetSound("error");
      return;
    }

    // Deduct energy
    onUpdateState((prev) => ({
      ...prev,
      energy: Math.max(0, prev.energy - 15),
    }));

    setIsExpeditionRunning(true);
    setRemainingTime(currentDest.durationSec);
    setLogIndex(0);
    setRewardResult(null);
    playPetSound("quest");

    const totalSec = currentDest.durationSec;
    let secLeft = totalSec;

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      secLeft -= 1;
      setRemainingTime(secLeft);

      // Advance logs
      const progress = (totalSec - secLeft) / totalSec;
      const nextLogIdx = Math.min(
        currentDest.loreLogs.length - 1,
        Math.floor(progress * currentDest.loreLogs.length)
      );
      setLogIndex(nextLogIdx);

      if (secLeft <= 0) {
        if (timerRef.current) clearInterval(timerRef.current);
        handleCompleteExpedition(currentDest);
      }
    }, 1000);
  };

  const handleSpeedRecall = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setRemainingTime(0);
    handleCompleteExpedition(currentDest);
    playPetSound("sparkle");
  };

  const handleCompleteExpedition = (dest: ExpeditionDestination) => {
    setIsExpeditionRunning(false);

    // Apply awards to pet
    onUpdateState((prev) => {
      let nextExp = prev.exp + dest.rewardExp;
      let nextLevel = prev.level;
      let reqExp = Math.floor(80 * Math.pow(nextLevel, 1.25));
      while (nextExp >= reqExp) {
        nextExp -= reqExp;
        nextLevel += 1;
        reqExp = Math.floor(80 * Math.pow(nextLevel, 1.25));
      }

      return {
        ...prev,
        coins: prev.coins + dest.rewardCoins,
        exp: nextExp,
        level: nextLevel,
        affinity: Math.min(1000, prev.affinity + dest.rewardAffinity),
        workTasksCompleted: (prev.workTasksCompleted || 0) + 1,
      };
    });

    setRewardResult({
      dest,
      coins: dest.rewardCoins,
      exp: dest.rewardExp,
      affinity: dest.rewardAffinity,
      keyword: dest.hotKeyword,
      category: dest.targetCategory,
    });

    playPetSound("coin");
    onShowToast(`🎉 桌宠顺利完成【${dest.name}】出海远征！已获得丰厚宝藏！`, "success");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="w-full max-w-2xl bg-slate-950/95 border border-white/20 rounded-[28px] shadow-[0_20px_80px_rgba(0,0,0,0.8)] overflow-hidden text-white relative flex flex-col max-h-[90vh]"
      >
        {/* Top Rim Specular Glare */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 via-amber-300 to-transparent" />

        {/* Header */}
        <div className="px-6 py-4 border-b border-white/[0.08] flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-[14px] bg-gradient-to-br from-cyan-500/30 to-blue-600/30 border border-cyan-400/40 text-cyan-300 shadow-sm">
              <Compass className="w-5 h-5 animate-spin" style={{ animationDuration: "12s" }} />
            </div>
            <div>
              <h3 className="text-base font-black tracking-tight text-white flex items-center gap-2">
                <span>桌宠出海全球远征 · 寻宝盲盒</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                  Global Expedition
                </span>
              </h3>
              <p className="text-xs text-white/50">
                派遣桌宠飞往全球核心电商据点，采集当地最新千万级高转化词条与金币秘宝
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-[12px] text-white/40 hover:text-white hover:bg-white/[0.1] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1 custom-scrollbar">
          {/* Ongoing Expedition Active Screen */}
          {isExpeditionRunning ? (
            <div className="p-6 rounded-[24px] bg-gradient-to-b from-cyan-950/40 to-black/60 border border-cyan-500/30 text-center space-y-5 relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 text-xs font-mono font-bold animate-pulse">
                  <Plane className="w-4 h-4 animate-bounce" />
                  <span>
                    桌宠正在飞往【{currentDest.name}】进行爆款侦察中...
                  </span>
                </div>

                {/* Big Animated Countdown */}
                <div className="text-5xl font-black font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-amber-300">
                  00:0{remainingTime}
                </div>

                {/* Progress bar */}
                <div className="w-full bg-white/[0.08] h-2.5 rounded-full overflow-hidden p-0.5 border border-white/10">
                  <motion.div
                    className="bg-gradient-to-r from-cyan-400 to-amber-400 h-full rounded-full"
                    style={{
                      width: `${((currentDest.durationSec - remainingTime) / currentDest.durationSec) * 100}%`,
                    }}
                    transition={{ ease: "linear" }}
                  />
                </div>

                {/* Real-time Field Logs */}
                <div className="p-3.5 rounded-[16px] bg-black/50 border border-white/10 text-xs font-mono text-cyan-200/90 min-h-[44px] flex items-center justify-center gap-2">
                  <Radio className="w-3.5 h-3.5 text-cyan-400 animate-ping flex-shrink-0" />
                  <span>{currentDest.loreLogs[logIndex] || "正在通讯同步中..."}</span>
                </div>

                {/* Speed Recall Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleSpeedRecall}
                    className="px-4 py-2 rounded-[14px] bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 text-xs font-bold transition-all cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <Zap className="w-3.5 h-3.5 text-amber-300" />
                    <span>⚡ 消耗能量立即召回 (无需等待)</span>
                  </button>
                </div>
              </div>
            </div>
          ) : rewardResult ? (
            /* Rewards Celebration Card */
            <div className="p-6 rounded-[24px] bg-gradient-to-b from-amber-500/15 via-black/60 to-black/80 border border-amber-500/40 text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-300 shadow-[0_0_25px_rgba(245,158,11,0.4)]">
                <Gift className="w-7 h-7 animate-bounce" />
              </div>

              <div>
                <h4 className="text-lg font-black text-amber-200">
                  🎉 远征凯旋！带回【{rewardResult.dest.name}】绝密宝箱
                </h4>
                <p className="text-xs text-white/60 mt-1">
                  桌宠历经险阻，成功采集到出海爆款关键突触词条！
                </p>
              </div>

              {/* Stats Rewards Grid */}
              <div className="grid grid-cols-3 gap-2.5 max-w-sm mx-auto">
                <div className="p-2.5 rounded-[16px] bg-white/[0.05] border border-white/10">
                  <div className="text-[11px] text-white/50">金币奖励</div>
                  <div className="text-base font-black text-amber-400 font-mono">
                    +{rewardResult.coins}
                  </div>
                </div>
                <div className="p-2.5 rounded-[16px] bg-white/[0.05] border border-white/10">
                  <div className="text-[11px] text-white/50">工作经验</div>
                  <div className="text-base font-black text-cyan-400 font-mono">
                    +{rewardResult.exp}
                  </div>
                </div>
                <div className="p-2.5 rounded-[16px] bg-white/[0.05] border border-white/10">
                  <div className="text-[11px] text-white/50">羁绊亲密</div>
                  <div className="text-base font-black text-rose-400 font-mono">
                    +{rewardResult.affinity}
                  </div>
                </div>
              </div>

              {/* Keyword Trophy Box */}
              <div className="p-4 rounded-[18px] bg-white/[0.04] border border-amber-400/30 text-left space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-amber-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>挖掘到的当地核心高转化词条:</span>
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/70">
                    {rewardResult.dest.country}
                  </span>
                </div>
                <div className="p-2.5 rounded-[12px] bg-black/60 border border-white/10 text-sm font-bold text-white flex items-center justify-between">
                  <span>✨ {rewardResult.keyword}</span>
                  {onApplyInspiration && (
                    <button
                      type="button"
                      onClick={() => {
                        onApplyInspiration(rewardResult.category, rewardResult.keyword);
                        onClose();
                        playPetSound("sparkle");
                      }}
                      className="px-3 py-1 rounded-[10px] bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-black text-xs transition-all cursor-pointer shadow-sm flex items-center gap-1"
                    >
                      <span>立即注入生成器</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>

              <div className="pt-2 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setRewardResult(null)}
                  className="px-4 py-2 rounded-[14px] bg-white/[0.08] hover:bg-white/[0.14] text-white text-xs font-bold transition-all cursor-pointer"
                >
                  继续派遣远征
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2 rounded-[14px] bg-white text-black hover:bg-white/90 text-xs font-black transition-all cursor-pointer shadow-sm"
                >
                  收下奖励并关闭
                </button>
              </div>
            </div>
          ) : (
            /* Destination Selection Screen */
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EXPEDITION_DESTINATIONS.map((dest) => {
                  const isSelected = selectedDestId === dest.id;
                  return (
                    <div
                      key={dest.id}
                      onClick={() => {
                        setSelectedDestId(dest.id);
                        playPetSound("click");
                      }}
                      className={`p-4 rounded-[20px] border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                        isSelected
                          ? "bg-white/[0.08] border-cyan-400/80 shadow-[0_0_20px_rgba(34,211,238,0.25)] ring-1 ring-cyan-400/50"
                          : "bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08]"
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xl">{dest.flag}</span>
                          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-white/10 text-white/80">
                            ⏱️ 8秒极速
                          </span>
                        </div>

                        <div>
                          <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                            <span>{dest.name}</span>
                          </h4>
                          <div className="text-[11px] font-semibold text-cyan-300 mt-0.5">
                            {dest.tag}
                          </div>
                        </div>

                        <p className="text-[11px] text-white/50 leading-relaxed">
                          {dest.desc}
                        </p>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-white/60">
                        <span className="text-amber-300 font-bold">🪙 +{dest.rewardCoins}</span>
                        <span className="text-cyan-300 font-bold">✨ +{dest.rewardExp} EXP</span>
                        <span className="text-rose-300 font-bold">❤️ +{dest.rewardAffinity}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Selected Destination Summary Banner */}
              <div className="p-4 rounded-[20px] bg-gradient-to-r from-cyan-950/40 via-slate-900/60 to-purple-950/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="text-xs font-bold text-white flex items-center justify-center sm:justify-start gap-1.5">
                    <span>已选目标:</span>
                    <span className="text-cyan-300 font-black">
                      {currentDest.flag} {currentDest.name}
                    </span>
                    <span className="text-white/40 font-normal">| 消耗精力 15点</span>
                  </div>
                  <div className="text-[11px] text-white/50">
                    当前桌宠精力: <span className="text-cyan-300 font-bold">{state.energy}/100</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleStartExpedition}
                  disabled={state.energy < 15}
                  className={`px-6 py-2.5 rounded-[16px] text-xs font-black transition-all cursor-pointer flex items-center gap-2 shadow-lg ${
                    state.energy >= 15
                      ? "bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black shadow-[0_0_20px_rgba(34,211,238,0.35)] active:scale-95"
                      : "bg-white/10 text-white/30 cursor-not-allowed border border-white/10"
                  }`}
                >
                  <Compass className="w-4 h-4" />
                  <span>启程出海远征 (8秒探索)</span>
                </button>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};
