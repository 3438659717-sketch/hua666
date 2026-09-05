import { ProductId, AngleCategory } from "../types";

export interface InspirationCard {
  id: string;
  productId: ProductId;
  productName: string;
  category: AngleCategory;
  theme: string;
  hookIdea: string;
  targetPainPoint: string;
  sceneDescription: string;
  sampleCopy: string;
  keywords: string;
}

export const INSPIRATION_CARDS_POOL: InspirationCard[] = [
  {
    id: "gacha_rec10_1",
    productId: "rec10",
    productName: "REC10 录音翻译手表",
    category: "efficiency",
    theme: "跨国会议记录神器",
    hookIdea: "【外国人との会議でもう焦らない】",
    targetPainPoint: "跨国会议或上课听不懂英语/日语，手忙脚乱记笔记错失关键信息",
    sceneDescription: "手腕轻轻一按，现场对话实时转文字并生成纪要，下属看呆了",
    sampleCopy: "【議事録は手首で作る時代】外国人とのミーティングでメモが追いつかない人へ！FOSMET REC10ならワンタップで高精度音声録音＆即時テキスト化。もう聞き逃しの不安ゼロ！ #REC10 #FOSMET #スマートウォッチ #仕事効率化",
    keywords: "外国人 会議 議事録 録音 文字起こし",
  },
  {
    id: "gacha_kt80_1",
    productId: "kt80",
    productName: "KT80 硬核战术手表",
    category: "pain_point",
    theme: "800mAh 户外断电救星",
    hookIdea: "【充電器を持たずにキャンプに行く勇気、ある？】",
    targetPainPoint: "户外徒步 3 天手表电量告急，失去 GPS 轨迹导航和 SOS 警报",
    sceneDescription: "暴雨中在泥泞山地夜跑，超亮手电筒与 800mAh 超大电池连续工作 30 天",
    sampleCopy: "【30日無充電の怪物】山奥でスマホが切れても手首に800mAhの要塞バッテリー！FOSMET KT80はLED懐中電灯＆気圧計完備で過酷なアウトドアを完全制覇。 #KT80 #FOSMET #アウトドア #キャンプギア",
    keywords: "800mAh 懐中電灯 30日バッテリー サバイバル",
  },
  {
    id: "gacha_fos10_1",
    productId: "fos10",
    productName: "FOS10 极轻女性时尚表",
    category: "gadget",
    theme: "14.9g 戴了像没戴的羽量体验",
    hookIdea: "【重い時計で肩こりしていませんか？】",
    targetPainPoint: "金属手表厚重压手腕，打字上班或睡觉佩戴勒得手腕酸痛发红",
    sceneDescription: "对比常规 60g 笨重手表，FOS10 仅 14.9g 戴在纤细手腕上如同一片轻羽",
    sampleCopy: "【14.9g極薄の奇跡】着けているのを忘れるほど軽い！FOSMET FOS10は睡眠中も手首の圧迫感ゼロ。エレガントなスクエア文字盤で毎日のコーデも格上げ。 #FOS10 #FOSMET #レディースウォッチ #手首ケア",
    keywords: "14.9g 極軽 睡眠記録 レディース スクエア",
  },
  {
    id: "gacha_qs40_1",
    productId: "qs40",
    productName: "QS40 AMOLED AI智控表",
    category: "ai_power",
    theme: "手腕上的 ChatGPT 私人助理",
    hookIdea: "【スマホを取り出さずにAIに聞く日常】",
    targetPainPoint: "做饭或开车时双手被占用，想快速查菜谱、发邮件或整理代办事项",
    sceneDescription: "抬起手腕对表盘低语，ChatGPT 秒速回复最佳旅游攻略和商务回复模版",
    sampleCopy: "【手首にAIを宿す】料理中やランニング中、スマホ不要でChatGPTが瞬時に答えてくれる！FOSMET QS40の高精細AMOLEDディスプレイで文字も驚くほど鮮明。 #QS40 #FOSMET #ChatGPT #AIスマートウォッチ",
    keywords: "ChatGPT AIアシスタント AMOLED 音声操作",
  },
  {
    id: "gacha_e05_1",
    productId: "e05",
    productName: "E05 电致变色智能眼镜",
    category: "secret_hack",
    theme: "4档光速调光近未来黑科技",
    hookIdea: "【サングラスと普通のメガネ、まだ2本持ち歩いてるの？】",
    targetPainPoint: "从烈日户外走进室内商场，需要频繁摘换墨镜，麻烦又容易弄丢",
    sceneDescription: "轻轻触碰镜腿，镜片在 0.1 秒内从透明变为深色遮阳墨镜，引来周围惊叹",
    sampleCopy: "【レンズが自動変色する近未来】室内ではクリア、屋外の日差しでは瞬時にサングラスへ！FOSMET E05なら4段階の電子調光で常に最適な視界をキープ。開放型スピーカーで音楽も最高！ #E05 #FOSMET #スマートグラス #ガジェット好き",
    keywords: "電子調光 4段階変色 スマートグラス UVカット",
  },
  {
    id: "gacha_e09_1",
    productId: "e09",
    productName: "E09 POV 4K录像智能眼镜",
    category: "spec_power",
    theme: "双手解放 第一视角沉浸记录",
    hookIdea: "【両手を塞がずに最高の瞬間をPOV撮影】",
    targetPainPoint: "骑行、钓鱼、烹饪或带娃时手持手机拍摄不仅危险还无法还原第一视角",
    sceneDescription: "佩戴普通黑框眼镜形态的 E09，索尼 800 万镜头一键捕捉所见即所得的极清画面",
    sampleCopy: "【見たままの世界を4K記録】バイクツーリングも料理も子供とのお出かけも！FOSMET E09のSONY 8MPカメラならワンタッチでPOV動画撮影。スマホ構え不要の自由を手に入れよう。 #E09 #FOSMET #POV撮影 #アクションカメラ",
    keywords: "SONY 8MP POV撮影 手ぶら撮影 ツーリング",
  },
  {
    id: "gacha_t20_1",
    productId: "t20",
    productName: "T20 独立GPS硬核跑表",
    category: "pain_point",
    theme: "不带手机也能精准绘制跑步轨迹",
    hookIdea: "【スマホを置いて走り出す開放感、知ってる？】",
    targetPainPoint: "跑步带厚重手机口袋晃来晃去极度影响配速和呼吸节奏",
    sceneDescription: "独立五星 GPS 定位与气压高度计，跑步结束后同步生成绚丽 3D 轨迹图",
    sampleCopy: "【脱・重たいスマホラン】手首のFOSMET T20だけでGPS軌跡も心拍数も完全記録！5ATM防水だから突然の豪雨も安心。身軽に走る爽快感を体感して！ #T20 #FOSMET #ランニング #マラソンギア",
    keywords: "GPS内蔵 5ATM防水 マラソン 軌跡記録",
  },
  {
    id: "gacha_g58_1",
    productId: "g58",
    productName: "G58 奢华玫瑰金时尚表",
    category: "gadget",
    theme: "千元质感百元价格的穿搭顶流",
    hookIdea: "【高級ブランドに見えて実は高機能スマートウォッチ？】",
    targetPainPoint: "常规智能手表塑料感重，搭配职业装或晚礼服显得突兀掉档次",
    sceneDescription: "精工雕刻钻石表圈与米兰尼斯玫瑰金钢带，抬腕亮屏瞬间展现健康心率监测",
    sampleCopy: "【アクセ感覚で身につける】上品なローズゴールドと輝くベゼルで女子力UP！FOSMET G58は生理周期管理も通知もバッチリ対応。自分へのご褒美やプレゼントにも最適！ #G58 #FOSMET #大人女子 #オフィスカジュアル",
    keywords: "ローズゴールド レディース ジュエリー 生理周期",
  },
  {
    id: "gacha_t40_1",
    productId: "t40",
    productName: "FOSMET T40 4G儿童安全手表",
    category: "pain_point",
    theme: "放学接娃与独立出行的安全守护神器",
    hookIdea: "【¿Tu hijo sale solo y te da pánico no saber dónde está?】",
    targetPainPoint: "担心孩子路上走失或遭遇意外，给手机又怕沉迷网络和游戏",
    sceneDescription: "实时 GPS+LBS+WiFi 三重定位在地图上清晰显示孩子动态轨迹，一键 4G 高清双向视频通话面对面报平安",
    sampleCopy: "【Tranquilidad Total para Padres】¡No le compres un móvil a tu hijo! Con FOSMET T40 tienes videollamadas 4G, botón SOS inmediato y triple localización GPS sin distracciones. #FOSMET #T40 #españa #Niños #relojinteligente",
    keywords: "4G videollamada GPS SOS ModoClase IP68 Niños",
  },
  {
    id: "gacha_t40_2",
    productId: "t40",
    productName: "FOSMET T40 4G儿童安全手表",
    category: "gadget",
    theme: "课堂专注免打扰与爱的奖励习惯养成",
    hookIdea: "【Der Geheimtipp für stressfreie Hausaufgaben und sicheren Schulweg】",
    targetPainPoint: "上课玩手表分心被老师没收，回家磨蹭不写作业不做家务",
    sceneDescription: "课堂模式上课时间自动锁闭通信与网络，独家「爱的奖励」积分体系激励孩子主动完成作业与家务",
    sampleCopy: "【Volle Konzentration im Unterricht】FOSMET T40 schaltet im Schulmodus automatisch stumm! Das liebevolle Belohnungssystem motiviert bei Hausaufgaben & Pflichten. #FOSMET #T40 #Kinder #Smartwatch #Kindersicherheit",
    keywords: "Schulmodus Belohnungssystem IP68 4G-Videoanruf Kinderuhr",
  },
];

export function getRandomInspiration(productId?: ProductId): InspirationCard {
  let filtered = INSPIRATION_CARDS_POOL;
  if (productId) {
    const matched = INSPIRATION_CARDS_POOL.filter(c => c.productId === productId);
    if (matched.length > 0) filtered = matched;
  }
  const randomIndex = Math.floor(Math.random() * filtered.length);
  return filtered[randomIndex];
}
