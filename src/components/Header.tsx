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
  themeColor: string;
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
      subLabel: "AI录音卡",
      icon: <Mic className="w-3.5 h-3.5" />,
      activeClass: "bg-blue-500 text-white shadow-[0_4px_16px_rgba(0,119,250,0.45)] border-blue-400/50",
      themeColor: "text-blue-400",
    },
    {
      id: "qs40",
      label: "QS40",
      subLabel: "AI智能表",
      icon: <Watch className="w-3.5 h-3.5" />,
      activeClass: "bg-purple-600 text-white shadow-[0_4px_16px_rgba(120,72,255,0.45)] border-purple-400/50",
      themeColor: "text-purple-400",
    },
    {
      id: "t20",
      label: "T20",
      subLabel: "GPS探险",
      icon: <Compass className="w-3.5 h-3.5" />,
      activeClass: "bg-emerald-500 text-white shadow-[0_4px_16px_rgba(0,210,135,0.45)] border-emerald-400/50",
      themeColor: "text-emerald-400",
    },
    {
      id: "kt80",
      label: "KT80",
      subLabel: "800mAh潜水",
      icon: <Flashlight className="w-3.5 h-3.5" />,
      activeClass: "bg-amber-500 text-black font-bold shadow-[0_4px_16px_rgba(245,158,11,0.45)] border-amber-300/50",
      themeColor: "text-amber-400",
    },
    {
      id: "g58",
      label: "G58",
      subLabel: "时尚腕表",
      icon: <Sparkles className="w-3.5 h-3.5" />,
      activeClass: "bg-pink-500 text-white shadow-[0_4px_16px_rgba(244,114,182,0.45)] border-pink-300/50",
      themeColor: "text-pink-400",
    },
    {
      id: "e12",
      label: "E12",
      subLabel: "摄像耳机",
      icon: <Headphones className="w-3.5 h-3.5" />,
      activeClass: "bg-cyan-500 text-black font-bold shadow-[0_4px_16px_rgba(6,182,212,0.45)] border-cyan-300/50",
      themeColor: "text-cyan-400",
    },
    {
      id: "e05",
      label: "E05",
      subLabel: "调光眼镜",
      icon: <Glasses className="w-3.5 h-3.5" />,
      activeClass: "bg-rose-500 text-white shadow-[0_4px_16px_rgba(244,63,94,0.45)] border-rose-400/50",
      themeColor: "text-rose-400",
    },
    {
      id: "e09",
      label: "E09",
      subLabel: "POV摄像",
      icon: <Camera className="w-3.5 h-3.5" />,
      activeClass: "bg-sky-500 text-white shadow-[0_4px_16px_rgba(14,165,233,0.45)] border-sky-400/50",
      themeColor: "text-sky-400",
    },
    {
      id: "g2",
      label: "G2",
      subLabel: "生理健康",
      icon: <Heart className="w-3.5 h-3.5" />,
      activeClass: "bg-purple-500 text-white shadow-[0_4px_16px_rgba(168,85,247,0.45)] border-purple-400/50",
      themeColor: "text-purple-400",
    },
    {
      id: "fos10",
      label: "FOS10",
      subLabel: "14.9g轻薄",
      icon: <Feather className="w-3.5 h-3.5" />,
      activeClass: "bg-teal-500 text-white shadow-[0_4px_16px_rgba(20,184,166,0.45)] border-teal-400/50",
      themeColor: "text-teal-400",
    },
  ];

  const currentNav = productNavList.find((p) => p.id === currentProductId) || productNavList[0];

  const getMarketLabel = () => {
    if (currentProductId === "kt80" || currentProductId === "g58") {
      return currentLanguage === "de" ? "TikTok 德语区营销" : "TikTok 西语区营销";
    }
    return "TikTok 日本区矩阵";
  };

  const scrollNav = (direction: "left" | "right") => {
    if (navScrollRef.current) {
      navScrollRef.current.scrollBy({
        left: direction === "left" ? -240 : 240,
        behavior: "smooth",
      });
    }
  };

  return (
    <header id="app-header" className="hyper-glass sticky top-0 z-30 transition-all duration-300">
      {/* Specular Micro-Chamfer Glare on Top Rim */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none z-10" />

      <div className="max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-2.5 sm:py-3 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Brand & Model Showcase */}
        <div className="flex items-center justify-between w-full md:w-auto space-x-3 min-w-0">
          <div className="flex items-center space-x-3 min-w-0">
            {/* Xiaomi Squircle Model Icon Indicator */}
            <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-[16px] bg-white/[0.06] border border-white/[0.12] text-white shadow-lg overflow-hidden flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent pointer-events-none" />
              <div className="relative z-10 text-white">
                {currentNav.icon}
              </div>
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-white/40 uppercase">
                  FOSMET
                </span>
                <span className="text-white/20">/</span>
                <h1 className="text-sm sm:text-base font-bold tracking-tight flex items-center gap-2 truncate">
                  <span className={`${currentNav.themeColor} font-mono font-extrabold text-base sm:text-lg`}>
                    {currentProduct.model}
                  </span>
                  <span className="text-white/80 font-normal text-xs hidden lg:inline truncate">
                    {currentProduct.name.replace(/FOSMET\s+/, "")}
                  </span>
                </h1>

                {/* HyperOS Alive Status Pill */}
                <span className="inline-flex items-center gap-1.5 text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-white/[0.06] text-white/90 border border-white/[0.08] shadow-sm flex-shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00d287] shadow-[0_0_8px_#00d287] animate-pulse" />
                  <span>{getMarketLabel()}</span>
                </span>
              </div>

              <p className="text-[11px] text-white/50 hidden sm:block truncate max-w-sm lg:max-w-md mt-0.5">
                {currentProduct.shortDesc}
              </p>
            </div>
          </div>

          {/* Mobile Favorites Trigger */}
          <div className="flex md:hidden items-center gap-1.5">
            <button
              onClick={onOpenFavorites}
              className="relative p-2 rounded-[14px] bg-white/[0.08] border border-white/[0.12] text-white"
            >
              <Bookmark className="w-4 h-4" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#ff6900] text-[9px] font-bold flex items-center justify-center text-white">
                  {favoritesCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* 10-Product Squircle Switcher Carousel */}
        <div className="w-full md:w-auto flex items-center justify-between gap-1.5 relative">
          <button
            type="button"
            onClick={() => scrollNav("left")}
            className="hidden sm:flex items-center justify-center p-1.5 rounded-[12px] hover:bg-white/[0.08] text-white/40 hover:text-white transition-colors cursor-pointer flex-shrink-0"
            title="向左滚动"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div
            ref={navScrollRef}
            className="p-1 rounded-[20px] bg-white/[0.035] border border-white/[0.08] flex items-center shadow-inner overflow-x-auto max-w-full no-scrollbar gap-1 scroll-smooth"
          >
            {productNavList.map((p) => {
              const isSelected = currentProductId === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  id={`header-switch-${p.id}`}
                  onClick={() => onSelectProduct(p.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[14px] text-xs font-medium transition-all duration-200 cursor-pointer flex-shrink-0 ${
                    isSelected
                      ? `${p.activeClass} border`
                      : "text-white/60 hover:text-white hover:bg-white/[0.06] border border-transparent"
                  }`}
                >
                  <span>{p.icon}</span>
                  <span className="font-mono font-bold">{p.label}</span>
                  <span className="text-[10px] opacity-70 hidden xl:inline font-normal">
                    {p.subLabel}
                  </span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => scrollNav("right")}
            className="hidden sm:flex items-center justify-center p-1.5 rounded-[12px] hover:bg-white/[0.08] text-white/40 hover:text-white transition-colors cursor-pointer flex-shrink-0"
            title="向右滚动"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2 flex-shrink-0 ml-2">
            <MagneticButton
              id="btn-open-cheatsheet"
              onClick={onOpenCheatsheet}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white/80 hover:text-white bg-white/[0.05] hover:bg-white/[0.09] rounded-[14px] border border-white/[0.08] shadow-sm transition-colors"
              title="查看产品卖点及爆款钩子蓝图"
            >
              <FileText className="w-3.5 h-3.5 text-white/60" />
              <span className="hidden lg:inline">卖点蓝图</span>
            </MagneticButton>

            <MagneticButton
              id="btn-preview-demo"
              onClick={onOpenPreviewDemo}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-white/[0.05] hover:bg-white/[0.09] rounded-[14px] border border-white/[0.08] shadow-sm transition-colors"
              title="模拟在手机TikTok中的发布效果"
            >
              <Smartphone className="w-3.5 h-3.5 text-rose-400" />
              <span className="hidden lg:inline">真机模拟</span>
            </MagneticButton>

            <MagneticButton
              id="btn-open-favorites"
              onClick={onOpenFavorites}
              className="relative inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold bg-white text-black hover:bg-zinc-100 rounded-[14px] shadow-md shadow-white/10 transition-all"
            >
              <Bookmark className="w-3.5 h-3.5 fill-black" />
              <span>收藏夹</span>
              {favoritesCount > 0 && (
                <span className="ml-0.5 px-1.5 py-0.2 text-[10px] font-bold bg-[#ff6900] text-white rounded-full">
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
