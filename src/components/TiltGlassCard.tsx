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
  maxTilt?: number; // max tilt degrees (default 4.5 for refined physical feel)
  iridescentBorder?: boolean;
  spotlightRefraction?: boolean;
  themeColor?: CardThemeColor;
  onClick?: () => void;
  id?: string;
}

export const TiltGlassCard: React.FC<TiltGlassCardProps> = ({
  children,
  className = "",
  maxTilt = 4.5,
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

  // HyperOS Alive Spring Damping
  const springX = useSpring(mouseX, { stiffness: 260, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 260, damping: 28 });

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

  // Pure optical light reflection without aggressive neon tint
  const getThemeHighlight = () => {
    switch (themeColor) {
      case "cyan":
        return "radial-gradient(400px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(56, 189, 248, 0.08), transparent 70%)";
      case "amber":
      case "orange":
        return "radial-gradient(400px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(255, 105, 0, 0.08), transparent 70%)";
      case "emerald":
        return "radial-gradient(400px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(0, 210, 135, 0.08), transparent 70%)";
      case "purple":
        return "radial-gradient(400px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(120, 72, 255, 0.08), transparent 70%)";
      case "rose":
      case "pink":
        return "radial-gradient(400px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(251, 113, 133, 0.08), transparent 70%)";
      case "teal":
        return "radial-gradient(400px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(45, 212, 191, 0.08), transparent 70%)";
      default:
        return "radial-gradient(400px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(0, 119, 250, 0.08), transparent 70%)";
    }
  };

  return (
    <div
      style={{ perspective: isTouchDevice ? "none" : 1400 }}
      className="relative"
    >
      <motion.div
        ref={cardRef}
        id={id}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        style={
          isTouchDevice
            ? { willChange: "auto" }
            : {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                willChange: "transform",
              }
        }
        className={`relative rounded-[26px] hyper-glass hyper-rim-glare transition-[box-shadow,border-color,background-color] duration-300 ${
          iridescentBorder ? "border-white/[0.14]" : "border-white/[0.08]"
        } ${className}`}
      >
        {/* Optical Frosted Light Refraction Inside Glass */}
        {spotlightRefraction && !isTouchDevice && (
          <div
            className="absolute inset-0 rounded-[26px] pointer-events-none transition-opacity duration-300 z-10"
            style={
              {
                background: getThemeHighlight(),
                opacity: isHovered ? 1 : 0,
              } as React.CSSProperties
            }
          />
        )}

        {/* Specular Micro-Chamfer Glare on Top Rim */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none rounded-t-[26px] z-10" />

        {/* Content Container */}
        <div
          style={
            isTouchDevice
              ? undefined
              : {
                  transform: "translateZ(8px)",
                  transformStyle: "preserve-3d",
                }
          }
          className="relative z-10 w-full h-full"
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
};
