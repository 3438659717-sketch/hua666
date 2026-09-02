import React, { useEffect, useRef } from "react";
import { PixelPetType, PetAccessory } from "../../data/petData";
import { renderKawaiiPixelPet } from "../../data/kawaiiPixelPetArt";

export interface RealisticPetCanvasProps {
  species: PixelPetType;
  accessory?: PetAccessory;
  frame?: string;
  size?: number;
  className?: string;
  isBlinking?: boolean;
  activity?: string;
  activityStep?: number;
  facingLeft?: boolean;
  renderMode?: "realistic" | "pixel";
  isInteractive?: boolean;
}

export const RealisticPetCanvas: React.FC<RealisticPetCanvasProps> = ({
  species,
  accessory = "none" as PetAccessory,
  frame = "idle1",
  size = 80,
  className = "",
  isBlinking = false,
  activity = "none",
  activityStep = 0,
  facingLeft = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Retina support (2x resolution for ultra-sharp pixel edges)
    const scaleFactor = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 2, 2) : 2;
    canvas.width = size * scaleFactor;
    canvas.height = size * scaleFactor;

    ctx.imageSmoothingEnabled = false;
    ctx.save();
    ctx.scale(scaleFactor, scaleFactor);

    renderKawaiiPixelPet({
      ctx,
      size,
      species,
      frame,
      accessory,
      isBlinking,
      time: performance.now(),
      activity,
      activityStep,
      facingLeft,
      isHappy: frame === "happy",
    });

    ctx.restore();
  }, [species, accessory, frame, size, isBlinking, activity, activityStep, facingLeft]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        imageRendering: "pixelated",
        filter: "drop-shadow(0 6px 12px rgba(0, 0, 0, 0.18))",
      }}
      className={`transition-transform duration-200 select-none pointer-events-none pixelated ${className}`}
    />
  );
};
