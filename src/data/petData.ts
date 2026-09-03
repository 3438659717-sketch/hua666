// Comprehensive Pixel Art Sprites, Frames, Costumes, and Metadata for Desktop Pet

export type PixelPetType =
  | "cat"
  | "shiba"
  | "fox"
  | "dragon"
  | "bunny"
  | "panda"
  | "penguin"
  | "bear"
  | "unicorn"
  | "owl"
  | "hamster";

export type PetBehaviorMode = "wander" | "stay" | "sleep" | "follow";

export type PetAccessoryCategory =
  | "suit"
  | "top"
  | "bottom"
  | "hat"
  | "glasses"
  | "special";

export type PetAccessory =
  | "none"
  // 1. Full Outfits (整套)
  | "suit_astronaut"
  | "suit_wizard"
  | "suit_ninja"
  | "suit_kimono"
  | "suit_tuxedo"
  | "suit_santa"
  | "suit_emperor"
  | "suit_dev"
  | "suit_rockstar"
  | "suit_cyber_mecha"
  | "suit_scientist"
  // 2. Tops & Outerwear (衣服 / 上衣)
  | "top_hoodie"
  | "top_suit_shirt"
  | "top_hawaiian"
  | "top_cyber_jacket"
  | "top_sweater"
  | "top_leather_jacket"
  | "top_knit_cardigan"
  | "top_sports_jersey"
  // 3. Pants & Bottoms (裤子 / 下装)
  | "bottom_jeans"
  | "bottom_swim_shorts"
  | "bottom_cargo"
  | "bottom_skirt"
  | "bottom_overalls"
  | "bottom_cyber_joggers"
  | "bottom_martial_pants"
  // 4. Headwear & Accessories (头部饰品)
  | "astronaut"
  | "halo"
  | "shades"
  | "crown"
  | "headphones"
  | "wizard"
  | "bow"
  | "cap"
  | "ninja"
  | "tophat"
  | "cyber_goggles"
  | "sakura"
  | "scarf"
  | "santa"
  | "sprout"
  | "devil_horns"
  | "viking";

export interface AccessoryDefinition {
  name: string;
  icon: string;
  desc: string;
  category: PetAccessoryCategory;
  price: number;
  unlockLevel: number;
  rows: { r: number; c: number; color: string }[];
}

import { EXTRA_ACCESSORY_SPRITES } from "./petOutfits";
import { REALISTIC_PET_SPRITES } from "./petSpeciesData";

const BASE_ACCESSORY_SPRITES: Partial<Record<PetAccessory, AccessoryDefinition>> = {
  none: {
    name: "原汁原味",
    icon: "✨",
    desc: "保持萌宠最原始纯粹的萌态",
    category: "special",
    price: 0,
    unlockLevel: 1,
    rows: [],
  },
  astronaut: {
    name: "宇航太空盔",
    icon: "👨‍🚀",
    desc: "全密封星际防护罩，抵御太空辐射",
    category: "hat",
    price: 150,
    unlockLevel: 3,
    rows: [
      { r: 1, c: 5, color: "#e2e8f0" }, { r: 1, c: 6, color: "#e2e8f0" }, { r: 1, c: 7, color: "#e2e8f0" }, { r: 1, c: 8, color: "#e2e8f0" }, { r: 1, c: 9, color: "#e2e8f0" }, { r: 1, c: 10, color: "#e2e8f0" },
      { r: 2, c: 4, color: "#e2e8f0" }, { r: 2, c: 5, color: "#38bdf8" }, { r: 2, c: 6, color: "#38bdf8" }, { r: 2, c: 7, color: "#38bdf8" }, { r: 2, c: 8, color: "#38bdf8" }, { r: 2, c: 9, color: "#38bdf8" }, { r: 2, c: 10, color: "#38bdf8" }, { r: 2, c: 11, color: "#e2e8f0" },
      { r: 3, c: 3, color: "#e2e8f0" }, { r: 3, c: 4, color: "#0284c7" }, { r: 3, c: 5, color: "#38bdf8" }, { r: 3, c: 6, color: "#38bdf8" }, { r: 3, c: 7, color: "#38bdf8" }, { r: 3, c: 8, color: "#38bdf8" }, { r: 3, c: 9, color: "#38bdf8" }, { r: 3, c: 10, color: "#0284c7" }, { r: 3, c: 11, color: "#e2e8f0" },
      { r: 4, c: 3, color: "#e2e8f0" }, { r: 4, c: 4, color: "#0284c7" }, { r: 4, c: 11, color: "#0284c7" }, { r: 4, c: 12, color: "#e2e8f0" },
      { r: 5, c: 3, color: "#e2e8f0" }, { r: 5, c: 12, color: "#e2e8f0" },
      { r: 6, c: 4, color: "#cbd5e1" }, { r: 6, c: 5, color: "#cbd5e1" }, { r: 6, c: 10, color: "#cbd5e1" }, { r: 6, c: 11, color: "#cbd5e1" },
    ],
  },
  halo: {
    name: "炽天使星环",
    icon: "🪐",
    desc: "神圣的天使光环，散发金色温暖光芒",
    category: "special",
    price: 200,
    unlockLevel: 5,
    rows: [
      { r: 0, c: 4, color: "#facc15" }, { r: 0, c: 5, color: "#fde047" }, { r: 0, c: 6, color: "#fef08a" }, { r: 0, c: 7, color: "#fef08a" }, { r: 0, c: 8, color: "#fde047" }, { r: 0, c: 9, color: "#facc15" }, { r: 0, c: 10, color: "#facc15" },
      { r: 1, c: 3, color: "#facc15" }, { r: 1, c: 4, color: "#38bdf8" }, { r: 1, c: 10, color: "#38bdf8" }, { r: 1, c: 11, color: "#facc15" },
      { r: 2, c: 4, color: "#facc15" }, { r: 2, c: 5, color: "#fde047" }, { r: 2, c: 6, color: "#fef08a" }, { r: 2, c: 7, color: "#fef08a" }, { r: 2, c: 8, color: "#fde047" }, { r: 2, c: 9, color: "#facc15" }, { r: 2, c: 10, color: "#facc15" },
    ],
  },
  shades: {
    name: "赛博墨镜",
    icon: "🕶️",
    desc: "纯黑钛合金边框，反光青色霓虹流光",
    category: "glasses",
    price: 100,
    unlockLevel: 2,
    rows: [
      { r: 4, c: 3, color: "#0f172a" }, { r: 4, c: 4, color: "#06b6d4" }, { r: 4, c: 5, color: "#06b6d4" }, { r: 4, c: 6, color: "#0f172a" },
      { r: 4, c: 7, color: "#0f172a" }, { r: 4, c: 8, color: "#0f172a" }, { r: 4, c: 9, color: "#06b6d4" }, { r: 4, c: 10, color: "#06b6d4" }, { r: 4, c: 11, color: "#0f172a" },
      { r: 5, c: 4, color: "#06b6d4" }, { r: 5, c: 5, color: "#0891b2" }, { r: 5, c: 9, color: "#06b6d4" }, { r: 5, c: 10, color: "#0891b2" },
    ],
  },
  crown: {
    name: "荣耀皇冠",
    icon: "👑",
    desc: "镶嵌红宝石与纯金雕花的王者冠冕",
    category: "hat",
    price: 300,
    unlockLevel: 8,
    rows: [
      { r: 1, c: 4, color: "#facc15" }, { r: 1, c: 7, color: "#ef4444" }, { r: 1, c: 10, color: "#facc15" },
      { r: 2, c: 4, color: "#facc15" }, { r: 2, c: 5, color: "#fef08a" }, { r: 2, c: 7, color: "#facc15" }, { r: 2, c: 9, color: "#fef08a" }, { r: 2, c: 10, color: "#facc15" },
      { r: 3, c: 4, color: "#f59e0b" }, { r: 3, c: 5, color: "#facc15" }, { r: 3, c: 6, color: "#facc15" }, { r: 3, c: 7, color: "#facc15" }, { r: 3, c: 8, color: "#facc15" }, { r: 3, c: 9, color: "#facc15" }, { r: 3, c: 10, color: "#f59e0b" },
    ],
  },
  headphones: {
    name: "极客耳机",
    icon: "🎧",
    desc: "专业降噪无线监听耳机，播放 8-Bit 律动",
    category: "special",
    price: 180,
    unlockLevel: 4,
    rows: [
      { r: 2, c: 4, color: "#818cf8" }, { r: 2, c: 5, color: "#818cf8" }, { r: 2, c: 6, color: "#818cf8" }, { r: 2, c: 7, color: "#818cf8" }, { r: 2, c: 8, color: "#818cf8" }, { r: 2, c: 9, color: "#818cf8" },
      { r: 3, c: 3, color: "#c084fc" }, { r: 3, c: 11, color: "#c084fc" },
      { r: 4, c: 2, color: "#a855f7" }, { r: 4, c: 3, color: "#c084fc" }, { r: 4, c: 11, color: "#c084fc" }, { r: 4, c: 12, color: "#a855f7" },
      { r: 5, c: 2, color: "#a855f7" }, { r: 5, c: 3, color: "#c084fc" }, { r: 5, c: 11, color: "#c084fc" }, { r: 5, c: 12, color: "#a855f7" },
    ],
  },
  wizard: {
    name: "魔法尖帽",
    icon: "🧙‍♂️",
    desc: "大魔导师传承的星空紫尖顶魔法帽",
    category: "hat",
    price: 260,
    unlockLevel: 6,
    rows: [
      { r: 0, c: 7, color: "#a855f7" },
      { r: 1, c: 6, color: "#a855f7" }, { r: 1, c: 7, color: "#c084fc" },
      { r: 2, c: 5, color: "#a855f7" }, { r: 2, c: 6, color: "#c084fc" }, { r: 2, c: 7, color: "#a855f7" },
      { r: 3, c: 4, color: "#facc15" }, { r: 3, c: 5, color: "#facc15" }, { r: 3, c: 6, color: "#facc15" }, { r: 3, c: 7, color: "#facc15" }, { r: 3, c: 8, color: "#facc15" },
      { r: 4, c: 3, color: "#7c3aed" }, { r: 4, c: 4, color: "#7c3aed" }, { r: 4, c: 5, color: "#7c3aed" }, { r: 4, c: 6, color: "#7c3aed" }, { r: 4, c: 7, color: "#7c3aed" }, { r: 4, c: 8, color: "#7c3aed" }, { r: 4, c: 9, color: "#7c3aed" },
    ],
  },
  bow: {
    name: "甜美颈圈蝴蝶结",
    icon: "🎀",
    desc: "佩戴在脖颈处的丝缎粉色精致领结，点缀金色珍珠扣",
    category: "special",
    price: 80,
    unlockLevel: 2,
    rows: [
      // Collar Band
      { r: 8, c: 4, color: "#fda4af" }, { r: 8, c: 5, color: "#fda4af" }, { r: 8, c: 9, color: "#fda4af" }, { r: 8, c: 10, color: "#fda4af" },
      // Left Wing
      { r: 7, c: 5, color: "#fb7185" }, { r: 7, c: 6, color: "#fda4af" },
      { r: 8, c: 5, color: "#f43f5e" }, { r: 8, c: 6, color: "#fb7185" },
      { r: 9, c: 5, color: "#e11d48" }, { r: 9, c: 6, color: "#f43f5e" },
      // Center Knot & Golden Clasp
      { r: 8, c: 7, color: "#fff1f2" }, { r: 8, c: 8, color: "#f43f5e" },
      { r: 9, c: 7, color: "#facc15" }, { r: 9, c: 8, color: "#e11d48" },
      // Right Wing
      { r: 7, c: 9, color: "#fda4af" }, { r: 7, c: 10, color: "#fb7185" },
      { r: 8, c: 9, color: "#fb7185" }, { r: 8, c: 10, color: "#f43f5e" },
      { r: 9, c: 9, color: "#f43f5e" }, { r: 9, c: 10, color: "#e11d48" },
      // Dainty Tails
      { r: 10, c: 6, color: "#f43f5e" }, { r: 11, c: 6, color: "#e11d48" },
      { r: 10, c: 9, color: "#f43f5e" }, { r: 11, c: 9, color: "#e11d48" },
    ],
  },
  cap: {
    name: "极客潮流鸭舌帽",
    icon: "🧢",
    desc: "酷炫平沿滑板鸭舌帽，街头潮流担当",
    category: "hat",
    price: 120,
    unlockLevel: 3,
    rows: [
      { r: 1, c: 5, color: "#ef4444" }, { r: 1, c: 6, color: "#ef4444" }, { r: 1, c: 7, color: "#ef4444" }, { r: 1, c: 8, color: "#ef4444" }, { r: 1, c: 9, color: "#ef4444" },
      { r: 2, c: 4, color: "#dc2626" }, { r: 2, c: 5, color: "#ffffff" }, { r: 2, c: 6, color: "#ef4444" }, { r: 2, c: 7, color: "#ffffff" }, { r: 2, c: 8, color: "#ef4444" }, { r: 2, c: 9, color: "#dc2626" },
      { r: 3, c: 3, color: "#b91c1c" }, { r: 3, c: 4, color: "#dc2626" }, { r: 3, c: 5, color: "#dc2626" }, { r: 3, c: 6, color: "#dc2626" }, { r: 3, c: 7, color: "#dc2626" }, { r: 3, c: 8, color: "#dc2626" }, { r: 3, c: 9, color: "#dc2626" }, { r: 3, c: 10, color: "#b91c1c" }, { r: 3, c: 11, color: "#991b1b" }, { r: 3, c: 12, color: "#991b1b" },
    ],
  },
  ninja: {
    name: "暗夜忍者护额",
    icon: "🥷",
    desc: "印有钛金刻纹的暗部忍者黑色护额",
    category: "hat",
    price: 220,
    unlockLevel: 4,
    rows: [
      { r: 2, c: 3, color: "#0f172a" }, { r: 2, c: 4, color: "#1e293b" }, { r: 2, c: 5, color: "#1e293b" }, { r: 2, c: 6, color: "#cbd5e1" }, { r: 2, c: 7, color: "#f8fafc" }, { r: 2, c: 8, color: "#cbd5e1" }, { r: 2, c: 9, color: "#1e293b" }, { r: 2, c: 10, color: "#1e293b" }, { r: 2, c: 11, color: "#0f172a" },
      { r: 3, c: 2, color: "#0f172a" }, { r: 3, c: 12, color: "#0f172a" },
      { r: 4, c: 1, color: "#ef4444" }, { r: 4, c: 13, color: "#ef4444" },
    ],
  },
  tophat: {
    name: "绅士高顶礼帽",
    icon: "🎩",
    desc: "维多利亚时代复古高筒丝绒礼帽",
    category: "hat",
    price: 280,
    unlockLevel: 7,
    rows: [
      { r: 0, c: 5, color: "#1e293b" }, { r: 0, c: 6, color: "#1e293b" }, { r: 0, c: 7, color: "#1e293b" }, { r: 0, c: 8, color: "#1e293b" },
      { r: 1, c: 5, color: "#0f172a" }, { r: 1, c: 6, color: "#1e293b" }, { r: 1, c: 7, color: "#1e293b" }, { r: 1, c: 8, color: "#0f172a" },
      { r: 2, c: 5, color: "#ef4444" }, { r: 2, c: 6, color: "#f87171" }, { r: 2, c: 7, color: "#f87171" }, { r: 2, c: 8, color: "#ef4444" },
      { r: 3, c: 3, color: "#0f172a" }, { r: 3, c: 4, color: "#1e293b" }, { r: 3, c: 5, color: "#1e293b" }, { r: 3, c: 6, color: "#1e293b" }, { r: 3, c: 7, color: "#1e293b" }, { r: 3, c: 8, color: "#1e293b" }, { r: 3, c: 9, color: "#1e293b" }, { r: 3, c: 10, color: "#0f172a" },
    ],
  },
  cyber_goggles: {
    name: "战术 VR 扫描目镜",
    icon: "🥽",
    desc: "高亮绿光战术 AR 扫描镜，分析实时数据",
    category: "glasses",
    price: 240,
    unlockLevel: 5,
    rows: [
      { r: 4, c: 3, color: "#10b981" }, { r: 4, c: 4, color: "#34d399" }, { r: 4, c: 5, color: "#34d399" }, { r: 4, c: 6, color: "#065f46" },
      { r: 4, c: 7, color: "#10b981" }, { r: 4, c: 8, color: "#065f46" }, { r: 4, c: 9, color: "#34d399" }, { r: 4, c: 10, color: "#34d399" }, { r: 4, c: 11, color: "#10b981" },
      { r: 5, c: 4, color: "#10b981" }, { r: 5, c: 5, color: "#059669" }, { r: 5, c: 9, color: "#10b981" }, { r: 5, c: 10, color: "#059669" },
    ],
  },
  sakura: {
    name: "落樱缤纷花簪",
    icon: "🌸",
    desc: "飘落花瓣的粉色和风樱花发饰",
    category: "special",
    price: 160,
    unlockLevel: 3,
    rows: [
      { r: 1, c: 10, color: "#fbcfe8" }, { r: 1, c: 11, color: "#f472b6" },
      { r: 2, c: 9, color: "#f472b6" }, { r: 2, c: 10, color: "#fde047" }, { r: 2, c: 11, color: "#fbcfe8" }, { r: 2, c: 12, color: "#f472b6" },
      { r: 3, c: 10, color: "#f472b6" }, { r: 3, c: 11, color: "#ec4899" },
    ],
  },
  scarf: {
    name: "英雄飘逸红围巾",
    icon: "🧣",
    desc: "随风猎猎作响的红色英雄保暖围巾",
    category: "special",
    price: 190,
    unlockLevel: 4,
    rows: [
      { r: 7, c: 3, color: "#ef4444" }, { r: 7, c: 4, color: "#ef4444" }, { r: 7, c: 5, color: "#dc2626" }, { r: 7, c: 6, color: "#ef4444" }, { r: 7, c: 7, color: "#ef4444" }, { r: 7, c: 8, color: "#ef4444" }, { r: 7, c: 9, color: "#dc2626" }, { r: 7, c: 10, color: "#ef4444" }, { r: 7, c: 11, color: "#ef4444" },
      { r: 8, c: 3, color: "#dc2626" }, { r: 8, c: 4, color: "#b91c1c" },
      { r: 9, c: 2, color: "#ef4444" }, { r: 9, c: 3, color: "#dc2626" },
      { r: 10, c: 2, color: "#dc2626" },
    ],
  },
  santa: {
    name: "狂欢圣诞帽",
    icon: "🎅",
    desc: "毛茸茸白绒球与鲜艳红丝绒圣诞帽",
    category: "hat",
    price: 180,
    unlockLevel: 2,
    rows: [
      { r: 0, c: 10, color: "#ffffff" },
      { r: 1, c: 9, color: "#ffffff" }, { r: 1, c: 8, color: "#ef4444" },
      { r: 2, c: 5, color: "#ef4444" }, { r: 2, c: 6, color: "#ef4444" }, { r: 2, c: 7, color: "#ef4444" }, { r: 2, c: 8, color: "#ef4444" },
      { r: 3, c: 4, color: "#ffffff" }, { r: 3, c: 5, color: "#ffffff" }, { r: 3, c: 6, color: "#ffffff" }, { r: 3, c: 7, color: "#ffffff" }, { r: 3, c: 8, color: "#ffffff" }, { r: 3, c: 9, color: "#ffffff" },
    ],
  },
  sprout: {
    name: "治愈头顶小绿芽",
    icon: "🌱",
    desc: "萌化人心的两片初生嫩绿小草芽",
    category: "hat",
    price: 90,
    unlockLevel: 1,
    rows: [
      { r: 0, c: 5, color: "#4ade80" }, { r: 0, c: 9, color: "#4ade80" },
      { r: 1, c: 6, color: "#22c55e" }, { r: 1, c: 8, color: "#22c55e" },
      { r: 2, c: 7, color: "#16a34a" },
    ],
  },
  devil_horns: {
    name: "霓虹小恶魔角",
    icon: "😈",
    desc: "散发紫红幽光的调皮恶魔双角",
    category: "hat",
    price: 250,
    unlockLevel: 6,
    rows: [
      { r: 0, c: 3, color: "#f43f5e" }, { r: 0, c: 11, color: "#f43f5e" },
      { r: 1, c: 3, color: "#f43f5e" }, { r: 1, c: 4, color: "#e11d48" }, { r: 1, c: 10, color: "#e11d48" }, { r: 1, c: 11, color: "#f43f5e" },
      { r: 2, c: 4, color: "#be123c" }, { r: 2, c: 10, color: "#be123c" },
    ],
  },
  viking: {
    name: "维京战神角盔",
    icon: "⚔️",
    desc: "北方狂战士的粗粝白银牛角战盔",
    category: "hat",
    price: 350,
    unlockLevel: 9,
    rows: [
      { r: 0, c: 2, color: "#f8fafc" }, { r: 0, c: 12, color: "#f8fafc" },
      { r: 1, c: 3, color: "#e2e8f0" }, { r: 1, c: 11, color: "#e2e8f0" },
      { r: 2, c: 4, color: "#cbd5e1" }, { r: 2, c: 5, color: "#94a3b8" }, { r: 2, c: 6, color: "#94a3b8" }, { r: 2, c: 7, color: "#94a3b8" }, { r: 2, c: 8, color: "#94a3b8" }, { r: 2, c: 9, color: "#94a3b8" }, { r: 2, c: 10, color: "#cbd5e1" },
      { r: 3, c: 4, color: "#64748b" }, { r: 3, c: 5, color: "#64748b" }, { r: 3, c: 6, color: "#cbd5e1" }, { r: 3, c: 7, color: "#f8fafc" }, { r: 3, c: 8, color: "#cbd5e1" }, { r: 3, c: 9, color: "#64748b" }, { r: 3, c: 10, color: "#64748b" },
    ],
  },
};

export const ACCESSORY_SPRITES: Record<PetAccessory, AccessoryDefinition> = {
  ...BASE_ACCESSORY_SPRITES,
  ...(EXTRA_ACCESSORY_SPRITES as Record<PetAccessory, AccessoryDefinition>),
} as Record<PetAccessory, AccessoryDefinition>;

// 16x16 Pixel Art Matrices for 11 distinct species
export interface PetDefinition {
  name: string;
  emoji: string;
  species: string;
  color: string;
  intro: string;
  buff: string;
  palette: Record<string, string>;
  frames: {
    idle1: string[];
    idle2: string[];
    walk1: string[];
    walk2: string[];
    jump: string[];
    happy: string[];
    sleep: string[];
    sit: string[];
  };
  quotes: string[];
}

export const PIXEL_SPRITES: Record<PixelPetType, PetDefinition> = REALISTIC_PET_SPRITES;
