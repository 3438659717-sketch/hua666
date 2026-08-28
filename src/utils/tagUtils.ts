/**
 * Tag utility functions for splitting, formatting and normalizing 5 TikTok hashtags.
 */

// Parse a hashtag string into 5 clean tag segments
export function parseTagsToArray(tagStr?: string, defaultTags = ""): [string, string, string, string, string] {
  const source = (tagStr && tagStr.trim()) ? tagStr.trim() : defaultTags.trim();

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
  const fallbackParts = parseTokens(defaultTags);

  return [
    rawParts[0] !== undefined ? rawParts[0] : (fallbackParts[0] || "FOSMET"),
    rawParts[1] !== undefined ? rawParts[1] : (fallbackParts[1] || ""),
    rawParts[2] !== undefined ? rawParts[2] : (fallbackParts[2] || ""),
    rawParts[3] !== undefined ? rawParts[3] : (fallbackParts[3] || ""),
    rawParts[4] !== undefined ? rawParts[4] : (fallbackParts[4] || ""),
  ];
}

// Convert 5 tag segments into standard formatted "#Tag1#Tag2#Tag3#Tag4#Tag5" string
export function formatArrayToTagString(tags: string[]): string {
  const cleaned = tags
    .map((t) => (t || "").trim().replace(/^#+/, ""))
    .filter((t) => t.length > 0);

  if (cleaned.length === 0) return "";
  return "#" + cleaned.join("#");
}

// Normalize any user text input into standard "#tag1#tag2..."
export function normalizeTagString(input: string): string {
  if (!input || !input.trim()) return "";
  if (input.includes("#")) {
    const parts = input
      .split("#")
      .map((p) => p.trim().replace(/^#+/, ""))
      .filter(Boolean);
    if (parts.length === 0) return "";
    return "#" + parts.join("#");
  }
  const parts = input
    .split(/[,\s]+/)
    .map((p) => p.trim().replace(/^#+/, ""))
    .filter(Boolean);
  if (parts.length === 0) return "";
  return "#" + parts.join("#");
}

