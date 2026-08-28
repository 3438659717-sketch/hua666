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
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6">
        <div className="w-screen max-w-md hyper-glass border-l border-white/[0.12] shadow-2xl flex flex-col text-white/90">
          {/* Drawer Header */}
          <div className="px-5 py-4 border-b border-white/[0.08] flex items-center justify-between bg-white/[0.02]">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-[12px] bg-white/[0.08] text-white">
                <Bookmark className="w-4 h-4 fill-current" />
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
              className="p-1.5 rounded-[10px] text-white/40 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Action Toolbar */}
          {favorites.length > 0 && (
            <div className="px-5 py-3 border-b border-white/[0.06] bg-black/30 flex items-center justify-between gap-2">
              <MagneticButton
                onClick={handleCopyAll}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[12px] text-xs font-semibold transition-all cursor-pointer ${
                  copiedAll
                    ? "bg-white text-black font-bold shadow-md"
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
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-[10px] text-[11px] font-medium text-white/80 bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.08] transition-all cursor-pointer"
                  title="导出收藏夹为 TXT"
                >
                  <FileText className="w-3 h-3 text-blue-400" />
                  <span>TXT</span>
                </button>
                <button
                  type="button"
                  onClick={() => onExportCsv(favorites)}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-[10px] text-[11px] font-medium text-white/80 bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.08] transition-all cursor-pointer"
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
                <div className="w-14 h-14 rounded-[20px] bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-3 text-white/30">
                  <Bookmark className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-semibold text-white/60 mb-1">
                  暂无收藏的标题
                </h4>
                <p className="text-xs max-w-xs leading-relaxed">
                  在主列表点击每张卡片右上角的书签图标，即可将高转化优质文案收藏至此。
                </p>
              </div>
            ) : (
              favorites.map((item, idx) => (
                <div
                  key={item.id || idx}
                  className="p-3.5 rounded-[18px] bg-white/[0.035] border border-white/[0.08] hover:border-white/[0.16] transition-all space-y-2 group"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-[6px] bg-white/[0.06] text-white/70 border border-white/[0.08]">
                      #{String(idx + 1).padStart(2, "0")} · {item.angle}
                    </span>

                    <button
                      type="button"
                      onClick={() => onRemoveFavorite(item)}
                      className="p-1 rounded-[6px] text-white/30 hover:text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer"
                      title="移出收藏夹"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <p className="text-xs font-normal text-white/90 leading-relaxed select-all">
                    {item.hook}
                  </p>

                  <div className="flex items-center gap-1 font-mono text-[10px] text-white/50 truncate">
                    <Hash className="w-2.5 h-2.5 opacity-50" />
                    <span className="truncate">{item.tags}</span>
                  </div>

                  <div className="pt-2 border-t border-white/[0.04] flex items-center justify-end">
                    <button
                      type="button"
                      onClick={() => handleCopyOne(item)}
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-[10px] text-[11px] font-medium transition-all cursor-pointer ${
                        copiedId === item.id
                          ? "bg-white text-black font-bold"
                          : "bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/[0.08]"
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
                          <span>复制文案</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer */}
          <div className="p-4 border-t border-white/[0.06] bg-white/[0.02] flex items-center justify-between text-xs text-white/40">
            <span>
              已收藏 <strong className="text-white font-mono">{favorites.length}</strong> 组标题
            </span>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white font-medium cursor-pointer"
            >
              关闭
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
