import { AngleCategory, GeneratedTitle } from "../types";

export const FOS10_FIXED_TAGS = "#FOSMET #FOS10 #女性の健康 #スマートウォッチ #ポータブル";

interface HookTemplate {
  pattern: (brand: string, model: string, keyword?: string) => string;
  category: AngleCategory;
  angleLabel: string;
  targetAudience: string;
}

export const FOS10_HOOK_TEMPLATES: HookTemplate[] = [
  // 1. 痛点反転・薄型軽量＆女性の健康悩み型 (Pain point / Ultra-thin 14.9g / Women's health)
  {
    pattern: (b, m) => `重い時計で手首が疲れる人へ！わずか14.9gの${b} ${m}が異次元の軽さ`,
    category: "pain_point",
    angleLabel: "14.9g超軽量解放",
    targetAudience: "手首疲れに悩む女子・OL",
  },
  {
    pattern: (b, m) => `生理前の体調変化に気づいてる？${b} ${m}で女性の健康リズムを徹底可視化`,
    category: "pain_point",
    angleLabel: "女性の健康リズム",
    targetAudience: "体調管理したい女性・20〜40代",
  },
  {
    pattern: (b, m) => `厚さ10.66mmの極薄設計！${b} ${m}なら寝ている間も着けてるのを忘れる`,
    category: "pain_point",
    angleLabel: "10.66mm無感睡眠",
    targetAudience: "睡眠トラッキング重視層",
  },
  {
    pattern: (b, m) => `「朝スッキリ起きられない…」${b} ${m}で睡眠周期を測ったら原因が判明！`,
    category: "pain_point",
    angleLabel: "睡眠改善フック",
    targetAudience: "朝が苦手な人・働く女性",
  },
  {
    pattern: (b, m) => `バッグの中のスマホ通知に気づかない問題、${b} ${m}の腕上通知で秒速解決`,
    category: "pain_point",
    angleLabel: "通知見逃し防止",
    targetAudience: "通勤通学・働くOL",
  },
  {
    pattern: (b, m) => `仕事や家事のストレス爆発寸前に！${b} ${m}の呼吸トレーニングで即リセット`,
    category: "pain_point",
    angleLabel: "呼吸メンタルケア",
    targetAudience: "多忙な主婦・デスクワーカー",
  },
  {
    pattern: (b, m) => `運動が3日も続かない人へ！${b} ${m}の100+運動モードで毎日のやる気爆発`,
    category: "pain_point",
    angleLabel: "運動継続サポート",
    targetAudience: "ダイエッター・宅トレ女子",
  },
  {
    pattern: (b, m) => `雨や手洗いで濡れても平気！IP68防水の${b} ${m}なら24時間ずっと安心`,
    category: "pain_point",
    angleLabel: "IP68防水安心感",
    targetAudience: "アクティブ女子・主婦層",
  },

  // 2. 効率＆スマートライフ＆通知管理型 (Efficiency & Smart Lifestyle)
  {
    pattern: (b, m) => `LINEもSNSも腕で一瞬チェック！${b} ${m}で大事なメッセージを逃さない`,
    category: "efficiency",
    angleLabel: "LINE・SNS通知",
    targetAudience: "学生・スマホヘビーユーザー",
  },
  {
    pattern: (b, m) => `Bluetooth 5.3で爆速安定同期！${b} ${m}とAppの連携がスムーズすぎる`,
    category: "efficiency",
    angleLabel: "Bluetooth5.3高速連携",
    targetAudience: "タイパ重視派・効率女子",
  },
  {
    pattern: (b, m) => `手首で健康データを一元管理！${b} ${m}が毎日の生活効率を劇的に上げる`,
    category: "efficiency",
    angleLabel: "手首データ一元化",
    targetAudience: "健康意識の高い層",
  },
  {
    pattern: (b, m) => `歩数・距離・カロリーを秒速把握！${b} ${m}でスマートな健康生活スタート`,
    category: "efficiency",
    angleLabel: "アクティビティ即時確認",
    targetAudience: "ウォーキング・ランニング愛好者",
  },
  {
    pattern: (b, m) => `AndroidもiOSも両対応！${b} ${m}でスマホを選ばず快適スマートライフ`,
    category: "efficiency",
    angleLabel: "iOS・Android両対応",
    targetAudience: "全スマホユーザー",
  },
  {
    pattern: (b, m) => `お出かけ前の体調チェックに！${b} ${m}の心拍・血中酸素測定が頼もしすぎる`,
    category: "efficiency",
    angleLabel: "日常バイタル管理",
    targetAudience: "セルフケア女子",
  },

  // 3. 10.66mm極薄・14.9g軽量・DIY文字盤型 (Gadget / DIY Watchfaces / Hardware)
  {
    pattern: (b, m) => `厚さ10.66mm×重さ14.9g！${b} ${m}のポータブル極薄デザインが神`,
    category: "gadget",
    angleLabel: "10.66mm＆14.9g極薄",
    targetAudience: "ミニマリスト・軽量派",
  },
  {
    pattern: (b, m) => `100+種類の文字盤が選び放題！${b} ${m}を今日の気分でカスタマイズ`,
    category: "gadget",
    angleLabel: "100+文字盤選び放題",
    targetAudience: "ファッション好き・若者",
  },
  {
    pattern: (b, m) => `スマホの写真や推し画像を文字盤にDIY！${b} ${m}の自由度が凄すぎる`,
    category: "gadget",
    angleLabel: "写真DIY文字盤",
    targetAudience: "推し活女子・ペット飼い主",
  },
  {
    pattern: (b, m) => `フォントカラーまで自由自在！${b} ${m}で世界に一つだけの文字盤を作ろう`,
    category: "gadget",
    angleLabel: "フォントカラーDIY",
    targetAudience: "こだわり派・個性重視",
  },
  {
    pattern: (b, m) => `どんなコーデにも馴染む美しさ！${b} ${m}の洗練されたフォルムに一目惚れ`,
    category: "gadget",
    angleLabel: "上品ミニマルデザイン",
    targetAudience: "大人女子・きれいめコーデ",
  },
  {
    pattern: (b, m) => `IP68防塵防水でどこでも連れて行ける！${b} ${m}のタフなポータブル仕様`,
    category: "gadget",
    angleLabel: "IP68ポータブル",
    targetAudience: "アウトドア・お出かけ好き",
  },

  // 4. 女性の健康・バイタル・睡眠＆呼吸ケア型 (Women's Health & Vital Analysis)
  {
    pattern: (b, m) => `女性の健康を24時間優しく見守る！${b} ${m}のヘルスケア機能が超充実`,
    category: "ai_power",
    angleLabel: "女性ヘルスケア全天候",
    targetAudience: "体調に気を配る女性",
  },
  {
    pattern: (b, m) => `睡眠時間・睡眠深度・睡眠周期まで丸わかり！${b} ${m}の精密睡眠分析`,
    category: "ai_power",
    angleLabel: "睡眠深度＆周期分析",
    targetAudience: "快眠を目指す人・不眠気味な人",
  },
  {
    pattern: (b, m) => `心拍数と血中酸素をリアルタイム監視！${b} ${m}が手首の専属ドクター`,
    category: "ai_power",
    angleLabel: "心拍・血中酸素常時監視",
    targetAudience: "健康志向・セルフケア派",
  },
  {
    pattern: (b, m) => `深呼吸で心と体をリラックス！${b} ${m}の呼吸トレーニングで毎日スッキリ`,
    category: "ai_power",
    angleLabel: "呼吸リラクゼーション",
    targetAudience: "ストレスを溜めがちな人",
  },
  {
    pattern: (b, m) => `専用Appで健康グラフがひと目でわかる！${b} ${m}のデータ同期力が優秀`,
    category: "ai_power",
    angleLabel: "App健康データ同期",
    targetAudience: "データ管理派・自己投資女子",
  },

  // 5. 100+運動モード＆スペック・タフネス型 (100+ Sports & Specs)
  {
    pattern: (b, m) => `100+種類の運動モード搭載！${b} ${m}でヨガもランニングも正確記録`,
    category: "spec_power",
    angleLabel: "100+運動モード",
    targetAudience: "フィットネス・ヨガ女子",
  },
  {
    pattern: (b, m) => `歩数・移動距離・消費カロリーを全自動追跡！${b} ${m}でダイエット成功へ`,
    category: "spec_power",
    angleLabel: "カロリー自動計算",
    targetAudience: "ダイエッター・運動初心者",
  },
  {
    pattern: (b, m) => `IP68完全防水仕様！手洗い・汗・雨でも外さなくていい${b} ${m}が最強`,
    category: "spec_power",
    angleLabel: "IP68完全防水",
    targetAudience: "デイリーユース重視",
  },
  {
    pattern: (b, m) => `Bluetooth 5.3の超省電力チップ！${b} ${m}の途切れない安定接続に大満足`,
    category: "spec_power",
    angleLabel: "BT5.3省電力チップ",
    targetAudience: "スペック重視・ガジェット派",
  },
  {
    pattern: (b, m) => `わずか14.9gなのに機能全部入り！${b} ${m}の驚愕スペックを徹底検証`,
    category: "spec_power",
    angleLabel: "14.9g全部入りスペック",
    targetAudience: "購入検討者・レビュー好き",
  },

  // 6. 服装コーデ＆秘密の裏技・高見え型 (Secret Hack & Outfit Styling)
  {
    pattern: (b, m) => `【OOTD】薄型10.66mmだから袖口に引っかからない！${b} ${m}の神コーデ術`,
    category: "secret_hack",
    angleLabel: "袖口スッキリ美シルエット",
    targetAudience: "きれいめファッション女子",
  },
  {
    pattern: (b, m) => `「その可愛い時計どこの？」って聞かれる${b} ${m}の高見え文字盤テク`,
    category: "secret_hack",
    angleLabel: "褒められ文字盤ハック",
    targetAudience: "トレンド女子・学生",
  },
  {
    pattern: (b, m) => `【裏技】推しの写真×好きなフォントで${b} ${m}を最高のお守りにする裏技`,
    category: "secret_hack",
    angleLabel: "推し活文字盤裏技",
    targetAudience: "推し活ファン・Z世代",
  },
  {
    pattern: (b, m) => `女子のQOLが劇的に向上するスマートウォッチ、実は${b} ${m}でした`,
    category: "secret_hack",
    angleLabel: "QOL向上ハック",
    targetAudience: "自分磨き中の女性",
  },
  {
    pattern: (b, m) => `【暴露】14.9gの軽さで健康も通知も全部カバーする${b} ${m}がズルい`,
    category: "secret_hack",
    angleLabel: "全方位カバー裏技",
    targetAudience: "効率よく生きたい女性",
  },

  // 7. 疑問・質問・コメント誘導型 (Question & Interaction)
  {
    pattern: (b, m) => `14.9gの超軽量スマートウォッチ、着けてみたい？${b} ${m}を実機レビュー`,
    category: "question",
    angleLabel: "軽さ体験問いかけ",
    targetAudience: "TikTok視聴者",
  },
  {
    pattern: (b, m) => `文字盤を毎日変える派？写真を入れる派？${b} ${m}ならどっちも自由！`,
    category: "question",
    angleLabel: "文字盤アンケート",
    targetAudience: "ファッション好き",
  },
  {
    pattern: (b, m) => `生理周期や睡眠深度まで測れるポータブル時計、${b} ${m}知ってる？`,
    category: "question",
    angleLabel: "機能紹介クイズ",
    targetAudience: "健康意識の高い層",
  },
  {
    pattern: (b, m) => `100種類以上のスポーツモード、どれやってみたい？${b} ${m}で測定してみた`,
    category: "question",
    angleLabel: "スポーツアンケート",
    targetAudience: "アクティブ女子",
  },
  {
    pattern: (b, m) => `女性に大人気のポータブルスマートウォッチ、${b} ${m}が選ばれる理由とは？`,
    category: "question",
    angleLabel: "人気理由解説",
    targetAudience: "ギフト・購入検討層",
  },
];

const FOS10_AUDIENCES = [
  "20〜30代女性", "働くOL", "健康志向の女性", "ダイエッター", "主妇・ママ層",
  "学生・Z世代", "スマートウォッチ初心者", "ヨガ・フィットネス女子", "推し活ファン",
  "きれいめコーデ好き", "睡眠改善したい人", "ミニマリスト女子"
];

const FOS10_HOOK_PREFIXES = [
  "【女子必見】", "【QOL爆上げ】", "【神アイテム】", "【正直レビュー】", "【女性の健康】",
  "【14.9g超軽量】", "【2026年最新】", "【神コスパ】", "【感動】", "【保存版】",
  "【推し活女子】", "【毎日愛用】", "【OOTD】", "【睡眠改善】", "【ポータブル神機】"
];

const FOS10_HOOK_SUFFIXES = [
  "がマジで手放せない！", "で毎日の生活が劇的に快適になった！", "が女子の最高のお守りすぎる件",
  "の軽さと可愛さに感動", "が想像以上に便利すぎた", "で体調管理と推し活が超捗る",
  "のコスパが完全にバグってる", "は全女性に本気でおすすめしたい名機", "が手元を華やかに彩る",
  "のポータブル性能が優秀すぎる"
];

export function generateFos10AlgorithmicTitles(
  category: AngleCategory = "all_mixed",
  customKeyword?: string,
  customTags?: string,
  batchSeed = Date.now()
): GeneratedTitle[] {
  const brand = "FOSMET";
  const model = "FOS10";
  const activeTags = (customTags && customTags.trim()) ? customTags.trim() : FOS10_FIXED_TAGS;
  const results: GeneratedTitle[] = [];
  const seenHooks = new Set<string>();

  // Filter templates by category
  let pool = FOS10_HOOK_TEMPLATES.filter(
    (t) => category === "all_mixed" || t.category === category
  );
  if (pool.length === 0) pool = FOS10_HOOK_TEMPLATES;

  // Shuffle pool
  const shuffledPool = [...pool].sort(() => Math.random() - 0.5);

  let templateIdx = 0;
  let attempt = 0;

  while (results.length < 50 && attempt < 300) {
    attempt++;
    const tpl = shuffledPool[templateIdx % shuffledPool.length];
    templateIdx++;

    let baseHook = tpl.pattern(brand, model, customKeyword);

    // Apply smart permutations for rich uniqueness
    const styleRoll = Math.random();
    if (styleRoll < 0.28 && !baseHook.startsWith("【")) {
      const prefix = FOS10_HOOK_PREFIXES[Math.floor(Math.random() * FOS10_HOOK_PREFIXES.length)];
      baseHook = `${prefix}${baseHook}`;
    } else if (styleRoll > 0.72 && baseHook.length < 34 && !baseHook.endsWith("！") && !baseHook.endsWith("？")) {
      const suffix = FOS10_HOOK_SUFFIXES[Math.floor(Math.random() * FOS10_HOOK_PREFIXES.length)];
      baseHook = `${baseHook}${suffix}`;
    }

    if (customKeyword && customKeyword.trim() && !baseHook.includes(customKeyword)) {
      if (Math.random() > 0.4) {
        baseHook = `【${customKeyword.trim()}】${baseHook}`;
      }
    }

    // Ensure FOSMET and FOS10 presence
    if (!baseHook.includes(brand) || !baseHook.includes(model)) {
      baseHook = `${brand} ${model}｜${baseHook}`;
    }

    // Uniqueness check
    if (seenHooks.has(baseHook)) continue;
    seenHooks.add(baseHook);

    const fullTitle = `${baseHook} ${activeTags}`;
    const audience = tpl.targetAudience || FOS10_AUDIENCES[Math.floor(Math.random() * FOS10_AUDIENCES.length)];

    results.push({
      id: `fos10-algo-${batchSeed}-${results.length + 1}-${Math.random().toString(36).substr(2, 4)}`,
      productId: "fos10",
      title: fullTitle,
      hook: baseHook,
      tags: activeTags,
      angle: tpl.angleLabel,
      angleCategory: tpl.category,
      targetAudience: audience,
      charCount: fullTitle.length,
      hookCharCount: baseHook.length,
      language: "ja",
      isFavorite: false,
      createdAt: new Date().toISOString(),
    });
  }

  // If slightly less than 50, fill up with safe high quality variations
  while (results.length < 50) {
    const idx = results.length + 1;
    const fallbackHook = `【大人気ポータブル】10.66mm極薄＆14.9g超軽量！FOSMET FOS10の女性健康・DIY文字盤・100+運動が優秀すぎる`;
    const fullTitle = `${fallbackHook} ${activeTags}`;
    results.push({
      id: `fos10-algo-${batchSeed}-${idx}`,
      productId: "fos10",
      title: fullTitle,
      hook: fallbackHook,
      tags: activeTags,
      angle: "ポータブル健康管理",
      angleCategory: "all_mixed",
      targetAudience: "全女性ユーザー",
      charCount: fullTitle.length,
      hookCharCount: fallbackHook.length,
      language: "ja",
      isFavorite: false,
      createdAt: new Date().toISOString(),
    });
  }

  return results.slice(0, 50);
}
