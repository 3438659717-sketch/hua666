import { AngleCategory, GeneratedTitle } from "../types";

export const QS40_FIXED_TAGS = "#FOSMET #QS40 #スマートウォッチ #健康管理者 #ai";

interface HookTemplate {
  pattern: (brand: string, model: string, keyword?: string) => string;
  patternZh: (brand: string, model: string, keyword?: string) => string;
  category: AngleCategory;
  angleLabel: string;
  targetAudience: string;
}

export const QS40_HOOK_TEMPLATES: HookTemplate[] = [
  // 1. 反常识痛点型 (Pain point / Counter-intuitive / Anti-Typing)
  {
    pattern: (b, m) => `スマートウォッチの文字入力イラついてる人、今すぐ${b} ${m}見て`,
    patternZh: (b, m) => `对智能手表打字输入感到抓狂的人，一定要马上看看 ${b} ${m}`,
    category: "pain_point",
    angleLabel: "文字入力の悩み解消",
    targetAudience: "スマートウォッチ愛用者",
  },
  {
    pattern: (b, m) => `まだ10万円の高級時計買ってるの？${b} ${m}がコスパ崩壊すぎる`,
    patternZh: (b, m) => `还在花10万日元买奢侈智能表？${b} ${m} 的性价比简直高到离谱`,
    category: "pain_point",
    angleLabel: "価格破壊フック",
    targetAudience: "コスパ重視の男性・ビジネスマン",
  },
  {
    pattern: (b, m) => `毎日充電するの、もう疲れましたよね？${b} ${m}なら余裕で10日持つ`,
    patternZh: (b, m) => `每天都要充电已经累了吧？换上 ${b} ${m} 轻松续航超10天`,
    category: "pain_point",
    angleLabel: "充電ストレス解放",
    targetAudience: "充電切れに悩む人",
  },
  {
    pattern: (b, m) => `「手首重くて肩こる問題」を9.8mmの極薄${b} ${m}が一発解決した件`,
    patternZh: (b, m) => `9.8mm 极致纤薄的 ${b} ${m}，一举解决了手表笨重导致手腕酸沉的问题`,
    category: "pain_point",
    angleLabel: "軽量薄型化",
    targetAudience: "デスクワーカー・肩こり持ち",
  },
  {
    pattern: (b, m) => `安物スマートウォッチで後悔した人にこそ教えたい神機、${b} ${m}`,
    patternZh: (b, m) => `买过劣质智能表踩坑的人，一定要了解这款封神之作 ${b} ${m}`,
    category: "pain_point",
    angleLabel: "後悔防止フック",
    targetAudience: "買い替え検討層",
  },
  {
    pattern: (b, m) => `会議中にスマホ出すの失礼？${b} ${m}の手首通知でスマートに確認`,
    patternZh: (b, m) => `开会频繁拿手机太失礼？用 ${b} ${m} 抬腕优雅从容查收所有通知`,
    category: "pain_point",
    angleLabel: "ビジネスマナー改善",
    targetAudience: "営業職・会社員",
  },
  {
    pattern: (b, m) => `運動サボりがちな人集合！${b} ${m}着けたら勝手にモチベ爆上がり`,
    patternZh: (b, m) => `经常偷懒不想运动？戴上 ${b} ${m} 运动动力与自律感瞬间爆棚`,
    category: "pain_point",
    angleLabel: "運動習慣化",
    targetAudience: "ダイエッター・運動初心者",
  },
  {
    pattern: (b, m) => `「朝起きても疲れが取れない…」${b} ${m}の睡眠計測で原因が判明した`,
    patternZh: (b, m) => `“早上起床总觉得疲劳没消…”通过 ${b} ${m} 精准睡眠监测找到了根源`,
    category: "pain_point",
    angleLabel: "睡眠の質改善",
    targetAudience: "睡眠不足に悩む社会人",
  },
  {
    pattern: (b, m) => `手首に話しかけるだけで秒回答？${b} ${m}のChatGPTが想像の5倍便利`,
    patternZh: (b, m) => `对着手腕说话即可秒级应答？${b} ${m} 搭载的 ChatGPT 语音比想象中好用5倍`,
    category: "pain_point",
    angleLabel: "音声AI革命",
    targetAudience: "タイパ重視層",
  },
  {
    pattern: (b, m) => `1万円以下でこの高級感はチート！${b} ${m}が他社を圧倒する理由`,
    patternZh: (b, m) => `万元日元以下拥有这种奢华质感简直犯规！这就是 ${b} ${m} 碾压同级的秘密`,
    category: "pain_point",
    angleLabel: "圧倒的高見え",
    targetAudience: "20〜40代男性",
  },

  // 2. 効率＆ChatGPT AI音声型 (Efficiency & AI Power)
  {
    pattern: (b, m) => `手首にChatGPT搭載！${b} ${m}に話しかけるだけで仕事も学習も爆速化`,
    patternZh: (b, m) => `腕上搭载 ChatGPT！对着 ${b} ${m} 语音交互，工作与学习效率全面起飞`,
    category: "ai_power",
    angleLabel: "ChatGPT音声連携",
    targetAudience: "ビジネスマン・資格勉強中",
  },
  {
    pattern: (b, m) => `声で文字盤をAI自動生成？${b} ${m}のカスタム機能が楽しすぎる`,
    patternZh: (b, m) => `用语音一句话 AI 自动生成独家表盘？${b} ${m} 自定义功能太好玩了`,
    category: "ai_power",
    angleLabel: "AI文字盤生成",
    targetAudience: "ガジェット好き・若者",
  },
  {
    pattern: (b, m) => `スマホ開くのすら面倒な時は${b} ${m}の手首AIに聞くのが最短ルート`,
    patternZh: (b, m) => `连掏出手机都觉得麻烦时，直接问 ${b} ${m} 腕上 AI 是最快途径`,
    category: "ai_power",
    angleLabel: "即時AI検索",
    targetAudience: "タイパ・効率重視派",
  },
  {
    pattern: (b, m) => `英語の勉強計画も天気も秒で回答！${b} ${m}が腕にいる専属アシスタント`,
    patternZh: (b, m) => `英语备考规划与实时天气秒级回答！${b} ${m} 就是手腕上的专属私人助理`,
    category: "ai_power",
    angleLabel: "腕上のAI相棒",
    targetAudience: "学生・自己研鑽層",
  },
  {
    pattern: (b, m) => `文字入力ゼロ！${b} ${m}の音声対話型AIで毎日の検索がラクすぎた`,
    patternZh: (b, m) => `告别繁琐键盘打字！通过 ${b} ${m} 语音智能对话让日常查询变得极度轻松`,
    category: "ai_power",
    angleLabel: "対話型アシスタント",
    targetAudience: "全世代のスマートウォッチユーザー",
  },
  {
    pattern: (b, m) => `調べる前に手首に聞く時代！${b} ${m}が実現する次世代の生活スタイル`,
    patternZh: (b, m) => `查询资料直接问手腕的时代来了！${b} ${m} 开启次世代便捷生活方式`,
    category: "ai_power",
    angleLabel: "スマートライフ",
    targetAudience: "トレンドに敏感な層",
  },
  {
    pattern: (b, m) => `LINEもメールも腕で一括管理！${b} ${m}で重要連絡の見落としゼロへ`,
    patternZh: (b, m) => `LINE 微信与邮件腕上一体化管理！用 ${b} ${m} 彻底杜绝漏接重要工作通知`,
    category: "efficiency",
    angleLabel: "通知一括管理",
    targetAudience: "連絡が多い社会人",
  },
  {
    pattern: (b, m) => `電話が鳴ってもスマホ不要！${b} ${m}のBluetooth通話が超クリア`,
    patternZh: (b, m) => `来电无需慌忙找手机！${b} ${m} 蓝牙高清通话音质极其清脆清晰`,
    category: "efficiency",
    angleLabel: "Bluetooth通話",
    targetAudience: "運転手・アクティブワーカー",
  },
  {
    pattern: (b, m) => `下のボタンを1プッシュで即機能起動！${b} ${m}のショートカットが便利すぎ`,
    patternZh: (b, m) => `下键一键直达常用功能！${b} ${m} 自定义实体快捷键实在太方便了`,
    category: "efficiency",
    angleLabel: "自由設定ボタン",
    targetAudience: "効率化マニア",
  },

  // 3. ハードウェア＆極薄洗練デザイン型 (Gadget / Sleek Design / AMOLED)
  {
    pattern: (b, m) => `厚さわずか9.8mm！洗練シルバーの${b} ${m}がスーツに映えすぎる`,
    patternZh: (b, m) => `表身厚度仅 9.8mm！精工银色 ${b} ${m} 搭配正装西装气质格外高级出众`,
    category: "gadget",
    angleLabel: "9.8mm極薄デザイン",
    targetAudience: "スーツ通勤の社会人",
  },
  {
    pattern: (b, m) => `金属腕時計派も唸る高級感！${b} ${m}の洗練されたデザイン美`,
    patternZh: (b, m) => `连传统金属名表玩家都赞不绝口的高端质感！${b} ${m} 的精湛工业设计美学`,
    category: "gadget",
    angleLabel: "洗練メタルボディ",
    targetAudience: "時計好き・ファッション層",
  },
  {
    pattern: (b, m) => `たったの32.3g！アジア人の手首に神フィットする${b} ${m}第3世代`,
    patternZh: (b, m) => `机身仅 32.3g！为亚洲人手腕完美定制的超舒适贴合智能表 ${b} ${m}`,
    category: "gadget",
    angleLabel: "アジア人手首フィット",
    targetAudience: "装着感重視派",
  },
  {
    pattern: (b, m) => `1400nitの高輝度AMOLEDディスプレイ！${b} ${m}は直射日光でも超見やすい`,
    patternZh: (b, m) => `搭载 1400nit 峰值高亮 AMOLED 屏幕！${b} ${m} 在户外强光直射下依然极其清晰`,
    category: "gadget",
    angleLabel: "AMOLED高輝度",
    targetAudience: "アウトドア・外回り営業",
  },
  {
    pattern: (b, m) => `461PPIの超美麗Retina級画面！${b} ${m}の文字盤がもはや本物の高級時計`,
    patternZh: (b, m) => `461PPI 超视网膜级高清画质！${b} ${m} 表盘细腻程度堪比顶级真实名表`,
    category: "gadget",
    angleLabel: "超美麗Retina画面",
    targetAudience: "画質・ディテール重視層",
  },
  {
    pattern: (b, m) => `24時間着けっぱなしでもストレスゼロ！${b} ${m}の軽さが異次元`,
    patternZh: (b, m) => `24小时全天佩戴毫无压迫感！${b} ${m} 的轻盈佩戴体验令人惊喜`,
    category: "gadget",
    angleLabel: "24hストレスフリー",
    targetAudience: "就寝時も着けたい人",
  },
  {
    pattern: (b, m) => `愛猫の写真もAI生成も文字盤に！${b} ${m}で毎日手首を着せ替え`,
    patternZh: (b, m) => `无论是爱宠萌照还是 AI 创意画作都能设为表盘！${b} ${m} 让手腕每天换新装`,
    category: "gadget",
    angleLabel: "自由自在文字盤",
    targetAudience: "ペット飼育者・若者",
  },

  // 4. 健康管理＆睡眠追跡型 (Health / Sleep / Health Manager)
  {
    pattern: (b, m) => `昼寝やデスクのひと息まで記録！${b} ${m}の睡眠管理がガチで精密`,
    patternZh: (b, m) => `连午间小憩和短暂休憩都能精准捕获！${b} ${m} 的睡眠监测极其严谨精准`,
    category: "spec_power",
    angleLabel: "仮眠・昼寝追跡",
    targetAudience: "睡眠改善したい人",
  },
  {
    pattern: (b, m) => `24時間、心拍数と血中酸素を自動モニタリング！健康のお守りは${b} ${m}`,
    patternZh: (b, m) => `24小时自动连续监测心率与血氧！手腕上的健康守护神就是 ${b} ${m}`,
    category: "spec_power",
    angleLabel: "24hバイタル測定",
    targetAudience: "健康意識の高い社会人・シニア",
  },
  {
    pattern: (b, m) => `ストレス値が見える化される！${b} ${m}の呼吸トレーニングで即リフレッシュ`,
    patternZh: (b, m) => `实时可视化身体压力指数！搭配 ${b} ${m} 呼吸训练快速满血复活`,
    category: "spec_power",
    angleLabel: "ストレス＆呼吸管理",
    targetAudience: "プレッシャーが多いビジネスマン",
  },
  {
    pattern: (b, m) => `浅い眠り・深い眠り・レム睡眠を完全可視化！${b} ${m}で最高の朝を迎える`,
    patternZh: (b, m) => `深度睡眠、浅睡与快速眼动期全面图表呈现！用 ${b} ${m} 开启活力充沛的清晨`,
    category: "spec_power",
    angleLabel: "睡眠スコア分析",
    targetAudience: "朝起きるのが苦手な人",
  },
  {
    pattern: (b, m) => `大人の体調管理は手首から！${b} ${m}が毎日の健康スコアをフルサポート`,
    patternZh: (b, m) => `成熟职场人的自律健康管理从手腕起步！${b} ${m} 全方位护航每日健康状态`,
    category: "spec_power",
    angleLabel: "大人の健康管理",
    targetAudience: "30〜50代健康志向層",
  },

  // 5. バッテリー＆急速充電＆スポーツ・防水型 (Battery & Sports)
  {
    pattern: (b, m) => `出勤前の30分で55%充電！${b} ${m}の急速充電が忙しい朝を救う`,
    patternZh: (b, m) => `出门前仅充30分钟即可补能55%！${b} ${m} 极速快充拯救繁忙早晨`,
    category: "spec_power",
    angleLabel: "30分急速充電",
    targetAudience: "忙しい朝を過ごす人",
  },
  {
    pattern: (b, m) => `通常使用で8〜10日、待機21日！${b} ${m}で充電の呪縛から解放されよう`,
    patternZh: (b, m) => `日常续航长达 8-10 天，超长待机 21 天！用 ${b} ${m} 告别频繁充电焦虑`,
    category: "spec_power",
    angleLabel: "ロングバッテリー",
    targetAudience: "旅行・出張が多い人",
  },
  {
    pattern: (b, m) => `150種以上のスポーツモード搭載！${b} ${m}でランニングも筋トレも記録`,
    patternZh: (b, m) => `内置 150+ 种专业运动模式！${b} ${m} 陪伴记录每一次跑步与器械训练`,
    category: "spec_power",
    angleLabel: "150+スポーツモード",
    targetAudience: "ランナー・ジム通い",
  },
  {
    pattern: (b, m) => `手洗い・水濡れも完全安心！3ATM防水仕様の${b} ${m}が普段使いに最強`,
    patternZh: (b, m) => `日常洗手洗脸淋雨完全无惧！3ATM 专业防水的 ${b} ${m} 日常佩戴超省心`,
    category: "spec_power",
    angleLabel: "3ATM日常防水",
    targetAudience: "アクティブ派・主婦主夫",
  },
  {
    pattern: (b, m) => `GPS連動＆緊急時SOS対応！運動中も安心な${b} ${m}のアクティブサポート`,
    patternZh: (b, m) => `GPS 轨迹联动与紧急 SOS 呼救保障！户外运动时 ${b} ${m} 带来全方位安心守护`,
    category: "spec_power",
    angleLabel: "GPS＆緊急SOS",
    targetAudience: "登山・アウトドア愛好家",
  },

  // 6. 秘密・裏技・暴露型 (Secret Hack / Viral Shock)
  {
    pattern: (b, m) => `【暴露】仕事ができる男性がこっそり身につけてる${b} ${m}の正体`,
    patternZh: (b, m) => `【揭秘】高效率职场精英都在悄悄佩戴的 ${b} ${m} 究竟有多强大`,
    category: "secret_hack",
    angleLabel: "デキる男の秘密",
    targetAudience: "キャリアアップ志向層",
  },
  {
    pattern: (b, m) => `「それどこの時計？」と聞かれまくる${b} ${m}、実は1万円以下でした`,
    patternZh: (b, m) => `被同事朋友频繁夸赞追问品牌的 ${b} ${m}，实际价格居然不到万元日元`,
    category: "secret_hack",
    angleLabel: "高見え自慢フック",
    targetAudience: "センスを褒められたい人",
  },
  {
    pattern: (b, m) => `Amazonで時計探してる人ちょっと待って！${b} ${m}が完全にバグってる`,
    patternZh: (b, m) => `在亚马逊挑选手表的人先等等！${b} ${m} 的越级配置和价格直接拉满`,
    category: "secret_hack",
    angleLabel: "買い急ぎストップ",
    targetAudience: "ECショッピング層",
  },
  {
    pattern: (b, m) => `社内トップ営業の腕に光るシルバーの時計…実は${b} ${m}だった件`,
    patternZh: (b, m) => `公司顶尖销售手腕上那块熠熠生辉的高级银色手表…原来就是 ${b} ${m}`,
    category: "secret_hack",
    angleLabel: "営業トップの愛用品",
    targetAudience: "営業職・若手社員",
  },
  {
    pattern: (b, m) => `【神アイテム】2026年買って人生変わったスマートウォッチNo.1は${b} ${m}`,
    patternZh: (b, m) => `【年度神物】2026年最能提升生活幸福感的智能手表榜首：${b} ${m}`,
    category: "secret_hack",
    angleLabel: "ベストバイ推薦",
    targetAudience: "トレンド好き",
  },

  // 7. 疑問・問いかけ型 (Question / Engagement)
  {
    pattern: (b, m) => `時計にChatGPT付いてたら何聞く？${b} ${m}が想像以上に賢すぎた`,
    patternZh: (b, m) => `如果手表搭载了 ChatGPT 你会问什么？${b} ${m} 的聪明程度远超预期`,
    category: "question",
    angleLabel: "機能問いかけ",
    targetAudience: "コメント欄巻き込み",
  },
  {
    pattern: (b, m) => `これ1万円以下って信じられる？${b} ${m}の見た目が完全に高級メタル時計`,
    patternZh: (b, m) => `敢相信这居然不到万元日元？${b} ${m} 外观完全就是顶级精工金属名表`,
    category: "question",
    angleLabel: "価格当てクイズ",
    targetAudience: "全TikTok視聴者",
  },
  {
    pattern: (b, m) => `スマートウォッチ毎日充電する派？${b} ${m}なら週1回でOKだけどどう？`,
    patternZh: (b, m) => `你还在忍受每天给智能表充电吗？换上 ${b} ${m} 每周只需充一次电`,
    category: "question",
    angleLabel: "充電頻度議論",
    targetAudience: "ガジェットユーザー",
  },
  {
    pattern: (b, m) => `自分の睡眠スコア知ってる？${b} ${m}を着けて寝たら衝撃の事実が発覚`,
    patternZh: (b, m) => `你知道自己的真实睡眠质量得分吗？戴上 ${b} ${m} 入睡后发现了惊人真相`,
    category: "question",
    angleLabel: "睡眠スコア興味づけ",
    targetAudience: "ヘルスケア関心層",
  },
  {
    pattern: (b, m) => `手首に話しかけるだけで文字盤変わるの凄くない？${b} ${m}のAI機能`,
    patternZh: (b, m) => `对着手腕说句话就能秒换专属定制表盘？感受 ${b} ${m} 震撼的 AI 科技`,
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

const HOOK_PREFIX_PAIRS: [string, string][] = [
  ["【2026年最新】", "【2026最新款】"],
  ["【コスパ神】", "【性价比神机】"],
  ["【驚愕】", "【震撼实测】"],
  ["【正直レビュー】", "【真实深度测评】"],
  ["【これヤバい】", "【真香预警！】"],
  ["【即買い推奨】", "【强烈推荐入手】"],
  ["【手首革命】", "【腕上智能革命】"],
  ["【暴露】", "【内行独家揭秘】"],
  ["【1万円以下の奇跡】", "【千元档性价比奇迹】"],
  ["【次世代AI】", "【次世代腕上AI】"],
  ["【仕事術】", "【高效职场利器】"],
  ["【買わないと損】", "【不买真的亏大了】"],
  ["【睡眠改善】", "【睡眠健康大改善】"],
  ["【洗練シルバー】", "【精工银色美学】"],
  ["【超軽量】", "【极致轻盈无感】"]
];

const HOOK_SUFFIX_PAIRS: [string, string][] = [
  ["がガチで神機すぎる！", " 简直太好用了！"],
  ["のコスパが完全に崩壊してる件", " 性价比完全拉满了"],
  ["で生活の質が爆上がりした！", " 生活品质直线提升！"],
  ["を手放せない理由がこれ", " 这就是离不开它的原因"],
  ["の実力が想像の10倍凄かった", " 实力比想象中强10倍"],
  ["がマジで買い一択な理由", " 绝对是买它不后悔的首选理由"],
  ["で日々のタイパが劇的に改善した", " 每天的效率大幅提升"],
  ["は全社会人が持っておくべきアイテム", " 是每位职场人都值得拥有的装备"],
  ["の高級感が半端じゃない", " 高级质感真的绝了"],
  ["のバッテリー持ちがチート級", " 续航表现简直如同开挂"]
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
    let hookZh = tpl.patternZh ? tpl.patternZh(brand, model, customKeyword) : "";

    // Apply smart permutations for rich uniqueness
    const styleRoll = Math.random();
    if (styleRoll < 0.25 && !baseHook.startsWith("【")) {
      const [prefix, pZh] = HOOK_PREFIX_PAIRS[Math.floor(Math.random() * HOOK_PREFIX_PAIRS.length)];
      baseHook = `${prefix}${baseHook}`;
      if (hookZh) {
        hookZh = `${pZh}${hookZh}`;
      }
    } else if (styleRoll > 0.75 && baseHook.length < 32 && !baseHook.endsWith("！") && !baseHook.endsWith("？")) {
      const [suffix, sZh] = HOOK_SUFFIX_PAIRS[Math.floor(Math.random() * HOOK_SUFFIX_PAIRS.length)];
      baseHook = `${baseHook}${suffix}`;
      if (hookZh) {
        hookZh = `${hookZh}${sZh}`;
      }
    }

    if (customKeyword && customKeyword.trim() && !baseHook.includes(customKeyword.trim())) {
      if (Math.random() > 0.4) {
        baseHook = `【${customKeyword.trim()}】${baseHook}`;
        if (hookZh) {
          hookZh = `【${customKeyword.trim()}】${hookZh}`;
        }
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
      translationZh: hookZh || undefined,
    });
  }

  return results.slice(0, 50);
}
