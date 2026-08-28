import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";

interface RippleEffect {
  id: number;
  x: number;
  y: number;
  size: number;
}

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  magneticStrength?: number; // 0.1 to 0.4
  className?: string;
  variant?: "primary" | "secondary" | "glass" | "vitality" | "subtle";
  colorAccent?: "orange" | "cyan" | "amber" | "emerald" | "purple" | "blue" | "rose";
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  magneticStrength = 0.22,
  className = "",
  variant = "glass",
  colorAccent = "orange",
  onClick,
  disabled,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [ripples, setRipples] = useState<RippleEffect[]>([]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768);
    }
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // HyperOS Spring Damping (natural physical inertia)
  const springX = useSpring(mouseX, { stiffness: 320, damping: 22, mass: 0.08 });
  const springY = useSpring(mouseY, { stiffness: 320, damping: 22, mass: 0.08 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || isTouchDevice || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    mouseX.set(distanceX * magneticStrength);
    mouseY.set(distanceY * magneticStrength);
  };

  const handleMouseLeave = () => {
    if (isTouchDevice) return;
    setIsHovered(false);
    setIsPressed(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleMouseEnter = () => {
    if (!disabled && !isTouchDevice) setIsHovered(true);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || !buttonRef.current) return;
    setIsPressed(true);

    const rect = buttonRef.current.getBoundingClientRect();
    const rippleX = e.clientX - rect.left;
    const rippleY = e.clientY - rect.top;
    const maxDim = Math.max(rect.width, rect.height) * 2;

    const newRipple: RippleEffect = {
      id: Date.now() + Math.random(),
      x: rippleX,
      y: rippleY,
      size: maxDim,
    };

    setRipples((prev) => [...prev.slice(-2), newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 450);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  return (
    <motion.button
      ref={buttonRef}
      style={
        isTouchDevice
          ? undefined
          : {
              x: springX,
              y: springY,
            }
      }
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 450, damping: 20 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={onClick}
      disabled={disabled}
      className={`relative inline-flex items-center justify-center transition-all duration-200 cursor-pointer select-none overflow-hidden touch-manipulation font-medium ${className}`}
      {...(props as any)}
    >
      {/* Subtle Optical Micro-Sheen on Hover */}
      {isHovered && !disabled && !isTouchDevice && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 pointer-events-none overflow-hidden rounded-[inherit]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.12] to-transparent -translate-x-full animate-[textShimmerSweep_1.6s_infinite]" />
        </motion.div>
      )}

      {/* Ripple Feedback */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute pointer-events-none rounded-full bg-white/20 animate-ping"
          style={{
            left: ripple.x - ripple.size / 2,
            top: ripple.y - ripple.size / 2,
            width: ripple.size,
            height: ripple.size,
            animationDuration: "450ms",
            animationTimingFunction: "cubic-bezier(0.2, 0.9, 0.3, 1)",
          }}
        />
      ))}

      <span className="relative z-10 flex items-center justify-center gap-1.5 w-full">
        {children}
      </span>
    </motion.button>
  );
};
