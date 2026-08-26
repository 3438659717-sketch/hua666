import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useDragControls } from "motion/react";
import {
  Sparkles,
  Heart,
  Zap,
  MessageSquare,
  Volume2,
  Award,
  Compass,
  RefreshCw,
  X,
  ChevronRight,
  Move,
  Eye,
  EyeOff,
  Moon,
  Sun,
  Flame,
  HelpCircle,
  Settings2,
} from "lucide-react";
import { ProductId } from "../types";
import { PRODUCTS_CONFIG } from "../data/templates";

export type PixelPetType = "cat" | "shiba" | "fox" | "dragon" | "bunny";
export type PetBehaviorMode = "wander" | "stay" | "sleep" | "follow";
export type PetAccessory = "none" | "astronaut" | "halo" | "shades" | "crown" | "headphones" | "wizard" | "bow";

const ACCESSORY_SPRITES: Record<PetAccessory, { name: string; icon: string; rows: { r: number; c: number; color: string }[] }> = {
  none: { name: "原汁原味", icon: "✨", rows: [] },
  astronaut: {
    name: "宇航太空盔",
    icon: "👨‍🚀",
    rows: [
      { r: 1, c: 5, color: "#e2e8f0" }, { r: 1, c: 6, color: "#e2e8f0" }, { r: 1, c: 7, color: "#e2e8f0" }, { r: 1, c: 8, color: "#e2e8f0" }, { r: 1, c: 9, color: "#e2e8f0" }, { r: 1, c: 10, color: "#e2e8f0" },
      { r: 2, c: 4, color: "#e2e8f0" }, { r: 2, c: 5, color: "#38bdf8" }, { r: 2, c: 6, color: "#38bdf8" }, { r: 2, c: 7, color: "#38bdf8" }, { r: 2, c: 8, color: "#38bdf8" }, { r: 2, c: 9, color: "#38bdf8" }, { r: 2, c: 10, color: "#38bdf8" }, { r: 2, c: 11, color: "#e2e8f0" },
      { r: 3, c: 3, color: "#e2e8f0" }, { r: 3, c: 4, color: "#0284c7" }, { r: 3, c: 5, color: "#38bdf8" }, { r: 3, c: 6, color: "#38bdf8" }, { r: 3, c: 7, color: "#38bdf8" }, { r: 3, c: 8, color: "#38bdf8" }, { r: 3, c: 9, color: "#38bdf8" }, { r: 3, c: 10, color: "#0284c7" }, { r: 3, c: 11, color: "#e2e8f0" },
      { r: 4, c: 3, color: "#e2e8f0" }, { r: 4, c: 4, color: "#0284c7" }, { r: 4, c: 11, color: "#0284c7" }, { r: 4, c: 12, color: "#e2e8f0" },
      { r: 5, c: 3, color: "#e2e8f0" }, { r: 5, c: 12, color: "#e2e8f0" },
      { r: 6, c: 4, color: "#cbd5e1" }, { r: 6, c: 5, color: "#cbd5e1" }, { r: 6, c: 10, color: "#cbd5e1" }, { r: 6, c: 11, color: "#cbd5e1" },
    ]
  },
  halo: {
    name: "炽天使星环",
    icon: "🪐",
    rows: [
      { r: 0, c: 4, color: "#facc15" }, { r: 0, c: 5, color: "#fde047" }, { r: 0, c: 6, color: "#fef08a" }, { r: 0, c: 7, color: "#fef08a" }, { r: 0, c: 8, color: "#fde047" }, { r: 0, c: 9, color: "#facc15" }, { r: 0, c: 10, color: "#facc15" },
      { r: 1, c: 3, color: "#facc15" }, { r: 1, c: 4, color: "#38bdf8" }, { r: 1, c: 10, color: "#38bdf8" }, { r: 1, c: 11, color: "#facc15" },
      { r: 2, c: 4, color: "#facc15" }, { r: 2, c: 5, color: "#fde047" }, { r: 2, c: 6, color: "#fef08a" }, { r: 2, c: 7, color: "#fef08a" }, { r: 2, c: 8, color: "#fde047" }, { r: 2, c: 9, color: "#facc15" }, { r: 2, c: 10, color: "#facc15" },
    ]
  },
  shades: {
    name: "赛博墨镜",
    icon: "🕶️",
    rows: [
      { r: 4, c: 3, color: "#0f172a" }, { r: 4, c: 4, color: "#06b6d4" }, { r: 4, c: 5, color: "#06b6d4" }, { r: 4, c: 6, color: "#0f172a" },
      { r: 4, c: 7, color: "#0f172a" }, { r: 4, c: 8, color: "#0f172a" }, { r: 4, c: 9, color: "#06b6d4" }, { r: 4, c: 10, color: "#06b6d4" }, { r: 4, c: 11, color: "#0f172a" },
      { r: 5, c: 4, color: "#06b6d4" }, { r: 5, c: 5, color: "#0891b2" }, { r: 5, c: 9, color: "#06b6d4" }, { r: 5, c: 10, color: "#0891b2" },
    ]
  },
  crown: {
    name: "荣耀皇冠",
    icon: "👑",
    rows: [
      { r: 1, c: 4, color: "#facc15" }, { r: 1, c: 7, color: "#ef4444" }, { r: 1, c: 10, color: "#facc15" },
      { r: 2, c: 4, color: "#facc15" }, { r: 2, c: 5, color: "#fef08a" }, { r: 2, c: 7, color: "#facc15" }, { r: 2, c: 9, color: "#fef08a" }, { r: 2, c: 10, color: "#facc15" },
      { r: 3, c: 4, color: "#f59e0b" }, { r: 3, c: 5, color: "#facc15" }, { r: 3, c: 6, color: "#facc15" }, { r: 3, c: 7, color: "#facc15" }, { r: 3, c: 8, color: "#facc15" }, { r: 3, c: 9, color: "#facc15" }, { r: 3, c: 10, color: "#f59e0b" },
    ]
  },
  headphones: {
    name: "极客耳机",
    icon: "🎧",
    rows: [
      { r: 2, c: 4, color: "#818cf8" }, { r: 2, c: 5, color: "#818cf8" }, { r: 2, c: 6, color: "#818cf8" }, { r: 2, c: 7, color: "#818cf8" }, { r: 2, c: 8, color: "#818cf8" }, { r: 2, c: 9, color: "#818cf8" },
      { r: 3, c: 3, color: "#c084fc" }, { r: 3, c: 11, color: "#c084fc" },
      { r: 4, c: 2, color: "#a855f7" }, { r: 4, c: 3, color: "#c084fc" }, { r: 4, c: 11, color: "#c084fc" }, { r: 4, c: 12, color: "#a855f7" },
      { r: 5, c: 2, color: "#a855f7" }, { r: 5, c: 3, color: "#c084fc" }, { r: 5, c: 11, color: "#c084fc" }, { r: 5, c: 12, color: "#a855f7" },
    ]
  },
  wizard: {
    name: "魔法尖帽",
    icon: "🧙‍♂️",
    rows: [
      { r: 0, c: 7, color: "#a855f7" },
      { r: 1, c: 6, color: "#a855f7" }, { r: 1, c: 7, color: "#c084fc" },
      { r: 2, c: 5, color: "#a855f7" }, { r: 2, c: 6, color: "#c084fc" }, { r: 2, c: 7, color: "#a855f7" },
      { r: 3, c: 4, color: "#facc15" }, { r: 3, c: 5, color: "#facc15" }, { r: 3, c: 6, color: "#facc15" }, { r: 3, c: 7, color: "#facc15" }, { r: 3, c: 8, color: "#facc15" },
      { r: 4, c: 3, color: "#7c3aed" }, { r: 4, c: 4, color: "#7c3aed" }, { r: 4, c: 5, color: "#7c3aed" }, { r: 4, c: 6, color: "#7c3aed" }, { r: 4, c: 7, color: "#7c3aed" }, { r: 4, c: 8, color: "#7c3aed" }, { r: 4, c: 9, color: "#7c3aed" },
    ]
  },
  bow: {
    name: "甜美蝴蝶结",
    icon: "🎀",
    rows: [
      { r: 2, c: 4, color: "#fb7185" }, { r: 2, c: 5, color: "#f43f5e" }, { r: 2, c: 6, color: "#fb7185" },
      { r: 3, c: 3, color: "#fda4af" }, { r: 3, c: 4, color: "#f43f5e" }, { r: 3, c: 5, color: "#facc15" }, { r: 3, c: 6, color: "#f43f5e" }, { r: 3, c: 7, color: "#fda4af" },
    ]
  }
};

let petSeqCounter = 0;
const getUniquePetId = (prefix: string): string => {
  petSeqCounter += 1;
  return `${prefix}_${Date.now()}_${petSeqCounter}_${Math.random().toString(36).slice(2, 8)}`;
};

interface PixelPetCompanionProps {
  currentProductId: ProductId;
  onCheer?: () => void;
  lastAction?: { type: "generate" | "copy" | "favorite" | "change_product"; timestamp: number; data?: any } | null;
}

// 16x16 Pixel Art Matrices for multiple frames
const PIXEL_SPRITES: Record<PixelPetType, {
  name: string;
  emoji: string;
  color: string;
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
}> = {
  cat: {
    name: "量子赛博猫 (Mochi)",
    emoji: "🐱",
    color: "#38bdf8",
    palette: {
      " ": "transparent",
      "K": "#0b0f19",
      "W": "#ffffff",
      "G": "#cbd5e1",
      "C": "#06b6d4",
      "S": "#38bdf8",
      "P": "#f472b6",
      "R": "#fb7185",
      "Y": "#fde047",
      "O": "#f59e0b",
      "Z": "#818cf8",
      "E": "#22d3ee",
    },
    frames: {
      idle1: [
        "    KK    KK    ",
        "   KPPK  KPPK   ",
        "  KWWWWKKWWWWK  ",
        "  KWWWWWWWWWWK  ",
        "  KWEEWWWWEEWK  ",
        "  KWCCWWWWCCWK  ",
        "  KWWWWPWWWWWK  ",
        "  PKWWWWWWWWKP  ",
        "  KKWWYYOYWWKK  ",
        " KWWWWWWWWWWWWK ",
        " KWWWSWWWSWWWWK ",
        " KWWWWWWWWWWWWK ",
        "  KWWWWWWWWWWK  ",
        "  KWKKKKKKKKWK  ",
        "  KK        KK  ",
        "                ",
      ],
      idle2: [
        "    KK    KK    ",
        "   KPPK  KPPK   ",
        "  KWWWWKKWWWWK  ",
        "  KWWWWWWWWWWK  ",
        "  KWE-WWWW-EWK  ",
        "  KWCCWWWWCCWK  ",
        "  KWWWWPWWWWWK  ",
        "  PKWWWWWWWWKP  ",
        "  KKWWYYOYWWKK  ",
        " KWWWWWWWWWWWWK ",
        " KWWWSWWWSWWWWK ",
        " KWWWWWWWWWWWWK ",
        "  KWWWWWWWWWWK  ",
        "  KWKKKKKKKKWK  ",
        "  KK        KK  ",
        "                ",
      ],
      walk1: [
        "    KK    KK    ",
        "   KPPK  KPPK   ",
        "  KWWWWKKWWWWK  ",
        "  KWWWWWWWWWWK  ",
        "  KWEEWWWWEEWK  ",
        "  KWCCWWWWCCWK  ",
        "  KWWWWPWWWWWK  ",
        "  PKWWWWWWWWKP  ",
        "  KKWWYYOYWWKK  ",
        " KWWWWWWWWWWWWK ",
        " KWWWSWWWSWWWWK ",
        "  KWWWWWWWWWWK  ",
        "  KWKK    KWWK  ",
        "  KK        KK  ",
        "                ",
        "                ",
      ],
      walk2: [
        "    KK    KK    ",
        "   KPPK  KPPK   ",
        "  KWWWWKKWWWWK  ",
        "  KWWWWWWWWWWK  ",
        "  KWEEWWWWEEWK  ",
        "  KWCCWWWWCCWK  ",
        "  KWWWWPWWWWWK  ",
        "  PKWWWWWWWWKP  ",
        "  KKWWYYOYWWKK  ",
        " KWWWWWWWWWWWWK ",
        " KWWWSWWWSWWWWK ",
        "  KWWWWWWWWWWK  ",
        "  KWWK    KWKK  ",
        "  KK        KK  ",
        "                ",
        "                ",
      ],
      jump: [
        "    KK    KK    ",
        "   KPPK  KPPK   ",
        "  KWWWWKKWWWWK  ",
        "  KWWWWWWWWWWK  ",
        "  KWEEWWWWEEWK  ",
        "  KWCCWWWWCCWK  ",
        "  KWWWWPWWWWWK  ",
        "  PKWWWWWWWWKP  ",
        "  KKWWYYOYWWKK  ",
        " KWWWWWWWWWWWWK ",
        " KWWWSWWWSWWWWK ",
        " KKWWWWWWWWWWKK ",
        "   KWWKKKKWWK   ",
        "   KK      KK   ",
        "                ",
        "                ",
      ],
      happy: [
        "   KK      KK   ",
        "  KPPK    KPPK  ",
        "  KWWWWKKWWWWK  ",
        "  KWWWWWWWWWWK  ",
        "  KW^^WWWW^^WK  ",
        "  KWWWWPWWWWWK  ",
        "  PKWWWWWWWWKP  ",
        "  KKWWYYOYWWKK  ",
        " KWWWWWWWWWWWWK ",
        " KWWWSWWWSWWWWK ",
        " KWWWWWWWWWWWWK ",
        " KWWWWWWWWWWWWK ",
        "  KWWWWWWWWWWK  ",
        "  KWKKKKKKKKWK  ",
        "  KK        KK  ",
        "                ",
      ],
      sleep: [
        "                ",
        "    KK    KK    ",
        "   KPPK  KPPK   ",
        "  KWWWWKKWWWWK  ",
        "  KWWWWWWWWWWK  ",
        "  KW--WWWW--WK  ",
        "  KWWWWPWWWWWK  ",
        "  PKWWWWWWWWKP  ",
        "  KKWWYYOYWWKK  ",
        " KWWWWWWWWWWWWK ",
        "  KKWWWWWWWWKK  ",
        "    KKKKKKKK    ",
        "                ",
        "                ",
        "                ",
        "                ",
      ],
      sit: [
        "    KK    KK    ",
        "   KPPK  KPPK   ",
        "  KWWWWKKWWWWK  ",
        "  KWWWWWWWWWWK  ",
        "  KWEEWWWWEEWK  ",
        "  KWCCWWWWCCWK  ",
        "  KWWWWPWWWWWK  ",
        "  PKWWWWWWWWKP  ",
        "  KKWWYYOYWWKK  ",
        " KWWWWWWWWWWWWK ",
        " KWWWSWWWSWWWWK ",
        "  KKWWWWWWWWKK  ",
        "    KKKKKKKK    ",
        "                ",
        "                ",
        "                ",
      ],
    },
    quotes: [
      "喵~ 前置钩子（Hook）越具体，TikTok 播放完播率越高！",
      "FOSMET 矩阵 50 组文案已全部就绪，快去复制发视频吧！",
      "【神すぎる】【14.9g極軽】是日本受众最无法拒绝的黄金词！",
      "每条文案都已挂载 5 大黄金营销标签，一键粘贴即可引流！",
      "咕噜咕噜~ 点击我还会释放量子小鱼干哦！",
      "你可以拖拽我到屏幕任何位置！我是你的专属 AI 创作桌宠！",
    ],
  },
  shiba: {
    name: "像素柴柴 (Hachi)",
    emoji: "🐕",
    color: "#f59e0b",
    palette: {
      " ": "transparent",
      "K": "#0b0f19",
      "O": "#d97706",
      "L": "#f59e0b",
      "W": "#ffffff",
      "C": "#fef08a",
      "B": "#0b0f19",
      "P": "#fb7185",
      "R": "#ef4444",
    },
    frames: {
      idle1: [
        "    KK    KK    ",
        "   KOOK  KOOK   ",
        "  KOLLOKKOLLOK  ",
        "  KOWWWWWWWLLK  ",
        "  KOWBWWWWBWOK  ",
        "  KOWWWPWWWWOK  ",
        "  PKWWWWWWWWKP  ",
        "  KKRRRRRRRRKK  ",
        " KOOOOOOOOOOOOK ",
        " KOLLOWWWWOLLOK ",
        " KOOOWWWWWWOOOK ",
        " KOOOWWWWWWOOOK ",
        "  KOOOOOOOOOOK  ",
        "  KOKKKKKKKKOK  ",
        "  KK        KK  ",
        "                ",
      ],
      idle2: [
        "    KK    KK    ",
        "   KOOK  KOOK   ",
        "  KOLLOKKOLLOK  ",
        "  KOWWWWWWWLLK  ",
        "  KOW-WWWW-WOK  ",
        "  KOWWWPWWWWOK  ",
        "  PKWWWWWWWWKP  ",
        "  KKRRRRRRRRKK  ",
        " KOOOOOOOOOOOOK ",
        " KOLLOWWWWOLLOK ",
        " KOOOWWWWWWOOOK ",
        " KOOOWWWWWWOOOK ",
        "  KOOOOOOOOOOK  ",
        "  KOKKKKKKKKOK  ",
        "  KK        KK  ",
        "                ",
      ],
      walk1: [
        "    KK    KK    ",
        "   KOOK  KOOK   ",
        "  KOLLOKKOLLOK  ",
        "  KOWWWWWWWLLK  ",
        "  KOWBWWWWBWOK  ",
        "  KOWWWPWWWWOK  ",
        "  PKWWWWWWWWKP  ",
        "  KKRRRRRRRRKK  ",
        " KOOOOOOOOOOOOK ",
        " KOLLOWWWWOLLOK ",
        " KOOOWWWWWWOOOK ",
        "  KOOOOOOOOOOK  ",
        "  KOKK    KOKK  ",
        "  KK        KK  ",
        "                ",
        "                ",
      ],
      walk2: [
        "    KK    KK    ",
        "   KOOK  KOOK   ",
        "  KOLLOKKOLLOK  ",
        "  KOWWWWWWWLLK  ",
        "  KOWBWWWWBWOK  ",
        "  KOWWWPWWWWOK  ",
        "  PKWWWWWWWWKP  ",
        "  KKRRRRRRRRKK  ",
        " KOOOOOOOOOOOOK ",
        " KOLLOWWWWOLLOK ",
        " KOOOWWWWWWOOOK ",
        "  KOOOOOOOOOOK  ",
        "  KKOK    KOKK  ",
        "  KK        KK  ",
        "                ",
        "                ",
      ],
      jump: [
        "    KK    KK    ",
        "   KOOK  KOOK   ",
        "  KOLLOKKOLLOK  ",
        "  KOWWWWWWWLLK  ",
        "  KOWBWWWWBWOK  ",
        "  KOWWWPWWWWOK  ",
        "  PKWWWWWWWWKP  ",
        "  KKRRRRRRRRKK  ",
        " KOOOOOOOOOOOOK ",
        " KOLLOWWWWOLLOK ",
        " KKOWWWWWWOOKK  ",
        "   KOKKKKKKOK   ",
        "   KK      KK   ",
        "                ",
        "                ",
        "                ",
      ],
      happy: [
        "    KK    KK    ",
        "   KOOK  KOOK   ",
        "  KOLLOKKOLLOK  ",
        "  KOWWWWWWWLLK  ",
        "  KOW^WWWW^WOK  ",
        "  KOWWWPWWWWOK  ",
        "  PKWWWPWWWWKP  ",
        "  KKRRRRRRRRKK  ",
        " KOOOOOOOOOOOOK ",
        " KOLLOWWWWOLLOK ",
        " KOOOWWWWWWOOOK ",
        " KOOOWWWWWWOOOK ",
        "  KOOOOOOOOOOK  ",
        "  KOKKKKKKKKOK  ",
        "  KK        KK  ",
        "                ",
      ],
      sleep: [
        "                ",
        "    KK    KK    ",
        "   KOOK  KOOK   ",
        "  KOLLOKKOLLOK  ",
        "  KOWWWWWWWLLK  ",
        "  KOW-WWWW-WOK  ",
        "  KOWWWPWWWWOK  ",
        "  PKWWWWWWWWKP  ",
        "  KKRRRRRRRRKK  ",
        " KOOOOOOOOOOOOK ",
        "  KKOOOWWWWOOKK ",
        "    KKKKKKKK    ",
        "                ",
        "                ",
        "                ",
        "                ",
      ],
      sit: [
        "    KK    KK    ",
        "   KOOK  KOOK   ",
        "  KOLLOKKOLLOK  ",
        "  KOWWWWWWWLLK  ",
        "  KOWBWWWWBWOK  ",
        "  KOWWWPWWWWOK  ",
        "  PKWWWWWWWWKP  ",
        "  KKRRRRRRRRKK  ",
        " KOOOOOOOOOOOOK ",
        " KOLLOWWWWOLLOK ",
        "  KKOOOOOOOOKK  ",
        "    KKKKKKKK    ",
        "                ",
        "                ",
        "                ",
        "                ",
      ],
    },
    quotes: [
      "汪汪！KT80 带有 800mAh 巨兽电池，户外探险续航天花板！",
      "主人，我刚刚闻到了 50 组爆款文案的味道，超香！",
      "德国区用德语、西语区用西班牙语，全球矩阵流量翻倍！",
      "点击我进行互动，柴柴会为你加油摇尾巴！",
      "选对痛点分类，TikTok 爆款视频转化率直接起飞！",
      "呼噜~ 抓起我可以把我放到屏幕任意角落哦！",
    ],
  },
  fox: {
    name: "极光九尾狐 (Kitsune)",
    emoji: "🦊",
    color: "#ec4899",
    palette: {
      " ": "transparent",
      "K": "#0b0f19",
      "F": "#fb923c",
      "W": "#ffffff",
      "M": "#ec4899",
      "B": "#0b0f19",
      "Y": "#fde047",
      "P": "#f472b6",
    },
    frames: {
      idle1: [
        "   KK      KK   ",
        "  KFFK    KFFK  ",
        " KFFFFFFKKFFFFFFK",
        " KFFFFFFFFFFFFFFK",
        " KFFBFFFFFFFFBFFK",
        "  KFFFFFYFFFFFFK ",
        "  KWWWWWWWWWWWWK ",
        "   KKWWWWWWWWKK  ",
        "  KMMFFFFFFFFMMK ",
        "  KMMFFFFFFFFMMK ",
        "  KMMFFFFFFFFMMK ",
        "   KFFFFFFFFFFK  ",
        "   KFKKKKKKKKFK  ",
        "   KK        KK  ",
        "                ",
        "                ",
      ],
      idle2: [
        "   KK      KK   ",
        "  KFFK    KFFK  ",
        " KFFFFFFKKFFFFFFK",
        " KFFFFFFFFFFFFFFK",
        " KFF-FFFFFFFF-FFK",
        "  KFFFFFYFFFFFFK ",
        "  KWWWWWWWWWWWWK ",
        "   KKWWWWWWWWKK  ",
        "  KMMFFFFFFFFMMK ",
        "  KMMFFFFFFFFMMK ",
        "  KMMFFFFFFFFMMK ",
        "   KFFFFFFFFFFK  ",
        "   KFKKKKKKKKFK  ",
        "   KK        KK  ",
        "                ",
        "                ",
      ],
      walk1: [
        "   KK      KK   ",
        "  KFFK    KFFK  ",
        " KFFFFFFKKFFFFFFK",
        " KFFFFFFFFFFFFFFK",
        " KFFBFFFFFFFFBFFK",
        "  KFFFFFYFFFFFFK ",
        "  KWWWWWWWWWWWWK ",
        "   KKWWWWWWWWKK  ",
        "  KMMFFFFFFFFMMK ",
        "  KMMFFFFFFFFMMK ",
        "   KFFFFFFFFFFK  ",
        "   KFKK    KFKK  ",
        "   KK        KK  ",
        "                ",
        "                ",
        "                ",
      ],
      walk2: [
        "   KK      KK   ",
        "  KFFK    KFFK  ",
        " KFFFFFFKKFFFFFFK",
        " KFFFFFFFFFFFFFFK",
        " KFFBFFFFFFFFBFFK",
        "  KFFFFFYFFFFFFK ",
        "  KWWWWWWWWWWWWK ",
        "   KKWWWWWWWWKK  ",
        "  KMMFFFFFFFFMMK ",
        "  KMMFFFFFFFFMMK ",
        "   KFFFFFFFFFFK  ",
        "   KKFK    KFKK  ",
        "   KK        KK  ",
        "                ",
        "                ",
        "                ",
      ],
      jump: [
        "   KK      KK   ",
        "  KFFK    KFFK  ",
        " KFFFFFFKKFFFFFFK",
        " KFFFFFFFFFFFFFFK",
        " KFFBFFFFFFFFBFFK",
        "  KFFFFFYFFFFFFK ",
        "  KWWWWWWWWWWWWK ",
        "   KKWWWWWWWWKK  ",
        "  KMMFFFFFFFFMMK ",
        "  KKMFFFFFFFFMKK ",
        "    KFFFFFFFFK   ",
        "    KFKKKKKKFK   ",
        "    KK      KK   ",
        "                ",
        "                ",
        "                ",
      ],
      happy: [
        "   KK      KK   ",
        "  KFFK    KFFK  ",
        " KFFFFFFKKFFFFFFK",
        " KFFFFFFFFFFFFFFK",
        " KFF^FFFFFFFF^FFK",
        "  KFFFFFYFFFFFFK ",
        "  KWWWWWWWWWWWWK ",
        "  PKKWWWWWWWWKKP ",
        "  KMMFFFFFFFFMMK ",
        "  KMMFFFFFFFFMMK ",
        "  KMMFFFFFFFFMMK ",
        "   KFFFFFFFFFFK  ",
        "   KFKKKKKKKKFK  ",
        "   KK        KK  ",
        "                ",
        "                ",
      ],
      sleep: [
        "                ",
        "   KK      KK   ",
        "  KFFK    KFFK  ",
        " KFFFFFFKKFFFFFFK",
        " KFF_FFFFFFFF_FFK",
        "  KFFFFFYFFFFFFK ",
        "  KWWWWWWWWWWWWK ",
        "  KKMMFFFFFFFFMKK",
        "    KKKKKKKKKK   ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
      ],
      sit: [
        "   KK      KK   ",
        "  KFFK    KFFK  ",
        " KFFFFFFKKFFFFFFK",
        " KFFFFFFFFFFFFFFK",
        " KFFBFFFFFFFFBFFK",
        "  KFFFFFYFFFFFFK ",
        "  KWWWWWWWWWWWWK ",
        "  KMMFFFFFFFFMMK ",
        "  KMMFFFFFFFFMMK ",
        "   KKFFFFFFFFKK  ",
        "     KKKKKKKK    ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
      ],
    },
    quotes: [
      "幻境之火！G2 与 G58 女性健康手表是出海爆款密码！",
      "在 TikTok 上，痛点共鸣往往能带来 300% 的完播爆发！",
      "FOSMET QS40 内置 ChatGPT，AI 对话功能超级吸引眼球！",
      "点击我释放极光符文，为你带来今日爆单好运！",
      "建议搭配视频前 1-3 秒展示核心痛点与产品特写！",
      "九尾狐正在巡视你的文案库，灵感充沛！",
    ],
  },
  dragon: {
    name: "微型霓虹龙 (Draco)",
    emoji: "🐉",
    color: "#10b981",
    palette: {
      " ": "transparent",
      "K": "#0f172a",
      "D": "#10b981",
      "L": "#34d399",
      "Y": "#facc15",
      "R": "#ef4444",
      "C": "#06b6d4",
    },
    frames: {
      idle1: [
        "  KYK      KYK  ",
        "  KYYK    KYYK  ",
        " KDDDDDKKDDDDDK ",
        " KDDDDDDDDDDDDK ",
        " KDLDDDDDDDDLDDK",
        " KDLDDDKKDLDLDDK",
        "  KDDDDDDDDDDDK ",
        " CKKDDYYYYYYDDKC",
        " CKDDDDYYYYDDDKC",
        "  KDDDDDDDDDDDK ",
        "  KDDDDDDDDDDDK ",
        "  KDDDDDDDDDDDK ",
        "   KDDDDDDDDDDK ",
        "   KDKKKKKKKKDK ",
        "   KK        KK ",
        "                ",
      ],
      idle2: [
        "  KYK      KYK  ",
        "  KYYK    KYYK  ",
        " KDDDDDKKDDDDDK ",
        " KDDDDDDDDDDDDK ",
        " KD-DDDDDDDD-DDK",
        " KDLDDDKKDLDLDDK",
        "  KDDDDDDDDDDDK ",
        " CKKDDYYYYYYDDKC",
        " CKDDDDYYYYDDDKC",
        "  KDDDDDDDDDDDK ",
        "  KDDDDDDDDDDDK ",
        "  KDDDDDDDDDDDK ",
        "   KDDDDDDDDDDK ",
        "   KDKKKKKKKKDK ",
        "   KK        KK ",
        "                ",
      ],
      walk1: [
        "  KYK      KYK  ",
        "  KYYK    KYYK  ",
        " KDDDDDKKDDDDDK ",
        " KDDDDDDDDDDDDK ",
        " KDLDDDDDDDDLDDK",
        " KDLDDDKKDLDLDDK",
        "  KDDDDDDDDDDDK ",
        " CKKDDYYYYYYDDKC",
        " CKDDDDYYYYDDDKC",
        "  KDDDDDDDDDDDK ",
        "  KDDDDDDDDDDDK ",
        "   KDDDDDDDDDDK ",
        "   KDKK    KDKK ",
        "   KK        KK ",
        "                ",
        "                ",
      ],
      walk2: [
        "  KYK      KYK  ",
        "  KYYK    KYYK  ",
        " KDDDDDKKDDDDDK ",
        " KDDDDDDDDDDDDK ",
        " KDLDDDDDDDDLDDK",
        " KDLDDDKKDLDLDDK",
        "  KDDDDDDDDDDDK ",
        " CKKDDYYYYYYDDKC",
        " CKDDDDYYYYDDDKC",
        "  KDDDDDDDDDDDK ",
        "  KDDDDDDDDDDDK ",
        "   KDDDDDDDDDDK ",
        "   KKDK    KDKK ",
        "   KK        KK ",
        "                ",
        "                ",
      ],
      jump: [
        "  KYK      KYK  ",
        "  KYYK    KYYK  ",
        " KDDDDDKKDDDDDK ",
        " KDDDDDDDDDDDDK ",
        " KDLDDDDDDDDLDDK",
        " KDLDDDKKDLDLDDK",
        "  KDDDDDDDDDDDK ",
        "CCKKDDYYYYYYDDKC",
        " CKKDDDDYYYDDDKC",
        "  KKDDDDDDDDDKK ",
        "    KDDDDDDDDDK ",
        "    KDKKKKKKKDK ",
        "    KK       KK ",
        "                ",
        "                ",
        "                ",
      ],
      happy: [
        "  KYK      KYK  ",
        "  KYYK    KYYK  ",
        " KDDDDDKKDDDDDK ",
        " KDDDDDDDDDDDDK ",
        " KD^DDDDDDDD^DDK",
        " KDLDDDKKDLDLDDK",
        "  KDDDDDDDDDDDK ",
        " CKKDDYYYYYYDDKC",
        " CKDDDDYYYYDDDKC",
        "  KDDDDDDDDDDDK ",
        "  KDDDDDDDDDDDK ",
        "  KDDDDDDDDDDDK ",
        "   KDDDDDDDDDDK ",
        "   KDKKKKKKKKDK ",
        "   KK        KK ",
        "                ",
      ],
      sleep: [
        "                ",
        "  KYK      KYK  ",
        "  KYYK    KYYK  ",
        " KDDDDDKKDDDDDK ",
        " KD_DDDDDDDD_DDK",
        " KDLDDDKKDLDLDDK",
        "  KDDDDDDDDDDDK ",
        " CKKDDYYYYYYDDKC",
        "  KKDDDDDDDDDKK ",
        "    KKKKKKKK    ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
      ],
      sit: [
        "  KYK      KYK  ",
        "  KYYK    KYYK  ",
        " KDDDDDKKDDDDDK ",
        " KDDDDDDDDDDDDK ",
        " KDLDDDDDDDDLDDK",
        "  KDDDDDDDDDDDK ",
        " CKKDDYYYYYYDDKC",
        " CKDDDDYYYYDDDKC",
        "  KKDDDDDDDDDKK ",
        "    KKKKKKKK    ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
      ],
    },
    quotes: [
      "吼！T20 独立 GPS 轨迹记录加上智能排水，户外霸主！",
      "吐出一颗龙炎火球！祝你的 TikTok 视频冲上百万播放！",
      "E09 智能眼镜具备索尼 800 万像素 POV 视角，第一视角神作！",
      "点击我，小龙会展开青玉霓虹翅膀为你施展腾云特效！",
      "矩阵文案已覆盖 50 种高点击变体，支持一键批量导出 CSV！",
      "嗷呜！翱翔在整个工作台，为你守护爆单流量！",
    ],
  },
  bunny: {
    name: "星际量子兔 (Usagi)",
    emoji: "🐰",
    color: "#a855f7",
    palette: {
      " ": "transparent",
      "K": "#0f172a",
      "W": "#f3e8ff",
      "P": "#f472b6",
      "U": "#c084fc",
      "C": "#38bdf8",
    },
    frames: {
      idle1: [
        "  KK      KK    ",
        " KPPK    KPPK   ",
        " KPPK    KPPK   ",
        " KWWK    KWWK   ",
        " KWWKKKKKKWWK   ",
        " KWWWWWWWWWWK   ",
        " KWCWWWWWCWWK   ",
        " KWWWWPWWWWWK   ",
        "  KWWWWWWWWK    ",
        " KWWWWWWWWWWK   ",
        " KWWWWWWWWWWK   ",
        " KWWWWWWWWWWK   ",
        "  KWWWWWWWWK    ",
        "  KWKKKKKKWK    ",
        "  KK      KK    ",
        "                ",
      ],
      idle2: [
        "  KK      KK    ",
        " KPPK    KPPK   ",
        " KPPK    KPPK   ",
        " KWWK    KWWK   ",
        " KWWKKKKKKWWK   ",
        " KWWWWWWWWWWK   ",
        " KW-WWWWW-WWK   ",
        " KWWWWPWWWWWK   ",
        "  KWWWWWWWWK    ",
        " KWWWWWWWWWWK   ",
        " KWWWWWWWWWWK   ",
        " KWWWWWWWWWWK   ",
        "  KWWWWWWWWK    ",
        "  KWKKKKKKWK    ",
        "  KK      KK    ",
        "                ",
      ],
      walk1: [
        "  KK      KK    ",
        " KPPK    KPPK   ",
        " KPPK    KPPK   ",
        " KWWK    KWWK   ",
        " KWWKKKKKKWWK   ",
        " KWWWWWWWWWWK   ",
        " KWCWWWWWCWWK   ",
        " KWWWWPWWWWWK   ",
        "  KWWWWWWWWK    ",
        " KWWWWWWWWWWK   ",
        " KWWWWWWWWWWK   ",
        "  KWWWWWWWWK    ",
        "  KWKK    KWKK  ",
        "  KK        KK  ",
        "                ",
        "                ",
      ],
      walk2: [
        "  KK      KK    ",
        " KPPK    KPPK   ",
        " KPPK    KPPK   ",
        " KWWK    KWWK   ",
        " KWWKKKKKKWWK   ",
        " KWWWWWWWWWWK   ",
        " KWCWWWWWCWWK   ",
        " KWWWWPWWWWWK   ",
        "  KWWWWWWWWK    ",
        " KWWWWWWWWWWK   ",
        " KWWWWWWWWWWK   ",
        "  KWWWWWWWWK    ",
        "  KKWK    KWKK  ",
        "  KK        KK  ",
        "                ",
        "                ",
      ],
      jump: [
        "  KK      KK    ",
        " KPPK    KPPK   ",
        " KPPK    KPPK   ",
        " KWWK    KWWK   ",
        " KWWKKKKKKWWK   ",
        " KWWWWWWWWWWK   ",
        " KWCWWWWWCWWK   ",
        " KWWWWPWWWWWK   ",
        "  KWWWWWWWWK    ",
        " KKWWWWWWWWKK   ",
        "   KWWWWWWK     ",
        "   KWKKKKWK     ",
        "   KK    KK     ",
        "                ",
        "                ",
        "                ",
      ],
      happy: [
        "  KK      KK    ",
        " KPPK    KPPK   ",
        " KPPK    KPPK   ",
        " KWWK    KWWK   ",
        " KWWKKKKKKWWK   ",
        " KWWWWWWWWWWK   ",
        " KW^WWWWW^WWK   ",
        " KWWWWPWWWWWK   ",
        " PKWWWWWWWWKP   ",
        " KWWWWWWWWWWK   ",
        " KWWWWWWWWWWK   ",
        " KWWWWWWWWWWK   ",
        "  KWWWWWWWWK    ",
        "  KWKKKKKKWK    ",
        "  KK      KK    ",
        "                ",
      ],
      sleep: [
        "                ",
        "  KK      KK    ",
        " KPPK    KPPK   ",
        " KWWK    KWWK   ",
        " KWWKKKKKKWWK   ",
        " KW_WWWWW_WWK   ",
        " KWWWWPWWWWWK   ",
        "  KKWWWWWWKK    ",
        "   KKKKKKKK     ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
      ],
      sit: [
        "  KK      KK    ",
        " KPPK    KPPK   ",
        " KPPK    KPPK   ",
        " KWWK    KWWK   ",
        " KWWKKKKKKWWK   ",
        " KWWWWWWWWWWK   ",
        " KWCWWWWWCWWK   ",
        " KWWWWPWWWWWK   ",
        "  KWWWWWWWWK    ",
        "  KWWWWWWWWK    ",
        "   KKWWWWKK     ",
        "    KKKKKK      ",
        "                ",
        "                ",
        "                ",
        "                ",
      ],
    },
    quotes: [
      "蹦蹦跳跳！E05 电致变色智能眼镜 4 档调光，科技感拉满！",
      "FOSMET FOS10 仅 14.9g 极轻机身，女性手腕零负担！",
      "E12 智能眼镜配备 16mm 大喇叭和语音 AI，通勤必备！",
      "点击小兔，会为你散落胡萝卜星光哦！",
      "记得常去【TikTok 真机预览】检查文案前三行视觉效果！",
      "胡萝卜补充完毕！可以带着我自由蹦跶啦！",
    ],
  },
};

export const PixelPetCompanion: React.FC<PixelPetCompanionProps> = ({
  currentProductId,
  onCheer,
  lastAction,
}) => {
  const [selectedPet, setSelectedPet] = useState<PixelPetType>("cat");
  const [behaviorMode, setBehaviorMode] = useState<PetBehaviorMode>("wander");
  const [selectedAccessory, setSelectedAccessory] = useState<PetAccessory>("none");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSnackOpen, setIsSnackOpen] = useState<boolean>(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState<boolean>(false);
  const [activeToyBeacon, setActiveToyBeacon] = useState<{ x: number; y: number; type: "laser" | "gravity" } | null>(null);
  const [happiness, setHappiness] = useState<number>(100);
  const [showStarRing, setShowStarRing] = useState<boolean>(false);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);

  const [currentFrame, setCurrentFrame] = useState<"idle1" | "idle2" | "walk1" | "walk2" | "jump" | "happy" | "sleep" | "sit">("idle1");
  const [speechText, setSpeechText] = useState<string>("");
  const [speechVisible, setSpeechVisible] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // Authoritative physical coordinate ref for 60fps lag-free DOM transforms
  const posRef = useRef<{ x: number; y: number }>({
    x: typeof window !== "undefined" ? Math.max(30, window.innerWidth - 180) : 800,
    y: typeof window !== "undefined" ? Math.max(80, window.innerHeight - 170) : 600,
  });
  const velRef = useRef<{ vx: number; vy: number }>({ vx: 1.1, vy: 0.2 });
  const isDraggingRef = useRef<boolean>(false);
  const isHoveredRef = useRef<boolean>(false);
  const behaviorModeRef = useRef<PetBehaviorMode>(behaviorMode);
  behaviorModeRef.current = behaviorMode;

  const mouseCoordRef = useRef<{ x: number; y: number }>({ x: 500, y: 300 });

  const isMenuOpenRef = useRef<boolean>(false);
  isMenuOpenRef.current = isSnackOpen || isAccessoryOpen || isMenuOpen;

  const activeToyRef = useRef(activeToyBeacon);
  activeToyRef.current = activeToyBeacon;

  const toyOrbitAngleRef = useRef<number>(0);
  const toyOrbitTimerRef = useRef<number>(0);

  const [isFacingLeft, setIsFacingLeft] = useState<boolean>(false);
  const [clickSparks, setClickSparks] = useState<{ id: string; x: number; y: number; text: string; color: string }[]>([]);
  const [footprints, setFootprints] = useState<{ id: string; x: number; y: number; color: string }[]>([]);
  const [zzzList, setZzzList] = useState<{ id: string; x: number; y: number }[]>([]);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const speechTimeoutRef = useRef<any>(null);
  const petBoxRef = useRef<HTMLDivElement | null>(null);

  const petConfig = PIXEL_SPRITES[selectedPet];
  const currentProd = PRODUCTS_CONFIG[currentProductId] || PRODUCTS_CONFIG.rec10;

  const showBubble = useCallback((text: string, durationMs: number = 3200) => {
    setSpeechText(text);
    setSpeechVisible(true);
    if (speechTimeoutRef.current) clearTimeout(speechTimeoutRef.current);
    speechTimeoutRef.current = setTimeout(() => {
      setSpeechVisible(false);
    }, durationMs);
  }, []);

  const cancelFollow = useCallback((nextMode: PetBehaviorMode = "stay", customMsg?: string) => {
    setBehaviorMode(nextMode);
    behaviorModeRef.current = nextMode;
    showBubble(customMsg || (nextMode === "stay" ? "🛑 已退出随行，切换为驻留模式！" : "🚀 已退出随行，开启自由漫步！"), 2500);
  }, [showBubble]);

  // Global Esc key cancels follow mode immediately
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && behaviorModeRef.current === "follow") {
        cancelFollow("stay", "🐾 已按 Esc 退出随行模式！");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [cancelFollow]);

  // Direct DOM position updater for ultra-smooth 60fps movement without React re-render overhead
  const updateDomPosition = useCallback((x: number, y: number) => {
    if (petBoxRef.current) {
      petBoxRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
  }, []);

  // Track global mouse position for follow mode and petting
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      mouseCoordRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleGlobalMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, []);

  // Window bounds check and initial setup
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = () => {
      const minX = 20;
      const maxX = Math.max(minX, window.innerWidth - 85);
      const minY = 40;
      const maxY = Math.max(minY, window.innerHeight - 90);
      posRef.current.x = Math.max(minX, Math.min(maxX, posRef.current.x));
      posRef.current.y = Math.max(minY, Math.min(maxY, posRef.current.y));
      updateDomPosition(posRef.current.x, posRef.current.y);
    };
    // Sync initial mount position
    updateDomPosition(posRef.current.x, posRef.current.y);
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [updateDomPosition]);

  // Render current frame to 16x16 canvas scaled up crisp with optional accessories
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, 64, 64);

    const frameMatrix = petConfig.frames[currentFrame] || petConfig.frames.idle1;
    const scale = 4; // 16x16 -> 64x64

    // 1. Draw Pet Sprite
    for (let r = 0; r < 16; r++) {
      const row = frameMatrix[r] || "";
      for (let c = 0; c < 16; c++) {
        const char = row[c] || " ";
        const color = petConfig.palette[char];
        if (color && color !== "transparent") {
          ctx.fillStyle = color;
          ctx.fillRect(c * scale, r * scale, scale, scale);
        }
      }
    }

    // 2. Draw Accessory Overlay (if applicable and not sleeping)
    if (selectedAccessory !== "none" && currentFrame !== "sleep") {
      const accData = ACCESSORY_SPRITES[selectedAccessory];
      if (accData && accData.rows) {
        accData.rows.forEach(({ r, c, color }) => {
          ctx.fillStyle = color;
          ctx.fillRect(c * scale, r * scale, scale, scale);
        });
      }
    }
  }, [selectedPet, currentFrame, petConfig, selectedAccessory]);

  // Smooth 60FPS Physics Engine (RequestAnimationFrame) with zero state lag
  useEffect(() => {
    let animFrameId: number;
    let lastTime = performance.now();
    let footprintTimer = 0;
    let floatTime = 0;

    const loop = (currentTime: number) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.08);
      lastTime = currentTime;
      floatTime += dt;

      if (!isDraggingRef.current) {
        const mode = behaviorModeRef.current;
        const toy = activeToyRef.current;
        const pos = posRef.current;
        const vel = velRef.current;
        const isMenuOpen = isMenuOpenRef.current;

        const minX = 20;
        const maxX = typeof window !== "undefined" ? Math.max(minX, window.innerWidth - 85) : 800;
        const minY = 40;
        const maxY = typeof window !== "undefined" ? Math.max(minY, window.innerHeight - 90) : 600;

        if (toy) {
          if (toy.type === "gravity") {
            // Gravitational Orbital Capture physics around toy
            toyOrbitTimerRef.current += dt;
            toyOrbitAngleRef.current += dt * 3.8; // Radians per sec

            const orbitRadius = Math.max(22, 60 - toyOrbitTimerRef.current * 18);
            const targetX = toy.x - 32 + Math.cos(toyOrbitAngleRef.current) * orbitRadius;
            const targetY = toy.y - 32 + Math.sin(toyOrbitAngleRef.current) * orbitRadius * 0.45;

            const dx = targetX - pos.x;
            const dy = targetY - pos.y;
            pos.x += dx * 0.12;
            pos.y += dy * 0.12;

            if (dx < -3) setIsFacingLeft(true);
            else if (dx > 3) setIsFacingLeft(false);

            if (toyOrbitTimerRef.current > 2.2 || orbitRadius <= 24) {
              setActiveToyBeacon(null);
              activeToyRef.current = null;
              toyOrbitTimerRef.current = 0;
              triggerJump();
              setHappiness((h) => Math.min(100, h + 25));
              const sparkId = getUniquePetId("spark");
              setClickSparks((prev) => [
                ...prev.slice(-3),
                { id: sparkId, x: 20, y: 10, text: "🪐 引力小行星捕获成功！", color: "#c084fc" },
              ]);
              setTimeout(() => {
                setClickSparks((prev) => prev.filter((s) => s.id !== sparkId));
              }, 1200);
              showBubble("🌟 哇！完成了一场绝妙的星际轨道引力弹弓！", 2800);
            }
          } else {
            // Sprint towards active laser beacon
            const targetX = toy.x - 32;
            const targetY = toy.y - 32;
            const dx = targetX - pos.x;
            const dy = targetY - pos.y;
            const dist = Math.hypot(dx, dy);

            if (dist < 26) {
              // Reached toy beacon!
              setActiveToyBeacon(null);
              activeToyRef.current = null;
              triggerJump();
              setHappiness((h) => Math.min(100, h + 20));
              const sparkId = getUniquePetId("spark");
              setClickSparks((prev) => [
                ...prev.slice(-3),
                { id: sparkId, x: 20, y: 10, text: "🎾 抓到了！好开心！", color: "#facc15" },
              ]);
              setTimeout(() => {
                setClickSparks((prev) => prev.filter((s) => s.id !== sparkId));
              }, 1200);
              showBubble("🐾 喵哈！成功扑抓到激光球啦！", 2800);
            } else {
              const speed = 210; // px/sec
              const step = Math.min(dist, speed * dt);
              pos.x += (dx / dist) * step;
              pos.y += (dy / dist) * step;
              if (dx < -4) setIsFacingLeft(true);
              else if (dx > 4) setIsFacingLeft(false);
            }
          }
        } else if (mode === "follow" && !isMenuOpen) {
          // Smooth cosmic satellite follow mode (floats comfortably beside cursor)
          // If user is hovering over the pet or attempting to click it, FREEZE in place
          if (!isHoveredRef.current) {
            const targetX = Math.max(minX, Math.min(maxX, mouseCoordRef.current.x + 48));
            const targetY = Math.max(minY, Math.min(maxY, mouseCoordRef.current.y + 40 + Math.sin(floatTime * 3) * 6));
            const dx = targetX - pos.x;
            const dy = targetY - pos.y;
            const dist = Math.hypot(dx, dy);

            // Direct distance between mouse pointer and pet center
            const cursorDist = Math.hypot(mouseCoordRef.current.x - (pos.x + 32), mouseCoordRef.current.y - (pos.y + 32));

            // Only move if not in immediate click range
            if (dist > 15 && cursorDist > 65) {
              pos.x += dx * 0.055;
              pos.y += dy * 0.055;
              if (dx < -6) setIsFacingLeft(true);
              else if (dx > 6) setIsFacingLeft(false);
            }
          }
        } else if (mode === "wander" && !isMenuOpen) {
          // Continuous smooth wandering with organic cosmic sinusoidal floating
          pos.x += vel.vx * dt * 55;
          pos.y += vel.vy * dt * 55 + Math.sin(floatTime * 2.8) * 0.35;

          // Boundary bounce with instant velocity reflection (prevents wall sticking/teleporting)
          if (pos.x >= maxX) {
            pos.x = maxX;
            vel.vx = -Math.abs(vel.vx || 1.0);
            setIsFacingLeft(true);
          } else if (pos.x <= minX) {
            pos.x = minX;
            vel.vx = Math.abs(vel.vx || 1.0);
            setIsFacingLeft(false);
          }

          if (pos.y >= maxY) {
            pos.y = maxY;
            vel.vy = -Math.abs(vel.vy || 0.4);
          } else if (pos.y <= minY) {
            pos.y = minY;
            vel.vy = Math.abs(vel.vy || 0.4);
          }

          // Subtle cosmic footprint trail every few seconds
          footprintTimer += dt;
          if (footprintTimer > 0.75 && (Math.abs(vel.vx) > 0.3 || Math.abs(vel.vy) > 0.3)) {
            footprintTimer = 0;
            if (Math.random() < 0.3) {
              const footprintId = getUniquePetId("fp");
              const spawnX = pos.x + 24;
              const spawnY = pos.y + 54;
              setFootprints((fp) => [
                ...fp.slice(-5),
                { id: footprintId, x: spawnX, y: spawnY, color: petConfig.color },
              ]);
              setTimeout(() => {
                setFootprints((fp) => fp.filter((f) => f.id !== footprintId));
              }, 1200);
            }
          }
        }

        // Apply direct hardware-accelerated transform
        updateDomPosition(pos.x, pos.y);
      }

      animFrameId = requestAnimationFrame(loop);
    };

    animFrameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animFrameId);
  }, [petConfig.color, updateDomPosition]);

  // Frame cycle state machine (discrete animation ticks)
  useEffect(() => {
    let animInterval: any;
    let tick = 0;

    animInterval = setInterval(() => {
      tick++;

      if (isDraggingRef.current) {
        setCurrentFrame("jump");
        return;
      }

      if (currentFrame === "jump" || currentFrame === "happy") {
        return; // wait for jump/happy action timeout
      }

      const mode = behaviorModeRef.current;

      if (mode === "sleep") {
        setCurrentFrame("sleep");
        if (tick % 6 === 0) {
          const zzzId = getUniquePetId("zzz");
          const curPos = posRef.current;
          setZzzList((prev) => [...prev.slice(-2), { id: zzzId, x: curPos.x + 28, y: curPos.y + 8 }]);
          setTimeout(() => {
            setZzzList((prev) => prev.filter((z) => z.id !== zzzId));
          }, 1800);
        }
        return;
      }

      if (mode === "stay" || isMenuOpenRef.current) {
        if (tick % 8 === 0) {
          setCurrentFrame("idle2"); // Blink
        } else if (tick % 15 === 0) {
          setCurrentFrame("sit");
        } else {
          setCurrentFrame("idle1");
        }
        return;
      }

      if (mode === "wander") {
        const vel = velRef.current;
        if (Math.abs(vel.vx) > 0.2 || Math.abs(vel.vy) > 0.2) {
          setCurrentFrame(tick % 2 === 0 ? "walk1" : "walk2");
        } else {
          setCurrentFrame(tick % 4 === 0 ? "idle2" : "idle1");
        }
      }
    }, 240);

    return () => clearInterval(animInterval);
  }, [currentFrame]);

  // Periodic Autonomous Pet AI (Change direction, pause to rest, explore)
  useEffect(() => {
    if (behaviorMode !== "wander") return;

    const routine = () => {
      if (isDraggingRef.current || activeToyRef.current || isMenuOpenRef.current) return;
      const roll = Math.random();
      if (roll < 0.35) {
        // Change speed and direction smoothly
        const speedX = (Math.random() * 1.2 + 0.6) * (Math.random() > 0.5 ? 1 : -1);
        const speedY = (Math.random() * 0.6 - 0.3);
        velRef.current = { vx: speedX, vy: speedY };
        setIsFacingLeft(speedX < 0);
      } else if (roll < 0.55) {
        // Pause and look around
        velRef.current = { vx: 0, vy: 0 };
        setCurrentFrame("idle1");
        setTimeout(() => {
          if (behaviorModeRef.current === "wander" && !isDraggingRef.current && !activeToyRef.current && !isMenuOpenRef.current) {
            const nextVx = (Math.random() * 1.2 + 0.6) * (isFacingLeft ? -1 : 1);
            velRef.current = { vx: nextVx, vy: Math.random() * 0.4 - 0.2 };
          }
        }, 2200);
      } else if (roll < 0.7) {
        triggerJump();
      } else if (roll < 0.85) {
        const quote = petConfig.quotes[Math.floor(Math.random() * petConfig.quotes.length)];
        showBubble(quote, 3200);
      }
    };

    const interval = setInterval(routine, 5000);
    return () => clearInterval(interval);
  }, [behaviorMode, isFacingLeft, petConfig]);

  // Handle external app actions (generating, copying, favoriting)
  useEffect(() => {
    if (!lastAction) return;

    if (lastAction.type === "generate") {
      triggerJump();
      showBubble(`🎉 哇！已为【${currentProd.model}】生成 50 组精选爆款文案！`, 4000);
    } else if (lastAction.type === "copy") {
      triggerHappy();
      showBubble("✨ 完整钩子与 5 大营销标签已复制！祝视频大爆！", 3500);
    } else if (lastAction.type === "favorite") {
      triggerJump();
      showBubble("💖 已成功收录到精选收藏库！随时可在抽屉中查看", 3500);
    } else if (lastAction.type === "change_product") {
      showBubble(`🔄 已切换至【${currentProd.name}】(${currentProd.model})！`, 3000);
    }
  }, [lastAction, currentProd, showBubble]);

  const triggerJump = () => {
    setCurrentFrame("jump");
    setTimeout(() => {
      if (!isDraggingRef.current) {
        const mode = behaviorModeRef.current;
        setCurrentFrame(mode === "wander" && !isMenuOpenRef.current ? "walk1" : mode === "sleep" ? "sleep" : "idle1");
      }
    }, 700);
  };

  const triggerHappy = () => {
    setCurrentFrame("happy");
    setTimeout(() => {
      if (!isDraggingRef.current) {
        const mode = behaviorModeRef.current;
        setCurrentFrame(mode === "wander" && !isMenuOpenRef.current ? "walk1" : mode === "sleep" ? "sleep" : "idle1");
      }
    }, 1200);
  };

  const dragInfoRef = useRef<{
    pointerId: number | null;
    startPointerX: number;
    startPointerY: number;
    startPetX: number;
    startPetY: number;
    isMoved: boolean;
  }>({
    pointerId: null,
    startPointerX: 0,
    startPointerY: 0,
    startPetX: 0,
    startPetY: 0,
    isMoved: false,
  });

  // Pet interactive click (Petting & Mode Action)
  const handlePetClick = (e: React.MouseEvent | React.PointerEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // If in follow mode, clicking the pet directly exits follow mode to stay
    if (behaviorModeRef.current === "follow") {
      cancelFollow("stay", "🛑 已退出随行，切换为静止驻留！");
      const sparkId = getUniquePetId("spark");
      setClickSparks((prev) => [...prev.slice(-3), { id: sparkId, x, y, text: "🛑 退出随行", color: "#38bdf8" }]);
      setTimeout(() => {
        setClickSparks((prev) => prev.filter((s) => s.id !== sparkId));
      }, 900);
      return;
    }

    // Spawn heart/sparkle
    const sparkId = getUniquePetId("spark");
    const icons = ["💖 抚摸", "✨ +100", "🔥 爆款！", "⭐ 9.8分", "⚡ FOSMET", "🐾 咕噜"];
    const text = icons[Math.floor(Math.random() * icons.length)];
    setClickSparks((prev) => [...prev.slice(-3), { id: sparkId, x, y, text, color: petConfig.color }]);

    setTimeout(() => {
      setClickSparks((prev) => prev.filter((s) => s.id !== sparkId));
    }, 900);

    triggerHappy();

    const randomQuote = petConfig.quotes[Math.floor(Math.random() * petConfig.quotes.length)];
    showBubble(randomQuote, 3500);

    if (onCheer) onCheer();
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return; // Only primary mouse button or touch
    dragInfoRef.current = {
      pointerId: e.pointerId,
      startPointerX: e.clientX,
      startPointerY: e.clientY,
      startPetX: posRef.current.x,
      startPetY: posRef.current.y,
      isMoved: false,
    };
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragInfoRef.current;
    if (drag.pointerId !== e.pointerId) return;

    const dx = e.clientX - drag.startPointerX;
    const dy = e.clientY - drag.startPointerY;

    if (!drag.isMoved && Math.hypot(dx, dy) > 4) {
      drag.isMoved = true;
      isDraggingRef.current = true;
      setIsDragging(true);
      setCurrentFrame("jump");
      showBubble("🐾 呀！被主人提起来啦~", 2000);
    }

    if (drag.isMoved) {
      const minX = 20;
      const maxX = typeof window !== "undefined" ? Math.max(minX, window.innerWidth - 85) : 800;
      const minY = 30;
      const maxY = typeof window !== "undefined" ? Math.max(minY, window.innerHeight - 90) : 600;

      const nextX = Math.max(minX, Math.min(maxX, drag.startPetX + dx));
      const nextY = Math.max(minY, Math.min(maxY, drag.startPetY + dy));

      if (dx < -3) setIsFacingLeft(true);
      else if (dx > 3) setIsFacingLeft(false);

      posRef.current.x = nextX;
      posRef.current.y = nextY;
      updateDomPosition(nextX, nextY);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragInfoRef.current;
    if (drag.pointerId !== e.pointerId) return;

    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}

    const wasMoved = drag.isMoved;
    dragInfoRef.current = {
      pointerId: null,
      startPointerX: 0,
      startPointerY: 0,
      startPetX: 0,
      startPetY: 0,
      isMoved: false,
    };

    if (wasMoved) {
      isDraggingRef.current = false;
      setIsDragging(false);
      triggerHappy();
      if (behaviorModeRef.current === "follow") {
        cancelFollow("stay", "🐾 已将桌宠放置在此处，退出随行并切换为驻留！");
      } else {
        const nextVx = (Math.random() * 1.0 + 0.6) * (isFacingLeft ? -1 : 1);
        const nextVy = Math.random() * 0.4 - 0.2;
        velRef.current = { vx: nextVx, vy: nextVy };
      }
    } else {
      isDraggingRef.current = false;
      setIsDragging(false);
      handlePetClick(e);
    }
  };

  const handlePointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
    dragInfoRef.current.pointerId = null;
    isDraggingRef.current = false;
    setIsDragging(false);
  };

  const handleFeedSnack = (snackType: "fish" | "bone" | "berry" | "battery" | "candy", e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsSnackOpen(false);
    triggerHappy();
    setHappiness((h) => Math.min(100, h + 25));

    const sparkId = getUniquePetId("spark");
    let snackText = "🐟 +25 好感";
    let message = `🐟 投喂了特级小鱼干！${petConfig.name} 咕噜咕噜吃得超香！`;

    if (snackType === "bone") {
      snackText = "🍖 +30 饱食";
      message = `🍖 能量脆骨头！${petConfig.name} 活力瞬间拉满！`;
    } else if (snackType === "berry") {
      snackText = "🍓 +35 魔法";
      message = `🍓 魔法星莓！${petConfig.name} 浑身散发梦幻星光！`;
    } else if (snackType === "battery") {
      snackText = "⚡ +40 赛博能量";
      message = `⚡ 赛博高能电池！${petConfig.name} 进入超级超频状态！`;
    } else if (snackType === "candy") {
      snackText = "🍬 +50 宇宙甜度";
      message = `🍬 星云跳跳糖！${petConfig.name} 感受到了银河系的美味甜蜜！`;
    }

    setClickSparks((prev) => [
      ...prev.slice(-4),
      { id: sparkId, x: 20, y: -10, text: snackText, color: "#ec4899" },
    ]);
    setTimeout(() => {
      setClickSparks((prev) => prev.filter((s) => s.id !== sparkId));
    }, 1200);

    showBubble(message, 3400);
  };

  const handleThrowToy = (toyType: "laser" | "gravity" = "laser", e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const targetX = Math.floor(Math.random() * (window.innerWidth - 220) + 110);
    const targetY = Math.floor(Math.random() * (window.innerHeight - 220) + 110);
    setActiveToyBeacon({ x: targetX, y: targetY, type: toyType });
    triggerJump();
    if (toyType === "gravity") {
      showBubble("🪐 部署了引力微行星！进入星际公转引力轨道——！", 3000);
    } else {
      showBubble("🎾 发现了星光激光球！冲刺扑抓中——！", 2800);
    }
  };

  const handleCelestialSpin = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSpinning) return;
    setIsSpinning(true);
    triggerJump();
    const sparkId = getUniquePetId("spark");
    setClickSparks((prev) => [
      ...prev.slice(-4),
      { id: sparkId, x: 20, y: -20, text: "💫 360° 星际空翻！", color: "#38bdf8" },
    ]);
    setTimeout(() => {
      setClickSparks((prev) => prev.filter((s) => s.id !== sparkId));
    }, 1200);
    showBubble("💫 旋转跳跃！星际零重力翻滚，灵感源源不断！", 3000);
    setTimeout(() => {
      setIsSpinning(false);
    }, 700);
  };

  const handleCosmicOracle = (e: React.MouseEvent) => {
    e.stopPropagation();
    triggerHappy();
    const oracleQuotes = [
      `🔮【星际神谕·流量密码】：${currentProd.model} 黄金前3秒使用反差悬念，完播率暴增！`,
      `✨【星际神谕·爆款指南】：今日财运在拉美西语市场，${currentProd.model} 搭配本地热梗预定 10W+ 赞！`,
      `🌟【星际神谕·转化飙升】：将卖点场景化！${currentProd.name} 突出"真实测评实录"，转化率飙升！`,
      `🪐【星际神谕·极客灵感】：手腕即生产力！${currentProd.model} 搭配 AI 实时答疑，猎奇流量引爆！`,
    ];
    const chosen = oracleQuotes[Math.floor(Math.random() * oracleQuotes.length)];
    const sparkId = getUniquePetId("spark");
    setClickSparks((prev) => [
      ...prev.slice(-4),
      { id: sparkId, x: 20, y: -20, text: "🔮 星际神谕降临！", color: "#c084fc" },
    ]);
    setTimeout(() => {
      setClickSparks((prev) => prev.filter((s) => s.id !== sparkId));
    }, 1200);
    showBubble(chosen, 5200);
  };

  const handleLaserTrick = (e: React.MouseEvent) => {
    e.stopPropagation();
    triggerHappy();
    const sparkId = getUniquePetId("spark");
    setClickSparks((prev) => [
      ...prev.slice(-4),
      { id: sparkId, x: 20, y: -15, text: "⚡ 量子光波扫除瓶颈！", color: "#38bdf8" },
    ]);
    setTimeout(() => {
      setClickSparks((prev) => prev.filter((s) => s.id !== sparkId));
    }, 1200);
    showBubble("⚡ 哔哔！释放量子光波，为您扫除所有创作瓶颈！", 3200);
  };

  const handleGiveTip = (e: React.MouseEvent) => {
    e.stopPropagation();
    triggerHappy();
    let tip = `💡【${currentProd.model} 爆款秘籍】：`;
    if (currentProductId === "rec10") tip += "突出 10m AI 录音翻译降噪，职场白领极度买单！";
    else if (currentProductId === "fos10") tip += "强调 14.9g 极轻与女性健康、100+ DIY 表盘，女生超级喜欢！";
    else if (currentProductId === "g2") tip += "强调生理周期与睡眠自动追踪、高颜值金边表圈！";
    else if (currentProductId === "g58") tip += "主打西语市场，强调 1.27\" HD 与双表带随心换！";
    else if (currentProductId === "kt80") tip += "西语重度硬核！800mAh 电池与侧边强光手电筒是核心点！";
    else if (currentProductId === "e09") tip += "主打索尼 800万 POV 录像与 40g 极轻防蓝光！";
    else if (currentProductId === "e05") tip += "4档电致变色调光与 AI 实时翻译，极客出海爆款！";
    else if (currentProductId === "e12") tip += "免提拍摄与 16mm 开放式大喇叭，骑行通勤神器！";
    else if (currentProductId === "t20") tip += "独立 GNSS 轨迹与声波智能排水，户外达人狂喜！";
    else if (currentProductId === "qs40") tip += "手腕上的 ChatGPT 秒速答疑，科技猎奇流量密码！";
    showBubble(tip, 5000);
  };

  // Determine smart upward or downward opening direction for submenus
  const isNearBottom = posRef.current.y > (typeof window !== "undefined" ? window.innerHeight - 260 : 500);
  const isNearTop = posRef.current.y < 220;

  return (
    <>
      {/* Interactive Laser / Gravity Toy Target Beacon on screen */}
      <AnimatePresence>
        {activeToyBeacon && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            style={{ left: activeToyBeacon.x - 22, top: activeToyBeacon.y - 22 }}
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => setActiveToyBeacon(null)}
            className="fixed z-40 w-11 h-11 rounded-full flex items-center justify-center cursor-pointer pointer-events-auto"
          >
            {/* Pulsing Target Halo */}
            <div
              className={`absolute inset-0 rounded-full animate-ping pointer-events-none ${
                activeToyBeacon.type === "gravity" ? "bg-purple-500/30" : "bg-red-500/30"
              }`}
            />
            <div
              className={`absolute inset-1 rounded-full border-2 animate-spin ${
                activeToyBeacon.type === "gravity"
                  ? "border-purple-400/80 shadow-[0_0_15px_#c084fc]"
                  : "border-red-400/80 shadow-[0_0_15px_#ef4444]"
              }`}
            />
            <div
              className={`w-5 h-5 rounded-full shadow-lg flex items-center justify-center text-xs ${
                activeToyBeacon.type === "gravity"
                  ? "bg-purple-500 shadow-[0_0_10px_#c084fc]"
                  : "bg-red-500 shadow-[0_0_10px_#ef4444]"
              }`}
            >
              {activeToyBeacon.type === "gravity" ? "🪐" : "🎯"}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footprints on desktop floor (Stardust style) */}
      {footprints.map((fp) => (
        <motion.div
          key={fp.id}
          initial={{ opacity: 0.9, scale: 0.5 }}
          animate={{ opacity: 0, scale: 1.4 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="fixed pointer-events-none z-30 w-2.5 h-2.5 rounded-full blur-[0.5px]"
          style={{
            left: fp.x,
            top: fp.y,
            backgroundColor: fp.color,
            boxShadow: `0 0 8px ${fp.color}, 0 0 16px rgba(56,189,248,0.6)`,
          }}
        />
      ))}

      {/* Floating Zzz letters when sleeping */}
      {zzzList.map((z) => (
        <motion.div
          key={z.id}
          initial={{ opacity: 1, y: 0, x: 0, scale: 0.6 }}
          animate={{ opacity: 0, y: -35, x: 15, scale: 1.2 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="fixed pointer-events-none z-50 font-mono font-bold text-xs text-purple-300 drop-shadow-[0_0_6px_#c084fc]"
          style={{ left: z.x, top: z.y }}
        >
          Zzz...
        </motion.div>
      ))}

      {/* Standalone Autonomous Desktop Pet Entity */}
      <div
        ref={petBoxRef}
        onMouseEnter={() => {
          isHoveredRef.current = true;
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false;
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 50,
          willChange: "transform",
        }}
        className="touch-none select-none flex flex-col items-center pointer-events-auto transition-none"
      >
        {/* Dedicated Instant Exit Follow Badge when in Follow Mode */}
        <AnimatePresence>
          {behaviorMode === "follow" && (
            <motion.button
              initial={{ opacity: 0, y: -6, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                cancelFollow("stay");
              }}
              className="mb-1.5 px-3 py-0.5 rounded-full bg-cyan-500 hover:bg-rose-500 text-white font-mono text-[11px] font-semibold shadow-[0_0_15px_rgba(6,182,212,0.9)] border border-white/60 cursor-pointer whitespace-nowrap z-50 flex items-center gap-1.5 transition-all active:scale-95 group animate-bounce"
              style={{ animationDuration: "2s" }}
              title="点击立刻取消随行模式"
            >
              <span className="text-xs">🛰️</span>
              <span className="group-hover:hidden">随行中 · 点击取消</span>
              <span className="hidden group-hover:inline font-bold">✕ 退出随行</span>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Floating Speech Bubble Above or Below Pet */}
        <AnimatePresence>
          {speechVisible && (
            <motion.div
              initial={{ opacity: 0, y: isNearTop ? -10 : 10, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: isNearTop ? -5 : 5, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 420, damping: 26 }}
              onPointerDown={(e) => e.stopPropagation()}
              className={`absolute ${
                isNearTop ? "top-full mt-3" : "bottom-full mb-3"
              } left-1/2 -translate-x-1/2 max-w-[250px] sm:max-w-[280px] p-2.5 rounded-2xl bento-glass-tile border border-white/30 shadow-[0_12px_35px_rgba(0,0,0,0.65)] backdrop-blur-xl z-50 text-xs text-white/95 pointer-events-auto`}
            >
              <div className="flex items-start justify-between gap-1.5 mb-1">
                <span className="font-bold flex items-center gap-1 font-mono text-[10px]" style={{ color: petConfig.color }}>
                  <span>{petConfig.emoji}</span>
                  <span>{petConfig.name}</span>
                </span>
                <button
                  type="button"
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSpeechVisible(false);
                  }}
                  className="text-white/40 hover:text-white/80 p-0.5 rounded cursor-pointer"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
              <p className="leading-snug text-white/90 text-[11px] font-sans break-words">{speechText}</p>
              {/* Pointing triangle */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#0e121e] ${
                  isNearTop ? "-top-1.5 border-l border-t border-white/20" : "-bottom-1.5 border-r border-b border-white/20"
                }`}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Sparks on Click */}
        {clickSparks.map((spark) => (
          <motion.span
            key={spark.id}
            initial={{ opacity: 1, y: 0, scale: 0.8 }}
            animate={{ opacity: 0, y: -45, scale: 1.3 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="absolute -top-6 font-mono font-bold text-xs pointer-events-none drop-shadow-[0_0_8px_currentColor] z-50 whitespace-nowrap"
            style={{
              left: spark.x,
              color: spark.color,
            }}
          >
            {spark.text}
          </motion.span>
        ))}

        {/* Physical Desktop Pet Body with Ground Shadow */}
        <div className="relative group flex flex-col items-center">
          {/* Subtle Ground Soft Shadow */}
          <div
            className="w-12 h-3 rounded-full bg-black/60 blur-[3px] transition-all"
            style={{
              transform: isDragging ? "scale(0.6) translateY(24px)" : "scale(1)",
              opacity: isDragging ? 0.3 : 0.7,
            }}
          />

          {/* Glowing Aura Capsule */}
          <div
            className="absolute -inset-2 rounded-full opacity-40 blur-md pointer-events-none transition-colors duration-500"
            style={{
              background: `radial-gradient(circle, ${petConfig.color} 0%, transparent 70%)`,
            }}
          />

          {/* Interactive Pixel Pet Canvas Character with Pointer Capture Dragging */}
          <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            className={`relative p-0 select-none ${
              isDragging
                ? "cursor-grabbing scale-115 drop-shadow-[0_12px_20px_rgba(0,0,0,0.7)]"
                : "cursor-grab hover:scale-110 active:scale-95 drop-shadow-[0_6px_12px_rgba(0,0,0,0.45)]"
            } ${isSpinning ? "animate-spin" : "transition-transform duration-200"}`}
            style={isSpinning ? { animationDuration: "0.65s" } : undefined}
            title={behaviorMode === "follow" ? "点击桌宠可立即退出随行" : "点击抚摸 / 拖动桌宠到屏幕任意位置"}
          >
            <canvas
              ref={canvasRef}
              width={64}
              height={64}
              className={`w-16 h-16 sm:w-18 sm:h-18 pointer-events-none transition-transform duration-150 ${
                isFacingLeft ? "-scale-x-100" : "scale-x-100"
              }`}
              style={{ imageRendering: "pixelated" }}
            />
          </div>

          {/* Mini Desktop Pet Floating Quick-Actions Ring (Hover / Click Toggle) */}
          <div
            onPointerDown={(e) => e.stopPropagation()}
            className="mt-1.5 flex items-center gap-1 bg-black/85 backdrop-blur-xl px-2.5 py-1 rounded-full border border-white/20 shadow-[0_8px_20px_rgba(0,0,0,0.6)] scale-90 hover:scale-100 transition-all opacity-80 hover:opacity-100 group-hover:opacity-100 z-50"
          >
            {/* Feeding snack button */}
            <button
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                setIsSnackOpen(!isSnackOpen);
                setIsAccessoryOpen(false);
                setIsMenuOpen(false);
              }}
              className="p-1 text-xs hover:bg-white/20 rounded-full transition-all cursor-pointer hover:scale-115 active:scale-95"
              title="投喂美味零食"
            >
              🍖
            </button>

            {/* Throw Toy Target button (Laser / Gravity toggler) */}
            <button
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => handleThrowToy(Math.random() > 0.5 ? "gravity" : "laser", e)}
              className="p-1 text-xs hover:bg-white/20 rounded-full transition-all cursor-pointer hover:scale-115 active:scale-95"
              title="发射激光球 / 引力小行星逗宠"
            >
              🪐
            </button>

            {/* Accessory Costume Room button */}
            <button
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                setIsAccessoryOpen(!isAccessoryOpen);
                setIsSnackOpen(false);
                setIsMenuOpen(false);
              }}
              className="p-1 text-xs hover:bg-white/20 rounded-full transition-all cursor-pointer hover:scale-115 active:scale-95"
              title="像素变装试衣间"
            >
              👑
            </button>

            {/* 360° Celestial Flip Trick */}
            <button
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={handleCelestialSpin}
              className="p-1 text-xs hover:bg-white/20 rounded-full transition-all cursor-pointer hover:scale-115 active:scale-95"
              title="360° 星际空翻特技"
            >
              🔄
            </button>

            {/* Cosmic Divination Oracle */}
            <button
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={handleCosmicOracle}
              className="p-1 text-xs hover:bg-white/20 rounded-full transition-all cursor-pointer hover:scale-115 active:scale-95"
              title="召唤星际神谕文案指南"
            >
              🔮
            </button>

            {/* Product Viral Inspiration Boost */}
            <button
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={handleGiveTip}
              className="p-1 text-xs hover:bg-white/20 rounded-full transition-all cursor-pointer hover:scale-115 active:scale-95"
              title="获取当前型号爆款秘籍"
            >
              💡
            </button>

            {/* Behavior Mode Switcher */}
            <button
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                const nextMode: PetBehaviorMode =
                  behaviorMode === "wander"
                    ? "follow"
                    : behaviorMode === "follow"
                    ? "stay"
                    : behaviorMode === "stay"
                    ? "sleep"
                    : "wander";
                setBehaviorMode(nextMode);
                behaviorModeRef.current = nextMode;
                if (nextMode === "follow") {
                  showBubble("🛰️ 开启伴随随行模式！(悬停或点击宠物可随时退出)", 2800);
                } else if (nextMode === "stay") {
                  showBubble("🛑 已退出随行，开启静止驻留！", 2500);
                } else if (nextMode === "sleep") {
                  showBubble("💤 进入小憩睡眠模式，Zzz...", 2500);
                } else {
                  showBubble("🚀 开启自由漫步模式！", 2500);
                }
              }}
              className={`p-1 text-xs rounded-full transition-all cursor-pointer hover:scale-115 active:scale-95 ${
                behaviorMode === "wander"
                  ? "bg-emerald-500/30 text-emerald-300 ring-1 ring-emerald-400/40"
                  : behaviorMode === "follow"
                  ? "bg-cyan-500/50 text-cyan-200 ring-2 ring-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]"
                  : behaviorMode === "sleep"
                  ? "bg-purple-500/30 text-purple-300 ring-1 ring-purple-400/40"
                  : "bg-amber-500/30 text-amber-300 ring-1 ring-amber-400/40"
              }`}
              title={`当前模式: ${
                behaviorMode === "wander"
                  ? "自由漫步"
                  : behaviorMode === "follow"
                  ? "伴随随行 (点击可直接取消退出)"
                  : behaviorMode === "stay"
                  ? "静止驻留"
                  : "小憩睡眠"
              } (点击切换)`}
            >
              {behaviorMode === "wander"
                ? "🐾"
                : behaviorMode === "follow"
                ? "🛰️"
                : behaviorMode === "stay"
                ? "🛑"
                : "💤"}
            </button>

            {/* Switch Pet Companion */}
            <button
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
                setIsSnackOpen(false);
                setIsAccessoryOpen(false);
              }}
              className="p-1 text-white/60 hover:text-white hover:bg-white/20 rounded-full transition-all cursor-pointer hover:scale-115 active:scale-95"
              title="切换桌宠伙伴"
            >
              <Settings2 className="w-3 h-3" />
            </button>
          </div>

          {/* 1. Snack Treats Menu Drawer */}
          <AnimatePresence>
            {isSnackOpen && (
              <motion.div
                initial={{ opacity: 0, y: isNearBottom ? 5 : -5, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: isNearBottom ? 5 : -5, scale: 0.9 }}
                onPointerDown={(e) => e.stopPropagation()}
                className={`absolute ${
                  isNearBottom ? "bottom-full mb-3" : "top-full mt-2"
                } left-1/2 -translate-x-1/2 p-2.5 rounded-2xl bento-glass-tile border border-white/25 shadow-2xl backdrop-blur-2xl flex flex-col gap-2 z-50 min-w-[190px]`}
              >
                <div className="text-[10px] font-mono text-white/60 px-1 flex items-center justify-between">
                  <span>选择投喂零食</span>
                  <button
                    type="button"
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsSnackOpen(false);
                    }}
                    className="p-0.5 text-white/40 hover:text-white cursor-pointer"
                  >
                    <X className="w-2.5 h-2.5" />
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-1.5 bg-black/40 p-1.5 rounded-xl border border-white/10">
                  <button
                    type="button"
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={(e) => handleFeedSnack("fish", e)}
                    className="flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-xs text-white/90 cursor-pointer transition-all active:scale-95"
                  >
                    <span className="text-base">🐟</span>
                    <span className="text-[9px]">小鱼干</span>
                  </button>
                  <button
                    type="button"
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={(e) => handleFeedSnack("bone", e)}
                    className="flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-xs text-white/90 cursor-pointer transition-all active:scale-95"
                  >
                    <span className="text-base">🍖</span>
                    <span className="text-[9px]">能量骨</span>
                  </button>
                  <button
                    type="button"
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={(e) => handleFeedSnack("berry", e)}
                    className="flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-xs text-white/90 cursor-pointer transition-all active:scale-95"
                  >
                    <span className="text-base">🍓</span>
                    <span className="text-[9px]">星光莓</span>
                  </button>
                  <button
                    type="button"
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={(e) => handleFeedSnack("battery", e)}
                    className="flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-xs text-white/90 cursor-pointer transition-all active:scale-95"
                  >
                    <span className="text-base">⚡</span>
                    <span className="text-[9px]">赛博电</span>
                  </button>
                  <button
                    type="button"
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={(e) => handleFeedSnack("candy", e)}
                    className="flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-xs text-white/90 cursor-pointer transition-all active:scale-95 col-span-2"
                  >
                    <span className="text-base">🍬</span>
                    <span className="text-[9px]">星云跳跳糖</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 2. Accessories Costume Drawer */}
          <AnimatePresence>
            {isAccessoryOpen && (
              <motion.div
                initial={{ opacity: 0, y: isNearBottom ? 5 : -5, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: isNearBottom ? 5 : -5, scale: 0.9 }}
                onPointerDown={(e) => e.stopPropagation()}
                className={`absolute ${
                  isNearBottom ? "bottom-full mb-3" : "top-full mt-2"
                } left-1/2 -translate-x-1/2 p-2.5 rounded-2xl bento-glass-tile border border-white/25 shadow-2xl backdrop-blur-2xl flex flex-col gap-2 z-50 min-w-[210px]`}
              >
                <div className="text-[10px] font-mono text-white/60 px-1 flex items-center justify-between">
                  <span>像素装扮试衣间</span>
                  <button
                    type="button"
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsAccessoryOpen(false);
                    }}
                    className="p-0.5 text-white/40 hover:text-white cursor-pointer"
                  >
                    <X className="w-2.5 h-2.5" />
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-1.5 bg-black/40 p-1.5 rounded-xl border border-white/10">
                  {(
                    [
                      "none",
                      "astronaut",
                      "halo",
                      "shades",
                      "crown",
                      "headphones",
                      "wizard",
                      "bow",
                    ] as PetAccessory[]
                  ).map((acc) => {
                    const accObj = ACCESSORY_SPRITES[acc];
                    const isSelected = selectedAccessory === acc;
                    return (
                      <button
                        key={acc}
                        type="button"
                        onPointerDown={(e) => e.stopPropagation()}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedAccessory(acc);
                          triggerHappy();
                          showBubble(`✨ 戴上了【${accObj.name}】！太酷啦！`, 2800);
                        }}
                        className={`flex flex-col items-center justify-center p-1.5 rounded-lg text-xs cursor-pointer transition-all ${
                          isSelected
                            ? "bg-white/25 text-white shadow-[0_0_10px_rgba(255,255,255,0.4)] scale-105"
                            : "bg-white/5 hover:bg-white/15 text-white/70 active:scale-95"
                        }`}
                      >
                        <span className="text-base">{accObj.icon}</span>
                        <span className="text-[8px] mt-0.5 font-mono truncate max-w-[40px]">{accObj.name}</span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 3. Desktop Pet Switching Selector Drawer */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: isNearBottom ? 5 : -5, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: isNearBottom ? 5 : -5, scale: 0.9 }}
                onPointerDown={(e) => e.stopPropagation()}
                className={`absolute ${
                  isNearBottom ? "bottom-full mb-3" : "top-full mt-2"
                } left-1/2 -translate-x-1/2 p-2 rounded-2xl bento-glass-tile border border-white/20 shadow-2xl backdrop-blur-xl flex flex-col gap-1.5 z-50 min-w-[150px]`}
              >
                <div className="text-[10px] font-mono text-white/50 px-1 flex items-center justify-between">
                  <span>选择桌宠伙伴</span>
                  <button
                    type="button"
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMenuOpen(false);
                    }}
                    className="p-0.5 text-white/40 hover:text-white"
                  >
                    <X className="w-2.5 h-2.5" />
                  </button>
                </div>

                <div className="grid grid-cols-5 gap-1 bg-black/40 p-1 rounded-xl border border-white/10">
                  {(["cat", "shiba", "fox", "dragon", "bunny"] as PixelPetType[]).map((type) => {
                    const isSelected = selectedPet === type;
                    const pet = PIXEL_SPRITES[type];
                    return (
                      <button
                        key={type}
                        type="button"
                        onPointerDown={(e) => e.stopPropagation()}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedPet(type);
                          setIsMenuOpen(false);
                          triggerHappy();
                          showBubble(`嗨！我是${pet.name}，你的桌面专属创作搭档！`, 3000);
                        }}
                        className={`text-sm p-1.5 rounded-lg transition-all cursor-pointer flex items-center justify-center ${
                          isSelected
                            ? "bg-white/25 scale-110 shadow-[0_0_10px_rgba(255,255,255,0.4)]"
                            : "opacity-60 hover:opacity-100 hover:bg-white/10 active:scale-95"
                        }`}
                        title={pet.name}
                      >
                        {pet.emoji}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};
