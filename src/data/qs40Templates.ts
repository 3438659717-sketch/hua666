import { AngleCategory, GeneratedTitle } from "../types";

export const QS40_FIXED_TAGS = "#FOSMET #QS40 #スマートウォッチ #健康管理者 #ai";

interface HookTemplate {
  pattern: (brand: string, model: string, keyword?: string) => string;
  category: AngleCategory;
  angleLabel: string;
  targetAudience: string;
}

export const QS40_HOOK_TEMPLATES: HookTemplate[] = [
  // 1. 反常识痛点型 (Pain point / Counter-intuitive / Anti-Typing)
  {
    pattern: (b, m) => `スマートウォッチの文字入力イラついてる人、今すぐ${b} ${m}見て`,
    category: "pain_point",
    angleLabel: "文字入力の悩み解消",
    targetAudience: "スマートウォッチ愛用者",
  },
  {
    pattern: (b, m) => `まだ10万円の高級時計買ってるの？${b} ${m}がコスパ崩壊すぎる`,
    category: "pain_point",
    angleLabel: "価格破壊フック",
    targetAudience: "コスパ重視の男性・ビジネスマン",
  },
  {
    pattern: (b, m) => `毎日充電するの、もう疲れましたよね？${b} ${m}なら余裕で10日持つ`,
    category: "pain_point",
    angleLabel: "充電ストレス解放",
    targetAudience: "充電切れに悩む人",
  },
  {
    pattern: (b, m) => `「手首重くて肩こる問題」を9.8mmの極薄${b} ${m}が一発解決した件`,
    category: "pain_point",
    angleLabel: "軽量薄型化",
    targetAudience: "デスクワーカー・肩こり持ち",
  },
  {
    pattern: (b, m) => `安物スマートウォッチで後悔した人にこそ教えたい神機、${b} ${m}`,
    category: "pain_point",
    angleLabel: "後悔防止フック",
    targetAudience: "買い替え検討層",
  },
  {
    pattern: (b, m) => `会議中にスマホ出すの失礼？${b} ${m}の手首通知でスマートに確認`,
    category: "pain_point",
    angleLabel: "ビジネスマナー改善",
    targetAudience: "営業職・会社員",
  },
  {
    pattern: (b, m) => `運動サボりがちな人集合！${b} ${m}着けたら勝手にモチベ爆上がり`,
    category: "pain_point",
    angleLabel: "運動習慣化",
    targetAudience: "ダイエッター・運動初心者",
  },
  {
    pattern: (b, m) => `「朝起きても疲れが取れない…」${b} ${m}の睡眠計測で原因が判明した`,
    category: "pain_point",
    angleLabel: "睡眠の質改善",
    targetAudience: "睡眠不足に悩む社会人",
  },
  {
    pattern: (b, m) => `手首に話しかけるだけで秒回答？${b} ${m}のChatGPTが想像の5倍便利`,
    category: "pain_point",
    angleLabel: "音声AI革命",
    targetAudience: "タイパ重視層",
  },
  {
    pattern: (b, m) => `1万円以下でこの高級感はチート！${b} ${m}が他社を圧倒する理由`,
    category: "pain_point",
    angleLabel: "圧倒的高見え",
    targetAudience: "20〜40代男性",
  },

  // 2. 効率＆ChatGPT AI音声型 (Efficiency & AI Power)
  {
    pattern: (b, m) => `手首にChatGPT搭載！${b} ${m}に話しかけるだけで仕事も学習も爆速化`,
    category: "ai_power",
    angleLabel: "ChatGPT音声連携",
    targetAudience: "ビジネスマン・資格勉強中",
  },
  {
    pattern: (b, m) => `声で文字盤をAI自動生成？${b} ${m}のカスタム機能が楽しすぎる`,
    category: "ai_power",
    angleLabel: "AI文字盤生成",
    targetAudience: "ガジェット好き・若者",
  },
  {
    pattern: (b, m) => `スマホ開くのすら面倒な時は${b} ${m}の手首AIに聞くのが最短ルート`,
    category: "ai_power",
    angleLabel: "即時AI検索",
    targetAudience: "タイパ・効率重視派",
  },
  {
    pattern: (b, m) => `英語の勉強計画も天気も秒で回答！${b} ${m}が腕にいる専属アシスタント`,
    category: "ai_power",
    angleLabel: "腕上のAI相棒",
    targetAudience: "学生・自己研鑽層",
  },
  {
    pattern: (b, m) => `文字入力ゼロ！${b} ${m}の音声対話型AIで毎日の検索がラクすぎた`,
    category: "ai_power",
    angleLabel: "対話型アシスタント",
    targetAudience: "全世代のスマートウォッチユーザー",
  },
  {
    pattern: (b, m) => `調べる前に手首に聞く時代！${b} ${m}が実現する次世代の生活スタイル`,
    category: "ai_power",
    angleLabel: "スマートライフ",
    targetAudience: "トレンドに敏感な層",
  },
  {
    pattern: (b, m) => `LINEもメールも腕で一括管理！${b} ${m}で重要連絡の見落としゼロへ`,
    category: "efficiency",
    angleLabel: "通知一括管理",
    targetAudience: "連絡が多い社会人",
  },
  {
    pattern: (b, m) => `電話が鳴ってもスマホ不要！${b} ${m}のBluetooth通話が超クリア`,
    category: "efficiency",
    angleLabel: "Bluetooth通話",
    targetAudience: "運転手・アクティブワーカー",
  },
  {
    pattern: (b, m) => `下のボタンを1プッシュで即機能起動！${b} ${m}のショートカットが便利すぎ`,
    category: "efficiency",
    angleLabel: "自由設定ボタン",
    targetAudience: "効率化マニア",
  },

  // 3. ハードウェア＆極薄洗練デザイン型 (Gadget / Sleek Design / AMOLED)
  {
    pattern: (b, m) => `厚さわずか9.8mm！洗練シルバーの${b} ${m}がスーツに映えすぎる`,
    category: "gadget",
    angleLabel: "9.8mm極薄デザイン",
    targetAudience: "スーツ通勤の社会人",
  },
  {
    pattern: (b, m) => `金属腕時計派も唸る高級感！${b} ${m}の洗練されたデザイン美`,
    category: "gadget",
    angleLabel: "洗練メタルボディ",
    targetAudience: "時計好き・ファッション層",
  },
  {
    pattern: (b, m) => `たったの32.3g！アジア人の手首に神フィットする${b} ${m}第3世代`,
    category: "gadget",
    angleLabel: "アジア人手首フィット",
    targetAudience: "装着感重視派",
  },
  {
    pattern: (b, m) => `1400nitの高輝度AMOLEDディスプレイ！${b} ${m}は直射日光でも超見やすい`,
    category: "gadget",
    angleLabel: "AMOLED高輝度",
    targetAudience: "アウトドア・外回り営業",
  },
  {
    pattern: (b, m) => `461PPIの超美麗Retina級画面！${b} ${m}の文字盤がもはや本物の高級時計`,
    category: "gadget",
    angleLabel: "超美麗Retina画面",
    targetAudience: "画質・ディテール重視層",
  },
  {
    pattern: (b, m) => `24時間着けっぱなしでもストレスゼロ！${b} ${m}の軽さが異次元`,
    category: "gadget",
    angleLabel: "24hストレスフリー",
    targetAudience: "就寝時も着けたい人",
  },
  {
    pattern: (b, m) => `愛猫の写真もAI生成も文字盤に！${b} ${m}で毎日手首を着せ替え`,
    category: "gadget",
    angleLabel: "自由自在文字盤",
    targetAudience: "ペット飼育者・若者",
  },

  // 4. 健康管理＆睡眠追跡型 (Health / Sleep / Health Manager)
  {
    pattern: (b, m) => `昼寝やデスクのひと息まで記録！${b} ${m}の睡眠管理がガチで精密`,
    category: "spec_power",
    angleLabel: "仮眠・昼寝追跡",
    targetAudience: "睡眠改善したい人",
  },
  {
    pattern: (b, m) => `24時間、心拍数と血中酸素を自動モニタリング！健康のお守りは${b} ${m}`,
    category: "spec_power",
    angleLabel: "24hバイタル測定",
    targetAudience: "健康意識の高い社会人・シニア",
  },
  {
    pattern: (b, m) => `ストレス値が見える化される！${b} ${m}の呼吸トレーニングで即リフレッシュ`,
    category: "spec_power",
    angleLabel: "ストレス＆呼吸管理",
    targetAudience: "プレッシャーが多いビジネスマン",
  },
  {
    pattern: (b, m) => `浅い眠り・深い眠り・レム睡眠を完全可視化！${b} ${m}で最高の朝を迎える`,
    category: "spec_power",
    angleLabel: "睡眠スコア分析",
    targetAudience: "朝起きるのが苦手な人",
  },
  {
    pattern: (b, m) => `大人の体調管理は手首から！${b} ${m}が毎日の健康スコアをフルサポート`,
    category: "spec_power",
    angleLabel: "大人の健康管理",
    targetAudience: "30〜50代健康志向層",
  },

  // 5. バッテリー＆急速充電＆スポーツ・防水型 (Battery & Sports)
  {
    pattern: (b, m) => `出勤前の30分で55%充電！${b} ${m}の急速充電が忙しい朝を救う`,
    category: "spec_power",
    angleLabel: "30分急速充電",
    targetAudience: "忙しい朝を過ごす人",
  },
  {
    pattern: (b, m) => `通常使用で8〜10日、待機21日！${b} ${m}で充電の呪縛から解放されよう`,
    category: "spec_power",
    angleLabel: "ロングバッテリー",
    targetAudience: "旅行・出張が多い人",
  },
  {
    pattern: (b, m) => `150種以上のスポーツモード搭載！${b} ${m}でランニングも筋トレも記録`,
    category: "spec_power",
    angleLabel: "150+スポーツモード",
    targetAudience: "ランナー・ジム通い",
  },
  {
    pattern: (b, m) => `手洗い・水濡れも完全安心！3ATM防水仕様の${b} ${m}が普段使いに最強`,
    category: "spec_power",
    angleLabel: "3ATM日常防水",
    targetAudience: "アクティブ派・主婦主夫",
  },
  {
    pattern: (b, m) => `GPS連動＆緊急時SOS対応！運動中も安心な${b} ${m}のアクティブサポート`,
    category: "spec_power",
    angleLabel: "GPS＆緊急SOS",
    targetAudience: "登山・アウトドア愛好家",
  },

  // 6. 秘密・裏技・暴露型 (Secret Hack / Viral Shock)
  {
    pattern: (b, m) => `【暴露】仕事ができる男性がこっそり身につけてる${b} ${m}の正体`,
    category: "secret_hack",
    angleLabel: "デキる男の秘密",
    targetAudience: "キャリアアップ志向層",
  },
  {
    pattern: (b, m) => `「それどこの時計？」と聞かれまくる${b} ${m}、実は1万円以下でした`,
    category: "secret_hack",
    angleLabel: "高見え自慢フック",
    targetAudience: "センスを褒められたい人",
  },
  {
    pattern: (b, m) => `Amazonで時計探してる人ちょっと待って！${b} ${m}が完全にバグってる`,
    category: "secret_hack",
    angleLabel: "買い急ぎストップ",
    targetAudience: "ECショッピング層",
  },
  {
    pattern: (b, m) => `社内トップ営業の腕に光るシルバーの時計…実は${b} ${m}だった件`,
    category: "secret_hack",
    angleLabel: "営業トップの愛用品",
    targetAudience: "営業職・若手社員",
  },
  {
    pattern: (b, m) => `【神アイテム】2026年買って人生変わったスマートウォッチNo.1は${b} ${m}`,
    category: "secret_hack",
    angleLabel: "ベストバイ推薦",
    targetAudience: "トレンド好き",
  },

  // 7. 疑問・問いかけ型 (Question / Engagement)
  {
    pattern: (b, m) => `時計にChatGPT付いてたら何聞く？${b} ${m}が想像以上に賢すぎた`,
    category: "question",
    angleLabel: "機能問いかけ",
    targetAudience: "コメント欄巻き込み",
  },
  {
    pattern: (b, m) => `これ1万円以下って信じられる？${b} ${m}の見た目が完全に高級メタル時計`,
    category: "question",
    angleLabel: "価格当てクイズ",
    targetAudience: "全TikTok視聴者",
  },
  {
    pattern: (b, m) => `スマートウォッチ毎日充電する派？${b} ${m}なら週1回でOKだけどどう？`,
    category: "question",
    angleLabel: "充電頻度議論",
    targetAudience: "ガジェットユーザー",
  },
  {
    pattern: (b, m) => `自分の睡眠スコア知ってる？${b} ${m}を着けて寝たら衝撃の事実が発覚`,
    category: "question",
    angleLabel: "睡眠スコア興味づけ",
    targetAudience: "ヘルスケア関心層",
  },
  {
    pattern: (b, m) => `手首に話しかけるだけで文字盤変わるの凄くない？${b} ${m}のAI機能`,
    category: "question",
    angleLabel: "AI文字盤リアクション",
    targetAudience: "テクノロジー好き",
  },
];

// Contextual permutations to produce infinite variation
const AUDIENCES = [
  "ビジネスパーソン", "営業職", "新社会人", "デスクワーカー", "筋トレ・ランナー",
  "睡眠に悩む人", "Apple Watch高すぎると感じる人", "20〜40代男性", "タイパ重視層",
  "ガジェット好き", "就活生", "健康診断が気になる人", "出張が多い会社員", "学生"
];

const HOOK_PREFIXES = [
  "【2026年最新】", "【コスパ神】", "【驚愕】", "【正直レビュー】", "【これヤバい】",
  "【即買い推奨】", "【手首革命】", "【暴露】", "【1万円以下の奇跡】", "【次世代AI】",
  "【仕事術】", "【買わないと損】", "【睡眠改善】", "【洗練シルバー】", "【超軽量】"
];

const HOOK_SUFFIXES = [
  "がガチで神機すぎる！", "のコスパが完全に崩壊してる件", "で生活の質が爆上がりした！",
  "を手放せない理由がこれ", "の実力が想像の10倍凄かった", "がマジで買い一択な理由",
  "で日々のタイパが劇的に改善した", "は全社会人が持っておくべきアイテム",
  "の高級感が半端じゃない", "のバッテリー持ちがチート級"
];

// Deterministic but highly random seed generator for QS40
export function generateQs40AlgorithmicTitles(
  category: AngleCategory = "all_mixed",
  customKeyword?: string,
  customTags?: string
): GeneratedTitle[] {
  const brand = "FOSMET";
  const model = "QS40";
  const activeTags = (customTags && customTags.trim()) ? customTags.trim() : QS40_FIXED_TAGS;
  const results: GeneratedTitle[] = [];
  const seenHooks = new Set<string>();

  // Filter templates
  let pool = QS40_HOOK_TEMPLATES.filter(
    (t) => category === "all_mixed" || t.category === category
  );
  if (pool.length === 0) pool = QS40_HOOK_TEMPLATES;

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
    if (styleRoll < 0.25 && !baseHook.startsWith("【")) {
      const prefix = HOOK_PREFIXES[Math.floor(Math.random() * HOOK_PREFIXES.length)];
      baseHook = `${prefix}${baseHook}`;
    } else if (styleRoll > 0.75 && baseHook.length < 32 && !baseHook.endsWith("！") && !baseHook.endsWith("？")) {
      const suffix = HOOK_SUFFIXES[Math.floor(Math.random() * HOOK_SUFFIXES.length)];
      baseHook = `${baseHook}${suffix}`;
    }

    if (customKeyword && customKeyword.trim() && !baseHook.includes(customKeyword)) {
      if (Math.random() > 0.4) {
        baseHook = `【${customKeyword.trim()}】${baseHook}`;
      }
    }

    // Ensure FOSMET and QS40 presence
    if (!baseHook.includes(brand) || !baseHook.includes(model)) {
      baseHook = `${brand} ${model}｜${baseHook}`;
    }

    // Uniqueness check
    if (seenHooks.has(baseHook)) continue;
    seenHooks.add(baseHook);

    const fullTitle = `${baseHook} ${activeTags}`;
    const audience = tpl.targetAudience || AUDIENCES[Math.floor(Math.random() * AUDIENCES.length)];

    results.push({
      id: `qs40-algo-${Date.now()}-${results.length + 1}-${Math.random().toString(36).substr(2, 4)}`,
      productId: "qs40",
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
