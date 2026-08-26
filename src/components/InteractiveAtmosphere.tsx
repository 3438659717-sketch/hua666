import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";

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

export type AtmospherePerfMode = "ultra" | "balanced" | "eco";

interface InteractiveAtmosphereProps {
  theme?: string; // "cyan" | "amber" | "emerald" | "purple" | "blue" | "rose" | "sky" | "pink" | "teal"
}

const InteractiveAtmosphereComponent: React.FC<InteractiveAtmosphereProps> = ({
  theme = "blue",
}) => {
  const bgCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const fgCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Auto-detect mobile device capabilities
  const [perfMode, setPerfMode] = useState<AtmospherePerfMode>(() => {
    if (typeof window === "undefined") return "balanced";
    const isMobile = window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches;
    return isMobile ? "balanced" : "ultra";
  });

  const [meteorShowerActive, setMeteorShowerActive] = useState<boolean>(false);

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
  const isPageVisibleRef = useRef<boolean>(true);

  // Harmonious, soft, luxury cosmic palette based on product theme
  const palette = useMemo(() => {
    switch (theme) {
      case "cyan": // E12
        return {
          primarySpot: "rgba(56, 189, 248, 0.14)",
          secondarySpot: "rgba(139, 92, 246, 0.10)",
          ringCore: "rgba(56, 189, 248, 0.50)",
          ringOuter: "rgba(139, 92, 246, 0.25)",
          particles: ["#7dd3fc", "#c4b5fd", "#a5f3fc", "#ffffff", "#bae6fd"],
          nebula1: "rgba(56, 189, 248, 0.08)",
          nebula2: "rgba(139, 92, 246, 0.06)",
          stream1: "linear-gradient(120deg, rgba(56, 189, 248, 0.12) 0%, rgba(139, 92, 246, 0.08) 50%, transparent 80%)",
          stream2: "linear-gradient(240deg, rgba(139, 92, 246, 0.10) 0%, rgba(6, 182, 212, 0.08) 60%, transparent 85%)",
          glowGlow: "#38bdf8",
        };
      case "amber": // KT80
        return {
          primarySpot: "rgba(251, 191, 36, 0.14)",
          secondarySpot: "rgba(244, 114, 182, 0.10)",
          ringCore: "rgba(251, 191, 36, 0.50)",
          ringOuter: "rgba(244, 114, 182, 0.25)",
          particles: ["#fde68a", "#fbcfe8", "#fed7aa", "#ffffff", "#fef08a"],
          nebula1: "rgba(245, 158, 11, 0.08)",
          nebula2: "rgba(244, 114, 182, 0.06)",
          stream1: "linear-gradient(120deg, rgba(251, 191, 36, 0.12) 0%, rgba(244, 114, 182, 0.08) 50%, transparent 80%)",
          stream2: "linear-gradient(240deg, rgba(245, 158, 11, 0.10) 0%, rgba(168, 85, 247, 0.06) 60%, transparent 85%)",
          glowGlow: "#f59e0b",
        };
      case "emerald": // T20
        return {
          primarySpot: "rgba(52, 211, 153, 0.14)",
          secondarySpot: "rgba(56, 189, 248, 0.10)",
          ringCore: "rgba(52, 211, 153, 0.50)",
          ringOuter: "rgba(56, 189, 248, 0.25)",
          particles: ["#6ee7b7", "#7dd3fc", "#a7f3d0", "#ffffff", "#bae6fd"],
          nebula1: "rgba(16, 185, 129, 0.08)",
          nebula2: "rgba(6, 182, 212, 0.06)",
          stream1: "linear-gradient(120deg, rgba(52, 211, 153, 0.12) 0%, rgba(56, 189, 248, 0.08) 50%, transparent 80%)",
          stream2: "linear-gradient(240deg, rgba(16, 185, 129, 0.10) 0%, rgba(99, 102, 241, 0.06) 60%, transparent 85%)",
          glowGlow: "#10b981",
        };
      case "purple": // QS40 & G2
        return {
          primarySpot: "rgba(167, 139, 250, 0.14)",
          secondarySpot: "rgba(96, 165, 250, 0.10)",
          ringCore: "rgba(167, 139, 250, 0.50)",
          ringOuter: "rgba(96, 165, 250, 0.25)",
          particles: ["#c4b5fd", "#93c5fd", "#fbcfe8", "#ffffff", "#ddd6fe"],
          nebula1: "rgba(139, 92, 246, 0.08)",
          nebula2: "rgba(59, 130, 246, 0.06)",
          stream1: "linear-gradient(120deg, rgba(167, 139, 250, 0.12) 0%, rgba(96, 165, 250, 0.08) 50%, transparent 80%)",
          stream2: "linear-gradient(240deg, rgba(139, 92, 246, 0.10) 0%, rgba(236, 72, 153, 0.06) 60%, transparent 85%)",
          glowGlow: "#8b5cf6",
        };
      case "rose": // E05
        return {
          primarySpot: "rgba(251, 113, 133, 0.14)",
          secondarySpot: "rgba(251, 191, 36, 0.10)",
          ringCore: "rgba(251, 113, 133, 0.50)",
          ringOuter: "rgba(251, 191, 36, 0.25)",
          particles: ["#fda4af", "#fde68a", "#fbcfe8", "#ffffff", "#fed7aa"],
          nebula1: "rgba(244, 63, 94, 0.08)",
          nebula2: "rgba(251, 146, 60, 0.06)",
          stream1: "linear-gradient(120deg, rgba(251, 113, 133, 0.12) 0%, rgba(251, 191, 36, 0.08) 50%, transparent 80%)",
          stream2: "linear-gradient(240deg, rgba(244, 63, 94, 0.10) 0%, rgba(168, 85, 247, 0.06) 60%, transparent 85%)",
          glowGlow: "#f43f5e",
        };
      case "sky": // E09
        return {
          primarySpot: "rgba(56, 189, 248, 0.14)",
          secondarySpot: "rgba(129, 140, 248, 0.10)",
          ringCore: "rgba(56, 189, 248, 0.50)",
          ringOuter: "rgba(129, 140, 248, 0.25)",
          particles: ["#7dd3fc", "#a5b4fc", "#bae6fd", "#ffffff", "#c7d2fe"],
          nebula1: "rgba(56, 189, 248, 0.08)",
          nebula2: "rgba(99, 102, 241, 0.06)",
          stream1: "linear-gradient(120deg, rgba(56, 189, 248, 0.12) 0%, rgba(129, 140, 248, 0.08) 50%, transparent 80%)",
          stream2: "linear-gradient(240deg, rgba(56, 189, 248, 0.10) 0%, rgba(6, 182, 212, 0.06) 60%, transparent 85%)",
          glowGlow: "#38bdf8",
        };
      case "pink": // G58
        return {
          primarySpot: "rgba(244, 114, 182, 0.14)",
          secondarySpot: "rgba(192, 132, 252, 0.10)",
          ringCore: "rgba(244, 114, 182, 0.50)",
          ringOuter: "rgba(192, 132, 252, 0.25)",
          particles: ["#f9a8d4", "#d8b4fe", "#fbcfe8", "#ffffff", "#fed7aa"],
          nebula1: "rgba(244, 114, 182, 0.08)",
          nebula2: "rgba(168, 85, 247, 0.06)",
          stream1: "linear-gradient(120deg, rgba(244, 114, 182, 0.12) 0%, rgba(192, 132, 252, 0.08) 50%, transparent 80%)",
          stream2: "linear-gradient(240deg, rgba(244, 114, 182, 0.10) 0%, rgba(251, 191, 36, 0.06) 60%, transparent 85%)",
          glowGlow: "#f472b6",
        };
      case "teal": // FOS10
        return {
          primarySpot: "rgba(45, 212, 191, 0.14)",
          secondarySpot: "rgba(56, 189, 248, 0.10)",
          ringCore: "rgba(45, 212, 191, 0.50)",
          ringOuter: "rgba(56, 189, 248, 0.25)",
          particles: ["#5eead4", "#7dd3fc", "#99f6e4", "#ffffff", "#bae6fd"],
          nebula1: "rgba(20, 184, 166, 0.08)",
          nebula2: "rgba(56, 189, 248, 0.06)",
          stream1: "linear-gradient(120deg, rgba(45, 212, 191, 0.12) 0%, rgba(56, 189, 248, 0.08) 50%, transparent 80%)",
          stream2: "linear-gradient(240deg, rgba(20, 184, 166, 0.10) 0%, rgba(147, 51, 234, 0.06) 60%, transparent 85%)",
          glowGlow: "#14b8a6",
        };
      default: // REC10
        return {
          primarySpot: "rgba(96, 165, 250, 0.14)",
          secondarySpot: "rgba(167, 139, 250, 0.10)",
          ringCore: "rgba(96, 165, 250, 0.50)",
          ringOuter: "rgba(167, 139, 250, 0.25)",
          particles: ["#93c5fd", "#c4b5fd", "#7dd3fc", "#ffffff", "#a5b4fc"],
          nebula1: "rgba(59, 130, 246, 0.08)",
          nebula2: "rgba(139, 92, 246, 0.06)",
          stream1: "linear-gradient(120deg, rgba(96, 165, 250, 0.12) 0%, rgba(167, 139, 250, 0.08) 50%, transparent 80%)",
          stream2: "linear-gradient(240deg, rgba(59, 130, 246, 0.10) 0%, rgba(56, 189, 248, 0.06) 60%, transparent 85%)",
          glowGlow: "#3b82f6",
        };
    }
  }, [theme]);

  // Dynamic particle budget based on device perfMode
  useEffect(() => {
    const starColors = ["#ffffff", "#ffffff", "#e0f2fe", "#ede9fe", "#fdf4ff", "#fef3c7"];
    const stars: BackgroundStar[] = [];
    
    const starCount = perfMode === "eco" ? 45 : perfMode === "balanced" ? 95 : 180;

    for (let i = 0; i < starCount; i++) {
      const isGiant = Math.random() < 0.05;
      const isSpikeStar = perfMode === "ultra" && Math.random() < 0.04;
      stars.push({
        x: Math.random(),
        y: Math.random(),
        size: isGiant ? Math.random() * 1.5 + 1.2 : Math.random() * 1.0 + 0.4,
        baseAlpha: Math.random() * 0.45 + 0.3,
        twinkleSpeed: Math.random() * 0.035 + 0.015,
        phase: Math.random() * Math.PI * 2,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        hasSpikes: isSpikeStar,
        spikeRadius: isSpikeStar ? Math.random() * 10 + 5 : undefined,
      });
    }
    backgroundStarsRef.current = stars;

    // Anchor constellation links
    const linkCount = perfMode === "eco" ? 6 : perfMode === "balanced" ? 14 : 24;
    const links: ConstellationLink[] = [];
    for (let i = 0; i < linkCount; i++) {
      const targetIdx = (i * 5 + 2) % starCount;
      links.push({ idx1: i, idx2: targetIdx });
    }
    constellationLinksRef.current = links;

    // Foreground Floating Photons
    const initialPhotons: ForegroundPhoton[] = [];
    const photonColors = ["#ffffff", "#38bdf8", "#c084fc", "#f472b6", "#a5f3fc"];
    const photonCount = perfMode === "eco" ? 8 : perfMode === "balanced" ? 18 : 34;

    for (let i = 0; i < photonCount; i++) {
      initialPhotons.push({
        id: i,
        x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
        y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
        vx: (Math.random() - 0.5) * 0.25,
        vy: -(Math.random() * 0.32 + 0.1),
        size: Math.random() < 0.15 ? Math.random() * 2.0 + 1.5 : Math.random() * 1.2 + 0.6,
        color: photonColors[Math.floor(Math.random() * photonColors.length)],
        baseAlpha: Math.random() * 0.35 + 0.2,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        swaySpeed: Math.random() * 0.015 + 0.008,
        swayAmp: Math.random() * 0.8 + 0.2,
        hasCrossGlint: perfMode === "ultra" && Math.random() < 0.2,
      });
    }
    fgPhotonsRef.current = initialPhotons;

    const fgLinks: ConstellationLink[] = [];
    if (perfMode !== "eco") {
      const fgLinkLimit = perfMode === "balanced" ? 6 : 12;
      for (let i = 0; i < fgLinkLimit; i++) {
        fgLinks.push({ idx1: i, idx2: (i + 1) % photonCount });
      }
    }
    fgConstellationLinksRef.current = fgLinks;
  }, [perfMode]);

  const spawnMeteor = useCallback((startX?: number, startY?: number, isFireball: boolean = false) => {
    if (perfMode === "eco" && meteorsRef.current.length > 2) return;
    const pColors = palette.particles;
    const color = isFireball ? "#fde047" : pColors[Math.floor(Math.random() * pColors.length)];
    const angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.3;
    const speed = isFireball ? Math.random() * 10 + 12 : Math.random() * 7 + 8;

    const x = startX !== undefined ? startX : (typeof window !== "undefined" ? Math.random() * (window.innerWidth + 300) - 80 : 500);
    const y = startY !== undefined ? startY : (typeof window !== "undefined" ? Math.random() * -80 - 20 : -30);

    meteorsRef.current.push({
      id: nextMeteorId.current++,
      x,
      y,
      vx: -Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      length: isFireball ? 120 : 70,
      size: isFireball ? 2.6 : 1.4,
      color,
      alpha: 1,
      trail: [],
      isFireball,
    });
  }, [palette.particles, perfMode]);

  const triggerMeteorShower = () => {
    setMeteorShowerActive(true);
    const count = perfMode === "eco" ? 6 : 12;
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        spawnMeteor(undefined, undefined, i % 3 === 0);
      }, i * 220);
    }
    setTimeout(() => {
      setMeteorShowerActive(false);
    }, 3200);
  };

  // Page visibility listener to stop animation loop when tab is hidden (saves 100% CPU on mobile)
  useEffect(() => {
    const handleVisibilityChange = () => {
      isPageVisibleRef.current = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Main 60FPS Render Engine
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };

      if (perfMode === "eco") return; // Eco mode skips hover stardust generation

      const dx = e.clientX - prevMousePos.current.x;
      const dy = e.clientY - prevMousePos.current.y;
      const dist = Math.hypot(dx, dy);

      if (dist > 8 && particlesRef.current.length < (perfMode === "ultra" ? 40 : 20)) {
        const pColors = palette.particles;
        const color = pColors[Math.floor(Math.random() * pColors.length)];
        const count = perfMode === "ultra" ? (dist > 30 ? 2 : 1) : 1;

        for (let i = 0; i < count; i++) {
          particlesRef.current.push({
            id: nextParticleId.current++,
            x: e.clientX + (Math.random() - 0.5) * 12,
            y: e.clientY + (Math.random() - 0.5) * 12,
            vx: (Math.random() - 0.5) * 0.8 - dx * 0.02,
            vy: (Math.random() - 0.5) * 0.8 - dy * 0.02 - 0.2,
            size: Math.random() * 2.5 + 0.8,
            color,
            alpha: 0.8,
            decay: 0.018,
            sparkleSpeed: 0.08,
            sparklePhase: Math.random() * Math.PI * 2,
          });
        }
      }
      prevMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0 && perfMode !== "eco") {
        const touch = e.touches[0];
        targetPos.current = { x: touch.clientX, y: touch.clientY };
      }
    };

    const handleClick = (e: MouseEvent) => {
      const pColors = palette.particles;
      const rippleColor = pColors[0] || "#38bdf8";

      // 1. Primary outer shockwave ripple
      if (ripplesRef.current.length < 3) {
        ripplesRef.current.push({
          id: nextRippleId.current++,
          x: e.clientX,
          y: e.clientY,
          radius: 4,
          maxRadius: perfMode === "ultra" ? 220 : 140,
          alpha: 0.75,
          color: rippleColor,
          lineWidth: 1.5,
        });
      }

      // 2. Spawn click sparkle burst
      const burstCount = perfMode === "ultra" ? 14 : perfMode === "balanced" ? 8 : 4;
      if (particlesRef.current.length < 45) {
        for (let i = 0; i < burstCount; i++) {
          const angle = (Math.PI * 2 * i) / burstCount + Math.random() * 0.2;
          const speed = Math.random() * 3.5 + 1.2;
          const color = pColors[Math.floor(Math.random() * pColors.length)];

          particlesRef.current.push({
            id: nextParticleId.current++,
            x: e.clientX,
            y: e.clientY,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            size: Math.random() * 2.8 + 0.8,
            alpha: 0.95,
            decay: 0.024,
            sparkleSpeed: 0.1,
            sparklePhase: Math.random() * Math.PI * 2,
          });
        }
      }

      // 3. Shooting Meteor on click
      if (Math.random() < 0.45) {
        spawnMeteor(e.clientX + 160, e.clientY - 160, false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
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
      if (!isPageVisibleRef.current) {
        animationFrameId.current = requestAnimationFrame(render);
        return;
      }

      tick += 0.018;
      meteorTimer += 1;

      // Auto meteor spawning interval
      if (meteorTimer > (perfMode === "ultra" ? 140 : 240) && Math.random() < 0.08) {
        meteorTimer = 0;
        spawnMeteor(undefined, undefined, Math.random() < 0.15);
      }

      // Soft light follower
      mousePos.current.x += (targetPos.current.x - mousePos.current.x) * 0.08;
      mousePos.current.y += (targetPos.current.y - mousePos.current.y) * 0.08;

      const w = viewWidth;
      const h = viewHeight;

      // Clear canvases
      bgCtx.clearRect(0, 0, w, h);
      fgCtx.clearRect(0, 0, w, h);

      // ======================================================================
      // 1. Starfield Batch Rendering (Background)
      // ======================================================================
      const stars = backgroundStarsRef.current;
      const sLen = stars.length;
      
      bgCtx.save();
      for (let i = 0; i < sLen; i++) {
        const star = stars[i];
        star.phase += star.twinkleSpeed;
        const currentAlpha = Math.max(0.12, star.baseAlpha + Math.sin(star.phase) * 0.3);
        const sx = star.x * w;
        const sy = star.y * h;

        bgCtx.globalAlpha = currentAlpha;
        bgCtx.fillStyle = star.color;
        bgCtx.beginPath();
        bgCtx.arc(sx, sy, star.size, 0, Math.PI * 2);
        bgCtx.fill();

        // Cross spikes on prominent stars (ultra only)
        if (perfMode === "ultra" && star.hasSpikes && star.spikeRadius) {
          const spikeLen = star.spikeRadius * (0.8 + Math.sin(star.phase) * 0.25);
          bgCtx.strokeStyle = star.color;
          bgCtx.lineWidth = 0.6;
          bgCtx.beginPath();
          bgCtx.moveTo(sx - spikeLen, sy);
          bgCtx.lineTo(sx + spikeLen, sy);
          bgCtx.moveTo(sx, sy - spikeLen);
          bgCtx.lineTo(sx, sy + spikeLen);
          bgCtx.stroke();
        }
      }
      bgCtx.restore();

      // Constellation linkage in background
      const links = constellationLinksRef.current;
      const linkCount = links.length;
      bgCtx.save();
      bgCtx.strokeStyle = palette.particles[0] || "#38bdf8";
      bgCtx.lineWidth = 0.5;
      bgCtx.globalAlpha = 0.10;
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
          if (dx * dx + dy * dy < 28000) { // < 165px
            bgCtx.moveTo(x1, y1);
            bgCtx.lineTo(x2, y2);
          }
        }
      }
      bgCtx.stroke();
      bgCtx.restore();

      // ======================================================================
      // 2. Cosmic Celestial Observatory Rings (Background Top-Right)
      // ======================================================================
      if (perfMode !== "eco") {
        const centerX = Math.max(w - 200, w * 0.88);
        const centerY = Math.min(120, h * 0.15);
        const ringRadiusX = 140;
        const ringRadiusY = ringRadiusX * 0.35;
        const ringAngle = -0.28 + Math.sin(tick * 0.12) * 0.015;

        bgCtx.save();
        bgCtx.translate(centerX, centerY);
        bgCtx.rotate(ringAngle);

        const bands = [
          { rx: ringRadiusX * 1.15, ry: ringRadiusY * 1.15, alpha: 0.16, width: 1.0, color: palette.particles[0] },
          { rx: ringRadiusX * 1.00, ry: ringRadiusY * 1.00, alpha: 0.35, width: 1.5, color: palette.particles[1] },
          { rx: ringRadiusX * 0.88, ry: ringRadiusY * 0.88, alpha: 0.20, width: 1.0, color: "#ffffff" },
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
        bgCtx.restore();
      }

      // ======================================================================
      // 3. Floating Photons (Foreground)
      // ======================================================================
      const photons = fgPhotonsRef.current;
      const pCount = photons.length;
      
      fgCtx.save();
      for (let i = 0; i < pCount; i++) {
        const pt = photons[i];
        pt.pulsePhase += pt.pulseSpeed;
        pt.y += pt.vy;
        pt.x += pt.vx + Math.sin(tick * pt.swaySpeed * 8 + pt.id) * pt.swayAmp * 0.1;

        if (pt.y < -20) {
          pt.y = h + 15;
          pt.x = Math.random() * w;
        }
        if (pt.x < -20) pt.x = w + 15;
        if (pt.x > w + 20) pt.x = -15;

        const currentAlpha = Math.max(
          0.05,
          pt.baseAlpha * (0.7 + 0.3 * Math.sin(pt.pulsePhase))
        );

        fgCtx.globalAlpha = currentAlpha;
        fgCtx.fillStyle = pt.color;
        fgCtx.beginPath();
        fgCtx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
        fgCtx.fill();

        // 4-point Glint Flare
        if (perfMode === "ultra" && pt.hasCrossGlint) {
          const glintLen = pt.size * (2.2 + 0.8 * Math.sin(pt.pulsePhase));
          fgCtx.strokeStyle = pt.color;
          fgCtx.lineWidth = 0.6;
          fgCtx.beginPath();
          fgCtx.moveTo(pt.x - glintLen, pt.y);
          fgCtx.lineTo(pt.x + glintLen, pt.y);
          fgCtx.moveTo(pt.x, pt.y - glintLen);
          fgCtx.lineTo(pt.x, pt.y + glintLen);
          fgCtx.stroke();
        }
      }
      fgCtx.restore();

      // ======================================================================
      // 4. Meteors
      // ======================================================================
      for (let i = meteorsRef.current.length - 1; i >= 0; i--) {
        const m = meteorsRef.current[i];
        m.trail.push({ x: m.x, y: m.y, alpha: m.alpha });
        if (m.trail.length > 8) m.trail.shift();

        m.x += m.vx;
        m.y += m.vy;
        m.alpha -= m.isFireball ? 0.012 : 0.016;

        if (m.alpha <= 0 || m.x < -80 || m.y > h + 80) {
          meteorsRef.current.splice(i, 1);
          continue;
        }

        fgCtx.save();
        for (let t = 0; t < m.trail.length - 1; t++) {
          const p1 = m.trail[t];
          const p2 = m.trail[t + 1];
          const trailAlpha = (t / m.trail.length) * m.alpha * 0.7;

          fgCtx.strokeStyle = m.color;
          fgCtx.globalAlpha = trailAlpha;
          fgCtx.lineWidth = (t / m.trail.length) * m.size + 0.3;
          fgCtx.beginPath();
          fgCtx.moveTo(p1.x, p1.y);
          fgCtx.lineTo(p2.x, p2.y);
          fgCtx.stroke();
        }

        fgCtx.globalAlpha = m.alpha;
        fgCtx.fillStyle = "#ffffff";
        fgCtx.beginPath();
        fgCtx.arc(m.x, m.y, m.size, 0, Math.PI * 2);
        fgCtx.fill();
        fgCtx.restore();
      }

      // ======================================================================
      // 5. Shockwave Ripples
      // ======================================================================
      for (let i = ripplesRef.current.length - 1; i >= 0; i--) {
        const r = ripplesRef.current[i];
        r.radius += (r.maxRadius - r.radius) * 0.08 + 1.2;
        r.alpha -= 0.022;

        if (r.alpha <= 0 || r.radius >= r.maxRadius) {
          ripplesRef.current.splice(i, 1);
          continue;
        }

        fgCtx.save();
        fgCtx.strokeStyle = r.color;
        fgCtx.globalAlpha = r.alpha * 0.7;
        fgCtx.lineWidth = r.lineWidth || 1.4;
        fgCtx.beginPath();
        fgCtx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        fgCtx.stroke();
        fgCtx.restore();
      }

      // ======================================================================
      // 6. Interactive Cursor Stardust
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
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [palette, perfMode, spawnMeteor]);

  return (
    <>
      {/* 1. Deep Space Atmosphere & Cosmic Layers (GPU Composited) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
        {/* Deep Obsidian Wallpaper Base */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed transition-all duration-700"
          style={{
            backgroundImage: `url('/aurora-bg.svg')`,
            filter: "contrast(110%) brightness(85%)",
          }}
        />

        {/* Deep Space Obsidian Vignette */}
        <div
          className="absolute inset-0 animate-deep-space-void"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(6, 8, 14, 0.45) 0%, rgba(3, 4, 8, 0.85) 65%, rgba(0, 1, 3, 0.98) 100%)",
          }}
        />

        {/* Cosmic Interstellar Flow Ribbon 1 (GPU translation) */}
        <div
          className="absolute -top-32 -left-32 w-[120vw] h-[70vh] opacity-30 animate-interstellar-stream-1 pointer-events-none"
          style={{
            background: palette.stream1,
            borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
          }}
        />

        {/* Cosmic Interstellar Flow Ribbon 2 */}
        <div
          className="absolute top-1/3 -right-28 w-[110vw] h-[75vh] opacity-20 animate-interstellar-stream-2 pointer-events-none"
          style={{
            background: palette.stream2,
            borderRadius: "60% 40% 30% 70% / 50% 60% 40% 60%",
          }}
        />

        {/* Top Aurora Celestial Curtain */}
        <div
          className="absolute top-0 left-0 right-0 h-40 opacity-24 pointer-events-none animate-celestial-curtain"
          style={{
            background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${palette.primarySpot}, transparent 70%)`,
          }}
        />

        {/* CSS Shimmering Starlight Nodes */}
        <div className="absolute top-[18%] left-[22%] w-1 h-1 bg-white rounded-full animate-cosmic-dust-glitter opacity-60" />
        <div className="absolute top-[28%] right-[18%] w-1.5 h-1.5 bg-sky-300 rounded-full animate-cosmic-dust-glitter opacity-70 [animation-delay:1.2s]" />
        <div className="absolute top-[62%] left-[14%] w-1 h-1 bg-purple-300 rounded-full animate-cosmic-dust-glitter opacity-50 [animation-delay:2.4s]" />
        <div className="absolute top-[75%] right-[28%] w-1.5 h-1.5 bg-amber-200 rounded-full animate-cosmic-dust-glitter opacity-60 [animation-delay:0.8s]" />
      </div>

      {/* 2. Background Starfield Canvas (Underneath UI) */}
      <canvas
        ref={bgCanvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0 mix-blend-screen"
      />

      {/* 3. Foreground Cosmic Stardust & Photons Layer (z-20) */}
      <canvas
        ref={fgCanvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-20 mix-blend-screen"
      />

      {/* 4. Performance & Cosmic Quick Switcher Widget */}
      <div className="fixed bottom-3 left-3 z-30 pointer-events-auto flex items-center gap-1.5">
        <button
          type="button"
          onClick={triggerMeteorShower}
          disabled={meteorShowerActive}
          className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-medium border backdrop-blur-md transition-all cursor-pointer ${
            meteorShowerActive
              ? "bg-amber-500/30 text-amber-200 border-amber-400/60 shadow-[0_0_12px_rgba(245,158,11,0.5)] animate-pulse"
              : "bg-slate-900/80 text-slate-300 hover:text-white border-white/15 hover:border-cyan-400/50 hover:bg-slate-800 shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
          }`}
          title="召唤流星雨"
        >
          <span className="text-xs">🌠</span>
          <span className="hidden sm:inline">{meteorShowerActive ? "流星雨降临中" : "召唤流星雨"}</span>
        </button>

        <button
          type="button"
          onClick={() =>
            setPerfMode((prev) =>
              prev === "ultra" ? "balanced" : prev === "balanced" ? "eco" : "ultra"
            )
          }
          className="flex items-center gap-1 px-2 py-1.5 rounded-full text-xs font-medium border border-white/15 bg-slate-900/80 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/40 backdrop-blur-md transition-all cursor-pointer shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
          title="切换渲染性能模式（极速/流畅/华丽）"
        >
          <span className="text-xs">⚡</span>
          <span>
            {perfMode === "ultra" ? "华丽模式" : perfMode === "balanced" ? "流畅模式" : "极速省电"}
          </span>
        </button>
      </div>

      {/* 5. Noise Overlay */}
      <div className="fixed inset-0 noise-overlay pointer-events-none opacity-15 mix-blend-overlay z-0" />
    </>
  );
};

export const InteractiveAtmosphere = React.memo(InteractiveAtmosphereComponent);

