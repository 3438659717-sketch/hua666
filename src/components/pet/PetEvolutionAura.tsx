import React from "react";
import { motion } from "motion/react";

interface PetEvolutionAuraProps {
  level: number;
  affinity: number;
  size: number;
  isEnabled?: boolean;
}

export const PetEvolutionAura: React.FC<PetEvolutionAuraProps> = ({
  level,
  affinity,
  size,
  isEnabled = true,
}) => {
  if (!isEnabled) return null;

  // Derive aura tier
  const tier =
    level >= 13 || affinity >= 900
      ? 4 // Celestial Sovereign (神级银河星冕)
      : level >= 9 || affinity >= 600
      ? 3 // Viral Supernova (爆款超新星)
      : level >= 5 || affinity >= 300
      ? 2 // Cyber Dual Orbit (赛博双轨霓虹)
      : 1; // Stardust Halo (微光星屑)

  const auraSize = Math.round(size * 1.35);

  return (
    <div
      style={{
        width: `${auraSize}px`,
        height: `${auraSize}px`,
      }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 flex items-center justify-center"
    >
      {/* Tier 1: Stardust Halo */}
      {tier === 1 && (
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360, scale: [0.95, 1.05, 0.95] }}
            transition={{ rotate: { duration: 10, repeat: Infinity, ease: "linear" }, scale: { duration: 3, repeat: Infinity } }}
            className="w-full h-full rounded-full border border-dashed border-cyan-400/30 opacity-60 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
          />
          <motion.div
            animate={{ opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 2.2, repeat: Infinity }}
            className="absolute -top-1 w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#38bdf8]"
          />
        </div>
      )}

      {/* Tier 2: Cyber Dual Orbit */}
      {tier === 2 && (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            className="w-full h-full rounded-full border border-cyan-400/50 shadow-[0_0_20px_rgba(34,211,238,0.35)]"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_10px_#22d3ee]" />
          </motion.div>

          {/* Inner Reverse Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute w-[82%] h-[82%] rounded-full border border-dashed border-pink-400/50 shadow-[0_0_15px_rgba(244,114,182,0.3)]"
          >
            <div className="absolute bottom-0 right-1/4 w-1.5 h-1.5 rounded-full bg-pink-300 shadow-[0_0_8px_#f472b6]" />
          </motion.div>
        </div>
      )}

      {/* Tier 3: Viral Supernova */}
      {tier === 3 && (
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360, scale: [0.98, 1.06, 0.98] }}
            transition={{ rotate: { duration: 6, repeat: Infinity, ease: "linear" }, scale: { duration: 2.5, repeat: Infinity } }}
            className="w-full h-full rounded-full border-2 border-amber-400/60 shadow-[0_0_25px_rgba(251,191,36,0.45)]"
          >
            <div className="absolute top-1 left-2 w-2.5 h-2.5 rounded-full bg-amber-300 shadow-[0_0_12px_#fbbf24] animate-pulse" />
            <div className="absolute bottom-1 right-2 w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_10px_#f97316]" />
          </motion.div>

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute w-[86%] h-[86%] rounded-full border border-cyan-400/60 shadow-[0_0_15px_rgba(34,211,238,0.4)]"
          >
            <div className="absolute top-0 right-1/3 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_8px_#38bdf8]" />
          </motion.div>
        </div>
      )}

      {/* Tier 4: Celestial Sovereign (God-Tier Dragon/Star Sovereign Halo) */}
      {tier === 4 && (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Glowing Sunburst Crown */}
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.08, 1] }}
            transition={{ rotate: { duration: 8, repeat: Infinity, ease: "linear" }, scale: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
            className="w-full h-full rounded-full border-2 border-amber-300/80 shadow-[0_0_35px_rgba(251,191,36,0.6)]"
          >
            {/* 4 Orbiting Golden Diamond Stars */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-amber-300 shadow-[0_0_14px_#fbbf24]" />
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-amber-300 shadow-[0_0_14px_#fbbf24]" />
            <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 rotate-45 bg-cyan-300 shadow-[0_0_14px_#22d3ee]" />
            <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 rotate-45 bg-purple-300 shadow-[0_0_14px_#c084fc]" />
          </motion.div>

          {/* Inner Cosmic Rings */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
            className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-cyan-300/80 shadow-[0_0_20px_rgba(34,211,238,0.5)]"
          />

          <motion.div
            animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-radial from-amber-400/20 via-transparent to-transparent blur-xs"
          />
        </div>
      )}
    </div>
  );
};
