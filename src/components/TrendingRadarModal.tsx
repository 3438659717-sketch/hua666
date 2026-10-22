import React, { useState, useEffect } from "react";
import { CompetitorRadarData, ProductId, TargetLanguage, TrendingHotword, HashtagMetric } from "../types";
import { fetchCompetitorRadar } from "../services/titleGenerator";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Flame,
  TrendingUp,
  Hash,
  Swords,
  Copy,
  Check,
  Sparkles,
  ArrowRight,
  RefreshCw,
  Zap,
  Target,
  BarChart3,
} from "lucide-react";

interface TrendingRadarModalProps {
  isOpen: boolean;
  onClose: () => void;
  productId: ProductId;
  language?: TargetLanguage;
  productName: string;
  onApplyKeyword: (keyword: string) => void;
  onAddToast: (msg: string, type?: "success" | "info" | "error") => void;
}

export function TrendingRadarModal({
  isOpen,
  onClose,
  productId,
  language = "ja",
  productName,
  onApplyKeyword,
  onAddToast,
}: TrendingRadarModalProps) {
  const [radarData, setRadarData] = useState<CompetitorRadarData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<"hotwords" | "hashtags" | "competitors">("hotwords");
  const [copiedTag, setCopiedTag] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    let isMounted = true;
    setLoading(true);

    fetchCompetitorRadar(productId, language)
      .then((data) => {
        if (isMounted) {
          setRadarData(data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [isOpen, productId, language]);

  if (!isOpen) return null;

  const copyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTag(text);
    onAddToast(`已复制${label}: ${text}`);
    setTimeout(() => setCopiedTag(null), 2000);
  };

  const copyAllTags = () => {
    if (!radarData?.hashtags) return;
    const all = radarData.hashtags.map((h) => h.tag).join(" ");
    copyText(all, "全部标签");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#030712]/80 backdrop-blur-xl"
      />

      {/* Cyber Glassmorphism Modal Window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 16 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-gradient-to-b from-[#0e1322]/95 via-[#0a0e1c]/95 to-[#060812]/95 border border-cyan-500/25 shadow-[0_0_50px_rgba(6,182,212,0.18)] overflow-hidden text-slate-100"
      >
        {/* Fluorescent Accent Beam */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />

        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-cyan-500/15 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              <Flame className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
                  竞品爆款热词与社媒标签深度洞察
                </h2>
                <span className="px-2 py-0.5 text-[11px] font-semibold rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  实时雷达
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                当前产品：<span className="text-cyan-300 font-medium">{productName}</span> · 目标市场：
                <span className="text-slate-300 uppercase font-mono">[{language}]</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 pt-3 border-b border-white/5 flex gap-2 bg-black/20">
          <button
            onClick={() => setActiveTab("hotwords")}
            className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition-all flex items-center gap-2 border-b-2 ${
              activeTab === "hotwords"
                ? "border-cyan-400 text-cyan-300 bg-cyan-500/10"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            高热突发词库 ({radarData?.hotwords.length || 0})
          </button>
          <button
            onClick={() => setActiveTab("hashtags")}
            className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition-all flex items-center gap-2 border-b-2 ${
              activeTab === "hashtags"
                ? "border-emerald-400 text-emerald-300 bg-emerald-500/10"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <Hash className="w-3.5 h-3.5" />
            TikTok 标签热度榜 ({radarData?.hashtags.length || 0})
          </button>
          <button
            onClick={() => setActiveTab("competitors")}
            className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition-all flex items-center gap-2 border-b-2 ${
              activeTab === "competitors"
                ? "border-purple-400 text-purple-300 bg-purple-500/10"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <Swords className="w-3.5 h-3.5" />
            竞品爆款角度反打 ({radarData?.topCompetitorAngles.length || 0})
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-16 gap-3 text-cyan-400">
              <RefreshCw className="w-7 h-7 animate-spin" />
              <p className="text-xs text-slate-400">正在同步 TikTok 跨境社媒热度遥测数据...</p>
            </div>
          ) : !radarData ? (
            <div className="py-12 text-center text-sm text-slate-400">暂无热度遥测数据</div>
          ) : (
            <>
              {/* TAB 1: Hotwords */}
              {activeTab === "hotwords" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                    <span>近 48 小时 TikTok 视频互动率爆发词</span>
                    <span className="text-[11px] text-cyan-400/80">点击「注入关键词」即刻加入主生成引擎</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {radarData.hotwords.map((item, idx) => (
                      <div
                        key={idx}
                        className="group relative p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-cyan-500/15 hover:border-cyan-500/40 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-bold text-white tracking-wide flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                                {item.word}
                              </span>
                              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/25">
                                {item.growthRate}
                              </span>
                            </div>
                            <div className="flex items-center gap-1 text-[11px] font-mono text-amber-300">
                              <BarChart3 className="w-3 h-3" />
                              {item.heatScore}分
                            </div>
                          </div>

                          {/* Heat Bar */}
                          <div className="w-full h-1 rounded-full bg-slate-800 overflow-hidden mb-2.5">
                            <div
                              className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-full"
                              style={{ width: `${item.heatScore}%` }}
                            />
                          </div>

                          <p className="text-xs text-slate-300/90 leading-relaxed mb-1.5 line-clamp-2">
                            <span className="text-slate-500 font-semibold mr-1">爆款范例:</span>
                            「{item.sampleHook}」
                          </p>
                          <p className="text-[11px] text-slate-400 line-clamp-1">
                            <span className="text-cyan-400/80">策略建议:</span> {item.suggestedPrompt}
                          </p>
                        </div>

                        <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between">
                          <button
                            onClick={() => copyText(item.sampleHook, "范例文案")}
                            className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                          >
                            <Copy className="w-3 h-3" />
                            复制范例
                          </button>
                          <button
                            onClick={() => {
                              onApplyKeyword(item.word);
                              onClose();
                              onAddToast(`已将热词「${item.word}」注入为主生成关键词`);
                            }}
                            className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 border border-cyan-500/40 hover:shadow-[0_0_12px_rgba(6,182,212,0.4)] flex items-center gap-1 transition-all"
                          >
                            <Sparkles className="w-3 h-3 text-cyan-300" />
                            注入为生成关键词
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 2: Hashtags */}
              {activeTab === "hashtags" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>TikTok 官方流量池与长尾流量标签矩阵</span>
                    <button
                      onClick={copyAllTags}
                      className="px-3 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5 font-medium transition-all"
                    >
                      <Copy className="w-3 h-3" />
                      一键复制全部推荐标签
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                    {radarData.hashtags.map((tag, idx) => (
                      <div
                        key={idx}
                        onClick={() => copyText(tag.tag, "标签")}
                        className="group cursor-pointer p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-emerald-500/20 hover:border-emerald-400/50 transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-xs font-mono font-bold text-emerald-300 group-hover:text-emerald-200">
                              {tag.tag}
                            </span>
                            {tag.isCore && (
                              <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                                核心
                              </span>
                            )}
                          </div>
                          <div className="flex items-center justify-between text-[11px] text-slate-400">
                            <span>播放量: <strong className="text-white font-mono">{tag.postsCount}</strong></span>
                            <span className="text-emerald-400 font-mono">{tag.growth}</span>
                          </div>
                        </div>

                        <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400">
                          <span>相关度 {tag.relevance}%</span>
                          <span className="text-emerald-400 flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                            {copiedTag === tag.tag ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                            点击复制
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: Competitor Benchmark & Counter-Hooks */}
              {activeTab === "competitors" && (
                <div className="space-y-3">
                  <div className="text-xs text-slate-400 px-1">
                    针对同类头部竞品痛点定制的「借力打力」反制高点击钩子
                  </div>

                  <div className="space-y-3">
                    {radarData.topCompetitorAngles.map((comp, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-white/[0.03] border border-purple-500/25 shadow-[0_4px_20px_rgba(0,0,0,0.3)] space-y-3"
                      >
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc]" />
                            <span className="text-sm font-bold text-white">对标标的: {comp.competitor}</span>
                            <span className="text-[11px] px-2 py-0.5 rounded bg-purple-500/15 text-purple-300 border border-purple-500/30">
                              行业均值: {comp.viewBenchmark}
                            </span>
                          </div>
                          <span className="text-xs text-slate-400">套路: {comp.hookPattern}</span>
                        </div>

                        {/* Our Counter Hook Box */}
                        <div className="p-3 rounded-lg bg-purple-950/30 border border-purple-500/30 flex items-start justify-between gap-3">
                          <div>
                            <span className="text-[10px] uppercase font-bold tracking-wider text-purple-300 block mb-1">
                              ⚡ FOSMET 降维截流文案:
                            </span>
                            <p className="text-xs font-medium text-slate-100 leading-relaxed">
                              「{comp.ourCounterHook}」
                            </p>
                          </div>
                          <div className="flex flex-col gap-1.5 shrink-0">
                            <button
                              onClick={() => copyText(comp.ourCounterHook, "反制钩子")}
                              className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 border border-white/10 flex items-center gap-1 transition-all"
                            >
                              <Copy className="w-3 h-3" />
                              复制
                            </button>
                            <button
                              onClick={() => {
                                onApplyKeyword(comp.competitor);
                                onClose();
                                onAddToast(`已将竞品反制词「${comp.competitor}」注入生成引擎`);
                              }}
                              className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 border border-purple-500/40 flex items-center gap-1 transition-all"
                            >
                              <Sparkles className="w-3 h-3 text-purple-300" />
                              对标生成
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-white/5 bg-black/30 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>数据源: TikTok 跨境算法遥测 · 自动智能对齐</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-semibold transition-all"
          >
            完成并返回
          </button>
        </div>
      </motion.div>
    </div>
  );
}
