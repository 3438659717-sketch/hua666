import { AngleCategory, GeneratedTitle } from "../types";

export const E09_FIXED_TAGS = "#FOSMET #E09 #スマートグラス #服装 #デイリーレコード";

export interface E09HookTemplate {
  pattern: (brand: string, model: string) => string;
  category: AngleCategory;
  angleLabel: string;
  targetAudience: string;
}

export const E09_HOOK_TEMPLATES: E09HookTemplate[] = [
  // 1. pain_point: 痛点反转・告别手持手机录像、笨重GoPro及入耳式耳机疼痛
  {
    pattern: (b, m) => `【衝撃】まだスマホ片手に動画撮ってるの？${b} ${m}なら目線そのまま完全手ぶらで1080P撮影`,
    category: "pain_point",
    angleLabel: "手持ち撮影の不便解消",
    targetAudience: "Vlogger・旅行・日常記録派",
  },
  {
    pattern: (b, m) => `「旅行や散歩でスマホ構えるの恥ずかしい…」${b} ${m}は普通のメガネにしか見えないのに800万画素カメラ内蔵`,
    category: "pain_point",
    angleLabel: "自然な撮影・恥ずかしさゼロ",
    targetAudience: "街歩き・カフェ巡り・ソロ活",
  },
  {
    pattern: (b, m) => `重いアクションカメラで首や頭が疲れる人へ！${b} ${m}はわずか40gで1日中かけてもノンストレス`,
    category: "pain_point",
    angleLabel: "40g極軽量・疲労ゼロ",
    targetAudience: "サイクリング・アウトドア・散歩派",
  },
  {
    pattern: (b, m) => `イヤホンの耳詰まりや痛みにサヨナラ！${b} ${m}のオープンイヤーデュアルスピーカーなら耳解放で超快適`,
    category: "pain_point",
    angleLabel: "耳の圧迫感・難聴予防",
    targetAudience: "テレワーク・長時間着用派",
  },
  {
    pattern: (b, m) => `子供やペットの決定的瞬間を撮り逃したことない？${b} ${m}なら物理ボタン1押しで0.5秒即撮影`,
    category: "pain_point",
    angleLabel: "シャッターチャンス即対応",
    targetAudience: "子育て世代・ペット愛好家",
  },
  {
    pattern: (b, m) => `長時間のPC作業で目がシパシパする？${b} ${m}は透明ブルーライトカットレンズ標準搭載で仕事用にも最適`,
    category: "pain_point",
    angleLabel: "ブルーライト対策・目の疲労軽減",
    targetAudience: "デスクワーカー・学生・プログラマー",
  },
  {
    pattern: (b, m) => `料理やDIY中に両手が塞がって撮れない悩み解消！${b} ${m}なら第一人称POVで手元を完璧に10分録画`,
    category: "pain_point",
    angleLabel: "両手作業・POV手元撮影",
    targetAudience: "料理系クリエイター・DIY派",
  },
  {
    pattern: (b, m) => `歩きスマホで動画撮影してヒヤッとした経験ある？${b} ${m}なら前を向いたまま安全にVlog記録完了`,
    category: "pain_point",
    angleLabel: "歩きスマホ防止・安全性",
    targetAudience: "通勤通学・街歩き派",
  },

  // 2. efficiency: タイパ・物理ボタン1発操作・完全手ぶら効率化
  {
    pattern: (b, m) => `物理ボタンをカチッと押すだけ！${b} ${m}の最大10分連続録画が日常のVlog撮影を10倍ラクにする`,
    category: "efficiency",
    angleLabel: "物理ボタン・1発録画",
    targetAudience: "タイパ重視・クリエイター",
  },
  {
    pattern: (b, m) => `テンプルをスワイプするだけで音量調整完了！${b} ${m}の直感スマート操作が未来的で病みつきになる`,
    category: "efficiency",
    angleLabel: "スワイプ調音・直感操作",
    targetAudience: "ガジェット好き・スマート派",
  },
  {
    pattern: (b, m) => `仕事中もメガネを4回タップでAI音声アシスタント起動！${b} ${m}で調べ物もスケジュール確認も爆速`,
    category: "efficiency",
    angleLabel: "AI対話・4タップ即起動",
    targetAudience: "ビジネスパーソン・効率化マニア",
  },
  {
    pattern: (b, m) => `電話が鳴ってもスマホを取り出さず耳元タップで即通話！${b} ${m}のアレイマイクが高音質通話を実現`,
    category: "efficiency",
    angleLabel: "即時ハンズフリー通話",
    targetAudience: "外回り営業・ドライバー",
  },
  {
    pattern: (b, m) => `3回押しでボイスレコーダーに早変わり！${b} ${m}があれば大事な会議や講義も手ぶらで高音質録音`,
    category: "efficiency",
    angleLabel: "3回押し即時録音・議事録",
    targetAudience: "学生・ビジネスパーソン",
  },
  {
    pattern: (b, m) => `料理・手芸・プラモデルの作業動画が秒で作れる！${b} ${m}のPOVカメラが神ツールすぎると話題`,
    category: "efficiency",
    angleLabel: "POV手元実況・時短制作",
    targetAudience: "ハンドメイド作家・料理人",
  },

  // 3. gadget: SONY 800万画素 ✕ 40g極軽量 ✕ ハードウェア美学
  {
    pattern: (b, m) => `わずか40gの伊達メガネにSONY製800万画素カメラ内蔵！？${b} ${m}の変態スペックがヤバすぎる`,
    category: "gadget",
    angleLabel: "SONY 800万画素 ✕ 40g",
    targetAudience: "ガジェットオタク・テック好き",
  },
  {
    pattern: (b, m) => `PC+ABS高耐久フレーム ✕ 透明ブルーライトカット！${b} ${m}は普段使いできる次世代スマートグラスの完成形`,
    category: "gadget",
    angleLabel: "PC+ABSフレーム・防ブルーライト",
    targetAudience: "伊達メガネ派・モノ好き",
  },
  {
    pattern: (b, m) => `ソフトウェア電子防振（手ブレ補正）搭載！${b} ${m}なら歩きながらの街中Vlogも滑らか高画質`,
    category: "gadget",
    angleLabel: "電子手ブレ補正・1080P",
    targetAudience: "映像クリエイター・旅行好き",
  },
  {
    pattern: (b, m) => `耳を塞がないデュアルスピーカー搭載！${b} ${m}は音楽を聴きながら会話もできる次世代ギア`,
    category: "gadget",
    angleLabel: "開放型デュアルスピーカー",
    targetAudience: "音楽好き・通勤者",
  },
  {
    pattern: (b, m) => `見た目は極めてシンプルな黒縁メガネ！${b} ${m}に隠された撮影＆録音＆AI機能がスパイ道具並み`,
    category: "gadget",
    angleLabel: "極小ステルス構造・スパイ感",
    targetAudience: "男子・ロマンギア好き",
  },
  {
    pattern: (b, m) => `1回押しで写真、2回で動画、3回で録音！${b} ${m}の独立物理ボタン設計が実用性100点満点`,
    category: "gadget",
    angleLabel: "直感物理ボタン・操作性",
    targetAudience: "実用性重視派",
  },

  // 4. ai_power: AI対話アシスタント・アレイマイク・音声スマートライフ
  {
    pattern: (b, m) => `メガネをトントンと4回タップするだけでAIが起動！${b} ${m}で未来の音声アシスタント体験`,
    category: "ai_power",
    angleLabel: "4タップAI音声起動",
    targetAudience: "AI活用派・最新テック好き",
  },
  {
    pattern: (b, m) => `「これについて教えて」と話しかけるだけ！${b} ${m}とスマホAPP連携で手ぶらAI検索が超快適`,
    category: "ai_power",
    angleLabel: "手ぶらAI会話・即時回答",
    targetAudience: "知的好奇心旺盛・学生",
  },
  {
    pattern: (b, m) => `アレイマイクによる指向性ノイズ低減！${b} ${m}なら風切り音や街中の雑音をカットしてクリア録音`,
    category: "ai_power",
    angleLabel: "アレイマイク・ノイズ低減",
    targetAudience: "屋外録音・通話重視派",
  },
  {
    pattern: (b, m) => `音楽再生・通話・AIアシスタント・撮影がメガネ1本に統合！${b} ${m}が描く究極のウェアラブル生活`,
    category: "ai_power",
    angleLabel: "全能オールインワンAIギア",
    targetAudience: "ミニマリスト・デジタルネイティブ",
  },

  // 5. secret_hack: 服装コーデ・裏技・日常記録・お洒落アイテム
  {
    pattern: (b, m) => `お洒落な人がこっそりかけてる黒縁メガネ、実は${b} ${m}！日常Vlogが簡単に撮れる秘密兵器`,
    category: "secret_hack",
    angleLabel: "お洒落コーデ・隠れVlogギア",
    targetAudience: "ファッション・インフルエンサー",
  },
  {
    pattern: (b, m) => `旅行の思い出を「見たままの景色」で残すチート技！${b} ${m}があれば一眼レフもスマホも不要`,
    category: "secret_hack",
    angleLabel: "旅行チート技・POVメモリー",
    targetAudience: "旅行好き・バックパッカー",
  },
  {
    pattern: (b, m) => `どんな服装にもバチッとハマる極簡デザイン！${b} ${m}で毎日のデイリーコーデをアップデート`,
    category: "secret_hack",
    angleLabel: "服装万能・ミニマル美学",
    targetAudience: "ストリート・きれいめコーデ派",
  },
  {
    pattern: (b, m) => `カフェでの作業風景や散歩コースを映画風に記録！${b} ${m}のPOVアングルがSNSで映えまくる`,
    category: "secret_hack",
    angleLabel: "シネマティックPOV・SNS映え",
    targetAudience: "Instagram/TikTok投稿者",
  },
  {
    pattern: (b, m) => `荷物を限界まで減らしたいミニマリストの最終結論！メガネ・カメラ・イヤホンが${b} ${m}で1つに`,
    category: "secret_hack",
    angleLabel: "3in1ミニマリスト結論",
    targetAudience: "手ぶら派・ミニマリスト",
  },

  // 6. question: 視聴者巻き込み型・コメント欄誘導
  {
    pattern: (b, m) => `普通のメガネに見えて実は動画が撮れるの知ってた？${b} ${m}を街中でかけてみたい？`,
    category: "question",
    angleLabel: "疑問提起・ステルスカメラ",
    targetAudience: "全TikTokユーザー",
  },
  {
    pattern: (b, m) => `【質問】目線そのまま動画が撮れるメガネがあったら何撮りたい？${b} ${m}が便利すぎて驚き`,
    category: "question",
    angleLabel: "撮影用途アンケート",
    targetAudience: "日常Vlog興味層",
  },
  {
    pattern: (b, m) => `40gのメガネにSONYカメラとスピーカー搭載ってヤバくない？${b} ${m}の第一印象を教えて！`,
    category: "question",
    angleLabel: "スペック共感・コメント誘発",
    targetAudience: "ガジェットファン",
  },
  {
    pattern: (b, m) => `スマホで撮る派？それとも${b} ${m}で手ぶらPOV撮影派？みんなの意見をコメント欄で大募集`,
    category: "question",
    angleLabel: "二者択一・議論喚起",
    targetAudience: "スマホユーザー全般",
  },
  {
    pattern: (b, m) => `ブルーライトカットメガネ買い替えるなら${b} ${m}一択？カメラ付きで仕事も趣味も捗る！`,
    category: "question",
    angleLabel: "メガネ買い替え比較",
    targetAudience: "メガネ常用者",
  },

  // 7. spec_power: ハイスペック信頼型 (SONY IMX219・1080P 30fps・40g・10分録画)
  {
    pattern: (b, m) => `SONY IMX219 800万画素センサー ✕ 1080P 30fps！${b} ${m}の解像感と色再現性が圧倒的`,
    category: "spec_power",
    angleLabel: "SONY IMX219 800万画素",
    targetAudience: "画質・スペック重視派",
  },
  {
    pattern: (b, m) => `重さわずか40g ✕ PC+ABS強靭ボディ！${b} ${m}の耐衝撃性と羽のような装着感を体感せよ`,
    category: "spec_power",
    angleLabel: "40g ✕ PC+ABS強靭ボディ",
    targetAudience: "耐久性・軽量性重視派",
  },
  {
    pattern: (b, m) => `最大10分連続ビデオ録画 ✕ 電子手ブレ補正！${b} ${m}が日常のあらゆる瞬間を高画質アーカイブ`,
    category: "spec_power",
    angleLabel: "10分録画 ✕ 電子防振",
    targetAudience: "アーカイブ・記録マニア",
  },
  {
    pattern: (b, m) => `透明ブルーライトカットレンズ標準装備！${b} ${m}ならPC作業中も目を保護しながら通話＆音楽`,
    category: "spec_power",
    angleLabel: "防ブルーライト・PC作業",
    targetAudience: "オフィスワーカー・眼精疲労対策",
  },
  {
    pattern: (b, m) => `デュアルスピーカー ✕ 指向性アレイマイク！${b} ${m}のクリアな音質と通話性能がビジネスに直結`,
    category: "spec_power",
    angleLabel: "デュアルスピーカー・アレイマイク",
    targetAudience: "ビジネス・通話重視",
  },
  {
    pattern: (b, m) => `専用充電ケーブル急速充電 ✕ 長時間バッテリー！${b} ${m}で1日中快適なスマートグラス生活`,
    category: "spec_power",
    angleLabel: "急速充電・安心バッテリー",
    targetAudience: "ヘビーユーザー",
  },

  // Additional varied patterns for richness
  {
    pattern: (b, m) => `愛犬との散歩や子供との公園遊びが一生モノの宝物に！${b} ${m}の目線POV動画がエモすぎる`,
    category: "pain_point",
    angleLabel: "家族・ペットの想い出記録",
    targetAudience: "ファミリー・愛犬家",
  },
  {
    pattern: (b, m) => `キャンプの焚き火やBBQの様子を煙を気にせず手ぶら撮影！${b} ${m}がアウトドアに手放せない`,
    category: "gadget",
    angleLabel: "キャンプ・アウトドアPOV",
    targetAudience: "キャンパー・釣り好き",
  },
  {
    pattern: (b, m) => `バイクやロードバイクのツーリング記録に！${b} ${m}の40g超軽量と風切り音低減が最高`,
    category: "spec_power",
    angleLabel: "ツーリング・サイクリング",
    targetAudience: "ライダー・サイクリスト",
  },
  {
    pattern: (b, m) => `「そのサングラスかっこいいね」と言われたら自慢できる！${b} ${m}の隠れた800万画素カメラ`,
    category: "secret_hack",
    angleLabel: "周囲へのサプライズ・自慢ギア",
    targetAudience: "流行に敏感な若者",
  },
  {
    pattern: (b, m) => `毎日の服装・コーデ紹介動画が一人で撮れる！${b} ${m}の第一人称視点がTikTokで話題沸騰中`,
    category: "efficiency",
    angleLabel: "ファッションVlog・ソロ撮影",
    targetAudience: "OOTD投稿者・アパレル好き",
  },
  {
    pattern: (b, m) => `カフェのラテアートや美味しいスイーツを自然体で記録！${b} ${m}で毎日のデイリーレコードが激変`,
    category: "secret_hack",
    angleLabel: "カフェ巡り・グルメ記録",
    targetAudience: "カフェ好き・女子大生・OL",
  },
  {
    pattern: (b, m) => `会議のメモを取りながら同時に高音質ボイス録音！${b} ${m}で仕事の抜け漏れを完全ゼロへ`,
    category: "efficiency",
    angleLabel: "ビジネス録音・議事録サポート",
    targetAudience: "若手ビジネスマン・幹部",
  },
  {
    pattern: (b, m) => `満員電車でもスマホを出さずに耳元スワイプで音楽切替！${b} ${m}の快適さに戻れなくなる`,
    category: "pain_point",
    angleLabel: "満員電車・スマホ不要操作",
    targetAudience: "都内通勤者・学生",
  },
  {
    pattern: (b, m) => `手先を使うクラフト作業やイラストメイキングに！${b} ${m}の目線そのままの定点動画が神クオリティ`,
    category: "gadget",
    angleLabel: "作業メイキング・手元動画",
    targetAudience: "絵師・クラフト作家",
  },
  {
    pattern: (b, m) => `40g超軽量 ✕ SONY 800万画素 ✕ 10分動画 ✕ AI対話！${b} ${m}はまさに未来を身に纏うスマートグラス`,
    category: "all_mixed",
    angleLabel: "次世代ウェアラブル集大成",
    targetAudience: "最先端ギア好き・全員",
  },
];

const PREFIX_VARIATIONS = [
  "【注目】",
  "【必見】",
  "【神ギア】",
  "【話題】",
  "【検証】",
  "【衝撃】",
  "【朗報】",
  "【未来体験】",
  "【神コスパ】",
  "【暴露】",
];

export function generateE09AlgorithmicTitles(
  category: AngleCategory = "all_mixed",
  customKeyword?: string,
  customTags?: string,
  seed: string = Date.now().toString()
): GeneratedTitle[] {
  const brand = "FOSMET";
  const model = "E09";
  const activeTags = (customTags && customTags.trim()) ? customTags.trim() : E09_FIXED_TAGS;

  let eligible = E09_HOOK_TEMPLATES;
  if (category !== "all_mixed") {
    const filtered = E09_HOOK_TEMPLATES.filter((t) => t.category === category);
    if (filtered.length > 0) {
      eligible = filtered;
    }
  }

  // Shuffle deterministic pool
  const shuffled = [...eligible].sort(() => 0.5 - Math.random());
  const allTemplates = [...E09_HOOK_TEMPLATES].sort(() => 0.5 - Math.random());

  const results: GeneratedTitle[] = [];
  const usedHooks = new Set<string>();

  const makeTitle = (template: E09HookTemplate, index: number): GeneratedTitle => {
    let hook = template.pattern(brand, model);

    // Add prefix to some titles for variety
    if (index % 4 === 1 && !hook.startsWith("【")) {
      const p = PREFIX_VARIATIONS[index % PREFIX_VARIATIONS.length];
      hook = `${p}${hook}`;
    }

    if (customKeyword && customKeyword.trim()) {
      if (index % 5 === 2) {
        hook = `${hook}（${customKeyword.trim()}対応）`;
      } else if (index % 7 === 3) {
        hook = `【${customKeyword.trim()}】${hook}`;
      }
    }

    // Ensure brand and model are present
    if (!hook.includes("FOSMET") || !hook.includes("E09")) {
      hook = `【FOSMET E09】${hook}`;
    }

    const fullTitle = `${hook} ${activeTags}`;

    return {
      id: `e09-gen-${seed}-${index + 1}`,
      productId: "e09",
      title: fullTitle,
      hook,
      tags: activeTags,
      angle: template.angleLabel,
      angleCategory: template.category,
      targetAudience: template.targetAudience,
      charCount: fullTitle.length,
      hookCharCount: hook.length,
      language: "ja",
      isFavorite: false,
      createdAt: new Date().toISOString(),
    };
  };

  let pointer = 0;
  while (results.length < 50) {
    let t: E09HookTemplate;
    if (category === "all_mixed") {
      t = allTemplates[pointer % allTemplates.length];
    } else {
      if (pointer < shuffled.length) {
        t = shuffled[pointer];
      } else {
        t = allTemplates[pointer % allTemplates.length];
      }
    }

    const item = makeTitle(t, results.length);
    if (!usedHooks.has(item.hook)) {
      usedHooks.add(item.hook);
      results.push(item);
    }
    pointer++;

    if (pointer > 300) {
      // Safety fallback to guarantee 50 titles
      const fallbackHook = `【爆款${results.length + 1}】40g超軽量＆SONY800万画素POVカメラ搭載！FOSMET E09で日常をスマートにデイリーレコード ${activeTags}`;
      results.push({
        id: `e09-gen-${seed}-${results.length + 1}`,
        productId: "e09",
        title: fallbackHook,
        hook: fallbackHook.replace(` ${activeTags}`, ""),
        tags: activeTags,
        angle: "POV日常記録",
        angleCategory: "gadget",
        targetAudience: "全TikTokユーザー",
        charCount: fallbackHook.length,
        hookCharCount: fallbackHook.replace(` ${activeTags}`, "").length,
        language: "ja",
        isFavorite: false,
        createdAt: new Date().toISOString(),
      });
    }
  }

  return results;
}
