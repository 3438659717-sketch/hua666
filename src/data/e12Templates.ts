import { AngleCategory, GeneratedTitle } from "../types";

export const E12_FIXED_TAGS = "#FOSMET#E12#Bluetoothヘッドホン#デイリーレコード#AIイヤホン";

export interface E12HookTemplate {
  pattern: (brand: string, model: string) => string;
  category: AngleCategory;
  angleLabel: string;
  targetAudience: string;
}

export const E12_HOOK_TEMPLATES: E12HookTemplate[] = [
  // 1. pain_point: 痛点反转・告别手持拍摄与传统耳机束缚
  {
    pattern: (b, m) => `【衝撃】まだスマホ構えてVlog撮ってるの？${b} ${m}なら耳につけるだけで手ぶら日常動画が完成`,
    category: "pain_point",
    angleLabel: "撮影痛点・脱スマホ",
    targetAudience: "Vlog初心者・日常記録派",
  },
  {
    pattern: (b, m) => `耳を塞ぐイヤホンの圧迫感とサヨナラ！${b} ${m}は1日中ゼロプレッシャーなオープンイヤー革命`,
    category: "pain_point",
    angleLabel: "オープンイヤー・解放感",
    targetAudience: "テレワーク・長時間着用派",
  },
  {
    pattern: (b, m) => `「スマホを取り出したら決定的瞬間を逃した…」${b} ${m}なら耳元ワンタップで即1080P撮影`,
    category: "pain_point",
    angleLabel: "シャッターチャンス即時性",
    targetAudience: "ペット愛好家・アクティブ派",
  },
  {
    pattern: (b, m) => `周りの音が聞こえないイヤホンはもう危険！${b} ${m}で安全ランニング＆迫力16mm高音質を両立`,
    category: "pain_point",
    angleLabel: "安全安心・オープン型",
    targetAudience: "ランナー・サイクリスト",
  },
  {
    pattern: (b, m) => `歩きスマホで動画撮るの危なくない？${b} ${m}なら完全ハンズフリーで安全にデイリーレコード`,
    category: "pain_point",
    angleLabel: "歩きスマホ解消",
    targetAudience: "散歩・旅行好き",
  },
  {
    pattern: (b, m) => `「これ何？」って検索する手間ゼロ！${b} ${m}のAIカメラに聞くだけで瞬間回答してくれる時代`,
    category: "pain_point",
    angleLabel: "検索の手間ゼロ化",
    targetAudience: "好奇心旺盛なガジェット派",
  },
  {
    pattern: (b, m) => `重いアクションカメラはもう要らない！${b} ${m}なら超軽量イヤホンだけでPOV一人称動画が撮れる`,
    category: "pain_point",
    angleLabel: "軽装化・アクションカメラ代替",
    targetAudience: "旅行者・アウトドア派",
  },
  {
    pattern: (b, m) => `海外旅行の言葉の壁で困ったことない？${b} ${m}のリアルタイム同時通訳が神レベルで助かる`,
    category: "pain_point",
    angleLabel: "言語の壁解消",
    targetAudience: "海外旅行・語学学習者",
  },

  // 2. efficiency: 音声操作・日常Vlogデイリーレコード・タイパ
  {
    pattern: (b, m) => `「Hi Luma、写真撮って」の一言でパシャリ！${b} ${m}の音声AIカメラで日常が映画になる`,
    category: "efficiency",
    angleLabel: "音声コマンド・超タイパ",
    targetAudience: "時短派・Vlogger",
  },
  {
    pattern: (b, m) => `料理中・作業中も手が汚れたままでOK！${b} ${m}なら完全ハンズフリーでメイキング動画が撮れる`,
    category: "efficiency",
    angleLabel: "両手フリー・作業中撮影",
    targetAudience: "料理・DIY・ハンドメイド作家",
  },
  {
    pattern: (b, m) => `愛犬の散歩も子供との遊びも両手が空く！${b} ${m}で第一人称目線の思い出を逃さず残す`,
    category: "efficiency",
    angleLabel: "ファミリー・ペットPOV",
    targetAudience: "パパママ・ペット飼い主",
  },
  {
    pattern: (b, m) => `ボタン2回押しで即1080PフルHD録画開始！${b} ${m}が毎日のデイリーレコードを劇的に変える`,
    category: "efficiency",
    angleLabel: "秒速録画・直感操作",
    targetAudience: "通勤・通学・散歩クリエイター",
  },
  {
    pattern: (b, m) => `会議のメモも耳元3回押しで即録音！${b} ${m}はビジネスでも超有能なマルチAIデバイス`,
    category: "efficiency",
    angleLabel: "ビジネス会議メモ",
    targetAudience: "ビジネスパーソン",
  },
  {
    pattern: (b, m) => `自転車乗りながら見た絶景を一瞬で記録！${b} ${m}なら視界のままのリアルな動画が撮れる`,
    category: "efficiency",
    angleLabel: "サイクリング・ツーリング",
    targetAudience: "チャリ通・ライダー",
  },
  {
    pattern: (b, m) => `Wi-Fi高速データ転送でスマホに即共有！${b} ${m}の撮影データ同期がサクサクすぎて感動`,
    category: "efficiency",
    angleLabel: "即時スマホ同期",
    targetAudience: "SNS投稿頻出ユーザー",
  },
  {
    pattern: (b, m) => `スワイプ操作で音量も曲送りも自由自在！${b} ${m}のタッチFPC操作が快適すぎる件`,
    category: "efficiency",
    angleLabel: "快適ジェスチャー操作",
    targetAudience: "音楽リスナー",
  },

  // 3. gadget: 16mm大口径HiFi ✕ 800万画素SONY・ハードウェア美学
  {
    pattern: (b, m) => `【近未来】イヤホンにカメラがついた！${b} ${m}の16mm大迫力HiFiサウンド×SONYセンサーが凄すぎる`,
    category: "gadget",
    angleLabel: "近未来ハードウェア",
    targetAudience: "最新ガジェット好き",
  },
  {
    pattern: (b, m) => `大口径16mmスピーカーの重低音に鳥肌！${b} ${m}はオープンイヤーなのに音質が異次元レベル`,
    category: "gadget",
    angleLabel: "16mm HiFi極上サウンド",
    targetAudience: "音質重視オーディオファン",
  },
  {
    pattern: (b, m) => `SONY IMX219 800万画素センサー搭載！${b} ${m}の映像クオリティがイヤホンとは思えない`,
    category: "gadget",
    angleLabel: "SONY製800万画素カメラ",
    targetAudience: "カメラ・映像好き",
  },
  {
    pattern: (b, m) => `プライバシーランプ＆撮影LED搭載で安心！${b} ${m}の洗練されたスマートデザインが最高`,
    category: "gadget",
    angleLabel: "プライバシー配慮設計",
    targetAudience: "安全・エチケット重視派",
  },
  {
    pattern: (b, m) => `内蔵8GBストレージ＋電子手ブレ補正！${b} ${m}のアクション性能が本格的すぎる`,
    category: "gadget",
    angleLabel: "8GB内蔵・手ブレ補正",
    targetAudience: "スポーツ・アクティブ層",
  },
  {
    pattern: (b, m) => `アレイ3マイク搭載で風切り音もカット！${b} ${m}のクリアな通話＆音声収録が超優秀`,
    category: "gadget",
    angleLabel: "3マイク陣列・クリア音声",
    targetAudience: "通話・Web会議ユーザー",
  },
  {
    pattern: (b, m) => `マグネット2PIN吸着充電が気持ちいい！${b} ${m}の質感とビルドクオリティに惚れた`,
    category: "gadget",
    angleLabel: "マグネット充電・高質感",
    targetAudience: "デザイン重視ユーザー",
  },
  {
    pattern: (b, m) => `耳にかけるだけで自動装着検出！${b} ${m}のスマートテクノロジーが日常をアップデート`,
    category: "gadget",
    angleLabel: "装着検出・シームレス体験",
    targetAudience: "スマートライフ愛好家",
  },

  // 4. ai_power: OpenAI搭載・音声対話・AI拍照识物・リアルタイム同時通訳
  {
    pattern: (b, m) => `「これ何？」と聞くだけでAIが瞬時に教えてくれる！${b} ${m}のOpenAI搭載カメラが賢すぎる`,
    category: "ai_power",
    angleLabel: "AI写真識物・即時質問",
    targetAudience: "知的好奇心・旅行者",
  },
  {
    pattern: (b, m) => `外国人とスムーズに対話できる奇跡！${b} ${m}の多言語リアルタイム同時通訳が異次元の便利さ`,
    category: "ai_power",
    angleLabel: "リアルタイム同時通訳",
    targetAudience: "インバウンド・海外出張派",
  },
  {
    pattern: (b, m) => `耳元に専属AIアシスタント常駐！${b} ${m}に「Hi Luma、天気は？」と話しかける毎日が快適`,
    category: "ai_power",
    angleLabel: "音声AIアシスタント",
    targetAudience: "スマート家電・AI愛好家",
  },
  {
    pattern: (b, m) => `OpenAIの大規模モデルと連携！${b} ${m}の会話翻訳と会議メモ機能が仕事のチート級武器`,
    category: "ai_power",
    angleLabel: "OpenAI連携・仕事効率化",
    targetAudience: "ビジネスマン・フリーランス",
  },
  {
    pattern: (b, m) => `散歩中に見つけた花や建築をAIが即解説！${b} ${m}で毎日の散歩が知覚拡張アドベンチャーに`,
    category: "ai_power",
    angleLabel: "街歩き・視覚拡張AI",
    targetAudience: "散歩・カルチャー好き",
  },
  {
    pattern: (b, m) => `声だけで写真撮影・時間確認・AI相談まで全自動！${b} ${m}が未来のライフスタイルを先取り`,
    category: "ai_power",
    angleLabel: "完全音声ライフスタイル",
    targetAudience: "アーリーアダプター",
  },
  {
    pattern: (b, m) => `美術館や旅行先で大活躍！${b} ${m}のAI画像認識がまるで専属のプライベートガイド`,
    category: "ai_power",
    angleLabel: "専属プライベートガイド",
    targetAudience: "旅行・アート愛好家",
  },

  // 5. secret_hack: 第一人称Vlog・クリエイター裏技・神コスパ
  {
    pattern: (b, m) => `【裏技】TikTokerがこっそり愛用中！${b} ${m}で撮る第一人称POV動画がバズり散らかす理由`,
    category: "secret_hack",
    angleLabel: "バズるPOV動画裏技",
    targetAudience: "ショート動画クリエイター",
  },
  {
    pattern: (b, m) => `カフェでの作業風景も自然体で残せる！${b} ${m}の目立たないスマートデザインが最高`,
    category: "secret_hack",
    angleLabel: "自然体ルーティン撮影",
    targetAudience: "ライフスタイル発信者",
  },
  {
    pattern: (b, m) => `高価なスマートグラスより圧倒的に使いやすい！${b} ${m}がクリエイターの間で話題沸騰中`,
    category: "secret_hack",
    angleLabel: "スマートグラス比較優位",
    targetAudience: "ガジェットインフルエンサー",
  },
  {
    pattern: (b, m) => `ソロキャンプの設営シーンも全部撮れる！${b} ${m}なら両手を使ってリアルな作業ログが完成`,
    category: "secret_hack",
    angleLabel: "キャンプ・アウトドア記録",
    targetAudience: "キャンパー・釣り人",
  },
  {
    pattern: (b, m) => `ジムのトレーニングフォームを客観的にチェック！${b} ${m}の視点動画が筋トレ効率を爆上げ`,
    category: "secret_hack",
    angleLabel: "筋トレ・フォーム確認",
    targetAudience: "トレーニー・フィットネス層",
  },
  {
    pattern: (b, m) => `「どこで買ったの？」って100回聞かれた！${b} ${m}を着けて歩くだけで注目の的になる神ギア`,
    category: "secret_hack",
    angleLabel: "周囲の注目・自慢ギア",
    targetAudience: "トレンドセッター",
  },

  // 6. question: 視聴者共鳴・コメント欄誘導・ディベート
  {
    pattern: (b, m) => `【質問】イヤホンにカメラついてる時代、知ってた？${b} ${m}の便利さ知ったら普通のイヤホンに戻れない`,
    category: "question",
    angleLabel: "新時代認知・コメント誘導",
    targetAudience: "全TikTok視聴者",
  },
  {
    pattern: (b, m) => `16mm極上音質と800万画素カメラ、どっちが欲しい？${b} ${m}は両方妥協なしで入ってるらしい`,
    category: "question",
    angleLabel: "スペック二択・議論喚起",
    targetAudience: "オーディオ・カメラ好き",
  },
  {
    pattern: (b, m) => `日常Vlog撮るなら「スマホ手持ち」派？それとも「${b} ${m}手ぶら」派？みんなの意見教えて！`,
    category: "question",
    angleLabel: "撮影スタイル二者択一",
    targetAudience: "動画撮影ユーザー",
  },
  {
    pattern: (b, m) => `「Hi Luma」って耳元で話しかけるだけでAIが何でも教えてくれるの凄くない？${b} ${m}使ってみたい人`,
    category: "question",
    angleLabel: "AI体験への憧れ喚起",
    targetAudience: "AIツール関心層",
  },
  {
    pattern: (b, m) => `旅行に持っていくならどっち？重い一眼レフ vs 耳につけるだけの${b} ${m}？`,
    category: "question",
    angleLabel: "旅行ギア比較",
    targetAudience: "旅行好き",
  },
  {
    pattern: (b, m) => `耳を塞がないのにこの迫力重低音はヤバい！${b} ${m}の音漏れの少なさに驚いた人集合`,
    category: "question",
    angleLabel: "オープン型音質共感",
    targetAudience: "オープンイヤー愛用者",
  },

  // 7. spec_power: SONY IMX219・1080P・16mmスピーカー・8GB・3マイク
  {
    pattern: (b, m) => `【スペック化け物】SONY IMX219 800万画素×16mm大口径HiFi！${b} ${m}の完成度が異次元すぎる`,
    category: "spec_power",
    angleLabel: "モンスター級スペック",
    targetAudience: "スペック重視ガジェット派",
  },
  {
    pattern: (b, m) => `1080P 30fps高画質＆手ブレ補正！${b} ${m}の滑らかな動画クオリティにプロも納得`,
    category: "spec_power",
    angleLabel: "1080P手ブレ補正動画",
    targetAudience: "映像クリエイター",
  },
  {
    pattern: (b, m) => `3マイクアレイでクリア通話＆8GB大容量ストレージ！${b} ${m}の隙のないハード構成が凄まじい`,
    category: "spec_power",
    angleLabel: "3マイク＆8GBストレージ",
    targetAudience: "ヘビーユーザー",
  },
  {
    pattern: (b, m) => `物理ボタン1押しで写真・2押しで動画・3押しで録音！${b} ${m}の直感コントロールが神仕様`,
    category: "spec_power",
    angleLabel: "直感物理ボタン操作",
    targetAudience: "実用性重視ユーザー",
  },
  {
    pattern: (b, m) => `220mAhバッテリー＆OTAアップデート対応！${b} ${m}は進化し続ける次世代AIスマートヘッドホン`,
    category: "spec_power",
    angleLabel: "バッテリー＆進化型OTA",
    targetAudience: "長期愛用志向層",
  },
];

// Algorithmic generator for E12
export function generateE12AlgorithmicTitles(
  category: AngleCategory = "all_mixed",
  customKeyword = "",
  customTags?: string
): GeneratedTitle[] {
  const brand = "FOSMET";
  const model = "E12";
  const activeTags = (customTags && customTags.trim()) ? customTags.trim() : E12_FIXED_TAGS;

  let eligible = E12_HOOK_TEMPLATES;
  if (category !== "all_mixed") {
    eligible = E12_HOOK_TEMPLATES.filter((t) => t.category === category);
    if (eligible.length === 0) {
      eligible = E12_HOOK_TEMPLATES;
    }
  }

  const results: GeneratedTitle[] = [];
  const seenHooks = new Set<string>();

  // Helper to append keyword cleanly if provided
  const injectKeyword = (hook: string): string => {
    if (!customKeyword || !customKeyword.trim()) return hook;
    const kw = customKeyword.trim();
    if (hook.includes(kw)) return hook;
    return `${hook}（${kw}）`;
  };

  // Base generator pool
  const pool = [...eligible].sort(() => Math.random() - 0.5);

  let poolIdx = 0;
  while (results.length < 50) {
    const template = pool[poolIdx % pool.length];
    let baseHook = template.pattern(brand, model);

    // Variation decorators for ensuring uniqueness
    const round = Math.floor(poolIdx / pool.length);
    if (round === 1) {
      const prefixes = ["【必見】", "【話題】", "【注目】", "【本音レビュー】", "【最新作】"];
      const prefix = prefixes[poolIdx % prefixes.length];
      if (!baseHook.startsWith("【")) {
        baseHook = `${prefix}${baseHook}`;
      }
    } else if (round === 2) {
      const suffixes = ["！これは買い", "！試す価値あり", "！正直感動した", "！マジでおすすめ"];
      const suffix = suffixes[poolIdx % suffixes.length];
      baseHook = `${baseHook}${suffix}`;
    } else if (round >= 3) {
      baseHook = `【保存版】${baseHook} #${results.length + 1}`;
    }

    const modifiedHook = injectKeyword(baseHook);
    if (!seenHooks.has(modifiedHook) || results.length < 50) {
      seenHooks.add(modifiedHook);
      const fullTitle = `${modifiedHook} ${activeTags}`;
      results.push({
        id: `algo-e12-ja-${Date.now()}-${results.length + 1}`,
        productId: "e12",
        title: fullTitle,
        hook: modifiedHook,
        tags: activeTags,
        angle: template.angleLabel,
        angleCategory: template.category,
        targetAudience: template.targetAudience,
        charCount: fullTitle.length,
        hookCharCount: modifiedHook.length,
        language: "ja",
        isFavorite: false,
        createdAt: new Date().toISOString(),
      });
    }

    poolIdx++;
  }

  return results.slice(0, 50);
}
