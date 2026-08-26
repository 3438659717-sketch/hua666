/**
 * Tag utility functions for splitting, formatting and normalizing 5 TikTok hashtags.
 */

// Parse a hashtag string like "#FOSMET#REC10#AIレコーダー#ChatGPT#プロモーションの仕事" into 5 clean tag segments
export function parseTagsToArray(tagStr: string, defaultTags = ""): [string, string, string, string, string] {
  const source = tagStr && tagStr.trim() ? tagStr.trim() : defaultTags;
  // Match tokens by # or whitespace or comma
  const rawParts = source
    .split(/[#,\s]+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return [
    rawParts[0] || "",
    rawParts[1] || "",
    rawParts[2] || "",
    rawParts[3] || "",
    rawParts[4] || "",
  ];
}

// Convert 5 tag segments into standard formatted "#Tag1#Tag2#Tag3#Tag4#Tag5" string
export function formatArrayToTagString(tags: string[]): string {
  const cleaned = tags
    .map((t) => t.trim().replace(/^#+/, ""))
    .filter((t) => t.length > 0);

  if (cleaned.length === 0) return "";
  return "#" + cleaned.join("#");
}

// Normalize any user text input into standard "#tag1#tag2..."
export function normalizeTagString(input: string): string {
  if (!input || !input.trim()) return "";
  const parts = input
    .split(/[#,\s]+/)
    .map((p) => p.trim())
    .filter(Boolean);
  if (parts.length === 0) return "";
  return "#" + parts.join("#");
}
