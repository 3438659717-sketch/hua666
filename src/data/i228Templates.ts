import { AngleCategory, GeneratedTitle, ProductId, TargetLanguage } from "../types";

export const I228_SPANISH_TAGS = "#FOSMET #I228 #Salud de la mujer #Atuendo #reloj inteligente";
export const I228_GERMAN_TAGS = "#FOSMET #I228 #Frauengesundheit #Outfit #Smartwatch";
export const I228_FIXED_TAGS = I228_SPANISH_TAGS;

interface HookTemplate {
  pattern: (brand: string, model: string, keyword?: string) => string;
  patternZh: (brand: string, model: string, keyword?: string) => string;
  category: AngleCategory;
  angleLabel: string;
  targetAudience: string;
}

// 50 Spanish TikTok Viral Hook Templates for FOSMET I228 (Women's Fashion Smartwatch) with Paired Chinese Translations
export const I228_SPANISH_TEMPLATES: HookTemplate[] = [
  // 1. Pain Point / Counter-Intuitive (Dolor & Anti-intuitivo)
  {
    pattern: (b, m) => `¿Cansada de smartwatches enormes que arruinan tu outfit? ${b} ${m} combina elegancia femenina y alta tecnología`,
    patternZh: (b, m) => `受够了笨重破坏整体穿搭的智能手表？${b} ${m} 将女性优雅与前沿科技完美融合`,
    category: "pain_point",
    angleLabel: "Adiós a los relojes toscos",
    targetAudience: "Mujeres amantes de la moda y la elegancia",
  },
  {
    pattern: (b, m) => `¿Siempre se te olvida en qué fase de tu ciclo estás? ${b} ${m} cuida tu salud femenina día a día`,
    patternZh: (b, m) => `总是记不清生理期处于哪个阶段？${b} ${m} 贴心守护女性健康每一天`,
    category: "pain_point",
    angleLabel: "Control menstrual y ovulación",
    targetAudience: "Mujeres que priorizan su bienestar",
  },
  {
    pattern: (b, m) => `¿Pagar una fortuna por un smartwatch bonito sin funciones reales? ${b} ${m} lo tiene absolutamente todo`,
    patternZh: (b, m) => `何必花大价钱买徒有其表的花瓶手表？${b} ${m} 颜值与强大功能应有尽有`,
    category: "pain_point",
    angleLabel: "Lujo accesible sin sobreprecio",
    targetAudience: "Compradoras inteligentes y fashionistas",
  },
  {
    pattern: (b, m) => `¿Tener que cambiar de reloj entre el gimnasio y una cena elegante? ${b} ${m} incluye correas milanesa y silicona`,
    patternZh: (b, m) => `健身和晚宴之间还要换手表？${b} ${m} 标配米兰尼斯金属与运动硅胶双表带自由切换`,
    category: "pain_point",
    angleLabel: "Doble correa para cada ocasión",
    targetAudience: "Mujeres activas y versátiles",
  },
  {
    pattern: (b, m) => `¿No escuchas el móvil en el bolso y pierdes llamadas urgentes? Responde llamadas Bluetooth con ${b} ${m}`,
    patternZh: (b, m) => `手机放在包里经常漏接重要电话？用 ${b} ${m} 腕上蓝牙通话一键接听不漏音`,
    category: "pain_point",
    angleLabel: "Llamadas Bluetooth desde la muñeca",
    targetAudience: "Mujeres ocupadas y profesionales",
  },
  {
    pattern: (b, m) => `¿Pantallas con marcos gruesos que parecen del siglo pasado? ${b} ${m} tiene 98% de pantalla HD 390×390`,
    patternZh: (b, m) => `还在忍受大黑边屏幕？${b} ${m} 搭载 98% 屏占比 390×390 高清纯净大屏`,
    category: "pain_point",
    angleLabel: "Pantalla ultranítida sin bordes",
    targetAudience: "Amantes del diseño refinado",
  },
  {
    pattern: (b, m) => `¿Tu reloj actual no aguanta el sudor ni la lluvia? ${b} ${m} cuenta con protección IP68 total`,
    patternZh: (b, m) => `现有手表不防汗水和雨水？${b} ${m} 拥有 IP68 专业级防尘防水认证`,
    category: "pain_point",
    angleLabel: "Resistencia IP68 al agua",
    targetAudience: "Deportistas y amantes del fitness",
  },
  {
    pattern: (b, m) => `¿Te despiertas cansada sin saber por qué? ${b} ${m} monitoriza tu sueño profundo, ligero y vigilia 24/7`,
    patternZh: (b, m) => `起床总是莫名疲倦？${b} ${m} 全天候 24/7 深度分析深睡、浅睡与清醒周期`,
    category: "pain_point",
    angleLabel: "Análisis científico del sueño",
    targetAudience: "Mujeres que buscan mejorar su descanso",
  },
  {
    pattern: (b, m) => `¿Buscando un regalo perfecto y elegante para una mujer especial? ${b} ${m} enamora a primera vista`,
    patternZh: (b, m) => `正在为心仪的女生寻找完美高档的礼物？${b} ${m} 让人一眼沦陷`,
    category: "pain_point",
    angleLabel: "El regalo perfecto para ella",
    targetAudience: "Regalos para aniversarios o cumpleaños",
  },
  {
    pattern: (b, m) => `¿Odias las huellas y arañazos en la pantalla de tu reloj? ${b} ${m} incluye cristal de alta dureza antihuellas`,
    patternZh: (b, m) => `讨厌表盘沾满指纹与划痕？${b} ${m} 采用高硬度防指纹矿物强化玻璃`,
    category: "pain_point",
    angleLabel: "Cristal resistente antihuellas",
    targetAudience: "Usuarios exigentes con la durabilidad",
  },

  // 2. Efficiency & Lifestyle (Salud Femenina & Productividad)
  {
    pattern: (b, m) => `Salud de la mujer en tu muñeca: seguimiento de periodo, ovulación y recordatorios diarios con ${b} ${m}`,
    patternZh: (b, m) => `手腕上的女性健康管家：${b} ${m} 智能追踪经期、排卵期与日常贴心提醒`,
    category: "efficiency",
    angleLabel: "Gestión menstrual completa",
    targetAudience: "Cuidado de la salud femenina",
  },
  {
    pattern: (b, m) => `Llamadas Bluetooth 5.3 ultraclaras, teclado numérico y 100 contactos favoritos con ${b} ${m}`,
    patternZh: (b, m) => `超清蓝牙 5.3 通话，支持独立拨号盘与 100 位常用联系人同步：${b} ${m}`,
    category: "efficiency",
    angleLabel: "Conectividad Bluetooth 5.3",
    targetAudience: "Profesionales y estudiantes multitask",
  },
  {
    pattern: (b, m) => `Monitoreo 24/7 de frecuencia cardíaca, SpO₂ y descanso nocturno con ${b} ${m}`,
    patternZh: (b, m) => `24/7 全天候心率、血氧饱和度与夜间睡眠健康监测：${b} ${m}`,
    category: "efficiency",
    angleLabel: "Monitoreo vital integral 24/7",
    targetAudience: "Mujeres enfocadas en la salud preventiva",
  },
  {
    pattern: (b, m) => `120+ modos deportivos para yoga, running y fitness con registro de calorías en ${b} ${m}`,
    patternZh: (b, m) => `覆盖瑜伽、跑步与健身等 120+ 运动模式，精准记录卡路里消耗：${b} ${m}`,
    category: "efficiency",
    angleLabel: "120+ modos deportivos",
    targetAudience: "Apasionadas del deporte y entrenamiento",
  },
  {
    pattern: (b, m) => `Control de música, tiempo meteorológico y asistente de voz en tu muñeca con ${b} ${m}`,
    patternZh: (b, m) => `手腕一键控制音乐播放、实时天气与语音助手：${b} ${m} 打造智慧生活`,
    category: "efficiency",
    angleLabel: "Ecosistema inteligente diario",
    targetAudience: "Amantes de la comodidad diaria",
  },
  {
    pattern: (b, m) => `Toma fotos a distancia agitando tu muñeca para tus mejores selfies con ${b} ${m}`,
    patternZh: (b, m) => `摇一摇手腕远程遥控拍照，随时定格自拍最美瞬间：${b} ${m}`,
    category: "efficiency",
    angleLabel: "Disparador remoto para fotos",
    targetAudience: "Creadoras de contenido y viajeras",
  },
  {
    pattern: (b, m) => `Notificaciones al instante de WhatsApp, llamadas y redes sociales con ${b} ${m}`,
    patternZh: (b, m) => `WhatsApp、来电与社交软件消息即时推送提醒：${b} ${m}`,
    category: "efficiency",
    angleLabel: "Notificaciones instantáneas",
    targetAudience: "Personas hiperconectadas",
  },
  {
    pattern: (b, m) => `Planifica tu maternidad o tu bienestar con el registro de embarazo y ciclo en ${b} ${m}`,
    patternZh: (b, m) => `记录孕期与生理周期贴心陪伴女性每个阶段：${b} ${m}`,
    category: "efficiency",
    angleLabel: "Acompañamiento en el embarazo",
    targetAudience: "Futuras madres y bienestar femenino",
  },
  {
    pattern: (b, m) => `Encuentra tu móvil en segundos y gestiona tus alarmas diarias directamente con ${b} ${m}`,
    patternZh: (b, m) => `双向查找手机、管理日常闹钟：用 ${b} ${m} 让生活井井有条`,
    category: "efficiency",
    angleLabel: "Herramientas de utilidad diaria",
    targetAudience: "Organización personal eficiente",
  },
  {
    pattern: (b, m) => `Pantalla táctil HD de 1.27\" con colores vibrantes y fluidez total en ${b} ${m}`,
    patternZh: (b, m) => `1.27 英寸高清触控彩屏，色彩鲜活画面丝滑细腻：${b} ${m}`,
    category: "efficiency",
    angleLabel: "Pantalla HD ultrafluida",
    targetAudience: "Entusiastas de la tecnología",
  },

  // 3. Gadget & Fashion Outfit (Atuendo & Moda)
  {
    pattern: (b, m) => `El accesorio imprescindible para elevar cualquier outfit: ${b} ${m} con doble correa milanesa y silicona`,
    patternZh: (b, m) => `提升整套穿搭高级感的气质首饰：${b} ${m} 配备米兰金属与亲肤硅胶双表带`,
    category: "gadget",
    angleLabel: "El accesorio de moda definitivo",
    targetAudience: "Amantes del estilo y OOTD",
  },
  {
    pattern: (b, m) => `De la oficina al gimnasio sin cambiar de reloj: descubre la versatilidad de ${b} ${m}`,
    patternZh: (b, m) => `从职场通勤到健身房无需换表：感受 ${b} ${m} 的百搭多变魅力`,
    category: "gadget",
    angleLabel: "Versatilidad de moda total",
    targetAudience: "Mujeres elegantes y activas",
  },
  {
    pattern: (b, m) => `Elegancia metálica pulida y diseño ultradelgado: así luce ${b} ${m} en tu muñeca`,
    patternZh: (b, m) => `抛光金属边框与超薄修身机身：这就是佩戴 ${b} ${m} 的高级腕上风采`,
    category: "gadget",
    angleLabel: "Diseño ultradelgado y elegante",
    targetAudience: "Fashionistas y estilo sofisticado",
  },
  {
    pattern: (b, m) => `Esferas de reloj personalizables para combinar con cada vestido o look con ${b} ${m}`,
    patternZh: (b, m) => `海量自定义个性表盘，随心搭配每一件心仪连衣裙与穿搭：${b} ${m}`,
    category: "gadget",
    angleLabel: "Esferas personalizadas para cada look",
    targetAudience: "Creadoras de tendencias",
  },
  {
    pattern: (b, m) => `Brillo perfecto incluso bajo el sol con la pantalla 390×390 HD de ${b} ${m}`,
    patternZh: (b, m) => `强光户外依然通透清晰！${b} ${m} 搭载 390×390 超高清视网膜显示屏`,
    category: "gadget",
    angleLabel: "Visibilidad cristalina bajo el sol",
    targetAudience: "Uso diario en exteriores",
  },
  {
    pattern: (b, m) => `Un reloj inteligente diseñado para mujeres que no renuncian a la elegancia: ${b} ${m}`,
    patternZh: (b, m) => `专为绝不向平庸妥协的精致女性打造的时尚智能手表：${b} ${m}`,
    category: "gadget",
    angleLabel: "Feminidad y sofisticación",
    targetAudience: "Público femenino exigente",
  },
  {
    pattern: (b, m) => `Ligero, cómodo y estilizado: no querrás quitártelo nunca con ${b} ${m}`,
    patternZh: (b, m) => `轻盈修纤、触感无感：戴上 ${b} ${m} 就不想摘下来的舒适体验`,
    category: "gadget",
    angleLabel: "Comodidad de uso prolongado",
    targetAudience: "Uso continuo día y noche",
  },
  {
    pattern: (b, m) => `El match perfecto para tu look casual o de fiesta: ${b} ${m} en tu muñeca`,
    patternZh: (b, m) => `日常休闲与派对聚会的点睛之笔：腕间闪耀的 ${b} ${m}`,
    category: "gadget",
    angleLabel: "Match para looks casual y fiesta",
    targetAudience: "Mujeres jóvenes y profesionales",
  },
  {
    pattern: (b, m) => `Protección IP68 y acabados prémium: la joya tecnológica que estabas esperando es ${b} ${m}`,
    patternZh: (b, m) => `IP68 防水与高端珠宝级工艺：你一直在等待的科技饰品就是 ${b} ${m}`,
    category: "gadget",
    angleLabel: "Joya tecnológica prémium",
    targetAudience: "Buscadoras de calidad y estilo",
  },
  {
    pattern: (b, m) => `¿Correa de malla milanesa o silicona deportiva? Con ${b} ${m} tienes ambas incluidas`,
    patternZh: (b, m) => `米兰尼斯优雅网带还是运动轻弹硅胶？入手 ${b} ${m} 即可同时拥有两条`,
    category: "gadget",
    angleLabel: "Pack completo de dos correas",
    targetAudience: "Compradoras que valoran los extras",
  },

  // 4. AI & Smart Innovation (Tecnología & Asistente Inteligente)
  {
    pattern: (b, m) => `Asistente de voz en tu muñeca: pide información y controla tu día con ${b} ${m}`,
    patternZh: (b, m) => `腕上专属语音助手：用 ${b} ${m} 随时查天气、设日程掌控精致每一天`,
    category: "ai_power",
    angleLabel: "Asistente de voz inteligente",
    targetAudience: "Amantes del control inteligente",
  },
  {
    pattern: (b, m) => `Llamadas bidireccionales con altavoz de alta definición integrado en ${b} ${m}`,
    patternZh: (b, m) => `机身内置高保真扬声器与高清降噪麦克风：${b} ${m} 带来清晰双向通话`,
    category: "ai_power",
    angleLabel: "Altavoz HD y micrófono claro",
    targetAudience: "Usuarios que valoran la claridad de audio",
  },
  {
    pattern: (b, m) => `Conexión Bluetooth 5.3 estable de ultra bajo consumo energético con ${b} ${m}`,
    patternZh: (b, m) => `蓝牙 5.3 超低功耗高速连接，稳定不掉线：${b} ${m}`,
    category: "ai_power",
    angleLabel: "Bluetooth 5.3 de bajo consumo",
    targetAudience: "Tecnología de última generación",
  },
  {
    pattern: (b, m) => `Algoritmos avanzados de monitorización de SpO₂ y frecuencia cardíaca en ${b} ${m}`,
    patternZh: (b, m) => `搭载自研高阶生物传感算法，精准测量血氧与实时心率：${b} ${m}`,
    category: "ai_power",
    angleLabel: "Algoritmos biométricos avanzados",
    targetAudience: "Salud y seguimiento corporal",
  },
  {
    pattern: (b, m) => `Sincronización fluida de datos de salud y deportes con la app en ${b} ${m}`,
    patternZh: (b, m) => `运动轨迹与各项健康指标秒级同步手机 App：${b} ${m}`,
    category: "ai_power",
    angleLabel: "Sincronización rápida con la App",
    targetAudience: "Entusiastas del fitness tracking",
  },
  {
    pattern: (b, m) => `Respuesta rápida y navegación táctil sin retardos en ${b} ${m}`,
    patternZh: (b, m) => `零卡顿触控交互与丝滑界面动效：畅享 ${b} ${m} 极致操控感`,
    category: "ai_power",
    angleLabel: "Navegación táctil ultrarrápida",
    targetAudience: "Experiencia de usuario fluida",
  },
  {
    pattern: (b, m) => `Despierta la pantalla con un simple giro de muñeca gracias a los sensores de ${b} ${m}`,
    patternZh: (b, m) => `抬腕即亮屏，敏锐重力感应让查看时间与消息无比优雅：${b} ${m}`,
    category: "ai_power",
    angleLabel: "Encendido inteligente por giro de muñeca",
    targetAudience: "Comodidad en cualquier momento",
  },
  {
    pattern: (b, m) => `Función de búsqueda bidireccional de móvil y reloj con ${b} ${m}`,
    patternZh: (b, m) => `手表一键呼叫查找手机、防丢警报贴心守护：${b} ${m}`,
    category: "ai_power",
    angleLabel: "Localización inteligente antipérdida",
    targetAudience: "Personas prácticas y despistadas",
  },
  {
    pattern: (b, m) => `Recordatorio de sedentarismo e hidratación para mantenerte activa con ${b} ${m}`,
    patternZh: (b, m) => `久坐提醒与定时喝水关怀，助你养成健康生活好习惯：${b} ${m}`,
    category: "ai_power",
    angleLabel: "Recordatorios de hábitos saludables",
    targetAudience: "Oficinistas y trabajadoras remotas",
  },
  {
    pattern: (b, m) => `Registro inteligente de fases lunares y pronóstico del tiempo en ${b} ${m}`,
    patternZh: (b, m) => `实时天气预报与月相变化一屏尽览：出行尽在掌握的 ${b} ${m}`,
    category: "ai_power",
    angleLabel: "Pronóstico del clima en tiempo real",
    targetAudience: "Planificación de salidas y eventos",
  },

  // 5. Secret Hack / Spec Power / Best Value (Secreto, Calidad-Precio & Especificaciones)
  {
    pattern: (b, m) => `El secreto de las chicas con más estilo: el smartwatch ${b} ${m} que parece de alta joyería`,
    patternZh: (b, m) => `时髦女生私藏的穿搭秘密：看起来宛如高定珠宝的智能手表 ${b} ${m}`,
    category: "secret_hack",
    angleLabel: "El secreto de estilo mejor guardado",
    targetAudience: "Comunidad fashionista de TikTok",
  },
  {
    pattern: (b, m) => `¿Por qué todo el mundo está hablando de ${b} ${m}? 1.27\" HD, llamadas Bluetooth y salud femenina`,
    patternZh: (b, m) => `为什么全网都在热烈讨论 ${b} ${m}？1.27 英寸高清屏、蓝牙通话与女性健康守护三合一`,
    category: "secret_hack",
    angleLabel: "Tendencia viral en redes",
    targetAudience: "Buscadoras de productos virales",
  },
  {
    pattern: (b, m) => `Todo lo que necesitas en un smartwatch sin gastar de más: descubre ${b} ${m}`,
    patternZh: (b, m) => `无需为品牌溢价买单！你想要的一切功能都在 ${b} ${m} 中高性价比呈现`,
    category: "spec_power",
    angleLabel: "Imbatible relación calidad-precio",
    targetAudience: "Consumidoras inteligentes",
  },
  {
    pattern: (b, m) => `1.27 pulgadas, 390×390 px, 98% pantalla y cristal antihuellas: especificaciones prémium en ${b} ${m}`,
    patternZh: (b, m) => `1.27英寸、390×390分辨率、98%屏占比与防指纹玻璃：${b} ${m} 旗舰硬核配置`,
    category: "spec_power",
    angleLabel: "Ficha técnica prémium",
    targetAudience: "Apasionadas de las especificaciones",
  },
  {
    pattern: (b, m) => `El unboxing que estabas esperando: ${b} ${m} con dos correas intercambiables`,
    patternZh: (b, m) => `让人心动的开箱时刻：标配两条高质感表带的 ${b} ${m}`,
    category: "secret_hack",
    angleLabel: "Unboxing de lujo y accesorios",
    targetAudience: "Espectadores de reseñas y unboxings",
  },
  {
    pattern: (b, m) => `La combinación definitiva de salud femenina, moda y llamadas: ${b} ${m}`,
    patternZh: (b, m) => `女性健康、时尚首饰与高清通话的终极组合：${b} ${m}`,
    category: "secret_hack",
    angleLabel: "La fórmula 3 en 1 definitiva",
    targetAudience: "Público general femenino",
  },
  {
    pattern: (b, m) => `120+ deportes, monitor SpO₂ y resistencia IP68: pon a prueba ${b} ${m}`,
    patternZh: (b, m) => `120+ 运动模式、血氧健康监测与 IP68 防水：经得起深度考验的 ${b} ${m}`,
    category: "spec_power",
    angleLabel: "Máximo rendimiento deportivo",
    targetAudience: "Deportistas y amantes del aire libre",
  },
  {
    pattern: (b, m) => `El smartwatch que elevará tu rutina diaria al siguiente nivel: ${b} ${m}`,
    patternZh: (b, m) => `让你的日常生活与自律状态进阶升级的时尚智能手表：${b} ${m}`,
    category: "secret_hack",
    angleLabel: "Eleva tu rutina diaria",
    targetAudience: "Mujeres enfocadas en el autocuidado",
  },
  {
    pattern: (b, m) => `¿Buscas un reloj bonito, ligero y con batería duradera? ${b} ${m} es la respuesta`,
    patternZh: (b, m) => `寻找一款轻巧好看且续航持久的女表？${b} ${m} 就是完美答案`,
    category: "secret_hack",
    angleLabel: "Ligereza y gran autonomía",
    targetAudience: "Usuarios que buscan comodidad total",
  },
  {
    pattern: (b, m) => `Descubre por qué ${b} ${m} es el reloj inteligente para mujer más recomendado del año`,
    patternZh: (b, m) => `揭秘为什么 ${b} ${m} 成为今年口碑最赞的女性时尚智能手表`,
    category: "secret_hack",
    angleLabel: "El más recomendado del año",
    targetAudience: "Compradoras que buscan lo mejor",
  },
];

// 50 German TikTok Viral Hook Templates for FOSMET I228 (Damen-Fashion-Smartwatch) with Paired Chinese Translations
export const I228_GERMAN_TEMPLATES: HookTemplate[] = [
  // 1. Pain Point / Counter-Intuitive (Schmerzpunkt & Eleganz)
  {
    pattern: (b, m) => `Satt von klobigen Smartwatches, die jedes Outfit ruinieren? ${b} ${m} vereint feminine Eleganz & Hightech`,
    patternZh: (b, m) => `受够了笨重破坏整体穿搭的智能手表？${b} ${m} 将女性优雅与前沿科技完美融合`,
    category: "pain_point",
    angleLabel: "Schluss mit klobigen Uhren",
    targetAudience: "Stilbewusste & modebegeisterte Frauen",
  },
  {
    pattern: (b, m) => `Vergisst du ständig, in welcher Zyklusphase du bist? ${b} ${m} begleitet deine Frauengesundheit jeden Tag`,
    patternZh: (b, m) => `总是记不清生理期处于哪个阶段？${b} ${m} 每天贴心守护女性健康`,
    category: "pain_point",
    angleLabel: "Zyklus- & Eisprung-Tracker",
    targetAudience: "Frauen mit Fokus auf Wohlbefinden",
  },
  {
    pattern: (b, m) => `Warum 300 € für eine schöne Smartwatch ohne echte Features zahlen? ${b} ${m} kann einfach alles`,
    patternZh: (b, m) => `何必花300欧元买华而不实的贵价手表？${b} ${m} 颜值与强大功能全都有`,
    category: "pain_point",
    angleLabel: "Luxus-Look zum Spitzenpreis",
    targetAudience: "Preisbewusste Fashion-Käuferinnen",
  },
  {
    pattern: (b, m) => `Zwischen Fitnessstudio und Dinner die Uhr wechseln? ${b} ${m} kommt direkt mit Milanese- & Silikonband`,
    patternZh: (b, m) => `健身房和晚宴之间还要换手表？${b} ${m} 直接标配米兰尼斯金属与硅胶双表带`,
    category: "pain_point",
    angleLabel: "Zwei Armbänder inklusive",
    targetAudience: "Aktive & vielseitige Frauen",
  },
  {
    pattern: (b, m) => `Handy tief in der Tasche und wichtigen Anruf verpasst? Mit ${b} ${m} telefonierst du direkt per Bluetooth`,
    patternZh: (b, m) => `手机放在包底经常漏接重要来电？用 ${b} ${m} 腕上蓝牙通话一键直连`,
    category: "pain_point",
    angleLabel: "Bluetooth 5.3 Anrufe",
    targetAudience: "Berufstätige & vielbeschäftigte Frauen",
  },
  {
    pattern: (b, m) => `Dicke schwarze Displayränder von gestern? ${b} ${m} begeistert mit 98 % Screen-Ratio & 390×390 HD`,
    patternZh: (b, m) => `还在忍受过时的大黑边屏幕？${b} ${m} 拥有 98% 高屏占比 390×390 高清大屏`,
    category: "pain_point",
    angleLabel: "Randloses 1,27\" HD Display",
    targetAudience: "Design- & Technik-Liebhaberinnen",
  },
  {
    pattern: (b, m) => `Deine alte Uhr verträgt weder Regen noch Schweiß? ${b} ${m} schützt dich dank IP68 zuverlässig im Alltag`,
    patternZh: (b, m) => `旧手表既不防汗也不防雨？${b} ${m} 拥有 IP68 级防护让你日常运动全无忧`,
    category: "pain_point",
    angleLabel: "IP68 Wasserdichtigkeit",
    targetAudience: "Sportlerinnen & aktive Frauen",
  },
  {
    pattern: (b, m) => `Morgens trotz langem Schlaf völlig erschöpft? ${b} ${m} analysiert Tiefschlaf, Leichtschlaf & Wachphasen 24/7`,
    patternZh: (b, m) => `睡了很久醒来依然疲惫不堪？${b} ${m} 全天候 24/7 科学解码深睡、浅睡与清醒周期`,
    category: "pain_point",
    angleLabel: "Wissenschaftliche Schlafanalyse",
    targetAudience: "Frauen auf der Suche nach besserem Schlaf",
  },
  {
    pattern: (b, m) => `Auf der Suche nach dem perfekten Geschenk für sie? ${b} ${m} sorgt garantiert für strahlende Augen`,
    patternZh: (b, m) => `正在寻找送给她的完美高档礼物？${b} ${m} 一定让她拆箱瞬间眼前一亮`,
    category: "pain_point",
    angleLabel: "Geschenkidee für sie",
    targetAudience: "Geschenkesuchende für Geburtstag & Jahrestag",
  },
  {
    pattern: (b, m) => `Nie wieder Fingerabdrücke auf dem Display: ${b} ${m} glänzt mit gehärtetem Anti-Fingerprint-Glas`,
    patternZh: (b, m) => `告别满屏油腻指纹：${b} ${m} 采用高硬度防指纹涂层钢化玻璃始终通透`,
    category: "pain_point",
    angleLabel: "Anti-Fingerprint-Schutzglas",
    targetAudience: "Perfektionistinnen & Stilbewusste",
  },

  // 2. Efficiency & Smart Health (Frauengesundheit & Alltag)
  {
    pattern: (b, m) => `Periode, Eisprung, sichere Tage & Schwangerschaft im Blick: Dein täglicher Begleiter ${b} ${m}`,
    patternZh: (b, m) => `经期、排卵期、安全期与孕期记录全掌握：你的贴心健康伴侣 ${b} ${m}`,
    category: "efficiency",
    angleLabel: "Ganzheitliche Frauengesundheit",
    targetAudience: "Gesundheitsbewusste Frauen",
  },
  {
    pattern: (b, m) => `Bluetooth 5.3 HD-Anrufe, 100 Kontakte & Ziffernblock direkt am Handgelenk mit der ${b} ${m}`,
    patternZh: (b, m) => `蓝牙 5.3 高清通话、100 位联系人存储与腕上拨号盘，全在 ${b} ${m} 一表搞定`,
    category: "efficiency",
    angleLabel: "Telefonie & 100 Kontakte",
    targetAudience: "Multitasking-Alltag & Büro",
  },
  {
    pattern: (b, m) => `Über 120 Sportmodi für Yoga, Pilates, Laufen & Fitness – präzise Kalorienmessung mit ${b} ${m}`,
    patternZh: (b, m) => `120+ 种专业运动模式覆盖瑜伽、普拉提与跑步，${b} ${m} 精准记录热量消耗`,
    category: "efficiency",
    angleLabel: "120+ Sportmodi",
    targetAudience: "Fitness- & Yoga-Enthusiastinnen",
  },
  {
    pattern: (b, m) => `24/7 Herzfrequenz, Blutsauerstoff SpO₂ & Schlafphasen automatisch dokumentiert mit ${b} ${m}`,
    patternZh: (b, m) => `24/7 全天候心率、SpO₂ 血氧与睡眠阶段自动记录，${b} ${m} 随时掌控身体状态`,
    category: "efficiency",
    angleLabel: "24/7 Vitaldaten-Monitoring",
    targetAudience: "Wellness- & Selfcare-Fans",
  },
  {
    pattern: (b, m) => `Musik steuern, Wetter checken & Kamera per Handgelenk auslösen – so smart ist ${b} ${m}`,
    patternZh: (b, m) => `腕上切歌、查天气还能摇腕遥控手机拍照，${b} ${m} 让日常精致又省心`,
    category: "efficiency",
    angleLabel: "Smarte Alltagshelfer",
    targetAudience: "Content Creator & Lifestyle-Fans",
  },
  {
    pattern: (b, m) => `Vom Büro direkt ins Gym ohne Uhrenwechsel: Entdecke die Flexibilität der ${b} ${m}`,
    patternZh: (b, m) => `从职场办公室无缝切换到健身房无需换表：体验 ${b} ${m} 的全场景百搭魅力`,
    category: "efficiency",
    angleLabel: "Büro bis Fitnessstudio",
    targetAudience: "Moderne berufstätige Frauen",
  },
  {
    pattern: (b, m) => `Nie wieder das Handy im Chaos suchen: Mit der Find-My-Phone-Funktion deiner ${b} ${m} sofort gefunden`,
    patternZh: (b, m) => `再也不用在包里房间里满世界找手机：用 ${b} ${m} 一键查找手机秒定位`,
    category: "efficiency",
    angleLabel: "Praktische Handy-Suche",
    targetAudience: "Alltags-Fans",
  },

  // 3. Gadget & Fashion Aesthetic (Outfit & Schmuck-Design)
  {
    pattern: (b, m) => `Sieht aus wie feiner Schmuck, denkt wie eine Hightech-Smartwatch: ${b} ${m} im Detail-Check`,
    patternZh: (b, m) => `外观宛如轻奢腕间珠宝，内里却是硬核智能手表：近距离实拍 ${b} ${m}`,
    category: "gadget",
    angleLabel: "Schmuck-Ästhetik trifft Tech",
    targetAudience: "Mode- & Schmuckliebhaberinnen",
  },
  {
    pattern: (b, m) => `Edles Milanese-Metall für Abend-Outfits + weiches Silikon fürs Workout: 2 Looks in einer ${b} ${m}`,
    patternZh: (b, m) => `优雅米兰尼斯金属搭晚宴礼服 + 亲肤硅胶陪运动健身：${b} ${m} 一表双风格`,
    category: "gadget",
    angleLabel: "2-in-1 Armband-Styling",
    targetAudience: "OOTD- & Fashion-Community",
  },
  {
    pattern: (b, m) => `1,27 Zoll HD-Touchscreen mit 390×390 Pixeln und 98 % Bildschirmfläche: ${b} ${m} setzt Maßstäbe`,
    patternZh: (b, m) => `1.27 英寸 390×390 高清触控屏搭配 98% 惊艳屏占比：${b} ${m} 重塑女表颜值标杆`,
    category: "gadget",
    angleLabel: "Brillantes 390×390 Display",
    targetAudience: "Ästhetik- & Display-Liebhaberinnen",
  },
  {
    pattern: (b, m) => `Federleicht am Handgelenk & über 100 stylische Zifferblätter passend zu jedem Look: ${b} ${m}`,
    patternZh: (b, m) => `上手轻盈无压迫感，更有百款优雅表盘随今日穿搭自由换：${b} ${m}`,
    category: "gadget",
    angleLabel: "Federleicht & Watchfaces",
    targetAudience: "Fashionistas & Minimalistinnen",
  },
  {
    pattern: (b, m) => `Das Accessoire, das jedes Basic-Outfit sofort hochwertiger wirken lässt: ${b} ${m} Damen-Smartwatch`,
    patternZh: (b, m) => `能瞬间让基础穿搭显得高级有质感的秘密配饰：${b} ${m} 女性时尚智能手表`,
    category: "gadget",
    angleLabel: "Outfit-Upgrade Accessoire",
    targetAudience: "Style-Creator auf TikTok",
  },
  {
    pattern: (b, m) => `Warum schmale Handgelenke diese Uhr lieben: Das harmonische 1,27\" Gehäuse der ${b} ${m}`,
    patternZh: (b, m) => `为什么细手腕女生一眼爱上它？${b} ${m} 恰到好处的 1.27 英寸精致表盘比例`,
    category: "gadget",
    angleLabel: "Perfekt für schmale Handgelenke",
    targetAudience: "Frauen mit schmalen Handgelenken",
  },
  {
    pattern: (b, m) => `Unboxing der schönsten Damen-Smartwatch 2026: ${b} ${m} mit Doppel-Armband-Set`,
    patternZh: (b, m) => `2026 高颜值女性智能手表开箱实拍：${b} ${m} 礼盒自带双表带太贴心`,
    category: "gadget",
    angleLabel: "Ästhetisches Unboxing",
    targetAudience: "Unboxing- & TikTok-Shop-Fans",
  },

  // 4. AI Power & Voice Assistant (Smart Features)
  {
    pattern: (b, m) => `Sprachassistent direkt am Handgelenk starten – Hände frei beim Autofahren & Kochen mit ${b} ${m}`,
    patternZh: (b, m) => `手腕一键唤醒语音助手，开车做饭彻底解放双手：${b} ${m} 智慧随行`,
    category: "ai_power",
    angleLabel: "Smarter Sprachassistent",
    targetAudience: "Vielbeschäftigte Frauen & Mamas",
  },
  {
    pattern: (b, m) => `Intelligente Zykluserinnerungen bevor es losgeht: ${b} ${m} kennt deinen Körperrhythmus`,
    patternZh: (b, m) => `生理期到来前贴心提前预警提醒：${b} ${m} 比你更懂自己的身体节律`,
    category: "ai_power",
    angleLabel: "Smarte Zyklus-Prognose",
    targetAudience: "Frauen mit Gesundheitsfokus",
  },
  {
    pattern: (b, m) => `WhatsApp, Anrufe & Erinnerungen diskret am Handgelenk lesen – kein ständiger Griff zum Smartphone mit ${b} ${m}`,
    patternZh: (b, m) => `重要消息与来电抬腕优雅预览，告别频繁掏手机的焦虑：${b} ${m}`,
    category: "ai_power",
    angleLabel: "Smarte Benachrichtigungen",
    targetAudience: "Office- & Uni-Alltag",
  },
  {
    pattern: (b, m) => `Präzise SpO₂-Messung, Herzfrequenz & Schlafauswertung in einer übersichtlichen App mit ${b} ${m}`,
    patternZh: (b, m) => `精准 SpO₂ 血氧、心率与睡眠曲线全在清晰 App 一目了然：${b} ${m}`,
    category: "ai_power",
    angleLabel: "Smart Health App-Sync",
    targetAudience: "Datenbewusste Wellness-Fans",
  },
  {
    pattern: (b, m) => `Kamera-Fernauslöser direkt über ${b} ${m}: Perfekte Outfit-Fotos & Gruppenbilder ohne Stativ-Stress`,
    patternZh: (b, m) => `用 ${b} ${m} 远程遥控手机快门：一个人也能轻松拍出 OOTD 穿搭与闺蜜大片`,
    category: "ai_power",
    angleLabel: "Smarter Kamera-Auslöser",
    targetAudience: "Instagram- & TikTok-Creatorinnen",
  },
  {
    pattern: (b, m) => `Wetter, Wecker, Stoppuhr & Musiksteuerung in Sekunden griffbereit – dein smarter Alltag mit ${b} ${m}`,
    patternZh: (b, m) => `天气、闹钟、秒表与音乐控制抬腕即达，用 ${b} ${m} 开启轻盈智慧日常`,
    category: "ai_power",
    angleLabel: "All-in-One Alltagstool",
    targetAudience: "Organisierte Frauen",
  },

  // 5. Spec Power (Technische Highlights)
  {
    pattern: (b, m) => `390×390 HD, 98 % Screen-to-Body, Bluetooth 5.3, IP68 & 120+ Sportmodi: Das steckt in der ${b} ${m}`,
    patternZh: (b, m) => `390×390 高清屏、98% 屏占比、蓝牙 5.3、IP68 防水与 120+ 运动模式：${b} ${m} 硬核配置全揭秘`,
    category: "spec_power",
    angleLabel: "Komplettpaket an Specs",
    targetAudience: "Qualitätsbewusste Käuferinnen",
  },
  {
    pattern: (b, m) => `1,27 Zoll Full-Touch HD-Display mit kratzfestem Anti-Fingerprint-Glas: ${b} ${m} im Härtetest`,
    patternZh: (b, m) => `1.27 英寸全触控高清大屏配防刮防指纹玻璃：${b} ${m} 质感实测`,
    category: "spec_power",
    angleLabel: "Display & Glas-Qualität",
    targetAudience: "Technik-Interessierte",
  },
  {
    pattern: (b, m) => `Bluetooth 5.3 Chip für glasklare Telefonate & bis zu 100 gespeicherte Lieblingskontakte auf ${b} ${m}`,
    patternZh: (b, m) => `蓝牙 5.3 稳定芯片带来高清通话，${b} ${m} 支持直接存储 100 位常用联系人`,
    category: "spec_power",
    angleLabel: "Bluetooth 5.3 & Kontakte",
    targetAudience: "Vieltelefoniererinnen",
  },
  {
    pattern: (b, m) => `Händewaschen, Regen oder intensives Schwitzen? Dank IP68 Schutz bleibt deine ${b} ${m} entspannt`,
    patternZh: (b, m) => `洗手、淋雨还是大汗淋漓？拥有 IP68 防水的 ${b} ${m} 轻松应对每一天`,
    category: "spec_power",
    angleLabel: "IP68 Alltagsschutz",
    targetAudience: "Aktive Nutzerinnen",
  },
  {
    pattern: (b, m) => `Vom Pilates-Studio bis zum Halbmarathon: 120+ Sportmodi tracken Schritte, Distanz & Kalorien auf ${b} ${m}`,
    patternZh: (b, m) => `从普拉提教室到半程马拉松：${b} ${m} 120+ 运动模式精准追踪步数、距离与热量`,
    category: "spec_power",
    angleLabel: "Präzises Sport-Tracking",
    targetAudience: "Sport- & Fitness-Community",
  },
  {
    pattern: (b, m) => `Schwangerschafts-, Eisprung- & Zykluskalender + 24/7 SpO₂ & Puls: ${b} ${m} denkt an alles`,
    patternZh: (b, m) => `孕期、排卵期与经期日历叠加 24/7 血氧心率监测：${b} ${m} 考虑得面面俱到`,
    category: "spec_power",
    angleLabel: "Komplette Vital-Suite",
    targetAudience: "Frauen 20–45 Jahre",
  },

  // 6. Secret Hack & Insider Tips (Fashion-Geheimtipp)
  {
    pattern: (b, m) => `Der geheime Styling-Hack vieler Mode-Creatorinnen: ${b} ${m} mit Milanese-Band zu Armreifen kombinieren`,
    patternZh: (b, m) => `时尚博主都在用的叠搭小心机：把 ${b} ${m} 米兰尼斯表带与精致手链完美混搭`,
    category: "secret_hack",
    angleLabel: "Schmuck-Stacking Hack",
    targetAudience: "Fashion- & Schmuck-Fans",
  },
  {
    pattern: (b, m) => `In 5 Sekunden ohne Werkzeug vom Business-Look zum Sport-Style wechseln dank der Doppelbänder von ${b} ${m}`,
    patternZh: (b, m) => `无需工具 5 秒快拆换表带：${b} ${m} 让你在职场优雅与运动活力之间自由切换`,
    category: "secret_hack",
    angleLabel: "5-Sekunden Style-Wechsel",
    targetAudience: "Vielseitige Trendsetterinnen",
  },
  {
    pattern: (b, m) => `Warum immer mehr Frauen auf teure Designer-Uhren verzichten und zur ${b} ${m} greifen`,
    patternZh: (b, m) => `为什么越来越多女生放弃昂贵大牌时装表，转而入手这款 ${b} ${m}？`,
    category: "secret_hack",
    angleLabel: "Insider Preis-Leistungs-Tipp",
    targetAudience: "Clevere Online-Shopperinnen",
  },
  {
    pattern: (b, m) => `Der Trick für stressfreie Solo-OOTD-Fotos: Smartphone aufstellen und per ${b} ${m} fernauslösen`,
    patternZh: (b, m) => `一个人拍出完美 OOTD 穿搭照的秘密技巧：架好手机，用 ${b} ${m} 抬腕遥控快门`,
    category: "secret_hack",
    angleLabel: "Solo-Foto Geheimtrick",
    targetAudience: "Social-Media-Nutzerinnen",
  },
  {
    pattern: (b, m) => `So behältst du Zyklus, Schlaf & Schritte endlich dauerhaft im Griff – mein Geheimtipp ${b} ${m}`,
    patternZh: (b, m) => `如何真正长期坚持管理生理周期、睡眠与步数？我的私藏好物就是 ${b} ${m}`,
    category: "secret_hack",
    angleLabel: "Selfcare-Routine Hack",
    targetAudience: "Selfcare- & Wellness-Community",
  },
  {
    pattern: (b, m) => `Diese versteckte Funktion der ${b} ${m} hat meinen Büroalltag komplett verändert`,
    patternZh: (b, m) => `${b} ${m} 这个容易被忽略的隐藏功能，彻底改变了我的日常办公效率`,
    category: "secret_hack",
    angleLabel: "Verstecktes Alltags-Feature",
    targetAudience: "Neugierige TikTok-Zuschauerinnen",
  },
  {
    pattern: (b, m) => `Entdecke, warum die ${b} ${m} aktuell die meistempfohlene Damen-Smartwatch auf TikTok ist`,
    patternZh: (b, m) => `揭秘为什么 ${b} ${m} 成为近期 TikTok 上口碑爆棚的女性智能手表推荐榜首`,
    category: "secret_hack",
    angleLabel: "TikTok Viral-Favorit",
    targetAudience: "Trend- & TikTok-Shop-Käuferinnen",
  },

  // 7. Interactive Question & Debate (Community & Diskussion)
  {
    pattern: (b, m) => `Team Milanese-Metall oder Team weiches Silikon? Welcher Look der ${b} ${m} passt besser zu dir?`,
    patternZh: (b, m) => `你是米兰尼斯金属表带派还是亲肤硅胶表带派？${b} ${m} 哪款风格更适合你？`,
    category: "question",
    angleLabel: "Armband-Umfrage",
    targetAudience: "Community-Engagement",
  },
  {
    pattern: (b, m) => `Ist die ${b} ${m} die eleganteste Damen-Smartwatch 2026? Schreib deine ehrliche Meinung in die Kommentare!`,
    patternZh: (b, m) => `${b} ${m} 是不是 2026 年最优雅百搭的女性智能手表？欢迎在评论区聊聊你的看法！`,
    category: "question",
    angleLabel: "Design-Diskussion",
    targetAudience: "Fashion-Community",
  },
  {
    pattern: (b, m) => `Welche Funktion nutzt du bei einer Smartwatch täglich: Zyklus-Tracker, Schlafanalyse oder Bluetooth-Calls? (${b} ${m})`,
    patternZh: (b, m) => `买智能手表你每天用得最多的是哪个功能：生理期追踪、睡眠监测还是蓝牙通话？（${b} ${m}）`,
    category: "question",
    angleLabel: "Feature-Abstimmung",
    targetAudience: "Breite weibliche Zielgruppe",
  },
  {
    pattern: (b, m) => `Hättest du gedacht, dass diese edle Schmuckuhr über 120 Sportmodi & Bluetooth 5.3 hat? ${b} ${m}`,
    patternZh: (b, m) => `你能猜到这款宛如首饰的优雅女表竟然内置 120+ 运动模式和蓝牙 5.3 通话吗？${b} ${m}`,
    category: "question",
    angleLabel: "Überraschungs-Frage",
    targetAudience: "Erstkäuferinnen",
  },
  {
    pattern: (b, m) => `Würdest du deine alte klobige Sportuhr gegen diese elegante ${b} ${m} eintauschen?`,
    patternZh: (b, m) => `你会把手里笨重的旧运动手表换成这款优雅轻盈的 ${b} ${m} 吗？`,
    category: "question",
    angleLabel: "Upgrade-Debatte",
    targetAudience: "Smartwatch-Wechslerinnen",
  },
  {
    pattern: (b, m) => `Was darf bei deinem perfekten Alltags-Outfit niemals fehlen? Bei mir ist es jetzt die ${b} ${m}!`,
    patternZh: (b, m) => `你每天出门的 OOTD 穿搭里绝对不能少的单品是什么？我现在每天必戴 ${b} ${m}！`,
    category: "question",
    angleLabel: "OOTD-Community Frage",
    targetAudience: "Lifestyle- & Mode-Community",
  },
  {
    pattern: (b, m) => `Wie wichtig ist dir Zyklus- & Gesundheitstracking direkt am Handgelenk? Teste die ${b} ${m}!`,
    patternZh: (b, m) => `腕上随时掌握女性生理周期和全天候健康数据对你有多重要？快来体验 ${b} ${m}！`,
    category: "question",
    angleLabel: "Gesundheits-Austausch",
    targetAudience: "Frauengesundheits-Community",
  },
];

// Paired decorator pools for Spanish titles and their Chinese counterparts
const I228_PREFIX_PAIRS: [string, string][] = [
  ["¡Novedad viral!", "【全网热议爆款】"],
  ["¡Súper elegante!", "【高级优雅气质】"],
  ["¡Impresionante!", "【令人惊艳】"],
  ["¡El favorito de todas!", "【女生心动首选】"],
  ["¡Top ventas!", "【热销爆款推荐】"],
  ["¡Mi recomendación!", "【私藏力荐】"],
  ["¡Ojo chicas!", "【姐妹们看过来】"],
  ["¡No te lo pierdas!", "【千万别错过】"],
  ["【Estilo & Salud】", "【时尚穿搭与健康】"],
  ["【Review Real】", "【真实上手测评】"],
  ["【Must-Have 2026】", "【2026必入单品】"],
  ["【Outfit Perfecto】", "【百搭完美穿搭】"],
  ["¡Totalmente enamorada!", "【一眼彻底爱上】"],
  ["¡La combinación ideal!", "【理想颜值科技组合】"]
];

const I228_SUFFIX_PAIRS: [string, string][] = [
  [" ¡Una auténtica joya!", "，堪称腕间高定珠宝！"],
  [" ¡Combina con cualquier atuendo!", "，轻松驾驭任何穿搭！"],
  [" ¡Te va a encantar!", "，你一定会深深爱上它！"],
  [" ¡El smartwatch que estabas esperando!", "，这就是你一直在等待的完美手表！"],
  [" ¡100% recomendado!", "，真心100%强烈推荐！"],
  [" ¡Súper versátil!", "，百搭实用太惊艳！"]
];

// Paired decorator pools for German titles and their Chinese counterparts
const I228_DE_PREFIX_PAIRS: [string, string][] = [
  ["【Viral-Tipp】", "【全网爆款推荐】"],
  ["【Echt elegant】", "【高级优雅气质】"],
  ["【Must-Have 2026】", "【2026必入单品】"],
  ["【Style & Gesundheit】", "【时尚穿搭与健康】"],
  ["【Praxis-Test】", "【真实上手实测】"],
  ["【Mein Favorit】", "【私藏心动首选】"],
  ["【Outfit-Highlight】", "【穿搭点睛神器】"],
  ["【Geheimtipp】", "【宝藏隐藏好物】"],
  ["Unglaublich schön!", "美得令人惊艳！"],
  ["Endlich gefunden!", "终于找到梦中情表！"],
];

const I228_DE_SUFFIX_PAIRS: [string, string][] = [
  [" – Ein echtes Schmuckstück!", "——堪称腕间高定珠宝！"],
  [" – Passt zu jedem Outfit!", "——轻松驾驭任何日常穿搭！"],
  [" – 100 % Empfehlung!", "——真心100%强烈推荐！"],
  [" – So smart & stilvoll!", "——既聪明又充满优雅格调！"],
  [" – Du wirst sie lieben!", "——戴上就一定会深深爱上！"],
];

export function generateI228AlgorithmicTitles(
  brand: string,
  model: string,
  category: AngleCategory,
  customKeyword?: string,
  customTags?: string,
  targetLanguage: TargetLanguage = "es"
): GeneratedTitle[] {
  const isGerman = targetLanguage === "de";
  const defaultTags = isGerman ? I228_GERMAN_TAGS : I228_SPANISH_TAGS;
  const tags = customTags && customTags.trim().length > 0 ? customTags.trim() : defaultTags;

  const baseTemplates = isGerman ? I228_GERMAN_TEMPLATES : I228_SPANISH_TEMPLATES;
  const prefixPairs = isGerman ? I228_DE_PREFIX_PAIRS : I228_PREFIX_PAIRS;
  const suffixPairs = isGerman ? I228_DE_SUFFIX_PAIRS : I228_SUFFIX_PAIRS;

  let pool = baseTemplates;
  if (category !== "all_mixed") {
    const filtered = baseTemplates.filter((t) => t.category === category);
    if (filtered.length > 0) {
      pool = filtered;
    }
  }

  // Shuffle pool to ensure brand new order and variety on every single click
  const shuffledPool = [...pool].sort(() => Math.random() - 0.5);

  const results: GeneratedTitle[] = [];
  const seenHooks = new Set<string>();

  let templateIdx = 0;
  let attempts = 0;

  while (results.length < 50 && attempts < 300) {
    attempts++;
    const tmpl = shuffledPool[templateIdx % shuffledPool.length];
    templateIdx++;

    let hook = tmpl.pattern(brand, model, customKeyword);
    let hookZh = tmpl.patternZh(brand, model, customKeyword);

    // Apply smart permutation decorators with paired Chinese translations
    const roll = Math.random();
    if (roll < 0.35 && !hook.startsWith("¡") && !hook.startsWith("【")) {
      const [pfx, pfxZh] = prefixPairs[Math.floor(Math.random() * prefixPairs.length)];
      hook = `${pfx} ${hook}`;
      hookZh = `${pfxZh} ${hookZh}`;
    } else if (roll > 0.70 && hook.length < 70 && !hook.endsWith("!") && !hook.endsWith("?")) {
      const [sfx, sfxZh] = suffixPairs[Math.floor(Math.random() * suffixPairs.length)];
      hook = `${hook}${sfx}`;
      hookZh = `${hookZh}${sfxZh}`;
    }

    if (customKeyword && customKeyword.trim().length > 0) {
      const kw = customKeyword.trim();
      if (!hook.toLowerCase().includes(kw.toLowerCase())) {
        if (Math.random() > 0.3) {
          hook = `[${kw}] ${hook}`;
          hookZh = `【${kw}】${hookZh}`;
        }
      }
    }

    // Ensure brand and model exist
    if (!hook.includes(brand) || !hook.includes(model)) {
      hook = `${brand} ${model} | ${hook}`;
      hookZh = `${brand} ${model} | ${hookZh}`;
    }

    // Uniqueness check
    if (seenHooks.has(hook)) {
      continue;
    }
    seenHooks.add(hook);

    const fullTitle = `${hook} ${tags}`;

    results.push({
      id: `i228-${isGerman ? "de" : "es"}-${results.length + 1}-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 6)}`,
      productId: "i228",
      title: fullTitle,
      hook: hook,
      tags: tags,
      angle: tmpl.angleLabel,
      angleCategory: tmpl.category,
      targetAudience: tmpl.targetAudience,
      charCount: fullTitle.length,
      hookCharCount: hook.length,
      language: isGerman ? "de" : "es",
      translationZh: hookZh,
      createdAt: new Date().toISOString(),
    });
  }

  return results.slice(0, 50);
}
