import { AngleCategory, GeneratedTitle, GenerationParams, ProductId } from "../types";
import { generateAlgorithmicTitles, PRODUCTS_CONFIG } from "../data/templates";

const FAVORITES_STORAGE_KEY = "fosmet_product_favorite_titles";

export async function generateTitles(params: GenerationParams): Promise<{
  titles: GeneratedTitle[];
  source: "algorithm" | "gemini_ai";
  error?: string;
}> {
  const prodId: ProductId = params.productId || "rec10";
  const productConfig = PRODUCTS_CONFIG[prodId];
  const lang = params.language || (prodId === "kt80" || prodId === "g58" ? "es" : "ja");
  const activeTags = (params.customTags && params.customTags.trim())
    ? params.customTags.trim()
    : (prodId === "kt80" && lang === "de"
        ? "#FOSMET #KT80 #Smartwatch #Outdoor Smartwatch #Werkzeug"
        : prodId === "g58" && lang === "de"
        ? "#FOSMET #G58 #Smartwatch #Outfit #Frauengesundheit"
        : productConfig.fixedTags);

  if (params.useAiApi) {
    try {
      const response = await fetch("/api/generate-titles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: prodId,
          count: 50,
          category: params.category,
          tone: params.tone,
          customKeyword: params.customKeyword || "",
          customTags: activeTags,
          language: lang,
        }),
      });

      if (!response.ok) {
        throw new Error(`AI API returned status ${response.status}`);
      }

      const data = await response.json();
      if (data.success && Array.isArray(data.titles) && data.titles.length > 0) {
        // Map and ensure fixed tags and formats
        const mappedTitles: GeneratedTitle[] = data.titles.map(
          (t: any, idx: number) => {
            const hook = t.hook || t.title.replace(/#.*$/, "").trim();
            const fullTitle = `${hook} ${activeTags}`;
            return {
              id: t.id || `ai-${prodId}-${lang}-${Date.now()}-${idx + 1}`,
              productId: prodId,
              title: fullTitle,
              hook,
              tags: activeTags,
              angle: t.angle || (lang === "de" ? "Viraler Hook" : lang === "es" ? "Hook Viral" : "AI爆款フック"),
              angleCategory: params.category,
              targetAudience: t.targetAudience || (lang === "de" ? "TikTok Community" : lang === "es" ? "Audiencia TikTok" : "TikTok視聴者"),
              charCount: fullTitle.length,
              hookCharCount: hook.length,
              language: lang,
              isFavorite: false,
              createdAt: new Date().toISOString(),
            };
          }
        );

        // Fill up to 50 if AI returned slightly fewer
        if (mappedTitles.length < 50) {
          const fallback = generateAlgorithmicTitles(prodId, params.category, params.customKeyword, activeTags, Date.now(), lang);
          while (mappedTitles.length < 50 && fallback.length > 0) {
            const item = fallback.pop();
            if (item) mappedTitles.push(item);
          }
        }

        return { titles: mappedTitles.slice(0, 50), source: "gemini_ai" };
      }
    } catch (err: any) {
      console.warn("AI generation failed, smoothly falling back to fast algorithmic matrix:", err);
      // Fallback to algorithmic generator
      const titles = generateAlgorithmicTitles(prodId, params.category, params.customKeyword, activeTags, Date.now(), lang);
      return {
        titles,
        source: "algorithm",
        error: `AI服务网络波动，已平滑无缝切换为高速矩阵算法 (${err.message})`,
      };
    }
  }

  // Instant algorithmic generation
  const titles = generateAlgorithmicTitles(prodId, params.category, params.customKeyword, activeTags, Date.now(), lang);
  return { titles, source: "algorithm" };
}

// Local Storage helpers for Favorites
export function getSavedFavorites(): GeneratedTitle[] {
  try {
    const raw = localStorage.getItem(FAVORITES_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveFavorites(favorites: GeneratedTitle[]): void {
  try {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
  } catch (e) {
    console.error("Failed to save favorites", e);
  }
}

export function toggleFavoriteInStorage(title: GeneratedTitle): {
  isFav: boolean;
  allFavs: GeneratedTitle[];
} {
  const current = getSavedFavorites();
  const exists = current.some((f) => f.title === title.title);
  let updated: GeneratedTitle[];
  if (exists) {
    updated = current.filter((f) => f.title !== title.title);
  } else {
    updated = [{ ...title, isFavorite: true }, ...current];
  }
  saveFavorites(updated);
  return { isFav: !exists, allFavs: updated };
}

// Export utilities
export function copyToClipboard(text: string): Promise<boolean> {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text).then(() => true).catch(() => false);
  }
  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const success = document.execCommand("copy");
    document.body.removeChild(textarea);
    return Promise.resolve(success);
  } catch {
    return Promise.resolve(false);
  }
}

export function exportTitlesAsTxt(titles: GeneratedTitle[], filename = "FOSMET_REC10_TikTok_Titles.txt"): void {
  const content = titles.map((t, idx) => `${idx + 1}. ${t.title}`).join("\n\n");
  downloadFile(content, filename, "text/plain;charset=utf-8");
}

export function exportTitlesAsCsv(titles: GeneratedTitle[], filename = "FOSMET_REC10_TikTok_Titles.csv"): void {
  const header = "No,タイトル（タグ含む）,フック本文,固定タグ,切り口タイプ,ターゲット層,文字数\n";
  const rows = titles
    .map(
      (t, idx) =>
        `"${idx + 1}","${escapeCsv(t.title)}","${escapeCsv(t.hook)}","${escapeCsv(t.tags)}","${escapeCsv(t.angle)}","${escapeCsv(t.targetAudience)}","${t.charCount}"`
    )
    .join("\n");
  const bom = "\uFEFF"; // UTF-8 BOM for Excel Japanese support
  downloadFile(bom + header + rows, filename, "text/csv;charset=utf-8");
}

export function exportTitlesAsJson(titles: GeneratedTitle[], filename = "FOSMET_REC10_TikTok_Titles.json"): void {
  const content = JSON.stringify(titles, null, 2);
  downloadFile(content, filename, "application/json;charset=utf-8");
}

function escapeCsv(str: string): string {
  return (str || "").replace(/"/g, '""');
}

function downloadFile(content: string, filename: string, type: string) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
