export type ProductId = "rec10" | "qs40" | "t20" | "kt80" | "e12" | "e05" | "e09" | "g58" | "g2" | "fos10" | "i228" | "v18pro" | "v17max" | "t40";

export type TargetLanguage = "ja" | "es" | "de";

export type AngleCategory =
  | "all_mixed"
  | "pain_point"
  | "efficiency"
  | "gadget"
  | "ai_power"
  | "secret_hack"
  | "question"
  | "spec_power";

export interface GeneratedTitle {
  id: string;
  productId: ProductId;
  title: string;
  hook: string;
  tags: string;
  angle: string;
  angleCategory: AngleCategory;
  targetAudience: string;
  charCount: number;
  hookCharCount: number;
  translationZh?: string;
  language?: TargetLanguage;
  isFavorite?: boolean;
  createdAt: string;
}

export interface GenerationParams {
  productId: ProductId;
  category: AngleCategory;
  tone: "viral_hook" | "practical" | "shock_expose" | "hardcore_gadget";
  customKeyword?: string;
  customTags?: string;
  language?: TargetLanguage;
  useAiApi: boolean;
}

export interface GenerationBatch {
  id: string;
  productId: ProductId;
  timestamp: string;
  category: AngleCategory;
  source: "algorithm" | "gemini_ai";
  titles: GeneratedTitle[];
}

export interface ProductConfig {
  id: ProductId;
  brand: string;
  model: string;
  name: string;
  japaneseType: string;
  shortDesc: string;
  fixedTags: string;
  defaultLanguage?: TargetLanguage;
  supportedLanguages?: TargetLanguage[];
  badge: string;
  accentColor: string;
  tiktokFormula: string;
  specs: { label: string; value: string }[];
  highlights: string[];
}

export type ChatbotPersona =
  | "tiktok_strategist"
  | "market_scout"
  | "localization_master"
  | "specs_engineer";

export type GeminiModelId =
  | "gemini-3.7-flash"
  | "gemini-3.6-flash"
  | "gemini-3.1-flash-lite"
  | "gemini-flash-lite-latest"
  | "gemini-3.8-flash"
  | "gemini-3.1-pro-preview"
  | "gemini-flash-latest";

export interface GroundingSource {
  title: string;
  uri: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "model" | "system";
  content: string;
  timestamp: string;
  persona?: ChatbotPersona;
  modelUsed?: GeminiModelId;
  searchGroundingUsed?: boolean;
  groundingSources?: GroundingSource[];
  isError?: boolean;
}

export interface ChatSessionHistory {
  id: string;
  title: string;
  messages: ChatMessage[];
  persona: ChatbotPersona;
  model: GeminiModelId;
  enableSearchGrounding: boolean;
  createdAt: string;
  updatedAt: string;
}

