// High-Fidelity Kawaii Pixel Art Renderer & Sprite Data
// Faithfully matching the reference images:
// - 32x32 clean chunky pixel grid
// - Soft dark chocolate/charcoal outlines
// - Chibi proportions (expressive head, rosy blush cheeks, glossy specular highlight eyes)
// - Forehead tabby stripes, pink ear inners, cute white paws, and perky tails
// - Pixel heart emotes, cyan collar, and tailored 32x32 pixel outfits

import { PixelPetType, PetAccessory } from "./petData";

export interface PixelArtRenderOptions {
  ctx: CanvasRenderingContext2D;
  size: number;
  species: PixelPetType;
  frame?: string;
  accessory?: PetAccessory;
  isBlinking?: boolean;
  time?: number;
  activity?: string;
  activityStep?: number;
  facingLeft?: boolean;
  isHappy?: boolean;
  gazeOffset?: { x: number; y: number };
  earTwitch?: number;
  isYawning?: boolean;
}

// 32x32 Color Palettes
export interface PetColorPalette {
  outline: string;     // Soft dark chocolate or dark tone (e.g. #382218)
  furBase: string;     // Main fur color
  furShadow: string;   // Shading tone
  furHighlight: string;// Highlight tone
  whiteBib: string;    // Creamy white chest / muzzle (#fdfbf7)
  whiteShadow: string; // Soft gray/warm shadow on white (#e8e2d8)
  pinkEar: string;     // Soft pink inner ears (#fca5a5 or #f472b6)
  blush: string;       // Rosy cheeks (#fca5a5)
  eyeDark: string;     // Deep eye pupil (#26150c)
  eyeGlint: string;    // Pure white eye highlight (#ffffff)
  eyeIris?: string;    // Optional iris color (amber, emerald, blue)
  mouth: string;       // Deep mouth (#881337)
  tongue: string;      // Pink tongue (#f43f5e)
  stripe?: string;     // Tabby markings / dark spots (#8c5832)
  accent?: string;     // Unique species accent
}

export const KAWAII_PALETTES: Record<PixelPetType, PetColorPalette> = {
  // 🐱 CAT (Ginger / Calico Tabby with Cyan Collar & Pink Cheeks - Exact Ref Image 2)
  cat: {
    outline: "#382218",
    furBase: "#f6b26b",
    furShadow: "#d9822b",
    furHighlight: "#fce5cd",
    whiteBib: "#fefcf6",
    whiteShadow: "#e2dacb",
    pinkEar: "#f9a8a8",
    blush: "#fca5a5",
    eyeDark: "#26150c",
    eyeGlint: "#ffffff",
    eyeIris: "#78350f",
    mouth: "#881337",
    tongue: "#f43f5e",
    stripe: "#8c532b",
    accent: "#06b6d4", // Cyan collar
  },
  // 🐕 SHIBA INU (Golden Red Sesame Shiba with white cheeks & black nose)
  shiba: {
    outline: "#382218",
    furBase: "#e07a2a",
    furShadow: "#b45309",
    furHighlight: "#fcd34d",
    whiteBib: "#fefcf6",
    whiteShadow: "#e5dec9",
    pinkEar: "#f87171",
    blush: "#fca5a5",
    eyeDark: "#1f1209",
    eyeGlint: "#ffffff",
    eyeIris: "#451a03",
    mouth: "#7f1d1d",
    tongue: "#f43f5e",
    stripe: "#78350f",
    accent: "#dc2626", // Red bandana
  },
  // 🦊 FOX (Amber Red Fox with black ear tips & fluffy white-tipped tail)
  fox: {
    outline: "#311c14",
    furBase: "#ea580c",
    furShadow: "#9a3412",
    furHighlight: "#fdba74",
    whiteBib: "#ffffff",
    whiteShadow: "#cbd5e1",
    pinkEar: "#fca5a5",
    blush: "#fca5a5",
    eyeDark: "#18181b",
    eyeGlint: "#ffffff",
    eyeIris: "#d97706",
    mouth: "#881337",
    tongue: "#fb7185",
    stripe: "#1e1b4b", // Black ear tips & feet
    accent: "#f59e0b",
  },
  // 🐼 PANDA (Chubby Black & White Panda with green bamboo)
  panda: {
    outline: "#1e293b",
    furBase: "#f8fafc",
    furShadow: "#cbd5e1",
    furHighlight: "#ffffff",
    whiteBib: "#f8fafc",
    whiteShadow: "#cbd5e1",
    pinkEar: "#f472b6",
    blush: "#fca5a5",
    eyeDark: "#0f172a",
    eyeGlint: "#ffffff",
    eyeIris: "#334155",
    mouth: "#881337",
    tongue: "#fb7185",
    stripe: "#1e293b", // Black patches & limbs
    accent: "#22c55e", // Green bamboo
  },
  // 🐰 BUNNY (Pastel Fluffy White Rabbit with tall ears & carrot)
  bunny: {
    outline: "#3f2720",
    furBase: "#ffffff",
    furShadow: "#e2e8f0",
    furHighlight: "#ffffff",
    whiteBib: "#ffffff",
    whiteShadow: "#e2e8f0",
    pinkEar: "#f472b6",
    blush: "#fda4af",
    eyeDark: "#881337",
    eyeGlint: "#ffffff",
    eyeIris: "#be123c",
    mouth: "#be185d",
    tongue: "#fb7185",
    stripe: "#fbcfe8",
    accent: "#f97316", // Orange carrot
  },
  // 🐧 PENGUIN (Chic Blue-Black Tuxedo Penguin Chick with orange beak)
  penguin: {
    outline: "#0f172a",
    furBase: "#1e293b",
    furShadow: "#090d16",
    furHighlight: "#38bdf8",
    whiteBib: "#ffffff",
    whiteShadow: "#e0f2fe",
    pinkEar: "#38bdf8",
    blush: "#fca5a5",
    eyeDark: "#020617",
    eyeGlint: "#ffffff",
    eyeIris: "#0284c7",
    mouth: "#ea580c",
    tongue: "#f97316",
    stripe: "#0ea5e9",
    accent: "#f59e0b", // Yellow bow/beak
  },
  // 🐹 HAMSTER (Golden Round Hamster with filled seed cheeks)
  hamster: {
    outline: "#382218",
    furBase: "#f59e0b",
    furShadow: "#b45309",
    furHighlight: "#fde68a",
    whiteBib: "#fefcf6",
    whiteShadow: "#e7dfcd",
    pinkEar: "#fca5a5",
    blush: "#fca5a5",
    eyeDark: "#1c1917",
    eyeGlint: "#ffffff",
    eyeIris: "#78350f",
    mouth: "#881337",
    tongue: "#fb7185",
    stripe: "#92400e",
    accent: "#eab308", // Sunflower seed
  },
  // 🐻 BEAR (Warm Honey Teddy Bear with cream snout)
  bear: {
    outline: "#311c14",
    furBase: "#8d5b36",
    furShadow: "#5c361c",
    furHighlight: "#b6845d",
    whiteBib: "#fef3c7",
    whiteShadow: "#fde68a",
    pinkEar: "#fca5a5",
    blush: "#fca5a5",
    eyeDark: "#18181b",
    eyeGlint: "#ffffff",
    eyeIris: "#451a03",
    mouth: "#881337",
    tongue: "#fb7185",
    stripe: "#451a03",
    accent: "#f59e0b", // Honey pot
  },
  // 🦄 UNICORN (Pastel Dream Unicorn with golden spiral horn & rainbow mane)
  unicorn: {
    outline: "#3b1d4a",
    furBase: "#ffffff",
    furShadow: "#f3e8ff",
    furHighlight: "#ffffff",
    whiteBib: "#ffffff",
    whiteShadow: "#e9d5ff",
    pinkEar: "#f472b6",
    blush: "#f472b6",
    eyeDark: "#581c87",
    eyeGlint: "#ffffff",
    eyeIris: "#9333ea",
    mouth: "#86198f",
    tongue: "#f472b6",
    stripe: "#a855f7",
    accent: "#facc15", // Gold horn
  },
  // 🦉 OWL (Wise Round Little Owl with golden eyes & feather tufts)
  owl: {
    outline: "#271d18",
    furBase: "#785338",
    furShadow: "#4d3221",
    furHighlight: "#a57855",
    whiteBib: "#fefcf6",
    whiteShadow: "#dfd5c1",
    pinkEar: "#e28743",
    blush: "#fca5a5",
    eyeDark: "#1c1917",
    eyeGlint: "#ffffff",
    eyeIris: "#f59e0b",
    mouth: "#d97706",
    tongue: "#b45309",
    stripe: "#3d2516",
    accent: "#10b981",
  },
  // 🐉 DRAGON (Emerald Baby Dragon with golden horns & cute wings)
  dragon: {
    outline: "#064e3b",
    furBase: "#10b981",
    furShadow: "#047857",
    furHighlight: "#6ee7b7",
    whiteBib: "#fef08a",
    whiteShadow: "#fde047",
    pinkEar: "#fca5a5",
    blush: "#fca5a5",
    eyeDark: "#022c22",
    eyeGlint: "#ffffff",
    eyeIris: "#f59e0b",
    mouth: "#881337",
    tongue: "#fb7185",
    stripe: "#065f46",
    accent: "#fbbf24", // Gold horns
  },
};

// =========================================================================
// 32x32 Grid Pixel Draw Helper
// =========================================================================
function drawPx(
  ctx: CanvasRenderingContext2D,
  gridX: number,
  gridY: number,
  color: string,
  pxScale: number,
  offsetX = 0,
  offsetY = 0
) {
  if (!color || color === "transparent") return;
  ctx.fillStyle = color;
  ctx.fillRect(
    Math.round(offsetX + gridX * pxScale),
    Math.round(offsetY + gridY * pxScale),
    Math.ceil(pxScale),
    Math.ceil(pxScale)
  );
}

function drawRectPx(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  color: string,
  pxScale: number,
  offsetX = 0,
  offsetY = 0
) {
  if (!color || color === "transparent") return;
  ctx.fillStyle = color;
  ctx.fillRect(
    Math.round(offsetX + x * pxScale),
    Math.round(offsetY + y * pxScale),
    Math.round(w * pxScale),
    Math.round(h * pxScale)
  );
}

// =========================================================================
// Render Reference-Accurate Kawaii Pixel Cat (Images 1 & 2)
// =========================================================================
function renderKawaiiCat(
  ctx: CanvasRenderingContext2D,
  palette: PetColorPalette,
  p: number, // Pixel scale
  ox: number,
  oy: number,
  options: PixelArtRenderOptions
) {
  const {
    frame = "idle1",
    isBlinking = false,
    isHappy = false,
    activityStep = 0,
    time = 0,
    gazeOffset = { x: 0, y: 0 },
    earTwitch = 0,
    isYawning = false,
  } = options;
  const isWalking = frame === "walk1" || frame === "walk2";
  const walkStep = frame === "walk2" ? 1 : 0;
  const isSleeping = frame === "sleep";

  // Breathing / bobbing offset
  const bobY = (isWalking && walkStep === 1) || (!isWalking && Math.sin(time * 0.004) > 0.3) ? 1 : 0;

  // 1. FLOATING PIXEL HEART (As seen in Reference Image 2!)
  const heartFloat = Math.sin(time * 0.005) * 1.5;
  const heartY = 3 + heartFloat;
  const heartX = 4;
  const heartColor = "#f472b6";
  const heartShadow = "#db2777";
  drawRectPx(ctx, heartX + 1, heartY, 2, 1, heartColor, p, ox, oy);
  drawRectPx(ctx, heartX + 4, heartY, 2, 1, heartColor, p, ox, oy);
  drawRectPx(ctx, heartX, heartY + 1, 7, 2, heartColor, p, ox, oy);
  drawRectPx(ctx, heartX + 1, heartY + 3, 5, 1, heartColor, p, ox, oy);
  drawRectPx(ctx, heartX + 2, heartY + 4, 3, 1, heartColor, p, ox, oy);
  drawRectPx(ctx, heartX + 3, heartY + 5, 1, 1, heartShadow, p, ox, oy);

  // 2. TAIL (Curled striped cat tail with continuous organic sway)
  const tailSway = Math.sin(time * 0.008) > 0.2 ? 1 : (Math.sin(time * 0.008) < -0.2 ? -1 : 0);
  const tailX = 22 + (isWalking ? (walkStep === 0 ? -1 : 1) : tailSway);
  const tailY = 17 + bobY;

  // Outline for tail
  drawRectPx(ctx, tailX + 2, tailY, 3, 1, palette.outline, p, ox, oy);
  drawRectPx(ctx, tailX + 4, tailY + 1, 2, 5, palette.outline, p, ox, oy);
  drawRectPx(ctx, tailX + 1, tailY + 1, 1, 4, palette.outline, p, ox, oy);
  drawRectPx(ctx, tailX - 3, tailY + 5, 5, 1, palette.outline, p, ox, oy);
  drawRectPx(ctx, tailX - 3, tailY + 7, 7, 1, palette.outline, p, ox, oy);

  // Fill tail base & stripes
  drawRectPx(ctx, tailX + 2, tailY + 1, 2, 4, palette.furBase, p, ox, oy);
  drawRectPx(ctx, tailX + 2, tailY + 2, 2, 1, palette.stripe || palette.furShadow, p, ox, oy);
  drawRectPx(ctx, tailX - 2, tailY + 5, 6, 2, palette.furBase, p, ox, oy);
  drawRectPx(ctx, tailX, tailY + 5, 2, 2, palette.stripe || palette.furShadow, p, ox, oy);

  // 3. EARS (Pointed cute ears with pink triangles + natural micro-twitch)
  const leftTwitch = earTwitch === 1 ? -1 : 0;
  const rightTwitch = earTwitch === 2 ? -1 : 0;

  // Left Ear
  drawRectPx(ctx, 10, 6 + bobY + leftTwitch, 3, 1, palette.outline, p, ox, oy);
  drawRectPx(ctx, 9, 7 + bobY + leftTwitch, 2, 2, palette.outline, p, ox, oy);
  drawRectPx(ctx, 8, 9 + bobY, 2, 3, palette.outline, p, ox, oy);
  drawRectPx(ctx, 12, 7 + bobY, 2, 4, palette.outline, p, ox, oy);
  // Left ear fill & pink inner
  drawRectPx(ctx, 10, 7 + bobY, 2, 4, palette.furBase, p, ox, oy);
  drawRectPx(ctx, 10, 8 + bobY + leftTwitch, 2, 3, palette.pinkEar, p, ox, oy);

  // Right Ear
  drawRectPx(ctx, 20, 7 + bobY + rightTwitch, 3, 1, palette.outline, p, ox, oy);
  drawRectPx(ctx, 19, 8 + bobY, 2, 3, palette.outline, p, ox, oy);
  drawRectPx(ctx, 22, 8 + bobY + rightTwitch, 2, 4, palette.outline, p, ox, oy);
  // Right ear fill & pink inner
  drawRectPx(ctx, 20, 8 + bobY, 2, 3, palette.furBase, p, ox, oy);
  drawRectPx(ctx, 20, 9 + bobY + rightTwitch, 2, 2, palette.pinkEar, p, ox, oy);

  // Top of head outline connecting ears
  drawRectPx(ctx, 13, 8 + bobY, 7, 1, palette.outline, p, ox, oy);

  // 4. HEAD BASE SHAPE & CHEEKS
  // Outer Head Outline
  drawRectPx(ctx, 8, 12 + bobY, 1, 4, palette.outline, p, ox, oy);
  drawRectPx(ctx, 6, 13 + bobY, 2, 1, palette.outline, p, ox, oy); // Whisker left
  drawRectPx(ctx, 6, 15 + bobY, 2, 1, palette.outline, p, ox, oy); // Whisker left
  drawRectPx(ctx, 9, 16 + bobY, 1, 2, palette.outline, p, ox, oy);

  drawRectPx(ctx, 24, 12 + bobY, 1, 4, palette.outline, p, ox, oy);
  drawRectPx(ctx, 25, 13 + bobY, 2, 1, palette.outline, p, ox, oy); // Whisker right
  drawRectPx(ctx, 25, 15 + bobY, 2, 1, palette.outline, p, ox, oy); // Whisker right
  drawRectPx(ctx, 23, 16 + bobY, 1, 2, palette.outline, p, ox, oy);

  // Fill Head Upper Area (Fur Base)
  drawRectPx(ctx, 10, 9 + bobY, 13, 5, palette.furBase, p, ox, oy);
  drawRectPx(ctx, 9, 11 + bobY, 15, 3, palette.furBase, p, ox, oy);

  // 3 TABBY FOREHEAD STRIPES (Exact Ref Image 2!)
  const stripeColor = palette.stripe || palette.furShadow;
  drawRectPx(ctx, 13, 9 + bobY, 1, 3, stripeColor, p, ox, oy); // Left stripe
  drawRectPx(ctx, 16, 8 + bobY, 1, 4, stripeColor, p, ox, oy); // Center stripe
  drawRectPx(ctx, 19, 9 + bobY, 1, 3, stripeColor, p, ox, oy); // Right stripe
  // Cheek tabby stripes
  drawRectPx(ctx, 9, 12 + bobY, 2, 1, stripeColor, p, ox, oy);
  drawRectPx(ctx, 9, 14 + bobY, 2, 1, stripeColor, p, ox, oy);
  drawRectPx(ctx, 22, 12 + bobY, 2, 1, stripeColor, p, ox, oy);
  drawRectPx(ctx, 22, 14 + bobY, 2, 1, stripeColor, p, ox, oy);

  // Lower Face & Muzzle (White Cream Area)
  drawRectPx(ctx, 10, 14 + bobY, 13, 4, palette.whiteBib, p, ox, oy);
  drawRectPx(ctx, 14, 12 + bobY, 5, 2, palette.whiteBib, p, ox, oy); // White forehead blaze

  // 5. ROSY BLUSH CHEEKS (Exact Ref Image 2!)
  drawRectPx(ctx, 10, 14 + bobY, 2, 2, palette.blush, p, ox, oy);
  drawRectPx(ctx, 21, 14 + bobY, 2, 2, palette.blush, p, ox, oy);

  // 6. EYES & NOSE & MOUTH (With Gaze Tracking & Yawning)
  const gx = Math.max(-1, Math.min(1, gazeOffset.x || 0));
  const gy = Math.max(-1, Math.min(1, gazeOffset.y || 0));

  if (isSleeping) {
    // Sleeping cute closed curved slits `_ _`
    drawRectPx(ctx, 12, 13 + bobY, 3, 1, palette.eyeDark, p, ox, oy);
    drawRectPx(ctx, 18, 13 + bobY, 3, 1, palette.eyeDark, p, ox, oy);
    // Tiny cute 'Zzz' floating
    drawRectPx(ctx, 23, 7 + bobY, 3, 1, "#38bdf8", p, ox, oy);
    drawPx(ctx, 24, 8 + bobY, "#38bdf8", p, ox, oy);
    drawRectPx(ctx, 23, 9 + bobY, 3, 1, "#38bdf8", p, ox, oy);
  } else if (isBlinking) {
    // Blinking eye horizontal slit
    drawRectPx(ctx, 12, 13 + bobY, 3, 1, palette.eyeDark, p, ox, oy);
    drawRectPx(ctx, 18, 13 + bobY, 3, 1, palette.eyeDark, p, ox, oy);
  } else if (isYawning) {
    // Sleepy sweet crescent eyes `u u`
    drawPx(ctx, 12, 12 + bobY, palette.eyeDark, p, ox, oy);
    drawPx(ctx, 13, 13 + bobY, palette.eyeDark, p, ox, oy);
    drawPx(ctx, 14, 12 + bobY, palette.eyeDark, p, ox, oy);
    drawPx(ctx, 18, 12 + bobY, palette.eyeDark, p, ox, oy);
    drawPx(ctx, 19, 13 + bobY, palette.eyeDark, p, ox, oy);
    drawPx(ctx, 20, 12 + bobY, palette.eyeDark, p, ox, oy);
  } else if (isHappy || frame === "jump") {
    // Happy `^ ^` sparkling eye curves
    drawPx(ctx, 12, 12 + bobY, palette.eyeDark, p, ox, oy);
    drawPx(ctx, 13, 11 + bobY, palette.eyeDark, p, ox, oy);
    drawPx(ctx, 14, 12 + bobY, palette.eyeDark, p, ox, oy);

    drawPx(ctx, 18, 12 + bobY, palette.eyeDark, p, ox, oy);
    drawPx(ctx, 19, 11 + bobY, palette.eyeDark, p, ox, oy);
    drawPx(ctx, 20, 12 + bobY, palette.eyeDark, p, ox, oy);
  } else {
    // BIG KAWAII GLOSSY PIXEL EYES with dynamic interactive Gaze Tracking!
    // Left Eye: 3x3 base
    drawRectPx(ctx, 12, 12 + bobY, 3, 3, palette.eyeDark, p, ox, oy);
    // Dynamic specular glint offset based on cursor gaze
    const glintLeftX = Math.max(12, Math.min(13, 12 + (gx > 0 ? 1 : 0)));
    const glintLeftY = Math.max(12, Math.min(13, 12 + (gy > 0 ? 1 : 0)));
    drawPx(ctx, glintLeftX, glintLeftY + bobY, palette.eyeGlint, p, ox, oy);
    drawPx(ctx, 13 + (gx < 0 ? -1 : 0), 14 + (gy < 0 ? -1 : 0) + bobY, palette.eyeIris || palette.furShadow, p, ox, oy);

    // Right Eye: 3x3 base
    drawRectPx(ctx, 18, 12 + bobY, 3, 3, palette.eyeDark, p, ox, oy);
    const glintRightX = Math.max(18, Math.min(19, 18 + (gx > 0 ? 1 : 0)));
    const glintRightY = Math.max(12, Math.min(13, 12 + (gy > 0 ? 1 : 0)));
    drawPx(ctx, glintRightX, glintRightY + bobY, palette.eyeGlint, p, ox, oy);
    drawPx(ctx, 19 + (gx < 0 ? -1 : 0), 14 + (gy < 0 ? -1 : 0) + bobY, palette.eyeIris || palette.furShadow, p, ox, oy);
  }

  // Nose: Tiny dark chocolate pixel
  drawPx(ctx, 16, 14 + bobY, palette.eyeDark, p, ox, oy);

  // Mouth: Cheerful open mouth, Yawn, or Cat `3`
  if (isYawning) {
    // Big round cute yawn mouth `O` with pink inside
    drawRectPx(ctx, 15, 15 + bobY, 3, 3, palette.outline, p, ox, oy);
    drawRectPx(ctx, 16, 16 + bobY, 1, 2, palette.tongue, p, ox, oy);
  } else if (isHappy || frame === "jump" || frame === "idle1") {
    drawPx(ctx, 15, 15 + bobY, palette.outline, p, ox, oy);
    drawPx(ctx, 17, 15 + bobY, palette.outline, p, ox, oy);
    drawRectPx(ctx, 15, 16 + bobY, 3, 2, palette.outline, p, ox, oy);
    drawRectPx(ctx, 16, 16 + bobY, 1, 1, palette.tongue, p, ox, oy); // Pink tongue!
  } else {
    // Cute `3` mouth
    drawPx(ctx, 15, 15 + bobY, palette.outline, p, ox, oy);
    drawPx(ctx, 16, 16 + bobY, palette.outline, p, ox, oy);
    drawPx(ctx, 17, 15 + bobY, palette.outline, p, ox, oy);
  }

  // 7. CYAN COLLAR (Reference Image 1 Iconic Feature!)
  const collarY = 17 + bobY;
  drawRectPx(ctx, 10, collarY, 13, 1, palette.accent || "#06b6d4", p, ox, oy);
  drawRectPx(ctx, 11, collarY + 1, 11, 1, palette.accent || "#06b6d4", p, ox, oy);
  // Gold Bell / Tag in center
  drawPx(ctx, 16, collarY + 1, "#facc15", p, ox, oy);
  drawPx(ctx, 16, collarY + 2, "#eab308", p, ox, oy);

  // 8. BODY, CHEST & PAWS (Sitting posture with white bib & paws - Ref Image 2)
  const bodyY = 18 + bobY;
  // Body outer outline
  drawRectPx(ctx, 10, bodyY, 1, 6, palette.outline, p, ox, oy);
  drawRectPx(ctx, 22, bodyY, 1, 6, palette.outline, p, ox, oy);
  drawRectPx(ctx, 11, bodyY + 6, 11, 1, palette.outline, p, ox, oy); // Base bottom outline

  // Body Fur Sides (Ginger Tabby)
  drawRectPx(ctx, 11, bodyY, 3, 5, palette.furBase, p, ox, oy);
  drawRectPx(ctx, 19, bodyY, 3, 5, palette.furBase, p, ox, oy);
  // Body side tabby stripes
  drawRectPx(ctx, 11, bodyY + 2, 2, 1, stripeColor, p, ox, oy);
  drawRectPx(ctx, 20, bodyY + 2, 2, 1, stripeColor, p, ox, oy);

  // White Fluffy Chest & Belly Bib (Ref Image 2)
  drawRectPx(ctx, 14, bodyY, 5, 5, palette.whiteBib, p, ox, oy);

  // 9. FRONT WHITE PAWS (Ref Image 2 sitting pose with cute vertical paw divider)
  const pawY = 22 + (isWalking ? (walkStep === 0 ? 0 : -1) : 0) + bobY;
  // Left Paw
  drawRectPx(ctx, 13, pawY, 3, 2, palette.whiteBib, p, ox, oy);
  drawPx(ctx, 14, pawY + 1, palette.outline, p, ox, oy); // Toe slit
  drawRectPx(ctx, 13, pawY + 2, 3, 1, palette.outline, p, ox, oy); // Paw bottom

  // Right Paw
  const rightPawY = 22 + (isWalking ? (walkStep === 1 ? 0 : -1) : 0) + bobY;
  drawRectPx(ctx, 17, rightPawY, 3, 2, palette.whiteBib, p, ox, oy);
  drawPx(ctx, 18, rightPawY + 1, palette.outline, p, ox, oy); // Toe slit
  drawRectPx(ctx, 17, rightPawY + 2, 3, 1, palette.outline, p, ox, oy); // Paw bottom
}

// =========================================================================
// General Renderer for other Kawaii Species (Shiba, Panda, Bunny, Fox, etc.)
// =========================================================================
function renderKawaiiSpecies(
  ctx: CanvasRenderingContext2D,
  species: PixelPetType,
  palette: PetColorPalette,
  p: number,
  ox: number,
  oy: number,
  options: PixelArtRenderOptions
) {
  if (species === "cat") {
    renderKawaiiCat(ctx, palette, p, ox, oy, options);
    return;
  }

  const { frame = "idle1", isBlinking = false, isHappy = false, time = 0 } = options;
  const isWalking = frame === "walk1" || frame === "walk2";
  const walkStep = frame === "walk2" ? 1 : 0;
  const isSleeping = frame === "sleep";
  const bobY = (isWalking && walkStep === 1) || (!isWalking && Math.sin(time * 0.004) > 0.3) ? 1 : 0;

  // 1. Floating Pixel Emote Heart / Sparkle
  const heartFloat = Math.sin(time * 0.005) * 1.5;
  const heartY = 3 + heartFloat;
  const heartX = 4;
  drawRectPx(ctx, heartX + 1, heartY, 2, 1, "#f472b6", p, ox, oy);
  drawRectPx(ctx, heartX + 4, heartY, 2, 1, "#f472b6", p, ox, oy);
  drawRectPx(ctx, heartX, heartY + 1, 7, 2, "#f472b6", p, ox, oy);
  drawRectPx(ctx, heartX + 1, heartY + 3, 5, 1, "#f472b6", p, ox, oy);
  drawRectPx(ctx, heartX + 2, heartY + 4, 3, 1, "#db2777", p, ox, oy);

  // 2. Tail / Back Props
  if (species === "shiba" || species === "fox" || species === "dragon" || species === "bear") {
    const tailX = 22 + (isWalking ? (walkStep === 0 ? -1 : 1) : 0);
    const tailY = 17 + bobY;
    if (species === "fox") {
      // Big fluffy bushy fox tail with white tip
      drawRectPx(ctx, tailX, tailY - 2, 4, 6, palette.furBase, p, ox, oy);
      drawRectPx(ctx, tailX + 1, tailY - 4, 3, 3, "#ffffff", p, ox, oy); // White tip
      drawRectPx(ctx, tailX + 3, tailY - 4, 1, 8, palette.outline, p, ox, oy);
    } else if (species === "shiba") {
      // Curled donut tail
      drawRectPx(ctx, tailX, tailY, 4, 3, palette.furBase, p, ox, oy);
      drawRectPx(ctx, tailX + 1, tailY - 1, 3, 2, palette.furBase, p, ox, oy);
      drawRectPx(ctx, tailX + 3, tailY - 1, 1, 4, palette.outline, p, ox, oy);
    } else if (species === "dragon") {
      // Dragon wing & spiked tail
      drawRectPx(ctx, tailX, tailY, 4, 2, palette.furBase, p, ox, oy);
      drawPx(ctx, tailX + 3, tailY - 1, palette.accent || "#f59e0b", p, ox, oy);
    }
  }

  // 3. EARS / HORNS
  if (species === "bunny") {
    // Tall Bunny Ears
    drawRectPx(ctx, 11, 2 + bobY, 3, 8, palette.outline, p, ox, oy);
    drawRectPx(ctx, 12, 3 + bobY, 2, 6, palette.furBase, p, ox, oy);
    drawRectPx(ctx, 12, 4 + bobY, 1, 5, palette.pinkEar, p, ox, oy);

    drawRectPx(ctx, 19, 2 + bobY, 3, 8, palette.outline, p, ox, oy);
    drawRectPx(ctx, 19, 3 + bobY, 2, 6, palette.furBase, p, ox, oy);
    drawRectPx(ctx, 20, 4 + bobY, 1, 5, palette.pinkEar, p, ox, oy);
  } else if (species === "unicorn") {
    // Golden Spiraled Horn + Rainbow Mane
    drawRectPx(ctx, 15, 3 + bobY, 2, 5, "#facc15", p, ox, oy);
    drawPx(ctx, 15, 2 + bobY, "#ffffff", p, ox, oy);
    drawRectPx(ctx, 10, 6 + bobY, 3, 4, palette.outline, p, ox, oy);
    drawRectPx(ctx, 20, 6 + bobY, 3, 4, palette.outline, p, ox, oy);
  } else if (species === "panda" || species === "bear" || species === "hamster") {
    // Round Chubby Ears
    drawRectPx(ctx, 9, 7 + bobY, 4, 4, palette.outline, p, ox, oy);
    drawRectPx(ctx, 10, 8 + bobY, 2, 2, species === "panda" ? palette.stripe || "#1e293b" : palette.pinkEar, p, ox, oy);
    drawRectPx(ctx, 20, 7 + bobY, 4, 4, palette.outline, p, ox, oy);
    drawRectPx(ctx, 21, 8 + bobY, 2, 2, species === "panda" ? palette.stripe || "#1e293b" : palette.pinkEar, p, ox, oy);
  } else if (species === "fox" || species === "shiba") {
    // Triangular Ears
    drawRectPx(ctx, 9, 6 + bobY, 4, 5, palette.outline, p, ox, oy);
    drawRectPx(ctx, 10, 7 + bobY, 2, 3, species === "fox" ? "#1e1b4b" : palette.pinkEar, p, ox, oy);
    drawRectPx(ctx, 20, 6 + bobY, 4, 5, palette.outline, p, ox, oy);
    drawRectPx(ctx, 21, 7 + bobY, 2, 3, species === "fox" ? "#1e1b4b" : palette.pinkEar, p, ox, oy);
  }

  // Head Outline & Main Fur
  drawRectPx(ctx, 9, 9 + bobY, 15, 9, palette.outline, p, ox, oy);
  drawRectPx(ctx, 10, 10 + bobY, 13, 7, palette.furBase, p, ox, oy);

  // Panda Eye Patches
  if (species === "panda") {
    drawRectPx(ctx, 11, 11 + bobY, 4, 4, palette.stripe || "#1e293b", p, ox, oy);
    drawRectPx(ctx, 18, 11 + bobY, 4, 4, palette.stripe || "#1e293b", p, ox, oy);
  }

  // Shiba White Eyebrow Spots
  if (species === "shiba") {
    drawPx(ctx, 12, 10 + bobY, "#ffffff", p, ox, oy);
    drawPx(ctx, 20, 10 + bobY, "#ffffff", p, ox, oy);
    drawRectPx(ctx, 11, 14 + bobY, 11, 3, palette.whiteBib, p, ox, oy);
  }

  // Rosy Blush Cheeks
  drawRectPx(ctx, 10, 14 + bobY, 2, 2, palette.blush, p, ox, oy);
  drawRectPx(ctx, 21, 14 + bobY, 2, 2, palette.blush, p, ox, oy);

  // Big Kawaii Pixel Eyes
  if (isSleeping) {
    drawRectPx(ctx, 12, 13 + bobY, 3, 1, palette.eyeDark, p, ox, oy);
    drawRectPx(ctx, 18, 13 + bobY, 3, 1, palette.eyeDark, p, ox, oy);
  } else if (isBlinking) {
    drawRectPx(ctx, 12, 13 + bobY, 3, 1, palette.eyeDark, p, ox, oy);
    drawRectPx(ctx, 18, 13 + bobY, 3, 1, palette.eyeDark, p, ox, oy);
  } else if (isHappy) {
    drawPx(ctx, 12, 12 + bobY, palette.eyeDark, p, ox, oy);
    drawPx(ctx, 13, 11 + bobY, palette.eyeDark, p, ox, oy);
    drawPx(ctx, 14, 12 + bobY, palette.eyeDark, p, ox, oy);
    drawPx(ctx, 18, 12 + bobY, palette.eyeDark, p, ox, oy);
    drawPx(ctx, 19, 11 + bobY, palette.eyeDark, p, ox, oy);
    drawPx(ctx, 20, 12 + bobY, palette.eyeDark, p, ox, oy);
  } else {
    // Big glossy eye with specular white glint
    drawRectPx(ctx, 12, 12 + bobY, 3, 3, palette.eyeDark, p, ox, oy);
    drawPx(ctx, 12, 12 + bobY, palette.eyeGlint, p, ox, oy);
    drawRectPx(ctx, 18, 12 + bobY, 3, 3, palette.eyeDark, p, ox, oy);
    drawPx(ctx, 18, 12 + bobY, palette.eyeGlint, p, ox, oy);
  }

  // Nose & Mouth
  drawPx(ctx, 16, 14 + bobY, palette.eyeDark, p, ox, oy);
  if (isHappy || frame === "idle1") {
    drawRectPx(ctx, 15, 15 + bobY, 3, 2, palette.outline, p, ox, oy);
    drawPx(ctx, 16, 16 + bobY, palette.tongue, p, ox, oy);
  } else {
    drawPx(ctx, 16, 15 + bobY, palette.outline, p, ox, oy);
  }

  // Collar / Scarf / Neck Ornament
  const collarY = 17 + bobY;
  drawRectPx(ctx, 11, collarY, 11, 1, palette.accent || "#06b6d4", p, ox, oy);
  drawPx(ctx, 16, collarY + 1, "#facc15", p, ox, oy);

  // Body & White Chest
  const bodyY = 18 + bobY;
  drawRectPx(ctx, 10, bodyY, 13, 6, palette.outline, p, ox, oy);
  drawRectPx(ctx, 11, bodyY, 11, 5, palette.furBase, p, ox, oy);
  drawRectPx(ctx, 14, bodyY, 5, 5, palette.whiteBib, p, ox, oy);

  // Front Paws
  const pawY = 22 + (isWalking ? (walkStep === 0 ? 0 : -1) : 0) + bobY;
  drawRectPx(ctx, 13, pawY, 3, 2, palette.whiteBib, p, ox, oy);
  drawPx(ctx, 14, pawY + 1, palette.outline, p, ox, oy);

  const rightPawY = 22 + (isWalking ? (walkStep === 1 ? 0 : -1) : 0) + bobY;
  drawRectPx(ctx, 17, rightPawY, 3, 2, palette.whiteBib, p, ox, oy);
  drawPx(ctx, 18, rightPawY + 1, palette.outline, p, ox, oy);
}

// =========================================================================
// Pixel Accessory & Outfit Renderer (Tailored for 32x32 Grid)
// =========================================================================
function renderKawaiiAccessory(
  ctx: CanvasRenderingContext2D,
  accessory: PetAccessory,
  p: number,
  ox: number,
  oy: number,
  options: PixelArtRenderOptions
) {
  if (accessory === "none" || !accessory) return;
  const { frame = "idle1", time = 0 } = options;
  const isWalking = frame === "walk1" || frame === "walk2";
  const walkStep = frame === "walk2" ? 1 : 0;
  const bobY = (isWalking && walkStep === 1) || (!isWalking && Math.sin(time * 0.004) > 0.3) ? 1 : 0;

  switch (accessory) {
    // 1. ASTRONAUT HELMET / SUIT
    case "astronaut":
    case "suit_astronaut": {
      // Glass Bubble Helmet with cyan reflection
      drawRectPx(ctx, 8, 7 + bobY, 17, 10, "#e2e8f0", p, ox, oy);
      drawRectPx(ctx, 10, 9 + bobY, 13, 7, "rgba(56, 189, 248, 0.35)", p, ox, oy);
      drawRectPx(ctx, 11, 9 + bobY, 4, 1, "#ffffff", p, ox, oy); // Helmet glare
      drawRectPx(ctx, 10, 17 + bobY, 13, 2, "#0284c7", p, ox, oy); // Blue collar ring
      if (accessory === "suit_astronaut") {
        // White NASA Suit with chest badge
        drawRectPx(ctx, 11, 19 + bobY, 11, 5, "#f8fafc", p, ox, oy);
        drawPx(ctx, 13, 20 + bobY, "#ef4444", p, ox, oy); // Red badge
        drawPx(ctx, 15, 20 + bobY, "#0284c7", p, ox, oy); // Blue badge
      }
      break;
    }

    // 2. WIZARD HAT / SUIT
    case "wizard":
    case "suit_wizard": {
      // Midnight Purple Pointed Hat with golden star
      drawRectPx(ctx, 7, 7 + bobY, 19, 2, "#581c87", p, ox, oy); // Hat brim
      drawRectPx(ctx, 11, 4 + bobY, 11, 3, "#6b21a8", p, ox, oy);
      drawRectPx(ctx, 13, 1 + bobY, 7, 3, "#7e22ce", p, ox, oy);
      drawRectPx(ctx, 15, -1 + bobY, 3, 2, "#9333ea", p, ox, oy);
      // Gold Hat Star
      drawPx(ctx, 16, 4 + bobY, "#facc15", p, ox, oy);
      drawPx(ctx, 15, 5 + bobY, "#fde047", p, ox, oy);
      drawPx(ctx, 17, 5 + bobY, "#fde047", p, ox, oy);
      if (accessory === "suit_wizard") {
        // Starry Wizard Robe
        drawRectPx(ctx, 11, 19 + bobY, 11, 5, "#581c87", p, ox, oy);
        drawPx(ctx, 14, 21 + bobY, "#facc15", p, ox, oy);
        drawPx(ctx, 18, 20 + bobY, "#fde047", p, ox, oy);
      }
      break;
    }

    // 3. SHADES / CYBER GOGGLES
    case "shades":
    case "cyber_goggles": {
      // Cool Pixel Sunglasses / Holographic Visor
      const color = accessory === "shades" ? "#0f172a" : "#06b6d4";
      drawRectPx(ctx, 10, 11 + bobY, 6, 3, color, p, ox, oy);
      drawRectPx(ctx, 17, 11 + bobY, 6, 3, color, p, ox, oy);
      drawRectPx(ctx, 15, 12 + bobY, 3, 1, color, p, ox, oy); // Bridge
      drawPx(ctx, 11, 11 + bobY, "#ffffff", p, ox, oy); // Glare
      drawPx(ctx, 18, 11 + bobY, "#ffffff", p, ox, oy); // Glare
      break;
    }

    // 4. GOLDEN ROYAL CROWN
    case "crown":
    case "suit_emperor": {
      // 3-Pointed Golden Crown with Rubies
      drawRectPx(ctx, 11, 4 + bobY, 11, 3, "#facc15", p, ox, oy);
      drawPx(ctx, 11, 3 + bobY, "#facc15", p, ox, oy);
      drawPx(ctx, 16, 2 + bobY, "#facc15", p, ox, oy); // Tall middle tip
      drawPx(ctx, 21, 3 + bobY, "#facc15", p, ox, oy);
      drawPx(ctx, 12, 5 + bobY, "#ef4444", p, ox, oy); // Ruby
      drawPx(ctx, 16, 4 + bobY, "#3b82f6", p, ox, oy); // Sapphire
      drawPx(ctx, 20, 5 + bobY, "#ef4444", p, ox, oy); // Ruby
      if (accessory === "suit_emperor") {
        // Royal Velvet Cape with Gold Trims
        drawRectPx(ctx, 10, 18 + bobY, 13, 6, "#991b1b", p, ox, oy);
        drawRectPx(ctx, 10, 18 + bobY, 13, 1, "#facc15", p, ox, oy);
      }
      break;
    }

    // 5. GAMING HEADPHONES
    case "headphones": {
      // Neon Cyan / Pink RGB Headset
      drawRectPx(ctx, 11, 5 + bobY, 11, 2, "#334155", p, ox, oy); // Headband
      drawRectPx(ctx, 8, 9 + bobY, 3, 6, "#06b6d4", p, ox, oy); // Left Earcup
      drawPx(ctx, 9, 11 + bobY, "#f472b6", p, ox, oy); // RGB core
      drawRectPx(ctx, 22, 9 + bobY, 3, 6, "#06b6d4", p, ox, oy); // Right Earcup
      drawPx(ctx, 23, 11 + bobY, "#f472b6", p, ox, oy); // RGB core
      // Mic boom
      drawRectPx(ctx, 8, 15 + bobY, 4, 1, "#475569", p, ox, oy);
      drawPx(ctx, 12, 15 + bobY, "#22c55e", p, ox, oy); // Mic LED
      break;
    }

    // 6. CUTE PINK PETITE COLLAR BOW (Worn delicately on the Neck)
    case "bow": {
      // 1. Dainty collar ribbon band around the neck for realistic wearable fit
      drawRectPx(ctx, 12, 17 + bobY, 8, 1, "#fda4af", p, ox, oy); // Collar band
      drawPx(ctx, 11, 17 + bobY, "#e11d48", p, ox, oy); // Band side edge
      drawPx(ctx, 20, 17 + bobY, "#e11d48", p, ox, oy);

      // 2. Delicate Left Ribbon Wing (compact 2x3 size, realistic taper)
      drawPx(ctx, 13, 16 + bobY, "#fb7185", p, ox, oy); // Top flare
      drawPx(ctx, 14, 16 + bobY, "#fda4af", p, ox, oy); // Top sheen
      drawPx(ctx, 13, 17 + bobY, "#f43f5e", p, ox, oy); // Mid body
      drawPx(ctx, 14, 17 + bobY, "#fb7185", p, ox, oy);
      drawPx(ctx, 13, 18 + bobY, "#e11d48", p, ox, oy); // Bottom fold
      drawPx(ctx, 14, 18 + bobY, "#f43f5e", p, ox, oy);
      drawPx(ctx, 12, 17 + bobY, "#9f1239", p, ox, oy); // Outer wing crease accent

      // 3. Delicate Right Ribbon Wing (compact 2x3 size, realistic taper)
      drawPx(ctx, 17, 16 + bobY, "#fda4af", p, ox, oy); // Top sheen
      drawPx(ctx, 18, 16 + bobY, "#fb7185", p, ox, oy); // Top flare
      drawPx(ctx, 17, 17 + bobY, "#fb7185", p, ox, oy); // Mid body
      drawPx(ctx, 18, 17 + bobY, "#f43f5e", p, ox, oy);
      drawPx(ctx, 17, 18 + bobY, "#f43f5e", p, ox, oy); // Bottom fold
      drawPx(ctx, 18, 18 + bobY, "#e11d48", p, ox, oy);
      drawPx(ctx, 19, 17 + bobY, "#9f1239", p, ox, oy); // Outer wing crease accent

      // 4. Center Golden Clasp Knot (2x2)
      drawPx(ctx, 15, 17 + bobY, "#fff1f2", p, ox, oy); // High specular shine
      drawPx(ctx, 16, 17 + bobY, "#f43f5e", p, ox, oy);
      drawPx(ctx, 15, 18 + bobY, "#facc15", p, ox, oy); // Golden jewel/pearl brooch
      drawPx(ctx, 16, 18 + bobY, "#e11d48", p, ox, oy);

      // 5. Short Dainty Ribbon Tails (hanging naturally, not oversized)
      drawPx(ctx, 14, 19 + bobY, "#f43f5e", p, ox, oy);
      drawPx(ctx, 14, 20 + bobY, "#e11d48", p, ox, oy);
      drawPx(ctx, 17, 19 + bobY, "#f43f5e", p, ox, oy);
      drawPx(ctx, 17, 20 + bobY, "#e11d48", p, ox, oy);
      break;
    }

    // 7. DEVELOPER HOODIE / SUIT
    case "top_hoodie":
    case "suit_dev": {
      // Cozy Tech Charcoal/Cyan Hoodie with drawstrings
      drawRectPx(ctx, 10, 18 + bobY, 13, 6, "#1e293b", p, ox, oy);
      drawPx(ctx, 13, 19 + bobY, "#38bdf8", p, ox, oy); // Left string
      drawPx(ctx, 13, 21 + bobY, "#38bdf8", p, ox, oy);
      drawPx(ctx, 19, 19 + bobY, "#38bdf8", p, ox, oy); // Right string
      drawPx(ctx, 19, 21 + bobY, "#38bdf8", p, ox, oy);
      drawRectPx(ctx, 14, 21 + bobY, 5, 2, "#0f172a", p, ox, oy); // Kangaroo pocket
      break;
    }

    // 8. TUXEDO WITH BOWTIE
    case "suit_tuxedo":
    case "top_suit_shirt": {
      drawRectPx(ctx, 10, 18 + bobY, 13, 6, "#0f172a", p, ox, oy);
      drawRectPx(ctx, 14, 18 + bobY, 5, 5, "#ffffff", p, ox, oy); // White shirt V
      drawRectPx(ctx, 15, 18 + bobY, 3, 1, "#ef4444", p, ox, oy); // Red bowtie
      drawPx(ctx, 16, 20 + bobY, "#0f172a", p, ox, oy); // Button 1
      drawPx(ctx, 16, 22 + bobY, "#0f172a", p, ox, oy); // Button 2
      break;
    }

    // 9. KIMONO WITH SAKURA
    case "suit_kimono":
    case "sakura": {
      if (accessory === "sakura") {
        drawRectPx(ctx, 18, 6 + bobY, 3, 3, "#f472b6", p, ox, oy);
        drawPx(ctx, 19, 7 + bobY, "#fef08a", p, ox, oy); // Pistil
      } else {
        // Red & Gold Cherry Blossom Kimono with black Obi
        drawRectPx(ctx, 10, 18 + bobY, 13, 6, "#be123c", p, ox, oy);
        drawRectPx(ctx, 10, 21 + bobY, 13, 2, "#18181b", p, ox, oy); // Black Obi
        drawRectPx(ctx, 14, 21 + bobY, 5, 1, "#facc15", p, ox, oy); // Gold cord
      }
      break;
    }

    // 10. SANTA HAT / SUIT
    case "santa":
    case "suit_santa": {
      drawRectPx(ctx, 10, 3 + bobY, 13, 4, "#dc2626", p, ox, oy);
      drawRectPx(ctx, 8, 6 + bobY, 17, 2, "#f8fafc", p, ox, oy); // White fur trim
      drawRectPx(ctx, 22, 4 + bobY, 3, 3, "#f8fafc", p, ox, oy); // White pom-pom
      if (accessory === "suit_santa") {
        drawRectPx(ctx, 10, 18 + bobY, 13, 6, "#dc2626", p, ox, oy);
        drawRectPx(ctx, 10, 21 + bobY, 13, 1, "#18181b", p, ox, oy); // Belt
        drawPx(ctx, 16, 21 + bobY, "#facc15", p, ox, oy); // Buckle
      }
      break;
    }

    // 11. ANGEL HALO
    case "halo": {
      drawRectPx(ctx, 11, 2 + bobY, 11, 2, "#fde047", p, ox, oy);
      drawRectPx(ctx, 13, 3 + bobY, 7, 1, "#fef9c3", p, ox, oy);
      break;
    }

    // 12. SPROUT
    case "sprout": {
      drawRectPx(ctx, 15, 4 + bobY, 1, 3, "#22c55e", p, ox, oy);
      drawRectPx(ctx, 13, 3 + bobY, 3, 2, "#4ade80", p, ox, oy); // Left leaf
      drawRectPx(ctx, 16, 3 + bobY, 3, 2, "#4ade80", p, ox, oy); // Right leaf
      break;
    }

    // 13. JEANS / PANTS
    case "bottom_jeans":
    case "bottom_cyber_joggers": {
      const color = accessory === "bottom_jeans" ? "#2563eb" : "#06b6d4";
      drawRectPx(ctx, 11, 21 + bobY, 11, 3, color, p, ox, oy);
      drawPx(ctx, 16, 22 + bobY, "#1e293b", p, ox, oy); // Seam divider
      break;
    }

    default:
      break;
  }
}

// =========================================================================
// Interactive Props (Laptop, Coffee, Magnifying Glass, Glowsticks)
// =========================================================================
function renderKawaiiActivityProps(
  ctx: CanvasRenderingContext2D,
  activity: string,
  activityStep: number,
  p: number,
  ox: number,
  oy: number
) {
  if (activity === "type_keyboard") {
    // 💻 Pixel Laptop with glowing code & typing paws
    // Laptop Screen:
    drawRectPx(ctx, 2, 12, 9, 6, "#334155", p, ox, oy);
    drawRectPx(ctx, 3, 13, 7, 4, "#0f172a", p, ox, oy); // Screen
    drawRectPx(ctx, 4, 14, 4, 1, "#38bdf8", p, ox, oy); // Blue code line
    drawRectPx(ctx, 4, 15, 3, 1, activityStep % 2 === 0 ? "#22c55e" : "#facc15", p, ox, oy); // Green/Yellow cursor
    // Laptop Base / Keyboard
    drawRectPx(ctx, 1, 18, 11, 2, "#475569", p, ox, oy);
    drawRectPx(ctx, 2, 18, 9, 1, "#94a3b8", p, ox, oy);
    // Animated typing paws
    if (activityStep % 2 === 0) {
      drawRectPx(ctx, 4, 17, 2, 2, "#ffffff", p, ox, oy);
      drawRectPx(ctx, 8, 18, 2, 2, "#ffffff", p, ox, oy);
    } else {
      drawRectPx(ctx, 4, 18, 2, 2, "#ffffff", p, ox, oy);
      drawRectPx(ctx, 8, 17, 2, 2, "#ffffff", p, ox, oy);
    }
  } else if (activity === "coffee_time") {
    // ☕ Pixel Coffee Mug with rising steam
    const isSipping = activityStep % 2 === 1;
    const mugX = isSipping ? 12 : 4;
    const mugY = isSipping ? 13 : 16;
    drawRectPx(ctx, mugX, mugY, 5, 6, "#0284c7", p, ox, oy);
    drawRectPx(ctx, mugX + 1, mugY + 1, 3, 1, "#78350f", p, ox, oy); // Coffee
    drawRectPx(ctx, mugX + 5, mugY + 2, 2, 3, "#0284c7", p, ox, oy); // Handle
    // Steam
    if (activityStep === 0) {
      drawPx(ctx, mugX + 1, mugY - 2, "#cbd5e1", p, ox, oy);
      drawPx(ctx, mugX + 2, mugY - 3, "#f8fafc", p, ox, oy);
    } else {
      drawPx(ctx, mugX + 3, mugY - 2, "#cbd5e1", p, ox, oy);
      drawPx(ctx, mugX + 2, mugY - 3, "#f8fafc", p, ox, oy);
    }
  } else if (activity === "cheer_fan") {
    // 🌟 Glowsticks & Party Sparkles
    drawRectPx(ctx, 3, 10, 2, 6, "#ec4899", p, ox, oy); // Pink glowstick
    drawRectPx(ctx, 27, 10, 2, 6, "#06b6d4", p, ox, oy); // Cyan glowstick
    drawPx(ctx, 4, 8, "#facc15", p, ox, oy);
    drawPx(ctx, 28, 8, "#a855f7", p, ox, oy);
  } else if (activity === "inspect_copy" || activity === "magnifier_audit") {
    // 🔍 Magnifying Glass with lens glare & analysis sparkle
    drawRectPx(ctx, 4, 11, 7, 7, "#64748b", p, ox, oy);
    drawRectPx(ctx, 5, 12, 5, 5, "#e0f2fe", p, ox, oy); // Lens
    drawPx(ctx, 6, 13, "#ffffff", p, ox, oy); // Glint
    drawRectPx(ctx, 2, 17, 3, 3, "#b45309", p, ox, oy); // Handle
    // Floating inspection sparkle
    if (activityStep % 2 === 0) {
      drawPx(ctx, 7, 10, "#38bdf8", p, ox, oy);
      drawPx(ctx, 8, 9, "#facc15", p, ox, oy);
    }
  } else if (activity === "music_vibe") {
    // 🎵 Floating Rhythm Musical Notes
    const noteY = 4 + (activityStep % 2 === 0 ? 0 : -2);
    // Note 1 (♪)
    drawRectPx(ctx, 4, noteY, 2, 4, "#a855f7", p, ox, oy);
    drawPx(ctx, 6, noteY, "#a855f7", p, ox, oy);
    drawRectPx(ctx, 3, noteY + 3, 3, 2, "#9333ea", p, ox, oy);
    // Note 2 (♫)
    const note2Y = 2 + (activityStep % 2 === 1 ? 0 : -2);
    drawRectPx(ctx, 26, note2Y, 4, 1, "#06b6d4", p, ox, oy);
    drawRectPx(ctx, 26, note2Y + 1, 1, 3, "#06b6d4", p, ox, oy);
    drawRectPx(ctx, 29, note2Y + 1, 1, 3, "#06b6d4", p, ox, oy);
    drawRectPx(ctx, 25, note2Y + 3, 2, 2, "#0891b2", p, ox, oy);
    drawRectPx(ctx, 28, note2Y + 3, 2, 2, "#0891b2", p, ox, oy);
  } else if (activity === "snack_time") {
    // 🍩 Yummy Pixel Donut / Strawberry Treat with Chewing Crumbs
    const snackY = 16 + (activityStep % 2 === 0 ? 0 : -1);
    drawRectPx(ctx, 13, snackY, 6, 5, "#b45309", p, ox, oy); // Donut dough
    drawRectPx(ctx, 13, snackY, 6, 2, "#ec4899", p, ox, oy); // Strawberry icing
    drawPx(ctx, 14, snackY, "#ffffff", p, ox, oy); // Sprinkles
    drawPx(ctx, 16, snackY + 1, "#facc15", p, ox, oy);
    drawPx(ctx, 15, snackY + 2, "#38bdf8", p, ox, oy);
    // Chewing crumbs
    if (activityStep % 2 === 1) {
      drawPx(ctx, 11, snackY + 4, "#d97706", p, ox, oy);
      drawPx(ctx, 20, snackY + 3, "#ec4899", p, ox, oy);
    }
  } else if (activity === "gaming_retro") {
    // 🎮 Tiny Retro Handheld Console with glowing screen
    drawRectPx(ctx, 3, 13, 8, 8, "#6366f1", p, ox, oy); // Handheld body
    drawRectPx(ctx, 4, 14, 6, 4, "#22c55e", p, ox, oy); // Retro green screen
    drawPx(ctx, 5, 15, "#15803d", p, ox, oy); // Pixel character
    drawPx(ctx, 7, 16, "#15803d", p, ox, oy);
    // Buttons
    drawPx(ctx, 5, 19, "#312e81", p, ox, oy); // D-pad
    drawPx(ctx, 8, 19, "#ef4444", p, ox, oy); // A button
    drawPx(ctx, 9, 18, "#eab308", p, ox, oy); // B button
  }
}

// =========================================================================
// Main Entry: Render Realistic Kawaii Pixel Pet
// =========================================================================
export function renderKawaiiPixelPet(options: PixelArtRenderOptions) {
  const {
    ctx,
    size,
    species = "cat",
    accessory = "none",
    activity = "none",
    activityStep = 0,
    facingLeft = false,
  } = options;

  ctx.save();

  // 32x32 native pixel grid smoothly mapped to target size
  const gridCells = 32;
  const p = size / gridCells;
  const ox = 0;
  const oy = 0;

  // Clear frame
  ctx.clearRect(0, 0, size, size);

  // Flip horizontally if facing left
  if (facingLeft) {
    ctx.translate(size, 0);
    ctx.scale(-1, 1);
  }

  const palette = KAWAII_PALETTES[species] || KAWAII_PALETTES.cat;

  // 1. Draw Pet Base (Species)
  renderKawaiiSpecies(ctx, species, palette, p, ox, oy, options);

  // 2. Draw Accessory Overlay
  if (accessory !== "none") {
    renderKawaiiAccessory(ctx, accessory, p, ox, oy, options);
  }

  // 3. Draw Activity Props
  if (activity !== "none") {
    renderKawaiiActivityProps(ctx, activity, activityStep, p, ox, oy);
  }

  ctx.restore();
}
