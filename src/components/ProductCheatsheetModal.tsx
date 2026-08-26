import React, { useState } from "react";
import {
  X,
  ShieldCheck,
  Sparkles,
  Check,
  Copy,
  Watch,
  Mic,
  Compass,
  Flashlight,
  Target,
  BookOpen,
  Zap,
  Camera,
  Headphones,
  Glasses,
  Heart,
  Feather,
} from "lucide-react";
import { PRODUCTS_CONFIG } from "../data/templates";
import { ProductId } from "../types";
import { MagneticButton } from "./MagneticButton";

interface ProductCheatsheetModalProps {
  productId: ProductId;
  isOpen: boolean;
  onClose: () => void;
  onCopyTags: (tags: string) => void;
}

export const ProductCheatsheetModal: React.FC<ProductCheatsheetModalProps> = ({
  productId: initialProductId,
  isOpen,
  onClose,
  onCopyTags,
}) => {
  const [selectedProductId, setSelectedProductId] = useState<ProductId>(initialProductId);
  const [copiedTags, setCopiedTags] = useState(false);

  // Sync with prop when opened
  React.useEffect(() => {
    setSelectedProductId(initialProductId);
  }, [initialProductId, isOpen]);

  if (!isOpen) return null;

  const currentProduct = PRODUCTS_CONFIG[selectedProductId] || PRODUCTS_CONFIG.rec10;
  const isFos10 = selectedProductId === "fos10";
  const isG2 = selectedProductId === "g2";
  const isG58 = selectedProductId === "g58";
  const isE09 = selectedProductId === "e09";
  const isE05 = selectedProductId === "e05";
  const isE12 = selectedProductId === "e12";
  const isKt80 = selectedProductId === "kt80";
  const isT20 = selectedProductId === "t20";
  const isQs40 = selectedProductId === "qs40";

  const handleCopyTags = () => {
    onCopyTags(currentProduct.fixedTags);
    setCopiedTags(true);
    setTimeout(() => setCopiedTags(false), 2000);
  };

  const getHeaderIcon = (pid: ProductId) => {
    switch (pid) {
      case "fos10":
        return <Feather className="w-4 h-4 text-teal-400" />;
      case "g2":
        return <Heart className="w-4 h-4 text-purple-400" />;
      case "g58":
        return <Sparkles className="w-4 h-4 text-pink-400" />;
      case "e09":
        return <Camera className="w-4 h-4 text-sky-400" />;
      case "e05":
        return <Glasses className="w-4 h-4 text-rose-400" />;
      case "e12":
        return <Headphones className="w-4 h-4 text-cyan-400" />;
      case "kt80":
        return <Flashlight className="w-4 h-4 text-amber-400" />;
      case "t20":
        return <Compass className="w-4 h-4 text-emerald-400" />;
      case "qs40":
        return <Watch className="w-4 h-4 text-purple-400" />;
      default:
        return <Mic className="w-4 h-4 text-blue-400" />;
    }
  };

  const getThemeColor = () => {
    if (isFos10) return "text-teal-400";
    if (isG2) return "text-purple-400";
    if (isG58) return "text-pink-400";
    if (isE09) return "text-sky-400";
    if (isE05) return "text-rose-400";
    if (isE12) return "text-cyan-400";
    if (isKt80) return "text-amber-400";
    if (isT20) return "text-emerald-400";
    if (isQs40) return "text-purple-400";
    return "text-blue-400";
  };

  const productList: ProductId[] = [
    "rec10",
    "qs40",
    "t20",
    "kt80",
    "g58",
    "e12",
    "e05",
    "e09",
    "g2",
    "fos10",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-3xl acrylic-glass border-iridescent rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] text-white/90">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#090a10]/80 border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-2xl bg-white/[0.05] border border-white/[0.08] ${getThemeColor()}`}>
              {getHeaderIcon(selectedProductId)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white tracking-tight">
                  {currentProduct.name}
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/[0.05] text-white/70 border border-white/[0.08]">
                  {currentProduct.badge} · 策划蓝图
                </span>
              </div>
              <p className="text-xs text-white/50 mt-0.5">
                {isG58 || isKt80
                  ? "TikTok 欧美/拉美出海营销爆款文案设计逻辑与核心卖点矩阵"
                  : "TikTok 日本区爆款文案设计逻辑与核心卖点矩阵"}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-white/40 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Product Quick-Switch Tabs inside Modal */}
        <div className="px-6 py-2.5 bg-black/40 border-b border-white/[0.06] flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {productList.map((pid) => {
            const isSel = selectedProductId === pid;
            const pcfg = PRODUCTS_CONFIG[pid];
            return (
              <button
                key={pid}
                type="button"
                onClick={() => setSelectedProductId(pid)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex-shrink-0 ${
                  isSel
                    ? "bg-white/20 text-white border border-white/30 shadow-md"
                    : "text-white/50 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                {getHeaderIcon(pid)}
                <span>{pcfg.model}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs leading-relaxed custom-scrollbar">
          {/* Section 1: Product Positioning & Formula */}
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Target className={`w-4 h-4 ${getThemeColor()}`} />
              <h4 className="font-bold text-white text-xs uppercase tracking-wider">
                产品定位与核心爆款公式
              </h4>
            </div>
            <p className="text-white/80 leading-relaxed text-[13px]">
              {currentProduct.shortDesc}
            </p>
            <div className="mt-3 flex items-center gap-2 text-[11px] bg-white/[0.03] p-2.5 rounded-xl border border-white/[0.06]">
              <span className="font-semibold text-white/70 flex-shrink-0">短视频文案公式:</span>
              <span className={`${getThemeColor()} font-medium font-mono`}>{currentProduct.tiktokFormula}</span>
            </div>
          </div>

          {/* Section 2: Core Highlights */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className={`w-4 h-4 ${getThemeColor()}`} />
              <h4 className="font-bold text-white text-xs uppercase tracking-wider">
                核心产品卖点（爆款 Hook 支撑点）
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {currentProduct.highlights.map((hp, idx) => (
                <div
                  key={idx}
                  className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-3 flex items-start gap-2.5"
                >
                  <span className={`font-mono font-bold text-xs ${getThemeColor()} flex-shrink-0 mt-0.5`}>
                    0{idx + 1}
                  </span>
                  <span className="text-white/80 leading-snug">{hp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Hardware & Feature Specs */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Zap className={`w-4 h-4 ${getThemeColor()}`} />
              <h4 className="font-bold text-white text-xs uppercase tracking-wider">
                核心硬件与功能规格清单
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {currentProduct.specs.map((spec, idx) => (
                <div
                  key={idx}
                  className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-2.5 flex flex-col"
                >
                  <span className="text-[10px] text-white/40 font-medium mb-0.5">
                    {spec.label}
                  </span>
                  <span className="text-white/90 text-xs font-medium font-mono">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Official 5 Hashtags */}
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-2">
                <ShieldCheck className={`w-4 h-4 ${getThemeColor()}`} />
                <h4 className="font-bold text-white text-xs uppercase tracking-wider">
                  原厂标准营销标签 (Hashtags)
                </h4>
              </div>
              <button
                type="button"
                onClick={handleCopyTags}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-[11px] font-semibold bg-white/[0.06] hover:bg-white/[0.1] text-white/80 hover:text-white border border-white/[0.08] transition-all cursor-pointer"
              >
                {copiedTags ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span>已复制</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>复制标签</span>
                  </>
                )}
              </button>
            </div>
            <div className="bg-[#0c0d12] p-3 rounded-xl border border-white/[0.06] font-mono text-[12px] text-white/90 select-all">
              {currentProduct.fixedTags}
            </div>
            <p className="text-[11px] text-white/40 mt-2">
              ※ TikTok 推荐算法严格依据前5个标签做受众兴趣聚类与推流匹配，生成的所有标题均已自动挂载。
            </p>
          </div>

          {/* Section 5: TikTok Viral Hook Blueprint Formula */}
          <div className="bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.08] rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className={`w-4 h-4 ${getThemeColor()}`} />
              <h4 className="font-bold text-white text-xs uppercase tracking-wider">
                短视频高转化黄金文案法则
              </h4>
            </div>
            <div className="space-y-2 text-white/70">
              <div className="flex items-start gap-2">
                <span className="font-mono text-white/40 font-bold">1.</span>
                <span>
                  <strong>前 3 秒痛点反转（Hook）：</strong> 颠覆「传统厚重/繁琐记录/高价品牌」等固有认知，瞬间激发用户好奇心。
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-white/40 font-bold">2.</span>
                <span>
                  <strong>硬核实机成果前置（Value）：</strong> 明确展示 AI转写、800万高清POV、800mAh潜水强光等直观功能。
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-white/40 font-bold">3.</span>
                <span>
                  <strong>行动唤醒（CTA）：</strong> 结尾自然引导互动、点赞保存或在评论区讨论。
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-[#090a10]/80 border-t border-white/[0.08] flex justify-end">
          <MagneticButton
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-white/90 hover:text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.1] transition-colors cursor-pointer"
          >
            完成并返回
          </MagneticButton>
        </div>
      </div>
    </div>
  );
};
