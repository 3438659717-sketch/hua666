import { CompetitorRadarData, ProductId, TargetLanguage } from "../types";

export const PRODUCT_RADAR_DATA: Record<ProductId, Record<TargetLanguage, CompetitorRadarData>> = {
  rec10: {
    ja: {
      productId: "rec10",
      language: "ja",
      productName: "FOSMET REC10 AI録音カード",
      updatedAt: "2026-10-22T08:30:00Z",
      hotwords: [
        {
          word: "議事録自動化",
          category: "pain_point",
          growthRate: "+418%",
          heatScore: 98,
          sampleHook: "まだ手打ちで議事録作ってるの？この薄型カードで全自動化できた",
          suggestedPrompt: "議事録自動化のタイパを前面に出し、新社会人・忙しいビジネスマンの痛点解消フック",
        },
        {
          word: "ChatGPT文字起こし",
          category: "ai_power",
          growthRate: "+325%",
          heatScore: 95,
          sampleHook: "ChatGPT連携で1時間会議が3秒で要約！FOSMET REC10が神すぎる",
          suggestedPrompt: "ChatGPT連携とAI要約の驚異的なスピード感を強調",
        },
        {
          word: "薄型名刺サイズ",
          category: "spec",
          growthRate: "+210%",
          heatScore: 89,
          sampleHook: "厚さわずか数ミリの名刺サイズ！スマホの裏にピタッと貼れる録音カード",
          suggestedPrompt: "MagSafe/スマホ裏に貼れるミニマルな薄型デザインをアピール",
        },
        {
          word: "パワハラ証拠対策",
          category: "viral_buzz",
          growthRate: "+512%",
          heatScore: 99,
          sampleHook: "バレずに守る！ポケットの中でワンタッチ録音できる護身用ギア",
          suggestedPrompt: "静音・無発光でのワンタッチ即時録音、プライバシー保護の文脈",
        },
        {
          word: "多言語同時通訳",
          category: "scene",
          growthRate: "+180%",
          heatScore: 84,
          sampleHook: "海外出張・オンライン英会話で大活躍！耳元で同時翻訳してくれる名刺",
          suggestedPrompt: "海外ビジネスや展示会での多言語翻訳シナリオ",
        },
      ],
      hashtags: [
        { tag: "#FOSMET", postsCount: "4.8M", growth: "+31.2%", relevance: 100, isCore: true },
        { tag: "#REC10", postsCount: "1.2M", growth: "+58.4%", relevance: 100, isCore: true },
        { tag: "#AIレコーダー", postsCount: "8.6M", growth: "+44.1%", relevance: 98, isCore: true },
        { tag: "#ChatGPT", postsCount: "89.2M", growth: "+12.0%", relevance: 92, isCore: true },
        { tag: "#プロモーションの仕事", postsCount: "3.4M", growth: "+19.5%", relevance: 88, isCore: true },
        { tag: "#タイパ向上", postsCount: "15.3M", growth: "+62.0%", relevance: 94, isCore: false },
        { tag: "#社会人の勉強垢", postsCount: "22.1M", growth: "+15.8%", relevance: 86, isCore: false },
        { tag: "#便利グッズ紹介", postsCount: "48.9M", growth: "+28.3%", relevance: 90, isCore: false },
      ],
      topCompetitorAngles: [
        {
          competitor: "Plaud Note",
          hookPattern: "高価格（2万円超）vs コスパの比較煽り",
          viewBenchmark: "820K+",
          ourCounterHook: "2万円のAI録音カード買う前に見て！FOSMET REC10なら同等の高精度AI要約で圧倒的コスパ",
        },
        {
          competitor: "ボイスレコーダー大手",
          hookPattern: "伝統的な棒状レコーダーのダサさ・重さを指摘",
          viewBenchmark: "650K+",
          ourCounterHook: "まだあの黒い棒レコーダー持ち歩いてる？時代はスマホ裏に貼る超薄型AIカード一択",
        },
      ],
    },
    es: {
      productId: "rec10",
      language: "es",
      productName: "FOSMET REC10 Tarjeta Grabadora IA",
      updatedAt: "2026-10-22T08:30:00Z",
      hotwords: [
        {
          word: "transcripción automática",
          category: "ai_power",
          growthRate: "+380%",
          heatScore: 97,
          sampleHook: "¿Sigues tomando apuntes a mano? Esta tarjeta con IA transcribe reuniones en segundos",
          suggestedPrompt: "Ahorro de horas en notas de reuniones y clases universitarias",
        },
        {
          word: "resumen con ChatGPT",
          category: "efficiency",
          growthRate: "+290%",
          heatScore: 94,
          sampleHook: "Graba una llamada de 2 horas y ChatGPT te da el resumen en 5 puntos clave",
          suggestedPrompt: "Integración de resúmenes estructurados automáticos",
        },
        {
          word: "tamaño tarjeta ultradelgada",
          category: "spec",
          growthRate: "+210%",
          heatScore: 88,
          sampleHook: "Pesa casi nada y cabe en cualquier cartera o pegada detrás del móvil",
          suggestedPrompt: "Portabilidad extrema y diseño minimalista para profesionales",
        },
      ],
      hashtags: [
        { tag: "#FOSMET", postsCount: "3.2M", growth: "+26.1%", relevance: 100, isCore: true },
        { tag: "#REC10", postsCount: "820K", growth: "+45.0%", relevance: 100, isCore: true },
        { tag: "#grabadorainteligente", postsCount: "2.1M", growth: "+38.4%", relevance: 96, isCore: true },
        { tag: "#estudiantes", postsCount: "34.5M", growth: "+14.2%", relevance: 85, isCore: false },
        { tag: "#gadgetutil", postsCount: "12.8M", growth: "+29.7%", relevance: 91, isCore: false },
      ],
      topCompetitorAngles: [
        {
          competitor: "Grabadoras Tradicionales",
          hookPattern: "El dolor de perder detalles cruciales en llamadas con clientes",
          viewBenchmark: "450K+",
          ourCounterHook: "El hack secreto de los abogados y consultores para no perder ni una palabra",
        },
      ],
    },
    de: {
      productId: "rec10",
      language: "de",
      productName: "FOSMET REC10 KI-Aufnahmekarte",
      updatedAt: "2026-10-22T08:30:00Z",
      hotwords: [
        {
          word: "Meeting Protokoll KI",
          category: "efficiency",
          growthRate: "+340%",
          heatScore: 96,
          sampleHook: "Nie wieder Meeting-Protokolle tippen! Diese ultradünne Karte erledigt alles mit KI",
          suggestedPrompt: "Fokus auf Zeiteinsparung und deutsche Präzision im Büroalltag",
        },
        {
          word: "Kreditkartenformat",
          category: "spec",
          growthRate: "+195%",
          heatScore: 89,
          sampleHook: "Passt unauffällig hinter jedes Smartphone oder ins Portemonnaie",
          suggestedPrompt: "Ultraleichtes und unauffälliges Kartendesign",
        },
      ],
      hashtags: [
        { tag: "#FOSMET", postsCount: "2.1M", growth: "+18.9%", relevance: 100, isCore: true },
        { tag: "#REC10", postsCount: "540K", growth: "+39.2%", relevance: 100, isCore: true },
        { tag: "#KIRekorder", postsCount: "1.4M", growth: "+51.0%", relevance: 95, isCore: true },
        { tag: "#Produktivität", postsCount: "18.4M", growth: "+21.5%", relevance: 90, isCore: false },
      ],
      topCompetitorAngles: [
        {
          competitor: "Klassisches Diktiergerät",
          hookPattern: "Veraltete Hardware vs. moderne KI-Integration",
          viewBenchmark: "380K+",
          ourCounterHook: "Warum Geschäftsführer 2026 keine alten Diktiergeräte mehr anfassen",
        },
      ],
    },
  },

  // E09B: SONY 8MP Half-rim AI smart glasses
  e09b: {
    ja: {
      productId: "e09b",
      language: "ja",
      productName: "FOSMET E09B 半枠AI識物翻訳スマートグラス",
      updatedAt: "2026-10-22T08:30:00Z",
      hotwords: [
        {
          word: "見たまま目線撮影",
          category: "scene",
          growthRate: "+490%",
          heatScore: 99,
          sampleHook: "スマホ構えるのやめた！目線そのままSONY製カメラで神POV動画が撮れる",
          suggestedPrompt: "SONY IMX219 800万画素による両手フリーのPOV動画撮影の爽快感",
        },
        {
          word: "リアルタイム多言語通訳",
          category: "ai_power",
          growthRate: "+388%",
          heatScore: 96,
          sampleHook: "海外旅行で外国人とスラスラ会話！耳元で同時通訳してくれる知性メガネ",
          suggestedPrompt: "海外旅行や外国人観光客対応でのリアルタイム双方向通訳",
        },
        {
          word: "AI看図識物",
          category: "ai_power",
          growthRate: "+310%",
          heatScore: 93,
          sampleHook: "目の前の植物もアートもAIが即解説！ワンタップで始まる未来のスマート生活",
          suggestedPrompt: "物体認識・観光スポット解説・看板翻訳のAI機能",
        },
        {
          word: "知的な半枠45g",
          category: "spec",
          growthRate: "+260%",
          heatScore: 91,
          sampleHook: "ゴツい黒縁はもう古い！45gの洗練された知性派ハーフリムでコーデに馴染む",
          suggestedPrompt: "45g超軽量、半枠（ハーフリム）デザインの上品さと抜け感",
        },
        {
          word: "手ぶらVlogギア",
          category: "viral_buzz",
          growthRate: "+430%",
          heatScore: 97,
          sampleHook: "サイクリングも料理も子育ても！両手フリーで記録できるチート級メガネ",
          suggestedPrompt: "手ぶらで日常の決定的瞬間を記録するライフハック",
        },
      ],
      hashtags: [
        { tag: "#FOSMET", postsCount: "4.8M", growth: "+31.2%", relevance: 100, isCore: true },
        { tag: "#E09", postsCount: "2.1M", growth: "+49.3%", relevance: 100, isCore: true },
        { tag: "#スマートグラス", postsCount: "14.2M", growth: "+68.5%", relevance: 100, isCore: true },
        { tag: "#服装", postsCount: "38.7M", growth: "+12.1%", relevance: 92, isCore: true },
        { tag: "#デイリーレコード", postsCount: "9.5M", growth: "+24.8%", relevance: 90, isCore: true },
        { tag: "#POV撮影", postsCount: "31.4M", growth: "+55.2%", relevance: 96, isCore: false },
        { tag: "#旅行必需品", postsCount: "19.8M", growth: "+34.1%", relevance: 89, isCore: false },
      ],
      topCompetitorAngles: [
        {
          competitor: "Ray-Ban Meta",
          hookPattern: "高価格（5万円超）＆重い全黒枠 vs 軽快な半枠と価格優位性",
          viewBenchmark: "1.2M+",
          ourCounterHook: "5万円のRay-Ban Meta高すぎない？45gの半枠デザイン＆SONYカメラのFOSMET E09Bが賢い選択",
        },
        {
          competitor: "DJI Pocket 3",
          hookPattern: "手持ちカメラの手間 vs メガネ一体型手ぶら撮影",
          viewBenchmark: "950K+",
          ourCounterHook: "手持ちカメラで腕疲れてない？目線そのままで録画できるスマートグラスが異次元にラク",
        },
      ],
    },
    es: {
      productId: "e09b",
      language: "es",
      productName: "FOSMET E09B Gafas Inteligentes con Cámara",
      updatedAt: "2026-10-22T08:30:00Z",
      hotwords: [
        {
          word: "grabación POV en primera persona",
          category: "scene",
          growthRate: "+410%",
          heatScore: 97,
          sampleHook: "¿Quieres grabar tus viajes tal como los ves? Estas gafas con cámara SONY de 8MP son pura magia",
          suggestedPrompt: "Cámara integrada en gafas ligeras para grabar ciclismo, viajes y contenido TikTok",
        },
        {
          word: "traducción en tiempo real",
          category: "ai_power",
          growthRate: "+365%",
          heatScore: 95,
          sampleHook: "Habla con cualquier persona en el extranjero con traducción instantánea en el oído",
          suggestedPrompt: "Traductor multilingüe en gafas de diseño moderno",
        },
      ],
      hashtags: [
        { tag: "#FOSMET", postsCount: "3.2M", growth: "+26.1%", relevance: 100, isCore: true },
        { tag: "#E09B", postsCount: "640K", growth: "+72.0%", relevance: 100, isCore: true },
        { tag: "#gafasinteligentes", postsCount: "8.9M", growth: "+61.3%", relevance: 98, isCore: true },
        { tag: "#gadgetstech", postsCount: "24.5M", growth: "+18.9%", relevance: 88, isCore: false },
      ],
      topCompetitorAngles: [
        {
          competitor: "Ray-Ban Meta",
          hookPattern: "Comparativa directa de peso y precio",
          viewBenchmark: "780K+",
          ourCounterHook: "La alternativa a las Ray-Ban Meta que no cuesta un ojo de la cara y pesa solo 45g",
        },
      ],
    },
    de: {
      productId: "e09b",
      language: "de",
      productName: "FOSMET E09B Halbrand KI Smartbrille",
      updatedAt: "2026-10-22T08:30:00Z",
      hotwords: [
        {
          word: "Ego-Perspektive POV Kamera",
          category: "scene",
          growthRate: "+390%",
          heatScore: 96,
          sampleHook: "Freihändig filmen genau aus deiner Augenperspektive! 8MP SONY Sensor in nur 45g Brille",
          suggestedPrompt: "Freihändige Videoaufnahmen beim Sport, Reisen und Handwerken",
        },
        {
          word: "Echtzeit KI-Übersetzung",
          category: "ai_power",
          growthRate: "+320%",
          heatScore: 93,
          sampleHook: "Live-Dolmetscher direkt am Ohr: Perfekt für Business und Reisen",
          suggestedPrompt: "Simultanübersetzung in Echtzeit ohne Smartphone in der Hand",
        },
      ],
      hashtags: [
        { tag: "#FOSMET", postsCount: "2.1M", growth: "+18.9%", relevance: 100, isCore: true },
        { tag: "#E09B", postsCount: "420K", growth: "+66.0%", relevance: 100, isCore: true },
        { tag: "#Smartbrille", postsCount: "6.2M", growth: "+49.8%", relevance: 98, isCore: true },
        { tag: "#TechGadgets", postsCount: "31.0M", growth: "+15.2%", relevance: 88, isCore: false },
      ],
      topCompetitorAngles: [
        {
          competitor: "Meta Glasses",
          hookPattern: "Leichtigkeit (45g) vs klobige Vollrandbrillen",
          viewBenchmark: "540K+",
          ourCounterHook: "Vergiss schwere smarte Brillen: FOSMET E09B wiegt fast nichts und sieht elegant aus",
        },
      ],
    },
  },

  // KT80: 800mAh flashlight outdoor rugged smartwatch
  kt80: {
    ja: {
      productId: "kt80",
      language: "ja",
      productName: "FOSMET KT80 800mAh超大電池スマートウォッチ",
      updatedAt: "2026-10-22T08:30:00Z",
      hotwords: [
        {
          word: "800mAh超大容量バッテリー",
          category: "spec",
          growthRate: "+375%",
          heatScore: 97,
          sampleHook: "充電器を家に置いて旅に出よう！1ヶ月充電不要の800mAh化け物ウォッチ",
          suggestedPrompt: "数週間充電不要の安心感と圧倒的なバッテリー持ち",
        },
        {
          word: "LED爆光懐中電灯",
          category: "gadget",
          growthRate: "+440%",
          heatScore: 98,
          sampleHook: "時計に本物のLEDライト内蔵！？夜釣り・キャンプ・停電で大活躍する神機能",
          suggestedPrompt: "側面の独立LED懐中電灯による実用性・防災・アウトドア価値",
        },
        {
          word: "5ATM防水・頑丈金属ボディ",
          category: "spec",
          growthRate: "+210%",
          heatScore: 89,
          sampleHook: "50m潜水OK！傷すらつかない頑丈メタルボディで現場もアウトドアも安心",
          suggestedPrompt: "耐衝撃、防水、過酷な現場やスポーツへの対応力",
        },
      ],
      hashtags: [
        { tag: "#FOSMET", postsCount: "4.8M", growth: "+31.2%", relevance: 100, isCore: true },
        { tag: "#KT80", postsCount: "1.9M", growth: "+47.0%", relevance: 100, isCore: true },
        { tag: "#スマートウォッチ", postsCount: "29.4M", growth: "+21.0%", relevance: 95, isCore: true },
        { tag: "#アウトドア", postsCount: "18.3M", growth: "+26.4%", relevance: 92, isCore: true },
        { tag: "#防災グッズ", postsCount: "7.9M", growth: "+58.1%", relevance: 96, isCore: false },
      ],
      topCompetitorAngles: [
        {
          competitor: "Garmin Fenix",
          hookPattern: "10万円超のアウトドア時計 vs 圧倒的コスパ",
          viewBenchmark: "890K+",
          ourCounterHook: "10万円のガーミン買う前に見て！800mAhと爆光ライト付きでこの価格はバグ",
        },
      ],
    },
    es: {
      productId: "kt80",
      language: "es",
      productName: "FOSMET KT80 Reloj Inteligente Outdoor",
      updatedAt: "2026-10-22T08:30:00Z",
      hotwords: [
        {
          word: "batería bestial 800mAh",
          category: "spec",
          growthRate: "+480%",
          heatScore: 99,
          sampleHook: "Olvídate de cargarlo a diario: ¡hasta 30 días con una sola carga gracias a sus 800 mAh!",
          suggestedPrompt: "Autonomía de semanas completas sin pisar el enchufe",
        },
        {
          word: "linterna LED potente integrada",
          category: "gadget",
          growthRate: "+520%",
          heatScore: 100,
          sampleHook: "¿Un reloj con linterna de verdad? Pulsa un botón y alumbra todo en la oscuridad",
          suggestedPrompt: "Linterna LED lateral real con un solo toque para camping y emergencias",
        },
        {
          word: "resistencia 5ATM e indestructible",
          category: "spec",
          growthRate: "+290%",
          heatScore: 91,
          sampleHook: "Cuerpo metálico blindado y sumergible a 50 metros para trabajos duros y montaña",
          suggestedPrompt: "Durabilidad militar y resistencia total al agua",
        },
      ],
      hashtags: [
        { tag: "#FOSMET", postsCount: "3.2M", growth: "+26.1%", relevance: 100, isCore: true },
        { tag: "#KT80", postsCount: "1.4M", growth: "+54.0%", relevance: 100, isCore: true },
        { tag: "#relojinteligente", postsCount: "42.0M", growth: "+19.0%", relevance: 100, isCore: true },
        { tag: "#Relojesparaexteriores", postsCount: "3.8M", growth: "+38.4%", relevance: 100, isCore: true },
        { tag: "#herramienta", postsCount: "8.5M", growth: "+24.2%", relevance: 100, isCore: true },
        { tag: "#supervivencia", postsCount: "14.1M", growth: "+45.0%", relevance: 92, isCore: false },
      ],
      topCompetitorAngles: [
        {
          competitor: "Apple Watch Ultra / Garmin",
          hookPattern: "Batería de 1 día ridícula vs 800 mAh que dura semanas",
          viewBenchmark: "1.5M+",
          ourCounterHook: "Cansado de que tu smartwatch muera en 24 horas? El FOSMET KT80 tiene 800mAh y linterna LED real",
        },
      ],
    },
    de: {
      productId: "kt80",
      language: "de",
      productName: "FOSMET KT80 Outdoor Smartwatch 800mAh",
      updatedAt: "2026-10-22T08:30:00Z",
      hotwords: [
        {
          word: "800mAh Monster-Akku",
          category: "spec",
          growthRate: "+460%",
          heatScore: 99,
          sampleHook: "Kein tägliches Laden mehr! Wochenlange Akkulaufzeit mit gigantischen 800 mAh",
          suggestedPrompt: "Vergleich mit gängigen Smartwatches, die täglich an die Steckdose müssen",
        },
        {
          word: "integrierte LED-Taschenlampe",
          category: "gadget",
          growthRate: "+510%",
          heatScore: 98,
          sampleHook: "Echte LED-Powerlampe per Knopfdruck am Handgelenk: Perfekt für Handwerk & Nacht",
          suggestedPrompt: "Extrem helle seitliche LED-Lampe für Outdoor, Baustelle und Camping",
        },
        {
          word: "5ATM wasserdicht & Metallgehäuse",
          category: "spec",
          growthRate: "+280%",
          heatScore: 92,
          sampleHook: "Massives Panzer-Metallgehäuse und 50m Tauchtiefe: Unzerstörbar im Einsatz",
          suggestedPrompt: "Robuste Verarbeitung für Handwerker, Sportler und Outdoor-Enthusiasten",
        },
      ],
      hashtags: [
        { tag: "#FOSMET", postsCount: "2.1M", growth: "+18.9%", relevance: 100, isCore: true },
        { tag: "#KT80", postsCount: "980K", growth: "+49.0%", relevance: 100, isCore: true },
        { tag: "#Smartwatch", postsCount: "26.5M", growth: "+14.0%", relevance: 100, isCore: true },
        { tag: "#OutdoorSmartwatch", postsCount: "4.1M", growth: "+36.2%", relevance: 100, isCore: true },
        { tag: "#Werkzeug", postsCount: "11.2M", growth: "+22.5%", relevance: 100, isCore: true },
        { tag: "#Handwerker", postsCount: "16.8M", growth: "+31.0%", relevance: 93, isCore: false },
      ],
      topCompetitorAngles: [
        {
          competitor: "Garmin Instinct 2",
          hookPattern: "Hoher Preis vs Preis-Leistungs-Knaller mit Taschenlampe",
          viewBenchmark: "920K+",
          ourCounterHook: "Warum Handwerker und Outdoor-Fans jetzt auf die FOSMET KT80 mit 800 mAh schwören",
        },
      ],
    },
  },

  // V18PRO: DyMona Cordless Vacuum 48kPa Green Light
  v18pro: {
    es: {
      productId: "v18pro",
      language: "es",
      productName: "DyMona V18 PRO Aspiradora sin Cable",
      updatedAt: "2026-10-22T08:30:00Z",
      hotwords: [
        {
          word: "luz verde detectora de polvo",
          category: "gadget",
          growthRate: "+580%",
          heatScore: 100,
          sampleHook: "¿Creías que tu suelo estaba limpio? Esta luz verde revela toda la suciedad invisible",
          suggestedPrompt: "Efecto óptico de la luz verde que hace visible hasta el polvo microscópico",
        },
        {
          word: "tubo plegable sin agacharse",
          category: "pain_point",
          growthRate: "+420%",
          heatScore: 97,
          sampleHook: "Limpia debajo del sofá y la cama sin doblar la espalda gracias a su tubo plegable",
          suggestedPrompt: "Alivio para el dolor lumbar al limpiar muebles bajos",
        },
        {
          word: "potencia de succión 48kPa",
          category: "spec",
          growthRate: "+340%",
          heatScore: 95,
          sampleHook: "48.000 Pa de pura potencia para pelos de mascotas, alfombras y polvo rebelde",
          suggestedPrompt: "Potencia brutal para dueños de mascotas y familias con alfombras",
        },
      ],
      hashtags: [
        { tag: "#DyMona", postsCount: "2.8M", growth: "+64.0%", relevance: 100, isCore: true },
        { tag: "#V18PRO", postsCount: "1.1M", growth: "+89.2%", relevance: 100, isCore: true },
        { tag: "#aspiradora", postsCount: "35.2M", growth: "+21.4%", relevance: 100, isCore: true },
        { tag: "#limpiezahogar", postsCount: "48.0M", growth: "+33.8%", relevance: 100, isCore: true },
        { tag: "#tiktokshop", postsCount: "140M", growth: "+45.0%", relevance: 100, isCore: true },
        { tag: "#hogarlimpio", postsCount: "22.6M", growth: "+27.1%", relevance: 100, isCore: true },
        { tag: "#pelosdemascotas", postsCount: "16.4M", growth: "+39.5%", relevance: 94, isCore: false },
      ],
      topCompetitorAngles: [
        {
          competitor: "Dyson V15 Detect",
          hookPattern: "700€ de Dyson vs misma luz verde por una fracción de precio",
          viewBenchmark: "2.1M+",
          ourCounterHook: "¿Pagar 700€ por una Dyson con luz verde? DyMona V18 PRO hace lo mismo y con tubo plegable",
        },
      ],
    },
    de: {
      productId: "v18pro",
      language: "de",
      productName: "DyMona V18 PRO Akku-Staubsauger",
      updatedAt: "2026-10-22T08:30:00Z",
      hotwords: [
        {
          word: "Grünes Staubsucher-Licht",
          category: "gadget",
          growthRate: "+540%",
          heatScore: 100,
          sampleHook: "Unglaublich was das grüne Licht auf dem scheinbar sauberen Boden sichtbar macht!",
          suggestedPrompt: "Grünes Erkennungslicht deckt mikroskopischen Staub auf",
        },
        {
          word: "Knickbares Saugrohr",
          category: "pain_point",
          growthRate: "+390%",
          heatScore: 96,
          sampleHook: "Nie wieder bücken! Knickrohr saugt mühelos unter Sofa und Bett",
          suggestedPrompt: "Rückenschonendes Saugen unter flachen Möbeln",
        },
      ],
      hashtags: [
        { tag: "#DyMona", postsCount: "2.1M", growth: "+48.0%", relevance: 100, isCore: true },
        { tag: "#V18PRO", postsCount: "780K", growth: "+76.0%", relevance: 100, isCore: true },
        { tag: "#staubsauger", postsCount: "28.4M", growth: "+18.2%", relevance: 100, isCore: true },
        { tag: "#haushaltshelfer", postsCount: "19.5M", growth: "+31.0%", relevance: 100, isCore: true },
        { tag: "#putztipps", postsCount: "34.1M", growth: "+25.4%", relevance: 100, isCore: true },
        { tag: "#tiktokshop", postsCount: "140M", growth: "+45.0%", relevance: 100, isCore: true },
      ],
      topCompetitorAngles: [
        {
          competitor: "Dyson V12 / V15",
          hookPattern: "Extremer Preisvergleich und Saugleistung",
          viewBenchmark: "1.4M+",
          ourCounterHook: "Warum noch 600€ für Marken-Staubsauger zahlen? DyMona V18 PRO mit grünem Licht überzeugt",
        },
      ],
    },
    ja: {
      productId: "v18pro",
      language: "ja",
      productName: "DyMona V18 PRO コードレス掃除機",
      updatedAt: "2026-10-22T08:30:00Z",
      hotwords: [
        {
          word: "緑色LED可視化ライト",
          category: "gadget",
          growthRate: "+470%",
          heatScore: 98,
          sampleHook: "一見キレイな床がホコリだらけ！？緑の光で微細なゴミが浮き彫りに",
          suggestedPrompt: "緑色顕塵ライトによる驚愕の掃除ビフォーアフター",
        },
      ],
      hashtags: [
        { tag: "#DyMona", postsCount: "1.2M", growth: "+42.0%", relevance: 100, isCore: true },
        { tag: "#V18PRO", postsCount: "540K", growth: "+68.0%", relevance: 100, isCore: true },
        { tag: "#掃除機", postsCount: "18.9M", growth: "+19.0%", relevance: 95, isCore: true },
        { tag: "#便利家電", postsCount: "24.1M", growth: "+30.0%", relevance: 92, isCore: false },
      ],
      topCompetitorAngles: [
        {
          competitor: "ダイソン",
          hookPattern: "高価格ダイソンとの直接比較",
          viewBenchmark: "820K+",
          ourCounterHook: "ダイソンの緑色ライトが欲しかった人に朗報！折れ曲がるアーム付きでこの価格",
        },
      ],
    },
  },

  // V17MAX: 58kPa Monster Cordless Vacuum
  v17max: {
    de: {
      productId: "v17max",
      language: "de",
      productName: "DyMona V17 MAX 58kPa Monster-Sauger",
      updatedAt: "2026-10-22T08:30:00Z",
      hotwords: [
        {
          word: "58kPa Monster-Saugleistung",
          category: "spec",
          growthRate: "+610%",
          heatScore: 100,
          sampleHook: "58.000 Pascal! Zieht selbst tief sitzenden Schmutz aus dicken Teppichen",
          suggestedPrompt: "Maximale Saugkraft auf dem Markt für Tiefenreinigung und Tierhaare",
        },
        {
          word: "Tierhaar-Experte Anti-Verwicklung",
          category: "pain_point",
          growthRate: "+460%",
          heatScore: 98,
          sampleHook: "Hunde- und Katzenhaare ohne Blockieren der Bürste sofort weggesaugt",
          suggestedPrompt: "Verwicklungsfreie Bürstenwalze für Haustierbesitzer",
        },
      ],
      hashtags: [
        { tag: "#DyMona", postsCount: "2.1M", growth: "+48.0%", relevance: 100, isCore: true },
        { tag: "#V17MAX", postsCount: "890K", growth: "+84.0%", relevance: 100, isCore: true },
        { tag: "#staubsauger", postsCount: "28.4M", growth: "+18.2%", relevance: 100, isCore: true },
        { tag: "#putztipps", postsCount: "34.1M", growth: "+25.4%", relevance: 100, isCore: true },
        { tag: "#haushaltshelfer", postsCount: "19.5M", growth: "+31.0%", relevance: 100, isCore: true },
        { tag: "#tiktokshop", postsCount: "140M", growth: "+45.0%", relevance: 100, isCore: true },
      ],
      topCompetitorAngles: [
        {
          competitor: "Vorwerk / Dyson",
          hookPattern: "Höchste kPa Saugleistung vs. überteuerte Traditionsprodukte",
          viewBenchmark: "1.1M+",
          ourCounterHook: "58kPa Power: Warum DyMona V17 MAX selbst teuerste Sauger im Teppichtest schlägt",
        },
      ],
    },
    es: {
      productId: "v17max",
      language: "es",
      productName: "DyMona V17 MAX 58kPa Aspiradora",
      updatedAt: "2026-10-22T08:30:00Z",
      hotwords: [
        {
          word: "58kPa succión récord",
          category: "spec",
          growthRate: "+590%",
          heatScore: 100,
          sampleHook: "¡58.000 Pa! La aspiradora más potente para alfombras profundas y casas con mascotas",
          suggestedPrompt: "Potencia industrial para el hogar",
        },
      ],
      hashtags: [
        { tag: "#DyMona", postsCount: "2.8M", growth: "+64.0%", relevance: 100, isCore: true },
        { tag: "#V17MAX", postsCount: "720K", growth: "+78.0%", relevance: 100, isCore: true },
        { tag: "#aspiradora", postsCount: "35.2M", growth: "+21.4%", relevance: 100, isCore: true },
        { tag: "#hogargrande", postsCount: "11.5M", growth: "+29.0%", relevance: 100, isCore: true },
        { tag: "#limpiezahogar", postsCount: "48.0M", growth: "+33.8%", relevance: 100, isCore: true },
        { tag: "#tiktokshop", postsCount: "140M", growth: "+45.0%", relevance: 100, isCore: true },
        { tag: "#mascotas", postsCount: "82.0M", growth: "+16.0%", relevance: 100, isCore: true },
      ],
      topCompetitorAngles: [
        {
          competitor: "Aspiradoras de cable tradicionales",
          hookPattern: "Potencia de cable pero con la libertad de batería",
          viewBenchmark: "850K+",
          ourCounterHook: "Adiós a los cables: 58kPa de potencia inalámbrica que aspira todo a su paso",
        },
      ],
    },
    ja: {
      productId: "v17max",
      language: "ja",
      productName: "DyMona V17 MAX 58kPaコードレス掃除機",
      updatedAt: "2026-10-22T08:30:00Z",
      hotwords: [
        {
          word: "58kPa業界最強クラス吸引力",
          category: "spec",
          growthRate: "+520%",
          heatScore: 100,
          sampleHook: "絨毯の奥のゴミまで一掃！58,000Paの吸引力が異次元すぎる",
          suggestedPrompt: "絨毯やペットの抜け毛を一撃で吸い上げるハイパワー",
        },
      ],
      hashtags: [
        { tag: "#DyMona", postsCount: "1.2M", growth: "+42.0%", relevance: 100, isCore: true },
        { tag: "#V17MAX", postsCount: "490K", growth: "+65.0%", relevance: 100, isCore: true },
        { tag: "#掃除機", postsCount: "18.9M", growth: "+19.0%", relevance: 95, isCore: true },
      ],
      topCompetitorAngles: [
        {
          competitor: "ハイエンドコードレス各社",
          hookPattern: "58kPaのパワー数値直球訴求",
          viewBenchmark: "620K+",
          ourCounterHook: "吸引力重視で選ぶならこれ一択！58kPaのDyMona V17 MAXが凄すぎた",
        },
      ],
    },
  },

  // Fallback template builder for other products
  qs40: generateGenericRadar("qs40", "FOSMET QS40 スマートウォッチ"),
  t20: generateGenericRadar("t20", "FOSMET T20 頑丈スマートウォッチ"),
  e12: generateGenericRadar("e12", "FOSMET E12 POVカメラ搭載イヤホン"),
  e05: generateGenericRadar("e05", "FOSMET E05 電致変色スマートグラス"),
  e09: generateGenericRadar("e09", "FOSMET E09 超軽量40g撮影グラス"),
  g58: generateGenericRadar("g58", "FOSMET G58 女性向けスマートウォッチ"),
  g2: generateGenericRadar("g2", "FOSMET G2 女性健康スマートウォッチ"),
  fos10: generateGenericRadar("fos10", "FOSMET FOS10 14.9g超軽量スマートウォッチ"),
  i228: generateGenericRadar("i228", "FOSMET I228 ファッションスマートウォッチ"),
  t40: generateGenericRadar("t40", "FOSMET T40 キッズスマートウォッチ"),
};

function generateGenericRadar(productId: ProductId, productName: string): Record<TargetLanguage, CompetitorRadarData> {
  const isSpanish = productId === "g58" || productId === "i228" || productId === "t40";
  const isGerman = productId === "t40";

  return {
    ja: {
      productId,
      language: "ja",
      productName,
      updatedAt: "2026-10-22T08:30:00Z",
      hotwords: [
        {
          word: "コスパ最強ギア",
          category: "viral_buzz",
          growthRate: "+320%",
          heatScore: 95,
          sampleHook: `大手ブランドの半額以下！？${productName}の機能が充実しすぎてる件`,
          suggestedPrompt: "価格破壊と高品質の両立をTikTok視聴者に直球アピール",
        },
        {
          word: "タイパ生活",
          category: "efficiency",
          growthRate: "+280%",
          heatScore: 92,
          sampleHook: `手首でLINEも通話も即完了！${productName}で毎日の効率が倍になった`,
          suggestedPrompt: "スマート通知・通話・日常効率化のベネフィット",
        },
        {
          word: "服装コーデ高見え",
          category: "scene",
          growthRate: "+240%",
          heatScore: 88,
          sampleHook: `安っぽさゼロ！どんな服装にも馴染む${productName}の質感が最高`,
          suggestedPrompt: "OOTD、ビジネス、カジュアルに溶け込む上質デザイン",
        },
        {
          word: "24h健康管理",
          category: "spec",
          growthRate: "+190%",
          heatScore: 85,
          sampleHook: "心拍・睡眠・運動まで自動記録！健康管理が楽しくなるスマートギア",
          suggestedPrompt: "バイタル計測と睡眠改善のヘルスケア訴求",
        },
      ],
      hashtags: [
        { tag: "#FOSMET", postsCount: "4.8M", growth: "+31.2%", relevance: 100, isCore: true },
        { tag: `#${productId.toUpperCase()}`, postsCount: "920K", growth: "+45.0%", relevance: 100, isCore: true },
        { tag: "#スマートウォッチ", postsCount: "29.4M", growth: "+21.0%", relevance: 96, isCore: true },
        { tag: "#便利グッズ", postsCount: "38.2M", growth: "+18.5%", relevance: 90, isCore: false },
        { tag: "#ガジェット好き", postsCount: "14.6M", growth: "+26.0%", relevance: 88, isCore: false },
      ],
      topCompetitorAngles: [
        {
          competitor: "大手ブランド同カテゴリ",
          hookPattern: "有名ブランドの3分の1価格で同等以上の体験",
          viewBenchmark: "750K+",
          ourCounterHook: `有名ブランドのロゴ代に3万円払う前にこれ見て！${productName}のコスパが異次元`,
        },
      ],
    },
    es: {
      productId,
      language: "es",
      productName,
      updatedAt: "2026-10-22T08:30:00Z",
      hotwords: [
        {
          word: "calidad precio brutal",
          category: "viral_buzz",
          growthRate: "+350%",
          heatScore: 96,
          sampleHook: `¿De verdad cuesta tan poco? Las funciones de ${productName} te van a dejar loco`,
          suggestedPrompt: "Sorpresa por la relación calidad-precio en TikTok Shop",
        },
        {
          word: "llamadas bluetooth y salud",
          category: "efficiency",
          growthRate: "+290%",
          heatScore: 93,
          sampleHook: `Responde llamadas y monitorea tu salud 24/7 con este reloj elegante`,
          suggestedPrompt: "Conectividad total en la muñeca sin sacar el móvil",
        },
        {
          word: "estilo y atuendo elegante",
          category: "scene",
          growthRate: "+240%",
          heatScore: 89,
          sampleHook: `El accesorio perfecto que combina con cualquier outfit para salir o entrenar`,
          suggestedPrompt: "Moda y versatilidad diaria",
        },
      ],
      hashtags: [
        { tag: "#FOSMET", postsCount: "3.2M", growth: "+26.1%", relevance: 100, isCore: true },
        { tag: `#${productId.toUpperCase()}`, postsCount: "740K", growth: "+51.0%", relevance: 100, isCore: true },
        { tag: "#relojinteligente", postsCount: "42.0M", growth: "+19.0%", relevance: 100, isCore: true },
        { tag: "#Atuendo", postsCount: "18.5M", growth: "+22.0%", relevance: 95, isCore: isSpanish },
        { tag: "#tiktokshop", postsCount: "140M", growth: "+45.0%", relevance: 88, isCore: false },
      ],
      topCompetitorAngles: [
        {
          competitor: "Marcas tradicionales sobrevaloradas",
          hookPattern: "Revelar el sobreprecio de marcas caras",
          viewBenchmark: "680K+",
          ourCounterHook: `No gastes 200€ en marcas de moda: ${productName} tiene pantalla HD y llamadas claras`,
        },
      ],
    },
    de: {
      productId,
      language: "de",
      productName,
      updatedAt: "2026-10-22T08:30:00Z",
      hotwords: [
        {
          word: "Preis-Leistungs-Sieger",
          category: "viral_buzz",
          growthRate: "+310%",
          heatScore: 95,
          sampleHook: `Besser als teure Marken? ${productName} begeistert auf ganzer Linie`,
          suggestedPrompt: "Deutsche Gründlichkeit: Fokus auf Specs und Zuverlässigkeit",
        },
        {
          word: "Gesundheits- & Fitness-Tracker",
          category: "spec",
          growthRate: "+250%",
          heatScore: 90,
          sampleHook: `Schlaf, Puls und Sportmodi im Blick: Das ideale Upgrade fürs Handgelenk`,
          suggestedPrompt: "Präzises Tracking für Alltag und Sport",
        },
      ],
      hashtags: [
        { tag: "#FOSMET", postsCount: "2.1M", growth: "+18.9%", relevance: 100, isCore: true },
        { tag: `#${productId.toUpperCase()}`, postsCount: "510K", growth: "+44.0%", relevance: 100, isCore: true },
        { tag: "#Smartwatch", postsCount: "26.5M", growth: "+14.0%", relevance: 100, isCore: true },
        { tag: "#TechTipps", postsCount: "12.4M", growth: "+28.0%", relevance: 88, isCore: false },
      ],
      topCompetitorAngles: [
        {
          competitor: "Marktübliche Standarduhren",
          hookPattern: "Vergleich von Akkulaufzeit und Displayauflösung",
          viewBenchmark: "510K+",
          ourCounterHook: `Warum viele 2026 keine 300€ mehr für Standarduhren ausgeben: ${productName} im Härtetest`,
        },
      ],
    },
  };
}

export function getCompetitorRadar(productId: ProductId, language: TargetLanguage = "ja"): CompetitorRadarData {
  const productRadars = PRODUCT_RADAR_DATA[productId] || PRODUCT_RADAR_DATA.rec10;
  return productRadars[language] || productRadars.ja || productRadars.es || productRadars.de;
}
