import { AngleCategory, GeneratedTitle, ProductId, TargetLanguage } from "../types";

export const G58_SPANISH_TAGS = "#FOSMET#G58#reloj inteligente#Atuendo#Salud de la mujer";
export const G58_GERMAN_TAGS = "#FOSMET#G58#Smartwatch#Outfit#Frauengesundheit";

interface HookTemplate {
  pattern: (brand: string, model: string, keyword?: string) => string;
  category: AngleCategory;
  angleLabel: string;
  targetAudience: string;
}

// 50+ Spanish TikTok Viral Hook Templates for FOSMET G58 (Women's Fashion Smartwatch)
export const G58_SPANISH_TEMPLATES: HookTemplate[] = [
  // 1. Pain Point / Counter-Intuitive (Dolor, Estilo y Salud Femenina)
  {
    pattern: (b, m) => `¿Cansada de smartwatches toscos que no combinan con tus outfits? ${b} ${m} une elegancia y alta tecnología`,
    category: "pain_point",
    angleLabel: "Adiós a los relojes toscos",
    targetAudience: "Mujeres elegantes y amantes de la moda",
  },
  {
    pattern: (b, m) => `¿Se te olvida cuándo llega tu periodo? ${b} ${m} gestiona tu ciclo menstrual y ovulación al detalle`,
    category: "pain_point",
    angleLabel: "Gestión precisa del ciclo",
    targetAudience: "Mujeres que cuidan su salud hormonal",
  },
  {
    pattern: (b, m) => `¿Pagar una fortuna por un reloj de moda que apenas tiene funciones? ${b} ${m} lo tiene todo en tu muñeca`,
    category: "pain_point",
    angleLabel: "Lujo accesible sin sobreprecio",
    targetAudience: "Compradoras inteligentes y fashionistas",
  },
  {
    pattern: (b, m) => `¿Tener que cambiar de reloj para ir al gimnasio y a una cena? ${b} ${m} incluye correas milanesa y silicona`,
    category: "pain_point",
    angleLabel: "Doble correa para cada ocasión",
    targetAudience: "Mujeres versátiles y activas",
  },
  {
    pattern: (b, m) => `¿No escuchas el móvil dentro del bolso? Responde llamadas Bluetooth con calidad HD desde ${b} ${m}`,
    category: "pain_point",
    angleLabel: "Llamadas directas desde el bolso",
    targetAudience: "Mujeres profesionales y multitask",
  },
  {
    pattern: (b, m) => `¿Pantallas con bordes negros gigantes? ${b} ${m} tiene 98% de pantalla con resolución 390×390 HD`,
    category: "pain_point",
    angleLabel: "Pantalla sin bordes 98%",
    targetAudience: "Amantes del diseño minimalista",
  },

  // 2. Efficiency & Lifestyle (Salud de la Mujer, Llamadas y Productividad)
  {
    pattern: (b, m) => `Salud femenina inteligente: seguimiento de periodo, ovulación y recordatorios diarios con ${b} ${m}`,
    category: "efficiency",
    angleLabel: "Control menstrual integral",
    targetAudience: "Cuidado de la salud femenina",
  },
  {
    pattern: (b, m) => `Contesta llamadas y revisa WhatsApps mientras te maquillas o entrenas gracias a ${b} ${m}`,
    category: "efficiency",
    angleLabel: "Llamadas Bluetooth 5.3",
    targetAudience: "Mujeres dinámicas y productivas",
  },
  {
    pattern: (b, m) => `Más de 120 modos deportivos para registrar yoga, pilates, running y fitness con ${b} ${m}`,
    category: "efficiency",
    angleLabel: "120+ deportes femeninos",
    targetAudience: "Chicas fitness y amantes del bienestar",
  },
  {
    pattern: (b, m) => `Monitoreo 24/7 de ritmo cardíaco, oxígeno SpO2, presión y fases de sueño profundo con ${b} ${m}`,
    category: "efficiency",
    angleLabel: "Biometría completa 24/7",
    targetAudience: "Mujeres conscientes de su bienestar",
  },
  {
    pattern: (b, m) => `Controla tu música favorita y saca selfies a distancia agitando la muñeca con ${b} ${m}`,
    category: "efficiency",
    angleLabel: "Selfie remoto y música",
    targetAudience: "Creadoras de contenido y viajeras",
  },
  {
    pattern: (b, m) => `Asistente de voz con doble clic y llamadas SOS de emergencia: tu seguridad en ${b} ${m}`,
    category: "efficiency",
    angleLabel: "Voz inteligente y SOS",
    targetAudience: "Seguridad y comodidad diaria",
  },

  // 3. Fashion & Aesthetics (Moda, Atuendo y Doble Correa)
  {
    pattern: (b, m) => `Correa milanesa para la oficina y silicona suave para el gym: el accesorio definitivo ${b} ${m}`,
    category: "gadget",
    angleLabel: "Outfit versátil intercambiable",
    targetAudience: "Amantes del 'Get Ready With Me'",
  },
  {
    pattern: (b, m) => `Cristal templado de alta dureza con revestimiento antihuellas y pantalla 1.27" HD en ${b} ${m}`,
    category: "gadget",
    angleLabel: "Cristal HD antihuellas",
    targetAudience: "Detallistas de acabados prémium",
  },
  {
    pattern: (b, m) => `Diseño ultraligero y esferas florales personalizables: el smartwatch joya ${b} ${m}`,
    category: "gadget",
    angleLabel: "Diseño joya ultrafino",
    targetAudience: "Mujeres elegantes y sofisticadas",
  },
  {
    pattern: (b, m) => `Resistencia al agua IP68 para lavarte las manos o entrenar bajo la lluvia con ${b} ${m}`,
    category: "gadget",
    angleLabel: "Impermeabilidad IP68",
    targetAudience: "Uso diario sin preocupaciones",
  },
  {
    pattern: (b, m) => `Guarda hasta 100 contactos favoritos y marca números directamente en la pantalla de ${b} ${m}`,
    category: "gadget",
    angleLabel: "Teclado y 100 contactos",
    targetAudience: "Comunicación rápida y fluida",
  },
  {
    pattern: (b, m) => `Sincronización ultraestable con la app GloryFit para ver tus métricas de salud en ${b} ${m}`,
    category: "gadget",
    angleLabel: "GloryFit App sincronización",
    targetAudience: "Usuarias de Android e iOS",
  },

  // 4. Smart Power (Asistente de Voz y Funciones Inteligentes)
  {
    pattern: (b, m) => `Pídele lo que quieras a tu asistente de voz con un doble clic en la corona del ${b} ${m}`,
    category: "ai_power",
    angleLabel: "Asistente de voz al toque",
    targetAudience: "Fans de la tecnología práctica",
  },
  {
    pattern: (b, m) => `Análisis avanzado de sueño de 21:30 a 12:00 para despertar llena de energía con ${b} ${m}`,
    category: "ai_power",
    angleLabel: "Sueño reparador analizado",
    targetAudience: "Personas con insomnio o estrés",
  },
  {
    pattern: (b, m) => `Entrenamientos de respiración guiada para reducir el estrés del trabajo con ${b} ${m}`,
    category: "ai_power",
    angleLabel: "Gestión de estrés y calma",
    targetAudience: "Oficinistas y estudiantes",
  },
  {
    pattern: (b, m) => `Previsión del tiempo, alarmas vibratorias y juegos casuales en tu muñeca con ${b} ${m}`,
    category: "ai_power",
    angleLabel: "Ecosistema inteligente diario",
    targetAudience: "Mujeres organizadas",
  },
  {
    pattern: (b, m) => `Aviso de llamadas, mensajes y notificaciones de redes sociales al instante en ${b} ${m}`,
    category: "ai_power",
    angleLabel: "Notificaciones en tiempo real",
    targetAudience: "Usuarias conectadas",
  },
  {
    pattern: (b, m) => `Localizador de teléfono integrado: nunca más perderás el móvil por casa gracias a ${b} ${m}`,
    category: "ai_power",
    angleLabel: "Buscar móvil con un toque",
    targetAudience: "Despistadas prácticas",
  },

  // 5. Secret Hack & Recommendations (Secretos de Moda y Bienestar)
  {
    pattern: (b, m) => `El secreto de estilistas para combinar reloj con joyas: el acabado oro rosa de ${b} ${m}`,
    category: "secret_hack",
    angleLabel: "Secreto de estilismo",
    targetAudience: "Influencers y creadoras de moda",
  },
  {
    pattern: (b, m) => `El truco para fotos perfectas sin trípode: dispara la cámara del móvil agitando ${b} ${m}`,
    category: "secret_hack",
    angleLabel: "Truco para fotos solas",
    targetAudience: "Aficionadas a las selfies y viajes",
  },
  {
    pattern: (b, m) => `Cómo saber tus días más fértiles de forma natural y automática con la app de ${b} ${m}`,
    category: "secret_hack",
    angleLabel: "Conocimiento del cuerpo",
    targetAudience: "Planificación familiar y salud",
  },
  {
    pattern: (b, m) => `El hack para cambiar tu estilo en 5 segundos sin herramientas usando las correas de ${b} ${m}`,
    category: "secret_hack",
    angleLabel: "Cambio de correa express",
    targetAudience: "Amantes de la versatilidad",
  },
  {
    pattern: (b, m) => `Configura el botón SOS de pulsación larga para sentirte siempre protegida con ${b} ${m}`,
    category: "secret_hack",
    angleLabel: "Botón de seguridad SOS",
    targetAudience: "Mujeres que salen solas de noche",
  },
  {
    pattern: (b, m) => `Personaliza la esfera con tus propias fotos favoritas directamente en ${b} ${m}`,
    category: "secret_hack",
    angleLabel: "Esfera con fotos propias",
    targetAudience: "Amantes de la personalización",
  },

  // 6. Curiosity & Questions (Preguntas Virales)
  {
    pattern: (b, m) => `¿Es este el smartwatch para mujer más bonito y completo del año? Probamos ${b} ${m}`,
    category: "question",
    angleLabel: "¿El más bonito del año?",
    targetAudience: "Buscadoras de novedades de moda",
  },
  {
    pattern: (b, m) => `¿Por qué todas las influencers de moda están cambiando su reloj por el nuevo ${b} ${m}?`,
    category: "question",
    angleLabel: "¿Por qué todas lo llevan?",
    targetAudience: "Seguidoras de tendencias TikTok",
  },
  {
    pattern: (b, m) => `¿Puede un reloj de diseño registrar 120 deportes y cuidar tu ciclo? Lo ponemos a prueba: ${b} ${m}`,
    category: "question",
    angleLabel: "¿Moda o rendimiento real?",
    targetAudience: "Escépticas de la tecnología",
  },
  {
    pattern: (b, m) => `¿Qué reloj llevar para una boda y luego al entrenamiento del lunes? La respuesta es ${b} ${m}`,
    category: "question",
    angleLabel: "¿Un solo reloj para todo?",
    targetAudience: "Mujeres que buscan practicidad",
  },
  {
    pattern: (b, m) => `¿Un smartwatch con pantalla de 390×390 y llamadas Bluetooth por este precio? Descubre ${b} ${m}`,
    category: "question",
    angleLabel: "¿Calidad prémium accesible?",
    targetAudience: "Cazadoras de chollos tecnológicos",
  },
  {
    pattern: (b, m) => `¿Realmente necesitas un reloj que mida tu estrés y fases de sueño? Esto descubrí con ${b} ${m}`,
    category: "question",
    angleLabel: "¿Vale la pena para tu salud?",
    targetAudience: "Interesadas en bienestar mental",
  },

  // 7. Spec Power & Direct Tech (Especificaciones y Potencia)
  {
    pattern: (b, m) => `Pantalla táctil 1.27" HD 390×390 + 98% ratio + Cristal antihuellas: la nitidez del ${b} ${m}`,
    category: "spec_power",
    angleLabel: "Pantalla 1.27\" 390x390 HD",
    targetAudience: "Exigentes de la calidad visual",
  },
  {
    pattern: (b, m) => `Bluetooth 5.3 + Altavoz integrado + 100 contactos: llamadas cristalinas en ${b} ${m}`,
    category: "spec_power",
    angleLabel: "Bluetooth 5.3 llamadas HD",
    targetAudience: "Comunicación en movimiento",
  },
  {
    pattern: (b, m) => `Gestión de salud femenina + Ritmo cardíaco + SpO2 + Monitor de sueño en ${b} ${m}`,
    category: "spec_power",
    angleLabel: "Suite de salud femenina",
    targetAudience: "Entusiastas del self-care",
  },
  {
    pattern: (b, m) => `120+ modos deportivos + Protección IP68 al agua y polvo: la resistencia del ${b} ${m}`,
    category: "spec_power",
    angleLabel: "120+ deportes & IP68",
    targetAudience: "Deportistas todoterreno",
  },
  {
    pattern: (b, m) => `Doble correa milanesa de acero inoxidable + silicona hipoalergénica incluidas con ${b} ${m}`,
    category: "spec_power",
    angleLabel: "Pack doble correa incluido",
    targetAudience: "Compradoras que valoran el pack",
  },
  {
    pattern: (b, m) => `Carga magnética rápida + App GloryFit para iOS y Android con el nuevo ${b} ${m}`,
    category: "spec_power",
    angleLabel: "Carga magnética & GloryFit",
    targetAudience: "Usuarias de smartphones",
  },

  // Extra viral hooks
  {
    pattern: (b, m) => `El regalo perfecto para ella: diseño de alta costura, salud femenina y llamadas con ${b} ${m}`,
    category: "all_mixed",
    angleLabel: "El regalo femenino ideal",
    targetAudience: "Buscadores de regalos especiales",
  },
  {
    pattern: (b, m) => `Unboxing ${b} ${m}: mira cómo brilla la correa milanesa y lo nítida que es su pantalla HD`,
    category: "all_mixed",
    angleLabel: "Unboxing y primeras impresiones",
    targetAudience: "Consumidoras visuales de TikTok",
  },
  {
    pattern: (b, m) => `Combina tu ropa de oficina y tu ropa de gimnasio con el smartwatch joya ${b} ${m}`,
    category: "all_mixed",
    angleLabel: "Moda y tecnología en armonía",
    targetAudience: "Aficionadas al estilo diario",
  },
  {
    pattern: (b, m) => `Cuida tu cuerpo, responde llamadas y luce espectacular todos los días con ${b} ${m}`,
    category: "all_mixed",
    angleLabel: "Estilo y salud en tu muñeca",
    targetAudience: "Mujeres empoderadas",
  },
  {
    pattern: (b, m) => `Todo lo que necesitas en un smartwatch sin sacrificar tu estilo femenino: ${b} ${m}`,
    category: "all_mixed",
    angleLabel: "Elegancia sin compromisos",
    targetAudience: "Público femenino general",
  },
  {
    pattern: (b, m) => `¿Por qué elegir entre belleza y funcionalidad cuando puedes tener ambas con ${b} ${m}?`,
    category: "all_mixed",
    angleLabel: "Belleza y potencia unidas",
    targetAudience: "Compradoras indecisas",
  },
  {
    pattern: (b, m) => `Descubre cómo ${b} ${m} se convirtió en el complemento favorito de mi rutina diaria`,
    category: "all_mixed",
    angleLabel: "Rutina diaria transformada",
    targetAudience: "Amantes de los vlogs diarios",
  },
  {
    pattern: (b, m) => `Tu salud hormonal, tus pasos y tus llamadas bajo control con el sofisticado ${b} ${m}`,
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
    category: "pain_point",
    angleLabel: "Schluss mit klobigen Uhren",
    targetAudience: "Modebewusste & stilvolle Frauen",
  },
  {
    pattern: (b, m) => `Vergisst du oft deinen Zyklus? Die ${b} ${m} trackt Periode, Eisprung und fruchtbare Tage auf den Punkt`,
    category: "pain_point",
    angleLabel: "Präzises Zyklus-Tracking",
    targetAudience: "Frauen mit Fokus auf Hormongesundheit",
  },
  {
    pattern: (b, m) => `Warum Hunderte Euro für eine Modemarken-Uhr ohne smarte Features zahlen? Die ${b} ${m} kann alles`,
    category: "pain_point",
    angleLabel: "Bezahlbarer Luxus ohne Aufpreis",
    targetAudience: "Smarte Käuferinnen & Fashionistas",
  },
  {
    pattern: (b, m) => `Ständiges Uhrenwechseln zwischen Büro und Fitnessstudio? Die ${b} ${m} liefert Milanaise- & Silikonband direkt mit`,
    category: "pain_point",
    angleLabel: "Doppelarmband für jeden Anlass",
    targetAudience: "Vielseitige & aktive Frauen",
  },
  {
    pattern: (b, m) => `Hörst du dein Handy in der Handtasche nicht? Nimm Anrufe in HD-Qualität direkt über die ${b} ${m} an`,
    category: "pain_point",
    angleLabel: "Anrufe direkt am Handgelenk",
    targetAudience: "Berufstätige Frauen & Multitaskerinnen",
  },
  {
    pattern: (b, m) => `Dicke schwarze Ränder am Display? Die ${b} ${m} bietet 98% Screen-to-Body mit gestochen scharfen 390×390 HD`,
    category: "pain_point",
    angleLabel: "Randloses 98% HD-Display",
    targetAudience: "Minimalistinnen & Design-Fans",
  },

  // 2. Efficiency & Lifestyle (Frauengesundheit, Bluetooth-Anrufe & Alltag)
  {
    pattern: (b, m) => `Intelligente Frauengesundheit: Menstruationszyklus, Eisprung und tägliche Erinnerungen mit der ${b} ${m}`,
    category: "efficiency",
    angleLabel: "Ganzheitliche Zyklusgesundheit",
    targetAudience: "Gesundheitsbewusste Frauen",
  },
  {
    pattern: (b, m) => `Telefoniere via Bluetooth und sieh WhatsApp-Nachrichten beim Schminken oder Kochen mit der ${b} ${m}`,
    category: "efficiency",
    angleLabel: "Bluetooth 5.3 Telefonie",
    targetAudience: "Aktive & moderne Frauen",
  },
  {
    pattern: (b, m) => `Über 120 Sportmodi für Yoga, Pilates, Laufen und Workout präzise erfasst mit der ${b} ${m}`,
    category: "efficiency",
    angleLabel: "120+ Sportarten & Fitness",
    targetAudience: "Fitnessbegeisterte Frauen",
  },
  {
    pattern: (b, m) => `24/7 Überwachung von Herzfrequenz, SpO2-Blutsauerstoff, Blutdruck und Tiefschlafphasen mit der ${b} ${m}`,
    category: "efficiency",
    angleLabel: "Komplette 24/7 Biometrie",
    targetAudience: "Wellness- & Gesundheitsbewusste",
  },
  {
    pattern: (b, m) => `Steuere deine Lieblingsmusik und schieße Selfies aus der Ferne per Handgelenkschütteln mit der ${b} ${m}`,
    category: "efficiency",
    angleLabel: "Kamera-Fernauslöser & Musik",
    targetAudience: "Content Creatorinnen & Reisende",
  },
  {
    pattern: (b, m) => `Sprachassistent per Doppelklick und SOS-Notruffunktion: Deine Sicherheit im Alltag mit der ${b} ${m}`,
    category: "efficiency",
    angleLabel: "Sprachassistent & SOS-Notruf",
    targetAudience: "Sicherheits- & Komfortbewusste",
  },

  // 3. Fashion & Aesthetics (Design, Milanaise-Band & Zifferblätter)
  {
    pattern: (b, m) => `Edles Milanaise-Armband fürs Büro und weiches Silikon fürs Gym: Das Styling-Highlight ${b} ${m}`,
    category: "gadget",
    angleLabel: "Flexibles Wechselarmband",
    targetAudience: "Liebhaberinnen von OOTD & Mode",
  },
  {
    pattern: (b, m) => `Gehärtetes Glas mit Anti-Fingerprint-Beschichtung und brillantes 1,27" HD-Display bei der ${b} ${m}`,
    category: "gadget",
    angleLabel: "Gehärtetes Anti-Fingerprint-Glas",
    targetAudience: "Detailverliebte Premium-Käuferinnen",
  },
  {
    pattern: (b, m) => `Federleichtes Gehäuse und wunderschöne florale Zifferblätter: Die Schmuck-Smartwatch ${b} ${m}`,
    category: "gadget",
    angleLabel: "Schmuckvolles Schlankdesign",
    targetAudience: "Elegante Damen & Trendsetterinnen",
  },
  {
    pattern: (b, m) => `IP68 Wasserdichtigkeit für Händewaschen, Duschen oder Joggen im Regen mit der ${b} ${m}`,
    category: "gadget",
    angleLabel: "IP68 wasserdicht & robust",
    targetAudience: "Sorgloser Alltagsgebrauch",
  },
  {
    pattern: (b, m) => `Speichere bis zu 100 Lieblingskontakte und wähle Nummern direkt am Display der ${b} ${m}`,
    category: "gadget",
    angleLabel: "100 Kontakte & Ziffernblock",
    targetAudience: "Schnelle & direkte Kommunikation",
  },
  {
    pattern: (b, m) => `Nahtlose Synchronisation mit der GloryFit App für iOS und Android mit der neuen ${b} ${m}`,
    category: "gadget",
    angleLabel: "GloryFit App Anbindung",
    targetAudience: "Smartphone-Nutzerinnen aller Art",
  },

  // 4. Smart Power (KI-Funktionen & Schlafanalyse)
  {
    pattern: (b, m) => `Aktiviere deinen Smartphone-Sprachassistenten mit einem einfachen Doppelklick auf die Taste der ${b} ${m}`,
    category: "ai_power",
    angleLabel: "Sprachsteuerung per Doppelklick",
    targetAudience: "Fans praktischer Alltags-Tools",
  },
  {
    pattern: (b, m) => `Präzise Schlafanalyse von 21:30 bis 12:00 Uhr: Wache jeden Morgen erholt auf mit der ${b} ${m}`,
    category: "ai_power",
    angleLabel: "Fundierte Schlafanalyse",
    targetAudience: "Schlafoptimiererinnen & Gestresste",
  },
  {
    pattern: (b, m) => `Geführte Atemübungen und Stresserkennung für mehr Ruhe im hektischen Berufsalltag mit der ${b} ${m}`,
    category: "ai_power",
    angleLabel: "Stressmanagement & Atemtraining",
    targetAudience: "Studentinnen & Berufstätige",
  },
  {
    pattern: (b, m) => `Wettervorhersage, Vibrationswecker und Mini-Spiele direkt an deinem Handgelenk mit der ${b} ${m}`,
    category: "ai_power",
    angleLabel: "Smarte Alltagsbegleitung",
    targetAudience: "Strukturierte & planvolle Frauen",
  },
  {
    pattern: (b, m) => `Echtzeit-Benachrichtigungen für WhatsApp, Instagram und Anrufe diskret am Arm mit der ${b} ${m}`,
    category: "ai_power",
    angleLabel: "Diskrete Benachrichtigungen",
    targetAudience: "Stets vernetzte Frauen",
  },
  {
    pattern: (b, m) => `Smartphone-Suchfunktion: Nie wieder langes Suchen nach dem Handy dank der ${b} ${m}`,
    category: "ai_power",
    angleLabel: "Handy-Finder Funktion",
    targetAudience: "Praktisch denkende Frauen",
  },

  // 5. Secret Hack & Recommendations (Styling-Tipps & Hacks)
  {
    pattern: (b, m) => `Der Styling-Geheimtipp: Wie die Roségold-Akzente der ${b} ${m} jedes Business-Outfit aufwerten`,
    category: "secret_hack",
    angleLabel: "Styling-Geheimtipp für Outfits",
    targetAudience: "Mode-Bloggerinnen & Ästhetik-Fans",
  },
  {
    pattern: (b, m) => `Der Trick für perfekte Gruppenfotos: Schüttle einfach dein Handgelenk mit der ${b} ${m} als Auslöser`,
    category: "secret_hack",
    angleLabel: "Fotoauslöser per Geste",
    targetAudience: "Selfie-Liebhaberinnen & Reisende",
  },
  {
    pattern: (b, m) => `Wie du deinen weiblichen Zyklus ganz natürlich und automatisch mit der ${b} ${m} App verstehst`,
    category: "secret_hack",
    angleLabel: "Körperbewusstsein & Zyklus",
    targetAudience: "Familienplanung & Selbstfürsorge",
  },
  {
    pattern: (b, m) => `In 5 Sekunden vom Glamour-Look zum Sport-Look wechseln mit dem Schnellverschluss der ${b} ${m}`,
    category: "secret_hack",
    angleLabel: "Armbandwechsel in 5 Sekunden",
    targetAudience: "Vielbeschäftigte Frauen",
  },
  {
    pattern: (b, m) => `Richte den SOS-Notruf per langem Tastendruck ein und fühle dich unterwegs immer sicher mit der ${b} ${m}`,
    category: "secret_hack",
    angleLabel: "SOS-Sicherheits-Notruf",
    targetAudience: "Sicherheitsbewusste Frauen",
  },
  {
    pattern: (b, m) => `Lade deine eigenen Lieblingsfotos als individuelles Zifferblatt auf die ${b} ${m}`,
    category: "secret_hack",
    angleLabel: "Eigenes Foto als Zifferblatt",
    targetAudience: "Kreative & Personalisierungs-Fans",
  },

  // 6. Curiosity & Questions (Virale Fragen)
  {
    pattern: (b, m) => `Ist das die schönste und vielseitigste Damen-Smartwatch des Jahres? Test der ${b} ${m}`,
    category: "question",
    angleLabel: "Die schönste Damenuhr 2026?",
    targetAudience: "Trendbewusste Shopping-Fans",
  },
  {
    pattern: (b, m) => `Warum tragen jetzt alle Fashion-Creatorinnen auf TikTok die neue ${b} ${m}?`,
    category: "question",
    angleLabel: "Warum tragen sie alle?",
    targetAudience: "TikTok-Trendfolgerinnen",
  },
  {
    pattern: (b, m) => `Kann eine elegante Schmuckuhr 120 Sportarten tracken und deinen Zyklus managen? Die ${b} ${m} im Härtetest`,
    category: "question",
    angleLabel: "Schmuck oder echtes Sport-Tool?",
    targetAudience: "Technik-Kritikerinnen",
  },
  {
    pattern: (b, m) => `Welche Uhr passt perfekt zum Abendkleid und Montag früh zum Joggen? Die Antwort: ${b} ${m}`,
    category: "question",
    angleLabel: "Eine Uhr für alle Lebenslagen?",
    targetAudience: "Praxisorientierte Frauen",
  },
  {
    pattern: (b, m) => `Ein 390×390 HD-Display mit Bluetooth-Telefonie zu diesem Preis? Das kann die ${b} ${m}`,
    category: "question",
    angleLabel: "Premium-Qualität zum Bestpreis?",
    targetAudience: "Preis-Leistungs-Sucherinnen",
  },
  {
    pattern: (b, m) => `Brauchst du wirklich eine Uhr, die Stress, Schlaf und Zyklus misst? Meine Erfahrung mit der ${b} ${m}`,
    category: "question",
    angleLabel: "Lohnt sich die Investition?",
    targetAudience: "Interessierte an Self-Care",
  },

  // 7. Spec Power & Direct Tech (Technische Spezifikationen)
  {
    pattern: (b, m) => `1,27" HD-Touchscreen mit 390×390 Auflösung + 98% Screen-Ratio + Anti-Fingerprint: Die ${b} ${m}`,
    category: "spec_power",
    angleLabel: "1,27\" 390x390 HD-Display",
    targetAudience: "Fans gestochen scharfer Displays",
  },
  {
    pattern: (b, m) => `Bluetooth 5.3 + Integrierter Lautsprecher + 100 Kontakte: Glasklare Anrufe mit der ${b} ${m}`,
    category: "spec_power",
    angleLabel: "Bluetooth 5.3 HD-Telefonie",
    targetAudience: "Unterwegs erreichbare Nutzerinnen",
  },
  {
    pattern: (b, m) => `Frauengesundheits-Management + Herzfrequenz + SpO2 + Schlaftracking in der ${b} ${m}`,
    category: "spec_power",
    angleLabel: "Komplette Frauengesundheits-Suite",
    targetAudience: "Self-Care & Fitness-Fans",
  },
  {
    pattern: (b, m) => `120+ Sportmodi + IP68 Wasser- & Staubschutz: Höchste Zuverlässigkeit der ${b} ${m}`,
    category: "spec_power",
    angleLabel: "120+ Sportarten & IP68",
    targetAudience: "Allrounder-Sportlerinnen",
  },
  {
    pattern: (b, m) => `Doppelpack: Edles Edelstahl-Milanaiseband + hautfreundliches Silikonband bei der ${b} ${m}`,
    category: "spec_power",
    angleLabel: "Doppelarmband-Set inklusive",
    targetAudience: "Käuferinnen mit Blick auf Zubehör",
  },
  {
    pattern: (b, m) => `Magnetisches Schnellladen + GloryFit App für iOS und Android mit der neuen ${b} ${m}`,
    category: "spec_power",
    angleLabel: "Magnetladung & GloryFit App",
    targetAudience: "Smartphone-Nutzerinnen",
  },

  // Extra viral hooks
  {
    pattern: (b, m) => `Das perfekte Geschenk für sie: Modisches Design, Frauengesundheit und Telefonie mit der ${b} ${m}`,
    category: "all_mixed",
    angleLabel: "Das ideale Geschenk für Frauen",
    targetAudience: "Geschenkesuchende & Partner",
  },
  {
    pattern: (b, m) => `Unboxing ${b} ${m}: Wie edel das Milanaise-Band glänzt und wie scharf das Display strahlt`,
    category: "all_mixed",
    angleLabel: "Unboxing & Ersteindrücke",
    targetAudience: "TikTok-Visual-Liebhaberinnen",
  },
  {
    pattern: (b, m) => `Kombiniere deine Business-Garderobe und Sport-Kleidung mit der Schmuck-Smartwatch ${b} ${m}`,
    category: "all_mixed",
    angleLabel: "Mode und Technologie im Einklang",
    targetAudience: "Modebegeisterte Damen",
  },
  {
    pattern: (b, m) => `Behalte deine Gesundheit im Blick, telefoniere freihändig und sieh umwerfend aus mit der ${b} ${m}`,
    category: "all_mixed",
    angleLabel: "Stil & Gesundheit am Handgelenk",
    targetAudience: "Selbstbewusste moderne Frauen",
  },
  {
    pattern: (b, m) => `Alles, was du von einer Smartwatch erwartest, ohne auf femininen Stil zu verzichten: ${b} ${m}`,
    category: "all_mixed",
    angleLabel: "Feminin & kompromisslos smart",
    targetAudience: "Frauen aller Altersgruppen",
  },
  {
    pattern: (b, m) => `Warum zwischen Schönheit und Hightech entscheiden, wenn du beides haben kannst? ${b} ${m}`,
    category: "all_mixed",
    angleLabel: "Schönheit und Hightech vereint",
    targetAudience: "Unentschlossene Käuferinnen",
  },
  {
    pattern: (b, m) => `Erfahre, wie die ${b} ${m} zum unverzichtbaren Schmuckstück meiner Morgenroutine wurde`,
    category: "all_mixed",
    angleLabel: "Morgenroutine & Lifestyle",
    targetAudience: "Vlog- & Lifestyle-Interessierte",
  },
  {
    pattern: (b, m) => `Hormongesundheit, Schritte und Telefonate perfekt im Griff mit der stilvollen ${b} ${m}`,
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
  const tags = customTags && customTags.trim().length > 0 ? customTags : defaultTags;

  let pool = templates;
  if (category !== "all_mixed") {
    const filtered = templates.filter((t) => t.category === category);
    if (filtered.length > 0) {
      pool = filtered;
    }
  }

  const results: GeneratedTitle[] = [];
  const targetCount = 50;

  for (let i = 0; i < targetCount; i++) {
    const tmpl = pool[i % pool.length];
    let hook = tmpl.pattern(brand, model, customKeyword);

    if (customKeyword && customKeyword.trim().length > 0) {
      const kw = customKeyword.trim();
      if (!hook.toLowerCase().includes(kw.toLowerCase())) {
        if (isGerman) {
          hook = `[${kw}] ${hook}`;
        } else {
          hook = `[${kw}] ${hook}`;
        }
      }
    }

    const fullTitle = `${hook}\n\n${tags}`;

    results.push({
      id: `g58-${targetLanguage}-${i + 1}-${Date.now().toString(36)}`,
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
    });
  }

  return results;
}
