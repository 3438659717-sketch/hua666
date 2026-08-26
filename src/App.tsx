import React, { useState, useEffect, useCallback, useMemo } from "react";
import { AngleCategory, GeneratedTitle, GenerationParams, ProductId } from "./types";
import {
  generateTitles,
  getSavedFavorites,
  toggleFavoriteInStorage,
  copyToClipboard,
  exportTitlesAsTxt,
  exportTitlesAsCsv,
  exportTitlesAsJson,
} from "./services/titleGenerator";
import { Header } from "./components/Header";
import { ControlPanel } from "./components/ControlPanel";
import { TitleList } from "./components/TitleList";
import { TikTokPreviewModal } from "./components/TikTokPreviewModal";
import { FavoritesDrawer } from "./components/FavoritesDrawer";
import { ProductCheatsheetModal } from "./components/ProductCheatsheetModal";
import { ToastContainer, ToastMessage } from "./components/Toast";
import { PRODUCTS_CONFIG } from "./data/templates";
import { Sparkles, Layers, ShieldCheck, Zap } from "lucide-react";
import { InteractiveAtmosphere } from "./components/InteractiveAtmosphere";
import { TiltGlassCard, CardThemeColor } from "./components/TiltGlassCard";
import { PixelPetCompanion } from "./components/PixelPetCompanion";

export default function App() {
  const [params, setParams] = useState<GenerationParams>({
    productId: "rec10",
    category: "all_mixed",
    tone: "viral_hook",
    customKeyword: "",
    language: "ja",
    useAiApi: false,
  });

  const [titles, setTitles] = useState<GeneratedTitle[]>([]);
  const [generationSource, setGenerationSource] = useState<"algorithm" | "gemini_ai">("algorithm");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<GeneratedTitle[]>([]);

  // Modals state
  const [previewItem, setPreviewItem] = useState<GeneratedTitle | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState<boolean>(false);
  const [isCheatsheetOpen, setIsCheatsheetOpen] = useState<boolean>(false);

  // Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [lastAction, setLastAction] = useState<{
    type: "generate" | "copy" | "favorite" | "change_product";
    timestamp: number;
    data?: any;
  } | null>(null);

  const addToast = (message: string, type: "success" | "error" | "info" = "success") => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2800);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Load initial favorites from localStorage
  useEffect(() => {
    const favs = getSavedFavorites();
    setFavorites(favs);
  }, []);

  const currentProductId: ProductId = params.productId || "rec10";
  const currentProduct = PRODUCTS_CONFIG[currentProductId] || PRODUCTS_CONFIG.rec10;

  const getThemeColorName = (): CardThemeColor => {
    switch (currentProductId) {
      case "fos10":
        return "teal";
      case "g2":
        return "purple";
      case "g58":
        return "pink";
      case "e09":
        return "sky";
      case "e05":
        return "rose";
      case "e12":
        return "cyan";
      case "kt80":
        return "amber";
      case "t20":
        return "emerald";
      case "qs40":
        return "purple";
      default:
        return "blue";
    }
  };

  const getProductColor = () => {
    switch (currentProductId) {
      case "fos10":
        return "text-teal-300";
      case "g2":
        return "text-purple-300";
      case "g58":
        return "text-pink-300";
      case "e09":
        return "text-sky-300";
      case "e05":
        return "text-rose-300";
      case "e12":
        return "text-cyan-300";
      case "kt80":
        return "text-amber-300";
      case "t20":
        return "text-emerald-300";
      case "qs40":
        return "text-purple-300";
      default:
        return "text-blue-300";
    }
  };

  // Handler to generate 50 titles
  const handleGenerate = useCallback(
    async (overrideParams?: Partial<GenerationParams>) => {
      const activeParams = { ...params, ...(overrideParams || {}) };
      const targetProd = activeParams.productId || "rec10";
      const targetProdConfig = PRODUCTS_CONFIG[targetProd];
      setIsLoading(true);

      try {
        const result = await generateTitles(activeParams);
        setTitles(result.titles);
        setGenerationSource(result.source);

        if (result.error) {
          addToast(result.error, "info");
        } else {
          setLastAction({ type: "generate", timestamp: Date.now(), data: { count: result.titles.length } });
          const langLabel =
            targetProd === "kt80" || targetProd === "g58"
              ? activeParams.language === "de"
                ? "德语"
                : "西语"
              : "日语";
          addToast(
            `已为 ${targetProdConfig.name} 生成 50 组精选 ${langLabel} 文案 (${
              result.source === "gemini_ai" ? "Gemini 3.7 AI" : "高速矩阵算法"
            })`,
            "success"
          );
        }
      } catch (err: any) {
        addToast(`生成文案时出错: ${err.message}`, "error");
      } finally {
        setIsLoading(false);
      }
    },
    [params]
  );

  // Generate initial batch on first load
  useEffect(() => {
    handleGenerate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update params and auto-refresh when product, category or language changes
  const handleChangeParams = useCallback((newParams: Partial<GenerationParams>) => {
    setParams((prev) => {
      const next = { ...prev, ...newParams };
      // If product changed and customTags wasn't explicitly passed, reset customTags
      if (
        newParams.productId &&
        newParams.productId !== prev.productId &&
        newParams.customTags === undefined
      ) {
        next.customTags = undefined;
      }
      // Auto regenerate for seamless real-time feedback
      if (
        (newParams.productId && newParams.productId !== prev.productId) ||
        (newParams.category && newParams.category !== prev.category) ||
        (newParams.language && newParams.language !== prev.language)
      ) {
        handleGenerate(next);
      }
      return next;
    });
  }, [handleGenerate]);

  const handleSelectProduct = useCallback((productId: ProductId) => {
    setParams((prev) => {
      if (productId === prev.productId) return prev;
      setLastAction({ type: "change_product", timestamp: Date.now(), data: { productId } });
      const next: GenerationParams = {
        ...prev,
        productId,
        category: "all_mixed",
        language: productId === "kt80" || productId === "g58" ? "es" : "ja",
        customTags: undefined,
      };
      handleGenerate(next);
      return next;
    });
  }, [handleGenerate]);

  // Single title copy
  const handleCopySingle = useCallback(async (text: string) => {
    const success = await copyToClipboard(text);
    if (success) {
      setLastAction({ type: "copy", timestamp: Date.now(), data: { length: text.length } });
      addToast("完整文案与 5 大营销标签已成功复制到剪贴板", "success");
    } else {
      addToast("复制失败，请重试", "error");
    }
  }, [addToast]);

  // Multiple titles copy
  const handleCopyMultiple = useCallback(async (selectedList: GeneratedTitle[]) => {
    if (selectedList.length === 0) return;
    const combinedText = selectedList
      .map((t, idx) => `${idx + 1}. ${t.title}`)
      .join("\n\n");

    const success = await copyToClipboard(combinedText);
    if (success) {
      setLastAction({ type: "copy", timestamp: Date.now(), data: { count: selectedList.length } });
      addToast(`已成功复制 ${selectedList.length} 组精选文案`, "success");
    } else {
      addToast("复制失败，请重试", "error");
    }
  }, [addToast]);

  // Toggle favorite
  const handleToggleFavorite = useCallback((item: GeneratedTitle) => {
    const { isFav, allFavs } = toggleFavoriteInStorage(item);
    setFavorites(allFavs);
    if (isFav) {
      setLastAction({ type: "favorite", timestamp: Date.now(), data: { title: item.title } });
      addToast("已成功收录至精选收藏夹", "success");
    } else {
      addToast("已从收藏夹中移出", "info");
    }
  }, [addToast]);

  // Open TikTok preview modal
  const handleOpenPreview = useCallback((item: GeneratedTitle) => {
    setPreviewItem(item);
    setIsPreviewOpen(true);
  }, []);

  const handleOpenPreviewDemo = useCallback(() => {
    if (titles.length > 0) {
      setPreviewItem(titles[0]);
    } else {
      const activeTags =
        (params.customTags && params.customTags.trim()) || currentProduct.fixedTags;
      let hookText = "1時間の会議終了と同時に議事録完成！FOSMET REC10が神すぎる";
      if (currentProductId === "fos10") {
        hookText = "【14.9g極軽】薄さ10.66mmで手首が喜ぶ！FOSMET FOS10の100+文字盤DIYと女性健康管理が神すぎる";
      } else if (currentProductId === "g2") {
        hookText = "【女性の健康】生理周期も睡眠も自動記録！FOSMET G2の120種運動と高見え文字盤が神すぎる";
      } else if (currentProductId === "g58") {
        hookText = "【FOSMET G58】¡El reloj inteligente femenino con pantalla 1.27\" HD, salud de la mujer y doble correa que revoluciona tu estilo!";
      } else if (currentProductId === "e09") {
        hookText = "【SONY 800万画素】目線そのままPOV動画撮影！FOSMET E09の40g極軽量ブルーライトカットメガネが神";
      } else if (currentProductId === "e05") {
        hookText = "【4段階調光】タップで濃度が瞬時変化！FOSMET E05のAIリアルタイム同時通訳スマートメガネが神すぎる";
      } else if (currentProductId === "e12") {
        hookText = "【未来体験】カメラ内蔵で日常をハンズフリー撮影！FOSMET E12の音声AIと16mm高音質スピーカーが神すぎる";
      } else if (currentProductId === "kt80") {
        hookText = "【FOSMET KT80】¡La bestia todoterreno con batería de 800 mAh y linterna LED lateral que arrasa en TikTok!";
      } else if (currentProductId === "t20") {
        hookText = "【衝撃】スマホなしで登山ルート全記録！FOSMET T20の独立GNSSとスマート排水が最強すぎる";
      } else if (currentProductId === "qs40") {
        hookText = "【質問】手首にChatGPTついてたら何聞く？FOSMET QS40の音声AIが秒速回答で超便利";
      }

      const fullTitle = `${hookText} ${activeTags}`;
      setPreviewItem({
        id: "demo",
        productId: currentProductId,
        title: fullTitle,
        hook: hookText,
        tags: activeTags,
        angle: "全维黄金配比",
        angleCategory: "efficiency",
        targetAudience: "全年龄受众",
        charCount: fullTitle.length,
        hookCharCount: hookText.length,
        language: params.language,
        createdAt: new Date().toISOString(),
      });
    }
    setIsPreviewOpen(true);
  }, [titles, params.customTags, params.language, currentProduct.fixedTags, currentProductId]);

  const favoritesSet = useMemo(() => new Set(favorites.map((f) => f.title)), [favorites]);
  const activeTags =
    (params.customTags && params.customTags.trim()) || currentProduct.fixedTags;

  return (
    <div className="min-h-screen bg-transparent text-white/90 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-white antialiased relative overflow-x-hidden">
      {/* Interactive Raytraced Atmosphere with Particle Trails & Shockwaves */}
      <InteractiveAtmosphere theme={getThemeColorName()} />

      {/* Header */}
      <div className="relative z-10">
        <Header
          currentProductId={currentProductId}
          onSelectProduct={handleSelectProduct}
          favoritesCount={favorites.length}
          currentLanguage={params.language}
          onOpenFavorites={() => setIsFavoritesOpen(true)}
          onOpenCheatsheet={() => setIsCheatsheetOpen(true)}
          onOpenPreviewDemo={handleOpenPreviewDemo}
        />
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* Control & Engine Configuration Panel */}
        <ControlPanel
          params={params}
          onChangeParams={handleChangeParams}
          onGenerate={() => handleGenerate()}
          isLoading={isLoading}
          totalCount={titles.length}
        />

        {/* Generated Titles Gallery */}
        <TitleList
          titles={titles}
          onCopySingle={handleCopySingle}
          onCopyMultiple={handleCopyMultiple}
          onToggleFavorite={handleToggleFavorite}
          onOpenPreview={handleOpenPreview}
          favoritesSet={favoritesSet}
          onExportTxt={(titles) =>
            exportTitlesAsTxt(titles, `FOSMET_${currentProduct.model}_TikTok_Titles.txt`)
          }
          onExportCsv={(titles) =>
            exportTitlesAsCsv(titles, `FOSMET_${currentProduct.model}_TikTok_Titles.csv`)
          }
          onExportJson={(titles) =>
            exportTitlesAsJson(titles, `FOSMET_${currentProduct.model}_TikTok_Titles.json`)
          }
          generationSource={generationSource}
        />

        {/* Refined Metadata Overview Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          <TiltGlassCard themeColor={getThemeColorName()} className="p-4">
            <span className="text-[10px] text-white/40 uppercase tracking-wider block mb-1 font-semibold">
              当前推广产品
            </span>
            <div className="text-xs font-mono text-white/90 flex items-center gap-1.5">
              <strong className={getProductColor()}>{currentProduct.name}</strong>
              <span className="text-white/40">• {currentProduct.japaneseType}</span>
            </div>
          </TiltGlassCard>

          <TiltGlassCard themeColor={getThemeColorName()} className="p-4">
            <span className="text-[10px] text-white/40 uppercase tracking-wider block mb-1 font-semibold">
              单次输出规格
            </span>
            <div className={`text-xs font-mono ${getProductColor()} flex items-center gap-1.5`}>
              <Sparkles className="w-3.5 h-3.5" />
              <span>50 组独一无二高转化文案 (含前置钩子+标签)</span>
            </div>
          </TiltGlassCard>

          <TiltGlassCard themeColor={getThemeColorName()} className="p-4">
            <span className="text-[10px] text-white/40 uppercase tracking-wider block mb-1 font-semibold">
              挂载营销标签
            </span>
            <div className={`text-[11px] font-mono ${getProductColor()} truncate block`}>
              {activeTags}
            </div>
          </TiltGlassCard>
        </div>
      </main>

      {/* Refined Luxury Footer */}
      <footer className="relative z-10 border-t border-white/[0.08] acrylic-glass py-6 mt-10 text-xs text-white/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white/90 font-mono">FOSMET Matrix</span>
            <span className="text-white/20">/</span>
            <span>TikTok 跨境短视频高转化内容工坊 (10 大核心爆款矩阵全覆盖)</span>
          </div>
          <div className={`font-mono text-[11px] ${getProductColor()} select-all`}>
            {activeTags}
          </div>
        </div>
      </footer>

      {/* Modals & Drawers */}
      <TikTokPreviewModal
        item={previewItem}
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        onCopy={handleCopySingle}
      />

      <FavoritesDrawer
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={favorites}
        onRemoveFavorite={handleToggleFavorite}
        onCopySingle={handleCopySingle}
        onCopyAllFavorites={handleCopyMultiple}
        onExportTxt={(titles) =>
          exportTitlesAsTxt(titles, `FOSMET_${currentProduct.model}_Favorites.txt`)
        }
        onExportCsv={(titles) =>
          exportTitlesAsCsv(titles, `FOSMET_${currentProduct.model}_Favorites.csv`)
        }
      />

      <ProductCheatsheetModal
        productId={currentProductId}
        isOpen={isCheatsheetOpen}
        onClose={() => setIsCheatsheetOpen(false)}
        onCopyTags={handleCopySingle}
      />

      {/* Interactive Cyberpunk Pixel Animal Pet Companion */}
      <PixelPetCompanion
        currentProductId={currentProductId}
        lastAction={lastAction}
        onCheer={() => {
          addToast("🐾 赛博萌宠向你传达了爆款好运能量！", "info");
        }}
      />

      {/* Floating Toasts */}
      <ToastContainer toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}
