// =========================================================================
// Kawaii Pixel Pet Accessory & Wardrobe Renderer (Native 32x32 Grid)
// =========================================================================
// Every accessory is carefully mapped to the pet's 32x32 anatomy:
// - Head: Y = 7..16, X = 9..24 (Eyes: 12..14 & 18..20, Nose: 16, Mouth: 15..17)
// - Neck: Y = 17, X = 11..21 (Collar band & Bowtie zone)
// - Torso: Y = 18..21, X = 10..22 (Shoulders: 10..12 & 20..22, Chest: 13..19)
// - Waist / Pelvis: Y = 19..22, X = 11..21 (Full waistband, inseam at X=16)
// - Front Paws: Y = 22..24 (Left: 13..15, Right: 17..19) - Naturally step out below cuffs!
// All coordinates naturally adjust with breathing/walking bobY.

import { PetAccessory } from "./petData";

export interface AccessoryRenderContext {
  ctx: CanvasRenderingContext2D;
  p: number; // Scale factor per grid cell
  ox: number;
  oy: number;
  bobY: number;
}

export function drawPx(
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

export function drawRectPx(
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
  if (!color || color === "transparent" || w <= 0 || h <= 0) return;
  ctx.fillStyle = color;
  ctx.fillRect(
    Math.round(offsetX + x * pxScale),
    Math.round(offsetY + y * pxScale),
    Math.round(w * pxScale),
    Math.round(h * pxScale)
  );
}

// -------------------------------------------------------------------------
// 1. FULL SUITS (整套服饰)
// -------------------------------------------------------------------------
function renderSuitAstronaut(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  // 1. Glass Bubble Helmet (curved clear dome, transparent visor showing pet face)
  drawRectPx(ctx, 11, 5 + bobY, 10, 1, "#e2e8f0", p, ox, oy); // Helmet top rim
  drawRectPx(ctx, 9, 6 + bobY, 2, 2, "#cbd5e1", p, ox, oy); // Left arch
  drawRectPx(ctx, 21, 6 + bobY, 2, 2, "#cbd5e1", p, ox, oy); // Right arch
  drawRectPx(ctx, 8, 8 + bobY, 1, 8, "#94a3b8", p, ox, oy); // Left side rim
  drawRectPx(ctx, 23, 8 + bobY, 1, 8, "#94a3b8", p, ox, oy); // Right side rim
  // Ear comm units
  drawRectPx(ctx, 7, 10 + bobY, 2, 4, "#0284c7", p, ox, oy);
  drawRectPx(ctx, 23, 10 + bobY, 2, 4, "#0284c7", p, ox, oy);
  // Transparent cyan visor tint (face shines through)
  drawRectPx(ctx, 9, 8 + bobY, 14, 8, "rgba(56, 189, 248, 0.18)", p, ox, oy);
  // Visor curved glint
  drawPx(ctx, 11, 7 + bobY, "#ffffff", p, ox, oy);
  drawPx(ctx, 12, 7 + bobY, "#ffffff", p, ox, oy);
  drawPx(ctx, 10, 8 + bobY, "#ffffff", p, ox, oy);
  // Neck latch pressure ring
  drawRectPx(ctx, 10, 16 + bobY, 12, 2, "#0284c7", p, ox, oy);
  drawRectPx(ctx, 12, 16 + bobY, 8, 1, "#38bdf8", p, ox, oy);

  // 2. Pressurized NASA Suit Torso
  drawRectPx(ctx, 10, 18 + bobY, 3, 4, "#0284c7", p, ox, oy); // Left shoulder pauldron
  drawRectPx(ctx, 19, 18 + bobY, 3, 4, "#0284c7", p, ox, oy); // Right shoulder pauldron
  drawRectPx(ctx, 13, 18 + bobY, 6, 3, "#f8fafc", p, ox, oy); // White chest
  // Life support control panel
  drawRectPx(ctx, 14, 19 + bobY, 4, 2, "#1e293b", p, ox, oy);
  drawPx(ctx, 14, 19 + bobY, "#ef4444", p, ox, oy); // Red LED
  drawPx(ctx, 15, 19 + bobY, "#22c55e", p, ox, oy); // Green LED
  drawPx(ctx, 17, 19 + bobY, "#38bdf8", p, ox, oy); // Cyan readout
  // Gold EVA Utility Belt
  drawRectPx(ctx, 11, 21 + bobY, 10, 1, "#eab308", p, ox, oy);
  drawPx(ctx, 16, 21 + bobY, "#fef08a", p, ox, oy); // Belt buckle

  // 3. Pressurized EVA Space Boots over paws
  drawRectPx(ctx, 11, 21 + bobY, 10, 2, "#e2e8f0", p, ox, oy);
  drawPx(ctx, 16, 21 + bobY, "#94a3b8", p, ox, oy);
  drawPx(ctx, 16, 22 + bobY, "#94a3b8", p, ox, oy);
  drawRectPx(ctx, 13, 23 + bobY, 3, 1, "#0284c7", p, ox, oy);
  drawRectPx(ctx, 17, 23 + bobY, 3, 1, "#0284c7", p, ox, oy);
}

function renderSuitWizard(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  // 1. Pointed Starry Cone Hat
  drawRectPx(ctx, 11, 7 + bobY, 10, 1, "#581c87", p, ox, oy); // Brim
  drawRectPx(ctx, 12, 7 + bobY, 8, 1, "#eab308", p, ox, oy); // Gold ribbon
  drawRectPx(ctx, 12, 5 + bobY, 8, 2, "#6b21a8", p, ox, oy); // Cone lower
  drawRectPx(ctx, 13, 3 + bobY, 6, 2, "#7e22ce", p, ox, oy); // Cone mid
  drawRectPx(ctx, 14, 1 + bobY, 4, 2, "#9333ea", p, ox, oy); // Cone upper
  drawPx(ctx, 15, 0 + bobY, "#a855f7", p, ox, oy); // Curved tip
  // Gold Star Charm
  drawPx(ctx, 16, 4 + bobY, "#fde047", p, ox, oy);
  drawPx(ctx, 15, 4 + bobY, "#facc15", p, ox, oy);
  drawPx(ctx, 17, 4 + bobY, "#facc15", p, ox, oy);

  // 2. Arcane Midnight Robe
  drawRectPx(ctx, 11, 17 + bobY, 10, 1, "#7e22ce", p, ox, oy); // High collar
  drawRectPx(ctx, 10, 18 + bobY, 3, 4, "#581c87", p, ox, oy); // Left wide sleeve
  drawRectPx(ctx, 19, 18 + bobY, 3, 4, "#581c87", p, ox, oy); // Right wide sleeve
  drawRectPx(ctx, 13, 18 + bobY, 6, 3, "#3b0764", p, ox, oy); // Robe center
  // Gold Star Medallion
  drawPx(ctx, 16, 18 + bobY, "#facc15", p, ox, oy);
  drawPx(ctx, 16, 19 + bobY, "#fde047", p, ox, oy);
  // Gold Rune Sash & Robe skirt
  drawRectPx(ctx, 11, 21 + bobY, 10, 2, "#4c1d95", p, ox, oy);
  drawPx(ctx, 16, 21 + bobY, "#eab308", p, ox, oy);
  drawPx(ctx, 13, 21 + bobY, "#fde047", p, ox, oy);
  drawPx(ctx, 18, 21 + bobY, "#fde047", p, ox, oy);
}

function renderSuitNinja(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  // 1. Ninja Headband with Metal Plate
  drawRectPx(ctx, 10, 8 + bobY, 12, 1, "#0f172a", p, ox, oy); // Black cloth
  drawRectPx(ctx, 14, 8 + bobY, 4, 1, "#e2e8f0", p, ox, oy); // Silver plate
  drawPx(ctx, 15, 8 + bobY, "#475569", p, ox, oy); // Engraved emblem
  drawPx(ctx, 16, 8 + bobY, "#475569", p, ox, oy);
  // Red ribbon knot & tails on left
  drawPx(ctx, 9, 8 + bobY, "#ef4444", p, ox, oy);
  drawPx(ctx, 8, 9 + bobY, "#ef4444", p, ox, oy);
  drawPx(ctx, 8, 10 + bobY, "#dc2626", p, ox, oy);

  // 2. Stealth Shinobi Attire
  drawRectPx(ctx, 11, 17 + bobY, 10, 1, "#0f172a", p, ox, oy); // Cowl neckline
  drawRectPx(ctx, 10, 18 + bobY, 3, 4, "#1e293b", p, ox, oy); // Left arm guards
  drawRectPx(ctx, 19, 18 + bobY, 3, 4, "#1e293b", p, ox, oy); // Right arm guards
  drawRectPx(ctx, 13, 18 + bobY, 6, 3, "#0f172a", p, ox, oy); // Shinobi vest
  // Silver cross harness
  drawPx(ctx, 14, 18 + bobY, "#94a3b8", p, ox, oy);
  drawPx(ctx, 15, 19 + bobY, "#cbd5e1", p, ox, oy);
  drawPx(ctx, 17, 18 + bobY, "#94a3b8", p, ox, oy);
  drawPx(ctx, 16, 20 + bobY, "#cbd5e1", p, ox, oy);
  // Crimson Obi Sash
  drawRectPx(ctx, 11, 21 + bobY, 10, 1, "#ef4444", p, ox, oy);
  drawPx(ctx, 15, 21 + bobY, "#f87171", p, ox, oy);
  // Shinobi Trousers & Wrapped Bandages on paws
  drawRectPx(ctx, 11, 21 + bobY, 10, 2, "#0f172a", p, ox, oy);
  drawPx(ctx, 16, 21 + bobY, "#1e293b", p, ox, oy);
  drawPx(ctx, 16, 22 + bobY, "#1e293b", p, ox, oy);
  drawRectPx(ctx, 13, 23 + bobY, 3, 1, "#f8fafc", p, ox, oy);
  drawRectPx(ctx, 17, 23 + bobY, 3, 1, "#f8fafc", p, ox, oy);
}

function renderSuitKimono(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  // 1. Sakura Flower Pin behind right ear
  drawRectPx(ctx, 20, 6 + bobY, 3, 2, "#f472b6", p, ox, oy);
  drawPx(ctx, 21, 6 + bobY, "#fde047", p, ox, oy); // Gold stamen

  // 2. Haori Robe & Hakama
  drawRectPx(ctx, 10, 17 + bobY, 12, 1, "#e11d48", p, ox, oy); // Robe top
  drawRectPx(ctx, 14, 17 + bobY, 4, 2, "#ffffff", p, ox, oy); // Overlapping white silk collar
  drawPx(ctx, 15, 17 + bobY, "#f8fafc", p, ox, oy);
  // Wide red kimono sleeves
  drawRectPx(ctx, 10, 18 + bobY, 3, 4, "#be123c", p, ox, oy);
  drawRectPx(ctx, 19, 18 + bobY, 3, 4, "#be123c", p, ox, oy);
  drawRectPx(ctx, 13, 19 + bobY, 6, 2, "#e11d48", p, ox, oy);
  // Royal purple & gold Obi Sash
  drawRectPx(ctx, 11, 20 + bobY, 10, 2, "#7e22ce", p, ox, oy);
  drawRectPx(ctx, 14, 20 + bobY, 4, 1, "#facc15", p, ox, oy); // Golden Obi knot
  // Robe lower hem
  drawRectPx(ctx, 11, 22 + bobY, 10, 1, "#be123c", p, ox, oy);
}

function renderSuitTuxedo(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  // 1. Silk Top Hat
  drawRectPx(ctx, 12, 6 + bobY, 8, 1, "#020617", p, ox, oy); // Brim
  drawRectPx(ctx, 13, 2 + bobY, 6, 4, "#0f172a", p, ox, oy); // Cylinder
  drawRectPx(ctx, 13, 5 + bobY, 6, 1, "#ef4444", p, ox, oy); // Red ribbon
  drawPx(ctx, 14, 3 + bobY, "#64748b", p, ox, oy); // Silk sheen

  // 2. Double-Breasted Tailcoat & Shirt
  drawRectPx(ctx, 10, 18 + bobY, 3, 4, "#0f172a", p, ox, oy); // Left black lapel
  drawRectPx(ctx, 19, 18 + bobY, 3, 4, "#0f172a", p, ox, oy); // Right black lapel
  drawRectPx(ctx, 13, 17 + bobY, 6, 4, "#ffffff", p, ox, oy); // Crisp white shirt
  // Red bowtie
  drawRectPx(ctx, 15, 17 + bobY, 2, 1, "#ef4444", p, ox, oy);
  drawPx(ctx, 14, 17 + bobY, "#dc2626", p, ox, oy);
  drawPx(ctx, 17, 17 + bobY, "#dc2626", p, ox, oy);
  // Gold buttons
  drawPx(ctx, 16, 19 + bobY, "#facc15", p, ox, oy);
  drawPx(ctx, 16, 20 + bobY, "#facc15", p, ox, oy);

  // 3. Black Tailored Dress Trousers
  drawRectPx(ctx, 11, 21 + bobY, 10, 2, "#09090b", p, ox, oy);
  drawPx(ctx, 16, 21 + bobY, "#000000", p, ox, oy);
  drawPx(ctx, 16, 22 + bobY, "#000000", p, ox, oy);
  drawPx(ctx, 11, 21 + bobY, "#334155", p, ox, oy); // Satin stripe
  drawPx(ctx, 20, 21 + bobY, "#334155", p, ox, oy);

  // 4. Polished Black Patent Leather Shoes on paws
  drawRectPx(ctx, 13, 23 + bobY, 3, 1, "#020617", p, ox, oy);
  drawPx(ctx, 13, 23 + bobY, "#94a3b8", p, ox, oy);
  drawRectPx(ctx, 17, 23 + bobY, 3, 1, "#020617", p, ox, oy);
  drawPx(ctx, 17, 23 + bobY, "#94a3b8", p, ox, oy);
}

function renderSuitSanta(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  // 1. Santa Hat
  drawRectPx(ctx, 11, 7 + bobY, 10, 1, "#ffffff", p, ox, oy); // White fluffy brim
  drawRectPx(ctx, 13, 4 + bobY, 7, 3, "#ef4444", p, ox, oy); // Red crown
  drawRectPx(ctx, 19, 5 + bobY, 3, 2, "#dc2626", p, ox, oy); // Slouch right
  drawRectPx(ctx, 21, 6 + bobY, 2, 2, "#ffffff", p, ox, oy); // White pom-pom

  // 2. Velvet Red Coat with White Fur
  drawRectPx(ctx, 11, 17 + bobY, 10, 1, "#ffffff", p, ox, oy); // White fur collar
  drawRectPx(ctx, 10, 18 + bobY, 3, 4, "#ef4444", p, ox, oy); // Left red sleeve
  drawRectPx(ctx, 19, 18 + bobY, 3, 4, "#ef4444", p, ox, oy); // Right red sleeve
  drawRectPx(ctx, 13, 18 + bobY, 6, 3, "#dc2626", p, ox, oy);
  drawRectPx(ctx, 15, 18 + bobY, 2, 3, "#ffffff", p, ox, oy); // Center white fur strip
  // Black Leather Belt with Gold Buckle
  drawRectPx(ctx, 11, 21 + bobY, 10, 1, "#0f172a", p, ox, oy);
  drawPx(ctx, 15, 21 + bobY, "#facc15", p, ox, oy);
  drawPx(ctx, 16, 21 + bobY, "#fde047", p, ox, oy);

  // 3. Red Velvet Trousers & Snow Boots on paws
  drawRectPx(ctx, 11, 21 + bobY, 10, 2, "#b91c1c", p, ox, oy);
  drawPx(ctx, 16, 21 + bobY, "#991b1b", p, ox, oy);
  drawPx(ctx, 16, 22 + bobY, "#991b1b", p, ox, oy);
  drawRectPx(ctx, 13, 22 + bobY, 3, 1, "#ffffff", p, ox, oy);
  drawRectPx(ctx, 13, 23 + bobY, 3, 1, "#0f172a", p, ox, oy);
  drawRectPx(ctx, 17, 22 + bobY, 3, 1, "#ffffff", p, ox, oy);
  drawRectPx(ctx, 17, 23 + bobY, 3, 1, "#0f172a", p, ox, oy);
}

function renderSuitEmperor(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  // 1. Royal Crown
  drawRectPx(ctx, 13, 7 + bobY, 6, 1, "#eab308", p, ox, oy);
  drawPx(ctx, 13, 5 + bobY, "#facc15", p, ox, oy);
  drawPx(ctx, 16, 4 + bobY, "#facc15", p, ox, oy); // Tall middle tip
  drawPx(ctx, 18, 5 + bobY, "#facc15", p, ox, oy);
  drawPx(ctx, 16, 6 + bobY, "#ef4444", p, ox, oy); // Ruby

  // 2. Imperial Mantle & Golden Cuirass
  drawRectPx(ctx, 11, 17 + bobY, 10, 1, "#ffffff", p, ox, oy); // Ermine white fur collar
  drawPx(ctx, 13, 17 + bobY, "#0f172a", p, ox, oy); // Ermine spot
  drawPx(ctx, 18, 17 + bobY, "#0f172a", p, ox, oy);
  // Royal Crimson Cape on flanks
  drawRectPx(ctx, 10, 18 + bobY, 3, 5, "#991b1b", p, ox, oy);
  drawRectPx(ctx, 19, 18 + bobY, 3, 5, "#991b1b", p, ox, oy);
  // Golden Chest Armor
  drawRectPx(ctx, 13, 18 + bobY, 6, 3, "#facc15", p, ox, oy);
  drawPx(ctx, 16, 19 + bobY, "#3b82f6", p, ox, oy); // Sapphire emblem
  // Imperial Gold Belt & Royal Robe
  drawRectPx(ctx, 11, 21 + bobY, 10, 1, "#eab308", p, ox, oy);
  drawRectPx(ctx, 11, 22 + bobY, 10, 1, "#7f1d1d", p, ox, oy);
  // Gold Imperial Boots on paws
  drawRectPx(ctx, 13, 23 + bobY, 3, 1, "#facc15", p, ox, oy);
  drawRectPx(ctx, 17, 23 + bobY, 3, 1, "#facc15", p, ox, oy);
}

function renderSuitDev(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  // 1. Dark Developer Sunglasses (symmetrical, nose at X=16 clear)
  drawRectPx(ctx, 11, 12 + bobY, 4, 3, "#0f172a", p, ox, oy);
  drawRectPx(ctx, 17, 12 + bobY, 4, 3, "#0f172a", p, ox, oy);
  drawRectPx(ctx, 15, 12 + bobY, 2, 1, "#0f172a", p, ox, oy);
  drawPx(ctx, 12, 12 + bobY, "#38bdf8", p, ox, oy); // Cyan monitor glare
  drawPx(ctx, 18, 12 + bobY, "#38bdf8", p, ox, oy);

  // 2. Tech Hoodie
  drawRectPx(ctx, 11, 17 + bobY, 10, 1, "#1e293b", p, ox, oy);
  drawRectPx(ctx, 10, 18 + bobY, 3, 4, "#1e293b", p, ox, oy);
  drawRectPx(ctx, 19, 18 + bobY, 3, 4, "#1e293b", p, ox, oy);
  drawRectPx(ctx, 13, 18 + bobY, 6, 3, "#334155", p, ox, oy);
  // Cyan drawstrings
  drawPx(ctx, 14, 18 + bobY, "#38bdf8", p, ox, oy);
  drawPx(ctx, 14, 19 + bobY, "#38bdf8", p, ox, oy);
  drawPx(ctx, 17, 18 + bobY, "#38bdf8", p, ox, oy);
  drawPx(ctx, 17, 19 + bobY, "#38bdf8", p, ox, oy);
  // Kangaroo Pocket
  drawRectPx(ctx, 14, 20 + bobY, 4, 1, "#0f172a", p, ox, oy);
  // Terminal Prompt Badge
  drawPx(ctx, 12, 19 + bobY, "#22c55e", p, ox, oy);

  // 3. Techwear Denim & Sneakers
  drawRectPx(ctx, 11, 21 + bobY, 10, 2, "#1e3a8a", p, ox, oy);
  drawPx(ctx, 16, 21 + bobY, "#0f172a", p, ox, oy);
  drawPx(ctx, 16, 22 + bobY, "#0f172a", p, ox, oy);
  // White Tech Sneakers on paws
  drawRectPx(ctx, 13, 23 + bobY, 3, 1, "#f8fafc", p, ox, oy);
  drawPx(ctx, 14, 23 + bobY, "#38bdf8", p, ox, oy);
  drawRectPx(ctx, 17, 23 + bobY, 3, 1, "#f8fafc", p, ox, oy);
  drawPx(ctx, 18, 23 + bobY, "#38bdf8", p, ox, oy);
}

function renderSuitRockstar(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  // 1. Red Rebel Punk Bandana
  drawRectPx(ctx, 10, 8 + bobY, 12, 1, "#dc2626", p, ox, oy);
  drawPx(ctx, 9, 8 + bobY, "#ef4444", p, ox, oy); // Knot left
  drawPx(ctx, 8, 9 + bobY, "#ef4444", p, ox, oy);

  // 2. Studded Black Leather Biker Jacket
  drawRectPx(ctx, 10, 17 + bobY, 12, 1, "#18181b", p, ox, oy); // Notched collar
  drawRectPx(ctx, 10, 18 + bobY, 3, 4, "#0f172a", p, ox, oy); // Left leather sleeve
  drawRectPx(ctx, 19, 18 + bobY, 3, 4, "#0f172a", p, ox, oy); // Right leather sleeve
  drawRectPx(ctx, 13, 18 + bobY, 6, 3, "#27272a", p, ox, oy);
  // Silver metal spikes / studs
  drawPx(ctx, 11, 18 + bobY, "#f8fafc", p, ox, oy);
  drawPx(ctx, 20, 18 + bobY, "#f8fafc", p, ox, oy);
  // Yellow Lightning Bolt Patch
  drawPx(ctx, 14, 19 + bobY, "#facc15", p, ox, oy);
  drawPx(ctx, 15, 20 + bobY, "#fde047", p, ox, oy);
  // Silver zipper
  drawPx(ctx, 16, 18 + bobY, "#cbd5e1", p, ox, oy);
  drawPx(ctx, 16, 19 + bobY, "#cbd5e1", p, ox, oy);
  // Metal Skull Buckle & Belt
  drawRectPx(ctx, 11, 21 + bobY, 10, 1, "#09090b", p, ox, oy);
  drawPx(ctx, 15, 21 + bobY, "#f8fafc", p, ox, oy);
  drawPx(ctx, 16, 21 + bobY, "#cbd5e1", p, ox, oy);

  // 3. Black Distressed Denim & Combat Boots
  drawRectPx(ctx, 11, 21 + bobY, 10, 2, "#18181b", p, ox, oy);
  drawPx(ctx, 16, 21 + bobY, "#09090b", p, ox, oy);
  drawPx(ctx, 16, 22 + bobY, "#09090b", p, ox, oy);
  drawRectPx(ctx, 13, 23 + bobY, 3, 1, "#09090b", p, ox, oy);
  drawPx(ctx, 14, 23 + bobY, "#cbd5e1", p, ox, oy);
  drawRectPx(ctx, 17, 23 + bobY, 3, 1, "#09090b", p, ox, oy);
  drawPx(ctx, 18, 23 + bobY, "#cbd5e1", p, ox, oy);
}

function renderSuitCyberMecha(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  // 1. Holographic HUD Visor (translucent, eyes shine through)
  drawRectPx(ctx, 10, 12 + bobY, 12, 1, "#064e3b", p, ox, oy);
  drawRectPx(ctx, 11, 12 + bobY, 4, 2, "rgba(6, 182, 212, 0.4)", p, ox, oy);
  drawRectPx(ctx, 17, 12 + bobY, 4, 2, "rgba(6, 182, 212, 0.4)", p, ox, oy);
  drawPx(ctx, 13, 12 + bobY, "#ffffff", p, ox, oy); // Glint
  drawPx(ctx, 19, 12 + bobY, "#ffffff", p, ox, oy);

  // 2. Titanium Exoskeleton Cuirass
  drawRectPx(ctx, 10, 17 + bobY, 12, 1, "#334155", p, ox, oy);
  drawRectPx(ctx, 10, 18 + bobY, 3, 4, "#0284c7", p, ox, oy); // Pauldrons
  drawRectPx(ctx, 19, 18 + bobY, 3, 4, "#0284c7", p, ox, oy);
  drawRectPx(ctx, 13, 18 + bobY, 6, 3, "#475569", p, ox, oy);
  // Glowing Cyan Arc Reactor Core
  drawRectPx(ctx, 15, 19 + bobY, 2, 2, "#38bdf8", p, ox, oy);
  drawPx(ctx, 15, 19 + bobY, "#ffffff", p, ox, oy);
  // Mech Servo Belt
  drawRectPx(ctx, 11, 21 + bobY, 10, 1, "#0f172a", p, ox, oy);
  drawPx(ctx, 13, 21 + bobY, "#38bdf8", p, ox, oy);
  drawPx(ctx, 18, 21 + bobY, "#38bdf8", p, ox, oy);

  // 3. Titanium Leg Armors & Mag-Lev Boots
  drawRectPx(ctx, 11, 21 + bobY, 10, 2, "#334155", p, ox, oy);
  drawPx(ctx, 16, 21 + bobY, "#0f172a", p, ox, oy);
  drawPx(ctx, 16, 22 + bobY, "#0f172a", p, ox, oy);
  drawRectPx(ctx, 13, 23 + bobY, 3, 1, "#0284c7", p, ox, oy);
  drawPx(ctx, 14, 23 + bobY, "#38bdf8", p, ox, oy);
  drawRectPx(ctx, 17, 23 + bobY, 3, 1, "#0284c7", p, ox, oy);
  drawPx(ctx, 18, 23 + bobY, "#38bdf8", p, ox, oy);
}

function renderSuitScientist(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  // 1. Steampunk Safety Goggles on forehead (not covering eyes)
  drawRectPx(ctx, 11, 8 + bobY, 10, 2, "#78350f", p, ox, oy); // Leather strap
  drawRectPx(ctx, 12, 8 + bobY, 3, 2, "#10b981", p, ox, oy); // Green lens left
  drawRectPx(ctx, 17, 8 + bobY, 3, 2, "#10b981", p, ox, oy); // Green lens right
  drawPx(ctx, 13, 8 + bobY, "#ffffff", p, ox, oy);

  // 2. White Laboratory Coat
  drawRectPx(ctx, 11, 17 + bobY, 10, 1, "#f8fafc", p, ox, oy);
  drawRectPx(ctx, 10, 18 + bobY, 3, 4, "#f8fafc", p, ox, oy); // White sleeves
  drawRectPx(ctx, 19, 18 + bobY, 3, 4, "#f8fafc", p, ox, oy);
  drawRectPx(ctx, 13, 18 + bobY, 6, 4, "#e2e8f0", p, ox, oy); // Lab coat chest
  // Eccentric Yellow Bowtie
  drawPx(ctx, 15, 17 + bobY, "#facc15", p, ox, oy);
  drawPx(ctx, 16, 17 + bobY, "#eab308", p, ox, oy);
  // Pocket with Bubbling Potion Flask
  drawRectPx(ctx, 12, 19 + bobY, 2, 2, "#cbd5e1", p, ox, oy);
  drawPx(ctx, 12, 18 + bobY, "#22c55e", p, ox, oy); // Green potion neck

  // 3. Grey Slacks & Leather Oxford Shoes
  drawRectPx(ctx, 11, 21 + bobY, 10, 2, "#475569", p, ox, oy);
  drawPx(ctx, 16, 21 + bobY, "#1e293b", p, ox, oy);
  drawPx(ctx, 16, 22 + bobY, "#1e293b", p, ox, oy);
  drawRectPx(ctx, 13, 23 + bobY, 3, 1, "#78350f", p, ox, oy);
  drawPx(ctx, 14, 23 + bobY, "#92400e", p, ox, oy);
  drawRectPx(ctx, 17, 23 + bobY, 3, 1, "#78350f", p, ox, oy);
  drawPx(ctx, 18, 23 + bobY, "#92400e", p, ox, oy);
}

// -------------------------------------------------------------------------
// 2. TOPS & OUTERWEAR (上衣 / 外套)
// -------------------------------------------------------------------------
function renderTopHoodie(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  drawRectPx(ctx, 11, 17 + bobY, 10, 1, "#1e293b", p, ox, oy); // Collar rim
  drawRectPx(ctx, 10, 18 + bobY, 3, 4, "#334155", p, ox, oy); // Left sleeve
  drawRectPx(ctx, 19, 18 + bobY, 3, 4, "#334155", p, ox, oy); // Right sleeve
  drawRectPx(ctx, 13, 18 + bobY, 6, 3, "#475569", p, ox, oy); // Chest
  // Drawstrings
  drawPx(ctx, 14, 18 + bobY, "#38bdf8", p, ox, oy);
  drawPx(ctx, 14, 19 + bobY, "#38bdf8", p, ox, oy);
  drawPx(ctx, 17, 18 + bobY, "#38bdf8", p, ox, oy);
  drawPx(ctx, 17, 19 + bobY, "#38bdf8", p, ox, oy);
  // Kangaroo pouch
  drawRectPx(ctx, 14, 20 + bobY, 4, 1, "#1e293b", p, ox, oy);
  // Waist hem rib
  drawRectPx(ctx, 11, 21 + bobY, 10, 1, "#1e293b", p, ox, oy);
}

function renderTopSuitShirt(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  drawRectPx(ctx, 11, 17 + bobY, 10, 1, "#ffffff", p, ox, oy);
  drawRectPx(ctx, 10, 18 + bobY, 3, 4, "#1e293b", p, ox, oy); // Vest side left
  drawRectPx(ctx, 19, 18 + bobY, 3, 4, "#1e293b", p, ox, oy); // Vest side right
  drawRectPx(ctx, 13, 18 + bobY, 6, 3, "#f8fafc", p, ox, oy); // White shirt front
  // Red Bowtie
  drawRectPx(ctx, 15, 17 + bobY, 2, 1, "#ef4444", p, ox, oy);
  drawPx(ctx, 14, 17 + bobY, "#dc2626", p, ox, oy);
  drawPx(ctx, 17, 17 + bobY, "#dc2626", p, ox, oy);
  // Buttons
  drawPx(ctx, 16, 19 + bobY, "#facc15", p, ox, oy);
  drawPx(ctx, 16, 20 + bobY, "#facc15", p, ox, oy);
  // Hem
  drawRectPx(ctx, 11, 21 + bobY, 10, 1, "#0f172a", p, ox, oy);
}

function renderTopHawaiian(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  // Turquoise Tropical Resort Shirt
  drawRectPx(ctx, 10, 17 + bobY, 12, 1, "#0d9488", p, ox, oy);
  drawRectPx(ctx, 10, 18 + bobY, 3, 4, "#0f766e", p, ox, oy); // Left sleeve
  drawRectPx(ctx, 19, 18 + bobY, 3, 4, "#0f766e", p, ox, oy); // Right sleeve
  drawRectPx(ctx, 13, 18 + bobY, 6, 3, "#14b8a6", p, ox, oy); // Body
  // Open camp collar V
  drawPx(ctx, 15, 17 + bobY, "#fdfbf7", p, ox, oy);
  drawPx(ctx, 16, 17 + bobY, "#fdfbf7", p, ox, oy);
  // Tropical flower prints
  drawPx(ctx, 11, 19 + bobY, "#facc15", p, ox, oy);
  drawPx(ctx, 14, 19 + bobY, "#f87171", p, ox, oy);
  drawPx(ctx, 17, 20 + bobY, "#facc15", p, ox, oy);
  drawPx(ctx, 20, 19 + bobY, "#f87171", p, ox, oy);
  // Hem
  drawRectPx(ctx, 11, 21 + bobY, 10, 1, "#0f766e", p, ox, oy);
}

function renderTopCyberJacket(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  drawRectPx(ctx, 11, 17 + bobY, 10, 1, "#0f172a", p, ox, oy);
  drawRectPx(ctx, 10, 18 + bobY, 3, 4, "#1e293b", p, ox, oy);
  drawRectPx(ctx, 19, 18 + bobY, 3, 4, "#1e293b", p, ox, oy);
  drawRectPx(ctx, 13, 18 + bobY, 6, 3, "#0f172a", p, ox, oy);
  // Glowing Neon Cyan & Yellow Circuit Traces
  drawPx(ctx, 10, 18 + bobY, "#06b6d4", p, ox, oy);
  drawPx(ctx, 11, 19 + bobY, "#06b6d4", p, ox, oy);
  drawPx(ctx, 21, 18 + bobY, "#06b6d4", p, ox, oy);
  drawPx(ctx, 20, 19 + bobY, "#06b6d4", p, ox, oy);
  drawPx(ctx, 16, 18 + bobY, "#facc15", p, ox, oy);
  drawPx(ctx, 16, 19 + bobY, "#facc15", p, ox, oy);
  // Hem
  drawRectPx(ctx, 11, 21 + bobY, 10, 1, "#020617", p, ox, oy);
}

function renderTopSweater(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  // Warm Knitted Cable Caramel Sweater
  drawRectPx(ctx, 11, 17 + bobY, 10, 1, "#b45309", p, ox, oy); // Crewneck rib
  drawRectPx(ctx, 10, 18 + bobY, 3, 4, "#d97706", p, ox, oy); // Left knit sleeve
  drawRectPx(ctx, 19, 18 + bobY, 3, 4, "#d97706", p, ox, oy); // Right knit sleeve
  drawRectPx(ctx, 13, 18 + bobY, 6, 3, "#f59e0b", p, ox, oy); // Body
  // Cable knit braid pattern in center
  drawPx(ctx, 15, 18 + bobY, "#fef3c7", p, ox, oy);
  drawPx(ctx, 16, 19 + bobY, "#fef3c7", p, ox, oy);
  drawPx(ctx, 15, 20 + bobY, "#fef3c7", p, ox, oy);
  drawPx(ctx, 16, 21 + bobY, "#fef3c7", p, ox, oy);
  // Waist rib hem
  drawRectPx(ctx, 11, 21 + bobY, 10, 1, "#b45309", p, ox, oy);
}

function renderTopLeatherJacket(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  drawRectPx(ctx, 10, 17 + bobY, 12, 1, "#18181b", p, ox, oy);
  drawRectPx(ctx, 10, 18 + bobY, 3, 4, "#09090b", p, ox, oy);
  drawRectPx(ctx, 19, 18 + bobY, 3, 4, "#09090b", p, ox, oy);
  drawRectPx(ctx, 13, 18 + bobY, 6, 3, "#18181b", p, ox, oy);
  // Asymmetrical silver zipper
  drawPx(ctx, 16, 18 + bobY, "#cbd5e1", p, ox, oy);
  drawPx(ctx, 15, 19 + bobY, "#cbd5e1", p, ox, oy);
  drawPx(ctx, 15, 20 + bobY, "#cbd5e1", p, ox, oy);
  // Silver collar snaps
  drawPx(ctx, 11, 18 + bobY, "#f8fafc", p, ox, oy);
  drawPx(ctx, 20, 18 + bobY, "#f8fafc", p, ox, oy);
  // Hem
  drawRectPx(ctx, 11, 21 + bobY, 10, 1, "#09090b", p, ox, oy);
}

function renderTopKnitCardigan(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  // Navy Ivy League Cardigan with White Trim
  drawRectPx(ctx, 10, 17 + bobY, 12, 1, "#1e3a8a", p, ox, oy);
  drawRectPx(ctx, 10, 18 + bobY, 3, 4, "#172554", p, ox, oy);
  drawRectPx(ctx, 19, 18 + bobY, 3, 4, "#172554", p, ox, oy);
  drawRectPx(ctx, 13, 18 + bobY, 6, 3, "#1e3a8a", p, ox, oy);
  // White V-neck edge
  drawPx(ctx, 14, 18 + bobY, "#ffffff", p, ox, oy);
  drawPx(ctx, 17, 18 + bobY, "#ffffff", p, ox, oy);
  drawPx(ctx, 15, 19 + bobY, "#ffffff", p, ox, oy);
  drawPx(ctx, 16, 19 + bobY, "#ffffff", p, ox, oy);
  // Gold buttons
  drawPx(ctx, 16, 20 + bobY, "#facc15", p, ox, oy);
  // Hem
  drawRectPx(ctx, 11, 21 + bobY, 10, 1, "#172554", p, ox, oy);
}

function renderTopSportsJersey(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  drawRectPx(ctx, 11, 17 + bobY, 10, 1, "#991b1b", p, ox, oy);
  drawRectPx(ctx, 10, 18 + bobY, 3, 4, "#dc2626", p, ox, oy);
  drawRectPx(ctx, 19, 18 + bobY, 3, 4, "#dc2626", p, ox, oy);
  drawRectPx(ctx, 13, 18 + bobY, 6, 3, "#ef4444", p, ox, oy);
  // White shoulder stripes
  drawPx(ctx, 10, 18 + bobY, "#ffffff", p, ox, oy);
  drawPx(ctx, 10, 19 + bobY, "#ffffff", p, ox, oy);
  drawPx(ctx, 21, 18 + bobY, "#ffffff", p, ox, oy);
  drawPx(ctx, 21, 19 + bobY, "#ffffff", p, ox, oy);
  // Golden #7 on chest
  drawRectPx(ctx, 15, 18 + bobY, 3, 1, "#facc15", p, ox, oy);
  drawPx(ctx, 17, 19 + bobY, "#facc15", p, ox, oy);
  drawPx(ctx, 16, 20 + bobY, "#facc15", p, ox, oy);
  // Hem
  drawRectPx(ctx, 11, 21 + bobY, 10, 1, "#991b1b", p, ox, oy);
}

// -------------------------------------------------------------------------
// 3. PANTS & BOTTOMS (裤装 / 下装)
// -------------------------------------------------------------------------
function renderBottomJeans(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  // Brown leather belt at waist
  drawRectPx(ctx, 11, 19 + bobY, 10, 1, "#78350f", p, ox, oy);
  drawPx(ctx, 16, 19 + bobY, "#facc15", p, ox, oy); // Brass buckle
  // Classic indigo denim covering pelvis and legs
  drawRectPx(ctx, 11, 20 + bobY, 10, 2, "#1d4ed8", p, ox, oy);
  // Inseam divider
  drawPx(ctx, 16, 20 + bobY, "#1e3a8a", p, ox, oy);
  drawPx(ctx, 16, 21 + bobY, "#1e3a8a", p, ox, oy);
  // Pocket rivet accents
  drawPx(ctx, 12, 20 + bobY, "#f59e0b", p, ox, oy);
  drawPx(ctx, 20, 20 + bobY, "#f59e0b", p, ox, oy);
  // Rolled lighter cuffs
  drawRectPx(ctx, 12, 22 + bobY, 3, 1, "#93c5fd", p, ox, oy);
  drawRectPx(ctx, 17, 22 + bobY, 3, 1, "#93c5fd", p, ox, oy);
  // Paws naturally step out below cuffs at Y = 23..24!
}

function renderBottomSwimShorts(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  // White elastic waistband with coral drawstring tie
  drawRectPx(ctx, 11, 19 + bobY, 10, 1, "#f8fafc", p, ox, oy);
  drawPx(ctx, 16, 19 + bobY, "#f97316", p, ox, oy);
  // Coral-orange beach shorts
  drawRectPx(ctx, 11, 20 + bobY, 10, 2, "#fb923c", p, ox, oy);
  drawPx(ctx, 16, 20 + bobY, "#ea580c", p, ox, oy);
  drawPx(ctx, 16, 21 + bobY, "#ea580c", p, ox, oy);
  // Tropical wave print
  drawPx(ctx, 13, 21 + bobY, "#38bdf8", p, ox, oy);
  drawPx(ctx, 14, 20 + bobY, "#38bdf8", p, ox, oy);
  drawPx(ctx, 18, 21 + bobY, "#38bdf8", p, ox, oy);
}

function renderBottomCargo(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  // Tactical black webbing belt
  drawRectPx(ctx, 11, 19 + bobY, 10, 1, "#1e293b", p, ox, oy);
  drawPx(ctx, 16, 19 + bobY, "#475569", p, ox, oy);
  // Olive drab cargo pants
  drawRectPx(ctx, 11, 20 + bobY, 10, 2, "#4d7c0f", p, ox, oy);
  drawPx(ctx, 16, 20 + bobY, "#365314", p, ox, oy);
  drawPx(ctx, 16, 21 + bobY, "#365314", p, ox, oy);
  // Flap utility side pockets with silver snaps
  drawRectPx(ctx, 10, 20 + bobY, 1, 2, "#65a30d", p, ox, oy);
  drawPx(ctx, 10, 20 + bobY, "#cbd5e1", p, ox, oy);
  drawRectPx(ctx, 21, 20 + bobY, 1, 2, "#65a30d", p, ox, oy);
  drawPx(ctx, 21, 20 + bobY, "#cbd5e1", p, ox, oy);
  // Cuffed hems
  drawRectPx(ctx, 12, 22 + bobY, 3, 1, "#365314", p, ox, oy);
  drawRectPx(ctx, 17, 22 + bobY, 3, 1, "#365314", p, ox, oy);
}

function renderBottomSkirt(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  // High-waist navy school skirt waistband
  drawRectPx(ctx, 11, 19 + bobY, 10, 1, "#172554", p, ox, oy);
  // Flared pleated skirt
  drawRectPx(ctx, 10, 20 + bobY, 12, 2, "#1e3a8a", p, ox, oy);
  // Crisp box pleats
  drawPx(ctx, 11, 20 + bobY, "#2563eb", p, ox, oy);
  drawPx(ctx, 13, 20 + bobY, "#2563eb", p, ox, oy);
  drawPx(ctx, 15, 20 + bobY, "#2563eb", p, ox, oy);
  drawPx(ctx, 17, 20 + bobY, "#2563eb", p, ox, oy);
  drawPx(ctx, 19, 20 + bobY, "#2563eb", p, ox, oy);
  // White sailor stripe hem (ends at Y=21, cute paws step out below)
  drawRectPx(ctx, 10, 21 + bobY, 12, 1, "#ffffff", p, ox, oy);
}

function renderBottomOveralls(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  // Denim shoulder suspender straps
  drawPx(ctx, 13, 17 + bobY, "#2563eb", p, ox, oy);
  drawPx(ctx, 13, 18 + bobY, "#2563eb", p, ox, oy);
  drawPx(ctx, 18, 17 + bobY, "#2563eb", p, ox, oy);
  drawPx(ctx, 18, 18 + bobY, "#2563eb", p, ox, oy);
  // Brass clasps
  drawPx(ctx, 13, 18 + bobY, "#facc15", p, ox, oy);
  drawPx(ctx, 18, 18 + bobY, "#facc15", p, ox, oy);
  // Denim chest bib with yellow stitch pocket
  drawRectPx(ctx, 13, 19 + bobY, 6, 2, "#1d4ed8", p, ox, oy);
  drawPx(ctx, 15, 19 + bobY, "#facc15", p, ox, oy);
  drawPx(ctx, 16, 19 + bobY, "#facc15", p, ox, oy);
  // Trousers covering pelvis and legs
  drawRectPx(ctx, 11, 20 + bobY, 10, 2, "#1d4ed8", p, ox, oy);
  drawPx(ctx, 16, 20 + bobY, "#1e3a8a", p, ox, oy);
  drawPx(ctx, 16, 21 + bobY, "#1e3a8a", p, ox, oy);
  // Rolled cuffs
  drawRectPx(ctx, 12, 22 + bobY, 3, 1, "#93c5fd", p, ox, oy);
  drawRectPx(ctx, 17, 22 + bobY, 3, 1, "#93c5fd", p, ox, oy);
}

function renderBottomCyberJoggers(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  // Obsidian techwear waistband
  drawRectPx(ctx, 11, 19 + bobY, 10, 1, "#020617", p, ox, oy);
  drawPx(ctx, 16, 19 + bobY, "#06b6d4", p, ox, oy);
  // Drop-crotch joggers
  drawRectPx(ctx, 11, 20 + bobY, 10, 2, "#0f172a", p, ox, oy);
  drawPx(ctx, 16, 20 + bobY, "#020617", p, ox, oy);
  drawPx(ctx, 16, 21 + bobY, "#020617", p, ox, oy);
  // Glowing cyan tech stripes
  drawPx(ctx, 11, 20 + bobY, "#06b6d4", p, ox, oy);
  drawPx(ctx, 11, 21 + bobY, "#06b6d4", p, ox, oy);
  drawPx(ctx, 20, 20 + bobY, "#06b6d4", p, ox, oy);
  drawPx(ctx, 20, 21 + bobY, "#06b6d4", p, ox, oy);
  // Elastic ankle cuffs with buckle
  drawRectPx(ctx, 12, 22 + bobY, 3, 1, "#06b6d4", p, ox, oy);
  drawRectPx(ctx, 17, 22 + bobY, 3, 1, "#06b6d4", p, ox, oy);
}

function renderBottomMartialPants(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  // Traditional black karate belt (Kuro-obi)
  drawRectPx(ctx, 11, 19 + bobY, 10, 1, "#0f172a", p, ox, oy);
  drawPx(ctx, 16, 19 + bobY, "#334155", p, ox, oy); // Knot
  drawPx(ctx, 16, 20 + bobY, "#0f172a", p, ox, oy); // Hanging belt tail
  drawPx(ctx, 16, 21 + bobY, "#0f172a", p, ox, oy);
  // Pure white gi trousers
  drawRectPx(ctx, 11, 20 + bobY, 10, 2, "#f8fafc", p, ox, oy);
  drawPx(ctx, 15, 20 + bobY, "#e2e8f0", p, ox, oy);
  drawPx(ctx, 15, 21 + bobY, "#e2e8f0", p, ox, oy);
  // Leg cuffs
  drawRectPx(ctx, 12, 22 + bobY, 3, 1, "#cbd5e1", p, ox, oy);
  drawRectPx(ctx, 17, 22 + bobY, 3, 1, "#cbd5e1", p, ox, oy);
}

// -------------------------------------------------------------------------
// 4. HEADWEAR & ACCESSORIES (头部 / 面饰 / 饰品)
// -------------------------------------------------------------------------
function renderAstronautHelmet(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  // Clear bubble glass helmet
  drawRectPx(ctx, 11, 5 + bobY, 10, 1, "#e2e8f0", p, ox, oy);
  drawRectPx(ctx, 9, 6 + bobY, 2, 2, "#cbd5e1", p, ox, oy);
  drawRectPx(ctx, 21, 6 + bobY, 2, 2, "#cbd5e1", p, ox, oy);
  drawRectPx(ctx, 8, 8 + bobY, 1, 8, "#94a3b8", p, ox, oy);
  drawRectPx(ctx, 23, 8 + bobY, 1, 8, "#94a3b8", p, ox, oy);
  // Ear comm pods
  drawRectPx(ctx, 7, 10 + bobY, 2, 4, "#0284c7", p, ox, oy);
  drawRectPx(ctx, 23, 10 + bobY, 2, 4, "#0284c7", p, ox, oy);
  // Transparent cyan visor tint
  drawRectPx(ctx, 9, 8 + bobY, 14, 8, "rgba(56, 189, 248, 0.2)", p, ox, oy);
  // Curved shine
  drawPx(ctx, 11, 7 + bobY, "#ffffff", p, ox, oy);
  drawPx(ctx, 12, 7 + bobY, "#ffffff", p, ox, oy);
  drawPx(ctx, 10, 8 + bobY, "#ffffff", p, ox, oy);
  // Collar latch
  drawRectPx(ctx, 10, 16 + bobY, 12, 1, "#0284c7", p, ox, oy);
}

function renderHalo(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  // Golden Halo floating gracefully above head (hollow inner ring)
  drawRectPx(ctx, 12, 2 + bobY, 8, 1, "#facc15", p, ox, oy); // Top arc
  drawRectPx(ctx, 10, 3 + bobY, 2, 1, "#fde047", p, ox, oy); // Left edge
  drawRectPx(ctx, 20, 3 + bobY, 2, 1, "#fde047", p, ox, oy); // Right edge
  drawRectPx(ctx, 12, 4 + bobY, 8, 1, "#eab308", p, ox, oy); // Bottom arc
  // Sparkling holy light
  drawPx(ctx, 9, 2 + bobY, "#ffffff", p, ox, oy);
  drawPx(ctx, 22, 3 + bobY, "#ffffff", p, ox, oy);
}

function renderShades(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  // Symmetrical pixel sunglasses leaving nose at X=16 unobstructed
  drawRectPx(ctx, 11, 12 + bobY, 4, 3, "#0f172a", p, ox, oy); // Left lens
  drawRectPx(ctx, 17, 12 + bobY, 4, 3, "#0f172a", p, ox, oy); // Right lens
  drawRectPx(ctx, 15, 12 + bobY, 2, 1, "#0f172a", p, ox, oy); // Bridge above nose
  // Gloss glares
  drawPx(ctx, 12, 12 + bobY, "#ffffff", p, ox, oy);
  drawPx(ctx, 13, 13 + bobY, "#38bdf8", p, ox, oy);
  drawPx(ctx, 18, 12 + bobY, "#ffffff", p, ox, oy);
  drawPx(ctx, 19, 13 + bobY, "#38bdf8", p, ox, oy);
}

function renderCrown(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  // Dainty 3-peak golden crown between ears
  drawRectPx(ctx, 13, 7 + bobY, 6, 1, "#eab308", p, ox, oy); // Base
  drawPx(ctx, 13, 5 + bobY, "#facc15", p, ox, oy); // Left peak
  drawPx(ctx, 13, 6 + bobY, "#facc15", p, ox, oy);
  drawPx(ctx, 16, 4 + bobY, "#facc15", p, ox, oy); // Center peak
  drawPx(ctx, 16, 5 + bobY, "#fde047", p, ox, oy);
  drawPx(ctx, 16, 6 + bobY, "#facc15", p, ox, oy);
  drawPx(ctx, 18, 5 + bobY, "#facc15", p, ox, oy); // Right peak
  drawPx(ctx, 18, 6 + bobY, "#facc15", p, ox, oy);
  // Jewels
  drawPx(ctx, 14, 7 + bobY, "#3b82f6", p, ox, oy); // Sapphire
  drawPx(ctx, 16, 6 + bobY, "#ef4444", p, ox, oy); // Ruby
  drawPx(ctx, 17, 7 + bobY, "#3b82f6", p, ox, oy);
}

function renderHeadphones(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  // RGB Gaming Headset
  drawRectPx(ctx, 12, 5 + bobY, 8, 2, "#1e293b", p, ox, oy); // Arch headband
  // Left Earcup
  drawRectPx(ctx, 8, 8 + bobY, 3, 5, "#06b6d4", p, ox, oy);
  drawPx(ctx, 9, 10 + bobY, "#ec4899", p, ox, oy); // Pink RGB LED
  // Right Earcup
  drawRectPx(ctx, 21, 8 + bobY, 3, 5, "#06b6d4", p, ox, oy);
  drawPx(ctx, 22, 10 + bobY, "#ec4899", p, ox, oy); // Pink RGB LED
  // Mic Boom
  drawRectPx(ctx, 8, 14 + bobY, 4, 1, "#475569", p, ox, oy);
  drawPx(ctx, 12, 14 + bobY, "#22c55e", p, ox, oy); // Green LED
}

function renderWizardHat(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  drawRectPx(ctx, 11, 7 + bobY, 10, 1, "#581c87", p, ox, oy); // Brim
  drawRectPx(ctx, 12, 7 + bobY, 8, 1, "#eab308", p, ox, oy); // Gold band
  drawRectPx(ctx, 12, 5 + bobY, 8, 2, "#6b21a8", p, ox, oy);
  drawRectPx(ctx, 13, 3 + bobY, 6, 2, "#7e22ce", p, ox, oy);
  drawRectPx(ctx, 14, 1 + bobY, 4, 2, "#9333ea", p, ox, oy);
  drawPx(ctx, 15, 0 + bobY, "#a855f7", p, ox, oy);
  // Gold Star
  drawPx(ctx, 16, 4 + bobY, "#fde047", p, ox, oy);
  drawPx(ctx, 15, 4 + bobY, "#facc15", p, ox, oy);
  drawPx(ctx, 17, 4 + bobY, "#facc15", p, ox, oy);
}

function renderBow(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  // Dainty Pink Collar Ribbon Bow at neck Y=17
  drawRectPx(ctx, 12, 17 + bobY, 8, 1, "#fda4af", p, ox, oy);
  // Left wing
  drawPx(ctx, 13, 16 + bobY, "#fb7185", p, ox, oy);
  drawPx(ctx, 13, 17 + bobY, "#f43f5e", p, ox, oy);
  drawPx(ctx, 14, 17 + bobY, "#fb7185", p, ox, oy);
  // Right wing
  drawPx(ctx, 18, 16 + bobY, "#fb7185", p, ox, oy);
  drawPx(ctx, 18, 17 + bobY, "#f43f5e", p, ox, oy);
  drawPx(ctx, 17, 17 + bobY, "#fb7185", p, ox, oy);
  // Golden Brooch Knot
  drawPx(ctx, 15, 17 + bobY, "#facc15", p, ox, oy);
  drawPx(ctx, 16, 17 + bobY, "#eab308", p, ox, oy);
  // Ribbon tails
  drawPx(ctx, 14, 18 + bobY, "#f43f5e", p, ox, oy);
  drawPx(ctx, 17, 18 + bobY, "#f43f5e", p, ox, oy);
}

function renderCap(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  // Streetwear Snapback Baseball Cap on top of head
  drawRectPx(ctx, 12, 6 + bobY, 8, 3, "#dc2626", p, ox, oy); // Red crown
  drawPx(ctx, 16, 6 + bobY, "#f8fafc", p, ox, oy); // Eyelet
  drawPx(ctx, 16, 7 + bobY, "#ffffff", p, ox, oy); // Star logo
  // Forward-projecting curved brim at Y=8..9
  drawRectPx(ctx, 11, 8 + bobY, 10, 1, "#991b1b", p, ox, oy);
  drawRectPx(ctx, 12, 9 + bobY, 8, 1, "#7f1d1d", p, ox, oy);
}

function renderNinjaHeadband(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  drawRectPx(ctx, 10, 8 + bobY, 12, 1, "#0f172a", p, ox, oy);
  drawRectPx(ctx, 14, 8 + bobY, 4, 1, "#e2e8f0", p, ox, oy); // Silver plate
  drawPx(ctx, 15, 8 + bobY, "#475569", p, ox, oy);
  // Red ribbons on left
  drawPx(ctx, 9, 8 + bobY, "#ef4444", p, ox, oy);
  drawPx(ctx, 8, 9 + bobY, "#ef4444", p, ox, oy);
  drawPx(ctx, 8, 10 + bobY, "#dc2626", p, ox, oy);
}

function renderTophat(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  drawRectPx(ctx, 12, 6 + bobY, 8, 1, "#020617", p, ox, oy); // Brim
  drawRectPx(ctx, 13, 2 + bobY, 6, 4, "#0f172a", p, ox, oy); // Crown
  drawRectPx(ctx, 13, 5 + bobY, 6, 1, "#ef4444", p, ox, oy); // Red ribbon
  drawPx(ctx, 14, 3 + bobY, "#64748b", p, ox, oy); // Silk sheen
}

function renderCyberGoggles(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  // Tactical Forehead Goggles pushed up at Y=8..10 so eyes are unobstructed
  drawRectPx(ctx, 10, 8 + bobY, 12, 1, "#78350f", p, ox, oy); // Leather strap
  // Left brass/emerald lens
  drawRectPx(ctx, 11, 8 + bobY, 4, 3, "#047857", p, ox, oy);
  drawRectPx(ctx, 12, 9 + bobY, 2, 1, "#34d399", p, ox, oy);
  drawPx(ctx, 12, 8 + bobY, "#a7f3d0", p, ox, oy);
  // Right brass/emerald lens
  drawRectPx(ctx, 17, 8 + bobY, 4, 3, "#047857", p, ox, oy);
  drawRectPx(ctx, 18, 9 + bobY, 2, 1, "#34d399", p, ox, oy);
  drawPx(ctx, 18, 8 + bobY, "#a7f3d0", p, ox, oy);
  // Center bridge
  drawRectPx(ctx, 15, 9 + bobY, 2, 1, "#b45309", p, ox, oy);
}

function renderSakura(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  drawRectPx(ctx, 20, 6 + bobY, 3, 3, "#f472b6", p, ox, oy);
  drawPx(ctx, 21, 7 + bobY, "#facc15", p, ox, oy); // Gold stamen
  drawPx(ctx, 20, 6 + bobY, "#fbcfe8", p, ox, oy);
}

function renderScarf(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  // Cozy Knitted Red Scarf wrapped around neck
  drawRectPx(ctx, 10, 17 + bobY, 12, 2, "#ef4444", p, ox, oy);
  drawRectPx(ctx, 12, 17 + bobY, 8, 1, "#f87171", p, ox, oy); // Knit rib
  // Trailing scarf end over left shoulder
  drawRectPx(ctx, 10, 19 + bobY, 3, 3, "#dc2626", p, ox, oy);
  drawPx(ctx, 10, 22 + bobY, "#fef08a", p, ox, oy); // Tassels
  drawPx(ctx, 11, 22 + bobY, "#fef08a", p, ox, oy);
  drawPx(ctx, 12, 22 + bobY, "#fef08a", p, ox, oy);
}

function renderSantaHat(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  drawRectPx(ctx, 11, 7 + bobY, 10, 1, "#ffffff", p, ox, oy);
  drawRectPx(ctx, 13, 4 + bobY, 7, 3, "#ef4444", p, ox, oy);
  drawRectPx(ctx, 19, 5 + bobY, 3, 2, "#dc2626", p, ox, oy);
  drawRectPx(ctx, 21, 6 + bobY, 2, 2, "#ffffff", p, ox, oy);
}

function renderSprout(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  drawPx(ctx, 16, 5 + bobY, "#16a34a", p, ox, oy);
  drawPx(ctx, 16, 6 + bobY, "#16a34a", p, ox, oy);
  drawPx(ctx, 16, 7 + bobY, "#15803d", p, ox, oy);
  // Left leaf
  drawPx(ctx, 14, 4 + bobY, "#4ade80", p, ox, oy);
  drawPx(ctx, 15, 4 + bobY, "#22c55e", p, ox, oy);
  // Right leaf
  drawPx(ctx, 17, 4 + bobY, "#22c55e", p, ox, oy);
  drawPx(ctx, 18, 4 + bobY, "#4ade80", p, ox, oy);
}

function renderDevilHorns(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  // Left devil horn
  drawPx(ctx, 10, 4 + bobY, "#f43f5e", p, ox, oy);
  drawPx(ctx, 11, 5 + bobY, "#e11d48", p, ox, oy);
  drawPx(ctx, 11, 6 + bobY, "#be123c", p, ox, oy);
  // Right devil horn
  drawPx(ctx, 21, 4 + bobY, "#f43f5e", p, ox, oy);
  drawPx(ctx, 20, 5 + bobY, "#e11d48", p, ox, oy);
  drawPx(ctx, 20, 6 + bobY, "#be123c", p, ox, oy);
}

function renderViking(c: AccessoryRenderContext) {
  const { ctx, p, ox, oy, bobY } = c;
  // Silver Viking Helmet band
  drawRectPx(ctx, 11, 7 + bobY, 10, 1, "#94a3b8", p, ox, oy);
  drawPx(ctx, 16, 7 + bobY, "#f8fafc", p, ox, oy); // Rivet
  drawPx(ctx, 16, 8 + bobY, "#64748b", p, ox, oy); // Nose guard
  // Left Ivory Horn
  drawPx(ctx, 9, 3 + bobY, "#ffffff", p, ox, oy);
  drawPx(ctx, 9, 4 + bobY, "#e2e8f0", p, ox, oy);
  drawPx(ctx, 10, 5 + bobY, "#cbd5e1", p, ox, oy);
  drawPx(ctx, 10, 6 + bobY, "#94a3b8", p, ox, oy);
  // Right Ivory Horn
  drawPx(ctx, 22, 3 + bobY, "#ffffff", p, ox, oy);
  drawPx(ctx, 22, 4 + bobY, "#e2e8f0", p, ox, oy);
  drawPx(ctx, 21, 5 + bobY, "#cbd5e1", p, ox, oy);
  drawPx(ctx, 21, 6 + bobY, "#94a3b8", p, ox, oy);
}

// =========================================================================
// Main Dispatcher: 100% Complete Mapping for all 43 Accessories
// =========================================================================
export function renderKawaiiAccessory(
  ctx: CanvasRenderingContext2D,
  accessory: PetAccessory,
  p: number,
  ox: number,
  oy: number,
  bobYOrOptions: number | any = 0
) {
  if (!accessory || accessory === "none") return;

  // Extract numeric bobY safely whether a number or options object was passed!
  let bobY = 0;
  if (typeof bobYOrOptions === "number") {
    bobY = isNaN(bobYOrOptions) ? 0 : bobYOrOptions;
  } else if (bobYOrOptions && typeof bobYOrOptions === "object") {
    const isSleeping = Boolean(bobYOrOptions.isSleeping);
    const isWalking = Boolean(bobYOrOptions.isWalking);
    const walkStep = Number(bobYOrOptions.walkStep || 0);
    const frame = String(bobYOrOptions.frame || "idle1");
    const isFrameOdd = frame === "idle2" || frame === "walk2";
    bobY = isSleeping ? 1 : isWalking ? (walkStep % 2 === 0 ? 0 : 1) : (isFrameOdd ? 1 : 0);
  }

  const context: AccessoryRenderContext = { ctx, p, ox, oy, bobY };

  switch (accessory) {
    // 1. Full Suits
    case "suit_astronaut":
      renderSuitAstronaut(context);
      break;
    case "suit_wizard":
      renderSuitWizard(context);
      break;
    case "suit_ninja":
      renderSuitNinja(context);
      break;
    case "suit_kimono":
      renderSuitKimono(context);
      break;
    case "suit_tuxedo":
      renderSuitTuxedo(context);
      break;
    case "suit_santa":
      renderSuitSanta(context);
      break;
    case "suit_emperor":
      renderSuitEmperor(context);
      break;
    case "suit_dev":
      renderSuitDev(context);
      break;
    case "suit_rockstar":
      renderSuitRockstar(context);
      break;
    case "suit_cyber_mecha":
      renderSuitCyberMecha(context);
      break;
    case "suit_scientist":
      renderSuitScientist(context);
      break;

    // 2. Tops & Outerwear
    case "top_hoodie":
      renderTopHoodie(context);
      break;
    case "top_suit_shirt":
      renderTopSuitShirt(context);
      break;
    case "top_hawaiian":
      renderTopHawaiian(context);
      break;
    case "top_cyber_jacket":
      renderTopCyberJacket(context);
      break;
    case "top_sweater":
      renderTopSweater(context);
      break;
    case "top_leather_jacket":
      renderTopLeatherJacket(context);
      break;
    case "top_knit_cardigan":
      renderTopKnitCardigan(context);
      break;
    case "top_sports_jersey":
      renderTopSportsJersey(context);
      break;

    // 3. Pants & Bottoms
    case "bottom_jeans":
      renderBottomJeans(context);
      break;
    case "bottom_swim_shorts":
      renderBottomSwimShorts(context);
      break;
    case "bottom_cargo":
      renderBottomCargo(context);
      break;
    case "bottom_skirt":
      renderBottomSkirt(context);
      break;
    case "bottom_overalls":
      renderBottomOveralls(context);
      break;
    case "bottom_cyber_joggers":
      renderBottomCyberJoggers(context);
      break;
    case "bottom_martial_pants":
      renderBottomMartialPants(context);
      break;

    // 4. Headwear & Accessories
    case "astronaut":
      renderAstronautHelmet(context);
      break;
    case "halo":
      renderHalo(context);
      break;
    case "shades":
      renderShades(context);
      break;
    case "crown":
      renderCrown(context);
      break;
    case "headphones":
      renderHeadphones(context);
      break;
    case "wizard":
      renderWizardHat(context);
      break;
    case "bow":
      renderBow(context);
      break;
    case "cap":
      renderCap(context);
      break;
    case "ninja":
      renderNinjaHeadband(context);
      break;
    case "tophat":
      renderTophat(context);
      break;
    case "cyber_goggles":
      renderCyberGoggles(context);
      break;
    case "sakura":
      renderSakura(context);
      break;
    case "scarf":
      renderScarf(context);
      break;
    case "santa":
      renderSantaHat(context);
      break;
    case "sprout":
      renderSprout(context);
      break;
    case "devil_horns":
      renderDevilHorns(context);
      break;
    case "viking":
      renderViking(context);
      break;

    default:
      break;
  }
}
