import React, { useState, useEffect } from "react";
import { GeneratedTitle, ProductId, StoryboardScript, TargetLanguage } from "../types";
import { generateStoryboardScript } from "../services/titleGenerator";
import { motion } from "motion/react";
import {
  X,
  Clapperboard,
  Video,
  Clock,
  Sparkles,
  Copy,
  Download,
  Music,
  Eye,
  Type,
  Mic,
  RefreshCw,
  Share2,
  Check,
} from "lucide-react";

interface StoryboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  titleItem: GeneratedTitle | null;
  productId: ProductId;
  productName: string;
  language?: TargetLanguage;
  onAddToast: (msg: string, type?: "success" | "info" | "error") => void;
}

export function StoryboardModal({
  isOpen,
  onClose,
  titleItem,
  productId,
  productName,
  language = "ja",
  onAddToast,
}: StoryboardModalProps) {
  const [script, setScript] = useState<StoryboardScript | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  const fetchScript = (forceRefresh = false) => {
    if (!titleItem) return;
    setLoading(true);
    generateStoryboardScript({
      title: titleItem.title,
      hook: titleItem.hook,
      productId,
      language: titleItem.language || language,
      titleId: titleItem.id,
    })
      .then((data) => {
        setScript(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Storyboard error:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (isOpen && titleItem) {
      fetchScript();
    }
  }, [isOpen, titleItem?.id]);

  if (!isOpen || !titleItem) return null;

  const handleCopyScript = () => {
    if (!script) return;
    let text = `【TikTok 爆款 30 秒分镜脚本 - ${productName}】\n`;
    text += `视频标题: ${titleItem.title}\n`;
    text += `BGM 风格: ${script.bgmStyle}\n`;
    text += `目标受众: ${script.targetAudience}\n\n`;

    script.scenes.forEach((scene) => {
      text += `--- 第 ${scene.sceneNumber} 幕 [${scene.timeRange}] ${scene.stageTitle} ---\n`;
      text += `【镜头画面】: ${scene.visualPrompt}\n`;
      text += `【口播台词】: ${scene.scriptSpoken}\n`;
      text += `【屏幕花字】: ${scene.textOverlay}\n`;
      text += `【BGM/音效】: ${scene.audioBgm}\n\n`;
    });

    navigator.clipboard.writeText(text);
    setCopied(true);
    onAddToast("已复制完整 4 幕 TikTok 分镜脚本到剪贴板！");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExportMarkdown = () => {
    if (!script) return;
    let md = `# TikTok 爆款分镜拍摄脚本\n\n`;
    md += `- **产品**: ${productName} (${productId})\n`;
    md += `- **标题**: ${titleItem.title}\n`;
    md += `- **BGM**: ${script.bgmStyle}\n`;
    md += `- **时长**: 30 秒黄金转化流\n\n`;
    md += `| 场次 | 时长 | 阶段 | 镜头画面提示 | 口播台词 (当地语言+中文) | 屏幕花字 | 音效卡点 |\n`;
    md += `| :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n`;

    script.scenes.forEach((s) => {
      md += `| 第${s.sceneNumber}幕 | ${s.timeRange} | ${s.stageTitle} | ${s.visualPrompt.replace(/\|/g, "/")} | ${s.scriptSpoken.replace(/\|/g, "/")} | ${s.textOverlay} | ${s.audioBgm} |\n`;
    });

    const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `TikTok_Storyboard_${productId}_${Date.now()}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    onAddToast("已导出 Markdown 格式分镜脚本");
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

      {/* Cyber Window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 16 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-gradient-to-b from-[#0e1324]/95 via-[#090d1c]/95 to-[#050711]/95 border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.2)] overflow-hidden text-slate-100"
      >
        {/* Top Fluorescent Beam */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse" />

        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-purple-500/20 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-500/35 flex items-center justify-center text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              <Clapperboard className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
                  TikTok 爆款 30 秒短视频分镜工作台
                </h2>
                <span className="px-2 py-0.5 text-[11px] font-semibold rounded-full bg-purple-500/20 text-purple-200 border border-purple-500/40 font-mono">
                  4 幕黄金留存结构
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5 truncate max-w-xl">
                基于标题：<span className="text-purple-300 font-medium">「{titleItem.title}」</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => fetchScript(true)}
              title="重新生成分镜"
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Header Metadata Bar */}
        {script && (
          <div className="px-6 py-2.5 bg-black/30 border-b border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-purple-300">
                <Music className="w-3.5 h-3.5" />
                <strong>BGM:</strong> {script.bgmStyle}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <strong>时长:</strong> 30 秒精准卡点
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyScript}
                className="px-3 py-1 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 border border-purple-500/40 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-[0_0_12px_rgba(168,85,247,0.25)]"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "已复制" : "复制完整脚本"}
              </button>
              <button
                onClick={handleExportMarkdown}
                className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/15 text-slate-200 border border-white/10 text-xs font-semibold flex items-center gap-1.5 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                导出 Markdown
              </button>
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-3 text-purple-400">
              <RefreshCw className="w-8 h-8 animate-spin" />
              <p className="text-sm text-slate-300 font-medium">
                Gemini 3.8 Flash 正在根据爆款公式推演 4 幕分镜与台词...
              </p>
              <p className="text-xs text-slate-500">黄金前3秒抓眼球 → 痛点共鸣 → 硬核功能实测 → 小黄车CTA转化</p>
            </div>
          ) : !script ? (
            <div className="py-16 text-center text-slate-400">未能生成分镜脚本，请重试</div>
          ) : (
            <div className="space-y-4">
              {script.scenes.map((scene) => {
                const stageTheme =
                  scene.stage === "hook"
                    ? "border-rose-500/35 bg-rose-950/15 text-rose-300"
                    : scene.stage === "pain"
                    ? "border-amber-500/35 bg-amber-950/15 text-amber-300"
                    : scene.stage === "feature"
                    ? "border-cyan-500/35 bg-cyan-950/15 text-cyan-300"
                    : "border-emerald-500/35 bg-emerald-950/15 text-emerald-300";

                return (
                  <div
                    key={scene.sceneNumber}
                    className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all shadow-[0_4px_24px_rgba(0,0,0,0.3)] space-y-3"
                  >
                    {/* Scene Stage Banner */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-mono font-bold text-white border border-white/20">
                          {scene.sceneNumber}
                        </span>
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${stageTheme}`}>
                          {scene.stageTitle}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                        {scene.timeRange}
                      </span>
                    </div>

                    {/* Scene Grid Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                      {/* Visual & Text Overlay */}
                      <div className="space-y-2.5 p-3.5 rounded-lg bg-black/40 border border-white/5">
                        <div>
                          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 mb-1">
                            <Eye className="w-3.5 h-3.5 text-purple-400" />
                            镜头画面构图 & 机位操作:
                          </div>
                          <p className="text-xs text-slate-200 leading-relaxed font-normal">
                            {scene.visualPrompt}
                          </p>
                        </div>

                        <div>
                          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 mb-1">
                            <Type className="w-3.5 h-3.5 text-amber-400" />
                            屏幕花字文案:
                          </div>
                          <span className="inline-block px-2.5 py-1 rounded bg-amber-500/15 text-amber-200 border border-amber-500/30 text-xs font-bold font-mono">
                            {scene.textOverlay}
                          </span>
                        </div>
                      </div>

                      {/* Dialogue & Audio BGM */}
                      <div className="space-y-2.5 p-3.5 rounded-lg bg-black/40 border border-white/5">
                        <div>
                          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 mb-1">
                            <Mic className="w-3.5 h-3.5 text-emerald-400" />
                            口播台词 (目标语言与中文注释):
                          </div>
                          <p className="text-xs text-emerald-200 font-medium leading-relaxed bg-emerald-950/20 p-2 rounded border border-emerald-500/20">
                            {scene.scriptSpoken}
                          </p>
                        </div>

                        <div>
                          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 mb-1">
                            <Music className="w-3.5 h-3.5 text-cyan-400" />
                            BGM 配乐与卡点音效:
                          </div>
                          <p className="text-[11px] text-slate-300">
                            {scene.audioBgm}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-white/5 bg-black/40 flex items-center justify-between text-xs text-slate-400">
          <span>短视频黄金法则：前3秒定完播，第20秒定下单，结尾定转化</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-semibold transition-all"
          >
            关闭工作台
          </button>
        </div>
      </motion.div>
    </div>
  );
}
