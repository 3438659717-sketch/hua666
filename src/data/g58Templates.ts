import { AngleCategory, GeneratedTitle, ProductId, TargetLanguage } from "../types";

export const G58_SPANISH_TAGS = "#FOSMET #G58 #reloj inteligente #Atuendo #Salud de la mujer";
export const G58_GERMAN_TAGS = "#FOSMET #G58 #Smartwatch #Outfit #Frauengesundheit";

interface HookTemplate {
  pattern: (brand: string, model: string, keyword?: string) => string;
  patternZh: (brand: string, model: string, keyword?: string) => string;
  category: AngleCategory;
  angleLabel: string;
  targetAudience: string;
}

// 50+ Spanish TikTok Viral Hook Templates for FOSMET G58 (Women's Fashion Smartwatch)
export const G58_SPANISH_TEMPLATES: HookTemplate[] = [
  // 1. Pain Point / Counter-Intuitive (Dolor, Estilo y Salud Femenina)
  {
    pattern: (b, m) => `¿Cansada de smartwatches toscos que no combinan con tus outfits? ${b} ${m} une elegancia y alta tecnología`,
    patternZh: (b, m) => `受够了笨重难看、无法搭配日常衣服的智能手表？${b} ${m} 完美融合珠宝级优雅与硬核科技`,
    category: "pain_point",
    angleLabel: "Adiós a los relojes toscos",
    targetAudience: "Mujeres elegantes y amantes de la moda",
  },
  {
    pattern: (b, m) => `¿Se te olvida cuándo llega tu periodo? ${b} ${m} gestiona tu ciclo menstrual y ovulación al detalle`,
    patternZh: (b, m) => `总是记不清生理期？${b} ${m} 贴心智能管理女性经期、排卵期与备孕提醒`,
    category: "pain_point",
    angleLabel: "Gestión precisa del ciclo",
    targetAudience: "Mujeres que cuidan su salud hormonal",
  },
  {
    pattern: (b, m) => `¿Pagar una fortuna por un reloj de moda que apenas tiene funciones? ${b} ${m} lo tiene todo en tu muñeca`,
    patternZh: (b, m) => `花昂贵价格买只有装饰功能的时装表？${b} ${m} 让你在手腕上同时拥有高颜值与全智能`,
    category: "pain_point",
    angleLabel: "Lujo accesible sin sobreprecio",
    targetAudience: "Compradoras inteligentes y fashionistas",
  },
  {
    pattern: (b, m) => `¿Tener que cambiar de reloj para ir al gimnasio y a una cena? ${b} ${m} incluye correas milanesa y silicona`,
    patternZh: (b, m) => `上班通勤和健身运动要换两块表？${b} ${m} 出厂标配米兰尼斯金属与亲肤硅胶双表带`,
    category: "pain_point",
    angleLabel: "Doble correa para cada ocasión",
    targetAudience: "Mujeres versátiles y activas",
  },
  {
    pattern: (b, m) => `¿No escuchas el móvil dentro del bolso? Responde llamadas Bluetooth con calidad HD desde ${b} ${m}`,
    patternZh: (b, m) => `手机放在包里经常漏接电话？用 ${b} ${m} 腕上高清蓝牙通话轻松直接应答`,
    category: "pain_point",
    angleLabel: "Llamadas directas desde el bolso",
    targetAudience: "Mujeres profesionales y multitask",
  },
  {
    pattern: (b, m) => `¿Pantallas con bordes negros gigantes? ${b} ${m} tiene 98% de pantalla con resolución 390×390 HD`,
    patternZh: (b, m) => `大黑边屏幕太影响颜值？${b} ${m} 拥有 98% 超高屏占比与 390×390 高清视网膜级画质`,
    category: "pain_point",
    angleLabel: "Pantalla sin bordes 98%",
    targetAudience: "Amantes del diseño minimalista",
  },

  // 2. Efficiency & Lifestyle (Salud de la Mujer, Llamadas y Productividad)
  {
    pattern: (b, m) => `Salud femenina inteligente: seguimiento de periodo, ovulación y recordatorios diarios con ${b} ${m}`,
    patternZh: (b, m) => `女性专属健康管理：经期预测、排卵期追踪与每日健康提醒尽在 ${b} ${m}`,
    category: "efficiency",
    angleLabel: "Control menstrual integral",
    targetAudience: "Cuidado de la salud femenina",
  },
  {
    pattern: (b, m) => `Contesta llamadas y revisa WhatsApps mientras te maquillas o entrenas gracias a ${b} ${m}`,
    patternZh: (b, m) => `化妆或运动时也能随时接打电话、查收即时消息，${b} ${m} 蓝牙 5.3 带来极致从容`,
    category: "efficiency",
    angleLabel: "Llamadas Bluetooth 5.3",
    targetAudience: "Mujeres dinámicas y productivas",
  },
  {
    pattern: (b, m) => `Más de 120 modos deportivos para registrar yoga, pilates, running y fitness con ${b} ${m}`,
    patternZh: (b, m) => `支持瑜伽、普拉提、跑步等 120+ 种运动，${b} ${m} 精准记录每次燃脂数据`,
    category: "efficiency",
    angleLabel: "120+ deportes femeninos",
    targetAudience: "Chicas fitness y amantes del bienestar",
  },
  {
    pattern: (b, m) => `Monitoreo 24/7 de ritmo cardíaco, oxígeno SpO2, presión y fases de sueño profundo con ${b} ${m}`,
    patternZh: (b, m) => `全天候 24/7 心率、SpO2 血氧、压力及深度睡眠监测，${b} ${m} 守护女性全天好状态`,
    category: "efficiency",
    angleLabel: "Biometría completa 24/7",
    targetAudience: "Mujeres conscientes de su bienestar",
  },
  {
    pattern: (b, m) => `Controla tu música favorita y saca selfies a distancia agitando la muñeca con ${b} ${m}`,
    patternZh: (b, m) => `摇动手腕即可远程遥控手机拍照与切歌，${b} ${m} 让你随时随地拍出完美自拍`,
    category: "efficiency",
    angleLabel: "Selfie remoto y música",
    targetAudience: "Creadoras de contenido y viajeras",
  },
  {
    pattern: (b, m) => `Asistente de voz con doble clic y llamadas SOS de emergencia: tu seguridad en ${b} ${m}`,
    patternZh: (b, m) => `双击表冠即刻呼出 AI 语音助手，更有紧急 SOS 一键求助，${b} ${m} 带来满满安全感`,
    category: "efficiency",
    angleLabel: "Voz inteligente y SOS",
    targetAudience: "Seguridad y comodidad diaria",
  },

  // 3. Fashion & Aesthetics (Moda, Atuendo y Doble Correa)
  {
    pattern: (b, m) => `Correa milanesa para la oficina y silicona suave para el gym: el accesorio definitivo ${b} ${m}`,
    patternZh: (b, m) => `通勤佩戴米兰尼斯金属链，运动换上亲肤柔软硅胶：百搭时尚饰品 ${b} ${m}`,
    category: "gadget",
    angleLabel: "Outfit versátil intercambiable",
    targetAudience: "Amantes del 'Get Ready With Me'",
  },
  {
    pattern: (b, m) => `Cristal templado de alta dureza con revestimiento antihuellas y pantalla 1.27" HD en ${b} ${m}`,
    patternZh: (b, m) => `1.27 英寸高清屏覆盖高硬度防刮钢化玻璃与抗指纹涂层：精致质感 ${b} ${m}`,
    category: "gadget",
    angleLabel: "Cristal HD antihuellas",
    targetAudience: "Detallistas de acabados prémium",
  },
  {
    pattern: (b, m) => `Diseño ultraligero y esferas florales personalizables: el smartwatch joya ${b} ${m}`,
    patternZh: (b, m) => `轻薄纤细的无感佩戴搭配唯美花卉主题表盘：珠宝级腕上美学 ${b} ${m}`,
    category: "gadget",
    angleLabel: "Diseño joya ultrafino",
    targetAudience: "Mujeres elegantes y sofisticadas",
  },
  {
    pattern: (b, m) => `Resistencia al agua IP68 para lavarte las manos o entrenar bajo la lluvia con ${b} ${m}`,
    patternZh: (b, m) => `IP68 级专业防水，日常洗手、淋雨或运动大汗淋漓均可安心佩戴：${b} ${m}`,
    category: "gadget",
    angleLabel: "Impermeabilidad IP68",
    targetAudience: "Uso diario sin preocupaciones",
  },
  {
    pattern: (b, m) => `Guarda hasta 100 contactos favoritos y marca números directamente en la pantalla de ${b} ${m}`,
    patternZh: (b, m) => `腕上存储 100 位常用联系人，支持高清独立拨号键盘：便捷沟通选 ${b} ${m}`,
    category: "gadget",
    angleLabel: "Teclado y 100 contactos",
    targetAudience: "Comunicación rápida y fluida",
  },
  {
    pattern: (b, m) => `Sincronización ultraestable con la app GloryFit para ver tus métricas de salud en ${b} ${m}`,
    patternZh: (b, m) => `与 GloryFit 专属 App 极速稳定连接，全面直观掌握健康数据与运动趋势：${b} ${m}`,
    category: "gadget",
    angleLabel: "GloryFit App sincronización",
    targetAudience: "Usuarias de Android e iOS",
  },

  // 4. Smart Power (Asistente de Voz y Funciones Inteligentes)
  {
    pattern: (b, m) => `Pídele lo que quieras a tu asistente de voz con un doble clic en la corona del ${b} ${m}`,
    patternZh: (b, m) => `只需双击表冠按键即可唤醒手机语音助手，随时查询天气和日程：${b} ${m}`,
    category: "ai_power",
    angleLabel: "Asistente de voz al toque",
    targetAudience: "Fans de la tecnología práctica",
  },
  {
    pattern: (b, m) => `Análisis avanzado de sueño de 21:30 a 12:00 para despertar llena de energía con ${b} ${m}`,
    patternZh: (b, m) => `21:30 至次日 12:00 科学睡眠深度分析，助你告别疲倦、每天元气满满：${b} ${m}`,
    category: "ai_power",
    angleLabel: "Sueño reparador analizado",
    targetAudience: "Personas con insomnio o estrés",
  },
  {
    pattern: (b, m) => `Entrenamientos de respiración guiada para reducir el estrés del trabajo con ${b} ${m}`,
    patternZh: (b, m) => `内置科学呼吸放松训练，帮你快速舒缓工作压力与紧张情绪：${b} ${m}`,
    category: "ai_power",
    angleLabel: "Gestión de estrés y calma",
    targetAudience: "Oficinistas y estudiantes",
  },
  {
    pattern: (b, m) => `Previsión del tiempo, alarmas vibratorias y juegos casuales en tu muñeca con ${b} ${m}`,
    patternZh: (b, m) => `实时天气预报、静音振动闹钟与休闲益智小游戏，腕上生活更丰富：${b} ${m}`,
    category: "ai_power",
    angleLabel: "Ecosistema inteligente diario",
    targetAudience: "Mujeres organizadas",
  },
  {
    pattern: (b, m) => `Aviso de llamadas, mensajes y notificaciones de redes sociales al instante en ${b} ${m}`,
    patternZh: (b, m) => `即时同步微信、短信与社交软件消息，重要通知抬腕即阅：${b} ${m}`,
    category: "ai_power",
    angleLabel: "Notificaciones en tiempo real",
    targetAudience: "Usuarias conectadas",
  },
  {
    pattern: (b, m) => `Localizador de teléfono integrado: nunca más perderás el móvil por casa gracias a ${b} ${m}`,
    patternZh: (b, m) => `内置智能双向寻机功能，手腕轻轻一点就能快速找到家中手机：${b} ${m}`,
    category: "ai_power",
    angleLabel: "Buscar móvil con un toque",
    targetAudience: "Despistadas prácticas",
  },

  // 5. Secret Hack & Recommendations (Secretos de Moda y Bienestar)
  {
    pattern: (b, m) => `El secreto de estilistas para combinar reloj con joyas: el acabado oro rosa de ${b} ${m}`,
    patternZh: (b, m) => `时尚造型师的穿搭秘诀：用 ${b} ${m} 玫瑰金高级光泽点亮整套日常通勤造型`,
    category: "secret_hack",
    angleLabel: "Secreto de estilismo",
    targetAudience: "Influencers y creadoras de moda",
  },
  {
    pattern: (b, m) => `El truco para fotos perfectas sin trípode: dispara la cámara del móvil agitando ${b} ${m}`,
    patternZh: (b, m) => `无需自拍杆或三脚架的独家拍照秘笈：轻轻摇动 ${b} ${m} 即可远程定格美照`,
    category: "secret_hack",
    angleLabel: "Truco para fotos solas",
    targetAudience: "Aficionadas a las selfies y viajes",
  },
  {
    pattern: (b, m) => `Cómo saber tus días más fértiles de forma natural y automática con la app de ${b} ${m}`,
    patternZh: (b, m) => `如何科学掌握易孕期与生理周期变化？通过 ${b} ${m} 的健康算法一目了然`,
    category: "secret_hack",
    angleLabel: "Conocimiento del cuerpo",
    targetAudience: "Planificación familiar y salud",
  },
  {
    pattern: (b, m) => `El hack para cambiar tu estilo en 5 segundos sin herramientas usando las correas de ${b} ${m}`,
    patternZh: (b, m) => `无需任何工具、5秒快速快拆换表带：${b} ${m} 随时随地随心切换穿搭风格`,
    category: "secret_hack",
    angleLabel: "Cambio de correa express",
    targetAudience: "Amantes de la versatilidad",
  },
  {
    pattern: (b, m) => `Configura el botón SOS de pulsación larga para sentirte siempre protegida con ${b} ${m}`,
    patternZh: (b, m) => `一键长按紧急呼叫预设联系人，独行夜归也能安心守护你的安全：${b} ${m}`,
    category: "secret_hack",
    angleLabel: "Botón de seguridad SOS",
    targetAudience: "Mujeres que salen solas de noche",
  },
  {
    pattern: (b, m) => `Personaliza la esfera con tus propias fotos favoritas directamente en ${b} ${m}`,
    patternZh: (b, m) => `支持上传个人自拍或宠物照片作为独一无二的专属表盘：高自由度定制 ${b} ${m}`,
    category: "secret_hack",
    angleLabel: "Esfera con fotos propias",
    targetAudience: "Amantes de la personalización",
  },

  // 6. Curiosity & Questions (Preguntas Virales)
  {
    pattern: (b, m) => `¿Es este el smartwatch para mujer más bonito y completo del año? Probamos ${b} ${m}`,
    patternZh: (b, m) => `这会是今年颜值最高且功能最全的女性智能表吗？实测体验 ${b} ${m}`,
    category: "question",
    angleLabel: "¿El más bonito del año?",
    targetAudience: "Buscadoras de novedades de moda",
  },
  {
    pattern: (b, m) => `¿Por qué todas las influencers de moda están cambiando su reloj por el nuevo ${b} ${m}?`,
    patternZh: (b, m) => `为什么众多时尚博主都在推荐这款 ${b} ${m} 轻奢女性智能手表？`,
    category: "question",
    angleLabel: "¿Por qué todas lo llevan?",
    targetAudience: "Seguidoras de tendencias TikTok",
  },
  {
    pattern: (b, m) => `¿Puede un reloj de diseño registrar 120 deportes y cuidar tu ciclo? Lo ponemos a prueba: ${b} ${m}`,
    patternZh: (b, m) => `高颜值腕表也能支持 120 种运动并精准管理生理期？深度实测 ${b} ${m}`,
    category: "question",
    angleLabel: "¿Moda o rendimiento real?",
    targetAudience: "Escépticas de la tecnología",
  },
  {
    pattern: (b, m) => `¿Qué reloj llevar para una boda y luego al entrenamiento del lunes? La respuesta es ${b} ${m}`,
    patternZh: (b, m) => `什么手表既能出席晚宴派对又能胜任周一晨跑？答案就是 ${b} ${m}`,
    category: "question",
    angleLabel: "¿Un solo reloj para todo?",
    targetAudience: "Mujeres que buscan practicidad",
  },
  {
    pattern: (b, m) => `¿Un smartwatch con pantalla de 390×390 y llamadas Bluetooth por este precio? Descubre ${b} ${m}`,
    patternZh: (b, m) => `拥有 390×390 高清屏和蓝牙通话且性价比极高？带你了解 ${b} ${m}`,
    category: "question",
    angleLabel: "¿Calidad prémium accesible?",
    targetAudience: "Cazadoras de chollos tecnológicos",
  },
  {
    pattern: (b, m) => `¿Realmente necesitas un reloj que mida tu estrés y fases de sueño? Esto descubrí con ${b} ${m}`,
    patternZh: (b, m) => `女性真的需要一块能监测压力与睡眠的智能表吗？分享我戴 ${b} ${m} 的真实感受`,
    category: "question",
    angleLabel: "¿Vale la pena para tu salud?",
    targetAudience: "Interesadas en bienestar mental",
  },

  // 7. Spec Power & Direct Tech (Especificaciones y Potencia)
  {
    pattern: (b, m) => `Pantalla táctil 1.27" HD 390×390 + 98% ratio + Cristal antihuellas: la nitidez del ${b} ${m}`,
    patternZh: (b, m) => `1.27 英寸 390×390 高清屏 + 98% 屏占比 + 抗指纹防刮玻璃：极清视觉 ${b} ${m}`,
    category: "spec_power",
    angleLabel: "Pantalla 1.27\" 390x390 HD",
    targetAudience: "Exigentes de la calidad visual",
  },
  {
    pattern: (b, m) => `Bluetooth 5.3 + Altavoz integrado + 100 contactos: llamadas cristalinas en ${b} ${m}`,
    patternZh: (b, m) => `蓝牙 5.3 高清通话 + 内置高音质扬声器 + 100 位常用联系人：清晰畅聊 ${b} ${m}`,
    category: "spec_power",
    angleLabel: "Bluetooth 5.3 llamadas HD",
    targetAudience: "Comunicación en movimiento",
  },
  {
    pattern: (b, m) => `Gestión de salud femenina + Ritmo cardíaco + SpO2 + Monitor de sueño en ${b} ${m}`,
    patternZh: (b, m) => `女性生理周期管理 + 24小时心率 + SpO2 血氧 + 科学睡眠监测：${b} ${m}`,
    category: "spec_power",
    angleLabel: "Suite de salud femenina",
    targetAudience: "Entusiastas del self-care",
  },
  {
    pattern: (b, m) => `120+ modos deportivos + Protección IP68 al agua y polvo: la resistencia del ${b} ${m}`,
    patternZh: (b, m) => `120+ 种专业运动模式 + IP68 级生活防尘防水：活力全开 ${b} ${m}`,
    category: "spec_power",
    angleLabel: "120+ deportes & IP68",
    targetAudience: "Deportistas todoterreno",
  },
  {
    pattern: (b, m) => `Doble correa milanesa de acero inoxidable + silicona hipoalergénica incluidas con ${b} ${m}`,
    patternZh: (b, m) => `出厂随附不锈钢米兰尼斯表带 + 亲肤硅胶表带双重组合：${b} ${m}`,
    category: "spec_power",
    angleLabel: "Pack doble correa incluido",
    targetAudience: "Compradoras que valoran el pack",
  },
  {
    pattern: (b, m) => `Carga magnética rápida + App GloryFit para iOS y Android con el nuevo ${b} ${m}`,
    patternZh: (b, m) => `便捷磁吸快速充电 + 兼容 iOS 与安卓系统的 GloryFit 专属 App：全新 ${b} ${m}`,
    category: "spec_power",
    angleLabel: "Carga magnética & GloryFit",
    targetAudience: "Usuarias de smartphones",
  },

  // Extra viral hooks
  {
    pattern: (b, m) => `El regalo perfecto para ella: diseño de alta costura, salud femenina y llamadas con ${b} ${m}`,
    patternZh: (b, m) => `送给女生的心动好礼：高定级饰品外观、女性健康管理与蓝牙通话兼备的 ${b} ${m}`,
    category: "all_mixed",
    angleLabel: "El regalo femenino ideal",
    targetAudience: "Buscadores de regalos especiales",
  },
  {
    pattern: (b, m) => `Unboxing ${b} ${m}: mira cómo brilla la correa milanesa y lo nítida que es su pantalla HD`,
    patternZh: (b, m) => `开箱 ${b} ${m}：感受米兰尼斯表带的璀璨光泽与 1.27 英寸高清屏幕的细腻质感`,
    category: "all_mixed",
    angleLabel: "Unboxing y primeras impresiones",
    targetAudience: "Consumidoras visuales de TikTok",
  },
  {
    pattern: (b, m) => `Combina tu ropa de oficina y tu ropa de gimnasio con el smartwatch joya ${b} ${m}`,
    patternZh: (b, m) => `轻松百搭职场正装与运动私服，珠宝级女性智能腕表 ${b} ${m}`,
    category: "all_mixed",
    angleLabel: "Moda y tecnología en armonía",
    targetAudience: "Aficionadas al estilo diario",
  },
  {
    pattern: (b, m) => `Cuida tu cuerpo, responde llamadas y luce espectacular todos los días con ${b} ${m}`,
    patternZh: (b, m) => `科学呵护身体、随时免提通话并保持每日出众颜值：这就是 ${b} ${m}`,
    category: "all_mixed",
    angleLabel: "Estilo y salud en tu muñeca",
    targetAudience: "Mujeres empoderadas",
  },
  {
    pattern: (b, m) => `Todo lo que necesitas en un smartwatch sin sacrificar tu estilo femenino: ${b} ${m}`,
    patternZh: (b, m) => `无需在智能功能与女性优雅美感之间做妥协：拥有 ${b} ${m} 就够了`,
    category: "all_mixed",
    angleLabel: "Elegancia sin compromisos",
    targetAudience: "Público femenino general",
  },
  {
    pattern: (b, m) => `¿Por qué elegir entre belleza y funcionalidad cuando puedes tener ambas con ${b} ${m}?`,
    patternZh: (b, m) => `何必在绝美颜值与硬核实用之间纠结？戴上 ${b} ${m} 两者兼得`,
    category: "all_mixed",
    angleLabel: "Belleza y potencia unidas",
    targetAudience: "Compradoras indecisas",
  },
  {
    pattern: (b, m) => `Descubre cómo ${b} ${m} se convirtió en el complemento favorito de mi rutina diaria`,
    patternZh: (b, m) => `看看 ${b} ${m} 如何成为我日常通勤、运动与自律生活中最离不开的贴身饰品`,
    category: "all_mixed",
    angleLabel: "Rutina diaria transformada",
    targetAudience: "Amantes de los vlogs diarios",
  },
  {
    pattern: (b, m) => `Tu salud hormonal, tus pasos y tus llamadas bajo control con el sofisticado ${b} ${m}`,
    patternZh: (b, m) => `女性健康、每日步数与高清通话一手掌控，优雅精致从 ${b} ${m} 开始`,
    category: "all_mixed",
    angleLabel: "Control total sofisticado",
    targetAudience: "Mujeres organizadas y modernas",
  },
];

// 50+ German TikTok Viral Hook Templates for FOSMET G58 (Damen Smartwatch)
export const G58_GERMAN_TEMPLATES: HookTemplate[] = [
  // 1. Pain Point / Counter-Intuitive (Schmerzpunkte, Mode & Frauengesundheit)
  {
    pattern: (b, m) => `Genug von klobigen Smartwatches, die nicht zu deinem Outfit passen? Die ${b} ${m} vereint Eleganz und Hightech`,
    patternZh: (b, m) => `厌倦了笨重丑陋且不搭衣服的智能手表？${b} ${m} 完美兼具珠宝级优雅美学与前沿科技`,
    category: "pain_point",
    angleLabel: "Schluss mit klobigen Uhren",
    targetAudience: "Modebewusste & stilvolle Frauen",
  },
  {
    pattern: (b, m) => `Vergisst du oft deinen Zyklus? Die ${b} ${m} trackt Periode, Eisprung und fruchtbare Tage auf den Punkt`,
    patternZh: (b, m) => `经常忘记生理周期？${b} ${m} 深度记录并精准预测经期、排卵期与易孕期`,
    category: "pain_point",
    angleLabel: "Präzises Zyklus-Tracking",
    targetAudience: "Frauen mit Fokus auf Hormongesundheit",
  },
  {
    pattern: (b, m) => `Warum Hunderte Euro für eine Modemarken-Uhr ohne smarte Features zahlen? Die ${b} ${m} kann alles`,
    patternZh: (b, m) => `为什么要花几百欧买毫无智能功能的传统时装表？${b} ${m} 让你两全其美`,
    category: "pain_point",
    angleLabel: "Bezahlbarer Luxus ohne Aufpreis",
    targetAudience: "Smarte Käuferinnen & Fashionistas",
  },
  {
    pattern: (b, m) => `Ständiges Uhrenwechseln zwischen Büro und Fitnessstudio? Die ${b} ${m} liefert Milanaise- & Silikonband direkt mit`,
    patternZh: (b, m) => `办公室与健身房频繁换表太麻烦？${b} ${m} 随盒标配精美米兰尼斯金属与运动硅胶双表带`,
    category: "pain_point",
    angleLabel: "Doppelarmband für jeden Anlass",
    targetAudience: "Vielseitige & aktive Frauen",
  },
  {
    pattern: (b, m) => `Hörst du dein Handy in der Handtasche nicht? Nimm Anrufe in HD-Qualität direkt über die ${b} ${m} an`,
    patternZh: (b, m) => `手机在手提包深处经常漏接电话？用 ${b} ${m} 抬腕即可进行高清蓝牙通话`,
    category: "pain_point",
    angleLabel: "Anrufe direkt am Handgelenk",
    targetAudience: "Berufstätige Frauen & Multitaskerinnen",
  },
  {
    pattern: (b, m) => `Dicke schwarze Ränder am Display? Die ${b} ${m} bietet 98% Screen-to-Body mit gestochen scharfen 390×390 HD`,
    patternZh: (b, m) => `告别粗黑边廉价屏幕！${b} ${m} 拥有 98% 超高屏占比与 390×390 视网膜级高清视效`,
    category: "pain_point",
    angleLabel: "Randloses 98% HD-Display",
    targetAudience: "Minimalistinnen & Design-Fans",
  },

  // 2. Efficiency & Lifestyle (Frauengesundheit, Bluetooth-Anrufe & Alltag)
  {
    pattern: (b, m) => `Intelligente Frauengesundheit: Menstruationszyklus, Eisprung und tägliche Erinnerungen mit der ${b} ${m}`,
    patternZh: (b, m) => `全方位关爱女性健康：月经周期追踪、排卵期智能提醒与日常健康关怀尽在 ${b} ${m}`,
    category: "efficiency",
    angleLabel: "Ganzheitliche Zyklusgesundheit",
    targetAudience: "Gesundheitsbewusste Frauen",
  },
  {
    pattern: (b, m) => `Telefoniere via Bluetooth und sieh WhatsApp-Nachrichten beim Schminken oder Kochen mit der ${b} ${m}`,
    patternZh: (b, m) => `化妆或烹饪时也能畅享蓝牙免提通话并秒看社交消息：实用全能 ${b} ${m}`,
    category: "efficiency",
    angleLabel: "Bluetooth 5.3 Telefonie",
    targetAudience: "Aktive & moderne Frauen",
  },
  {
    pattern: (b, m) => `Über 120 Sportmodi für Yoga, Pilates, Laufen und Workout präzise erfasst mit der ${b} ${m}`,
    patternZh: (b, m) => `涵盖瑜伽、普拉提、户外跑等 120+ 种运动模式，${b} ${m} 精确记录心率与卡路里`,
    category: "efficiency",
    angleLabel: "120+ Sportarten & Fitness",
    targetAudience: "Fitnessbegeisterte Frauen",
  },
  {
    pattern: (b, m) => `24/7 Überwachung von Herzfrequenz, SpO2-Blutsauerstoff, Blutdruck und Tiefschlafphasen mit der ${b} ${m}`,
    patternZh: (b, m) => `24小时全天候监测心率、SpO2 血氧与深度睡眠结构，${b} ${m} 呵护你的健康活力`,
    category: "efficiency",
    angleLabel: "Komplette 24/7 Biometrie",
    targetAudience: "Wellness- & Gesundheitsbewusste",
  },
  {
    pattern: (b, m) => `Steuere deine Lieblingsmusik und schieße Selfies aus der Ferne per Handgelenkschütteln mit der ${b} ${m}`,
    patternZh: (b, m) => `手腕轻轻一晃即刻远程控制手机拍照与音乐播放，${b} ${m} 随时定格完美瞬间`,
    category: "efficiency",
    angleLabel: "Kamera-Fernauslöser & Musik",
    targetAudience: "Content Creatorinnen & Reisende",
  },
  {
    pattern: (b, m) => `Sprachassistent per Doppelklick und SOS-Notruffunktion: Deine Sicherheit im Alltag mit der ${b} ${m}`,
    patternZh: (b, m) => `双击快捷唤醒语音助手，一键长按紧急 SOS 求助，${b} ${m} 带来满满日常安全感`,
    category: "efficiency",
    angleLabel: "Sprachassistent & SOS-Notruf",
    targetAudience: "Sicherheits- & Komfortbewusste",
  },

  // 3. Fashion & Aesthetics (Design, Milanaise-Band & Zifferblätter)
  {
    pattern: (b, m) => `Edles Milanaise-Armband fürs Büro und weiches Silikon fürs Gym: Das Styling-Highlight ${b} ${m}`,
    patternZh: (b, m) => `职场通勤搭配高级米兰尼斯表带，运动健身换上亲肤硅胶：百搭时尚单品 ${b} ${m}`,
    category: "gadget",
    angleLabel: "Flexibles Wechselarmband",
    targetAudience: "Liebhaberinnen von OOTD & Mode",
  },
  {
    pattern: (b, m) => `Gehärtetes Glas mit Anti-Fingerprint-Beschichtung und brillantes 1,27" HD-Display bei der ${b} ${m}`,
    patternZh: (b, m) => `高硬度防刮钢化玻璃结合抗指纹涂层，1.27 英寸视网膜级高清屏：奢雅质感 ${b} ${m}`,
    category: "gadget",
    angleLabel: "Gehärtetes Anti-Fingerprint-Glas",
    targetAudience: "Detailverliebte Premium-Käuferinnen",
  },
  {
    pattern: (b, m) => `Federleichtes Gehäuse und wunderschöne florale Zifferblätter: Die Schmuck-Smartwatch ${b} ${m}`,
    patternZh: (b, m) => `轻巧贴合的超薄机身搭配海量唯美花卉表盘：珠宝级女性智能饰品 ${b} ${m}`,
    category: "gadget",
    angleLabel: "Schmuckvolles Schlankdesign",
    targetAudience: "Elegante Damen & Trendsetterinnen",
  },
  {
    pattern: (b, m) => `IP68 Wasserdichtigkeit für Händewaschen, Duschen oder Joggen im Regen mit der ${b} ${m}`,
    patternZh: (b, m) => `IP68 级生活防尘防水，日常洗手、雨中慢跑皆可安心无忧佩戴：${b} ${m}`,
    category: "gadget",
    angleLabel: "IP68 wasserdicht & robust",
    targetAudience: "Sorgloser Alltagsgebrauch",
  },
  {
    pattern: (b, m) => `Speichere bis zu 100 Lieblingskontakte und wähle Nummern direkt am Display der ${b} ${m}`,
    patternZh: (b, m) => `支持同步 100 位常用联系人并在表盘快捷独立拨号：沟通顺畅无阻 ${b} ${m}`,
    category: "gadget",
    angleLabel: "100 Kontakte & Ziffernblock",
    targetAudience: "Schnelle & direkte Kommunikation",
  },
  {
    pattern: (b, m) => `Nahtlose Synchronisation mit der GloryFit App für iOS und Android mit der neuen ${b} ${m}`,
    patternZh: (b, m) => `与 GloryFit App 极速无缝同步，随时直观查看身体健康报告与运动轨迹：${b} ${m}`,
    category: "gadget",
    angleLabel: "GloryFit App Anbindung",
    targetAudience: "Smartphone-Nutzerinnen aller Art",
  },

  // 4. Smart Power (KI-Funktionen & Schlafanalyse)
  {
    pattern: (b, m) => `Aktiviere deinen Smartphone-Sprachassistenten mit einem einfachen Doppelklick auf die Taste der ${b} ${m}`,
    patternZh: (b, m) => `双击按键轻松呼出手机语音助理，查日程、定闹钟抬手即得：智能生活选 ${b} ${m}`,
    category: "ai_power",
    angleLabel: "Sprachsteuerung per Doppelklick",
    targetAudience: "Fans praktischer Alltags-Tools",
  },
  {
    pattern: (b, m) => `Präzise Schlafanalyse von 21:30 bis 12:00 Uhr: Wache jeden Morgen erholt auf mit der ${b} ${m}`,
    patternZh: (b, m) => `21:30 至次日 12:00 科学睡眠深度分析，帮助改善睡眠质量、焕发精神：${b} ${m}`,
    category: "ai_power",
    angleLabel: "Fundierte Schlafanalyse",
    targetAudience: "Schlafoptimiererinnen & Gestresste",
  },
  {
    pattern: (b, m) => `Geführte Atemübungen und Stresserkennung für mehr Ruhe im hektischen Berufsalltag mit der ${b} ${m}`,
    patternZh: (b, m) => `内置科学呼吸减压训练与实时压力监测，为忙碌工作带来片刻安宁：${b} ${m}`,
    category: "ai_power",
    angleLabel: "Stressmanagement & Atemtraining",
    targetAudience: "Studentinnen & Berufstätige",
  },
  {
    pattern: (b, m) => `Wettervorhersage, Vibrationswecker und Mini-Spiele direkt an deinem Handgelenk mit der ${b} ${m}`,
    patternZh: (b, m) => `实时天气预报、静音振动闹钟及手腕休闲益智游戏：多功能生活助手 ${b} ${m}`,
    category: "ai_power",
    angleLabel: "Smarte Alltagsbegleitung",
    targetAudience: "Strukturierte & planvolle Frauen",
  },
  {
    pattern: (b, m) => `Echtzeit-Benachrichtigungen für WhatsApp, Instagram und Anrufe diskret am Arm mit der ${b} ${m}`,
    patternZh: (b, m) => `社交应用消息与来电实时静音振动提醒，绝不遗漏任何重要资讯：${b} ${m}`,
    category: "ai_power",
    angleLabel: "Diskrete Benachrichtigungen",
    targetAudience: "Stets vernetzte Frauen",
  },
  {
    pattern: (b, m) => `Smartphone-Suchfunktion: Nie wieder langes Suchen nach dem Handy dank der ${b} ${m}`,
    patternZh: (b, m) => `内置一键寻找手机功能，手腕轻点即可让乱放的手机响铃：贴心好用 ${b} ${m}`,
    category: "ai_power",
    angleLabel: "Handy-Finder Funktion",
    targetAudience: "Praktisch denkende Frauen",
  },

  // 5. Secret Hack & Recommendations (Styling-Tipps & Hacks)
  {
    pattern: (b, m) => `Der Styling-Geheimtipp: Wie die Roségold-Akzente der ${b} ${m} jedes Business-Outfit aufwerten`,
    patternZh: (b, m) => `穿搭达人私藏技巧：用 ${b} ${m} 优雅玫瑰金点缀，瞬间提升日常职场穿搭高级感`,
    category: "secret_hack",
    angleLabel: "Styling-Geheimtipp für Outfits",
    targetAudience: "Mode-Bloggerinnen & Ästhetik-Fans",
  },
  {
    pattern: (b, m) => `Der Trick für perfekte Gruppenfotos: Schüttle einfach dein Handgelenk mit der ${b} ${m} als Auslöser`,
    patternZh: (b, m) => `拍闺蜜大合照无需别人帮忙的独家技巧：摇动 ${b} ${m} 即可远程遥控手机快门`,
    category: "secret_hack",
    angleLabel: "Fotoauslöser per Geste",
    targetAudience: "Selfie-Liebhaberinnen & Reisende",
  },
  {
    pattern: (b, m) => `Wie du deinen weiblichen Zyklus ganz natürlich und automatisch mit der ${b} ${m} App verstehst`,
    patternZh: (b, m) => `如何通过 ${b} ${m} 专属算法轻松读懂身体激素与生理周期变化`,
    category: "secret_hack",
    angleLabel: "Körperbewusstsein & Zyklus",
    targetAudience: "Familienplanung & Selbstfürsorge",
  },
  {
    pattern: (b, m) => `In 5 Sekunden vom Glamour-Look zum Sport-Look wechseln mit dem Schnellverschluss der ${b} ${m}`,
    patternZh: (b, m) => `5秒快拆快速换装：从高贵晚礼服到活力运动风随心切换的秘密就在 ${b} ${m}`,
    category: "secret_hack",
    angleLabel: "Armbandwechsel in 5 Sekunden",
    targetAudience: "Vielbeschäftigte Frauen",
  },
  {
    pattern: (b, m) => `Richte den SOS-Notruf per langem Tastendruck ein und fühle dich unterwegs immer sicher mit der ${b} ${m}`,
    patternZh: (b, m) => `一键设置长按紧急 SOS 呼救，独行或夜归时刻为你提供贴身守护：${b} ${m}`,
    category: "secret_hack",
    angleLabel: "SOS-Sicherheits-Notruf",
    targetAudience: "Sicherheitsbewusste Frauen",
  },
  {
    pattern: (b, m) => `Lade deine eigenen Lieblingsfotos als individuelles Zifferblatt auf die ${b} ${m}`,
    patternZh: (b, m) => `把心爱的美照、萌宠照片一键设为个性化专属表盘：高自由度定制 ${b} ${m}`,
    category: "secret_hack",
    angleLabel: "Eigenes Foto als Zifferblatt",
    targetAudience: "Kreative & Personalisierungs-Fans",
  },

  // 6. Curiosity & Questions (Virale Fragen)
  {
    pattern: (b, m) => `Ist das die schönste und vielseitigste Damen-Smartwatch des Jahres? Test der ${b} ${m}`,
    patternZh: (b, m) => `这会是今年颜值最高、功能最全的女性轻奢智能表吗？上手评测 ${b} ${m}`,
    category: "question",
    angleLabel: "Die schönste Damenuhr 2026?",
    targetAudience: "Trendbewusste Shopping-Fans",
  },
  {
    pattern: (b, m) => `Warum tragen jetzt alle Fashion-Creatorinnen auf TikTok die neue ${b} ${m}?`,
    patternZh: (b, m) => `为什么众多时尚博主与穿搭达人都在推荐这款全新的 ${b} ${m}？`,
    category: "question",
    angleLabel: "Warum tragen sie alle?",
    targetAudience: "TikTok-Trendfolgerinnen",
  },
  {
    pattern: (b, m) => `Kann eine elegante Schmuckuhr 120 Sportarten tracken und deinen Zyklus managen? Die ${b} ${m} im Härtetest`,
    patternZh: (b, m) => `一块首饰级手表能精准支持 120 种运动并呵护女性健康吗？实测 ${b} ${m}`,
    category: "question",
    angleLabel: "Schmuck oder echtes Sport-Tool?",
    targetAudience: "Technik-Kritikerinnen",
  },
  {
    pattern: (b, m) => `Welche Uhr passt perfekt zum Abendkleid und Montag früh zum Joggen? Die Antwort: ${b} ${m}`,
    patternZh: (b, m) => `哪款手表既能搭配晚礼服出席宴会，又能陪你周一晨跑？答案是 ${b} ${m}`,
    category: "question",
    angleLabel: "Eine Uhr für alle Lebenslagen?",
    targetAudience: "Praxisorientierte Frauen",
  },
  {
    pattern: (b, m) => `Ein 390×390 HD-Display mit Bluetooth-Telefonie zu diesem Preis? Das kann die ${b} ${m}`,
    patternZh: (b, m) => `390×390 视网膜高清屏加高清蓝牙通话竟有如此高性价比？了解 ${b} ${m}`,
    category: "question",
    angleLabel: "Premium-Qualität zum Bestpreis?",
    targetAudience: "Preis-Leistungs-Sucherinnen",
  },
  {
    pattern: (b, m) => `Brauchst du wirklich eine Uhr, die Stress, Schlaf und Zyklus misst? Meine Erfahrung mit der ${b} ${m}`,
    patternZh: (b, m) => `我们真的需要一块能监测压力、睡眠与经期的手表吗？我的 ${b} ${m} 真实体验`,
    category: "question",
    angleLabel: "Lohnt sich die Investition?",
    targetAudience: "Interessierte an Self-Care",
  },

  // 7. Spec Power & Direct Tech (Technische Spezifikationen)
  {
    pattern: (b, m) => `1,27" HD-Touchscreen mit 390×390 Auflösung + 98% Screen-Ratio + Anti-Fingerprint: Die ${b} ${m}`,
    patternZh: (b, m) => `1.27 英寸 390×390 高清屏 + 98% 屏占比 + 抗指纹防刮硬化玻璃：${b} ${m}`,
    category: "spec_power",
    angleLabel: "1,27\" 390x390 HD-Display",
    targetAudience: "Fans gestochen scharfer Displays",
  },
  {
    pattern: (b, m) => `Bluetooth 5.3 + Integrierter Lautsprecher + 100 Kontakte: Glasklare Anrufe mit der ${b} ${m}`,
    patternZh: (b, m) => `蓝牙 5.3 高清通话 + 独立扬声器麦克风 + 100 常用联系人：清晰畅聊 ${b} ${m}`,
    category: "spec_power",
    angleLabel: "Bluetooth 5.3 HD-Telefonie",
    targetAudience: "Unterwegs erreichbare Nutzerinnen",
  },
  {
    pattern: (b, m) => `Frauengesundheits-Management + Herzfrequenz + SpO2 + Schlaftracking in der ${b} ${m}`,
    patternZh: (b, m) => `女性周期健康管理 + 全天候心率 + SpO2 血氧 + 科学睡眠监测：${b} ${m}`,
    category: "spec_power",
    angleLabel: "Komplette Frauengesundheits-Suite",
    targetAudience: "Self-Care & Fitness-Fans",
  },
  {
    pattern: (b, m) => `120+ Sportmodi + IP68 Wasser- & Staubschutz: Höchste Zuverlässigkeit der ${b} ${m}`,
    patternZh: (b, m) => `120+ 种专业运动模式 + IP68 级防尘防水：活力全开持久耐用 ${b} ${m}`,
    category: "spec_power",
    angleLabel: "120+ Sportarten & IP68",
    targetAudience: "Allrounder-Sportlerinnen",
  },
  {
    pattern: (b, m) => `Doppelpack: Edles Edelstahl-Milanaiseband + hautfreundliches Silikonband bei der ${b} ${m}`,
    patternZh: (b, m) => `双表带超值组合：出厂自带精致米兰尼斯钢带 + 柔软舒适硅胶表带 ${b} ${m}`,
    category: "spec_power",
    angleLabel: "Doppelarmband-Set inklusive",
    targetAudience: "Käuferinnen mit Blick auf Zubehör",
  },
  {
    pattern: (b, m) => `Magnetisches Schnellladen + GloryFit App für iOS und Android mit der neuen ${b} ${m}`,
    patternZh: (b, m) => `便捷磁吸快速充电 + 兼容 iOS 与安卓系统的 GloryFit 专属 App：全新 ${b} ${m}`,
    category: "spec_power",
    angleLabel: "Magnetladung & GloryFit App",
    targetAudience: "Smartphone-Nutzerinnen",
  },

  // Extra viral hooks
  {
    pattern: (b, m) => `Das perfekte Geschenk für sie: Modisches Design, Frauengesundheit und Telefonie mit der ${b} ${m}`,
    patternZh: (b, m) => `送给女生的绝佳心动礼物：高颜值外观、女性健康管理与蓝牙通话兼备的 ${b} ${m}`,
    category: "all_mixed",
    angleLabel: "Das ideale Geschenk für Frauen",
    targetAudience: "Geschenkesuchende & Partner",
  },
  {
    pattern: (b, m) => `Unboxing ${b} ${m}: Wie edel das Milanaise-Band glänzt und wie scharf das Display strahlt`,
    patternZh: (b, m) => `开箱 ${b} ${m}：米兰尼斯表带的璀璨高级光泽与细腻清晰的高清屏幕令人惊艳`,
    category: "all_mixed",
    angleLabel: "Unboxing & Ersteindrücke",
    targetAudience: "TikTok-Visual-Liebhaberinnen",
  },
  {
    pattern: (b, m) => `Kombiniere deine Business-Garderobe und Sport-Kleidung mit der Schmuck-Smartwatch ${b} ${m}`,
    patternZh: (b, m) => `完美百搭职场通勤装与活力运动服，珠宝级女性轻奢智能表 ${b} ${m}`,
    category: "all_mixed",
    angleLabel: "Mode und Technologie im Einklang",
    targetAudience: "Modebegeisterte Damen",
  },
  {
    pattern: (b, m) => `Behalte deine Gesundheit im Blick, telefoniere freihändig und sieh umwerfend aus mit der ${b} ${m}`,
    patternZh: (b, m) => `时刻关注身体健康、随时免提通话并保持出众气质美感：尽在 ${b} ${m}`,
    category: "all_mixed",
    angleLabel: "Stil & Gesundheit am Handgelenk",
    targetAudience: "Selbstbewusste moderne Frauen",
  },
  {
    pattern: (b, m) => `Alles, was du von einer Smartwatch erwartest, ohne auf femininen Stil zu verzichten: ${b} ${m}`,
    patternZh: (b, m) => `拥有智能手表的全部实用功能，且不失女性优雅美学风范：${b} ${m}`,
    category: "all_mixed",
    angleLabel: "Feminin & kompromisslos smart",
    targetAudience: "Frauen aller Altersgruppen",
  },
  {
    pattern: (b, m) => `Warum zwischen Schönheit und Hightech entscheiden, wenn du beides haben kannst? ${b} ${m}`,
    patternZh: (b, m) => `何必在出众颜值与硬核科技之间做选择？戴上 ${b} ${m} 两者兼得`,
    category: "all_mixed",
    angleLabel: "Schönheit und Hightech vereint",
    targetAudience: "Unentschlossene Käuferinnen",
  },
  {
    pattern: (b, m) => `Erfahre, wie die ${b} ${m} zum unverzichtbaren Schmuckstück meiner Morgenroutine wurde`,
    patternZh: (b, m) => `看看 ${b} ${m} 如何成为我晨间穿搭、自律生活与日常通勤中最爱的手腕配饰`,
    category: "all_mixed",
    angleLabel: "Morgenroutine & Lifestyle",
    targetAudience: "Vlog- & Lifestyle-Interessierte",
  },
  {
    pattern: (b, m) => `Hormongesundheit, Schritte und Telefonate perfekt im Griff mit der stilvollen ${b} ${m}`,
    patternZh: (b, m) => `女性健康、每日步数与高清通话一手掌控，优雅从容体验 ${b} ${m}`,
    category: "all_mixed",
    angleLabel: "Souverän durch den Alltag",
    targetAudience: "Organisierte & moderne Frauen",
  },
];

export function generateG58AlgorithmicTitles(
  brand: string,
  model: string,
  category: AngleCategory,
  customKeyword?: string,
  customTags?: string,
  targetLanguage: TargetLanguage = "es"
): GeneratedTitle[] {
  const isGerman = targetLanguage === "de";
  const templates = isGerman ? G58_GERMAN_TEMPLATES : G58_SPANISH_TEMPLATES;
  const defaultTags = isGerman ? G58_GERMAN_TAGS : G58_SPANISH_TAGS;
  const tags = customTags && customTags.trim().length > 0 ? customTags.trim() : defaultTags;

  let pool = templates;
  if (category !== "all_mixed") {
    const filtered = templates.filter((t) => t.category === category);
    if (filtered.length > 0) {
      pool = filtered;
    }
  }

  // Shuffle pool to ensure varied sequence on every generation
  const shuffledPool = [...pool].sort(() => Math.random() - 0.5);

  const results: GeneratedTitle[] = [];
  const seenHooks = new Set<string>();

  const spanishPrefixPairs: [string, string][] = [
    ["¡Novedad viral!", "【爆款重磅首发！】"],
    ["¡Súper elegante!", "【绝美优雅！】"],
    ["¡Imprescindible!", "【必备好物！】"],
    ["¡El secreto de moda!", "【时尚私藏秘笈！】"],
    ["¡Top ventas!", "【热销爆款！】"],
    ["¡Mi favorito!", "【我的心水爱用！】"],
    ["¡Ojo chicas!", "【姐妹们看过来！】"],
    ["¡No te lo pierdas!", "【千万别错过！】"],
    ["【Look Femenino】", "【轻奢女性穿搭】"],
    ["【Review Real】", "【真实深度体验】"],
    ["【Must-Have 2026】", "【2026必入单品】"],
    ["【Salud y Estilo】", "【健康与美学】"]
  ];

  const spanishSuffixPairs: [string, string][] = [
    [" ¡Una auténtica joya!", " 简直就是手腕上的珠宝！"],
    [" ¡Combina con todo!", " 怎么搭都好看！"],
    [" ¡Lo vas a amar!", " 戴上就会爱不释手！"],
    [" ¡El accesorio del año!", " 年度最值得买的饰品！"],
    [" ¡100% recomendado!", " 100%高分力荐！"],
    [" ¡Súper práctico!", " 既好看又超级实用！"]
  ];

  const germanPrefixPairs: [string, string][] = [
    ["Neuheit!", "【重磅首发新品！】"],
    ["Wunderschön!", "【绝美心动！】"],
    ["Must-Have!", "【必入清单！】"],
    ["Geheimtipp!", "【私藏推荐！】"],
    ["Top-Empfehlung!", "【店长力荐！】"],
    ["Bestseller!", "【热销榜首！】"],
    ["Achtung Mädels!", "【姐妹们注意啦！】"],
    ["Unglaublich elegant!", "【令人惊叹的高级感！】"],
    ["【Outfit-Tipp】", "【穿搭秘籍】"],
    ["【Echter Test】", "【真实上手测评】"],
    ["【Frauengesundheit】", "【女性健康守护】"],
    ["【Top 2026】", "【2026年度优选】"]
  ];

  const germanSuffixPairs: [string, string][] = [
    [" Ein echtes Schmuckstück!", " 宛如真正的高定珠宝！"],
    [" Passt zu jedem Outfit!", " 百搭各种日常风格！"],
    [" Absolut verliebt!", " 一眼沦陷！"],
    [" 100% Kaufempfehlung!", " 100%强烈推荐！"],
    [" Unbedingt ansehen!", " 一定要亲自看看！"],
    [" So elegant!", " 气质太优雅了！"]
  ];

  const prefixPairs = isGerman ? germanPrefixPairs : spanishPrefixPairs;
  const suffixPairs = isGerman ? germanSuffixPairs : spanishSuffixPairs;

  let templateIdx = 0;
  let attempts = 0;

  while (results.length < 50 && attempts < 300) {
    attempts++;
    const tmpl = shuffledPool[templateIdx % shuffledPool.length];
    templateIdx++;

    let hook = tmpl.pattern(brand, model, customKeyword);
    let hookZh = tmpl.patternZh ? tmpl.patternZh(brand, model, customKeyword) : "";

    // Apply smart dynamic styling permutations
    const roll = Math.random();
    if (roll < 0.35 && !hook.startsWith("¡") && !hook.startsWith("【") && !hook.startsWith("Neuheit") && !hook.startsWith("Wunderschön")) {
      const [prefix, pZh] = prefixPairs[Math.floor(Math.random() * prefixPairs.length)];
      hook = `${prefix} ${hook}`;
      if (hookZh) {
        hookZh = `${pZh} ${hookZh}`;
      }
    } else if (roll > 0.70 && hook.length < 70 && !hook.endsWith("!") && !hook.endsWith("?")) {
      const [suffix, sZh] = suffixPairs[Math.floor(Math.random() * suffixPairs.length)];
      hook = `${hook}${suffix}`;
      if (hookZh) {
        hookZh = `${hookZh} ${sZh.trim()}`;
      }
    }

    if (customKeyword && customKeyword.trim().length > 0) {
      const kw = customKeyword.trim();
      if (!hook.toLowerCase().includes(kw.toLowerCase())) {
        if (Math.random() > 0.3) {
          hook = `[${kw}] ${hook}`;
          if (hookZh) {
            hookZh = `【${kw}】${hookZh}`;
          }
        }
      }
    }

    // Ensure brand and model exist
    if (!hook.includes(brand) || !hook.includes(model)) {
      hook = `${brand} ${model} | ${hook}`;
    }

    // Uniqueness check
    if (seenHooks.has(hook)) {
      continue;
    }
    seenHooks.add(hook);

    const fullTitle = `${hook} ${tags}`;

    results.push({
      id: `g58-${targetLanguage}-${results.length + 1}-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 6)}`,
      productId: "g58",
      title: fullTitle,
      hook: hook,
      tags: tags,
      angle: tmpl.angleLabel,
      angleCategory: tmpl.category,
      targetAudience: tmpl.targetAudience,
      charCount: fullTitle.length,
      hookCharCount: hook.length,
      language: targetLanguage,
      createdAt: new Date().toISOString(),
      translationZh: hookZh || undefined,
    });
  }

  return results.slice(0, 50);
}
