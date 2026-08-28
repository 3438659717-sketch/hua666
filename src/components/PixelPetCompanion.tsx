import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Heart,
  Zap,
  Volume2,
  VolumeX,
  X,
  Compass,
  Eye,
  EyeOff,
  Shirt,
  Gamepad2,
  Wrench,
  Package,
  TrendingUp,
  Award,
} from "lucide-react";
import { ProductId, AngleCategory } from "../types";
import { PRODUCTS_CONFIG } from "../data/templates";
import {
  PixelPetType,
  PetAccessory,
  PIXEL_SPRITES,
  ACCESSORY_SPRITES,
} from "../data/petData";
import {
  PetGrowthState,
  loadPetGrowthState,
  savePetGrowthState,
  tickPetGrowthDecay,
  feedPet,
  petCareAction,
  addWorkAffinity,
} from "../data/petGrowthStorage";
import { playPetSound, togglePetSoundMute, isPetSoundMuted } from "../utils/petSound";
import { PetCareModal } from "./pet/PetCareModal";
import { PetWardrobeModal } from "./pet/PetWardrobeModal";
import { PetToolsModal } from "./pet/PetToolsModal";
import { PetMiniGameModal } from "./pet/PetMiniGameModal";
import { PetQuizModal } from "./pet/PetQuizModal";
import { PetKnowledgeCardModal } from "./pet/PetKnowledgeCardModal";
import { BrainCircuit, BookOpen } from "lucide-react";

export type PetBehaviorMode = "wander" | "stay" | "sleep" | "follow";

// Autonomous Human-Like Life Activities
export type AutonomousActivity =
  | "none"
  | "walk_to_target"
  | "inspect_copy"
  | "type_keyboard"
  | "coffee_time"
  | "stretch_workout"
  | "daydream_spark"
  | "hunt_lucky_star"
  | "groom_polish"
  | "catnap"
  | "cheer_fan";

let petSeqCounter = 0;
const getUniquePetId = (prefix: string): string => {
  petSeqCounter += 1;
  return `${prefix}_${Date.now()}_${petSeqCounter}_${Math.random().toString(36).slice(2, 8)}`;
};

interface PixelPetCompanionProps {
  currentProductId: ProductId;
  onCheer?: () => void;
  lastAction?: { type: "generate" | "copy" | "favorite" | "change_product"; timestamp: number; data?: any } | null;
  onApplyInspiration?: (category: AngleCategory, keyword: string) => void;
}

const PixelPetCompanionComponent: React.FC<PixelPetCompanionProps> = ({
  currentProductId,
  onCheer,
  lastAction,
  onApplyInspiration,
}) => {
  // Persistent Growth State
  const [growthState, setGrowthState] = useState<PetGrowthState>(() => loadPetGrowthState());
  const growthStateRef = useRef<PetGrowthState>(growthState);
  growthStateRef.current = growthState;

  // Modals Open State
  const [isCareModalOpen, setIsCareModalOpen] = useState<boolean>(false);
  const [isWardrobeModalOpen, setIsWardrobeModalOpen] = useState<boolean>(false);
  const [isToolsModalOpen, setIsToolsModalOpen] = useState<boolean>(false);
  const [isMiniGameModalOpen, setIsMiniGameModalOpen] = useState<boolean>(false);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState<boolean>(false);
  const [isKnowledgeModalOpen, setIsKnowledgeModalOpen] = useState<boolean>(false);

  // Behavioral & Visual State
  const [behaviorMode, setBehaviorMode] = useState<PetBehaviorMode>("wander");
  const behaviorModeRef = useRef<PetBehaviorMode>(behaviorMode);
  behaviorModeRef.current = behaviorMode;

  // Autonomous Living Companion Activity State
  const [currentActivity, setCurrentActivity] = useState<AutonomousActivity>("none");
  const currentActivityRef = useRef<AutonomousActivity>("none");
  currentActivityRef.current = currentActivity;

  // Destination Target for Natural Smooth Navigation
  const targetWaypointRef = useRef<{ x: number; y: number } | null>(null);

  // Interactive Autonomous Star Catching Easter Egg
  const [luckyStar, setLuckyStar] = useState<{ id: string; x: number; y: number } | null>(null);
  const luckyStarRef = useRef<{ id: string; x: number; y: number } | null>(null);
  luckyStarRef.current = luckyStar;

  const [currentFrame, setCurrentFrame] = useState<string>("idle1");
  const [isFacingLeft, setIsFacingLeft] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const isDraggingRef = useRef<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const isHoveredRef = useRef<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(() => isPetSoundMuted());

  // Mini HUD / Quick Action Popover
  const [isQuickMenuOpen, setIsQuickMenuOpen] = useState<boolean>(false);
  const isQuickMenuOpenRef = useRef<boolean>(false);
  isQuickMenuOpenRef.current = isQuickMenuOpen;

  // Speech Bubble & Dialogue State
  const [bubbleText, setBubbleText] = useState<string>("");
  const [isBubbleVisible, setIsBubbleVisible] = useState<boolean>(false);
  const bubbleTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Sparks & Particles FX
  const [clickSparks, setClickSparks] = useState<
    { id: string; x: number; y: number; text: string; color: string }[]
  >([]);
  const [zzzList, setZzzList] = useState<{ id: string; x: number; y: number }[]>([]);
  const [footprints, setFootprints] = useState<
    { id: string; x: number; y: number; color: string }[]
  >([]);

  // Toys & Interactive Beacons
  const [activeToyBeacon, setActiveToyBeacon] = useState<{
    id: string;
    x: number;
    y: number;
    type: "laser" | "gravity";
  } | null>(null);
  const activeToyRef = useRef<{ id: string; x: number; y: number; type: "laser" | "gravity" } | null>(
    null
  );
  const toyOrbitAngleRef = useRef<number>(0);
  const toyOrbitTimerRef = useRef<number>(0);

  // Physics References (Runs at direct DOM transform speed with 0 lag)
  const posRef = useRef<{ x: number; y: number }>({
    x: typeof window !== "undefined" ? Math.max(40, window.innerWidth - 190) : 750,
    y: typeof window !== "undefined" ? Math.max(80, window.innerHeight - 230) : 520,
  });
  const velRef = useRef<{ vx: number; vy: number }>({ vx: 0.8, vy: 0.2 });
  const mouseCoordRef = useRef<{ x: number; y: number }>({ x: 400, y: 300 });
  const petBoxRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Local Toast notification
  const [petToast, setPetToast] = useState<{ id: string; msg: string; type: "success" | "info" | "error" } | null>(
    null
  );
  const showPetToast = useCallback((msg: string, type: "success" | "info" | "error" = "success") => {
    const id = getUniquePetId("toast");
    setPetToast({ id, msg, type });
    setTimeout(() => {
      setPetToast((cur) => (cur?.id === id ? null : cur));
    }, 3200);
  }, []);

  // Update growth state helper with auto storage sync
  const updateGrowthState = useCallback((updater: (prev: PetGrowthState) => PetGrowthState) => {
    setGrowthState((prev) => {
      const next = updater(prev);
      savePetGrowthState(next);
      return next;
    });
  }, []);

  // Periodic State Decay & Hunger Tick (every 60 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setGrowthState((prev) => {
        const next = tickPetGrowthDecay(prev);
        savePetGrowthState(next);
        return next;
      });
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // Active pet configuration from catalog
  const selectedPet = growthState.selectedPet;
  const currentAccessory = growthState.currentAccessory;
  const petConfig = PIXEL_SPRITES[selectedPet] || PIXEL_SPRITES.cat;
  const currentProd = PRODUCTS_CONFIG[currentProductId] || PRODUCTS_CONFIG.rec10;

  // Speech Bubble Trigger
  const showBubble = useCallback((text: string, durationMs: number = 3500) => {
    if (bubbleTimerRef.current) clearTimeout(bubbleTimerRef.current);
    setBubbleText(text);
    setIsBubbleVisible(true);
    bubbleTimerRef.current = setTimeout(() => {
      setIsBubbleVisible(false);
    }, durationMs);
  }, []);

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
      const maxX = Math.max(minX, window.innerWidth - 105);
      const minY = 65;
      const maxY = Math.max(minY, window.innerHeight - 115);
      posRef.current.x = Math.max(minX, Math.min(maxX, posRef.current.x));
      posRef.current.y = Math.max(minY, Math.min(maxY, posRef.current.y));
      updateDomPosition(posRef.current.x, posRef.current.y);
    };
    updateDomPosition(posRef.current.x, posRef.current.y);
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [updateDomPosition]);

  // Render current frame to 16x16 canvas scaled up crisp (80x80) with pixel accessories
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, 80, 80);

    const frameMatrix = petConfig.frames[currentFrame] || petConfig.frames.idle1;
    const scale = 5; // 16x16 -> 80x80 crisp integer scaling

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
    if (currentAccessory !== "none" && currentFrame !== "sleep") {
      const accData = ACCESSORY_SPRITES[currentAccessory];
      if (accData && accData.rows) {
        accData.rows.forEach(({ r, c, color }) => {
          ctx.fillStyle = color;
          ctx.fillRect(c * scale, r * scale, scale, scale);
        });
      }
    }
  }, [selectedPet, currentFrame, petConfig, currentAccessory]);

  // Catching Lucky Star function
  const handleCollectLuckyStar = useCallback(() => {
    if (!luckyStarRef.current) return;
    setLuckyStar(null);
    luckyStarRef.current = null;
    playPetSound("coin");
    triggerHappy();
    updateGrowthState((s) => ({
      ...s,
      coins: s.coins + 6,
      exp: s.exp + 15,
      happiness: Math.min(100, s.happiness + 15),
      affinity: Math.min(1000, s.affinity + 6),
    }));
    const sparkId = getUniquePetId("spark");
    setClickSparks((prev) => [
      ...prev.slice(-3),
      { id: sparkId, x: 28, y: 10, text: "⭐ 捕获幸运星！🪙+6", color: "#facc15" },
    ]);
    setTimeout(() => {
      setClickSparks((prev) => prev.filter((s) => s.id !== sparkId));
    }, 1400);
    showBubble("🌟 哇！抓到了出海幸运星，今天创作一定爆单！", 3200);
  }, [updateGrowthState, showBubble]);

  // Smooth 60FPS Physics Engine (RequestAnimationFrame) with Autonomous Navigation
  useEffect(() => {
    let animFrameId: number;
    let lastTime = performance.now();
    let footprintTimer = 0;
    let floatTime = 0;

    const loop = (currentTime: number) => {
      if (document.hidden) {
        animFrameId = requestAnimationFrame(loop);
        return;
      }
      const dt = Math.min((currentTime - lastTime) / 1000, 0.08);
      lastTime = currentTime;
      floatTime += dt;

      if (!isDraggingRef.current) {
        const mode = behaviorModeRef.current;
        const toy = activeToyRef.current;
        const star = luckyStarRef.current;
        const pos = posRef.current;
        const vel = velRef.current;
        const isMenuOpen = isQuickMenuOpenRef.current;
        const activity = currentActivityRef.current;
        const targetWaypoint = targetWaypointRef.current;

        const minX = 20;
        const maxX = typeof window !== "undefined" ? Math.max(minX, window.innerWidth - 105) : 800;
        const minY = 65;
        const maxY = typeof window !== "undefined" ? Math.max(minY, window.innerHeight - 115) : 600;

        if (toy) {
          if (toy.type === "gravity") {
            // Gravitational Orbital Capture physics around toy
            toyOrbitTimerRef.current += dt;
            toyOrbitAngleRef.current += dt * 3.8;

            const orbitRadius = Math.max(26, 68 - toyOrbitTimerRef.current * 20);
            const targetX = toy.x - 40 + Math.cos(toyOrbitAngleRef.current) * orbitRadius;
            const targetY = toy.y - 40 + Math.sin(toyOrbitAngleRef.current) * orbitRadius * 0.45;

            const dx = targetX - pos.x;
            const dy = targetY - pos.y;
            pos.x += dx * 0.12;
            pos.y += dy * 0.12;

            if (dx < -3) setIsFacingLeft(true);
            else if (dx > 3) setIsFacingLeft(false);

            if (toyOrbitTimerRef.current > 2.2 || orbitRadius <= 28) {
              setActiveToyBeacon(null);
              activeToyRef.current = null;
              toyOrbitTimerRef.current = 0;
              triggerJump();
              updateGrowthState((s) => ({
                ...s,
                happiness: Math.min(100, s.happiness + 20),
                affinity: Math.min(1000, s.affinity + 8),
              }));
              playPetSound("levelUp");
              const sparkId = getUniquePetId("spark");
              setClickSparks((prev) => [
                ...prev.slice(-3),
                { id: sparkId, x: 28, y: 10, text: "🪐 引力星环捕获！", color: "#c084fc" },
              ]);
              setTimeout(() => {
                setClickSparks((prev) => prev.filter((s) => s.id !== sparkId));
              }, 1200);
              showBubble("🌟 绝妙的星际轨道引力弹弓！", 2800);
            }
          } else {
            // Sprint towards active laser beacon
            const targetX = toy.x - 40;
            const targetY = toy.y - 40;
            const dx = targetX - pos.x;
            const dy = targetY - pos.y;
            const dist = Math.hypot(dx, dy);

            if (dist < 30) {
              setActiveToyBeacon(null);
              activeToyRef.current = null;
              triggerJump();
              updateGrowthState((s) => ({
                ...s,
                happiness: Math.min(100, s.happiness + 15),
                affinity: Math.min(1000, s.affinity + 5),
              }));
              playPetSound("coin");
              const sparkId = getUniquePetId("spark");
              setClickSparks((prev) => [
                ...prev.slice(-3),
                { id: sparkId, x: 28, y: 10, text: "🎾 抓到啦！好开心！", color: "#facc15" },
              ]);
              setTimeout(() => {
                setClickSparks((prev) => prev.filter((s) => s.id !== sparkId));
              }, 1200);
              showBubble("🐾 喵哈！成功扑抓到光球啦！", 2800);
            } else {
              const speed = 230;
              const step = Math.min(dist, speed * dt);
              pos.x += (dx / dist) * step;
              pos.y += (dy / dist) * step;
              if (dx < -4) setIsFacingLeft(true);
              else if (dx > 4) setIsFacingLeft(false);
            }
          }
        } else if (star && activity === "hunt_lucky_star") {
          // Autonomous Lucky Star Hunting
          const targetX = star.x - 40;
          const targetY = star.y - 40;
          const dx = targetX - pos.x;
          const dy = targetY - pos.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 32) {
            handleCollectLuckyStar();
          } else {
            const speed = 190;
            const step = Math.min(dist, speed * dt);
            pos.x += (dx / dist) * step;
            pos.y += (dy / dist) * step;
            if (dx < -4) setIsFacingLeft(true);
            else if (dx > 4) setIsFacingLeft(false);
          }
        } else if (mode === "follow" && !isMenuOpen) {
          // Smooth cosmic satellite follow mode
          if (!isHoveredRef.current) {
            const targetX = Math.max(minX, Math.min(maxX, mouseCoordRef.current.x + 52));
            const targetY = Math.max(
              minY,
              Math.min(maxY, mouseCoordRef.current.y + 44 + Math.sin(floatTime * 3) * 6)
            );
            const dx = targetX - pos.x;
            const dy = targetY - pos.y;
            const dist = Math.hypot(dx, dy);
            const cursorDist = Math.hypot(
              mouseCoordRef.current.x - (pos.x + 40),
              mouseCoordRef.current.y - (pos.y + 40)
            );

            if (dist > 15 && cursorDist > 75) {
              pos.x += dx * 0.055;
              pos.y += dy * 0.055;
              if (dx < -6) setIsFacingLeft(true);
              else if (dx > 6) setIsFacingLeft(false);
            }
          }
        } else if (mode === "wander" && !isMenuOpen) {
          // Autonomous Goal-Directed Waypoint Navigation
          if (targetWaypoint && activity === "walk_to_target") {
            const dx = targetWaypoint.x - pos.x;
            const dy = targetWaypoint.y - pos.y;
            const dist = Math.hypot(dx, dy);

            if (dist < 18) {
              // Arrived at destination waypoint! Switch to resting/living activity
              targetWaypointRef.current = null;
              velRef.current = { vx: 0, vy: 0 };
            } else {
              const speed = 100;
              const step = Math.min(dist, speed * dt);
              pos.x += (dx / dist) * step;
              pos.y += (dy / dist) * step + Math.sin(floatTime * 2.5) * 0.25;
              if (dx < -4) setIsFacingLeft(true);
              else if (dx > 4) setIsFacingLeft(false);
            }
          } else if (activity === "none" || activity === "walk_to_target") {
            // Gentle organic roaming
            pos.x += vel.vx * dt * 50;
            pos.y += vel.vy * dt * 50 + Math.sin(floatTime * 2.8) * 0.35;

            // Boundary bounce
            if (pos.x >= maxX) {
              pos.x = maxX;
              vel.vx = -Math.abs(vel.vx || 0.8);
              setIsFacingLeft(true);
            } else if (pos.x <= minX) {
              pos.x = minX;
              vel.vx = Math.abs(vel.vx || 0.8);
              setIsFacingLeft(false);
            }

            if (pos.y >= maxY) {
              pos.y = maxY;
              vel.vy = -Math.abs(vel.vy || 0.35);
            } else if (pos.y <= minY) {
              pos.y = minY;
              vel.vy = Math.abs(vel.vy || 0.35);
            }
          }

          // Subtle footprint trail
          footprintTimer += dt;
          if (footprintTimer > 0.8 && (Math.abs(vel.vx) > 0.3 || Math.abs(vel.vy) > 0.3)) {
            footprintTimer = 0;
            if (Math.random() < 0.25) {
              const footprintId = getUniquePetId("fp");
              const spawnX = pos.x + 30;
              const spawnY = pos.y + 68;
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

        updateDomPosition(pos.x, pos.y);
      }

      animFrameId = requestAnimationFrame(loop);
    };

    animFrameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animFrameId);
  }, [petConfig.color, updateDomPosition, updateGrowthState, showBubble, handleCollectLuckyStar]);

  // Frame cycle state machine (discrete animation ticks)
  useEffect(() => {
    let animInterval: NodeJS.Timeout;
    let tick = 0;

    animInterval = setInterval(() => {
      tick++;

      if (isDraggingRef.current) {
        setCurrentFrame("jump");
        return;
      }

      if (currentFrame === "jump" || currentFrame === "happy") {
        return;
      }

      const mode = behaviorModeRef.current;
      const activity = currentActivityRef.current;

      if (mode === "sleep" || activity === "catnap") {
        setCurrentFrame("sleep");
        if (tick % 6 === 0) {
          const zzzId = getUniquePetId("zzz");
          const curPos = posRef.current;
          setZzzList((prev) => [...prev.slice(-2), { id: zzzId, x: curPos.x + 36, y: curPos.y + 8 }]);
          setTimeout(() => {
            setZzzList((prev) => prev.filter((z) => z.id !== zzzId));
          }, 1800);
        }
        return;
      }

      if (activity === "type_keyboard") {
        // Fast typing animation
        setCurrentFrame(tick % 2 === 0 ? "sit" : "idle2");
        return;
      }

      if (activity === "coffee_time" || activity === "groom_polish") {
        setCurrentFrame(tick % 3 === 0 ? "sit" : "idle1");
        return;
      }

      if (activity === "stretch_workout") {
        setCurrentFrame(tick % 2 === 0 ? "jump" : "idle1");
        return;
      }

      if (activity === "inspect_copy" || activity === "daydream_spark") {
        setCurrentFrame(tick % 4 === 0 ? "idle2" : "idle1");
        return;
      }

      if (activity === "cheer_fan") {
        setCurrentFrame(tick % 2 === 0 ? "happy" : "jump");
        return;
      }

      if (mode === "stay" || isQuickMenuOpenRef.current) {
        if (tick % 8 === 0) {
          setCurrentFrame("idle2");
        } else if (tick % 15 === 0) {
          setCurrentFrame("sit");
        } else {
          setCurrentFrame("idle1");
        }
        return;
      }

      if (mode === "wander") {
        const vel = velRef.current;
        const targetWaypoint = targetWaypointRef.current;
        if (targetWaypoint || Math.abs(vel.vx) > 0.2 || Math.abs(vel.vy) > 0.2) {
          setCurrentFrame(tick % 2 === 0 ? "walk1" : "walk2");
        } else {
          setCurrentFrame(tick % 4 === 0 ? "idle2" : "idle1");
        }
      }
    }, 240);

    return () => clearInterval(animInterval);
  }, [currentFrame]);

  // Autonomous Living Companion AI Decision Routine (Human-like Routine)
  useEffect(() => {
    if (behaviorMode !== "wander") return;

    const autonomousDecision = () => {
      if (
        isDraggingRef.current ||
        activeToyRef.current ||
        isQuickMenuOpenRef.current ||
        currentActivityRef.current !== "none"
      ) {
        return;
      }

      const roll = Math.random();
      const minX = 40;
      const maxX = typeof window !== "undefined" ? Math.max(minX, window.innerWidth - 160) : 700;
      const minY = 80;
      const maxY = typeof window !== "undefined" ? Math.max(minY, window.innerHeight - 180) : 500;

      // 1. Pick an autonomous action
      if (roll < 0.2) {
        // [Action: Deep Work & Typing]
        setCurrentActivity("type_keyboard");
        velRef.current = { vx: 0, vy: 0 };
        playPetSound("click");
        const workQuotes = [
          `⌨️ 哒哒哒~ 正在帮主人拆解【${currentProd.name}】的爆款前3秒完播率！`,
          "💻 陪主人一起奋斗！今天我们的目标是冲上海外热门！",
          "📊 正在计算带货转化率模型，灵感源源不断~",
          "⌨️ 疯狂敲键盘中... 本搭档随时为主人输出爆款构思！",
        ];
        showBubble(workQuotes[Math.floor(Math.random() * workQuotes.length)], 4000);
        setTimeout(() => {
          setCurrentActivity("none");
        }, 5500);
      } else if (roll < 0.35) {
        // [Action: Coffee / Bubble Tea Break]
        setCurrentActivity("coffee_time");
        velRef.current = { vx: 0, vy: 0 };
        playPetSound("bubble");
        const coffeeQuotes = [
          "☕ 喝口生椰冷萃补满元气！主人也别忘了多喝水哦~",
          "🧋 吨吨吨~ 补充卡路里与灵感糖分！",
          "☕ 创作累了吗？喝杯咖啡，灵感爆棚！",
        ];
        showBubble(coffeeQuotes[Math.floor(Math.random() * coffeeQuotes.length)], 3800);
        setTimeout(() => {
          setCurrentActivity("none");
        }, 5000);
      } else if (roll < 0.48) {
        // [Action: Curious Inspection of Screen / Copywriting]
        setCurrentActivity("inspect_copy");
        velRef.current = { vx: 0, vy: 0 };
        playPetSound("quest");
        const inspectQuotes = [
          "🧐 正在深度扫描本页面的爆款钩子，痛点反转指数极高！",
          `👀 正在研究【${currentProd.model}】的卖点矩阵，这个角度很抓人！`,
          "🔍 发现高转化潜力标题！推荐一键复制到剪贴板体验~",
        ];
        showBubble(inspectQuotes[Math.floor(Math.random() * inspectQuotes.length)], 4000);
        setTimeout(() => {
          setCurrentActivity("none");
        }, 4800);
      } else if (roll < 0.6) {
        // [Action: Daydreaming & Spark of Inspiration]
        setCurrentActivity("daydream_spark");
        velRef.current = { vx: 0, vy: 0 };
        playPetSound("gacha");
        const ideaQuotes = [
          "💡 灵光一闪！如果视频开头用『千万别买，除非你...』悬念呢？",
          "💭 漫步在灵感银河中... 捕捉到了 3 个超级金句！",
          "💡 突然想到一个绝妙的海外带货分镜脚本！",
        ];
        showBubble(ideaQuotes[Math.floor(Math.random() * ideaQuotes.length)], 4000);
        setTimeout(() => {
          setCurrentActivity("none");
        }, 4500);
      } else if (roll < 0.72) {
        // [Action: Stretch & Exercise]
        setCurrentActivity("stretch_workout");
        velRef.current = { vx: 0, vy: 0 };
        playPetSound("trick");
        const stretchQuotes = [
          "🧘 伸个懒腰~ 颈椎舒服多了！坐久了要站起来走走哦~",
          "🤸‍♂️ 蹦跶两下活动筋骨！元气满满继续开工！",
          "🧘‍♀️ 吸气~ 呼气~ 保持专注力满格！",
        ];
        showBubble(stretchQuotes[Math.floor(Math.random() * stretchQuotes.length)], 3800);
        setTimeout(() => {
          setCurrentActivity("none");
        }, 4200);
      } else if (roll < 0.82) {
        // [Action: Spawn Lucky Star Catching Easter Egg]
        const starX = Math.floor(Math.random() * (maxX - minX)) + minX;
        const starY = Math.floor(Math.random() * (maxY - minY)) + minY;
        const starId = getUniquePetId("star");
        setLuckyStar({ id: starId, x: starX, y: starY });
        luckyStarRef.current = { id: starId, x: starX, y: starY };
        setCurrentActivity("hunt_lucky_star");
        playPetSound("quest");
        showBubble("⭐ 哇！屏幕上出现了一颗出海幸运星！快抓住它！", 3500);

        // Auto dismiss if not caught after 8 seconds
        setTimeout(() => {
          if (luckyStarRef.current?.id === starId) {
            setLuckyStar(null);
            luckyStarRef.current = null;
            setCurrentActivity("none");
          }
        }, 8500);
      } else if (roll < 0.92) {
        // [Action: Purposeful Navigation to Target Waypoint]
        const randomX = Math.floor(Math.random() * (maxX - minX)) + minX;
        const randomY = Math.floor(Math.random() * (maxY - minY)) + minY;
        targetWaypointRef.current = { x: randomX, y: randomY };
        setCurrentActivity("walk_to_target");
        setIsFacingLeft(randomX < posRef.current.x);
      } else {
        // [Action: Cheer for Creator]
        setCurrentActivity("cheer_fan");
        velRef.current = { vx: 0, vy: 0 };
        playPetSound("levelUp");
        showBubble("🎉 主人太强了！海外 TikTok 播放量势不可挡！", 3500);
        setTimeout(() => {
          setCurrentActivity("none");
        }, 3600);
      }
    };

    const interval = setInterval(autonomousDecision, 7500);
    return () => clearInterval(interval);
  }, [behaviorMode, currentProd, showBubble]);

  // Handle external app actions (generating, copying, favoriting)
  useEffect(() => {
    if (!lastAction) return;

    if (lastAction.type === "generate") {
      triggerJump();
      playPetSound("quest");
      showBubble(`🎉 哇！已为【${currentProd.model}】生成 50 组精选爆款文案！亲密度+20`, 4000);
      updateGrowthState((s) => addWorkAffinity(s, "generate_copy").nextState);
    } else if (lastAction.type === "copy") {
      triggerHappy();
      playPetSound("coin");
      showBubble("✨ 完整钩子与 5 大营销标签已复制！亲密度+12", 3500);
      updateGrowthState((s) => addWorkAffinity(s, "copy_title").nextState);
    } else if (lastAction.type === "favorite") {
      triggerJump();
      playPetSound("levelUp");
      showBubble("💖 已成功收录到精选收藏库！亲密度+15", 3500);
      updateGrowthState((s) => addWorkAffinity(s, "favorite").nextState);
    } else if (lastAction.type === "change_product") {
      showBubble(`🔄 已切换至【${currentProd.name}】(${currentProd.model})！`, 3000);
    }
  }, [lastAction, currentProd, showBubble, updateGrowthState]);

  const triggerJump = () => {
    setCurrentFrame("jump");
    setTimeout(() => {
      if (!isDraggingRef.current) {
        const mode = behaviorModeRef.current;
        setCurrentFrame(
          mode === "wander" && !isQuickMenuOpenRef.current
            ? "walk1"
            : mode === "sleep"
            ? "sleep"
            : "idle1"
        );
      }
    }, 700);
  };

  const triggerHappy = () => {
    setCurrentFrame("happy");
    setTimeout(() => {
      if (!isDraggingRef.current) {
        const mode = behaviorModeRef.current;
        setCurrentFrame(
          mode === "wander" && !isQuickMenuOpenRef.current
            ? "walk1"
            : mode === "sleep"
            ? "sleep"
            : "idle1"
        );
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

  // Pet interactive click (Petting & Nurturing)
  const handlePetClick = (e: React.MouseEvent | React.PointerEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (behaviorModeRef.current === "follow") {
      setBehaviorMode("stay");
      behaviorModeRef.current = "stay";
      playPetSound("click");
      showBubble("🛑 已退出随行，开启静止驻留！", 2500);
      return;
    }

    playPetSound("pet");
    const { nextState, gainedExp, gainedAffinity } = petCareAction(growthState);
    updateGrowthState(() => nextState);

    // Spawn heart spark
    const sparkId = getUniquePetId("spark");
    const sparkWords = ["💖 抚摸", `✨ +${gainedExp} EXP`, "🔥 爆款！", "⭐ 9.8分", "🐾 咕噜~"];
    const text = sparkWords[Math.floor(Math.random() * sparkWords.length)];
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
    if (e.button !== 0) return;
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
        setBehaviorMode("stay");
        behaviorModeRef.current = "stay";
        showBubble("🐾 已将桌宠放置在此处，退出随行！", 2500);
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

  // Toggle Sound Mute
  const handleToggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextMute = togglePetSoundMute();
    setIsMuted(nextMute);
    if (!nextMute) playPetSound("click");
    showPetToast(nextMute ? "🔇 桌宠音效已静音" : "🔊 桌宠 8-bit 音效已开启", "info");
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => {
          setIsVisible(true);
          playPetSound("levelUp");
          showBubble("🐾 喵哈！我又回到主人身边啦！", 2500);
        }}
        className="fixed bottom-4 right-4 z-40 p-2.5 rounded-2xl bg-slate-900/85 hover:bg-slate-800 border border-cyan-400/40 text-cyan-300 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-mono transition-all hover:scale-105 active:scale-95 group"
        title="召唤桌宠伙伴"
      >
        <span className="text-lg group-hover:animate-bounce">{petConfig.emoji}</span>
        <span className="font-bold">召唤 {petConfig.name}</span>
        <Eye className="w-3.5 h-3.5 ml-1 text-white/50" />
      </button>
    );
  }

  const isNearBottom = posRef.current.y > (typeof window !== "undefined" ? window.innerHeight - 200 : 500);

  return (
    <>
      {/* 1. Footprints particles */}
      <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
        {footprints.map((fp) => (
          <div
            key={fp.id}
            className="absolute w-2 h-2 rounded-full opacity-60 animate-ping"
            style={{ left: `${fp.x}px`, top: `${fp.y}px`, backgroundColor: fp.color }}
          />
        ))}
      </div>

      {/* 2. Zzz Sleeping particles */}
      <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
        {zzzList.map((z) => (
          <div
            key={z.id}
            className="absolute text-xs font-mono font-bold text-purple-300 animate-bounce opacity-80"
            style={{ left: `${z.x}px`, top: `${z.y}px` }}
          >
            Zzz...
          </div>
        ))}
      </div>

      {/* 2.5 Autonomous Lucky Star Collectible Easter Egg */}
      {luckyStar && (
        <div
          onClick={handleCollectLuckyStar}
          className="fixed z-40 cursor-pointer animate-bounce select-none pointer-events-auto group"
          style={{ left: `${luckyStar.x}px`, top: `${luckyStar.y}px` }}
          title="点击抓取出海幸运星！"
        >
          <div className="relative p-2 rounded-full bg-amber-500/25 border border-amber-400/60 shadow-[0_0_20px_rgba(251,191,36,0.6)] backdrop-blur-sm group-hover:scale-125 transition-transform">
            <span className="text-xl drop-shadow-md">⭐</span>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded bg-slate-950/90 border border-amber-400/40 text-[9px] font-mono text-amber-300 whitespace-nowrap shadow-md">
              幸运星 +6🪙
            </div>
          </div>
        </div>
      )}

      {/* 3. Floating Pet In-Game Toast */}
      {petToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            className={`px-4 py-2 rounded-xl text-xs font-medium backdrop-blur-xl border shadow-xl flex items-center gap-2 ${
              petToast.type === "error"
                ? "bg-rose-950/80 border-rose-500/40 text-rose-200"
                : petToast.type === "info"
                ? "bg-blue-950/80 border-blue-500/40 text-blue-200"
                : "bg-slate-900/90 border-cyan-400/40 text-cyan-200"
            }`}
          >
            <span>{petToast.msg}</span>
          </motion.div>
        </div>
      )}

      {/* 4. The Interactive Modals */}
      <PetCareModal
        isOpen={isCareModalOpen}
        onClose={() => setIsCareModalOpen(false)}
        state={growthState}
        onUpdateState={updateGrowthState}
        onShowToast={showPetToast}
        onOpenQuiz={() => {
          setIsCareModalOpen(false);
          setIsQuizModalOpen(true);
        }}
        onOpenKnowledge={() => {
          setIsCareModalOpen(false);
          setIsKnowledgeModalOpen(true);
        }}
      />

      <PetWardrobeModal
        isOpen={isWardrobeModalOpen}
        onClose={() => setIsWardrobeModalOpen(false)}
        state={growthState}
        onUpdateState={updateGrowthState}
        onShowToast={showPetToast}
      />

      <PetToolsModal
        isOpen={isToolsModalOpen}
        onClose={() => setIsToolsModalOpen(false)}
        currentProductId={currentProductId}
        state={growthState}
        onUpdateState={updateGrowthState}
        onShowToast={showPetToast}
        onApplyInspiration={onApplyInspiration}
      />

      <PetMiniGameModal
        isOpen={isMiniGameModalOpen}
        onClose={() => setIsMiniGameModalOpen(false)}
        state={growthState}
        onUpdateState={updateGrowthState}
        onShowToast={showPetToast}
      />

      <PetQuizModal
        isOpen={isQuizModalOpen}
        onClose={() => setIsQuizModalOpen(false)}
        state={growthState}
        onUpdateState={updateGrowthState}
        onShowToast={showPetToast}
      />

      <PetKnowledgeCardModal
        isOpen={isKnowledgeModalOpen}
        onClose={() => setIsKnowledgeModalOpen(false)}
        state={growthState}
        onUpdateState={updateGrowthState}
        onShowToast={showPetToast}
      />

      {/* 5. Main Pixel Pet Box (Hardware-Accelerated Translation, Larger 80x80 Clear Canvas) */}
      <div
        ref={petBoxRef}
        className="fixed top-0 left-0 z-40 select-none touch-none pointer-events-auto transition-shadow"
        style={{
          width: "80px",
          height: "80px",
          willChange: "transform",
        }}
      >
        <div className="relative w-full h-full group">
          {/* A. Speech Bubble */}
          <AnimatePresence>
            {isBubbleVisible && bubbleText && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.85 }}
                className="absolute bottom-[calc(100%+38px)] left-1/2 -translate-x-1/2 min-w-[170px] max-w-[260px] p-2.5 rounded-2xl bg-slate-950/95 border border-white/20 text-white text-[11px] shadow-2xl backdrop-blur-xl pointer-events-none z-50 flex flex-col gap-0.5"
              >
                <div className="flex items-center justify-between text-[9px] font-mono text-cyan-300/80 mb-0.5">
                  <span className="flex items-center gap-1">
                    <span>{petConfig.emoji}</span>
                    <span>{petConfig.name}</span>
                  </span>
                  <span className="text-white/40">Lv.{growthState.level}</span>
                </div>
                <p className="leading-tight text-white/90 font-medium">{bubbleText}</p>
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-950/95" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* B. Click Sparks / Heart FX */}
          {clickSparks.map((spark) => (
            <motion.div
              key={spark.id}
              initial={{ opacity: 1, y: 0, scale: 0.8 }}
              animate={{ opacity: 0, y: -38, scale: 1.2 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="absolute pointer-events-none text-xs font-mono font-bold whitespace-nowrap z-50 drop-shadow-md"
              style={{
                left: `${spark.x}px`,
                top: `${spark.y}px`,
                color: spark.color,
              }}
            >
              {spark.text}
            </motion.div>
          ))}

          {/* B.5 Autonomous Living Activity Prop Indicator */}
          {currentActivity !== "none" && currentActivity !== "walk_to_target" && (
            <div className="absolute -top-3 -right-2 z-50 pointer-events-none animate-bounce">
              <span className="p-1 px-1.5 rounded-full bg-slate-950/90 border border-white/30 text-xs shadow-lg backdrop-blur-sm">
                {currentActivity === "type_keyboard"
                  ? "💻"
                  : currentActivity === "coffee_time"
                  ? "☕"
                  : currentActivity === "inspect_copy"
                  ? "🔍"
                  : currentActivity === "daydream_spark"
                  ? "💡"
                  : currentActivity === "stretch_workout"
                  ? "🤸"
                  : currentActivity === "hunt_lucky_star"
                  ? "⭐"
                  : currentActivity === "cheer_fan"
                  ? "🎉"
                  : "✨"}
              </span>
            </div>
          )}

          {/* C. The 80x80 Crisp Pixel Pet Canvas */}
          <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            onMouseEnter={() => {
              setIsHovered(true);
              isHoveredRef.current = true;
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              isHoveredRef.current = false;
            }}
            className={`relative w-20 h-20 cursor-grab active:cursor-grabbing transition-transform ${
              isFacingLeft ? "scale-x-[-1]" : "scale-x-100"
            } ${isDragging ? "scale-110" : "hover:scale-105"}`}
            title="拖拽可移动桌宠，单击可抚摸互动"
          >
            <canvas
              ref={canvasRef}
              width={80}
              height={80}
              className="w-full h-full pixelated drop-shadow-[0_6px_16px_rgba(0,0,0,0.6)] drop-shadow-[0_0_12px_rgba(56,189,248,0.2)]"
              style={{ imageRendering: "pixelated" }}
            />
          </div>

          {/* D. Status Badge: Lv. & Mood (Positioned at -top-8 above pet to avoid obstruction) */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              setIsCareModalOpen(true);
              playPetSound("click");
            }}
            className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-slate-950/90 border border-white/25 text-[9.5px] font-mono text-cyan-300 flex items-center gap-1.5 cursor-pointer hover:bg-slate-800 hover:border-cyan-400/60 transition-all shadow-lg active:scale-95 whitespace-nowrap backdrop-blur-md select-none pointer-events-auto"
            title="点击打开桌宠养成与状态面板"
          >
            <span className="font-bold text-cyan-300">Lv.{growthState.level}</span>
            <span className="text-white/30">•</span>
            <span className="text-amber-300 font-semibold">🪙 {growthState.coins}</span>
          </div>

          {/* E. Floating Quick Control Capsule Bar (Positioned at -bottom-9) */}
          <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 flex items-center gap-1 p-1 rounded-full bg-slate-950/85 border border-white/20 backdrop-blur-md shadow-xl transition-opacity">
            {/* 1. Nurture & Care Hub */}
            <button
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                setIsCareModalOpen(true);
                playPetSound("click");
              }}
              className="p-1 text-white/70 hover:text-cyan-300 hover:bg-white/15 rounded-full transition-all cursor-pointer hover:scale-110 active:scale-95"
              title="🎒 桌宠养成与喂养中心"
            >
              <Heart className="w-3.5 h-3.5 text-pink-400" />
            </button>

            {/* 2. Wardrobe & Species Hub */}
            <button
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                setIsWardrobeModalOpen(true);
                playPetSound("click");
              }}
              className="p-1 text-white/70 hover:text-purple-300 hover:bg-white/15 rounded-full transition-all cursor-pointer hover:scale-110 active:scale-95"
              title="👗 宇宙衣橱与伙伴切换"
            >
              <Shirt className="w-3.5 h-3.5 text-purple-400" />
            </button>

            {/* 3. Creator Assist Tools */}
            <button
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                setIsToolsModalOpen(true);
                playPetSound("click");
              }}
              className="p-1 text-white/70 hover:text-amber-300 hover:bg-white/15 rounded-full transition-all cursor-pointer hover:scale-110 active:scale-95"
              title="🛠️ 生产力百宝箱 (番茄钟/AI标题诊断/灵感扭蛋)"
            >
              <Wrench className="w-3.5 h-3.5 text-amber-400" />
            </button>

            {/* 4. Catching Mini Game */}
            <button
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                setIsMiniGameModalOpen(true);
                playPetSound("click");
              }}
              className="p-1 text-white/70 hover:text-emerald-300 hover:bg-white/15 rounded-full transition-all cursor-pointer hover:scale-110 active:scale-95"
              title="🎮 星际接光球零食大作战小游戏"
            >
              <Gamepad2 className="w-3.5 h-3.5 text-emerald-400" />
            </button>

            {/* 5. Knowledge Quiz Challenge */}
            <button
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                setIsQuizModalOpen(true);
                playPetSound("click");
              }}
              className="p-1 text-white/70 hover:text-cyan-300 hover:bg-white/15 rounded-full transition-all cursor-pointer hover:scale-110 active:scale-95"
              title="🧠 TikTok/电商带货问答对决 (答对即涨工作技能与高额亲密)"
            >
              <BrainCircuit className="w-3.5 h-3.5 text-cyan-400" />
            </button>

            {/* 6. Knowledge Study Cards */}
            <button
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                setIsKnowledgeModalOpen(true);
                playPetSound("click");
              }}
              className="p-1 text-white/70 hover:text-blue-300 hover:bg-white/15 rounded-full transition-all cursor-pointer hover:scale-110 active:scale-95"
              title="📚 爆款营销与运营知识卡片 (翻阅精进+增加亲密度)"
            >
              <BookOpen className="w-3.5 h-3.5 text-blue-400" />
            </button>

            {/* 7. Behavior Mode Switcher */}
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
                playPetSound("click");
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
              className={`p-1 text-xs rounded-full transition-all cursor-pointer hover:scale-110 active:scale-95 ${
                behaviorMode === "wander"
                  ? "bg-emerald-500/30 text-emerald-300 ring-1 ring-emerald-400/40"
                  : behaviorMode === "follow"
                  ? "bg-cyan-500/50 text-cyan-200 ring-2 ring-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]"
                  : behaviorMode === "sleep"
                  ? "bg-purple-500/30 text-purple-300 ring-1 ring-purple-400/40"
                  : "bg-amber-500/30 text-amber-300 ring-1 ring-amber-400/40"
              }`}
              title={`当前行为: ${
                behaviorMode === "wander"
                  ? "自由漫步"
                  : behaviorMode === "follow"
                  ? "伴随随行"
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

            {/* 6. Sound Switcher */}
            <button
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={handleToggleSound}
              className="p-1 text-white/50 hover:text-white hover:bg-white/15 rounded-full transition-all cursor-pointer"
              title={isMuted ? "开启 8-bit 音效" : "静音桌宠音效"}
            >
              {isMuted ? <VolumeX className="w-3 h-3 text-rose-400" /> : <Volume2 className="w-3 h-3 text-cyan-300" />}
            </button>

            {/* 7. Hide Pet Button */}
            <button
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                setIsVisible(false);
              }}
              className="p-1 text-white/40 hover:text-white hover:bg-white/15 rounded-full transition-all cursor-pointer"
              title="暂时收起桌宠"
            >
              <EyeOff className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export const PixelPetCompanion = React.memo(PixelPetCompanionComponent);
