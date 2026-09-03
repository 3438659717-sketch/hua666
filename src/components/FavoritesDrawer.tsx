import React, { useState } from "react";
import { GeneratedTitle } from "../types";
import { X, Bookmark, Copy, Check, Trash2, Download, ExternalLink, Hash, FileSpreadsheet, FileText, Languages } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { getChineseTranslation } from "../utils/translator";

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: GeneratedTitle[];
  onRemoveFavorite: (item: GeneratedTitle) => void;
  onCopySingle: (text: string) => void;
  onCopyAllFavorites: (items: GeneratedTitle[]) => void;
  onExportTxt: (items: GeneratedTitle[]) => void;
  onExportCsv: (items: GeneratedTitle[]) => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  favorites,
  onRemoveFavorite,
  onCopySingle,
  onCopyAllFavorites,
  onExportTxt,
  onExportCsv,
}) => {
  const [copiedAll, setCopiedAll] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopyAll = () => {
    onCopyAllFavorites(favorites);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  const handleCopyOne = (item: GeneratedTitle) => {
    onCopySingle(item.title);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6">
        <div className="w-screen max-w-md sapphire-glass border-l border-white/[0.16] shadow-[0_20px_80px_rgba(0,0,0,0.8)] flex flex-col text-white/90 relative">
          {/* Top Rim Specular Glare */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-300/40 via-white/80 to-transparent pointer-events-none z-10" />

          {/* Drawer Header */}
          <div className="px-5 py-4 border-b border-white/[0.08] flex items-center justify-between bg-white/[0.03]">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-[14px] bg-white/[0.08] text-white chromatic-dispersion-edge">
                <Bookmark className="w-4 h-4 fill-current" />
              </div>
              <div>
                <h3 className="text-sm font-black text-white tracking-tight">
                  精选收藏夹 ({favorites.length} 组)
                </h3>
                <p className="text-[11px] text-white/50 font-medium">
                  随时调取用于短视频发布排期与投放
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-[12px] text-white/40 hover:text-white hover:bg-white/[0.1] transition-colors cursor-pointer physic-spring-tap"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Action Toolbar */}
          {favorites.length > 0 && (
            <div className="px-5 py-3 border-b border-white/[0.08] bg-black/40 flex items-center justify-between gap-2">
              <MagneticButton
                onClick={handleCopyAll}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[14px] text-xs font-bold transition-all cursor-pointer physic-spring-tap ${
                  copiedAll
                    ? "bg-white text-black font-black shadow-md"
                    : "bg-white text-black hover:bg-white/90 shadow-sm"
                }`}
              >
                {copiedAll ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>全部收藏已复制</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>复制全部收藏</span>
                  </>
                )}
              </MagneticButton>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => onExportTxt(favorites)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-[12px] text-[11px] font-semibold text-white/80 bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.09] transition-all cursor-pointer physic-spring-tap"
                  title="导出收藏夹为 TXT"
                >
                  <FileText className="w-3 h-3 text-blue-400" />
                  <span>TXT</span>
                </button>
                <button
                  type="button"
                  onClick={() => onExportCsv(favorites)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-[12px] text-[11px] font-semibold text-white/80 bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.09] transition-all cursor-pointer physic-spring-tap"
                  title="导出收藏夹为 CSV 表格"
                >
                  <FileSpreadsheet className="w-3 h-3 text-emerald-400" />
                  <span>CSV</span>
                </button>
              </div>
            </div>
          )}

          {/* Drawer Body List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
            {favorites.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-white/40">
                <div className="w-14 h-14 rounded-[22px] bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-3 text-white/30 chromatic-dispersion-edge">
                  <Bookmark className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-white/70 mb-1">
                  暂无收藏的标题
                </h4>
                <p className="text-xs max-w-xs leading-relaxed text-white/50">
                  在主列表点击每张卡片右上角的书签图标，即可将高转化优质文案收藏至此。
                </p>
              </div>
            ) : (
              favorites.map((item, idx) => (
                <div
                  key={item.id || idx}
                  className="p-4 rounded-[20px] bg-white/[0.04] border border-white/[0.09] hover:border-white/[0.2] transition-all space-y-2.5 group chromatic-dispersion-edge relative"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-[8px] bg-white/[0.08] text-white/80 border border-white/[0.1] font-bold">
                      #{String(idx + 1).padStart(2, "0")} · {item.angle}
                    </span>

                    <button
                      type="button"
                      onClick={() => onRemoveFavorite(item)}
                      className="p-1.5 rounded-[8px] text-white/30 hover:text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer physic-spring-tap"
                      title="移出收藏夹"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <p className="text-xs font-normal text-white/95 leading-relaxed select-all">
                    {item.title}
                  </p>

                  <div className="bg-black/40 border border-white/10 rounded-[8px] p-2 flex items-start gap-1.5">
                    <span className="text-[9px] font-bold px-1 py-0.2 rounded bg-amber-500/20 text-amber-300 flex-shrink-0 mt-0.5 flex items-center gap-0.5">
                      <Languages className="w-2.5 h-2.5" />
                      <span>译</span>
                    </span>
                    <p className="text-[11px] text-zinc-300 leading-snug font-normal">
                      {item.translationZh || getChineseTranslation(item)}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-[11px]">
                    <span className="text-white/40 truncate text-[10.5px]">
                      {item.targetAudience}
                    </span>

                    <button
                      type="button"
                      onClick={() => handleCopyOne(item)}
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-[10px] text-[11px] font-semibold transition-all cursor-pointer physic-spring-tap ${
                        copiedId === item.id
                          ? "bg-white text-black font-bold shadow-xs"
                          : "bg-white/[0.06] hover:bg-white/[0.14] text-white/80 hover:text-white border border-white/[0.08]"
                      }`}
                    >
                      {copiedId === item.id ? (
                        <>
                          <Check className="w-3 h-3 text-black" />
                          <span>已复制</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>复制单条</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
