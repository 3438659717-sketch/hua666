import { AngleCategory, GeneratedTitle, ProductId, TargetLanguage } from "../types";

export const T40_SPANISH_TAGS = "#FOSMET #T40 #españa #Niños #relojinteligente";
export const T40_GERMAN_TAGS = "#FOSMET #T40 #Kinder #Smartwatch #Kindersicherheit";

interface HookTemplate {
  pattern: (brand: string, model: string, keyword?: string) => string;
  patternZh: (brand: string, model: string, keyword?: string) => string;
  category: AngleCategory;
  angleLabel: string;
  targetAudience: string;
}

// 50+ Spanish TikTok Viral Hook Templates for FOSMET T40 Kids Smartwatch
export const T40_SPANISH_TEMPLATES: HookTemplate[] = [
  // 1. Pain Point & Safety / Counter-Intuitive (Dolor y Tranquilidad de los Padres)
  {
    pattern: (b, m) => `¿Tu hijo sale solo y te da pánico no saber dónde está? Con ${b} ${m} y GPS en vivo tendrás paz mental`,
    patternZh: (b, m) => `孩子独自出门担心无法掌握位置？有了 ${b} ${m} 和实时GPS定位，家长彻底放宽心`,
    category: "pain_point",
    angleLabel: "Paz mental para padres",
    targetAudience: "Padres con niños en edad escolar",
  },
  {
    pattern: (b, m) => `¿Comprarle un móvil a tu hijo de 8 años? Mala idea: con ${b} ${m} tienes llamadas 4G sin redes sociales`,
    patternZh: (b, m) => `给8岁孩子买智能手机？不如选择 ${b} ${m}：拥有4G通话且杜绝不良网络与游戏沉迷`,
    category: "pain_point",
    angleLabel: "Alternativa al smartphone",
    targetAudience: "Familias que evitan la adicción a pantallas",
  },
  {
    pattern: (b, m) => `¿Parques llenos de gente y miedo a perder a tu pequeño? La triple localización GPS+LBS+WiFi de ${b} ${m} te salva`,
    patternZh: (b, m) => `商场游乐园人多担心孩子走失？${b} ${m} 的 GPS+LBS+WiFi 三重精准定位时刻护航`,
    category: "pain_point",
    angleLabel: "Miedo a pérdidas en parques",
    targetAudience: "Padres preocupados por la seguridad",
  },
  {
    pattern: (b, m) => `¿Tu hijo no responde cuando lo llamas? Con la videollamada 4G HD de ${b} ${m} lo verás cara a cara en un toque`,
    patternZh: (b, m) => `打电话给孩子总是不接？${b} ${m} 一键发起4G高清双向视频，随时随地面对面沟通`,
    category: "pain_point",
    angleLabel: "Contacto visual inmediato",
    targetAudience: "Madres y padres trabajadores",
  },
  {
    pattern: (b, m) => `¿Qué hace tu hijo si ocurre una emergencia? El botón SOS de ${b} ${m} llama a sus padres al instante`,
    patternZh: (b, m) => `遇到突发紧急情况怎么办？${b} ${m} 一键长按SOS即刻轮流呼叫紧急联系人`,
    category: "pain_point",
    angleLabel: "Botón SOS de emergencia",
    targetAudience: "Padres con niños que van solos al colegio",
  },
  {
    pattern: (b, m) => `¿Relojes infantiles que se rompen con la primera salpicadura? ${b} ${m} resiste juegos bajo la lluvia con IP68`,
    patternZh: (b, m) => `普通儿童手表一碰水就坏？${b} ${m} 具备 IP68 级专业防水，雨天洗手玩耍毫无顾忌`,
    category: "pain_point",
    angleLabel: "Resistencia al agua real",
    targetAudience: "Padres de niños hiperactivos",
  },

  // 2. Efficiency & Communication (Videollamadas 4G y Chat de Voz)
  {
    pattern: (b, m) => `Videollamada 4G en tiempo real en la muñeca de tu hijo: así de fácil es comunicarte con ${b} ${m}`,
    patternZh: (b, m) => `手腕上的实时4G高清视频通话：用 ${b} ${m} 和孩子高效沟通如此简单惬意`,
    category: "efficiency",
    angleLabel: "Videollamadas 4G en directo",
    targetAudience: "Padres y madres hiperconectados",
  },
  {
    pattern: (b, m) => `Mándale un mensaje de voz cariñoso antes del recreo: el chat de voz de ${b} ${m} los mantiene unidos`,
    patternZh: (b, m) => `课间发一条充满关怀的语音：${b} ${m} 双向语音聊天让亲情随时随地零距离`,
    category: "efficiency",
    angleLabel: "Chat de voz bidireccional",
    targetAudience: "Familias cariñosas",
  },
  {
    pattern: (b, m) => `Solo los contactos aprobados por mamá y papá pueden llamar a ${b} ${m}: cero llamadas de desconocidos`,
    patternZh: (b, m) => `仅限家长预设的安全联系人才能呼入：${b} ${m} 筑牢防线，彻底拦截陌生人骚扰电话`,
    category: "efficiency",
    angleLabel: "Lista blanca de contactos seguros",
    targetAudience: "Padres estrictos con la privacidad",
  },
  {
    pattern: (b, m) => `Salida del colegio sin estrés: localiza a tu hijo en el mapa en vivo con ${b} ${m} nada más sonar la campana`,
    patternZh: (b, m) => `放学接娃不再焦虑盲等：校门一打铃，通过 ${b} ${m} 实时动态地图精准锁定孩子位置`,
    category: "efficiency",
    angleLabel: "Salida del cole coordinada",
    targetAudience: "Padres en horario de recogida escolar",
  },
  {
    pattern: (b, m) => `Cámara integrada para que tu hijo comparta sus dibujos y travesuras contigo al segundo con ${b} ${m}`,
    patternZh: (b, m) => `机身自带高清微型相机：让孩子用 ${b} ${m} 随时随地记录美好瞬间并分享给爸爸妈妈`,
    category: "efficiency",
    angleLabel: "Cámara fotográfica infantil",
    targetAudience: "Niños curiosos y creativos",
  },

  // 3. Gadget, Classroom Mode & Habits (Modo Clase, Recompensas y Diversión)
  {
    pattern: (b, m) => `Cero distracciones en el colegio: el Modo Clase de ${b} ${m} bloquea internet para que saque las mejores notas`,
    patternZh: (b, m) => `上课绝不分心玩耍：${b} ${m} 课堂模式自动锁闭通信与娱乐，助力孩子全神贯注拿高分`,
    category: "gadget",
    angleLabel: "Modo Clase anti-distracciones",
    targetAudience: "Profesores y padres exigentes",
  },
  {
    pattern: (b, m) => `¡El truco para que haga los deberes sin protestar! El sistema de Recompensas de Amor de ${b} ${m}`,
    patternZh: (b, m) => `让孩子主动写作业做家务的育儿神器！${b} ${m} 独家配备「爱的奖励」积分激励机制`,
    category: "gadget",
    angleLabel: "Recompensas de amor",
    targetAudience: "Padres que buscan educar con refuerzo positivo",
  },
  {
    pattern: (b, m) => `Motívalo a moverse y dejar la consola: el podómetro divertido de ${b} ${m} convierte los pasos en juego`,
    patternZh: (b, m) => `告别久坐沉迷游戏机：${b} ${m} 趣味计步器让每日运动与健康习惯变成闯关游戏`,
    category: "gadget",
    angleLabel: "Podómetro divertido",
    targetAudience: "Familias deportistas",
  },
  {
    pattern: (b, m) => `Descubre cómo duerme tu pequeño: el monitor de sueño de ${b} ${m} cuida de su descanso cada noche`,
    patternZh: (b, m) => `深度关爱孩子的睡眠健康：${b} ${m} 科学睡眠监测每晚守护深睡浅睡，保障充足精力`,
    category: "gadget",
    angleLabel: "Monitoreo del sueño infantil",
    targetAudience: "Padres enfocados en la salud infantil",
  },
  {
    pattern: (b, m) => `Diseño moderno que a los peques les flipa llevar puesto todos los días: el nuevo ${b} ${m}`,
    patternZh: (b, m) => `颜值爆表让萌娃爱不释手主动佩戴：专为儿童美学定制的 ${b} ${m} 智能手表`,
    category: "gadget",
    angleLabel: "Diseño ergonómico infantil",
    targetAudience: "Niños de 5 a 12 años",
  },

  // 4. Tech & Safety AI Power (GPS+LBS+WiFi, SOS y Control Parental)
  {
    pattern: (b, m) => `¿Por qué ${b} ${m} no falla al localizar? Combina GPS por satélite, antenas LBS y redes WiFi`,
    patternZh: (b, m) => `为什么 ${b} ${m} 室内外定位都能如此精准？因为同时搭载 GPS卫星+LBS基站+WiFi三重多重定位`,
    category: "ai_power",
    angleLabel: "Triple precisión de posicionamiento",
    targetAudience: "Padres técnicos que buscan precisión",
  },
  {
    pattern: (b, m) => `Seguridad inteligente para tus hijos: con ${b} ${m} configuras zonas seguras y alertas en tu móvil`,
    patternZh: (b, m) => `真正的儿童智能安全结界：通过 ${b} ${m} 手机App设置安全围栏，出入区域即刻弹窗提醒`,
    category: "ai_power",
    angleLabel: "Zonas seguras inteligentes",
    targetAudience: "Padres precavidos",
  },
  {
    pattern: (b, m) => `Un botón de auxilio que nunca falla: mantén pulsado SOS en ${b} ${m} y llama a mamá en 3 segundos`,
    patternZh: (b, m) => `永不失联的紧急求助键：长按 ${b} ${m} 专属SOS实体键，3秒内自动轮播直拨父母手机`,
    category: "ai_power",
    angleLabel: "SOS instantáneo de emergencia",
    targetAudience: "Familias que viajan o van al parque",
  },
  {
    pattern: (b, m) => `Control parental total desde tu smartphone: gestiona el horario escolar y contactos de tu hijo con ${b} ${m}`,
    patternZh: (b, m) => `家长手机端掌控全局：通过配套 App 轻松管理 ${b} ${m} 的上课免打扰时段与联系人白名单`,
    category: "ai_power",
    angleLabel: "Control parental total",
    targetAudience: "Padres modernos",
  },

  // 5. Spec Power & Durability (IP68, 4G, Batería y Cámara)
  {
    pattern: (b, m) => `Certificación IP68 a prueba de agua y barro: ${b} ${m} aguanta los juegos más salvajes de los niños`,
    patternZh: (b, m) => `IP68 级专业深水防尘防泼溅认证：${b} ${m} 无惧孩子泥潭嬉闹、洗手淋雨等各种暴击测试`,
    category: "spec_power",
    angleLabel: "IP68 a prueba de travesuras",
    targetAudience: "Padres con niños revoltosos",
  },
  {
    pattern: (b, m) => `Conectividad 4G de alta velocidad en la muñeca: videollamadas fluidas y audio nítido con ${b} ${m}`,
    patternZh: (b, m) => `手腕上的 4G 全网通高速互联：${b} ${m} 带来丝滑顺畅的高清视频聊天与超清语音通话`,
    category: "spec_power",
    angleLabel: "Red 4G de alta velocidad",
    targetAudience: "Buscadores de especificaciones técnicas",
  },
  {
    pattern: (b, m) => `Batería optimizada para aguantar todo el día de colegio y extraescolares: la autonomía de ${b} ${m}`,
    patternZh: (b, m) => `针对儿童作息深度优化的低功耗算法：${b} ${m} 轻松陪伴孩子度过一整天上学与课外兴趣班`,
    category: "spec_power",
    angleLabel: "Batería para todo el día",
    targetAudience: "Padres cansados de recargar a mediodía",
  },
  {
    pattern: (b, m) => `Pantalla táctil HD a todo color ultrarresistente diseñada para manitas inquietas: así es ${b} ${m}`,
    patternZh: (b, m) => `专为萌娃小手定制的高清全彩护眼触控屏：坚固防刮耐用，操作直观好上手就是 ${b} ${m}`,
    category: "spec_power",
    angleLabel: "Pantalla táctil HD resistente",
    targetAudience: "Compradores de tecnología infantil",
  },

  // 6. Secret Hack / Parent Tips (El Secreto de los Padres Tranquilos)
  {
    pattern: (b, m) => `El secreto de los padres en España para dar autonomía a sus hijos sin comprarles móvil: ${b} ${m}`,
    patternZh: (b, m) => `西班牙智慧父母培养孩子独立性的秘密装备：无需过早给手机，一块 ${b} ${m} 轻松搞定`,
    category: "secret_hack",
    angleLabel: "El secreto de la autonomía infantil",
    targetAudience: "Comunidades de crianza respetuosa",
  },
  {
    pattern: (b, m) => `¿Por qué los psicólogos infantiles recomiendan ${b} ${m} antes que un smartphone?`,
    patternZh: (b, m) => `为什么越来越多的儿童教育专家推荐用 ${b} ${m} 代替给孩子过早配备智能手机？`,
    category: "secret_hack",
    angleLabel: "Recomendado por educadores",
    targetAudience: "Padres reflexivos y educadores",
  },
  {
    pattern: (b, m) => `El truco para saber si tu hijo ha llegado bien al cole sin tener que llamar al profesor: mira ${b} ${m}`,
    patternZh: (b, m) => `不用打电话麻烦班主任也能确认孩子是否平安到校：打开手机查看 ${b} ${m} 实时定位轨迹`,
    category: "secret_hack",
    angleLabel: "Llegada segura al colegio",
    targetAudience: "Padres ocupados trabajando",
  },
  {
    pattern: (b, m) => `El regalo perfecto para su comunión o cumpleaños que enamora a los peques y tranquiliza a los padres: ${b} ${m}`,
    patternZh: (b, m) => `生日或开学季绝不会踩雷的梦幻礼物：孩子戴上开心炫酷，父母收获满满安全感：${b} ${m}`,
    category: "secret_hack",
    angleLabel: "El regalo perfecto para niños",
    targetAudience: "Buscadores de regalos para niños",
  },

  // 7. Question & Viral Engagement (Preguntas que generan comentarios)
  {
    pattern: (b, m) => `¿A qué edad deberías darle un reloj inteligente a tu hijo? Con ${b} ${m} los padres opinan esto`,
    patternZh: (b, m) => `究竟几岁适合给孩子配备智能手表？来看看用过 ${b} ${m} 的家长们怎么说`,
    category: "question",
    angleLabel: "Debate sobre la edad ideal",
    targetAudience: "Comunidad de madres y padres en TikTok",
  },
  {
    pattern: (b, m) => `¿Prefieres que tu hijo tenga móvil o este smartwatch seguro ${b} ${m}? Cuéntanos en los comentarios`,
    patternZh: (b, m) => `你会给小学生买昂贵手机还是这块安全守护手表 ${b} ${m}？欢迎在评论区聊聊你的育儿观`,
    category: "question",
    angleLabel: "¿Móvil o smartwatch seguro?",
    targetAudience: "Usuarios que comentan en TikTok",
  },
  {
    pattern: (b, m) => `¿Sabías que ${b} ${m} tiene videollamadas 4G y no deja que tu hijo entre en internet no apto?`,
    patternZh: (b, m) => `你知道 ${b} ${m} 既支持随时4G高清视频通话，又能物理阻断不良网络信息吗？`,
    category: "question",
    angleLabel: "Sorpresa de seguridad digital",
    targetAudience: "Padres preocupados por el ciberacoso",
  },
];

// 50+ German TikTok Viral Hook Templates for FOSMET T40 Kinder-Smartwatch
export const T40_GERMAN_TEMPLATES: HookTemplate[] = [
  // 1. Schmerzpunkt & Kindersicherheit (Kindersicherheit & Eltern-Entlastung)
  {
    pattern: (b, m) => `Angst, wenn dein Kind alleine zur Schule geht? Mit ${b} ${m} und Live-GPS-Ortung weißt du immer Bescheid`,
    patternZh: (b, m) => `担心孩子独自上下学安全？${b} ${m} 实时GPS定位让你时刻掌握孩子行程动态`,
    category: "pain_point",
    angleLabel: "Sicherer Schulweg",
    targetAudience: "Eltern von Grundschulkindern",
  },
  {
    pattern: (b, m) => `Smartphone für ein 7-jähriges Kind? Zu gefährlich! ${b} ${m} bietet 4G-Anrufe ganz ohne Social-Media-Sucht`,
    patternZh: (b, m) => `给7岁孩子买智能手机？太危险！${b} ${m} 具备 4G 通话且杜绝手机游戏与社交媒体沉迷`,
    category: "pain_point",
    angleLabel: "Smartphone-Ersatz für Kinder",
    targetAudience: "Vorausschauende Eltern",
  },
  {
    pattern: (b, m) => `Im vollen Freizeitpark das Kind aus den Augen verloren? Die GPS+LBS+WiFi Ortung der ${b} ${m} rettet den Tag`,
    patternZh: (b, m) => `游乐园人多转头找不到孩子？${b} ${m} 的 GPS+LBS+WiFi 三重精准定位迅速定位解围`,
    category: "pain_point",
    angleLabel: "Schutz im Freizeitpark",
    targetAudience: "Familien bei Ausflügen",
  },
  {
    pattern: (b, m) => `Kind geht nicht ans Telefon? Mit dem 4G-HD-Videochat der ${b} ${m} siehst du sofort sein Lächeln`,
    patternZh: (b, m) => `打电话孩子没听到？开启 ${b} ${m} 的 4G 双向高清视频通话，瞬间看到孩子笑脸`,
    category: "pain_point",
    angleLabel: "Sofortiger Sichtkontakt",
    targetAudience: "Berufstätige Mütter und Väter",
  },
  {
    pattern: (b, m) => `Was tun im Notfall? Die SOS-Taste der ${b} ${m} ruft sofort Mama und Papa nacheinander an`,
    patternZh: (b, m) => `遇到危险怎么办？${b} ${m} 一键长按专属 SOS 键，即刻轮流呼叫预设紧急联系人`,
    category: "pain_point",
    angleLabel: "SOS-Notruftaste",
    targetAudience: "Sicherheitsbewusste Eltern",
  },
  {
    pattern: (b, m) => `Geht beim Händewaschen kaputt? Nicht mit ${b} ${m}: echte IP68 Wasserdichtigkeit für echte Abenteuer`,
    patternZh: (b, m) => `洗个手就进水报废？${b} ${m} 具备真正 IP68 级防尘防水能力，从容应对儿童泼溅玩水`,
    category: "pain_point",
    angleLabel: "Echtes IP68 wasserdicht",
    targetAudience: "Eltern von aktiven Kindern",
  },

  // 2. Kommunikation & Effizienz (4G Videoanrufe & Sprachnachrichten)
  {
    pattern: (b, m) => `4G Videoanrufe direkt am Handgelenk deines Kindes: Kommunikation war mit ${b} ${m} noch nie so einfach`,
    patternZh: (b, m) => `孩子手腕上的 4G 实时高清视频通话：通过 ${b} ${m} 亲子随时畅联变得前所未有的轻松`,
    category: "efficiency",
    angleLabel: "4G-Zwei-Wege-Videotelefonie",
    targetAudience: "Vernetzte Familien",
  },
  {
    pattern: (b, m) => `Schnelle Sprachnachricht in der großen Pause: die Chat-Funktion der ${b} ${m} verbindet die Familie`,
    patternZh: (b, m) => `课间快速发一条语音报平安：${b} ${m} 双向语音聊天让一家人亲密无间`,
    category: "efficiency",
    angleLabel: "Sprachnachrichten-Chat",
    targetAudience: "Familien mit enger Bindung",
  },
  {
    pattern: (b, m) => `Keine lästigen Spam-Anrufe: nur genehmigte Kontakte können die ${b} ${m} deines Kindes anrufen`,
    patternZh: (b, m) => `远离任何陌生骚扰电话：仅限家长白名单授权的联系人才能与佩戴 ${b} ${m} 的孩子通话`,
    category: "efficiency",
    angleLabel: "Sichere Kontakt-Whitelist",
    targetAudience: "Eltern mit Datenschutz-Fokus",
  },
  {
    pattern: (b, m) => `Schulschluss ohne Stress: verfolge den Schulweg live in der Eltern-App mit ${b} ${m}`,
    patternZh: (b, m) => `放学接娃告别焦急等待：在家长端 App 实时查看 ${b} ${m} 动态轨迹，平安动向尽收眼底`,
    category: "efficiency",
    angleLabel: "Live-Schulweg-Tracking",
    targetAudience: "Pendelnde Eltern",
  },
  {
    pattern: (b, m) => `Integrierte Kamera: Lass dein Kind stolz die schönsten Entdeckungen des Tages mit ${b} ${m} teilen`,
    patternZh: (b, m) => `内置高清拍照相机：让孩子用 ${b} ${m} 随时记录分享一天的奇思妙想与快乐瞬间`,
    category: "efficiency",
    angleLabel: "Integrierte Kinder-Kamera",
    targetAudience: "Kreative Kinder",
  },

  // 3. Schulmodus & Belohnung (Schulmodus, Belohnung & Gesundheit)
  {
    pattern: (b, m) => `Volle Konzentration im Unterricht: der Schulmodus der ${b} ${m} schaltet Internet und Töne stumm`,
    patternZh: (b, m) => `课堂专注不溜号：${b} ${m} 课堂模式上课时段自动锁闭网络与通话，让老师与家长放心`,
    category: "gadget",
    angleLabel: "Schulmodus ohne Ablenkung",
    targetAudience: "Lehrer und engagierte Eltern",
  },
  {
    pattern: (b, m) => `Der Geheimtipp für stressfreie Hausaufgaben: das liebevolle Belohnungssystem der ${b} ${m}`,
    patternZh: (b, m) => `让孩子主动写作业与做家务的育儿秘诀：${b} ${m} 独家搭载「爱的奖励」激励功能`,
    category: "gadget",
    angleLabel: "Liebevolles Belohnungssystem",
    targetAudience: "Eltern auf der Suche nach Motivation",
  },
  {
    pattern: (b, m) => `Mehr Bewegung an der frischen Luft: der bunte Schrittzähler der ${b} ${m} motiviert spielerisch`,
    patternZh: (b, m) => `激发户外运动兴趣：${b} ${m} 趣味彩色计步器将日常步数变成升级打怪的健康游戏`,
    category: "gadget",
    angleLabel: "Spielerischer Schrittzähler",
    targetAudience: "Gesundheitsbewusste Familien",
  },
  {
    pattern: (b, m) => `Schläft dein Kind erholsam genug? Die Schlafanalyse der ${b} ${m} wacht über jede Nacht`,
    patternZh: (b, m) => `孩子晚上睡得安稳充足吗？${b} ${m} 科学睡眠监测每晚记录睡眠质量，守护茁壮成长`,
    category: "gadget",
    angleLabel: "Kindgerechte Schlafüberwachung",
    targetAudience: "Eltern mit Fokus auf Kindergesundheit",
  },
  {
    pattern: (b, m) => `Cooles Design, das Kinder mit Stolz tragen: die neue ${b} ${m} Kinder-Smartwatch`,
    patternZh: (b, m) => `孩子们抢着戴出门的炫酷高颜值：专为儿童人体工学设计的 ${b} ${m} 智能手表`,
    category: "gadget",
    angleLabel: "Kindgerechtes Design",
    targetAudience: "Kinder von 5 bis 12 Jahren",
  },

  // 4. Technik & Schutz (GPS+LBS+WiFi & Elternkontrolle)
  {
    pattern: (b, m) => `Warum die Ortung der ${b} ${m} so verlässlich ist: Dreifache Satelliten-, Mobilfunk- und WiFi-Ortung`,
    patternZh: (b, m) => `为什么 ${b} ${m} 的定位如此精准靠谱？融合 GPS 卫星 + LBS 基站 + WiFi 多重定位黑科技`,
    category: "ai_power",
    angleLabel: "Dreifache Ortungspräzision",
    targetAudience: "Technikaffine Eltern",
  },
  {
    pattern: (b, m) => `Sicherheitszonen einrichten: sobald dein Kind die Schule verlässt, gibt die ${b} ${m} App Bescheid`,
    patternZh: (b, m) => `自定义智能安全电子围栏：孩子一到达或离开学校，${b} ${m} 配套 App 即刻发送安全提醒`,
    category: "ai_power",
    angleLabel: "Intelligenter Sicherheitszaun",
    targetAudience: "Präventionsbewusste Eltern",
  },
  {
    pattern: (b, m) => `Ein Knopfdruck genügt: die mechanische SOS-Taste der ${b} ${m} alarmiert die Eltern in Sekunden`,
    patternZh: (b, m) => `遇到紧急情况无需繁琐翻找：长按 ${b} ${m} 物理 SOS 专属键，数秒内发出求救呼叫`,
    category: "ai_power",
    angleLabel: "Mechanische SOS-Taste",
    targetAudience: "Familien mit hoher Reiselust",
  },
  {
    pattern: (b, m) => `Volle elterliche Kontrolle via Smartphone: mit ${b} ${m} behältst du das Wohl deines Kindes im Blick`,
    patternZh: (b, m) => `家长手机端随时守护掌控：通过 ${b} ${m} 轻松设置上课时间免打扰与联系人权限`,
    category: "ai_power",
    angleLabel: "Vollständige Eltern-App",
    targetAudience: "Moderne Erziehende",
  },

  // 5. Hardware & Haltbarkeit (IP68, 4G, Akku & Display)
  {
    pattern: (b, m) => `IP68 Staub- und Wasserdicht: die ${b} ${m} hält Pfützen, Regen und Spielplatz-Schlamm stand`,
    patternZh: (b, m) => `IP68 顶级防尘防水：${b} ${m} 轻松抵御泥巴、雨水与游乐场泥坑，任孩子尽情玩耍`,
    category: "spec_power",
    angleLabel: "IP68 Spielplatz-Härtetest",
    targetAudience: "Eltern von kleinen Entdeckern",
  },
  {
    pattern: (b, m) => `4G LTE Konnektivität: Ruckelfreie Videotelefonie und beste Sprachqualität mit ${b} ${m}`,
    patternZh: (b, m) => `4G 全网通高速互联：${b} ${m} 提供流畅高清双向视频与高保真纯净通话音质`,
    category: "spec_power",
    angleLabel: "4G LTE Konnektivität",
    targetAudience: "Qualitätsbewusste Käufer",
  },
  {
    pattern: (b, m) => `Ausdauernder Akku für den ganzen Schultag und Sportverein: zuverlässige Power in der ${b} ${m}`,
    patternZh: (b, m) => `持久续航陪伴一整天：${b} ${m} 低功耗芯片轻松覆盖学校上课与课后体育运动`,
    category: "spec_power",
    angleLabel: "Akku für den ganzen Schultag",
    targetAudience: "Praxisorientierte Käufer",
  },
  {
    pattern: (b, m) => `Robustes HD-Farbdisplay: kratzfestes Glas und kinderleichte Touch-Bedienung bei ${b} ${m}`,
    patternZh: (b, m) => `坚固护眼高清全彩触控屏：防刮玻璃与极简触控，萌娃上手一秒学会的 ${b} ${m}`,
    category: "spec_power",
    angleLabel: "Kratzfestes HD-Display",
    targetAudience: "Familien mit Vorschulkindern",
  },

  // 6. Geheimtipp (Der Trick kluger Eltern)
  {
    pattern: (b, m) => `Der beste Trick deutscher Eltern für mehr Selbstständigkeit ohne Smartphone-Ablenkung: ${b} ${m}`,
    patternZh: (b, m) => `让孩子独立自主且杜绝手机成瘾的德国智慧育儿好物：${b} ${m} 儿童安全智能手表`,
    category: "secret_hack",
    angleLabel: "Geheimtipp für Selbstständigkeit",
    targetAudience: "Eltern-Blogger und Community",
  },
  {
    pattern: (b, m) => `Das perfekte Geschenk zur Einschulung oder zum Geburtstag: ${b} ${m} begeistert Kinder und beruhigt Eltern`,
    patternZh: (b, m) => `入学升学与生日绝不会踩雷的满分礼物：${b} ${m} 让孩子开心自豪，让家长安心踏实`,
    category: "secret_hack",
    angleLabel: "Perfektes Einschulungsgeschenk",
    targetAudience: "Großeltern und Eltern",
  },
  {
    pattern: (b, m) => `Sicher nach Hause kommen: Wie ${b} ${m} deinem Kind das Selbstvertrauen gibt, Wege alleine zu meistern`,
    patternZh: (b, m) => `平安独立回家：${b} ${m} 给予孩子独自探索世界的充足自信与坚实后盾`,
    category: "secret_hack",
    angleLabel: "Selbstvertrauen auf dem Schulweg",
    targetAudience: "Pädagogisch interessierte Eltern",
  },

  // 7. Community & Frage (Diskussionen auf TikTok)
  {
    pattern: (b, m) => `Ab wann sollte ein Kind eine Smartwatch tragen? Die Erfahrungen von Eltern mit der ${b} ${m}`,
    patternZh: (b, m) => `孩子几岁适合拥有一块儿童智能手表？来听听使用 ${b} ${m} 的家长真实心声`,
    category: "question",
    angleLabel: "Altersdebatte für Kinder-Smartwatch",
    targetAudience: "Eltern auf TikTok",
  },
  {
    pattern: (b, m) => `Smartphone oder Kinder-Smartwatch für die Grundschule? Was spricht für ${b} ${m}? Schreibt es in die Kommentare`,
    patternZh: (b, m) => `小学生是该配手机还是安全智能手表？为什么大家更认可 ${b} ${m}？评论区交流一下`,
    category: "question",
    angleLabel: "Smartphone vs. Kinderuhr",
    targetAudience: "Aktive TikTok-Community",
  },
  {
    pattern: (b, m) => `Wusstest du, dass ${b} ${m} 4G-Videoanrufe kann und dank Schulmodus im Unterricht absolut lautlos bleibt?`,
    patternZh: (b, m) => `你知道 ${b} ${m} 既支持随时4G高清视频，又能通过课堂模式在教室里完全静音吗？`,
    category: "question",
    angleLabel: "Schulmodus-Funktion im Test",
    targetAudience: "Erstaunte Eltern",
  },
];

// Spanish and German emotional hook prefix pairs
const T40_SPANISH_PREFIXES: [string, string][] = [
  ["【Tranquilidad Total】", "【家长彻底安心】"],
  ["【Seguridad Infantil】", "【儿童安全守护】"],
  ["【Sin Móvil】", "【告别手机成瘾】"],
  ["【Alerta Padres】", "【家长必看提醒】"],
  ["【Imprescindible】", "【开学必备好物】"],
  ["【Videollamada 4G】", "【4G高清视频】"],
  ["【GPS en Vivo】", "【实时GPS轨迹】"],
  ["【Botón SOS】", "【一键SOS救助】"],
  ["【Modo Escuela】", "【课堂免打扰模式】"],
  ["【IP68 al Agua】", "【IP68级防泼溅】"],
  ["【Truco de Padres】", "【智慧父母秘诀】"],
  ["【Regalo Perfecto】", "【满分好礼推荐】"],
];

const T40_GERMAN_PREFIXES: [string, string][] = [
  ["【Eltern-Tipp】", "【家长智慧秘籍】"],
  ["【Kindersicherheit】", "【儿童安全守护】"],
  ["【Schulweg-Sicher】", "【平安上下学】"],
  ["【Kein Handy-Stress】", "【告别手机焦虑】"],
  ["【4G-Videoanruf】", "【4G双向视频】"],
  ["【Echtzeit-GPS】", "【实时GPS定位】"],
  ["【SOS-Notruf】", "【一键SOS呼叫】"],
  ["【Schulmodus】", "【课堂专注模式】"],
  ["【IP68 Wasserdicht】", "【IP68专业防水】"],
  ["【Einschulung】", "【入学必备清单】"],
  ["【Top-Geschenk】", "【送礼满分精选】"],
  ["【Für Familien】", "【全家安心之选】"],
];

const T40_SPANISH_SUFFIXES: [string, string][] = [
  [" (Paz mental garantizada)", "（全程安心守护）"],
  [" ¡Pruébalo hoy!", "！今日必看体验！"],
  [" ¿Ya lo tienes?", "，你家孩子用上了吗？"],
  [" ¡No esperes más!", "，千万别再犹豫了！"],
  [" - Imprescindible para el cole", " —— 开学入学必备好物"],
  [" ¡Seguridad 24/7!", "！24小时全天候守护！"],
  [" (Alternativa segura al móvil)", "（更安心的手机替代品）"],
  [" ¡Los padres opinan!", "！看看家长怎么说！"],
  [" ¡La mejor compra del año!", "！今年最值得的育儿装备！"],
  [" ¿Lo sabías?", "，你之前了解过吗？"],
];

const T40_GERMAN_SUFFIXES: [string, string][] = [
  [" (Sicherheit garantiert)", "（安全品质守护）"],
  [" Jetzt entdecken!", "，即刻了解体验！"],
  [" Schon ausprobiert?", "，你家孩子体验过了吗？"],
  [" Perfekt für die Einschulung!", "，开学入园满分好物！"],
  [" - Schutz für jeden Tag", " —— 每一天的贴心陪伴"],
  [" Rundum-Schutz für Kinder!", "，给孩子全面的安全守护！"],
  [" (Sichere Smartphone-Alternative)", "（更安心的智能手机替代品）"],
  [" Was sagen Eltern dazu?", "，来听听家长真实反馈！"],
  [" Der Bestseller für Familien!", "！广受好评的家庭爆款！"],
  [" Hättest du das gedacht?", "，你之前有想到吗？"],
];

export function generateT40AlgorithmicTitles(
  category: AngleCategory = "all_mixed",
  customKeyword = "",
  customTags?: string,
  batchSeed: number | string = Date.now(),
  language: TargetLanguage = "es"
): GeneratedTitle[] {
  const brand = "FOSMET";
  const model = "T40";
  const isGerman = language === "de";

  const templatesPool = isGerman ? T40_GERMAN_TEMPLATES : T40_SPANISH_TEMPLATES;
  const prefixesPool = isGerman ? T40_GERMAN_PREFIXES : T40_SPANISH_PREFIXES;
  const suffixesPool = isGerman ? T40_GERMAN_SUFFIXES : T40_SPANISH_SUFFIXES;
  const defaultTags = isGerman ? T40_GERMAN_TAGS : T40_SPANISH_TAGS;
  const activeTags = (customTags && customTags.trim()) ? customTags.trim() : defaultTags;

  // Filter templates by category
  let primaryPool = templatesPool.filter(
    (t) => category === "all_mixed" || t.category === category
  );
  if (primaryPool.length === 0) primaryPool = templatesPool;

  // Shuffle pool with randomness so every click produces fresh, distinct combinations
  const shuffledPrimary = [...primaryPool].sort(() => Math.random() - 0.5);
  const shuffledAll = [...templatesPool].sort(() => Math.random() - 0.5);

  const results: GeneratedTitle[] = [];
  const seenHooks = new Set<string>();

  let templateIdx = 0;
  let attempt = 0;

  // Main generation loop using category pool
  while (results.length < 50 && attempt < 400) {
    attempt++;
    const tpl = shuffledPrimary[templateIdx % shuffledPrimary.length];
    templateIdx++;

    let baseHook = tpl.pattern(brand, model, customKeyword);
    let baseZh = tpl.patternZh(brand, model, customKeyword);

    // Dynamic permutations: prefixes, suffixes, bracket modifiers
    const styleRoll = Math.random();
    if (styleRoll < 0.35 && !baseHook.startsWith("¡") && !baseHook.startsWith("¿") && !baseHook.startsWith("【")) {
      const [pfx, pfxZh] = prefixesPool[Math.floor(Math.random() * prefixesPool.length)];
      baseHook = `${pfx} ${baseHook}`;
      baseZh = `${pfxZh} ${baseZh}`;
    } else if (styleRoll > 0.65 && baseHook.length < 72 && !baseHook.endsWith("!") && !baseHook.endsWith("?")) {
      const [sfx, sfxZh] = suffixesPool[Math.floor(Math.random() * suffixesPool.length)];
      baseHook = `${baseHook}${sfx}`;
      baseZh = `${baseZh}${sfxZh}`;
    }

    if (customKeyword && customKeyword.trim() && !baseHook.includes(customKeyword)) {
      if (Math.random() > 0.4) {
        baseHook = `[${customKeyword.trim()}] ${baseHook}`;
        baseZh = `【${customKeyword.trim()}】${baseZh}`;
      }
    }

    // Ensure brand and model presence
    if (!baseHook.includes(brand) || !baseHook.includes(model)) {
      baseHook = `${brand} ${model} | ${baseHook}`;
      baseZh = `${brand} ${model}｜${baseZh}`;
    }

    // Uniqueness check
    if (seenHooks.has(baseHook)) continue;
    seenHooks.add(baseHook);

    const fullTitle = `${baseHook} ${activeTags}`;

    results.push({
      id: `t40-algo-${language}-${batchSeed}-${results.length + 1}-${Math.random().toString(36).substring(2, 6)}`,
      productId: "t40" as ProductId,
      title: fullTitle,
      hook: baseHook,
      tags: activeTags,
      angle: tpl.angleLabel,
      angleCategory: tpl.category,
      targetAudience: tpl.targetAudience,
      charCount: fullTitle.length,
      hookCharCount: baseHook.length,
      language,
      translationZh: `${baseZh} ${activeTags}`,
      isFavorite: false,
      createdAt: new Date().toISOString(),
    });
  }

  // Backup pass: if category had very few items, draw from broader templates with category awareness
  if (results.length < 50) {
    let allIdx = 0;
    while (results.length < 50 && allIdx < 200) {
      const tpl = shuffledAll[allIdx % shuffledAll.length];
      allIdx++;

      let baseHook = tpl.pattern(brand, model, customKeyword);
      let baseZh = tpl.patternZh(brand, model, customKeyword);

      const [pfx, pfxZh] = prefixesPool[results.length % prefixesPool.length];
      baseHook = `${pfx} ${baseHook}`;
      baseZh = `${pfxZh} ${baseZh}`;

      if (seenHooks.has(baseHook)) continue;
      seenHooks.add(baseHook);

      const fullTitle = `${baseHook} ${activeTags}`;

      results.push({
        id: `t40-algo-${language}-${batchSeed}-${results.length + 1}-${Math.random().toString(36).substring(2, 6)}`,
        productId: "t40" as ProductId,
        title: fullTitle,
        hook: baseHook,
        tags: activeTags,
        angle: tpl.angleLabel,
        angleCategory: tpl.category,
        targetAudience: tpl.targetAudience,
        charCount: fullTitle.length,
        hookCharCount: baseHook.length,
        language,
        translationZh: `${baseZh} ${activeTags}`,
        isFavorite: false,
        createdAt: new Date().toISOString(),
      });
    }
  }

  return results.slice(0, 50);
}
