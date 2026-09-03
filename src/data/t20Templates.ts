import { AngleCategory, GeneratedTitle } from "../types";

export const T20_FIXED_TAGS = "#FOSMET #T20 #スマートウォッチ #屋外 #スポーツ";

interface HookTemplate {
  pattern: (brand: string, model: string, keyword?: string) => string;
  patternZh: (brand: string, model: string, keyword?: string) => string;
  category: AngleCategory;
  angleLabel: string;
  targetAudience: string;
}

export const T20_HOOK_TEMPLATES: HookTemplate[] = [
  // 1. 痛点反転・高価アウトドア時計打破 (Pain point / Counter-intuitive)
  {
    pattern: (b, m) => `10万円の高級アウトドア時計、もう買うな！${b} ${m}がコスパ崩壊すぎる`,
    patternZh: (b, m) => `别再花10万日元买昂贵户外表了！${b} ${m} 的性价比直接刷新认知`,
    category: "pain_point",
    angleLabel: "脱・高額アウトドア時計",
    targetAudience: "登山・アウトドア愛好家",
  },
  {
    pattern: (b, m) => `スマホ持たずに走りたい人全員集合！${b} ${m}の多星GNSSがマジで自由`,
    patternZh: (b, m) => `想彻底摆脱手机束缚跑步的人集合！${b} ${m} 多星 GNSS 独立定位带来真正自由`,
    category: "pain_point",
    angleLabel: "手ぶらランニング",
    targetAudience: "ランナー・ジョギング派",
  },
  {
    pattern: (b, m) => `水に濡れて壊れた経験ある？${b} ${m}の「スマート排水」がチートすぎる件`,
    patternZh: (b, m) => `曾有过进水损坏手表的惨痛经历？${b} ${m} 的“智能声波排水”黑科技如同开挂`,
    category: "pain_point",
    angleLabel: "水没・故障ストレス解消",
    targetAudience: "釣り人・ウォータースポーツ層",
  },
  {
    pattern: (b, m) => `登山で道に迷う恐怖とおさらば！${b} ${m}の電子コンパス＆高度計が頼もしすぎる`,
    patternZh: (b, m) => `告别登山迷路的恐惧与焦虑！${b} ${m} 搭载的电子指南针与高度计极其可靠`,
    category: "pain_point",
    angleLabel: "遭難・道迷い防止",
    targetAudience: "ハイカー・登山初心者",
  },
  {
    pattern: (b, m) => `「すぐ傷つく弱々スマートウォッチ」に嫌気がさした男たちへ贈る${b} ${m}`,
    patternZh: (b, m) => `受够了容易磕碰刮花的脆弱手表？献给硬汉的军规级装甲 ${b} ${m}`,
    category: "pain_point",
    angleLabel: "タフネス極限耐久",
    targetAudience: "現場ワーカー・タフ派男性",
  },
  {
    pattern: (b, m) => `運動中のスマホ確認でイラつく人！${b} ${m}の専用スポーツボタンで即計測`,
    patternZh: (b, m) => `运动中频繁看手机太烦躁？${b} ${m} 实体专属运动按键一按即刻开练`,
    category: "pain_point",
    angleLabel: "ワンタッチ操作",
    targetAudience: "筋トレ・ジム通い",
  },
  {
    pattern: (b, m) => `【絶望】アウトドアで時計の充電切れた人…${b} ${m}のタフバッテリー見ろ`,
    patternZh: (b, m) => `【绝望瞬间】在户外遭遇手表电量耗尽？看看 ${b} ${m} 强悍持久的怪兽级续航`,
    category: "pain_point",
    angleLabel: "バッテリー切れトラウマ",
    targetAudience: "キャンプ・車中泊ファン",
  },
  {
    pattern: (b, m) => `雨の日の運動で時計が壊れる心配ゼロ！${b} ${m}の物理排水が凄すぎた`,
    patternZh: (b, m) => `雨天运动完全不用担心手表进水！${b} ${m} 物理声波震动排水太神奇了`,
    category: "pain_point",
    angleLabel: "雨天スポーツ安心",
    targetAudience: "屋外アスリート",
  },
  {
    pattern: (b, m) => `【後悔】もっと早く買えばよかった…${b} ${m}が最強のアウトドア相棒だった`,
    patternZh: (b, m) => `【后悔晚买】真后悔没早点入手…${b} ${m} 堪称当下最值得信赖的户外搭档`,
    category: "pain_point",
    angleLabel: "後悔フック",
    targetAudience: "全アクティブ男性",
  },
  {
    pattern: (b, m) => `気圧急変で頭痛や天候悪化に困る人！${b} ${m}の24h気圧センサーが神`,
    patternZh: (b, m) => `受气压骤变与天气突变困扰的人！${b} ${m} 24小时连续气压传感器犹如预警神器`,
    category: "pain_point",
    angleLabel: "気圧変化対策",
    targetAudience: "気象病・山ガール・山男",
  },

  // 2. マルチGNSS＆電子コンパス・気圧高度計型 (Multi-GNSS & Outdoor Sensors)
  {
    pattern: (b, m) => `スマホ不要でルート記録！${b} ${m}のマルチGNSS測位が精密すぎる`,
    patternZh: (b, m) => `无需携带手机即可精准记录运动轨迹！${b} ${m} 多星 GNSS 卫星定位极其精确`,
    category: "gadget",
    angleLabel: "単独高精度GPS記録",
    targetAudience: "トレイルランナー・マラソン派",
  },
  {
    pattern: (b, m) => `手首に本格計器を搭載！${b} ${m}の電子コンパス＆高度計が男心をくすぐる`,
    patternZh: (b, m) => `手腕搭载全套专业户外仪表！${b} ${m} 电子指南针与高度计点燃硬汉探索欲`,
    category: "gadget",
    angleLabel: "腕上の本格計器",
    targetAudience: "ミリタリー・計器好き",
  },
  {
    pattern: (b, m) => `過去24時間の気圧変化を完全可視化！${b} ${m}で天候の急変を察知せよ`,
    patternZh: (b, m) => `过去24小时气压变化曲线完整呈现！用 ${b} ${m} 提前敏锐洞察恶劣天气突变`,
    category: "gadget",
    angleLabel: "24h気圧モニタリング",
    targetAudience: "本格登山者・ソロキャンパー",
  },
  {
    pattern: (b, m) => `電波の届かない山奥でも安心！${b} ${m}の独立オフライン測位ナビ`,
    patternZh: (b, m) => `即使在毫无信号的深山丛林也安心！${b} ${m} 独立离线卫星定位导航保障安全`,
    category: "gadget",
    angleLabel: "オフライン山岳ナビ",
    targetAudience: "山岳ガイド・渓流釣り師",
  },
  {
    pattern: (b, m) => `標高と方位がリアルタイムで分かる！${b} ${m}がアウトドアの必須装備な理由`,
    patternZh: (b, m) => `实时掌握当前海拔高度与精准朝向！这就是 ${b} ${m} 成为户外探险必备装备的理由`,
    category: "gadget",
    angleLabel: "標高・方位リアルタイム表示",
    targetAudience: "アウトドアギア好き",
  },
  {
    pattern: (b, m) => `複数の衛星から瞬時にキャッチ！${b} ${m}のマルチGNSS測位スピードに驚愕`,
    patternZh: (b, m) => `瞬间捕捉多颗全球卫星信号！${b} ${m} 多卫星定位搜星速度令人惊艳`,
    category: "gadget",
    angleLabel: "マルチ衛星キャッチ",
    targetAudience: "テクノロジー派ランナー",
  },
  {
    pattern: (b, m) => `手首のコンパスで迷わず前進！${b} ${m}が冒険を安全にナビゲート`,
    patternZh: (b, m) => `腕上高精罗盘指引前进方向！${b} ${m} 为未知探索旅程提供全程安全护航`,
    category: "gadget",
    angleLabel: "高精度方位磁針",
    targetAudience: "サバイバル・ブッシュクラフト",
  },

  // 3. スマート排水機能型 (Smart Water Ejection & Waterproof)
  {
    pattern: (b, m) => `水が入ったら超振動で吹き飛ばす！${b} ${m}のスマート排水機能が魔法レベル`,
    patternZh: (b, m) => `遇水后利用超频高震动瞬间排出水汽！${b} ${m} 的智能排水功能简直如魔法般神奇`,
    category: "ai_power",
    angleLabel: "超振動スマート排水",
    targetAudience: "スイマー・サーファー",
  },
  {
    pattern: (b, m) => `【実演】水泳後に${b} ${m}の排水ボタン押したら水滴が飛び出してきた！`,
    patternZh: (b, m) => `【真机演示】游泳后按下 ${b} ${m} 排水键，微孔水珠瞬间被震飞弹射！`,
    category: "ai_power",
    angleLabel: "排水実演フック",
    targetAudience: "ガジェット検証好き",
  },
  {
    pattern: (b, m) => `大雨・泥水・水没もへっちゃら！${b} ${m}の自己防衛排水が頼もしすぎる`,
    patternZh: (b, m) => `暴雨泥沙浸泡完全不惧！${b} ${m} 的主动防御自洁排水让人倍感安心`,
    category: "ai_power",
    angleLabel: "泥水・豪雨耐久",
    targetAudience: "バイク乗り・配達員",
  },
  {
    pattern: (b, m) => `スピーカー内の水を一瞬で排出！${b} ${m}なら水濡れ後の通話もクリア`,
    patternZh: (b, m) => `一秒排清扬声器腔体内积水！${b} ${m} 出水后即刻恢复清晰纯净通话音质`,
    category: "ai_power",
    angleLabel: "クリア通話復帰",
    targetAudience: "現場作業員・マリンスポーツ",
  },
  {
    pattern: (b, m) => `水から上がって1秒で排水完了！${b} ${m}のアウトドア進化が止まらない`,
    patternZh: (b, m) => `出水瞬间一秒完成高效排水！${b} ${m} 引领户外穿戴黑科技新突破`,
    category: "ai_power",
    angleLabel: "瞬間排水イノベーション",
    targetAudience: "サウナ・プール好き",
  },

  // 4. 100+種スポーツ＆Bluetooth通話型 (100+ Sports & Bluetooth Calls)
  {
    pattern: (b, m) => `100種類以上のスポーツに対応！${b} ${m}でランニングも筋トレも全記録`,
    patternZh: (b, m) => `全面支持 100+ 种运动模式！用 ${b} ${m} 记录跑步与器械训练的全维数据`,
    category: "efficiency",
    angleLabel: "100種スポーツ対応",
    targetAudience: "フィットネス愛好家",
  },
  {
    pattern: (b, m) => `運動専用ボタンを1プッシュで即計測開始！${b} ${m}の操作性がプロ仕様`,
    patternZh: (b, m) => `专属运动物理键一键直接开测！${b} ${m} 带来专业级运动操控体验`,
    category: "efficiency",
    angleLabel: "専用スポーツボタン",
    targetAudience: "ストイックアスリート",
  },
  {
    pattern: (b, m) => `スマホ出さずに手首で直接電話発信！${b} ${m}のBluetooth通話が超便利`,
    patternZh: (b, m) => `不用掏手机直接在手腕拨号接听！${b} ${m} 蓝牙高清通话带来极致便利`,
    category: "efficiency",
    angleLabel: "手首Bluetooth通話",
    targetAudience: "ドライブ・作業中の社会人",
  },
  {
    pattern: (b, m) => `音声アシスタント搭載！${b} ${m}に話しかけてタイマーもアラームも一発設定`,
    patternZh: (b, m) => `搭载智能语音助手！对着 ${b} ${m} 说话即可一语设定倒计时与闹钟`,
    category: "efficiency",
    angleLabel: "音声AIアシスタント",
    targetAudience: "タイパ重視層",
  },
  {
    pattern: (b, m) => `LINE・メール・着信を腕で一括確認！${b} ${m}で大事な連絡を逃さない`,
    patternZh: (b, m) => `微信信息与来电抬手一览无余！戴上 ${b} ${m} 绝不漏接任何重要突发通知`,
    category: "efficiency",
    angleLabel: "重要通知一括管理",
    targetAudience: "連絡が多いアクティブワーカー",
  },
  {
    pattern: (b, m) => `音楽コントロール＆カメラ遠隔シャッター！${b} ${m}と出かける休日が楽しすぎ`,
    patternZh: (b, m) => `切歌控制与相机远程遥控快门！戴着 ${b} ${m} 度过精彩充实的户外周末`,
    category: "efficiency",
    angleLabel: "休日レジャー相棒",
    targetAudience: "ソロキャンパー・Vlogger",
  },

  // 5. 24h健康＆睡眠＆タフネス型 (Health, Vital, Sleep)
  {
    pattern: (b, m) => `心拍数・血中酸素・ストレスを24時間監視！${b} ${m}が命を守るガーディアン`,
    patternZh: (b, m) => `心率、血氧与身体压力 24 小时全天候守护！${b} ${m} 成为守护健康安全的第一道防线`,
    category: "spec_power",
    angleLabel: "24hバイタル監視",
    targetAudience: "健康志向のハードワーカー",
  },
  {
    pattern: (b, m) => `登山中の過負荷を警告！${b} ${m}のリアルタイム心拍モニタリング`,
    patternZh: (b, m) => `登山徒步过载实时主动告警！${b} ${m} 连续心率监测让户外更加安全可控`,
    category: "spec_power",
    angleLabel: "過負荷警告・安全管理",
    targetAudience: "シニアハイカー・登山愛好家",
  },
  {
    pattern: (b, m) => `深い眠りと浅い眠りを完全分析！${b} ${m}でアウトドア翌日の回復度をチェック`,
    patternZh: (b, m) => `深度睡眠与浅睡阶段精准分析！通过 ${b} ${m} 评估户外高强度体能恢复情况`,
    category: "spec_power",
    angleLabel: "睡眠回復スコア",
    targetAudience: "体力回復を重視する人",
  },
  {
    pattern: (b, m) => `ストレスが溜まったら深呼吸！${b} ${m}の呼吸トレーニングで即メンタル整う`,
    patternZh: (b, m) => `感到疲惫压力时深呼吸调节！配合 ${b} ${m} 引导式呼吸训练即刻平复身心`,
    category: "spec_power",
    angleLabel: "メンタル・呼吸ケア",
    targetAudience: "プレッシャーの多いビジネスマン",
  },
  {
    pattern: (b, m) => `過酷な環境でもビクともしない！${b} ${m}のタフネス軍規級ボディ`,
    patternZh: (b, m) => `严苛极端恶劣环境依然坚如磐石！${b} ${m} 拥有无惧严寒风沙的军工级坚韧机身`,
    category: "spec_power",
    angleLabel: "軍規級タフネス",
    targetAudience: "ミリタリーテイスト好き",
  },
  {
    pattern: (b, m) => `女性の体調管理もお任せ！${b} ${m}の周期リマインダーが超安心`,
    patternZh: (b, m) => `贴心管理身体周期变化！${b} ${m} 智能周期提醒让户外出行更加从容安心`,
    category: "spec_power",
    angleLabel: "女性周期サポート",
    targetAudience: "アウトドア女子",
  },

  // 6. 秘密・裏技・自慢型 (Secret Hack & Rugged Showcase)
  {
    pattern: (b, m) => `【暴露】アウトドア上級者がこっそり愛用する${b} ${m}の破壊的コスパ`,
    patternZh: (b, m) => `【揭秘】资深户外老驴都在偷偷佩戴的 ${b} ${m}，性价比堪称降维打击`,
    category: "secret_hack",
    angleLabel: "上級者の秘密ギア",
    targetAudience: "ギア通・キャンパー",
  },
  {
    pattern: (b, m) => `「その無骨な時計どこの？」と聞かれまくる${b} ${m}の圧倒的存在感`,
    patternZh: (b, m) => `被户外队友疯狂询问品牌的硬朗战术名表 ${b} ${m}，硬核气场完全拉满`,
    category: "secret_hack",
    angleLabel: "無骨デザイン自慢",
    targetAudience: "男前ギア好き",
  },
  {
    pattern: (b, m) => `有名アウトドアブランド並みの機能をこの価格で？${b} ${m}がチートすぎる`,
    patternZh: (b, m) => `媲美大牌万元级专业户外手表的满配功能！${b} ${m} 的定价实在太让人惊喜`,
    category: "secret_hack",
    angleLabel: "ブランド越えコスパ",
    targetAudience: "賢く買い物したい層",
  },
  {
    pattern: (b, m) => `Amazonでアウトドア時計探してる人ちょっと待って！${b} ${m}が最強の正解`,
    patternZh: (b, m) => `正在网购挑选中高端户外表的朋友等等！${b} ${m} 才是当前最强标准答案`,
    category: "secret_hack",
    angleLabel: "アウトドア時計の正解",
    targetAudience: "ECショッピング層",
  },
  {
    pattern: (b, m) => `【男のロマン】電子コンパス・気圧計・GPS全部入りの${b} ${m}が熱すぎる`,
    patternZh: (b, m) => `【男人的终极浪漫】集指南针、气压高度计、多星定位一体的 ${b} ${m} 简直帅爆`,
    category: "secret_hack",
    angleLabel: "男のロマン全部入り",
    targetAudience: "少年心を忘れない大人",
  },

  // 7. 疑問・コメント誘導型 (Question & Interaction)
  {
    pattern: (b, m) => `時計から水が飛び出す「スマート排水」知ってる？${b} ${m}の実演がエグい`,
    patternZh: (b, m) => `你见过能一键震动向外喷射积水的智能手表吗？${b} ${m} 实测排水画面太震撼了`,
    category: "question",
    angleLabel: "排水実演クイズ",
    targetAudience: "TikTok視聴者全員",
  },
  {
    pattern: (b, m) => `【質問】アウトドア時計に一番求める機能は何？${b} ${m}なら全部揃ってます`,
    patternZh: (b, m) => `【讨论】你觉得一款户外表最重要的核心功能是什么？${b} ${m} 已经全部配齐`,
    category: "question",
    angleLabel: "コメント欄巻き込み",
    targetAudience: "アウトドア好き",
  },
  {
    pattern: (b, m) => `スマホ持たずに走る派？持つ派？${b} ${m}があれば手ぶら一択だけどどう？`,
    patternZh: (b, m) => `你跑步时习惯带手机还是空手？有了自带独立 GPS 的 ${b} ${m} 必须选择轻装上阵`,
    category: "question",
    angleLabel: "手ぶらラン議論",
    targetAudience: "ランナーコミュニティ",
  },
  {
    pattern: (b, m) => `このゴツい本格デザインでBluetooth通話もできるの凄くない？${b} ${m}`,
    patternZh: (b, m) => `如此硬派粗犷的户外装甲机身，居然还能高清蓝牙通话！感受 ${b} ${m} 的全能魅力`,
    category: "question",
    angleLabel: "ギャップ萌えフック",
    targetAudience: "ガジェットファン",
  },
  {
    pattern: (b, m) => `山登りする人必見！${b} ${m}の気圧高度計、使ったことある？`,
    patternZh: (b, m) => `喜欢登山徒步的朋友千万别错过！你体验过 ${b} ${m} 的专业气压高度计吗？`,
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

const T20_PREFIX_PAIRS: [string, string][] = [
  ["【アウトドア必携】", "【户外探险必备】"],
  ["【神コスパ】", "【极限性价比神装】"],
  ["【プロ仕様】", "【专业级硬核配置】"],
  ["【驚愕のタフネス】", "【震撼军规抗造】"],
  ["【水没知らず】", "【暴雨水下无所畏惧】"],
  ["【男のロマン】", "【男人的硬派浪漫】"],
  ["【登山者必見】", "【登山徒步玩家必看】"],
  ["【最強GPS】", "【多星高精卫星定位】"],
  ["【実機レビュー】", "【真机硬核实测】"],
  ["【衝撃の排水機能】", "【震撼声波排水黑科技】"],
  ["【2026年最新】", "【2026最新款】"],
  ["【手ぶらラン革命】", "【轻装跑步新体验】"],
  ["【買ってよかった】", "【买完直呼真香】"],
  ["【圧倒的タフ】", "【硬派装甲级机身】"]
];

const T20_SUFFIX_PAIRS: [string, string][] = [
  ["がガチで神ギアすぎる！", " 简直是户外神级装备！"],
  ["の実力が想像の10倍凄かった", " 真正实力比想象强10倍"],
  ["のコスパが完全に崩壊してる件", " 性价比直接拉满了"],
  ["を手放せない理由がこれ", " 这就是离不开它的原因"],
  ["でアウトドアライフが劇的に快適に！", " 让户外探险变得极度安心与舒适！"],
  ["は全登山者が持つべき逸品", " 是每位登山爱好者都值得拥有的硬核好物"],
  ["の排水機能がマジで魔法", " 声波排水功能真的像魔法一样神奇"],
  ["のタフネスさが圧倒的すぎる", " 坚固耐造程度实在太惊艳了"],
  ["が買い一択な理由", " 绝对是闭眼入手的首选理由"]
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
    let hookZh = tpl.patternZh ? tpl.patternZh(brand, model, customKeyword) : "";

    // Apply smart permutations
    const styleRoll = Math.random();
    if (styleRoll < 0.25 && !baseHook.startsWith("【")) {
      const [prefix, pZh] = T20_PREFIX_PAIRS[Math.floor(Math.random() * T20_PREFIX_PAIRS.length)];
      baseHook = `${prefix}${baseHook}`;
      if (hookZh) {
        hookZh = `${pZh}${hookZh}`;
      }
    } else if (styleRoll > 0.75 && baseHook.length < 32 && !baseHook.endsWith("！") && !baseHook.endsWith("？")) {
      const [suffix, sZh] = T20_SUFFIX_PAIRS[Math.floor(Math.random() * T20_SUFFIX_PAIRS.length)];
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
      translationZh: hookZh || undefined,
    });
  }

  return results.slice(0, 50);
}
