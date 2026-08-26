import React, { useState, useMemo } from "react";
import { GeneratedTitle } from "../types";
import { TitleCard } from "./TitleCard";
import {
  Copy,
  Download,
  Search,
  CheckSquare,
  Square,
  FileSpreadsheet,
  FileText,
  FileCode,
  Check,
  Filter,
  Sparkles,
  ChevronDown,
  LayoutGrid,
  ListFilter,
  ArrowDownUp,
  X,
} from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { motion, AnimatePresence } from "motion/react";

interface TitleListProps {
  titles: GeneratedTitle[];
  onCopySingle: (text: string, titleId: string) => void;
  onCopyMultiple: (titles: GeneratedTitle[]) => void;
  onToggleFavorite: (item: GeneratedTitle) => void;
  onOpenPreview: (item: GeneratedTitle) => void;
  favoritesSet: Set<string>;
  onExportTxt: (titles: GeneratedTitle[]) => void;
  onExportCsv: (titles: GeneratedTitle[]) => void;
  onExportJson: (titles: GeneratedTitle[]) => void;
  generationSource?: "algorithm" | "gemini_ai";
}

const TitleListComponent: React.FC<TitleListProps> = ({
  titles,
  onCopySingle,
  onCopyMultiple,
  onToggleFavorite,
  onOpenPreview,
  favoritesSet,
  onExportTxt,
  onExportCsv,
  onExportJson,
  generationSource = "algorithm",
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAngleFilter, setSelectedAngleFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"default" | "length_asc" | "length_desc">("default");
  const [viewMode, setViewMode] = useState<"grid" | "compact">("grid");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [copiedAll, setCopiedAll] = useState(false);
  const [copiedSelected, setCopiedSelected] = useState(false);
  const [exportMenuOpen, setExportMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(20); // 20 per page by default for optimal performance

  // Extract unique angles for filter
  const uniqueAngles = useMemo(() => {
    const set = new Set<string>();
    titles.forEach((t) => {
      if (t.angle) set.add(t.angle);
    });
    return Array.from(set);
  }, [titles]);

  // Filtered & sorted titles
  const filteredTitles = useMemo(() => {
    const list = titles.filter((t) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.angle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (t.targetAudience && t.targetAudience.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesAngle =
        selectedAngleFilter === "all" || t.angle === selectedAngleFilter;

      return matchesSearch && matchesAngle;
    });

    if (sortBy === "length_asc") {
      return [...list].sort((a, b) => a.hook.length - b.hook.length);
    }
    if (sortBy === "length_desc") {
      return [...list].sort((a, b) => b.hook.length - a.hook.length);
    }
    return list;
  }, [titles, searchQuery, selectedAngleFilter, sortBy]);

  // Reset page to 1 when filters or titles change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedAngleFilter, titles]);

  const totalPages = pageSize === 0 ? 1 : Math.max(1, Math.ceil(filteredTitles.length / pageSize));
  const safePage = Math.min(currentPage, totalPages);

  const paginatedTitles = useMemo(() => {
    if (pageSize === 0) return filteredTitles;
    const startIndex = (safePage - 1) * pageSize;
    return filteredTitles.slice(startIndex, startIndex + pageSize);
  }, [filteredTitles, safePage, pageSize]);

  // Selection handlers
  const handleToggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleSelectAll = () => {
    if (selectedIds.size === filteredTitles.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(filteredTitles.map((t) => t.id)));
    }
  };

  const handleCopyAll = () => {
    onCopyMultiple(titles);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  const handleCopySelected = () => {
    const selectedList = titles.filter((t) => selectedIds.has(t.id));
    if (selectedList.length === 0) return;
    onCopyMultiple(selectedList);
    setCopiedSelected(true);
    setTimeout(() => setCopiedSelected(false), 2000);
  };

  return (
    <div id="title-list-container" className="space-y-4">
      {/* Refined Header Toolbar with Thick Glass & Specular Bevels */}
      <div className="thick-glass glass-bevel-edge border-iridescent rounded-2xl shadow-2xl p-4 transition-all">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3.5 border-b border-white/[0.06]">
          {/* Status & Generation Metas */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="inline-flex items-center justify-center px-3 py-1 rounded-xl bento-glass-tile border border-white/20 text-white font-mono font-black text-xs shadow-inner">
              {titles.length} 组文案已就绪
            </span>
            <span className="text-xs font-medium text-white/60">
              {generationSource === "gemini_ai" ? (
                <span className="inline-flex items-center gap-1.5 text-blue-300 font-semibold bg-blue-500/15 px-2.5 py-1 rounded-xl border border-blue-500/30 shadow-[0_0_12px_rgba(59,130,246,0.25)]">
                  <Sparkles className="w-3.5 h-3.5 fill-blue-300" />
                  Gemini 3.7 AI 深度创意
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-white/90 bento-glass-tile px-2.5 py-1 rounded-xl border border-white/20">
                  ⚡ 智能矩阵算法生成
                </span>
              )}
            </span>
          </div>

          {/* Action Hub */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Copy All 50 Button */}
            <MagneticButton
              id="btn-copy-all-50"
              onClick={handleCopyAll}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-lg cursor-pointer ${
                copiedAll
                  ? "bg-emerald-600 text-white shadow-emerald-600/30"
                  : "bento-glass-tile text-white border border-white/20 hover:border-white/40"
              }`}
            >
              {copiedAll ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>已成功复制全部 50 条</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>一键复制全部 50 组</span>
                </>
              )}
            </MagneticButton>

            {/* Copy Selected Button */}
            {selectedIds.size > 0 && (
              <MagneticButton
                id="btn-copy-selected"
                onClick={handleCopySelected}
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  copiedSelected
                    ? "bg-emerald-600 text-white"
                    : "bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border border-blue-500/40"
                }`}
              >
                {copiedSelected ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>已复制所选</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>复制选中 ({selectedIds.size})</span>
                  </>
                )}
              </MagneticButton>
            )}

            {/* Export Dropdown Menu */}
            <div className="relative">
              <button
                type="button"
                id="btn-export-dropdown"
                onClick={() => setExportMenuOpen(!exportMenuOpen)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bento-glass-tile text-white/90 hover:text-white border border-white/20 shadow-md cursor-pointer transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>导出</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${exportMenuOpen ? "rotate-180" : ""}`} />
              </button>

              {exportMenuOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 rounded-2xl thick-glass border border-white/20 shadow-2xl p-1.5 z-40 space-y-1"
                  onClick={() => setExportMenuOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => onExportTxt(titles)}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <FileText className="w-4 h-4 text-blue-400" />
                    <span>导出为 TXT 纯文本</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onExportCsv(titles)}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                    <span>导出为 CSV 表格</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onExportJson(titles)}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <FileCode className="w-4 h-4 text-amber-400" />
                    <span>导出为 JSON 结构</span>
                  </button>
                </div>
              )}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center bento-glass-tile rounded-xl p-0.5 border border-white/20">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === "grid" ? "bg-white/20 text-white" : "text-white/40 hover:text-white"
                }`}
                title="网格视图"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode("compact")}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === "compact" ? "bg-white/20 text-white" : "text-white/40 hover:text-white"
                }`}
                title="精简列表视图"
              >
                <ListFilter className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="mt-3 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 w-full sm:w-auto flex-1">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-3.5 h-3.5 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="在 50 条结果中秒级搜索关键词 / 卖点..."
                className="w-full pl-8 pr-8 py-1.5 bg-[#090b12] border border-white/15 rounded-xl text-xs text-white placeholder:text-white/35 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white p-0.5 cursor-pointer"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Sort Toggle */}
            <button
              type="button"
              onClick={() => {
                if (sortBy === "default") setSortBy("length_asc");
                else if (sortBy === "length_asc") setSortBy("length_desc");
                else setSortBy("default");
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs bento-glass-tile border border-white/15 text-white/70 hover:text-white cursor-pointer transition-colors"
              title="按文案字符长度排序"
            >
              <ArrowDownUp className="w-3 h-3 text-white/50" />
              <span className="hidden md:inline">
                {sortBy === "default" ? "默认排序" : sortBy === "length_asc" ? "长度升序" : "长度降序"}
              </span>
            </button>
          </div>

          {/* Quick Category Filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full no-scrollbar w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setSelectedAngleFilter("all")}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer flex-shrink-0 ${
                selectedAngleFilter === "all"
                  ? "bg-white/20 text-white border border-white/30"
                  : "text-white/50 hover:text-white hover:bg-white/[0.05]"
              }`}
            >
              全部 ({titles.length})
            </button>
            {uniqueAngles.map((angle) => {
              const count = titles.filter((t) => t.angle === angle).length;
              return (
                <button
                  key={angle}
                  type="button"
                  onClick={() => setSelectedAngleFilter(angle)}
                  className={`px-2 py-1 rounded-lg text-[11px] font-medium transition-all cursor-pointer flex-shrink-0 ${
                    selectedAngleFilter === angle
                      ? "bg-blue-500/25 text-blue-200 border border-blue-400/50 shadow-xs"
                      : "text-white/50 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {angle} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Select All Checkbox row */}
        <div className="mt-2.5 pt-2 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-white/60">
          <button
            type="button"
            onClick={handleSelectAll}
            className="inline-flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors"
          >
            {selectedIds.size > 0 && selectedIds.size === filteredTitles.length ? (
              <CheckSquare className="w-3.5 h-3.5 text-blue-400" />
            ) : (
              <Square className="w-3.5 h-3.5" />
            )}
            <span>
              {selectedIds.size === filteredTitles.length
                ? "取消全选"
                : `全选当前页 (${filteredTitles.length} 条)`}
            </span>
          </button>

          <span>
            已匹配 <strong className="text-white">{filteredTitles.length}</strong> / 50 组文案
          </span>
        </div>
      </div>

      {/* Grid of Titles */}
      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 gap-4"
            : "flex flex-col space-y-3"
        }
      >
        <AnimatePresence mode="popLayout">
          {paginatedTitles.map((item, idx) => {
            const globalIndex = (safePage - 1) * (pageSize || 0) + idx;
            return (
              <motion.div
                key={item.id}
                layout={false}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
              >
                <TitleCard
                  item={item}
                  index={globalIndex}
                  isSelected={selectedIds.has(item.id)}
                  onToggleSelect={handleToggleSelect}
                  onCopy={onCopySingle}
                  onToggleFavorite={onToggleFavorite}
                  onOpenPreview={onOpenPreview}
                  isFavorite={favoritesSet.has(item.title)}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Pagination and View Mode Bar */}
      {filteredTitles.length > 0 && (
        <div className="thick-glass glass-bevel-edge rounded-xl p-3 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shadow-lg">
          <div className="flex items-center gap-2 text-white/70">
            <span>
              显示第 <strong className="text-white">{(safePage - 1) * (pageSize || 1) + 1}</strong> - <strong className="text-white">{Math.min(safePage * (pageSize || filteredTitles.length), filteredTitles.length)}</strong> 条
              （共 <strong className="text-white">{filteredTitles.length}</strong> 条）
            </span>
          </div>

          {/* Page Buttons */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {totalPages > 1 && (
              <>
                <button
                  type="button"
                  disabled={safePage <= 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className="px-2.5 py-1 rounded-lg border border-white/15 bg-white/[0.05] hover:bg-white/15 text-white/80 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
                >
                  上一页
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-7 h-7 rounded-lg text-xs font-mono font-bold flex items-center justify-center transition-all cursor-pointer ${
                      safePage === pageNum
                        ? "bg-blue-600 text-white shadow-md shadow-blue-900/50 border border-blue-400/50"
                        : "bg-white/[0.05] hover:bg-white/15 text-white/70 hover:text-white border border-white/10"
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}
                <button
                  type="button"
                  disabled={safePage >= totalPages}
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  className="px-2.5 py-1 rounded-lg border border-white/15 bg-white/[0.05] hover:bg-white/15 text-white/80 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
                >
                  下一页
                </button>
              </>
            )}

            {/* Page Size Switcher */}
            <div className="flex items-center gap-1 ml-2 pl-2 border-l border-white/15">
              <button
                type="button"
                onClick={() => setPageSize(20)}
                className={`px-2 py-1 rounded-md text-[11px] font-medium transition-all cursor-pointer ${
                  pageSize === 20
                    ? "bg-white/20 text-white border border-white/30"
                    : "text-white/50 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                每页 20 条
              </button>
              <button
                type="button"
                onClick={() => setPageSize(0)}
                className={`px-2 py-1 rounded-md text-[11px] font-medium transition-all cursor-pointer ${
                  pageSize === 0
                    ? "bg-white/20 text-white border border-white/30"
                    : "text-white/50 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                全部展开
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const TitleList = React.memo(TitleListComponent);
