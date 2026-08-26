import React, { useEffect, useRef, useState, useMemo } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
  sparkleSpeed: number;
  sparklePhase: number;
}

interface ForegroundPhoton {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  baseAlpha: number;
  pulsePhase: number;
  pulseSpeed: number;
  swaySpeed: number;
  swayAmp: number;
  hasCrossGlint?: boolean;
}

interface WaveRipple {
  id: number;
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  color: string;
  lineWidth: number;
}

interface Meteor {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  size: number;
  color: string;
  alpha: number;
  trail: { x: number; y: number; alpha: number }[];
  isFireball?: boolean;
}

interface BackgroundStar {
  x: number; // 0 to 1 ratio
  y: number; // 0 to 1 ratio
  size: number;
  baseAlpha: number;
  twinkleSpeed: number;
  phase: number;
  color: string;
  hasSpikes?: boolean;
  spikeRadius?: number;
}

interface ConstellationLink {
  idx1: number;
  idx2: number;
}

interface InteractiveAtmosphereProps {
  theme?: string; // "cyan" | "amber" | "emerald" | "purple" | "blue" | "rose" | "sky" | "pink" | "teal"
}

export const InteractiveAtmosphere: React.FC<InteractiveAtmosphereProps> = ({
  theme = "blue",
}) => {
  const bgCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const fgCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const mousePos = useRef({
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 500,
    y: typeof window !== "undefined" ? window.innerHeight / 3 : 300,
  });
  const targetPos = useRef({
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 500,
    y: typeof window !== "undefined" ? window.innerHeight / 3 : 300,
  });
  const prevMousePos = useRef({
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 500,
    y: typeof window !== "undefined" ? window.innerHeight / 3 : 300,
  });

  const particlesRef = useRef<Particle[]>([]);
  const fgPhotonsRef = useRef<ForegroundPhoton[]>([]);
  const ripplesRef = useRef<WaveRipple[]>([]);
  const meteorsRef = useRef<Meteor[]>([]);
  const backgroundStarsRef = useRef<BackgroundStar[]>([]);
  const constellationLinksRef = useRef<ConstellationLink[]>([]);
  const fgConstellationLinksRef = useRef<ConstellationLink[]>([]);
  
  const nextParticleId = useRef(0);
  const nextRippleId = useRef(0);
  const nextMeteorId = useRef(0);
  const animationFrameId = useRef<number | null>(null);

  const [meteorShowerActive, setMeteorShowerActive] = useState<boolean>(false);
  const [stardustLevel, setStardustLevel] = useState<"ultra" | "balanced">("ultra");

  // Harmonious, soft, luxury cosmic palette based on product theme
  const palette = useMemo(() => {
    switch (theme) {
      case "cyan": // E12 (Soft Electric Ice & Ethereal Lavender)
        return {
          primarySpot: "rgba(56, 189, 248, 0.14)",
          secondarySpot: "rgba(139, 92, 246, 0.10)",
          ringCore: "rgba(56, 189, 248, 0.60)",
          ringOuter: "rgba(139, 92, 246, 0.30)",
          particles: ["#7dd3fc", "#c4b5fd", "#a5f3fc", "#ffffff", "#bae6fd", "#e0e7ff"],
          nebula1: "rgba(56, 189, 248, 0.11)",
          nebula2: "rgba(139, 92, 246, 0.08)",
          nebula3: "rgba(99, 102, 241, 0.06)",
          stream1: "linear-gradient(120deg, rgba(56, 189, 248, 0.15) 0%, rgba(139, 92, 246, 0.12) 50%, transparent 80%)",
          stream2: "linear-gradient(240deg, rgba(139, 92, 246, 0.12) 0%, rgba(6, 182, 212, 0.10) 60%, transparent 85%)",
          glowGlow: "#38bdf8",
        };
      case "amber": // KT80 (Warm Sunset Gold & Soft Terracotta)
        return {
          primarySpot: "rgba(251, 191, 36, 0.14)",
          secondarySpot: "rgba(244, 114, 182, 0.10)",
          ringCore: "rgba(251, 191, 36, 0.60)",
          ringOuter: "rgba(244, 114, 182, 0.30)",
          particles: ["#fde68a", "#fbcfe8", "#fed7aa", "#ffffff", "#fef08a", "#fbcfe8"],
          nebula1: "rgba(245, 158, 11, 0.10)",
          nebula2: "rgba(244, 114, 182, 0.08)",
          nebula3: "rgba(168, 85, 247, 0.06)",
          stream1: "linear-gradient(120deg, rgba(251, 191, 36, 0.14) 0%, rgba(244, 114, 182, 0.10) 50%, transparent 80%)",
          stream2: "linear-gradient(240deg, rgba(245, 158, 11, 0.12) 0%, rgba(168, 85, 247, 0.08) 60%, transparent 85%)",
          glowGlow: "#f59e0b",
        };
      case "emerald": // T20 (Ethereal Sage & Soft Mint Cyan)
        return {
          primarySpot: "rgba(52, 211, 153, 0.14)",
          secondarySpot: "rgba(56, 189, 248, 0.10)",
          ringCore: "rgba(52, 211, 153, 0.60)",
          ringOuter: "rgba(56, 189, 248, 0.30)",
          particles: ["#6ee7b7", "#7dd3fc", "#a7f3d0", "#ffffff", "#bae6fd", "#d1fae5"],
          nebula1: "rgba(16, 185, 129, 0.10)",
          nebula2: "rgba(6, 182, 212, 0.08)",
          nebula3: "rgba(99, 102, 241, 0.06)",
          stream1: "linear-gradient(120deg, rgba(52, 211, 153, 0.14) 0%, rgba(56, 189, 248, 0.10) 50%, transparent 80%)",
          stream2: "linear-gradient(240deg, rgba(16, 185, 129, 0.12) 0%, rgba(99, 102, 241, 0.08) 60%, transparent 85%)",
          glowGlow: "#10b981",
        };
      case "purple": // QS40 & G2 (Nebula Iris & Soft Starlight Blue)
        return {
          primarySpot: "rgba(167, 139, 250, 0.14)",
          secondarySpot: "rgba(96, 165, 250, 0.10)",
          ringCore: "rgba(167, 139, 250, 0.60)",
          ringOuter: "rgba(96, 165, 250, 0.30)",
          particles: ["#c4b5fd", "#93c5fd", "#fbcfe8", "#ffffff", "#ddd6fe", "#bfdbfe"],
          nebula1: "rgba(139, 92, 246, 0.11)",
          nebula2: "rgba(59, 130, 246, 0.08)",
          nebula3: "rgba(236, 72, 153, 0.06)",
          stream1: "linear-gradient(120deg, rgba(167, 139, 250, 0.15) 0%, rgba(96, 165, 250, 0.11) 50%, transparent 80%)",
          stream2: "linear-gradient(240deg, rgba(139, 92, 246, 0.12) 0%, rgba(236, 72, 153, 0.08) 60%, transparent 85%)",
          glowGlow: "#8b5cf6",
        };
      case "rose": // E05 (Soft Velvet Rose & Warm Champagne)
        return {
          primarySpot: "rgba(251, 113, 133, 0.14)",
          secondarySpot: "rgba(251, 191, 36, 0.10)",
          ringCore: "rgba(251, 113, 133, 0.60)",
          ringOuter: "rgba(251, 191, 36, 0.30)",
          particles: ["#fda4af", "#fde68a", "#fbcfe8", "#ffffff", "#fed7aa", "#fecdd3"],
          nebula1: "rgba(244, 63, 94, 0.10)",
          nebula2: "rgba(251, 146, 60, 0.08)",
          nebula3: "rgba(168, 85, 247, 0.06)",
          stream1: "linear-gradient(120deg, rgba(251, 113, 133, 0.14) 0%, rgba(251, 191, 36, 0.10) 50%, transparent 80%)",
          stream2: "linear-gradient(240deg, rgba(244, 63, 94, 0.12) 0%, rgba(168, 85, 247, 0.08) 60%, transparent 85%)",
          glowGlow: "#f43f5e",
        };
      case "sky": // E09 (Celestial Azure & Soft Periwinkle)
        return {
          primarySpot: "rgba(56, 189, 248, 0.14)",
          secondarySpot: "rgba(129, 140, 248, 0.10)",
          ringCore: "rgba(56, 189, 248, 0.60)",
          ringOuter: "rgba(129, 140, 248, 0.30)",
          particles: ["#7dd3fc", "#a5b4fc", "#bae6fd", "#ffffff", "#c7d2fe", "#e0e7ff"],
          nebula1: "rgba(56, 189, 248, 0.11)",
          nebula2: "rgba(99, 102, 241, 0.08)",
          nebula3: "rgba(6, 182, 212, 0.06)",
          stream1: "linear-gradient(120deg, rgba(56, 189, 248, 0.14) 0%, rgba(129, 140, 248, 0.10) 50%, transparent 80%)",
          stream2: "linear-gradient(240deg, rgba(56, 189, 248, 0.12) 0%, rgba(6, 182, 212, 0.08) 60%, transparent 85%)",
          glowGlow: "#38bdf8",
        };
      case "pink": // G58 (Blush Orchid & Soft Rose Quartz)
        return {
          primarySpot: "rgba(244, 114, 182, 0.14)",
          secondarySpot: "rgba(192, 132, 252, 0.10)",
          ringCore: "rgba(244, 114, 182, 0.60)",
          ringOuter: "rgba(192, 132, 252, 0.30)",
          particles: ["#f9a8d4", "#d8b4fe", "#fbcfe8", "#ffffff", "#fed7aa", "#fdf2f8"],
          nebula1: "rgba(244, 114, 182, 0.10)",
          nebula2: "rgba(168, 85, 247, 0.08)",
          nebula3: "rgba(251, 191, 36, 0.06)",
          stream1: "linear-gradient(120deg, rgba(244, 114, 182, 0.14) 0%, rgba(192, 132, 252, 0.10) 50%, transparent 80%)",
          stream2: "linear-gradient(240deg, rgba(244, 114, 182, 0.12) 0%, rgba(251, 191, 36, 0.08) 60%, transparent 85%)",
          glowGlow: "#f472b6",
        };
      case "teal": // FOS10 (Ethereal Turquoise & Soft Sky Opal)
        return {
          primarySpot: "rgba(45, 212, 191, 0.14)",
          secondarySpot: "rgba(56, 189, 248, 0.10)",
          ringCore: "rgba(45, 212, 191, 0.60)",
          ringOuter: "rgba(56, 189, 248, 0.30)",
          particles: ["#5eead4", "#7dd3fc", "#99f6e4", "#ffffff", "#bae6fd", "#ccfbf1"],
          nebula1: "rgba(20, 184, 166, 0.10)",
          nebula2: "rgba(56, 189, 248, 0.08)",
          nebula3: "rgba(147, 51, 234, 0.06)",
          stream1: "linear-gradient(120deg, rgba(45, 212, 191, 0.14) 0%, rgba(56, 189, 248, 0.10) 50%, transparent 80%)",
          stream2: "linear-gradient(240deg, rgba(20, 184, 166, 0.12) 0%, rgba(147, 51, 234, 0.08) 60%, transparent 85%)",
          glowGlow: "#14b8a6",
        };
      default: // REC10 (Soft Ultramarine & Celestial Lavender)
        return {
          primarySpot: "rgba(96, 165, 250, 0.14)",
          secondarySpot: "rgba(167, 139, 250, 0.10)",
          ringCore: "rgba(96, 165, 250, 0.60)",
          ringOuter: "rgba(167, 139, 250, 0.30)",
          particles: ["#93c5fd", "#c4b5fd", "#7dd3fc", "#ffffff", "#a5b4fc", "#dbeafe"],
          nebula1: "rgba(59, 130, 246, 0.11)",
          nebula2: "rgba(139, 92, 246, 0.08)",
          nebula3: "rgba(56, 189, 248, 0.06)",
          stream1: "linear-gradient(120deg, rgba(96, 165, 250, 0.15) 0%, rgba(167, 139, 250, 0.11) 50%, transparent 80%)",
          stream2: "linear-gradient(240deg, rgba(59, 130, 246, 0.12) 0%, rgba(56, 189, 248, 0.08) 60%, transparent 85%)",
          glowGlow: "#3b82f6",
        };
    }
  }, [theme]);

  // Initialize procedural cosmic background starfield & foreground floating photons (One-time cached)
  useEffect(() => {
    const starColors = ["#ffffff", "#ffffff", "#e0f2fe", "#ede9fe", "#fdf4ff", "#fef3c7", "#dbeafe"];
    const stars: BackgroundStar[] = [];
    const starCount = 220; // Perfect balance of cosmic density and 60fps performance

    for (let i = 0; i < starCount; i++) {
      const isGiant = Math.random() < 0.07;
      const isSpikeStar = Math.random() < 0.035;
      stars.push({
        x: Math.random(),
        y: Math.random(),
        size: isGiant ? Math.random() * 1.8 + 1.4 : Math.random() * 1.1 + 0.4,
        baseAlpha: Math.random() * 0.45 + 0.3,
        twinkleSpeed: Math.random() * 0.035 + 0.015,
        phase: Math.random() * Math.PI * 2,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        hasSpikes: isSpikeStar,
        spikeRadius: isSpikeStar ? Math.random() * 12 + 6 : undefined,
      });
    }
    backgroundStarsRef.current = stars;

    // Pre-calculate fixed anchor constellation links (Fast O(1) rendering, zero N^2 runtime calculations)
    const links: ConstellationLink[] = [];
    for (let i = 0; i < 28; i++) {
      const targetIdx = (i * 7 + 3) % starCount;
      const targetIdx2 = (i * 11 + 5) % starCount;
      links.push({ idx1: i, idx2: targetIdx });
      if (i % 2 === 0) links.push({ idx1: i, idx2: targetIdx2 });
    }
    constellationLinksRef.current = links;

    // Initialize Foreground Floating Photons (drifting gently in front of all cards & UI)
    const initialPhotons: ForegroundPhoton[] = [];
    const photonColors = ["#ffffff", "#38bdf8", "#c084fc", "#f472b6", "#a5f3fc", "#fed7aa"];
    const photonCount = 42; // Optimized count with lush look
    for (let i = 0; i < photonCount; i++) {
      initialPhotons.push({
        id: i,
        x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
        y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 900),
        vx: (Math.random() - 0.5) * 0.3,
        vy: -(Math.random() * 0.38 + 0.12), // gently rising upwards
        size: Math.random() < 0.15 ? Math.random() * 2.5 + 1.8 : Math.random() * 1.3 + 0.7,
        color: photonColors[Math.floor(Math.random() * photonColors.length)],
        baseAlpha: Math.random() * 0.4 + 0.22,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.025 + 0.012,
        swaySpeed: Math.random() * 0.018 + 0.008,
        swayAmp: Math.random() * 1.0 + 0.3,
        hasCrossGlint: Math.random() < 0.22,
      });
    }
    fgPhotonsRef.current = initialPhotons;

    const fgLinks: ConstellationLink[] = [];
    for (let i = 0; i < 16; i++) {
      fgLinks.push({ idx1: i, idx2: (i + 1) % photonCount });
    }
    fgConstellationLinksRef.current = fgLinks;
  }, []);

  const spawnMeteor = (startX?: number, startY?: number, isFireball: boolean = false) => {
    const pColors = palette.particles;
    const color = isFireball ? "#fde047" : pColors[Math.floor(Math.random() * pColors.length)];
    const angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.35;
    const speed = isFireball ? Math.random() * 12 + 14 : Math.random() * 8 + 10;

    const x = startX !== undefined ? startX : (typeof window !== "undefined" ? Math.random() * (window.innerWidth + 400) - 100 : 500);
    const y = startY !== undefined ? startY : (typeof window !== "undefined" ? Math.random() * -100 - 30 : -40);

    meteorsRef.current.push({
      id: nextMeteorId.current++,
      x,
      y,
      vx: -Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      length: isFireball ? Math.random() * 160 + 100 : Math.random() * 100 + 65,
      size: isFireball ? Math.random() * 3.0 + 2.0 : Math.random() * 2.0 + 1.1,
      color,
      alpha: 1,
      trail: [],
      isFireball,
    });
  };

  // Trigger burst meteor shower
  const triggerMeteorShower = () => {
    setMeteorShowerActive(true);
    for (let i = 0; i < 16; i++) {
      setTimeout(() => {
        spawnMeteor(undefined, undefined, i % 4 === 0);
      }, i * 180);
    }
    setTimeout(() => {
      setMeteorShowerActive(false);
    }, 4000);
  };

  // High-performance double-buffered animation loop
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };

      const dx = e.clientX - prevMousePos.current.x;
      const dy = e.clientY - prevMousePos.current.y;
      const dist = Math.hypot(dx, dy);

      if (dist > 4) {
        const pColors = palette.particles;
        const color = pColors[Math.floor(Math.random() * pColors.length)];
        const count = dist > 25 ? (stardustLevel === "ultra" ? 4 : 2) : 1;

        for (let i = 0; i < count; i++) {
          particlesRef.current.push({
            id: nextParticleId.current++,
            x: e.clientX + (Math.random() - 0.5) * 20,
            y: e.clientY + (Math.random() - 0.5) * 20,
            vx: (Math.random() - 0.5) * 1.2 - dx * 0.03,
            vy: (Math.random() - 0.5) * 1.2 - dy * 0.03 - 0.3,
            size: Math.random() * 3.2 + 0.8,
            color,
            alpha: Math.random() * 0.8 + 0.4,
            decay: Math.random() * 0.015 + 0.010,
            sparkleSpeed: Math.random() * 0.08 + 0.04,
            sparklePhase: Math.random() * Math.PI * 2,
          });
        }
      }

      prevMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleClick = (e: MouseEvent) => {
      const pColors = palette.particles;
      const rippleColor = pColors[0] || "#38bdf8";
      const secondaryRippleColor = pColors[1] || "#c084fc";

      // 1. Primary outer shockwave ripple across foreground
      ripplesRef.current.push({
        id: nextRippleId.current++,
        x: e.clientX,
        y: e.clientY,
        radius: 6,
        maxRadius: 240,
        alpha: 0.85,
        color: rippleColor,
        lineWidth: 2.0,
      });

      // 2. Secondary chromatic echo ripple
      setTimeout(() => {
        ripplesRef.current.push({
          id: nextRippleId.current++,
          x: e.clientX,
          y: e.clientY,
          radius: 4,
          maxRadius: 170,
          alpha: 0.65,
          color: secondaryRippleColor,
          lineWidth: 1.2,
        });
      }, 75);

      // 3. Occasional Shooting Meteor on click
      if (Math.random() < 0.6) {
        spawnMeteor(e.clientX + (Math.random() * 300 + 120), e.clientY - (Math.random() * 300 + 120), Math.random() < 0.25);
      }

      // 4. Spawn click sparkle burst with physics velocity (renders on foreground over cards)
      const burstCount = stardustLevel === "ultra" ? 24 : 14;
      for (let i = 0; i < burstCount; i++) {
        const angle = (Math.PI * 2 * i) / burstCount + Math.random() * 0.3;
        const speed = Math.random() * 4.5 + 1.8;
        const color = pColors[Math.floor(Math.random() * pColors.length)];

        particlesRef.current.push({
          id: nextParticleId.current++,
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 3.8 + 1.0,
          color,
          alpha: 1,
          decay: Math.random() * 0.020 + 0.012,
          sparkleSpeed: Math.random() * 0.12 + 0.05,
          sparklePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });

    const bgCanvas = bgCanvasRef.current;
    const fgCanvas = fgCanvasRef.current;
    if (!bgCanvas || !fgCanvas) return;
    const bgCtx = bgCanvas.getContext("2d");
    const fgCtx = fgCanvas.getContext("2d");
    if (!bgCtx || !fgCtx) return;

    let viewWidth = window.innerWidth;
    let viewHeight = window.innerHeight;

    const handleResize = () => {
      viewWidth = window.innerWidth;
      viewHeight = window.innerHeight;
      bgCanvas.width = viewWidth;
      bgCanvas.height = viewHeight;
      fgCanvas.width = viewWidth;
      fgCanvas.height = viewHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    let tick = 0;
    let meteorTimer = 0;

    const render = () => {
      tick += 0.018;
      meteorTimer += 1;

      // Frequently spawn cosmic meteors automatically across the sky
      if (meteorTimer > 100 && Math.random() < 0.07) {
        meteorTimer = 0;
        spawnMeteor(undefined, undefined, Math.random() < 0.2);
      }

      // Damped smooth spring follow for raytracing lights
      mousePos.current.x += (targetPos.current.x - mousePos.current.x) * 0.085;
      mousePos.current.y += (targetPos.current.y - mousePos.current.y) * 0.085;

      const w = viewWidth;
      const h = viewHeight;

      // Clear canvases
      bgCtx.clearRect(0, 0, w, h);
      fgCtx.clearRect(0, 0, w, h);

      // ======================================================================
      // [BACKGROUND CANVAS]: 0. Starfield Batch Rendering (60fps Optimized)
      // ======================================================================
      const stars = backgroundStarsRef.current;
      const sLen = stars.length;
      
      // Batch simple star points by alpha levels to avoid per-star canvas state changes
      bgCtx.save();
      for (let i = 0; i < sLen; i++) {
        const star = stars[i];
        star.phase += star.twinkleSpeed;
        const currentAlpha = Math.max(0.12, star.baseAlpha + Math.sin(star.phase) * 0.35);
        const sx = star.x * w;
        const sy = star.y * h;

        bgCtx.globalAlpha = currentAlpha;
        bgCtx.fillStyle = star.color;
        bgCtx.beginPath();
        bgCtx.arc(sx, sy, star.size, 0, Math.PI * 2);
        bgCtx.fill();

        // Cross diffraction spikes on key prominent stars
        if (star.hasSpikes && star.spikeRadius) {
          const spikeLen = star.spikeRadius * (0.8 + Math.sin(star.phase) * 0.3);
          bgCtx.strokeStyle = star.color;
          bgCtx.lineWidth = 0.7;
          bgCtx.beginPath();
          bgCtx.moveTo(sx - spikeLen, sy);
          bgCtx.lineTo(sx + spikeLen, sy);
          bgCtx.moveTo(sx, sy - spikeLen);
          bgCtx.lineTo(sx, sy + spikeLen);
          bgCtx.stroke();
        }
      }
      bgCtx.restore();

      // Constellation linkage in background (Fast Pre-Calculated Anchor Links)
      const links = constellationLinksRef.current;
      const linkCount = links.length;
      bgCtx.save();
      bgCtx.strokeStyle = palette.particles[0] || "#38bdf8";
      bgCtx.lineWidth = 0.5;
      bgCtx.globalAlpha = 0.12;
      bgCtx.beginPath();
      for (let i = 0; i < linkCount; i++) {
        const link = links[i];
        const s1 = stars[link.idx1];
        const s2 = stars[link.idx2];
        if (s1 && s2) {
          const x1 = s1.x * w;
          const y1 = s1.y * h;
          const x2 = s2.x * w;
          const y2 = s2.y * h;
          const dx = x1 - x2;
          const dy = y1 - y2;
          if (dx * dx + dy * dy < 36000) { // < 190px
            bgCtx.moveTo(x1, y1);
            bgCtx.lineTo(x2, y2);
          }
        }
      }
      bgCtx.stroke();
      bgCtx.restore();

      // ======================================================================
      // [BACKGROUND CANVAS]: 1. Cosmic Celestial Observatory Rings
      // ======================================================================
      const centerX = Math.max(w - 220, w * 0.88);
      const centerY = Math.min(130, h * 0.16);
      const ringRadiusX = 160;
      const ringRadiusY = ringRadiusX * 0.36;
      const ringAngle = -0.28 + Math.sin(tick * 0.15) * 0.02;

      bgCtx.save();
      bgCtx.translate(centerX, centerY);
      bgCtx.rotate(ringAngle);

      const ringGrad = bgCtx.createRadialGradient(0, 0, ringRadiusX * 0.4, 0, 0, ringRadiusX * 1.3);
      ringGrad.addColorStop(0, "rgba(0,0,0,0)");
      ringGrad.addColorStop(0.65, palette.ringOuter || "rgba(168, 85, 247, 0.12)");
      ringGrad.addColorStop(0.85, palette.ringCore || "rgba(56, 189, 248, 0.20)");
      ringGrad.addColorStop(0.95, "rgba(255, 255, 255, 0.28)");
      ringGrad.addColorStop(1, "rgba(0,0,0,0)");

      bgCtx.fillStyle = ringGrad;
      bgCtx.beginPath();
      bgCtx.arc(0, 0, ringRadiusX * 1.35, 0, Math.PI * 2);
      bgCtx.fill();

      const bands = [
        { rx: ringRadiusX * 1.22, ry: ringRadiusY * 1.22, alpha: 0.18, width: 1.0, color: palette.particles[0] },
        { rx: ringRadiusX * 1.10, ry: ringRadiusY * 1.10, alpha: 0.30, width: 1.5, color: palette.particles[1] },
        { rx: ringRadiusX * 1.00, ry: ringRadiusY * 1.00, alpha: 0.45, width: 2.0, color: palette.particles[2] || "#38bdf8" },
        { rx: ringRadiusX * 0.88, ry: ringRadiusY * 0.88, alpha: 0.25, width: 1.2, color: "#ffffff" },
      ];

      for (let b = 0; b < bands.length; b++) {
        const band = bands[b];
        bgCtx.globalAlpha = band.alpha * (0.85 + 0.15 * Math.sin(tick + band.rx));
        bgCtx.strokeStyle = band.color;
        bgCtx.lineWidth = band.width;
        bgCtx.beginPath();
        bgCtx.ellipse(0, 0, band.rx, band.ry, 0, 0, Math.PI * 2);
        bgCtx.stroke();
      }

      const ringDustCount = 14;
      for (let i = 0; i < ringDustCount; i++) {
        const dustAngle = (tick * 0.4) + (i * Math.PI * 2) / ringDustCount;
        const dustRx = ringRadiusX * (0.92 + 0.18 * Math.sin(i * 1.7));
        const dustRy = ringRadiusY * (0.92 + 0.18 * Math.sin(i * 1.7));
        const dx = Math.cos(dustAngle) * dustRx;
        const dy = Math.sin(dustAngle) * dustRy;
        const dustAlpha = 0.25 + 0.45 * ((Math.sin(dustAngle) + 1) / 2);

        bgCtx.globalAlpha = dustAlpha;
        bgCtx.fillStyle = i % 2 === 0 ? "#ffffff" : palette.particles[i % palette.particles.length];
        bgCtx.beginPath();
        bgCtx.arc(dx, dy, (i % 3 === 0 ? 1.8 : 1.1), 0, Math.PI * 2);
        bgCtx.fill();
      }
      bgCtx.restore();

      // ======================================================================
      // [BACKGROUND CANVAS]: 2. Deep Space Pulsar Sweep Rays
      // ======================================================================
      const pulsarX = w * 0.5;
      const pulsarY = h * 0.32;
      const sweepAngle = tick * 0.12;

      bgCtx.save();
      bgCtx.translate(pulsarX, pulsarY);
      bgCtx.rotate(sweepAngle);

      const rayGrad = bgCtx.createLinearGradient(-w * 0.35, 0, w * 0.35, 0);
      rayGrad.addColorStop(0, "rgba(0,0,0,0)");
      rayGrad.addColorStop(0.48, "rgba(255, 255, 255, 0.015)");
      rayGrad.addColorStop(0.5, "rgba(255, 255, 255, 0.05)");
      rayGrad.addColorStop(0.52, "rgba(255, 255, 255, 0.015)");
      rayGrad.addColorStop(1, "rgba(0,0,0,0)");

      bgCtx.fillStyle = rayGrad;
      bgCtx.beginPath();
      bgCtx.moveTo(-w * 0.35, -3);
      bgCtx.lineTo(w * 0.35, -3);
      bgCtx.lineTo(w * 0.35, 3);
      bgCtx.lineTo(-w * 0.35, 3);
      bgCtx.closePath();
      bgCtx.fill();
      bgCtx.restore();

      // ======================================================================
      // [FOREGROUND CANVAS]: 3. Floating Cosmic Photons & Glints (OVER CARDS)
      // ======================================================================
      const photons = fgPhotonsRef.current;
      const pCount = photons.length;
      
      fgCtx.save();
      for (let i = 0; i < pCount; i++) {
        const pt = photons[i];
        pt.pulsePhase += pt.pulseSpeed;
        pt.y += pt.vy;
        pt.x += pt.vx + Math.sin(tick * pt.swaySpeed * 10 + pt.id) * pt.swayAmp * 0.12;

        // Seamless screen wrap
        if (pt.y < -20) {
          pt.y = h + 15;
          pt.x = Math.random() * w;
        }
        if (pt.x < -20) pt.x = w + 15;
        if (pt.x > w + 20) pt.x = -15;

        const currentAlpha = Math.max(
          0.05,
          pt.baseAlpha * (0.7 + 0.3 * Math.sin(pt.pulsePhase)) * (stardustLevel === "ultra" ? 1.0 : 0.6)
        );

        fgCtx.globalAlpha = currentAlpha;
        fgCtx.fillStyle = pt.color;
        fgCtx.beginPath();
        fgCtx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
        fgCtx.fill();

        // 4-point Diamond Crystal Glint Flare on prominent photons
        if (pt.hasCrossGlint) {
          const glintLen = pt.size * (2.4 + 1.0 * Math.sin(pt.pulsePhase));
          fgCtx.strokeStyle = pt.color;
          fgCtx.lineWidth = 0.7;
          fgCtx.beginPath();
          fgCtx.moveTo(pt.x - glintLen, pt.y);
          fgCtx.lineTo(pt.x + glintLen, pt.y);
          fgCtx.moveTo(pt.x, pt.y - glintLen);
          fgCtx.lineTo(pt.x, pt.y + glintLen);
          fgCtx.stroke();
        }
      }
      fgCtx.restore();

      // Micro Constellation Links between foreground photons (Pre-linked)
      const fgLinks = fgConstellationLinksRef.current;
      fgCtx.save();
      fgCtx.lineWidth = 0.6;
      fgCtx.strokeStyle = palette.particles[0] || "#38bdf8";
      fgCtx.globalAlpha = 0.12;
      fgCtx.beginPath();
      for (let i = 0; i < fgLinks.length; i++) {
        const link = fgLinks[i];
        const p1 = photons[link.idx1];
        const p2 = photons[link.idx2];
        if (p1 && p2) {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          if (dx * dx + dy * dy < 10000) { // < 100px
            fgCtx.moveTo(p1.x, p1.y);
            fgCtx.lineTo(p2.x, p2.y);
          }
        }
      }
      fgCtx.stroke();
      fgCtx.restore();

      // ======================================================================
      // [FOREGROUND CANVAS]: 4. Meteors & Fireballs
      // ======================================================================
      for (let i = meteorsRef.current.length - 1; i >= 0; i--) {
        const m = meteorsRef.current[i];
        m.trail.push({ x: m.x, y: m.y, alpha: m.alpha });
        if (m.trail.length > (m.isFireball ? 16 : 10)) m.trail.shift();

        m.x += m.vx;
        m.y += m.vy;
        m.alpha -= m.isFireball ? 0.010 : 0.014;

        if (m.alpha <= 0 || m.x < -100 || m.y > h + 100) {
          meteorsRef.current.splice(i, 1);
          continue;
        }

        fgCtx.save();
        for (let t = 0; t < m.trail.length - 1; t++) {
          const p1 = m.trail[t];
          const p2 = m.trail[t + 1];
          const trailAlpha = (t / m.trail.length) * m.alpha * (m.isFireball ? 0.9 : 0.8);

          fgCtx.strokeStyle = m.color;
          fgCtx.globalAlpha = trailAlpha;
          fgCtx.lineWidth = (t / m.trail.length) * m.size * (m.isFireball ? 1.8 : 1.1) + 0.4;
          fgCtx.beginPath();
          fgCtx.moveTo(p1.x, p1.y);
          fgCtx.lineTo(p2.x, p2.y);
          fgCtx.stroke();
        }

        fgCtx.globalAlpha = m.alpha;
        fgCtx.fillStyle = "#ffffff";
        fgCtx.beginPath();
        fgCtx.arc(m.x, m.y, m.size * (m.isFireball ? 1.8 : 1.3), 0, Math.PI * 2);
        fgCtx.fill();
        fgCtx.restore();
      }

      // ======================================================================
      // [FOREGROUND CANVAS]: 5. Shockwave Ripples (Expanding across cards)
      // ======================================================================
      for (let i = ripplesRef.current.length - 1; i >= 0; i--) {
        const r = ripplesRef.current[i];
        r.radius += (r.maxRadius - r.radius) * 0.08 + 1.2;
        r.alpha -= 0.018;

        if (r.alpha <= 0 || r.radius >= r.maxRadius) {
          ripplesRef.current.splice(i, 1);
          continue;
        }

        fgCtx.save();
        fgCtx.strokeStyle = r.color;
        fgCtx.globalAlpha = r.alpha * 0.75;
        fgCtx.lineWidth = r.lineWidth || 1.8;
        fgCtx.beginPath();
        fgCtx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        fgCtx.stroke();
        fgCtx.restore();
      }

      // ======================================================================
      // [FOREGROUND CANVAS]: 6. Interactive Cursor Stardust Particles (Batched)
      // ======================================================================
      fgCtx.save();
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;
        p.sparklePhase += p.sparkleSpeed;

        if (p.alpha <= 0) {
          particlesRef.current.splice(i, 1);
          continue;
        }

        const sparkleAlpha = Math.max(
          0,
          p.alpha * (0.7 + 0.3 * Math.sin(p.sparklePhase))
        );

        fgCtx.globalAlpha = sparkleAlpha;
        fgCtx.fillStyle = p.color;
        fgCtx.beginPath();
        fgCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        fgCtx.fill();
      }
      fgCtx.restore();

      animationFrameId.current = requestAnimationFrame(render);
    };

    animationFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [palette, stardustLevel]);

  return (
    <>
      {/* 1. Deep Space Atmosphere & Multi-tier Cosmic Interstellar Layers (z-0, GPU Composited) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
        {/* Deep Obsidian Wallpaper Base */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed transition-all duration-1000 scale-105"
          style={{
            backgroundImage: `url('/aurora-bg.svg')`,
            filter: "contrast(115%) brightness(88%)",
          }}
        />

        {/* Deep Space Obsidian Vignette & Atmosphere Gradient (Pure Deep Cosmic Look) */}
        <div
          className="absolute inset-0 animate-deep-space-void"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(6, 8, 14, 0.45) 0%, rgba(3, 4, 8, 0.85) 65%, rgba(0, 1, 3, 0.98) 100%)",
          }}
        />

        {/* NEW CSS ANIMATION: Cosmic Interstellar Flow Ribbon 1 (Ethereal fluid drift) */}
        <div
          className="absolute -top-40 -left-40 w-[120vw] h-[75vh] opacity-35 animate-interstellar-stream-1 pointer-events-none blur-[60px]"
          style={{
            background: palette.stream1,
            borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
          }}
        />

        {/* NEW CSS ANIMATION: Cosmic Interstellar Flow Ribbon 2 (Reverse parallax swirl) */}
        <div
          className="absolute top-1/3 -right-32 w-[110vw] h-[80vh] opacity-25 animate-interstellar-stream-2 pointer-events-none blur-[70px]"
          style={{
            background: palette.stream2,
            borderRadius: "60% 40% 30% 70% / 50% 60% 40% 60%",
          }}
        />

        {/* Floating Ethereal Cosmic Nebula Dust - Soft Obsidian Whispers */}
        <div
          className="absolute -top-36 -left-20 w-[850px] h-[850px] rounded-full blur-[150px] opacity-22 animate-mesh-1 pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${palette.nebula1} 0%, rgba(30, 41, 59, 0.2) 45%, transparent 75%)`,
          }}
        />

        <div
          className="absolute top-1/4 -right-28 w-[880px] h-[880px] rounded-full blur-[160px] opacity-20 animate-mesh-2 pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${palette.nebula2} 0%, rgba(46, 16, 101, 0.18) 55%, transparent 80%)`,
          }}
        />

        <div
          className="absolute bottom-10 left-1/4 w-[480px] h-[480px] rounded-full blur-[130px] opacity-16 animate-glass-orb pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${palette.nebula3} 0%, rgba(15, 23, 42, 0.18) 60%, transparent 80%)`,
          }}
        />

        {/* Top Aurora Celestial Curtain Flow */}
        <div
          className="absolute top-0 left-0 right-0 h-48 opacity-28 pointer-events-none animate-celestial-curtain"
          style={{
            background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${palette.primarySpot}, transparent 70%)`,
          }}
        />

        {/* Subtle Cosmic Starlight Nodes (CSS Shimmering Stars) */}
        <div className="absolute top-[18%] left-[22%] w-1 h-1 bg-white rounded-full animate-cosmic-dust-glitter opacity-60" />
        <div className="absolute top-[28%] right-[18%] w-1.5 h-1.5 bg-sky-300 rounded-full animate-cosmic-dust-glitter opacity-70 [animation-delay:1.2s]" />
        <div className="absolute top-[62%] left-[14%] w-1 h-1 bg-purple-300 rounded-full animate-cosmic-dust-glitter opacity-50 [animation-delay:2.4s]" />
        <div className="absolute top-[75%] right-[28%] w-1.5 h-1.5 bg-amber-200 rounded-full animate-cosmic-dust-glitter opacity-60 [animation-delay:0.8s]" />
        <div className="absolute top-[42%] left-[48%] w-1 h-1 bg-white rounded-full animate-cosmic-dust-glitter opacity-80 [animation-delay:1.8s]" />
      </div>

      {/* 2. Background Starfield & Observatory Rings Canvas (z-0, underneath UI) */}
      <canvas
        ref={bgCanvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0 mix-blend-screen"
      />

      {/* 3. Foreground Cosmic Stardust, Photons & Glints Layer (z-20, sits softly in front of cards with pointer-events-none) */}
      <canvas
        ref={fgCanvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-20 mix-blend-screen"
      />

      {/* 4. Floating Cosmic Control Capsule (Bottom-left subtle interactive widget) */}
      <div className="fixed bottom-4 left-4 z-30 pointer-events-auto flex items-center gap-2">
        <button
          type="button"
          onClick={triggerMeteorShower}
          disabled={meteorShowerActive}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border backdrop-blur-md transition-all cursor-pointer ${
            meteorShowerActive
              ? "bg-amber-500/30 text-amber-200 border-amber-400/60 shadow-[0_0_16px_rgba(245,158,11,0.6)] animate-pulse"
              : "bg-slate-900/70 text-slate-300 hover:text-white border-white/15 hover:border-cyan-400/50 hover:bg-slate-800/90 shadow-[0_4px_16px_rgba(0,0,0,0.45)]"
          }`}
          title="点击召唤全屏壮丽流星雨爆发！"
        >
          <span className="text-sm">🌠</span>
          <span>{meteorShowerActive ? "流星雨降临中..." : "召唤流星雨"}</span>
        </button>

        <button
          type="button"
          onClick={() => setStardustLevel((prev) => (prev === "ultra" ? "balanced" : "ultra"))}
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-medium border border-white/10 bg-slate-900/60 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/40 backdrop-blur-md transition-all cursor-pointer"
          title="切换前景星尘流密度模式"
        >
          <span className="text-xs">✨</span>
          <span>{stardustLevel === "ultra" ? "星尘: 极华丽" : "星尘: 柔和"}</span>
        </button>
      </div>

      {/* 5. Fine Film Grain Texture Overlay (z-0) */}
      <div className="fixed inset-0 noise-overlay pointer-events-none opacity-20 mix-blend-overlay z-0" />
    </>
  );
};
