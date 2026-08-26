import React, { useRef, useState } from "react";
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
  | "teal";

interface TiltGlassCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // max tilt degrees (default 6.5)
  iridescentBorder?: boolean;
  spotlightRefraction?: boolean;
  themeColor?: CardThemeColor;
  onClick?: () => void;
  id?: string;
}

export const TiltGlassCard: React.FC<TiltGlassCardProps> = ({
  children,
  className = "",
  maxTilt = 6.5,
  iridescentBorder = false,
  spotlightRefraction = true,
  themeColor = "blue",
  onClick,
  id,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth rotational spring damping
  const springX = useSpring(mouseX, { stiffness: 220, damping: 24 });
  const springY = useSpring(mouseY, { stiffness: 220, damping: 24 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-maxTilt, maxTilt]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // Normalised between -0.5 and 0.5
    mouseX.set(x - 0.5);
    mouseY.set(y - 0.5);

    // Direct DOM CSS variable update - zero React re-render overhead!
    cardRef.current.style.setProperty("--spot-x", `${(x * 100).toFixed(1)}%`);
    cardRef.current.style.setProperty("--spot-y", `${(y * 100).toFixed(1)}%`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const getThemeHighlight = () => {
    switch (themeColor) {
      case "cyan":
        return "radial-gradient(500px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(56, 189, 248, 0.14), rgba(139, 92, 246, 0.05) 40%, transparent 70%)";
      case "amber":
        return "radial-gradient(500px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(251, 191, 36, 0.14), rgba(244, 114, 182, 0.05) 40%, transparent 70%)";
      case "emerald":
        return "radial-gradient(500px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(52, 211, 153, 0.14), rgba(56, 189, 248, 0.05) 40%, transparent 70%)";
      case "purple":
        return "radial-gradient(500px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(167, 139, 250, 0.15), rgba(244, 114, 182, 0.05) 40%, transparent 70%)";
      case "rose":
        return "radial-gradient(500px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(251, 113, 133, 0.14), rgba(251, 191, 36, 0.05) 40%, transparent 70%)";
      case "sky":
        return "radial-gradient(500px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(56, 189, 248, 0.14), rgba(129, 140, 248, 0.05) 40%, transparent 70%)";
      case "pink":
        return "radial-gradient(500px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(244, 114, 182, 0.14), rgba(192, 132, 252, 0.05) 40%, transparent 70%)";
      case "teal":
        return "radial-gradient(500px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(45, 212, 191, 0.14), rgba(56, 189, 248, 0.05) 40%, transparent 70%)";
      default:
        return "radial-gradient(500px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(96, 165, 250, 0.14), rgba(167, 139, 250, 0.05) 40%, transparent 70%)";
    }
  };

  return (
    <div
      style={{ perspective: 1400 }}
      className="relative"
    >
      <motion.div
        ref={cardRef}
        id={id}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        className={`relative rounded-2xl ultra-acrylic-glass glass-reflection glass-bevel-edge caustic-reflection-glare transition-[box-shadow,border-color,background-color] duration-300 ${
          iridescentBorder ? "border-iridescent" : ""
        } ${className}`}
      >
        {/* Real Light Refraction Highlight inside the glass pane */}
        {spotlightRefraction && (
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 z-10"
            style={
              {
                background: getThemeHighlight(),
                opacity: isHovered ? 1 : 0,
              } as React.CSSProperties
            }
          />
        )}

        {/* Specular White Top Rim Glare with Heavy Crystal Accent & Laser Shimmer */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none rounded-t-2xl z-10 overflow-hidden">
          <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent laser-shimmer-sweep opacity-75 shadow-[0_0_8px_#67e8f9]" />
        </div>

        {/* Floating Foreground Cosmic Star Flare in Corner */}
        <div className="absolute -top-1.5 -right-1.5 w-4 h-4 pointer-events-none z-20 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#38bdf8] cosmic-star-flare" />
          <div className="absolute w-3 h-[1px] bg-cyan-200/80 cosmic-star-flare" />
          <div className="absolute h-3 w-[1px] bg-cyan-200/80 cosmic-star-flare" />
        </div>

        {/* Specular Left Edge Chamfer Glare */}
        <div className="absolute left-0 inset-y-0 w-[1.5px] bg-gradient-to-b from-white/40 via-white/15 to-transparent pointer-events-none rounded-l-2xl z-10" />

        {/* Specular Bottom Subtle Reflection */}
        <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none rounded-b-2xl z-10" />

        {/* 3D Depth Projected Content */}
        <div
          style={{
            transform: "translateZ(18px)",
            transformStyle: "preserve-3d",
          }}
          className="relative z-10 w-full h-full"
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
};
