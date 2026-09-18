import React, { useState, useMemo } from "react";
import { GeneratedTitle } from "../types";
import { X, Sparkles, Scale, Copy, Check, ArrowRight, Zap, Trophy, ShieldAlert, Flame } from "lucide-react";
import { playPetSound } from "../utils/petSound";

interface ABTestingModalProps {
  isOpen: boolean;
  onClose: () => void;
  titles: GeneratedTitle[];
  initialTitleA?: GeneratedTitle | null;
  initialTitleB?: GeneratedTitle | null;
  onCopyText: (text: string) => void;
}

export const ABTestingModal: React.FC<ABTestingModalProps> = ({
  isOpen,
  onClose,
  titles,
  initialTitleA,
  initialTitleB,
  onCopyText,
}) => {
  const [selectedIdA, setSelectedIdA] = useState<string>(() => initialTitleA?.id || titles[0]?.id || "");
  const [selectedIdB, setSelectedIdB] = useState<string>(() => initialTitleB?.id || titles[1]?.id || "");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  React.useEffect(() => {
    if (initialTitleA?.id) setSelectedIdA(initialTitleA.id);
    if (initialTitleB?.id) setSelectedIdB(initialTitleB.id);
  }, [initialTitleA, initialTitleB]);

  const titleA = useMemo(() => titles.find((t) => t.id === selectedIdA) || titles[0] || null, [titles, selectedIdA]);
  const titleB = useMemo(() => titles.find((t) => t.id === selectedIdB) || titles[1] || null, [titles, selectedIdB]);

  if (!isOpen) return null;

  // Analytical scoring calculation
  const scoreTitle = (item: GeneratedTitle | null) => {
    if (!item) return { hookScore: 80, tensionScore: 80, audienceScore: 80, total: 80 };
    const len = item.hook.length;
    // Optimal hook length for TikTok is 20-55 chars
    const lengthScore = len >= 20 && len <= 55 ? 98 : len < 20 ? 88 : 84;
    const hasNumbers = /\d+/.test(item.hook) ? 8 : 0;
    const hasQuestion = /[?？]/.test(item.hook) ? 6 : 0;
    const hasEmotionalWords = /(神|ヤバい|衝撃|圧倒的|驚愕|禁断|限定)/.test(item.hook) ? 8 : 0;

    const hookScore = Math.min(99, lengthScore + hasNumbers + hasQuestion + hasEmotionalWords - 12);
    const tensionScore = Math.min(99, 82 + (hasEmotionalWords ? 12 : 4) + (hasQuestion ? 5 : 0));
    const audienceScore = item.targetAudience ? 94 : 85;
    const total = Math.round((hookScore * 0.45) + (tensionScore * 0.35) + (audienceScore * 0.20));

    return { hookScore, tensionScore, audienceScore, total };
  };

  const scoreA = scoreTitle(titleA);
  const scoreB = scoreTitle(titleB);

  const winner = scoreA.total > scoreB.total ? "A" : scoreB.total > scoreA.total ? "B" : "TIE";

  const handleCopy = (text: string, key: string) => {
    playPetSound("copy_sparkle" as any);
    onCopyText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="sapphire-glass rounded-[28px] border border-white/20 w-full max-w-4xl max-h-[92vh] flex flex-col shadow-[0_24px_64px_rgba(0,0,0,0.85)] overflow-hidden relative">
        {/* Modal Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-[12px] bg-gradient-to-tr from-amber-500/30 to-rose-500/30 border border-white/20 flex items-center justify-center text-amber-300">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                A/B 钩子对比模拟器
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30">
                  CTR Predictor
                </span>
              </h3>
              <p className="text-xs text-zinc-400">
                双轨并联测试：对比两条文案的开篇完播率、情绪张力与出海流量阻击力
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

        {/* Comparison Board */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {/* Winner Recommendation Banner */}
          <div className="p-4 rounded-[20px] bg-gradient-to-r from-amber-500/15 via-rose-500/10 to-cyan-500/15 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 font-bold">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  算法推流优先推荐: 
                  <span className="text-amber-300 font-mono text-base font-black">
                    {winner === "TIE" ? "双版本势均力敌 (建议分组跑量)" : `方案 ${winner} 胜出`}
                  </span>
                </h4>
                <p className="text-xs text-zinc-300">
                  {winner === "A" && "方案 A 的开篇阻击词与数字对比冲突感更强，前 1.5 秒更有可能穿透冷启动流量池。"}
                  {winner === "B" && "方案 B 语言节奏精炼且包含高刺激度情绪反差，预测能够提供更高的完播率留存。"}
                  {winner === "TIE" && "两条文案在不同维度各具优势，建议作为 Spark Ads 50/50 预算进行对照竞价。"}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                const winItem = winner === "B" ? titleB : titleA;
                if (winItem) handleCopy(winItem.title, "winner_copy");
              }}
              className="flex-shrink-0 px-4 py-2 rounded-[14px] bg-white text-black font-bold text-xs flex items-center gap-1.5 shadow-lg hover:bg-zinc-200 transition-all cursor-pointer"
            >
              {copiedKey === "winner_copy" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>复制推流胜出版本</span>
            </button>
          </div>

          {/* Dual Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Plan A Column */}
            <div className="sapphire-subtle rounded-[22px] p-4 sm:p-5 border border-white/15 space-y-4 relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-cyan-500/30 text-cyan-300 font-mono font-bold text-xs flex items-center justify-center border border-cyan-400/40">
                    A
                  </span>
                  <span className="text-sm font-bold text-white">对照方案 A</span>
                </div>
                <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                  综合爆破分: {scoreA.total}
                </span>
              </div>

              {/* Selector */}
              <div>
                <label className="text-[11px] text-zinc-400 font-medium block mb-1">选择对照文案</label>
                <select
                  value={selectedIdA}
                  onChange={(e) => {
                    setSelectedIdA(e.target.value);
                    playPetSound("click");
                  }}
                  className="w-full bg-black/60 border border-white/20 rounded-[12px] px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400"
                >
                  {titles.map((t, idx) => (
                    <option key={t.id} value={t.id} className="bg-slate-900 text-white">
                      #{String(idx + 1).padStart(2, "0")} [{t.angle}] {t.hook.slice(0, 30)}...
                    </option>
                  ))}
                </select>
              </div>

              {/* Hook Preview */}
              {titleA && (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-[14px] bg-black/40 border border-white/10">
                    <span className="text-[11px] text-cyan-300 font-semibold block mb-1">🎯 核心黄金钩子 (Hook)</span>
                    <p className="text-white font-bold text-sm leading-relaxed">{titleA.hook}</p>
                    <div className="mt-2 flex items-center gap-2 text-[11px] text-zinc-400">
                      <span>字数: {titleA.hook.length} 字</span>
                      <span>•</span>
                      <span>预估朗读耗时: {(titleA.hook.length * 0.08).toFixed(1)} 秒</span>
                    </div>
                  </div>

                  {/* Metrics Bar */}
                  <div className="space-y-2 p-3 rounded-[14px] bg-white/[0.03] border border-white/10 text-xs">
                    <div className="flex justify-between">
                      <span className="text-zinc-400">3秒完播阻击力</span>
                      <span className="font-mono text-white font-bold">{scoreA.hookScore}%</span>
                    </div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-cyan-400 h-full rounded-full transition-all duration-500" style={{ width: `${scoreA.hookScore}%` }} />
                    </div>

                    <div className="flex justify-between mt-2">
                      <span className="text-zinc-400">痛点情绪张力</span>
                      <span className="font-mono text-white font-bold">{scoreA.tensionScore}%</span>
                    </div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-purple-400 h-full rounded-full transition-all duration-500" style={{ width: `${scoreA.tensionScore}%` }} />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(titleA.title, "copy_a")}
                    className="w-full py-2 rounded-[12px] bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    {copiedKey === "copy_a" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === "copy_a" ? "已复制方案 A" : "复制方案 A 完整文案"}</span>
                  </button>
                </div>
              )}
            </div>

            {/* Plan B Column */}
            <div className="sapphire-subtle rounded-[22px] p-4 sm:p-5 border border-white/15 space-y-4 relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-rose-500/30 text-rose-300 font-mono font-bold text-xs flex items-center justify-center border border-rose-400/40">
                    B
                  </span>
                  <span className="text-sm font-bold text-white">对照方案 B</span>
                </div>
                <span className="text-xs font-mono font-bold text-rose-300 bg-rose-500/10 px-2.5 py-0.5 rounded-full border border-rose-500/20">
                  综合爆破分: {scoreB.total}
                </span>
              </div>

              {/* Selector */}
              <div>
                <label className="text-[11px] text-zinc-400 font-medium block mb-1">选择对照文案</label>
                <select
                  value={selectedIdB}
                  onChange={(e) => {
                    setSelectedIdB(e.target.value);
                    playPetSound("click");
                  }}
                  className="w-full bg-black/60 border border-white/20 rounded-[12px] px-3 py-2 text-xs text-white focus:outline-none focus:border-rose-400"
                >
                  {titles.map((t, idx) => (
                    <option key={t.id} value={t.id} className="bg-slate-900 text-white">
                      #{String(idx + 1).padStart(2, "0")} [{t.angle}] {t.hook.slice(0, 30)}...
                    </option>
                  ))}
                </select>
              </div>

              {/* Hook Preview */}
              {titleB && (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-[14px] bg-black/40 border border-white/10">
                    <span className="text-[11px] text-rose-300 font-semibold block mb-1">🎯 核心黄金钩子 (Hook)</span>
                    <p className="text-white font-bold text-sm leading-relaxed">{titleB.hook}</p>
                    <div className="mt-2 flex items-center gap-2 text-[11px] text-zinc-400">
                      <span>字数: {titleB.hook.length} 字</span>
                      <span>•</span>
                      <span>预估朗读耗时: {(titleB.hook.length * 0.08).toFixed(1)} 秒</span>
                    </div>
                  </div>

                  {/* Metrics Bar */}
                  <div className="space-y-2 p-3 rounded-[14px] bg-white/[0.03] border border-white/10 text-xs">
                    <div className="flex justify-between">
                      <span className="text-zinc-400">3秒完播阻击力</span>
                      <span className="font-mono text-white font-bold">{scoreB.hookScore}%</span>
                    </div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-rose-400 h-full rounded-full transition-all duration-500" style={{ width: `${scoreB.hookScore}%` }} />
                    </div>

                    <div className="flex justify-between mt-2">
                      <span className="text-zinc-400">痛点情绪张力</span>
                      <span className="font-mono text-white font-bold">{scoreB.tensionScore}%</span>
                    </div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-amber-400 h-full rounded-full transition-all duration-500" style={{ width: `${scoreB.tensionScore}%` }} />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(titleB.title, "copy_b")}
                    className="w-full py-2 rounded-[12px] bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    {copiedKey === "copy_b" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === "copy_b" ? "已复制方案 B" : "复制方案 B 完整文案"}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-black/50 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
          <span>💡 提示：A/B 测试前 3 小时建议控制相同曝光权重，完播率高于 38% 即可加倍预算。</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-[12px] bg-white/10 hover:bg-white/20 text-white font-medium transition-all cursor-pointer"
          >
            关闭
          </button>
        </div>
      </div>
    </div>
  );
};
