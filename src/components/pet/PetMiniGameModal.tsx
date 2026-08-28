import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { X, Play, RotateCcw, Trophy, Award, Sparkles, Volume2 } from "lucide-react";
import { PetGrowthState } from "../../data/petGrowthStorage";
import { PIXEL_SPRITES } from "../../data/petData";
import { playPetSound } from "../../utils/petSound";

interface PetMiniGameModalProps {
  isOpen: boolean;
  onClose: () => void;
  state: PetGrowthState;
  onUpdateState: (updater: (prev: PetGrowthState) => PetGrowthState) => void;
  onShowToast: (msg: string, type?: "success" | "info" | "error") => void;
}

interface FallingItem {
  id: number;
  x: number; // percentage 5 - 95
  y: number; // percentage 0 - 100
  speed: number;
  type: "star" | "snack" | "diamond" | "obstacle";
  emoji: string;
  points: number;
  coins: number;
}

export const PetMiniGameModal: React.FC<PetMiniGameModalProps> = ({
  isOpen,
  onClose,
  state,
  onUpdateState,
  onShowToast,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [earnedCoins, setEarnedCoins] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(25);
  const [petX, setPetX] = useState<number>(50); // 0 - 100 percentage
  const [highScore, setHighScore] = useState<number>(() => {
    if (typeof window === "undefined") return 0;
    return parseInt(localStorage.getItem("fosmet_pet_minigame_high_score") || "0", 10);
  });

  const [items, setItems] = useState<FallingItem[]>([]);
  const nextItemId = useRef<number>(1);
  const gameAreaRef = useRef<HTMLDivElement | null>(null);
  const animFrameRef = useRef<number | null>(null);

  const currentPetDef = PIXEL_SPRITES[state.selectedPet] || PIXEL_SPRITES.cat;

  // Start game
  const startGame = () => {
    setScore(0);
    setEarnedCoins(0);
    setTimeLeft(25);
    setItems([]);
    setIsGameOver(false);
    setIsPlaying(true);
    setPetX(50);
    playPetSound("levelUp");
  };

  // Timer countdown
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timer);
          setIsPlaying(false);
          setIsGameOver(true);
          playPetSound("quest");
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  // Main game physics loop
  useEffect(() => {
    if (!isPlaying) return;

    let lastSpawn = Date.now();

    const loop = () => {
      const now = Date.now();

      // Spawn falling items every 450ms
      if (now - lastSpawn > 450) {
        lastSpawn = now;
        const rand = Math.random();
        let itemType: FallingItem["type"] = "star";
        let emoji = "⭐";
        let pts = 10;
        let cns = 2;

        if (rand < 0.4) {
          itemType = "star";
          emoji = "⭐";
          pts = 10;
          cns = 2;
        } else if (rand < 0.65) {
          itemType = "snack";
          emoji = "🐟";
          pts = 20;
          cns = 5;
        } else if (rand < 0.8) {
          itemType = "diamond";
          emoji = "💎";
          pts = 50;
          cns = 10;
        } else {
          itemType = "obstacle";
          emoji = "👾";
          pts = -15;
          cns = 0;
        }

        const newItem: FallingItem = {
          id: nextItemId.current++,
          x: Math.random() * 85 + 7.5,
          y: 0,
          speed: Math.random() * 0.7 + 0.9,
          type: itemType,
          emoji,
          points: pts,
          coins: cns,
        };

        setItems((prev) => [...prev, newItem]);
      }

      // Move items and check collisions
      setItems((prev) => {
        const nextList: FallingItem[] = [];

        prev.forEach((item) => {
          const nextY = item.y + item.speed;

          // Check collision with pet at y >= 82%
          if (nextY >= 80 && nextY <= 92 && Math.abs(item.x - petX) < 14) {
            // Collision caught!
            if (item.type === "obstacle") {
              playPetSound("click");
              setScore((s) => Math.max(0, s + item.points));
            } else {
              playPetSound("coin");
              setScore((s) => s + item.points);
              setEarnedCoins((c) => c + item.coins);
            }
            return; // Item is caught, do not keep
          }

          // Out of screen
          if (nextY < 100) {
            nextList.push({ ...item, y: nextY });
          }
        });

        return nextList;
      });

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying, petX]);

  // Handle Game Over rewards
  useEffect(() => {
    if (isGameOver) {
      if (score > highScore) {
        setHighScore(score);
        localStorage.setItem("fosmet_pet_minigame_high_score", score.toString());
      }

      const totalExp = Math.floor(score * 0.6) + 30;
      const totalCoins = earnedCoins + 20;

      onUpdateState((prev) => {
        const qProgress = { ...prev.dailyQuestProgress };
        qProgress["play_minigame"] = (qProgress["play_minigame"] || 0) + 1;

        return {
          ...prev,
          coins: prev.coins + totalCoins,
          exp: prev.exp + totalExp,
          happiness: Math.min(100, prev.happiness + 25),
          affinity: Math.min(1000, prev.affinity + 10),
          dailyQuestProgress: qProgress,
        };
      });

      onShowToast(
        `🎉 游戏结算！得分: ${score}，获得 +${totalCoins} 金币与 +${totalExp} EXP！`,
        "success"
      );
    }
  }, [isGameOver]);

  // Mouse move handler on game board
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isPlaying || !gameAreaRef.current) return;
    const rect = gameAreaRef.current.getBoundingClientRect();
    const clientX = e.clientX;
    const relX = ((clientX - rect.left) / rect.width) * 100;
    setPetX(Math.max(8, Math.min(92, relX)));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 15 }}
        className="w-full max-w-2xl bg-slate-900/95 border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col acrylic-glass text-slate-100"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-slate-950/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500/20 to-pink-500/20 border border-amber-400/30 flex items-center justify-center text-xl">
              🎮
            </div>
            <div>
              <h2 className="font-bold text-base sm:text-lg text-white font-sans">
                星际接光球与零食大作战
              </h2>
              <p className="text-xs text-white/50">
                左右移动桌宠接住掉落的星光、小鱼干与宝石，避开宇宙垃圾！
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

        {/* Game Stats Bar */}
        <div className="px-5 py-3 bg-slate-950/60 border-b border-white/10 flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-4">
            <div>
              <span className="text-white/40">得分: </span>
              <span className="text-cyan-400 font-bold text-sm">{score}</span>
            </div>
            <div>
              <span className="text-white/40">收集金币: </span>
              <span className="text-amber-400 font-bold text-sm">🪙 +{earnedCoins}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div>
              <span className="text-white/40">最高分: </span>
              <span className="text-purple-300 font-bold">{highScore}</span>
            </div>
            <div className="px-2.5 py-1 rounded-lg bg-slate-800 border border-white/10 font-bold text-amber-300">
              ⏳ 00:{timeLeft.toString().padStart(2, "0")}
            </div>
          </div>
        </div>

        {/* Play Area */}
        <div
          ref={gameAreaRef}
          onPointerMove={handlePointerMove}
          className="relative w-full h-80 bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950/60 overflow-hidden cursor-crosshair select-none touch-none"
        >
          {/* Background Grid Particles */}
          <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />

          {/* Falling Items */}
          {items.map((item) => (
            <div
              key={item.id}
              className="absolute text-2xl transform -translate-x-1/2 -translate-y-1/2 drop-shadow-md pointer-events-none transition-transform"
              style={{ left: `${item.x}%`, top: `${item.y}%` }}
            >
              {item.emoji}
            </div>
          ))}

          {/* Pet Player at Bottom */}
          <div
            className="absolute bottom-4 transform -translate-x-1/2 transition-all duration-75 pointer-events-none flex flex-col items-center"
            style={{ left: `${petX}%` }}
          >
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-3xl shadow-lg shadow-cyan-500/20 backdrop-blur-xs">
              {currentPetDef.emoji}
            </div>
            <div className="w-10 h-1 bg-cyan-400/50 rounded-full blur-xs mt-1" />
          </div>

          {/* Start Screen Overlay */}
          {!isPlaying && !isGameOver && (
            <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs flex flex-col items-center justify-center p-6 text-center space-y-4">
              <span className="text-5xl animate-bounce">{currentPetDef.emoji}</span>
              <div>
                <h3 className="text-lg font-bold text-white">准备好接住所有爆款星光了吗？</h3>
                <p className="text-xs text-white/50 mt-1 max-w-sm">
                  移动鼠标左右滑动控制桌宠位置，接住 ⭐ 鱼干 🐟 和钻石 💎，躲避 👾 垃圾！
                </p>
              </div>
              <button
                onClick={startGame}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-bold text-sm flex items-center gap-2 shadow-lg shadow-amber-500/25 active:scale-95 transition-all"
              >
                <Play className="w-4 h-4 fill-current" /> 开始 25 秒挑战
              </button>
            </div>
          )}

          {/* Game Over Screen Overlay */}
          {isGameOver && (
            <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-xs flex flex-col items-center justify-center p-6 text-center space-y-4">
              <Trophy className="w-12 h-12 text-amber-400 animate-pulse" />
              <div>
                <h3 className="text-xl font-black text-white">挑战圆满完成！</h3>
                <p className="text-xs text-white/60 mt-1">
                  最终得分: <span className="text-cyan-400 font-bold text-sm">{score} 分</span>
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="px-3 py-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  🪙 +{earnedCoins + 20} 金币
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  ⭐ +{Math.floor(score * 0.6) + 30} EXP
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={startGame}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 text-white font-bold text-xs flex items-center gap-1.5 shadow-md active:scale-95"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> 再玩一局
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white/80 text-xs border border-white/10"
                >
                  返回创作
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
