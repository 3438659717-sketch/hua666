import { AngleCategory, GeneratedTitle } from "../types";

export const FOS10_FIXED_TAGS = "#FOSMET #FOS10 #女性の健康 #スマートウォッチ #ポータブル";

interface HookTemplate {
  pattern: (brand: string, model: string, keyword?: string) => string;
  patternZh: (brand: string, model: string, keyword?: string) => string;
  category: AngleCategory;
  angleLabel: string;
  targetAudience: string;
}

export const FOS10_HOOK_TEMPLATES: HookTemplate[] = [
  // 1. 痛点反転・薄型軽量＆女性の健康悩み型 (Pain point / Ultra-thin 14.9g / Women's health)
  {
    pattern: (b, m) => `重い時計で手首が疲れる人へ！わずか14.9gの${b} ${m}が異次元の軽さ`,
    patternZh: (b, m) => `受够了笨重手表压得手腕酸胀？仅重 14.9g 的 ${b} ${m} 带来跨维度的极致羽量轻盈感`,
    category: "pain_point",
    angleLabel: "14.9g超軽量解放",
    targetAudience: "手首疲れに悩む女子・OL",
  },
  {
    pattern: (b, m) => `生理前の体調変化に気づいてる？${b} ${m}で女性の健康リズムを徹底可視化`,
    patternZh: (b, m) => `有留意经期前的身体细微变化吗？用 ${b} ${m} 全面可视化追踪女性生理健康节律`,
    category: "pain_point",
    angleLabel: "女性の健康リズム",
    targetAudience: "体調管理したい女性・20〜40代",
  },
  {
    pattern: (b, m) => `厚さ10.66mmの極薄設計！${b} ${m}なら寝ている間も着けてるのを忘れる`,
    patternZh: (b, m) => `10.66mm 极致纤薄机身！戴上 ${b} ${m} 即使整夜睡眠也轻若无物宛若无感`,
    category: "pain_point",
    angleLabel: "10.66mm無感睡眠",
    targetAudience: "睡眠トラッキング重視層",
  },
  {
    pattern: (b, m) => `「朝スッキリ起きられない…」${b} ${m}で睡眠周期を測ったら原因が判明！`,
    patternZh: (b, m) => `“早起总是浑身乏力睡不醒…” 用 ${b} ${m} 科学监测睡眠周期即刻找准根源！`,
    category: "pain_point",
    angleLabel: "睡眠改善フック",
    targetAudience: "朝が苦手な人・働く女性",
  },
  {
    pattern: (b, m) => `バッグの中のスマホ通知に気づかない問題、${b} ${m}の腕上通知で秒速解決`,
    patternZh: (b, m) => `手机放包里总漏接重要通知？${b} ${m} 腕上即时震动提醒秒速解决漏看困扰`,
    category: "pain_point",
    angleLabel: "通知見逃し防止",
    targetAudience: "通勤通学・働くOL",
  },
  {
    pattern: (b, m) => `仕事や家事のストレス爆発寸前に！${b} ${m}の呼吸トレーニングで即リセット`,
    patternZh: (b, m) => `工作与家务压力快要达到临界点？跟从 ${b} ${m} 呼吸减压训练即刻舒缓情绪`,
    category: "pain_point",
    angleLabel: "呼吸メンタルケア",
    targetAudience: "多忙な主婦・デスクワーカー",
  },
  {
    pattern: (b, m) => `運動が3日も続かない人へ！${b} ${m}の100+運動モードで毎日のやる気爆発`,
    patternZh: (b, m) => `运动打卡总是难以坚持？${b} ${m} 拥有 100+ 运动模式，让你每天运动热情满满`,
    category: "pain_point",
    angleLabel: "運動継続サポート",
    targetAudience: "ダイエッター・宅トレ女子",
  },
  {
    pattern: (b, m) => `雨や手洗いで濡れても平気！IP68防水の${b} ${m}なら24時間ずっと安心`,
    patternZh: (b, m) => `洗手洗脸与风雨天无需摘下！支持 IP68 防水防尘的 ${b} ${m} 带来 24 小时全天候安心陪伴`,
    category: "pain_point",
    angleLabel: "IP68防水安心感",
    targetAudience: "アクティブ女子・主婦層",
  },

  // 2. 効率＆スマートライフ＆通知管理型 (Efficiency & Smart Lifestyle)
  {
    pattern: (b, m) => `LINEもSNSも腕で一瞬チェック！${b} ${m}で大事なメッセージを逃さない`,
    patternZh: (b, m) => `社交软件与各类消息手腕一瞥即览！用 ${b} ${m} 不再错过任何一条重要消息`,
    category: "efficiency",
    angleLabel: "LINE・SNS通知",
    targetAudience: "学生・スマホヘビーユーザー",
  },
  {
    pattern: (b, m) => `Bluetooth 5.3で爆速安定同期！${b} ${m}とAppの連携がスムーズすぎる`,
    patternZh: (b, m) => `蓝牙 5.3 疾速稳定连接！${b} ${m} 与手机 App 的数据同步流程顺滑无比`,
    category: "efficiency",
    angleLabel: "Bluetooth5.3高速連携",
    targetAudience: "タイパ重視派・効率女子",
  },
  {
    pattern: (b, m) => `手首で健康データを一元管理！${b} ${m}が毎日の生活効率を劇的に上げる`,
    patternZh: (b, m) => `腕上一站式统揽身体各项核心指标！${b} ${m} 大幅提升日常生活效率与健康掌控力`,
    category: "efficiency",
    angleLabel: "手首データ一元化",
    targetAudience: "健康意識の高い層",
  },
  {
    pattern: (b, m) => `歩数・距離・カロリーを秒速把握！${b} ${m}でスマートな健康生活スタート`,
    patternZh: (b, m) => `步数、里程与卡路里秒级同步掌握！戴上 ${b} ${m} 开启智慧自律健康新生活`,
    category: "efficiency",
    angleLabel: "アクティビティ即時確認",
    targetAudience: "ウォーキング・ランニング愛好者",
  },
  {
    pattern: (b, m) => `AndroidもiOSも両対応！${b} ${m}でスマホを選ばず快適スマートライフ`,
    patternZh: (b, m) => `全面兼容 iOS 与 Android 双系统！${b} ${m} 不挑手机畅享无缝智能生态`,
    category: "efficiency",
    angleLabel: "iOS・Android両対応",
    targetAudience: "全スマホユーザー",
  },
  {
    pattern: (b, m) => `お出かけ前の体調チェックに！${b} ${m}の心拍・血中酸素測定が頼もしすぎる`,
    patternZh: (b, m) => `出门前随手测量身体健康指标！${b} ${m} 的心率与血氧监测贴心又靠谱`,
    category: "efficiency",
    angleLabel: "日常バイタル管理",
    targetAudience: "セルフケア女子",
  },

  // 3. 10.66mm極薄・14.9g軽量・DIY文字盤型 (Gadget / DIY Watchfaces / Hardware)
  {
    pattern: (b, m) => `厚さ10.66mm×重さ14.9g！${b} ${m}のポータブル極薄デザインが神`,
    patternZh: (b, m) => `10.66mm 纤薄 ✕ 14.9g 极轻！${b} ${m} 便携小巧的羽量级美学设计堪称一绝`,
    category: "gadget",
    angleLabel: "10.66mm＆14.9g極薄",
    targetAudience: "ミニマリスト・軽量派",
  },
  {
    pattern: (b, m) => `100+種類の文字盤が選び放題！${b} ${m}を今日の気分でカスタマイズ`,
    patternZh: (b, m) => `100+ 款海量表盘任你随心挑选！用 ${b} ${m} 随心情随穿搭自由定制`,
    category: "gadget",
    angleLabel: "100+文字盤選び放題",
    targetAudience: "ファッション好き・若者",
  },
  {
    pattern: (b, m) => `スマホの写真や推し画像を文字盤にDIY！${b} ${m}の自由度が凄すぎる`,
    patternZh: (b, m) => `手机相册美照与本命偶像照片一键设为表盘！${b} ${m} DIY 定制自由度太高了`,
    category: "gadget",
    angleLabel: "写真DIY文字盤",
    targetAudience: "推し活女子・ペット飼い主",
  },
  {
    pattern: (b, m) => `フォントカラーまで自由自在！${b} ${m}で世界に一つだけの文字盤を作ろう`,
    patternZh: (b, m) => `时间字体颜色均可自由挑选微调！用 ${b} ${m} 打造属于你全世界独一无二的专属表盘`,
    category: "gadget",
    angleLabel: "フォントカラーDIY",
    targetAudience: "こだわり派・個性重視",
  },
  {
    pattern: (b, m) => `どんなコーデにも馴染む美しさ！${b} ${m}の洗練されたフォルムに一目惚れ`,
    patternZh: (b, m) => `轻松融入任何风格穿搭的温润极简机身！${b} ${m} 优雅流畅的线条让人一眼爱上`,
    category: "gadget",
    angleLabel: "上品ミニマルデザイン",
    targetAudience: "大人女子・きれいめコーデ",
  },
  {
    pattern: (b, m) => `IP68防塵防水でどこでも連れて行ける！${b} ${m}のタフなポータブル仕様`,
    patternZh: (b, m) => `IP68 防尘防水无论走到哪里都贴身相伴！${b} ${m} 打造扎实可靠的便携穿戴体验`,
    category: "gadget",
    angleLabel: "IP68ポータブル",
    targetAudience: "アウトドア・お出かけ好き",
  },

  // 4. 女性の健康・バイタル・睡眠＆呼吸ケア型 (Women's Health & Vital Analysis)
  {
    pattern: (b, m) => `女性の健康を24時間優しく見守る！${b} ${m}のヘルスケア機能が超充実`,
    patternZh: (b, m) => `全天候 24 小时温柔守候女性健康！${b} ${m} 的生理健康管理功能极其全面贴心`,
    category: "ai_power",
    angleLabel: "女性ヘルスケア全天候",
    targetAudience: "体調に気を配る女性",
  },
  {
    pattern: (b, m) => `睡眠時間・睡眠深度・睡眠周期まで丸わかり！${b} ${m}の精密睡眠分析`,
    patternZh: (b, m) => `总睡眠时长、深睡浅睡与睡眠阶段精准洞察！感受 ${b} ${m} 的科学睡眠分析`,
    category: "ai_power",
    angleLabel: "睡眠深度＆周期分析",
    targetAudience: "快眠を目指す人・不眠気味な人",
  },
  {
    pattern: (b, m) => `心拍数と血中酸素をリアルタイム監視！${b} ${m}が手首の専属ドクター`,
    patternZh: (b, m) => `实时监测心率与血氧饱和度！${b} ${m} 是你手腕上的全天候专属健康顾问`,
    category: "ai_power",
    angleLabel: "心拍・血中酸素常時監視",
    targetAudience: "健康志向・セルフケア派",
  },
  {
    pattern: (b, m) => `深呼吸で心と体をリラックス！${b} ${m}の呼吸トレーニングで毎日スッキリ`,
    patternZh: (b, m) => `跟随节律深呼吸舒缓身心紧绷！${b} ${m} 呼吸减压训练让每天都身心清爽`,
    category: "ai_power",
    angleLabel: "呼吸リラクゼーション",
    targetAudience: "ストレスを溜めがちな人",
  },
  {
    pattern: (b, m) => `専用Appで健康グラフがひと目でわかる！${b} ${m}のデータ同期力が優秀`,
    patternZh: (b, m) => `在配套手机 App 中各项健康走势图一清二楚！${b} ${m} 数据同步分析能力十分优秀`,
    category: "ai_power",
    angleLabel: "App健康データ同期",
    targetAudience: "データ管理派・自己投資女子",
  },

  // 5. 100+運動モード＆スペック・タフネス型 (100+ Sports & Specs)
  {
    pattern: (b, m) => `100+種類の運動モード搭載！${b} ${m}でヨガもランニングも正確記録`,
    patternZh: (b, m) => `搭载 100+ 丰富运动模式！用 ${b} ${m} 精准记录瑜伽、慢跑与各项力量训练`,
    category: "spec_power",
    angleLabel: "100+運動モード",
    targetAudience: "フィットネス・ヨガ女子",
  },
  {
    pattern: (b, m) => `歩数・移動距離・消費カロリーを全自動追跡！${b} ${m}でダイエット成功へ`,
    patternZh: (b, m) => `步数、活动里程与卡路里全自动精准追踪！${b} ${m} 助你轻松达成身材管理目标`,
    category: "spec_power",
    angleLabel: "カロリー自動計算",
    targetAudience: "ダイエッター・運動初心者",
  },
  {
    pattern: (b, m) => `IP68完全防水仕様！手洗い・汗・雨でも外さなくていい${b} ${m}が最強`,
    patternZh: (b, m) => `IP68 级别防尘防水！日常洗手、暴汗与雨天皆无需频繁摘脱，${b} ${m} 实用性拉满`,
    category: "spec_power",
    angleLabel: "IP68完全防水",
    targetAudience: "デイリーユース重視",
  },
  {
    pattern: (b, m) => `Bluetooth 5.3の超省電力チップ！${b} ${m}の途切れない安定接続に大満足`,
    patternZh: (b, m) => `采用蓝牙 5.3 超低功耗高速芯片！${b} ${m} 带来稳定不掉线的持久顺畅连接`,
    category: "spec_power",
    angleLabel: "BT5.3省電力チップ",
    targetAudience: "スペック重視・ガジェット派",
  },
  {
    pattern: (b, m) => `わずか14.9gなのに機能全部入り！${b} ${m}の驚愕スペックを徹底検証`,
    patternZh: (b, m) => `仅仅 14.9g 的羽量机身却满配全能！深度实测 ${b} ${m} 让人惊叹的硬核素质`,
    category: "spec_power",
    angleLabel: "14.9g全部入りスペック",
    targetAudience: "購入検討者・レビュー好き",
  },

  // 6. 服装コーデ＆秘密の裏技・高見え型 (Secret Hack & Outfit Styling)
  {
    pattern: (b, m) => `【OOTD】薄型10.66mmだから袖口に引っかからない！${b} ${m}の神コーデ術`,
    patternZh: (b, m) => `【每日穿搭】10.66mm 纤薄机身穿衬衫毛衣不卡袖口！${b} ${m} 的绝美穿搭小心机`,
    category: "secret_hack",
    angleLabel: "袖口スッキリ美シルエット",
    targetAudience: "きれいめファッション女子",
  },
  {
    pattern: (b, m) => `「その可愛い時計どこの？」って聞かれる${b} ${m}の高見え文字盤テク`,
    patternZh: (b, m) => `总被身边朋友追问“这块手表好精致哪里入的”！${b} ${m} 打造高级显贵表盘的技巧`,
    category: "secret_hack",
    angleLabel: "褒められ文字盤ハック",
    targetAudience: "トレンド女子・学生",
  },
  {
    pattern: (b, m) => `【裏技】推しの写真×好きなフォントで${b} ${m}を最高のお守りにする裏技`,
    patternZh: (b, m) => `【隐藏玩法】本命爱豆照片 ✕ 定制心动字体，让 ${b} ${m} 变成每天陪伴身侧的专属护身符`,
    category: "secret_hack",
    angleLabel: "推し活文字盤裏技",
    targetAudience: "推し活ファン・Z世代",
  },
  {
    pattern: (b, m) => `女子のQOLが劇的に向上するスマートウォッチ、実は${b} ${m}でした`,
    patternZh: (b, m) => `让女生幸福感与自律感直线上升的宝藏轻薄智能手表，原来就是 ${b} ${m}`,
    category: "secret_hack",
    angleLabel: "QOL向上ハック",
    targetAudience: "自分磨き中の女性",
  },
  {
    pattern: (b, m) => `【暴露】14.9gの軽さで健康も通知も全部カバーする${b} ${m}がズルい`,
    patternZh: (b, m) => `【真实好物】用 14.9g 的极致轻盈包揽健康监测与日常通知，${b} ${m} 实在太香了`,
    category: "secret_hack",
    angleLabel: "全方位カバー裏技",
    targetAudience: "効率よく生きたい女性",
  },

  // 7. 疑問・質問・コメント誘導型 (Question & Interaction)
  {
    pattern: (b, m) => `14.9gの超軽量スマートウォッチ、着けてみたい？${b} ${m}を実機レビュー`,
    patternZh: (b, m) => `仅重 14.9g 的超轻盈智能手表你想戴戴看吗？为你带来 ${b} ${m} 真实真机深度上手`,
    category: "question",
    angleLabel: "軽さ体験問いかけ",
    targetAudience: "TikTok視聴者",
  },
  {
    pattern: (b, m) => `文字盤を毎日変える派？写真を入れる派？${b} ${m}ならどっちも自由！`,
    patternZh: (b, m) => `你是每天换系统表盘派还是自定义照片派？在 ${b} ${m} 上都能随心自由发挥！`,
    category: "question",
    angleLabel: "文字盤アンケート",
    targetAudience: "ファッション好き",
  },
  {
    pattern: (b, m) => `生理周期や睡眠深度まで測れるポータブル時計、${b} ${m}知ってる？`,
    patternZh: (b, m) => `连经期周期与深睡眠都能精准洞察的便携手表，你听说过 ${b} ${m} 吗？`,
    category: "question",
    angleLabel: "機能紹介クイズ",
    targetAudience: "健康意識の高い層",
  },
  {
    pattern: (b, m) => `100種類以上のスポーツモード、どれやってみたい？${b} ${m}で測定してみた`,
    patternZh: (b, m) => `100多种运动模式你最期待体验哪一个？戴上 ${b} ${m} 实测运动记录`,
    category: "question",
    angleLabel: "スポーツアンケート",
    targetAudience: "アクティブ女子",
  },
  {
    pattern: (b, m) => `女性に大人気のポータブルスマートウォッチ、${b} ${m}が選ばれる理由とは？`,
    patternZh: (b, m) => `备受女生青睐的便携轻薄智能手表，揭秘 ${b} ${m} 圈粉无数的秘诀`,
    category: "question",
    angleLabel: "人気理由解説",
    targetAudience: "ギフト・購入検討層",
  },
];

const FOS10_HOOK_PREFIX_PAIRS: [string, string][] = [
  ["【女子必見】", "【女生必看】"],
  ["【QOL爆上げ】", "【幸福感飙升】"],
  ["【神アイテム】", "【神仙好物】"],
  ["【正直レビュー】", "【真实测评】"],
  ["【女性の健康】", "【女性健康守护】"],
  ["【14.9g超軽量】", "【14.9g超轻羽量】"],
  ["【2026年最新】", "【2026全新力作】"],
  ["【神コスパ】", "【超高性价比】"],
  ["【感動】", "【令人惊艳】"],
  ["【保存版】", "【建议收藏】"],
  ["【推し活女子】", "【追星女孩必备】"],
  ["【毎日愛用】", "【日常爱用单品】"],
  ["【OOTD】", "【每日百搭穿搭】"],
  ["【睡眠改善】", "【科学改善睡眠】"],
  ["【ポータブル神機】", "【便携全能神机】"],
];

const FOS10_HOOK_SUFFIX_PAIRS: [string, string][] = [
  ["がマジで手放せない！", "，上手之后真的爱不释手！"],
  ["で毎日の生活が劇的に快適になった！", "，让每日生活变得格外舒适惬意！"],
  ["が女子の最高のお守りすぎる件", "，堪称女生最贴心的腕上守护神器！"],
  ["の軽さと可愛さに感動", "，轻盈感与高颜值双双让人心动！"],
  ["が想像以上に便利すぎた", "，日常使用的便利程度超乎想象！"],
  ["で体調管理と推し活が超捗る", "，让身体管理与心动表盘定制两不误！"],
  ["のコスパが完全にバグってる", "，超高质价比真心物超所值！"],
  ["は全女性に本気でおすすめしたい名機", "，是真心强烈推荐给所有女生的精致名作！"],
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
    let baseZh = tpl.patternZh(brand, model, customKeyword);

    // Apply smart permutations for rich uniqueness with paired translations
    const styleRoll = Math.random();
    if (styleRoll < 0.28 && !baseHook.startsWith("【")) {
      const [pfx, pfxZh] = FOS10_HOOK_PREFIX_PAIRS[Math.floor(Math.random() * FOS10_HOOK_PREFIX_PAIRS.length)];
      baseHook = `${pfx}${baseHook}`;
      baseZh = `${pfxZh} ${baseZh}`;
    } else if (styleRoll > 0.72 && baseHook.length < 34 && !baseHook.endsWith("！") && !baseHook.endsWith("？")) {
      const [sfx, sfxZh] = FOS10_HOOK_SUFFIX_PAIRS[Math.floor(Math.random() * FOS10_HOOK_SUFFIX_PAIRS.length)];
      baseHook = `${baseHook}${sfx}`;
      baseZh = `${baseZh}${sfxZh}`;
    }

    if (customKeyword && customKeyword.trim() && !baseHook.includes(customKeyword)) {
      if (Math.random() > 0.4) {
        baseHook = `【${customKeyword.trim()}】${baseHook}`;
        baseZh = `【${customKeyword.trim()}】${baseZh}`;
      }
    }

    // Ensure FOSMET and FOS10 presence
    if (!baseHook.includes(brand) || !baseHook.includes(model)) {
      baseHook = `${brand} ${model}｜${baseHook}`;
      baseZh = `${brand} ${model}｜${baseZh}`;
    }

    // Uniqueness check
    if (seenHooks.has(baseHook)) continue;
    seenHooks.add(baseHook);

    const fullTitle = `${baseHook} ${activeTags}`;

    results.push({
      id: `fos10-algo-${batchSeed}-${results.length + 1}-${Math.random().toString(36).substr(2, 4)}`,
      productId: "fos10",
      title: fullTitle,
      hook: baseHook,
      tags: activeTags,
      angle: tpl.angleLabel,
      angleCategory: tpl.category,
      targetAudience: tpl.targetAudience,
      charCount: fullTitle.length,
      hookCharCount: baseHook.length,
      language: "ja",
      translationZh: baseZh,
      isFavorite: false,
      createdAt: new Date().toISOString(),
    });
  }

  return results.slice(0, 50);
}
