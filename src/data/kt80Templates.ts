import { AngleCategory, GeneratedTitle, ProductId, TargetLanguage } from "../types";

export const KT80_SPANISH_TAGS = "#FOSMET #KT80 #reloj inteligente #Relojes para exteriores #herramienta";
export const KT80_GERMAN_TAGS = "#FOSMET #KT80 #Smartwatch #Outdoor Smartwatch #Werkzeug";

interface HookTemplate {
  pattern: (brand: string, model: string, keyword?: string) => string;
  patternZh: (brand: string, model: string, keyword?: string) => string;
  category: AngleCategory;
  angleLabel: string;
  targetAudience: string;
}

// 50+ Spanish TikTok Viral Hook Templates for FOSMET KT80
export const KT80_SPANISH_TEMPLATES: HookTemplate[] = [
  // 1. Pain Point / Counter-Intuitive (Dolor y Desmitificación)
  {
    pattern: (b, m) => `¿Sigues cargando tu reloj todos los días? Con ${b} ${m} y sus 800 mAh te olvidarás del cargador`,
    patternZh: (b, m) => `还在天天给手表充电？有了 ${b} ${m} 和 800mAh 超大电池，彻底告别充电焦虑`,
    category: "pain_point",
    angleLabel: "Adiós a cargar a diario",
    targetAudience: "Usuarios cansados de poca batería",
  },
  {
    pattern: (b, m) => `¿Te da miedo meter tu smartwatch al agua? ${b} ${m} resiste 5ATM reales bajo el agua`,
    patternZh: (b, m) => `不敢把智能手表戴下水？${b} ${m} 真正支持 5ATM 潜水级抗水压测试`,
    category: "pain_point",
    angleLabel: "Miedo al agua roto",
    targetAudience: "Nadadores y amantes de la playa",
  },
  {
    pattern: (b, m) => `¿Pagar 500€ por un reloj todoterreno? ${b} ${m} demuestra que la máxima resistencia no es cara`,
    patternZh: (b, m) => `花 500 欧元买户外硬汉表？${b} ${m} 用实力证明极致坚固无需高昂溢价`,
    category: "pain_point",
    angleLabel: "Rompiendo sobreprecios",
    targetAudience: "Compradores inteligentes",
  },
  {
    pattern: (b, m) => `¿Quedarte a oscuras en la montaña? ${b} ${m} tiene linterna LED potente integrada en la muñeca`,
    patternZh: (b, m) => `夜间登山担心陷入一片漆黑？${b} ${m} 侧边内置超亮手电筒，抬腕即可照明`,
    category: "pain_point",
    angleLabel: "Solución de oscuridad",
    targetAudience: "Senderistas y campistas",
  },
  {
    pattern: (b, m) => `¿Pantallas pequeñas que no se ven al sol? La pantalla HD de 1.46" del ${b} ${m} lo cambia todo`,
    patternZh: (b, m) => `屏幕太小且阳光下看不清？${b} ${m} 的 1.46 英寸高清大屏彻底解决痛点`,
    category: "pain_point",
    angleLabel: "Pantalla ultra clara",
    targetAudience: "Deportistas al aire libre",
  },
  {
    pattern: (b, m) => `¿Un reloj inteligente que se rompe con el primer golpe? Mira la armadura de metal del ${b} ${m}`,
    patternZh: (b, m) => `一碰就坏的脆弱手表太糟心？来看看 ${b} ${m} 极其坚固的全金属装甲机身`,
    category: "pain_point",
    angleLabel: "Resistencia a impactos",
    targetAudience: "Trabajadores y aventureros",
  },

  // 2. Efficiency & Value (Batería 800mAh, Llamadas Bluetooth y Productividad)
  {
    pattern: (b, m) => `¡Batería bestial de 800 mAh! ${b} ${m} aguanta semanas de expedición sin despeinarse`,
    patternZh: (b, m) => `800mAh 怪兽级超长续航！${b} ${m} 轻松支撑数周长途探索而无需充电`,
    category: "efficiency",
    angleLabel: "800mAh batería extrema",
    targetAudience: "Viajeros de larga distancia",
  },
  {
    pattern: (b, m) => `Responde llamadas en HD directamente desde tu muñeca mientras escalas con ${b} ${m}`,
    patternZh: (b, m) => `攀岩途中无需掏出手机，使用 ${b} ${m} 直接在手腕上进行高清双向通话`,
    category: "efficiency",
    angleLabel: "Llamadas Bluetooth HD",
    targetAudience: "Profesionales activos",
  },
  {
    pattern: (b, m) => `Más de 100 modos deportivos registrados con precisión militar gracias al ${b} ${m}`,
    patternZh: (b, m) => `覆盖 100+ 种专业运动模式，${b} ${m} 以军工级精度全程监测运动轨迹与消耗`,
    category: "efficiency",
    angleLabel: "100+ deportes PRO",
    targetAudience: "Atletas y runners",
  },
  {
    pattern: (b, m) => `Dúchate, nada y sumérgete sin preocupaciones: el ${b} ${m} cuenta con certificación 5ATM`,
    patternZh: (b, m) => `洗澡、游泳和极限涉水无所畏惧：${b} ${m} 具备真正的 5ATM 深度防水认证`,
    category: "efficiency",
    angleLabel: "5ATM sumergible real",
    targetAudience: "Deportes acuáticos",
  },
  {
    pattern: (b, m) => `Monitoreo 24/7 de ritmo cardíaco y oxígeno SpO2 en tiempo real con ${b} ${m}`,
    patternZh: (b, m) => `${b} ${m} 全天候 24/7 实时监测心率、血氧饱和度 (SpO2) 与睡眠状态`,
    category: "efficiency",
    angleLabel: "Salud total 24/7",
    targetAudience: "Cuidado de la salud",
  },
  {
    pattern: (b, m) => `Controla música, recibe notificaciones y activa tu linterna al instante con ${b} ${m}`,
    patternZh: (b, m) => `切歌、查收即时消息、一键开启强光手电，${b} ${m} 腕上高效搞定`,
    category: "efficiency",
    angleLabel: "Productividad en muñeca",
    targetAudience: "Usuarios multitarea",
  },

  // 3. Hardware & Metal Aesthetics (Diseño Metálico y Linterna LED)
  {
    pattern: (b, m) => `Cuerpo de metal plateado macizo y pantalla táctil de 1.46": la joya táctica ${b} ${m}`,
    patternZh: (b, m) => `坚固银色金属机身搭配 1.46 英寸高清触控屏：硬汉专属战术利器 ${b} ${m}`,
    category: "gadget",
    angleLabel: "Cuerpo de metal prémium",
    targetAudience: "Amantes del diseño rudo",
  },
  {
    pattern: (b, m) => `Una auténtica linterna LED en el lateral de tu reloj: la genialidad del ${b} ${m}`,
    patternZh: (b, m) => `手表侧边集成真正的超亮 LED 手电筒：${b} ${m} 的精妙实用黑科技`,
    category: "gadget",
    angleLabel: "Linterna LED lateral",
    targetAudience: "Entusiastas de herramientas EDC",
  },
  {
    pattern: (b, m) => `El unboxing definitivo del smartwatch más indestructible del año: ${b} ${m}`,
    patternZh: (b, m) => `年度最抗造智能手表开箱：${b} ${m} 极限耐摔防水实机上手`,
    category: "gadget",
    angleLabel: "Unboxing de impacto",
    targetAudience: "Tech reviewers de TikTok",
  },
  {
    pattern: (b, m) => `Pantalla HD táctil de 1.46 pulgadas con fluidez absoluta en el nuevo ${b} ${m}`,
    patternZh: (b, m) => `1.46 英寸高清触控视网膜屏，${b} ${m} 带来极致丝滑的操作体验`,
    category: "gadget",
    angleLabel: "Display táctil 1.46 HD",
    targetAudience: "Fanáticos de la tecnología",
  },
  {
    pattern: (b, m) => `Elegancia plateada para la oficina y resistencia blindada para la montaña: ${b} ${m}`,
    patternZh: (b, m) => `职场通勤兼具银色洗练质感，户外探险具备装甲级抗摔：${b} ${m}`,
    category: "gadget",
    angleLabel: "Dualidad Urbano & Outdoor",
    targetAudience: "Estilo ejecutivo y aventurero",
  },
  {
    pattern: (b, m) => `Siente el peso y la solidez del metal aeroespacial en tu muñeca con ${b} ${m}`,
    patternZh: (b, m) => `戴上 ${b} ${m}，在手腕上感受航空级金属的高密度坚固做工与分量`,
    category: "gadget",
    angleLabel: "Tacto y acabados de lujo",
    targetAudience: "Coleccionistas de relojes",
  },

  // 4. Smart Tools & Innovation (Herramienta Inteligente y Linterna)
  {
    pattern: (b, m) => `Pulsa este botón lateral y alumbra todo el bosque: la linterna LED ultra brillante de ${b} ${m}`,
    patternZh: (b, m) => `只需按下侧边专属按键即可照亮前路：${b} ${m} 超亮强光 LED 手电筒`,
    category: "ai_power",
    angleLabel: "Linterna LED un toque",
    targetAudience: "Exploradores nocturnos",
  },
  {
    pattern: (b, m) => `Tu navaja suiza digital en la muñeca: linterna, 5ATM, llamadas y 800mAh en ${b} ${m}`,
    patternZh: (b, m) => `手腕上的数字瑞士军刀：${b} ${m} 集合手电筒、5ATM防水、蓝牙通话与800mAh超长续航`,
    category: "ai_power",
    angleLabel: "Herramienta total EDC",
    targetAudience: "Supervivencia y camping",
  },
  {
    pattern: (b, m) => `Algoritmo inteligente de salud y control del sueño continuo integrado en ${b} ${m}`,
    patternZh: (b, m) => `内置智能健康算法与连续睡眠阶段监测，${b} ${m} 科学守护你的体能状态`,
    category: "ai_power",
    angleLabel: "Algoritmo biométrico",
    targetAudience: "Monitoreo del descanso",
  },
  {
    pattern: (b, m) => `Asistente de llamadas por Bluetooth con cancelación de ruido en el nuevo ${b} ${m}`,
    patternZh: (b, m) => `全新 ${b} ${m} 搭载带降噪麦克风的蓝牙通话功能，运动与开车时轻松畅聊`,
    category: "ai_power",
    angleLabel: "Llamadas manos libres",
    targetAudience: "Conductores y ciclistas",
  },
  {
    pattern: (b, m) => `Alerta instantánea de frecuencia cardíaca y SpO2 durante entrenamientos intensos con ${b} ${m}`,
    patternZh: (b, m) => `高强度训练时提供心率过高预警与实时 SpO2 血氧追踪，${b} ${m} 全方位守护运动安全`,
    category: "ai_power",
    angleLabel: "Seguridad deportiva",
    targetAudience: "Atletas de alto rendimiento",
  },

  // 5. Secret Hack & Discovery (Descubrimiento y Curiosidad)
  {
    pattern: (b, m) => `El secreto que las marcas caras no quieren que descubras: el todoterreno ${b} ${m}`,
    patternZh: (b, m) => `高价大牌不想让你知道的秘密：全能硬核户外手表 ${b} ${m} 实力击穿溢价`,
    category: "secret_hack",
    angleLabel: "Secreto desenmascarado",
    targetAudience: "Buscadores de ofertas",
  },
  {
    pattern: (b, m) => `Por qué los guías de montaña están cambiando su reloj por este ${b} ${m}`,
    patternZh: (b, m) => `为什么专业户外登山向导都开始换戴这款 ${b} ${m} 户外战术手表`,
    category: "secret_hack",
    angleLabel: "Recomendación de expertos",
    targetAudience: "Comunidad de senderismo",
  },
  {
    pattern: (b, m) => `El reloj táctico con linterna LED que se está haciendo viral en TikTok: ${b} ${m}`,
    patternZh: (b, m) => `带强光 LED 手电筒的户外战术手表在 TikTok 全网爆火：它就是 ${b} ${m}`,
    category: "secret_hack",
    angleLabel: "Tendencia viral TikTok",
    targetAudience: "Jóvenes entusiastas de gadgets",
  },
  {
    pattern: (b, m) => `¿Un reloj con batería de 800 mAh y sumergible 5ATM? Te presento el ${b} ${m}`,
    patternZh: (b, m) => `同时拥有 800mAh 怪兽电池与 5ATM 潜水级抗水？带你深度认识 ${b} ${m}`,
    category: "secret_hack",
    angleLabel: "Fórmula imbatible",
    targetAudience: "Geeks de hardware",
  },
  {
    pattern: (b, m) => `El gadget de supervivencia que no sabías que necesitabas hasta que ves ${b} ${m}`,
    patternZh: (b, m) => `直到看到 ${b} ${m}，才发现这是每位户外生存与探险爱好者必备的神器`,
    category: "secret_hack",
    angleLabel: "Accesorio imprescindible",
    targetAudience: "Preppers y aventureros",
  },

  // 6. Interactive Question & Comment Hooks (Preguntas e Interacción)
  {
    pattern: (b, m) => `¿Te atreverías a sumergir tu reloj a 50 metros? Probamos los 5ATM del ${b} ${m}`,
    patternZh: (b, m) => `敢把手表浸泡在 50 米水深水压下吗？实测 ${b} ${m} 的 5ATM 真实防水实力`,
    category: "question",
    angleLabel: "Test extremo de agua",
    targetAudience: "Espectadores curiosos",
  },
  {
    pattern: (b, m) => `¿Qué usarías más en el ${b} ${m}: la linterna LED lateral o la batería de 800 mAh?`,
    patternZh: (b, m) => `在 ${b} ${m} 上你会更常用哪个功能：侧边强光手电还是 800mAh 超长续航？`,
    category: "question",
    angleLabel: "Dilema de funciones",
    targetAudience: "Comunidad interactiva",
  },
  {
    pattern: (b, m) => `¿Cuánto pagarías por un reloj de metal con llamadas Bluetooth y 5ATM como ${b} ${m}?`,
    patternZh: (b, m) => `全金属机身、蓝牙通话加 5ATM 防水，你觉得这款 ${b} ${m} 应该卖多少钱？`,
    category: "question",
    angleLabel: "Debate de precio/valor",
    targetAudience: "Compradores en TikTok",
  },
  {
    pattern: (b, m) => `¿Conocías algún smartwatch con linterna LED real integrada como este ${b} ${m}?`,
    patternZh: (b, m) => `你见过像 ${b} ${m} 这样真正将强光 LED 手电筒集成在表壳侧边的手表吗？`,
    category: "question",
    angleLabel: "Asombro por la linterna",
    targetAudience: "Público general",
  },
  {
    pattern: (b, m) => `¿De qué color te gusta más la armadura metálica del ${b} ${m}? Deja tu opinión`,
    patternZh: (b, m) => `你最喜欢 ${b} ${m} 金属装甲的哪种配色？欢迎在评论区留下你的看法`,
    category: "question",
    angleLabel: "Elección de diseño",
    targetAudience: "Amantes de la moda táctica",
  },

  // 7. Spec Power & Hardcore Durability (Especificaciones Extremas)
  {
    pattern: (b, m) => `800 mAh + 5ATM Sumergible + Linterna LED: la ficha técnica brutal de ${b} ${m}`,
    patternZh: (b, m) => `800mAh 电池 + 5ATM 深度防水 + 强光 LED 手电：${b} ${m} 的硬核配置令人惊叹`,
    category: "spec_power",
    angleLabel: "Ficha técnica brutal",
    targetAudience: "Puristas de especificaciones",
  },
  {
    pattern: (b, m) => `50 metros bajo el agua sin inmutarse: la resistencia 5ATM certificada de ${b} ${m}`,
    patternZh: (b, m) => `在水下 50 米深度测试中毫发无损：${b} ${m} 官方认证的 5ATM 防水品质`,
    category: "spec_power",
    angleLabel: "Prueba 5ATM 50 metros",
    targetAudience: "Buceadores y nadadores",
  },
  {
    pattern: (b, m) => `Pantalla táctil HD de 1.46 pulgadas protegida por bisel de metal sólido en ${b} ${m}`,
    patternZh: (b, m) => `1.46 英寸高清大屏由坚固金属外圈全面包裹保护，${b} ${m} 抗摔耐造无惧磕碰`,
    category: "spec_power",
    angleLabel: "1.46 HD ultra resistente",
    targetAudience: "Usuarios exigentes",
  },
  {
    pattern: (b, m) => `Más de 100 deportes con sensores de pulso, SpO2 y control calórico en ${b} ${m}`,
    patternZh: (b, m) => `支持 100+ 种运动，精准监测实时心率、血氧及卡路里消耗：${b} ${m}`,
    category: "spec_power",
    angleLabel: "Métricas deportivas PRO",
    targetAudience: "Gimnasio y crossfit",
  },
  {
    pattern: (b, m) => `Llamadas Bluetooth de alta fidelidad y altavoz potente para exteriores en ${b} ${m}`,
    patternZh: (b, m) => `高保真蓝牙通话搭配专为户外设计的大音量高素质扬声器：${b} ${m}`,
    category: "spec_power",
    angleLabel: "Altavoz exterior potente",
    targetAudience: "Uso diario intenso",
  },
];

// 50+ German TikTok Viral Hook Templates for FOSMET KT80
export const KT80_GERMAN_TEMPLATES: HookTemplate[] = [
  // 1. Pain Point / Counter-Intuitive (Schmerzpunkte & Gewohnheiten)
  {
    pattern: (b, m) => `Täglich die Smartwatch laden? Mit dem ${b} ${m} und 800 mAh Akku ist endlich Schluss damit!`,
    patternZh: (b, m) => `还在每天给智能手表充电？有了 ${b} ${m} 和 800mAh 超大电池，彻底告别电量焦虑！`,
    category: "pain_point",
    angleLabel: "Nie wieder täglich laden",
    targetAudience: "Akku-Genervte Nutzer",
  },
  {
    pattern: (b, m) => `Angst vor Wasserschäden beim Schwimmen? Die ${b} ${m} hält echten 5ATM Tauchdruck stand`,
    patternZh: (b, m) => `游泳时担心手表进水损坏？${b} ${m} 真正承受 5ATM 潜水级抗水压`,
    category: "pain_point",
    angleLabel: "Echter 5ATM Wasserschutz",
    targetAudience: "Schwimmer & Outdoor-Fans",
  },
  {
    pattern: (b, m) => `Warum 600€ für eine Outdoor-Uhr ausgeben? Die ${b} ${m} bietet Top-Qualität zum fairen Preis`,
    patternZh: (b, m) => `为什么要花 600 欧元买户外表？${b} ${m} 以极具诚意的价格提供顶级坚固品质`,
    category: "pain_point",
    angleLabel: "Preis-Leistungs-Schock",
    targetAudience: "Smarte Sparer",
  },
  {
    pattern: (b, m) => `Im Dunkeln ohne Licht unterwegs? Die ${b} ${m} hat eine extrem helle LED-Taschenlampe am Handgelenk`,
    patternZh: (b, m) => `在黑暗中出行缺少照明？${b} ${m} 手腕侧边自带超亮强光 LED 手电筒`,
    category: "pain_point",
    angleLabel: "Integrierte LED-Lampe",
    targetAudience: "Camper & Nachtwanderer",
  },
  {
    pattern: (b, m) => `Kratzer und Dellen nach der ersten Wanderung? Die ${b} ${m} besitzt ein massives Metallgehäuse`,
    patternZh: (b, m) => `徒步后手表满是划痕磕碰？${b} ${m} 采用坚固高强度实心金属表壳保护`,
    category: "pain_point",
    angleLabel: "Unzerstörbares Metall",
    targetAudience: "Handwerker & Abenteurer",
  },
  {
    pattern: (b, m) => `Winzige Displays, die man in der Sonne nicht sieht? Das 1,46" HD-Touchdisplay der ${b} ${m} überzeugt`,
    patternZh: (b, m) => `小屏幕在强光下看不清？${b} ${m} 的 1.46 英寸高清全彩大屏带来极清视野`,
    category: "pain_point",
    angleLabel: "1,46 Zoll HD Ablesbarkeit",
    targetAudience: "Sportler & Outdoor-Aktive",
  },

  // 2. Efficiency & Value (800mAh Akku & Bluetooth-Anrufe)
  {
    pattern: (b, m) => `Gigantischer 800 mAh Akku: Die ${b} ${m} übersteht wochenlange Touren ohne Steckdose`,
    patternZh: (b, m) => `800mAh 巨无霸电池：${b} ${m} 让你在数周户外长途探索中彻底告别充电插头`,
    category: "efficiency",
    angleLabel: "800mAh Extrem-Laufzeit",
    targetAudience: "Trekking & Fernwanderer",
  },
  {
    pattern: (b, m) => `Kristallklare HD-Bluetooth-Anrufe direkt über die Uhr führen mit der ${b} ${m}`,
    patternZh: (b, m) => `户外运动时无需掏手机，通过 ${b} ${m} 在手腕上进行清澈纯净的高清蓝牙通话`,
    category: "efficiency",
    angleLabel: "HD-Bluetooth-Telefonie",
    targetAudience: "Aktive Macher",
  },
  {
    pattern: (b, m) => `Über 100 professionelle Sportmodi mit präzisen Vitaldaten in der neuen ${b} ${m}`,
    patternZh: (b, m) => `全新 ${b} ${m} 覆盖 100+ 种专业运动模式，精准追踪每一项身体关键数据`,
    category: "efficiency",
    angleLabel: "100+ Sportmodi Tracker",
    targetAudience: "Fitness & Ausdauersportler",
  },
  {
    pattern: (b, m) => `Duschen, Schwimmen, Extremwetter: Die ${b} ${m} mit 5ATM Zertifizierung macht alles mit`,
    patternZh: (b, m) => `淋浴、游泳与极端风雨：获得 5ATM 严苛认证的 ${b} ${m} 伴你从容应对所有环境`,
    category: "efficiency",
    angleLabel: "5ATM Allwetter-Fähig",
    targetAudience: "Wassersportler",
  },
  {
    pattern: (b, m) => `24/7 Herzfrequenz-, Blutsauerstoff- (SpO2) und Schlafüberwachung mit der ${b} ${m}`,
    patternZh: (b, m) => `24小时连续心率、SpO2 血氧饱和度及科学睡眠分期监测：${b} ${m}`,
    category: "efficiency",
    angleLabel: "24h Rundum-Gesundheit",
    targetAudience: "Gesundheitsbewusste",
  },
  {
    pattern: (b, m) => `Musiksteuerung, Benachrichtigungen und Sofort-Licht in einer Uhr: ${b} ${m}`,
    patternZh: (b, m) => `音乐控制、即时消息推送与一键超亮照明集于一身：${b} ${m}`,
    category: "efficiency",
    angleLabel: "Alltags-Effizienz",
    targetAudience: "Technik-Begeisterte",
  },

  // 3. Hardware & Metal Craft (Silber-Metall & LED-Licht)
  {
    pattern: (b, m) => `Massives silbernes Metallgehäuse trifft auf 1,46" HD-Touchscreen: Die ${b} ${m}`,
    patternZh: (b, m) => `高品质银色金属硬汉机身碰撞 1.46 英寸高清触控大屏：这就是 ${b} ${m}`,
    category: "gadget",
    angleLabel: "Robustes Silber-Metall",
    targetAudience: "Männer mit Stil & Outdoor-Herz",
  },
  {
    pattern: (b, m) => `Ein Knopfdruck und die Umgebung wird taghell: Die LED-Taschenlampe der ${b} ${m}`,
    patternZh: (b, m) => `一键按下瞬间照亮前方视野：${b} ${m} 专为夜行设计的强光 LED 手电筒`,
    category: "gadget",
    angleLabel: "Integrierte Power-LED",
    targetAudience: "EDC- & Gadget-Liebhaber",
  },
  {
    pattern: (b, m) => `Das Unboxing der stabilsten Smartwatch des Jahres: ${b} ${m} im Härtetest`,
    patternZh: (b, m) => `年度最坚固硬核智能手表开箱：${b} ${m} 极限耐摔实机上手测评`,
    category: "gadget",
    angleLabel: "Härtetest & Unboxing",
    targetAudience: "TikTok Tech-Community",
  },
  {
    pattern: (b, m) => `Brillantes 1,46 Zoll HD Display mit butterweicher Touch-Bedienung: ${b} ${m}`,
    patternZh: (b, m) => `1.46 英寸视网膜级高清屏幕搭配丝滑流畅的触控交互：${b} ${m}`,
    category: "gadget",
    angleLabel: "1,46 Zoll HD Brillanz",
    targetAudience: "Display-Puristen",
  },
  {
    pattern: (b, m) => `Elegant im Meeting, unbezwingbar in den Bergen: Die edle ${b} ${m} Smartwatch`,
    patternZh: (b, m) => `会议室中尽显银色沉稳干练，崇山峻岭中坚不可摧：全能手表 ${b} ${m}`,
    category: "gadget",
    angleLabel: "Business meets Outdoor",
    targetAudience: "Berufstätige Outdoor-Fans",
  },

  // 4. Smart Tools & Innovation (Werkzeug & EDC)
  {
    pattern: (b, m) => `Das ultimative Survival-Tool am Handgelenk: LED-Lampe, 5ATM und 800 mAh in der ${b} ${m}`,
    patternZh: (b, m) => `手腕上的终极生存工具箱：${b} ${m} 融合了 LED 手电筒、5ATM 防水与 800mAh 大电池`,
    category: "ai_power",
    angleLabel: "Survival-Werkzeug",
    targetAudience: "Prepper & Abenteurer",
  },
  {
    pattern: (b, m) => `Präzise Biometrie-Sensoren für Puls und Blutsauerstoff rund um die Uhr mit ${b} ${m}`,
    patternZh: (b, m) => `高精度生物传感器 24 小时全天候追踪脉搏与血氧状态：${b} ${m}`,
    category: "ai_power",
    angleLabel: "Smarte Sensorik",
    targetAudience: "Sport-Tracking",
  },
  {
    pattern: (b, m) => `Verpasse keinen Anruf mehr beim Radfahren oder Klettern dank Bluetooth 5.3 in der ${b} ${m}`,
    patternZh: (b, m) => `骑行或登山时不错过重要来电，${b} ${m} 蓝牙 5.3 带来极其稳定的清晰通话`,
    category: "ai_power",
    angleLabel: "Freisprechfunktion",
    targetAudience: "Biker & Kletterer",
  },
  {
    pattern: (b, m) => `Intelligente Schlafanalyse und Erholungs-Score für maximale Leistung mit ${b} ${m}`,
    patternZh: (b, m) => `智能睡眠分析与身体恢复评分，${b} ${m} 助力每天保持巅峰运动状态`,
    category: "ai_power",
    angleLabel: "Schlaf- und Erholungs-Guide",
    targetAudience: "Fitness-Orientierte",
  },

  // 5. Secret Hack & Curiosity (Geheimtipp & Entdeckung)
  {
    pattern: (b, m) => `Der echte Geheimtipp unter Outdoor-Smartwatches: Warum alle über die ${b} ${m} sprechen`,
    patternZh: (b, m) => `户外智能手表领域的黑马秘诀：为什么所有人都在讨论 ${b} ${m}`,
    category: "secret_hack",
    angleLabel: "Viraler Geheimtipp",
    targetAudience: "TikTok Community",
  },
  {
    pattern: (b, m) => `Warum Bergführer und Handwerker jetzt auf die ${b} ${m} schwören`,
    patternZh: (b, m) => `为什么专业登山向导与一线工程师都对 ${b} ${m} 的抗造表现赞不绝口`,
    category: "secret_hack",
    angleLabel: "Profis empfehlen",
    targetAudience: "Outdoor-Community",
  },
  {
    pattern: (b, m) => `Eine Smartwatch mit echter LED-Taschenlampe und 800 mAh? Das ist die ${b} ${m}`,
    patternZh: (b, m) => `自带真正 LED 强光手电筒与 800mAh 超长续航的智能手表？这就是 ${b} ${m}`,
    category: "secret_hack",
    angleLabel: "Einzigartige Kombination",
    targetAudience: "Gadget-Sucher",
  },
  {
    pattern: (b, m) => `Das unverwüstliche Technik-Highlight: So stark ist die ${b} ${m} wirklich`,
    patternZh: (b, m) => `坚不可摧的硬核科技代表作：实机揭秘 ${b} ${m} 究竟有多强大`,
    category: "secret_hack",
    angleLabel: "Härtetest-Enthüllung",
    targetAudience: "Qualitätskäufer",
  },

  // 6. Interactive Questions & Community (Fragen & Kommentare)
  {
    pattern: (b, m) => `Würdest du diese Uhr bei 50 Metern Tauchtiefe tragen? Wir testen die 5ATM der ${b} ${m}!`,
    patternZh: (b, m) => `你敢戴着手表下潜到水深 50 米吗？实测 ${b} ${m} 的 5ATM 防水极限！`,
    category: "question",
    angleLabel: "Tauch-Härtetest Frage",
    targetAudience: "Neugierige Zuschauer",
  },
  {
    pattern: (b, m) => `Was findest du genialer an der ${b} ${m}: Den 800 mAh Riesenakku oder die LED-Taschenlampe?`,
    patternZh: (b, m) => `你觉得 ${b} ${m} 哪个亮点更实用：800mAh 超大电池还是强光 LED 手电？`,
    category: "question",
    angleLabel: "Feature-Duell",
    targetAudience: "Kommentar-Freudige",
  },
  {
    pattern: (b, m) => `Wie viel würdest du für eine massive Metall-Smartwatch mit 5ATM wie die ${b} ${m} schätzen?`,
    patternZh: (b, m) => `全金属机身加 5ATM 防水，你来猜猜这款 ${b} ${m} 售价会是多少？`,
    category: "question",
    angleLabel: "Preisschätzungs-Spiel",
    targetAudience: "Kaufinteressenten",
  },
  {
    pattern: (b, m) => `Hattest du jemals eine Smartwatch mit integrierter LED-Taschenlampe wie die ${b} ${m}?`,
    patternZh: (b, m) => `你曾用过像 ${b} ${m} 这样真正自带侧边超亮 LED 手电筒的智能表吗？`,
    category: "question",
    angleLabel: "Erfahrungs-Frage",
    targetAudience: "Allgemeines Publikum",
  },

  // 7. Spec Power & Performance (Technische Höchstwerte)
  {
    pattern: (b, m) => `800 mAh Akku + 5ATM Wasserschutz + LED-Lampe: Das Datenblatt der ${b} ${m} begeistert`,
    patternZh: (b, m) => `800mAh 超大电池 + 5ATM 深度防水 + 强光 LED 手电：${b} ${m} 豪华配置无可挑剔`,
    category: "spec_power",
    angleLabel: "Datenblatt-Gigant",
    targetAudience: "Spec-Liebhaber",
  },
  {
    pattern: (b, m) => `50 Meter wasserdicht nach 5ATM Standard: Die ${b} ${m} kennt keine Grenzen`,
    patternZh: (b, m) => `获得 5ATM 潜水级防水认证，${b} ${m} 伴你无惧任何极端涉水挑战`,
    category: "spec_power",
    angleLabel: "Zertifiziert 5ATM",
    targetAudience: "Taucher & Wassersportler",
  },
  {
    pattern: (b, m) => `Massiver Metallrahmen schützt das 1,46" HD-Touchdisplay der ${b} ${m} vor jedem Stoß`,
    patternZh: (b, m) => `高强度实心金属外壳全方位保护 1.46 英寸高清屏，${b} ${m} 硬核防撞耐造`,
    category: "spec_power",
    angleLabel: "1,46 HD Panzerschutz",
    targetAudience: "Hardcore-Nutzer",
  },
  {
    pattern: (b, m) => `100+ Sportmodi mit präzisem Puls- und Kalorientracking in der ${b} ${m}`,
    patternZh: (b, m) => `涵盖 100+ 种专业运动模式，${b} ${m} 精准记录心率与卡路里消耗`,
    category: "spec_power",
    angleLabel: "100+ Präzisionssport",
    targetAudience: "Sportler",
  },
];

// Algorithmic generator for KT80 in Spanish or German
export function generateKt80AlgorithmicTitles(
  category: AngleCategory = "all_mixed",
  customKeyword?: string,
  customTags?: string,
  language: TargetLanguage = "es"
): GeneratedTitle[] {
  const brand = "FOSMET";
  const model = "KT80";
  const isGerman = language === "de";
  const baseTemplates = isGerman ? KT80_GERMAN_TEMPLATES : KT80_SPANISH_TEMPLATES;
  const defaultTags = isGerman ? KT80_GERMAN_TAGS : KT80_SPANISH_TAGS;
  const activeTags = (customTags && customTags.trim()) ? customTags.trim() : defaultTags;

  // Filter templates by category
  let available = category === "all_mixed"
    ? [...baseTemplates]
    : baseTemplates.filter((t) => t.category === category);

  if (available.length === 0) {
    available = [...baseTemplates];
  }

  // Shuffle available templates pool randomly
  const shuffledPool = [...available].sort(() => Math.random() - 0.5);

  const results: GeneratedTitle[] = [];
  const seenHooks = new Set<string>();

  // Modifiers and decorators for variety and freshness across multiple generations
  const spanishPrefixPairs: [string, string][] = [
    ["¡Novedad absoluta!", "【重磅首发】"],
    ["¡Brutal!", "【太强悍了！】"],
    ["¡Impresionante!", "【令人惊艳！】"],
    ["¡Prueba extrema!", "【极限实测！】"],
    ["¡Recomendado!", "【店长力荐！】"],
    ["¡Top ventas!", "【热销爆款！】"],
    ["¡El definitivo!", "【终极之选！】"],
    ["¡Ojo a esto!", "【重点看这里！】"],
    ["¡No te lo pierdas!", "【千万别错过！】"],
    ["¡100% resistente!", "【100%硬核耐磨！】"],
    ["¡Mira esto!", "【快来看看这个！】"],
    ["¡Increíble!", "【不可思议！】"],
    ["【Imperdible】", "【绝不能错过】"],
    ["【Review Real】", "【真实测评】"],
    ["【Test Extremo】", "【极限耐力测试】"],
    ["【Top 2026】", "【2026年度机皇】"]
  ];

  const spanishSuffixPairs: [string, string][] = [
    [" ¡Una auténtica locura!", " 简直太惊艳了！"],
    [" ¡No te arrepentirás!", " 绝对不会后悔！"],
    [" ¡100% garantizado!", " 100%品质保证！"],
    [" ¡Pruébalo y verás!", " 亲自上手就知道！"],
    [" ¡El reloj del momento!", " 当下最火爆的智能表！"],
    [" ¡Imprescindible!", " 不可错过的必备单品！"]
  ];

  const germanPrefixPairs: [string, string][] = [
    ["Neuheit!", "【重磅新品！】"],
    ["Extrem!", "【极限制霸！】"],
    ["Beeindruckend!", "【令人震撼！】"],
    ["Härtetest bestanden!", "【通过极限耐力测试！】"],
    ["Empfehlung!", "【强力推荐！】"],
    ["Bestseller!", "【热销爆款！】"],
    ["Der Allrounder!", "【全能六边形战士！】"],
    ["Achtung!", "【注意关注！】"],
    ["Must-Have!", "【不可错过的必备款！】"],
    ["100% Unzerstörbar!", "【100%坚固耐用！】"],
    ["Unglaublich!", "【不可思议的体验！】"],
    ["Geheimtipp!", "【业内私藏秘诀！】"],
    ["【Must-Have】", "【必备爆品】"],
    ["【Echter Test】", "【真实深度评测】"],
    ["【Top 2026】", "【2026年度机皇】"],
    ["【Outdoor-Tipp】", "【户外硬核指南】"]
  ];

  const germanSuffixPairs: [string, string][] = [
    [" Absolut genial!", " 简直太赞了！"],
    [" Unbedingt testen!", " 一定要亲自体验！"],
    [" 100% Kaufempfehlung!", " 100%超高购买满意度！"],
    [" Die beste Wahl!", " 最明智的高性价比选择！"],
    [" Unglaubliche Qualität!", " 不可思议的顶级质感！"],
    [" Perfekt für draußen!", " 户外出行的绝佳装备！"]
  ];

  const prefixPairs = isGerman ? germanPrefixPairs : spanishPrefixPairs;
  const suffixPairs = isGerman ? germanSuffixPairs : spanishSuffixPairs;

  let templateIdx = 0;
  let attempts = 0;

  while (results.length < 50 && attempts < 300) {
    attempts++;
    const template = shuffledPool[templateIdx % shuffledPool.length];
    templateIdx++;

    let hook = template.pattern(brand, model, customKeyword);
    let hookZh = template.patternZh ? template.patternZh(brand, model, customKeyword) : "";

    // Apply smart permutation decorators
    const roll = Math.random();
    if (roll < 0.35 && !hook.startsWith("¡") && !hook.startsWith("【") && !hook.startsWith("Neuheit") && !hook.startsWith("Extrem")) {
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

    if (customKeyword && customKeyword.trim() && !hook.toLowerCase().includes(customKeyword.trim().toLowerCase())) {
      if (Math.random() > 0.3) {
        hook = `[${customKeyword.trim()}] ${hook}`;
        if (hookZh) {
          hookZh = `【${customKeyword.trim()}】${hookZh}`;
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

    const fullTitle = `${hook} ${activeTags}`;

    results.push({
      id: `kt80-${language}-${Date.now()}-${results.length + 1}-${Math.random().toString(36).substring(2, 6)}`,
      productId: "kt80",
      title: fullTitle,
      hook,
      tags: activeTags,
      angle: template.angleLabel,
      angleCategory: template.category,
      targetAudience: template.targetAudience,
      charCount: fullTitle.length,
      hookCharCount: hook.length,
      language,
      isFavorite: false,
      createdAt: new Date().toISOString(),
      translationZh: hookZh || undefined,
    });
  }

  return results.slice(0, 50);
}
