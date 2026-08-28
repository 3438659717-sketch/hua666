import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { X, Check, Lock, Sparkles, Shirt, PawPrint } from "lucide-react";
import {
  PixelPetType,
  PetAccessory,
  PIXEL_SPRITES,
  ACCESSORY_SPRITES,
} from "../../data/petData";
import { PetGrowthState } from "../../data/petGrowthStorage";
import { playPetSound } from "../../utils/petSound";

interface PetWardrobeModalProps {
  isOpen: boolean;
  onClose: () => void;
  state: PetGrowthState;
  onUpdateState: (updater: (prev: PetGrowthState) => PetGrowthState) => void;
  onShowToast: (msg: string, type?: "success" | "info" | "error") => void;
}

export const PetWardrobeModal: React.FC<PetWardrobeModalProps> = ({
  isOpen,
  onClose,
  state,
  onUpdateState,
  onShowToast,
}) => {
  const [activeTab, setActiveTab] = useState<"animals" | "costumes">("animals");
  const [previewPet, setPreviewPet] = useState<PixelPetType>(state.selectedPet);
  const [previewAcc, setPreviewAcc] = useState<PetAccessory>(state.currentAccessory);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Sync state when modal opens
  useEffect(() => {
    if (isOpen) {
      setPreviewPet(state.selectedPet);
      setPreviewAcc(state.currentAccessory);
    }
  }, [isOpen, state.selectedPet, state.currentAccessory]);

  // Render 64x64 live canvas preview of the pixel pet with costume
  useEffect(() => {
    if (!isOpen || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, 64, 64);
    ctx.imageSmoothingEnabled = false;

    const petDef = PIXEL_SPRITES[previewPet] || PIXEL_SPRITES.cat;
    const frame = petDef.frames.idle1;
    const palette = petDef.palette;
    const pixelSize = 4; // 16x16 -> 64x64

    // Draw Pet
    for (let r = 0; r < 16; r++) {
      const row = frame[r] || "";
      for (let c = 0; c < 16; c++) {
        const char = row[c] || " ";
        const color = palette[char];
        if (color && color !== "transparent") {
          ctx.fillStyle = color;
          ctx.fillRect(c * pixelSize, r * pixelSize, pixelSize, pixelSize);
        }
      }
    }

    // Draw Accessory Overlay
    const accDef = ACCESSORY_SPRITES[previewAcc];
    if (accDef && accDef.rows.length > 0) {
      accDef.rows.forEach(({ r, c, color }) => {
        ctx.fillStyle = color;
        ctx.fillRect(c * pixelSize, r * pixelSize, pixelSize, pixelSize);
      });
    }
  }, [isOpen, previewPet, previewAcc]);

  if (!isOpen) return null;

  const currentPetDef = PIXEL_SPRITES[previewPet];

  // Select / equip animal
  const handleSelectAnimal = (petKey: PixelPetType) => {
    setPreviewPet(petKey);
    playPetSound("click");
    onUpdateState((prev) => ({
      ...prev,
      selectedPet: petKey,
    }));
    onShowToast(`🐾 已成功切换桌宠伙伴为【${PIXEL_SPRITES[petKey].name}】！`, "success");
  };

  // Buy or equip accessory
  const handleSelectAccessory = (accKey: PetAccessory) => {
    setPreviewAcc(accKey);
    const accDef = ACCESSORY_SPRITES[accKey];
    const isUnlocked = state.unlockedAccessories.includes(accKey);

    if (isUnlocked) {
      playPetSound("click");
      onUpdateState((prev) => ({
        ...prev,
        currentAccessory: accKey,
      }));
      onShowToast(`✨ 已成功佩戴装扮【${accDef.name}】！`, "success");
      return;
    }

    // Check level requirement
    if (state.level < accDef.unlockLevel) {
      onShowToast(`🔒 该装扮需要桌宠等级达到 Lv.${accDef.unlockLevel} 解锁！`, "error");
      return;
    }

    // Check coins
    if (state.coins < accDef.price) {
      onShowToast(`🪙 星际金币不足（需要 ${accDef.price} 金币），快去完成任务赚取吧！`, "error");
      return;
    }

    // Purchase
    playPetSound("levelUp");
    onUpdateState((prev) => ({
      ...prev,
      coins: prev.coins - accDef.price,
      unlockedAccessories: [...prev.unlockedAccessories, accKey],
      currentAccessory: accKey,
    }));
    onShowToast(`🎉 成功解锁并佩戴【${accDef.name}】！`, "success");
  };

  const animalKeys = Object.keys(PIXEL_SPRITES) as PixelPetType[];
  const accessoryKeys = Object.keys(ACCESSORY_SPRITES) as PetAccessory[];

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
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-500/20 to-pink-500/20 border border-purple-400/30 flex items-center justify-center text-xl">
              🎨
            </div>
            <div>
              <h2 className="font-bold text-base sm:text-lg text-white font-sans">
                萌宠宇宙衣橱与伙伴中心
              </h2>
              <p className="text-xs text-white/50">
                自由切换 11 种萌态灵兽与 18 套专属像素潮流服饰
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

        {/* Live Preview Bar */}
        <div className="p-4 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-950/90 border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20 bg-slate-950 rounded-2xl border border-cyan-500/30 flex items-center justify-center p-2 shadow-inner overflow-hidden">
              <div className="absolute inset-0 bg-cyan-500/5 backdrop-blur-xs" />
              <canvas
                ref={canvasRef}
                width={64}
                height={64}
                className="w-16 h-16 pixelated z-10 drop-shadow-md"
                style={{ imageRendering: "pixelated" }}
              />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-white">{currentPetDef.name}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono">
                  {ACCESSORY_SPRITES[previewAcc].name}
                </span>
              </div>
              <p className="text-xs text-cyan-300/80 mt-0.5 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> {currentPetDef.buff}
              </p>
              <p className="text-[11px] text-white/40 mt-0.5">{currentPetDef.intro}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs">
            <div className="px-3 py-1.5 rounded-xl bg-slate-800 border border-white/10">
              <span className="text-white/50">我的金币: </span>
              <span className="text-amber-400 font-bold">🪙 {state.coins}</span>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-slate-800 border border-white/10">
              <span className="text-white/50">当前等级: </span>
              <span className="text-cyan-400 font-bold">Lv.{state.level}</span>
            </div>
          </div>
        </div>

        {/* Tab Toggle */}
        <div className="flex border-b border-white/10 bg-slate-950/30 px-5 pt-2 gap-2 text-xs font-medium">
          <button
            onClick={() => {
              setActiveTab("animals");
              playPetSound("click");
            }}
            className={`pb-2.5 px-4 flex items-center gap-2 border-b-2 transition-all ${
              activeTab === "animals"
                ? "border-cyan-400 text-cyan-300 font-bold"
                : "border-transparent text-white/50 hover:text-white/80"
            }`}
          >
            <PawPrint className="w-4 h-4" /> 🐾 萌宠物种 ({animalKeys.length} 种)
          </button>
          <button
            onClick={() => {
              setActiveTab("costumes");
              playPetSound("click");
            }}
            className={`pb-2.5 px-4 flex items-center gap-2 border-b-2 transition-all ${
              activeTab === "costumes"
                ? "border-purple-400 text-purple-300 font-bold"
                : "border-transparent text-white/50 hover:text-white/80"
            }`}
          >
            <Shirt className="w-4 h-4" /> 👗 像素服装与配饰 ({accessoryKeys.length} 款)
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-5 overflow-y-auto flex-1 space-y-4 max-h-[55vh]">
          {/* ANIMALS LIST */}
          {activeTab === "animals" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {animalKeys.map((petKey) => {
                const def = PIXEL_SPRITES[petKey];
                const isSelected = state.selectedPet === petKey;
                return (
                  <button
                    key={petKey}
                    onClick={() => handleSelectAnimal(petKey)}
                    className={`p-3.5 rounded-xl border text-left transition-all relative overflow-hidden flex flex-col justify-between group ${
                      isSelected
                        ? "bg-cyan-950/40 border-cyan-400 ring-1 ring-cyan-400/50 shadow-lg shadow-cyan-950/50"
                        : "bg-slate-800/60 border-white/10 hover:border-white/25 hover:bg-slate-800/80"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-3xl group-hover:scale-110 transition-transform">
                          {def.emoji}
                        </span>
                        {isSelected && (
                          <span className="px-2 py-0.5 rounded-full bg-cyan-500 text-black text-[10px] font-bold flex items-center gap-1">
                            <Check className="w-3 h-3" /> 伴随中
                          </span>
                        )}
                      </div>

                      <div className="mt-2 font-bold text-xs text-white">{def.name}</div>
                      <p className="text-[11px] text-white/50 mt-0.5 line-clamp-2">{def.intro}</p>
                    </div>

                    <div className="mt-2 pt-2 border-t border-white/10 text-[10px] text-cyan-300 font-medium">
                      ✨ {def.buff}
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* COSTUMES LIST */}
          {activeTab === "costumes" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {accessoryKeys.map((accKey) => {
                const acc = ACCESSORY_SPRITES[accKey];
                const isEquipped = state.currentAccessory === accKey;
                const isUnlocked = state.unlockedAccessories.includes(accKey);
                const canUnlockLevel = state.level >= acc.unlockLevel;
                const canAfford = state.coins >= acc.price;

                return (
                  <div
                    key={accKey}
                    className={`p-3.5 rounded-xl border flex flex-col justify-between transition-all ${
                      isEquipped
                        ? "bg-purple-950/40 border-purple-400 ring-1 ring-purple-400/50 shadow-lg"
                        : "bg-slate-800/60 border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-3xl">{acc.icon}</span>
                        {isEquipped ? (
                          <span className="px-2 py-0.5 rounded-full bg-purple-500 text-white text-[10px] font-bold flex items-center gap-1">
                            <Check className="w-3 h-3" /> 已佩戴
                          </span>
                        ) : isUnlocked ? (
                          <span className="text-[10px] text-emerald-400 font-mono font-medium">已拥有</span>
                        ) : (
                          <span className="text-[10px] text-amber-400 font-mono font-bold">
                            🪙 {acc.price}
                          </span>
                        )}
                      </div>

                      <div className="mt-2 font-bold text-xs text-white">{acc.name}</div>
                      <p className="text-[11px] text-white/50 mt-0.5">{acc.desc}</p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[10px] text-white/40 font-mono">
                        {acc.unlockLevel > 1 ? `需 Lv.${acc.unlockLevel}` : "无等级限制"}
                      </span>

                      {isEquipped ? (
                        <button
                          onClick={() => handleSelectAccessory("none")}
                          className="px-2.5 py-1 rounded-lg bg-white/10 text-white/70 hover:text-white text-[11px]"
                        >
                          卸下
                        </button>
                      ) : isUnlocked ? (
                        <button
                          onClick={() => handleSelectAccessory(accKey)}
                          className="px-3 py-1 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-[11px] font-bold shadow-sm"
                        >
                          佩戴
                        </button>
                      ) : (
                        <button
                          onClick={() => handleSelectAccessory(accKey)}
                          disabled={!canUnlockLevel || !canAfford}
                          className={`px-3 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 transition-all ${
                            canUnlockLevel && canAfford
                              ? "bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 text-black shadow-md shadow-amber-500/20"
                              : "bg-white/10 text-white/30 cursor-not-allowed"
                          }`}
                        >
                          {!canUnlockLevel ? (
                            <>
                              <Lock className="w-3 h-3" /> 等级不足
                            </>
                          ) : (
                            `解锁 (🪙${acc.price})`
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
