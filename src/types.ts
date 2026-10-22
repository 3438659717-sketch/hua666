export type ProductId = "rec10" | "qs40" | "t20" | "kt80" | "e12" | "e05" | "e09" | "e09b" | "g58" | "g2" | "fos10" | "i228" | "v18pro" | "v17max" | "t40";

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
  holiday?: string;
  isFavorite?: boolean;
  ctrScore?: number; // Estimated viral CTR score (e.g. 96%)
  modelUsed?: string; // e.g. "gemini-3.8-flash"
  createdAt: string;
}

export interface GenerationParams {
  productId: ProductId;
  category: AngleCategory;
  tone: "viral_hook" | "practical" | "shock_expose" | "hardcore_gadget";
  customKeyword?: string;
  customTags?: string;
  language?: TargetLanguage;
  holiday?: string;
  useAiApi: boolean;
}

export interface GenerationBatch {
  id: string;
  productId: ProductId;
  timestamp: string;
  category: AngleCategory;
  source: "algorithm" | "gemini_ai";
  modelUsed?: string;
  latencyMs?: number;
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
  | "gemini-3.8-flash"
  | "gemini-3.7-flash"
  | "gemini-3.6-flash"
  | "gemini-3.1-flash-lite"
  | "gemini-flash-lite-latest"
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

// -------------------------------------------------------------
// Competitor Radar & Social Hashtag Deep Analytics
// -------------------------------------------------------------
export interface TrendingHotword {
  word: string;
  category: "hook" | "pain_point" | "scene" | "spec" | "viral_buzz" | "ai_power" | "efficiency" | "gadget";
  growthRate: string; // e.g. "+342%"
  heatScore: number; // 0-100
  sampleHook: string;
  suggestedPrompt: string;
}

export interface HashtagMetric {
  tag: string;
  postsCount: string; // e.g. "12.8M"
  growth: string; // e.g. "+24.5%"
  relevance: number; // 0-100
  isCore: boolean;
}

export interface CompetitorAngle {
  competitor: string;
  hookPattern: string;
  viewBenchmark: string;
  ourCounterHook: string;
}

export interface CompetitorRadarData {
  productId: ProductId;
  language: TargetLanguage;
  productName: string;
  updatedAt: string;
  hotwords: TrendingHotword[];
  hashtags: HashtagMetric[];
  topCompetitorAngles: CompetitorAngle[];
}

// -------------------------------------------------------------
// TikTok Short Video Storyboard Studio
// -------------------------------------------------------------
export interface StoryboardScene {
  sceneNumber: number;
  timeRange: string; // "0-3s" | "3-10s" | "10-25s" | "25-30s"
  stage: "hook" | "pain" | "feature" | "cta";
  stageTitle: string; // "黄金前3秒抓眼球" | "痛点切入共鸣" | "硬核功能展示" | "转评赞与进店CTA"
  visualPrompt: string; // 拍摄镜头机位与画面设计
  scriptSpoken: string; // 口播台词 (目标语言 + 中文释义)
  audioBgm: string; // BGM配乐与音效重点
  textOverlay: string; // 屏幕花字文案
}

export interface StoryboardScript {
  id: string;
  titleId: string;
  titleText: string;
  productId: ProductId;
  language: TargetLanguage;
  totalDuration: string; // "30s"
  bgmStyle: string;
  targetAudience: string;
  scenes: StoryboardScene[];
  createdAt: string;
}


