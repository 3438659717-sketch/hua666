/**
 * Tag utility functions for splitting, formatting and normalizing 5 TikTok hashtags.
 */

// Parse a hashtag string into 5 clean tag segments
export function parseTagsToArray(tagStr?: string, defaultTags = ""): [string, string, string, string, string] {
  const isExplicit = tagStr !== undefined && tagStr !== null;
  const source = isExplicit ? tagStr.trim() : defaultTags.trim();

  const parseTokens = (str: string): string[] => {
    if (!str || !str.trim()) return [];
    if (str.includes("#")) {
      return str
        .split("#")
        .map((p) => p.trim())
        .filter((p) => p.length > 0);
    }
    return str
      .split(/[,\s]+/)
      .map((p) => p.trim())
      .filter((p) => p.length > 0);
  };

  const rawParts = parseTokens(source);

  // If no custom tags were ever provided (undefined), use default tags
  if (!isExplicit) {
    const fallbackParts = parseTokens(defaultTags);
    return [
      fallbackParts[0] || "",
      fallbackParts[1] || "",
      fallbackParts[2] || "",
      fallbackParts[3] || "",
      fallbackParts[4] || "",
    ];
  }

  // When custom tags are explicitly provided (including empty or partial tags),
  // preserve the exact slots without injecting default fallback tags into missing slots.
  return [
    rawParts[0] || "",
    rawParts[1] || "",
    rawParts[2] || "",
    rawParts[3] || "",
    rawParts[4] || "",
  ];
}

// Convert 5 tag segments into standard formatted "#Tag1 #Tag2 #Tag3 #Tag4 #Tag5" string
// Rule: each complete #tag has a space after it, except the last one.
export function formatArrayToTagString(tags: string[]): string {
  const cleaned = tags
    .map((t) => (t || "").trim().replace(/^#+\s*/, ""))
    .filter((t) => t.length > 0);

  if (cleaned.length === 0) return "";
  return cleaned.map((t) => `#${t}`).join(" ");
}

// Normalize any user text input into standard "#tag1 #tag2 ... #lastTag"
export function normalizeTagString(input: string): string {
  if (!input || !input.trim()) return "";
  if (input.includes("#")) {
    const parts = input
      .split("#")
      .map((p) => p.trim().replace(/^#+\s*/, ""))
      .filter(Boolean);
    if (parts.length === 0) return "";
    return parts.map((t) => `#${t}`).join(" ");
  }
  const parts = input
    .split(/[,\s]+/)
    .map((p) => p.trim().replace(/^#+\s*/, ""))
    .filter(Boolean);
  if (parts.length === 0) return "";
  return parts.map((t) => `#${t}`).join(" ");
}

// Get official default tags based on product and language
export function getDefaultTagsForProduct(productId: string = "rec10", language: string = "ja"): string {
  if (productId === "v18pro") {
    return language === "de"
      ? "#DyMona #V18PRO #staubsauger #haushaltshelfer #putztipps #tiktokshop"
      : "#DyMona #V18PRO #aspiradora #limpiezahogar #tiktokshop #hogarlimpio";
  }
  if (productId === "v17max") {
    return language === "es"
      ? "#DyMona #V17MAX #aspiradora #hogargrande #limpiezahogar #tiktokshop #mascotas"
      : "#DyMona #V17MAX #staubsauger #putztipps #haushaltshelfer #tiktokshop";
  }
  if (productId === "kt80") {
    return language === "de"
      ? "#FOSMET #KT80 #Smartwatch #Outdoor Smartwatch #Werkzeug"
      : "#FOSMET #KT80 #smartwatch #outdoor #táctico";
  }
  if (productId === "g58") {
    return language === "de"
      ? "#FOSMET #G58 #Smartwatch #Outfit #Frauengesundheit"
      : "#FOSMET #G58 #RelojInteligente #ModaFemenina #SaludMujer";
  }
  if (productId === "i228") {
    return "#FOSMET #I228 #Salud de la mujer #Atuendo #reloj inteligente";
  }
  if (productId === "fos10") {
    return "#FOSMET #FOS10 #スマートウォッチ #スマートバンド #レディース時計";
  }
  if (productId === "g2") {
    return "#FOSMET #G2 #スマートウォッチ #レディース時計 #女性の健康";
  }
  if (productId === "e09") {
    return "#FOSMET #E09 #スマートグラス #メガネ型カメラ #POV動画";
  }
  if (productId === "e05") {
    return "#FOSMET #E05 #スマートグラス #調光サングラス #AI翻訳";
  }
  if (productId === "e12") {
    return "#FOSMET #E12 #スマートグラス #カメラ付きメガネ #POV動画";
  }
  if (productId === "t20") {
    return "#FOSMET #T20 #スマートウォッチ #アウトドア #登山ウォッチ";
  }
  if (productId === "qs40") {
    return "#FOSMET #QS40 #スマートウォッチ #ChatGPT搭載 #音声アシスタント";
  }
  return "#FOSMET #REC10 #AIレコーダー #ChatGPT #プロモーションの仕事";
}



