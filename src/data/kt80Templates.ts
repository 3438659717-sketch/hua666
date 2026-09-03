import { AngleCategory, GeneratedTitle, ProductId, TargetLanguage } from "../types";

export const KT80_SPANISH_TAGS = "#FOSMET #KT80 #reloj inteligente #Relojes para exteriores #herramienta";
export const KT80_GERMAN_TAGS = "#FOSMET #KT80 #Smartwatch #Outdoor Smartwatch #Werkzeug";

interface HookTemplate {
  pattern: (brand: string, model: string, keyword?: string) => string;
  category: AngleCategory;
  angleLabel: string;
  targetAudience: string;
}

// 50+ Spanish TikTok Viral Hook Templates for FOSMET KT80
export const KT80_SPANISH_TEMPLATES: HookTemplate[] = [
  // 1. Pain Point / Counter-Intuitive (Dolor y Desmitificación)
  {
    pattern: (b, m) => `¿Sigues cargando tu reloj todos los días? Con ${b} ${m} y sus 800 mAh te olvidarás del cargador`,
    category: "pain_point",
    angleLabel: "Adiós a cargar a diario",
    targetAudience: "Usuarios cansados de poca batería",
  },
  {
    pattern: (b, m) => `¿Te da miedo meter tu smartwatch al agua? ${b} ${m} resiste 5ATM reales bajo el agua`,
    category: "pain_point",
    angleLabel: "Miedo al agua roto",
    targetAudience: "Nadadores y amantes de la playa",
  },
  {
    pattern: (b, m) => `¿Pagar 500€ por un reloj todoterreno? ${b} ${m} demuestra que la máxima resistencia no es cara`,
    category: "pain_point",
    angleLabel: "Rompiendo sobreprecios",
    targetAudience: "Compradores inteligentes",
  },
  {
    pattern: (b, m) => `¿Quedarte a oscuras en la montaña? ${b} ${m} tiene linterna LED potente integrada en la muñeca`,
    category: "pain_point",
    angleLabel: "Solución de oscuridad",
    targetAudience: "Senderistas y campistas",
  },
  {
    pattern: (b, m) => `¿Pantallas pequeñas que no se ven al sol? La pantalla HD de 1.46" del ${b} ${m} lo cambia todo`,
    category: "pain_point",
    angleLabel: "Pantalla ultra clara",
    targetAudience: "Deportistas al aire libre",
  },
  {
    pattern: (b, m) => `¿Un reloj inteligente que se rompe con el primer golpe? Mira la armadura de metal del ${b} ${m}`,
    category: "pain_point",
    angleLabel: "Resistencia a impactos",
    targetAudience: "Trabajadores y aventureros",
  },

  // 2. Efficiency & Value (Batería 800mAh, Llamadas Bluetooth y Productividad)
  {
    pattern: (b, m) => `¡Batería bestial de 800 mAh! ${b} ${m} aguanta semanas de expedición sin despeinarse`,
    category: "efficiency",
    angleLabel: "800mAh batería extrema",
    targetAudience: "Viajeros de larga distancia",
  },
  {
    pattern: (b, m) => `Responde llamadas en HD directamente desde tu muñeca mientras escalas con ${b} ${m}`,
    category: "efficiency",
    angleLabel: "Llamadas Bluetooth HD",
    targetAudience: "Profesionales activos",
  },
  {
    pattern: (b, m) => `Más de 100 modos deportivos registrados con precisión militar gracias al ${b} ${m}`,
    category: "efficiency",
    angleLabel: "100+ deportes PRO",
    targetAudience: "Atletas y runners",
  },
  {
    pattern: (b, m) => `Dúchate, nada y sumérgete sin preocupaciones: el ${b} ${m} cuenta con certificación 5ATM`,
    category: "efficiency",
    angleLabel: "5ATM sumergible real",
    targetAudience: "Deportes acuáticos",
  },
  {
    pattern: (b, m) => `Monitoreo 24/7 de ritmo cardíaco y oxígeno SpO2 en tiempo real con ${b} ${m}`,
    category: "efficiency",
    angleLabel: "Salud total 24/7",
    targetAudience: "Cuidado de la salud",
  },
  {
    pattern: (b, m) => `Controla música, recibe notificaciones y activa tu linterna al instante con ${b} ${m}`,
    category: "efficiency",
    angleLabel: "Productividad en muñeca",
    targetAudience: "Usuarios multitarea",
  },

  // 3. Hardware & Metal Aesthetics (Diseño Metálico y Linterna LED)
  {
    pattern: (b, m) => `Cuerpo de metal plateado macizo y pantalla táctil de 1.46": la joya táctica ${b} ${m}`,
    category: "gadget",
    angleLabel: "Cuerpo de metal prémium",
    targetAudience: "Amantes del diseño rudo",
  },
  {
    pattern: (b, m) => `Una auténtica linterna LED en el lateral de tu reloj: la genialidad del ${b} ${m}`,
    category: "gadget",
    angleLabel: "Linterna LED lateral",
    targetAudience: "Entusiastas de herramientas EDC",
  },
  {
    pattern: (b, m) => `El unboxing definitivo del smartwatch más indestructible del año: ${b} ${m}`,
    category: "gadget",
    angleLabel: "Unboxing de impacto",
    targetAudience: "Tech reviewers de TikTok",
  },
  {
    pattern: (b, m) => `Pantalla HD táctil de 1.46 pulgadas con fluidez absoluta en el nuevo ${b} ${m}`,
    category: "gadget",
    angleLabel: "Display táctil 1.46 HD",
    targetAudience: "Fanáticos de la tecnología",
  },
  {
    pattern: (b, m) => `Elegancia plateada para la oficina y resistencia blindada para la montaña: ${b} ${m}`,
    category: "gadget",
    angleLabel: "Dualidad Urbano & Outdoor",
    targetAudience: "Estilo ejecutivo y aventurero",
  },
  {
    pattern: (b, m) => `Siente el peso y la solidez del metal aeroespacial en tu muñeca con ${b} ${m}`,
    category: "gadget",
    angleLabel: "Tacto y acabados de lujo",
    targetAudience: "Coleccionistas de relojes",
  },

  // 4. Smart Tools & Innovation (Herramienta Inteligente y Linterna)
  {
    pattern: (b, m) => `Pulsa este botón lateral y alumbra todo el bosque: la linterna LED ultra brillante de ${b} ${m}`,
    category: "ai_power",
    angleLabel: "Linterna LED un toque",
    targetAudience: "Exploradores nocturnos",
  },
  {
    pattern: (b, m) => `Tu navaja suiza digital en la muñeca: linterna, 5ATM, llamadas y 800mAh en ${b} ${m}`,
    category: "ai_power",
    angleLabel: "Herramienta total EDC",
    targetAudience: "Supervivencia y camping",
  },
  {
    pattern: (b, m) => `Algoritmo inteligente de salud y control del sueño continuo integrado en ${b} ${m}`,
    category: "ai_power",
    angleLabel: "Algoritmo biométrico",
    targetAudience: "Monitoreo del descanso",
  },
  {
    pattern: (b, m) => `Asistente de llamadas por Bluetooth con cancelación de ruido en el nuevo ${b} ${m}`,
    category: "ai_power",
    angleLabel: "Llamadas manos libres",
    targetAudience: "Conductores y ciclistas",
  },
  {
    pattern: (b, m) => `Alerta instantánea de frecuencia cardíaca y SpO2 durante entrenamientos intensos con ${b} ${m}`,
    category: "ai_power",
    angleLabel: "Seguridad deportiva",
    targetAudience: "Atletas de alto rendimiento",
  },

  // 5. Secret Hack & Discovery (Descubrimiento y Curiosidad)
  {
    pattern: (b, m) => `El secreto que las marcas caras no quieren que descubras: el todoterreno ${b} ${m}`,
    category: "secret_hack",
    angleLabel: "Secreto desenmascarado",
    targetAudience: "Buscadores de ofertas",
  },
  {
    pattern: (b, m) => `Por qué los guías de montaña están cambiando su reloj por este ${b} ${m}`,
    category: "secret_hack",
    angleLabel: "Recomendación de expertos",
    targetAudience: "Comunidad de senderismo",
  },
  {
    pattern: (b, m) => `El reloj táctico con linterna LED que se está haciendo viral en TikTok: ${b} ${m}`,
    category: "secret_hack",
    angleLabel: "Tendencia viral TikTok",
    targetAudience: "Jóvenes entusiastas de gadgets",
  },
  {
    pattern: (b, m) => `¿Un reloj con batería de 800 mAh y sumergible 5ATM? Te presento el ${b} ${m}`,
    category: "secret_hack",
    angleLabel: "Fórmula imbatible",
    targetAudience: "Geeks de hardware",
  },
  {
    pattern: (b, m) => `El gadget de supervivencia que no sabías que necesitabas hasta que ves ${b} ${m}`,
    category: "secret_hack",
    angleLabel: "Accesorio imprescindible",
    targetAudience: "Preppers y aventureros",
  },

  // 6. Interactive Question & Comment Hooks (Preguntas e Interacción)
  {
    pattern: (b, m) => `¿Te atreverías a sumergir tu reloj a 50 metros? Probamos los 5ATM del ${b} ${m}`,
    category: "question",
    angleLabel: "Test extremo de agua",
    targetAudience: "Espectadores curiosos",
  },
  {
    pattern: (b, m) => `¿Qué usarías más en el ${b} ${m}: la linterna LED lateral o la batería de 800 mAh?`,
    category: "question",
    angleLabel: "Dilema de funciones",
    targetAudience: "Comunidad interactiva",
  },
  {
    pattern: (b, m) => `¿Cuánto pagarías por un reloj de metal con llamadas Bluetooth y 5ATM como ${b} ${m}?`,
    category: "question",
    angleLabel: "Debate de precio/valor",
    targetAudience: "Compradores en TikTok",
  },
  {
    pattern: (b, m) => `¿Conocías algún smartwatch con linterna LED real integrada como este ${b} ${m}?`,
    category: "question",
    angleLabel: "Asombro por la linterna",
    targetAudience: "Público general",
  },
  {
    pattern: (b, m) => `¿De qué color te gusta más la armadura metálica del ${b} ${m}? Deja tu opinión`,
    category: "question",
    angleLabel: "Elección de diseño",
    targetAudience: "Amantes de la moda táctica",
  },

  // 7. Spec Power & Hardcore Durability (Especificaciones Extremas)
  {
    pattern: (b, m) => `800 mAh + 5ATM Sumergible + Linterna LED: la ficha técnica brutal de ${b} ${m}`,
    category: "spec_power",
    angleLabel: "Ficha técnica brutal",
    targetAudience: "Puristas de especificaciones",
  },
  {
    pattern: (b, m) => `50 metros bajo el agua sin inmutarse: la resistencia 5ATM certificada de ${b} ${m}`,
    category: "spec_power",
    angleLabel: "Prueba 5ATM 50 metros",
    targetAudience: "Buceadores y nadadores",
  },
  {
    pattern: (b, m) => `Pantalla táctil HD de 1.46 pulgadas protegida por bisel de metal sólido en ${b} ${m}`,
    category: "spec_power",
    angleLabel: "1.46 HD ultra resistente",
    targetAudience: "Usuarios exigentes",
  },
  {
    pattern: (b, m) => `Más de 100 deportes con sensores de pulso, SpO2 y control calórico en ${b} ${m}`,
    category: "spec_power",
    angleLabel: "Métricas deportivas PRO",
    targetAudience: "Gimnasio y crossfit",
  },
  {
    pattern: (b, m) => `Llamadas Bluetooth de alta fidelidad y altavoz potente para exteriores en ${b} ${m}`,
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
    category: "pain_point",
    angleLabel: "Nie wieder täglich laden",
    targetAudience: "Akku-Genervte Nutzer",
  },
  {
    pattern: (b, m) => `Angst vor Wasserschäden beim Schwimmen? Die ${b} ${m} hält echten 5ATM Tauchdruck stand`,
    category: "pain_point",
    angleLabel: "Echter 5ATM Wasserschutz",
    targetAudience: "Schwimmer & Outdoor-Fans",
  },
  {
    pattern: (b, m) => `Warum 600€ für eine Outdoor-Uhr ausgeben? Die ${b} ${m} bietet Top-Qualität zum fairen Preis`,
    category: "pain_point",
    angleLabel: "Preis-Leistungs-Schock",
    targetAudience: "Smarte Sparer",
  },
  {
    pattern: (b, m) => `Im Dunkeln ohne Licht unterwegs? Die ${b} ${m} hat eine extrem helle LED-Taschenlampe am Handgelenk`,
    category: "pain_point",
    angleLabel: "Integrierte LED-Lampe",
    targetAudience: "Camper & Nachtwanderer",
  },
  {
    pattern: (b, m) => `Kratzer und Dellen nach der ersten Wanderung? Die ${b} ${m} besitzt ein massives Metallgehäuse`,
    category: "pain_point",
    angleLabel: "Unzerstörbares Metall",
    targetAudience: "Handwerker & Abenteurer",
  },
  {
    pattern: (b, m) => `Winzige Displays, die man in der Sonne nicht sieht? Das 1,46" HD-Touchdisplay der ${b} ${m} überzeugt`,
    category: "pain_point",
    angleLabel: "1,46 Zoll HD Ablesbarkeit",
    targetAudience: "Sportler & Outdoor-Aktive",
  },

  // 2. Efficiency & Value (800mAh Akku & Bluetooth-Anrufe)
  {
    pattern: (b, m) => `Gigantischer 800 mAh Akku: Die ${b} ${m} übersteht wochenlange Touren ohne Steckdose`,
    category: "efficiency",
    angleLabel: "800mAh Extrem-Laufzeit",
    targetAudience: "Trekking & Fernwanderer",
  },
  {
    pattern: (b, m) => `Kristallklare HD-Bluetooth-Anrufe direkt über die Uhr führen mit der ${b} ${m}`,
    category: "efficiency",
    angleLabel: "HD-Bluetooth-Telefonie",
    targetAudience: "Aktive Macher",
  },
  {
    pattern: (b, m) => `Über 100 professionelle Sportmodi mit präzisen Vitaldaten in der neuen ${b} ${m}`,
    category: "efficiency",
    angleLabel: "100+ Sportmodi Tracker",
    targetAudience: "Fitness & Ausdauersportler",
  },
  {
    pattern: (b, m) => `Duschen, Schwimmen, Extremwetter: Die ${b} ${m} mit 5ATM Zertifizierung macht alles mit`,
    category: "efficiency",
    angleLabel: "5ATM Allwetter-Fähig",
    targetAudience: "Wassersportler",
  },
  {
    pattern: (b, m) => `24/7 Herzfrequenz-, Blutsauerstoff- (SpO2) und Schlafüberwachung mit der ${b} ${m}`,
    category: "efficiency",
    angleLabel: "24h Rundum-Gesundheit",
    targetAudience: "Gesundheitsbewusste",
  },
  {
    pattern: (b, m) => `Musiksteuerung, Benachrichtigungen und Sofort-Licht in einer Uhr: ${b} ${m}`,
    category: "efficiency",
    angleLabel: "Alltags-Effizienz",
    targetAudience: "Technik-Begeisterte",
  },

  // 3. Hardware & Metal Craft (Silber-Metall & LED-Licht)
  {
    pattern: (b, m) => `Massives silbernes Metallgehäuse trifft auf 1,46" HD-Touchscreen: Die ${b} ${m}`,
    category: "gadget",
    angleLabel: "Robustes Silber-Metall",
    targetAudience: "Männer mit Stil & Outdoor-Herz",
  },
  {
    pattern: (b, m) => `Ein Knopfdruck und die Umgebung wird taghell: Die LED-Taschenlampe der ${b} ${m}`,
    category: "gadget",
    angleLabel: "Integrierte Power-LED",
    targetAudience: "EDC- & Gadget-Liebhaber",
  },
  {
    pattern: (b, m) => `Das Unboxing der stabilsten Smartwatch des Jahres: ${b} ${m} im Härtetest`,
    category: "gadget",
    angleLabel: "Härtetest & Unboxing",
    targetAudience: "TikTok Tech-Community",
  },
  {
    pattern: (b, m) => `Brillantes 1,46 Zoll HD Display mit butterweicher Touch-Bedienung: ${b} ${m}`,
    category: "gadget",
    angleLabel: "1,46 Zoll HD Brillanz",
    targetAudience: "Display-Puristen",
  },
  {
    pattern: (b, m) => `Elegant im Meeting, unbezwingbar in den Bergen: Die edle ${b} ${m} Smartwatch`,
    category: "gadget",
    angleLabel: "Business meets Outdoor",
    targetAudience: "Berufstätige Outdoor-Fans",
  },

  // 4. Smart Tools & Innovation (Werkzeug & EDC)
  {
    pattern: (b, m) => `Das ultimative Survival-Tool am Handgelenk: LED-Lampe, 5ATM und 800 mAh in der ${b} ${m}`,
    category: "ai_power",
    angleLabel: "Survival-Werkzeug",
    targetAudience: "Prepper & Abenteurer",
  },
  {
    pattern: (b, m) => `Präzise Biometrie-Sensoren für Puls und Blutsauerstoff rund um die Uhr mit ${b} ${m}`,
    category: "ai_power",
    angleLabel: "Smarte Sensorik",
    targetAudience: "Sport-Tracking",
  },
  {
    pattern: (b, m) => `Verpasse keinen Anruf mehr beim Radfahren oder Klettern dank Bluetooth 5.3 in der ${b} ${m}`,
    category: "ai_power",
    angleLabel: "Freisprechfunktion",
    targetAudience: "Biker & Kletterer",
  },
  {
    pattern: (b, m) => `Intelligente Schlafanalyse und Erholungs-Score für maximale Leistung mit ${b} ${m}`,
    category: "ai_power",
    angleLabel: "Schlaf- und Erholungs-Guide",
    targetAudience: "Fitness-Orientierte",
  },

  // 5. Secret Hack & Curiosity (Geheimtipp & Entdeckung)
  {
    pattern: (b, m) => `Der echte Geheimtipp unter Outdoor-Smartwatches: Warum alle über die ${b} ${m} sprechen`,
    category: "secret_hack",
    angleLabel: "Viraler Geheimtipp",
    targetAudience: "TikTok Community",
  },
  {
    pattern: (b, m) => `Warum Bergführer und Handwerker jetzt auf die ${b} ${m} schwören`,
    category: "secret_hack",
    angleLabel: "Profis empfehlen",
    targetAudience: "Outdoor-Community",
  },
  {
    pattern: (b, m) => `Eine Smartwatch mit echter LED-Taschenlampe und 800 mAh? Das ist die ${b} ${m}`,
    category: "secret_hack",
    angleLabel: "Einzigartige Kombination",
    targetAudience: "Gadget-Sucher",
  },
  {
    pattern: (b, m) => `Das unverwüstliche Technik-Highlight: So stark ist die ${b} ${m} wirklich`,
    category: "secret_hack",
    angleLabel: "Härtetest-Enthüllung",
    targetAudience: "Qualitätskäufer",
  },

  // 6. Interactive Questions & Community (Fragen & Kommentare)
  {
    pattern: (b, m) => `Würdest du diese Uhr bei 50 Metern Tauchtiefe tragen? Wir testen die 5ATM der ${b} ${m}!`,
    category: "question",
    angleLabel: "Tauch-Härtetest Frage",
    targetAudience: "Neugierige Zuschauer",
  },
  {
    pattern: (b, m) => `Was findest du genialer an der ${b} ${m}: Den 800 mAh Riesenakku oder die LED-Taschenlampe?`,
    category: "question",
    angleLabel: "Feature-Duell",
    targetAudience: "Kommentar-Freudige",
  },
  {
    pattern: (b, m) => `Wie viel würdest du für eine massive Metall-Smartwatch mit 5ATM wie die ${b} ${m} schätzen?`,
    category: "question",
    angleLabel: "Preisschätzungs-Spiel",
    targetAudience: "Kaufinteressenten",
  },
  {
    pattern: (b, m) => `Hattest du jemals eine Smartwatch mit integrierter LED-Taschenlampe wie die ${b} ${m}?`,
    category: "question",
    angleLabel: "Erfahrungs-Frage",
    targetAudience: "Allgemeines Publikum",
  },

  // 7. Spec Power & Performance (Technische Höchstwerte)
  {
    pattern: (b, m) => `800 mAh Akku + 5ATM Wasserschutz + LED-Lampe: Das Datenblatt der ${b} ${m} begeistert`,
    category: "spec_power",
    angleLabel: "Datenblatt-Gigant",
    targetAudience: "Spec-Liebhaber",
  },
  {
    pattern: (b, m) => `50 Meter wasserdicht nach 5ATM Standard: Die ${b} ${m} kennt keine Grenzen`,
    category: "spec_power",
    angleLabel: "Zertifiziert 5ATM",
    targetAudience: "Taucher & Wassersportler",
  },
  {
    pattern: (b, m) => `Massiver Metallrahmen schützt das 1,46" HD-Touchdisplay der ${b} ${m} vor jedem Stoß`,
    category: "spec_power",
    angleLabel: "1,46 HD Panzerschutz",
    targetAudience: "Hardcore-Nutzer",
  },
  {
    pattern: (b, m) => `100+ Sportmodi mit präzisem Puls- und Kalorientracking in der ${b} ${m}`,
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

  const results: GeneratedTitle[] = [];
  const totalNeeded = 50;

  // Modifiers and hooks
  const spanishModifiers = [
    "¡Novedad absoluta!", "¡Brutal!", "¡Impresionante!", "¡Prueba extrema!",
    "¡Recomendado!", "¡Top ventas!", "¡El definitivo!", "¡Ojo a esto!",
    "¡No te lo pierdas!", "¡100% resistente!"
  ];

  const germanModifiers = [
    "Neuheit!", "Extrem!", "Beeindruckend!", "Härtetest bestanden!",
    "Empfehlung!", "Bestseller!", "Der Allrounder!", "Achtung!",
    "Must-Have!", "100% Unzerstörbar!"
  ];

  const modifiers = isGerman ? germanModifiers : spanishModifiers;

  for (let i = 0; i < totalNeeded; i++) {
    const template = available[i % available.length];
    let hook = template.pattern(brand, model, customKeyword);

    // Apply variation if wrapping around
    if (i >= available.length) {
      const mod = modifiers[i % modifiers.length];
      hook = `${mod} ${hook}`;
    }

    if (customKeyword && customKeyword.trim() && !hook.includes(customKeyword.trim())) {
      if (isGerman) {
        hook = `${hook} (${customKeyword.trim()})`;
      } else {
        hook = `${hook} [${customKeyword.trim()}]`;
      }
    }

    const fullTitle = `${hook} ${activeTags}`;

    results.push({
      id: `kt80-${language}-${Date.now()}-${i + 1}`,
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
    });
  }

  return results;
}
