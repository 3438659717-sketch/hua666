import React, { useState } from "react";
import { GeneratedTitle } from "../types";
import {
  X,
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  Music,
  Check,
  Copy,
  Feather,
  Languages,
  Volume2,
  VolumeX,
  Sparkles,
  Layers,
  Send,
  ThumbsUp,
  Flame,
} from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { getChineseTranslation } from "../utils/translator";
import { playPetSound } from "../utils/petSound";

interface TikTokPreviewModalProps {
  item: GeneratedTitle | null;
  isOpen: boolean;
  onClose: () => void;
  onCopy: (text: string) => void;
}

type VideoBackgroundMode = "cyberpunk" | "unboxing" | "action" | "water";

export const TikTokPreviewModal: React.FC<TikTokPreviewModalProps> = ({
  item,
  isOpen,
  onClose,
  onCopy,
}) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(24680);
  const [saved, setSaved] = useState(false);
  const [saveCount, setSaveCount] = useState(4920);
  const [copied, setCopied] = useState(false);
  const [videoMode, setVideoMode] = useState<VideoBackgroundMode>("cyberpunk");
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [heartBursts, setHeartBursts] = useState<{ id: number; x: number; y: number }[]>([]);

  if (!isOpen || !item) return null;

  const pid = item.productId;
  const isFos10 = pid === "fos10" || item.title.includes("FOS10");
  const isG2 = !isFos10 && (pid === "g2" || item.title.includes("G2"));
  const isG58 = !isFos10 && !isG2 && (pid === "g58" || item.title.includes("G58"));
  const isE09 = !isFos10 && !isG2 && !isG58 && (pid === "e09" || item.title.includes("E09"));
  const isE05 = !isFos10 && !isG2 && !isG58 && !isE09 && (pid === "e05" || item.title.includes("E05"));
  const isE12 = !isFos10 && !isG2 && !isG58 && !isE09 && !isE05 && (pid === "e12" || item.title.includes("E12"));
  const isKt80 = !isFos10 && !isG2 && !isG58 && !isE09 && !isE05 && !isE12 && (pid === "kt80" || item.title.includes("KT80"));
  const isT20 = !isFos10 && !isG2 && !isG58 && !isE09 && !isE05 && !isE12 && !isKt80 && (pid === "t20" || item.title.includes("T20"));
  const isQs40 = !isFos10 && !isG2 && !isG58 && !isE09 && !isE05 && !isE12 && !isKt80 && !isT20 && (pid === "qs40" || item.title.includes("QS40"));

  const handleCopy = () => {
    onCopy(item.title);
    setCopied(true);
    playPetSound("copy_sparkle");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLikeToggle = () => {
    if (liked) {
      setLiked(false);
      setLikeCount((c) => c - 1);
    } else {
      setLiked(true);
      setLikeCount((c) => c + 1);
      playPetSound("sparkle");
    }
  };

  const handleSaveToggle = () => {
    if (saved) {
      setSaved(false);
      setSaveCount((c) => c - 1);
    } else {
      setSaved(true);
      setSaveCount((c) => c + 1);
      playPetSound("coin");
    }
  };

  const handleScreenDoubleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newId = Date.now() + Math.random();
    setHeartBursts((prev) => [...prev, { id: newId, x, y }]);
    if (!liked) {
      setLiked(true);
      setLikeCount((c) => c + 1);
    }
    playPetSound("sparkle");
    setTimeout(() => {
      setHeartBursts((prev) => prev.filter((h) => h.id !== newId));
    }, 1000);
  };

  const handleSpeak = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(item.hook);
    const langCode =
      item.language === "es"
        ? "es-ES"
        : item.language === "de"
        ? "de-DE"
        : "ja-JP";
    utterance.lang = langCode;
    utterance.rate = 1.05;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
    playPetSound("click");
  };

  const getProductModelTitle = () => {
    if (isFos10) return "FOSMET FOS10 14.9g超轻便携女性智能手表";
    if (isG2) return "FOSMET G2 多功能女性健康智能手表";
    if (isG58) return "FOSMET G58 女性时尚健康智能腕表";
    if (isE09) return "FOSMET E09 SONY高清POV摄像防蓝光眼镜";
    if (isE05) return "FOSMET E05 4档电致变色AI同传智能眼镜";
    if (isE12) return "FOSMET E12 摄像AI开放式蓝牙耳机";
    if (isKt80) return "FOSMET KT80 800mAh强光潜水表";
    if (isT20) return "FOSMET T20 户外GPS探险表";
    if (isQs40) return "FOSMET QS40 AI智能腕表";
    return "FOSMET REC10 AI名片录音卡";
  };

  const getVideoBackgroundStyle = () => {
    switch (videoMode) {
      case "unboxing":
        return "bg-gradient-to-br from-[#121824] via-[#0b101c] to-[#1a2233]";
      case "action":
        return "bg-gradient-to-br from-[#1c1917] via-[#0c0a09] to-[#292524]";
      case "water":
        return "bg-gradient-to-br from-[#082f49] via-[#021d2f] to-[#0c4a6e]";
      default: // cyberpunk
        return "bg-gradient-to-br from-[#0c0a1f] via-[#05050f] to-[#1a0f2e]";
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-sm sm:max-w-[420px] hyper-glass rounded-[32px] shadow-2xl overflow-hidden flex flex-col max-h-[94vh]">
        {/* Top Control Bar */}
        <div className="px-5 py-3 bg-white/[0.04] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00d287] shadow-[0_0_8px_#00d287] animate-ping" />
            <span className="text-xs font-bold text-white tracking-tight">
              TikTok 爆款实机演练工坊
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Background scene toggle */}
            <div className="flex items-center bg-white/[0.06] rounded-[10px] p-0.5 border border-white/10 text-[10px]">
              <button
                type="button"
                onClick={() => setVideoMode("cyberpunk")}
                className={`px-1.5 py-0.5 rounded-[7px] cursor-pointer transition-colors ${
                  videoMode === "cyberpunk" ? "bg-purple-600 text-white font-bold" : "text-white/40 hover:text-white"
                }`}
                title="赛博暗调"
              >
                赛博
              </button>
              <button
                type="button"
                onClick={() => setVideoMode("unboxing")}
                className={`px-1.5 py-0.5 rounded-[7px] cursor-pointer transition-colors ${
                  videoMode === "unboxing" ? "bg-cyan-600 text-white font-bold" : "text-white/40 hover:text-white"
                }`}
                title="极简开箱"
              >
                开箱
              </button>
              <button
                type="button"
                onClick={() => setVideoMode("action")}
                className={`px-1.5 py-0.5 rounded-[7px] cursor-pointer transition-colors ${
                  videoMode === "action" ? "bg-amber-600 text-white font-bold" : "text-white/40 hover:text-white"
                }`}
                title="硬核户外"
              >
                户外
              </button>
              <button
                type="button"
                onClick={() => setVideoMode("water")}
                className={`px-1.5 py-0.5 rounded-[7px] cursor-pointer transition-colors ${
                  videoMode === "water" ? "bg-blue-600 text-white font-bold" : "text-white/40 hover:text-white"
                }`}
                title="防水冲浪"
              >
                深水
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-white/40 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Smartphone Screen Simulator */}
        <div
          onDoubleClick={handleScreenDoubleClick}
          className={`relative flex-1 ${getVideoBackgroundStyle()} flex flex-col justify-between p-4 min-h-[500px] select-none overflow-hidden rounded-[24px] m-2 transition-colors duration-500 cursor-pointer`}
        >
          {/* Heart bursts on double tap */}
          {heartBursts.map((h) => (
            <div
              key={h.id}
              style={{ left: h.x - 20, top: h.y - 20 }}
              className="absolute pointer-events-none z-40 animate-out fade-out zoom-out duration-700 text-rose-500"
            >
              <Heart className="w-10 h-10 fill-rose-500 stroke-white filter drop-shadow-[0_0_12px_rgba(244,63,94,0.8)]" />
            </div>
          ))}

          {/* Top Dynamic Island Notch Simulation */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-4 rounded-full bg-black/80 border border-white/15 flex items-center justify-between px-3 z-30 shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
            <span className="text-[8.5px] font-mono text-white/70 font-semibold">9:41 · 5G</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#00d287]" />
          </div>

          {/* Simulated Device Center Presentation Graphic */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-25">
            <div className="w-48 h-48 rounded-[36px] bg-white/[0.03] border border-white/[0.08] p-4 flex flex-col justify-between items-center text-center backdrop-blur-xs">
              <span className="font-bold text-xs text-white tracking-widest font-mono">FOSMET HYPEROS</span>
              <div className="w-14 h-14 rounded-[18px] bg-white/[0.06] flex items-center justify-center text-white shadow-inner">
                <Feather className="w-7 h-7 text-cyan-300" />
              </div>
              <span className="text-[10px] text-white/60 font-mono">VIRAL VIDEO SIMULATOR</span>
            </div>
          </div>

          {/* Right Action Icons (TikTok UI) */}
          <div className="absolute right-3.5 bottom-16 flex flex-col items-center gap-3.5 z-20">
            {/* Creator Avatar with follow plus */}
            <div className="relative mb-1">
              <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-xs font-black text-white shadow-md">
                F
              </div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-rose-500 text-white text-[11px] font-bold flex items-center justify-center border-2 border-black">
                +
              </div>
            </div>

            {/* Like */}
            <button
              type="button"
              onClick={handleLikeToggle}
              className="flex flex-col items-center gap-0.5 text-white/90 hover:scale-110 transition-transform cursor-pointer"
            >
              <div
                className={`p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 ${
                  liked ? "text-rose-500 bg-rose-500/20 border-rose-500/40" : ""
                }`}
              >
                <Heart className={`w-5 h-5 ${liked ? "fill-rose-500 stroke-rose-500" : ""}`} />
              </div>
              <span className="text-[10px] font-mono font-bold">{likeCount.toLocaleString()}</span>
            </button>

            {/* Comment Drawer Toggle */}
            <button
              type="button"
              onClick={() => {
                setIsCommentsOpen(!isCommentsOpen);
                playPetSound("click");
              }}
              className="flex flex-col items-center gap-0.5 text-white/90 hover:scale-110 transition-transform cursor-pointer"
            >
              <div
                className={`p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 ${
                  isCommentsOpen ? "text-cyan-400 bg-cyan-500/20 border-cyan-400/40" : ""
                }`}
              >
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-bold">1,824</span>
            </button>

            {/* Save */}
            <button
              type="button"
              onClick={handleSaveToggle}
              className="flex flex-col items-center gap-0.5 text-white/90 hover:scale-110 transition-transform cursor-pointer"
            >
              <div
                className={`p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 ${
                  saved ? "text-amber-400 bg-amber-500/20 border-amber-400/40" : ""
                }`}
              >
                <Bookmark className={`w-5 h-5 ${saved ? "fill-amber-400 stroke-amber-400" : ""}`} />
              </div>
              <span className="text-[10px] font-mono font-bold">{saveCount.toLocaleString()}</span>
            </button>

            {/* Share */}
            <button
              type="button"
              onClick={() => {
                onCopy(item.title);
                playPetSound("sparkle");
              }}
              className="flex flex-col items-center gap-0.5 text-white/90 hover:scale-110 transition-transform cursor-pointer"
            >
              <div className="p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                <Share2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-bold">892</span>
            </button>

            {/* Spinning Music Vinyl Disc */}
            <div className="relative mt-1">
              <div className="w-9 h-9 rounded-full bg-black/80 border-2 border-zinc-700 flex items-center justify-center animate-spin [animation-duration:4s]">
                <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-cyan-400 to-rose-500" />
              </div>
              <span className="absolute -top-2 right-0 text-[10px] text-cyan-300 animate-bounce">♪</span>
            </div>
          </div>

          {/* Bottom Title, Creator info, Tags & Audio */}
          <div className="relative z-10 text-white space-y-2 max-w-[80%] pb-1 mt-auto">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-white">
                {isKt80
                  ? item.language === "de"
                    ? "@fosmet.germany"
                    : "@fosmet.spain"
                  : "@fosmet.official"}
              </span>
              <span className="text-[9.5px] bg-[#00d287]/20 text-[#00d287] border border-[#00d287]/30 px-1.5 py-0.2 rounded-full font-bold">
                ✓ 品牌官方
              </span>
            </div>

            {/* Title Hook & Tags */}
            <div className="space-y-1.5">
              <p className="text-[13.5px] sm:text-[14.5px] font-medium leading-snug text-white drop-shadow-md">
                {item.hook}
              </p>

              {/* Chinese Translation In Preview */}
              <div className="bg-black/70 backdrop-blur-md border border-white/15 px-2.5 py-1.5 rounded-[10px] flex items-center justify-between gap-1.5">
                <div className="flex items-start gap-1.5 flex-1">
                  <span className="text-[9px] font-bold px-1 py-0.2 rounded bg-amber-500/20 text-amber-300 flex-shrink-0 mt-0.5 flex items-center gap-0.5">
                    <Languages className="w-2.5 h-2.5" />
                    <span>译</span>
                  </span>
                  <p className="text-[11px] text-zinc-300 leading-snug font-normal">
                    {item.translationZh || getChineseTranslation(item)}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleSpeak}
                  className={`p-1 rounded-[6px] transition-colors ${
                    isSpeaking ? "bg-rose-500/30 text-rose-300 animate-pulse" : "text-cyan-300 hover:bg-white/10"
                  }`}
                  title="试听母语发音"
                >
                  {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                </button>
              </div>

              <p className="text-[11px] font-medium text-white/80 leading-snug break-all font-mono">
                {item.tags}
              </p>
            </div>

            {/* Music track */}
            <div className="flex items-center gap-1.5 text-[10px] text-white/70 pt-0.5">
              <Music className="w-3 h-3 animate-spin text-white/70" />
              <span className="truncate">
                原声音频 - {getProductModelTitle()}
              </span>
            </div>
          </div>

          {/* Interactive Comments Drawer */}
          {isCommentsOpen && (
            <div className="absolute inset-x-0 bottom-0 top-24 bg-black/90 backdrop-blur-xl rounded-t-[24px] border-t border-white/20 p-4 z-30 flex flex-col justify-between animate-in slide-in-from-bottom duration-250">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5 text-cyan-400" />
                  <span>1,824 条评论（模拟出海买家反馈）</span>
                </span>
                <button
                  onClick={() => setIsCommentsOpen(false)}
                  className="p-1 rounded-full text-white/40 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Comment Items */}
              <div className="flex-1 overflow-y-auto py-2.5 space-y-3 no-scrollbar text-xs">
                {/* Pinned Official Comment */}
                <div className="p-2.5 rounded-[12px] bg-cyan-500/10 border border-cyan-500/20">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-bold text-cyan-300 flex items-center gap-1">
                      <span>📌 FOSMET 官方 (置顶)</span>
                    </span>
                    <span className="text-[10px] text-white/40">1.2k 赞</span>
                  </div>
                  <p className="text-[11px] text-white/90">
                    首批现货直发日本/西班牙，点击主页橱窗直达享 30 天无理由退换！
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-rose-500/30 text-rose-300 flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                    田
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-white/80 text-[11px]">田中 🇯🇵</span>
                      <span className="text-[10px] text-white/40">458 赞</span>
                    </div>
                    <p className="text-white/70 text-[11px]">
                      手首の負担がマジでゼロ！画面の綺麗さもApple Watchと遜色ない。
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-amber-500/30 text-amber-300 flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                    C
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-white/80 text-[11px]">Carlos M. 🇪🇸</span>
                      <span className="text-[10px] text-white/40">289 赞</span>
                    </div>
                    <p className="text-white/70 text-[11px]">
                      La batería de 800 mAh dura semanas de verdad, increíble linterna.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-purple-500/30 text-purple-300 flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                    E
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-white/80 text-[11px]">Elena 🇩🇪</span>
                      <span className="text-[10px] text-white/40">132 赞</span>
                    </div>
                    <p className="text-white/70 text-[11px]">
                      Perfekt für das Büro, die Audio-Qualität der Brille ist erstaunlich klar!
                    </p>
                  </div>
                </div>
              </div>

              {/* Comment Input Simulation */}
              <div className="pt-2 border-t border-white/10 flex items-center gap-2">
                <input
                  type="text"
                  placeholder="善意发言，为爆款注入神评..."
                  className="flex-1 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/10 text-xs text-white placeholder:text-white/30 outline-hidden"
                />
                <button
                  type="button"
                  onClick={() => playPetSound("coin")}
                  className="p-1.5 rounded-full bg-cyan-500 text-black font-bold"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="p-4 bg-white/[0.02] border-t border-white/[0.06] flex items-center justify-between gap-3">
          <div className="text-xs text-white/50">
            总字数: <strong className="text-white font-mono">{item.charCount}</strong>
          </div>

          <MagneticButton
            id="btn-copy-preview-modal"
            onClick={handleCopy}
            className={`inline-flex items-center gap-1.5 px-5 py-2 rounded-[14px] font-semibold text-xs transition-all cursor-pointer ${
              copied
                ? "bg-white text-black font-bold shadow-md"
                : "bg-white/[0.1] hover:bg-white/[0.16] text-white border border-white/[0.12]"
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-black" />
                <span>已复制全文</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-white" />
                <span>复制完整文案</span>
              </>
            )}
          </MagneticButton>
        </div>
      </div>
    </div>
  );
};
