import { AngleCategory, GeneratedTitle } from "../types";

export const T20_FIXED_TAGS = "#FOSMET#T20#スマートウォッチ#屋外#スポーツ";

interface HookTemplate {
  pattern: (brand: string, model: string, keyword?: string) => string;
  category: AngleCategory;
  angleLabel: string;
  targetAudience: string;
}

export const T20_HOOK_TEMPLATES: HookTemplate[] = [
  // 1. 痛点反転・高価アウトドア時計打破 (Pain point / Counter-intuitive)
  {
    pattern: (b, m) => `10万円の高級アウトドア時計、もう買うな！${b} ${m}がコスパ崩壊すぎる`,
    category: "pain_point",
    angleLabel: "脱・高額アウトドア時計",
    targetAudience: "登山・アウトドア愛好家",
  },
  {
    pattern: (b, m) => `スマホ持たずに走りたい人全員集合！${b} ${m}の多星GNSSがマジで自由`,
    category: "pain_point",
    angleLabel: "手ぶらランニング",
    targetAudience: "ランナー・ジョギング派",
  },
  {
    pattern: (b, m) => `水に濡れて壊れた経験ある？${b} ${m}の「スマート排水」がチートすぎる件`,
    category: "pain_point",
    angleLabel: "水没・故障ストレス解消",
    targetAudience: "釣り人・ウォータースポーツ層",
  },
  {
    pattern: (b, m) => `登山で道に迷う恐怖とおさらば！${b} ${m}の電子コンパス＆高度計が頼もしすぎる`,
    category: "pain_point",
    angleLabel: "遭難・道迷い防止",
    targetAudience: "ハイカー・登山初心者",
  },
  {
    pattern: (b, m) => `「すぐ傷つく弱々スマートウォッチ」に嫌気がさした男たちへ贈る${b} ${m}`,
    category: "pain_point",
    angleLabel: "タフネス極限耐久",
    targetAudience: "現場ワーカー・タフ派男性",
  },
  {
    pattern: (b, m) => `運動中のスマホ確認でイラつく人！${b} ${m}の専用スポーツボタンで即計測`,
    category: "pain_point",
    angleLabel: "ワンタッチ操作",
    targetAudience: "筋トレ・ジム通い",
  },
  {
    pattern: (b, m) => `【絶望】アウトドアで時計の充電切れた人…${b} ${m}のタフバッテリー見ろ`,
    category: "pain_point",
    angleLabel: "バッテリー切れトラウマ",
    targetAudience: "キャンプ・車中泊ファン",
  },
  {
    pattern: (b, m) => `雨の日の運動で時計が壊れる心配ゼロ！${b} ${m}の物理排水が凄すぎた`,
    category: "pain_point",
    angleLabel: "雨天スポーツ安心",
    targetAudience: "屋外アスリート",
  },
  {
    pattern: (b, m) => `【後悔】もっと早く買えばよかった…${b} ${m}が最強のアウトドア相棒だった`,
    category: "pain_point",
    angleLabel: "後悔フック",
    targetAudience: "全アクティブ男性",
  },
  {
    pattern: (b, m) => `気圧急変で頭痛や天候悪化に困る人！${b} ${m}の24h気圧センサーが神`,
    category: "pain_point",
    angleLabel: "気圧変化対策",
    targetAudience: "気象病・山ガール・山男",
  },

  // 2. マルチGNSS＆電子コンパス・気圧高度計型 (Multi-GNSS & Outdoor Sensors)
  {
    pattern: (b, m) => `スマホ不要でルート記録！${b} ${m}のマルチGNSS測位が精密すぎる`,
    category: "gadget",
    angleLabel: "単独高精度GPS記録",
    targetAudience: "トレイルランナー・マラソン派",
  },
  {
    pattern: (b, m) => `手首に本格計器を搭載！${b} ${m}の電子コンパス＆高度計が男心をくすぐる`,
    category: "gadget",
    angleLabel: "腕上の本格計器",
    targetAudience: "ミリタリー・計器好き",
  },
  {
    pattern: (b, m) => `過去24時間の気圧変化を完全可視化！${b} ${m}で天候の急変を察知せよ`,
    category: "gadget",
    angleLabel: "24h気圧モニタリング",
    targetAudience: "本格登山者・ソロキャンパー",
  },
  {
    pattern: (b, m) => `電波の届かない山奥でも安心！${b} ${m}の独立オフライン測位ナビ`,
    category: "gadget",
    angleLabel: "オフライン山岳ナビ",
    targetAudience: "山岳ガイド・渓流釣り師",
  },
  {
    pattern: (b, m) => `標高と方位がリアルタイムで分かる！${b} ${m}がアウトドアの必須装備な理由`,
    category: "gadget",
    angleLabel: "標高・方位リアルタイム表示",
    targetAudience: "アウトドアギア好き",
  },
  {
    pattern: (b, m) => `複数の衛星から瞬時にキャッチ！${b} ${m}のマルチGNSS測位スピードに驚愕`,
    category: "gadget",
    angleLabel: "マルチ衛星キャッチ",
    targetAudience: "テクノロジー派ランナー",
  },
  {
    pattern: (b, m) => `手首のコンパスで迷わず前進！${b} ${m}が冒険を安全にナビゲート`,
    category: "gadget",
    angleLabel: "高精度方位磁針",
    targetAudience: "サバイバル・ブッシュクラフト",
  },

  // 3. スマート排水機能型 (Smart Water Ejection & Waterproof)
  {
    pattern: (b, m) => `水が入ったら超振動で吹き飛ばす！${b} ${m}のスマート排水機能が魔法レベル`,
    category: "ai_power",
    angleLabel: "超振動スマート排水",
    targetAudience: "スイマー・サーファー",
  },
  {
    pattern: (b, m) => `【実演】水泳後に${b} ${m}の排水ボタン押したら水滴が飛び出してきた！`,
    category: "ai_power",
    angleLabel: "排水実演フック",
    targetAudience: "ガジェット検証好き",
  },
  {
    pattern: (b, m) => `大雨・泥水・水没もへっちゃら！${b} ${m}の自己防衛排水が頼もしすぎる`,
    category: "ai_power",
    angleLabel: "泥水・豪雨耐久",
    targetAudience: "バイク乗り・配達員",
  },
  {
    pattern: (b, m) => `スピーカー内の水を一瞬で排出！${b} ${m}なら水濡れ後の通話もクリア`,
    category: "ai_power",
    angleLabel: "クリア通話復帰",
    targetAudience: "現場作業員・マリンスポーツ",
  },
  {
    pattern: (b, m) => `水から上がって1秒で排水完了！${b} ${m}のアウトドア進化が止まらない`,
    category: "ai_power",
    angleLabel: "瞬間排水イノベーション",
    targetAudience: "サウナ・プール好き",
  },

  // 4. 100+種スポーツ＆Bluetooth通話型 (100+ Sports & Bluetooth Calls)
  {
    pattern: (b, m) => `100種類以上のスポーツに対応！${b} ${m}でランニングも筋トレも全記録`,
    category: "efficiency",
    angleLabel: "100種スポーツ対応",
    targetAudience: "フィットネス愛好家",
  },
  {
    pattern: (b, m) => `運動専用ボタンを1プッシュで即計測開始！${b} ${m}の操作性がプロ仕様`,
    category: "efficiency",
    angleLabel: "専用スポーツボタン",
    targetAudience: "ストイックアスリート",
  },
  {
    pattern: (b, m) => `スマホ出さずに手首で直接電話発信！${b} ${m}のBluetooth通話が超便利`,
    category: "efficiency",
    angleLabel: "手首Bluetooth通話",
    targetAudience: "ドライブ・作業中の社会人",
  },
  {
    pattern: (b, m) => `音声アシスタント搭載！${b} ${m}に話しかけてタイマーもアラームも一発設定`,
    category: "efficiency",
    angleLabel: "音声AIアシスタント",
    targetAudience: "タイパ重視層",
  },
  {
    pattern: (b, m) => `LINE・メール・着信を腕で一括確認！${b} ${m}で大事な連絡を逃さない`,
    category: "efficiency",
    angleLabel: "重要通知一括管理",
    targetAudience: "連絡が多いアクティブワーカー",
  },
  {
    pattern: (b, m) => `音楽コントロール＆カメラ遠隔シャッター！${b} ${m}と出かける休日が楽しすぎ`,
    category: "efficiency",
    angleLabel: "休日レジャー相棒",
    targetAudience: "ソロキャンパー・Vlogger",
  },

  // 5. 24h健康＆睡眠＆タフネス型 (Health, Vital, Sleep)
  {
    pattern: (b, m) => `心拍数・血中酸素・ストレスを24時間監視！${b} ${m}が命を守るガーディアン`,
    category: "spec_power",
    angleLabel: "24hバイタル監視",
    targetAudience: "健康志向のハードワーカー",
  },
  {
    pattern: (b, m) => `登山中の過負荷を警告！${b} ${m}のリアルタイム心拍モニタリング`,
    category: "spec_power",
    angleLabel: "過負荷警告・安全管理",
    targetAudience: "シニアハイカー・登山愛好家",
  },
  {
    pattern: (b, m) => `深い眠りと浅い眠りを完全分析！${b} ${m}でアウトドア翌日の回復度をチェック`,
    category: "spec_power",
    angleLabel: "睡眠回復スコア",
    targetAudience: "体力回復を重視する人",
  },
  {
    pattern: (b, m) => `ストレスが溜まったら深呼吸！${b} ${m}の呼吸トレーニングで即メンタル整う`,
    category: "spec_power",
    angleLabel: "メンタル・呼吸ケア",
    targetAudience: "プレッシャーの多いビジネスマン",
  },
  {
    pattern: (b, m) => `過酷な環境でもビクともしない！${b} ${m}のタフネス軍規級ボディ`,
    category: "spec_power",
    angleLabel: "軍規級タフネス",
    targetAudience: "ミリタリーテイスト好き",
  },
  {
    pattern: (b, m) => `女性の体調管理もお任せ！${b} ${m}の周期リマインダーが超安心`,
    category: "spec_power",
    angleLabel: "女性周期サポート",
    targetAudience: "アウトドア女子",
  },

  // 6. 秘密・裏技・自慢型 (Secret Hack & Rugged Showcase)
  {
    pattern: (b, m) => `【暴露】アウトドア上級者がこっそり愛用する${b} ${m}の破壊的コスパ`,
    category: "secret_hack",
    angleLabel: "上級者の秘密ギア",
    targetAudience: "ギア通・キャンパー",
  },
  {
    pattern: (b, m) => `「その無骨な時計どこの？」と聞かれまくる${b} ${m}の圧倒的存在感`,
    category: "secret_hack",
    angleLabel: "無骨デザイン自慢",
    targetAudience: "男前ギア好き",
  },
  {
    pattern: (b, m) => `有名アウトドアブランド並みの機能をこの価格で？${b} ${m}がチートすぎる`,
    category: "secret_hack",
    angleLabel: "ブランド越えコスパ",
    targetAudience: "賢く買い物したい層",
  },
  {
    pattern: (b, m) => `Amazonでアウトドア時計探してる人ちょっと待って！${b} ${m}が最強の正解`,
    category: "secret_hack",
    angleLabel: "アウトドア時計の正解",
    targetAudience: "ECショッピング層",
  },
  {
    pattern: (b, m) => `【男のロマン】電子コンパス・気圧計・GPS全部入りの${b} ${m}が熱すぎる`,
    category: "secret_hack",
    angleLabel: "男のロマン全部入り",
    targetAudience: "少年心を忘れない大人",
  },

  // 7. 疑問・コメント誘導型 (Question & Interaction)
  {
    pattern: (b, m) => `時計から水が飛び出す「スマート排水」知ってる？${b} ${m}の実演がエグい`,
    category: "question",
    angleLabel: "排水実演クイズ",
    targetAudience: "TikTok視聴者全員",
  },
  {
    pattern: (b, m) => `【質問】アウトドア時計に一番求める機能は何？${b} ${m}なら全部揃ってます`,
    category: "question",
    angleLabel: "コメント欄巻き込み",
    targetAudience: "アウトドア好き",
  },
  {
    pattern: (b, m) => `スマホ持たずに走る派？持つ派？${b} ${m}があれば手ぶら一択だけどどう？`,
    category: "question",
    angleLabel: "手ぶらラン議論",
    targetAudience: "ランナーコミュニティ",
  },
  {
    pattern: (b, m) => `このゴツい本格デザインでBluetooth通話もできるの凄くない？${b} ${m}`,
    category: "question",
    angleLabel: "ギャップ萌えフック",
    targetAudience: "ガジェットファン",
  },
  {
    pattern: (b, m) => `山登りする人必見！${b} ${m}の気圧高度計、使ったことある？`,
    category: "question",
    angleLabel: "登山者へ問いかけ",
    targetAudience: "山岳愛好家",
  },
];

const T20_AUDIENCES = [
  "登山・ハイキング愛好家", "トレイルランナー", "ランニング・マラソン派", "キャンプ・ソロキャンパー",
  "釣り・フィッシング愛好家", "ジム・筋トレ派", "バイク・ツーリングライダー", "現場作業・アクティブワーカー",
  "タフネス時計好き男性", "サバゲー・ミリタリーファン", "コスパ重視のアウトドア派", "全アクティブパーソン"
];

const T20_PREFIXES = [
  "【アウトドア必携】", "【神コスパ】", "【プロ仕様】", "【驚愕のタフネス】", "【水没知らず】",
  "【男のロマン】", "【登山者必見】", "【最強GPS】", "【実機レビュー】", "【衝撃の排水機能】",
  "【2026年最新】", "【手ぶらラン革命】", "【買ってよかった】", "【圧倒的タフ】"
];

const T20_SUFFIXES = [
  "がガチで神ギアすぎる！", "の実力が想像の10倍凄かった", "のコスパが完全に崩壊してる件",
  "を手放せない理由がこれ", "でアウトドアライフが劇的に快適に！", "は全登山者が持つべき逸品",
  "の排水機能がマジで魔法", "のタフネスさが圧倒的すぎる", "が買い一択な理由"
];

// Generator for T20
export function generateT20AlgorithmicTitles(
  category: AngleCategory = "all_mixed",
  customKeyword?: string,
  customTags?: string
): GeneratedTitle[] {
  const brand = "FOSMET";
  const model = "T20";
  const activeTags = (customTags && customTags.trim()) ? customTags.trim() : T20_FIXED_TAGS;
  const results: GeneratedTitle[] = [];
  const seenHooks = new Set<string>();

  // Filter templates
  let pool = T20_HOOK_TEMPLATES.filter(
    (t) => category === "all_mixed" || t.category === category
  );
  if (pool.length === 0) pool = T20_HOOK_TEMPLATES;

  // Shuffle pool
  const shuffledPool = [...pool].sort(() => Math.random() - 0.5);

  let templateIdx = 0;
  let attempt = 0;

  while (results.length < 50 && attempt < 300) {
    attempt++;
    const tpl = shuffledPool[templateIdx % shuffledPool.length];
    templateIdx++;

    let baseHook = tpl.pattern(brand, model, customKeyword);

    // Apply smart permutations
    const styleRoll = Math.random();
    if (styleRoll < 0.25 && !baseHook.startsWith("【")) {
      const prefix = T20_PREFIXES[Math.floor(Math.random() * T20_PREFIXES.length)];
      baseHook = `${prefix}${baseHook}`;
    } else if (styleRoll > 0.75 && baseHook.length < 32 && !baseHook.endsWith("！") && !baseHook.endsWith("？")) {
      const suffix = T20_SUFFIXES[Math.floor(Math.random() * T20_SUFFIXES.length)];
      baseHook = `${baseHook}${suffix}`;
    }

    if (customKeyword && customKeyword.trim() && !baseHook.includes(customKeyword)) {
      if (Math.random() > 0.4) {
        baseHook = `【${customKeyword.trim()}】${baseHook}`;
      }
    }

    // Ensure FOSMET and T20 presence
    if (!baseHook.includes(brand) || !baseHook.includes(model)) {
      baseHook = `${brand} ${model}｜${baseHook}`;
    }

    // Uniqueness check
    if (seenHooks.has(baseHook)) continue;
    seenHooks.add(baseHook);

    const fullTitle = `${baseHook} ${activeTags}`;
    const audience = tpl.targetAudience || T20_AUDIENCES[Math.floor(Math.random() * T20_AUDIENCES.length)];

    results.push({
      id: `t20-algo-${Date.now()}-${results.length + 1}-${Math.random().toString(36).substr(2, 4)}`,
      productId: "t20",
      title: fullTitle,
      hook: baseHook,
      tags: activeTags,
      angle: tpl.angleLabel,
      angleCategory: tpl.category,
      targetAudience: audience,
      charCount: fullTitle.length,
      hookCharCount: baseHook.length,
      createdAt: new Date().toISOString(),
    });
  }

  return results.slice(0, 50);
}
