import { AngleCategory, GeneratedTitle } from "../types";

export const E09B_FIXED_TAGS = "#FOSMET #E09 #スマートグラス #服装 #デイリーレコード";

export interface E09BHookTemplate {
  pattern: (brand: string, model: string) => string;
  patternZh: (brand: string, model: string) => string;
  category: AngleCategory;
  angleLabel: string;
  targetAudience: string;
}

export const E09B_HOOK_TEMPLATES: E09BHookTemplate[] = [
  // 1. pain_point: 痛点反转・半框时尚解放双手、告别语言障碍与笨重设备
  {
    pattern: (b, m) => `【衝撃】まだスマホ片手に動画撮ってるの？半枠の${b} ${m}なら目線そのまま完全手ぶらで1080P撮影`,
    patternZh: (b, m) => `【震撼】还在单手举着手机录视频？半框商务设计的 ${b} ${m} 顺应第一视线完全解放双手开启1080P超清拍摄`,
    category: "pain_point",
    angleLabel: "手持ち撮影の不便解消",
    targetAudience: "Vlogger・旅行・日常記録派",
  },
  {
    pattern: (b, m) => `「黒縁メガネは重苦しくて服装に合わない…」洗練された半枠の${b} ${m}なら45gで知的な抜け感を演出`,
    patternZh: (b, m) => `“传统全黑框眼镜太沉闷死板不好搭衣服…” 洗练半框设计的 ${b} ${m} 仅重45g，轻松打造斯文知性格调`,
    category: "pain_point",
    angleLabel: "半枠デザイン・服装抜け感",
    targetAudience: "ビジネスパーソン・お洒落男子・大人女子",
  },
  {
    pattern: (b, m) => `海外旅行やビジネスで言葉が通じず焦った経験ある？${b} ${m}の内蔵AIリアルタイム翻訳が言葉の壁を粉砕`,
    patternZh: (b, m) => `出国旅游或跨国商务时因语言不通手足无措？戴上 ${b} ${m} 内置 AI 实时跨语言同传翻译，轻松化解尴尬`,
    category: "pain_point",
    angleLabel: "AI通訳・言葉の壁ゼロ",
    targetAudience: "海外旅行・出張ビジネス・語学学習者",
  },
  {
    pattern: (b, m) => `「これ何？」って道端の看板や植物をスマホで検索するの面倒！${b} ${m}のAI識物機能なら見るだけで即回答`,
    patternZh: (b, m) => `看到未知植物、艺术品或异国路牌还要掏手机手动搜索？${b} ${m} 具备强大 AI 拍照识物能力，眼前所见秒获百科解答`,
    category: "pain_point",
    angleLabel: "AI看図識物・検索不要",
    targetAudience: "散歩好き・好奇心旺盛派・ガジェット男子",
  },
  {
    pattern: (b, m) => `重いアクションカメラで首や頭が疲れる人へ！半枠スマートグラス${b} ${m}はわずか45gで1日中快適`,
    patternZh: (b, m) => `受够了沉重运动相机压得头颈酸痛？半框设计的 ${b} ${m} 仅重45g羽量级构造，全天佩戴零压迫无负担`,
    category: "pain_point",
    angleLabel: "45g極軽量・疲労ゼロ",
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
    pattern: (b, m) => `長時間のPC作業で目がシパシパする？${b} ${m}は半枠透明ブルーライトカット標準搭載で仕事用にも最適`,
    patternZh: (b, m) => `长时间盯电脑屏幕双眼干涩酸胀？${b} ${m} 标配半框透明防蓝光护眼镜片，日常商务办公绝配`,
    category: "pain_point",
    angleLabel: "半枠ブルーライト対策・目の疲労軽減",
    targetAudience: "デスクワーカー・学生・プログラマー",
  },

  // 2. ai_power: AI物体認識・看图识物 ✕ リアルタイム多言語翻訳 ✕ 音声アシスタント
  {
    pattern: (b, m) => `「これ何？」と見つめてタップするだけ！${b} ${m}のAI画像認識機能が目の前の世界をリアルタイム解説`,
    patternZh: (b, m) => `看到未知事物只需目光注视轻轻一按！${b} ${m} 强大 AI 视觉看图识物功能，即刻为你深度解析眼前的世界`,
    category: "ai_power",
    angleLabel: "AI画像認識・物体識別",
    targetAudience: "街歩き・美術館巡り・好奇心派",
  },
  {
    pattern: (b, m) => `海外旅行で外国人とスラスラ会話！${b} ${m}のリアルタイム多言語通訳で言葉の壁が完全に消滅した件`,
    patternZh: (b, m) => `海外旅行与异国友人谈笑风生！${b} ${m} 搭载的多语种实时同传翻译，让跨国语言壁垒彻底不复存在`,
    category: "ai_power",
    angleLabel: "リアルタイム多言語通訳",
    targetAudience: "出張族・海外旅行者・外国語学習者",
  },
  {
    pattern: (b, m) => `外国語のメニューや標識もワンタッチで理解！${b} ${m}のAIスマート視覚機能が未来すぎると話題沸騰`,
    patternZh: (b, m) => `异国餐厅菜单与外文路牌一拍即懂！${b} ${m} 的 AI 智能视觉识物与翻译黑科技让科技圈彻底沸腾`,
    category: "ai_power",
    angleLabel: "AI視覚翻訳・看板メニュー即解読",
    targetAudience: "バックパッカー・グルメ探訪・海外出張",
  },
  {
    pattern: (b, m) => `4タップでAI音声アシスタント即起動！${b} ${m}で調べ物もスケジュール管理も手ぶらで秒速解決`,
    patternZh: (b, m) => `轻敲4下镜腿即刻唤醒 AI 对话助手！用 ${b} ${m} 随时随地解放双手进行信息问答与日程管理`,
    category: "ai_power",
    angleLabel: "4タップAI対話アシスタント",
    targetAudience: "タイパ重視・ビジネスマン",
  },
  {
    pattern: (b, m) => `花の名前もアート作品も全部教えてくれる！${b} ${m}のAI物体認識カメラがまるで専属ガイド`,
    patternZh: (b, m) => `路边的名贵花草、美术馆的艺术名作全都知道！${b} ${m} 的 AI 识物功能宛如你的随身专属百科向导`,
    category: "ai_power",
    angleLabel: "AI百科ガイド・物知りメガネ",
    targetAudience: "散歩好き・アート鑑賞・子連れファミリー",
  },
  {
    pattern: (b, m) => `英語のオンライン会議も耳元で即座に通訳！${b} ${m}のリアルタイム翻訳と指向性アレイマイクが強すぎる`,
    patternZh: (b, m) => `跨国英语线上会议耳边同步同传！${b} ${m} 实时翻译搭配指向性降噪麦克风，商务沟通如虎添翼`,
    category: "ai_power",
    angleLabel: "ビジネス同声通訳・クリア音声",
    targetAudience: "外資系勤務・グローバルビジネスパーソン",
  },

  // 3. gadget: 洗練された半框ハーフリムデザイン ✕ 45g超軽量 ✕ SONY 800万画素
  {
    pattern: (b, m) => `わずか45gの知的な半枠メガネにSONY製800万画素カメラ内蔵！？${b} ${m}の変態スペックがヤバすぎる`,
    patternZh: (b, m) => `仅45g的优雅半框眼镜居然内置 SONY 800万像素高清单反级镜头？！${b} ${m} 强悍黑科技太惊艳`,
    category: "gadget",
    angleLabel: "半枠45g・SONY 800万画素",
    targetAudience: "ガジェットマニア・テクノロジー好き",
  },
  {
    pattern: (b, m) => `「これ普通のスタイリッシュな半枠メガネじゃん」と見せかけてAI認識＆1080P撮影できる${b} ${m}のロマン`,
    patternZh: (b, m) => `“这分明就是一副斯文优雅的轻奢半框眼镜” 谁能想到 ${b} ${m} 竟然暗藏 AI 识物、实时翻译与1080P高清摄像`,
    category: "gadget",
    angleLabel: "知性半枠ステルス・ハイテク内蔵",
    targetAudience: "大人メンズ・スーツ愛用者・スパイ道具好き",
  },
  {
    pattern: (b, m) => `SONY IMX219センサー搭載！${b} ${m}のソフトウェア手ブレ補正で歩きながらでもブレない映像が撮れる`,
    patternZh: (b, m) => `搭载 SONY IMX219 传感器！${b} ${m} 软件防抖算法加持，行走散步也能录制平稳流畅的电影感大片`,
    category: "gadget",
    angleLabel: "SONY IMX219・電子防振",
    targetAudience: "映像クリエイター・散歩動画派",
  },
  {
    pattern: (b, m) => `透明防ブルーライトレンズ標準装備！${b} ${m}はPC作業から街歩き・旅行まで1本で全対応`,
    patternZh: (b, m) => `标配高清透明防蓝光镜片！${b} ${m} 一副通吃日常办公盯屏、出街穿搭与户外旅行`,
    category: "gadget",
    angleLabel: "防ブルーライト・終日愛用",
    targetAudience: "オフィスワーカー・エンジニア",
  },
  {
    pattern: (b, m) => `開放型デュアルスピーカー内蔵！${b} ${m}なら音楽も通話も耳を塞がず自然な臨場感で楽しめる`,
    patternZh: (b, m) => `内置开放式定向双扬声器！${b} ${m} 让听歌通话不塞耳道，周围环境一清二楚既安全又通透`,
    category: "gadget",
    angleLabel: "開放型デュアルスピーカー",
    targetAudience: "音楽好き・ランナー・外回り営業",
  },

  // 4. efficiency: 専用物理ボタン1発操作 ✕ 最大10分連続録画 ✕ 触控スワイプ
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
    pattern: (b, m) => `3回押しでボイスレコーダーに早変わり！${b} ${m}があれば大事な会議や商談も手ぶらで高音質録音`,
    patternZh: (b, m) => `连按3下秒变高清录音笔！戴上 ${b} ${m} 即可解放双手记录重要商务洽谈与学术会议`,
    category: "efficiency",
    angleLabel: "3回押し即時録音・商談記録",
    targetAudience: "学生・ビジネスパーソン",
  },
  {
    pattern: (b, m) => `料理・手芸・プラモデルの作業動画が秒で作れる！${b} ${m}のPOVカメラが神ツールすぎると話題`,
    patternZh: (b, m) => `做饭烘焙、手工创作、拼装模型过程秒变大片！${b} ${m} 第一视角镜头成为短视频创作神级工具`,
    category: "efficiency",
    angleLabel: "POV手元実況・時短制作",
    targetAudience: "ハンドメイド作家・料理人",
  },
  {
    pattern: (b, m) => `電話が鳴ってもスマホを取り出さず耳元タップで即通話！${b} ${m}のアレイマイクが高音質通話を実現`,
    patternZh: (b, m) => `来电无需掏出手机，耳边轻触即刻通话！${b} ${m} 阵列降噪麦克风带来纯净高清通话体验`,
    category: "efficiency",
    angleLabel: "即時ハンズフリー通話",
    targetAudience: "外回り営業・ドライバー",
  },

  // 5. secret_hack: 半枠知性穿搭 ✕ 日常・海外Vlog秘密武器 ✕ 情報格差
  {
    pattern: (b, m) => `「それどこのブランドの半枠メガネ？」と絶対聞かれる！${b} ${m}で知的なスーツコーデとお洒落を格上げ`,
    patternZh: (b, m) => `“你这副斯文半框眼镜是什么牌子的？” 戴上 ${b} ${m} 让西装商务穿搭与日常潮流质感瞬间拉满`,
    category: "secret_hack",
    angleLabel: "知的な半枠モテコーデ・OOTD",
    targetAudience: "お洒落男子・スーツ族・大人カジュアル",
  },
  {
    pattern: (b, m) => `お洒落な人がこっそり愛用してる秘密兵器！${b} ${m}なら旅行も散歩も見たままの世界がそのまま残せる`,
    patternZh: (b, m) => `时髦穿搭博主悄悄都在用的秘密武器！戴上 ${b} ${m} 漫步出游，所见所闻皆为电影质感大片`,
    category: "secret_hack",
    angleLabel: "日常デイリーレコード・裏技ギア",
    targetAudience: "インフルエンサー・ミニマリスト",
  },
  {
    pattern: (b, m) => `カフェ巡りや美術館でスマホ構えるの恥ずかしい人に朗報！${b} ${m}なら目線そのまま自然に記録完了`,
    patternZh: (b, m) => `去咖啡馆打卡或看展举着手机太尴尬社恐？戴上 ${b} ${m} 顺应第一视线完全自然无感记录精彩瞬间`,
    category: "secret_hack",
    angleLabel: "自然な記録・恥ずかしさゼロ",
    targetAudience: "カフェ好き・ソロ活・散歩派",
  },
  {
    pattern: (b, m) => `バイクツーリングやサイクリング動画がプロ級に！${b} ${m}でスピード感溢れるPOV絶景が撮れまくる`,
    patternZh: (b, m) => `摩托骑行与公路骑行视频秒变专业级大片！戴上 ${b} ${m} 沉浸式第一人称 POV 尽收沿途风光`,
    category: "secret_hack",
    angleLabel: "ツーリングPOV・絶景記録",
    targetAudience: "ライダー・サイクリスト・アウトドア派",
  },

  // 6. question: 疑問・インタラクティブ・共感巻き込み型
  {
    pattern: (b, m) => `「見たものをAIが教えてくれて翻訳もできる半枠メガネ」正直欲しい人どれくらいいる？${b} ${m}`,
    patternZh: (b, m) => `“戴副斯文半框眼镜，能AI识物、能实时翻译、还能顺畅录像”，老实说你心动了吗？${b} ${m}`,
    category: "question",
    angleLabel: "AI認識＆翻訳機能の共感",
    targetAudience: "TikTok全ユーザー・テック好き",
  },
  {
    pattern: (b, m) => `半枠デザインで45g！カメラとスピーカーとAI内蔵って信じられる？${b} ${m}を実際に使ってみた結果…`,
    patternZh: (b, m) => `仅重45g的优雅半框眼镜，竟然塞进了索尼微型相机、开放式双音响和AI大模型？亲自实测 ${b} ${m} 后…`,
    category: "question",
    angleLabel: "スペック検証・実機レビュー",
    targetAudience: "ガジェット比較派・慎重派",
  },
  {
    pattern: (b, m) => `「旅行にスマホ構えて撮るの、もう疲れない？」${b} ${m}で完全手ぶら撮影を体験したら戻れなくなった話`,
    patternZh: (b, m) => `“出去玩整天手举着手机拍照，真的不累吗？” 体验完 ${b} ${m} 的完全解放双手摄影后彻底回不去了`,
    category: "question",
    angleLabel: "旅行の手ぶら化・共感誘導",
    targetAudience: "旅行好き・ファミリー層",
  },
  {
    pattern: (b, m) => `黒縁と半枠どっちが好き？${b} ${m}は半枠デザインで45g、ビジネスマンに選ばれてる理由が納得`,
    patternZh: (b, m) => `全黑框和斯文半框你更喜欢哪种？仅重45g的半框 ${b} ${m} 成为众多商务与创意人士的首选理由`,
    category: "question",
    angleLabel: "デザイン投票・半枠支持",
    targetAudience: "ファッション関心層・社会人",
  },

  // 7. spec_power: 45gハーフリム ✕ SONY IMX219 ✕ 1080P 30fps ✕ AI画像認識 ✕ リアルタイム翻訳
  {
    pattern: (b, m) => `【スペック解剖】45g半枠・SONY IMX219・1080P防振・AI識物・リアルタイム通訳！${b} ${m}が全方位で無敵`,
    patternZh: (b, m) => `【硬核参数解析】45g半框羽量、索尼IMX219传感器、1080P防抖、AI识物、多语实时同传！${b} ${m} 综合实力拉满`,
    category: "spec_power",
    angleLabel: "全スペック解剖・無敵性能",
    targetAudience: "ハードウェア比較派・スペック重視",
  },
  {
    pattern: (b, m) => `SONY 800万画素センサー ✕ ソフトウェア手ブレ補正！${b} ${m}の1080P 30fpsが滑らかすぎる`,
    patternZh: (b, m) => `SONY 800万像素高清单反级传感器 ✕ 软件电子防抖！${b} ${m} 录制 1080P 30fps 第一视角丝滑无比`,
    category: "spec_power",
    angleLabel: "映像品質・1080P 30fps",
    targetAudience: "動画クリエイター・Vlogger",
  },
  {
    pattern: (b, m) => `高耐久フレーム ✕ 透明防ブルーライト！${b} ${m}はわずか45gで一日中かけても鼻あてが痛くならない`,
    patternZh: (b, m) => `高耐久轻量化合金半框 ✕ 透明防蓝光护眼！${b} ${m} 裸机仅 45g，整天佩戴鼻梁耳朵毫无压迫痕迹`,
    category: "spec_power",
    angleLabel: "45g耐久・無痛フィット",
    targetAudience: "長時間装着・メガネユーザー",
  },
  {
    pattern: (b, m) => `指向性アレイマイク ✕ 開放型デュアルスピーカー！${b} ${m}のクリアな通話＆高音質リスニングが優秀すぎる`,
    patternZh: (b, m) => `指向性阵列双麦克风 ✕ 开放式双扬声器！${b} ${m} 无论是高清降噪通话还是沉浸听歌都表现惊艳`,
    category: "spec_power",
    angleLabel: "アレイマイク・デュアル音響",
    targetAudience: "テレワーカー・通話多用派",
  },
];

const E09B_PREFIX_PAIRS: [string, string][] = [
  ["【日本初上陸】", "【日本初登场】"],
  ["【話題沸騰】", "【全网热议】"],
  ["【神コスパ】", "【极致性价比】"],
  ["【正直レビュー】", "【真实测评】"],
  ["【知る人ぞ知る】", "【打破信息差】"],
  ["【次世代ギア】", "【次世代黑科技】"],
  ["【買わなきゃ損】", "【不看必后悔】"],
  ["【保存必須】", "【建议收藏】"],
  ["【衝撃進化】", "【颠覆性升级】"],
  ["【バズり確定】", "【爆款预定】"],
];

const E09B_SUFFIX_PAIRS: [string, string][] = [
  ["！買って大正解だった", "，入手之后真的太香了！"],
  ["！QOL爆上がり確定", "，生活幸福感瞬间拉满！"],
  ["！一度使ったら戻れない", "，用过一次就彻底回不去！"],
  ["！革命的に便利すぎる", "，颠覆性的便捷体验！"],
  ["！試す価値あり", "，绝对值得亲自体验！"],
  ["！正直感動した", "，上手之后让人深深惊艳！"],
  ["！マジでおすすめ", "，真心强烈推荐！"],
];

export function generateE09BAlgorithmicTitles(
  category: AngleCategory = "all_mixed",
  customKeyword?: string,
  customTags?: string,
  seed: string = Date.now().toString()
): GeneratedTitle[] {
  const brand = "FOSMET";
  const model = "E09B";
  const activeTags = (customTags && customTags.trim()) ? customTags.trim() : E09B_FIXED_TAGS;

  let eligible = E09B_HOOK_TEMPLATES;
  if (category !== "all_mixed") {
    const filtered = E09B_HOOK_TEMPLATES.filter((t) => t.category === category);
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
      const pair = E09B_PREFIX_PAIRS[poolIdx % E09B_PREFIX_PAIRS.length];
      if (!baseHook.startsWith("【")) {
        baseHook = `${pair[0]}${baseHook}`;
        baseZh = `${pair[1]} ${baseZh}`;
      }
    } else if (round === 2) {
      const pair = E09B_SUFFIX_PAIRS[poolIdx % E09B_SUFFIX_PAIRS.length];
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
        id: `algo-e09b-ja-${seed}-${results.length + 1}`,
        productId: "e09b",
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
