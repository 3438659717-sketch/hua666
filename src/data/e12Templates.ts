import { AngleCategory, GeneratedTitle } from "../types";

export const E12_FIXED_TAGS = "#FOSMET #E12 #Bluetoothヘッドホン #デイリーレコード #AIイヤホン";

export interface E12HookTemplate {
  pattern: (brand: string, model: string) => string;
  patternZh: (brand: string, model: string) => string;
  category: AngleCategory;
  angleLabel: string;
  targetAudience: string;
}

export const E12_HOOK_TEMPLATES: E12HookTemplate[] = [
  // 1. pain_point: 痛点反转・告别手持拍摄与传统耳机束缚
  {
    pattern: (b, m) => `【衝撃】まだスマホ構えてVlog撮ってるの？${b} ${m}なら耳につけるだけで手ぶら日常動画が完成`,
    patternZh: (b, m) => `【震撼】还在举着手机拍日常Vlog？戴上 ${b} ${m} 就能完全解放双手完成第一视角视频`,
    category: "pain_point",
    angleLabel: "撮影痛点・脱スマホ",
    targetAudience: "Vlog初心者・日常記録派",
  },
  {
    pattern: (b, m) => `耳を塞ぐイヤホンの圧迫感とサヨナラ！${b} ${m}は1日中ゼロプレッシャーなオープンイヤー革命`,
    patternZh: (b, m) => `告别入耳式耳机的涨耳压迫感！${b} ${m} 带来全天候零负担的不入耳开放式听觉革命`,
    category: "pain_point",
    angleLabel: "オープンイヤー・解放感",
    targetAudience: "テレワーク・長時間着用派",
  },
  {
    pattern: (b, m) => `「スマホを取り出したら決定的瞬間を逃した…」${b} ${m}なら耳元ワンタップで即1080P撮影`,
    patternZh: (b, m) => `“刚掏出手机就错过了绝美瞬间…” 用 ${b} ${m} 耳边轻触即可即刻开启1080P超清录制`,
    category: "pain_point",
    angleLabel: "シャッターチャンス即時性",
    targetAudience: "ペット愛好家・アクティブ派",
  },
  {
    pattern: (b, m) => `周りの音が聞こえないイヤホンはもう危険！${b} ${m}で安全ランニング＆迫力16mm高音質を両立`,
    patternZh: (b, m) => `听不到周围环境音的耳机太危险！${b} ${m} 兼顾户外安全跑步与16mm震撼大动圈澎湃音质`,
    category: "pain_point",
    angleLabel: "安全安心・オープン型",
    targetAudience: "ランナー・サイクリスト",
  },
  {
    pattern: (b, m) => `歩きスマホで動画撮るの危なくない？${b} ${m}なら完全ハンズフリーで安全にデイリーレコード`,
    patternZh: (b, m) => `边走路边举手机拍视频太危险？用 ${b} ${m} 真正解放双手安全记录每日生活`,
    category: "pain_point",
    angleLabel: "歩きスマホ解消",
    targetAudience: "散歩・旅行好き",
  },
  {
    pattern: (b, m) => `「これ何？」って検索する手間ゼロ！${b} ${m}のAIカメラに聞くだけで瞬間回答してくれる時代`,
    patternZh: (b, m) => `免去手动打字搜索的繁琐！向 ${b} ${m} 的 AI 镜头随口提问即刻获得百科级解答`,
    category: "pain_point",
    angleLabel: "検索の手間ゼロ化",
    targetAudience: "好奇心旺盛なガジェット派",
  },
  {
    pattern: (b, m) => `重いアクションカメラはもう要らない！${b} ${m}なら超軽量イヤホンだけでPOV一人称動画が撮れる`,
    patternZh: (b, m) => `再也不需要沉重的运动相机！${b} ${m} 仅凭超轻量耳机就能拍摄极具沉浸感的POV第一人称大片`,
    category: "pain_point",
    angleLabel: "軽装化・アクションカメラ代替",
    targetAudience: "旅行者・アウトドア派",
  },
  {
    pattern: (b, m) => `海外旅行の言葉の壁で困ったことない？${b} ${m}のリアルタイム同時通訳が神レベルで助かる`,
    patternZh: (b, m) => `在海外旅行中曾因语言不通而苦恼？${b} ${m} 的实时多语言同声传译功能简直如同神助`,
    category: "pain_point",
    angleLabel: "言語の壁解消",
    targetAudience: "海外旅行・語学学習者",
  },

  // 2. efficiency: 音声操作・日常Vlogデイリーレコード・タイパ
  {
    pattern: (b, m) => `「Hi Luma、写真撮って」の一言でパシャリ！${b} ${m}の音声AIカメラで日常が映画になる`,
    patternZh: (b, m) => `一句“Hi Luma，拍照”瞬间定格！用 ${b} ${m} 的语音 AI 相机把日常生活拍成电影`,
    category: "efficiency",
    angleLabel: "音声コマンド・超タイパ",
    targetAudience: "時短派・Vlogger",
  },
  {
    pattern: (b, m) => `料理中・作業中も手が汚れたままでOK！${b} ${m}なら完全ハンズフリーでメイキング動画が撮れる`,
    patternZh: (b, m) => `烹饪做饭、手工制作即使双手沾满油污也没关系！${b} ${m} 全程免触拍摄创作过程`,
    category: "efficiency",
    angleLabel: "両手フリー・作業中撮影",
    targetAudience: "料理・DIY・ハンドメイド作家",
  },
  {
    pattern: (b, m) => `愛犬の散歩も子供との遊びも両手が空く！${b} ${m}で第一人称目線の思い出を逃さず残す`,
    patternZh: (b, m) => `遛狗陪伴萌宠还是陪孩子玩耍都能双手自由！用 ${b} ${m} 第一人称视线留存不褪色的美好回忆`,
    category: "efficiency",
    angleLabel: "ファミリー・ペットPOV",
    targetAudience: "パパママ・ペット飼い主",
  },
  {
    pattern: (b, m) => `ボタン2回押しで即1080PフルHD録画開始！${b} ${m}が毎日のデイリーレコードを劇的に変える`,
    patternZh: (b, m) => `按键双击瞬间开启1080P全高清录像！${b} ${m} 极大颠覆与升级每日生活记录体验`,
    category: "efficiency",
    angleLabel: "秒速録画・直感操作",
    targetAudience: "通勤・通学・散歩クリエイター",
  },
  {
    pattern: (b, m) => `会議のメモも耳元3回押しで即録音！${b} ${m}はビジネスでも超有能なマルチAIデバイス`,
    patternZh: (b, m) => `会议重要纪要耳边连按三下即刻录音！${b} ${m} 在商务职场也是不可多得的多面手 AI 装备`,
    category: "efficiency",
    angleLabel: "ビジネス会議メモ",
    targetAudience: "ビジネスパーソン",
  },
  {
    pattern: (b, m) => `自転車乗りながら見た絶景を一瞬で記録！${b} ${m}なら視界のままのリアルな動画が撮れる`,
    patternZh: (b, m) => `骑行途中所见的惊艳风景一瞬留存！${b} ${m} 忠实记录所见即所得的真实第一视角`,
    category: "efficiency",
    angleLabel: "サイクリング・ツーリング",
    targetAudience: "チャリ通・ライダー",
  },
  {
    pattern: (b, m) => `Wi-Fi高速データ転送でスマホに即共有！${b} ${m}の撮影データ同期がサクサクすぎて感動`,
    patternZh: (b, m) => `Wi-Fi 高速直连秒传手机随时分享！${b} ${m} 的拍摄素材同步流程流畅到让人感动`,
    category: "efficiency",
    angleLabel: "即時スマホ同期",
    targetAudience: "SNS投稿頻出ユーザー",
  },
  {
    pattern: (b, m) => `スワイプ操作で音量も曲送りも自由自在！${b} ${m}のタッチFPC操作が快適すぎる件`,
    patternZh: (b, m) => `滑动轻触随心调节音量与切歌！${b} ${m} 的触控手势交互顺滑无比`,
    category: "efficiency",
    angleLabel: "快適ジェスチャー操作",
    targetAudience: "音楽リスナー",
  },

  // 3. gadget: 16mm大口径HiFi ✕ 800万画素SONY・ハードウェア美学
  {
    pattern: (b, m) => `【近未来】イヤホンにカメラがついた！${b} ${m}の16mm大迫力HiFiサウンド×SONYセンサーが凄すぎる`,
    patternZh: (b, m) => `【未来感】耳机居然自带高清单反级镜头！${b} ${m} 的 16mm 澎湃 HiFi 动圈与 SONY 传感器简直太顶了`,
    category: "gadget",
    angleLabel: "近未来ハードウェア",
    targetAudience: "最新ガジェット好き",
  },
  {
    pattern: (b, m) => `大口径16mmスピーカーの重低音に鳥肌！${b} ${m}はオープンイヤーなのに音質が異次元レベル`,
    patternZh: (b, m) => `16mm 大口径扬声器的饱满低音令人起鸡皮疙瘩！${b} ${m} 开放式设计却拥有越级 HiFi 级好音质`,
    category: "gadget",
    angleLabel: "16mm HiFi極上サウンド",
    targetAudience: "音質重視オーディオファン",
  },
  {
    pattern: (b, m) => `SONY IMX219 800万画素センサー搭載！${b} ${m}の映像クオリティがイヤホンとは思えない`,
    patternZh: (b, m) => `搭载 SONY IMX219 800万像素高清单反级传感器！${b} ${m} 的画面质感完全颠覆对耳机的想象`,
    category: "gadget",
    angleLabel: "SONY製800万画素カメラ",
    targetAudience: "カメラ・映像好き",
  },
  {
    pattern: (b, m) => `プライバシーランプ＆撮影LED搭載で安心！${b} ${m}の洗練されたスマートデザインが最高`,
    patternZh: (b, m) => `配备拍摄指示灯与隐私安全提醒！${b} ${m} 洗练优雅的科技外观与安全规范设计深得人心`,
    category: "gadget",
    angleLabel: "プライバシー配慮設計",
    targetAudience: "安全・エチケット重視派",
  },
  {
    pattern: (b, m) => `内蔵8GBストレージ＋電子手ブレ補正！${b} ${m}のアクション性能が本格的すぎる`,
    patternZh: (b, m) => `机身内置 8GB 独立存储与电子防抖算法！${b} ${m} 的运动拍摄硬核素质极其扎实`,
    category: "gadget",
    angleLabel: "8GB内蔵・手ブレ補正",
    targetAudience: "スポーツ・アクティブ層",
  },
  {
    pattern: (b, m) => `アレイ3マイク搭載で風切り音もカット！${b} ${m}のクリアな通話＆音声収録が超優秀`,
    patternZh: (b, m) => `搭载 3 麦克风阵列强力抗风噪！${b} ${m} 带来极其纯净的高清通话与视频人声录制`,
    category: "gadget",
    angleLabel: "3マイク陣列・クリア音声",
    targetAudience: "通話・Web会議ユーザー",
  },
  {
    pattern: (b, m) => `マグネット2PIN吸着充電が気持ちいい！${b} ${m}の質感とビルドクオリティに惚れた`,
    patternZh: (b, m) => `磁吸 2PIN 充电一碰即充！${b} ${m} 精工打造的机身质感与做工品质让人一见倾心`,
    category: "gadget",
    angleLabel: "マグネット充電・高質感",
    targetAudience: "デザイン重視ユーザー",
  },
  {
    pattern: (b, m) => `耳にかけるだけで自動装着検出！${b} ${m}のスマートテクノロジーが日常をアップデート`,
    patternZh: (b, m) => `挂在耳际自动完成智能佩戴检测！${b} ${m} 的贴心科技无感融入日常生活`,
    category: "gadget",
    angleLabel: "装着検出・シームレス体験",
    targetAudience: "スマートライフ愛好家",
  },

  // 4. ai_power: OpenAI搭載・音声対話・AI拍照识物・リアルタイム同時通訳
  {
    pattern: (b, m) => `「これ何？」と聞くだけでAIが瞬時に教えてくれる！${b} ${m}のOpenAI搭載カメラが賢すぎる`,
    patternZh: (b, m) => `随口一句“这是什么”AI 就瞬间科普解答！搭载 OpenAI 的 ${b} ${m} 智能镜头聪明得不可思议`,
    category: "ai_power",
    angleLabel: "AI写真識物・即時質問",
    targetAudience: "知的好奇心・旅行者",
  },
  {
    pattern: (b, m) => `外国人とスムーズに対話できる奇跡！${b} ${m}の多言語リアルタイム同時通訳が異次元の便利さ`,
    patternZh: (b, m) => `与外国友人顺畅无阻对话的奇迹体验！${b} ${m} 的多语言实时同声传译带来跨维度的便利`,
    category: "ai_power",
    angleLabel: "リアルタイム同時通訳",
    targetAudience: "インバウンド・海外出張派",
  },
  {
    pattern: (b, m) => `耳元に専属AIアシスタント常駐！${b} ${m}に「Hi Luma、天気は？」と話しかける毎日が快適`,
    patternZh: (b, m) => `耳畔随时驻留专属 AI 私人助理！每天对着 ${b} ${m} 问天气日程生活无比惬意`,
    category: "ai_power",
    angleLabel: "音声AIアシスタント",
    targetAudience: "スマート家電・AI愛好家",
  },
  {
    pattern: (b, m) => `OpenAIの大規模モデルと連携！${b} ${m}の会話翻訳と会議メモ機能が仕事のチート級武器`,
    patternZh: (b, m) => `深度整合 OpenAI 大语言模型！${b} ${m} 的对话翻译与会议录音纪要堪称职场开挂利器`,
    category: "ai_power",
    angleLabel: "OpenAI連携・仕事効率化",
    targetAudience: "ビジネスマン・フリーランス",
  },
  {
    pattern: (b, m) => `散歩中に見つけた花や建築をAIが即解説！${b} ${m}で毎日の散歩が知覚拡張アドベンチャーに`,
    patternZh: (b, m) => `散步途中的奇花异草与历史建筑 AI 即时解析！${b} ${m} 让每天的漫步变成感知拓展探索之旅`,
    category: "ai_power",
    angleLabel: "街歩き・視覚拡張AI",
    targetAudience: "散歩・カルチャー好き",
  },
  {
    pattern: (b, m) => `声だけで写真撮影・時間確認・AI相談まで全自動！${b} ${m}が未来のライフスタイルを先取り`,
    patternZh: (b, m) => `仅用语音即可完成拍照、时间查询与 AI 智囊咨询！${b} ${m} 提前解锁未来全新生活方式`,
    category: "ai_power",
    angleLabel: "完全音声ライフスタイル",
    targetAudience: "アーリーアダプター",
  },
  {
    pattern: (b, m) => `美術館や旅行先で大活躍！${b} ${m}のAI画像認識がまるで専属のプライベートガイド`,
    patternZh: (b, m) => `在美术馆与异国旅途中大放异彩！${b} ${m} 的 AI 图像识别就像身边常驻的专属私人导游`,
    category: "ai_power",
    angleLabel: "専属プライベートガイド",
    targetAudience: "旅行・アート愛好家",
  },

  // 5. secret_hack: 第一人称Vlog・クリエイター裏技・神コスパ
  {
    pattern: (b, m) => `【裏技】TikTokerがこっそり愛用中！${b} ${m}で撮る第一人称POV動画がバズり散らかす理由`,
    patternZh: (b, m) => `【隐藏技巧】TikTok博主都在私下用的秘密装备！揭秘 ${b} ${m} 拍出爆款第一人称视角视频的原因`,
    category: "secret_hack",
    angleLabel: "バズるPOV動画裏技",
    targetAudience: "ショート動画クリエイター",
  },
  {
    pattern: (b, m) => `カフェでの作業風景も自然体で残せる！${b} ${m}の目立たないスマートデザインが最高`,
    patternZh: (b, m) => `在咖啡馆工作生活的松弛日常也能自然记录！${b} ${m} 毫无侵略感的极简设计大受好评`,
    category: "secret_hack",
    angleLabel: "自然体ルーティン撮影",
    targetAudience: "ライフスタイル発信者",
  },
  {
    pattern: (b, m) => `高価なスマートグラスより圧倒的に使いやすい！${b} ${m}がクリエイターの間で話題沸騰中`,
    patternZh: (b, m) => `比昂贵笨重的智能眼镜更舒适好用！${b} ${m} 正在创作者圈子中引发热烈好评`,
    category: "secret_hack",
    angleLabel: "スマートグラス比較優位",
    targetAudience: "ガジェットインフルエンサー",
  },
  {
    pattern: (b, m) => `ソロキャンプの設営シーンも全部撮れる！${b} ${m}なら両手を使ってリアルな作業ログが完成`,
    patternZh: (b, m) => `一人露营搭建帐篷全程沉浸式记录！用 ${b} ${m} 解放双手呈现最真实的户外生活日志`,
    category: "secret_hack",
    angleLabel: "キャンプ・アウトドア記録",
    targetAudience: "キャンパー・釣り人",
  },
  {
    pattern: (b, m) => `ジムのトレーニングフォームを客観的にチェック！${b} ${m}の視点動画が筋トレ効率を爆上げ`,
    patternZh: (b, m) => `随时复盘健身器械与动作轨迹！${b} ${m} 第一视角镜头助你健身增肌效率大幅提升`,
    category: "secret_hack",
    angleLabel: "筋トレ・フォーム確認",
    targetAudience: "トレーニー・フィットネス層",
  },
  {
    pattern: (b, m) => `「どこで買ったの？」って100回聞かれた！${b} ${m}を着けて歩くだけで注目の的になる神ギア`,
    patternZh: (b, m) => `被身边朋友问了上百次“哪里买的”！戴着 ${b} ${m} 出门回头率拉满的先锋黑科技单品`,
    category: "secret_hack",
    angleLabel: "周囲の注目・自慢ギア",
    targetAudience: "トレンドセッター",
  },

  // 6. question: 視聴者共鳴・コメント欄誘導・ディベート
  {
    pattern: (b, m) => `【質問】イヤホンにカメラついてる時代、知ってた？${b} ${m}の便利さ知ったら普通のイヤホンに戻れない`,
    patternZh: (b, m) => `【提问互动】你知道现在耳机都自带高清镜头了吗？体验过 ${b} ${m} 的便利后真的回不去传统耳机`,
    category: "question",
    angleLabel: "新時代認知・コメント誘導",
    targetAudience: "全TikTok視聴者",
  },
  {
    pattern: (b, m) => `16mm極上音質と800万画素カメラ、どっちが欲しい？${b} ${m}は両方妥協なしで入ってるらしい`,
    patternZh: (b, m) => `16mm 澎湃大动圈音质与 800 万像素高清相机你选谁？${b} ${m} 小孩子才做选择它全都要`,
    category: "question",
    angleLabel: "スペック二択・議論喚起",
    targetAudience: "オーディオ・カメラ好き",
  },
  {
    pattern: (b, m) => `日常Vlog撮るなら「スマホ手持ち」派？それとも「${b} ${m}手ぶら」派？みんなの意見教えて！`,
    patternZh: (b, m) => `拍日常生活Vlog你是“手持手机派”还是“${b} ${m} 解放双手派”？欢迎在评论区分享你的看法！`,
    category: "question",
    angleLabel: "撮影スタイル二者択一",
    targetAudience: "動画撮影ユーザー",
  },
  {
    pattern: (b, m) => `「Hi Luma」って耳元で話しかけるだけでAIが何でも教えてくれるの凄くない？${b} ${m}使ってみたい人`,
    patternZh: (b, m) => `耳边呼唤一声“Hi Luma”AI 就有问必答是不是太酷了？想上手体验 ${b} ${m} 的举个手`,
    category: "question",
    angleLabel: "AI体験への憧れ喚起",
    targetAudience: "AIツール関心層",
  },
  {
    pattern: (b, m) => `旅行に持っていくならどっち？重い一眼レフ vs 耳につけるだけの${b} ${m}？`,
    patternZh: (b, m) => `出门旅行你会选哪样？笨重的单反微单相机 vs 挂在耳畔毫无负担的 ${b} ${m}？`,
    category: "question",
    angleLabel: "旅行ギア比較",
    targetAudience: "旅行好き",
  },
  {
    pattern: (b, m) => `耳を塞がないのにこの迫力重低音はヤバい！${b} ${m}の音漏れの少なさに驚いた人集合`,
    patternZh: (b, m) => `不入耳居然能有如此浑厚有力的重低音！为 ${b} ${m} 极低漏音表现感到惊艳的朋友集合`,
    category: "question",
    angleLabel: "オープン型音質共感",
    targetAudience: "オープンイヤー愛用者",
  },

  // 7. spec_power: SONY IMX219・1080P・16mmスピーカー・8GB・3マイク
  {
    pattern: (b, m) => `【スペック化け物】SONY IMX219 800万画素×16mm大口径HiFi！${b} ${m}の完成度が異次元すぎる`,
    patternZh: (b, m) => `【配置怪兽】SONY IMX219 800万像素 × 16mm 大口径动圈 HiFi！${b} ${m} 的软硬件做工堪称跨维度`,
    category: "spec_power",
    angleLabel: "モンスター級スペック",
    targetAudience: "スペック重視ガジェット派",
  },
  {
    pattern: (b, m) => `1080P 30fps高画質＆手ブレ補正！${b} ${m}の滑らかな動画クオリティにプロも納得`,
    patternZh: (b, m) => `1080P 30fps 高清画质与电子防抖！${b} ${m} 丝滑细腻的视频动态表现让专业创作者赞不绝口`,
    category: "spec_power",
    angleLabel: "1080P手ブレ補正動画",
    targetAudience: "映像クリエイター",
  },
  {
    pattern: (b, m) => `3マイクアレイでクリア通話＆8GB大容量ストレージ！${b} ${m}の隙のないハード構成が凄まじい`,
    patternZh: (b, m) => `3 麦克风高清阵列与 8GB 机身存储！${b} ${m} 毫无短板的强悍硬件配置令人信服`,
    category: "spec_power",
    angleLabel: "3マイク＆8GBストレージ",
    targetAudience: "ヘビーユーザー",
  },
  {
    pattern: (b, m) => `物理ボタン1押しで写真・2押しで動画・3押しで録音！${b} ${m}の直感コントロールが神仕様`,
    patternZh: (b, m) => `实体按键单击拍照、双击录像、三击录音！${b} ${m} 的直觉盲操逻辑堪称神级设计`,
    category: "spec_power",
    angleLabel: "直感物理ボタン操作",
    targetAudience: "実用性重視ユーザー",
  },
  {
    pattern: (b, m) => `220mAhバッテリー＆OTAアップデート対応！${b} ${m}は進化し続ける次世代AIスマートヘッドホン`,
    patternZh: (b, m) => `220mAh 高密度电池与 OTA 固件持续升级！${b} ${m} 是一部不断进化的下一代智能 AI 耳机`,
    category: "spec_power",
    angleLabel: "バッテリー＆進化型OTA",
    targetAudience: "長期愛用志向層",
  },
];

const E12_PREFIX_PAIRS: [string, string][] = [
  ["【必見】", "【必看推荐】"],
  ["【話題】", "【全网热议】"],
  ["【注目】", "【焦点关注】"],
  ["【本音レビュー】", "【真实上手测评】"],
  ["【最新作】", "【最新先锋力作】"],
];

const E12_SUFFIX_PAIRS: [string, string][] = [
  ["！これは買い", "，这款真心非常值得入手！"],
  ["！試す価値あり", "，绝对值得亲自体验！"],
  ["！正直感動した", "，上手之后着实让人惊艳！"],
  ["！マジでおすすめ", "，真心强烈推荐！"],
];

// Algorithmic generator for E12 with paired Japanese and Chinese outputs
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
  const injectKeyword = (hook: string, zh: string): [string, string] => {
    if (!customKeyword || !customKeyword.trim()) return [hook, zh];
    const kw = customKeyword.trim();
    const newHook = hook.includes(kw) ? hook : `${hook}（${kw}）`;
    const newZh = zh.includes(kw) ? zh : `${zh}（${kw}）`;
    return [newHook, newZh];
  };

  // Base generator pool
  const pool = [...eligible].sort(() => Math.random() - 0.5);

  let poolIdx = 0;
  while (results.length < 50) {
    const template = pool[poolIdx % pool.length];
    let baseHook = template.pattern(brand, model);
    let baseZh = template.patternZh(brand, model);

    // Variation decorators for ensuring uniqueness with paired translations
    const round = Math.floor(poolIdx / pool.length);
    if (round === 1) {
      const pair = E12_PREFIX_PAIRS[poolIdx % E12_PREFIX_PAIRS.length];
      if (!baseHook.startsWith("【")) {
        baseHook = `${pair[0]}${baseHook}`;
        baseZh = `${pair[1]} ${baseZh}`;
      }
    } else if (round === 2) {
      const pair = E12_SUFFIX_PAIRS[poolIdx % E12_SUFFIX_PAIRS.length];
      baseHook = `${baseHook}${pair[0]}`;
      baseZh = `${baseZh}${pair[1]}`;
    } else if (round >= 3) {
      baseHook = `【保存版】${baseHook} #${results.length + 1}`;
      baseZh = `【建议收藏】${baseZh} #${results.length + 1}`;
    }

    const [modifiedHook, modifiedZh] = injectKeyword(baseHook, baseZh);
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
        translationZh: modifiedZh,
        isFavorite: false,
        createdAt: new Date().toISOString(),
      });
    }

    poolIdx++;
  }

  return results.slice(0, 50);
}
