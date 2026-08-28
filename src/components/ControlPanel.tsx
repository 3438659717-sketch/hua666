import React, { useState, useEffect } from "react";
import { AngleCategory, GenerationParams, ProductId, TargetLanguage } from "../types";
import {
  Sparkles,
  Zap,
  Bot,
  Sliders,
  RefreshCw,
  Target,
  Watch,
  Mic,
  Compass,
  Flashlight,
  Headphones,
  Glasses,
  Camera,
  Tag,
  Hash,
  RotateCcw,
  CheckCircle2,
  Edit3,
  ListOrdered,
  Layers,
  Globe,
  Heart
} from "lucide-react";
import { PRODUCTS_CONFIG } from "../data/templates";
import { parseTagsToArray, formatArrayToTagString, normalizeTagString } from "../utils/tagUtils";
import { KT80_SPANISH_TAGS, KT80_GERMAN_TAGS } from "../data/kt80Templates";
import { G58_SPANISH_TAGS, G58_GERMAN_TAGS } from "../data/g58Templates";
import { MagneticButton } from "./MagneticButton";
import { TiltGlassCard } from "./TiltGlassCard";

interface ControlPanelProps {
  params: GenerationParams;
  onChangeParams: (newParams: Partial<GenerationParams>) => void;
  onGenerate: () => void;
  isLoading: boolean;
  totalCount: number;
}

const REC10_CATEGORIES: { id: AngleCategory; label: string; desc: string; icon: string }[] = [
  { id: "all_mixed", label: "全维黄金配比 (推荐)", desc: "痛点重塑 / 零加班效率 / 名片形态 / 双AI洞察 均衡输出", icon: "✨" },
  { id: "pain_point", label: "痛点反转・认知重塑", desc: "打破「手写做会议笔记」传统工作习惯，直击职场效率焦虑", icon: "🎯" },
  { id: "efficiency", label: "效率前置・成果直给", desc: "「1小时会议3秒出结构化纪要」以极强产出结果吸引点击", icon: "⚡" },
  { id: "gadget", label: "极简名片・硬件美学", desc: "手机磁吸 / 极薄铝合金卡片 / 纯实机无剧情硬核工业展示", icon: "💳" },
  { id: "ai_power", label: "ChatGPT×Gemini 双AI", desc: "一键生成思维导图与31种行业模板，呈现跨时代AI生产力", icon: "🤖" },
  { id: "secret_hack", label: "职场精英信息差", desc: "「为什么别人从不手写做纪要？」以猎奇秘密感引发讨论", icon: "🤫" },
  { id: "spec_power", label: "硬件参数压制", desc: "双核降噪麦克风 / 64GB存储 / 30h超长录音，硬件实力直观展现", icon: "📊" },
  { id: "question", label: "互动提问引流", desc: "「你开会还在用笔手记吗？」高频共鸣问题激发评论区讨论", icon: "💬" },
];

const QS40_CATEGORIES: { id: AngleCategory; label: string; desc: string; icon: string }[] = [
  { id: "all_mixed", label: "全维黄金配比 (推荐)", desc: "ChatGPT对腕语音 / 9.8mm超薄洗练银 / 破天荒性价比 均衡输出", icon: "✨" },
  { id: "pain_point", label: "痛点反转・终结打字", desc: "彻底解决智能手表小屏幕繁琐打字痛点，手腕直接说出即刻AI答复", icon: "🎯" },
  { id: "ai_power", label: "腕上ChatGPT 智能对话", desc: "搭载AI语音大模型，随时随地腕上提问、翻译、灵感速记与智能应答", icon: "🤖" },
  { id: "gadget", label: "9.8mm 极致纤薄银翼美学", desc: "流线轻薄金属机身+亲肤表带，职场/休闲无缝百搭，轻盈无感佩戴", icon: "⌚" },
  { id: "spec_power", label: "高清大屏与全天候健康", desc: "高清全彩触控屏，24小时连续心率、血氧监测与科学睡眠深度分析", icon: "📊" },
  { id: "efficiency", label: "百种运动与腕上蓝牙通话", desc: "100+运动模式精准记录，手腕一键接打电话，不错过任何重要来电", icon: "🏃" },
  { id: "secret_hack", label: "千元级体验・百元级入手", desc: "「这块表居然能装下ChatGPT？」打破高价认知的超高性价比黑马", icon: "🤫" },
  { id: "question", label: "互动共鸣・评论区激活", desc: "「手表装ChatGPT能干什么？实测给你看」激发年轻极客好奇讨论", icon: "💬" },
];

const T20_CATEGORIES: { id: AngleCategory; label: string; desc: string; icon: string }[] = [
  { id: "all_mixed", label: "全维黄金配比 (推荐)", desc: "多星GNSS脱机 / 电子指南针气压计 / 智能排水 / 军规耐用 均衡输出", icon: "✨" },
  { id: "gadget", label: "多星GNSS・脱机轨迹", desc: "不依赖手机的独立高精度定位，实时掌握海拔高度与气压走势", icon: "🧭" },
  { id: "ai_power", label: "智能物理排水黑科技", desc: "涉水、潜游或暴雨后一键物理高频震动排空积水，无惧严苛环境", icon: "💦" },
  { id: "efficiency", label: "100+运动・专属硬核按键", desc: "定制物理按键一触直达专业运动模式，精准记录运动生理数据", icon: "🏃" },
  { id: "pain_point", label: "痛点反转・告别高价表", desc: "「不必花费数十万日元买户外表」高耐用性与高性价比双重打破", icon: "🎯" },
  { id: "secret_hack", label: "蓝牙通话・腕上语音助手", desc: "严酷户外无需掏出手机，手腕即可一键接打重要电话与指令交互", icon: "📞" },
  { id: "spec_power", label: "全天候守护・科学睡眠监测", desc: "24小时连续心率、血氧与压力监测，深浅睡眠及异常负荷预警", icon: "🛡️" },
  { id: "question", label: "硬核探险・社交互动引流", desc: "「手表内部瞬间震动喷水？这功能太酷了」激发户外爱好者讨论", icon: "💬" },
];

const KT80_CATEGORIES_ES: { id: AngleCategory; label: string; desc: string; icon: string }[] = [
  { id: "all_mixed", label: "全维黄金配比 (Recomendado)", desc: "800mAh超大电量 / 侧置LED战术手电 / 5ATM潜水 / 蓝牙通话 均衡输出", icon: "✨" },
  { id: "pain_point", label: "痛点反转・终结电量焦虑", desc: "告别一天一充的脆弱智能表，800mAh 超长续航彻底终结户外电量焦虑", icon: "🎯" },
  { id: "gadget", label: "强光LED手电・战术侧键", desc: "机身自带高流明物理手电筒，无需摸手机，暗夜徒步、修车、露营一触即亮", icon: "🔦" },
  { id: "ai_power", label: "蓝牙通话・腕上双向语音", desc: "户外运动/驾车时手腕一键接打高清电话，AI 语音助手随时听候指令", icon: "📞" },
  { id: "efficiency", label: "1.46\"大屏・100+极限运动", desc: "超大高亮全触控屏，强光下清晰可见，专业精准记录百种运动数据", icon: "🏃" },
  { id: "spec_power", label: "5ATM 真实潜水级防水", desc: "游泳、冲浪、暴雨全面防护，全天候心率血氧监测与科学睡眠管理", icon: "🌊" },
  { id: "secret_hack", label: "户外达人的秘密战术装备", desc: "「千元级硬核质感只要十分之一？」打破高价认知的野外生存神物", icon: "🤫" },
  { id: "question", label: "互动共鸣・户外话题引流", desc: "「你会戴这块表去50米潜水吗？800mAh怪兽手表测评」激发热议", icon: "💬" },
];

const KT80_CATEGORIES_DE: { id: AngleCategory; label: string; desc: string; icon: string }[] = [
  { id: "all_mixed", label: "Goldener Schnitt (Empfohlen)", desc: "800 mAh Akku-Monster / LED-Taschenlampe / 5ATM Tauchen / BT-Calls", icon: "✨" },
  { id: "pain_point", label: "Nie wieder täglich laden", desc: "Schluss mit schwachen Akkus – 800 mAh Monsterakku für extreme Outdoor-Touren", icon: "🎯" },
  { id: "gadget", label: "Ultrahelle LED-Taschenlampe", desc: "Echte physische LED-Lampe am Handgelenk – Ideal für Camping, Nachtlauf & Notfälle", icon: "🔦" },
  { id: "ai_power", label: "Bluetooth 5.3 Anrufe am Handgelenk", desc: "Kristallklare Freisprechfunktion & Sprachassistent direkt an der Uhr", icon: "📞" },
  { id: "efficiency", label: "1,46\" HD Display & 100+ Modi", desc: "Robustes Metallgehäuse, kratzfestes Glas & präzises Tracking für jedes Abenteuer", icon: "🏃" },
  { id: "spec_power", label: "Echte 5ATM Tauch-Wasserdicht", desc: "Schwimmen, Duschen, Starkregen / 24/7 Vitaldaten & Schlafanalyse", icon: "🌊" },
  { id: "secret_hack", label: "Geheimtipp der Outdoor-Profis", desc: "High-End Allround-Smartwatch ohne überteuerten Marken-Aufpreis", icon: "🤫" },
  { id: "question", label: "Community & Diskussion", desc: "Würdest du mit 5ATM tauchen? 800 mAh Akku vs LED-Licht im Test", icon: "💬" },
];

const G58_CATEGORIES_ES: { id: AngleCategory; label: string; desc: string; icon: string }[] = [
  { id: "all_mixed", label: "全维黄金配比 (Recomendado)", desc: "1.27\"高清触控屏 / 专属女性生理周期 / 米兰尼斯+硅胶双表带 / 蓝牙通话 均衡输出", icon: "✨" },
  { id: "pain_point", label: "痛点反转・告别笨重表", desc: "打破「智能手表笨重难搭女装、忘记经期」痛点，优雅轻盈与健康科技兼具", icon: "🎯" },
  { id: "gadget", label: "1.27\"高清屏・98%高屏占比", desc: "390×390高分辨率 / 高硬度防指纹玻璃 / 轻盈百搭机身 / 视觉通透清晰", icon: "💎" },
  { id: "ai_power", label: "专属女性健康・生理周期管理", desc: "经期/排卵期/安全期智能跟踪预测，经期关怀提醒与孕期记录，24/7全天守护", icon: "🌸" },
  { id: "efficiency", label: "米兰尼斯+硅胶・双表带随心搭", desc: "职场优雅米兰尼斯 / 运动舒适硅胶表带自由切换 / 120+专业运动模式", icon: "👗" },
  { id: "spec_power", label: "蓝牙5.3高清通话・IP68防水", desc: "手腕一键接听重要电话 / 24小时心率血氧睡眠监测 / 日常防水无忧", icon: "📞" },
  { id: "secret_hack", label: "时尚博主秘密穿搭神物", desc: "「千元级大牌轻奢质感」高颜值女性智能饰品，穿搭加分神器", icon: "🤫" },
  { id: "question", label: "互动共鸣・女性话题引流", desc: "「能精准测经期的神仙手表你心动了吗？」激发女性观众热烈讨论与分享", icon: "💬" },
];

const G58_CATEGORIES_DE: { id: AngleCategory; label: string; desc: string; icon: string }[] = [
  { id: "all_mixed", label: "Goldener Schnitt (Empfohlen)", desc: "1,27\" HD Touchscreen / Zyklus- & Schwangerschaftstracker / Milanese & Silikon / BT-Calls", icon: "✨" },
  { id: "pain_point", label: "Schmerzpunkt & Eleganz", desc: "Schluss mit klobigen Smartwatches – Perfekt abgestimmt auf feminine Outfits", icon: "🎯" },
  { id: "gadget", label: "1,27\" 390x390 & 98% Screen", desc: "Kristallklares HD-Display / Gehärtetes Anti-Fingerprint-Glas / Leichtes Design", icon: "💎" },
  { id: "ai_power", label: "Frauengesundheit & Zyklus", desc: "Menstruations-, Eisprung- & Schwangerschafts-Tracking mit sanften Erinnerungen", icon: "🌸" },
  { id: "efficiency", label: "Milanese- & Silikonband", desc: "Eleganter Milanese-Look fürs Büro & atmungsaktives Silikonband für 120+ Sportarten", icon: "👗" },
  { id: "spec_power", label: "Bluetooth 5.3 Calls & IP68", desc: "HD-Telefonie direkt am Handgelenk / 24/7 Herzfrequenz-, SpO2- & Schlafmonitoring", icon: "📞" },
  { id: "secret_hack", label: "Fashion-Tipp für Frauen", desc: "Eleganter Luxus-Look zum Spitzenpreis – Das Must-Have Accessoire für stilbewusste Frauen", icon: "🤫" },
  { id: "question", label: "Community & Style-Diskussion", desc: "Finde deinen Lieblingslook! Welches Armband passt besser zu deinem Outfit?", icon: "💬" },
];

const E12_CATEGORIES: { id: AngleCategory; label: string; desc: string; icon: string }[] = [
  { id: "all_mixed", label: "全维黄金配比 (推荐)", desc: "1080P视角录像 / HiLuma AI智能助手 / 16mm开放音质 / 8h续航 均衡输出", icon: "✨" },
  { id: "pain_point", label: "痛点反转・告别手持拍摄", desc: "手持手机拍摄的繁琐与危险，第一人称目线记录解放双手，解决拍摄疲倦", icon: "🎯" },
  { id: "gadget", label: "第一人称POV・1080P防抖录像", desc: "挂耳式极致稳固，1080P 30fps超清微型相机，目之所及即刻开拍", icon: "📷" },
  { id: "ai_power", label: "HiLuma AI・智能视觉问答", desc: "手势双击唤醒AI助手，看图识物、跨语言同传翻译、智能备忘与视觉问答", icon: "🤖" },
  { id: "efficiency", label: "16mm大喇叭・开放不入耳", desc: "16mm超大动圈单元，澎湃低音与通透声场，开放式佩戴运动通勤两相宜", icon: "🎵" },
  { id: "spec_power", label: "8h录像续航・双降噪麦克风", desc: "8小时超长连续录像/音乐，ENC智能降噪，骑行奔跑风噪全面过滤", icon: "🔋" },
  { id: "secret_hack", label: "旅行博主与骑行达人秘密装备", desc: "「原来那些神级第一视角是这样拍的！」打破信息差的爆款摄影黑马", icon: "🤫" },
  { id: "question", label: "互动共鸣・极客话题引流", desc: "「戴着AI相机的耳机你敢戴出门吗？」引发科技爱好者与博主热烈讨论", icon: "💬" },
];

const E05_CATEGORIES: { id: AngleCategory; label: string; desc: string; icon: string }[] = [
  { id: "all_mixed", label: "全维黄金配比 (推荐)", desc: "4段階調光 / TR90極軽量 / AIリアルタイム通訳 / ENC通話 / 8h音楽再生 均衡出力", icon: "✨" },
  { id: "pain_point", label: "痛点反转・告别墨镜更换", desc: "室内クリアから屋外サングラスへ1秒で切り替え。2本持ちの煩わしさと荷物を完全解放", icon: "🎯" },
  { id: "gadget", label: "4段階調光 ✕ TR90超軽量フレーム", desc: "指先で触れるだけでレンズ濃度が4段階に瞬時変化。羽のように軽いTR90素材で極上のフィット感", icon: "🕶️" },
  { id: "ai_power", label: "AI知能問答 ＆ リアルタイム同時通訳", desc: "耳元のAIアシスタントが質問に即答。多言語リアルタイム通訳で海外旅行やビジネスの言葉の壁を打破", icon: "🤖" },
  { id: "efficiency", label: "テンプル触控スワイプ ✕ 開放音響", desc: "テンプルを前後になぞるだけで音量調整。耳を塞がない開放型で周囲の安全と高音質を両立", icon: "⚡" },
  { id: "secret_hack", label: "極簡コーデ・高颜值モテ神ギア", desc: "「それどこのメガネ？」と聞かれる洗练デザイン。ファッションと最先端テクノロジーの完璧な融合", icon: "🤫" },
  { id: "spec_power", label: "8h音楽連続再生 ✕ ENC双マイク降噪", desc: "音楽8時間・待機7日以上のロングバッテリー。ENCデュアルマイクで街中でも騒音を遮断しクリア通話", icon: "🔋" },
  { id: "question", label: "インタラクティブ・共感喚起", desc: "「タップで色が変わるスマートメガネ、正直欲しい？」TikTok視聴者のコメント欄を熱狂させるフック", icon: "💬" },
];

const E09_CATEGORIES: { id: AngleCategory; label: string; desc: string; icon: string }[] = [
  { id: "all_mixed", label: "全维黄金配比 (推荐)", desc: "SONY 800万画素POV / 40g極軽量PC+ABS / 物理ボタン10分録画 / デュアルスピーカー / 4タップAI 均衡出力", icon: "✨" },
  { id: "pain_point", label: "痛点反转・告别手持拍摄", desc: "スマホ片手持ちの不便や重いアクションカメラの疲労を解消。目線そのまま第一人称POVで完全手ぶら撮影", icon: "🎯" },
  { id: "gadget", label: "SONY 800万画素 ✕ 40g極軽量", desc: "わずか40gの伊達メガネにSONY IMX219高清カメラ内蔵。透明ブルーライトカットレンズ標準搭載", icon: "📷" },
  { id: "ai_power", label: "4タップAI音声対話 ✕ アレイマイク", desc: "4回タップでAI対話アシスタント即起動。指向性アレイマイクで風切り音を低减しクリアな通話＆録音", icon: "🤖" },
  { id: "efficiency", label: "専用物理ボタン ✕ 10分動画録画", desc: "1押しで写真・2押しで最大10分連続ビデオ・3押しでボイス録音。テンプルスワイプで秒速音量調整", icon: "⚡" },
  { id: "secret_hack", label: "極簡服装コーデ ✕ 日常Vlog神ギア", desc: "お洒落な人がこっそり愛用するミニマル黑縁メガネ。旅行・散歩・料理のデイリーレコード秘密兵器", icon: "🤫" },
  { id: "spec_power", label: "1080P 30fps ✕ 電子防振 ✕ デュアル音響", desc: "SONY IMX219センサー・ソフトウェア手ブレ補正・PC+ABS高耐久・開放型デュアルスピーカー", icon: "🔋" },
  { id: "question", label: "インタラクティブ・共感喚起", desc: "「目線そのまま動画が撮れるメガネがあったら何撮りたい？」TikTok視聴者のコメント欄を熱狂させるフック", icon: "💬" },
];

const G2_CATEGORIES: { id: AngleCategory; label: string; desc: string; icon: string }[] = [
  { id: "all_mixed", label: "全维黄金配比 (推荐)", desc: "全天健康监测 / 女性生理周期 / 120+运动模式 / 蓝牙5.3通话 / IP68防水 / 服装百搭 均衡输出", icon: "✨" },
  { id: "pain_point", label: "痛点反转・生理周期＆体调管理", desc: "手帳やアプリの手入力の面倒さや毎日の体調不安を解消。手首で生理周期・心拍・血中酸素・睡眠を自動可视化", icon: "🎯" },
  { id: "ai_power", label: "女性の健康 ✕ FitCloudPro連携", desc: "月経周期トラッキング・深睡眠浅睡眠分析・呼吸リラクゼーション・FitCloudPro詳細データ連携", icon: "🌸" },
  { id: "efficiency", label: "Bluetooth5.3通話 ✕ LINE通知", desc: "手首でクリア通話＆連絡先同期、LINE・SNS・メール・着信を即座に腕で確認、スマホ探索・電卓", icon: "📞" },
  { id: "gadget", label: "文字盤着せ替え ✕ 腕上げ点灯", desc: "気分に合わせて自由自在に着せ替えできるカスタム文字盤、多彩なメニュースタイル、IP68防水防塵", icon: "💎" },
  { id: "spec_power", label: "120+種運動 ✕ IP68防水 ✕ 24h健康", desc: "内蔵8+1＋追加112種＝120+運動モード、歩数・距離・カロリー計測、手洗い・雨天も安心のIP68防水", icon: "🏃" },
  { id: "secret_hack", label: "服装コーデ・高見え秘密アイテム", desc: "どんなファッションにも自然に溶け込む洗練デザイン。お洒落女子がこっそり愛用するQOL爆上げ神ウォッチ", icon: "🤫" },
  { id: "question", label: "インタラクティブ・共感喚起", desc: "「生理周期や睡眠まで測れる神時計知ってる？」TikTok女性視聴者の共感とコメントを熱狂させるフック", icon: "💬" },
];

const FOS10_CATEGORIES: { id: AngleCategory; label: string; desc: string; icon: string }[] = [
  { id: "all_mixed", label: "全维黄金配比 (推荐)", desc: "10.66mm极薄 / 14.9g超轻 / 100+表盘DIY / 女性健康 / 100+运动 均衡输出", icon: "✨" },
  { id: "pain_point", label: "痛点反转・14.9g超轻佩戴", desc: "打破「手表厚重手腕酸痛、睡觉佩戴有异物感」痛点，14.9g极致轻薄无感全天候守护", icon: "🎯" },
  { id: "gadget", label: "10.66mm极薄 ✕ 100+表盘DIY", desc: "10.66mm极薄机身，100+款表盘随心换，手机自定义DIY照片、推活背景与字体颜色", icon: "💎" },
  { id: "ai_power", label: "女性健康 ✕ 精密睡眠与呼吸", desc: "女性健康管理、心率/血氧常时监测、记录睡眠时间/深度/周期、呼吸训练减压", icon: "🌸" },
  { id: "spec_power", label: "100+运动模式 ✕ IP68防水", desc: "100+种运动精准记录步数、运动距离与卡路里消耗，IP68防尘防水洗手雨天无忧", icon: "🏃" },
  { id: "efficiency", label: "Bluetooth 5.3 ✕ LINE即时通知", desc: "蓝牙5.3低功耗高速连接，LINE、Facebook、SMS等消息即时腕上提醒，iOS/Android双兼容", icon: "⚡" },
  { id: "secret_hack", label: "便携轻薄 ✕ OOTD推活神器", desc: "薄型不卡袖口，推活照片定制专属表盘，极简百搭高颜值，年轻女性与上班族QOL爆升神物", icon: "🤫" },
  { id: "question", label: "互动共鸣・评论区激活", desc: "「14.9g戴着像没戴一样的智能手表你心动了吗？」激发年轻女性与科技爱好者的热烈讨论", icon: "💬" },
];

const TAG_SUGGESTIONS: Record<ProductId, string[]> = {
  rec10: ["仕事術", "時短ハック", "議事録", "AI活用", "ビジネス", "便利グッズ", "新社会人", "ガジェット"],
  qs40: ["AI腕時計", "ChatGPT", "コスパ最強", "健康管理", "睡眠改善", "文字盤", "タイパ", "メンズファッション"],
  t20: ["アウトドア", "登山", "スポーツ", "スマート排水", "GPS", "タフネス時計", "キャンプ", "防水時計"],
  kt80: ["smartwatch", "outdoor", "linterna LED", "800mAh", "5ATM", "tactico", "bateria larga", "buceo"],
  e12: ["AIイヤホン", "Bluetoothヘッドホン", "デイリーレコード", "HiLuma", "POV動画", "オープンイヤー", "16mmスピーカー", "Vlog"],
  e05: ["スマートグラス", "4段階調光", "AI翻訳", "TR90", "ENC通話", "極簡コーデ", "手ぶらAI", "服装"],
  e09: ["スマートグラス", "POV動画", "800万画素", "ブルーライトカット", "デイリーレコード", "40g极軽量", "Vlog", "服装"],
  g58: ["reloj inteligente", "Salud de la mujer", "Atuendo", "moda", "ciclo menstrual", "elegante", "fitness", "llamadas"],
  g2: ["女性の健康", "生理周期", "スマートウォッチ", "FitCloudPro", "Bluetooth通話", "健康管理", "睡眠トラッカー", "服装コーデ", "120種運動"],
  fos10: ["女性の健康", "スマートウォッチ", "ポータブル", "14.9g超軽量", "文字盤DIY", "睡眠トラッカー", "100種運動", "推し活", "IP68防水", "健康管理"],
};

const KT80_GERMAN_SUGGESTIONS = [
  "Smartwatch", "Outdoor", "Taschenlampe", "800mAh", "5ATM", "Wasserdicht", "Akkumonster", "Fitness"
];

const G58_GERMAN_SUGGESTIONS = [
  "Smartwatch", "Frauengesundheit", "Outfit", "Zyklustracker", "Milanese", "Fitness", "Eleganz", "Mode"
];

export const ControlPanel: React.FC<ControlPanelProps> = ({
  params,
  onChangeParams,
  onGenerate,
  isLoading,
  totalCount,
}) => {
  const currentProductId: ProductId = params.productId || "rec10";
  const currentProduct = PRODUCTS_CONFIG[currentProductId] || PRODUCTS_CONFIG.rec10;
  const isG2 = currentProductId === "g2";
  const isFos10 = currentProductId === "fos10";
  const isQs40 = currentProductId === "qs40";
  const isT20 = currentProductId === "t20";
  const isKt80 = currentProductId === "kt80";
  const isG58 = currentProductId === "g58";
  const isE12 = currentProductId === "e12";
  const isE05 = currentProductId === "e05";
  const isE09 = currentProductId === "e09";
  const isMultilingual = isKt80 || isG58;
  const currentLang: TargetLanguage = params.language || (isMultilingual ? "es" : "ja");
  const isGerman = isMultilingual && currentLang === "de";

  const categories = isFos10
    ? FOS10_CATEGORIES
    : isG2
    ? G2_CATEGORIES
    : isG58
    ? (isGerman ? G58_CATEGORIES_DE : G58_CATEGORIES_ES)
    : isE09
    ? E09_CATEGORIES
    : isE05
    ? E05_CATEGORIES
    : isE12
    ? E12_CATEGORIES
    : isKt80
    ? (isGerman ? KT80_CATEGORIES_DE : KT80_CATEGORIES_ES)
    : isT20
    ? T20_CATEGORIES
    : isQs40
    ? QS40_CATEGORIES
    : REC10_CATEGORIES;

  const defaultProductTags = isG58
    ? (isGerman ? G58_GERMAN_TAGS : G58_SPANISH_TAGS)
    : isKt80
    ? (isGerman ? KT80_GERMAN_TAGS : KT80_SPANISH_TAGS)
    : currentProduct.fixedTags;

  const activeTagsString = (params.customTags && params.customTags.trim())
    ? params.customTags.trim()
    : defaultProductTags;

  const isCustomized = Boolean(
    params.customTags &&
    params.customTags.trim() &&
    params.customTags.trim() !== defaultProductTags
  );

  const [tagSlots, setTagSlots] = useState<[string, string, string, string, string]>(() =>
    parseTagsToArray(activeTagsString, defaultProductTags)
  );

  const [tagEditMode, setTagEditMode] = useState<"slots" | "line">("slots");
  const [lineInputValue, setLineInputValue] = useState(activeTagsString);

  useEffect(() => {
    const parsed = parseTagsToArray(activeTagsString, defaultProductTags);
    setTagSlots(parsed);
    setLineInputValue(activeTagsString);
  }, [activeTagsString, defaultProductTags, currentProductId, currentLang]);

  const handleSlotChange = (index: number, val: string) => {
    const cleanVal = val.replace(/#/g, "").trim();
    const updated: [string, string, string, string, string] = [
      index === 0 ? cleanVal : tagSlots[0],
      index === 1 ? cleanVal : tagSlots[1],
      index === 2 ? cleanVal : tagSlots[2],
      index === 3 ? cleanVal : tagSlots[3],
      index === 4 ? cleanVal : tagSlots[4],
    ];
    setTagSlots(updated);

    const formatted = formatArrayToTagString(updated);
    setLineInputValue(formatted);
    onChangeParams({ customTags: formatted });
  };

  const handleLineInputChange = (val: string) => {
    setLineInputValue(val);
    const normalized = normalizeTagString(val);
    const parsed = parseTagsToArray(normalized, defaultProductTags);
    setTagSlots(parsed);
    onChangeParams({ customTags: normalized });
  };

  const handleResetToDefaultTags = () => {
    const defaultTags = defaultProductTags;
    const parsed = parseTagsToArray(defaultTags, defaultTags);
    setTagSlots(parsed);
    setLineInputValue(defaultTags);
    onChangeParams({ customTags: undefined });
  };

  const handleApplySuggestion = (suggestion: string) => {
    const emptyIdx = tagSlots.findIndex((t) => !t || t.trim() === "");
    const targetIdx = emptyIdx !== -1 ? emptyIdx : 4;
    const updated: [string, string, string, string, string] = [
      targetIdx === 0 ? suggestion : tagSlots[0],
      targetIdx === 1 ? suggestion : tagSlots[1],
      targetIdx === 2 ? suggestion : tagSlots[2],
      targetIdx === 3 ? suggestion : tagSlots[3],
      targetIdx === 4 ? suggestion : tagSlots[4],
    ];
    setTagSlots(updated);
    const formatted = formatArrayToTagString(updated);
    setLineInputValue(formatted);
    onChangeParams({ customTags: formatted });
  };

  const handleLanguageChange = (lang: TargetLanguage) => {
    onChangeParams({
      language: lang,
      customTags: isCustomized ? params.customTags : undefined,
    });
  };

  const getProductColor = () => {
    if (isFos10) return "text-teal-400";
    if (isG2) return "text-purple-400";
    if (isG58) return "text-pink-400";
    if (isE09) return "text-sky-400";
    if (isE05) return "text-rose-400";
    if (isE12) return "text-cyan-400";
    if (isKt80) return "text-amber-400";
    if (isT20) return "text-emerald-400";
    if (isQs40) return "text-purple-400";
    return "text-blue-400";
  };

  const currentSuggestions = isG58
    ? (isGerman ? G58_GERMAN_SUGGESTIONS : TAG_SUGGESTIONS.g58)
    : isKt80
    ? (isGerman ? KT80_GERMAN_SUGGESTIONS : TAG_SUGGESTIONS.kt80)
    : TAG_SUGGESTIONS[currentProductId] || [];

  return (
    <div id="control-panel" className="hyper-glass rounded-[28px] p-5 sm:p-7 mb-6 relative overflow-hidden">
      {/* Specular Micro-Chamfer Glare on Top Rim */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none z-10" />

      {/* Product Lineup Matrix */}
      <div className="mb-6 pb-6 border-b border-white/[0.06]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-white/80 tracking-wider uppercase flex items-center gap-1.5 font-mono">
              <Target className="w-3.5 h-3.5 text-white/50" />
              <span>硬件矩阵 (Product Matrix)</span>
            </span>
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/[0.06] text-white/70 border border-white/[0.08]">
              10款旗舰设备
            </span>
          </div>
          <span className="text-[11px] text-white/40">
            切换产品自动同步核心参数、目标受众画像与 5 大营销标签
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-10 gap-2">
          {[
            { id: "rec10" as ProductId, label: "REC10", desc: "名片AI录音", icon: <Mic className="w-3.5 h-3.5" />, tag: "#AIレコーダー" },
            { id: "qs40" as ProductId, label: "QS40", desc: "对腕ChatGPT", icon: <Watch className="w-3.5 h-3.5" />, tag: "#スマートウォッチ" },
            { id: "t20" as ProductId, label: "T20", desc: "多星GNSS", icon: <Compass className="w-3.5 h-3.5" />, tag: "#アウトドア" },
            { id: "kt80" as ProductId, label: "KT80", desc: "800mAh战术", icon: <Flashlight className="w-3.5 h-3.5" />, tag: "#smartwatch" },
            { id: "g58" as ProductId, label: "G58", desc: "女性时尚表", icon: <Sparkles className="w-3.5 h-3.5" />, tag: "#SaludMujer" },
            { id: "e12" as ProductId, label: "E12", desc: "POV相机耳机", icon: <Headphones className="w-3.5 h-3.5" />, tag: "#POV動画" },
            { id: "e05" as ProductId, label: "E05", desc: "4档调光镜", icon: <Glasses className="w-3.5 h-3.5" />, tag: "#スマートグラス" },
            { id: "e09" as ProductId, label: "E09", desc: "SONY高清镜", icon: <Camera className="w-3.5 h-3.5" />, tag: "#Vlog撮影" },
            { id: "g2" as ProductId, label: "G2", desc: "女性健康表", icon: <Heart className="w-3.5 h-3.5" />, tag: "#女性健康" },
            { id: "fos10" as ProductId, label: "FOS10", desc: "14.9g极轻", icon: <Sparkles className="w-3.5 h-3.5" />, tag: "#ポータブル" },
          ].map((prod) => {
            const isSelected = currentProductId === prod.id;
            return (
              <button
                key={prod.id}
                type="button"
                id={`tab-product-${prod.id}`}
                onClick={() => onChangeParams({ productId: prod.id, language: prod.id === "kt80" || prod.id === "g58" ? "es" : "ja" })}
                className={`group relative flex flex-col justify-between p-3 rounded-[20px] text-left transition-all duration-200 cursor-pointer overflow-hidden min-h-[96px] ${
                  isSelected
                    ? "bg-white/[0.12] border border-white/[0.22] shadow-lg text-white"
                    : "bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.07] hover:border-white/[0.12] text-white/70"
                }`}
              >
                <div className="flex items-center justify-between gap-1.5 w-full">
                  <div className={`p-1.5 rounded-[12px] ${
                    isSelected ? "bg-white text-black" : "bg-white/[0.06] text-white/60 group-hover:text-white"
                  }`}>
                    {prod.icon}
                  </div>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#00d287] shadow-[0_0_8px_#00d287]" />
                  )}
                </div>
                <div className="mt-2 w-full">
                  <span className="font-mono font-bold text-xs block text-white">
                    {prod.label}
                  </span>
                  <p className="text-[10px] text-white/50 truncate mt-0.5">
                    {prod.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Engine & Configuration Context Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/[0.08] text-white border border-white/[0.12] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00d287]" />
              当前硬件：<strong className={getProductColor()}>{currentProduct.name}</strong>
            </span>
            <span className="text-white/20">|</span>
            <span className="text-xs text-white/60">
              单次标准规格：<strong className="text-white font-mono">50 组</strong> 高转化短视频标题
            </span>
          </div>
          <p className="text-xs text-white/50 mt-1.5">
            {currentProduct.shortDesc}
          </p>
        </div>

        {/* Engine Switcher & Language selector */}
        <div className="flex items-center gap-2.5 flex-wrap self-start lg:self-center">
          {isMultilingual && (
            <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-[16px] border border-white/[0.08]">
              <div className="px-2 py-1 text-[11px] font-medium text-white/60 flex items-center gap-1">
                <Globe className="w-3 h-3" />
                <span>语言:</span>
              </div>
              <button
                type="button"
                id="btn-lang-es"
                onClick={() => handleLanguageChange("es")}
                className={`px-3 py-1.5 rounded-[12px] text-xs font-semibold transition-all cursor-pointer ${
                  currentLang === "es"
                    ? "bg-white text-black shadow-sm font-bold"
                    : "text-white/60 hover:text-white"
                }`}
              >
                🇪🇸 西班牙语 (ES)
              </button>
              <button
                type="button"
                id="btn-lang-de"
                onClick={() => handleLanguageChange("de")}
                className={`px-3 py-1.5 rounded-[12px] text-xs font-semibold transition-all cursor-pointer ${
                  currentLang === "de"
                    ? "bg-white text-black shadow-sm font-bold"
                    : "text-white/60 hover:text-white"
                }`}
              >
                🇩🇪 德语 (DE)
              </button>
            </div>
          )}

          {/* Engine Toggle */}
          <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-[16px] border border-white/[0.08]">
            <button
              type="button"
              id="btn-mode-algo"
              onClick={() => onChangeParams({ useAiApi: false })}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[12px] text-xs font-semibold transition-all cursor-pointer ${
                !params.useAiApi
                  ? "bg-white text-black shadow-sm"
                  : "text-white/50 hover:text-white"
              }`}
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>毫秒矩阵算法</span>
            </button>

            <button
              type="button"
              id="btn-mode-gemini"
              onClick={() => onChangeParams({ useAiApi: true })}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[12px] text-xs font-semibold transition-all cursor-pointer ${
                params.useAiApi
                  ? "bg-white text-black shadow-sm"
                  : "text-white/50 hover:text-white"
              }`}
            >
              <Bot className="w-3.5 h-3.5" />
              <span>Gemini 3.7 AI 深度创意</span>
            </button>
          </div>
        </div>
      </div>

      {/* HyperOS Bento Dashboard Specs */}
      <div className="mt-6 pb-6 border-b border-white/[0.06]">
        <div className="flex items-center justify-between mb-3">
          <label className="text-xs font-bold text-white/70 uppercase tracking-wider flex items-center gap-1.5 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-white/40" />
            <span>核心硬件仪表盘 (Hardware Highlights)</span>
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {/* Bento Widget 1 */}
          <div className="p-4 rounded-[22px] bg-white/[0.035] border border-white/[0.07] hover:border-white/[0.14] transition-all">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 font-bold block mb-1">
              SPEC 01 · 核心引擎
            </span>
            <div className="text-sm font-bold text-white mb-1">
              {currentProduct.model} 旗舰主推功能
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              {currentProduct.japaneseType} 独家硬件配置与深度算法优化
            </p>
          </div>

          {/* Bento Widget 2 */}
          <div className="p-4 rounded-[22px] bg-white/[0.035] border border-white/[0.07] hover:border-white/[0.14] transition-all">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 font-bold block mb-1">
              SPEC 02 · 形态与材质
            </span>
            <div className="text-sm font-bold text-white mb-1">
              极简工学设计
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              无感轻盈佩戴与高耐用性防尘防水机身
            </p>
          </div>

          {/* Bento Widget 3 */}
          <div className="p-4 rounded-[22px] bg-white/[0.035] border border-white/[0.07] hover:border-white/[0.14] transition-all">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 font-bold block mb-1">
              SPEC 03 · 转化挂载
            </span>
            <div className="text-sm font-bold text-white mb-1">
              5 大高权重标签
            </div>
            <p className="text-xs text-white/60 leading-relaxed truncate font-mono">
              {activeTagsString}
            </p>
          </div>
        </div>
      </div>

      {/* Content Angles / Perspectives */}
      <div className="mt-6">
        <div className="flex items-center justify-between mb-3">
          <label className="text-xs font-bold text-white/70 uppercase tracking-wider flex items-center gap-1.5 font-mono">
            <Layers className="w-3.5 h-3.5 text-white/40" />
            <span>内容切入视角 / 营销诉求维度</span>
          </label>
          <span className="text-[11px] text-white/40">
            精准客群心理触发器
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-8 gap-2.5">
          {categories.map((cat) => {
            const isSelected = params.category === cat.id;
            return (
              <button
                key={cat.id}
                id={`cat-btn-${cat.id}`}
                type="button"
                onClick={() => onChangeParams({ category: cat.id })}
                className={`group relative flex flex-col text-left p-3.5 rounded-[18px] transition-all text-xs cursor-pointer ${
                  isSelected
                    ? "bg-white text-black font-semibold shadow-md"
                    : "bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.07] hover:border-white/[0.12] text-white/70"
                }`}
              >
                <div className="flex items-center gap-1.5 font-bold mb-1 truncate">
                  <span className="text-sm">{cat.icon}</span>
                  <span className={`truncate ${isSelected ? "text-black" : "text-white"}`}>
                    {cat.label}
                  </span>
                </div>
                <span className={`text-[11px] line-clamp-2 leading-relaxed ${
                  isSelected ? "text-black/70" : "text-white/40"
                }`}>
                  {cat.desc}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 5-Tag Management Suite */}
      <div className="mt-6 p-4 sm:p-5 rounded-[22px] bg-white/[0.03] border border-white/[0.07]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3.5 border-b border-white/[0.06]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-[12px] bg-white/[0.06] text-white">
              <Tag className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white tracking-tight">
                  5 大固定营销标签管理
                </span>
                {isCustomized ? (
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                    <Edit3 className="w-2.5 h-2.5" /> 已自定义
                  </span>
                ) : (
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                    <CheckCircle2 className="w-2.5 h-2.5" /> 原厂标准标签
                  </span>
                )}
              </div>
              <p className="text-[11px] text-white/40 mt-0.5">
                支持随时修改 5 个标签，生成的所有标题均自动带上新标签。
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-center">
            <div className="flex items-center bg-white/[0.04] p-0.5 rounded-[12px] border border-white/[0.08] text-[11px]">
              <button
                type="button"
                id="btn-tag-mode-slots"
                onClick={() => setTagEditMode("slots")}
                className={`px-3 py-1 rounded-[10px] transition-all cursor-pointer flex items-center gap-1 ${
                  tagEditMode === "slots"
                    ? "bg-white text-black font-bold shadow-xs"
                    : "text-white/40 hover:text-white"
                }`}
              >
                <ListOrdered className="w-3 h-3" />
                <span>5槽位</span>
              </button>
              <button
                type="button"
                id="btn-tag-mode-line"
                onClick={() => setTagEditMode("line")}
                className={`px-3 py-1 rounded-[10px] transition-all cursor-pointer flex items-center gap-1 ${
                  tagEditMode === "line"
                    ? "bg-white text-black font-bold shadow-xs"
                    : "text-white/40 hover:text-white"
                }`}
              >
                <Edit3 className="w-3 h-3" />
                <span>单行</span>
              </button>
            </div>

            {isCustomized && (
              <button
                type="button"
                id="btn-reset-tags"
                onClick={handleResetToDefaultTags}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-[12px] text-xs font-semibold text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-all cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>恢复默认</span>
              </button>
            )}
          </div>
        </div>

        {/* Inputs */}
        {tagEditMode === "slots" ? (
          <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-5 gap-2.5">
            {[0, 1, 2, 3, 4].map((slotIdx) => (
              <div key={slotIdx} className="flex flex-col gap-1">
                <span className="text-[10px] text-white/40 font-medium">
                  槽位 {slotIdx + 1}
                </span>
                <div className="relative flex items-center">
                  <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-white/30">
                    <Hash className="w-3 h-3 text-white/40" />
                  </div>
                  <input
                    type="text"
                    id={`input-tag-slot-${slotIdx + 1}`}
                    placeholder={`标签 ${slotIdx + 1}`}
                    value={tagSlots[slotIdx] || ""}
                    onChange={(e) => handleSlotChange(slotIdx, e.target.value)}
                    className="w-full pl-7 pr-2.5 py-1.5 text-xs bg-black/40 border border-white/[0.08] rounded-[12px] focus:border-white/30 focus:ring-2 focus:ring-white/10 text-white font-mono outline-hidden transition-all placeholder:text-white/20"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-3.5">
            <span className="text-[10px] text-white/40 font-medium block mb-1">
              单行输入或直接粘贴：
            </span>
            <div className="relative flex items-center">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-white/30">
                <Hash className="w-3.5 h-3.5 text-white/40" />
              </div>
              <input
                type="text"
                id="input-tag-line"
                value={lineInputValue}
                onChange={(e) => handleLineInputChange(e.target.value)}
                className="w-full pl-8 pr-3 py-2 text-xs bg-black/40 border border-white/[0.08] rounded-[12px] focus:border-white/30 focus:ring-2 focus:ring-white/10 text-white font-mono outline-hidden transition-all placeholder:text-white/20"
              />
            </div>
          </div>
        )}

        {/* Suggestions */}
        <div className="mt-3 pt-2.5 border-t border-white/[0.05] flex flex-col md:flex-row md:items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] text-white/40 font-medium">
              💡 快捷推荐:
            </span>
            {currentSuggestions.map((sug, i) => (
              <button
                key={i}
                type="button"
                id={`btn-tag-sug-${i}`}
                onClick={() => handleApplySuggestion(sug)}
                className="px-2 py-0.5 text-[10px] rounded-[8px] bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] text-white/60 hover:text-white font-mono transition-all cursor-pointer"
              >
                +#{sug}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5 text-[11px] truncate">
            <span className="text-white/40 text-[10px]">生效标签:</span>
            <code className="font-mono text-[11px] px-2.5 py-0.5 rounded-[8px] bg-black/50 border border-white/[0.08] text-white font-medium truncate select-all">
              {activeTagsString}
            </code>
          </div>
        </div>
      </div>

      {/* Keyword Modifier & Xiaomi Vitality Generate Action */}
      <div className="mt-6 pt-5 border-t border-white/[0.06] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="flex-1">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/30">
              <Sliders className="w-3.5 h-3.5" />
            </div>
            <input
              type="text"
              id="input-custom-keyword"
              placeholder="特别强调词（选填，如：新入职、零加班、POV第一人称、10.66mm极薄、女性健康等）"
              value={params.customKeyword || ""}
              onChange={(e) => onChangeParams({ customKeyword: e.target.value })}
              className="w-full pl-9 pr-3.5 py-3 text-xs bg-white/[0.035] border border-white/[0.08] rounded-[16px] focus:border-white/30 focus:ring-2 focus:ring-white/10 text-white placeholder:text-white/30 transition-all outline-hidden font-sans"
            />
          </div>
        </div>

        {/* Xiaomi Vitality Orange / High-Power Generate Button */}
        <MagneticButton
          id="btn-generate-50"
          onClick={onGenerate}
          disabled={isLoading}
          className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-[18px] font-bold text-sm text-white bg-[#ff6900] hover:bg-[#ff7a1a] active:bg-[#e05d00] shadow-[0_8px_24px_rgba(255,105,0,0.4)] hover:shadow-[0_12px_32px_rgba(255,105,0,0.55)] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed border border-white/20"
        >
          {isLoading ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin text-white" />
              <span>{currentProduct.model} 50 组文案生成中...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 text-white" />
              <span>一键输出 50 组 {currentProduct.model} 爆款文案</span>
            </>
          )}
        </MagneticButton>
      </div>
    </div>
  );
};
