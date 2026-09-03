import { AngleCategory, GeneratedTitle } from "../types";

export const G2_FIXED_TAGS = "#FOSMET #G2 #女性の健康 #スマートウォッチ #服装";

interface HookTemplate {
  pattern: (brand: string, model: string, keyword?: string) => string;
  patternZh: (brand: string, model: string, keyword?: string) => string;
  category: AngleCategory;
  angleLabel: string;
  targetAudience: string;
}

export const G2_HOOK_TEMPLATES: HookTemplate[] = [
  // 1. 痛点反転・体調＆女性の健康悩み型 (Pain point / Women's health / Stress relief)
  {
    pattern: (b, m) => `生理前の体調不良に悩む女子へ！${b} ${m}の周期管理が神すぎた`,
    patternZh: (b, m) => `致受经前身体不适困扰的女生！${b} ${m} 的生理周期智能管理体验太棒了`,
    category: "pain_point",
    angleLabel: "生理周期管理",
    targetAudience: "20〜40代女性・OL",
  },
  {
    pattern: (b, m) => `まだアプリに手入力してるの？${b} ${m}で毎日の健康管理が超ラクになる`,
    patternZh: (b, m) => `还在手动在手机 App 上打字记录？用 ${b} ${m} 让每日健康管理变得极其轻松省心`,
    category: "pain_point",
    angleLabel: "手入力の悩み解消",
    targetAudience: "ズボラ女子・忙しい女性",
  },
  {
    pattern: (b, m) => `「朝スッキリ起きられない…」${b} ${m}で睡眠の質を可視化したら激変した`,
    patternZh: (b, m) => `“早起总是昏昏沉沉起不来…” 用 ${b} ${m} 可视化分析睡眠质量后状态迎来了彻底蜕变`,
    category: "pain_point",
    angleLabel: "睡眠改善フック",
    targetAudience: "睡眠不足に悩む人",
  },
  {
    pattern: (b, m) => `バッグの中のスマホ着信に気づかない問題、${b} ${m}の手首通知で完全解決`,
    patternZh: (b, m) => `手机放在包里经常漏接重要来电？${b} ${m} 腕上智能震动推送完美解决漏接烦恼`,
    category: "pain_point",
    angleLabel: "着信見逃し防止",
    targetAudience: "働く女性・通勤通学層",
  },
  {
    pattern: (b, m) => `高額な時計じゃなくても大満足！${b} ${m}の機能美とコスパがヤバい`,
    patternZh: (b, m) => `不必购买昂贵的大牌手表也极具满足感！${b} ${m} 的功能美学与超高性价比令人惊叹`,
    category: "pain_point",
    angleLabel: "コスパ革命",
    targetAudience: "スマートウォッチ初心者",
  },
  {
    pattern: (b, m) => `手洗いや雨で濡れるの怖くない？IP68防水の${b} ${m}なら日常使いも超安心`,
    patternZh: (b, m) => `日常洗手与淋雨不再小心翼翼！支持 IP68 专业防水的 ${b} ${m} 让日常佩戴倍感安心`,
    category: "pain_point",
    angleLabel: "水濡れ不安解消",
    targetAudience: "主婦・アクティブ女子",
  },
  {
    pattern: (b, m) => `運動が続かない三日坊主を救う！${b} ${m}の120+運動モードでモチベ爆上がり`,
    patternZh: (b, m) => `拯救运动三分钟热量！${b} ${m} 拥有 120+ 运动模式，让自律打卡动力直接拉满`,
    category: "pain_point",
    angleLabel: "運動習慣化",
    targetAudience: "ダイエッター・宅トレ女子",
  },
  {
    pattern: (b, m) => `仕事中のプチストレスに！${b} ${m}の呼吸トレーニングで即リセット`,
    patternZh: (b, m) => `应对工作中的微焦虑与紧绷状态！${b} ${m} 呼吸减压训练助你即刻恢复松弛自如`,
    category: "pain_point",
    angleLabel: "メンタルケア",
    targetAudience: "デスクワーカー・プレッシャー世代",
  },

  // 2. 効率＆Bluetooth通話＆スマートライフ型 (Efficiency & Smart Lifestyle)
  {
    pattern: (b, m) => `スマホ出さずに手首で直接通話！${b} ${m}のBluetooth5.3が超クリア`,
    patternZh: (b, m) => `无需掏出手机手腕直接接听！${b} ${m} 搭载蓝牙 5.3 带来极其清晰的通话体验`,
    category: "efficiency",
    angleLabel: "手首Bluetooth通話",
    targetAudience: "家事中・運転中・多忙ワーカー",
  },
  {
    pattern: (b, m) => `LINEもメールも腕で一瞬確認！${b} ${m}で大事な連絡を秒速キャッチ`,
    patternZh: (b, m) => `微信社交与邮件手腕一瞥即知！用 ${b} ${m} 秒速捕捉每一个关键要事通知`,
    category: "efficiency",
    angleLabel: "通知一括チェック",
    targetAudience: "ビジネス女子・学生",
  },
  {
    pattern: (b, m) => `スマホどこ置いたっけ？を秒で解決！${b} ${m}のスマホ探索機能が便利すぎ`,
    patternZh: (b, m) => `“手机随手放哪儿了”一秒解决！${b} ${m} 的一键查找手机功能实在太实用了`,
    category: "efficiency",
    angleLabel: "スマホ探索",
    targetAudience: "うっかりさん・忙しい朝",
  },
  {
    pattern: (b, m) => `音楽操作も電卓も手首で完結！${b} ${m}が毎日の生活効率を劇的に上げる`,
    patternZh: (b, m) => `音乐切歌与实用计算器手腕一触即达！${b} ${m} 大幅提升日常生活与办事效率`,
    category: "efficiency",
    angleLabel: "日常便利ツール",
    targetAudience: "タイパ重視層",
  },
  {
    pattern: (b, m) => `腕を上げるだけでパッと画面点灯！${b} ${m}の快適レスポンスが心地いい`,
    patternZh: (b, m) => `抬腕瞬间屏幕清晰亮起！${b} ${m} 灵敏流畅的响应速度让人心旷神怡`,
    category: "efficiency",
    angleLabel: "腕上げ点灯",
    targetAudience: "全世代ユーザー",
  },
  {
    pattern: (b, m) => `天気や空気質もサクッと確認！${b} ${m}でお出かけ前の準備がスムーズに`,
    patternZh: (b, m) => `天气与空气质量手腕一目了然！戴上 ${b} ${m} 让出门前的穿搭与准备从容不迫`,
    category: "efficiency",
    angleLabel: "天気・空気質確認",
    targetAudience: "お出かけ好き・ママ層",
  },
  {
    pattern: (b, m) => `音声アシスタント対応で話しかけるだけ！${b} ${m}のスマート操作体験`,
    patternZh: (b, m) => `支持语音助手，随口呼唤即可唤醒！感受 ${b} ${m} 解放双手的智能便捷操作`,
    category: "efficiency",
    angleLabel: "音声アシスタント",
    targetAudience: "ハンズフリー派",
  },

  // 3. ハードウェア＆文字盤着せ替え＆洗練デザイン型 (Gadget / Watchfaces / Design)
  {
    pattern: (b, m) => `気分に合わせて文字盤を着せ替え！${b} ${m}のカスタム画面が可愛すぎる`,
    patternZh: (b, m) => `随心情自由更换百变表盘！${b} ${m} 的个性化定制界面精致又可爱`,
    category: "gadget",
    angleLabel: "文字盤自由着せ替え",
    targetAudience: "ファッション好き・若者",
  },
  {
    pattern: (b, m) => `多彩なメニュースタイル搭載！${b} ${m}で自分好みの操作画面にカスタマイズ`,
    patternZh: (b, m) => `内置多种菜单排列风格！用 ${b} ${m} 定制属于你专属的操控视觉`,
    category: "gadget",
    angleLabel: "選べるメニュースタイル",
    targetAudience: "こだわり派・ガジェット好き",
  },
  {
    pattern: (b, m) => `手洗い・雨・洗車もへっちゃら！IP68防塵防水の${b} ${m}がタフで頼もしい`,
    patternZh: (b, m) => `洗手、淋雨与户外泼水全无顾虑！IP68 防尘防水的 ${b} ${m} 扎实耐用值得信赖`,
    category: "gadget",
    angleLabel: "IP68防水防塵",
    targetAudience: "デイリーユース重視",
  },
  {
    pattern: (b, m) => `どんな服装にも馴染む上品フォルム！${b} ${m}が手元を華やかに演出`,
    patternZh: (b, m) => `轻松融入任何风格穿搭的温润外观！${b} ${m} 为你的手腕增添一抹高级优雅光芒`,
    category: "gadget",
    angleLabel: "上品デザイン美",
    targetAudience: "大人の女性・きれいめコーデ",
  },
  {
    pattern: (b, m) => `腕元でキラリと映える！${b} ${m}の洗練された佇まいに一目惚れ`,
    patternZh: (b, m) => `腕间闪耀迷人微光！${b} ${m} 洗练优雅的工艺质感让人一见倾心`,
    category: "gadget",
    angleLabel: "高見えデザイン",
    targetAudience: "アクセサリー感覚で着けたい人",
  },

  // 4. 女性の健康・FitCloudPro連携・AIスマート型 (Women's Health & App Sync)
  {
    pattern: (b, m) => `月経周期トラッキングが超優秀！${b} ${m}とFitCloudProで女性の体を守る`,
    patternZh: (b, m) => `经期与生理周期智能追踪极其出色！${b} ${m} 联动 FitCloudPro 贴心守护女性健康`,
    category: "ai_power",
    angleLabel: "FitCloudPro周期連携",
    targetAudience: "体調管理したい女性",
  },
  {
    pattern: (b, m) => `深睡眠・浅睡眠・総睡眠時間を詳細分析！${b} ${m}の睡眠トラッキング`,
    patternZh: (b, m) => `深度睡眠、浅度睡眠与睡眠周期科学解析！体验 ${b} ${m} 精准睡眠监测`,
    category: "ai_power",
    angleLabel: "科学的睡眠分析",
    targetAudience: "快眠を目指す人",
  },
  {
    pattern: (b, m) => `心拍数・血中酸素を常時モニタリング！${b} ${m}が手首の専属ヘルスケア相棒`,
    patternZh: (b, m) => `心率与血氧饱和度全天候监测！${b} ${m} 是你手腕上的专属健康守护伙伴`,
    category: "ai_power",
    angleLabel: "24hバイタル監視",
    targetAudience: "健康志向の女性・家族へのギフト",
  },
  {
    pattern: (b, m) => `呼吸トレーニングでリフレッシュ！${b} ${m}が日々のメンタルを優しくケア`,
    patternZh: (b, m) => `跟随时钟节律呼吸训练舒缓身心！${b} ${m} 温柔呵护日常情绪与压力调节`,
    category: "ai_power",
    angleLabel: "呼吸リラクゼーション",
    targetAudience: "ストレスケア重視",
  },
  {
    pattern: (b, m) => `FitCloudProアプリで詳細データが一目瞭然！${b} ${m}のデータ同期力`,
    patternZh: (b, m) => `在 FitCloudPro App 中身体健康数据一目了然！${b} ${m} 数据同步清晰高效`,
    category: "ai_power",
    angleLabel: "アプリ詳細分析",
    targetAudience: "データ管理派",
  },

  // 5. 120+運動モード＆アクティブスペック型 (120+ Sports Modes & Specs)
  {
    pattern: (b, m) => `内蔵8+1＆追加112種！${b} ${m}の120+運動モードでどんなワークアウトも記録`,
    patternZh: (b, m) => `内置核心模式及扩展海量运动！${b} ${m} 拥有 120+ 运动模式精准记录每次挥汗`,
    category: "spec_power",
    angleLabel: "120+種運動モード",
    targetAudience: "ヨガ・ランニング・ジム女子",
  },
  {
    pattern: (b, m) => `ウォーキングから縄跳びまで！${b} ${m}で歩数・距離・カロリーを正確管理`,
    patternZh: (b, m) => `从日常散步到跳绳燃脂！用 ${b} ${m} 精准掌握步数、距离与卡路里消耗`,
    category: "spec_power",
    angleLabel: "消費カロリー計測",
    targetAudience: "ダイエット実践者",
  },
  {
    pattern: (b, m) => `サイクリング・バドミントン・球技も網羅！${b} ${m}のスポーツ対応力が凄い`,
    patternZh: (b, m) => `全面覆盖骑行、羽毛球与各类球类运动！${b} ${m} 的运动适配能力令人惊艳`,
    category: "spec_power",
    angleLabel: "多彩なスポーツ対応",
    targetAudience: "スポーツ愛好者",
  },
  {
    pattern: (b, m) => `Bluetooth 5.3の安定接続！${b} ${m}で途切れないスマート通信を実現`,
    patternZh: (b, m) => `蓝牙 5.3 疾速稳定连接！${b} ${m} 带来不掉线、无延迟的智能互联体验`,
    category: "spec_power",
    angleLabel: "Bluetooth5.3安定接続",
    targetAudience: "接続性重視層",
  },
  {
    pattern: (b, m) => `連絡先同期＆手首ダイヤル！${b} ${m}の充実した通話スペックに驚き`,
    patternZh: (b, m) => `常用联系人同步与独立腕上拨号盘！${b} ${m} 完备的通话硬件配置超乎预期`,
    category: "spec_power",
    angleLabel: "連絡先同期＆ダイヤル",
    targetAudience: "ビジネス＆プライベート両立派",
  },

  // 6. 服装コーデ＆秘密の裏技・高見え型 (Secret Hack & Outfit Styling)
  {
    pattern: (b, m) => `【OOTD】毎日のコーデに自然に溶け込む！${b} ${m}が女子の必須アイテムな件`,
    patternZh: (b, m) => `【每日穿搭】自然融入每一套日常 Look！${b} ${m} 成为女生腕间百搭加分单品`,
    category: "secret_hack",
    angleLabel: "服装コーデ相性抜群",
    targetAudience: "ファッション感度高い女子",
  },
  {
    pattern: (b, m) => `「それどこの時計？」って絶対聞かれる！${b} ${m}の高見え感がエグい`,
    patternZh: (b, m) => `“你这手表是哪个牌子的？” 出门总被追问！${b} ${m} 的高级显贵质感绝了`,
    category: "secret_hack",
    angleLabel: "褒められウォッチ",
    targetAudience: "トレンド女子",
  },
  {
    pattern: (b, m) => `【裏技】仕事中もプライベートもこれ1台！${b} ${m}の万能すぎる使いこなし術`,
    patternZh: (b, m) => `【实用技巧】职场办公与周末休闲一块搞定！${b} ${m} 全能百搭的进阶使用秘籍`,
    category: "secret_hack",
    angleLabel: "公私兼用ライフハック",
    targetAudience: "キャリア女性",
  },
  {
    pattern: (b, m) => `女子のQOLが爆上がりするスマートウォッチ、実は${b} ${m}でした`,
    patternZh: (b, m) => `大幅提升女生生活幸福感与精致感的宝藏智能手表，原来就是 ${b} ${m}`,
    category: "secret_hack",
    angleLabel: "QOL向上ハック",
    targetAudience: "自分磨き中の女性",
  },
  {
    pattern: (b, m) => `【秘密】体調管理もLINE通知も全部腕で！${b} ${m}でデキる女性のスマートライフ`,
    patternZh: (b, m) => `【小秘密】健康管理与社交通知手腕全掌握！用 ${b} ${m} 开启精致高效女性智能生活`,
    category: "secret_hack",
    angleLabel: "デキる女子の秘密",
    targetAudience: "効率よく生きたい女性",
  },

  // 7. 疑問・質問・コメント誘導型 (Question & Interaction)
  {
    pattern: (b, m) => `生理周期や睡眠まで測れる時計知ってる？最新${b} ${m}が優秀すぎた`,
    patternZh: (b, m) => `你知道连经期周期与深睡都能精准记录的手表吗？最新款 ${b} ${m} 表现太惊艳了`,
    category: "question",
    angleLabel: "機能紹介クイズ",
    targetAudience: "TikTok視聴者",
  },
  {
    pattern: (b, m) => `120種類以上の運動モード、どれ使いたい？${b} ${m}で体を動かそう`,
    patternZh: (b, m) => `120多项运动模式你最想打卡哪一个？戴上 ${b} ${m} 一起开启自律运动吧`,
    category: "question",
    angleLabel: "運動アンケート",
    targetAudience: "アクティブ層",
  },
  {
    pattern: (b, m) => `手首で通話できるスマートウォッチって正直どう？${b} ${m}を使ってみた結果`,
    patternZh: (b, m) => `手腕直接蓝牙通话到底方不方便？深度体验 ${b} ${m} 后的真实使用感受`,
    category: "question",
    angleLabel: "通話体験問いかけ",
    targetAudience: "購入検討層",
  },
  {
    pattern: (b, m) => `文字盤を毎日変える派？固定派？${b} ${m}なら無限に着せ替え可能！`,
    patternZh: (b, m) => `你是每天换表盘派还是固定表盘派？${b} ${m} 支持海量表盘自由随心换！`,
    category: "question",
    angleLabel: "文字盤議論",
    targetAudience: "ファッション好き",
  },
  {
    pattern: (b, m) => `女性の健康を守るスマートウォッチ、${b} ${m}が今選ばれる理由とは？`,
    patternZh: (b, m) => `守护女性健康的时尚智能手表，揭秘 ${b} ${m} 成为口碑爆款的原因`,
    category: "question",
    angleLabel: "人気理由解説",
    targetAudience: "健康意識の高い層",
  },
];

const G2_HOOK_PREFIX_PAIRS: [string, string][] = [
  ["【女子必見】", "【女生必看】"],
  ["【QOL爆上げ】", "【幸福感飙升】"],
  ["【神アイテム】", "【神仙单品】"],
  ["【正直レビュー】", "【真实测评】"],
  ["【体調管理】", "【贴心健康管理】"],
  ["【即買い推奨】", "【强烈推荐入手】"],
  ["【2026年最新】", "【2026全新力作】"],
  ["【コスパ最強】", "【性价比天花板】"],
  ["【感動】", "【令人惊艳】"],
  ["【保存版】", "【建议收藏】"],
  ["【女性の健康】", "【女性健康守护】"],
  ["【毎日愛用】", "【日常爱用好物】"],
  ["【OOTD】", "【每日穿搭必备】"],
  ["【睡眠改善】", "【科学睡眠改善】"],
  ["【話題の神機】", "【全网热议爆款】"],
];

const G2_HOOK_SUFFIX_PAIRS: [string, string][] = [
  ["がマジで手放せない！", "，上手之后真的爱不释手！"],
  ["で生活の質が劇的に変わった！", "，让生活品质迎来了巨大升级！"],
  ["が女子の最強のお守りすぎる件", "，堪称女生最贴心的腕上守护单品！"],
  ["の可愛さと機能性に感動", "，颜值与实用性双双让人心动！"],
  ["が想像以上に便利すぎた", "，日常使用的便利程度超乎想象！"],
  ["で毎日の体調管理がラクになる", "，让每天的身体状态管理格外省心！"],
  ["のコスパが完全にバグってる", "，超高质价比真心物超所值！"],
  ["は全女性におすすめしたい逸品", "，是强烈推荐给所有女生的精致好物！"],
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
    let baseZh = tpl.patternZh(brand, model, customKeyword);

    // Apply smart permutations for rich uniqueness with paired translations
    const styleRoll = Math.random();
    if (styleRoll < 0.28 && !baseHook.startsWith("【")) {
      const [pfx, pfxZh] = G2_HOOK_PREFIX_PAIRS[Math.floor(Math.random() * G2_HOOK_PREFIX_PAIRS.length)];
      baseHook = `${pfx}${baseHook}`;
      baseZh = `${pfxZh} ${baseZh}`;
    } else if (styleRoll > 0.72 && baseHook.length < 34 && !baseHook.endsWith("！") && !baseHook.endsWith("？")) {
      const [sfx, sfxZh] = G2_HOOK_SUFFIX_PAIRS[Math.floor(Math.random() * G2_HOOK_SUFFIX_PAIRS.length)];
      baseHook = `${baseHook}${sfx}`;
      baseZh = `${baseZh}${sfxZh}`;
    }

    if (customKeyword && customKeyword.trim() && !baseHook.includes(customKeyword)) {
      if (Math.random() > 0.4) {
        baseHook = `【${customKeyword.trim()}】${baseHook}`;
        baseZh = `【${customKeyword.trim()}】${baseZh}`;
      }
    }

    // Ensure FOSMET and G2 presence
    if (!baseHook.includes(brand) || !baseHook.includes(model)) {
      baseHook = `${brand} ${model}｜${baseHook}`;
      baseZh = `${brand} ${model}｜${baseZh}`;
    }

    // Uniqueness check
    if (seenHooks.has(baseHook)) continue;
    seenHooks.add(baseHook);

    const fullTitle = `${baseHook} ${activeTags}`;

    results.push({
      id: `g2-algo-${batchSeed}-${results.length + 1}-${Math.random().toString(36).substr(2, 4)}`,
      productId: "g2",
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
