import { AngleCategory, GeneratedTitle } from "../types";

export const E09_FIXED_TAGS = "#FOSMET #E09 #スマートグラス #服装 #デイリーレコード";

export interface E09HookTemplate {
  pattern: (brand: string, model: string) => string;
  patternZh: (brand: string, model: string) => string;
  category: AngleCategory;
  angleLabel: string;
  targetAudience: string;
}

export const E09_HOOK_TEMPLATES: E09HookTemplate[] = [
  // 1. pain_point: 痛点反转・告别手持手机录像、笨重GoPro及入耳式耳机疼痛
  {
    pattern: (b, m) => `【衝撃】まだスマホ片手に動画撮ってるの？${b} ${m}なら目線そのまま完全手ぶらで1080P撮影`,
    patternZh: (b, m) => `【震撼】还在单手举着手机拍视频？戴上 ${b} ${m} 顺应第一视线完全解放双手开启1080P超清拍摄`,
    category: "pain_point",
    angleLabel: "手持ち撮影の不便解消",
    targetAudience: "Vlogger・旅行・日常記録派",
  },
  {
    pattern: (b, m) => `「旅行や散歩でスマホ構えるの恥ずかしい…」${b} ${m}は普通のメガネにしか見えないのに800万画素カメラ内蔵`,
    patternZh: (b, m) => `“旅行散步时举着手机拍照太社恐尴尬…” ${b} ${m} 外观宛如普通黑框眼镜却内置800万像素高清相机`,
    category: "pain_point",
    angleLabel: "自然な撮影・恥ずかしさゼロ",
    targetAudience: "街歩き・カフェ巡り・ソロ活",
  },
  {
    pattern: (b, m) => `重いアクションカメラで首や頭が疲れる人へ！${b} ${m}はわずか40gで1日中かけてもノンストレス`,
    patternZh: (b, m) => `受够了沉重运动相机压得头颈酸痛？${b} ${m} 仅重40g羽量级设计，全天佩戴零压迫无负担`,
    category: "pain_point",
    angleLabel: "40g極軽量・疲労ゼロ",
    targetAudience: "サイクリング・アウトドア・散歩派",
  },
  {
    pattern: (b, m) => `イヤホンの耳詰まりや痛みにサヨナラ！${b} ${m}のオープンイヤーデュアルスピーカーなら耳解放で超快適`,
    patternZh: (b, m) => `告别传统耳机的耳道胀痛与堵塞感！${b} ${m} 搭载开放式双扬声器，释放双耳尽享通透舒适`,
    category: "pain_point",
    angleLabel: "耳の圧迫感・難聴予防",
    targetAudience: "テレワーク・長時間着用派",
  },
  {
    pattern: (b, m) => `子供やペットの決定的瞬間を撮り逃したことない？${b} ${m}なら物理ボタン1押しで0.5秒即撮影`,
    patternZh: (b, m) => `经常遗憾错过孩子或宠物的精彩瞬间？${b} ${m} 实体按键一按0.5秒即刻抓拍录制`,
    category: "pain_point",
    angleLabel: "シャッターチャンス即対応",
    targetAudience: "子育て世代・ペット愛好家",
  },
  {
    pattern: (b, m) => `長時間のPC作業で目がシパシパする？${b} ${m}は透明ブルーライトカットレンズ標準搭載で仕事用にも最適`,
    patternZh: (b, m) => `长时间盯着电脑屏幕双眼干涩酸胀？${b} ${m} 标配高透防蓝光护眼镜片，日常办公绝配`,
    category: "pain_point",
    angleLabel: "ブルーライト対策・目の疲労軽減",
    targetAudience: "デスクワーカー・学生・プログラマー",
  },
  {
    pattern: (b, m) => `料理やDIY中に両手が塞がって撮れない悩み解消！${b} ${m}なら第一人称POVで手元を完璧に10分録画`,
    patternZh: (b, m) => `做饭或手工创作时双手占满无法录制？${b} ${m} 第一人称POV视角完美记录长达10分钟创作过程`,
    category: "pain_point",
    angleLabel: "両手作業・POV手元撮影",
    targetAudience: "料理系クリエイター・DIY派",
  },
  {
    pattern: (b, m) => `歩きスマホで動画撮影してヒヤッとした経験ある？${b} ${m}なら前を向いたまま安全にVlog記録完了`,
    patternZh: (b, m) => `边走路边举手机录像曾险些跌倒碰撞？戴上 ${b} ${m} 目视前方即可安全沉浸式记录生活Vlog`,
    category: "pain_point",
    angleLabel: "歩きスマホ防止・安全性",
    targetAudience: "通勤通学・街歩き派",
  },

  // 2. efficiency: タイパ・物理ボタン1発操作・完全手ぶら効率化
  {
    pattern: (b, m) => `物理ボタンをカチッと押すだけ！${b} ${m}の最大10分連続録画が日常のVlog撮影を10倍ラクにする`,
    patternZh: (b, m) => `实体按键清脆一按！${b} ${m} 支持长达10分钟连续录像，让日常短视频创作效率提升10倍`,
    category: "efficiency",
    angleLabel: "物理ボタン・1発録画",
    targetAudience: "タイパ重視・クリエイター",
  },
  {
    pattern: (b, m) => `テンプルをスワイプするだけで音量調整完了！${b} ${m}の直感スマート操作が未来的で病みつきになる`,
    patternZh: (b, m) => `镜腿指尖轻滑即可掌控音量！${b} ${m} 的直觉触控手势顺滑如丝充满未来感`,
    category: "efficiency",
    angleLabel: "スワイプ調音・直感操作",
    targetAudience: "ガジェット好き・スマート派",
  },
  {
    pattern: (b, m) => `仕事中もメガネを4回タップでAI音声アシスタント起動！${b} ${m}で調べ物もスケジュール確認も爆速`,
    patternZh: (b, m) => `办公中轻敲镜腿4下即刻唤醒 AI 语音助手！用 ${b} ${m} 极速查询信息与日程规划`,
    category: "efficiency",
    angleLabel: "AI対話・4タップ即起動",
    targetAudience: "ビジネスパーソン・効率化マニア",
  },
  {
    pattern: (b, m) => `電話が鳴ってもスマホを取り出さず耳元タップで即通話！${b} ${m}のアレイマイクが高音質通話を実現`,
    patternZh: (b, m) => `来电无需掏出手机，耳边轻触即刻通话！${b} ${m} 阵列麦克风带来纯净高清通话体验`,
    category: "efficiency",
    angleLabel: "即時ハンズフリー通話",
    targetAudience: "外回り営業・ドライバー",
  },
  {
    pattern: (b, m) => `3回押しでボイスレコーダーに早変わり！${b} ${m}があれば大事な会議や講義も手ぶらで高音質録音`,
    patternZh: (b, m) => `连按3下秒变高清录音笔！戴上 ${b} ${m} 即可解放双手记录重要商务会议与学术讲座`,
    category: "efficiency",
    angleLabel: "3回押し即時録音・議事録",
    targetAudience: "学生・ビジネスパーソン",
  },
  {
    pattern: (b, m) => `料理・手芸・プラモデルの作業動画が秒で作れる！${b} ${m}のPOVカメラが神ツールすぎると話題`,
    patternZh: (b, m) => `做饭烘焙、手工刺绣、拼装模型过程秒变大片！${b} ${m} 第一视角镜头成为爆款创作神级工具`,
    category: "efficiency",
    angleLabel: "POV手元実況・時短制作",
    targetAudience: "ハンドメイド作家・料理人",
  },

  // 3. gadget: SONY 800万画素 ✕ 40g極軽量 ✕ ハードウェア美学
  {
    pattern: (b, m) => `わずか40gの伊達メガネにSONY製800万画素カメラ内蔵！？${b} ${m}の変態スペックがヤバすぎる`,
    patternZh: (b, m) => `仅40g的轻巧眼镜居然内置 SONY 800万像素高清单反级镜头？！${b} ${m} 强悍黑科技太惊艳`,
    category: "gadget",
    angleLabel: "SONY 800万画素 ✕ 40g",
    targetAudience: "ガジェットオタク・テック好き",
  },
  {
    pattern: (b, m) => `PC+ABS高耐久フレーム ✕ 透明ブルーライトカット！${b} ${m}は普段使いできる次世代スマートグラスの完成形`,
    patternZh: (b, m) => `PC+ABS 高韧性耐摔镜架 ✕ 高透防蓝光护眼镜片！${b} ${m} 堪称全天候日常佩戴智能眼镜标杆之作`,
    category: "gadget",
    angleLabel: "PC+ABSフレーム・防ブルーライト",
    targetAudience: "伊達メガネ派・モノ好き",
  },
  {
    pattern: (b, m) => `ソフトウェア電子防振（手ブレ補正）搭載！${b} ${m}なら歩きながらの街中Vlogも滑らか高画質`,
    patternZh: (b, m) => `搭载高阶电子防抖 EIS 算法！用 ${b} ${m} 边走边拍街头Vlog画面依然丝滑平稳`,
    category: "gadget",
    angleLabel: "電子手ブレ補正・1080P",
    targetAudience: "映像クリエイター・旅行好き",
  },
  {
    pattern: (b, m) => `耳を塞がないデュアルスピーカー搭載！${b} ${m}は音楽を聴きながら会話もできる次世代ギア`,
    patternZh: (b, m) => `不入耳双立体声扬声器！${b} ${m} 让你沉浸享受音乐的同时依然能顺畅与身边朋友自然交谈`,
    category: "gadget",
    angleLabel: "開放型デュアルスピーカー",
    targetAudience: "音楽好き・通勤者",
  },
  {
    pattern: (b, m) => `見た目は極めてシンプルな黒縁メガネ！${b} ${m}に隠された撮影＆録音＆AI機能がスパイ道具並み`,
    patternZh: (b, m) => `外表是极简斯文的黑框眼镜！${b} ${m} 隐匿其中的录像、录音与 AI 智脑宛如特工装备`,
    category: "gadget",
    angleLabel: "極小ステルス構造・スパイ感",
    targetAudience: "男子・ロマンギア好き",
  },
  {
    pattern: (b, m) => `1回押しで写真、2回で動画、3回で録音！${b} ${m}の独立物理ボタン設計が実用性100点満点`,
    patternZh: (b, m) => `单击拍照、双击录像、三击录音！${b} ${m} 独立物理盲操按键逻辑实用性直接拉满`,
    category: "gadget",
    angleLabel: "直感物理ボタン・操作性",
    targetAudience: "実用性重視派",
  },

  // 4. ai_power: AI対話アシスタント・アレイマイク・音声スマートライフ
  {
    pattern: (b, m) => `メガネをトントンと4回タップするだけでAIが起動！${b} ${m}で未来の音声アシスタント体験`,
    patternZh: (b, m) => `轻敲镜腿4下即刻召唤智能 AI！用 ${b} ${m} 开启身临其境的未来语音助手新体验`,
    category: "ai_power",
    angleLabel: "4タップAI音声起動",
    targetAudience: "AI活用派・最新テック好き",
  },
  {
    pattern: (b, m) => `「これについて教えて」と話しかけるだけ！${b} ${m}とスマホAPP連携で手ぶらAI検索が超快適`,
    patternZh: (b, m) => `随口提问“帮我解释一下”！${b} ${m} 联动手机 App 带来彻底解放双手的 AI 知识百科搜索`,
    category: "ai_power",
    angleLabel: "手ぶらAI会話・即時回答",
    targetAudience: "知的好奇心旺盛・学生",
  },
  {
    pattern: (b, m) => `アレイマイクによる指向性ノイズ低減！${b} ${m}なら風切り音や街中の雑音をカットしてクリア録音`,
    patternZh: (b, m) => `阵列麦克风定向降噪算法！${b} ${m} 强力滤除户外风噪与街头喧嚣，保留纯净人声`,
    category: "ai_power",
    angleLabel: "アレイマイク・ノイズ低減",
    targetAudience: "屋外録音・通話重視派",
  },
  {
    pattern: (b, m) => `音楽再生・通話・AIアシスタント・撮影がメガネ1本に統合！${b} ${m}が描く究極のウェアラブル生活`,
    patternZh: (b, m) => `音乐听歌、通话、AI 智囊与第一人称摄影融于一体！${b} ${m} 勾勒终极轻量化穿戴智能生活`,
    category: "ai_power",
    angleLabel: "全能オールインワンAIギア",
    targetAudience: "ミニマリスト・デジタルネイティブ",
  },

  // 5. secret_hack: 服装コーデ・裏技・日常記録・お洒落アイテム
  {
    pattern: (b, m) => `お洒落な人がこっそりかけてる黒縁メガネ、実は${b} ${m}！日常Vlogが簡単に撮れる秘密兵器`,
    patternZh: (b, m) => `时髦潮人私下都在戴的气质黑框眼镜，其实是 ${b} ${m}！拍出爆款日常Vlog的私藏秘密武器`,
    category: "secret_hack",
    angleLabel: "お洒落コーデ・隠れVlogギア",
    targetAudience: "ファッション・インフルエンサー",
  },
  {
    pattern: (b, m) => `旅行の思い出を「見たままの景色」で残すチート技！${b} ${m}があれば一眼レフもスマホも不要`,
    patternZh: (b, m) => `以“所见即所得”视线定格旅行回忆的秘籍！有了 ${b} ${m} 出门无需沉重单反与手机支架`,
    category: "secret_hack",
    angleLabel: "旅行チート技・POVメモリー",
    targetAudience: "旅行好き・バックパッカー",
  },
  {
    pattern: (b, m) => `どんな服装にもバチッとハマる極簡デザイン！${b} ${m}で毎日のデイリーコーデをアップデート`,
    patternZh: (b, m) => `百搭不挑脸型与衣着的极简美学！用 ${b} ${m} 轻松点亮并升级你的每日潮流穿搭`,
    category: "secret_hack",
    angleLabel: "服装万能・ミニマル美学",
    targetAudience: "ストリート・きれいめコーデ派",
  },
  {
    pattern: (b, m) => `カフェでの作業風景や散歩コースを映画風に記録！${b} ${m}のPOVアングルがSNSで映えまくる`,
    patternZh: (b, m) => `在咖啡厅工作与街头散步的惬意日常拍出电影质感！${b} ${m} 第一视角在社交圈赞爆`,
    category: "secret_hack",
    angleLabel: "シネマティックPOV・SNS映え",
    targetAudience: "Instagram/TikTok投稿者",
  },
  {
    pattern: (b, m) => `荷物を限界まで減らしたいミニマリストの最終結論！メガネ・カメラ・イヤホンが${b} ${m}で1つに`,
    patternZh: (b, m) => `追求极致轻量化出行的断舍离终极答案！眼镜、相机、无线耳机被 ${b} ${m} 完美合三为一`,
    category: "secret_hack",
    angleLabel: "3in1ミニマリスト結論",
    targetAudience: "手ぶら派・ミニマリスト",
  },

  // 6. question: 視聴者巻き込み型・コメント欄誘導
  {
    pattern: (b, m) => `普通のメガネに見えて実は動画が撮れるの知ってた？${b} ${m}を街中でかけてみたい？`,
    patternZh: (b, m) => `看似斯文普通平光眼镜其实能高清拍视频你知道吗？想戴着 ${b} ${m} 上街体验吗？`,
    category: "question",
    angleLabel: "疑問提起・ステルスカメラ",
    targetAudience: "全TikTokユーザー",
  },
  {
    pattern: (b, m) => `【質問】目線そのまま動画が撮れるメガネがあったら何撮りたい？${b} ${m}が便利すぎて驚き`,
    patternZh: (b, m) => `【互动提问】如果拥有一副第一人称视线拍视频的眼镜你想拍什么？${b} ${m} 让人大开眼界`,
    category: "question",
    angleLabel: "撮影用途アンケート",
    targetAudience: "日常Vlog興味層",
  },
  {
    pattern: (b, m) => `40gのメガネにSONYカメラとスピーカー搭載ってヤバくない？${b} ${m}の第一印象を教えて！`,
    patternZh: (b, m) => `仅40g的眼镜里集成了 SONY 镜头与立体声双扬声器太强了吧？在评论区留下你对 ${b} ${m} 的第一印象！`,
    category: "question",
    angleLabel: "スペック共感・コメント誘発",
    targetAudience: "ガジェットファン",
  },
  {
    pattern: (b, m) => `スマホで撮る派？それとも${b} ${m}で手ぶらPOV撮影派？みんなの意見をコメント欄で大募集`,
    patternZh: (b, m) => `你是手机手持拍摄派？还是戴上 ${b} ${m} 解放双手的 POV 派？欢迎在评论区留言讨论！`,
    category: "question",
    angleLabel: "二者択一・議論喚起",
    targetAudience: "スマホユーザー全般",
  },
  {
    pattern: (b, m) => `ブルーライトカットメガネ買い替えるなら${b} ${m}一択？カメラ付きで仕事も趣味も捗る！`,
    patternZh: (b, m) => `换防蓝光平光眼镜直接一步到位选 ${b} ${m}？自带高清镜头让日常办公与记录兼得！`,
    category: "question",
    angleLabel: "メガネ買い替え比較",
    targetAudience: "メガネ常用者",
  },

  // 7. spec_power: ハイスペック信頼型 (SONY IMX219・1080P 30fps・40g・10分録画)
  {
    pattern: (b, m) => `SONY IMX219 800万画素センサー ✕ 1080P 30fps！${b} ${m}の解像感と色再現性が圧倒的`,
    patternZh: (b, m) => `SONY IMX219 800万像素传感器 ✕ 1080P 30fps！${b} ${m} 的画面解析度与色彩还原极其惊艳`,
    category: "spec_power",
    angleLabel: "SONY IMX219 800万画素",
    targetAudience: "画質・スペック重視派",
  },
  {
    pattern: (b, m) => `重さわずか40g ✕ PC+ABS強靭ボディ！${b} ${m}の耐衝撃性と羽のような装着感を体感せよ`,
    patternZh: (b, m) => `整机仅重40g ✕ PC+ABS 高韧性机身！亲身体验 ${b} ${m} 羽量佩戴与扎实抗摔质感`,
    category: "spec_power",
    angleLabel: "40g ✕ PC+ABS強靭ボディ",
    targetAudience: "耐久性・軽量性重視派",
  },
  {
    pattern: (b, m) => `最大10分連続ビデオ録画 ✕ 電子手ブレ補正！${b} ${m}が日常のあらゆる瞬間を高画質アーカイブ`,
    patternZh: (b, m) => `长达10分钟连续视频录制 ✕ 电子防抖算法！${b} ${m} 为你高清封存生活中的每一个心动瞬间`,
    category: "spec_power",
    angleLabel: "10分録画 ✕ 電子防振",
    targetAudience: "アーカイブ・記録マニア",
  },
  {
    pattern: (b, m) => `透明ブルーライトカットレンズ標準装備！${b} ${m}ならPC作業中も目を保護しながら通話＆音楽`,
    patternZh: (b, m) => `标配高透抗蓝光镜片！${b} ${m} 在办公用眼护眼的同时无缝享受高清通话与背景音乐`,
    category: "spec_power",
    angleLabel: "防ブルーライト・PC作業",
    targetAudience: "オフィスワーカー・眼精疲労対策",
  },
  {
    pattern: (b, m) => `デュアルスピーカー ✕ 指向性アレイマイク！${b} ${m}のクリアな音質と通話性能がビジネスに直結`,
    patternZh: (b, m) => `双空间扬声器 ✕ 定向阵列麦克风！${b} ${m} 带来通透清晰音质与高水准商务通话表现`,
    category: "spec_power",
    angleLabel: "デュアルスピーカー・アレイマイク",
    targetAudience: "ビジネス・通話重視",
  },
  {
    pattern: (b, m) => `専用充電ケーブル急速充電 ✕ 長時間バッテリー！${b} ${m}で1日中快適なスマートグラス生活`,
    patternZh: (b, m) => `专用磁吸快充 ✕ 高能长效续航电池！用 ${b} ${m} 尽享无忧全天候智能穿戴生活`,
    category: "spec_power",
    angleLabel: "急速充電・安心バッテリー",
    targetAudience: "ヘビーユーザー",
  },

  // Additional varied patterns
  {
    pattern: (b, m) => `愛犬との散歩や子供との公園遊びが一生モノの宝物に！${b} ${m}の目線POV動画がエモすぎる`,
    patternZh: (b, m) => `带萌宠散步与陪孩子在公园嬉戏化作一生珍藏！${b} ${m} 记录的第一视角视频氛围感拉满`,
    category: "pain_point",
    angleLabel: "家族・ペットの想い出記録",
    targetAudience: "ファミリー・愛犬家",
  },
  {
    pattern: (b, m) => `キャンプの焚き火やBBQの様子を煙を気にせず手ぶら撮影！${b} ${m}がアウトドアに手放せない`,
    patternZh: (b, m) => `露营篝火与户外烧烤解放双手免触拍摄！${b} ${m} 成为野外探索不可或缺的必备装备`,
    category: "gadget",
    angleLabel: "キャンプ・アウトドアPOV",
    targetAudience: "キャンパー・釣り好き",
  },
  {
    pattern: (b, m) => `バイクやロードバイクのツーリング記録に！${b} ${m}の40g超軽量と風切り音低減が最高`,
    patternZh: (b, m) => `公路车与摩托骑行兜风全程沉浸记录！${b} ${m} 40g轻巧机身与抗风噪技术带来极佳体验`,
    category: "spec_power",
    angleLabel: "ツーリング・サイクリング",
    targetAudience: "ライダー・サイクリスト",
  },
  {
    pattern: (b, m) => `「そのサングラスかっこいいね」と言われたら自慢できる！${b} ${m}の隠れた800万画素カメラ`,
    patternZh: (b, m) => `被朋友夸赞“眼镜好帅”时暗自窃喜！${b} ${m} 镜框中悄然隐藏着800万像素高清相机`,
    category: "secret_hack",
    angleLabel: "周囲へのサプライズ・自慢ギア",
    targetAudience: "流行に敏感な若者",
  },
  {
    pattern: (b, m) => `毎日の服装・コーデ紹介動画が一人で撮れる！${b} ${m}の第一人称視点がTikTokで話題沸騰中`,
    patternZh: (b, m) => `一个人也能轻松拍出爆款每日 OOTD 穿搭视频！${b} ${m} 第一视角在全网引发热潮`,
    category: "efficiency",
    angleLabel: "ファッションVlog・ソロ撮影",
    targetAudience: "OOTD投稿者・アパレル好き",
  },
  {
    pattern: (b, m) => `カフェのラテアートや美味しいスイーツを自然体で記録！${b} ${m}で毎日のデイリーレコードが激変`,
    patternZh: (b, m) => `打卡咖啡厅拉花与精致甜品松弛定格！用 ${b} ${m} 极大提升每日生活记录的仪式感`,
    category: "secret_hack",
    angleLabel: "カフェ巡り・グルメ記録",
    targetAudience: "カフェ好き・女子大生・OL",
  },
  {
    pattern: (b, m) => `会議のメモを取りながら同時に高音質ボイス録音！${b} ${m}で仕事の抜け漏れを完全ゼロへ`,
    patternZh: (b, m) => `一边做笔记一边手腕免触同步高清录音！用 ${b} ${m} 杜绝工作遗漏提高执行力`,
    category: "efficiency",
    angleLabel: "ビジネス録音・議事録サポート",
    targetAudience: "若手ビジネスマン・幹部",
  },
  {
    pattern: (b, m) => `満員電車でもスマホを出さずに耳元スワイプで音楽切替！${b} ${m}の快適さに戻れなくなる`,
    patternZh: (b, m) => `早晚高峰早高峰满员电车里无需掏手机，镜腿一划换歌！${b} ${m} 的从容体验让人直呼真香`,
    category: "pain_point",
    angleLabel: "満員電車・スマホ不要操作",
    targetAudience: "都内通勤者・学生",
  },
  {
    pattern: (b, m) => `手先を使うクラフト作業やイラストメイキングに！${b} ${m}の目線そのままの定点動画が神クオリティ`,
    patternZh: (b, m) => `手工皮具、插画绘制等手作过程！${b} ${m} 所见即所得的第一视角画质无可挑剔`,
    category: "gadget",
    angleLabel: "作業メイキング・手元動画",
    targetAudience: "絵師・クラフト作家",
  },
  {
    pattern: (b, m) => `40g超軽量 ✕ SONY 800万画素 ✕ 10分動画 ✕ AI対話！${b} ${m}はまさに未来を身に纏うスマートグラス`,
    patternZh: (b, m) => `40g超轻 ✕ SONY 800万像素 ✕ 10分钟长录像 ✕ AI语音交互！${b} ${m} 是戴在眼前的未来科技`,
    category: "all_mixed",
    angleLabel: "次世代ウェアラブル集大成",
    targetAudience: "最先端ギア好き・全員",
  },
];

const E09_PREFIX_PAIRS: [string, string][] = [
  ["【注目】", "【焦点关注】"],
  ["【必見】", "【必看推荐】"],
  ["【神ギア】", "【神级装备】"],
  ["【話題】", "【全网热议】"],
  ["【検証】", "【实测对比】"],
  ["【衝撃】", "【震撼体验】"],
  ["【朗報】", "【重磅惊喜】"],
  ["【未来体験】", "【未来科技】"],
  ["【神コスパ】", "【超高性价比】"],
];

const E09_SUFFIX_PAIRS: [string, string][] = [
  ["！これは買い", "，真心非常值得入手！"],
  ["！試す価値あり", "，绝对值得亲自体验！"],
  ["！正直感動した", "，上手之后让人深深惊艳！"],
  ["！マジでおすすめ", "，真心强烈推荐！"],
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

  const results: GeneratedTitle[] = [];
  const usedHooks = new Set<string>();

  const pool = [...eligible].sort(() => 0.5 - Math.random());

  let poolIdx = 0;
  while (results.length < 50) {
    const template = pool[poolIdx % pool.length];
    let baseHook = template.pattern(brand, model);
    let baseZh = template.patternZh(brand, model);

    const round = Math.floor(poolIdx / pool.length);
    if (round === 1) {
      const pair = E09_PREFIX_PAIRS[poolIdx % E09_PREFIX_PAIRS.length];
      if (!baseHook.startsWith("【")) {
        baseHook = `${pair[0]}${baseHook}`;
        baseZh = `${pair[1]} ${baseZh}`;
      }
    } else if (round === 2) {
      const pair = E09_SUFFIX_PAIRS[poolIdx % E09_SUFFIX_PAIRS.length];
      baseHook = `${baseHook}${pair[0]}`;
      baseZh = `${baseZh}${pair[1]}`;
    } else if (round >= 3) {
      baseHook = `【保存版】${baseHook} #${results.length + 1}`;
      baseZh = `【建议收藏】${baseZh} #${results.length + 1}`;
    }

    if (customKeyword && customKeyword.trim()) {
      const kw = customKeyword.trim();
      if (!baseHook.includes(kw)) {
        baseHook = `${baseHook}（${kw}）`;
        baseZh = `${baseZh}（${kw}）`;
      }
    }

    if (!usedHooks.has(baseHook) || results.length < 50) {
      usedHooks.add(baseHook);
      const fullTitle = `${baseHook} ${activeTags}`;
      results.push({
        id: `algo-e09-ja-${seed}-${results.length + 1}`,
        productId: "e09",
        title: fullTitle,
        hook: baseHook,
        tags: activeTags,
        angle: template.angleLabel,
        angleCategory: template.category,
        targetAudience: template.targetAudience,
        charCount: fullTitle.length,
        hookCharCount: baseHook.length,
        language: "ja",
        translationZh: baseZh,
        isFavorite: false,
        createdAt: new Date().toISOString(),
      });
    }

    poolIdx++;
  }

  return results.slice(0, 50);
}
