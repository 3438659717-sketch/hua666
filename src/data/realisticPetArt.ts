// Ultra High-Definition Realistic Pet Art Engine
// Provides biological anatomy, realistic fur shading, glassy optical eyes, dynamic breathing, and HD vector accessories.

import { PixelPetType, PetAccessory } from "./petData";

export interface RenderPetOptions {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  species: PixelPetType;
  frame: string;
  accessory: PetAccessory;
  isBlinking?: boolean;
  time?: number; // timestamp in ms for smooth breathing & physics
  activity?: string;
  activityStep?: number;
  facingLeft?: boolean;
  isHappy?: boolean;
}

// Helper: Draw smooth rounded path
function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

// Helper: Realistic Glassy Eye with reflections
function drawRealisticEye(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
  irisColor: string,
  pupilColor: string = "#090d16",
  isClosed: boolean = false,
  isHappyShape: boolean = false,
  lookOffsetX: number = 0,
  lookOffsetY: number = 0
) {
  ctx.save();
  if (isClosed) {
    // Closed relaxed eyelid curve
    ctx.strokeStyle = pupilColor;
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.arc(cx, cy + 1, r * 0.9, 0.15 * Math.PI, 0.85 * Math.PI, false);
    ctx.stroke();
    ctx.restore();
    return;
  }

  if (isHappyShape) {
    // Happy squinting crescent arc (anime/kawaii realism)
    ctx.strokeStyle = pupilColor;
    ctx.lineWidth = 3.5;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.arc(cx, cy + 3, r * 1.1, 1.15 * Math.PI, 1.85 * Math.PI, false);
    ctx.stroke();

    // Cute blush beneath
    ctx.fillStyle = "rgba(244, 63, 94, 0.35)";
    ctx.beginPath();
    ctx.ellipse(cx, cy + r + 4, r * 1.2, r * 0.5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    return;
  }

  // 1. Sclera / Base Eye Shape with soft gradient
  const eyeGrad = ctx.createRadialGradient(cx, cy, r * 0.2, cx, cy, r);
  eyeGrad.addColorStop(0, "#ffffff");
  eyeGrad.addColorStop(0.85, "#f1f5f9");
  eyeGrad.addColorStop(1, "#cbd5e1");

  ctx.fillStyle = eyeGrad;
  ctx.beginPath();
  ctx.ellipse(cx, cy, r * 0.95, r, 0, 0, Math.PI * 2);
  ctx.fill();

  // Subtle upper eyelid shadow
  ctx.fillStyle = "rgba(15, 23, 42, 0.22)";
  ctx.beginPath();
  ctx.ellipse(cx, cy - r * 0.2, r * 0.92, r * 0.7, 0, Math.PI, 0);
  ctx.fill();

  // 2. Rich Colored Iris
  const irisX = cx + lookOffsetX;
  const irisY = cy + lookOffsetY;
  const irisRadius = r * 0.72;

  const irisGrad = ctx.createRadialGradient(
    irisX - irisRadius * 0.25,
    irisY - irisRadius * 0.25,
    irisRadius * 0.1,
    irisX,
    irisY,
    irisRadius
  );
  irisGrad.addColorStop(0, irisColor);
  irisGrad.addColorStop(0.8, irisColor);
  irisGrad.addColorStop(1, "#020617");

  ctx.fillStyle = irisGrad;
  ctx.beginPath();
  ctx.arc(irisX, irisY, irisRadius, 0, Math.PI * 2);
  ctx.fill();

  // 3. Deep Pupil
  const pupilRadius = irisRadius * 0.52;
  ctx.fillStyle = pupilColor;
  ctx.beginPath();
  ctx.arc(irisX, irisY, pupilRadius, 0, Math.PI * 2);
  ctx.fill();

  // 4. Double Specular Highlights (Lifelike Glossy Corneal Reflections)
  // Primary big highlight
  ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
  ctx.beginPath();
  ctx.arc(irisX - pupilRadius * 0.45, irisY - pupilRadius * 0.45, pupilRadius * 0.48, 0, Math.PI * 2);
  ctx.fill();

  // Secondary soft ambient glint
  ctx.fillStyle = "rgba(255, 255, 255, 0.65)";
  ctx.beginPath();
  ctx.arc(irisX + pupilRadius * 0.5, irisY + pupilRadius * 0.4, pupilRadius * 0.26, 0, Math.PI * 2);
  ctx.fill();

  // Delicate upper eyelid line
  ctx.strokeStyle = "rgba(15, 23, 42, 0.85)";
  ctx.lineWidth = 1.8;
  ctx.beginPath();
  ctx.arc(cx, cy - 1, r * 1.05, 1.15 * Math.PI, 1.85 * Math.PI, false);
  ctx.stroke();

  ctx.restore();
}

// -------------------------------------------------------------
// INDIVIDUAL SPECIES REALISTIC PAINTERS
// -------------------------------------------------------------

// 1. Shiba Inu (柴犬 Hachi)
function drawRealisticShiba(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  frame: string,
  isBlinking: boolean,
  breathe: number,
  legOffset: number,
  tailAngle: number
) {
  const cx = w / 2;
  const cy = h / 2 + 6;

  const isSleep = frame === "sleep";
  const isHappy = frame === "happy";
  const isJump = frame === "jump";

  // Sickle Curled Tail
  ctx.save();
  ctx.translate(cx - 28, cy + 4);
  ctx.rotate(tailAngle);
  // Tail outer ginger
  const tailGrad = ctx.createLinearGradient(0, 0, -18, -22);
  tailGrad.addColorStop(0, "#d97706");
  tailGrad.addColorStop(0.7, "#b45309");
  tailGrad.addColorStop(1, "#fef3c7");
  ctx.fillStyle = tailGrad;
  ctx.beginPath();
  ctx.arc(0, 0, 16, 0.5 * Math.PI, 1.85 * Math.PI, false);
  ctx.lineWidth = 10;
  ctx.strokeStyle = tailGrad;
  ctx.lineCap = "round";
  ctx.stroke();
  // White tip
  ctx.fillStyle = "#fffbeb";
  ctx.beginPath();
  ctx.arc(-8, -16, 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // Hind Body / Back
  const bodyGrad = ctx.createRadialGradient(cx, cy + 6, 8, cx, cy + 6, 30);
  bodyGrad.addColorStop(0, "#f59e0b");
  bodyGrad.addColorStop(0.65, "#d97706");
  bodyGrad.addColorStop(1, "#b45309");

  ctx.fillStyle = bodyGrad;
  ctx.beginPath();
  ctx.ellipse(cx, cy + 6 + (isJump ? -6 : 0), 28, 22 + breathe * 0.8, 0, 0, Math.PI * 2);
  ctx.fill();

  // White Urajiro Chest & Underbelly
  const chestGrad = ctx.createLinearGradient(cx, cy - 6, cx, cy + 24);
  chestGrad.addColorStop(0, "#ffffff");
  chestGrad.addColorStop(0.8, "#fef3c7");
  chestGrad.addColorStop(1, "#fde68a");
  ctx.fillStyle = chestGrad;
  ctx.beginPath();
  ctx.ellipse(cx, cy + 10, 16, 16 + breathe * 0.5, 0, 0, Math.PI * 2);
  ctx.fill();

  // Paws
  const pawColor = "#fffbeb";
  const pawShadow = "#d97706";
  // Left Front Leg
  ctx.fillStyle = pawColor;
  ctx.beginPath();
  ctx.ellipse(cx - 14, cy + 24 + legOffset, 6, 8, 0, 0, Math.PI * 2);
  ctx.fill();
  // Right Front Leg
  ctx.beginPath();
  ctx.ellipse(cx + 14, cy + 24 - legOffset, 6, 8, 0, 0, Math.PI * 2);
  ctx.fill();

  // Head
  const headY = cy - 14 + (isJump ? -6 : breathe * 0.4);
  const headGrad = ctx.createRadialGradient(cx, headY, 6, cx, headY, 26);
  headGrad.addColorStop(0, "#f59e0b");
  headGrad.addColorStop(0.7, "#d97706");
  headGrad.addColorStop(1, "#92400e");

  ctx.fillStyle = headGrad;
  ctx.beginPath();
  ctx.ellipse(cx, headY, 24, 21, 0, 0, Math.PI * 2);
  ctx.fill();

  // Ears (Erect Triangular with white/pink inner)
  // Left Ear
  ctx.save();
  ctx.translate(cx - 16, headY - 14);
  ctx.rotate(-0.2);
  ctx.fillStyle = "#b45309";
  ctx.beginPath();
  ctx.moveTo(-10, 8);
  ctx.lineTo(0, -18);
  ctx.lineTo(10, 8);
  ctx.closePath();
  ctx.fill();
  // Inner Ear Fluff
  ctx.fillStyle = "#fffbeb";
  ctx.beginPath();
  ctx.moveTo(-6, 6);
  ctx.lineTo(0, -12);
  ctx.lineTo(6, 6);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "#fda4af";
  ctx.beginPath();
  ctx.ellipse(0, 0, 3, 5, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // Right Ear
  ctx.save();
  ctx.translate(cx + 16, headY - 14);
  ctx.rotate(0.2);
  ctx.fillStyle = "#b45309";
  ctx.beginPath();
  ctx.moveTo(-10, 8);
  ctx.lineTo(0, -18);
  ctx.lineTo(10, 8);
  ctx.closePath();
  ctx.fill();
  // Inner Ear Fluff
  ctx.fillStyle = "#fffbeb";
  ctx.beginPath();
  ctx.moveTo(-6, 6);
  ctx.lineTo(0, -12);
  ctx.lineTo(6, 6);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "#fda4af";
  ctx.beginPath();
  ctx.ellipse(0, 0, 3, 5, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // White Urajiro Cheek Markings & Eyebrow Dots
  ctx.fillStyle = "#fffbeb";
  // Left Cheek
  ctx.beginPath();
  ctx.ellipse(cx - 13, headY + 7, 10, 10, -0.3, 0, Math.PI * 2);
  ctx.fill();
  // Right Cheek
  ctx.beginPath();
  ctx.ellipse(cx + 13, headY + 7, 10, 10, 0.3, 0, Math.PI * 2);
  ctx.fill();
  // Cute White Eyebrow Dots
  ctx.beginPath();
  ctx.arc(cx - 10, headY - 10, 3.2, 0, Math.PI * 2);
  ctx.arc(cx + 10, headY - 10, 3.2, 0, Math.PI * 2);
  ctx.fill();

  // Eyes
  const isClosedEye = isSleep || isBlinking;
  drawRealisticEye(ctx, cx - 11, headY - 1, 5.5, "#78350f", "#090d16", isClosedEye, isHappy);
  drawRealisticEye(ctx, cx + 11, headY - 1, 5.5, "#78350f", "#090d16", isClosedEye, isHappy);

  // Muzzle & Black Leather Nose
  ctx.fillStyle = "#fffbeb";
  ctx.beginPath();
  ctx.ellipse(cx, headY + 6, 8.5, 7.5, 0, 0, Math.PI * 2);
  ctx.fill();

  // Nose
  const noseGrad = ctx.createLinearGradient(cx, headY + 2, cx, headY + 7);
  noseGrad.addColorStop(0, "#334155");
  noseGrad.addColorStop(1, "#090d16");
  ctx.fillStyle = noseGrad;
  ctx.beginPath();
  ctx.ellipse(cx, headY + 3.8, 4.2, 3, 0, 0, Math.PI * 2);
  ctx.fill();
  // Nose shine
  ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
  ctx.beginPath();
  ctx.ellipse(cx - 1.2, headY + 2.8, 1.4, 0.8, -0.3, 0, Math.PI * 2);
  ctx.fill();

  // Mouth line & cute pink tongue if happy
  ctx.strokeStyle = "#334155";
  ctx.lineWidth = 1.6;
  ctx.beginPath();
  ctx.moveTo(cx, headY + 6.8);
  ctx.lineTo(cx, headY + 9);
  ctx.moveTo(cx, headY + 9);
  ctx.quadraticCurveTo(cx - 4, headY + 11.5, cx - 6, headY + 9.5);
  ctx.moveTo(cx, headY + 9);
  ctx.quadraticCurveTo(cx + 4, headY + 11.5, cx + 6, headY + 9.5);
  ctx.stroke();

  if (isHappy) {
    ctx.fillStyle = "#fb7185";
    ctx.beginPath();
    ctx.arc(cx, headY + 11, 3.5, 0, Math.PI);
    ctx.fill();
  }
}

// 2. Calico / Silky Cat (猫咪 Mochi)
function drawRealisticCat(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  frame: string,
  isBlinking: boolean,
  breathe: number,
  legOffset: number,
  tailAngle: number
) {
  const cx = w / 2;
  const cy = h / 2 + 6;
  const isSleep = frame === "sleep";
  const isHappy = frame === "happy";
  const isJump = frame === "jump";

  // Silky Long Cat Tail with soft sway
  ctx.save();
  ctx.translate(cx + 24, cy + 12);
  ctx.rotate(tailAngle * 1.3);
  const tailGrad = ctx.createLinearGradient(0, 0, 18, -28);
  tailGrad.addColorStop(0, "#f8fafc");
  tailGrad.addColorStop(0.5, "#ea580c");
  tailGrad.addColorStop(1, "#334155");
  ctx.strokeStyle = tailGrad;
  ctx.lineWidth = 6.5;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(12, -8, 22, -18, 14, -32);
  ctx.stroke();
  ctx.restore();

  // Body
  const bodyGrad = ctx.createRadialGradient(cx, cy + 8, 6, cx, cy + 8, 28);
  bodyGrad.addColorStop(0, "#ffffff");
  bodyGrad.addColorStop(0.85, "#f1f5f9");
  bodyGrad.addColorStop(1, "#cbd5e1");
  ctx.fillStyle = bodyGrad;
  ctx.beginPath();
  ctx.ellipse(cx, cy + 8 + (isJump ? -6 : 0), 26, 21 + breathe * 0.7, 0, 0, Math.PI * 2);
  ctx.fill();

  // Calico Orange Back Patch
  ctx.fillStyle = "#f97316";
  ctx.beginPath();
  ctx.ellipse(cx - 10, cy + 5, 12, 10, -0.4, 0, Math.PI * 2);
  ctx.fill();

  // Calico Dark Slate Patch
  ctx.fillStyle = "#334155";
  ctx.beginPath();
  ctx.ellipse(cx + 12, cy + 10, 9, 8, 0.3, 0, Math.PI * 2);
  ctx.fill();

  // Soft Front Paws
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.ellipse(cx - 12, cy + 25 + legOffset, 5.5, 7, 0, 0, Math.PI * 2);
  ctx.ellipse(cx + 12, cy + 25 - legOffset, 5.5, 7, 0, 0, Math.PI * 2);
  ctx.fill();

  // Head
  const headY = cy - 12 + (isJump ? -6 : breathe * 0.35);
  const headGrad = ctx.createRadialGradient(cx, headY, 6, cx, headY, 24);
  headGrad.addColorStop(0, "#ffffff");
  headGrad.addColorStop(0.85, "#f8fafc");
  headGrad.addColorStop(1, "#e2e8f0");
  ctx.fillStyle = headGrad;
  ctx.beginPath();
  ctx.ellipse(cx, headY, 23, 19, 0, 0, Math.PI * 2);
  ctx.fill();

  // Calico Patch on Ear / Forehead
  ctx.fillStyle = "#ea580c";
  ctx.beginPath();
  ctx.ellipse(cx - 10, headY - 8, 9, 10, -0.5, 0, Math.PI * 2);
  ctx.fill();

  // Left Cat Ear
  ctx.save();
  ctx.translate(cx - 15, headY - 14);
  ctx.fillStyle = "#ea580c";
  ctx.beginPath();
  ctx.moveTo(-8, 6);
  ctx.lineTo(-2, -16);
  ctx.lineTo(8, 4);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "#fda4af";
  ctx.beginPath();
  ctx.moveTo(-5, 4);
  ctx.lineTo(-1, -11);
  ctx.lineTo(5, 3);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  // Right Cat Ear
  ctx.save();
  ctx.translate(cx + 15, headY - 14);
  ctx.fillStyle = "#334155";
  ctx.beginPath();
  ctx.moveTo(-8, 4);
  ctx.lineTo(2, -16);
  ctx.lineTo(8, 6);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "#fda4af";
  ctx.beginPath();
  ctx.moveTo(-5, 3);
  ctx.lineTo(1, -11);
  ctx.lineTo(5, 4);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  // Glassy Emerald Eyes
  const isClosedEye = isSleep || isBlinking;
  drawRealisticEye(ctx, cx - 9.5, headY - 1, 5.8, "#10b981", "#022c22", isClosedEye, isHappy);
  drawRealisticEye(ctx, cx + 9.5, headY - 1, 5.8, "#10b981", "#022c22", isClosedEye, isHappy);

  // Pink Nose
  ctx.fillStyle = "#fb7185";
  ctx.beginPath();
  ctx.moveTo(cx - 3, headY + 5.5);
  ctx.lineTo(cx + 3, headY + 5.5);
  ctx.lineTo(cx, headY + 8.5);
  ctx.closePath();
  ctx.fill();

  // Cute Whisker Pads & Mouth
  ctx.strokeStyle = "#64748b";
  ctx.lineWidth = 1.3;
  ctx.beginPath();
  ctx.moveTo(cx, headY + 8.5);
  ctx.quadraticCurveTo(cx - 3.5, headY + 11, cx - 6, headY + 9.5);
  ctx.moveTo(cx, headY + 8.5);
  ctx.quadraticCurveTo(cx + 3.5, headY + 11, cx + 6, headY + 9.5);
  ctx.stroke();

  // Whiskers (Crisp delicate lines)
  ctx.strokeStyle = "rgba(100, 116, 139, 0.65)";
  ctx.lineWidth = 1.1;
  // Left whiskers
  ctx.beginPath();
  ctx.moveTo(cx - 7, headY + 8);
  ctx.lineTo(cx - 26, headY + 4);
  ctx.moveTo(cx - 7, headY + 9.5);
  ctx.lineTo(cx - 27, headY + 10);
  ctx.moveTo(cx - 7, headY + 11);
  ctx.lineTo(cx - 25, headY + 15);
  // Right whiskers
  ctx.moveTo(cx + 7, headY + 8);
  ctx.lineTo(cx + 26, headY + 4);
  ctx.moveTo(cx + 7, headY + 9.5);
  ctx.lineTo(cx + 27, headY + 10);
  ctx.moveTo(cx + 7, headY + 11);
  ctx.lineTo(cx + 25, headY + 15);
  ctx.stroke();
}

// 3. Red Fox (灵狐 Kitsune)
function drawRealisticFox(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  frame: string,
  isBlinking: boolean,
  breathe: number,
  legOffset: number,
  tailAngle: number
) {
  const cx = w / 2;
  const cy = h / 2 + 6;
  const isSleep = frame === "sleep";
  const isHappy = frame === "happy";
  const isJump = frame === "jump";

  // Massive Fluffy Red Plume Tail with White Tip
  ctx.save();
  ctx.translate(cx - 18, cy + 10);
  ctx.rotate(tailAngle * 1.2);
  const tailGrad = ctx.createLinearGradient(0, 0, -28, -26);
  tailGrad.addColorStop(0, "#ea580c");
  tailGrad.addColorStop(0.65, "#c2410c");
  tailGrad.addColorStop(0.72, "#ffffff");
  tailGrad.addColorStop(1, "#f8fafc");

  ctx.fillStyle = tailGrad;
  ctx.beginPath();
  ctx.ellipse(-14, -12, 18, 30, -0.85, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // Sleek Body
  const bodyGrad = ctx.createLinearGradient(cx, cy - 6, cx, cy + 24);
  bodyGrad.addColorStop(0, "#ea580c");
  bodyGrad.addColorStop(0.7, "#c2410c");
  bodyGrad.addColorStop(1, "#9a3412");
  ctx.fillStyle = bodyGrad;
  ctx.beginPath();
  ctx.ellipse(cx, cy + 6 + (isJump ? -6 : 0), 24, 20 + breathe * 0.7, 0, 0, Math.PI * 2);
  ctx.fill();

  // White Bib Chest
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.ellipse(cx, cy + 8, 14, 15 + breathe * 0.5, 0, 0, Math.PI * 2);
  ctx.fill();

  // Black Stocking Paws
  ctx.fillStyle = "#0f172a";
  ctx.beginPath();
  ctx.ellipse(cx - 11, cy + 24 + legOffset, 5, 8, 0, 0, Math.PI * 2);
  ctx.ellipse(cx + 11, cy + 24 - legOffset, 5, 8, 0, 0, Math.PI * 2);
  ctx.fill();

  // Head (Triangular Fox Face)
  const headY = cy - 14 + (isJump ? -6 : breathe * 0.4);
  const headGrad = ctx.createRadialGradient(cx, headY, 6, cx, headY, 26);
  headGrad.addColorStop(0, "#f97316");
  headGrad.addColorStop(0.7, "#ea580c");
  headGrad.addColorStop(1, "#9a3412");
  ctx.fillStyle = headGrad;
  ctx.beginPath();
  ctx.ellipse(cx, headY, 23, 19, 0, 0, Math.PI * 2);
  ctx.fill();

  // Large Alert Fox Ears with Black Tips
  // Left Ear
  ctx.save();
  ctx.translate(cx - 16, headY - 14);
  ctx.rotate(-0.25);
  ctx.fillStyle = "#0f172a";
  ctx.beginPath();
  ctx.moveTo(-10, 8);
  ctx.lineTo(0, -22);
  ctx.lineTo(10, 8);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "#ea580c";
  ctx.beginPath();
  ctx.moveTo(-9, 8);
  ctx.lineTo(0, -14);
  ctx.lineTo(9, 8);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.moveTo(-6, 6);
  ctx.lineTo(0, -8);
  ctx.lineTo(6, 6);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  // Right Ear
  ctx.save();
  ctx.translate(cx + 16, headY - 14);
  ctx.rotate(0.25);
  ctx.fillStyle = "#0f172a";
  ctx.beginPath();
  ctx.moveTo(-10, 8);
  ctx.lineTo(0, -22);
  ctx.lineTo(10, 8);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "#ea580c";
  ctx.beginPath();
  ctx.moveTo(-9, 8);
  ctx.lineTo(0, -14);
  ctx.lineTo(9, 8);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.moveTo(-6, 6);
  ctx.lineTo(0, -8);
  ctx.lineTo(6, 6);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  // White Cheeks & Muzzle Flare
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.moveTo(cx - 22, headY + 3);
  ctx.quadraticCurveTo(cx - 10, headY + 15, cx, headY + 8);
  ctx.quadraticCurveTo(cx + 10, headY + 15, cx + 22, headY + 3);
  ctx.lineTo(cx, headY + 16);
  ctx.closePath();
  ctx.fill();

  // Golden Amber Feline Eyes
  const isClosedEye = isSleep || isBlinking;
  drawRealisticEye(ctx, cx - 11, headY - 2, 5.5, "#f59e0b", "#0f172a", isClosedEye, isHappy);
  drawRealisticEye(ctx, cx + 11, headY - 2, 5.5, "#f59e0b", "#0f172a", isClosedEye, isHappy);

  // Black Fox Nose
  ctx.fillStyle = "#0f172a";
  ctx.beginPath();
  ctx.ellipse(cx, headY + 7, 3.8, 2.6, 0, 0, Math.PI * 2);
  ctx.fill();

  // Mouth
  ctx.strokeStyle = "#1e293b";
  ctx.lineWidth = 1.3;
  ctx.beginPath();
  ctx.moveTo(cx, headY + 9.5);
  ctx.lineTo(cx, headY + 12);
  ctx.stroke();
}

// 4. Giant Panda (大熊猫 Boba)
function drawRealisticPanda(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  frame: string,
  isBlinking: boolean,
  breathe: number,
  legOffset: number
) {
  const cx = w / 2;
  const cy = h / 2 + 6;
  const isSleep = frame === "sleep";
  const isHappy = frame === "happy";
  const isJump = frame === "jump";

  // Round Panda Body (White with black shoulder saddle)
  const bodyGrad = ctx.createRadialGradient(cx, cy + 8, 6, cx, cy + 8, 28);
  bodyGrad.addColorStop(0, "#ffffff");
  bodyGrad.addColorStop(0.85, "#f8fafc");
  bodyGrad.addColorStop(1, "#e2e8f0");
  ctx.fillStyle = bodyGrad;
  ctx.beginPath();
  ctx.ellipse(cx, cy + 8 + (isJump ? -6 : 0), 28, 23 + breathe * 0.8, 0, 0, Math.PI * 2);
  ctx.fill();

  // Black Shoulder Harness Saddle
  ctx.fillStyle = "#0f172a";
  ctx.beginPath();
  ctx.ellipse(cx, cy + 2, 29, 12, 0, 0, Math.PI * 2);
  ctx.fill();

  // Black Paws
  ctx.fillStyle = "#0f172a";
  ctx.beginPath();
  ctx.ellipse(cx - 15, cy + 25 + legOffset, 7, 9, 0, 0, Math.PI * 2);
  ctx.ellipse(cx + 15, cy + 25 - legOffset, 7, 9, 0, 0, Math.PI * 2);
  ctx.fill();

  // Round White Head
  const headY = cy - 13 + (isJump ? -6 : breathe * 0.4);
  const headGrad = ctx.createRadialGradient(cx, headY, 6, cx, headY, 26);
  headGrad.addColorStop(0, "#ffffff");
  headGrad.addColorStop(0.85, "#f8fafc");
  headGrad.addColorStop(1, "#cbd5e1");
  ctx.fillStyle = headGrad;
  ctx.beginPath();
  ctx.ellipse(cx, headY, 26, 21, 0, 0, Math.PI * 2);
  ctx.fill();

  // Velvety Black Round Ears
  ctx.fillStyle = "#0f172a";
  ctx.beginPath();
  ctx.arc(cx - 18, headY - 15, 9, 0, Math.PI * 2);
  ctx.arc(cx + 18, headY - 15, 9, 0, Math.PI * 2);
  ctx.fill();

  // Iconic Kidney-Shaped Black Eye Patches
  ctx.fillStyle = "#0f172a";
  // Left eye patch (tilted)
  ctx.beginPath();
  ctx.ellipse(cx - 11, headY, 8.5, 6.5, -0.35, 0, Math.PI * 2);
  ctx.fill();
  // Right eye patch (tilted)
  ctx.beginPath();
  ctx.ellipse(cx + 11, headY, 8.5, 6.5, 0.35, 0, Math.PI * 2);
  ctx.fill();

  // Eyes inside the patches
  const isClosedEye = isSleep || isBlinking;
  drawRealisticEye(ctx, cx - 10.5, headY - 0.5, 4.5, "#475569", "#000000", isClosedEye, isHappy);
  drawRealisticEye(ctx, cx + 10.5, headY - 0.5, 4.5, "#475569", "#000000", isClosedEye, isHappy);

  // Black Panda Nose
  ctx.fillStyle = "#0f172a";
  ctx.beginPath();
  ctx.ellipse(cx, headY + 7, 4.5, 3.2, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
  ctx.beginPath();
  ctx.ellipse(cx - 1, headY + 6, 1.5, 0.8, -0.2, 0, Math.PI * 2);
  ctx.fill();

  // Mouth
  ctx.strokeStyle = "#334155";
  ctx.lineWidth = 1.6;
  ctx.beginPath();
  ctx.moveTo(cx, headY + 10.2);
  ctx.quadraticCurveTo(cx - 4, headY + 13, cx - 6, headY + 11);
  ctx.moveTo(cx, headY + 10.2);
  ctx.quadraticCurveTo(cx + 4, headY + 13, cx + 6, headY + 11);
  ctx.stroke();
}

// 5. Emperor Penguin (帝企鹅 Pippin)
function drawRealisticPenguin(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  frame: string,
  isBlinking: boolean,
  breathe: number,
  legOffset: number,
  wingAngle: number
) {
  const cx = w / 2;
  const cy = h / 2 + 5;
  const isSleep = frame === "sleep";
  const isHappy = frame === "happy";
  const isJump = frame === "jump";

  // Orange Webbed Feet
  ctx.fillStyle = "#f97316";
  ctx.beginPath();
  ctx.ellipse(cx - 11, cy + 28 + legOffset, 7, 4.5, -0.15, 0, Math.PI * 2);
  ctx.ellipse(cx + 11, cy + 28 - legOffset, 7, 4.5, 0.15, 0, Math.PI * 2);
  ctx.fill();

  // Dark Slate Tuxedo Body
  const bodyGrad = ctx.createLinearGradient(cx - 24, cy - 20, cx + 24, cy + 24);
  bodyGrad.addColorStop(0, "#1e293b");
  bodyGrad.addColorStop(0.7, "#0f172a");
  bodyGrad.addColorStop(1, "#020617");
  ctx.fillStyle = bodyGrad;
  ctx.beginPath();
  ctx.ellipse(cx, cy + 4 + (isJump ? -6 : 0), 25, 27 + breathe * 0.7, 0, 0, Math.PI * 2);
  ctx.fill();

  // Golden Auricular Neck Patches (Emperor Penguin Signature)
  const neckGrad = ctx.createLinearGradient(cx - 18, cy - 14, cx + 18, cy - 14);
  neckGrad.addColorStop(0, "#ea580c");
  neckGrad.addColorStop(0.25, "#facc15");
  neckGrad.addColorStop(0.5, "#ffffff");
  neckGrad.addColorStop(0.75, "#facc15");
  neckGrad.addColorStop(1, "#ea580c");
  ctx.fillStyle = neckGrad;
  ctx.beginPath();
  ctx.ellipse(cx, cy - 6, 20, 14, 0, 0, Math.PI * 2);
  ctx.fill();

  // Pristine White Satin Belly
  const bellyGrad = ctx.createRadialGradient(cx, cy + 8, 4, cx, cy + 8, 22);
  bellyGrad.addColorStop(0, "#ffffff");
  bellyGrad.addColorStop(0.85, "#f8fafc");
  bellyGrad.addColorStop(1, "#e2e8f0");
  ctx.fillStyle = bellyGrad;
  ctx.beginPath();
  ctx.ellipse(cx, cy + 9, 16, 21 + breathe * 0.5, 0, 0, Math.PI * 2);
  ctx.fill();

  // Flipper Wings (Dynamic flapping)
  // Left Flipper
  ctx.save();
  ctx.translate(cx - 22, cy);
  ctx.rotate(-wingAngle);
  ctx.fillStyle = "#0f172a";
  ctx.beginPath();
  ctx.ellipse(0, 8, 5.5, 15, -0.3, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // Right Flipper
  ctx.save();
  ctx.translate(cx + 22, cy);
  ctx.rotate(wingAngle);
  ctx.fillStyle = "#0f172a";
  ctx.beginPath();
  ctx.ellipse(0, 8, 5.5, 15, 0.3, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // Head (Black dome)
  const headY = cy - 16 + (isJump ? -6 : breathe * 0.3);
  ctx.fillStyle = "#0f172a";
  ctx.beginPath();
  ctx.ellipse(cx, headY, 18, 16, 0, 0, Math.PI * 2);
  ctx.fill();

  // Eyes
  const isClosedEye = isSleep || isBlinking;
  drawRealisticEye(ctx, cx - 8, headY - 1, 4.5, "#38bdf8", "#000000", isClosedEye, isHappy);
  drawRealisticEye(ctx, cx + 8, headY - 1, 4.5, "#38bdf8", "#000000", isClosedEye, isHappy);

  // Glossy Beak with Pink Mandible Streak
  const beakY = headY + 4;
  ctx.fillStyle = "#0f172a";
  ctx.beginPath();
  ctx.moveTo(cx - 4.5, beakY);
  ctx.lineTo(cx + 4.5, beakY);
  ctx.lineTo(cx, beakY + 7.5);
  ctx.closePath();
  ctx.fill();
  // Pink / Orange streak on lower beak
  ctx.fillStyle = "#f43f5e";
  ctx.beginPath();
  ctx.moveTo(cx - 2, beakY + 3);
  ctx.lineTo(cx + 2, beakY + 3);
  ctx.lineTo(cx, beakY + 6.5);
  ctx.closePath();
  ctx.fill();
}

// 6. Brown Bear (小熊 Barney)
function drawRealisticBear(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  frame: string,
  isBlinking: boolean,
  breathe: number,
  legOffset: number
) {
  const cx = w / 2;
  const cy = h / 2 + 6;
  const isSleep = frame === "sleep";
  const isHappy = frame === "happy";
  const isJump = frame === "jump";

  // Massive Cuddly Bear Body
  const bodyGrad = ctx.createRadialGradient(cx, cy + 8, 8, cx, cy + 8, 30);
  bodyGrad.addColorStop(0, "#92400e");
  bodyGrad.addColorStop(0.7, "#78350f");
  bodyGrad.addColorStop(1, "#451a03");
  ctx.fillStyle = bodyGrad;
  ctx.beginPath();
  ctx.ellipse(cx, cy + 8 + (isJump ? -6 : 0), 29, 24 + breathe * 0.8, 0, 0, Math.PI * 2);
  ctx.fill();

  // Heavy Bear Paws with Claws
  ctx.fillStyle = "#78350f";
  ctx.beginPath();
  ctx.ellipse(cx - 15, cy + 26 + legOffset, 7.5, 9, 0, 0, Math.PI * 2);
  ctx.ellipse(cx + 15, cy + 26 - legOffset, 7.5, 9, 0, 0, Math.PI * 2);
  ctx.fill();

  // Head
  const headY = cy - 14 + (isJump ? -6 : breathe * 0.4);
  const headGrad = ctx.createRadialGradient(cx, headY, 6, cx, headY, 26);
  headGrad.addColorStop(0, "#92400e");
  headGrad.addColorStop(0.7, "#78350f");
  headGrad.addColorStop(1, "#451a03");
  ctx.fillStyle = headGrad;
  ctx.beginPath();
  ctx.ellipse(cx, headY, 25, 22, 0, 0, Math.PI * 2);
  ctx.fill();

  // Round Bear Ears
  ctx.fillStyle = "#78350f";
  ctx.beginPath();
  ctx.arc(cx - 17, headY - 15, 8.5, 0, Math.PI * 2);
  ctx.arc(cx + 17, headY - 15, 8.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#d97706";
  ctx.beginPath();
  ctx.arc(cx - 17, headY - 15, 4.5, 0, Math.PI * 2);
  ctx.arc(cx + 17, headY - 15, 4.5, 0, Math.PI * 2);
  ctx.fill();

  // Warm Tan Honey Muzzle
  const muzzleGrad = ctx.createLinearGradient(cx, headY + 1, cx, headY + 14);
  muzzleGrad.addColorStop(0, "#fde68a");
  muzzleGrad.addColorStop(1, "#d97706");
  ctx.fillStyle = muzzleGrad;
  ctx.beginPath();
  ctx.ellipse(cx, headY + 7, 13, 10, 0, 0, Math.PI * 2);
  ctx.fill();

  // Eyes
  const isClosedEye = isSleep || isBlinking;
  drawRealisticEye(ctx, cx - 11, headY - 2, 5, "#78350f", "#090d16", isClosedEye, isHappy);
  drawRealisticEye(ctx, cx + 11, headY - 2, 5, "#78350f", "#090d16", isClosedEye, isHappy);

  // Big Black Button Nose
  ctx.fillStyle = "#0f172a";
  ctx.beginPath();
  ctx.ellipse(cx, headY + 4, 5.5, 4, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "rgba(255, 255, 255, 0.55)";
  ctx.beginPath();
  ctx.ellipse(cx - 1.5, headY + 2.8, 2, 1, -0.3, 0, Math.PI * 2);
  ctx.fill();

  // Mouth
  ctx.strokeStyle = "#451a03";
  ctx.lineWidth = 1.8;
  ctx.beginPath();
  ctx.moveTo(cx, headY + 8);
  ctx.lineTo(cx, headY + 11);
  ctx.quadraticCurveTo(cx - 5, headY + 14, cx - 7, headY + 11.5);
  ctx.moveTo(cx, headY + 11);
  ctx.quadraticCurveTo(cx + 5, headY + 14, cx + 7, headY + 11.5);
  ctx.stroke();
}

// 7. Emerald Wyvern / Dragon (幼龙 Draco)
function drawRealisticDragon(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  frame: string,
  isBlinking: boolean,
  breathe: number,
  legOffset: number,
  tailAngle: number
) {
  const cx = w / 2;
  const cy = h / 2 + 6;
  const isSleep = frame === "sleep";
  const isHappy = frame === "happy";
  const isJump = frame === "jump";

  // Spiny Dragon Tail with Spade Tip
  ctx.save();
  ctx.translate(cx + 20, cy + 12);
  ctx.rotate(tailAngle * 1.4);
  ctx.strokeStyle = "#059669";
  ctx.lineWidth = 7;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.quadraticCurveTo(15, -6, 26, -18);
  ctx.stroke();
  // Spade tip
  ctx.fillStyle = "#eab308";
  ctx.beginPath();
  ctx.moveTo(26, -18);
  ctx.lineTo(34, -24);
  ctx.lineTo(30, -14);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  // Scaled Body (Emerald green)
  const bodyGrad = ctx.createRadialGradient(cx, cy + 6, 6, cx, cy + 6, 28);
  bodyGrad.addColorStop(0, "#34d399");
  bodyGrad.addColorStop(0.7, "#059669");
  bodyGrad.addColorStop(1, "#064e3b");
  ctx.fillStyle = bodyGrad;
  ctx.beginPath();
  ctx.ellipse(cx, cy + 6 + (isJump ? -6 : 0), 25, 21 + breathe * 0.7, 0, 0, Math.PI * 2);
  ctx.fill();

  // Golden Underbelly Plates
  ctx.fillStyle = "#fde047";
  ctx.beginPath();
  ctx.ellipse(cx, cy + 9, 13, 16 + breathe * 0.5, 0, 0, Math.PI * 2);
  ctx.fill();
  // Plate segments
  ctx.strokeStyle = "#ca8a04";
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.moveTo(cx - 10, cy + 4);
  ctx.lineTo(cx + 10, cy + 4);
  ctx.moveTo(cx - 12, cy + 10);
  ctx.lineTo(cx + 12, cy + 10);
  ctx.moveTo(cx - 10, cy + 16);
  ctx.lineTo(cx + 10, cy + 16);
  ctx.stroke();

  // Dragon Wings (Translucent emerald webbing)
  // Left Wing
  ctx.fillStyle = "rgba(52, 211, 153, 0.85)";
  ctx.strokeStyle = "#047857";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx - 12, cy - 4);
  ctx.lineTo(cx - 34, cy - 22);
  ctx.lineTo(cx - 26, cy + 2);
  ctx.lineTo(cx - 14, cy + 6);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  // Right Wing
  ctx.beginPath();
  ctx.moveTo(cx + 12, cy - 4);
  ctx.lineTo(cx + 34, cy - 22);
  ctx.lineTo(cx + 26, cy + 2);
  ctx.lineTo(cx + 14, cy + 6);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Claws
  ctx.fillStyle = "#047857";
  ctx.beginPath();
  ctx.ellipse(cx - 12, cy + 25 + legOffset, 5.5, 7, 0, 0, Math.PI * 2);
  ctx.ellipse(cx + 12, cy + 25 - legOffset, 5.5, 7, 0, 0, Math.PI * 2);
  ctx.fill();

  // Dragon Head & Horns
  const headY = cy - 14 + (isJump ? -6 : breathe * 0.35);
  // Gold Horns
  ctx.fillStyle = "#facc15";
  ctx.beginPath();
  ctx.moveTo(cx - 10, headY - 10);
  ctx.quadraticCurveTo(cx - 22, headY - 26, cx - 26, headY - 24);
  ctx.quadraticCurveTo(cx - 14, headY - 14, cx - 6, headY - 10);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(cx + 10, headY - 10);
  ctx.quadraticCurveTo(cx + 22, headY - 26, cx + 26, headY - 24);
  ctx.quadraticCurveTo(cx + 14, headY - 14, cx + 6, headY - 10);
  ctx.fill();

  // Head
  const headGrad = ctx.createRadialGradient(cx, headY, 6, cx, headY, 24);
  headGrad.addColorStop(0, "#34d399");
  headGrad.addColorStop(0.7, "#059669");
  headGrad.addColorStop(1, "#064e3b");
  ctx.fillStyle = headGrad;
  ctx.beginPath();
  ctx.ellipse(cx, headY, 23, 19, 0, 0, Math.PI * 2);
  ctx.fill();

  // Glowing Golden Reptilian Eyes with Slit Pupils
  const isClosedEye = isSleep || isBlinking;
  drawRealisticEye(ctx, cx - 9.5, headY - 2, 5.8, "#facc15", "#064e3b", isClosedEye, isHappy);
  drawRealisticEye(ctx, cx + 9.5, headY - 2, 5.8, "#facc15", "#064e3b", isClosedEye, isHappy);

  // Snout & Nostrils
  ctx.fillStyle = "#047857";
  ctx.beginPath();
  ctx.arc(cx - 3.5, headY + 5, 1.4, 0, Math.PI * 2);
  ctx.arc(cx + 3.5, headY + 5, 1.4, 0, Math.PI * 2);
  ctx.fill();

  // Fire smoke spark if happy
  if (isHappy) {
    ctx.fillStyle = "#fbbf24";
    ctx.beginPath();
    ctx.arc(cx, headY + 12, 3, 0, Math.PI * 2);
    ctx.fill();
  }
}

// 8. Barn Owl (猫头鹰 Archimedes)
function drawRealisticOwl(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  frame: string,
  isBlinking: boolean,
  breathe: number,
  wingAngle: number
) {
  const cx = w / 2;
  const cy = h / 2 + 5;
  const isSleep = frame === "sleep";
  const isHappy = frame === "happy";
  const isJump = frame === "jump";

  // Feathered Talons
  ctx.fillStyle = "#d97706";
  ctx.beginPath();
  ctx.ellipse(cx - 10, cy + 27, 6, 3.5, 0, 0, Math.PI * 2);
  ctx.ellipse(cx + 10, cy + 27, 6, 3.5, 0, 0, Math.PI * 2);
  ctx.fill();

  // Layered Feather Body
  const bodyGrad = ctx.createLinearGradient(cx, cy - 10, cx, cy + 26);
  bodyGrad.addColorStop(0, "#d97706");
  bodyGrad.addColorStop(0.7, "#92400e");
  bodyGrad.addColorStop(1, "#78350f");
  ctx.fillStyle = bodyGrad;
  ctx.beginPath();
  ctx.ellipse(cx, cy + 4 + (isJump ? -6 : 0), 24, 25 + breathe * 0.7, 0, 0, Math.PI * 2);
  ctx.fill();

  // Cream Speckled Belly
  const bellyGrad = ctx.createRadialGradient(cx, cy + 8, 4, cx, cy + 8, 18);
  bellyGrad.addColorStop(0, "#ffffff");
  bellyGrad.addColorStop(0.8, "#fef3c7");
  bellyGrad.addColorStop(1, "#fde68a");
  ctx.fillStyle = bellyGrad;
  ctx.beginPath();
  ctx.ellipse(cx, cy + 8, 15, 18 + breathe * 0.5, 0, 0, Math.PI * 2);
  ctx.fill();

  // Wings
  ctx.save();
  ctx.translate(cx - 20, cy + 4);
  ctx.rotate(-wingAngle * 0.7);
  ctx.fillStyle = "#b45309";
  ctx.beginPath();
  ctx.ellipse(0, 6, 6, 17, -0.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  ctx.save();
  ctx.translate(cx + 20, cy + 4);
  ctx.rotate(wingAngle * 0.7);
  ctx.fillStyle = "#b45309";
  ctx.beginPath();
  ctx.ellipse(0, 6, 6, 17, 0.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // Heart-Shaped Facial Disc (Signature Barn Owl)
  const headY = cy - 12 + (isJump ? -6 : breathe * 0.35);
  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = "#b45309";
  ctx.lineWidth = 2.2;
  // Left heart lobe
  ctx.beginPath();
  ctx.arc(cx - 10, headY, 12, 0, Math.PI * 2);
  ctx.arc(cx + 10, headY, 12, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Huge Nocturnal Luminous Eyes
  const isClosedEye = isSleep || isBlinking;
  drawRealisticEye(ctx, cx - 9.5, headY - 0.5, 7.2, "#facc15", "#090d16", isClosedEye, isHappy);
  drawRealisticEye(ctx, cx + 9.5, headY - 0.5, 7.2, "#facc15", "#090d16", isClosedEye, isHappy);

  // Hooked Raptor Beak
  ctx.fillStyle = "#ea580c";
  ctx.beginPath();
  ctx.moveTo(cx - 3, headY + 3.5);
  ctx.lineTo(cx + 3, headY + 3.5);
  ctx.lineTo(cx, headY + 10.5);
  ctx.closePath();
  ctx.fill();
}

// 9. Snow / Netherland Dwarf Bunny (玉兔 Usagi)
function drawRealisticBunny(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  frame: string,
  isBlinking: boolean,
  breathe: number,
  legOffset: number
) {
  const cx = w / 2;
  const cy = h / 2 + 6;
  const isSleep = frame === "sleep";
  const isHappy = frame === "happy";
  const isJump = frame === "jump";

  // Fluffy Pom-Pom Tail
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.arc(cx - 24, cy + 12, 7, 0, Math.PI * 2);
  ctx.fill();

  // Soft Velvety Body
  const bodyGrad = ctx.createRadialGradient(cx, cy + 8, 6, cx, cy + 8, 28);
  bodyGrad.addColorStop(0, "#ffffff");
  bodyGrad.addColorStop(0.85, "#f8fafc");
  bodyGrad.addColorStop(1, "#e2e8f0");
  ctx.fillStyle = bodyGrad;
  ctx.beginPath();
  ctx.ellipse(cx, cy + 8 + (isJump ? -6 : 0), 25, 21 + breathe * 0.7, 0, 0, Math.PI * 2);
  ctx.fill();

  // Paws
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.ellipse(cx - 12, cy + 25 + legOffset, 5.5, 7, 0, 0, Math.PI * 2);
  ctx.ellipse(cx + 12, cy + 25 - legOffset, 5.5, 7, 0, 0, Math.PI * 2);
  ctx.fill();

  // Head
  const headY = cy - 12 + (isJump ? -6 : breathe * 0.35);
  const headGrad = ctx.createRadialGradient(cx, headY, 6, cx, headY, 24);
  headGrad.addColorStop(0, "#ffffff");
  headGrad.addColorStop(0.85, "#f8fafc");
  headGrad.addColorStop(1, "#e2e8f0");
  ctx.fillStyle = headGrad;
  ctx.beginPath();
  ctx.ellipse(cx, headY, 22, 19, 0, 0, Math.PI * 2);
  ctx.fill();

  // Long Satin Ears with Translucent Pink Interior
  // Left Ear
  ctx.save();
  ctx.translate(cx - 12, headY - 14);
  ctx.rotate(-0.15);
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.ellipse(0, -16, 6.5, 18, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#fbcfe8";
  ctx.beginPath();
  ctx.ellipse(0, -16, 3.5, 13, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // Right Ear
  ctx.save();
  ctx.translate(cx + 12, headY - 14);
  ctx.rotate(0.15);
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.ellipse(0, -16, 6.5, 18, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#fbcfe8";
  ctx.beginPath();
  ctx.ellipse(0, -16, 3.5, 13, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // Ruby-Pink Jewel Eyes
  const isClosedEye = isSleep || isBlinking;
  drawRealisticEye(ctx, cx - 9.5, headY - 1, 5.6, "#f43f5e", "#881337", isClosedEye, isHappy);
  drawRealisticEye(ctx, cx + 9.5, headY - 1, 5.6, "#f43f5e", "#881337", isClosedEye, isHappy);

  // Twitching Pink Nose & Y-Mouth
  ctx.fillStyle = "#fda4af";
  ctx.beginPath();
  ctx.ellipse(cx, headY + 5.5, 2.8, 2, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "#cbd5e1";
  ctx.lineWidth = 1.3;
  ctx.beginPath();
  ctx.moveTo(cx, headY + 7.5);
  ctx.lineTo(cx, headY + 9.5);
  ctx.moveTo(cx, headY + 9.5);
  ctx.quadraticCurveTo(cx - 3, headY + 11.5, cx - 5, headY + 10);
  ctx.moveTo(cx, headY + 9.5);
  ctx.quadraticCurveTo(cx + 3, headY + 11.5, cx + 5, headY + 10);
  ctx.stroke();
}

// 10. Agouti Dwarf Hamster (仓鼠 Nitro)
function drawRealisticHamster(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  frame: string,
  isBlinking: boolean,
  breathe: number,
  legOffset: number
) {
  const cx = w / 2;
  const cy = h / 2 + 7;
  const isSleep = frame === "sleep";
  const isHappy = frame === "happy";
  const isJump = frame === "jump";

  // Chubby Round Hamster Body (Golden buff & white)
  const bodyGrad = ctx.createRadialGradient(cx, cy + 6, 6, cx, cy + 6, 26);
  bodyGrad.addColorStop(0, "#fbbf24");
  bodyGrad.addColorStop(0.7, "#d97706");
  bodyGrad.addColorStop(1, "#b45309");
  ctx.fillStyle = bodyGrad;
  ctx.beginPath();
  ctx.ellipse(cx, cy + 6 + (isJump ? -6 : 0), 26, 22 + breathe * 0.7, 0, 0, Math.PI * 2);
  ctx.fill();

  // White Belly
  ctx.fillStyle = "#fffbeb";
  ctx.beginPath();
  ctx.ellipse(cx, cy + 9, 16, 17 + breathe * 0.5, 0, 0, Math.PI * 2);
  ctx.fill();

  // Tiny Pink Paws Holding a Treat/Seed
  ctx.fillStyle = "#fda4af";
  ctx.beginPath();
  ctx.arc(cx - 8, cy + 16, 3.8, 0, Math.PI * 2);
  ctx.arc(cx + 8, cy + 16, 3.8, 0, Math.PI * 2);
  ctx.fill();
  // Golden Sunflower Seed
  ctx.fillStyle = "#facc15";
  ctx.beginPath();
  ctx.ellipse(cx, cy + 15, 3.5, 5, 0, 0, Math.PI * 2);
  ctx.fill();

  // Head with Chubby Rosy Cheek Pouches
  const headY = cy - 11 + (isJump ? -6 : breathe * 0.35);
  ctx.fillStyle = "#d97706";
  ctx.beginPath();
  ctx.ellipse(cx, headY, 23, 18, 0, 0, Math.PI * 2);
  ctx.fill();

  // Round Pink Hamster Ears
  ctx.fillStyle = "#fbcfe8";
  ctx.beginPath();
  ctx.arc(cx - 16, headY - 12, 6, 0, Math.PI * 2);
  ctx.arc(cx + 16, headY - 12, 6, 0, Math.PI * 2);
  ctx.fill();

  // Big Chubby Cheeks
  ctx.fillStyle = "#fffbeb";
  ctx.beginPath();
  ctx.ellipse(cx - 12, headY + 5, 8.5, 7.5, 0, 0, Math.PI * 2);
  ctx.ellipse(cx + 12, headY + 5, 8.5, 7.5, 0, 0, Math.PI * 2);
  ctx.fill();

  // Rosy Cheek Glow
  ctx.fillStyle = "rgba(251, 113, 133, 0.4)";
  ctx.beginPath();
  ctx.arc(cx - 13, headY + 6, 4.5, 0, Math.PI * 2);
  ctx.arc(cx + 13, headY + 6, 4.5, 0, Math.PI * 2);
  ctx.fill();

  // Black Shiny Bead Eyes
  const isClosedEye = isSleep || isBlinking;
  drawRealisticEye(ctx, cx - 10, headY - 1, 4.8, "#334155", "#000000", isClosedEye, isHappy);
  drawRealisticEye(ctx, cx + 10, headY - 1, 4.8, "#334155", "#000000", isClosedEye, isHappy);

  // Tiny Pink Nose
  ctx.fillStyle = "#fda4af";
  ctx.beginPath();
  ctx.arc(cx, headY + 4, 2.2, 0, Math.PI * 2);
  ctx.fill();
}

// 11. Celestial Unicorn (独角兽 Stella)
function drawRealisticUnicorn(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  frame: string,
  isBlinking: boolean,
  breathe: number,
  legOffset: number,
  tailAngle: number
) {
  const cx = w / 2;
  const cy = h / 2 + 6;
  const isSleep = frame === "sleep";
  const isHappy = frame === "happy";
  const isJump = frame === "jump";

  // Flowing Pastel Rainbow Tail (Lavender/Cyan/Pink)
  ctx.save();
  ctx.translate(cx + 20, cy + 12);
  ctx.rotate(tailAngle * 1.3);
  const tailGrad = ctx.createLinearGradient(0, 0, 16, -26);
  tailGrad.addColorStop(0, "#c084fc");
  tailGrad.addColorStop(0.5, "#38bdf8");
  tailGrad.addColorStop(1, "#f472b6");
  ctx.strokeStyle = tailGrad;
  ctx.lineWidth = 7.5;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(12, -6, 20, -16, 14, -28);
  ctx.stroke();
  ctx.restore();

  // Pearlescent Moonlit White Body
  const bodyGrad = ctx.createRadialGradient(cx, cy + 6, 6, cx, cy + 6, 28);
  bodyGrad.addColorStop(0, "#ffffff");
  bodyGrad.addColorStop(0.7, "#f8fafc");
  bodyGrad.addColorStop(1, "#e0e7ff");
  ctx.fillStyle = bodyGrad;
  ctx.beginPath();
  ctx.ellipse(cx, cy + 6 + (isJump ? -6 : 0), 26, 21 + breathe * 0.7, 0, 0, Math.PI * 2);
  ctx.fill();

  // Silver Polished Hooves
  ctx.fillStyle = "#cbd5e1";
  ctx.beginPath();
  ctx.ellipse(cx - 12, cy + 25 + legOffset, 5.5, 7, 0, 0, Math.PI * 2);
  ctx.ellipse(cx + 12, cy + 25 - legOffset, 5.5, 7, 0, 0, Math.PI * 2);
  ctx.fill();

  // Head
  const headY = cy - 14 + (isJump ? -6 : breathe * 0.35);
  const headGrad = ctx.createRadialGradient(cx, headY, 6, cx, headY, 24);
  headGrad.addColorStop(0, "#ffffff");
  headGrad.addColorStop(0.7, "#f8fafc");
  headGrad.addColorStop(1, "#e0e7ff");
  ctx.fillStyle = headGrad;
  ctx.beginPath();
  ctx.ellipse(cx, headY, 22, 19, 0, 0, Math.PI * 2);
  ctx.fill();

  // Glowing Golden Spiral Horn with Ambient Stardust Bloom
  ctx.save();
  ctx.shadowColor = "rgba(250, 204, 21, 0.9)";
  ctx.shadowBlur = 12;
  const hornGrad = ctx.createLinearGradient(cx, headY - 10, cx, headY - 32);
  hornGrad.addColorStop(0, "#fde047");
  hornGrad.addColorStop(0.5, "#facc15");
  hornGrad.addColorStop(1, "#ffffff");
  ctx.fillStyle = hornGrad;
  ctx.beginPath();
  ctx.moveTo(cx - 4, headY - 10);
  ctx.lineTo(cx, headY - 32);
  ctx.lineTo(cx + 4, headY - 10);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  // Flowing Pastel Mane on Forehead
  const maneGrad = ctx.createLinearGradient(cx - 12, headY - 16, cx + 12, headY);
  maneGrad.addColorStop(0, "#c084fc");
  maneGrad.addColorStop(0.5, "#38bdf8");
  maneGrad.addColorStop(1, "#f472b6");
  ctx.fillStyle = maneGrad;
  ctx.beginPath();
  ctx.ellipse(cx - 10, headY - 10, 6, 12, -0.4, 0, Math.PI * 2);
  ctx.fill();

  // Deep Starry Indigo Eyes
  const isClosedEye = isSleep || isBlinking;
  drawRealisticEye(ctx, cx - 9.5, headY - 2, 5.8, "#6366f1", "#1e1b4b", isClosedEye, isHappy);
  drawRealisticEye(ctx, cx + 9.5, headY - 2, 5.8, "#6366f1", "#1e1b4b", isClosedEye, isHappy);

  // Soft Muzzle
  ctx.fillStyle = "#fbcfe8";
  ctx.beginPath();
  ctx.ellipse(cx, headY + 7, 7, 5, 0, 0, Math.PI * 2);
  ctx.fill();
}

// -------------------------------------------------------------
// REALISTIC HIGH-DEFINITION ACCESSORY RENDERER
// -------------------------------------------------------------
function drawRealisticAccessory(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  acc: PetAccessory,
  frame: string
) {
  if (acc === "none" || frame === "sleep") return;
  const cx = w / 2;
  const cy = h / 2 - 20;

  ctx.save();
  switch (acc) {
    case "crown": {
      // Golden Crown studded with Ruby
      ctx.fillStyle = "#facc15";
      ctx.strokeStyle = "#ca8a04";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(cx - 16, cy);
      ctx.lineTo(cx - 18, cy - 14);
      ctx.lineTo(cx - 8, cy - 8);
      ctx.lineTo(cx, cy - 18);
      ctx.lineTo(cx + 8, cy - 8);
      ctx.lineTo(cx + 18, cy - 14);
      ctx.lineTo(cx + 16, cy);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Ruby jewel
      ctx.fillStyle = "#ef4444";
      ctx.beginPath();
      ctx.arc(cx, cy - 8, 3, 0, Math.PI * 2);
      ctx.fill();
      break;
    }

    case "halo": {
      // Glowing golden torus
      ctx.shadowColor = "rgba(250, 204, 21, 0.9)";
      ctx.shadowBlur = 10;
      ctx.strokeStyle = "#facc15";
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.ellipse(cx, cy - 12, 16, 5.5, 0, 0, Math.PI * 2);
      ctx.stroke();
      break;
    }

    case "shades": {
      // Cool black aviator sunglasses
      ctx.fillStyle = "#0f172a";
      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 1.2;
      // Left lens
      ctx.beginPath();
      drawRoundedRect(ctx, cx - 18, cy + 12, 16, 11, 3);
      ctx.fill();
      ctx.stroke();
      // Right lens
      ctx.beginPath();
      drawRoundedRect(ctx, cx + 2, cy + 12, 16, 11, 3);
      ctx.fill();
      ctx.stroke();
      // Bridge
      ctx.strokeStyle = "#64748b";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx - 2, cy + 15);
      ctx.lineTo(cx + 2, cy + 15);
      ctx.stroke();
      // Glint
      ctx.strokeStyle = "rgba(255, 255, 255, 0.7)";
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(cx - 14, cy + 14);
      ctx.lineTo(cx - 6, cy + 21);
      ctx.moveTo(cx + 6, cy + 14);
      ctx.lineTo(cx + 14, cy + 21);
      ctx.stroke();
      break;
    }

    case "headphones": {
      // Metallic Over-Ear Headphones with glowing earcups
      ctx.strokeStyle = "#334155";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(cx, cy + 6, 24, Math.PI, 0);
      ctx.stroke();
      // Glowing Earcups
      ctx.fillStyle = "#0284c7";
      ctx.beginPath();
      ctx.ellipse(cx - 24, cy + 10, 6, 12, 0, 0, Math.PI * 2);
      ctx.ellipse(cx + 24, cy + 10, 6, 12, 0, 0, Math.PI * 2);
      ctx.fill();
      break;
    }

    case "tophat": {
      // Victorian Gentleman's Silk Tophat
      ctx.fillStyle = "#0f172a";
      // Brim
      ctx.beginPath();
      ctx.ellipse(cx, cy + 2, 22, 5, 0, 0, Math.PI * 2);
      ctx.fill();
      // Cylinder
      ctx.fillRect(cx - 12, cy - 20, 24, 20);
      // Red Silk Ribbon
      ctx.fillStyle = "#ef4444";
      ctx.fillRect(cx - 12, cy - 4, 24, 5);
      break;
    }

    case "wizard": {
      // Arcane Wizard Hat with Stars
      ctx.fillStyle = "#6b21a8";
      ctx.beginPath();
      ctx.ellipse(cx, cy + 2, 22, 6, 0, 0, Math.PI * 2);
      ctx.fill();
      // Cone
      ctx.beginPath();
      ctx.moveTo(cx - 14, cy);
      ctx.quadraticCurveTo(cx - 4, cy - 22, cx + 8, cy - 30);
      ctx.lineTo(cx + 14, cy);
      ctx.closePath();
      ctx.fill();
      // Gold Star
      ctx.fillStyle = "#facc15";
      ctx.beginPath();
      ctx.arc(cx - 2, cy - 14, 3, 0, Math.PI * 2);
      ctx.fill();
      break;
    }

    case "sprout": {
      // Cute Green Sprout
      ctx.strokeStyle = "#16a34a";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx, cy - 10);
      ctx.stroke();
      ctx.fillStyle = "#4ade80";
      ctx.beginPath();
      ctx.ellipse(cx - 6, cy - 10, 6, 3, -0.4, 0, Math.PI * 2);
      ctx.ellipse(cx + 6, cy - 10, 6, 3, 0.4, 0, Math.PI * 2);
      ctx.fill();
      break;
    }

    case "scarf": {
      // Wind-swept Heroic Crimson Scarf
      ctx.fillStyle = "#ef4444";
      ctx.beginPath();
      ctx.ellipse(cx, cy + 24, 18, 6, 0, 0, Math.PI * 2);
      ctx.fill();
      // Trailing tail
      ctx.beginPath();
      ctx.moveTo(cx - 12, cy + 24);
      ctx.quadraticCurveTo(cx - 22, cy + 34, cx - 26, cy + 44);
      ctx.lineTo(cx - 18, cy + 44);
      ctx.quadraticCurveTo(cx - 16, cy + 34, cx - 6, cy + 26);
      ctx.closePath();
      ctx.fill();
      break;
    }

    case "cyber_goggles": {
      // Neon Cyberpunk Visor
      ctx.shadowColor = "rgba(6, 182, 212, 0.9)";
      ctx.shadowBlur = 8;
      ctx.fillStyle = "#06b6d4";
      ctx.beginPath();
      drawRoundedRect(ctx, cx - 20, cy + 13, 40, 9, 3);
      ctx.fill();
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.fillRect(cx - 14, cy + 15, 8, 4);
      ctx.fillRect(cx + 6, cy + 15, 8, 4);
      break;
    }

    case "astronaut":
    case "suit_astronaut": {
      // High-Tech Astronaut Helmet Dome
      ctx.strokeStyle = "#e2e8f0";
      ctx.lineWidth = 3;
      ctx.fillStyle = "rgba(56, 189, 248, 0.35)";
      ctx.beginPath();
      ctx.arc(cx, cy + 10, 26, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      // Glass highlight
      ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(cx - 6, cy + 4, 18, 1.1 * Math.PI, 1.6 * Math.PI);
      ctx.stroke();
      break;
    }

    default:
      break;
  }
  ctx.restore();
}

// -------------------------------------------------------------
// MAIN ENTRY: RENDER HIGH-DEFINITION PET
// -------------------------------------------------------------
export function renderRealisticPet(opts: RenderPetOptions) {
  const {
    ctx,
    width,
    height,
    species,
    frame,
    accessory,
    isBlinking = false,
    time = performance.now(),
    activity = "none",
    activityStep = 0,
    facingLeft = false,
  } = opts;

  ctx.save();
  ctx.clearRect(0, 0, width, height);

  // Smooth Sine Wave Breathing & Locomotion Harmonics
  const t = time / 1000;
  const breathe = Math.sin(t * 3.5) * 1.5;
  const legOffset =
    frame === "walk1" ? 4 : frame === "walk2" ? -4 : Math.sin(t * 8) * (frame.startsWith("walk") ? 4 : 0);
  const tailAngle = Math.sin(t * 4) * 0.15;
  const wingAngle = Math.sin(t * 6) * 0.3;

  // Render Base Species HD Anatomy
  switch (species) {
    case "shiba":
      drawRealisticShiba(ctx, width, height, frame, isBlinking, breathe, legOffset, tailAngle);
      break;
    case "cat":
      drawRealisticCat(ctx, width, height, frame, isBlinking, breathe, legOffset, tailAngle);
      break;
    case "fox":
      drawRealisticFox(ctx, width, height, frame, isBlinking, breathe, legOffset, tailAngle);
      break;
    case "panda":
      drawRealisticPanda(ctx, width, height, frame, isBlinking, breathe, legOffset);
      break;
    case "penguin":
      drawRealisticPenguin(ctx, width, height, frame, isBlinking, breathe, legOffset, wingAngle);
      break;
    case "bear":
      drawRealisticBear(ctx, width, height, frame, isBlinking, breathe, legOffset);
      break;
    case "dragon":
      drawRealisticDragon(ctx, width, height, frame, isBlinking, breathe, legOffset, tailAngle);
      break;
    case "owl":
      drawRealisticOwl(ctx, width, height, frame, isBlinking, breathe, wingAngle);
      break;
    case "bunny":
      drawRealisticBunny(ctx, width, height, frame, isBlinking, breathe, legOffset);
      break;
    case "hamster":
      drawRealisticHamster(ctx, width, height, frame, isBlinking, breathe, legOffset);
      break;
    case "unicorn":
      drawRealisticUnicorn(ctx, width, height, frame, isBlinking, breathe, legOffset, tailAngle);
      break;
    default:
      drawRealisticCat(ctx, width, height, frame, isBlinking, breathe, legOffset, tailAngle);
      break;
  }

  // Render HD Layered Accessory
  if (accessory && accessory !== "none") {
    drawRealisticAccessory(ctx, width, height, accessory, frame);
  }

  ctx.restore();
}
