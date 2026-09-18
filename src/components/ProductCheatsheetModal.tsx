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
  Wind,
  Clapperboard,
  Swords,
  MessageSquareQuote,
  Share2,
} from "lucide-react";
import { PRODUCTS_CONFIG } from "../data/templates";
import { ProductId } from "../types";
import { MagneticButton } from "./MagneticButton";
import { playPetSound } from "../utils/petSound";

interface ProductCheatsheetModalProps {
  productId: ProductId;
  isOpen: boolean;
  onClose: () => void;
  onCopyTags: (tags: string) => void;
}

type CheatsheetTab = "specs" | "storyboard" | "competitor" | "comments";

export const ProductCheatsheetModal: React.FC<ProductCheatsheetModalProps> = ({
  productId: initialProductId,
  isOpen,
  onClose,
  onCopyTags,
}) => {
  const [selectedProductId, setSelectedProductId] = useState<ProductId>(initialProductId);
  const [copiedTags, setCopiedTags] = useState(false);
  const [activeTab, setActiveTab] = useState<CheatsheetTab>("specs");
  const [copiedScriptIdx, setCopiedScriptIdx] = useState<number | null>(null);

  React.useEffect(() => {
    setSelectedProductId(initialProductId);
  }, [initialProductId, isOpen]);

  if (!isOpen) return null;

  const currentProduct = PRODUCTS_CONFIG[selectedProductId] || PRODUCTS_CONFIG.rec10;
  const isG58 = selectedProductId === "g58";
  const isKt80 = selectedProductId === "kt80";

  const handleCopyTags = () => {
    onCopyTags(currentProduct.fixedTags);
    setCopiedTags(true);
    playPetSound("copy_sparkle");
    setTimeout(() => setCopiedTags(false), 2000);
  };

  const handleCopyScript = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedScriptIdx(idx);
    playPetSound("copy_sparkle");
    setTimeout(() => setCopiedScriptIdx(null), 2000);
  };

  const getHeaderIcon = (pid: ProductId) => {
    switch (pid) {
      case "t40":
        return <ShieldCheck className="w-4 h-4" />;
      case "v18pro":
      case "v17max":
        return <Wind className="w-4 h-4" />;
      case "fos10":
        return <Feather className="w-4 h-4" />;
      case "g2":
      case "i228":
        return <Heart className="w-4 h-4" />;
      case "g58":
        return <Sparkles className="w-4 h-4" />;
      case "e09":
        return <Camera className="w-4 h-4" />;
      case "e05":
        return <Glasses className="w-4 h-4" />;
      case "e12":
        return <Headphones className="w-4 h-4" />;
      case "kt80":
        return <Flashlight className="w-4 h-4" />;
      case "t20":
        return <Compass className="w-4 h-4" />;
      case "qs40":
        return <Watch className="w-4 h-4" />;
      default:
        return <Mic className="w-4 h-4" />;
    }
  };

  const productList: ProductId[] = [
    "t40",
    "v18pro",
    "v17max",
    "rec10",
    "qs40",
    "t20",
    "kt80",
    "g58",
    "i228",
    "e12",
    "e05",
    "e09",
    "g2",
    "fos10",
  ];

  // Dynamic Storyboards per product
  const getStoryboards = () => [
    {
      title: "【痛点暴击型 0-3秒开篇】",
      visual: "镜头直拍用户愤怒扔掉传统沉重手表/繁琐笔记，下一秒迅速特写切入 " + currentProduct.model + " 实机精致质感！",
      audio: "「还在忍受传统痛点吗？海外博主都在偷偷换这台黑科技！」",
      onScreenText: "【痛点终结者】" + currentProduct.model + " 现货实测！",
      cta: "左下角小黄车直发日本/欧洲现货，限量赠专属配件！",
    },
    {
      title: "【极限暴力实测 0-3秒开篇】",
      visual: "水花飞溅/高处跌落/极暗暗光瞬间一键点亮（或录音开启波形跳动），强烈视觉冲击让手指停止滑动！",
      audio: "「敢这么测的，市面上仅此一家！看好了，3秒见真章！」",
      onScreenText: "【真机实测】暴力测试能否存活？",
      cta: "点击头像看完整无剪辑测评，今日首批免运费！",
    },
    {
      title: "【职场/日常信息差反差开篇】",
      visual: "普通人手忙脚乱，主角优雅抬手/轻触一下，AI与智能硬件瞬间搞定全场！",
      audio: "「为什么同龄人从不加班？因为他们掌握了这个装备信息差！」",
      onScreenText: "【效率神器】职场精英必备黑科技",
      cta: "点赞收藏不迷路，手慢无货！",
    },
    {
      title: "【价格认知颠覆型开篇】",
      visual: "将几千美元大牌产品与 " + currentProduct.model + " 放在同一画面并列盲测对比！",
      audio: "「不要再去花几万日元买品牌溢价了！千元质感百元直接带走！」",
      onScreenText: "【盲测对比】究竟谁更胜一筹？",
      cta: "别被大牌割韭菜，主页橱窗直接拍！",
    },
    {
      title: "【沉浸式高质感开箱 ASMR 开篇】",
      visual: "近距离微距推镜头，撕膜瞬间清脆响声，铝合金磨砂拉丝光影流转，极度解压舒缓！",
      audio: "「（清脆撕膜声）听听这声音，这个价位能做到这个做工，真的绝了！」",
      onScreenText: "【治愈开箱】质感天花板",
      cta: "送礼自用天花板，点击置顶链接抢现货！",
    },
  ];

  // Competitor battle points
  const getCompetitorPoints = () => [
    {
      dimension: "价格门槛",
      competitor: "传统大牌动辄 3~8 万日元（溢价极高）",
      fosmet: currentProduct.model + " 突破性平民定价，不到大牌 1/3 价格享受同等甚至更强硬件",
    },
    {
      dimension: "核心功能针对性",
      competitor: "功能冗余堆砌，续航短、操作复杂，学习成本极高",
      fosmet: "刀法精准直击痛点（如超长续航/极轻佩戴/独立高精度硬件），开机即用",
    },
    {
      dimension: "出海售后保障",
      competitor: "跨境退换繁琐，沟通时差长",
      fosmet: "海外本地仓现货直发，支持权威认证与无忧售后保障",
    },
  ];

  // High converting comment templates
  const getCommentTemplates = () => [
    {
      tag: "置顶官方转化",
      text: "📌【官方现货通知】视频同款为 " + currentProduct.model + " 正品，日本/西班牙直邮免关税，点击左下角小黄车享 30 天无理由体验！",
    },
    {
      tag: "打消续航/材质疑虑",
      text: "回复 @求求求链接：实测日常使用完全无压力！机身做工用料都是真材实料，收到上手摸一摸质感就知道有多值了！",
    },
    {
      tag: "兼容性与系统打消",
      text: "回复 @问问兼容：iOS 苹果和 Android 安卓手机都完美支持，蓝牙一秒配对，支持多国语言切换！",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-4xl hyper-glass rounded-[32px] shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-white/[0.04] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-[16px] bg-white/[0.08] text-white">
              {getHeaderIcon(selectedProductId)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white tracking-tight">
                  {currentProduct.name}
                </h3>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  {currentProduct.badge} · 出海实战全维武器库
                </span>
              </div>
              <p className="text-xs text-white/50 mt-0.5">
                {isG58 || isKt80
                  ? "TikTok 欧美/拉美出海营销爆款全维武器库 (分镜/对比/规格/神评)"
                  : "TikTok 日本区出海营销爆款全维武器库 (分镜/对比/规格/神评)"}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-white/40 hover:text-white rounded-[10px] hover:bg-white/[0.06] transition-colors cursor-pointer"
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
                onClick={() => {
                  setSelectedProductId(pid);
                  playPetSound("click");
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[12px] text-xs font-semibold transition-all cursor-pointer flex-shrink-0 ${
                  isSel
                    ? "bg-white text-black font-bold shadow-md"
                    : "text-white/50 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {getHeaderIcon(pid)}
                <span>{pcfg.model}</span>
              </button>
            );
          })}
        </div>

        {/* 4 Feature Tabs */}
        <div className="px-6 py-2 bg-white/[0.02] border-b border-white/[0.06] flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setActiveTab("specs");
              playPetSound("click");
            }}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[12px] text-xs font-bold transition-all cursor-pointer ${
              activeTab === "specs"
                ? "bg-cyan-500/20 text-cyan-200 border border-cyan-500/40"
                : "text-white/50 hover:text-white"
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>核心规格与卖点</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab("storyboard");
              playPetSound("click");
            }}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[12px] text-xs font-bold transition-all cursor-pointer ${
              activeTab === "storyboard"
                ? "bg-purple-500/20 text-purple-200 border border-purple-500/40"
                : "text-white/50 hover:text-white"
            }`}
          >
            <Clapperboard className="w-3.5 h-3.5" />
            <span>5套黄金前3秒分镜</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab("competitor");
              playPetSound("click");
            }}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[12px] text-xs font-bold transition-all cursor-pointer ${
              activeTab === "competitor"
                ? "bg-amber-500/20 text-amber-200 border border-amber-500/40"
                : "text-white/50 hover:text-white"
            }`}
          >
            <Swords className="w-3.5 h-3.5" />
            <span>竞品降维对比打击</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab("comments");
              playPetSound("click");
            }}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[12px] text-xs font-bold transition-all cursor-pointer ${
              activeTab === "comments"
                ? "bg-emerald-500/20 text-emerald-200 border border-emerald-500/40"
                : "text-white/50 hover:text-white"
            }`}
          >
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>评论区高转化神评</span>
          </button>
        </div>

        {/* Modal Body with Tab Switching */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs leading-relaxed custom-scrollbar flex-1">
          {activeTab === "specs" && (
            <>
              {/* Section 1: Product Positioning & Formula */}
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-[22px] p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-cyan-400" />
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider">
                    产品定位与核心爆款公式
                  </h4>
                </div>
                <p className="text-white/80 leading-relaxed text-[13px]">
                  {currentProduct.shortDesc}
                </p>
                <div className="mt-3 flex items-center gap-2 text-[11px] bg-black/40 p-2.5 rounded-[14px] border border-white/[0.06]">
                  <span className="font-semibold text-white/60 flex-shrink-0">短视频文案公式:</span>
                  <span className="text-white font-medium font-mono">{currentProduct.tiktokFormula}</span>
                </div>
              </div>

              {/* Section 2: Core Highlights */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider">
                    核心产品卖点（爆款 Hook 支撑点）
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentProduct.highlights.map((hp, idx) => (
                    <div
                      key={idx}
                      className="bg-white/[0.03] border border-white/[0.06] rounded-[18px] p-3 flex items-start gap-2.5"
                    >
                      <span className="font-mono font-bold text-xs text-cyan-400 flex-shrink-0 mt-0.5">
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
                  <Zap className="w-4 h-4 text-purple-400" />
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider">
                    核心硬件与功能规格清单
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentProduct.specs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="bg-white/[0.02] border border-white/[0.05] rounded-[14px] p-2.5 flex flex-col"
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
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-[22px] p-4">
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <h4 className="font-bold text-white text-xs uppercase tracking-wider">
                      原厂标准营销标签 (Hashtags)
                    </h4>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyTags}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-[10px] text-[11px] font-semibold bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/[0.1] transition-all cursor-pointer"
                  >
                    {copiedTags ? (
                      <>
                        <Check className="w-3 h-3 text-[#00d287]" />
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
                <div className="bg-black/40 p-3 rounded-[14px] border border-white/[0.06] font-mono text-[12px] text-white select-all">
                  {currentProduct.fixedTags}
                </div>
              </div>
            </>
          )}

          {activeTab === "storyboard" && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-[18px] bg-purple-500/10 border border-purple-500/20 text-purple-200">
                <h4 className="font-bold text-xs flex items-center gap-1.5 mb-1">
                  <Clapperboard className="w-4 h-4 text-purple-400" />
                  <span>TikTok 0-3 秒黄金完播分镜设计准则</span>
                </h4>
                <p className="text-[11px] opacity-80 leading-relaxed">
                  前 1.5 秒必须制造极强反差或极端测试视觉，配合大号花字直接扣押注意力，前 3 秒切勿缓慢铺垫！以下为 5 套验证可复制的爆款分镜脚本模板：
                </p>
              </div>

              {getStoryboards().map((sb, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-[20px] bg-white/[0.03] border border-white/[0.08] space-y-2.5 relative group hover:border-purple-500/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-purple-300 flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center text-[10px]">
                        {idx + 1}
                      </span>
                      <span>{sb.title}</span>
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        handleCopyScript(
                          `${sb.title}\n【画面实拍】${sb.visual}\n【口播台词】${sb.audio}\n【屏幕花字】${sb.onScreenText}\n【行动引导CTA】${sb.cta}`,
                          idx
                        )
                      }
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-[10px] text-[11px] font-semibold bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/[0.1] transition-all cursor-pointer"
                    >
                      {copiedScriptIdx === idx ? (
                        <>
                          <Check className="w-3 h-3 text-[#00d287]" />
                          <span>已复制脚本</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>一键拷走脚本</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="space-y-1.5 text-xs text-zinc-300">
                    <p>
                      <strong className="text-white">🎬 镜头分镜画面:</strong> {sb.visual}
                    </p>
                    <p>
                      <strong className="text-amber-300">🎙️ 口播首句录音:</strong> {sb.audio}
                    </p>
                    <p>
                      <strong className="text-cyan-300">🔤 屏幕中央大字:</strong> {sb.onScreenText}
                    </p>
                    <p>
                      <strong className="text-emerald-300">🎯 结尾行动转化:</strong> {sb.cta}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "competitor" && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-[18px] bg-amber-500/10 border border-amber-500/20 text-amber-200">
                <h4 className="font-bold text-xs flex items-center gap-1.5 mb-1">
                  <Swords className="w-4 h-4 text-amber-400" />
                  <span>降维打击击穿点（对比传统同类竞品）</span>
                </h4>
                <p className="text-[11px] opacity-80 leading-relaxed">
                  出海用户对高性价比与极致实机体验极度敏感。在视频与文案中强调以下对比维度，可让转化率提升 40% 以上：
                </p>
              </div>

              <div className="space-y-3">
                {getCompetitorPoints().map((cp, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-[20px] bg-white/[0.03] border border-white/[0.08] space-y-2"
                  >
                    <span className="font-bold text-sm text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <span>对比维度：{cp.dimension}</span>
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                      <div className="p-3 rounded-[14px] bg-red-500/10 border border-red-500/20">
                        <span className="text-[10px] font-bold text-red-300 uppercase block mb-1">
                          传统传统大牌痛点
                        </span>
                        <p className="text-zinc-300 text-xs">{cp.competitor}</p>
                      </div>
                      <div className="p-3 rounded-[14px] bg-emerald-500/10 border border-emerald-500/20">
                        <span className="text-[10px] font-bold text-emerald-300 uppercase block mb-1">
                          {currentProduct.model} 破局解法
                        </span>
                        <p className="text-emerald-100 text-xs">{cp.fosmet}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "comments" && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-[18px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-200">
                <h4 className="font-bold text-xs flex items-center gap-1.5 mb-1">
                  <MessageSquareQuote className="w-4 h-4 text-emerald-400" />
                  <span>评论区带货高频截流神评模板</span>
                </h4>
                <p className="text-[11px] opacity-80 leading-relaxed">
                  短视频 50% 的成交发生在评论区。通过预埋官方置顶与高赞回答，直接消除出海买家的疑虑并促成下单：
                </p>
              </div>

              <div className="space-y-3">
                {getCommentTemplates().map((ct, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-[20px] bg-white/[0.03] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <span className="text-[10.5px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono mb-1.5 inline-block">
                        {ct.tag}
                      </span>
                      <p className="text-white/90 text-xs leading-relaxed">{ct.text}</p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopyScript(ct.text, 100 + idx)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-[12px] text-xs font-semibold bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/[0.1] transition-all cursor-pointer flex-shrink-0 self-end sm:self-center"
                    >
                      {copiedScriptIdx === 100 + idx ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#00d287]" />
                          <span>已复制</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>复制话术</span>
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-white/[0.02] border-t border-white/[0.06] flex justify-end">
          <MagneticButton
            onClick={onClose}
            className="px-5 py-2 rounded-[14px] text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.1] transition-colors cursor-pointer"
          >
            完成并返回
          </MagneticButton>
        </div>
      </div>
    </div>
  );
};
