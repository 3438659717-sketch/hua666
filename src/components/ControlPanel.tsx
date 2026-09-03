import React, { useState, useEffect, useRef } from "react";
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
  Heart,
  Flame,
  Activity,
  Battery,
  ShieldCheck,
  Radio,
  X,
  Trash2,
  Wind,
} from "lucide-react";
import { PRODUCTS_CONFIG } from "../data/templates";
import { parseTagsToArray, formatArrayToTagString, normalizeTagString, getDefaultTagsForProduct } from "../utils/tagUtils";
import { KT80_SPANISH_TAGS, KT80_GERMAN_TAGS } from "../data/kt80Templates";
import { G58_SPANISH_TAGS, G58_GERMAN_TAGS } from "../data/g58Templates";
import { MagneticButton } from "./MagneticButton";

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

const I228_CATEGORIES_ES: { id: AngleCategory; label: string; desc: string; icon: string }[] = [
  { id: "all_mixed", label: "全维黄金配比 (Recomendado)", desc: "1.27\"高清屏 / 女性生理周期 / 米兰尼斯+硅胶双表带 / 蓝牙5.3通话 均衡输出", icon: "✨" },
  { id: "pain_point", label: "痛点反转・告别笨重表", desc: "打破「智能手表笨重难搭女装、忘记经期」痛点，优雅轻盈与女性健康兼备", icon: "🎯" },
  { id: "gadget", label: "1.27\"高清屏・98%高屏占比", desc: "390×390高分辨率 / 高硬度防指纹玻璃 / 极致轻盈时尚外观 / 视觉通透清晰", icon: "💎" },
  { id: "ai_power", label: "专属女性健康・生理周期管理", desc: "经期/排卵期/安全期智能预测跟踪，经期关怀提醒与孕期记录，24/7全天守护", icon: "🌸" },
  { id: "efficiency", label: "米兰尼斯+硅胶・双表带随心搭", desc: "职场优雅米兰尼斯 / 运动透气硅胶表带随心换 / 120+种专业运动模式", icon: "👗" },
  { id: "spec_power", label: "蓝牙5.3高清通话・IP68防水", desc: "手腕直接接打电话、100联系人与拨号键盘 / 心率血氧睡眠监测 / IP68级防水", icon: "📞" },
  { id: "secret_hack", label: "时尚博主秘密穿搭神物", desc: "「千元级大牌轻奢质感」高颜值女性智能饰品，穿搭加分神器", icon: "🤫" },
  { id: "question", label: "互动共鸣・女性话题引流", desc: "「能精准测经期、换双表带的神仙手表你心动了吗？」激发热烈讨论", icon: "💬" },
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
  { id: "gadget", label: "4段階調光 ✕ TR90超軽量フレーム", desc: "指先で触れるだけでレンズ濃度が4段階に瞬时变化。羽のように軽いTR90素材で極上のフィット感", icon: "🕶️" },
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
  { id: "ai_power", label: "4タップAI音声対话 ✕ アレイマイク", desc: "4回タップでAI対話アシスタント即起動。指向性アレイマイクで風切り音を低减しクリアな通話＆録音", icon: "🤖" },
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
  { id: "all_mixed", label: "全维黄金配比 (推荐)", desc: "14.9g超軽量 / 10.66mm極薄 / 100+運動モード / 24h心拍血中酸素 / 7日ロングバッテリー 均衡出力", icon: "✨" },
  { id: "pain_point", label: "痛点反转・腕の疲労と重さをゼロへ", desc: "「時計が重くて腕が凝る・寝る時邪魔」という不満を打破。14.9gの羽のような軽さで24時間完全ストレスフリー", icon: "🎯" },
  { id: "gadget", label: "14.9g 羽毛級極軽 ✕ 10.66mm極薄", desc: "着けていることを忘れる驚異の14.9g。薄型10.66mm流線型ボディが手首に吸い付くようにフィット", icon: "🪶" },
  { id: "efficiency", label: "100+種運動 ✕ 7日間ロングバッテリー", desc: "100種類以上のワークアウトを自動記録。1回の充電で1週間連続使用可能な省電力アルゴリズム", icon: "🏃" },
  { id: "spec_power", label: "24h心拍・血中酸素 ✕ 科学的睡眠解析", desc: "高精度バイオセンサーが24時間生体データを追跡。レム睡眠・深睡眠・覚醒時間を精密グラフ化", icon: "📊" },
  { id: "ai_power", label: "スマート通知 ✕ 腕上げスクリーン点灯", desc: "LINE・着信・SNSを手元でバイブ即時確認。手首をひねるだけで瞬時に点灯する高感度ジャイロ", icon: "🔔" },
  { id: "secret_hack", label: "ミニマリスト必携・高コスパスマートバンド", desc: "無駄を極限まで削ぎ落としたミニマル美学。必要十分な機能を凝縮したスマートライフロングセラー", icon: "🤫" },
  { id: "question", label: "インタラクティブ・共感喚起", desc: "「14.9gって本当に着けてないみたい？実際に試してみた」TikTok視聴者の好奇心を惹きつけるフック", icon: "💬" },
];

const V18PRO_CATEGORIES_ES: { id: AngleCategory; label: string; desc: string; icon: string }[] = [
  { id: "all_mixed", label: "全维黄金配比 (Recomendado)", desc: "650W电机 / 50 kPa超强吸力 / 65cm折叠金属臂 / 绿光显尘2.0 / 7重过滤 / 1.4kg 均衡输出", icon: "✨" },
  { id: "pain_point", label: "痛点反转・免弯腰＆折叠臂", desc: "彻底打破弯腰清扫沙发底/床底的疲劳，65cm一键折叠臂直达深处，0cm极致贴边", icon: "🎯" },
  { id: "gadget", label: "65cm折叠臂 ✕ 90°自立停放", desc: "可折叠金属臂黑科技，免打孔90°随处自立停放，壁挂充电收纳一体轻奢美学", icon: "💎" },
  { id: "efficiency", label: "绿光显尘2.0 ✕ 50分钟长续航", desc: "135°超广角绿光让肉眼不可见微尘现形，300cm超远照射，清洁效率翻倍", icon: "⚡" },
  { id: "ai_power", label: "7重过滤 ✕ 99.99%微尘拦截", desc: "7重高效过滤系统拦截小至0.3微米微尘，杜绝二次扬尘，呵护全家呼吸健康", icon: "🛡️" },
  { id: "spec_power", label: "650W ✕ 50 kPa ✕ 60dB低音", desc: "大功率无刷电机与50 kPa飓风吸力，60 dB超静音运行不扰宠，3档智能调节", icon: "📊" },
  { id: "secret_hack", label: "1.4kg羽量 ✕ 7合1多场景", desc: "仅1.4kg单手轻松举起清扫天花板与爱车，7合1多刷头随心切换，精致博主秘密装备", icon: "🤫" },
  { id: "question", label: "互动共鸣・西语话题引流", desc: "「清扫床底你还在弯腰趴在地上吗？绿光显尘实测」激发拉美/西班牙观众热议", icon: "💬" },
];

const V18PRO_CATEGORIES_DE: { id: AngleCategory; label: string; desc: string; icon: string }[] = [
  { id: "all_mixed", label: "Goldener Schnitt (Empfohlen)", desc: "650W Motor / 50 kPa Saugleistung / 65cm Klapparm / Grünes Licht 2.0 / 7-fach Filterung / 1,4kg", icon: "✨" },
  { id: "pain_point", label: "Schmerzpunkt: Bücken & Gewicht", desc: "Schluss mit Bücken beim Saugen unter Bett & Sofa – 65cm Knick-Gelenk & 0mm Kantenreinigung", icon: "🎯" },
  { id: "gadget", label: "65cm Klapparm ✕ 90° Freistehend", desc: "Klappbares Metallrohr, 90° Freisteh-Funktion ohne Bohren & Wandhalterung mit Ladefunktion", icon: "💎" },
  { id: "efficiency", label: "Grünes Licht 2.0 ✕ 50min Akku", desc: "135° Weitwinkel-Grünlicht deckt mikroskopischen Staub auf, 300cm Reichweite, doppelte Effizienz", icon: "⚡" },
  { id: "ai_power", label: "7-fach Filter ✕ 99,99% Feinstaub", desc: "7-stufige HEPA-Filtration stoppt Partikel bis 0,3 µm, reine Abluft für Allergiker & Babys", icon: "🛡️" },
  { id: "spec_power", label: "650W ✕ 50 kPa ✕ 60dB Flüsterleise", desc: "Brushless-Motor mit 50 kPa Monster-Saugleistung, 60 dB leise gegen Haustier-Stress, 3 Saugstufen", icon: "📊" },
  { id: "secret_hack", label: "1,4kg Federleicht ✕ 7-in-1 Zubehör", desc: "Nur 1,4 kg leicht für Decken & Auto, 7-in-1 Aufsätze für alle Ecken – Geheimtipp für clevere Haushalte", icon: "🤫" },
  { id: "question", label: "Community & Video-Diskussion", desc: "„Bückst du dich noch beim Putzen? Grünes Licht im Test“ – Starker Diskussions-Hook für TikTok", icon: "💬" },
];

const V17MAX_CATEGORIES_DE: { id: AngleCategory; label: string; desc: string; icon: string }[] = [
  { id: "all_mixed", label: "Goldener Schnitt (Empfohlen)", desc: "58 kPa Monster-Saugleistung / 150min Dual-Akku / 500m² Abdeckung / 25,5cm V-Bürste / 2L XXL 均衡输出", icon: "✨" },
  { id: "pain_point", label: "Schmerzpunkt: Großraum & Akku", desc: "Schluss mit ständigem Nachladen & Mülleimer-Entleeren bei 500m² Maisonette-Wohnungen", icon: "🎯" },
  { id: "spec_power", label: "58 kPa Saugleistung ✕ 650W Motor", desc: "Extreme Monster-Saugkraft gegen tiefsitzenden Schmutz in dicken Teppichen und Fugen", icon: "📊" },
  { id: "efficiency", label: "150min Dual-Akku ✕ 25,5cm V-Bürste", desc: "Bis zu 150 Min Non-Stop-Laufzeit mit Dual-Akku, verbreiterte V-Anti-Tangle Bürste gegen Tierhaare", icon: "⚡" },
  { id: "ai_power", label: "HEPA H14 ✕ 2L XXL Staubbehälter", desc: "Medizinische H14-Filterung für 99,99% Partikel, 2 Liter XXL-Behälter für 3 Monate ohne Entleeren", icon: "🛡️" },
  { id: "gadget", label: "90° Freistehend ✕ 3 Lademodi", desc: "Freistehende Parkfunktion ohne Bohren, 3 flexible Lademethoden & 4h Schnellladung", icon: "💎" },
  { id: "secret_hack", label: "Geheimtipp für Großhäuser", desc: "Flaggschiff-Leistung ohne 800€ Marken-Aufpreis – Der Preis-Leistungs-Sieger für große Wohnungen", icon: "🤫" },
  { id: "question", label: "Community & Extrem-Härtetest", desc: "58 kPa vs Hundehaare im Teppich! Schafft der V17 MAX den Härtetest in großen Häusern?", icon: "💬" },
];

const V17MAX_CATEGORIES_ES: { id: AngleCategory; label: string; desc: string; icon: string }[] = [
  { id: "all_mixed", label: "全维黄金配比 (Recomendado)", desc: "58 kPa succión monstruo / Batería dual 150 min / Cobertura 500m² / Cepillo V 25.5cm / Depósito 2L", icon: "✨" },
  { id: "pain_point", label: "痛点反转・大户型电量焦虑", desc: "Sin paradas para recargar ni vaciar el depósito en casas de 500m² con batería dual de 150 min", icon: "🎯" },
  { id: "spec_power", label: "58 kPa succión ✕ Motor 650W", desc: "Potencia extrema de 58 kPa para alfombras gruesas y suciedad profunda incrustada", icon: "📊" },
  { id: "efficiency", label: "Batería dual 150 min ✕ Cepillo V 25.5cm", desc: "150 min de autonomía sin pausas y cepillo ancho en V anti-enredos para pelos de mascotas", icon: "⚡" },
  { id: "ai_power", label: "HEPA H14 médico ✕ Depósito 2L XXL", desc: "Filtración médica H14 al 99.99% y gran depósito de 2 Litros para aspirar 3 meses sin vaciar", icon: "🛡️" },
  { id: "gadget", label: "90° Auto-soporte ✕ 3 modos de carga", desc: "Se sostiene sola a 90° sin perforar la pared, 3 modos flexibles de carga rápida en 4h", icon: "💎" },
  { id: "secret_hack", label: "El secreto para casas grandes", desc: "Rendimiento tope de gama sin sobrecostes de marca – La mejor compra para pisos grandes y chalets", icon: "🤫" },
  { id: "question", label: "Interacción y reto viral TikTok", desc: "¿Tu aspiradora aguanta 150 minutos? Prueba extrema de 58 kPa con pelos y alfombras", icon: "💬" },
];

const TAG_SUGGESTIONS: Record<string, string[]> = {
  rec10: ["AIボイスレコーダー", "ChatGPT活用", "議事録自動化", "社会人ハック", "便利グッズ", "仕事効率化", "FOSMET"],
  qs40: ["スマートウォッチ", "ChatGPT連携", "ガジェット紹介", "高见え", "便利アイテム", "QOL向上", "FOSMET"],
  t20: ["スマートウォッチ", "アウトドアギア", "登山装備", "ガジェット男子", "耐衝撃", "キャンプギア", "FOSMET"],
  kt80: ["smartwatch", "relojinteligente", "gadgets2025", "supervivencia", "tecnologia", "linternaLED", "FOSMET"],
  g58: ["smartwatchmujer", "relojfemenino", "saludfemenina", "modamujer", "regalosparamujer", "estiloelegante", "FOSMET"],
  i228: ["smartwatchmujer", "relojfemenino", "saludfemenina", "modamujer", "regalosparamujer", "estiloelegante", "FOSMET"],
  v18pro: ["aspiradora", "limpiezahogar", "hogarlimpio", "limpiezadecasa", "tiktokshop", "DyMona"],
  v17max: ["staubsauger", "putztipps", "haushaltshelfer", "großraumwohnung", "tiktokshop", "DyMona"],
  e12: ["スマートグラス", "POV動画", "AIカメラ", "ガジェット紹介", "耳を塞がない", "サイクリング", "FOSMET"],
  e05: ["スマートグラス", "調光サングラス", "AI同時通訳", "ガジェット紹介", "耳を塞がない", "運転用メガネ", "FOSMET"],
  e09: ["スマートグラス", "Vlog撮影", "POV動画", "SONYセンサー", "ガジェット紹介", "旅行用カメラ", "FOSMET"],
  g2: ["スマートウォッチ", "女性用スマートウォッチ", "生理周期管理", "健康管理", "大人女子コーデ", "プレゼントにおすすめ", "FOSMET"],
  fos10: ["スマートウォッチ", "スマートバンド", "超軽量", "健康管理", "睡眠トラッキング", "ミニマリスト", "FOSMET"],
};

const KT80_GERMAN_SUGGESTIONS = ["smartwatch", "outdooruhr", "überleben", "taschenlampe", "technik2025", "männergeschenke", "FOSMET"];
const G58_GERMAN_SUGGESTIONS = ["smartwatchdamen", "damenuhr", "frauengesundheit", "frauenmode", "geschenkidee", "eleganterlook", "FOSMET"];
const V18PRO_GERMAN_SUGGESTIONS = ["staubsauger", "haushaltshelfer", "putztipps", "putzroutine", "klapparm", "DyMona"];
const V17MAX_SPANISH_SUGGESTIONS = ["aspiradora", "hogargrande", "limpiezahogar", "mascotas", "tiktokshop", "DyMona"];

export const ControlPanel: React.FC<ControlPanelProps> = ({
  params,
  onChangeParams,
  onGenerate,
  isLoading,
  totalCount,
}) => {
  const currentProductId = params.productId || "rec10";
  const currentProduct = PRODUCTS_CONFIG[currentProductId] || PRODUCTS_CONFIG.rec10;
  const currentLang = params.language || (currentProductId === "v17max" ? "de" : currentProductId === "i228" || currentProductId === "v18pro" ? "es" : "ja");

  const isKt80 = currentProductId === "kt80";
  const isG58 = currentProductId === "g58";
  const isI228 = currentProductId === "i228";
  const isV18pro = currentProductId === "v18pro";
  const isV17max = currentProductId === "v17max";
  const isMultilingual = isKt80 || isG58 || isV18pro || isV17max;
  const isGerman = currentLang === "de";
  const isSpanish = currentLang === "es";

  const isE12 = currentProductId === "e12";
  const isE05 = currentProductId === "e05";
  const isE09 = currentProductId === "e09";
  const isG2 = currentProductId === "g2";
  const isFos10 = currentProductId === "fos10";
  const isT20 = currentProductId === "t20";
  const isQs40 = currentProductId === "qs40";

  let categories = REC10_CATEGORIES;
  if (isV18pro) {
    categories = isGerman ? V18PRO_CATEGORIES_DE : V18PRO_CATEGORIES_ES;
  } else if (isV17max) {
    categories = isSpanish ? V17MAX_CATEGORIES_ES : V17MAX_CATEGORIES_DE;
  } else if (isI228) {
    categories = I228_CATEGORIES_ES;
  } else if (isFos10) categories = FOS10_CATEGORIES;
  else if (isG2) categories = G2_CATEGORIES;
  else if (isE09) categories = E09_CATEGORIES;
  else if (isE05) categories = E05_CATEGORIES;
  else if (isE12) categories = E12_CATEGORIES;
  else if (isG58) {
    categories = isGerman ? G58_CATEGORIES_DE : G58_CATEGORIES_ES;
  } else if (isKt80) {
    categories = isGerman ? KT80_CATEGORIES_DE : KT80_CATEGORIES_ES;
  } else if (isT20) categories = T20_CATEGORIES;
  else if (isQs40) categories = QS40_CATEGORIES;

  const defaultProductTags = getDefaultTagsForProduct(currentProductId, currentLang);

  const isCustomized = params.customTags !== undefined && params.customTags !== defaultProductTags;

  const activeTagsString = params.customTags !== undefined
    ? params.customTags
    : defaultProductTags;

  const [tagSlots, setTagSlots] = useState<[string, string, string, string, string]>(() =>
    parseTagsToArray(params.customTags, defaultProductTags)
  );

  const [tagEditMode, setTagEditMode] = useState<"slots" | "line">("slots");
  const [lineInputValue, setLineInputValue] = useState(activeTagsString);

  const lastEmittedTagsRef = useRef<string | undefined>(params.customTags);
  const prevProdIdRef = useRef<string>(currentProductId);
  const prevLangRef = useRef<string>(currentLang);

  // Synchronize when product/language changes or when customTags is changed externally
  useEffect(() => {
    const prodChanged = currentProductId !== prevProdIdRef.current;
    const langChanged = currentLang !== prevLangRef.current;
    prevProdIdRef.current = currentProductId;
    prevLangRef.current = currentLang;

    if (prodChanged || langChanged || params.customTags === undefined) {
      const parsed = parseTagsToArray(params.customTags, defaultProductTags);
      setTagSlots(parsed);
      const str = params.customTags !== undefined ? params.customTags : defaultProductTags;
      setLineInputValue(str);
      lastEmittedTagsRef.current = params.customTags;
    } else if (params.customTags !== lastEmittedTagsRef.current) {
      // External update (from preset / cheatsheet etc.)
      const parsed = parseTagsToArray(params.customTags, defaultProductTags);
      setTagSlots(parsed);
      setLineInputValue(params.customTags);
      lastEmittedTagsRef.current = params.customTags;
    }
  }, [params.customTags, defaultProductTags, currentProductId, currentLang]);

  const handleSlotChange = (index: number, val: string) => {
    const cleanVal = val.replace(/#/g, "").trimStart();
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
    lastEmittedTagsRef.current = formatted;
    onChangeParams({ customTags: formatted });
  };

  const handleClearSlot = (index: number) => {
    handleSlotChange(index, "");
  };

  const handleClearAllSlots = () => {
    const emptySlots: [string, string, string, string, string] = ["", "", "", "", ""];
    setTagSlots(emptySlots);
    setLineInputValue("");
    lastEmittedTagsRef.current = "";
    onChangeParams({ customTags: "" });
  };

  const handleLineInputChange = (val: string) => {
    setLineInputValue(val);
    const normalized = normalizeTagString(val);
    const parsed = parseTagsToArray(normalized, defaultProductTags);
    setTagSlots(parsed);
    lastEmittedTagsRef.current = normalized;
    onChangeParams({ customTags: normalized });
  };

  const handleResetToDefaultTags = () => {
    const defaultTags = defaultProductTags;
    const parsed = parseTagsToArray(undefined, defaultTags);
    setTagSlots(parsed);
    setLineInputValue(defaultTags);
    lastEmittedTagsRef.current = undefined;
    onChangeParams({ customTags: undefined });
  };

  const handleApplySuggestion = (suggestion: string) => {
    const cleanSug = suggestion.replace(/^#+/, "").trim();
    // If tag already exists, do not duplicate
    if (tagSlots.some((t) => t.trim().toLowerCase() === cleanSug.toLowerCase())) {
      return;
    }
    const emptyIdx = tagSlots.findIndex((t) => !t || t.trim() === "");
    const targetIdx = emptyIdx !== -1 ? emptyIdx : 4;
    const updated: [string, string, string, string, string] = [
      targetIdx === 0 ? cleanSug : tagSlots[0],
      targetIdx === 1 ? cleanSug : tagSlots[1],
      targetIdx === 2 ? cleanSug : tagSlots[2],
      targetIdx === 3 ? cleanSug : tagSlots[3],
      targetIdx === 4 ? cleanSug : tagSlots[4],
    ];
    setTagSlots(updated);
    const formatted = formatArrayToTagString(updated);
    setLineInputValue(formatted);
    lastEmittedTagsRef.current = formatted;
    onChangeParams({ customTags: formatted });
  };

  const handleLanguageChange = (lang: TargetLanguage) => {
    onChangeParams({
      language: lang,
      customTags: isCustomized ? params.customTags : undefined,
    });
  };

  const getProductColor = () => {
    if (isV18pro) return "text-emerald-400";
    if (isV17max) return "text-amber-400";
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

  const currentSuggestions = isV18pro
    ? (isGerman ? V18PRO_GERMAN_SUGGESTIONS : TAG_SUGGESTIONS.v18pro)
    : isV17max
    ? (isSpanish ? V17MAX_SPANISH_SUGGESTIONS : TAG_SUGGESTIONS.v17max)
    : isG58
    ? (isGerman ? G58_GERMAN_SUGGESTIONS : TAG_SUGGESTIONS.g58)
    : isKt80
    ? (isGerman ? KT80_GERMAN_SUGGESTIONS : TAG_SUGGESTIONS.kt80)
    : TAG_SUGGESTIONS[currentProductId] || [];

  // Exaggerated Hardware Metrics for the Telemetry Dashboard
  const getHardwareTelemetrySpecs = () => {
    switch (currentProductId) {
      case "v18pro":
        return [
          { label: "FOLDABLE ARM & SUCTION", val: "50", unit: "kPa", desc: "65cm折叠臂 · 650W飓风吸力免弯腰", color: "liquid-metal-emerald", icon: <Wind className="w-4 h-4 text-emerald-400" /> },
          { label: "GREEN DUST LIGHT 2.0", val: "135", unit: "°", desc: "300cm超广照射 · 隐藏微尘无所遁形", color: "liquid-metal-cyan", icon: <Sparkles className="w-4 h-4 text-cyan-400" /> },
          { label: "FEATHERWEIGHT & SILENT", val: "1.4", unit: "kg", desc: "60 dB低音运行 · 7重过滤99.99%", color: "liquid-metal-gold", icon: <Battery className="w-4 h-4 text-amber-400" /> },
        ];
      case "v17max":
        return [
          { label: "MONSTER SUCTION", val: "58", unit: "kPa", desc: "650W极限电机 · 500㎡大户型复式楼", color: "liquid-metal-orange", icon: <Wind className="w-4 h-4 text-orange-400" /> },
          { label: "DUAL BATTERY PACK", val: "150", unit: "min", desc: "双电池超长续航 · 25.5cm防缠绕V刷", color: "liquid-metal-gold", icon: <Battery className="w-4 h-4 text-amber-400" /> },
          { label: "HEPA H14 & XXL BIN", val: "2", unit: "L", desc: "医疗级H14过滤 · 3个月免倒免脏手", color: "liquid-metal-cyan", icon: <ShieldCheck className="w-4 h-4 text-cyan-400" /> },
        ];
      case "kt80":
        return [
          { label: "BATTERY CAPACITY", val: "800", unit: "mAh", desc: "Monster Battery · 超强户外续航", color: "liquid-metal-orange", icon: <Battery className="w-4 h-4 text-orange-400" /> },
          { label: "WATERPROOF LEVEL", val: "5", unit: "ATM", desc: "50m深水防潜 · 游泳冲浪防暴雨", color: "liquid-metal-cyan", icon: <ShieldCheck className="w-4 h-4 text-cyan-400" /> },
          { label: "TACTICAL FLASHLIGHT", val: "LED", unit: "强光", desc: "机身侧置物理手电 · 战术一键直达", color: "liquid-metal-gold", icon: <Flashlight className="w-4 h-4 text-amber-400" /> },
        ];
      case "t20":
        return [
          { label: "SATELLITE POSITION", val: "GNSS", unit: "多星", desc: "独立高精度脱机轨迹 · 海拔气压", color: "liquid-metal-emerald", icon: <Compass className="w-4 h-4 text-emerald-400" /> },
          { label: "WATERPROOF / DRAIN", val: "5", unit: "ATM", desc: "高频物理震动智能排水 · 军规耐用", color: "liquid-metal-cyan", icon: <ShieldCheck className="w-4 h-4 text-cyan-400" /> },
          { label: "SPORTS TRACKING", val: "100+", unit: "模式", desc: "定制物理按键直达 · 24h血氧心率", color: "liquid-metal-gold", icon: <Activity className="w-4 h-4 text-amber-400" /> },
        ];
      case "rec10":
        return [
          { label: "STORAGE CAPACITY", val: "64", unit: "GB", desc: "双核降噪麦克风 · 30小时连续录音", color: "liquid-metal-gold", icon: <Radio className="w-4 h-4 text-amber-400" /> },
          { label: "AI ENGINE SYNC", val: "3", unit: "s", desc: "ChatGPT×Gemini 双AI · 秒出结构纪要", color: "liquid-metal-cyan", icon: <Bot className="w-4 h-4 text-cyan-400" /> },
          { label: "CARD ULTRA-SLIM", val: "2.9", unit: "mm", desc: "名片级铝合金极薄形态 · 手机磁吸", color: "liquid-metal-silver", icon: <Sparkles className="w-4 h-4 text-white" /> },
        ];
      case "e12":
        return [
          { label: "POV VIDEO RECORDING", val: "1080", unit: "P", desc: "30fps超清微型相机 · 第一人称视角", color: "liquid-metal-cyan", icon: <Camera className="w-4 h-4 text-cyan-400" /> },
          { label: "AUDIO TRANSDUCER", val: "16", unit: "mm", desc: "超大动圈开放音质 · 澎湃低音通透", color: "liquid-metal-gold", icon: <Headphones className="w-4 h-4 text-amber-400" /> },
          { label: "BATTERY ENDURANCE", val: "8", unit: "h", desc: "超长连续录像/音乐 · HiLuma AI问答", color: "liquid-metal-emerald", icon: <Battery className="w-4 h-4 text-emerald-400" /> },
        ];
      case "e05":
        return [
          { label: "ELECTROCHROMIC LENS", val: "4", unit: "档", desc: "触控秒速调光 · 室内透明室外遮阳", color: "liquid-metal-rose", icon: <Glasses className="w-4 h-4 text-rose-400" /> },
          { label: "FRAME MATERIAL", val: "TR90", unit: "超轻", desc: "高韧性记忆材质 · 羽毛级贴合", color: "liquid-metal-silver", icon: <Sparkles className="w-4 h-4 text-white" /> },
          { label: "AI TRANSLATION", val: "8", unit: "h", desc: "多语种实时同传 · ENC双麦通话", color: "liquid-metal-cyan", icon: <Bot className="w-4 h-4 text-cyan-400" /> },
        ];
      case "e09":
        return [
          { label: "IMAGE SENSOR", val: "SONY", unit: "800W", desc: "IMX219高清传感器 · 1080P 30fps防抖", color: "liquid-metal-cyan", icon: <Camera className="w-4 h-4 text-cyan-400" /> },
          { label: "BODY WEIGHT", val: "40", unit: "g", desc: "PC+ABS极致轻量 · 防蓝光平光镜", color: "liquid-metal-silver", icon: <Sparkles className="w-4 h-4 text-white" /> },
          { label: "PHYSICAL BUTTON", val: "10", unit: "分", desc: "双击连续视频录制 · 4-Tap AI语音", color: "liquid-metal-gold", icon: <Zap className="w-4 h-4 text-amber-400" /> },
        ];
      case "g58":
        return [
          { label: "DISPLAY RESOLUTION", val: "390", unit: "px", desc: "1.27\"全彩高清触控 · 98%极窄屏占比", color: "liquid-metal-rose", icon: <Sparkles className="w-4 h-4 text-pink-400" /> },
          { label: "WOMEN HEALTH SUITE", val: "24/7", unit: "守护", desc: "生理周期/排卵智能预测 · 经期关怀", color: "liquid-metal-gold", icon: <Heart className="w-4 h-4 text-rose-400" /> },
          { label: "DUAL WRIST STRAP", val: "双带", unit: "标配", desc: "米兰尼斯轻奢 + 亲肤硅胶随心换", color: "liquid-metal-silver", icon: <Watch className="w-4 h-4 text-white" /> },
        ];
      case "i228":
        return [
          { label: "DISPLAY RESOLUTION", val: "390", unit: "px", desc: "1.27\"全彩触控 · 98%屏占比防指纹", color: "liquid-metal-rose", icon: <Sparkles className="w-4 h-4 text-pink-400" /> },
          { label: "WOMEN HEALTH & CYCLE", val: "24/7", unit: "守护", desc: "经期/排卵期/孕期智能预测 · 关怀提醒", color: "liquid-metal-gold", icon: <Heart className="w-4 h-4 text-rose-400" /> },
          { label: "DUAL WRIST STRAP", val: "双带", unit: "标配", desc: "米兰尼斯金属 + 亲肤硅胶随心换", color: "liquid-metal-silver", icon: <Watch className="w-4 h-4 text-white" /> },
        ];
      case "g2":
        return [
          { label: "SPORTS TRACKING", val: "120+", unit: "模式", desc: "FitCloudPro深度互联 · 运动生理分析", color: "liquid-metal-purple", icon: <Activity className="w-4 h-4 text-purple-400" /> },
          { label: "PROTECTION LEVEL", val: "IP68", unit: "级", desc: "深度防尘防水 · 日常淋雨洗手无忧", color: "liquid-metal-cyan", icon: <ShieldCheck className="w-4 h-4 text-cyan-400" /> },
          { label: "HEALTH SENSOR", val: "24", unit: "h", desc: "心率/血氧/睡眠监测 · 女性生理周期", color: "liquid-metal-rose", icon: <Heart className="w-4 h-4 text-pink-400" /> },
        ];
      case "fos10":
        return [
          { label: "FEATHERWEIGHT BODY", val: "14.9", unit: "g", desc: "羽毛级无感佩戴 · 24小时贴身入眠", color: "liquid-metal-cyan", icon: <Sparkles className="w-4 h-4 text-teal-400" /> },
          { label: "ULTRA THIN CHASSIS", val: "10.66", unit: "mm", desc: "流线纤薄机身 · 腕部零压迫贴合", color: "liquid-metal-silver", icon: <Watch className="w-4 h-4 text-white" /> },
          { label: "BATTERY LIFE", val: "7", unit: "天", desc: "超长一周续航 · 100+种运动模式", color: "liquid-metal-emerald", icon: <Battery className="w-4 h-4 text-emerald-400" /> },
        ];
      default: // qs40
        return [
          { label: "SLIM METALLIC BODY", val: "9.8", unit: "mm", desc: "洗练银翼金属质感 · 轻盈无感佩戴", color: "liquid-metal-silver", icon: <Watch className="w-4 h-4 text-white" /> },
          { label: "ON-WRIST CHATGPT", val: "AI", unit: "对话", desc: "手腕直接说出问题 · 语音实时应答", color: "liquid-metal-cyan", icon: <Bot className="w-4 h-4 text-cyan-400" /> },
          { label: "HD TOUCH DISPLAY", val: "1.85", unit: "寸", desc: "视网膜全彩大屏 · 蓝牙高清双向通话", color: "liquid-metal-gold", icon: <Radio className="w-4 h-4 text-amber-400" /> },
        ];
    }
  };

  const telemetrySpecs = getHardwareTelemetrySpecs();

  return (
    <div id="control-panel" className="sapphire-glass chromatic-dispersion-edge hyper-rim-glare rounded-[30px] p-5 sm:p-7 mb-6 relative overflow-hidden">
      {/* Specular Micro-Chamfer Glare on Top Rim */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-300/40 via-white/80 via-rose-300/40 to-transparent pointer-events-none z-10" />

      {/* Product Lineup Matrix */}
      <div className="mb-6 pb-6 border-b border-white/[0.08]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-white tracking-wider uppercase flex items-center gap-1.5 font-mono">
              <Target className="w-3.5 h-3.5 text-cyan-400" />
              <span>硬件矩阵 (Product Matrix)</span>
            </span>
            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white/[0.08] text-white border border-white/[0.12] shadow-xs">
              13款旗舰设备
            </span>
          </div>
          <span className="text-[11.5px] text-white/50">
            切换产品自动同步核心参数、目标受众画像与 5 大营销标签
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 2xl:grid-cols-13 gap-2.5">
          {[
            { id: "v18pro" as ProductId, label: "V18 PRO", desc: "折叠绿光吸尘", icon: <Wind className="w-3.5 h-3.5" />, tag: "#V18PRO", lang: "es" as TargetLanguage },
            { id: "v17max" as ProductId, label: "V17 MAX", desc: "大户型旗舰吸", icon: <Wind className="w-3.5 h-3.5" />, tag: "#V17MAX", lang: "de" as TargetLanguage },
            { id: "rec10" as ProductId, label: "REC10", desc: "名片AI录音", icon: <Mic className="w-3.5 h-3.5" />, tag: "#AIレコーダー", lang: "ja" as TargetLanguage },
            { id: "qs40" as ProductId, label: "QS40", desc: "对腕ChatGPT", icon: <Watch className="w-3.5 h-3.5" />, tag: "#スマートウォッチ", lang: "ja" as TargetLanguage },
            { id: "t20" as ProductId, label: "T20", desc: "多星GNSS", icon: <Compass className="w-3.5 h-3.5" />, tag: "#アウトドア", lang: "ja" as TargetLanguage },
            { id: "kt80" as ProductId, label: "KT80", desc: "800mAh战术", icon: <Flashlight className="w-3.5 h-3.5" />, tag: "#smartwatch", lang: "es" as TargetLanguage },
            { id: "g58" as ProductId, label: "G58", desc: "女性时尚表", icon: <Sparkles className="w-3.5 h-3.5" />, tag: "#SaludMujer", lang: "es" as TargetLanguage },
            { id: "i228" as ProductId, label: "I228", desc: "女性便携表", icon: <Heart className="w-3.5 h-3.5" />, tag: "#I228", lang: "es" as TargetLanguage },
            { id: "e12" as ProductId, label: "E12", desc: "POV相机耳机", icon: <Headphones className="w-3.5 h-3.5" />, tag: "#POV動画", lang: "ja" as TargetLanguage },
            { id: "e05" as ProductId, label: "E05", desc: "4档调光镜", icon: <Glasses className="w-3.5 h-3.5" />, tag: "#スマートグラス", lang: "ja" as TargetLanguage },
            { id: "e09" as ProductId, label: "E09", desc: "SONY高清镜", icon: <Camera className="w-3.5 h-3.5" />, tag: "#Vlog撮影", lang: "ja" as TargetLanguage },
            { id: "g2" as ProductId, label: "G2", desc: "女性健康表", icon: <Heart className="w-3.5 h-3.5" />, tag: "#女性健康", lang: "ja" as TargetLanguage },
            { id: "fos10" as ProductId, label: "FOS10", desc: "14.9g极轻", icon: <Sparkles className="w-3.5 h-3.5" />, tag: "#ポータブル", lang: "ja" as TargetLanguage },
          ].map((prod) => {
            const isSelected = currentProductId === prod.id;
            return (
              <button
                key={prod.id}
                type="button"
                id={`tab-product-${prod.id}`}
                onClick={() => onChangeParams({ productId: prod.id, language: prod.lang })}
                className={`group relative flex flex-col justify-between p-3.5 rounded-[22px] text-left transition-all duration-200 cursor-pointer overflow-hidden min-h-[100px] physic-spring-tap ${
                  isSelected
                    ? "bg-white/[0.16] border border-white/[0.3] shadow-[0_8px_24px_rgba(0,0,0,0.6)] text-white ring-1 ring-white/40"
                    : "bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.09] hover:border-white/[0.16] text-white/70"
                }`}
              >
                <div className="flex items-center justify-between gap-1.5 w-full">
                  <div className={`p-1.5 rounded-[12px] transition-colors ${
                    isSelected ? "bg-white text-black shadow-md" : "bg-white/[0.08] text-white/70 group-hover:text-white"
                  }`}>
                    {prod.icon}
                  </div>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#00d287] shadow-[0_0_10px_#00d287]" />
                  )}
                </div>
                <div className="mt-2 w-full">
                  <span className="font-mono font-black text-xs block text-white tracking-tight">
                    {prod.label}
                  </span>
                  <p className="text-[10px] text-white/60 truncate mt-0.5 font-medium">
                    {prod.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Engine & Configuration Context Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/[0.1] text-white border border-white/[0.15] flex items-center gap-2 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#00d287] shadow-[0_0_8px_#00d287]" />
              当前硬件：<strong className={`${getProductColor()} font-mono text-sm`}>{currentProduct.name}</strong>
            </span>
            <span className="text-white/20">|</span>
            <span className="text-xs text-white/70">
              单次标准规格：<strong className="text-white font-mono font-bold">50 组</strong> 高转化短视频标题
            </span>
          </div>
          <p className="text-xs text-white/60 mt-1.5 leading-relaxed">
            {currentProduct.shortDesc}
          </p>
        </div>

        {/* Engine Switcher & Language selector */}
        <div className="flex items-center gap-2.5 flex-wrap self-start lg:self-center">
          {isMultilingual && (
            <div className="flex items-center gap-1 bg-black/40 p-1 rounded-[18px] border border-white/[0.1] shadow-inner">
              <div className="px-2 py-1 text-[11px] font-medium text-white/70 flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-white/60" />
                <span>语言:</span>
              </div>
              <button
                type="button"
                id="btn-lang-es"
                onClick={() => handleLanguageChange("es")}
                className={`px-3.5 py-1.5 rounded-[14px] text-xs font-bold transition-all cursor-pointer ${
                  currentLang === "es"
                    ? "bg-white text-black shadow-md"
                    : "text-white/60 hover:text-white"
                }`}
              >
                🇪🇸 西班牙语 (ES)
              </button>
              <button
                type="button"
                id="btn-lang-de"
                onClick={() => handleLanguageChange("de")}
                className={`px-3.5 py-1.5 rounded-[14px] text-xs font-bold transition-all cursor-pointer ${
                  currentLang === "de"
                    ? "bg-white text-black shadow-md"
                    : "text-white/60 hover:text-white"
                }`}
              >
                🇩🇪 德语 (DE)
              </button>
            </div>
          )}

          {/* Engine Toggle */}
          <div className="flex items-center gap-1 bg-black/40 p-1 rounded-[18px] border border-white/[0.1] shadow-inner">
            <button
              type="button"
              id="btn-mode-algo"
              onClick={() => onChangeParams({ useAiApi: false })}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-[14px] text-xs font-bold transition-all cursor-pointer ${
                !params.useAiApi
                  ? "bg-white text-black shadow-md"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>毫秒矩阵算法</span>
            </button>

            <button
              type="button"
              id="btn-mode-gemini"
              onClick={() => onChangeParams({ useAiApi: true })}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-[14px] text-xs font-bold transition-all cursor-pointer ${
                params.useAiApi
                  ? "bg-white text-black shadow-md"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Bot className="w-3.5 h-3.5" />
              <span>Gemini 3.7 AI 深度创意</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sapphire Telemetry Dashboard: Exaggerated Hardware Numbers */}
      <div className="mt-6 pb-6 border-b border-white/10">
        <div className="flex items-center justify-between mb-3.5">
          <label className="text-xs font-bold text-zinc-200 uppercase tracking-wider flex items-center gap-1.5 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>核心硬件仪表盘 (Hardware Telemetry Specs)</span>
          </label>
          <span className="text-[10.5px] font-mono text-zinc-400 uppercase tracking-wider">
            OPTICAL PRECISION
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {telemetrySpecs.map((spec, sIdx) => (
            <div
              key={sIdx}
              className="bento-glass-tile chromatic-dispersion-edge p-4 sm:p-5 flex flex-col justify-between relative group hover:border-white/30 transition-all duration-300"
            >
              {/* Subtle dynamic corner glow on hover */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.03] group-hover:bg-white/[0.08] rounded-full blur-xl pointer-events-none transition-colors duration-300" />

              <div className="flex items-center justify-between mb-2 relative z-10">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-300 font-bold flex items-center gap-1.5">
                  <span className="p-1 rounded-[8px] bg-white/[0.08] text-white">
                    {spec.icon}
                  </span>
                  <span>{spec.label}</span>
                </span>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-zinc-300 group-hover:text-white group-hover:border-white/30 transition-all">
                  0{sIdx + 1}
                </span>
              </div>

              {/* Crisp High-Contrast Number with Optical Precision */}
              <div className="my-2.5 flex items-baseline gap-1.5 relative z-10">
                <span className={`text-3xl sm:text-4xl font-black font-mono tracking-tight leading-none group-hover:scale-105 transition-transform duration-200 ${spec.color}`}>
                  {spec.val}
                </span>
                <span className="text-sm sm:text-base font-bold text-zinc-200 font-mono">
                  {spec.unit}
                </span>
              </div>

              <p className="text-xs text-zinc-300 font-normal leading-relaxed mt-1 relative z-10">
                {spec.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Content Angles / Perspectives */}
      <div className="mt-6">
        <div className="flex items-center justify-between mb-3">
          <label className="text-xs font-bold text-zinc-200 uppercase tracking-wider flex items-center gap-1.5 font-mono">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>内容切入视角 / 营销诉求维度</span>
          </label>
          <span className="text-[11px] text-zinc-400">
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
                    ? "bg-white text-black font-bold shadow-xl ring-2 ring-white/80"
                    : "bg-white/[0.06] border border-white/10 hover:bg-white/[0.12] hover:border-white/20 text-white"
                }`}
              >
                <div className="flex items-center gap-1.5 font-bold mb-1.5 truncate">
                  <span className="text-base">{cat.icon}</span>
                  <span className={`truncate text-xs ${isSelected ? "text-black font-extrabold" : "text-white font-semibold"}`}>
                    {cat.label}
                  </span>
                </div>
                <span className={`text-[11px] line-clamp-2 leading-relaxed ${
                  isSelected ? "text-zinc-800 font-medium" : "text-zinc-400 group-hover:text-zinc-200"
                }`}>
                  {cat.desc}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 5-Tag Management Suite */}
      <div className="mt-6 p-4 sm:p-5 rounded-[24px] bg-black/40 border border-white/[0.09] shadow-inner">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3.5 border-b border-white/[0.08]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-[14px] bg-white/[0.08] text-white">
              <Tag className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white tracking-tight">
                  5 大固定营销标签管理
                </span>
                {isCustomized ? (
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/25 text-amber-300 border border-amber-500/40 flex items-center gap-1">
                    <Edit3 className="w-2.5 h-2.5" /> 已自定义
                  </span>
                ) : (
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                    <CheckCircle2 className="w-2.5 h-2.5" /> 原厂标准标签
                  </span>
                )}
              </div>
              <p className="text-[11px] text-white/50 mt-0.5">
                支持随时修改 5 个标签，生成的所有标题均自动带上新标签。
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-center flex-wrap justify-end">
            <div className="flex items-center bg-white/[0.06] p-0.5 rounded-[14px] border border-white/[0.1] text-[11px]">
              <button
                type="button"
                id="btn-tag-mode-slots"
                onClick={() => setTagEditMode("slots")}
                className={`px-3 py-1 rounded-[12px] transition-all cursor-pointer flex items-center gap-1 ${
                  tagEditMode === "slots"
                    ? "bg-white text-black font-bold shadow-xs"
                    : "text-white/50 hover:text-white"
                }`}
              >
                <ListOrdered className="w-3 h-3" />
                <span>5槽位</span>
              </button>
              <button
                type="button"
                id="btn-tag-mode-line"
                onClick={() => setTagEditMode("line")}
                className={`px-3 py-1 rounded-[12px] transition-all cursor-pointer flex items-center gap-1 ${
                  tagEditMode === "line"
                    ? "bg-white text-black font-bold shadow-xs"
                    : "text-white/50 hover:text-white"
                }`}
              >
                <Edit3 className="w-3 h-3" />
                <span>单行</span>
              </button>
            </div>

            {/* Clear All Tags Button */}
            {tagSlots.some((t) => t && t.trim() !== "") && (
              <button
                type="button"
                id="btn-clear-all-tags"
                onClick={handleClearAllSlots}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-[14px] text-xs font-semibold text-red-300/90 hover:text-red-200 bg-red-500/15 hover:bg-red-500/25 border border-red-500/35 transition-all cursor-pointer"
                title="一键清空所有 5 个槽位标签"
              >
                <Trash2 className="w-3 h-3" />
                <span>清空槽位</span>
              </button>
            )}

            {isCustomized && (
              <button
                type="button"
                id="btn-reset-tags"
                onClick={handleResetToDefaultTags}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-[14px] text-xs font-bold text-amber-300 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 transition-all cursor-pointer physic-spring-tap"
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
                <div className="flex items-center justify-between px-0.5">
                  <span className="text-[10px] text-white/50 font-mono font-medium">
                    槽位 {slotIdx + 1}
                  </span>
                  {tagSlots[slotIdx] ? (
                    <button
                      type="button"
                      onClick={() => handleClearSlot(slotIdx)}
                      className="text-[9.5px] text-white/40 hover:text-red-300 transition-colors flex items-center gap-0.5 cursor-pointer"
                      title={`清空槽位 ${slotIdx + 1}`}
                    >
                      <X className="w-2.5 h-2.5" />
                      <span>清除</span>
                    </button>
                  ) : (
                    <span className="text-[9.5px] text-white/20 font-mono">(留空)</span>
                  )}
                </div>
                <div className="relative flex items-center">
                  <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-white/40">
                    <Hash className="w-3 h-3 text-white/50" />
                  </div>
                  <input
                    type="text"
                    id={`input-tag-slot-${slotIdx + 1}`}
                    placeholder={`标签 ${slotIdx + 1}`}
                    value={tagSlots[slotIdx] || ""}
                    onChange={(e) => handleSlotChange(slotIdx, e.target.value)}
                    className="w-full pl-7 pr-7 py-2 text-xs bg-black/60 border border-white/[0.1] rounded-[14px] focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 text-white font-mono outline-hidden transition-all placeholder:text-white/30"
                  />
                  {tagSlots[slotIdx] && (
                    <button
                      type="button"
                      onClick={() => handleClearSlot(slotIdx)}
                      className="absolute inset-y-0 right-0 pr-2 flex items-center text-white/30 hover:text-white/80 transition-colors cursor-pointer"
                      title="清除此标签"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-3.5">
            <span className="text-[10px] text-white/50 font-medium block mb-1">
              单行输入或直接粘贴：
            </span>
            <div className="relative flex items-center">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-white/40">
                <Hash className="w-3.5 h-3.5 text-white/50" />
              </div>
              <input
                type="text"
                id="input-tag-line"
                placeholder="#FOSMET #REC10 #AIレコーダー..."
                value={lineInputValue}
                onChange={(e) => handleLineInputChange(e.target.value)}
                className="w-full pl-8 pr-3 py-2.5 text-xs bg-black/60 border border-white/[0.1] rounded-[14px] focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 text-white font-mono outline-hidden transition-all placeholder:text-white/30"
              />
            </div>
          </div>
        )}

        {/* Suggestions */}
        <div className="mt-3 pt-2.5 border-t border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] text-white/50 font-medium">
              💡 快捷推荐:
            </span>
            {currentSuggestions.map((sug, i) => (
              <button
                key={i}
                type="button"
                id={`btn-tag-sug-${i}`}
                onClick={() => handleApplySuggestion(sug)}
                className="px-2.5 py-1 text-[10.5px] rounded-[10px] bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.08] text-white/70 hover:text-white font-mono transition-all cursor-pointer physic-spring-tap"
              >
                +#{sug}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5 text-[11px] truncate max-w-full">
            <span className="text-white/50 text-[10px] flex-shrink-0">生效标签:</span>
            <code className="font-mono text-[11px] px-2.5 py-0.5 rounded-[10px] bg-black/70 border border-white/[0.12] text-white font-semibold truncate select-all">
              {activeTagsString || "(未挂载标签)"}
            </code>
          </div>
        </div>
      </div>

      {/* Keyword Modifier & Xiaomi Vitality Generate Action */}
      <div className="mt-6 pt-5 border-t border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="flex-1">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
              <Sliders className="w-3.5 h-3.5" />
            </div>
            <input
              type="text"
              id="input-custom-keyword"
              placeholder="特别强调词（选填，如：新入职、零加班、POV第一人称、10.66mm极薄、女性健康等）"
              value={params.customKeyword || ""}
              onChange={(e) => onChangeParams({ customKeyword: e.target.value })}
              className="w-full pl-9 pr-3.5 py-3 text-xs bg-white/[0.05] border border-white/[0.1] rounded-[18px] focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 text-white placeholder:text-white/40 transition-all outline-hidden font-sans"
            />
          </div>
        </div>

        {/* Xiaomi Vitality Orange / High-Power Generate Button */}
        <MagneticButton
          id="btn-generate-50"
          onClick={onGenerate}
          disabled={isLoading}
          className="flex-shrink-0 inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-[22px] font-black text-sm text-white hyper-button-vitality shadow-[0_12px_36px_rgba(255,105,0,0.55)] hover:shadow-[0_16px_48px_rgba(255,105,0,0.75)] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed border border-white/30 physic-spring-tap"
        >
          {isLoading ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin text-white" />
              <span>{currentProduct.model} 50 组文案生成中...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 text-white animate-pulse" />
              <span className="tracking-wide">一键输出 50 组 {currentProduct.model} 爆款文案</span>
            </>
          )}
        </MagneticButton>
      </div>
    </div>
  );
};
