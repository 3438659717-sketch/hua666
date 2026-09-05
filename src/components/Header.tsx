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
  Bot,
  Globe,
  Wind,
  ShieldCheck,
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
  onOpenChat: () => void;
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
  onOpenChat,
}) => {
  const currentProduct = PRODUCTS_CONFIG[currentProductId] || PRODUCTS_CONFIG.rec10;
  const navScrollRef = useRef<HTMLDivElement | null>(null);

  const productNavList: ProductNavMeta[] = [
    {
      id: "t40",
      label: "T40",
      subLabel: "4G儿童表",
      icon: <ShieldCheck className="w-3.5 h-3.5" />,
      activeClass: "bg-cyan-500 text-black font-extrabold shadow-[0_4px_20px_rgba(6,182,212,0.5)] border-cyan-300/60",
      themeColor: "text-cyan-400",
    },
    {
      id: "v18pro",
      label: "V18 PRO",
      subLabel: "折叠吸尘器",
      icon: <Wind className="w-3.5 h-3.5" />,
      activeClass: "bg-emerald-500 text-white shadow-[0_4px_20px_rgba(16,185,129,0.5)] border-emerald-300/50",
      themeColor: "text-emerald-400",
    },
    {
      id: "v17max",
      label: "V17 MAX",
      subLabel: "大户型旗舰",
      icon: <Wind className="w-3.5 h-3.5" />,
      activeClass: "bg-amber-500 text-black font-extrabold shadow-[0_4px_20px_rgba(245,158,11,0.5)] border-amber-300/60",
      themeColor: "text-amber-400",
    },
    {
      id: "rec10",
      label: "REC10",
      subLabel: "AI录音卡",
      icon: <Mic className="w-3.5 h-3.5" />,
      activeClass: "bg-blue-500 text-white shadow-[0_4px_20px_rgba(0,119,250,0.5)] border-blue-300/50",
      themeColor: "text-blue-400",
    },
    {
      id: "qs40",
      label: "QS40",
      subLabel: "AI智能表",
      icon: <Watch className="w-3.5 h-3.5" />,
      activeClass: "bg-purple-600 text-white shadow-[0_4px_20px_rgba(120,72,255,0.5)] border-purple-300/50",
      themeColor: "text-purple-400",
    },
    {
      id: "t20",
      label: "T20",
      subLabel: "GPS探险",
      icon: <Compass className="w-3.5 h-3.5" />,
      activeClass: "bg-emerald-500 text-white shadow-[0_4px_20px_rgba(0,210,135,0.5)] border-emerald-300/50",
      themeColor: "text-emerald-400",
    },
    {
      id: "kt80",
      label: "KT80",
      subLabel: "800mAh潜水",
      icon: <Flashlight className="w-3.5 h-3.5" />,
      activeClass: "bg-amber-500 text-black font-extrabold shadow-[0_4px_20px_rgba(245,158,11,0.5)] border-amber-300/60",
      themeColor: "text-amber-400",
    },
    {
      id: "g58",
      label: "G58",
      subLabel: "时尚腕表",
      icon: <Sparkles className="w-3.5 h-3.5" />,
      activeClass: "bg-pink-500 text-white shadow-[0_4px_20px_rgba(244,114,182,0.5)] border-pink-300/50",
      themeColor: "text-pink-400",
    },
    {
      id: "i228",
      label: "I228",
      subLabel: "女性便携",
      icon: <Heart className="w-3.5 h-3.5" />,
      activeClass: "bg-rose-500 text-white shadow-[0_4px_20px_rgba(244,63,94,0.5)] border-rose-300/50",
      themeColor: "text-rose-400",
    },
    {
      id: "e12",
      label: "E12",
      subLabel: "摄像耳机",
      icon: <Headphones className="w-3.5 h-3.5" />,
      activeClass: "bg-cyan-500 text-black font-extrabold shadow-[0_4px_20px_rgba(6,182,212,0.5)] border-cyan-300/60",
      themeColor: "text-cyan-400",
    },
    {
      id: "e05",
      label: "E05",
      subLabel: "调光眼镜",
      icon: <Glasses className="w-3.5 h-3.5" />,
      activeClass: "bg-rose-500 text-white shadow-[0_4px_20px_rgba(244,63,94,0.5)] border-rose-300/50",
      themeColor: "text-rose-400",
    },
    {
      id: "e09",
      label: "E09",
      subLabel: "POV摄像",
      icon: <Camera className="w-3.5 h-3.5" />,
      activeClass: "bg-sky-500 text-white shadow-[0_4px_20px_rgba(14,165,233,0.5)] border-sky-300/50",
      themeColor: "text-sky-400",
    },
    {
      id: "g2",
      label: "G2",
      subLabel: "生理健康",
      icon: <Heart className="w-3.5 h-3.5" />,
      activeClass: "bg-purple-500 text-white shadow-[0_4px_20px_rgba(168,85,247,0.5)] border-purple-300/50",
      themeColor: "text-purple-400",
    },
    {
      id: "fos10",
      label: "FOS10",
      subLabel: "14.9g轻薄",
      icon: <Feather className="w-3.5 h-3.5" />,
      activeClass: "bg-teal-500 text-white shadow-[0_4px_20px_rgba(20,184,166,0.5)] border-teal-300/50",
      themeColor: "text-teal-400",
    },
  ];

  const currentNav = productNavList.find((p) => p.id === currentProductId) || productNavList[0];

  const getMarketLabel = () => {
    if (currentProductId === "i228") {
      return "TikTok 西语区营销";
    }
    if (currentProductId === "t40" || currentProductId === "v18pro" || currentProductId === "v17max" || currentProductId === "kt80" || currentProductId === "g58") {
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
    <header id="app-header" className="sapphire-glass chromatic-dispersion-edge sticky top-0 z-30 transition-all duration-300">
      {/* Specular Micro-Chamfer Glare on Top Rim */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-300/30 via-white/80 via-rose-300/30 to-transparent pointer-events-none z-10" />

      <div className="max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-2.5 sm:py-3 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Brand & Model Showcase */}
        <div className="flex items-center justify-between w-full md:w-auto space-x-3 min-w-0">
          <div className="flex items-center space-x-3 min-w-0">
            {/* Xiaomi Squircle Model Icon Indicator with Sapphire Edge */}
            <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-[18px] bg-white/[0.08] border border-white/[0.18] text-white shadow-xl overflow-hidden flex-shrink-0 chromatic-dispersion-edge">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] to-transparent pointer-events-none" />
              <div className="relative z-10 text-white">
                {currentNav.icon}
              </div>
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-[11px] font-mono font-black tracking-[0.25em] text-white/50 uppercase">
                  FOSMET
                </span>
                <span className="text-white/25">/</span>
                <h1 className="text-sm sm:text-base font-bold tracking-tight flex items-center gap-2 truncate">
                  <span className={`${currentNav.themeColor} font-mono font-black text-base sm:text-lg tracking-tight`}>
                    {currentProduct.model}
                  </span>
                  <span className="text-white/80 font-normal text-xs hidden lg:inline truncate">
                    {currentProduct.name.replace(/FOSMET\s+/, "")}
                  </span>
                </h1>

                {/* HyperOS Alive Status Pill */}
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white/[0.08] text-white border border-white/[0.12] shadow-xs flex-shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00d287] shadow-[0_0_10px_#00d287] animate-pulse" />
                  <span>{getMarketLabel()}</span>
                </span>
              </div>

              <p className="text-[11px] text-white/50 hidden sm:block truncate max-w-sm lg:max-w-md mt-0.5 font-medium">
                {currentProduct.shortDesc}
              </p>
            </div>
          </div>

          {/* Mobile Favorites & Chat Trigger */}
          <div className="flex md:hidden items-center gap-1.5">
            <button
              id="mobile-btn-open-chat"
              type="button"
              onClick={onOpenChat}
              className="p-2 rounded-[16px] bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 physic-spring-tap flex items-center gap-1 text-xs"
              title="AI 智能搜索 · 出海爆款智库 (全网实时检索)"
            >
              <Globe className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="text-[11px] font-bold">AI 搜索</span>
            </button>

            <button
              onClick={onOpenFavorites}
              className="relative p-2 rounded-[16px] bg-white/[0.08] border border-white/[0.15] text-white physic-spring-tap"
            >
              <Bookmark className="w-4 h-4" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#ff6900] text-[9px] font-black flex items-center justify-center text-white shadow-sm">
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
            className="hidden sm:flex items-center justify-center p-1.5 rounded-[14px] hover:bg-white/[0.1] text-white/40 hover:text-white transition-colors cursor-pointer flex-shrink-0 physic-spring-tap"
            title="向左滚动"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div
            ref={navScrollRef}
            className="p-1 rounded-[22px] bg-black/40 border border-white/[0.1] flex items-center shadow-inner overflow-x-auto max-w-full no-scrollbar gap-1 scroll-smooth"
          >
            {productNavList.map((p) => {
              const isSelected = currentProductId === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  id={`header-switch-${p.id}`}
                  onClick={() => onSelectProduct(p.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-[16px] text-xs font-semibold transition-all duration-200 cursor-pointer flex-shrink-0 physic-spring-tap ${
                    isSelected
                      ? `${p.activeClass} border ring-1 ring-white/30`
                      : "text-white/60 hover:text-white hover:bg-white/[0.08] border border-transparent"
                  }`}
                >
                  <span>{p.icon}</span>
                  <span className="font-mono font-bold">{p.label}</span>
                  <span className="text-[10px] opacity-75 hidden xl:inline font-normal">
                    {p.subLabel}
                  </span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => scrollNav("right")}
            className="hidden sm:flex items-center justify-center p-1.5 rounded-[14px] hover:bg-white/[0.1] text-white/40 hover:text-white transition-colors cursor-pointer flex-shrink-0 physic-spring-tap"
            title="向右滚动"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2 flex-shrink-0 ml-2">
            {/* AI 智能搜索 Trigger Button */}
            <MagneticButton
              id="btn-open-gemini-chat"
              onClick={onOpenChat}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-cyan-200 hover:text-white bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-teal-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 rounded-[16px] border border-cyan-500/40 shadow-sm shadow-cyan-500/20 transition-all physic-spring-tap group"
              title="打开 AI 智能搜索 · 出海爆款智库 (全网实时检索常驻 · 现实客观对齐)"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform animate-pulse" />
              <span>AI 搜索</span>
              <span className="px-1.5 py-0.2 rounded-full text-[9px] font-mono bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 hidden lg:inline">
                实时对齐
              </span>
            </MagneticButton>

            <MagneticButton
              id="btn-open-cheatsheet"
              onClick={onOpenCheatsheet}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white/80 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] rounded-[16px] border border-white/[0.1] shadow-sm transition-colors physic-spring-tap"
              title="查看产品卖点及爆款钩子蓝图"
            >
              <FileText className="w-3.5 h-3.5 text-white/70" />
              <span className="hidden lg:inline">卖点蓝图</span>
            </MagneticButton>

            <MagneticButton
              id="btn-preview-demo"
              onClick={onOpenPreviewDemo}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-white/[0.06] hover:bg-white/[0.12] rounded-[16px] border border-white/[0.1] shadow-sm transition-colors physic-spring-tap"
              title="模拟在手机TikTok中的发布效果"
            >
              <Smartphone className="w-3.5 h-3.5 text-rose-400" />
              <span className="hidden lg:inline">真机模拟</span>
            </MagneticButton>

            <MagneticButton
              id="btn-open-favorites"
              onClick={onOpenFavorites}
              className="relative inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-black bg-white text-black hover:bg-zinc-100 rounded-[16px] shadow-lg shadow-white/10 transition-all physic-spring-tap"
            >
              <Bookmark className="w-3.5 h-3.5 fill-black" />
              <span>收藏夹</span>
              {favoritesCount > 0 && (
                <span className="ml-0.5 px-1.5 py-0.2 text-[10px] font-extrabold bg-[#ff6900] text-white rounded-full shadow-xs">
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
