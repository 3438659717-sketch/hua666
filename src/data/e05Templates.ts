import { AngleCategory, GeneratedTitle } from "../types";

export const E05_FIXED_TAGS = "#FOSMET #E05 #スマートグラス #服装 #イヤホン";

export interface E05HookTemplate {
  pattern: (brand: string, model: string) => string;
  patternZh: (brand: string, model: string) => string;
  category: AngleCategory;
  angleLabel: string;
  targetAudience: string;
}

export const E05_HOOK_TEMPLATES: E05HookTemplate[] = [
  // 1. pain_point: 痛点反转・告别墨镜眼镜频繁切换与传统耳机入耳压迫
  {
    pattern: (b, m) => `【衝撃】まだメガネとサングラス2本持ち歩いてるの？${b} ${m}なら指先ワンタップで4段階瞬時変色`,
    patternZh: (b, m) => `【震撼】出门还在随身带近视眼镜和墨镜两副换着戴？用 ${b} ${m} 指尖轻触即可4档瞬间无极变色`,
    category: "pain_point",
    angleLabel: "2本持ちの荷物痛点",
    targetAudience: "ミニマリスト・メガネ愛用者",
  },
  {
    pattern: (b, m) => `イヤホンの耳詰まり感・圧迫感に悩む人必見！${b} ${m}は耳を塞がず快適すぎるスマートグラス`,
    patternZh: (b, m) => `受够了入耳式耳机的胀痛与耳道闷塞？${b} ${m} 是不塞耳朵、久戴依然轻盈舒适的智能音频眼镜`,
    category: "pain_point",
    angleLabel: "耳の閉塞感・圧迫感解消",
    targetAudience: "テレワーク・長時間着用派",
  },
  {
    pattern: (b, m) => `「室内に入ったらサングラスが真っ暗で見えない…」${b} ${m}なら指先タッチで一瞬でクリアレンズへ`,
    patternZh: (b, m) => `“一进室内墨镜太黑什么都看不清…” 用 ${b} ${m} 镜腿一碰瞬间切回透亮透明模式`,
    category: "pain_point",
    angleLabel: "明暗切替・即時変色",
    targetAudience: "ドライブ・街歩き好き",
  },
  {
    pattern: (b, m) => `周囲の音が聞こえなくてヒヤッとしたことない？${b} ${m}のオープンイヤー設計なら音楽も周囲の音もクリア`,
    patternZh: (b, m) => `戴传统耳机听不到周围车流声音太危险？${b} ${m} 开放式声学设计兼顾高清音乐与环境安全`,
    category: "pain_point",
    angleLabel: "安全性・ながら聴き",
    targetAudience: "ランナー・通勤通学派",
  },
  {
    pattern: (b, m) => `重いスマートグラスで鼻や耳が痛くなった経験ある？${b} ${m}はTR90超軽量素材で1日中羽のような軽さ`,
    patternZh: (b, m) => `戴过笨重压鼻梁的智能眼镜？${b} ${m} 选用 TR90 超轻韧性航天级材质，轻若无物全天佩戴无痕`,
    category: "pain_point",
    angleLabel: "重量負担・鼻あて痛解消",
    targetAudience: "メガネ常用者・ファッション派",
  },
  {
    pattern: (b, m) => `海外旅行や外国人との会話で緊張する人へ！${b} ${m}の内蔵AIリアルタイム翻訳が言葉の壁を完全粉砕`,
    patternZh: (b, m) => `跨国旅行或与外宾交流心慌发怵？${b} ${m} 搭载 AI 实时语音同声翻译，彻底打破跨语言沟通壁垒`,
    category: "pain_point",
    angleLabel: "言語の壁・海外旅行不安",
    targetAudience: "海外旅行・ビジネス出張派",
  },
  {
    pattern: (b, m) => `雨の日やスポーツの汗でイヤホンが壊れる心配ゼロ！${b} ${m}はIP65防塵防水でどこでもガシガシ使える`,
    patternZh: (b, m) => `运动暴汗和阴雨天再也不怕电子元件受潮损坏！${b} ${m} 具备 IP65 专业防尘防水，全场景随心用`,
    category: "pain_point",
    angleLabel: "水濡れ・汗没トラブル",
    targetAudience: "アウトドア・スポーツ愛好家",
  },
  {
    pattern: (b, m) => `「スマホを取り出して音量を変えるのが面倒…」${b} ${m}ならテンプルを前後にスワイプするだけで爆速調整`,
    patternZh: (b, m) => `“掏手机调节音量太繁琐…” 在 ${b} ${m} 镜腿前后轻轻一划即可极速掌控音量`,
    category: "pain_point",
    angleLabel: "スマホ操作の手間削減",
    targetAudience: "タイパ重視・効率派",
  },

  // 2. efficiency: タイパ・極簡穿搭・ハンズフリー生活
  {
    pattern: (b, m) => `メガネを指でスッとなぞるだけで音量調整完了！${b} ${m}のスマートタッチ操作が未来的で超便利`,
    patternZh: (b, m) => `镜腿指尖轻抚滑过即可调节音量！${b} ${m} 的触控交互充满未来科幻感且无比便捷`,
    category: "efficiency",
    angleLabel: "スワイプ調音・直感操作",
    targetAudience: "ガジェット好き・スマート派",
  },
  {
    pattern: (b, m) => `朝のコーデが決まらないならコレ！${b} ${m}の極簡デザインがどんな服装にも馴染んで一気に垢抜ける`,
    patternZh: (b, m) => `早起出门不知道戴什么配饰？${b} ${m} 极简百搭镜框瞬间点亮整套日常穿搭与气质`,
    category: "efficiency",
    angleLabel: "服装コーデ・時短お洒落",
    targetAudience: "ファッション・コーデ好き",
  },
  {
    pattern: (b, m) => `仕事中も手首やスマホに触れずAIに即質問！${b} ${m}の耳元スマートアシスタントで作業効率3倍UP`,
    patternZh: (b, m) => `办公过程中无需触碰手机即可耳畔直呼 AI！${b} ${m} 智能助手让日常工作效率倍增`,
    category: "efficiency",
    angleLabel: "AI音声アシスト・仕事効率化",
    targetAudience: "ビジネスパーソン・クリエイター",
  },
  {
    pattern: (b, m) => `音楽再生8時間＆待機7日間のタフバッテリー！${b} ${m}なら1日中充電切れの心配なく完全ハンズフリー`,
    patternZh: (b, m) => `连续听歌8小时、超长待机7整天！${b} ${m} 强劲续航让你全天告别低电量焦虑解放双手`,
    category: "efficiency",
    angleLabel: "8h連続再生・長持ち電池",
    targetAudience: "外回り営業・アクティブ派",
  },
  {
    pattern: (b, m) => `電話がかかってきてもメガネをタップするだけ！${b} ${m}のENCデュアルマイクで雑音ゼロのクリア通話`,
    patternZh: (b, m) => `来电时轻敲镜腿一键接听！${b} ${m} 搭载 ENC 双麦克风 AI 降噪，闹市通话也宛如面对面清澈`,
    category: "efficiency",
    angleLabel: "ENC高音質通話・即時応答",
    targetAudience: "リモートワーカー・ドライバー",
  },
  {
    pattern: (b, m) => `日差しの強さに応じて指先で4段階明るさチェンジ！${b} ${m}が実現する究極のストレスフリー視界`,
    patternZh: (b, m) => `根据光照强度指尖轻按自如切换4档明暗！${b} ${m} 打造全天候无压迫清透舒适视野`,
    category: "efficiency",
    angleLabel: "4段階シームレス調光",
    targetAudience: "運転手・ゴルフ・釣り好き",
  },

  // 3. gadget: ハードウェア魅力・TR90超軽量＆4段階調光レンズ
  {
    pattern: (b, m) => `【近未来】指で触れた瞬間レンズが4段階に色づく！${b} ${m}のエレクトロクロミック変色機能が凄すぎる`,
    patternZh: (b, m) => `【未来黑科技】触碰瞬间镜片4档电致变色！${b} ${m} 尖端电致变色技术展现震撼科技感`,
    category: "gadget",
    angleLabel: "4段階エレクトロクロミック",
    targetAudience: "テクノロジー・新感覚体験派",
  },
  {
    pattern: (b, m) => `見た目は極上のお洒落メガネなのに中身は最強AI！${b} ${m}のTR90軽量フレームが美しすぎる`,
    patternZh: (b, m) => `外表是高级时尚质感眼镜，内里搭载强大 AI 算力！${b} ${m} 的 TR90 镜架美学质感出众`,
    category: "gadget",
    angleLabel: "TR90高級質感フレーム",
    targetAudience: "デザイン重視・お洒落好き",
  },
  {
    pattern: (b, m) => `耳元にスピーカー内蔵なのに音漏れしにくい！${b} ${m}の指向性オープンオーディオ技術に感動した`,
    patternZh: (b, m) => `镜腿内置扬声器却几乎没有隐私漏音！${b} ${m} 的定向空间声场音频黑科技令人赞不绝口`,
    category: "gadget",
    angleLabel: "指向性オープンサウンド",
    targetAudience: "オーディオマニア・通勤者",
  },
  {
    pattern: (b, m) => `テンプル前方スワイプで音量UP、後ろでDOWN！${b} ${m}の静電タッチ操作がまるでSF映画の世界`,
    patternZh: (b, m) => `前划调高音量、后划调小音量！${b} ${m} 的静电电容触控体验宛如置身科幻电影世界`,
    category: "gadget",
    angleLabel: "SF感覚ジェスチャー操作",
    targetAudience: "未来デバイス・トレンド派",
  },
  {
    pattern: (b, m) => `IP65防水防塵だからゲリラ豪雨も汗もへっちゃら！${b} ${m}の全地形対応スマートグラスが頼もしすぎる`,
    patternZh: (b, m) => `IP65 防尘防水无惧暴雨与汗水泼溅！${b} ${m} 全天候高耐久智能眼镜让人格外安心`,
    category: "gadget",
    angleLabel: "IP65タフネス・全天候型",
    targetAudience: "サイクリング・アウトドア派",
  },
  {
    pattern: (b, m) => `わずか数十グラムで8時間連続再生！${b} ${m}の超高密度バッテリーとミニマル設計が神がかってる`,
    patternZh: (b, m) => `仅数十克羽量机身却能持续播放8小时！${b} ${m} 高密度微型电池与极简结构堪称工业奇迹`,
    category: "gadget",
    angleLabel: "ミニマル高密度構造",
    targetAudience: "ウルトラライト・ギア好き",
  },

  // 4. ai_power: AIインテリジェンス・リアルタイム同時通訳・音声アシスタント
  {
    pattern: (b, m) => `耳元で外国語がスラスラ日本語に！${b} ${m}のAIリアルタイム同時通訳で海外旅行が100倍楽しくなる`,
    patternZh: (b, m) => `外语在耳畔即时转译流利对答！${b} ${m} 的 AI 实时同声传译让跨国旅行与商务乐趣倍增`,
    category: "ai_power",
    angleLabel: "AI多言語同時通訳",
    targetAudience: "海外旅行・インバウンド対応",
  },
  {
    pattern: (b, m) => `「これどういう意味？」耳元AIが即座に教えてくれる！${b} ${m}はメガネの形をした専属ブレーン`,
    patternZh: (b, m) => `随口一句“这句话什么意思”耳边 AI 立即答复！${b} ${m} 是戴在眼前的全能私人智慧智囊`,
    category: "ai_power",
    angleLabel: "AI知能問答・即時アンサー",
    targetAudience: "学生・リスキリング派",
  },
  {
    pattern: (b, m) => `騒がしいカフェでも自分の声だけ超クリア！${b} ${m}のENCデュアルマイクAIノイズキャンセリングが最強`,
    patternZh: (b, m) => `喧闹嘈杂的咖啡厅依然能精准拾取纯净人声！${b} ${m} 拥有极其出色的 ENC 双麦 AI 降噪能力`,
    category: "ai_power",
    angleLabel: "ENCデュアルマイクAI降噪",
    targetAudience: "ノマドワーカー・配信者",
  },
  {
    pattern: (b, m) => `語学学習もこれ1本で劇的進化！${b} ${m}のAIリスニング＆会話サポートで発音まで完璧にチェック`,
    patternZh: (b, m) => `一副眼镜开启高效外语学习新纪元！${b} ${m} 实时听力跟读与对话辅助让口语突飞猛进`,
    category: "ai_power",
    angleLabel: "AI語学学習パートナー",
    targetAudience: "英会話・多言語学習者",
  },
  {
    pattern: (b, m) => `両手がふさがっていてもAIが耳元でサポート！${b} ${m}が切り拓く次世代スマートライフが異次元`,
    patternZh: (b, m) => `双手忙碌时依然有 AI 在耳侧贴心伴随！${b} ${m} 开辟的下一代智能互联生活充满无限可能`,
    category: "ai_power",
    angleLabel: "次世代ハンズフリーAI",
    targetAudience: "スマートホーム・先端IT派",
  },

  // 5. secret_hack: ファッションコーデ裏技・クリエイターの秘密兵器
  {
    pattern: (b, m) => `【お洒落男子の秘密】ダサいイヤホンをやめて${b} ${m}に変えたら女子ウケが急上昇した話`,
    patternZh: (b, m) => `【穿搭达人的秘密】摘掉笨重突兀的普通耳机换上 ${b} ${m}，整体穿搭高级感与异性好感度飙升`,
    category: "secret_hack",
    angleLabel: "好印象・服装コーデ裏技",
    targetAudience: "メンズファッション・モテ服派",
  },
  {
    pattern: (b, m) => `カフェで仕事ができる人がこっそりかけてるコレ！${b} ${m}の変色レンズ×オープンイヤホンがチート級`,
    patternZh: (b, m) => `高产自由职业者办公桌上私藏的秘密武器！${b} ${m} 智能变色镜片与开放式音频的结合堪称神器`,
    category: "secret_hack",
    angleLabel: "デキる人の秘密アイテム",
    targetAudience: "カフェワーカー・フリーランス",
  },
  {
    pattern: (b, m) => `「そのサングラスどこの？」って街で3回聞かれた！${b} ${m}の4段階調光ギミックが目立ち度MAX`,
    patternZh: (b, m) => `走在街上被路人连续追问“这墨镜哪买的”！${b} ${m} 4档电致变色吸睛回头率直接拉满`,
    category: "secret_hack",
    angleLabel: "注目度MAX・話題性",
    targetAudience: "インフルエンサー・流行発信派",
  },
  {
    pattern: (b, m) => `荷物を極限まで減らしたいミニマリストの最終結論！${b} ${m}ならメガネ・サングラス・イヤホンが1台に統合`,
    patternZh: (b, m) => `极致减负断舍离玩家的终极答案！入手 ${b} ${m} 一体化搞定平光镜、墨镜与无线耳机三大刚需`,
    category: "secret_hack",
    angleLabel: "3in1ミニマリスト結論",
    targetAudience: "ミニマリスト・持ち物削減派",
  },
  {
    pattern: (b, m) => `TikTokerがドライブ中にこっそり愛用中！${b} ${m}で視界の眩しさと音楽を完全スマートコントロール`,
    patternZh: (b, m) => `自驾博主私下强烈安利的开车神器！用 ${b} ${m} 完美搞定烈日眩光抵御与沉浸式音乐导航`,
    category: "secret_hack",
    angleLabel: "ドライブ・旅行の神ギア",
    targetAudience: "ドライブ・車好き",
  },

  // 6. question: 疑問・コメント欄巻き込み型
  {
    pattern: (b, m) => `タップ1回でレンズの色が変わるスマートメガネ、正直欲しい？${b} ${m}を本音レビューしてみた`,
    patternZh: (b, m) => `轻轻一碰就能改变镜片深浅的智能眼镜你想拥有吗？为你带来 ${b} ${m} 真实上手深度测评`,
    category: "question",
    angleLabel: "本音レビュー・購入意欲",
    targetAudience: "購入検討・レビュー重視層",
  },
  {
    pattern: (b, m) => `メガネにAIとイヤホンが入ってるって信じられる？${b} ${m}の実力を見たら全員腰抜かすレベル`,
    patternZh: (b, m) => `你能相信一副眼镜里竟然同时集成了 AI 智脑与立体声耳机？看完 ${b} ${m} 的硬核表现让人大开眼界`,
    category: "question",
    angleLabel: "近未来信憑性・驚き",
    targetAudience: "一般視聴者・バズ拡散層",
  },
  {
    pattern: (b, m) => `【究極の2択】イヤホン派？それとも${b} ${m}のスマートグラス派？コメントで教えて！`,
    patternZh: (b, m) => `【终极二选一】你是传统入耳耳机派还是 ${b} ${m} 智能音频眼镜派？欢迎在评论区聊聊！`,
    category: "question",
    angleLabel: "究極の2択・コメント誘導",
    targetAudience: "SNSアクティブ・議論層",
  },
  {
    pattern: (b, m) => `4段階調光とリアルタイム同時通訳、どっちの機能が気になる？${b} ${m}が凄すぎる件について`,
    patternZh: (b, m) => `4档电致变色与 AI 实时多语言同传，你更心动哪项功能？聊聊让人惊艳的 ${b} ${m}`,
    category: "question",
    angleLabel: "機能比較・興味関心",
    targetAudience: "機能重視・スペック比較派",
  },
  {
    pattern: (b, m) => `1日中かけても本当に疲れない？${b} ${m}のTR90超軽量フレームを1週間つけっぱなし検証`,
    patternZh: (b, m) => `整天戴着真的完全不累吗？为你实测 ${b} ${m} 超轻 TR90 镜架连续佩戴一周的真实感受`,
    category: "question",
    angleLabel: "耐久着用検証・信頼性",
    targetAudience: "慎重派・検証動画好き",
  },

  // 7. spec_power: ハイスペック・信頼性・数字の説得力
  {
    pattern: (b, m) => `4段階変色・TR90超軽量・IP65防水・8h再生！${b} ${m}の全部入りスペックがこの価格で手に入る奇跡`,
    patternZh: (b, m) => `4档变色・TR90超轻・IP65防水・8小时续航！${b} ${m} 满配全能硬核配置高性价比呈献`,
    category: "spec_power",
    angleLabel: "全部入りモンスター仕様",
    targetAudience: "スペック重視・コスパ派",
  },
  {
    pattern: (b, m) => `ENCデュアルマイク搭載で騒音下でも美声通話！${b} ${m}がビジネスもプライベートも完全制覇`,
    patternZh: (b, m) => `双麦 ENC 降噪让嘈杂环境下通话依然纯净自然！${b} ${m} 完美胜任商务沟通与日常社交`,
    category: "spec_power",
    angleLabel: "ENCデュアルマイク性能",
    targetAudience: "通話品質・仕事重視派",
  },
  {
    pattern: (b, m) => `長時間のデスクワークでも耳が痛くならない！${b} ${m}のオープンイヤー立体音響と極上フィット感`,
    patternZh: (b, m) => `长时间办公佩戴耳道依然清爽无痛！${b} ${m} 带来空间立体声场与极致贴合人体工学`,
    category: "spec_power",
    angleLabel: "立体音響・快適フィット",
    targetAudience: "デスクワーカー・ゲーマー",
  },
  {
    pattern: (b, m) => `待機7日間以上の安心バッテリー！${b} ${m}は週末のキャンプやロングドライブでも充電器いらず`,
    patternZh: (b, m) => `长达7天以上的超长待机电量！戴上 ${b} ${m} 周末露营与长途自驾无需随身携带充电器`,
    category: "spec_power",
    angleLabel: "7日間待機・ロングライフ",
    targetAudience: "キャンパー・旅行者",
  },
  {
    pattern: (b, m) => `指先1タップで紫外線も日差しも瞬時カット！${b} ${m}のエレクトロクロミックレンズの科学的凄さ`,
    patternZh: (b, m) => `指尖轻轻一点瞬间阻隔紫外线与刺眼强光！${b} ${m} 电致变色光学镜片科技感拉满`,
    category: "spec_power",
    angleLabel: "UVカット・変色光学技術",
    targetAudience: "紫外線対策・アイケア派",
  },

  // 8. all_mixed: 黄金比率・総合アピール
  {
    pattern: (b, m) => `【神アイテム】4段階調光×AI同時通訳×耳を塞がないイヤホン！${b} ${m}が今年のベストバイ確定`,
    patternZh: (b, m) => `【宝藏单品】4档变色 × AI实时同传 × 开放式音频耳机！${b} ${m} 堪称今年最值得入手的科技潮品`,
    category: "all_mixed",
    angleLabel: "総合ベストバイ・神アイテム",
    targetAudience: "オールラウンド・全ユーザー",
  },
  {
    pattern: (b, m) => `服装を選ばない極簡ブラックフレーム！${b} ${m}で日常のスタイルとスマート生活を格上げしよう`,
    patternZh: (b, m) => `不挑脸型与穿搭的极简黑框美学！用 ${b} ${m} 升级你的日常衣品与先锋科技生活`,
    category: "all_mixed",
    angleLabel: "スタイル格上げ・服装マッチ",
    targetAudience: "お洒落社会人・学生",
  },
  {
    pattern: (b, m) => `指先スワイプで音量自在、タップで変色！${b} ${m}がもたらす手ぶら未来体験に全員ハマる`,
    patternZh: (b, m) => `指尖前后滑动掌控音量，轻触按压瞬间变色！体验过 ${b} ${m} 的便捷之后大家都爱不释手`,
    category: "all_mixed",
    angleLabel: "未来体験・手ぶら解放",
    targetAudience: "トレンドセッター・若者層",
  },
  {
    pattern: (b, m) => `これ1本でメガネ・サングラス・イヤホン完了！${b} ${m}の身軽すぎるスマート新生活が最高`,
    patternZh: (b, m) => `一副搞定眼镜、墨镜与耳机全部体验！${b} ${m} 开启超轻松轻量化智慧新生活`,
    category: "all_mixed",
    angleLabel: "身軽スマートライフ",
    targetAudience: "新生活・身軽志向",
  },
  {
    pattern: (b, m) => `【話題沸騰】AIと暮らす次世代スマートメガネ！${b} ${m}のリアルな使用感を徹底解説`,
    patternZh: (b, m) => `【全网热议】与 AI 智脑相伴的下一代智能眼镜！深度全方位解析 ${b} ${m} 真实上手体验`,
    category: "all_mixed",
    angleLabel: "話題沸騰・徹底解説",
    targetAudience: "YouTube/TikTok視聴者",
  },
  {
    pattern: (b, m) => `日差しの強い外ではサングラス、室内ではクリア！${b} ${m}の4段階シームレス調光が超快適`,
    patternZh: (b, m) => `户外强光下是帅气墨镜，步入室内即刻清晰通透！${b} ${m} 4档无缝调光带来极致舒适`,
    category: "all_mixed",
    angleLabel: "室内外シームレス適応",
    targetAudience: "デイリーユース・通勤通学",
  },
  {
    pattern: (b, m) => `耳を塞がないから1日中音楽聴き放題！${b} ${m}の8時間ロングバッテリーが頼もしすぎる`,
    patternZh: (b, m) => `不塞耳道享受全天候音乐畅听！${b} ${m} 的 8 小时超长电池续航让人格外踏实`,
    category: "all_mixed",
    angleLabel: "BGM感覚・一日中音楽",
    targetAudience: "音楽好き・作業BGM派",
  },
  {
    pattern: (b, m) => `海外の相手とも耳元でスムーズに対話成立！${b} ${m}の内蔵AI通訳で世界が広がる`,
    patternZh: (b, m) => `与海外朋友耳畔流畅自如对话！${b} ${m} 内置 AI 同声传译为你打开广阔世界`,
    category: "all_mixed",
    angleLabel: "世界とつながるAI通訳",
    targetAudience: "グローバル志向・留学生",
  },
  {
    pattern: (b, m) => `【買わないと損】TR90超軽量フレームに最新テクノロジーが詰まった${b} ${m}が熱すぎる！`,
    patternZh: (b, m) => `【不看准后悔】TR90 超轻质感镜架满载前沿黑科技，${b} ${m} 正在各大社交平台掀起热潮！`,
    category: "all_mixed",
    angleLabel: "買わないと損・熱烈推薦",
    targetAudience: "ガジェット購入検討者",
  },
  {
    pattern: (b, m) => `メガネの概念が完全に覆る！${b} ${m}の4段階調光＆スマートAI機能で日常をアップデート`,
    patternZh: (b, m) => `彻底颠覆对传统眼镜的认知！${b} ${m} 4档电致变色与强大智能 AI 全方位升级日常生活`,
    category: "all_mixed",
    angleLabel: "概念破壊・次世代ウェアラブル",
    targetAudience: "次世代デバイスファン",
  },
];

const E05_PREFIX_PAIRS: [string, string][] = [
  ["【必見】", "【必看推荐】"],
  ["【話題】", "【全网热议】"],
  ["【注目】", "【焦点关注】"],
  ["【本音レビュー】", "【真实上手测评】"],
  ["【最新作】", "【先锋新品】"],
];

const E05_SUFFIX_PAIRS: [string, string][] = [
  ["！これは買い", "，真心非常值得入手！"],
  ["！試す価値あり", "，绝对值得亲自体验！"],
  ["！正直感動した", "，上手之后让人深深惊艳！"],
  ["！マジでおすすめ", "，真心强烈推荐！"],
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

    // Variation decorators for ensuring uniqueness with paired Chinese translations
    const round = Math.floor(poolIdx / pool.length);
    if (round === 1) {
      const pair = E05_PREFIX_PAIRS[poolIdx % E05_PREFIX_PAIRS.length];
      if (!baseHook.startsWith("【")) {
        baseHook = `${pair[0]}${baseHook}`;
        baseZh = `${pair[1]} ${baseZh}`;
      }
    } else if (round === 2) {
      const pair = E05_SUFFIX_PAIRS[poolIdx % E05_SUFFIX_PAIRS.length];
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
        translationZh: modifiedZh,
        isFavorite: false,
        createdAt: new Date().toISOString(),
      });
    }

    poolIdx++;
  }

  return results.slice(0, 50);
}
