import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export type CardThemeColor =
  | "cyan"
  | "amber"
  | "emerald"
  | "purple"
  | "blue"
  | "rose"
  | "sky"
  | "pink"
  | "teal"
  | "orange";

interface TiltGlassCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // max tilt degrees (default 5.5 for rich 3D perspective)
  iridescentBorder?: boolean;
  spotlightRefraction?: boolean;
  themeColor?: CardThemeColor;
  onClick?: () => void;
  id?: string;
}

export const TiltGlassCard: React.FC<TiltGlassCardProps> = ({
  children,
  className = "",
  maxTilt = 5.5,
  iridescentBorder = false,
  spotlightRefraction = true,
  themeColor = "blue",
  onClick,
  id,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isTouch = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;
      setIsTouchDevice(isTouch);
    }
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // HyperOS Alive Spring Damping - Q-弹阻尼回弹
  const springX = useSpring(mouseX, { stiffness: 320, damping: 24, mass: 0.8 });
  const springY = useSpring(mouseY, { stiffness: 320, damping: 24, mass: 0.8 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-maxTilt, maxTilt]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // Normalised between -0.5 and 0.5
    mouseX.set(x - 0.5);
    mouseY.set(y - 0.5);

    cardRef.current.style.setProperty("--spot-x", `${(x * 100).toFixed(1)}%`);
    cardRef.current.style.setProperty("--spot-y", `${(y * 100).toFixed(1)}%`);
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) {
      setIsHovered(false);
      mouseX.set(0);
      mouseY.set(0);
    }
  };

  // Sapphire Crystal dynamic multi-layer optical refraction shader simulation
  const getThemeHighlight = () => {
    switch (themeColor) {
      case "cyan":
        return "radial-gradient(460px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(56, 189, 248, 0.16), rgba(6, 182, 212, 0.05) 50%, transparent 80%)";
      case "amber":
      case "orange":
        return "radial-gradient(460px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(255, 105, 0, 0.16), rgba(245, 158, 11, 0.05) 50%, transparent 80%)";
      case "emerald":
        return "radial-gradient(460px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(0, 210, 135, 0.16), rgba(16, 185, 129, 0.05) 50%, transparent 80%)";
      case "purple":
        return "radial-gradient(460px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(120, 72, 255, 0.16), rgba(168, 85, 247, 0.05) 50%, transparent 80%)";
      case "rose":
      case "pink":
        return "radial-gradient(460px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(251, 113, 133, 0.16), rgba(244, 63, 94, 0.05) 50%, transparent 80%)";
      case "teal":
        return "radial-gradient(460px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(45, 212, 191, 0.16), rgba(20, 184, 166, 0.05) 50%, transparent 80%)";
      default:
        return "radial-gradient(460px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(0, 119, 250, 0.16), rgba(56, 189, 248, 0.05) 50%, transparent 80%)";
    }
  };

  return (
    <div className="relative">
      <motion.div
        ref={cardRef}
        id={id}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        whileHover={{ y: -3, transition: { duration: 0.2, ease: "easeOut" } }}
        whileTap={{ scale: 0.985 }}
        className={`relative rounded-[24px] hyper-glass chromatic-dispersion-edge hyper-rim-glare transition-[box-shadow,border-color,background-color] duration-200 ${
          iridescentBorder ? "border-white/40 shadow-[0_0_24px_rgba(255,255,255,0.18)]" : "border-white/[0.14]"
        } ${className}`}
      >
        {/* Dynamic Ambient Refraction Accent on Hover */}
        {spotlightRefraction && !isTouchDevice && (
          <div
            className="absolute inset-0 rounded-[24px] pointer-events-none transition-opacity duration-200 z-0"
            style={
              {
                background: getThemeHighlight(),
                opacity: isHovered ? 0.9 : 0,
              } as React.CSSProperties
            }
          />
        )}

        {/* Specular Micro-Chamfer Glare on Top Rim */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-300/40 via-white/90 via-rose-300/40 to-transparent pointer-events-none rounded-t-[24px] z-10" />

        {/* Content Container - 100% Pixel Aligned for Crystal Clear Text */}
        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
};
