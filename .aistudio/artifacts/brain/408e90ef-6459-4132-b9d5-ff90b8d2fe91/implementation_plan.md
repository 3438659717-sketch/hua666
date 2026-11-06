# Feature Plan: Add FOSMET C32PRO (Outdoor Sports Smartwatch)

Add the new **FOSMET C32PRO** smart watch to the multi-language TikTok matrix content workshop. C32PRO inherits all hardware specs and capabilities from T20 (Multi-GNSS offline satellite positioning, electronic compass, barometric altimeter, 5ATM high-frequency acoustic drainage, 100+ sports modes, 24/7 biometric monitoring), localized specifically for **Spanish (es)** and **German (de)** cross-border TikTok markets.

***

### User Review & Critical Decisions

> [!IMPORTANT]
> The user confirmed the following preferences:
> 1. **Default Target Language**: **Spanish (`es`)** (with full German `de` support alongside).
> 2. **Visual Theme & Accent**: **Hardcore Explorer Amber Orange (`amber`)** (`#F59E0B`, `liquid-metal-orange`, `text-amber-400`).
> 3. **Branding & Model Name**: Brand: `FOSMET`, Model: `C32PRO`, Display Full Name: `FOSMET C32PRO`.
> 4. **Hashtags**: Standardized with `#C32PRO` instead of `#T20`, localized in Spanish and German.

- **Confirmed Decision 1**: Add `c32pro` to `ProductId` union across all client and backend layers.
- **Confirmed Decision 2**: Provide both high-speed offline algorithmic templates (50 unique Spanish and 50 unique German viral hooks) and server-side Gemini 3.8 Flash prompts.
- **Confirmed Decision 3**: Add C32PRO to top navigation carousel in `Header.tsx`, telemetry dashboard in `ControlPanel.tsx`, cheatsheet modal, and trending radar.

***

### 1. Overview & Core Concept

- **What It Does**: Adds a dedicated product profile for **FOSMET C32PRO**, allowing cross-border e-commerce sellers and TikTok creators in Spain/Latin America and Germany/DACH to generate 50 unique high-converting short video titles, hooks, and hashtags in seconds.
- **Target Audience**: TikTok cross-border marketing managers, outdoor lifestyle creators, tactical gear reviewers, and e-commerce affiliates targeting Spanish and German speaking regions.
- **Key Value**: Direct 1-click batch generation with 0-3s hook lines tailored to outdoor survival, hiking, waterproof acoustic drainage, and military-grade durability.

***

### 2. User Experience & Visual Design

- **Color Palette & Theme**:
  - Accent Color: Amber Orange (`#F59E0B`).
  - Active Nav Capsule: Amber gradient with warm tactical glow (`bg-amber-500 text-black font-extrabold shadow-[0_4px_20px_rgba(245,158,11,0.5)] border-amber-300/60`).
  - Background Atmosphere: Warm dynamic solar flares and amber particle trails when C32PRO is active.
- **Navigation Placement**:
  - Positioned beside T20 in the top squircle carousel with an icon (Compass/Navigation) and subtitle: `C32PRO · 探险旗舰`.
- **Hashtag Suites**:
  - Spanish default: `#FOSMET #C32PRO #smartwatch #outdoor #táctico`
  - German default: `#FOSMET #C32PRO #Smartwatch #Outdoor Smartwatch #Werkzeug`
- **Telemetry Specs**:
  - `SATELLITE POSITION`: `GNSS 多星` (Multi-satellite independent offline tracking)
  - `WATERPROOF / DRAIN`: `5 ATM` (High-frequency sonic water drainage)
  - `SPORTS TRACKING`: `100+ 模式` (Dedicated tactical physical sports button)

***

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Native Algorithmic Templates vs Pure AI Prompting**
  - *Chosen Approach*: Implement a dedicated `src/data/c32proTemplates.ts` containing 50+ hand-crafted Spanish and German hook templates, plus full integration into `server.ts` Gemini 3.8 Flash generator.
  - *Why*: Ensures 100% instant sub-15ms generation even if offline or if AI API limits are encountered, with identical quality and structure.
- **Decision 2: Language Switching Behavior**
  - *Chosen Approach*: When switching to C32PRO, default to Spanish (`es`), and provide seamless 1-click toggle between 🇪🇸 Spanish and 🇩🇪 German in the control panel.
  - *Why*: Directly fulfills user requirement while keeping cross-border operation frictionless.

***

### 4. Technical Architecture & Data Strategy

```
┌─────────────────────────────────────────────────────────────┐
│                       App State (App.tsx)                   │
│   currentProductId: 'c32pro'  |  language: 'es' | 'de'      │
│   themeColor: 'amber'         |  tags: #FOSMET #C32PRO ...  │
└──────────────┬──────────────────────────────┬───────────────┘
               │                              │
       ┌───────▼────────┐             ┌───────▼────────┐
       │   Client UI    │             │  Data Sources  │
       │  Header.tsx    │             │ templates.ts   │
       │ ControlPanel   │             │ c32proTemplates│
       │ Cheatsheet     │             │ tagUtils.ts    │
       │ TrendingRadar  │             │ trendingData.ts│
       └────────────────┘             └───────┬────────┘
                                              │
                                      ┌───────▼────────┐
                                      │   server.ts    │
                                      │ Gemini 3.8 AI  │
                                      │ /api/generate  │
                                      │  /api/trends   │
                                      └────────────────┘
```

#### Files to Update:
1. `src/types.ts`: Add `"c32pro"` to `ProductId`.
2. `src/data/c32proTemplates.ts`: Create dedicated template file with 50+ Spanish and German hooks based on T20 specs, referencing `#C32PRO`.
3. `src/data/templates.ts`:
   - Add `c32pro` entry in `PRODUCTS_CONFIG`.
   - Wire `generateC32proAlgorithmicTitles` into `generateAlgorithmicTitles`.
4. `src/utils/tagUtils.ts`: Add `c32pro` case in `getDefaultTagsForProduct` for Spanish and German.
5. `src/components/Header.tsx`: Add `c32pro` to `productNavList` carousel.
6. `src/components/ControlPanel.tsx`: Add `c32pro` theme colors, telemetry specs, and hot keywords.
7. `src/App.tsx`: Add `c32pro` theme mapping (`amber`) and language auto-switch.
8. `src/data/trendingData.ts`: Add `c32pro` radar entries for `es` and `de`.
9. `server.ts`: Add `isC32pro` handling in `/api/generate-titles` with prompt tuning for C32PRO outdoor GNSS capabilities.

***

### 5. Verification Plan

1. **Compilation**: Run `compile_applet` and `lint_applet` together to verify strict TypeScript adherence and zero missing symbols.
2. **Product Navigation**: Select `C32PRO` from Header carousel; verify Amber theme activates, tags display `#FOSMET #C32PRO ...`, and language defaults to Spanish.
3. **50-Title Generation**: Click "生成 50 组文案"; verify 50 unique Spanish and German titles generate with `#C32PRO` tags and high-converting outdoor hooks.
4. **Modals & Cheatsheet**: Open Cheatsheet, TikTok Preview, and Storyboard to ensure C32PRO specs and 4-scene video scripts load accurately.
