import { AngleCategory, GeneratedTitle } from "../types";

export const E05_FIXED_TAGS = "#FOSMET#E05#スマートグラス#服装#イヤホン";

export interface E05HookTemplate {
  pattern: (brand: string, model: string) => string;
  category: AngleCategory;
  angleLabel: string;
  targetAudience: string;
}

export const E05_HOOK_TEMPLATES: E05HookTemplate[] = [
  // 1. pain_point: 痛点反转・告别墨镜眼镜频繁切换与传统耳机入耳压迫
  {
    pattern: (b, m) => `【衝撃】まだメガネとサングラス2本持ち歩いてるの？${b} ${m}なら指先ワンタップで4段階瞬時変色`,
    category: "pain_point",
    angleLabel: "2本持ちの荷物痛点",
    targetAudience: "ミニマリスト・メガネ愛用者",
  },
  {
    pattern: (b, m) => `イヤホンの耳詰まり感・圧迫感に悩む人必見！${b} ${m}は耳を塞がず快適すぎるスマートグラス`,
    category: "pain_point",
    angleLabel: "耳の閉塞感・圧迫感解消",
    targetAudience: "テレワーク・長時間着用派",
  },
  {
    pattern: (b, m) => `「室内に入ったらサングラスが真っ暗で見えない…」${b} ${m}なら指先タッチで一瞬でクリアレンズへ`,
    category: "pain_point",
    angleLabel: "明暗切替・即時変色",
    targetAudience: "ドライブ・街歩き好き",
  },
  {
    pattern: (b, m) => `周囲の音が聞こえなくてヒヤッとしたことない？${b} ${m}のオープンイヤー設計なら音楽も周囲の音もクリア`,
    category: "pain_point",
    angleLabel: "安全性・ながら聴き",
    targetAudience: "ランナー・通勤通学派",
  },
  {
    pattern: (b, m) => `重いスマートグラスで鼻や耳が痛くなった経験ある？${b} ${m}はTR90超軽量素材で1日中羽のような軽さ`,
    category: "pain_point",
    angleLabel: "重量負担・鼻あて痛解消",
    targetAudience: "メガネ常用者・ファッション派",
  },
  {
    pattern: (b, m) => `海外旅行や外国人との会話で緊張する人へ！${b} ${m}の内蔵AIリアルタイム翻訳が言葉の壁を完全粉砕`,
    category: "pain_point",
    angleLabel: "言語の壁・海外旅行不安",
    targetAudience: "海外旅行・ビジネス出張派",
  },
  {
    pattern: (b, m) => `雨の日やスポーツの汗でイヤホンが壊れる心配ゼロ！${b} ${m}はIP65防塵防水でどこでもガシガシ使える`,
    category: "pain_point",
    angleLabel: "水濡れ・汗没トラブル",
    targetAudience: "アウトドア・スポーツ愛好家",
  },
  {
    pattern: (b, m) => `「スマホを取り出して音量を変えるのが面倒…」${b} ${m}ならテンプルを前後にスワイプするだけで爆速調整`,
    category: "pain_point",
    angleLabel: "スマホ操作の手間削減",
    targetAudience: "タイパ重視・効率派",
  },

  // 2. efficiency: タイパ・極簡穿搭・ハンズフリー生活
  {
    pattern: (b, m) => `メガネを指でスッとなぞるだけで音量調整完了！${b} ${m}のスマートタッチ操作が未来的で超便利`,
    category: "efficiency",
    angleLabel: "スワイプ調音・直感操作",
    targetAudience: "ガジェット好き・スマート派",
  },
  {
    pattern: (b, m) => `朝のコーデが決まらないならコレ！${b} ${m}の極簡デザインがどんな服装にも馴染んで一気に垢抜ける`,
    category: "efficiency",
    angleLabel: "服装コーデ・時短お洒落",
    targetAudience: "ファッション・コーデ好き",
  },
  {
    pattern: (b, m) => `仕事中も手首やスマホに触れずAIに即質問！${b} ${m}の耳元スマートアシスタントで作業効率3倍UP`,
    category: "efficiency",
    angleLabel: "AI音声アシスト・仕事効率化",
    targetAudience: "ビジネスパーソン・クリエイター",
  },
  {
    pattern: (b, m) => `音楽再生8時間＆待機7日間のタフバッテリー！${b} ${m}なら1日中充電切れの心配なく完全ハンズフリー`,
    category: "efficiency",
    angleLabel: "8h連続再生・長持ち電池",
    targetAudience: "外回り営業・アクティブ派",
  },
  {
    pattern: (b, m) => `電話がかかってきてもメガネをタップするだけ！${b} ${m}のENCデュアルマイクで雑音ゼロのクリア通話`,
    category: "efficiency",
    angleLabel: "ENC高音質通話・即時応答",
    targetAudience: "リモートワーカー・ドライバー",
  },
  {
    pattern: (b, m) => `日差しの強さに応じて指先で4段階明るさチェンジ！${b} ${m}が実現する究極のストレスフリー視界`,
    category: "efficiency",
    angleLabel: "4段階シームレス調光",
    targetAudience: "運転手・ゴルフ・釣り好き",
  },

  // 3. gadget: ハードウェア魅力・TR90超軽量＆4段階調光レンズ
  {
    pattern: (b, m) => `【近未来】指で触れた瞬間レンズが4段階に色づく！${b} ${m}のエレクトロクロミック変色機能が凄すぎる`,
    category: "gadget",
    angleLabel: "4段階エレクトロクロミック",
    targetAudience: "テクノロジー・新感覚体験派",
  },
  {
    pattern: (b, m) => `見た目は極上のお洒落メガネなのに中身は最強AI！${b} ${m}のTR90軽量フレームが美しすぎる`,
    category: "gadget",
    angleLabel: "TR90高級質感フレーム",
    targetAudience: "デザイン重視・お洒落好き",
  },
  {
    pattern: (b, m) => `耳元にスピーカー内蔵なのに音漏れしにくい！${b} ${m}の指向性オープンオーディオ技術に感動した`,
    category: "gadget",
    angleLabel: "指向性オープンサウンド",
    targetAudience: "オーディオマニア・通勤者",
  },
  {
    pattern: (b, m) => `テンプル前方スワイプで音量UP、後ろでDOWN！${b} ${m}の静電タッチ操作がまるでSF映画の世界`,
    category: "gadget",
    angleLabel: "SF感覚ジェスチャー操作",
    targetAudience: "未来デバイス・トレンド派",
  },
  {
    pattern: (b, m) => `IP65防水防塵だからゲリラ豪雨も汗もへっちゃら！${b} ${m}の全地形対応スマートグラスが頼もしすぎる`,
    category: "gadget",
    angleLabel: "IP65タフネス・全天候型",
    targetAudience: "サイクリング・アウトドア派",
  },
  {
    pattern: (b, m) => `わずか数十グラムで8時間連続再生！${b} ${m}の超高密度バッテリーとミニマル設計が神がかってる`,
    category: "gadget",
    angleLabel: "ミニマル高密度構造",
    targetAudience: "ウルトラライト・ギア好き",
  },

  // 4. ai_power: AIインテリジェンス・リアルタイム同時通訳・音声アシスタント
  {
    pattern: (b, m) => `耳元で外国語がスラスラ日本語に！${b} ${m}のAIリアルタイム同時通訳で海外旅行が100倍楽しくなる`,
    category: "ai_power",
    angleLabel: "AI多言語同時通訳",
    targetAudience: "海外旅行・インバウンド対応",
  },
  {
    pattern: (b, m) => `「これどういう意味？」耳元AIが即座に教えてくれる！${b} ${m}はメガネの形をした専属ブレーン`,
    category: "ai_power",
    angleLabel: "AI知能問答・即時アンサー",
    targetAudience: "学生・リスキリング派",
  },
  {
    pattern: (b, m) => `騒がしいカフェでも自分の声だけ超クリア！${b} ${m}のENCデュアルマイクAIノイズキャンセリングが最強`,
    category: "ai_power",
    angleLabel: "ENCデュアルマイクAI降噪",
    targetAudience: "ノマドワーカー・配信者",
  },
  {
    pattern: (b, m) => `語学学習もこれ1本で劇的進化！${b} ${m}のAIリスニング＆会話サポートで発音まで完璧にチェック`,
    category: "ai_power",
    angleLabel: "AI語学学習パートナー",
    targetAudience: "英会話・多言語学習者",
  },
  {
    pattern: (b, m) => `両手がふさがっていてもAIが耳元でサポート！${b} ${m}が切り拓く次世代スマートライフが異次元`,
    category: "ai_power",
    angleLabel: "次世代ハンズフリーAI",
    targetAudience: "スマートホーム・先端IT派",
  },

  // 5. secret_hack: ファッションコーデ裏技・クリエイターの秘密兵器
  {
    pattern: (b, m) => `【お洒落男子の秘密】ダサいイヤホンをやめて${b} ${m}に変えたら女子ウケが急上昇した話`,
    category: "secret_hack",
    angleLabel: "好印象・服装コーデ裏技",
    targetAudience: "メンズファッション・モテ服派",
  },
  {
    pattern: (b, m) => `カフェで仕事ができる人がこっそりかけてるコレ！${b} ${m}の変色レンズ×オープンイヤホンがチート級`,
    category: "secret_hack",
    angleLabel: "デキる人の秘密アイテム",
    targetAudience: "カフェワーカー・フリーランス",
  },
  {
    pattern: (b, m) => `「そのサングラスどこの？」って街で3回聞かれた！${b} ${m}の4段階調光ギミックが目立ち度MAX`,
    category: "secret_hack",
    angleLabel: "注目度MAX・話題性",
    targetAudience: "インフルエンサー・流行発信派",
  },
  {
    pattern: (b, m) => `荷物を極限まで減らしたいミニマリストの最終結論！${b} ${m}ならメガネ・サングラス・イヤホンが1台に統合`,
    category: "secret_hack",
    angleLabel: "3in1ミニマリスト結論",
    targetAudience: "ミニマリスト・持ち物削減派",
  },
  {
    pattern: (b, m) => `TikTokerがドライブ中にこっそり愛用中！${b} ${m}で視界の眩しさと音楽を完全スマートコントロール`,
    category: "secret_hack",
    angleLabel: "ドライブ・旅行の神ギア",
    targetAudience: "ドライブ・車好き",
  },

  // 6. question: 疑問・コメント欄巻き込み型
  {
    pattern: (b, m) => `タップ1回でレンズの色が変わるスマートメガネ、正直欲しい？${b} ${m}を本音レビューしてみた`,
    category: "question",
    angleLabel: "本音レビュー・購入意欲",
    targetAudience: "購入検討・レビュー重視層",
  },
  {
    pattern: (b, m) => `メガネにAIとイヤホンが入ってるって信じられる？${b} ${m}の実力を見たら全員腰抜かすレベル`,
    category: "question",
    angleLabel: "近未来信憑性・驚き",
    targetAudience: "一般視聴者・バズ拡散層",
  },
  {
    pattern: (b, m) => `【究極の2択】イヤホン派？それとも${b} ${m}のスマートグラス派？コメントで教えて！`,
    category: "question",
    angleLabel: "究極の2択・コメント誘導",
    targetAudience: "SNSアクティブ・議論層",
  },
  {
    pattern: (b, m) => `4段階調光とリアルタイム同時通訳、どっちの機能が気になる？${b} ${m}が凄すぎる件について`,
    category: "question",
    angleLabel: "機能比較・興味関心",
    targetAudience: "機能重視・スペック比較派",
  },
  {
    pattern: (b, m) => `1日中かけても本当に疲れない？${b} ${m}のTR90超軽量フレームを1週間つけっぱなし検証`,
    category: "question",
    angleLabel: "耐久着用検証・信頼性",
    targetAudience: "慎重派・検証動画好き",
  },

  // 7. spec_power: ハイスペック・信頼性・数字の説得力
  {
    pattern: (b, m) => `4段階変色・TR90超軽量・IP65防水・8h再生！${b} ${m}の全部入りスペックがこの価格で手に入る奇跡`,
    category: "spec_power",
    angleLabel: "全部入りモンスター仕様",
    targetAudience: "スペック重視・コスパ派",
  },
  {
    pattern: (b, m) => `ENCデュアルマイク搭載で騒音下でも美声通話！${b} ${m}がビジネスもプライベートも完全制覇`,
    category: "spec_power",
    angleLabel: "ENCデュアルマイク性能",
    targetAudience: "通話品質・仕事重視派",
  },
  {
    pattern: (b, m) => `長時間のデスクワークでも耳が痛くならない！${b} ${m}のオープンイヤー立体音響と極上フィット感`,
    category: "spec_power",
    angleLabel: "立体音響・快適フィット",
    targetAudience: "デスクワーカー・ゲーマー",
  },
  {
    pattern: (b, m) => `待機7日間以上の安心バッテリー！${b} ${m}は週末のキャンプやロングドライブでも充電器いらず`,
    category: "spec_power",
    angleLabel: "7日間待機・ロングライフ",
    targetAudience: "キャンパー・旅行者",
  },
  {
    pattern: (b, m) => `指先1タップで紫外線も日差しも瞬時カット！${b} ${m}のエレクトロクロミックレンズの科学的凄さ`,
    category: "spec_power",
    angleLabel: "UVカット・変色光学技術",
    targetAudience: "紫外線対策・アイケア派",
  },

  // 8. all_mixed: 黄金比率・総合アピール
  {
    pattern: (b, m) => `【神アイテム】4段階調光×AI同時通訳×耳を塞がないイヤホン！${b} ${m}が今年のベストバイ確定`,
    category: "all_mixed",
    angleLabel: "総合ベストバイ・神アイテム",
    targetAudience: "オールラウンド・全ユーザー",
  },
  {
    pattern: (b, m) => `服装を選ばない極簡ブラックフレーム！${b} ${m}で日常のスタイルとスマート生活を格上げしよう`,
    category: "all_mixed",
    angleLabel: "スタイル格上げ・服装マッチ",
    targetAudience: "お洒落社会人・学生",
  },
  {
    pattern: (b, m) => `指先スワイプで音量自在、タップで変色！${b} ${m}がもたらす手ぶら未来体験に全員ハマる`,
    category: "all_mixed",
    angleLabel: "未来体験・手ぶら解放",
    targetAudience: "トレンドセッター・若者層",
  },
  {
    pattern: (b, m) => `これ1本でメガネ・サングラス・イヤホン完了！${b} ${m}の身軽すぎるスマート新生活が最高`,
    category: "all_mixed",
    angleLabel: "身軽スマートライフ",
    targetAudience: "新生活・身軽志向",
  },
  {
    pattern: (b, m) => `【話題沸騰】AIと暮らす次世代スマートメガネ！${b} ${m}のリアルな使用感を徹底解説`,
    category: "all_mixed",
    angleLabel: "話題沸騰・徹底解説",
    targetAudience: "YouTube/TikTok視聴者",
  },
  {
    pattern: (b, m) => `日差しの強い外ではサングラス、室内ではクリア！${b} ${m}の4段階シームレス調光が超快適`,
    category: "all_mixed",
    angleLabel: "室内外シームレス適応",
    targetAudience: "デイリーユース・通勤通学",
  },
  {
    pattern: (b, m) => `耳を塞がないから1日中音楽聴き放題！${b} ${m}の8時間ロングバッテリーが頼もしすぎる`,
    category: "all_mixed",
    angleLabel: "BGM感覚・一日中音楽",
    targetAudience: "音楽好き・作業BGM派",
  },
  {
    pattern: (b, m) => `海外の相手とも耳元でスムーズに対話成立！${b} ${m}の内蔵AI通訳で世界が広がる`,
    category: "all_mixed",
    angleLabel: "世界とつながるAI通訳",
    targetAudience: "グローバル志向・留学生",
  },
  {
    pattern: (b, m) => `【買わないと損】TR90超軽量フレームに最新テクノロジーが詰まった${b} ${m}が熱すぎる！`,
    category: "all_mixed",
    angleLabel: "買わないと損・熱烈推薦",
    targetAudience: "ガジェット購入検討者",
  },
  {
    pattern: (b, m) => `メガネの概念が完全に覆る！${b} ${m}の4段階調光＆スマートAI機能で日常をアップデート`,
    category: "all_mixed",
    angleLabel: "概念破壊・次世代ウェアラブル",
    targetAudience: "次世代デバイスファン",
  },
];

export function generateE05AlgorithmicTitles(
  category: AngleCategory = "all_mixed",
  customKeyword?: string,
  customTags?: string,
  seed = Date.now()
): GeneratedTitle[] {
  const brand = "FOSMET";
  const model = "E05";
  const activeTags = (customTags && customTags.trim()) ? customTags.trim() : E05_FIXED_TAGS;

  let eligible = E05_HOOK_TEMPLATES;
  if (category !== "all_mixed") {
    const filtered = E05_HOOK_TEMPLATES.filter((t) => t.category === category);
    if (filtered.length > 0) {
      eligible = filtered;
    }
  }

  const results: GeneratedTitle[] = [];
  const seenHooks = new Set<string>();

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
        id: `algo-e05-ja-${seed}-${results.length + 1}`,
        productId: "e05",
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
