import React, { useState } from "react";
import { GeneratedTitle } from "../types";
import { X, Bookmark, Copy, Check, Trash2, Download, ExternalLink, Hash, FileSpreadsheet, FileText } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

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
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md acrylic-glass border-l border-white/[0.12] shadow-2xl flex flex-col text-white/90">
          {/* Drawer Header */}
          <div className="px-5 py-4 border-b border-white/[0.08] flex items-center justify-between bg-[#090a10]/80">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-300 border border-amber-500/20 shadow-[0_0_10px_rgba(245,158,11,0.15)]">
                <Bookmark className="w-4 h-4 fill-amber-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white tracking-tight">
                  精选收藏夹 ({favorites.length} 组)
                </h3>
                <p className="text-[11px] text-white/40">
                  随时调取用于短视频发布排期与投放
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Action Toolbar */}
          {favorites.length > 0 && (
            <div className="px-5 py-3 border-b border-white/[0.06] bg-[#0d0e16]/80 flex items-center justify-between gap-2">
              <MagneticButton
                onClick={handleCopyAll}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  copiedAll
                    ? "bg-emerald-600 text-white shadow-emerald-600/30"
                    : "bg-white text-black hover:bg-zinc-100 shadow-white/10"
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
                  onClick={() => onExportCsv(favorites)}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-white/70 hover:text-white hover:bg-white/[0.08] rounded-lg border border-white/[0.08] transition-all cursor-pointer"
                  title="导出为 CSV 表格"
                >
                  <FileSpreadsheet className="w-3 h-3 text-emerald-400" />
                  <span>CSV</span>
                </button>
                <button
                  type="button"
                  onClick={() => onExportTxt(favorites)}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-white/70 hover:text-white hover:bg-white/[0.08] rounded-lg border border-white/[0.08] transition-all cursor-pointer"
                  title="导出为 TXT 纯文本"
                >
                  <FileText className="w-3 h-3 text-blue-400" />
                  <span>TXT</span>
                </button>
              </div>
            </div>
          )}


          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {favorites.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-white/40 space-y-3">
                <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-white/30">
                  <Bookmark className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/80">
                    暂无收藏文案
                  </p>
                  <p className="text-xs text-white/40 mt-1">
                    点击标题卡片右上角的书签图标即可收录于此
                  </p>
                </div>
              </div>
            ) : (
              favorites.map((item, idx) => (
                <div
                  key={item.id ? `fav-${item.id}` : `fav-${idx}-${item.title}`}
                  className="bg-[#14151e] rounded-xl border border-white/[0.06] p-3.5 space-y-2.5 hover:border-white/[0.12] transition-all"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-xs text-white/30 font-bold">
                        #{String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-white/[0.04] text-white/60 border border-white/[0.06]">
                        {item.angle}
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => handleCopyOne(item)}
                        className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                          copiedId === item.id
                            ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                            : "bg-white/[0.03] text-white/50 hover:text-white border-white/[0.06] hover:bg-white/[0.08]"
                        }`}
                        title="复制文案"
                      >
                        {copiedId === item.id ? (
                          <Check className="w-3.5 h-3.5" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => onRemoveFavorite(item)}
                        className="p-1.5 rounded-lg bg-white/[0.03] text-white/40 hover:text-rose-400 border border-white/[0.06] hover:border-rose-500/30 hover:bg-rose-500/10 transition-all cursor-pointer"
                        title="移除收藏"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-white/90 leading-relaxed font-medium">
                    {item.hook}
                  </p>

                  <div className="font-mono text-[10px] text-white/40 truncate bg-[#0c0d12] p-2 rounded-lg border border-white/[0.04]">
                    {item.tags}
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
