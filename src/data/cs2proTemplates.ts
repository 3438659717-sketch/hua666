import { AngleCategory, GeneratedTitle, TargetLanguage } from "../types";

export const CS2PRO_SPANISH_TAGS =
  "#FOSMET #CS2PRO #reloj inteligente #ropa inteligente #Atuendo";
export const CS2PRO_GERMAN_TAGS =
  "#FOSMET #CS2PRO #Smartwatch #Outfit #Frauengesundheit";
export const CS2PRO_FRENCH_TAGS =
  "#FOSMET #CS2PRO #montreconnectee #tenue #sante";
export const CS2PRO_ITALIAN_TAGS =
  "#FOSMET #CS2PRO #smartwatch #outfit #salutedonna";

export const CS2PRO_FIXED_TAGS = CS2PRO_SPANISH_TAGS;

interface Cs2proHookTemplate {
  pattern: (brand: string, model: string, keyword?: string) => string;
  patternZh: (brand: string, model: string, keyword?: string) => string;
  category: AngleCategory;
  angleLabel: string;
  targetAudience: string;
}

// =========================================================================
// 🇪🇸 SPANISH (ES) TEMPLATES — FOSMET CS2PRO
// =========================================================================
const CS2PRO_ES_TEMPLATES: Cs2proHookTemplate[] = [
  // pain_point
  {
    pattern: (b, m) => `¿Cansada de relojes toscos que arruinan tu outfit? ${b} ${m} incluye correa metálica y de silicona para pasar de la oficina al gym`,
    patternZh: (b, m) => `受够了笨重丑陋不搭衣服的手表？${b} ${m} 标配金属+硅胶双表带，从职场通勤到健身房无缝切换`,
    category: "pain_point",
    angleLabel: "痛点反转",
    targetAudience: "西语时尚穿搭女性",
  },
  {
    pattern: (b, m) => `¿Tu pantalla se llena de huellas y no se ve al sol? El AMOLED de 1.85" con capa antihuellas del ${b} ${m} brilla impecable todo el día`,
    patternZh: (b, m) => `屏幕总是沾满指纹且阳光下看不清？${b} ${m} 1.85英寸防指纹涂层AMOLED高清大屏全天候通透如新`,
    category: "pain_point",
    angleLabel: "痛点反转",
    targetAudience: "注重屏显质感的西语用户",
  },
  {
    pattern: (b, m) => `¿Te quitas el reloj para nadar o ducharte por miedo a dañarlo? ${b} ${m} tiene resistencia real 5 ATM al agua`,
    patternZh: (b, m) => `游泳洗澡总要摘表怕进水？${b} ${m} 拥有真正的5 ATM级专业防水，畅游淋浴毫无压力`,
    category: "pain_point",
    angleLabel: "痛点反转",
    targetAudience: "运动与游泳爱好者",
  },
  {
    pattern: (b, m) => `¿Siempre te despiertas cansada o te olvidas de tu ciclo? ${b} ${m} analiza 4 fases del sueño en GloryFit y predice tu periodo`,
    patternZh: (b, m) => `早上醒来总感疲惫或忘记录经期？${b} ${m} 支持GloryFit四阶段睡眠分析与女性生理周期精准预测`,
    category: "pain_point",
    angleLabel: "痛点反转",
    targetAudience: "关注睡眠与生理期的女性",
  },

  // gadget
  {
    pattern: (b, m) => `Una joya inteligente en tu muñeca: pantalla AMOLED 1.85" + 423+ esferas DIY + doble correa metálica y silicona en el ${b} ${m}`,
    patternZh: (b, m) => `腕间轻奢科技首饰：${b} ${m} 集1.85英寸AMOLED大屏、423+款DIY表盘与金属+硅胶双表带于一身`,
    category: "gadget",
    angleLabel: "穿搭美学",
    targetAudience: "OOTD与轻奢配饰控",
  },
  {
    pattern: (b, m) => `Cambia de look en segundos sin herramientas: correa metálica elegante para cenas y silicona suave para entrenar con ${b} ${m}`,
    patternZh: (b, m) => `无需工具几秒切换穿搭风格：${b} ${m} 晚宴戴金属链带、健身换亲肤硅胶，一表双面全场景拿捏`,
    category: "gadget",
    angleLabel: "双表带穿搭",
    targetAudience: "都市白领与时尚达人",
  },
  {
    pattern: (b, m) => `Más de 423 esferas personalizables y fotos DIY en una pantalla AMOLED 1.85" antihuellas: así luce el nuevo ${b} ${m}`,
    patternZh: (b, m) => `423+款海量表盘与照片DIY自由定制，跃然呈现于 ${b} ${m} 1.85英寸防指纹AMOLED炫彩大屏`,
    category: "gadget",
    angleLabel: "个性DIY表盘",
    targetAudience: "追求个性化的年轻群体",
  },

  // ai_power
  {
    pattern: (b, m) => `Tu bienestar 24h en la muñeca: ${b} ${m} mide pulso, oxígeno SpO₂, estrés, emociones y predice tu ciclo menstrual`,
    patternZh: (b, m) => `腕上24小时贴心健康管家：${b} ${m} 全天候监测心率、血氧、压力、情绪并智能预测女性生理周期`,
    category: "ai_power",
    angleLabel: "全维健康监测",
    targetAudience: "注重自我关怀的现代女性",
  },
  {
    pattern: (b, m) => `¿Cómo duermes de verdad? Conéctalo a GloryFit y descubre el análisis de sueño en 4 fases del ${b} ${m}`,
    patternZh: (b, m) => `你昨晚真的睡好了吗？连接GloryFit App，用 ${b} ${m} 解锁科学精准的四阶段深度睡眠分析`,
    category: "ai_power",
    angleLabel: "四阶段睡眠",
    targetAudience: "熬夜职场与养生人群",
  },
  {
    pattern: (b, m) => `No solo mide pasos: ${b} ${m} detecta tus niveles de estrés y emociones 24/7 para recordarte cuándo respirar y cuidarte`,
    patternZh: (b, m) => `不止记录步数：${b} ${m} 24小时追踪你的压力与情绪波动，贴心守护你的身心平衡`,
    category: "ai_power",
    angleLabel: "情绪与压力",
    targetAudience: "高压上班族与学生党",
  },

  // efficiency
  {
    pattern: (b, m) => `Atiende llamadas Bluetooth 5.3 y lee tus redes sociales desde la muñeca sin sacar el móvil gracias a ${b} ${m}`,
    patternZh: (b, m) => `无需从包里翻找手机，${b} ${m} 支持蓝牙5.3高清通话与社交消息抬腕即看，效率拉满`,
    category: "efficiency",
    angleLabel: "蓝牙5.3通话",
    targetAudience: "忙碌通勤与多任务人群",
  },
  {
    pattern: (b, m) => `Más de 113 modos deportivos + resistencia al agua 5 ATM: entrena yoga, running o natación al máximo con ${b} ${m}`,
    patternZh: (b, m) => `内置113+种专业运动模式搭配5 ATM级游泳防水：瑜伽、跑步、泳池畅游，${b} ${m} 全程精准记录`,
    category: "efficiency",
    angleLabel: "113+运动模式",
    targetAudience: "健身与户外运动达人",
  },
  {
    pattern: (b, m) => `Compatible con Android 4.4+ e iOS 9.0+ en segundos: sincroniza llamadas, mensajes y GloryFit sin complicaciones con ${b} ${m}`,
    patternZh: (b, m) => `秒速配对Android 4.4+与iOS 9.0+全平台手机，${b} ${m} 畅享蓝牙通话、社交通知与GloryFit健康同步`,
    category: "efficiency",
    angleLabel: "跨平台无缝互联",
    targetAudience: "安卓与苹果手机用户",
  },

  // secret_hack
  {
    pattern: (b, m) => `El truco de moda en España para elevar cualquier atuendo: ${b} ${m} parece un reloj de lujo pero es tu entrenador y asistente 24h`,
    patternZh: (b, m) => `西班牙时尚博主都在用的穿搭小心机：${b} ${m} 外观宛如轻奢珠宝表，内藏全天候健康与运动黑科技`,
    category: "secret_hack",
    angleLabel: "轻奢平替秘诀",
    targetAudience: "精明高颜值购物达人",
  },
  {
    pattern: (b, m) => `Por qué tantas chicas están cambiando su reloj clásico por el ${b} ${m}: AMOLED 1.85", doble correa y batería de 300mAh`,
    patternZh: (b, m) => `为什么越来越多女生把传统手表换成 ${b} ${m}？1.85英寸AMOLED屏、金属+硅胶双表带与300mAh强劲续航太香了`,
    category: "secret_hack",
    angleLabel: "种草安利",
    targetAudience: "TikTok Shop 女性买家",
  },

  // spec_power
  {
    pattern: (b, m) => `Ficha técnica imbatible: AMOLED 1.85" antihuellas, 5 ATM, 113+ deportes, BT 5.3 y batería 300mAh en el nuevo ${b} ${m}`,
    patternZh: (b, m) => `全能越级硬核参数：1.85英寸防指纹AMOLED、5 ATM防水、113+运动、蓝牙5.3与300mAh电池集结于 ${b} ${m}`,
    category: "spec_power",
    angleLabel: "硬核参数",
    targetAudience: "对比参数的理性消费人群",
  },
  {
    pattern: (b, m) => `300mAh de batería, 423+ esferas DIY y 5 ATM sumergible: el smartwatch más completo para tu día a día es ${b} ${m}`,
    patternZh: (b, m) => `300mAh长效电力、423+款DIY表盘加5 ATM深度防水，满足全天日常与运动的满配好表就是 ${b} ${m}`,
    category: "spec_power",
    angleLabel: "全能满配",
    targetAudience: "科技数码爱好者",
  },

  // question
  {
    pattern: (b, m) => `¿Team correa metálica elegante o team silicona deportiva? Con ${b} ${m} no tienes que elegir porque trae ambas`,
    patternZh: (b, m) => `你是金属表带气质派还是硅胶表带运动派？入手 ${b} ${m} 不用纠结，盒内标配双表带一次全拥有！`,
    category: "question",
    angleLabel: "互动提问",
    targetAudience: "TikTok 评论区互动人群",
  },
  {
    pattern: (b, m) => `¿Qué esfera pondrías hoy entre las 423+ opciones DIY de la pantalla AMOLED 1.85" del ${b} ${m}? Cuéntame en comentarios`,
    patternZh: (b, m) => `${b} ${m} 1.85英寸AMOLED大屏内置423+款DIY表盘，今天出门穿搭你会换哪一款？评论区聊聊！`,
    category: "question",
    angleLabel: "互动讨论",
    targetAudience: "年轻潮流社交人群",
  },
  {
    pattern: (b, m) => `¿Cuánto pagarías por un smartwatch AMOLED 1.85" con 5 ATM, llamadas BT 5.3 y doble correa como ${b} ${m}?`,
    patternZh: (b, m) => `1.85英寸AMOLED屏、5 ATM防水、蓝牙5.3通话还送金属+硅胶双表带，你猜这款 ${b} ${m} 多少钱？`,
    category: "question",
    angleLabel: "价格竞猜互动",
    targetAudience: "高性价比敏感型买家",
  },
];

// =========================================================================
// 🇩🇪 GERMAN (DE) TEMPLATES — FOSMET CS2PRO
// =========================================================================
const CS2PRO_DE_TEMPLATES: Cs2proHookTemplate[] = [
  // pain_point
  {
    pattern: (b, m) => `Schluss mit klobigen Sportuhren, die kein Outfit retten: ${b} ${m} kommt mit Metall- UND Silikonarmband für Büro & Gym`,
    patternZh: (b, m) => `告别破坏穿搭美感的笨重运动表：${b} ${m} 标配金属+硅胶双表带，通勤办公与健身房随心切换`,
    category: "pain_point",
    angleLabel: "痛点反转",
    targetAudience: "德语区时尚穿搭女性",
  },
  {
    pattern: (b, m) => `Genervt von Fingerabdrücken auf kleinen Displays? Das 1,85" AMOLED-HD-Display der ${b} ${m} hat eine Anti-Fingerprint-Beschichtung`,
    patternZh: (b, m) => `受够了小屏幕满是油腻指纹？${b} ${m} 搭载1.85英寸防指纹涂层AMOLED高清大屏，时刻纯净耀眼`,
    category: "pain_point",
    angleLabel: "痛点反转",
    targetAudience: "注重细节品质的德区用户",
  },
  {
    pattern: (b, m) => `Uhr beim Schwimmen ablegen? Nicht nötig! Die ${b} ${m} ist bis 5 ATM wasserdicht und begleitet dich durch Pool & Regen`,
    patternZh: (b, m) => `游泳下雨总担心手表进水？完全没必要！${b} ${m} 支持5 ATM专业级防水，泳池畅游无惧泼溅`,
    category: "pain_point",
    angleLabel: "痛点反转",
    targetAudience: "游泳与户外健身群体",
  },
  {
    pattern: (b, m) => `Morgens müde oder Zyklus vergessen? ${b} ${m} bietet 4-Phasen-Schlafanalyse (GloryFit) & präzise Zyklusvorhersage`,
    patternZh: (b, m) => `早起疲惫或忘记生理期？${b} ${m} 搭载GloryFit四阶段睡眠分析与女性生理周期智能预测`,
    category: "pain_point",
    angleLabel: "痛点反转",
    targetAudience: "重视睡眠与女性健康人群",
  },

  // gadget
  {
    pattern: (b, m) => `Wie ein edles Schmuckstück am Handgelenk: 1,85" AMOLED, 423+ DIY-Zifferblätter & Doppelarmband in der ${b} ${m}`,
    patternZh: (b, m) => `宛如腕间精致珠宝：${b} ${m} 融合1.85英寸AMOLED屏、423+款DIY表盘与金属+硅胶双表带`,
    category: "gadget",
    angleLabel: "轻奢颜值",
    targetAudience: "德区优雅都市女性",
  },
  {
    pattern: (b, m) => `Zwei Looks in einer Box: Edles Metallarmband fürs Dinner, weiches Silikon fürs Workout – das ist die ${b} ${m}`,
    patternZh: (b, m) => `一盒解锁双面风格：晚宴配优雅金属表带，健身换亲肤硅胶表带，这就是 ${b} ${m}`,
    category: "gadget",
    angleLabel: "双表带实测",
    targetAudience: "追求一表多搭的OOTD博主",
  },
  {
    pattern: (b, m) => `Über 423 Zifferblätter zum selbst Gestalten (DIY) auf dem brillanten 1,85" AMOLED Screen der ${b} ${m}`,
    patternZh: (b, m) => `423+款精选表盘并支持照片DIY定制，尽在 ${b} ${m} 1.85英寸AMOLED视网膜高清大屏`,
    category: "gadget",
    angleLabel: "DIY个性表盘",
    targetAudience: "喜欢个性化定制的用户",
  },

  // ai_power
  {
    pattern: (b, m) => `24/7 Rundum-Gesundheit: ${b} ${m} trackt Puls, Blutsauerstoff SpO₂, Stress, Emotionen und deinen weiblichen Zyklus`,
    patternZh: (b, m) => `24小时全天候健康守护：${b} ${m} 精准监测心率、血氧、压力、情绪及女性生理周期预测`,
    category: "ai_power",
    angleLabel: "全天候健康",
    targetAudience: "关注健康数据的德区女性",
  },
  {
    pattern: (b, m) => `Verstehe deinen Schlaf wirklich: Die 4-Stufen-Schlafanalyse der ${b} ${m} in der GloryFit App zeigt dir jede Erholungsphase`,
    patternZh: (b, m) => `真正读懂你的夜间睡眠：${b} ${m} 配合GloryFit App呈现详尽的四阶段睡眠深度分析`,
    category: "ai_power",
    angleLabel: "四阶段睡眠",
    targetAudience: "注重恢复与作息的职场人",
  },
  {
    pattern: (b, m) => `Mehr als ein Fitnesstracker: ${b} ${m} erkennt Stress- und Stimmungswerte rund um die Uhr für mehr Balance im Alltag`,
    patternZh: (b, m) => `不只是运动手环：${b} ${m} 24小时洞察压力与情绪变化，助你在忙碌日常中找回身心平衡`,
    category: "ai_power",
    angleLabel: "情绪压力监测",
    targetAudience: "高压白领与学生群体",
  },

  // efficiency
  {
    pattern: (b, m) => `Bluetooth 5.3 Anrufe & Social-Media-Nachrichten direkt am Handgelenk – mit ${b} ${m} bleibt das Handy in der Tasche`,
    patternZh: (b, m) => `蓝牙5.3高清通话与社交消息抬腕直达，戴上 ${b} ${m} 无需频繁从包里掏手机`,
    category: "efficiency",
    angleLabel: "蓝牙5.3通话",
    targetAudience: "通勤效率党与职场精英",
  },
  {
    pattern: (b, m) => `113+ Sportmodi treffen auf 5 ATM Wasserschutz: Von Yoga bis Schwimmen dokumentiert ${b} ${m} jedes Training exakt`,
    patternZh: (b, m) => `113+种运动模式碰撞5 ATM级专业防水：从瑜伽慢跑到泳池训练，${b} ${m} 精准记录每滴汗水`,
    category: "efficiency",
    angleLabel: "113+运动模式",
    targetAudience: "健身与多项目运动达人",
  },
  {
    pattern: (b, m) => `Nahtlos kompatibel mit Android 4.4+ & iOS 9.0+: In Sekunden gekoppelt mit GloryFit App, Anrufen & Benachrichtigungen auf ${b} ${m}`,
    patternZh: (b, m) => `全面兼容Android 4.4+与iOS 9.0+：秒连GloryFit App，${b} ${m} 稳定同步来电与社交消息提醒`,
    category: "efficiency",
    angleLabel: "广兼容快连接",
    targetAudience: "安卓与iPhone全平台买家",
  },

  // secret_hack
  {
    pattern: (b, m) => `Der Fashion-Geheimtipp für jedes Outfit: ${b} ${m} bietet Luxus-Metalloptik, 1,85" AMOLED und 5 ATM ohne Marken-Aufpreis`,
    patternZh: (b, m) => `德区穿搭圈私藏黑马：${b} ${m} 兼具轻奢金属质感、1.85英寸AMOLED与5 ATM防水，彻底击穿大牌溢价`,
    category: "secret_hack",
    angleLabel: "德区性价比黑马",
    targetAudience: "精明品质消费群体",
  },
  {
    pattern: (b, m) => `Warum immer mehr Frauen auf ${b} ${m} umsteigen: Doppelarmband inklusive, 300 mAh Akku & Frauengesundheit auf den Punkt`,
    patternZh: (b, m) => `为什么越来越多德区女生换戴 ${b} ${m}？标配双表带、300mAh持久电力加上精准女性健康守护`,
    category: "secret_hack",
    angleLabel: "种草揭秘",
    targetAudience: "DACH TikTok Shop 买家",
  },

  // spec_power
  {
    pattern: (b, m) => `Starkes Datenblatt: 1,85" AMOLED (Anti-Fingerprint), 5 ATM, 113+ Modi, BT 5.3 & 300 mAh Akku in der neuen ${b} ${m}`,
    patternZh: (b, m) => `硬核德系参数清单：1.85英寸防指纹AMOLED、5 ATM防水、113+运动、蓝牙5.3与300mAh电池全配齐于 ${b} ${m}`,
    category: "spec_power",
    angleLabel: "硬核参数",
    targetAudience: "重视实测参数的德区极客",
  },
  {
    pattern: (b, m) => `300 mAh Ausdauer, 423+ DIY-Watchfaces & GloryFit 4-Phasen-Schlaftracking: Die Allround-Smartwatch ${b} ${m} liefert ab`,
    patternZh: (b, m) => `300mAh扎实续航、423+款DIY表盘与GloryFit四阶段睡眠监测，全能六边形手表 ${b} ${m} 实力拉满`,
    category: "spec_power",
    angleLabel: "全能满配",
    targetAudience: "参数党与理性买家",
  },

  // question
  {
    pattern: (b, m) => `Team elegantes Metallband oder Team sportliches Silikon? Bei ${b} ${m} bekommst du einfach beide in einer Box!`,
    patternZh: (b, m) => `优雅金属党还是动感硅胶党？选择 ${b} ${m} 根本不用做取舍，标配双表带随心换！`,
    category: "question",
    angleLabel: "社区互动",
    targetAudience: "TikTok 评论互动受众",
  },
  {
    pattern: (b, m) => `Welches der 423+ DIY-Zifferblätter würdest du auf dem 1,85" AMOLED der ${b} ${m} zuerst einstellen? Schreib's in die Kommentare!`,
    patternZh: (b, m) => `${b} ${m} 1.85英寸AMOLED大屏自带423+款DIY表盘，你会最先换上哪款风格？评论区告诉我！`,
    category: "question",
    angleLabel: "互动提问",
    targetAudience: "时尚与科技社区用户",
  },
  {
    pattern: (b, m) => `Was würdest du für eine 1,85" AMOLED Smartwatch mit 5 ATM, Bluetooth 5.3 Calls & zwei Bändern wie ${b} ${m} schätzen?`,
    patternZh: (b, m) => `1.85英寸AMOLED屏、5 ATM防水、蓝牙5.3通话还附赠双表带，你猜 ${b} ${m} 只要多少钱？`,
    category: "question",
    angleLabel: "猜价引流",
    targetAudience: "TikTok 高互动观众",
  },
];

// =========================================================================
// 🇫🇷 FRENCH (FR) TEMPLATES — FOSMET CS2PRO
// =========================================================================
const CS2PRO_FR_TEMPLATES: Cs2proHookTemplate[] = [
  // pain_point
  {
    pattern: (b, m) => `Marre des montres sportives trop massives qui gâchent ta tenue ? ${b} ${m} inclut un bracelet métal ET un silicone pour tout assortir`,
    patternZh: (b, m) => `厌倦了笨重运动表破坏法式穿搭？${b} ${m} 标配金属+硅胶双表带，优雅通勤与运动健身无缝切换`,
    category: "pain_point",
    angleLabel: "痛点反转",
    targetAudience: "法国时尚穿搭女性",
  },
  {
    pattern: (b, m) => `Ton écran est toujours plein de traces de doigts ? L'AMOLED 1,85" anti-traces de la ${b} ${m} reste ultra net du matin au soir`,
    patternZh: (b, m) => `手表屏幕总是沾满指纹糊成一片？${b} ${m} 1.85英寸防指纹涂层AMOLED高清屏从早到晚通透闪耀`,
    category: "pain_point",
    angleLabel: "痛点反转",
    targetAudience: "讲究精致质感的法语用户",
  },
  {
    pattern: (b, m) => `Peur de nager avec ta montre connectée ? Avec son étanchéité 5 ATM, la ${b} ${m} te suit à la piscine comme sous la douche`,
    patternZh: (b, m) => `不敢戴着智能手表下水游泳？拥有5 ATM级深度防水的 ${b} ${m} 泳池淋浴全天候安心佩戴`,
    category: "pain_point",
    angleLabel: "痛点反转",
    targetAudience: "游泳与健身爱好者",
  },
  {
    pattern: (b, m) => `Réveils difficiles ou suivi de cycle oublié ? ${b} ${m} analyse ton sommeil en 4 phases sur GloryFit et prédit ton cycle féminin`,
    patternZh: (b, m) => `早起乏力或总忘记录生理期？${b} ${m} 联合GloryFit提供四阶段睡眠分析与女性生理周期精准预测`,
    category: "pain_point",
    angleLabel: "痛点反转",
    targetAudience: "关注健康作息的法语女性",
  },

  // gadget
  {
    pattern: (b, m) => `Un vrai bijou connecté au poignet : écran AMOLED 1,85", 423+ cadrans DIY et double bracelet métal + silicone sur la ${b} ${m}`,
    patternZh: (b, m) => `腕间名副其实的轻奢珠宝表：${b} ${m} 拥有1.85英寸AMOLED屏、423+款DIY表盘与金属+硅胶双表带`,
    category: "gadget",
    angleLabel: "法式穿搭美学",
    targetAudience: "OOTD与轻奢配饰爱好者",
  },
  {
    pattern: (b, m) => `Passe du bureau à la salle de sport en 5 secondes : bracelet métal chic + silicone doux inclus dans le coffret ${b} ${m}`,
    patternZh: (b, m) => `5秒从办公室优雅切换到健身房：${b} ${m} 盒内直接标配金属链带与亲肤硅胶双表带`,
    category: "gadget",
    angleLabel: "双表带百搭",
    targetAudience: "法语都市职场女性",
  },
  {
    pattern: (b, m) => `Plus de 423 cadrans personnalisables (DIY) sur un écran AMOLED 1,85" anti-traces : la nouvelle pépite ${b} ${m}`,
    patternZh: (b, m) => `423+款精选及照片DIY表盘自由切换，点亮 ${b} ${m} 1.85英寸防指纹AMOLED大屏，法区颜值宝藏单品`,
    category: "gadget",
    angleLabel: "个性DIY表盘",
    targetAudience: "Z世代与潮流穿搭博主",
  },

  // ai_power
  {
    pattern: (b, m) => `Suivi santé 24h/24 : ${b} ${m} mesure fréquence cardiaque, SpO₂, stress, émotions et prédit ton cycle menstruel avec précision`,
    patternZh: (b, m) => `24小时全天候健康守护：${b} ${m} 实时追踪心率、血氧、压力、情绪并智能预测女性生理周期`,
    category: "ai_power",
    angleLabel: "全维健康守护",
    targetAudience: "关注身心健康的现代女性",
  },
  {
    pattern: (b, m) => `Découvre enfin comment tu dors : analyse du sommeil en 4 stades via l'app GloryFit directement avec ta ${b} ${m}`,
    patternZh: (b, m) => `终于能看清自己的真实睡眠质量：${b} ${m} 同步GloryFit App，精准呈现四阶段深度睡眠分析`,
    category: "ai_power",
    angleLabel: "四阶段睡眠",
    targetAudience: "注重睡眠质量的上班族",
  },
  {
    pattern: (b, m) => `Bien plus qu'un podomètre : ${b} ${m} suit ton niveau de stress et tes émotions 24/7 pour prendre soin de toi chaque jour`,
    patternZh: (b, m) => `不止于计步器：${b} ${m} 全天候感知压力与情绪波动，每天温柔提醒你关照自己的身心状态`,
    category: "ai_power",
    angleLabel: "情绪压力管理",
    targetAudience: "都市白领与高压人群",
  },

  // efficiency
  {
    pattern: (b, m) => `Passe tes appels Bluetooth 5.3 et lis tes notifications sociales au poignet sans sortir ton téléphone avec ${b} ${m}`,
    patternZh: (b, m) => `无需从包包掏出手机，${b} ${m} 支持蓝牙5.3高清通话与社交消息抬腕即读，通勤效率倍增`,
    category: "efficiency",
    angleLabel: "蓝牙5.3通话",
    targetAudience: "高频通勤与职场人士",
  },
  {
    pattern: (b, m) => `113+ modes sportifs et étanchéité 5 ATM : yoga, course ou natation, la ${b} ${m} suit chacune de tes performances`,
    patternZh: (b, m) => `113+种运动模式叠加5 ATM级防水：瑜伽、慢跑还是泳池训练，${b} ${m} 精准记录每一次突破`,
    category: "efficiency",
    angleLabel: "113+运动模式",
    targetAudience: "法国健身与跑步人群",
  },
  {
    pattern: (b, m) => `Compatible Android 4.4+ et iOS 9.0+ : connecte ${b} ${m} à GloryFit en un clin d'œil pour tes appels, alertes et stats santé`,
    patternZh: (b, m) => `全面兼容Android 4.4+与iOS 9.0+：一秒配对GloryFit，${b} ${m} 畅享通话、社交提醒与全维健康同步`,
    category: "efficiency",
    angleLabel: "双系统兼容",
    targetAudience: "iOS与安卓通用买家",
  },

  // secret_hack
  {
    pattern: (b, m) => `La pépite mode TikTok Shop en France : ${b} ${m} a l'allure d'une montre de luxe avec AMOLED 1,85" et 2 bracelets inclus`,
    patternZh: (b, m) => `法国TikTok Shop爆火穿搭宝藏：${b} ${m} 兼具大牌轻奢质感、1.85英寸AMOLED屏与标配双表带`,
    category: "secret_hack",
    angleLabel: "法区爆款平替",
    targetAudience: "TikTok Shop 法语买家",
  },
  {
    pattern: (b, m) => `Pourquoi tout le monde craque pour la ${b} ${m} ? Écran 1,85" AMOLED, batterie 300 mAh, 5 ATM et suivi féminin complet`,
    patternZh: (b, m) => `为什么法国女生都被 ${b} ${m} 圈粉？1.85英寸AMOLED大屏、300mAh续航、5 ATM防水与女性健康全都有`,
    category: "secret_hack",
    angleLabel: "种草揭秘",
    targetAudience: "追求质价比的时尚群体",
  },

  // spec_power
  {
    pattern: (b, m) => `Fiche technique bluffante : AMOLED 1,85" anti-traces, 5 ATM, 113+ sports, Bluetooth 5.3 et batterie 300 mAh sur la ${b} ${m}`,
    patternZh: (b, m) => `越级硬核配置一览：1.85英寸防指纹AMOLED、5 ATM防水、113+运动、蓝牙5.3与300mAh电池全在 ${b} ${m}`,
    category: "spec_power",
    angleLabel: "硬核参数",
    targetAudience: "对比配置的理性买家",
  },
  {
    pattern: (b, m) => `300 mAh d'autonomie, 423+ cadrans DIY et 4 phases de sommeil sur GloryFit : la montre tout-en-un s'appelle ${b} ${m}`,
    patternZh: (b, m) => `300mAh长效电力、423+款DIY表盘加GloryFit四阶段睡眠分析，全能省心之选就是 ${b} ${m}`,
    category: "spec_power",
    angleLabel: "全能满配",
    targetAudience: "科技数码爱好者",
  },

  // question
  {
    pattern: (b, m) => `Plutôt team bracelet métal chic ou team silicone sport ? Avec ${b} ${m}, tu as les deux directement dans la boîte !`,
    patternZh: (b, m) => `你更偏爱优雅金属表带还是运动硅胶表带？入手 ${b} ${m} 直接双表带全配齐，不用做选择题！`,
    category: "question",
    angleLabel: "法语互动提问",
    targetAudience: "TikTok 评论区互动人群",
  },
  {
    pattern: (b, m) => `Quel cadran choisirais-tu parmi les 423+ options DIY sur l'écran AMOLED 1,85" de la ${b} ${m} ? Dis-le en commentaire !`,
    patternZh: (b, m) => `${b} ${m} 1.85英寸AMOLED大屏支持423+款DIY表盘，你会先换哪一款来搭今天的OOTD？评论区见！`,
    category: "question",
    angleLabel: "互动讨论",
    targetAudience: "年轻潮流受众",
  },
  {
    pattern: (b, m) => `À ton avis, combien coûte une montre AMOLED 1,85" étanche 5 ATM avec appels BT 5.3 et double bracelet comme la ${b} ${m} ?`,
    patternZh: (b, m) => `1.85英寸AMOLED大屏、5 ATM防水、蓝牙5.3通话还送金属+硅胶双表带，你猜 ${b} ${m} 售价多少？`,
    category: "question",
    angleLabel: "猜价互动",
    targetAudience: "高性价比互动用户",
  },
];

// =========================================================================
// 🇮🇹 ITALIAN (IT) TEMPLATES — FOSMET CS2PRO
// =========================================================================
const CS2PRO_IT_TEMPLATES: Cs2proHookTemplate[] = [
  // pain_point
  {
    pattern: (b, m) => `Stufa degli smartwatch goffi che rovinano l'outfit? ${b} ${m} include cinturino in metallo E in silicone per ufficio e palestra`,
    patternZh: (b, m) => `受够了笨重手表破坏意式精致穿搭？${b} ${m} 标配金属+硅胶双表带，职场与健身房一秒切换`,
    category: "pain_point",
    angleLabel: "痛点反转",
    targetAudience: "意大利时尚穿搭女性",
  },
  {
    pattern: (b, m) => `Schermo sempre pieno di ditate e illeggibile al sole? L'AMOLED da 1,85" anti-impronta di ${b} ${m} resta brillante tutto il giorno`,
    patternZh: (b, m) => `屏幕总是沾满指纹、强光下看不清？${b} ${m} 1.85英寸防指纹涂层AMOLED高清大屏全天候通透耀眼`,
    category: "pain_point",
    angleLabel: "痛点反转",
    targetAudience: "注重精致屏显的意区用户",
  },
  {
    pattern: (b, m) => `Togli l'orologio prima di nuotare o fare la doccia? Con l'impermeabilità 5 ATM di ${b} ${m} non devi più preoccuparti`,
    patternZh: (b, m) => `游泳或洗澡前总要摘表？拥有5 ATM专业级防水的 ${b} ${m} 让你泳池淋浴彻底安心`,
    category: "pain_point",
    angleLabel: "痛点反转",
    targetAudience: "运动与游泳爱好者",
  },
  {
    pattern: (b, m) => `Ti svegli stanca o dimentichi il ciclo? ${b} ${m} analizza 4 fasi del sonno su GloryFit e prevede il tuo ciclo femminile`,
    patternZh: (b, m) => `早上醒来总是疲惫或忘记录生理期？${b} ${m} 搭载GloryFit四阶段睡眠分析与女性生理周期精准预测`,
    category: "pain_point",
    angleLabel: "痛点反转",
    targetAudience: "关注睡眠与生理期的女性",
  },

  // gadget
  {
    pattern: (b, m) => `Un vero gioiello tech al polso: display AMOLED 1,85", 423+ quadranti DIY e doppio cinturino metallo + silicone su ${b} ${m}`,
    patternZh: (b, m) => `腕间轻奢科技首饰：${b} ${m} 集1.85英寸AMOLED大屏、423+款DIY表盘与金属+硅胶双表带于一身`,
    category: "gadget",
    angleLabel: "意式时尚美学",
    targetAudience: "OOTD与精致饰品控",
  },
  {
    pattern: (b, m) => `Cambia stile in un attimo: cinturino metallico chic per la sera e morbido silicone per lo sport, entrambi inclusi con ${b} ${m}`,
    patternZh: (b, m) => `一秒切换意式格调：晚宴戴优雅金属链带、运动换亲肤硅胶表带，${b} ${m} 盒内双表带全标配`,
    category: "gadget",
    angleLabel: "双表带实测",
    targetAudience: "都市白领与时尚达人",
  },
  {
    pattern: (b, m) => `Oltre 423 quadranti personalizzabili (DIY) su un display AMOLED 1,85" anti-impronta: ecco perché tutti amano ${b} ${m}`,
    patternZh: (b, m) => `423+款精选与照片DIY表盘随心切换，跃然呈现于 ${b} ${m} 1.85英寸防指纹AMOLED大屏`,
    category: "gadget",
    angleLabel: "DIY个性表盘",
    targetAudience: "追求个性化的意区年轻群体",
  },

  // ai_power
  {
    pattern: (b, m) => `Salute 24 ore su 24 al polso: ${b} ${m} monitora battito cardiaco, ossigeno SpO₂, stress, emozioni e ciclo mestruale`,
    patternZh: (b, m) => `腕上24小时全维健康管家：${b} ${m} 实时追踪心率、血氧、压力、情绪并智能预测女性生理周期`,
    category: "ai_power",
    angleLabel: "全天候健康",
    targetAudience: "注重自我关怀的现代女性",
  },
  {
    pattern: (b, m) => `Scopri come dormi davvero: l'analisi del sonno in 4 fasi di ${b} ${m} con app GloryFit ti aiuta a ricaricarti meglio`,
    patternZh: (b, m) => `真正读懂你的夜间睡眠质量：${b} ${m} 同步GloryFit App，提供科学详尽的四阶段深度睡眠分析`,
    category: "ai_power",
    angleLabel: "四阶段睡眠",
    targetAudience: "关注作息与养生的上班族",
  },
  {
    pattern: (b, m) => `Non conta solo i passi: ${b} ${m} monitora stress ed emozioni 24/7 per ricordarti di rallentare e prenderti cura di te`,
    patternZh: (b, m) => `不止记录步数：${b} ${m} 24小时洞察你的压力与情绪波动，贴心守护每一天的身心平衡`,
    category: "ai_power",
    angleLabel: "情绪压力追踪",
    targetAudience: "高压职场与学生人群",
  },

  // efficiency
  {
    pattern: (b, m) => `Rispondi alle chiamate Bluetooth 5.3 e leggi le notifiche social dal polso senza cercare lo smartphone in borsa con ${b} ${m}`,
    patternZh: (b, m) => `无需翻包找手机，${b} ${m} 支持蓝牙5.3高清通话与社交消息抬腕即看，日常通勤更从容`,
    category: "efficiency",
    angleLabel: "蓝牙5.3通话",
    targetAudience: "忙碌职场与通勤人士",
  },
  {
    pattern: (b, m) => `Oltre 113 modalità sportive + resistenza 5 ATM: dallo yoga alla corsa fino al nuoto, ${b} ${m} registra ogni allenamento`,
    patternZh: (b, m) => `113+种专业运动模式加5 ATM级防水：瑜伽、跑步到泳池畅游，${b} ${m} 全程精准追踪`,
    category: "efficiency",
    angleLabel: "113+运动模式",
    targetAudience: "健身与多场景运动群体",
  },
  {
    pattern: (b, m) => `Compatibile con Android 4.4+ e iOS 9.0+: collega ${b} ${m} a GloryFit in un secondo per chiamate, messaggi e dati salute`,
    patternZh: (b, m) => `全面兼容Android 4.4+与iOS 9.0+：秒速连接GloryFit，${b} ${m} 畅享蓝牙通话与全维健康同步`,
    category: "efficiency",
    angleLabel: "双系统无缝连",
    targetAudience: "安卓与iPhone用户",
  },

  // secret_hack
  {
    pattern: (b, m) => `Il segreto di stile su TikTok Italia: ${b} ${m} sembra un orologio di lusso ma unisce AMOLED 1,85", 5 ATM e doppio cinturino`,
    patternZh: (b, m) => `意大利TikTok爆火穿搭秘诀：${b} ${m} 兼具轻奢名表外观、1.85英寸AMOLED屏、5 ATM防水与双表带`,
    category: "secret_hack",
    angleLabel: "意区轻奢黑马",
    targetAudience: "意大利TikTok Shop买家",
  },
  {
    pattern: (b, m) => `Ecco perché tantissime ragazze stanno scegliendo ${b} ${m}: batteria da 300 mAh, 423+ quadranti DIY e cura del ciclo femminile`,
    patternZh: (b, m) => `为什么这么多意大利女生纷纷入手 ${b} ${m}？300mAh持久电力、423+款DIY表盘与女性周期预测太贴心`,
    category: "secret_hack",
    angleLabel: "种草揭秘",
    targetAudience: "高颜值质价比受众",
  },

  // spec_power
  {
    pattern: (b, m) => `Scheda tecnica pazzesca: AMOLED 1,85" anti-impronta, 5 ATM, 113+ sport, Bluetooth 5.3 e batteria 300 mAh su ${b} ${m}`,
    patternZh: (b, m) => `越级硬核配置拉满：1.85英寸防指纹AMOLED、5 ATM防水、113+运动、蓝牙5.3与300mAh电池集结于 ${b} ${m}`,
    category: "spec_power",
    angleLabel: "硬核参数",
    targetAudience: "看重配置的理性消费者",
  },
  {
    pattern: (b, m) => `300 mAh di batteria, 423+ quadranti DIY e 4 fasi del sonno su GloryFit: lo smartwatch completo per ogni giorno è ${b} ${m}`,
    patternZh: (b, m) => `300mAh长效续航、423+款DIY表盘与GloryFit四阶段睡眠监测，全天候满配好表就是 ${b} ${m}`,
    category: "spec_power",
    angleLabel: "全能满配",
    targetAudience: "科技与穿戴数码爱好者",
  },

  // question
  {
    pattern: (b, m) => `Team cinturino in metallo elegante o team silicone sportivo? Con ${b} ${m} non devi scegliere: li trovi entrambi nella scatola!`,
    patternZh: (b, m) => `你是优雅金属表带派还是运动硅胶派？选择 ${b} ${m} 不用纠结，盒内标配双表带一次全拥有！`,
    category: "question",
    angleLabel: "意语互动提问",
    targetAudience: "TikTok 评论区活跃观众",
  },
  {
    pattern: (b, m) => `Quale dei 423+ quadranti DIY metteresti per primo sull'AMOLED 1,85" di ${b} ${m}? Scrivimelo nei commenti!`,
    patternZh: (b, m) => `${b} ${m} 1.85英寸AMOLED大屏内置423+款DIY表盘，你会最先换上哪一款配今天的穿搭？评论区聊聊！`,
    category: "question",
    angleLabel: "互动讨论",
    targetAudience: "意区时尚社交用户",
  },
  {
    pattern: (b, m) => `Quanto pagheresti per uno smartwatch AMOLED 1,85" con 5 ATM, chiamate BT 5.3 e doppio cinturino come ${b} ${m}?`,
    patternZh: (b, m) => `1.85英寸AMOLED高清屏、5 ATM防水、蓝牙5.3通话还配金属+硅胶双表带，你猜 ${b} ${m} 多少钱？`,
    category: "question",
    angleLabel: "猜价引流",
    targetAudience: "TikTok 高互动买家",
  },
];

const ES_PREFIXES: { local: string; zh: string }[] = [
  { local: "", zh: "" },
  { local: "¡Mira esto! ", zh: "【快看这里！】" },
  { local: "【Top 2026】 ", zh: "【2026爆款】" },
  { local: "【Estilo & Salud】 ", zh: "【时尚与健康】" },
  { local: "¡Impresionante! ", zh: "【太惊艳了！】" },
  { local: "【Review Real】 ", zh: "【真实测评】" },
  { local: "¡Favorito viral! ", zh: "【全网爆火！】" },
  { local: "【Outfit Perfecto】 ", zh: "【满分穿搭】" },
];

const DE_PREFIXES: { local: string; zh: string }[] = [
  { local: "", zh: "" },
  { local: "【Must-Have 2026】 ", zh: "【2026必备】" },
  { local: "Wunderschön! ", zh: "【精致唯美！】" },
  { local: "【Outfit-Tipp】 ", zh: "【穿搭灵感】" },
  { local: "【Echter Test】 ", zh: "【真实测评】" },
  { local: "Geheimtipp! ", zh: "【私藏推荐！】" },
  { local: "【Schmuckstück】 ", zh: "【珠宝质感】" },
  { local: "Unglaublich! ", zh: "【不可思议！】" },
];

const FR_PREFIXES: { local: string; zh: string }[] = [
  { local: "", zh: "" },
  { local: "【Pépite 2026】 ", zh: "【2026宝藏单品】" },
  { local: "Incroyable ! ", zh: "【太惊艳了！】" },
  { local: "【Idée Tenue】 ", zh: "【法式穿搭灵感】" },
  { local: "【Test Réel】 ", zh: "【真实测评】" },
  { local: "Coup de cœur ! ", zh: "【一眼心动！】" },
  { local: "【Mode & Santé】 ", zh: "【时尚与健康】" },
  { local: "À voir absolument ! ", zh: "【必看推荐！】" },
];

const IT_PREFIXES: { local: string; zh: string }[] = [
  { local: "", zh: "" },
  { local: "【Must-Have 2026】 ", zh: "【2026意区必备】" },
  { local: "Pazzesco! ", zh: "【太惊艳了！】" },
  { local: "【Idea Outfit】 ", zh: "【意式穿搭灵感】" },
  { local: "【Recensione Vera】 ", zh: "【真实测评】" },
  { local: "Colpo di fulmine! ", zh: "【一眼沦陷！】" },
  { local: "【Stile & Salute】 ", zh: "【时尚与健康】" },
  { local: "Da non perdere! ", zh: "【绝不能错过！】" },
];

export function generateCs2proAlgorithmicTitles(
  category: AngleCategory,
  customKeyword?: string,
  customTags?: string,
  batchSeed = Date.now(),
  language: TargetLanguage = "es"
): GeneratedTitle[] {
  const brand = "FOSMET";
  const model = "CS2PRO";

  const lang: "es" | "de" | "fr" | "it" =
    language === "de" || language === "fr" || language === "it" ? language : "es";

  const defaultTags =
    lang === "de"
      ? CS2PRO_GERMAN_TAGS
      : lang === "fr"
      ? CS2PRO_FRENCH_TAGS
      : lang === "it"
      ? CS2PRO_ITALIAN_TAGS
      : CS2PRO_SPANISH_TAGS;

  const activeTags = customTags !== undefined ? customTags.trim() : defaultTags;

  const pool =
    lang === "de"
      ? CS2PRO_DE_TEMPLATES
      : lang === "fr"
      ? CS2PRO_FR_TEMPLATES
      : lang === "it"
      ? CS2PRO_IT_TEMPLATES
      : CS2PRO_ES_TEMPLATES;

  const prefixes =
    lang === "de"
      ? DE_PREFIXES
      : lang === "fr"
      ? FR_PREFIXES
      : lang === "it"
      ? IT_PREFIXES
      : ES_PREFIXES;

  const filtered =
    category === "all_mixed"
      ? pool
      : pool.filter((t) => t.category === category);

  const primaryPool = filtered.length > 0 ? filtered : pool;

  const seededRand = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  const shuffle = <T,>(arr: T[], seedOffset: number): T[] => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(seededRand(batchSeed + i * 31 + seedOffset) * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const shuffledPrimary = shuffle(primaryPool, 17);
  const shuffledAll = shuffle(pool, 53);

  const results: GeneratedTitle[] = [];
  const usedHooks = new Set<string>();
  const cleanKw = (customKeyword || "").trim();

  let cursor = 0;
  let guard = 0;

  while (results.length < 50 && guard < 400) {
    guard++;
    const template =
      category === "all_mixed"
        ? shuffledAll[cursor % shuffledAll.length]
        : cursor < shuffledPrimary.length * 3
        ? shuffledPrimary[cursor % shuffledPrimary.length]
        : shuffledAll[cursor % shuffledAll.length];

    const pass = Math.floor(cursor / Math.max(1, shuffledPrimary.length));
    const pref = prefixes[(pass + cursor) % prefixes.length];

    let hook = `${pref.local}${template.pattern(brand, model, cleanKw)}`.trim();
    let zh = `${pref.zh}${template.patternZh(brand, model, cleanKw)}`.trim();

    if (cleanKw && results.length % 3 === 0 && !hook.toLowerCase().includes(cleanKw.toLowerCase())) {
      hook = `${hook} · ${cleanKw}`;
      zh = `${zh}（${cleanKw}）`;
    }

    cursor++;
    if (usedHooks.has(hook)) continue;
    usedHooks.add(hook);

    const fullTitle = activeTags ? `${hook} ${activeTags}` : hook;
    results.push({
      id: `cs2pro-${lang}-${batchSeed}-${results.length + 1}-${Math.random().toString(36).substring(2, 6)}`,
      productId: "cs2pro",
      title: fullTitle,
      hook,
      tags: activeTags,
      angle: template.angleLabel,
      angleCategory: template.category,
      targetAudience: template.targetAudience,
      charCount: fullTitle.length,
      hookCharCount: hook.length,
      translationZh: zh,
      language: lang,
      isFavorite: false,
      createdAt: new Date().toISOString(),
    });
  }

  return results;
}
