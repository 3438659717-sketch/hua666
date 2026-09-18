import React, { useState } from "react";
import { GeneratedTitle, ProductConfig } from "../types";
import { Copy, Check, X, Smartphone, Sparkles, Share2, Youtube, Instagram, ShoppingBag, Eye } from "lucide-react";
import { playPetSound } from "../utils/petSound";

interface MultiPlatformExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  titleItem: GeneratedTitle | null;
  product: ProductConfig;
  onCopyText: (text: string) => void;
}

type PlatformTab = "tiktok" | "instagram" | "youtube" | "amazon";

export const MultiPlatformExportModal: React.FC<MultiPlatformExportModalProps> = ({
  isOpen,
  onClose,
  titleItem,
  product,
  onCopyText,
}) => {
  const [activeTab, setActiveTab] = useState<PlatformTab>("tiktok");
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  if (!isOpen || !titleItem) return null;

  const hook = titleItem.hook;
  const fullTitle = titleItem.title;
  const translationZh = titleItem.translationZh || "";
  const modelName = product.name;
  const brand = product.brand || "FOSMET";

  // 1. TikTok Formatted Package
  const tiktokPackage = {
    screenHook: `🔥 ${hook}`,
    caption: `${fullTitle}\n\n👉 详细评测与开箱请看主页橱窗！你最看重哪项黑科技？评论区聊聊👇`,
    pinnedComment: `💬 【互动置顶】你们觉得 ${modelName} 哪个功能最香？1:超长续航 2:极致降噪 3:百搭颜值 (扣1或2在评论区抽粉丝送表带🎁)`,
    hashtags: `#${brand} #${modelName.replace(/\s+/g, "")} #Smartwatch #TechTok #TikTokMadeMeBuyIt #Gadgets2026 #DailyVlog #AmazonFinds #出海爆款`,
    fullScript: `【TikTok 爆款发布排版】
━━━━━━━━━━━━━━━━━━
【画面开篇大字字幕 (0-2s)】:
${hook}

【口播第一句黄金钩子】:
「千万别盲目买！如果早点知道 ${modelName} 这个隐藏功能，直接省下一半预算！」

【视频正文 Caption】:
${fullTitle}

【置顶评论引导互动】:
💬 你们觉得 ${modelName} 哪个功能最实用？1:超长续航 2:神级音质 3:防水耐磨 (评论区扣数字互动)

【2026出海算法标签池】:
#${brand} #${modelName.replace(/\s+/g, "")} #TechTok #Smartwatch #TikTokMadeMeBuyIt #出海爆款
━━━━━━━━━━━━━━━━━━`,
  };

  // 2. Instagram Reels Formatted Package
  const igPackage = {
    caption: `⚡️ ${hook}

✨ Highlights of ${brand} ${modelName}:
• ${product.highlights[0] || "Cutting-edge sensory tech & extreme battery"}
• ${product.highlights[1] || "Ultra-sleek aviation chassis for all-day comfort"}
• ${product.highlights[2] || "Smart real-time telemetry & active companion"}

👇 Drop a comment below if you want the link or check bio!
.
.
.
#${brand} #${modelName.replace(/\s+/g, "")} #TechStyle #SmartwatchStyle #MinimalTech #EDCGear #GadgetLovers #TechInspo #WearableTech #FuturisticStyle #Innovation #ProductivityHacks #TechCommunity #InstaTech #AmazonDeals`,
  };

  // 3. YouTube Shorts Package
  const ytPackage = {
    title: `[DON'T BUY BEFORE WATCHING] ${hook} 🤯 #shorts`,
    description: `Is the ${brand} ${modelName} really worth the hype? Real test demo!
⏱️ Timestamps:
0:00 The Shocking Truth
0:15 Unboxing & First Look
0:35 Core Feature Test
0:50 Honest Verdict

🔔 Subscribe for weekly cutting-edge gadget reviews!
Check pinned comment for official store link.`,
    pinnedComment: `📌 Official ${brand} ${modelName} Link & Special Creator Discount pinned in bio. Which feature impressed you the most?`,
  };

  // 4. Amazon Video & Listing Bullet Package
  const amazonPackage = {
    headline: `【Must-Have Upgrade】${hook}`,
    bullets: `• 【ENGINEERED FOR PERFORMANCE】: Features ${product.specs[0]?.label || "Specs"}: ${product.specs[0]?.value || "Flagship"}.
• 【DESIGNED FOR DAILY COMFORT】: Premium ergonomic design engineered for intensive daily use and outdoor workouts.
• 【EFFORTLESS CONNECTIVITY】: Seamless synchronization with iOS & Android smartphones for notifications and analytics.
• 【AUTHENTIC BRAND BACKING】: Official ${brand} customer support and 12-month worry-free warranty.`,
  };

  const handleCopy = (text: string, sectionKey: string) => {
    playPetSound("copy_sparkle" as any);
    onCopyText(text);
    setCopiedSection(sectionKey);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
      <div className="sapphire-glass rounded-[28px] border border-white/20 w-full max-w-2xl max-h-[90vh] flex flex-col shadow-[0_24px_64px_rgba(0,0,0,0.8)] overflow-hidden relative">
        {/* Top Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-[12px] bg-gradient-to-tr from-cyan-500/30 to-purple-500/30 border border-white/20 flex items-center justify-center text-cyan-300">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                跨平台矩阵发布中心
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                  2026 Matrix v2.0
                </span>
              </h3>
              <p className="text-xs text-zinc-400">
                一键格式化为符合各平台出海算法规范的高转化排版文案
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Platform Selector Tabs */}
        <div className="flex items-center gap-1.5 p-3 bg-black/40 border-b border-white/10 overflow-x-auto">
          <button
            type="button"
            onClick={() => {
              playPetSound("click");
              setActiveTab("tiktok");
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-[14px] text-xs font-bold transition-all cursor-pointer ${
              activeTab === "tiktok"
                ? "bg-white text-black shadow-lg shadow-white/10"
                : "text-zinc-400 hover:text-white hover:bg-white/[0.06]"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5 text-rose-500" />
            <span>TikTok 爆款视频</span>
          </button>

          <button
            type="button"
            onClick={() => {
              playPetSound("click");
              setActiveTab("instagram");
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-[14px] text-xs font-bold transition-all cursor-pointer ${
              activeTab === "instagram"
                ? "bg-white text-black shadow-lg shadow-white/10"
                : "text-zinc-400 hover:text-white hover:bg-white/[0.06]"
            }`}
          >
            <Instagram className="w-3.5 h-3.5 text-pink-500" />
            <span>Instagram Reels</span>
          </button>

          <button
            type="button"
            onClick={() => {
              playPetSound("click");
              setActiveTab("youtube");
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-[14px] text-xs font-bold transition-all cursor-pointer ${
              activeTab === "youtube"
                ? "bg-white text-black shadow-lg shadow-white/10"
                : "text-zinc-400 hover:text-white hover:bg-white/[0.06]"
            }`}
          >
            <Youtube className="w-3.5 h-3.5 text-red-500" />
            <span>YouTube Shorts</span>
          </button>

          <button
            type="button"
            onClick={() => {
              playPetSound("click");
              setActiveTab("amazon");
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-[14px] text-xs font-bold transition-all cursor-pointer ${
              activeTab === "amazon"
                ? "bg-white text-black shadow-lg shadow-white/10"
                : "text-zinc-400 hover:text-white hover:bg-white/[0.06]"
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5 text-amber-500" />
            <span>Amazon 视频与详情</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 text-sm">
          {activeTab === "tiktok" && (
            <div className="space-y-4 animate-fade-in">
              {/* Full One-Click Kit */}
              <div className="p-4 rounded-[18px] bg-gradient-to-r from-rose-500/10 via-purple-500/10 to-cyan-500/10 border border-white/15 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">一键复制 TikTok 完整出海发布包</h4>
                  <p className="text-xs text-zinc-300">包含开篇字幕大字、口播钩子台词、文案与高权重置顶神评</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(tiktokPackage.fullScript, "tiktok_full")}
                  className="px-4 py-2 rounded-[14px] bg-white text-black font-bold text-xs flex items-center gap-1.5 shadow-lg hover:bg-zinc-200 transition-all cursor-pointer"
                >
                  {copiedSection === "tiktok_full" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSection === "tiktok_full" ? "已复制全套" : "复制完整套件"}</span>
                </button>
              </div>

              {/* Sub-blocks */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-[16px] bg-white/[0.04] border border-white/10">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-semibold text-rose-300">📱 画面第1秒字幕钩子 (Screen Hook)</span>
                    <button
                      type="button"
                      onClick={() => handleCopy(tiktokPackage.screenHook, "tiktok_hook")}
                      className="text-xs text-white/70 hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      {copiedSection === "tiktok_hook" ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>复制</span>
                    </button>
                  </div>
                  <p className="text-white font-bold font-sans text-sm bg-black/40 p-2.5 rounded-[10px] border border-white/5">
                    {tiktokPackage.screenHook}
                  </p>
                </div>

                <div className="p-3.5 rounded-[16px] bg-white/[0.04] border border-white/10">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-semibold text-cyan-300">📝 视频 Caption 正文</span>
                    <button
                      type="button"
                      onClick={() => handleCopy(tiktokPackage.caption, "tiktok_caption")}
                      className="text-xs text-white/70 hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      {copiedSection === "tiktok_caption" ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>复制</span>
                    </button>
                  </div>
                  <pre className="text-zinc-200 whitespace-pre-wrap font-sans text-xs bg-black/40 p-2.5 rounded-[10px] border border-white/5 leading-relaxed">
                    {tiktokPackage.caption}
                  </pre>
                </div>

                <div className="p-3.5 rounded-[16px] bg-white/[0.04] border border-white/10">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-semibold text-amber-300">💬 置顶引导互动神评 (Pinned Comment)</span>
                    <button
                      type="button"
                      onClick={() => handleCopy(tiktokPackage.pinnedComment, "tiktok_comment")}
                      className="text-xs text-white/70 hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      {copiedSection === "tiktok_comment" ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>复制</span>
                    </button>
                  </div>
                  <p className="text-zinc-200 font-sans text-xs bg-black/40 p-2.5 rounded-[10px] border border-white/5">
                    {tiktokPackage.pinnedComment}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "instagram" && (
            <div className="space-y-4 animate-fade-in">
              <div className="p-4 rounded-[18px] bg-pink-500/10 border border-pink-500/20 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">Instagram Reels 视觉美学排版</h4>
                  <p className="text-xs text-zinc-300">精选 Emoji 点缀、卖点要点列表与 20+ 精准垂直算法标签池</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(igPackage.caption, "ig_full")}
                  className="px-4 py-2 rounded-[14px] bg-white text-black font-bold text-xs flex items-center gap-1.5 shadow-lg hover:bg-zinc-200 transition-all cursor-pointer"
                >
                  {copiedSection === "ig_full" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSection === "ig_full" ? "已复制" : "一键复制 IG 文案"}</span>
                </button>
              </div>

              <div className="p-4 rounded-[16px] bg-white/[0.04] border border-white/10">
                <pre className="text-zinc-200 whitespace-pre-wrap font-sans text-xs bg-black/40 p-3.5 rounded-[12px] border border-white/5 leading-relaxed">
                  {igPackage.caption}
                </pre>
              </div>
            </div>
          )}

          {activeTab === "youtube" && (
            <div className="space-y-4 animate-fade-in">
              <div className="p-4 rounded-[18px] bg-red-500/10 border border-red-500/20 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">YouTube Shorts 高点击标题与时间轴</h4>
                  <p className="text-xs text-zinc-300">具备强争议悬念的大括号标题，含时间轴标记与社群置顶互动问题</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(`${ytPackage.title}\n\n${ytPackage.description}\n\n${ytPackage.pinnedComment}`, "yt_full")}
                  className="px-4 py-2 rounded-[14px] bg-white text-black font-bold text-xs flex items-center gap-1.5 shadow-lg hover:bg-zinc-200 transition-all cursor-pointer"
                >
                  {copiedSection === "yt_full" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSection === "yt_full" ? "已复制" : "复制 Shorts 套件"}</span>
                </button>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-[16px] bg-white/[0.04] border border-white/10">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-semibold text-red-300">▶️ Shorts 视频标题 (CTR 优化)</span>
                    <button
                      type="button"
                      onClick={() => handleCopy(ytPackage.title, "yt_title")}
                      className="text-xs text-white/70 hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      {copiedSection === "yt_title" ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>复制</span>
                    </button>
                  </div>
                  <p className="text-white font-bold font-mono text-sm bg-black/40 p-2.5 rounded-[10px] border border-white/5">
                    {ytPackage.title}
                  </p>
                </div>

                <div className="p-3.5 rounded-[16px] bg-white/[0.04] border border-white/10">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-semibold text-zinc-300">📋 Description 描述 (含分段提示)</span>
                    <button
                      type="button"
                      onClick={() => handleCopy(ytPackage.description, "yt_desc")}
                      className="text-xs text-white/70 hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      {copiedSection === "yt_desc" ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>复制</span>
                    </button>
                  </div>
                  <pre className="text-zinc-200 whitespace-pre-wrap font-sans text-xs bg-black/40 p-2.5 rounded-[10px] border border-white/5 leading-relaxed">
                    {ytPackage.description}
                  </pre>
                </div>
              </div>
            </div>
          )}

          {activeTab === "amazon" && (
            <div className="space-y-4 animate-fade-in">
              <div className="p-4 rounded-[18px] bg-amber-500/10 border border-amber-500/20 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">Amazon Listing & 电商短视频</h4>
                  <p className="text-xs text-zinc-300">符合亚马逊 A9 算法规范的合规五点要点 (Bullet Points) 与转化话术</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(`${amazonPackage.headline}\n\n${amazonPackage.bullets}`, "amz_full")}
                  className="px-4 py-2 rounded-[14px] bg-white text-black font-bold text-xs flex items-center gap-1.5 shadow-lg hover:bg-zinc-200 transition-all cursor-pointer"
                >
                  {copiedSection === "amz_full" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSection === "amz_full" ? "已复制" : "复制五点描述"}</span>
                </button>
              </div>

              <div className="p-4 rounded-[16px] bg-white/[0.04] border border-white/10 space-y-2">
                <p className="font-bold text-amber-300 text-sm">{amazonPackage.headline}</p>
                <pre className="text-zinc-200 whitespace-pre-wrap font-sans text-xs bg-black/40 p-3 rounded-[10px] border border-white/5 leading-relaxed">
                  {amazonPackage.bullets}
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-black/50 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
          <span>当前针对产品: <strong className="text-white">{brand} {modelName}</strong></span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-[12px] bg-white/10 hover:bg-white/20 text-white font-medium transition-all cursor-pointer"
          >
            完成
          </button>
        </div>
      </div>
    </div>
  );
};
