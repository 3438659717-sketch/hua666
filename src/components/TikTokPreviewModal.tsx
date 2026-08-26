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
  Watch,
  Mic,
  Compass,
  Flashlight,
  Sparkles,
  Headphones,
  Glasses,
  Camera,
  Feather,
} from "lucide-react";
import { MagneticButton } from "./MagneticButton";

interface TikTokPreviewModalProps {
  item: GeneratedTitle | null;
  isOpen: boolean;
  onClose: () => void;
  onCopy: (text: string) => void;
}

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
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLikeToggle = () => {
    if (liked) {
      setLiked(false);
      setLikeCount((c) => c - 1);
    } else {
      setLiked(true);
      setLikeCount((c) => c + 1);
    }
  };

  const handleSaveToggle = () => {
    if (saved) {
      setSaved(false);
      setSaveCount((c) => c - 1);
    } else {
      setSaved(true);
      setSaveCount((c) => c + 1);
    }
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

  const getThemeTextClass = () => {
    if (isFos10) return "text-teal-300";
    if (isG2) return "text-purple-300";
    if (isG58) return "text-pink-300";
    if (isE09) return "text-sky-300";
    if (isE05) return "text-rose-300";
    if (isE12) return "text-cyan-300";
    if (isKt80) return "text-amber-300";
    if (isT20) return "text-emerald-300";
    if (isQs40) return "text-purple-300";
    return "text-blue-300";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-sm sm:max-w-[420px] acrylic-glass border-iridescent rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Control Bar */}
        <div className="px-5 py-3.5 bg-[#090a10]/80 border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
            <span className="text-xs font-bold text-white tracking-tight">
              TikTok 实机发布动态模拟器
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-white/40 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Smartphone Screen Simulator */}
        <div className="relative flex-1 bg-gradient-to-b from-[#090a0e] via-[#101117] to-[#090a0e] flex flex-col justify-between p-4 min-h-[500px] select-none overflow-hidden">
          {/* Top Dynamic Island Notch Simulation */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-5 rounded-full bg-black/90 border border-white/15 flex items-center justify-between px-3 z-30 shadow-md">
            <span className="w-2 h-2 rounded-full bg-zinc-800" />
            <span className="text-[9px] font-mono text-white/50">9:41</span>
            <div className="w-2 h-2 rounded-full bg-blue-500/80 animate-pulse" />
          </div>

          {/* Simulated Device Center Presentation Hardware Frame */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-45">
            {isFos10 ? (
              <div className="w-52 h-52 rounded-full bg-gradient-to-br from-[#0e1f1c] via-[#122824] to-[#081412] border border-teal-500/30 shadow-2xl p-4 flex flex-col justify-between items-center text-center">
                <div className="text-[10px] font-mono flex items-center gap-1">
                  <span className="font-bold text-white tracking-wider">FOSMET</span>
                  <span className="text-teal-400 bg-teal-950/60 px-1.5 py-0.5 rounded border border-teal-500/30 font-bold">FOS10</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-teal-500/10 border border-teal-400/30 flex items-center justify-center text-teal-300 mb-1">
                    <Feather className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] text-teal-300 font-mono font-bold">14.9g 極軽量 ✕ 10.66mm 極薄</span>
                  <span className="text-[9px] text-white/50">100+文字盤DIY・女性の健康・睡眠＆呼吸</span>
                </div>
                <div className="text-[9px] text-white/40 font-mono flex items-center gap-1">
                  <span>ポータブル</span>
                  <span>•</span>
                  <span>推し活写真DIY</span>
                </div>
              </div>
            ) : isG2 ? (
              <div className="w-52 h-52 rounded-full bg-gradient-to-br from-[#1e1428] via-[#241732] to-[#110a18] border border-purple-500/30 shadow-2xl p-4 flex flex-col justify-between items-center text-center">
                <div className="text-[10px] font-mono flex items-center gap-1">
                  <span className="font-bold text-white tracking-wider">FOSMET</span>
                  <span className="text-purple-400 bg-purple-950/60 px-1.5 py-0.5 rounded border border-purple-500/30 font-bold">G2</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-400/30 flex items-center justify-center text-purple-300 mb-1">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] text-purple-300 font-mono font-bold">女性健康 ✕ 生理周期 ✕ FitCloudPro</span>
                  <span className="text-[9px] text-white/50">120+運動・BT5.3通話・LINE通知・IP68</span>
                </div>
                <div className="text-[9px] text-white/40 font-mono flex items-center gap-1">
                  <span>文字盤着せ替え</span>
                  <span>•</span>
                  <span>高見えコーデ</span>
                </div>
              </div>
            ) : isE12 ? (
              <div className="w-52 h-44 rounded-2xl bg-gradient-to-br from-[#101920] via-[#132028] to-[#0a1217] border border-cyan-500/30 shadow-2xl p-3.5 flex flex-col justify-between items-center text-center">
                <div className="text-[10px] font-mono flex items-center gap-1">
                  <span className="font-bold text-white tracking-wider">FOSMET</span>
                  <span className="text-cyan-400 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-500/30 font-bold">E12</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-300 mb-1">
                    <Headphones className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] text-cyan-300 font-mono font-bold">カメラ搭載 ✕ 音声AIスマート機能</span>
                  <span className="text-[9px] text-white/50">16mm大口径スピーカー・POV動画撮影・多言語翻訳</span>
                </div>
                <div className="text-[9px] text-white/40 font-mono flex items-center gap-1">
                  <span>オープンイヤー</span>
                  <span>•</span>
                  <span>日常Vlog</span>
                </div>
              </div>
            ) : isKt80 ? (
              <div className="w-52 h-52 rounded-full bg-gradient-to-br from-[#201810] via-[#241c14] to-[#120e0a] border border-amber-500/30 shadow-2xl p-4 flex flex-col justify-between items-center text-center">
                <div className="text-[10px] font-mono flex items-center gap-1">
                  <span className="font-bold text-white tracking-wider">FOSMET</span>
                  <span className="text-amber-400 bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-500/30 font-bold">KT80</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-300 mb-1">
                    <Flashlight className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] text-amber-300 font-mono font-bold">800mAh 超長航続 ✕ LED側辺強光</span>
                  <span className="text-[9px] text-white/50">5ATM 潜水級防水・1.46" 金属銀機身・SOS</span>
                </div>
                <div className="text-[9px] text-white/40 font-mono flex items-center gap-1">
                  <span>Bluetooth通話</span>
                  <span>•</span>
                  <span>100+運動モード</span>
                </div>
              </div>
            ) : (
              <div className="w-52 h-36 rounded-2xl bg-gradient-to-br from-[#161724] via-[#12131c] to-[#0d0e14] border border-blue-500/30 shadow-2xl p-3.5 flex flex-col justify-between text-white/60">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="font-bold text-white tracking-wider">FOSMET</span>
                  <span className="text-blue-400 bg-blue-950/60 px-1.5 py-0.5 rounded border border-blue-500/30 font-bold">REC10</span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="px-3 py-1 bg-black/60 rounded-full border border-emerald-500/40 text-emerald-400 text-[10px] font-mono flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    AI REC • ChatGPT×Gemini
                  </div>
                </div>
                <div className="flex justify-between items-center text-[9px] text-white/40 font-mono">
                  <span>MagSafe 磁吸 35h</span>
                  <span>31 行业模板</span>
                </div>
              </div>
            )}
          </div>

          {/* Top TikTok Tabs: 关注 / 推荐 */}
          <div className="relative z-10 flex items-center justify-center gap-5 text-xs font-bold pt-1">
            <span className="text-white/40 cursor-pointer">关注</span>
            <span className="text-white border-b-2 border-white pb-0.5 cursor-pointer">推荐</span>
          </div>

          {/* Right Floating Engagement Buttons */}
          <div className="relative z-10 self-end flex flex-col items-center gap-4 text-white pb-2 mr-1">
            {/* Avatar */}
            <div className="relative group cursor-pointer">
              <div className={`w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-600 via-blue-600 to-indigo-500 flex items-center justify-center font-bold text-xs ring-2 ring-white shadow-lg`}>
                FOS
              </div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] flex items-center justify-center font-bold shadow-sm">
                +
              </div>
            </div>

            {/* Like Button with Bursting Animation */}
            <button
              type="button"
              onClick={handleLikeToggle}
              className="flex flex-col items-center gap-0.5 cursor-pointer active:scale-125 transition-transform"
            >
              <div className={`p-2 rounded-full ${liked ? "text-rose-500" : "text-white"}`}>
                <Heart className={`w-7 h-7 ${liked ? "fill-rose-500 animate-bounce" : ""}`} />
              </div>
              <span className="text-[10px] font-semibold text-white/90 font-mono">
                {(likeCount / 1000).toFixed(1)}K
              </span>
            </button>

            {/* Comment */}
            <div className="flex flex-col items-center gap-0.5 cursor-pointer">
              <div className="p-2 rounded-full text-white">
                <MessageCircle className="w-7 h-7" />
              </div>
              <span className="text-[10px] font-semibold text-white/90 font-mono">618</span>
            </div>

            {/* Bookmark */}
            <button
              type="button"
              onClick={handleSaveToggle}
              className="flex flex-col items-center gap-0.5 cursor-pointer active:scale-125 transition-transform"
            >
              <div className={`p-2 rounded-full ${saved ? "text-amber-400" : "text-white"}`}>
                <Bookmark className={`w-7 h-7 ${saved ? "fill-amber-400" : ""}`} />
              </div>
              <span className="text-[10px] font-semibold text-white/90 font-mono">
                {(saveCount / 1000).toFixed(1)}K
              </span>
            </button>

            {/* Share */}
            <div className="flex flex-col items-center gap-0.5 cursor-pointer">
              <div className="p-2 rounded-full text-white">
                <Share2 className="w-7 h-7" />
              </div>
              <span className="text-[10px] font-semibold text-white/90">分享</span>
            </div>

            {/* Spinning Vinyl Music Disc */}
            <div className="relative w-8 h-8 rounded-full bg-zinc-900 border-2 border-zinc-700 flex items-center justify-center animate-spin mt-1 shadow-lg shadow-black">
              <div className="w-3 h-3 rounded-full bg-rose-500 ring-1 ring-white/50" />
            </div>
          </div>

          {/* Bottom Title, Creator info, Tags & Audio */}
          <div className="relative z-10 text-white space-y-2 max-w-[85%] pb-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-white">
                {isKt80
                  ? (item.language === "de" ? "@fosmet.germany.official" : "@fosmet.spain.official")
                  : "@fosmet.japan.official"}
              </span>
              <span className="text-[10px] bg-white/[0.1] px-1.5 py-0.5 rounded text-white/80 border border-white/[0.15]">
                官方认证
              </span>
            </div>

            {/* Title Hook & Tags */}
            <div className="space-y-1">
              <p className="text-[13.5px] sm:text-[14.5px] font-medium leading-relaxed drop-shadow-md text-white">
                {item.hook}
              </p>
              <p className={`text-[11px] font-bold ${getThemeTextClass()} leading-snug drop-shadow-md break-all font-mono`}>
                {item.tags}
              </p>
            </div>

            {/* Music track */}
            <div className="flex items-center gap-1.5 text-[10px] text-white/70 pt-1">
              <Music className={`w-3 h-3 animate-spin ${getThemeTextClass()}`} />
              <span className="truncate">
                原声音频 - {getProductModelTitle()}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="p-4 bg-[#090a10]/80 border-t border-white/[0.08] flex items-center justify-between gap-3">
          <div className="text-xs text-white/50">
            总长度: <strong className="text-white">{item.charCount}</strong> 字符
          </div>

          <MagneticButton
            id="btn-copy-preview-modal"
            onClick={handleCopy}
            className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-bold text-xs transition-all shadow-lg cursor-pointer ${
              copied
                ? "bg-emerald-600 text-white"
                : "bg-white hover:bg-zinc-100 text-black shadow-white/10"
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-white" />
                <span>已复制全文</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-black" />
                <span>复制完整文案</span>
              </>
            )}
          </MagneticButton>
        </div>
      </div>
    </div>
  );
};
