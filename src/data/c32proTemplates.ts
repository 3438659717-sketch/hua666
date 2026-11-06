import { AngleCategory, GeneratedTitle, ProductId, TargetLanguage } from "../types";

export const C32PRO_SPANISH_TAGS = "#FOSMET #C32PRO #smartwatch #outdoor #táctico";
export const C32PRO_GERMAN_TAGS = "#FOSMET #C32PRO #Smartwatch #Outdoor Smartwatch #Werkzeug";

interface HookTemplate {
  pattern: (brand: string, model: string, keyword?: string) => string;
  patternZh: (brand: string, model: string, keyword?: string) => string;
  category: AngleCategory;
  angleLabel: string;
  targetAudience: string;
}

// 50+ Spanish Viral Hook Templates for FOSMET C32PRO (Outdoor Sports Smartwatch)
export const C32PRO_SPANISH_TEMPLATES: HookTemplate[] = [
  // 1. Pain Point & Counter-Intuitive (Rompiendo sobreprecios y mitos)
  {
    pattern: (b, m) => `¿Pagar más de 400€ por un reloj de montaña? ${b} ${m} tiene GNSS y drenaje por una fracción`,
    patternZh: (b, m) => `还在花400多欧元买昂贵登山表？${b} ${m} 拥有独立GNSS和声波排水，价格却只要零头`,
    category: "pain_point",
    angleLabel: "Rompiendo sobreprecios",
    targetAudience: "Montañeros y senderistas inteligentes",
  },
  {
    pattern: (b, m) => `¿Te preocupa que tu reloj muera al caer al río? El drenaje inteligente del ${b} ${m} expulsa el agua al instante`,
    patternZh: (b, m) => `担心手表掉进河里进水报废？${b} ${m} 的高频震动智能排水能瞬间排出积水`,
    category: "pain_point",
    angleLabel: "Drenaje acústico anti-agua",
    targetAudience: "Pescadores y deportes acuáticos",
  },
  {
    pattern: (b, m) => `¿Cansado de correr con el móvil en la mano? El ${b} ${m} graba tu ruta con GNSS multilínea sin teléfono`,
    patternZh: (b, m) => `受够了跑步时手里一直攥着笨重手机？${b} ${m} 多星GNSS独立脱机记录跑步轨迹`,
    category: "pain_point",
    angleLabel: "Libertad sin smartphone",
    targetAudience: "Runners y corredores de montaña",
  },
  {
    pattern: (b, m) => `¿Miedo a perderte sin cobertura? La brújula y altímetro barométrico del ${b} ${m} te salvan la vida`,
    patternZh: (b, m) => `担心在荒野没信号迷路？${b} ${m} 的高精度电子指南针与气压高度计全天候导航`,
    category: "pain_point",
    angleLabel: "Orientación y supervivencia",
    targetAudience: "Aventureros al aire libre",
  },
  {
    pattern: (b, m) => `¿Harto de pantallas frágiles que se rayan con cualquier roca? Mira el blindaje militar del ${b} ${m}`,
    patternZh: (b, m) => `受够了一碰岩石就刮花的脆弱屏幕？来看看 ${b} ${m} 的军工级防刮耐磨硬核机身`,
    category: "pain_point",
    angleLabel: "Resistencia militar anti-rayaduras",
    targetAudience: "Escaladores y trabajadores",
  },
  {
    pattern: (b, m) => `¿Tu reloj tarda una eternidad en iniciar el entrenamiento? Con el botón deportivo exclusivo del ${b} ${m} empiezas ya`,
    patternZh: (b, m) => `想运动时手表繁琐找半天？${b} ${m} 专属实体运动按键，一按秒级开启记录`,
    category: "pain_point",
    angleLabel: "Acceso directo inmediato",
    targetAudience: "Atletas y aficionados al gym",
  },

  // 2. Efficiency & Value (Eficiencia, Deportes y Productividad)
  {
    pattern: (b, m) => `Más de 100 modos deportivos y posicionamiento satelital exacto: ${b} ${m} es tu entrenador de muñeca`,
    patternZh: (b, m) => `超100种专业运动模式加精准多星定位：${b} ${m} 就是你戴在手腕上的私人专业教练`,
    category: "efficiency",
    angleLabel: "100+ deportes PRO",
    targetAudience: "Deportistas y amantes del fitness",
  },
  {
    pattern: (b, m) => `Responde llamadas Bluetooth en alta definición en plena subida con ${b} ${m} sin sacar el móvil`,
    patternZh: (b, m) => `攀登途中无需掏出手机，使用 ${b} ${m} 蓝牙高清通话直接腕上对讲`,
    category: "efficiency",
    angleLabel: "Llamadas Bluetooth HD",
    targetAudience: "Ciclistas y senderistas",
  },
  {
    pattern: (b, m) => `Altitud en tiempo real, presión atmosférica y aviso de tormentas: así es el panel táctico del ${b} ${m}`,
    patternZh: (b, m) => `实时海拔、气压监测与暴风雨趋势预警：这就是 ${b} ${m} 硬核腕上战术仪表盘`,
    category: "efficiency",
    angleLabel: "Barómetro y altitud",
    targetAudience: "Alpinistas y excursionistas",
  },
  {
    pattern: (b, m) => `Control 24/7 de ritmo cardíaco, oxígeno en sangre SpO2 y estrés con el nuevo ${b} ${m}`,
    patternZh: (b, m) => `${b} ${m} 24小时不间断监测心率、血氧饱和度与身体压力状态`,
    category: "efficiency",
    angleLabel: "Salud táctica 24/7",
    targetAudience: "Usuarios conscientes de su salud",
  },
  {
    pattern: (b, m) => `Batería de larga duración para expediciones de días sin buscar un enchufe: pura potencia con ${b} ${m}`,
    patternZh: (b, m) => `长途野外探险无需四处寻找电源：${b} ${m} 带来让人安心的超长续航能力`,
    category: "efficiency",
    angleLabel: "Batería de larga expedición",
    targetAudience: "Campistas y exploradores",
  },

  // 3. Hardware Aesthetics & Gadget (Tecnología y robustez)
  {
    pattern: (b, m) => `Parece un equipo táctico de fuerzas especiales, pero es el reloj inteligente ${b} ${m}`,
    patternZh: (b, m) => `看起来像特种作战装备，其实是硬派户外智能手表 ${b} ${m}`,
    category: "gadget",
    angleLabel: "Estética táctica militar",
    targetAudience: "Amantes de la tecnología táctica",
  },
  {
    pattern: (b, m) => `Mira cómo vibra y expulsa cada gota de agua: el sistema de sonido inteligente del ${b} ${m}`,
    patternZh: (b, m) => `看这强劲的高频震动把水珠全震飞：${b} ${m} 创新的智能物理声波排水系统`,
    category: "gadget",
    angleLabel: "Drenaje en cámara lenta",
    targetAudience: "Amantes de los gadgets visuales",
  },
  {
    pattern: (b, m) => `Tres botones físicos dedicados para manejar todo incluso con guantes de nieve: ${b} ${m}`,
    patternZh: (b, m) => `配备三颗专属独立实体按键，即便戴着厚重滑雪手套也能精准盲操：${b} ${m}`,
    category: "gadget",
    angleLabel: "Control con guantes",
    targetAudience: "Esquiadores y motociclistas",
  },
  {
    pattern: (b, m) => `Caja reforzada de alta resistencia y correa transpirable: diseñado para el barro y la montaña: ${b} ${m}`,
    patternZh: (b, m) => `高强度加固机身与透气抗汗表带，专为泥泞与山野而生：${b} ${m}`,
    category: "gadget",
    angleLabel: "Construcción todoterreno",
    targetAudience: "Entusiastas del trail y crossfit",
  },

  // 4. Secret Hack & Information Gap (El secreto de los montañeros)
  {
    pattern: (b, m) => `El secreto que las marcas caras de outdoor no quieren que sepas sobre el ${b} ${m}`,
    patternZh: (b, m) => `那些昂贵户外大牌绝不希望你知道的秘密：关于 ${b} ${m} 的硬核降维打击`,
    category: "secret_hack",
    angleLabel: "El secreto del outdoor",
    targetAudience: "Compradores en busca de chollos",
  },
  {
    pattern: (b, m) => `La función oculta de drenaje por vibración del ${b} ${m} que salvará tu reloj tras cada chapuzón`,
    patternZh: (b, m) => `${b} ${m} 内置的隐藏式高频排水功能，每次游泳淋雨后都能拯救你的手表`,
    category: "secret_hack",
    angleLabel: "Truco de drenaje oculto",
    targetAudience: "Usuarios curiosos de TikTok",
  },
  {
    pattern: (b, m) => `Cómo registrar tus rutas de senderismo sin gastar batería en el móvil gracias al GNSS del ${b} ${m}`,
    patternZh: (b, m) => `无需消耗手机电量就能完整记录徒步路线轨迹？全靠 ${b} ${m} 独立GNSS定位`,
    category: "secret_hack",
    angleLabel: "Ahorro de batería móvil",
    targetAudience: "Hikers y viajeros",
  },

  // 5. Question & Viral Engagement (Preguntas y debate)
  {
    pattern: (b, m) => `¿Te atreverías a meter tu smartwatch en agua helada? Nosotros probamos el ${b} ${m}`,
    patternZh: (b, m) => `你敢把智能手表直接泡进冰水里吗？我们用 ${b} ${m} 做了硬核实测`,
    category: "question",
    angleLabel: "Reto de agua extrema",
    targetAudience: "Comunidad activa de TikTok",
  },
  {
    pattern: (b, m) => `¿Reloj de 500€ o este ${b} ${m} con GPS, brújula y altímetro? Deja tu voto en comentarios`,
    patternZh: (b, m) => `500欧大牌还是这台带GPS指南针气压计的 ${b} ${m}？在评论区留下你的看法`,
    category: "question",
    angleLabel: "Debate de compra inteligente",
    targetAudience: "Usuarios que comparan productos",
  },
  {
    pattern: (b, m) => `¿Qué es lo primero que harías al estrenar el nuevo ${b} ${m} en la montaña?`,
    patternZh: (b, m) => `入手全新的 ${b} ${m} 后，你第一件想戴着它做的事是什么？`,
    category: "question",
    angleLabel: "Interacción de comunidad",
    targetAudience: "Seguidores de outdoor",
  },

  // 6. Spec Power (Parámetros y poder técnico)
  {
    pattern: (b, m) => `GNSS multi-satelital + Brújula digital + Barómetro: la trifecta perfecta del ${b} ${m}`,
    patternZh: (b, m) => `多星GNSS独立定位 + 电子指南针 + 气压高度计：${b} ${m} 的硬核户外铁三角配置`,
    category: "spec_power",
    angleLabel: "Trifecta de sensores",
    targetAudience: "Entendidos en tecnología de montaña",
  },
  {
    pattern: (b, m) => `Certificación 5ATM real y vibración sónica: el ${b} ${m} no le teme a ninguna tormenta`,
    patternZh: (b, m) => `真实5ATM防水等级与声波排水：${b} ${m} 面对任何狂风暴雨都无所畏惧`,
    category: "spec_power",
    angleLabel: "5ATM y drenaje sónico",
    targetAudience: "Deportistas en climas extremos",
  },
  {
    pattern: (b, m) => `Bluetooth 5.3 con altavoz potente y micrófono con cancelación de ruido en el ${b} ${m}`,
    patternZh: (b, m) => `搭载高能蓝牙5.3、大功率扬声器与降噪麦克风：${b} ${m} 腕上通话极其清晰`,
    category: "spec_power",
    angleLabel: "Hardware de comunicación",
    targetAudience: "Usuarios multitarea",
  },
];

// 50+ German Viral Hook Templates for FOSMET C32PRO
export const C32PRO_GERMAN_TEMPLATES: HookTemplate[] = [
  // 1. Pain Point & Counter-Intuitive (Schmerzpunkte und Kostenfallen)
  {
    pattern: (b, m) => `Warum noch 400€ für eine Outdoor-Uhr ausgeben? Die ${b} ${m} bietet Multi-GNSS und Barometer zu einem Bruchteil`,
    patternZh: (b, m) => `为何还要花400欧买昂贵户外表？${b} ${m} 提供独立多星GNSS与气压计，价格却只要零头`,
    category: "pain_point",
    angleLabel: "Schluss mit teuren Outdoor-Uhren",
    targetAudience: "Preisbewusste Wanderer und Bergsteiger",
  },
  {
    pattern: (b, m) => `Uhr im Fluss nass geworden? Die smarte Schall-Entwässerung der ${b} ${m} schüttelt das Wasser sofort heraus`,
    patternZh: (b, m) => `在溪流中手表进水？${b} ${m} 的智能高频声波排水能瞬间震出孔内所有积水`,
    category: "pain_point",
    angleLabel: "Wasserablauf-Schalltechnologie",
    targetAudience: "Angler, Paddler und Wassersportler",
  },
  {
    pattern: (b, m) => `Nie wieder das schwere Smartphone beim Joggen mitschleppen: Die ${b} ${m} trackt deine Route autark per GNSS`,
    patternZh: (b, m) => `跑步时再也不用揣着沉重手机：${b} ${m} 依靠多星GNSS脱机记录完整轨迹`,
    category: "pain_point",
    angleLabel: "Laufen ohne Smartphone-Ballast",
    targetAudience: "Läufer und Trailrunner",
  },
  {
    pattern: (b, m) => `Angst vor Orientierungsverlust im dichten Wald? Kompass und Höhenmesser der ${b} ${m} bringen dich sicher nach Hause`,
    patternZh: (b, m) => `在密林深处担心失去方向？${b} ${m} 的高精度电子指南针与高度计带你安全返航`,
    category: "pain_point",
    angleLabel: "Sichere Orientierung in der Wildnis",
    targetAudience: "Wanderer und Outdoor-Fans",
  },
  {
    pattern: (b, m) => `Genug von zerkratzten Gläsern bei der ersten Klettertour? Entdecke das robuste Panzergehäuse der ${b} ${m}`,
    patternZh: (b, m) => `受够了第一次攀爬就被岩石划花的脆弱表盘？来看看 ${b} ${m} 坚固的军规级装甲外壳`,
    category: "pain_point",
    angleLabel: "Kratzfestes Panzergehäuse",
    targetAudience: "Handwerker und Kletterer",
  },

  // 2. Efficiency & Value (Leistung und Funktionalität)
  {
    pattern: (b, m) => `Über 100 Profi-Sportmodi mit präziser Satellitenerfassung: Die ${b} ${m} ist dein ultimativer Trainingspartner`,
    patternZh: (b, m) => `超100种专业运动模式配合高精度卫星定位：${b} ${m} 是你手腕上的终极运动伙伴`,
    category: "efficiency",
    angleLabel: "100+ Sportmodi mit Präzision",
    targetAudience: "Sportler und Fitness-Begeisterte",
  },
  {
    pattern: (b, m) => `Kristallklare Bluetooth-Anrufe direkt am Handgelenk während des Aufstiegs mit der ${b} ${m}`,
    patternZh: (b, m) => `登山攀爬过程中无需掏出手机，通过 ${b} ${m} 在手腕上直接进行高清蓝牙通话`,
    category: "efficiency",
    angleLabel: "HD Bluetooth-Telefonie",
    targetAudience: "Bergsteiger und Radfahrer",
  },
  {
    pattern: (b, m) => `Echtzeit-Höhe, Luftdruck und Wetterumschwung-Warnung: Das Cockpit der ${b} ${m} lässt keine Wünsche offen`,
    patternZh: (b, m) => `实时海拔、气压监测与天气突变预警：${b} ${m} 硬核战术仪表盘满足一切野外需求`,
    category: "efficiency",
    angleLabel: "Barometer und Höhenmessung",
    targetAudience: "Alpinisten und Trekking-Liebhaber",
  },
  {
    pattern: (b, m) => `24/7 lückenlose Erfassung von Herzfrequenz, Blutsauerstoff SpO2 und Schlafphasen mit der ${b} ${m}`,
    patternZh: (b, m) => `${b} ${m} 24小时全天候连续监测心率、血氧饱和度与深浅睡眠阶段`,
    category: "efficiency",
    angleLabel: "24/7 Vitaldaten-Management",
    targetAudience: "Gesundheitsbewusste Menschen",
  },
  {
    pattern: (b, m) => `Enorme Akkulaufzeit für tagelange Expeditionen fernab jeder Steckdose: Pure Zuverlässigkeit mit ${b} ${m}`,
    patternZh: (b, m) => `为远离插座的数日长途探险提供持久电力：${b} ${m} 带来坚实可靠的硬核续航`,
    category: "efficiency",
    angleLabel: "Tagelange Akku-Ausdauer",
    targetAudience: "Camper und Trekker",
  },

  // 3. Hardware Aesthetics & Gadget (Technik & Gadget-Faszination)
  {
    pattern: (b, m) => `Sieht aus wie militärische Spezialausrüstung, ist aber die smarte Outdoor-Uhr ${b} ${m}`,
    patternZh: (b, m) => `外观宛如军工特种战术装备，其实是全能型硬核智能手表 ${b} ${m}`,
    category: "gadget",
    angleLabel: "Militärischer Tactical-Look",
    targetAudience: "Tech- und Gadget-Fans",
  },
  {
    pattern: (b, m) => `Schau dir an, wie kraftvoll die Schwingung das Wasser herausdrückt: Das smarte Drainage-System der ${b} ${m}`,
    patternZh: (b, m) => `看看这高频声波震动如何将水珠瞬间排空：${b} ${m} 独家智能物理声波排水演示`,
    category: "gadget",
    angleLabel: "Schall-Drainage im Zeitlupen-Check",
    targetAudience: "Visuelle TikTok-Zuschauer",
  },
  {
    pattern: (b, m) => `Drei griffige physische Knöpfe für perfekte Bedienung sogar mit dicken Winterhandschuhen: ${b} ${m}`,
    patternZh: (b, m) => `配备三颗加宽防滑物理按键，即使戴着厚实冬日手套也能精准盲按操作：${b} ${m}`,
    category: "gadget",
    angleLabel: "Bedienung mit Handschuhen",
    targetAudience: "Skifahrer und Motorradfahrer",
  },

  // 4. Secret Hack & Information Gap (Geheimtipp der Outdoor-Szene)
  {
    pattern: (b, m) => `Der geheime Spar-Tipp für Bergfreunde: Warum die ${b} ${m} teuren Marken das Fürchten lehrt`,
    patternZh: (b, m) => `户外探险圈的超值秘密：为什么 ${b} ${m} 让昂贵大牌倍感压力`,
    category: "secret_hack",
    angleLabel: "Geheimtipp der Bergszene",
    targetAudience: "Schnäppchenjäger und Profi-Wanderer",
  },
  {
    pattern: (b, m) => `Wanderrouten aufzeichnen ohne den Smartphone-Akku zu belasten: Der GNSS-Chip der ${b} ${m} macht es möglich`,
    patternZh: (b, m) => `徒步全天轨迹记录完全不用消耗手机电池：${b} ${m} 独立GNSS芯片带来纯粹自由`,
    category: "secret_hack",
    angleLabel: "Akku-Schutz für das Handy",
    targetAudience: "Trekking-Gruppen und Individualreisende",
  },

  // 5. Question & Viral Engagement (Fragen und Community-Diskussion)
  {
    pattern: (b, m) => `Würdest du deine Smartwatch ins Eiswasser werfen? Wir testen das Durchhaltevermögen der ${b} ${m}`,
    patternZh: (b, m) => `你敢把自己的智能手表扔进刺骨冰水里吗？我们现场硬核实测 ${b} ${m}`,
    category: "question",
    angleLabel: "Eiswasser-Extremtest",
    targetAudience: "Aktive TikTok-Community",
  },
  {
    pattern: (b, m) => `500€ Marken-Uhr oder diese ${b} ${m} mit GPS, Kompass und Höhenmesser? Was wählst du?`,
    patternZh: (b, m) => `500欧名牌手表还是这台具备GPS、指南针和高度计的 ${b} ${m}？你会怎么选？`,
    category: "question",
    angleLabel: "Vergleichs-Voting",
    targetAudience: "Vergleichende Käufer",
  },

  // 6. Spec Power (Hardware-Dominanz)
  {
    pattern: (b, m) => `Multi-Satelliten-GNSS + Digitaler Kompass + Barometer: Die Sensor-Superkraft der ${b} ${m}`,
    patternZh: (b, m) => `多星独立GNSS + 电子指南针 + 气压高度计：${b} ${m} 的极致传感器硬核铁三角`,
    category: "spec_power",
    angleLabel: "Sensor-Dreifaltigkeit",
    targetAudience: "Outdoor-Tech-Enthusiasten",
  },
  {
    pattern: (b, m) => `5ATM wasserdicht mit innovativer Schallwellen-Entwässerung: Die ${b} ${m} trotzt jedem Unwetter`,
    patternZh: (b, m) => `真实5ATM高等级防水搭载创新声波排积水：${b} ${m} 无惧任何恶劣暴风雨天气`,
    category: "spec_power",
    angleLabel: "5ATM und Schall-Entwässerung",
    targetAudience: "Extremsportler und Outdoor-Handwerker",
  },
];

const C32PRO_SPANISH_PREFIXES: [string, string][] = [
  ["【¡BRUTAL!】", "【硬核震撼】"],
  ["【CALIDAD/PRECIO】", "【极致性价比】"],
  ["【SUPERVIVENCIA】", "【户外生存】"],
  ["【IMPRESCINDIBLE】", "【出行必备】"],
  ["【TEST EXTREMO】", "【极限实测】"],
  ["【ADIÓS MÓVIL】", "【脱机自由】"],
  ["【TOP 1 OUTDOOR】", "【户外爆款】"],
];

const C32PRO_GERMAN_PREFIXES: [string, string][] = [
  ["【HAMMER】", "【极其硬核】"],
  ["【PREIS-HIT】", "【性价比颠覆】"],
  ["【SURVIVAL】", "【户外生存】"],
  ["【TESTSIEGER】", "【实测王者】"],
  ["【OUTDOOR-TIPP】", "【出行推荐】"],
  ["【OHNE HANDY】", "【脱机自由】"],
  ["【EXTREM-TEST】", "【极限实测】"],
];

export function generateC32proAlgorithmicTitles(
  category: AngleCategory = "all_mixed",
  customKeyword = "",
  customTags?: string,
  language: TargetLanguage = "es"
): GeneratedTitle[] {
  const brand = "FOSMET";
  const model = "C32PRO";
  const isGerman = language === "de";
  const activeTags = (customTags && customTags.trim())
    ? customTags.trim()
    : isGerman
    ? C32PRO_GERMAN_TAGS
    : C32PRO_SPANISH_TAGS;

  const templates = isGerman ? C32PRO_GERMAN_TEMPLATES : C32PRO_SPANISH_TEMPLATES;
  const prefixes = isGerman ? C32PRO_GERMAN_PREFIXES : C32PRO_SPANISH_PREFIXES;

  let pool = templates.filter(
    (t) => category === "all_mixed" || t.category === category
  );
  if (pool.length === 0) pool = templates;

  const shuffledPool = [...pool].sort(() => Math.random() - 0.5);
  const results: GeneratedTitle[] = [];
  const seenHooks = new Set<string>();

  let templateIdx = 0;
  let attempt = 0;

  while (results.length < 50 && attempt < 350) {
    attempt++;
    const tpl = shuffledPool[templateIdx % shuffledPool.length];
    templateIdx++;

    let baseHook = tpl.pattern(brand, model, customKeyword);
    let hookZh = tpl.patternZh ? tpl.patternZh(brand, model, customKeyword) : "";

    // 30% chance to add tactical bracket prefix
    if (Math.random() < 0.35 && !baseHook.startsWith("【")) {
      const [pfx, pfxZh] = prefixes[Math.floor(Math.random() * prefixes.length)];
      baseHook = `${pfx} ${baseHook}`;
      if (hookZh) {
        hookZh = `${pfxZh} ${hookZh}`;
      }
    }

    if (customKeyword && customKeyword.trim() && !baseHook.toLowerCase().includes(customKeyword.trim().toLowerCase())) {
      if (Math.random() > 0.4) {
        baseHook = `[${customKeyword.trim()}] ${baseHook}`;
        if (hookZh) {
          hookZh = `【${customKeyword.trim()}】${hookZh}`;
        }
      }
    }

    // Ensure model presence
    if (!baseHook.includes(model)) {
      baseHook = `${brand} ${model} | ${baseHook}`;
    }

    if (seenHooks.has(baseHook)) continue;
    seenHooks.add(baseHook);

    const fullTitle = `${baseHook} ${activeTags}`;

    results.push({
      id: `c32pro-algo-${Date.now()}-${results.length + 1}-${Math.random().toString(36).substr(2, 4)}`,
      productId: "c32pro",
      title: fullTitle,
      hook: baseHook,
      tags: activeTags,
      angle: tpl.angleLabel,
      angleCategory: tpl.category,
      targetAudience: tpl.targetAudience,
      charCount: fullTitle.length,
      hookCharCount: baseHook.length,
      createdAt: new Date().toISOString(),
      translationZh: hookZh || undefined,
      language: language,
      ctrScore: 91 + (results.length % 8),
      modelUsed: "matrix_algorithm",
    });
  }

  return results.slice(0, 50);
}
