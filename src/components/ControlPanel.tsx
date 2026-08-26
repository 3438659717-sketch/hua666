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
  { id: "secret_hack", label: "極簡コーデ・高颜值モテ神ギア", desc: "「それどこのメガネ？」と聞かれる洗練デザイン。ファッションと最先端テクノロジーの完璧な融合", icon: "🤫" },
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

  const getProductBadgeColor = () => {
    if (isFos10) return "text-rose-300 bg-rose-500/15 border-rose-400/40 shadow-[0_0_10px_rgba(244,63,94,0.25)]";
    if (isG2) return "text-purple-300 bg-purple-500/15 border-purple-400/40 shadow-[0_0_10px_rgba(168,85,247,0.25)]";
    if (isG58) return "text-pink-300 bg-pink-500/15 border-pink-400/40 shadow-[0_0_10px_rgba(244,114,182,0.25)]";
    if (isE09) return "text-sky-300 bg-sky-500/15 border-sky-400/40 shadow-[0_0_10px_rgba(56,189,248,0.25)]";
    if (isE05) return "text-rose-300 bg-rose-500/15 border-rose-400/40 shadow-[0_0_10px_rgba(244,63,94,0.25)]";
    if (isE12) return "text-cyan-300 bg-cyan-500/15 border-cyan-400/40 shadow-[0_0_10px_rgba(6,182,212,0.25)]";
    if (isKt80) return "text-amber-300 bg-amber-500/15 border-amber-400/40 shadow-[0_0_10px_rgba(245,158,11,0.25)]";
    if (isT20) return "text-emerald-300 bg-emerald-500/15 border-emerald-400/40 shadow-[0_0_10px_rgba(16,185,129,0.25)]";
    if (isQs40) return "text-purple-300 bg-purple-500/15 border-purple-400/40 shadow-[0_0_10px_rgba(168,85,247,0.25)]";
    return "text-blue-300 bg-blue-500/15 border-blue-400/40 shadow-[0_0_10px_rgba(59,130,246,0.25)]";
  };

  const getActiveTabGlow = (prod: ProductId) => {
    if (prod === "fos10") return "border-rose-400/70 bg-rose-950/40 ring-1 ring-rose-400/40 shadow-lg shadow-black/80 border-crystal-glow scale-[1.02]";
    if (prod === "g2") return "border-purple-400/70 bg-purple-950/40 ring-1 ring-purple-400/40 shadow-lg shadow-black/80 border-crystal-glow scale-[1.02]";
    if (prod === "g58") return "border-pink-400/70 bg-pink-950/40 ring-1 ring-pink-400/40 shadow-lg shadow-black/80 border-crystal-glow scale-[1.02]";
    if (prod === "e09") return "border-sky-400/70 bg-sky-950/40 ring-1 ring-sky-400/40 shadow-lg shadow-black/80 border-crystal-glow scale-[1.02]";
    if (prod === "e05") return "border-rose-400/70 bg-rose-950/40 ring-1 ring-rose-400/40 shadow-lg shadow-black/80 border-crystal-glow scale-[1.02]";
    if (prod === "e12") return "border-cyan-400/70 bg-cyan-950/40 ring-1 ring-cyan-400/40 shadow-lg shadow-black/80 border-crystal-glow scale-[1.02]";
    if (prod === "kt80") return "border-amber-400/70 bg-amber-950/40 ring-1 ring-amber-400/40 shadow-lg shadow-black/80 border-crystal-glow scale-[1.02]";
    if (prod === "t20") return "border-emerald-400/70 bg-emerald-950/40 ring-1 ring-emerald-400/40 shadow-lg shadow-black/80 border-crystal-glow scale-[1.02]";
    if (prod === "qs40") return "border-purple-400/70 bg-purple-950/40 ring-1 ring-purple-400/40 shadow-lg shadow-black/80 border-crystal-glow scale-[1.02]";
    return "border-blue-400/70 bg-blue-950/40 ring-1 ring-blue-400/40 shadow-lg shadow-black/80 border-crystal-glow scale-[1.02]";
  };

  const currentSuggestions = isG58
    ? (isGerman ? G58_GERMAN_SUGGESTIONS : TAG_SUGGESTIONS.g58)
    : isKt80
    ? (isGerman ? KT80_GERMAN_SUGGESTIONS : TAG_SUGGESTIONS.kt80)
    : TAG_SUGGESTIONS[currentProductId] || [];

  return (
    <div id="control-panel" className="thick-glass glass-bevel-edge border-iridescent rounded-2xl shadow-2xl p-4 sm:p-6 mb-6 transition-all">
      {/* 8-Product Lineup Navigator */}
      <div className="mb-5 pb-5 border-b border-white/[0.06]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3.5">
          <div className="flex items-center gap-2">
            <label className="text-xs font-semibold text-white/70 tracking-wider uppercase flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-white/50" />
              <span>推广产品矩阵</span>
            </label>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/[0.08] text-white/80 border border-white/10">
              10款旗舰硬件
            </span>
          </div>
          <span className="text-[11px] text-white/50">
            点击切换产品，系统自动同步专属核心参数、受众画像与 5 大营销标签
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-10 gap-2">
          {/* REC10 Tab */}
          <button
            type="button"
            id="tab-product-rec10"
            onClick={() => onChangeParams({ productId: "rec10", language: "ja" })}
            className={`group relative flex flex-col justify-between p-2.5 rounded-xl border text-left transition-all duration-300 cursor-pointer overflow-hidden min-h-[104px] ${
              currentProductId === "rec10"
                ? getActiveTabGlow("rec10")
                : "bg-[#13141f]/70 border-white/[0.08] hover:border-blue-500/30 hover:bg-[#181a28]/80 hover:shadow-md"
            }`}
          >
            <div className="flex items-center justify-between gap-1.5 w-full">
              <div className={`p-1.5 rounded-lg border transition-all ${
                currentProductId === "rec10"
                  ? "bg-blue-500/25 text-blue-300 border-blue-500/50 shadow-md shadow-blue-500/20"
                  : "bg-white/[0.04] text-white/50 border-white/[0.08] group-hover:text-blue-300 group-hover:border-blue-500/30"
              } flex-shrink-0`}>
                <Mic className="w-3.5 h-3.5" />
              </div>
              <span className="text-[9.5px] font-semibold px-1.5 py-0.5 rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/30 flex-shrink-0 whitespace-nowrap">
                AI录音卡
              </span>
            </div>
            <div className="mt-2 w-full">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-xs text-white/95 group-hover:text-white truncate font-mono">
                  REC10
                </span>
                {currentProductId === "rec10" && (
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                )}
              </div>
              <p className="text-[11px] text-white/60 mt-0.5 line-clamp-1">
                名片形态·35h·双AI
              </p>
              <div className="mt-0.5 font-mono text-[9px] text-blue-400/90 truncate">
                #AIレコーダー
              </div>
            </div>
          </button>

          {/* QS40 Tab */}
          <button
            type="button"
            id="tab-product-qs40"
            onClick={() => onChangeParams({ productId: "qs40", language: "ja" })}
            className={`group relative flex flex-col justify-between p-2.5 rounded-xl border text-left transition-all duration-300 cursor-pointer overflow-hidden min-h-[104px] ${
              currentProductId === "qs40"
                ? getActiveTabGlow("qs40")
                : "bg-[#13141f]/70 border-white/[0.08] hover:border-purple-500/30 hover:bg-[#181a28]/80 hover:shadow-md"
            }`}
          >
            <div className="flex items-center justify-between gap-1.5 w-full">
              <div className={`p-1.5 rounded-lg border transition-all ${
                currentProductId === "qs40"
                  ? "bg-purple-500/25 text-purple-300 border-purple-500/50 shadow-md shadow-purple-500/20"
                  : "bg-white/[0.04] text-white/50 border-white/[0.08] group-hover:text-purple-300 group-hover:border-purple-500/30"
              } flex-shrink-0`}>
                <Watch className="w-3.5 h-3.5" />
              </div>
              <span className="text-[9.5px] font-semibold px-1.5 py-0.5 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30 flex-shrink-0 whitespace-nowrap">
                AI智能表
              </span>
            </div>
            <div className="mt-2 w-full">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-xs text-white/95 group-hover:text-white truncate font-mono">
                  QS40
                </span>
                {currentProductId === "qs40" && (
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                )}
              </div>
              <p className="text-[11px] text-white/60 mt-0.5 line-clamp-1">
                对腕ChatGPT·9.8mm
              </p>
              <div className="mt-0.5 font-mono text-[9px] text-purple-400/90 truncate">
                #スマートウォッチ
              </div>
            </div>
          </button>

          {/* T20 Tab */}
          <button
            type="button"
            id="tab-product-t20"
            onClick={() => onChangeParams({ productId: "t20", language: "ja" })}
            className={`group relative flex flex-col justify-between p-2.5 rounded-xl border text-left transition-all duration-300 cursor-pointer overflow-hidden min-h-[104px] ${
              currentProductId === "t20"
                ? getActiveTabGlow("t20")
                : "bg-[#13141f]/70 border-white/[0.08] hover:border-emerald-500/30 hover:bg-[#181a28]/80 hover:shadow-md"
            }`}
          >
            <div className="flex items-center justify-between gap-1.5 w-full">
              <div className={`p-1.5 rounded-lg border transition-all ${
                currentProductId === "t20"
                  ? "bg-emerald-500/25 text-emerald-300 border-emerald-500/50 shadow-md shadow-emerald-500/20"
                  : "bg-white/[0.04] text-white/50 border-white/[0.08] group-hover:text-emerald-300 group-hover:border-emerald-500/30"
              } flex-shrink-0`}>
                <Compass className="w-3.5 h-3.5" />
              </div>
              <span className="text-[9.5px] font-semibold px-1.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex-shrink-0 whitespace-nowrap">
                专业户外表
              </span>
            </div>
            <div className="mt-2 w-full">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-xs text-white/95 group-hover:text-white truncate font-mono">
                  T20
                </span>
                {currentProductId === "t20" && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                )}
              </div>
              <p className="text-[11px] text-white/60 mt-0.5 line-clamp-1">
                多星GNSS·罗盘排水
              </p>
              <div className="mt-0.5 font-mono text-[9px] text-emerald-400/90 truncate">
                #アウトドア
              </div>
            </div>
          </button>

          {/* KT80 Tab */}
          <button
            type="button"
            id="tab-product-kt80"
            onClick={() => onChangeParams({ productId: "kt80", language: "es" })}
            className={`group relative flex flex-col justify-between p-2.5 rounded-xl border text-left transition-all duration-300 cursor-pointer overflow-hidden min-h-[104px] ${
              currentProductId === "kt80"
                ? getActiveTabGlow("kt80")
                : "bg-[#13141f]/70 border-white/[0.08] hover:border-amber-500/30 hover:bg-[#181a28]/80 hover:shadow-md"
            }`}
          >
            <div className="flex items-center justify-between gap-1.5 w-full">
              <div className={`p-1.5 rounded-lg border transition-all ${
                currentProductId === "kt80"
                  ? "bg-amber-500/25 text-amber-300 border-amber-500/50 shadow-md shadow-amber-500/20"
                  : "bg-white/[0.04] text-white/50 border-white/[0.08] group-hover:text-amber-300 group-hover:border-amber-500/30"
              } flex-shrink-0`}>
                <Flashlight className="w-3.5 h-3.5" />
              </div>
              <span className="text-[9.5px] font-semibold px-1.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 flex-shrink-0 whitespace-nowrap">
                西/德双语
              </span>
            </div>
            <div className="mt-2 w-full">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-xs text-white/95 group-hover:text-white truncate font-mono">
                  KT80
                </span>
                {currentProductId === "kt80" && (
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                )}
              </div>
              <p className="text-[11px] text-white/60 mt-0.5 line-clamp-1">
                800mAh·5ATM·LED
              </p>
              <div className="mt-0.5 font-mono text-[9px] text-amber-400/90 truncate">
                #smartwatch
              </div>
            </div>
          </button>

          {/* G58 Tab */}
          <button
            type="button"
            id="tab-product-g58"
            onClick={() => onChangeParams({ productId: "g58", language: "es" })}
            className={`group relative flex flex-col justify-between p-2.5 rounded-xl border text-left transition-all duration-300 cursor-pointer overflow-hidden min-h-[104px] ${
              currentProductId === "g58"
                ? getActiveTabGlow("g58")
                : "bg-[#13141f]/70 border-white/[0.08] hover:border-pink-500/30 hover:bg-[#181a28]/80 hover:shadow-md"
            }`}
          >
            <div className="flex items-center justify-between gap-1.5 w-full">
              <div className={`p-1.5 rounded-lg border transition-all ${
                currentProductId === "g58"
                  ? "bg-pink-500/25 text-pink-300 border-pink-500/50 shadow-md shadow-pink-500/20"
                  : "bg-white/[0.04] text-white/50 border-white/[0.08] group-hover:text-pink-300 group-hover:border-pink-500/30"
              } flex-shrink-0`}>
                <Sparkles className="w-3.5 h-3.5 text-pink-300" />
              </div>
              <span className="text-[9.5px] font-semibold px-1.5 py-0.5 rounded-md bg-pink-500/20 text-pink-300 border border-pink-500/30 flex-shrink-0 whitespace-nowrap">
                西/德女性表
              </span>
            </div>
            <div className="mt-2 w-full">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-xs text-white/95 group-hover:text-white truncate font-mono">
                  G58
                </span>
                {currentProductId === "g58" && (
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
                )}
              </div>
              <p className="text-[11px] text-white/60 mt-0.5 line-clamp-1">
                1.27\"HD·经期管理·双带
              </p>
              <div className="mt-0.5 font-mono text-[9px] text-pink-400/90 truncate">
                #Atuendo #Salud
              </div>
            </div>
          </button>

          {/* E12 Tab */}
          <button
            type="button"
            id="tab-product-e12"
            onClick={() => onChangeParams({ productId: "e12", language: "ja" })}
            className={`group relative flex flex-col justify-between p-2.5 rounded-xl border text-left transition-all duration-300 cursor-pointer overflow-hidden min-h-[104px] ${
              currentProductId === "e12"
                ? getActiveTabGlow("e12")
                : "bg-[#13141f]/70 border-white/[0.08] hover:border-cyan-500/30 hover:bg-[#181a28]/80 hover:shadow-md"
            }`}
          >
            <div className="flex items-center justify-between gap-1.5 w-full">
              <div className={`p-1.5 rounded-lg border transition-all ${
                currentProductId === "e12"
                  ? "bg-cyan-500/25 text-cyan-300 border-cyan-500/50 shadow-md shadow-cyan-500/20"
                  : "bg-white/[0.04] text-white/50 border-white/[0.08] group-hover:text-cyan-300 group-hover:border-cyan-500/30"
              } flex-shrink-0`}>
                <Headphones className="w-3.5 h-3.5" />
              </div>
              <span className="text-[9.5px] font-semibold px-1.5 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex-shrink-0 whitespace-nowrap">
                AI相机耳机
              </span>
            </div>
            <div className="mt-2 w-full">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-xs text-white/95 group-hover:text-white truncate font-mono">
                  E12
                </span>
                {currentProductId === "e12" && (
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                )}
              </div>
              <p className="text-[11px] text-white/60 mt-0.5 line-clamp-1">
                开放式·16mm·POV
              </p>
              <div className="mt-0.5 font-mono text-[9px] text-cyan-400/90 truncate">
                #POV動画 #AIイヤホン
              </div>
            </div>
          </button>

          {/* E05 Tab */}
          <button
            type="button"
            id="tab-product-e05"
            onClick={() => onChangeParams({ productId: "e05", language: "ja" })}
            className={`group relative flex flex-col justify-between p-2.5 rounded-xl border text-left transition-all duration-300 cursor-pointer overflow-hidden min-h-[104px] ${
              currentProductId === "e05"
                ? getActiveTabGlow("e05")
                : "bg-[#13141f]/70 border-white/[0.08] hover:border-rose-500/30 hover:bg-[#181a28]/80 hover:shadow-md"
            }`}
          >
            <div className="flex items-center justify-between gap-1.5 w-full">
              <div className={`p-1.5 rounded-lg border transition-all ${
                currentProductId === "e05"
                  ? "bg-rose-500/25 text-rose-300 border-rose-500/50 shadow-md shadow-rose-500/20"
                  : "bg-white/[0.04] text-white/50 border-white/[0.08] group-hover:text-rose-300 group-hover:border-rose-500/30"
              } flex-shrink-0`}>
                <Glasses className="w-3.5 h-3.5" />
              </div>
              <span className="text-[9.5px] font-semibold px-1.5 py-0.5 rounded-md bg-rose-500/20 text-rose-300 border border-rose-500/30 flex-shrink-0 whitespace-nowrap">
                4档调光镜
              </span>
            </div>
            <div className="mt-2 w-full">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-xs text-white/95 group-hover:text-white truncate font-mono">
                  E05
                </span>
                {currentProductId === "e05" && (
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
                )}
              </div>
              <p className="text-[11px] text-white/60 mt-0.5 line-clamp-1">
                4档调光·TR90·同传
              </p>
              <div className="mt-0.5 font-mono text-[9px] text-rose-400/90 truncate">
                #スマートグラス
              </div>
            </div>
          </button>

          {/* E09 Tab */}
          <button
            type="button"
            id="tab-product-e09"
            onClick={() => onChangeParams({ productId: "e09", language: "ja" })}
            className={`group relative flex flex-col justify-between p-2.5 rounded-xl border text-left transition-all duration-300 cursor-pointer overflow-hidden min-h-[104px] ${
              currentProductId === "e09"
                ? getActiveTabGlow("e09")
                : "bg-[#13141f]/70 border-white/[0.08] hover:border-sky-500/30 hover:bg-[#181a28]/80 hover:shadow-md"
            }`}
          >
            <div className="flex items-center justify-between gap-1.5 w-full">
              <div className={`p-1.5 rounded-lg border transition-all ${
                currentProductId === "e09"
                  ? "bg-sky-500/25 text-sky-300 border-sky-500/50 shadow-md shadow-sky-500/20"
                  : "bg-white/[0.04] text-white/50 border-white/[0.08] group-hover:text-sky-300 group-hover:border-sky-500/30"
              } flex-shrink-0`}>
                <Camera className="w-3.5 h-3.5" />
              </div>
              <span className="text-[9.5px] font-semibold px-1.5 py-0.5 rounded-md bg-sky-500/20 text-sky-300 border border-sky-500/30 flex-shrink-0 whitespace-nowrap">
                SONY录像镜
              </span>
            </div>
            <div className="mt-2 w-full">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-xs text-white/95 group-hover:text-white truncate font-mono">
                  E09
                </span>
                {currentProductId === "e09" && (
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                )}
              </div>
              <p className="text-[11px] text-white/60 mt-0.5 line-clamp-1">
                800万POV·40g·防蓝光
              </p>
              <div className="mt-0.5 font-mono text-[9px] text-sky-400/90 truncate">
                #POV動画 #Vlog
              </div>
            </div>
          </button>

          {/* G2 Tab */}
          <button
            type="button"
            id="tab-product-g2"
            onClick={() => onChangeParams({ productId: "g2", language: "ja" })}
            className={`group relative flex flex-col justify-between p-2.5 rounded-xl border text-left transition-all duration-300 cursor-pointer overflow-hidden min-h-[104px] ${
              currentProductId === "g2"
                ? getActiveTabGlow("g2")
                : "bg-[#13141f]/70 border-white/[0.08] hover:border-purple-500/30 hover:bg-[#181a28]/80 hover:shadow-md"
            }`}
          >
            <div className="flex items-center justify-between gap-1.5 w-full">
              <div className={`p-1.5 rounded-lg border transition-all ${
                currentProductId === "g2"
                  ? "bg-purple-500/25 text-purple-300 border-purple-500/50 shadow-md shadow-purple-500/20"
                  : "bg-white/[0.04] text-white/50 border-white/[0.08] group-hover:text-purple-300 group-hover:border-purple-500/30"
              } flex-shrink-0`}>
                <Heart className="w-3.5 h-3.5 text-purple-300" />
              </div>
              <span className="text-[9.5px] font-semibold px-1.5 py-0.5 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30 flex-shrink-0 whitespace-nowrap">
                女性健康表
              </span>
            </div>
            <div className="mt-2 w-full">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-xs text-white/95 group-hover:text-white truncate font-mono">
                  G2
                </span>
                {currentProductId === "g2" && (
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                )}
              </div>
              <p className="text-[11px] text-white/60 mt-0.5 line-clamp-1">
                女性健康·120+运动·通话
              </p>
              <div className="mt-0.5 font-mono text-[9px] text-purple-400/90 truncate">
                #女性の健康 #服装
              </div>
            </div>
          </button>

          {/* FOS10 Tab */}
          <button
            type="button"
            id="tab-product-fos10"
            onClick={() => onChangeParams({ productId: "fos10", language: "ja" })}
            className={`group relative flex flex-col justify-between p-2.5 rounded-xl border text-left transition-all duration-300 cursor-pointer overflow-hidden min-h-[104px] ${
              currentProductId === "fos10"
                ? getActiveTabGlow("fos10")
                : "bg-[#13141f]/70 border-white/[0.08] hover:border-rose-500/30 hover:bg-[#181a28]/80 hover:shadow-md"
            }`}
          >
            <div className="flex items-center justify-between gap-1.5 w-full">
              <div className={`p-1.5 rounded-lg border transition-all ${
                currentProductId === "fos10"
                  ? "bg-rose-500/25 text-rose-300 border-rose-500/50 shadow-md shadow-rose-500/20"
                  : "bg-white/[0.04] text-white/50 border-white/[0.08] group-hover:text-rose-300 group-hover:border-rose-500/30"
              } flex-shrink-0`}>
                <Sparkles className="w-3.5 h-3.5 text-rose-300" />
              </div>
              <span className="text-[9.5px] font-semibold px-1.5 py-0.5 rounded-md bg-rose-500/20 text-rose-300 border border-rose-500/30 flex-shrink-0 whitespace-nowrap">
                便携轻薄表
              </span>
            </div>
            <div className="mt-2 w-full">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-xs text-white/95 group-hover:text-white truncate font-mono">
                  FOS10
                </span>
                {currentProductId === "fos10" && (
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
                )}
              </div>
              <p className="text-[11px] text-white/60 mt-0.5 line-clamp-1">
                10.66mm·14.9g·100+DIY
              </p>
              <div className="mt-0.5 font-mono text-[9px] text-rose-400/90 truncate">
                #ポータブル #女性健康
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Engine & Language Context Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-white/[0.06]">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${getProductBadgeColor()}`}>
              当前推广 · {currentProduct.name}
            </span>
            <span className="text-white/20">|</span>
            <span className="text-xs text-white/70">
              标准输出：<strong>50 组高转化 {isMultilingual ? (isGerman ? "德语" : "西班牙语") : "日文"} 爆款短视频标题</strong>
            </span>
          </div>
          <p className="text-xs text-white/60 mt-1">
            {isG2 ? (
              "FOSMET G2 日本区女性健康智能手表营销文案引擎 (全天健康监测 / 月経周期トラッキング / 120+運動モード / Bluetooth 5.3クリア通話 / FitCloudPro App / IP68防水)"
            ) : isG58 ? (
              isGerman
                ? "FOSMET G58 德语区女性时尚智能手表营销文案引擎 (1,27\" HD 390x390 / Milanese & Silikon / Zyklustracker & Schwangerschaft / BT 5.3 Calls / 120+ Sport)"
                : "FOSMET G58 西班牙语女性时尚智能手表营销文案引擎 (1.27\" HD 390x390 / Milanés y Silicona / Salud de la mujer y ciclo / Llamadas BT 5.3 / 120+ Deportes)"
            ) : isE09 ? (
              "FOSMET E09 日本区高转化短视频营销文案引擎 (SONY 800万画素カメラ搭載POVスマートグラス / 40g極軽量TR90 / ブルーライト＆紫外線カット / 最大10分動画＆4K静止画撮影 / 8h音楽通話)"
            ) : isE05 ? (
              "FOSMET E05 日本区高转化短视频营销文案引擎 (4段階調光エレクトロクロミックレンズ / TR90超軽量フレーム＆極簡コーデ美学 / AI知能音声＆多言語リアルタイム同時通訳 / ENC双マイク通話降噪 / 8h音楽再生)"
            ) : isE12 ? (
              "FOSMET E12 日本区高转化短视频营销文案引擎 (開放式AIカメラ搭載Bluetoothイヤホン / 16mm大口径HiFi / SONY 800万画素POV動画 / OpenAI音声AI)"
            ) : isKt80 ? (
              isGerman
                ? "FOSMET KT80 德语区高转化短视频营销文案引擎 (800 mAh / 5ATM / LED-Taschenlampe / 1,46\" HD / Silbermetall)"
                : "FOSMET KT80 西班牙语高转化短视频营销文案引擎 (800 mAh / 5ATM sumergible / Linterna LED lateral / 1.46\" HD / Metal plateado)"
            ) : isT20 ? (
              "FOSMET T20 日本区高转化短视频营销文案引擎 (多星GNSS測位 / 60日超長航続 / 気圧高度計＆電子コンパス / ワンタッチスマート排水 / 100+運動モード)"
            ) : isQs40 ? (
              "FOSMET QS40 日本区高转化短视频营销文案引擎 (ChatGPT対腕対話 / 9.8mm超薄型 / 1.43\" AMOLED 466*466 / 1万円アンダー最強コスパ)"
            ) : (
              "FOSMET REC10 日本区高转化短视频营销文案引擎 (名刺サイズ超薄型AIボイスレコーダー / 35h連続録音 / ChatGPT＆Gemini二重AI要約 / 高精度文字起こし)"
            )}
          </p>
        </div>

        {/* Action Controls: Language Switcher (for KT80 & G58) & Engine Toggle */}
        <div className="flex items-center gap-2.5 flex-wrap self-start lg:self-center">
          {/* Multilingual Selector (KT80 & G58) */}
          {isMultilingual && (
            <div className="flex items-center gap-1 bg-[#14151e] p-1 rounded-xl border border-pink-500/30 shadow-inner">
              <div className="px-2 py-1 text-[11px] font-bold text-pink-300 flex items-center gap-1">
                <Globe className="w-3 h-3" />
                <span>生成语言:</span>
              </div>
              <button
                type="button"
                id="btn-lang-es"
                onClick={() => handleLanguageChange("es")}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  currentLang === "es"
                    ? "bg-pink-500/25 text-pink-200 border border-pink-500/50 shadow-xs"
                    : "text-white/50 hover:text-white hover:bg-white/[0.04]"
                }`}
                title="切换为西班牙语 (Español) 50 组文案与对应西语标签"
              >
                <span>🇪🇸 西班牙语 (ES)</span>
              </button>
              <button
                type="button"
                id="btn-lang-de"
                onClick={() => handleLanguageChange("de")}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  currentLang === "de"
                    ? "bg-pink-500/25 text-pink-200 border border-pink-500/50 shadow-xs"
                    : "text-white/50 hover:text-white hover:bg-white/[0.04]"
                }`}
                title="切换为德语 (Deutsch) 50 组文案与对应德语标签"
              >
                <span>🇩🇪 德语 (DE)</span>
              </button>
            </div>
          )}

          {/* Engine Toggle */}
          <div className="flex items-center gap-1.5 bg-[#14151e] p-1 rounded-xl border border-white/[0.08] shadow-inner">
            <button
              type="button"
              id="btn-mode-algo"
              onClick={() => onChangeParams({ useAiApi: false })}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                !params.useAiApi
                  ? "bg-[#222433] text-white border border-white/[0.12] shadow-xs"
                  : "text-white/50 hover:text-white"
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              <span>智能矩阵算法 (毫秒即出)</span>
            </button>

            <button
              type="button"
              id="btn-mode-gemini"
              onClick={() => onChangeParams({ useAiApi: true })}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                params.useAiApi
                  ? isG58
                    ? "bg-pink-500/20 text-pink-300 border border-pink-500/40 shadow-xs"
                    : isE09
                    ? "bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-xs"
                    : isE05
                    ? "bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-xs"
                    : isE12
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-xs"
                    : isKt80
                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-xs"
                    : isT20
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-xs"
                    : isQs40
                    ? "bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-xs"
                    : "bg-blue-500/20 text-blue-300 border border-blue-500/40 shadow-xs"
                  : "text-white/50 hover:text-white"
              }`}
            >
              <Bot className="w-3.5 h-3.5" />
              <span>Gemini 3.7 AI 深度创意</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bento Box Asymmetric Hardware & Data Specs */}
      <div className="mt-5 pb-5 border-b border-white/[0.06]">
        <div className="flex items-center justify-between mb-3">
          <label className="text-xs font-semibold text-white/70 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-white/40" />
            <span>核心卖点便当盒 (Bento Box Specs)</span>
          </label>
          <span className="text-[11px] text-white/40">
            高光倒角物理玻璃面板 · 穿透性金属光泽
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Bento Tile 1 (Hero Feature) */}
          <div className="bento-glass-tile rounded-xl p-3.5 sm:col-span-2 relative overflow-hidden group">
            <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/[0.03] group-hover:scale-125 transition-transform" />
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 font-bold">
                CORE MATRIX 01 · 核心引擎
              </span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getProductBadgeColor()}`}>
                旗舰主推
              </span>
            </div>
            <div className="text-base font-black text-white flex items-center gap-2">
              <span className={isG2 ? "text-gradient-purple" : isG58 ? "text-gradient-rose" : isE09 ? "text-gradient-sky" : isE05 ? "text-gradient-rose" : isE12 ? "text-gradient-cyber" : isKt80 ? "text-gradient-gold" : isT20 ? "text-gradient-emerald" : isQs40 ? "text-gradient-purple" : "text-titanium"}>
                {isG2
                  ? "女性健康管理 ✕ 120+ 运动模式"
                  : isG58
                  ? (isGerman ? "1,27\" HD & Exklusives Zyklus-Tracking" : "1.27\" HD y Control de Ciclo Femenino")
                  : isE09
                  ? "SONY 800万画素 POV 免手持录像"
                  : isE05
                  ? "4档电致变色 ✕ TR90超轻机身"
                  : isE12
                  ? "SONY 800万画素 POV 免手持录像"
                  : isKt80
                  ? "800 mAh 极限野外续航怪兽"
                  : isT20
                  ? "多星独立脱机 GNSS 轨迹记录"
                  : isQs40
                  ? "ChatGPT 对腕语音极速问答"
                  : "ChatGPT × Gemini 双AI录音要约"}
              </span>
            </div>
            <p className="text-xs text-white/60 mt-1 leading-relaxed">
              {isG2
                ? "月经周期与排卵期智能预测追踪，深浅睡眠深度分析，心率血氧24h全天候监测，Bluetooth 5.3高清通话与LINE/SNS通知，IP68级防水防尘。"
                : isG58
                ? (isGerman
                    ? "1,27\" HD-Touchscreen (390×390, ~98% Screen-to-Body), Milanese- & Silikon-Doppelarmband, intelligentes Zyklus- & Schwangerschaftsmanagement, BT 5.3 Anrufe, 120+ Sportmodi."
                    : "Pantalla táctil HD de 1.27\" (390×390, ~98% ratio pantalla), doble correa Milanés + Silicona, gestión inteligente de ciclo menstrual y embarazo, llamadas BT 5.3, 120+ deportes.")
                : isE09
                ? "第一人称视角 1080P 高清录像/4K静止画，透明防蓝光护眼，专属物理按键一键最长10分钟视频拍摄，彻底解放双手。"
                : isE05
                ? "指尖轻触感应区瞬时4档调光，室内清晰/户外遮阳一秒切换，极简穿搭美学与硬核科技完美融合。"
                : isE12
                ? "第一人称视角 1080P/4K 录像，骑行、Vlog、烹饪完全解放双手，搭配 OpenAI 智能语音交互。"
                : isKt80
                ? (isGerman
                    ? "Bis zu 60 Tage Standby, 800 mAh Riesenakku & 5ATM Tauchschutz für kompromisslose Outdoor-Einsätze."
                    : "Hasta 60 días de espera, batería gigante de 800 mAh y protección 5ATM para aventuras extremas.")
                : isT20
                ? "不带手机也能精准绘制越野等高线与轨迹路线，支持电子罗盘与智能声波气压排水。"
                : isQs40
                ? "抬腕秒唤醒 ChatGPT 语音助理，解答邮件、日程与即时外语翻译，9.8mm 极致超薄机身。"
                : "1小时会议一键总结，支持高精转文字与即时思维导图生成，35小时连续录音。"}
            </p>
          </div>

          {/* Bento Tile 2 */}
          <div className="bento-glass-tile rounded-xl p-3.5 relative overflow-hidden group">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 font-bold">
                SPEC 02 · 材质与形态
              </span>
            </div>
            <div className={`text-sm font-black ${
              isG2 ? "glow-spec-purple" : isG58 ? "glow-spec-rose" : isE09 ? "glow-spec-sky" : isE05 ? "glow-spec-rose" : isE12 ? "glow-spec-cyan" : isKt80 ? "glow-spec-amber" : isT20 ? "glow-spec-emerald" : isQs40 ? "glow-spec-purple" : "glow-spec-blue"
            }`}>
              {isG2
                ? "百搭轻奢美学 ✕ 自由换盘"
                : isG58
                ? (isGerman ? "Milanese + Silikon Doppel-Look" : "Milanés + Silicona Doble Correa")
                : isE09
                ? "40g 极致轻盈 ✕ 透明防蓝光"
                : isE05
                ? "TR90 超轻韧性镜架"
                : isE12
                ? "16mm 大口径 HiFi"
                : isKt80
                ? "5ATM 专业深潜防水"
                : isT20
                ? "智能声波气压排水"
                : isQs40
                ? "9.8mm 极致纤薄"
                : "0.28cm 纤薄名片卡"}
            </div>
            <p className="text-[11px] text-white/55 mt-1 leading-normal">
              {isG2
                ? "百搭日常与职场通勤穿搭（OOTD），多款自定义高颜值表盘随心切换，抬腕即亮屏，轻巧无感贴合手腕。"
                : isG58
                ? (isGerman
                    ? "Feminines Leichtbau-Design mit zwei wechselbaren Armbändern (edles Milanese fürs Business & hautfreundliches Silikon für Sport)."
                    : "Diseño ultraligero y elegante con 2 correas intercambiables (milanés para oficina y silicona para deporte).")
                : isE09
                ? "PC+ABS 高耐久超轻镜架，羽量级无感佩戴，防紫外线防蓝光，日常出街与办公百搭。"
                : isE05
                ? "IP65级防尘防水防汗，羽量级无感佩戴，告别沉重压鼻梁与墨镜替换。"
                : isE12
                ? "开放式定向音波传导，澎湃重低音且不伤耳膜，狂甩不掉。"
                : isKt80
                ? "50米水下级防水，真正全地形硬核潜水运动手表。"
                : isT20
                ? "游泳潜水出水后一键高频振动震出声腔水汽。"
                : isQs40
                ? "锌合金阳极氧化表壳，万元级奢华佩戴质感。"
                : "42g 超轻机身，磁吸即贴即录，轻如信用卡。"}
            </p>
          </div>

          {/* Bento Tile 3 */}
          <div className="bento-glass-tile rounded-xl p-3.5 relative overflow-hidden group">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 font-bold">
                SPEC 03 · 独家黑科技
              </span>
            </div>
            <div className={`text-sm font-black ${
              isG2 ? "glow-spec-purple" : isG58 ? "glow-spec-rose" : isE09 ? "glow-spec-sky" : isE05 ? "glow-spec-rose" : isE12 ? "glow-spec-cyan" : isKt80 ? "glow-spec-amber" : isT20 ? "glow-spec-emerald" : isQs40 ? "glow-spec-purple" : "glow-spec-blue"
            }`}>
              {isG2
                ? "FitCloudPro 120+ 运动库 ✕ 通话"
                : isG58
                ? (isGerman ? "Zyklus-Tracker & BT 5.3 Anrufe" : "Salud Femenina 24/7 y Llamadas BT")
                : isE09
                ? "物理按键拍摄 ✕ 开放双喇叭 ✕ AI"
                : isE05
                ? "AI实时同传 ✕ ENC双麦降噪"
                : isE12
                ? "OpenAI 视觉问答助理"
                : isKt80
                ? "侧置高亮 LED 战术手电"
                : isT20
                ? "电子罗盘 + 气压高度计"
                : isQs40
                ? "全天候心率假眠监测"
                : "双降噪麦克风 10m 拾音"}
            </div>
            <p className="text-[11px] text-white/55 mt-1 leading-normal">
              {isG2
                ? "8+1内置模式+FitCloudPro App 112+种运动云端推送，步数卡路里实时记录，蓝牙5.3低功耗通话与手机寻找/计算器/天气。"
                : isG58
                ? (isGerman
                    ? "Menstruations-, Eisprung- & Schwangerschaftstracking mit sanften Benachrichtigungen, 24/7 Vitaldaten & 120+ Sportmodi."
                    : "Seguimiento de periodo, ovulación y embarazo con recordatorios, monitoreo 24/7 de ritmo cardíaco/SpO2/sueño y 120+ deportes.")
                : isE09
                ? "单击拍照/双击10分录像/4击唤醒AI助手，开放式双喇叭与阵列降噪麦克风，边走边录。"
                : isE05
                ? "8h连续听歌/7天待机，滑动镜腿调音，多语言实时跨国翻译交流。"
                : isE12
                ? "轻触即问，AI识别眼前的物体与文字并实时语音讲解。"
                : isKt80
                ? "独立侧键一键点亮，强光照明与SOS求救频闪。"
                : isT20
                ? "精准感知海拔变化与方向，100+ 专业极限运动模式。"
                : isQs40
                ? "高精传感器追踪睡眠深浅度与短时假眠，精准计步。"
                : "360° 全向声源捕获，AI 算法精准过滤环境嘈杂噪音。"}
            </p>
          </div>
        </div>
      </div>

      {/* Hook Categories */}
      <div className="mt-5">
        <div className="flex items-center justify-between mb-2.5">
          <label className="text-xs font-semibold text-white/70 uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-white/40" />
            <span>内容切入视角 / 营销诉求维度</span>
          </label>
          <span className="text-[11px] text-white/40">
            精细化客群与心理触发器定位
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
                className={`group relative flex flex-col text-left p-3 rounded-xl border transition-all text-xs cursor-pointer ${
                  isSelected
                    ? isFos10
                      ? "border-rose-500/50 bg-rose-500/[0.08] ring-1 ring-rose-500/30 text-white shadow-xs"
                      : isG2
                      ? "border-purple-500/50 bg-purple-500/[0.08] ring-1 ring-purple-500/30 text-white shadow-xs"
                      : isG58
                      ? "border-pink-500/50 bg-pink-500/[0.08] ring-1 ring-pink-500/30 text-white shadow-xs"
                      : isE09
                      ? "border-sky-500/50 bg-sky-500/[0.08] ring-1 ring-sky-500/30 text-white shadow-xs"
                      : isE05
                      ? "border-rose-500/50 bg-rose-500/[0.08] ring-1 ring-rose-500/30 text-white shadow-xs"
                      : isE12
                      ? "border-cyan-500/50 bg-cyan-500/[0.08] ring-1 ring-cyan-500/30 text-white shadow-xs"
                      : isKt80
                      ? "border-amber-500/50 bg-amber-500/[0.08] ring-1 ring-amber-500/30 text-white shadow-xs"
                      : isT20
                      ? "border-emerald-500/50 bg-emerald-500/[0.08] ring-1 ring-emerald-500/30 text-white shadow-xs"
                      : isQs40
                      ? "border-purple-500/50 bg-purple-500/[0.08] ring-1 ring-purple-500/30 text-white shadow-xs"
                      : "border-blue-500/50 bg-blue-500/[0.08] ring-1 ring-blue-500/30 text-white shadow-xs"
                    : "border-white/[0.06] bg-[#14151f]/50 hover:border-white/[0.12] hover:bg-[#181926]/70 text-white/70"
                }`}
              >
                <div className="flex items-center gap-1.5 font-bold mb-1 truncate">
                  <span className="text-sm">{cat.icon}</span>
                  <span className="truncate text-white/95 group-hover:text-white">{cat.label}</span>
                </div>
                <span className="text-[11px] text-white/45 line-clamp-2 leading-relaxed">
                  {cat.desc}
                </span>
                {isSelected && (
                  <div className={`absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full ${
                    isFos10 ? "bg-rose-400 shadow-rose-400" : isG2 ? "bg-purple-400 shadow-purple-400" : isG58 ? "bg-pink-400 shadow-pink-400" : isE09 ? "bg-sky-400 shadow-sky-400" : isE05 ? "bg-rose-400 shadow-rose-400" : isE12 ? "bg-cyan-400 shadow-cyan-400" : isKt80 ? "bg-amber-400 shadow-amber-400" : isT20 ? "bg-emerald-400 shadow-emerald-400" : isQs40 ? "bg-purple-400 shadow-purple-400" : "bg-blue-400 shadow-blue-400"
                  } shadow-xs`} />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 5-Tag Customization Suite */}
      <div className="mt-5 p-4 rounded-xl bg-[#14151e]/80 border border-white/[0.08] shadow-inner transition-all">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/[0.06]">
          <div className="flex items-center gap-2.5">
            <div className={`p-2 rounded-lg border ${
              isFos10
                ? "bg-rose-500/10 text-rose-400 border-rose-500/20"
                : isG2
                ? "bg-purple-500/10 text-purple-400 border-purple-500/20"
                : isG58
                ? "bg-pink-500/10 text-pink-400 border-pink-500/20"
                : isE09
                ? "bg-sky-500/10 text-sky-400 border-sky-500/20"
                : isE05
                ? "bg-rose-500/10 text-rose-400 border-rose-500/20"
                : isE12
                ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                : isKt80
                ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                : isT20
                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                : isQs40
                ? "bg-purple-500/10 text-purple-400 border-purple-500/20"
                : "bg-blue-500/10 text-blue-400 border-blue-500/20"
            }`}>
              <Tag className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white/90 tracking-tight">
                  5 大固定营销标签管理
                </span>
                {isCustomized ? (
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                    <Edit3 className="w-2.5 h-2.5" /> 已自定义
                  </span>
                ) : (
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                    <CheckCircle2 className="w-2.5 h-2.5" /> 原厂标准标签
                  </span>
                )}
              </div>
              <p className="text-[11px] text-white/40 mt-0.5">
                支持随时修改 5 个标签。未修改前默认保留原标签，修改后生成的所有标题均自动带上新标签。
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-center">
            {/* View Mode Toggle */}
            <div className="flex items-center bg-[#0e0f15] p-0.5 rounded-lg border border-white/[0.08] text-[11px]">
              <button
                type="button"
                id="btn-tag-mode-slots"
                onClick={() => setTagEditMode("slots")}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1 ${
                  tagEditMode === "slots"
                    ? "bg-white/[0.1] text-white font-bold shadow-xs"
                    : "text-white/40 hover:text-white/80"
                }`}
                title="5 槽位独立输入"
              >
                <ListOrdered className="w-3 h-3" />
                <span>5槽位</span>
              </button>
              <button
                type="button"
                id="btn-tag-mode-line"
                onClick={() => setTagEditMode("line")}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1 ${
                  tagEditMode === "line"
                    ? "bg-white/[0.1] text-white font-bold shadow-xs"
                    : "text-white/40 hover:text-white/80"
                }`}
                title="单行快速输入/粘贴"
              >
                <Edit3 className="w-3 h-3" />
                <span>单行编辑</span>
              </button>
            </div>

            {/* Reset Button */}
            {isCustomized && (
              <button
                type="button"
                id="btn-reset-tags"
                onClick={handleResetToDefaultTags}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-all cursor-pointer"
                title="恢复当前产品的原厂默认标签"
              >
                <RotateCcw className="w-3 h-3" />
                <span>恢复默认</span>
              </button>
            )}
          </div>
        </div>

        {/* Inputs */}
        {tagEditMode === "slots" ? (
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-5 gap-2">
            {[0, 1, 2, 3, 4].map((slotIdx) => {
              const labels = isG58
                ? (isGerman
                  ? [
                      "Tag 1 · Marke",
                      "Tag 2 · Modell",
                      "Tag 3 · Kategorie",
                      "Tag 4 · Outfit",
                      "Tag 5 · Frauengesundheit",
                    ]
                  : [
                      "Etiqueta 1 · Marca",
                      "Etiqueta 2 · Modelo",
                      "Etiqueta 3 · Categoría",
                      "Etiqueta 4 · Atuendo",
                      "Etiqueta 5 · Salud de la mujer",
                    ])
                : isE09
                ? [
                    "标签 1 · 品牌词",
                    "标签 2 · 型号词",
                    "标签 3 · 品类词",
                    "标签 4 · 核心穿搭",
                    "标签 5 · 核心场景",
                  ]
                : isE05
                ? [
                    "标签 1 · 品牌词",
                    "标签 2 · 型号词",
                    "标签 3 · 品类词",
                    "标签 4 · 核心穿搭",
                    "标签 5 · 核心功能",
                  ]
                : isE12
                ? [
                    "标签 1 · 品牌词",
                    "标签 2 · 型号词",
                    "标签 3 · 品类词",
                    "标签 4 · 核心场景",
                    "标签 5 · 核心功能",
                  ]
                : isKt80
                ? (isGerman
                  ? [
                      "Tag 1 · Marke",
                      "Tag 2 · Modell",
                      "Tag 3 · Kategorie",
                      "Tag 4 · Outdoor/Sport",
                      "Tag 5 · Funktion",
                    ]
                  : [
                      "Etiqueta 1 · Marca",
                      "Etiqueta 2 · Modelo",
                      "Etiqueta 3 · Categoría",
                      "Etiqueta 4 · Outdoor",
                      "Etiqueta 5 · Función",
                    ])
                : isT20
                ? [
                    "标签 1 · 品牌词",
                    "标签 2 · 型号词",
                    "标签 3 · 品类词",
                    "标签 4 · 核心场景",
                    "标签 5 · 核心功能",
                  ]
                : isQs40
                ? [
                    "标签 1 · 品牌词",
                    "标签 2 · 错别字引流词",
                    "标签 3 · 型号词",
                    "标签 4 · 品类词",
                    "标签 5 · 核心技术",
                  ]
                : [
                    "标签 1 · 品牌词",
                    "标签 2 · 型号词",
                    "标签 3 · 品类词",
                    "标签 4 · 核心AI技术",
                    "标签 5 · 核心应用场景",
                  ];

              return (
                <div key={slotIdx} className="flex flex-col gap-1">
                  <span className="text-[10px] text-white/50 font-medium truncate">
                    {labels[slotIdx]}
                  </span>
                  <div className="relative flex items-center">
                    <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-white/30">
                      <Hash className={`w-3 h-3 ${
                        isFos10 ? "text-rose-400" : isG2 ? "text-purple-400" : isG58 ? "text-pink-400" : isE09 ? "text-sky-400" : isE05 ? "text-rose-400" : isE12 ? "text-cyan-400" : isKt80 ? "text-amber-400" : isT20 ? "text-emerald-400" : isQs40 ? "text-purple-400" : "text-blue-400"
                      }`} />
                    </div>
                    <input
                      type="text"
                      id={`input-tag-slot-${slotIdx + 1}`}
                      placeholder={`标签 ${slotIdx + 1}`}
                      value={tagSlots[slotIdx] || ""}
                      onChange={(e) => handleSlotChange(slotIdx, e.target.value)}
                      className="w-full pl-7 pr-2.5 py-1.5 text-xs bg-[#0c0d13] border border-white/[0.08] rounded-lg focus:border-white/30 focus:ring-2 focus:ring-white/10 text-white font-mono outline-hidden transition-all placeholder:text-white/20"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="mt-3">
            <span className="text-[10px] text-white/50 font-medium block mb-1">
              单行输入或直接粘贴（多个标签用 # 或 空格 分隔）：
            </span>
            <div className="relative flex items-center">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-white/30">
                <Hash className="w-3.5 h-3.5 text-white/40" />
              </div>
              <input
                type="text"
                id="input-tag-line"
                placeholder={
                  isFos10
                    ? "例如: #FOSMET#FOS10#女性の健康#スマートウォッチ#ポータブル"
                    : isG2
                    ? "例如: #FOSMET#G2#女性の健康#スマートウォッチ#服装"
                    : isG58
                    ? isGerman
                      ? "例如: #FOSMET#G58#Smartwatch#Outfit#Frauengesundheit"
                      : "例如: #FOSMET#G58#reloj inteligente#Atuendo#Salud de la mujer"
                    : isE09
                    ? "例如: #FOSMET#E09#スマートグラス#服装#デイリーレコード"
                    : isE05
                    ? "例如: #FOSMET#E05#スマートグラス#服装#イヤホン"
                    : isE12
                    ? "例如: #FOSMET#E12#Bluetoothヘッドホン#デイリーレコード#AIイヤホン"
                    : isKt80
                    ? "例如: #FOSMET#KT80#reloj inteligente#Relojes para exteriores#herramienta"
                    : "例如: #FOSMET#REC10#AIレコーダー#ChatGPT#プロモーションの仕事"
                }
                value={lineInputValue}
                onChange={(e) => handleLineInputChange(e.target.value)}
                className="w-full pl-8 pr-3 py-2 text-xs bg-[#0c0d13] border border-white/[0.08] rounded-lg focus:border-white/30 focus:ring-2 focus:ring-white/10 text-white font-mono outline-hidden transition-all placeholder:text-white/20"
              />
            </div>
          </div>
        )}

        {/* Suggestions and active banner */}
        <div className="mt-3 pt-2.5 border-t border-white/[0.05] flex flex-col md:flex-row md:items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] text-white/40 font-medium flex-shrink-0">
              💡 快捷词库推荐:
            </span>
            {currentSuggestions.map((sug, i) => (
              <button
                key={i}
                type="button"
                id={`btn-tag-sug-${i}`}
                onClick={() => handleApplySuggestion(sug)}
                className="px-2 py-0.5 text-[10px] rounded-md bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] text-white/60 hover:text-white font-mono transition-all cursor-pointer"
                title={`点击将 #${sug} 填入标签`}
              >
                +#{sug}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5 text-[11px] truncate">
            <span className="text-white/40 text-[10px] flex-shrink-0">最终生效:</span>
            <code className={`font-mono text-[11px] px-2 py-0.5 rounded-md bg-[#0b0c11] border border-white/[0.08] ${
              isFos10 ? "text-rose-300" : isG2 ? "text-purple-300" : isG58 ? "text-pink-300" : isE09 ? "text-sky-300" : isE05 ? "text-rose-300" : isE12 ? "text-cyan-300" : isKt80 ? "text-amber-300" : isT20 ? "text-emerald-300" : isQs40 ? "text-purple-300" : "text-blue-300"
            } font-semibold truncate select-all`}>
              {activeTagsString}
            </code>
          </div>
        </div>
      </div>

      {/* Keyword Modifier & Primary Generate Action */}
      <div className="mt-5 pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="flex-1">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-white/30">
              <Sliders className="w-3.5 h-3.5" />
            </div>
            <input
              type="text"
              id="input-custom-keyword"
              placeholder={
                isFos10
                  ? "特别强调词（选填：10.66mm極薄、14.9g超軽量、100+文字盤DIY、女性の健康、睡眠サイクル、100+運動モード、IP68防水等）"
                  : isG2
                  ? "特别强调词（选填：女性の健康、月経周期、睡眠モニタリング、Bluetooth 5.3通話、120+運動、服装コーデ、IP68防水等）"
                  : isG58
                  ? isGerman
                    ? "Besonderes Keyword (z.B.: Zyklustracker, Milanese-Armband, 1,27 HD, Bluetooth 5.3 Anruf, OOTD, IP68)"
                    : "特别强调词（选填：Salud de la mujer, Correa milanesa, 1.27 HD, Llamadas Bluetooth, OOTD, 120+ deportes, GloryFit）"
                  : isE09
                  ? "特别强调词（选填：SONY 800万画素、40g極軽量、POV動画、透明防藍光、10分録画、物理ボタン等）"
                  : isE05
                  ? "特别强调词（选填：4段階調光、TR90極軽量、AI同時通訳、ENCノイキャン、8h連続再生等）"
                  : isE12
                  ? "特别强调词（选填：SONY 800万画素、16mmスピーカー、Hi Luma、POV動画、ハンズフリー撮影等）"
                  : isKt80
                  ? isGerman
                    ? "Besonderes Keyword (z.B.: LED-Taschenlampe, 800mAh, 5ATM Tauchen, Silbermetall, Bluetooth-Anruf)"
                    : "特别强调词（选填：linterna LED, 800mAh, 5ATM buceo, metal plateado, llamadas Bluetooth, supervivencia）"
                  : isT20
                  ? "特别强调词（选填：スマート排水、多星GNSS、電子コンパス、気圧高度計、100种スポーツ等）"
                  : isQs40
                  ? "特别强调词（选填：洗练银、对腕语音、假眠睡眠、1万円以下、急速充電等）"
                  : "特别强调词（选填：新入职、商务谈判、求职面试、思维导图、零加班等）"
              }
              value={params.customKeyword || ""}
              onChange={(e) => onChangeParams({ customKeyword: e.target.value })}
              className="w-full pl-9 pr-3 py-2.5 text-xs bg-[#14151e]/80 border border-white/[0.08] rounded-xl focus:border-white/30 focus:ring-2 focus:ring-white/10 text-white placeholder:text-white/30 transition-all outline-hidden"
            />
          </div>
        </div>

        {/* Generate Button with Magnetic physics */}
        <MagneticButton
          id="btn-generate-50"
          onClick={onGenerate}
          disabled={isLoading}
          className={`flex-shrink-0 inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-black text-sm text-white shadow-2xl transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed border-crystal-glow ${
            isFos10
              ? "bg-gradient-to-r from-rose-500 via-pink-500 to-rose-400 shadow-[0_0_30px_rgba(244,63,94,0.55)] hover:shadow-[0_0_45px_rgba(244,63,94,0.8)] hover:scale-[1.03]"
              : isG2
              ? "bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-400 shadow-[0_0_30px_rgba(168,85,247,0.55)] hover:shadow-[0_0_45px_rgba(168,85,247,0.8)] hover:scale-[1.03]"
              : isG58
              ? "bg-gradient-to-r from-pink-500 via-rose-500 to-pink-400 shadow-[0_0_30px_rgba(236,72,153,0.55)] hover:shadow-[0_0_45px_rgba(236,72,153,0.8)] hover:scale-[1.03]"
              : isE09
              ? "bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-400 shadow-[0_0_30px_rgba(56,189,248,0.55)] hover:shadow-[0_0_45px_rgba(56,189,248,0.8)] hover:scale-[1.03]"
              : isE05
              ? "bg-gradient-to-r from-rose-500 via-pink-500 to-rose-400 shadow-[0_0_30px_rgba(244,63,94,0.55)] hover:shadow-[0_0_45px_rgba(244,63,94,0.8)] hover:scale-[1.03]"
              : isE12
              ? "bg-gradient-to-r from-cyan-500 via-teal-500 to-sky-400 shadow-[0_0_30px_rgba(6,182,212,0.55)] hover:shadow-[0_0_45px_rgba(6,182,212,0.8)] hover:scale-[1.03]"
              : isKt80
              ? "bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400 shadow-[0_0_30px_rgba(245,158,11,0.55)] hover:shadow-[0_0_45px_rgba(245,158,11,0.8)] hover:scale-[1.03]"
              : isT20
              ? "bg-gradient-to-r from-emerald-500 via-teal-500 to-green-400 shadow-[0_0_30px_rgba(160,185,129,0.55)] hover:shadow-[0_0_45px_rgba(16,185,129,0.8)] hover:scale-[1.03]"
              : isQs40
              ? "bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-400 shadow-[0_0_30px_rgba(168,85,247,0.55)] hover:shadow-[0_0_45px_rgba(168,85,247,0.8)] hover:scale-[1.03]"
              : "bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-400 shadow-[0_0_30px_rgba(59,130,246,0.55)] hover:shadow-[0_0_45px_rgba(59,130,246,0.8)] hover:scale-[1.03]"
          } border border-white/40 active:scale-95`}
        >
          {isLoading ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin text-white" />
              <span className="tracking-wide">{currentProduct.model} 50 组文案生成中...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 text-amber-200 fill-amber-300 drop-shadow-[0_0_8px_rgba(252,211,77,0.9)] animate-pulse" />
              <span className="tracking-wide">一键输出 50 组 {currentProduct.model} 爆款文案</span>
            </>
          )}
        </MagneticButton>
      </div>
    </div>
  );
};
