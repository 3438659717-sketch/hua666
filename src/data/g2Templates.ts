import { AngleCategory, GeneratedTitle } from "../types";

export const G2_FIXED_TAGS = "#FOSMET #G2 #女性の健康 #スマートウォッチ #服装";

interface HookTemplate {
  pattern: (brand: string, model: string, keyword?: string) => string;
  category: AngleCategory;
  angleLabel: string;
  targetAudience: string;
}

export const G2_HOOK_TEMPLATES: HookTemplate[] = [
  // 1. 痛点反転・体調＆女性の健康悩み型 (Pain point / Women's health / Stress relief)
  {
    pattern: (b, m) => `生理前の体調不良に悩む女子へ！${b} ${m}の周期管理が神すぎた`,
    category: "pain_point",
    angleLabel: "生理周期管理",
    targetAudience: "20〜40代女性・OL",
  },
  {
    pattern: (b, m) => `まだアプリに手入力してるの？${b} ${m}で毎日の健康管理が超ラクになる`,
    category: "pain_point",
    angleLabel: "手入力の悩み解消",
    targetAudience: "ズボラ女子・忙しい女性",
  },
  {
    pattern: (b, m) => `「朝スッキリ起きられない…」${b} ${m}で睡眠の質を可視化したら激変した`,
    category: "pain_point",
    angleLabel: "睡眠改善フック",
    targetAudience: "睡眠不足に悩む人",
  },
  {
    pattern: (b, m) => `バッグの中のスマホ着信に気づかない問題、${b} ${m}の手首通知で完全解決`,
    category: "pain_point",
    angleLabel: "着信見逃し防止",
    targetAudience: "働く女性・通勤通学層",
  },
  {
    pattern: (b, m) => `高額な時計じゃなくても大満足！${b} ${m}の機能美とコスパがヤバい`,
    category: "pain_point",
    angleLabel: "コスパ革命",
    targetAudience: "スマートウォッチ初心者",
  },
  {
    pattern: (b, m) => `手洗いや雨で濡れるの怖くない？IP68防水の${b} ${m}なら日常使いも超安心`,
    category: "pain_point",
    angleLabel: "水濡れ不安解消",
    targetAudience: "主婦・アクティブ女子",
  },
  {
    pattern: (b, m) => `運動が続かない三日坊主を救う！${b} ${m}の120+運動モードでモチベ爆上がり`,
    category: "pain_point",
    angleLabel: "運動習慣化",
    targetAudience: "ダイエッター・宅トレ女子",
  },
  {
    pattern: (b, m) => `仕事中のプチストレスに！${b} ${m}の呼吸トレーニングで即リセット`,
    category: "pain_point",
    angleLabel: "メンタルケア",
    targetAudience: "デスクワーカー・プレッシャー世代",
  },

  // 2. 効率＆Bluetooth通話＆スマートライフ型 (Efficiency & Smart Lifestyle)
  {
    pattern: (b, m) => `スマホ出さずに手首で直接通話！${b} ${m}のBluetooth5.3が超クリア`,
    category: "efficiency",
    angleLabel: "手首Bluetooth通話",
    targetAudience: "家事中・運転中・多忙ワーカー",
  },
  {
    pattern: (b, m) => `LINEもメールも腕で一瞬確認！${b} ${m}で大事な連絡を秒速キャッチ`,
    category: "efficiency",
    angleLabel: "通知一括チェック",
    targetAudience: "ビジネス女子・学生",
  },
  {
    pattern: (b, m) => `スマホどこ置いたっけ？を秒で解決！${b} ${m}のスマホ探索機能が便利すぎ`,
    category: "efficiency",
    angleLabel: "スマホ探索",
    targetAudience: "うっかりさん・忙しい朝",
  },
  {
    pattern: (b, m) => `音楽操作も電卓も手首で完結！${b} ${m}が毎日の生活効率を劇的に上げる`,
    category: "efficiency",
    angleLabel: "日常便利ツール",
    targetAudience: "タイパ重視層",
  },
  {
    pattern: (b, m) => `腕を上げるだけでパッと画面点灯！${b} ${m}の快適レスポンスが心地いい`,
    category: "efficiency",
    angleLabel: "腕上げ点灯",
    targetAudience: "全世代ユーザー",
  },
  {
    pattern: (b, m) => `天気や空気質もサクッと確認！${b} ${m}でお出かけ前の準備がスムーズに`,
    category: "efficiency",
    angleLabel: "天気・空気質確認",
    targetAudience: "お出かけ好き・ママ層",
  },
  {
    pattern: (b, m) => `音声アシスタント対応で話しかけるだけ！${b} ${m}のスマート操作体験`,
    category: "efficiency",
    angleLabel: "音声アシスタント",
    targetAudience: "ハンズフリー派",
  },

  // 3. ハードウェア＆文字盤着せ替え＆洗練デザイン型 (Gadget / Watchfaces / Design)
  {
    pattern: (b, m) => `気分に合わせて文字盤を着せ替え！${b} ${m}のカスタム画面が可愛すぎる`,
    category: "gadget",
    angleLabel: "文字盤自由着せ替え",
    targetAudience: "ファッション好き・若者",
  },
  {
    pattern: (b, m) => `多彩なメニュースタイル搭載！${b} ${m}で自分好みの操作画面にカスタマイズ`,
    category: "gadget",
    angleLabel: "選べるメニュースタイル",
    targetAudience: "こだわり派・ガジェット好き",
  },
  {
    pattern: (b, m) => `手洗い・雨・洗車もへっちゃら！IP68防塵防水の${b} ${m}がタフで頼もしい`,
    category: "gadget",
    angleLabel: "IP68防水防塵",
    targetAudience: "デイリーユース重視",
  },
  {
    pattern: (b, m) => `どんな服装にも馴染む上品フォルム！${b} ${m}が手元を華やかに演出`,
    category: "gadget",
    angleLabel: "上品デザイン美",
    targetAudience: "大人の女性・きれいめコーデ",
  },
  {
    pattern: (b, m) => `腕元でキラリと映える！${b} ${m}の洗練された佇まいに一目惚れ`,
    category: "gadget",
    angleLabel: "高見えデザイン",
    targetAudience: "アクセサリー感覚で着けたい人",
  },

  // 4. 女性の健康・FitCloudPro連携・AIスマート型 (Women's Health & App Sync)
  {
    pattern: (b, m) => `月経周期トラッキングが超優秀！${b} ${m}とFitCloudProで女性の体を守る`,
    category: "ai_power",
    angleLabel: "FitCloudPro周期連携",
    targetAudience: "体調管理したい女性",
  },
  {
    pattern: (b, m) => `深睡眠・浅睡眠・総睡眠時間を詳細分析！${b} ${m}の睡眠トラッキング`,
    category: "ai_power",
    angleLabel: "科学的睡眠分析",
    targetAudience: "快眠を目指す人",
  },
  {
    pattern: (b, m) => `心拍数・血中酸素を常時モニタリング！${b} ${m}が手首の専属ヘルスケア相棒`,
    category: "ai_power",
    angleLabel: "24hバイタル監視",
    targetAudience: "健康志向の女性・家族へのギフト",
  },
  {
    pattern: (b, m) => `呼吸トレーニングでリフレッシュ！${b} ${m}が日々のメンタルを優しくケア`,
    category: "ai_power",
    angleLabel: "呼吸リラクゼーション",
    targetAudience: "ストレスケア重視",
  },
  {
    pattern: (b, m) => `FitCloudProアプリで詳細データが一目瞭然！${b} ${m}のデータ同期力`,
    category: "ai_power",
    angleLabel: "アプリ詳細分析",
    targetAudience: "データ管理派",
  },

  // 5. 120+運動モード＆アクティブスペック型 (120+ Sports Modes & Specs)
  {
    pattern: (b, m) => `内蔵8+1＆追加112種！${b} ${m}の120+運動モードでどんなワークアウトも記録`,
    category: "spec_power",
    angleLabel: "120+種運動モード",
    targetAudience: "ヨガ・ランニング・ジム女子",
  },
  {
    pattern: (b, m) => `ウォーキングから縄跳びまで！${b} ${m}で歩数・距離・カロリーを正確管理`,
    category: "spec_power",
    angleLabel: "消費カロリー計測",
    targetAudience: "ダイエット実践者",
  },
  {
    pattern: (b, m) => `サイクリング・バドミントン・球技も網羅！${b} ${m}のスポーツ対応力が凄い`,
    category: "spec_power",
    angleLabel: "多彩なスポーツ対応",
    targetAudience: "スポーツ愛好者",
  },
  {
    pattern: (b, m) => `Bluetooth 5.3の安定接続！${b} ${m}で途切れないスマート通信を実現`,
    category: "spec_power",
    angleLabel: "Bluetooth5.3安定接続",
    targetAudience: "接続性重視層",
  },
  {
    pattern: (b, m) => `連絡先同期＆手首ダイヤル！${b} ${m}の充実した通話スペックに驚き`,
    category: "spec_power",
    angleLabel: "連絡先同期＆ダイヤル",
    targetAudience: "ビジネス＆プライベート両立派",
  },

  // 6. 服装コーデ＆秘密の裏技・高見え型 (Secret Hack & Outfit Styling)
  {
    pattern: (b, m) => `【OOTD】毎日のコーデに自然に溶け込む！${b} ${m}が女子の必須アイテムな件`,
    category: "secret_hack",
    angleLabel: "服装コーデ相性抜群",
    targetAudience: "ファッション感度高い女子",
  },
  {
    pattern: (b, m) => `「それどこの時計？」って絶対聞かれる！${b} ${m}の高見え感がエグい`,
    category: "secret_hack",
    angleLabel: "褒められウォッチ",
    targetAudience: "トレンド女子",
  },
  {
    pattern: (b, m) => `【裏技】仕事中もプライベートもこれ1台！${b} ${m}の万能すぎる使いこなし術`,
    category: "secret_hack",
    angleLabel: "公私兼用ライフハック",
    targetAudience: "キャリア女性",
  },
  {
    pattern: (b, m) => `女子のQOLが爆上がりするスマートウォッチ、実は${b} ${m}でした`,
    category: "secret_hack",
    angleLabel: "QOL向上ハック",
    targetAudience: "自分磨き中の女性",
  },
  {
    pattern: (b, m) => `【秘密】体調管理もLINE通知も全部腕で！${b} ${m}でデキる女性のスマートライフ`,
    category: "secret_hack",
    angleLabel: "デキる女子の秘密",
    targetAudience: "効率よく生きたい女性",
  },

  // 7. 疑問・質問・コメント誘導型 (Question & Interaction)
  {
    pattern: (b, m) => `生理周期や睡眠まで測れる時計知ってる？最新${b} ${m}が優秀すぎた`,
    category: "question",
    angleLabel: "機能紹介クイズ",
    targetAudience: "TikTok視聴者",
  },
  {
    pattern: (b, m) => `120種類以上の運動モード、どれ使いたい？${b} ${m}で体を動かそう`,
    category: "question",
    angleLabel: "運動アンケート",
    targetAudience: "アクティブ層",
  },
  {
    pattern: (b, m) => `手首で通話できるスマートウォッチって正直どう？${b} ${m}を使ってみた結果`,
    category: "question",
    angleLabel: "通話体験問いかけ",
    targetAudience: "購入検討層",
  },
  {
    pattern: (b, m) => `文字盤を毎日変える派？固定派？${b} ${m}なら無限に着せ替え可能！`,
    category: "question",
    angleLabel: "文字盤議論",
    targetAudience: "ファッション好き",
  },
  {
    pattern: (b, m) => `女性の健康を守るスマートウォッチ、${b} ${m}が今選ばれる理由とは？`,
    category: "question",
    angleLabel: "人気理由解説",
    targetAudience: "健康意識の高い層",
  },
];

const G2_AUDIENCES = [
  "20〜30代女性", "働くOL", "ダイエッター", "健康志向の女性", "主婦・ママ層",
  "学生", "スマートウォッチ初心者", "ヨガ・フィットネス女子", "タイパ重視派",
  "きれいめコーデ好き", "睡眠改善したい人", "ガジェット女子"
];

const G2_HOOK_PREFIXES = [
  "【女子必見】", "【QOL爆上げ】", "【神アイテム】", "【正直レビュー】", "【体調管理】",
  "【即買い推奨】", "【2026年最新】", "【コスパ最強】", "【感動】", "【保存版】",
  "【女性の健康】", "【毎日愛用】", "【OOTD】", "【睡眠改善】", "【話題の神機】"
];

const G2_HOOK_SUFFIXES = [
  "がマジで手放せない！", "で生活の質が劇的に変わった！", "が女子の最強のお守りすぎる件",
  "の可愛さと機能性に感動", "が想像以上に便利すぎた", "で毎日の体調管理がラクになる",
  "のコスパが完全にバグってる", "は全女性におすすめしたい逸品", "が手元を華やかに彩る",
  "の健康トラッキングが優秀すぎる"
];

export function generateG2AlgorithmicTitles(
  category: AngleCategory = "all_mixed",
  customKeyword?: string,
  customTags?: string,
  batchSeed = Date.now()
): GeneratedTitle[] {
  const brand = "FOSMET";
  const model = "G2";
  const activeTags = (customTags && customTags.trim()) ? customTags.trim() : G2_FIXED_TAGS;
  const results: GeneratedTitle[] = [];
  const seenHooks = new Set<string>();

  // Filter templates by category
  let pool = G2_HOOK_TEMPLATES.filter(
    (t) => category === "all_mixed" || t.category === category
  );
  if (pool.length === 0) pool = G2_HOOK_TEMPLATES;

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
      const prefix = G2_HOOK_PREFIXES[Math.floor(Math.random() * G2_HOOK_PREFIXES.length)];
      baseHook = `${prefix}${baseHook}`;
    } else if (styleRoll > 0.72 && baseHook.length < 34 && !baseHook.endsWith("！") && !baseHook.endsWith("？")) {
      const suffix = G2_HOOK_SUFFIXES[Math.floor(Math.random() * G2_HOOK_SUFFIXES.length)];
      baseHook = `${baseHook}${suffix}`;
    }

    if (customKeyword && customKeyword.trim() && !baseHook.includes(customKeyword)) {
      if (Math.random() > 0.4) {
        baseHook = `【${customKeyword.trim()}】${baseHook}`;
      }
    }

    // Ensure FOSMET and G2 presence
    if (!baseHook.includes(brand) || !baseHook.includes(model)) {
      baseHook = `${brand} ${model}｜${baseHook}`;
    }

    // Uniqueness check
    if (seenHooks.has(baseHook)) continue;
    seenHooks.add(baseHook);

    const fullTitle = `${baseHook} ${activeTags}`;
    const audience = tpl.targetAudience || G2_AUDIENCES[Math.floor(Math.random() * G2_AUDIENCES.length)];

    results.push({
      id: `g2-algo-${batchSeed}-${results.length + 1}-${Math.random().toString(36).substr(2, 4)}`,
      productId: "g2",
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
    const fallbackHook = `【人気急上昇】女性の健康と120+運動を腕で管理！FOSMET G2のBluetooth通話＆IP68防水が優秀すぎる`;
    const fullTitle = `${fallbackHook} ${activeTags}`;
    results.push({
      id: `g2-algo-${batchSeed}-${idx}`,
      productId: "g2",
      title: fullTitle,
      hook: fallbackHook,
      tags: activeTags,
      angle: "全天候健康管理",
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
