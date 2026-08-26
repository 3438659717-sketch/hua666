import React, { useRef } from "react";
import {
  Bookmark,
  FileText,
  Smartphone,
  Watch,
  Mic,
  Compass,
  Flashlight,
  Headphones,
  Glasses,
  Camera,
  Sparkles,
  Heart,
  Feather,
  ChevronLeft,
  ChevronRight,
  Globe2,
  Zap,
} from "lucide-react";
import { ProductId, TargetLanguage } from "../types";
import { PRODUCTS_CONFIG } from "../data/templates";
import { MagneticButton } from "./MagneticButton";

interface HeaderProps {
  currentProductId: ProductId;
  onSelectProduct: (productId: ProductId) => void;
  favoritesCount: number;
  currentLanguage?: TargetLanguage;
  onOpenFavorites: () => void;
  onOpenCheatsheet: () => void;
  onOpenPreviewDemo: () => void;
}

interface ProductNavMeta {
  id: ProductId;
  label: string;
  subLabel: string;
  icon: React.ReactNode;
  activeClass: string;
  glowClass: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentProductId,
  onSelectProduct,
  favoritesCount,
  currentLanguage,
  onOpenFavorites,
  onOpenCheatsheet,
  onOpenPreviewDemo,
}) => {
  const currentProduct = PRODUCTS_CONFIG[currentProductId] || PRODUCTS_CONFIG.rec10;
  const navScrollRef = useRef<HTMLDivElement | null>(null);

  const productNavList: ProductNavMeta[] = [
    {
      id: "rec10",
      label: "REC10",
      subLabel: "AI名片卡",
      icon: <Mic className="w-3.5 h-3.5" />,
      activeClass: "bg-blue-400/20 text-blue-100 border-blue-300/60 shadow-md shadow-blue-950/40 glow-spec-blue border-crystal-glow",
      glowClass: "from-blue-500/20 via-indigo-500/15 to-transparent border-blue-400/30",
    },
    {
      id: "qs40",
      label: "QS40",
      subLabel: "AI腕表",
      icon: <Watch className="w-3.5 h-3.5" />,
      activeClass: "bg-purple-400/20 text-purple-100 border-purple-300/60 shadow-md shadow-purple-950/40 glow-spec-purple border-crystal-glow",
      glowClass: "from-purple-500/20 via-violet-500/15 to-transparent border-purple-400/30",
    },
    {
      id: "t20",
      label: "T20",
      subLabel: "GPS探险",
      icon: <Compass className="w-3.5 h-3.5" />,
      activeClass: "bg-emerald-400/20 text-emerald-100 border-emerald-300/60 shadow-md shadow-emerald-950/40 glow-spec-emerald border-crystal-glow",
      glowClass: "from-emerald-500/20 via-teal-500/15 to-transparent border-emerald-400/30",
    },
    {
      id: "kt80",
      label: "KT80",
      subLabel: "800mAh潜水",
      icon: <Flashlight className="w-3.5 h-3.5" />,
      activeClass: "bg-amber-400/20 text-amber-100 border-amber-300/60 shadow-md shadow-amber-950/40 glow-spec-amber border-crystal-glow",
      glowClass: "from-amber-500/20 via-orange-500/15 to-transparent border-amber-400/30",
    },
    {
      id: "g58",
      label: "G58",
      subLabel: "时尚女性",
      icon: <Sparkles className="w-3.5 h-3.5" />,
      activeClass: "bg-pink-400/20 text-pink-100 border-pink-300/60 shadow-md shadow-pink-950/40 glow-spec-rose border-crystal-glow",
      glowClass: "from-pink-500/20 via-rose-500/15 to-transparent border-pink-400/30",
    },
    {
      id: "e12",
      label: "E12",
      subLabel: "摄像耳机",
      icon: <Headphones className="w-3.5 h-3.5" />,
      activeClass: "bg-sky-400/20 text-sky-100 border-sky-300/60 shadow-md shadow-sky-950/40 glow-spec-cyan border-crystal-glow",
      glowClass: "from-sky-500/20 via-teal-500/15 to-transparent border-sky-400/30",
    },
    {
      id: "e05",
      label: "E05",
      subLabel: "变色眼镜",
      icon: <Glasses className="w-3.5 h-3.5" />,
      activeClass: "bg-rose-400/20 text-rose-100 border-rose-300/60 shadow-md shadow-rose-950/40 glow-spec-rose border-crystal-glow",
      glowClass: "from-rose-500/20 via-pink-500/15 to-transparent border-rose-400/30",
    },
    {
      id: "e09",
      label: "E09",
      subLabel: "POV高清",
      icon: <Camera className="w-3.5 h-3.5" />,
      activeClass: "bg-sky-400/20 text-sky-100 border-sky-300/60 shadow-md shadow-sky-950/40 glow-spec-sky border-crystal-glow",
      glowClass: "from-sky-500/20 via-blue-500/15 to-transparent border-sky-400/30",
    },
    {
      id: "g2",
      label: "G2",
      subLabel: "生理健康",
      icon: <Heart className="w-3.5 h-3.5" />,
      activeClass: "bg-purple-400/20 text-purple-100 border-purple-300/60 shadow-md shadow-purple-950/40 glow-spec-purple border-crystal-glow",
      glowClass: "from-purple-500/20 via-violet-500/15 to-transparent border-purple-400/30",
    },
    {
      id: "fos10",
      label: "FOS10",
      subLabel: "14.9g极轻",
      icon: <Feather className="w-3.5 h-3.5" />,
      activeClass: "bg-teal-400/20 text-teal-100 border-teal-300/60 shadow-md shadow-teal-950/40 glow-spec-cyan border-crystal-glow",
      glowClass: "from-teal-500/20 via-emerald-500/15 to-transparent border-teal-400/30",
    },
  ];

  const currentNav = productNavList.find((p) => p.id === currentProductId) || productNavList[0];

  const getProductColor = () => {
    switch (currentProductId) {
      case "rec10":
        return "text-blue-300";
      case "qs40":
        return "text-purple-300";
      case "t20":
        return "text-emerald-300";
      case "kt80":
        return "text-amber-300";
      case "g58":
        return "text-pink-300";
      case "e12":
        return "text-cyan-300";
      case "e05":
        return "text-rose-300";
      case "e09":
        return "text-sky-300";
      case "g2":
        return "text-purple-300";
      case "fos10":
        return "text-teal-300";
      default:
        return "text-blue-300";
    }
  };

  const getMarketLabel = () => {
    if (currentProductId === "kt80" || currentProductId === "g58") {
      return currentLanguage === "de" ? "TikTok 德语区营销" : "TikTok 西语区营销";
    }
    return "TikTok 日本区文案矩阵";
  };

  const scrollNav = (direction: "left" | "right") => {
    if (navScrollRef.current) {
      navScrollRef.current.scrollBy({
        left: direction === "left" ? -220 : 220,
        behavior: "smooth",
      });
    }
  };

  return (
    <header id="app-header" className="thick-glass glass-bevel-edge sticky top-0 z-30 shadow-2xl transition-colors duration-300">
      {/* Top subtle iridescent celestial aurora glow line */}
      <div className="h-[2px] w-full cosmic-aurora-band shadow-[0_0_12px_rgba(56,189,248,0.5)]" />

      <div className="max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-2.5 sm:py-3 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Brand & Product Overview */}
        <div className="flex items-center justify-between w-full md:w-auto space-x-3 min-w-0">
          <div className="flex items-center space-x-3 min-w-0">
            {/* Animated Glow Model Icon Badge with Orbiting Star Dust */}
            <div className={`relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br ${currentNav.glowClass} border text-white shadow-xl overflow-hidden flex-shrink-0 bento-glass-tile group`}>
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md" />
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_6px_#67e8f9] animate-ping" />
              <div className="relative z-10">
                {currentNav.icon}
              </div>
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-[10px] sm:text-[11px] font-mono font-black tracking-[0.25em] text-white/50 uppercase flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-white/60 inline" />
                  FOSMET
                </span>
                <span className="text-white/20">/</span>
                <h1 className="text-sm sm:text-base font-black tracking-[-0.02em] font-display flex items-center gap-2 truncate">
                  <span className={`${getProductColor()} font-mono font-black text-base sm:text-lg drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]`}>
                    {currentProduct.model}
                  </span>
                  <span className="text-white/90 font-medium text-xs hidden lg:inline truncate tracking-normal">
                    {currentProduct.name.replace(/FOSMET\s+/, "")}
                  </span>
                </h1>

                {/* Animated Dynamic Soundwave Visualizer - Subtle High-end Audio Meter */}
                <div className="hidden sm:flex items-center gap-0.5 px-2 py-1 rounded-lg bg-black/60 border border-white/10" title="矩阵动态音频流">
                  <span className="w-0.5 bg-white/70 rounded-full animate-soundwave-1" />
                  <span className="w-0.5 bg-white/50 rounded-full animate-soundwave-2" />
                  <span className="w-0.5 bg-white/70 rounded-full animate-soundwave-3" />
                  <span className="w-0.5 bg-white/40 rounded-full animate-soundwave-4" />
                </div>

                <span className="inline-flex items-center gap-1.5 text-[9.5px] sm:text-[10px] font-bold px-2.5 py-0.5 rounded-full bento-glass-tile text-white/95 border border-white/20 backdrop-blur-lg shadow-sm flex-shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
                  <span>{getMarketLabel()}</span>
                </span>
              </div>

              <p className="text-[10.5px] text-white/70 hidden sm:block truncate max-w-sm lg:max-w-md mt-0.5 font-sans">
                {currentProduct.shortDesc}
              </p>
            </div>
          </div>

          {/* Quick Action Hub for mobile */}
          <div className="flex md:hidden items-center gap-1.5">
            <button
              onClick={onOpenFavorites}
              className="relative p-2 rounded-xl bg-white/10 border border-white/20 text-white"
            >
              <Bookmark className="w-4 h-4" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-[9px] font-bold flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* 10-Product Nav Switcher Carousel with Scroll Controls */}
        <div className="w-full md:w-auto flex items-center justify-between gap-1.5 relative">
          <button
            type="button"
            onClick={() => scrollNav("left")}
            className="hidden sm:flex items-center justify-center p-1 rounded-lg hover:bg-white/10 text-white/40 hover:text-white transition-colors cursor-pointer flex-shrink-0"
            title="向左滚动"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div
            ref={navScrollRef}
            className="bento-glass-tile p-1 rounded-2xl border border-white/20 flex items-center shadow-xl overflow-x-auto max-w-full no-scrollbar gap-1 scroll-smooth"
          >
            {productNavList.map((p) => {
              const isSelected = currentProductId === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  id={`header-switch-${p.id}`}
                  onClick={() => onSelectProduct(p.id)}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex-shrink-0 group ${
                    isSelected
                      ? p.activeClass
                      : "text-white/60 hover:text-white hover:bg-white/[0.08]"
                  }`}
                >
                  <span className={isSelected ? "" : "text-white/40 group-hover:text-white/80"}>
                    {p.icon}
                  </span>
                  <span className="font-mono font-bold">{p.label}</span>
                  <span className="text-[9.5px] opacity-60 hidden xl:inline font-sans font-normal">
                    {p.subLabel}
                  </span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => scrollNav("right")}
            className="hidden sm:flex items-center justify-center p-1 rounded-lg hover:bg-white/10 text-white/40 hover:text-white transition-colors cursor-pointer flex-shrink-0"
            title="向右滚动"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Desktop Utility Buttons */}
          <div className="hidden md:flex items-center space-x-2 flex-shrink-0 ml-2">
            {/* Cheatsheet Button */}
            <MagneticButton
              id="btn-open-cheatsheet"
              onClick={onOpenCheatsheet}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white/90 hover:text-white bento-glass-tile rounded-xl border border-white/20 shadow-md transition-colors"
              title="查看产品卖点及爆款钩子蓝图"
            >
              <FileText className="w-3.5 h-3.5 text-white/60" />
              <span className="hidden lg:inline">卖点蓝图</span>
            </MagneticButton>

            {/* TikTok Live Preview Demo */}
            <MagneticButton
              id="btn-preview-demo"
              onClick={onOpenPreviewDemo}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bento-glass-tile text-white/95 rounded-xl border border-white/20 shadow-md transition-colors"
              title="模拟在手机TikTok中的发布效果"
            >
              <Smartphone className="w-3.5 h-3.5 text-rose-400 drop-shadow-[0_0_8px_rgba(251,113,133,0.6)]" />
              <span className="hidden lg:inline">真机模拟</span>
            </MagneticButton>

            {/* Favorites Drawer Toggle Button */}
            <MagneticButton
              id="btn-open-favorites"
              onClick={onOpenFavorites}
              className="relative inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold bg-gradient-to-r from-white via-zinc-100 to-zinc-200 text-black hover:from-white hover:to-white rounded-xl shadow-lg shadow-white/20"
            >
              <Bookmark className="w-3.5 h-3.5 fill-black" />
              <span>收藏夹</span>
              {favoritesCount > 0 && (
                <span className="ml-0.5 px-1.5 py-0.2 text-[10px] font-bold bg-rose-500 text-white rounded-full shadow-xs">
                  {favoritesCount}
                </span>
              )}
            </MagneticButton>
          </div>
        </div>
      </div>
    </header>
  );
};
