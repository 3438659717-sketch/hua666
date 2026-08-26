import { AngleCategory, GeneratedTitle, ProductId, ProductConfig, TargetLanguage } from "../types";
import { generateQs40AlgorithmicTitles, QS40_FIXED_TAGS } from "./qs40Templates";
import { generateT20AlgorithmicTitles, T20_FIXED_TAGS } from "./t20Templates";
import { generateKt80AlgorithmicTitles, KT80_SPANISH_TAGS, KT80_GERMAN_TAGS } from "./kt80Templates";
import { generateE12AlgorithmicTitles, E12_FIXED_TAGS } from "./e12Templates";
import { generateE05AlgorithmicTitles, E05_FIXED_TAGS } from "./e05Templates";
import { generateE09AlgorithmicTitles, E09_FIXED_TAGS } from "./e09Templates";
import { generateG58AlgorithmicTitles, G58_SPANISH_TAGS, G58_GERMAN_TAGS } from "./g58Templates";
import { generateG2AlgorithmicTitles, G2_FIXED_TAGS } from "./g2Templates";
import { generateFos10AlgorithmicTitles, FOS10_FIXED_TAGS } from "./fos10Templates";

export const FIXED_TAGS = "#FOSMET#REC10#AIレコーダー#ChatGPT#プロモーションの仕事";
export const REC10_FIXED_TAGS = FIXED_TAGS;

export const PRODUCTS_CONFIG: Record<ProductId, ProductConfig> = {
  rec10: {
    id: "rec10",
    brand: "FOSMET",
    model: "REC10",
    name: "FOSMET REC10",
    japaneseType: "AIボイスレコーダー / AI録音カード",
    shortDesc: "伪装成极简名片的桌面效率引擎 (35h续航 / 64GB / ChatGPT×Gemini双AI)",
    fixedTags: "#FOSMET#REC10#AIレコーダー#ChatGPT#プロモーションの仕事",
    badge: "AI录音卡片",
    accentColor: "#3B82F6",
    tiktokFormula: "反常识痛点钩子 + 无剧情硬核展示 + 效率结果前置",
    specs: [
      { label: "外观与材质", value: "超薄名片尺寸・航空级铝合金高级质感" },
      { label: "使用形态", value: "手机背面MagSafe磁吸 ＆ 桌面光明正大极简平放" },
      { label: "电池与续航", value: "400mAh大电池 / 35小时连续录音 / 超长待机66天" },
      { label: "存储容量", value: "64GB 超大机身内置存储" },
      { label: "双AI大模型", value: "ChatGPT ＆ Gemini 双AI模型协同驱动 (DOWAY App)" },
      { label: "核心AI能力", value: "实时高精度转写・一秒生成精炼会议纪要・自动输出思维导图" },
      { label: "行业专属模板", value: "商务谈判/日常会议/课堂讲座/采访/医疗/法律等31种场景模板" },
      { label: "固定标签", value: "#FOSMET#REC10#AIレコーダー#ChatGPT#プロモーションの仕事" },
    ],
    highlights: [
      "极简名片级薄度，手机磁吸与桌面平放无违和",
      "双AI大模型 (ChatGPT×Gemini) 瞬间完成会议纪要与思维导图",
      "35小时超长录音与64GB大容量，彻底告别电量与内存焦虑",
    ],
  },
  qs40: {
    id: "qs40",
    brand: "FOSMET",
    model: "QS40",
    name: "FOSMET QS40 (Series III)",
    japaneseType: "次世代AIスマートウォッチ",
    shortDesc: "极具高级感洗练银色金属腕表・ChatGPT对腕语音交互・不到1万日元破天荒性价比",
    fixedTags: "#FOSEMT#QS40#スマートウォッチ#健康管理者#ai",
    badge: "次世代AI智能手表",
    accentColor: "#8B5CF6",
    tiktokFormula: "价格/打字痛点反转 + 9.8mm洗练银色硬核实机 + ChatGPT秒级解答/健康管理前置",
    specs: [
      { label: "外观厚度与重量", value: "厚度仅9.8mm（薄7.5%）/ 超轻32.3g（轻10%）/ 洗练银色金属机身" },
      { label: "佩戴贴合度", value: "专为亚洲人手腕形状定制贴合感 / 24小时无感佩戴" },
      { label: "屏幕与显示", value: "AMOLED视网膜级高清屏 / 1400nit超高亮度 / 461 PPI / ΔE<2高彩度" },
      { label: "核心AI功能", value: "ChatGPT语音交互助手（对腕发声秒获解答）/ 创新AI文字盘语音定制" },
      { label: "续航与急速快充", value: "急速充电30分钟55% / 通常使用8-10天 / AOD常亮2-3天 / 待机21天" },
      { label: "24h健康守护", value: "精准心率、血氧、压力监测、女性周期管理、呼吸训练" },
      { label: "科学睡眠监测", value: "24h休息守护，连午休/小憩 (仮眠まで逃さず) 都能精准记录与阶段分析" },
      { label: "运动与防水", value: "150+种运动模式 / GPS联动记录 / 紧急SOS / 3ATM专业日常防水" },
      { label: "智能通信", value: "Bluetooth蓝牙高清通话 / 邮件与LINE/SNS通知一览 / 自定义下按键快捷键" },
      { label: "固定标签", value: "#FOSEMT#QS40#スマートウォッチ#健康管理者#ai" },
    ],
    highlights: [
      "ChatGPT智能语音交互：对腕发声秒获解答，彻底终结小屏幕打字烦恼",
      "9.8mm超薄极轻32.3g + 洗练银色高级金属外观 + 不到1万日元破天荒超高性价比",
      "AMOLED 1400nit高清屏 + 创新AI表盘语音生成 + 30分钟急速快充55% + 24h午休深度睡眠监测",
    ],
  },
  t20: {
    id: "t20",
    brand: "FOSMET",
    model: "T20",
    name: "FOSMET T20 (C32 Pro)",
    japaneseType: "アウトドア＆スポーツ 本格派スマートウォッチ",
    shortDesc: "户外探索＆硬核运动专业级仪表盘・多星GNSS脱机轨迹・电子指南针/气压高度计・智能物理排水",
    fixedTags: "#FOSMET#T20#スマートウォッチ#屋外#スポーツ",
    badge: "专业户外运动手表",
    accentColor: "#10B981",
    tiktokFormula: "高额户外表/水没痛点反转 + 独立多星GNSS/物理智能排水硬核展示 + 100+运动/腕上本格计器直给",
    specs: [
      { label: "户外环境感知", value: "内置高精度电子指南针(方位角) ＆ 气压传感器(过去24h记录) ＆ 高度计" },
      { label: "独立卫星定位", value: "多星GNSS (マルチGNSS) 独立脱机路线定位与轨迹记录，无需携带手机" },
      { label: "黑科技排水", value: "智能物理排水功能（高频震动瞬间从麦克风/扬声器孔排出内部积水）" },
      { label: "运动模式", value: "100+种专业运动模式（跑步、骑行、游泳、登山、徒步、跳绳等）" },
      { label: "专属操作按键", value: "三组物理按键：电源键、自定义功能键（长按语音助手）、一键运动专属按键" },
      { label: "24h健康管家", value: "全天候心率连续监测、血氧饱和度监测、压力测量、呼吸训练、女性生理周期" },
      { label: "科学睡眠追踪", value: "深睡/浅睡/清醒阶段精确分析、睡眠品质评分" },
      { label: "全能互联与通话", value: "Bluetooth 5.3蓝牙通话（手表直接拨号接听）、AI智能语音助手、LINE/SNS通知" },
      { label: "日常工具生态", value: "音乐控制、实时天气、遥控拍照、手机查找、计算器、闹钟/秒表/计时器" },
      { label: "固定标签", value: "#FOSMET#T20#スマートウォッチ#屋外#スポーツ" },
    ],
    highlights: [
      "多星GNSS脱机独立定位 + 高精度电子指南针与气压高度传感器，户外探索不迷路",
      "强力智能物理排水功能：涉水游泳暴汗后瞬间震动排水，极限抗造军规级品质",
      "100+种运动模式一键直达 + Bluetooth蓝牙高清通话 + 24小时心率血氧睡眠全天守护",
    ],
  },
  kt80: {
    id: "kt80",
    brand: "FOSMET",
    model: "KT80",
    name: "FOSMET KT80",
    japaneseType: "Reloj Inteligente Outdoor / Outdoor-Smartwatch",
    shortDesc: "1.46\"大屏・坚固银色金属・800mAh超大电池・5ATM潜水级防水・侧边LED强光手电筒",
    fixedTags: "#FOSMET#KT80#reloj inteligente#Relojes para exteriores#herramienta",
    defaultLanguage: "es",
    supportedLanguages: ["es", "de"],
    badge: "户外全能工具表",
    accentColor: "#F59E0B",
    tiktokFormula: "暗夜探索/电量痛点反转 + 1.46\"大屏/坚固银色金属硬核展示 + 侧边LED手电/800mAh/5ATM潜水直给",
    specs: [
      { label: "屏幕与显示", value: "1.46 英寸超清触控大屏，极高抗造属性与视网膜级清晰度" },
      { label: "机身材质与做工", value: "极其坚固的高强度银色金属机身，抗跌落与防刮擦" },
      { label: "电池与极限续航", value: "800 mAh 超大容量电池，为多场景户外提供持久电力" },
      { label: "防水等级", value: "真正的 5ATM 潜水级防水（游泳、洗澡及严苛涉水环境直接佩戴）" },
      { label: "实用工具黑科技", value: "侧边创新集成一键开启高亮 LED 强光手电筒" },
      { label: "通信与通话", value: "全面支持高清蓝牙接打电话，腕上双向清晰通话" },
      { label: "健康管理", value: "24/7 全天候心率连续监测、血氧饱和度监测与科学睡眠分析" },
      { label: "运动追踪", value: "100+ 种专业运动模式全面记录" },
      { label: "固定标签(西语)", value: "#FOSMET#KT80#reloj inteligente#Relojes para exteriores#herramienta" },
      { label: "固定标签(德语)", value: "#FOSMET#KT80#Smartwatch#Outdoor Smartwatch#Werkzeug" },
    ],
    highlights: [
      "800 mAh 超大容量电池 + 真正的 5ATM 潜水级防水，极限续航无惧涉水",
      "侧边创新集成一键高亮 LED 手电筒，户外夜行与应急救援实用利器",
      "1.46 英寸超清大屏 + 坚固银色金属机身 + 蓝牙高清通话与 100+ 运动模式",
    ],
  },
  e12: {
    id: "e12",
    brand: "FOSMET",
    model: "E12",
    name: "FOSMET E12",
    japaneseType: "AI搭載スポーツヘッドホン（カメラ付き） / オープンイヤーAIイヤホン",
    shortDesc: "开放式零压佩戴 ✕ 16mm大喇叭HiFi音质 ✕ 内置摄像头与OpenAI助手 ✕ 语音Vlog与拍照识物",
    fixedTags: "#FOSMET#E12#Bluetoothヘッドホン#デイリーレコード#AIイヤホン",
    defaultLanguage: "ja",
    supportedLanguages: ["ja"],
    badge: "AI摄像头蓝牙耳机",
    accentColor: "#06B6D4",
    tiktokFormula: "手持拍照/入耳压迫痛点反转 + 耳机内置SONY摄像头/16mm大振膜硬核实机 + 语音Vlog/拍照识物/同时通译结果直给",
    specs: [
      { label: "佩戴形态与舒适度", value: "オープンイヤー型 (开放式不入耳) / 全天佩戴零压力 / 运动狂甩不掉" },
      { label: "音频与扬声器", value: "16mm 超大口径 HiFi 动圈扬声器 (大迫力重低音与宽广声场)" },
      { label: "内置摄像头影像", value: "SONY IMX219 800万画素 / 1080P 30fps 高清录像 / 软件电子防抖" },
      { label: "核心硬件平台", value: "DH98562+JL7018F / DDR3 1G / FLASH 128Mbit / 8GB 内置存储" },
      { label: "超级AI大模型", value: "OpenAI 深度集成驱动 / 语音唤醒「Hi Luma」/ 拍照识物解答「これ何？」" },
      { label: "跨语言与办公", value: "リアルタイム同時通訳 (实时同传)、会話翻訳 (对话翻译)、会議メモ (会议记录)" },
      { label: "录像与操控按键", value: "1按拍照、2按录像(最大10分)、3按录音 / 触控区域滑动手势调节音量与切歌" },
      { label: "麦克风与降噪", value: "アレイ3マイク (3麦克风阵列 / 2718封装 38dB 降噪通话)" },
      { label: "数据传输与充电", value: "Wi-Fi 高速直连手机传输写真与视频 / 2PIN 磁吸快速充电 / 220mAh 电池" },
      { label: "隐私与状态指示", value: "3色LED状态指示灯 + 专属白色微闪拍摄隐私提示灯 (エチケット設計)" },
      { label: "固定标签", value: "#FOSMET#E12#Bluetoothヘッドホン#デイリーレコード#AIイヤホン" },
    ],
    highlights: [
      "颠覆性内置 SONY 800万画素摄像头：耳边一键或语音「Hi Luma」即可拍摄第一视角日常 Vlog 与 1080P 视频",
      "OpenAI 超级助手赋能：语音拍照识物「这是什么？」即问即答，更支持多国语言实时同传翻译与会议记录",
      "开放式零压佩戴 + 16mm 超大口径 HiFi 音质：震撼重低音与环境感知安全兼得，告别手机依赖",
    ],
  },
  e05: {
    id: "e05",
    brand: "FOSMET",
    model: "E05",
    name: "FOSMET E05",
    japaneseType: "4段階調光スマートオーディオグラス / AIスマートメガネ",
    shortDesc: "极简穿搭美学 ✕ 4档电致变色镜片 ✕ ENC双麦降噪 ✕ AI智能问答与实时同传",
    fixedTags: "#FOSMET#E05#スマートグラス#服装#イヤホン",
    defaultLanguage: "ja",
    supportedLanguages: ["ja"],
    badge: "4档变色智能眼镜",
    accentColor: "#F43F5E",
    tiktokFormula: "穿搭/墨镜切换痛点反转 + 4档指尖丝滑调光/TR90超轻机身硬核实机 + AI同传/ENC开放音频直给",
    specs: [
      { label: "调光镜片技术", value: "エレクトロクロミックレンズ (4段階調光电致变色) / 指尖轻触专属感应区瞬时切换 / 长按5s启闭" },
      { label: "镜架材质与佩戴", value: "TR90 超轻高韧性材质镜框与镜腿 / 极度轻盈舒适 / 极简穿搭美学 (极简コーデ・高颜值)" },
      { label: "防护等级", value: "IP65 级防尘防水防汗 (运动暴汗、雨天出行全天候无忧)" },
      { label: "核心AI功能", value: "内置强大的 AI 智能问答 ＆ 多语言实时同传翻译 (打破语言壁垒・耳边随身智能助手)" },
      { label: "音频与降噪", value: "ENC 双麦克风通话降噪 (ノイズキャンセリングマイク) ＆ 开放式指向性扬声器" },
      { label: "手势触控交互", value: "镜腿触控区滑动调节音量 (前滑UP/后滑DOWN) ＆ 轻触切歌、播放/暂停、通话接挂" },
      { label: "电池与续航", value: "连续听歌 8 小时超长音乐续航 / 7 天以上超长待机 / 专用磁吸充电" },
      { label: "产品形态", value: "智能音频眼镜 (スマートオーディオグラス) / 解放双手、无缝陪伴的未来智能生活新体验" },
      { label: "固定标签", value: "#FOSMET#E05#スマートグラス#服装#イヤホン" },
    ],
    highlights: [
      "指尖丝滑 4 档电致变色 (4段階調光)：告别眼镜与墨镜频繁更换，室内透明/户外遮阳一秒切换",
      "极简穿搭美学 ✕ TR90 超轻舒适镜架：时尚百搭高颜值单品，IP65 防尘防水，羽量无感佩戴",
      "AI 智能问答 ＆ 实时同传翻译 + ENC 双麦降噪通话 + 8 小时听歌长续航，彻底解放双手",
    ],
  },
  e09: {
    id: "e09",
    brand: "FOSMET",
    model: "E09",
    name: "FOSMET E09",
    japaneseType: "カメラ搭載スマートグラス / AI録画撮影メガネ",
    shortDesc: "40g極軽量 ✕ SONY 800万画素POVカメラ ✕ 透明防蓝光护眼 ✕ 专属物理按键10分录像 ✕ 开放式双扬声器＆AI语音",
    fixedTags: "#FOSMET#E09#スマートグラス#服装#デイリーレコード",
    defaultLanguage: "ja",
    supportedLanguages: ["ja"],
    badge: "AI拍照录像眼镜",
    accentColor: "#38BDF8",
    tiktokFormula: "手持手机拍照/入耳压迫痛点反转 + 40g超轻/SONY 800万画素/透明防蓝光硬核实机 + 物理按键10分POV录像/AI语音对战直给",
    specs: [
      { label: "机身重量与材质", value: "裸机仅 40g 超轻设计 / PC+ABS 轻量高耐久材质镜框与镜腿 / 极致舒适无感佩戴" },
      { label: "镜片光学设计", value: "透明防蓝光护眼镜片 (透明ブルーライトカットレンズ) / 日常办公与出街百搭极简外观" },
      { label: "摄像头与影像", value: "SONY IMX219 800万像素高清摄像头 / 1080P 30fps 视频录制 / 软件电子防抖" },
      { label: "专属物理操控键", value: "单击拍照、双击开始/停止录像 (单次最长10分钟)、三击录音、长按开/关机" },
      { label: "音频与通话", value: "开放式双喇叭 (デュアルスピーカー) ＆ 阵列麦克风 (アレイマイク / 指向性降噪)" },
      { label: "镜腿触控手势", value: "单击播放/暂停/接挂电话、前后滑动调节音量、双击/三击切歌、4击唤醒手机AI助手" },
      { label: "AI智能与互联", value: "Hi Luma APP / 手机端 AI 语音对话助手 (ChatGPT/AI会話) 快速唤醒问答" },
      { label: "状态指示与安全", value: "配备工作指示灯与摄影补光灯，录制状态一目了然" },
      { label: "使用场景", value: "解放双手的 POV 第一人称日常 Vlog、骑行、烹饪、带娃、出游记录、工作与生活无缝衔接" },
      { label: "固定标签", value: "#FOSMET#E09#スマートグラス#服装#デイリーレコード" },
    ],
    highlights: [
      "40g 极轻机身 ✕ PC+ABS 高耐久材质：透明防蓝光镜片，羽量级护眼舒适佩戴，告别沉重压鼻梁",
      "SONY IMX219 800万画素 POV 摄像头：1080P 30fps 软件防抖，专属物理按键一键拍摄与最高10分钟录像",
      "开放式双喇叭 ✕ 阵列麦克风 ✕ 4击唤醒AI助手：免入耳听歌通话，解放双手的次世代随身设备",
    ],
  },
  g58: {
    id: "g58",
    brand: "FOSMET",
    model: "G58",
    name: "FOSMET G58",
    japaneseType: "レディース ファッション スマートウォッチ / Reloj Inteligente Elegante para Mujer",
    shortDesc: "1.27\" 390×390 HD触控屏 ✕ 98%高屏占比 ✕ 女性生理周期管理 ✕ 24/7健康监测 ✕ 120+运动模式 ✕ 蓝牙5.3高清通话 ✕ 米兰尼斯+硅胶双表带",
    fixedTags: "#FOSMET#G58#reloj inteligente#Atuendo#Salud de la mujer",
    defaultLanguage: "es",
    supportedLanguages: ["es", "de"],
    badge: "女性时尚智能手表",
    accentColor: "#EC4899",
    tiktokFormula: "笨重手表/穿搭难痛点反转 + 1.27\" 390x390高清屏/米兰尼斯与硅胶双表带时尚展示 + 女性经期排卵管理/蓝牙通话/120+运动直给",
    specs: [
      { label: "屏幕与显示", value: "1.27 英寸高清触控屏 / 390×390 分辨率 / 约98% 屏占比 / 高硬度玻璃与防指纹涂层" },
      { label: "外观与双表带", value: "轻盈时尚设计，标配 米兰尼斯金属表带 ＆ 亲肤硅胶表带 自由更换" },
      { label: "女性专属健康", value: "女性生理周期管理：经期记录、排卵期/安全期预测、经期提醒及孕期记录" },
      { label: "24/7 全天候健康", value: "全天候心率连续监测、SpO₂血氧饱和度、血压测量、科学睡眠监测(21:30-次日12:00)、压力、情绪与呼吸训练" },
      { label: "运动追踪", value: "120+ 种运动模式（步数、距离、卡路里，涵盖跑步、瑜伽、健身等场景）" },
      { label: "蓝牙高清通话", value: "Bluetooth 5.3 蓝牙通话（腕上直接拨号/接听、内置扬声器、100个常用联系人存储、数字拨号盘）" },
      { label: "语音助手与SOS", value: "双击上按键快速唤醒 AI 语音助手，长按支持一键紧急 SOS 电话" },
      { label: "实用工具生态", value: "实时天气预报、音乐播放控制、手机拍照遥控(晃动/点击拍摄)、查找手机、闹钟、秒表、小游戏" },
      { label: "防水与App互联", value: "IP68 专业级防尘防水 / GloryFit App 深度同步数据与表盘切换" },
      { label: "固定标签(西语)", value: "#FOSMET#G58#reloj inteligente#Atuendo#Salud de la mujer" },
      { label: "固定标签(德语)", value: "#FOSMET#G58#Smartwatch#Outfit#Frauengesundheit" },
    ],
    highlights: [
      "1.27\" 390×390 高清触控屏 (98%屏占比) + 米兰尼斯与硅胶双表带随心切换，百搭任何 OOTD 穿搭",
      "女性专属生理周期与排卵期管理 + 24/7 心率/血氧/深度睡眠监测 + 呼吸减压，全天候贴心守护",
      "Bluetooth 5.3 蓝牙高清通话 (100联系人) + 双击唤醒语音助手 + 120+ 运动模式 + IP68 防水",
    ],
  },
  g2: {
    id: "g2",
    brand: "FOSMET",
    model: "G2",
    name: "FOSMET G2",
    japaneseType: "多機能ヘルスケア＆レディース スマートウォッチ",
    shortDesc: "全天健康监测 ✕ 女性月经周期 ✕ 120+运动模式 ✕ 蓝牙5.3通话 ✕ 语音助手 ✕ IP68防尘防水 ✕ FitCloudPro App",
    fixedTags: "#FOSMET#G2#女性の健康#スマートウォッチ#服装",
    defaultLanguage: "ja",
    supportedLanguages: ["ja"],
    badge: "女性健康全能手表",
    accentColor: "#A855F7",
    tiktokFormula: "女性生理周期/体调痛点反转 + 洗练外观/文字盘着せ替え实机展示 + 120+运动/蓝牙高清通话/FitCloudPro直给",
    specs: [
      { label: "连接与App互联", value: "Bluetooth 5.3 高速低功耗芯片 / FitCloudPro App 深度互联" },
      { label: "女性专属健康管理", value: "月经周期追踪与提醒，科学记录与预测，帮助轻松管理日常健康状态" },
      { label: "全天候健康监测", value: "24/7 连续心率监测、SpO₂ 血氧饱和度、科学睡眠监测（记录深睡/浅睡/总睡眠时间）与呼吸训练" },
      { label: "超丰富运动管理", value: "内置 8+1 种运动模式，并可从 App 额外 112 种运动中选择（合计 120+ 运动，精准记录步数/距离/卡路里）" },
      { label: "智能通信与通话", value: "Bluetooth 高清蓝牙通话（手表直接拨号接听）、联系人同步、来电/SMS/邮件/LINE/App消息通知" },
      { label: "AI智能语音与工具", value: "AI 语音助手、手机音乐播放控制、实时天气与空气质量、查找手机、闹钟、计时器、秒表、计算器" },
      { label: "个性外观与交互", value: "支持自定义及下载更多表盘、多种菜单显示风格、抬腕亮屏 (腕上げ点灯)" },
      { label: "防护等级", value: "IP68 专业级防尘防水（日常洗手、雨天出行、洗车无忧）" },
      { label: "固定标签", value: "#FOSMET#G2#女性の健康#スマートウォッチ#服装" },
    ],
    highlights: [
      "全天健康监测 ＋ 女性生理周期追踪 ＋ FitCloudPro 深度健康分析与呼吸减压，全天候贴心守护",
      "内置 8+1 ＋ 额外 112 种＝120+ 丰富运动模式，精准追踪步数、运动距离与卡路里消耗",
      "Bluetooth 5.3 蓝牙高清通话 ＋ LINE/邮件/SNS消息通知 ＋ 语音助手 ＋ IP68 防水防尘 ＋ 多彩表盘着せ替え",
    ],
  },
  fos10: {
    id: "fos10",
    brand: "FOSMET",
    model: "FOS10",
    name: "FOSMET FOS10",
    japaneseType: "超薄型・軽量ポータブルスマートウォッチ",
    shortDesc: "10.66mm極薄・14.9g超軽量 ✕ 100+文字盤DIY ✕ 女性の健康＆24hバイタル ✕ 100+運動モード ✕ IP68防水 ✕ ポータブル快適装着",
    fixedTags: "#FOSMET#FOS10#女性の健康#スマートウォッチ#ポータブル",
    badge: "便携轻薄智能手表",
    accentColor: "#FB7185",
    tiktokFormula: "手首疲れ/体調痛点反転 + 10.66mm極薄14.9g/100+文字盤DIY実機展示 + 女性健康/睡眠深度/100+運動直給",
    defaultLanguage: "ja",
    supportedLanguages: ["ja"],
    specs: [
      { label: "机身厚度与重量", value: "机身厚度仅 10.66mm、重量约 14.9g，极致轻盈舒适，适合全天候无感佩戴" },
      { label: "个性化表盘DIY", value: "支持 100+ 款精美表盘自由选择，支持通过手机 DIY 自定义表盘、照片和字体颜色" },
      { label: "女性与健康监测", value: "女性健康管理、24小时心率监测、SpO₂ 血氧饱和度监测、呼吸训练" },
      { label: "科学睡眠监测", value: "精准记录睡眠时间、睡眠深度及睡眠周期，App 同步查看详尽健康趋势" },
      { label: "运动管理", value: "支持 100+ 种运动模式，精准记录运动状态、步数、运动距离与消耗卡路里" },
      { label: "智能通信与通知", value: "Bluetooth 5.3 稳定低功耗连接，支持 LINE、Facebook、SMS 等即时来电与消息通知" },
      { label: "系统兼容与防护", value: "IP68 专业级防尘防水，全面兼容 Android 8.0+ / iOS 10.0+" },
      { label: "固定标签", value: "#FOSMET#FOS10#女性の健康#スマートウォッチ#ポータブル" },
    ],
    highlights: [
      "10.66mm 极薄机身 ＋ 约 14.9g 羽量化设计：轻盈贴合手腕，全天候与睡眠佩戴零负担",
      "100+ 款个性化表盘 ＋ 手机 DIY 照片/字体定制：推活、宠物、穿搭随意搭配专属风格",
      "24h 心率/血氧/睡眠周期监测 ＋ 呼吸训练 ＋ 100+ 运动模式 ＋ IP68 防水 ＋ Bluetooth 5.3 通知",
    ],
  },
};

// Highly varied Japanese TikTok formula patterns for FOSMET REC10
interface HookTemplate {
  pattern: (brand: string, model: string, keyword?: string) => string;
  category: AngleCategory;
  angleLabel: string;
  targetAudience: string;
}

export const HOOK_TEMPLATES: HookTemplate[] = [
  // 1. 反常识痛点型 (Pain point / Counter-intuitive)
  {
    pattern: (b, m) => `まだ手書きでメモ取ってるの？${b} ${m}で会議の常識が変わる`,
    category: "pain_point",
    angleLabel: "反常識・脱手書き",
    targetAudience: "新社会人・メモ魔",
  },
  {
    pattern: (b, m) => `ノート取る人ほど仕事が遅い？${b} ${m}が暴く驚きの事実`,
    category: "pain_point",
    angleLabel: "反常識・仕事術",
    targetAudience: "ビジネスマン",
  },
  {
    pattern: (b, m) => `会議の議事録係、今すぐ辞めて！${b} ${m}があれば一瞬で終了`,
    category: "pain_point",
    angleLabel: "議事録解放",
    targetAudience: "若手社員・書記担当",
  },
  {
    pattern: (b, m) => `【絶望】商談メモ取れなくて怒られた人に教えたい${b} ${m}`,
    category: "pain_point",
    angleLabel: "商談トラブル解決",
    targetAudience: "営業職・コンサル",
  },
  {
    pattern: (b, m) => `大事な面談で聞き逃しゼロに！${b} ${m}を持参したら人生変わった`,
    category: "pain_point",
    angleLabel: "聞き逃し防止",
    targetAudience: "就活生・人事・面接官",
  },
  {
    pattern: (b, m) => `手動でメモ取る時代は終了！${b} ${m}で残業とおさらばする裏ワザ`,
    category: "pain_point",
    angleLabel: "残業脱出",
    targetAudience: "残業が多い人",
  },
  {
    pattern: (b, m) => `【後悔】もっと早く買えばよかった…${b} ${m}がチートすぎる件`,
    category: "pain_point",
    angleLabel: "後悔フック",
    targetAudience: "全社会人",
  },
  {
    pattern: (b, m) => `「要点なんだっけ？」を完全撲滅！${b} ${m}が救う毎日の会議`,
    category: "pain_point",
    angleLabel: "物忘れ防止",
    targetAudience: "多忙なリーダー層",
  },
  {
    pattern: (b, m) => `上司の早口な指示についていけない？${b} ${m}で一発解決`,
    category: "pain_point",
    angleLabel: "指示聞き漏らし対策",
    targetAudience: "新人・アシスタント",
  },
  {
    pattern: (b, m) => `講義のノート書きに追われて頭に入らない学生へ送る${b} ${m}`,
    category: "pain_point",
    angleLabel: "学習効率化",
    targetAudience: "大学生・資格受験生",
  },

  // 2. 効率結果前置型 (Front-loaded Efficiency / Zero Overtime)
  {
    pattern: (b, m) => `1時間の会議終了と同時に議事録完成！${b} ${m}が神すぎる`,
    category: "efficiency",
    angleLabel: "即時議事録化",
    targetAudience: "プロジェクトマネージャー",
  },
  {
    pattern: (b, m) => `残業がガチでゼロになった秘密兵器、${b} ${m}の爆速AI要約`,
    category: "efficiency",
    angleLabel: "定時退社",
    targetAudience: "オフィスワーカー",
  },
  {
    pattern: (b, m) => `会議終わった瞬間にマインドマップ出力できる${b} ${m}が最強`,
    category: "efficiency",
    angleLabel: "マインドマップ生成",
    targetAudience: "企画職・クリエイター",
  },
  {
    pattern: (b, m) => `タイピング不要！${b} ${m}で音声から爆速ドキュメント化`,
    category: "efficiency",
    angleLabel: "音声文字起こし",
    targetAudience: "ライター・取材記者",
  },
  {
    pattern: (b, m) => `定時退社を叶えるデスクの相棒！${b} ${m}の効率化がエグい`,
    category: "efficiency",
    angleLabel: "デスク効率化",
    targetAudience: "全社員",
  },
  {
    pattern: (b, m) => `商談まとめが3秒で終わる！${b} ${m}のAI要約スピードに驚愕`,
    category: "efficiency",
    angleLabel: "3秒まとめ",
    targetAudience: "トップセールス",
  },
  {
    pattern: (b, m) => `【時短革命】2時間の長丁場インタビューも${b} ${m}で即テキスト化`,
    category: "efficiency",
    angleLabel: "インタビュー効率化",
    targetAudience: "メディア関係者・広報",
  },
  {
    pattern: (b, m) => `マラソン会議を瞬時に3行まとめにする${b} ${m}の神業`,
    category: "efficiency",
    angleLabel: "3行要約",
    targetAudience: "経営幹部・リーダー",
  },
  {
    pattern: (b, m) => `仕事効率が10倍に跳ね上がる！${b} ${m}を導入した結果がヤバい`,
    category: "efficiency",
    angleLabel: "10倍効率",
    targetAudience: "効率化マニア",
  },
  {
    pattern: (b, m) => `ブレスト会議の散らかったアイデアを${b} ${m}で一発整理！`,
    category: "efficiency",
    angleLabel: "アイデア整理",
    targetAudience: "マーケター・デザイナー",
  },

  // 3. 名刺サイズ・ハードウェア型 (Business card form factor / Hardware showcase)
  {
    pattern: (b, m) => `名刺入れに入る極薄AI！${b} ${m}がデスクで大活躍する理由`,
    category: "gadget",
    angleLabel: "極薄名刺サイズ",
    targetAudience: "ガジェット好き",
  },
  {
    pattern: (b, m) => `スマホの裏にペタッと磁吸！${b} ${m}の携帯性が便利すぎる`,
    category: "gadget",
    angleLabel: "MagSafe磁気吸着",
    targetAudience: "スマホヘビーユーザー",
  },
  {
    pattern: (b, m) => `堂々と机に置ける名刺サイズ！${b} ${m}の圧倒的ミニマル感`,
    category: "gadget",
    angleLabel: "ミニマル卓上デザイン",
    targetAudience: "デスク環境こだわり派",
  },
  {
    pattern: (b, m) => `薄さ極限のアルミボディ！${b} ${m}の高級感が半端ない`,
    category: "gadget",
    angleLabel: "アルミ合金ボディ",
    targetAudience: "デザイン重視層",
  },
  {
    pattern: (b, m) => `ワンタッチ即録音！${b} ${m}のシンプル操作が心地よすぎる`,
    category: "gadget",
    angleLabel: "ワンタッチ録音",
    targetAudience: "シニア・機械苦手な人",
  },
  {
    pattern: (b, m) => `財布や手帳にスッと収まる！${b} ${m}の薄さにみんな二度見`,
    category: "gadget",
    angleLabel: "超薄型携帯性",
    targetAudience: "ミニマリスト",
  },
  {
    pattern: (b, m) => `【実機レビュー】名刺とほぼ同サイズの${b} ${m}を1週間使ってみた`,
    category: "gadget",
    angleLabel: "実機検証",
    targetAudience: "購入検討者",
  },
  {
    pattern: (b, m) => `スマホと一体化する快感！${b} ${m}のマグネット磁吸が革命的`,
    category: "gadget",
    angleLabel: "スマホ一体化",
    targetAudience: "外回り営業",
  },
  {
    pattern: (b, m) => `OLED画面付きで状態一目瞭然！${b} ${m}の洗練されたUI`,
    category: "gadget",
    angleLabel: "ディスプレイ搭載",
    targetAudience: "テック好き",
  },

  // 4. ChatGPT×Gemini AI機能型 (Dual AI Power & Mind Map)
  {
    pattern: (b, m) => `ChatGPTとGemini両方使える${b} ${m}が最強AIレコーダーだった`,
    category: "ai_power",
    angleLabel: "双AIモデル連携",
    targetAudience: "AIツール活用派",
  },
  {
    pattern: (b, m) => `録音するだけでChatGPTが議事録に要約！${b} ${m}の近未来感`,
    category: "ai_power",
    angleLabel: "ChatGPT自動要約",
    targetAudience: "ChatGPTユーザー",
  },
  {
    pattern: (b, m) => `音声からマインドマップを自動生成する${b} ${m}のAI力が異次元`,
    category: "ai_power",
    angleLabel: "マインドマップ自動化",
    targetAudience: "思考整理したい人",
  },
  {
    pattern: (b, m) => `31種類の業界テンプレート搭載！${b} ${m}でどんな会議も完璧対応`,
    category: "ai_power",
    angleLabel: "31種専門テンプレ",
    targetAudience: "士業・医療・営業・講師",
  },
  {
    pattern: (b, m) => `多言語リアルタイム高精度文字起こし！${b} ${m}のグローバル実力`,
    category: "ai_power",
    angleLabel: "多言語翻訳・文字起こし",
    targetAudience: "海外ビジネス・語学学習者",
  },
  {
    pattern: (b, m) => `双AI大モデルの降維打撃！${b} ${m}の文字起こし精度がレベチ`,
    category: "ai_power",
    angleLabel: "降維打撃AI精度",
    targetAudience: "ITエンジニア・役員",
  },
  {
    pattern: (b, m) => `音声データを即Word・PDF・Markdownへ！${b} ${m}のエクスポート力`,
    category: "ai_power",
    angleLabel: "多形式エクスポート",
    targetAudience: "事務・総務・ドキュメント作成者",
  },
  {
    pattern: (b, m) => `雑音を消して声だけクリア抽出！${b} ${m}のAIノイズリダクション`,
    category: "ai_power",
    angleLabel: "AIノイズキャンセリング",
    targetAudience: "カフェ作業派・出張族",
  },

  // 5. 暴露・裏技・社外秘型 (Secret Hack / Expose / Curiosity)
  {
    pattern: (b, m) => `【社外秘】仕事がデキる上司の机に置いてある${b} ${m}の正体`,
    category: "secret_hack",
    angleLabel: "社外秘暴露",
    targetAudience: "部下・若手社員",
  },
  {
    pattern: (b, m) => `会議で絶対に怒られない人の秘密兵器、${b} ${m}をこっそり公開`,
    category: "secret_hack",
    angleLabel: "秘密兵器",
    targetAudience: "怒られがちな社員",
  },
  {
    pattern: (b, m) => `トップ営業マンが商談で必ずポッケに忍ばせる${b} ${m}の威力`,
    category: "secret_hack",
    angleLabel: "トップ営業の裏技",
    targetAudience: "営業マン",
  },
  {
    pattern: (b, m) => `【暴露】定時で帰るあの人が隠し持つ${b} ${m}がズルすぎる`,
    category: "secret_hack",
    angleLabel: "定時退社の秘密",
    targetAudience: "同僚・後輩",
  },
  {
    pattern: (b, m) => `社内評価が爆上がりした理由…実は${b} ${m}を使ってただけ`,
    category: "secret_hack",
    angleLabel: "評価爆上げハック",
    targetAudience: "昇進を目指す社会人",
  },
  {
    pattern: (b, m) => `【裏技】1時間の商談メモが30秒で終わる${b} ${m}活用法`,
    category: "secret_hack",
    angleLabel: "30秒商談術",
    targetAudience: "コンサル・士業",
  },
  {
    pattern: (b, m) => `知らなきゃ損する最新AIガジェット！${b} ${m}がヤバい`,
    category: "secret_hack",
    angleLabel: "知らなきゃ損",
    targetAudience: "トレンドに敏感な層",
  },

  // 6. 質問・疑問・問いかけ型 (Question & Interaction hooks)
  {
    pattern: (b, m) => `この名刺みたいな銀色の板、何かわかる？最新${b} ${m}です`,
    category: "question",
    angleLabel: "モノ当てクイズ",
    targetAudience: "一般視聴者",
  },
  {
    pattern: (b, m) => `会議でこれ使ってる人、何者？${b} ${m}の正体が凄すぎた`,
    category: "question",
    angleLabel: "何者フック",
    targetAudience: "同僚・上司",
  },
  {
    pattern: (b, m) => `なぜ新入社員が全員${b} ${m}を欲しがるのか？理由を解説`,
    category: "question",
    angleLabel: "なぜ人気？",
    targetAudience: "新社会人・就活生",
  },
  {
    pattern: (b, m) => `スマホの裏についてるコレ何？実は最新AIの${b} ${m}`,
    category: "question",
    angleLabel: "これ何？フック",
    targetAudience: "スマホユーザー",
  },
  {
    pattern: (b, m) => `まだ議事録で消耗してるの？${b} ${m}を使わない理由ある？`,
    category: "question",
    angleLabel: "問題提起",
    targetAudience: "残業多めビジネスマン",
  },
  {
    pattern: (b, m) => `【質問】あなたの会社、会議の議事録どうしてる？${b} ${m}なら即解決`,
    category: "question",
    angleLabel: "コメント誘導",
    targetAudience: "TikTokアクティブ層",
  },

  // 7. スペック・安心感・ハードウェア持続力 (35h battery & 64GB storage specs)
  {
    pattern: (b, m) => `35時間ぶっ通し録音可能！${b} ${m}のロングバッテリーが神`,
    category: "spec_power",
    angleLabel: "35h連続駆動",
    targetAudience: "長時間の取材・出張者",
  },
  {
    pattern: (b, m) => `待機66日！充電忘れ常習犯でも安心な${b} ${m}のタフさ`,
    category: "spec_power",
    angleLabel: "66日スタンバイ",
    targetAudience: "忘れっぽい人",
  },
  {
    pattern: (b, m) => `64GB大容量メモリ内蔵！${b} ${m}なら容量不足の心配ゼロ`,
    category: "spec_power",
    angleLabel: "64GB大容量",
    targetAudience: "音声データ多用派",
  },
  {
    pattern: (b, m) => `デュアルマイクで遠くの声もクリア！${b} ${m}の驚異の集音力`,
    category: "spec_power",
    angleLabel: "デュアル集音マイク",
    targetAudience: "大会議室・セミナー受講者",
  },
  {
    pattern: (b, m) => `Bluetooth即連携でスマホで即確認！${b} ${m}のスムーズ連携`,
    category: "spec_power",
    angleLabel: "Bluetooth5.3高速通信",
    targetAudience: "スマホ管理派",
  },
];

// Dynamic modifier pool for generating limitless unique combinations
const PREFIX_EMOJIS = ["【衝撃】", "【暴露】", "【神コスパ】", "【裏技】", "【必見】", "【保存版】", "【検証】", "【革命】", "【残業ゼロ】", "【超時短】", "【速報】", "【チート級】"];
const SUFFIX_CTA = ["", "が凄すぎた", "使ってみた結果", "の威力がヤバい", "を徹底検証", "がガチで有能", "で人生変わる", "の進化が止まらない"];

export const PRODUCT_CHEATSHEET = {
  brand: "FOSMET",
  model: "REC10",
  fullName: "FOSMET REC10 AI录音卡片 (AI Voice Recorder)",
  slogan: "伪装成极简名片的桌面效率引擎",
  tiktokFormula: "反常识痛点钩子 + 无剧情硬核展示 + 效率结果前置",
  specs: [
    { label: "外观与材质", value: "超薄名片尺寸・航空级铝合金高级质感" },
    { label: "使用形态", value: "手机背面MagSafe磁吸 ＆ 桌面光明正大极简平放" },
    { label: "电池与续航", value: "400mAh大电池 / 35小时连续录音 / 超长待机66天" },
    { label: "存储容量", value: "64GB 超大机身内置存储" },
    { label: "双AI大模型", value: "ChatGPT ＆ Gemini 双AI模型协同驱动 (DOWAY App)" },
    { label: "核心AI能力", value: "实时高精度转写・一秒生成精炼会议纪要・自动输出思维导图" },
    { label: "行业专属模板", value: "商务谈判/日常会议/课堂讲座/采访/医疗/法律等31种场景模板" },
    { label: "多格式导出", value: "TXT, DOCX, PDF, Markdown (思维导图), MP3, WAV" },
    { label: "5大固定标签", value: "#FOSMET#REC10#AIレコーダー#ChatGPT#プロモーションの仕事" },
  ],
  videoHooksAdvice: [
    "开头0~3秒用「还在手写做笔记？」「开会最烦写纪要」等反常识痛点切入，锁住完播率",
    "展示名片级极薄机身直接吸附手机或优雅平放桌面的无剧情硬核实机镜头",
    "手机画面瞬间将长段录音转化为清晰思维导图和3行要约，直给效率结果",
  ],
};

// Algorithmic 50 titles generator guaranteeing 100% uniqueness and strictly formatted outputs
export function generateAlgorithmicTitles(
  productId: ProductId = "rec10",
  category: AngleCategory = "all_mixed",
  customKeyword = "",
  customTags?: string,
  batchSeed = Date.now(),
  language: TargetLanguage = "es"
): GeneratedTitle[] {
  if (productId === "qs40") {
    return generateQs40AlgorithmicTitles(category, customKeyword, customTags);
  }
  if (productId === "t20") {
    return generateT20AlgorithmicTitles(category, customKeyword, customTags);
  }
  if (productId === "kt80") {
    return generateKt80AlgorithmicTitles(category, customKeyword, customTags, language);
  }
  if (productId === "e12") {
    return generateE12AlgorithmicTitles(category, customKeyword, customTags);
  }
  if (productId === "e05") {
    return generateE05AlgorithmicTitles(category, customKeyword, customTags, batchSeed);
  }
  if (productId === "e09") {
    return generateE09AlgorithmicTitles(category, customKeyword, customTags, String(batchSeed));
  }
  if (productId === "g58") {
    return generateG58AlgorithmicTitles("FOSMET", "G58", category, customKeyword, customTags, language);
  }
  if (productId === "g2") {
    return generateG2AlgorithmicTitles(category, customKeyword, customTags, batchSeed);
  }
  if (productId === "fos10") {
    return generateFos10AlgorithmicTitles(category, customKeyword, customTags, batchSeed);
  }

  const brand = "FOSMET";
  const model = "REC10";
  const activeTags = (customTags && customTags.trim()) ? customTags.trim() : FIXED_TAGS;

  let eligiblePool = HOOK_TEMPLATES;
  if (category !== "all_mixed") {
    eligiblePool = HOOK_TEMPLATES.filter((t) => t.category === category);
    if (eligiblePool.length === 0) {
      eligiblePool = HOOK_TEMPLATES;
    }
  }

  // Shuffle pool with deterministic pseudo-randomness based on seed
  const shuffled = [...eligiblePool].sort(() => 0.5 - Math.random());
  const allTemplates = [...HOOK_TEMPLATES].sort(() => 0.5 - Math.random());

  const generatedList: GeneratedTitle[] = [];
  const usedHooks = new Set<string>();

  // Helper to construct a single title
  const makeTitle = (template: HookTemplate, index: number): GeneratedTitle => {
    let hookText = template.pattern(brand, model, customKeyword);

    // Apply varied style modifiers based on index to ensure fresh flavor
    if (index % 5 === 1) {
      const prefix = PREFIX_EMOJIS[Math.floor(Math.random() * PREFIX_EMOJIS.length)];
      if (!hookText.startsWith("【")) {
        hookText = `${prefix}${hookText}`;
      }
    } else if (index % 7 === 2 && customKeyword) {
      hookText = `${hookText}（${customKeyword}にも対応）`;
    }

    // Ensure brand and model are present
    if (!hookText.includes("FOSMET") || !hookText.includes("REC10")) {
      if (!hookText.includes("FOSMET") && !hookText.includes("REC10")) {
        hookText = `【FOSMET REC10】${hookText}`;
      } else if (!hookText.includes("FOSMET")) {
        hookText = hookText.replace("REC10", "FOSMET REC10");
      } else if (!hookText.includes("REC10")) {
        hookText = hookText.replace("FOSMET", "FOSMET REC10");
      }
    }

    const fullTitle = `${hookText} ${activeTags}`;

    return {
      id: `gen-${batchSeed}-${index + 1}`,
      productId: "rec10",
      title: fullTitle,
      hook: hookText,
      tags: activeTags,
      angle: template.angleLabel,
      angleCategory: template.category,
      targetAudience: template.targetAudience,
      charCount: fullTitle.length,
      hookCharCount: hookText.length,
      isFavorite: false,
      createdAt: new Date().toISOString(),
    };
  };

  let templateIndex = 0;
  while (generatedList.length < 50) {
    let t: HookTemplate;
    if (category === "all_mixed") {
      t = allTemplates[templateIndex % allTemplates.length];
    } else {
      if (templateIndex < shuffled.length) {
        t = shuffled[templateIndex];
      } else {
        // Fallback to all templates to reach 50 while keeping flavor
        t = allTemplates[templateIndex % allTemplates.length];
      }
    }

    const item = makeTitle(t, generatedList.length);
    if (!usedHooks.has(item.hook)) {
      usedHooks.add(item.hook);
      generatedList.push(item);
    }
    templateIndex++;

    // Safety break to prevent infinite loop
    if (templateIndex > 300) {
      // Add dynamic variation
      const fallbackHook = `【爆款${generatedList.length + 1}】仕事効率10倍のFOSMET REC10が名刺サイズでChatGPT搭載 ${activeTags}`;
      generatedList.push({
        id: `gen-${batchSeed}-${generatedList.length + 1}`,
        productId: "rec10",
        title: fallbackHook,
        hook: fallbackHook.replace(` ${activeTags}`, ""),
        tags: activeTags,
        angle: "効率爆上げ",
        angleCategory: "efficiency",
        targetAudience: "全社会人",
        charCount: fallbackHook.length,
        hookCharCount: fallbackHook.replace(` ${activeTags}`, "").length,
        isFavorite: false,
        createdAt: new Date().toISOString(),
      });
    }
  }

  return generatedList;
}
