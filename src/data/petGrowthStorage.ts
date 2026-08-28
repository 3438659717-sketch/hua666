import { PixelPetType, PetAccessory, ACCESSORY_SPRITES } from "./petData";

export interface PetFoodItem {
  id: string;
  name: string;
  emoji: string;
  desc: string;
  price: number;
  hungerGain: number;
  happinessGain: number;
  energyGain: number;
  inspirationGain: number;
  expGain: number;
  affinityGain: number;
  isFreeDaily?: boolean;
}

export const PET_FOOD_ITEMS: PetFoodItem[] = [
  {
    id: "free_energy_bento",
    name: "🍱 每日元气便当（免费无限）",
    emoji: "🍱",
    desc: "专为创作者与萌宠特制的元气营养便当，0金币免费投喂，能量与亲密度瞬间回满！",
    price: 0,
    hungerGain: 35,
    happinessGain: 30,
    energyGain: 30,
    inspirationGain: 25,
    expGain: 30,
    affinityGain: 15,
    isFreeDaily: true,
  },
  {
    id: "creator_espresso",
    name: "☕ 创作者浓缩冷萃",
    emoji: "☕",
    desc: "注入咖啡因与爆款灵感因子的特调冷萃，瞬间唤醒创作大脑与桌宠活力！",
    price: 10,
    hungerGain: 15,
    happinessGain: 25,
    energyGain: 45,
    inspirationGain: 40,
    expGain: 35,
    affinityGain: 18,
  },
  {
    id: "star_fish",
    name: "量子星光小鱼干",
    emoji: "🐟",
    desc: "散发幽蓝光泽的香脆小鱼干，猫咪与灵兽的最爱",
    price: 15,
    hungerGain: 25,
    happinessGain: 25,
    energyGain: 15,
    inspirationGain: 20,
    expGain: 25,
    affinityGain: 15,
  },
  {
    id: "cyber_bone",
    name: "高钙赛博骨头",
    emoji: "🍖",
    desc: "浓郁肉香的强化骨饼，让小狗与小熊活力满满",
    price: 20,
    hungerGain: 30,
    happinessGain: 25,
    energyGain: 20,
    inspirationGain: 15,
    expGain: 30,
    affinityGain: 16,
  },
  {
    id: "energy_bamboo",
    name: "翡翠能量竹笋",
    emoji: "🎋",
    desc: "蕴含纯净竹林自然灵气的极品嫩笋，熊猫与神兽最爱",
    price: 25,
    hungerGain: 35,
    happinessGain: 30,
    energyGain: 25,
    inspirationGain: 25,
    expGain: 35,
    affinityGain: 20,
  },
  {
    id: "golden_seed",
    name: "金黄太阳葵花籽",
    emoji: "🌻",
    desc: "精选饱满太阳籽，小仓鼠与小鸟嗑个不停，带来财运",
    price: 15,
    hungerGain: 25,
    happinessGain: 35,
    energyGain: 20,
    inspirationGain: 20,
    expGain: 25,
    affinityGain: 15,
  },
  {
    id: "magic_carrot",
    name: "星际发光胡萝卜",
    emoji: "🥕",
    desc: "在无重力农场培育的甜脆多汁星际胡萝卜",
    price: 18,
    hungerGain: 25,
    happinessGain: 25,
    energyGain: 20,
    inspirationGain: 20,
    expGain: 25,
    affinityGain: 16,
  },
  {
    id: "viral_macaron",
    name: "🍬 爆款甜心马卡龙",
    emoji: "🍬",
    desc: "法国蓝带大师配方的星空马卡龙，一口下去迸发无数 TikTok 文案金句！",
    price: 30,
    hungerGain: 40,
    happinessGain: 50,
    energyGain: 30,
    inspirationGain: 45,
    expGain: 50,
    affinityGain: 25,
  },
  {
    id: "honey_pot",
    name: "星云金蜜罐",
    emoji: "🍯",
    desc: "采摘自宇宙花海的纯正甘甜蜂蜜，治愈一切疲惫",
    price: 35,
    hungerGain: 45,
    happinessGain: 45,
    energyGain: 30,
    inspirationGain: 30,
    expGain: 55,
    affinityGain: 22,
  },
  {
    id: "quantum_soda",
    name: "超频能量汽水",
    emoji: "⚡",
    desc: "注入电解质与灵感泡泡的提神汽水，瞬间恢复精力",
    price: 30,
    hungerGain: 20,
    happinessGain: 40,
    energyGain: 55,
    inspirationGain: 45,
    expGain: 45,
    affinityGain: 20,
  },
  {
    id: "rainbow_cake",
    name: "极光七彩蛋糕",
    emoji: "🍰",
    desc: "豪华双层慕斯蛋糕，点亮全维度属性的大满贯点心",
    price: 60,
    hungerGain: 65,
    happinessGain: 65,
    energyGain: 55,
    inspirationGain: 55,
    expGain: 90,
    affinityGain: 35,
  },
];

export interface DailyQuest {
  id: string;
  title: string;
  desc: string;
  icon: string;
  targetCount: number;
  rewardCoins: number;
  rewardExp: number;
  rewardAffinity: number;
}

export const DAILY_QUESTS: DailyQuest[] = [
  {
    id: "pet_interact",
    title: "温柔抚摸与互动",
    desc: "在屏幕上抚摸或点击桌宠 3 次",
    icon: "🖐️",
    targetCount: 3,
    rewardCoins: 30,
    rewardExp: 40,
    rewardAffinity: 20,
  },
  {
    id: "feed_pet",
    title: "美味投喂零食",
    desc: "投喂桌宠任意可口零食或元气便当 2 次",
    icon: "🍱",
    targetCount: 2,
    rewardCoins: 40,
    rewardExp: 50,
    rewardAffinity: 25,
  },
  {
    id: "quiz_challenge",
    title: "爆款知识大冲关",
    desc: "完成 1 次 TikTok 跨境电商实战题库问答",
    icon: "🧠",
    targetCount: 1,
    rewardCoins: 50,
    rewardExp: 60,
    rewardAffinity: 30,
  },
  {
    id: "copy_titles",
    title: "爆款文案工匠",
    desc: "复制或生成 TikTok 矩阵标题 3 次",
    icon: "📋",
    targetCount: 3,
    rewardCoins: 50,
    rewardExp: 60,
    rewardAffinity: 25,
  },
  {
    id: "pomodoro_focus",
    title: "高效深度专注",
    desc: "开启并完成 1 次赛博番茄钟专注",
    icon: "⏱️",
    targetCount: 1,
    rewardCoins: 60,
    rewardExp: 80,
    rewardAffinity: 35,
  },
  {
    id: "study_tips",
    title: "爆款宝典研读",
    desc: "研读 1 篇跨境爆款营销实战闪卡",
    icon: "📚",
    targetCount: 1,
    rewardCoins: 40,
    rewardExp: 45,
    rewardAffinity: 20,
  },
  {
    id: "play_minigame",
    title: "星际接光球特训",
    desc: "与桌宠畅玩 1 局星际接物小游戏",
    icon: "🎮",
    targetCount: 1,
    rewardCoins: 45,
    rewardExp: 50,
    rewardAffinity: 20,
  },
];

export interface PetGrowthState {
  version: number;
  level: number;
  exp: number;
  coins: number;
  hunger: number;       // 0-100
  happiness: number;    // 0-100
  energy: number;       // 0-100
  inspiration: number;  // 0-100
  affinity: number;     // 0-1000 (亲密度)
  selectedPet: PixelPetType;
  currentAccessory: PetAccessory;
  unlockedAccessories: PetAccessory[];
  inventory: Record<string, number>;
  lastCheckInDate: string;
  checkInStreak: number;
  dailyQuestProgress: Record<string, number>;
  completedQuestClaims: string[]; // claimed today
  lastActiveTimestamp: number;
  totalPomodoroMinutes: number;
  totalCopiedCount: number;
  scratchpadNotes: string[];
  // Work & Knowledge Growth
  quizAnsweredCount: number;
  quizCorrectCount: number;
  studyTipsRead: string[];
  workTasksCompleted: number;
}

const STORAGE_KEY = "fosmet_pixel_pet_growth_v2";

export function getInitialPetState(): PetGrowthState {
  return {
    version: 2,
    level: 1,
    exp: 0,
    coins: 200, // Initial welcome coins
    hunger: 85,
    happiness: 90,
    energy: 95,
    inspiration: 80,
    affinity: 60,
    selectedPet: "cat",
    currentAccessory: "none",
    unlockedAccessories: ["none", "sprout"],
    inventory: {
      free_energy_bento: 99, // unlimited free daily bento
      creator_espresso: 3,
      star_fish: 5,
      magic_carrot: 3,
      golden_seed: 3,
    },
    lastCheckInDate: "",
    checkInStreak: 0,
    dailyQuestProgress: {},
    completedQuestClaims: [],
    lastActiveTimestamp: Date.now(),
    totalPomodoroMinutes: 0,
    totalCopiedCount: 0,
    scratchpadNotes: [
      "🔥 【爆款备选】14.9g 極軽スマートウォッチ！手首の負担ゼロ！ #FOSMET #スマートウォッチ",
    ],
    quizAnsweredCount: 0,
    quizCorrectCount: 0,
    studyTipsRead: [],
    workTasksCompleted: 0,
  };
}

export function loadPetGrowthState(): PetGrowthState {
  if (typeof window === "undefined") return getInitialPetState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getInitialPetState();
    const data = JSON.parse(raw);
    const initial = getInitialPetState();
    
    // Natural decay calculation based on time passed
    const now = Date.now();
    const elapsedMinutes = Math.min(
      480,
      Math.max(0, Math.floor((now - (data.lastActiveTimestamp || now)) / (1000 * 60)))
    );
    
    // Decay hunger & energy slightly with time (max decay capped)
    const hungerDecay = Math.floor(elapsedMinutes * 0.05);
    const energyDecay = Math.floor(elapsedMinutes * 0.03);

    const merged: PetGrowthState = {
      ...initial,
      ...data,
      hunger: Math.max(10, (data.hunger ?? 85) - hungerDecay),
      energy: Math.max(20, (data.energy ?? 90) - energyDecay),
      inventory: {
        ...initial.inventory,
        ...(data.inventory || {}),
        free_energy_bento: 99, // always ensure free bento exists
      },
      lastActiveTimestamp: now,
    };

    // Reset daily quests if date changed
    const todayStr = new Date().toISOString().slice(0, 10);
    if (merged.lastActiveTimestamp && new Date(data.lastActiveTimestamp || 0).toISOString().slice(0, 10) !== todayStr) {
      merged.dailyQuestProgress = {};
      merged.completedQuestClaims = [];
    }

    return merged;
  } catch (err) {
    console.error("Failed to load pet growth state", err);
    return getInitialPetState();
  }
}

export function savePetGrowthState(state: PetGrowthState) {
  if (typeof window === "undefined") return;
  try {
    state.lastActiveTimestamp = Date.now();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error("Failed to save pet state", err);
  }
}

export function getRequiredExpForLevel(lvl: number): number {
  return Math.floor(80 * Math.pow(lvl, 1.25));
}

export function tickPetGrowthDecay(state: PetGrowthState): PetGrowthState {
  const hungerDecay = 1;
  const energyDecay = 1;
  return {
    ...state,
    hunger: Math.max(5, state.hunger - hungerDecay),
    energy: Math.max(10, state.energy - energyDecay),
    lastActiveTimestamp: Date.now(),
  };
}

export function feedPet(
  state: PetGrowthState,
  foodId: string
): { nextState: PetGrowthState; success: boolean; message: string; gainedAffinity: number } {
  const food = PET_FOOD_ITEMS.find((f) => f.id === foodId);
  if (!food) {
    return { nextState: state, success: false, message: "未找到对应食物", gainedAffinity: 0 };
  }

  // Free daily bento is always available
  const isFree = food.isFreeDaily || food.price === 0;
  const currentCount = state.inventory[foodId] || (isFree ? 99 : 0);
  
  if (!isFree && currentCount <= 0) {
    return { nextState: state, success: false, message: "背包中该食物已耗尽，请前往小卖部购买", gainedAffinity: 0 };
  }

  let nextExp = state.exp + food.expGain;
  let nextLevel = state.level;
  let reqExp = getRequiredExpForLevel(nextLevel);

  while (nextExp >= reqExp) {
    nextExp -= reqExp;
    nextLevel += 1;
    reqExp = getRequiredExpForLevel(nextLevel);
  }

  const nextInventory = { ...state.inventory };
  if (!isFree) {
    nextInventory[foodId] = currentCount - 1;
    if (nextInventory[foodId] <= 0) delete nextInventory[foodId];
  } else {
    nextInventory[foodId] = 99;
  }

  const qProgress = { ...state.dailyQuestProgress };
  qProgress["feed_pet"] = (qProgress["feed_pet"] || 0) + 1;

  const affinityGain = food.affinityGain || 15;

  const nextState: PetGrowthState = {
    ...state,
    hunger: Math.min(100, state.hunger + food.hungerGain),
    happiness: Math.min(100, state.happiness + food.happinessGain),
    energy: Math.min(100, state.energy + food.energyGain),
    inspiration: Math.min(100, state.inspiration + food.inspirationGain),
    affinity: Math.min(1000, state.affinity + affinityGain),
    exp: nextExp,
    level: nextLevel,
    inventory: nextInventory,
    dailyQuestProgress: qProgress,
  };

  return {
    nextState,
    success: true,
    message: `😋 成功投喂【${food.name}】！饱食度+${food.hungerGain}, 亲密度+${affinityGain}, EXP+${food.expGain}`,
    gainedAffinity: affinityGain,
  };
}

export function petCareAction(state: PetGrowthState): {
  nextState: PetGrowthState;
  gainedExp: number;
  gainedAffinity: number;
} {
  const gainedExp = 15;
  const gainedAffinity = 8;

  let nextExp = state.exp + gainedExp;
  let nextLevel = state.level;
  let reqExp = getRequiredExpForLevel(nextLevel);

  while (nextExp >= reqExp) {
    nextExp -= reqExp;
    nextLevel += 1;
    reqExp = getRequiredExpForLevel(nextLevel);
  }

  const qProgress = { ...state.dailyQuestProgress };
  qProgress["pet_interact"] = (qProgress["pet_interact"] || 0) + 1;

  const nextState: PetGrowthState = {
    ...state,
    happiness: Math.min(100, state.happiness + 10),
    affinity: Math.min(1000, state.affinity + gainedAffinity),
    exp: nextExp,
    level: nextLevel,
    dailyQuestProgress: qProgress,
  };

  return { nextState, gainedExp, gainedAffinity };
}

// Work-Action Affinity & Skill Booster
export function addWorkAffinity(
  state: PetGrowthState,
  actionType: "generate_copy" | "copy_title" | "diagnose_title" | "finish_pomodoro" | "favorite" | "read_tip",
  customAffinity?: number
): { nextState: PetGrowthState; gainedAffinity: number; gainedExp: number; gainedCoins: number } {
  let gainedAffinity = customAffinity ?? 15;
  let gainedExp = 25;
  let gainedCoins = 10;

  if (actionType === "generate_copy") {
    gainedAffinity = 20;
    gainedExp = 35;
    gainedCoins = 15;
  } else if (actionType === "copy_title") {
    gainedAffinity = 12;
    gainedExp = 20;
    gainedCoins = 8;
  } else if (actionType === "diagnose_title") {
    gainedAffinity = 25;
    gainedExp = 40;
    gainedCoins = 20;
  } else if (actionType === "finish_pomodoro") {
    gainedAffinity = 35;
    gainedExp = 60;
    gainedCoins = 30;
  } else if (actionType === "read_tip") {
    gainedAffinity = 18;
    gainedExp = 25;
    gainedCoins = 12;
  }

  let nextExp = state.exp + gainedExp;
  let nextLevel = state.level;
  let reqExp = getRequiredExpForLevel(nextLevel);

  while (nextExp >= reqExp) {
    nextExp -= reqExp;
    nextLevel += 1;
    reqExp = getRequiredExpForLevel(nextLevel);
  }

  const qProgress = { ...state.dailyQuestProgress };
  if (actionType === "copy_title" || actionType === "generate_copy") {
    qProgress["copy_titles"] = (qProgress["copy_titles"] || 0) + 1;
  } else if (actionType === "finish_pomodoro") {
    qProgress["pomodoro_focus"] = (qProgress["pomodoro_focus"] || 0) + 1;
  } else if (actionType === "read_tip") {
    qProgress["study_tips"] = (qProgress["study_tips"] || 0) + 1;
  }

  const nextState: PetGrowthState = {
    ...state,
    affinity: Math.min(1000, state.affinity + gainedAffinity),
    coins: state.coins + gainedCoins,
    exp: nextExp,
    level: nextLevel,
    happiness: Math.min(100, state.happiness + 8),
    inspiration: Math.min(100, state.inspiration + 15),
    workTasksCompleted: (state.workTasksCompleted || 0) + 1,
    dailyQuestProgress: qProgress,
  };

  return { nextState, gainedAffinity, gainedExp, gainedCoins };
}

export function getPetRankTitle(lvl: number): { title: string; color: string; badge: string } {
  if (lvl >= 40) return { title: "🌌 量子超维神兽", color: "text-purple-300", badge: "GOD" };
  if (lvl >= 30) return { title: "👑 银河爆款缔造者", color: "text-amber-300", badge: "LEGEND" };
  if (lvl >= 20) return { title: "🚀 亿级流量操盘官", color: "text-cyan-300", badge: "MASTER" };
  if (lvl >= 10) return { title: "⭐ 爆款矩阵领航员", color: "text-emerald-300", badge: "ELITE" };
  if (lvl >= 5) return { title: "🐾 见习创作成长体", color: "text-blue-300", badge: "PRO" };
  return { title: "🌱 初生萌新幼年体", color: "text-slate-300", badge: "NOVICE" };
}

export interface CreatorCareerRank {
  title: string;
  stage: string;
  color: string;
  desc: string;
  buff: string;
  minAffinity: number;
}

export const CREATOR_CAREER_RANKS: CreatorCareerRank[] = [
  {
    title: "🌱 跨境电商萌新伴侣",
    stage: "Stage 1",
    color: "text-slate-300 border-slate-500/40 bg-slate-800/40",
    desc: "刚踏入 TikTok 出海领域的创作新手，与桌宠初步建立工作羁绊。",
    buff: "每日免费获赠无限元气便当，抚摸互动亲密度基础 +8",
    minAffinity: 0,
  },
  {
    title: "🥉 TikTok 爆款学徒",
    stage: "Stage 2",
    color: "text-emerald-300 border-emerald-500/40 bg-emerald-950/40",
    desc: "掌握了黄金3秒钩子与基础日语文案，开始产出高完播率短视频。",
    buff: "知识问答与实战问答金币收益 +20%，文案生成经验 +15%",
    minAffinity: 100,
  },
  {
    title: "🥈 黄金爆款文案工匠",
    stage: "Stage 3",
    color: "text-cyan-300 border-cyan-500/40 bg-cyan-950/40",
    desc: "深谙日本乐天/亚马逊/TikTok 转化心理，熟练量化硬件核心卖点。",
    buff: "解锁高级爆款金句库，番茄钟专注获得额外 +15 亲密度奖励",
    minAffinity: 300,
  },
  {
    title: "🥇 亿级流量跨境操盘手",
    stage: "Stage 4",
    color: "text-amber-300 border-amber-500/40 bg-amber-950/40",
    desc: "精通 TikTok 推荐算法与小黄车高转化 CTA，矩阵带货战力拉满！",
    buff: "每次生成文案自动触发桌宠灵感共鸣，金币掉落率翻倍！",
    minAffinity: 600,
  },
  {
    title: "👑 银河爆款创意总监",
    stage: "Stage 5",
    color: "text-purple-300 border-purple-500/40 bg-purple-950/40",
    desc: "人宠合一的顶级创作者，统御全品类智能硬件矩阵与全球市场！",
    buff: "全属性加成 50%，解锁量子神兽光环与专属极客装扮！",
    minAffinity: 900,
  },
];

export function getCreatorCareerRank(affinity: number): CreatorCareerRank {
  for (let i = CREATOR_CAREER_RANKS.length - 1; i >= 0; i--) {
    if (affinity >= CREATOR_CAREER_RANKS[i].minAffinity) {
      return CREATOR_CAREER_RANKS[i];
    }
  }
  return CREATOR_CAREER_RANKS[0];
}

