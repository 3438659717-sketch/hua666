import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const REC10_HASHTAGS = "#FOSMET #REC10 #AIレコーダー #ChatGPT #プロモーションの仕事";
const QS40_HASHTAGS = "#FOSMET #QS40 #スマートウォッチ #健康管理者 #ai";
const T20_HASHTAGS = "#FOSMET #T20 #スマートウォッチ #屋外 #スポーツ";
const KT80_SPANISH_HASHTAGS = "#FOSMET #KT80 #reloj inteligente #Relojes para exteriores #herramienta";
const KT80_GERMAN_HASHTAGS = "#FOSMET #KT80 #Smartwatch #Outdoor Smartwatch #Werkzeug";
const G58_SPANISH_HASHTAGS = "#FOSMET #G58 #reloj inteligente #Atuendo #Salud de la mujer";
const G58_GERMAN_HASHTAGS = "#FOSMET #G58 #Smartwatch #Outfit #Frauengesundheit";
const I228_HASHTAGS = "#FOSMET #I228 #Salud de la mujer #Atuendo #reloj inteligente";
const E12_HASHTAGS = "#FOSMET #E12 #Bluetoothヘッドホン #デイリーレコード #AIイヤホン";
const E05_HASHTAGS = "#FOSMET #E05 #スマートグラス #服装 #イヤホン";
const E09_HASHTAGS = "#FOSMET #E09 #スマートグラス #服装 #デイリーレコード";
const G2_HASHTAGS = "#FOSMET #G2 #女性の健康 #スマートウォッチ #服装";
const FOS10_HASHTAGS = "#FOSMET #FOS10 #女性の健康 #スマートウォッチ #ポータブル";
const V18PRO_SPANISH_HASHTAGS = "#DyMona #V18PRO #aspiradora #limpiezahogar #tiktokshop #hogarlimpio";
const V18PRO_GERMAN_HASHTAGS = "#DyMona #V18PRO #staubsauger #haushaltshelfer #putztipps #tiktokshop";
const V17MAX_GERMAN_HASHTAGS = "#DyMona #V17MAX #staubsauger #putztipps #haushaltshelfer #tiktokshop";
const V17MAX_SPANISH_HASHTAGS = "#DyMona #V17MAX #aspiradora #hogargrande #limpiezahogar #tiktokshop #mascotas";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Server-side AI generator endpoint
  app.post("/api/generate-titles", async (req, res) => {
    try {
      const {
        productId = "rec10",
        count = 50,
        category = "all_mixed",
        tone = "viral_hook",
        customKeyword = "",
        customTags = "",
        language = "ja",
        excludeList = [],
      } = req.body;

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({
          error: "GEMINI_API_KEY is not configured in server environment.",
        });
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });

      const isV18pro = productId === "v18pro";
      const isV17max = productId === "v17max";
      const isG2 = productId === "g2";
      const isFos10 = productId === "fos10";
      const isQs40 = productId === "qs40";
      const isT20 = productId === "t20";
      const isKt80 = productId === "kt80";
      const isG58 = productId === "g58";
      const isI228 = productId === "i228";
      const isE12 = productId === "e12";
      const isE05 = productId === "e05";
      const isE09 = productId === "e09";
      const isGerman = (isKt80 || isG58 || isV18pro || isV17max) && (language === "de" || (isV17max && language !== "es"));

      const targetBrand = isV18pro || isV17max ? "DyMona" : "FOSMET";
      const targetModel = isV18pro ? "V18 PRO" : isV17max ? "V17 MAX" : isFos10 ? "FOS10" : isG2 ? "G2" : isG58 ? "G58" : isI228 ? "I228" : isE09 ? "E09" : isE05 ? "E05" : isE12 ? "E12" : isKt80 ? "KT80" : isT20 ? "T20" : isQs40 ? "QS40" : "REC10";

      let defaultHashtags = REC10_HASHTAGS;
      if (isV18pro) {
        defaultHashtags = isGerman ? V18PRO_GERMAN_HASHTAGS : V18PRO_SPANISH_HASHTAGS;
      } else if (isV17max) {
        defaultHashtags = isGerman ? V17MAX_GERMAN_HASHTAGS : V17MAX_SPANISH_HASHTAGS;
      } else if (isFos10) {
        defaultHashtags = FOS10_HASHTAGS;
      } else if (isG2) {
        defaultHashtags = G2_HASHTAGS;
      } else if (isI228) {
        defaultHashtags = I228_HASHTAGS;
      } else if (isG58) {
        defaultHashtags = isGerman ? G58_GERMAN_HASHTAGS : G58_SPANISH_HASHTAGS;
      } else if (isE09) {
        defaultHashtags = E09_HASHTAGS;
      } else if (isE05) {
        defaultHashtags = E05_HASHTAGS;
      } else if (isE12) {
        defaultHashtags = E12_HASHTAGS;
      } else if (isKt80) {
        defaultHashtags = isGerman ? KT80_GERMAN_HASHTAGS : KT80_SPANISH_HASHTAGS;
      } else if (isT20) {
        defaultHashtags = T20_HASHTAGS;
      } else if (isQs40) {
        defaultHashtags = QS40_HASHTAGS;
      }

      const targetHashtags = (typeof customTags === "string" && customTags.trim()) ? customTags.trim() : defaultHashtags;

      let categoryPromptMap: Record<string, string>;
      let systemInstruction: string;
      let userPrompt: string;

      if (isV18pro) {
        if (isGerman) {
          categoryPromptMap = {
            all_mixed: "65cm Klapparm gegen Bücken, grünes Staubsuchlicht 2.0 (135°/300cm), 50 kPa Monster-Saugleistung mit 650W Motor, 1,4kg ultraleicht, 7-fache Filtration (99,99%) und 50min Akkulaufzeit",
            pain_point: "【Schmerzpunkt: Bücken & unsichtbarer Staub】Schluss mit Rückenschmerzen beim Saugen unter Sofa & Bett! Der 65cm Knickarm gleitet mühelos bis ganz nach hinten, ohne dass du dich bücken musst",
            efficiency: "【50 kPa Saugleistung & 650W Brushless-Motor】Saugt Tierhaare, Krümel und Feinstaub in einem einzigen Durchgang auf, bis zu 50 Minuten Laufzeit",
            gadget: "【Grünes Suchlicht 2.0 & LED-Smart-Display】135° Weitwinkel-Grünlicht macht mikroskopisch kleinen Feinstaub auf Hartböden sichtbar, 300cm Weitreiche",
            ai_power: "【7-fach Filtersystem 99,99%】Hocheffiziente 7-stufige Filtration fängt 99,99% aller Partikel bis 0,3 µm ab – saubere Raumluft für Allergiker & Kinder",
            secret_hack: "【0mm Kantenreinigung & 1,4kg Federleicht】Reicht bis auf 0mm an Fußleisten heran, wiegt nur 1,4 kg – müheloses Saugen von Vorhängen & Decken",
            question: "【Community & Engagement】Bückst du dich noch beim Putzen unter Möbeln? Was hältst du vom grünen Licht gegen unsichtbaren Staub?",
            spec_power: "【Technische Daten】650W Motor, 50 kPa Saugleistung, 1,4kg Gewicht, 60 dB leise, 7-in-1 Zubehörset, Wandhalterung mit Ladefunktion",
          };

          const selectedCategoryDesc = categoryPromptMap[category] || categoryPromptMap.all_mixed;

          systemInstruction = `Du bist ein erfahrener deutscher TikTok- und E-Commerce Marketing-Direktor für innovative Haushaltsgeräte.
Erstelle hochkonvertierende deutsche TikTok-Videotitel / Hooks für den Akku-Staubsauger mit Klapparm "DyMona V18 PRO".

【Produktdaten DyMona V18 PRO】:
- Marke: DyMona | Modell: V18 PRO
- 65cm Klapparm: Patentierter Knick-Mechanismus, reinigt mühelos unter Betten und Sofas ohne Bücken
- Saugleistung: 650W bürstenloser Motor mit 50 kPa (50.000 Pa) extremer Zyklonsaugkraft
- Grünes Licht 2.0: 135° Weitwinkel-Grünlicht mit 300cm Reichweite deckt unsichtbaren Feinstaub auf
- Gewicht & Geräusch: Nur 1,4 kg ultraleichtes Handteil, 60 dB flüsterleise
- Filtration: 7-faches Filtersystem filtert 99,99% aller Partikel bis 0,3 Mikrometer
- Akku: Eco 50 Min, Standard 30 Min, Boost 20 Min
- Vielseitigkeit: 7-in-1 Multibürsten, LED-Display, 90° freistehend & Wandhalterung

【Regeln】:
1. Jeder Titel MUSS zwingend "DyMona" und "V18 PRO" natürlich und ansprechend enthalten.
2. Formuliere packende deutsche Hooks (ca. 40-75 Zeichen) mit Fokus auf Klapparm (ohne Bücken), Grünlicht und Saugkraft.
3. Jeder Titel MUSS am Ende EXAKT die folgenden Hashtags enthalten:
   ${targetHashtags}
4. Gib genau ${count} individuelle Titel als JSON-Array aus. Keine Duplikate!
${customKeyword ? `※ Besonderes Keyword zum Einbauen: "${customKeyword}"` : ""}`;

          userPrompt = `Kategorie: ${selectedCategoryDesc}
Tonalität: ${tone}
Aufgabe: Erstelle 50 packende deutsche TikTok-Titel für DyMona V18 PRO mit den Hashtags: ${targetHashtags}`;
        } else {
          categoryPromptMap = {
            all_mixed: "Brazo plegable de 65cm para limpiar bajo muebles sin agacharse, luz verde 2.0 de 135° que revela polvo invisible, succión huracanada de 50 kPa con motor de 650W, diseño ultraligero de 1.4kg y filtración 99.99%",
            pain_point: "【Dolor de Espalda y Polvo Oculto】¿Harto de agacharte para limpiar bajo sofás y camas? ¿Pasas la escoba pero sigue habiendo polvo microscópico? Olvídate del dolor de lumbares con el brazo plegable 65cm",
            efficiency: "【Succión Monstruosa 50 kPa & 650W】Aspira pelos de mascota, polvo fino y migas de una pasada con motor de 650W y hasta 50 minutos de batería",
            gadget: "【Luz Verde 2.0 & Pantalla Digital】Luz LED verde de 135° con 300cm de alcance que hace visible hasta la mota más invisible en pisos y alfombras",
            ai_power: "【Filtración 7 Capas 99.99%】Sistema de 7 etapas que retiene alérgenos de hasta 0.3 micras, aire puro garantizado para hogares con alergias o bebés",
            secret_hack: "【0cm Ajuste a Bordes & 1.4kg Pluma】Limpia esquinas y rodapiés al milímetro con cabezal 0cm y cuerpo de solo 1.4kg que no cansa el brazo",
            question: "【Pregunta y Debate】¿Sabías cuánta suciedad invisible hay debajo de tu cama? ¿Prefieres aspiradora pesada tradicional o brazo plegable ultraligero?",
            spec_power: "【Especificaciones Prémium】Motor 650W, 50 kPa, 1.4kg peso pluma, 60 dB silenciosa, 7 accesorios en 1, soporte de pared con carga",
          };

          const selectedCategoryDesc = categoryPromptMap[category] || categoryPromptMap.all_mixed;

          systemInstruction = `Eres un director de marketing de comercio electrónico y TikTok en español (España y Latinoamérica).
Crea ganchos y títulos virales de alta conversión para la aspiradora inalámbrica inteligente "DyMona V18 PRO".

【Información del producto DyMona V18 PRO】:
- Marca: DyMona | Modelo: V18 PRO
- Brazo plegable: Brazo metálico articulado de 65cm, entra bajo sofás y camas a 0cm sin agacharse ni forzar la espalda
- Potencia: Motor de 650W sin escobillas con 50 kPa de succión ultra potente
- Detección de polvo: Luz verde óptica 2.0 con 135° de gran angular y 300cm de alcance
- Peso y Ruido: Cuerpo ultraligero de solo 1.4 kg, funcionamiento silencioso a 60 dB
- Filtración: 7 etapas de filtración sellada que atrapan el 99.99% de partículas de hasta 0.3 micras
- Batería: Modo Eco 50 min, Modo Normal 30 min, Modo Turbo 20 min
- Versatilidad: 7 en 1 con múltiples cabezales, pantalla digital inteligente, soporte de pared y almacenamiento

【Reglas estrictas】:
1. Cada título DEBE incluir "DyMona" y "V18 PRO" de forma natural y atractiva.
2. Títulos con alto gancho de curiosidad, dolor o beneficio en español (40-75 caracteres).
3. Cada título DEBE terminar con estos hashtags exactos:
   ${targetHashtags}
4. Genera exactamente ${count} títulos únicos en formato de arreglo JSON de strings.
${customKeyword ? `※ Palabra clave obligatoria a incluir: "${customKeyword}"` : ""}`;

          userPrompt = `Categoría: ${selectedCategoryDesc}
Tono: ${tone}
Crea 50 títulos virales para DyMona V18 PRO en español con los hashtags: ${targetHashtags}`;
        }
      } else if (isV17max) {
        if (!isGerman && language === "es") {
          // Spanish for V17 MAX
          categoryPromptMap = {
            all_mixed: "Succión monstruo de 58 kPa con motor de 650W, batería dual para 150 minutos de autonomía en casas de hasta 500m², depósito XXL de 2L, filtración médica HEPA H14 y cepillo en V antienredos de 25.5cm",
            pain_point: "【Hogares Grandes y Casas de 2 Pisos】¿Cansado de quedarte sin batería a mitad de la limpieza? ¿Bolsas pequeñas y pelos atascados en el cepillo? DyMona V17 MAX está diseñada para casas gigantes",
            efficiency: "【58 kPa Potencia Monstruo & 650W】Aspira toda la suciedad incrustada en alfombras gruesas y suelos de una sola pasada con 58.000 Pa de succión",
            gadget: "【Batería Dual 150 Min & 500m²】Limpia chalets enteros, pisos grandes y dúplex sin interrupciones gracias a su doble batería de larga duración",
            ai_power: "【HEPA H14 Médico & Depósito 2L XXL】Filtra el 99.995% de polvo y alérgenos con grado hospitalario H14, depósito gigante de 2 Litros para 3 meses sin vaciar",
            secret_hack: "【Cepillo en V Antienredos 25.5cm】Diseño especial en V que dirige los pelos de mascota y cabellos largos directamente al conducto sin atascarse",
            question: "【Pregunta y Debate TikTok】¿Cuánto tiempo dura la batería de tu aspiradora? ¿Aguantaría tu casa un reto de 150 minutos con 58 kPa?",
            spec_power: "【Especificaciones Tope de Gama】58 kPa / 650W, 150 min batería dual, depósito 2L XXL, HEPA H14, pantalla LED inteligente, 3 modos de recarga",
          };

          const selectedCategoryDesc = categoryPromptMap[category] || categoryPromptMap.all_mixed;

          systemInstruction = `Eres un director de marketing de comercio electrónico y TikTok en español (España y Latinoamérica).
Crea ganchos y títulos virales de alta conversión para la aspiradora inalámbrica de máxima potencia "DyMona V17 MAX".

【Información del producto DyMona V17 MAX】:
- Marca: DyMona | Modelo: V17 MAX
- Succión: 58 kPa (58.000 Pa) succión monstruo con motor brushless de 650W
- Autonomía: Sistema de batería dual con hasta 150 minutos de duración continua, ideal para 500 m²
- Depósito: Capacidad XXL de 2 Litros para vaciar solo cada 3 meses con vaciado limpio en 1 clic
- Cepillo: Cabezal ancho de 25.5 cm con rodillo en V anti-enredos para pelos de perros y gatos
- Filtración: Filtro médico HEPA H14 (eficiencia del 99.995% para personas alérgicas)
- Pantalla y carga: Pantalla digital inteligente, autosoporte a 90°, 3 formas de recarga rápida

【Reglas estrictas】:
1. Cada título DEBE incluir "DyMona" y "V17 MAX" de forma natural y atractiva.
2. Ganchos virales en español (40-75 caracteres) enfocados en potencia brutal, casas grandes y pelos de mascotas.
3. Cada título DEBE terminar con estos hashtags exactos:
   ${targetHashtags}
4. Genera exactamente ${count} títulos únicos en formato JSON.
${customKeyword ? `※ Palabra clave obligatoria a incluir: "${customKeyword}"` : ""}`;

          userPrompt = `Categoría: ${selectedCategoryDesc}
Tono: ${tone}
Crea 50 títulos virales para DyMona V17 MAX en español con los hashtags: ${targetHashtags}`;
        } else {
          categoryPromptMap = {
            all_mixed: "Monster-Saugleistung 58 kPa mit 650W Motor, Doppel-Akkusystem für 150 Minuten Laufzeit für bis zu 500m² Wohnfläche, 2L XXL-Staubbehälter, medizinischer HEPA H14 Filter und 25.5cm Anti-Haarwickel-V-Bürste",
            pain_point: "【Frust mit schwachen Akkusaugern】Akku nach 15 Minuten leer? Staubbehälter ständig voll? Tierhaare verheddert in der Bürste? Der DyMona V17 MAX löst alle Probleme großer Häuser",
            efficiency: "【58 kPa Monster-Power & 650W Motor】Beseitigt tiefsitzenden Schmutz aus Teppichen und Ritzen in einem einzigen Zug mit 58.000 Pa extremer Saugkraft",
            gadget: "【Doppel-Akku 150 Min & 500m² Abdeckung】Reicht für riesige Villen, Einfamilienhäuser und mehrstöckige Wohnungen ohne Ladepause dank Wechselakkus",
            ai_power: "【HEPA H14 Filtration & 2L XXL-Behälter】Medizinische H14 Filtration filtert 99.995% aller Feinstaubpartikel und Allergene, 2L Riesenvolumen",
            secret_hack: "【25.5cm Anti-Tangle V-Walze】Keine verhedderten langen Haare oder Tierhaare mehr dank V-förmiger Spezialwalzenkonstruktion",
            question: "【Frage & Community-Engagement】Wie lange hält dein aktueller Staubsauger durch? Reichen dir 150 Minuten für das ganze Haus?",
            spec_power: "【Fakten & Spezifikationen】58 kPa / 650W, 150 Min Dual-Akku, 2L XXL Behälter, HEPA H14, LED-Bodenleuchte, Wandhalterung",
          };

          const selectedCategoryDesc = categoryPromptMap[category] || categoryPromptMap.all_mixed;

          systemInstruction = `Du bist ein erfahrener deutscher TikTok- und E-Commerce Marketing-Direktor für Premium-Haushaltsgeräte.
Erstelle hochkonvertierende deutsche TikTok-Videotitel / Hooks für den Flaggschiff-Akku-Staubsauger "DyMona V17 MAX".

【Produktdaten DyMona V17 MAX】:
- Marke: DyMona | Modell: V17 MAX
- Saugleistung: 58 kPa (58.000 Pa) Monster-Saugleistung mit 650W bürstenlosem Hochleistungsmotor
- Ausdauer: Dual-Akkusystem mit bis zu 150 Minuten Gesamtlaufzeit, ideal für bis zu 500 m² Wohnfläche
- Staubbehälter: 2 Liter XXL-Kapazität für monatelanges Saugen ohne Entleeren
- Bürstenkopf: 25,5 cm breite V-förmige Anti-Tangle-Bürste gegen verhedderte Tier- und Menschenhaare
- Filterung: Medizinischer HEPA H14 Filter (99,995% Filtrationseffizienz für Allergiker)
- Display & Zubehör: Großes HD-Smart-Display, LED-Frontbeleuchtung, Multidüsen-Set

【Regeln】:
1. Jeder Titel MUSS zwingend "DyMona" und "V17 MAX" natürlich und ansprechend enthalten.
2. Formuliere packende deutsche Hooks (ca. 40-75 Zeichen) mit Fokus auf enorme Saugkraft, Akkulaufzeit und Hausputz.
3. Jeder Titel MUSS am Ende EXAKT die folgenden Hashtags enthalten:
   ${targetHashtags}
4. Gib genau ${count} individuelle Titel als JSON-Array aus. Keine Duplikate!
${customKeyword ? `※ Besonderes Keyword zum Einbauen: "${customKeyword}"` : ""}`;

          userPrompt = `Kategorie: ${selectedCategoryDesc}
Tonalität: ${tone}
Aufgabe: Erstelle 50 packende deutsche TikTok-Titel für DyMona V17 MAX mit den Hashtags: ${targetHashtags}`;
        }
      } else if (isG58) {
        if (isGerman) {
          categoryPromptMap = {
            all_mixed: "Modisches Damen-Design, 1,27\" 390x390 HD Touchscreen mit 98% Screen-to-Body, Milanaise- und Silikon-Doppelarmband für jedes Outfit, präzises Frauengesundheits- & Zyklus-Tracking, Bluetooth 5.3 HD Telefonie, 120+ Sportmodi und IP68 wasserdicht",
            pain_point: "【Schmerzpunkte & Styling】Genug von klobigen Sportuhren, die nicht zum Outfit passen, Zyklus vergessen, Handy in der Handtasche überhört, teure Modemarken ohne smarte Funktionen",
            efficiency: "【Frauengesundheit & Bluetooth 5.3】Menstruationszyklus- & Eisprung-Tracking, freihändiges Telefonieren beim Schminken/Arbeiten, 120+ Sportarten, 24/7 Vitalwerte (SpO2, Puls, Blutdruck, Schlaf)",
            gadget: "【Milanaise- & Silikonband ✕ 1,27\" HD Display】Edles Edelstahl-Milanaiseband + weiches Silikonband, 390×390 HD-Auflösung, gehärtetes Glas mit Anti-Fingerprint, florale Zifferblätter",
            ai_power: "【Sprachassistent & Schlafanalyse】Doppelklick-Sprachassistent, fundierte Schlafanalyse 21:30-12:00 Uhr, geführte Atemübungen gegen Alltagsstress, SOS-Notruffunktion",
            secret_hack: "【Styling-Geheimtipp & OOTD】Wie Stylistinnen das Roségold-Finish mit Schmuck kombinieren, 5-Sekunden-Armbandwechsel für Business und Gym, Foto-Fernauslöser per Armschütteln",
            question: "【Fragen & Interaktion】Ist das die schönste Damen-Smartwatch 2026? Welches Armband gefällt dir besser: Milanaise oder Silikon?",
            spec_power: "【Fakten & Spezifikationen】1,27\" 390x390 HD, Bluetooth 5.3 Anrufe, 100 Kontakte, 120+ Sportmodi, IP68 wasserdicht, GloryFit App",
          };

          const selectedCategoryDesc = categoryPromptMap[category] || categoryPromptMap.all_mixed;

          systemInstruction = `Du bist ein professioneller deutscher TikTok & E-Commerce Marketing-Direktor für Damenmode und Smart Wearables.
Erstelle hochkonvertierende deutsche TikTok-Videotitel / Hooks für die neue modische Damen-Smartwatch "FOSMET G58".

【Produktdaten FOSMET G58】:
- Marke: FOSMET | Modell: G58
- Zielgruppe & Positionierung: Elegante Damen-Smartwatch, verbindet modisches Schmuckdesign mit intelligenter Frauengesundheit
- Display: 1,27 Zoll HD-Touchscreen, 390×390 hohe Auflösung, ca. 98% Screen-to-Body-Verhältnis, gehärtetes Glas mit Anti-Fingerprint-Beschichtung
- Doppelarmband: Milanaise-Edelstahlarmband + weiches Silikonarmband im Lieferumfang für schnellen Style-Wechsel (Business vs. Sport)
- Frauengesundheits-Suite: Menstruationszyklus-Management, Eisprung- und fruchtbare Tage-Erfassung, Zyklus-Erinnerungen, Schwangerschaftsaufzeichnung
- 24/7 Gesundheitsüberwachung: Kontinuierliche Herzfrequenz, Blutsauerstoff (SpO2), Blutdruck, detaillierte Schlafanalyse (21:30 bis 12:00 Uhr), Stress, Emotionen, Atemtraining
- Sport & Fitness: Über 120 Sportmodi (Schritte, Distanz, Kalorien, Laufen, Yoga, Fitness)
- Smarte Telefonie: Bluetooth 5.3 HD-Telefonate direkt am Handgelenk, Lautsprecher, 100 Telefonbuchkontakte, Ziffernblock
- Smart Tools: Doppelklick-Sprachassistent, SOS-Notruf (langer Tastendruck), Foto-Fernauslöser per Handgelenkschütteln, Musiksteuerung, Wetter, IP68 wasserdicht, GloryFit App

【Regeln】:
1. Jeder Titel MUSS zwingend "FOSMET" und "G58" natürlich und ansprechend enthalten.
2. Formuliere packende, virale deutsche TikTok-Hooks (ca. 40-75 Zeichen), die Frauen sofort ansprechen (Stil, Gesundheit, Komfort).
3. Jeder Titel MUSS am Ende EXAKT die folgenden Hashtags enthalten:
   ${targetHashtags}
4. Gib genau ${count} individuelle Titel als JSON-Array aus. Keine Duplikate!
${customKeyword ? `※ Besonderes Keyword zum Einbauen: "${customKeyword}"` : ""}`;

          userPrompt = `Kategorie: ${selectedCategoryDesc}
Tonalität: ${tone}
Aufgabe: Erstelle 50 packende, abwechslungsreiche deutsche TikTok-Titel für FOSMET G58 mit den Hashtags: ${targetHashtags}`;
        } else {
          // Spanish (Default for G58)
          categoryPromptMap = {
            all_mixed: "Diseño elegante y femenino, pantalla táctil HD de 1.27\" 390×390 con 98% de ratio, doble correa milanesa y silicona para cualquier atuendo, gestión completa del ciclo menstrual y salud de la mujer, llamadas Bluetooth 5.3, 120+ deportes e impermeabilidad IP68",
            pain_point: "【Dolor y Estilo】Cansada de relojes inteligentes toscos que arruinan tu outfit, olvidos del ciclo menstrual, no escuchar llamadas en el bolso, gastar fortunas en marcas sin funciones",
            efficiency: "【Salud de la Mujer y Llamadas HD】Gestión de periodo y ovulación, responder llamadas y WhatsApps mientras te arreglas o entrenas, 120+ deportes, salud biométrica 24/7 (SpO2, ritmo cardíaco, presión y sueño)",
            gadget: "【Doble Correa Milanesa/Silicona y Pantalla HD 1.27\"】Malla milanesa elegante + silicona suave, pantalla táctil 390×390 con cristal antihuellas, diseño ultraligero y esferas personalizables",
            ai_power: "【Asistente de Voz y Monitoreo Inteligente】Doble clic para asistente de voz, análisis de sueño 21:30 a 12:00, respiración guiada antiestrés, botón SOS de seguridad",
            secret_hack: "【Secreto de Moda y Fotografía】El hack de estilistas para combinar joyas con reloj, disparo de fotos a distancia agitando la muñeca, cambio de correa en 5 segundos sin herramientas",
            question: "【Pregunta y Debate】¿Es este el smartwatch para mujer más bonito del año? ¿Prefieres correa milanesa para salir o silicona para entrenar?",
            spec_power: "【Especificaciones Prémium】Pantalla 1.27\" 390x390 HD, Bluetooth 5.3 llamadas, 100 contactos, 120+ deportes, IP68 impermeable, GloryFit App",
          };

          const selectedCategoryDesc = categoryPromptMap[category] || categoryPromptMap.all_mixed;

          systemInstruction = `Eres un estratega experto en marketing de contenidos y creador de títulos virales para TikTok especializado en moda femenina, estilo de vida y tecnología.
Crea títulos de alto impacto y ganchos (hooks) en español para el nuevo reloj inteligente femenino "FOSMET G58".

【Información del producto FOSMET G58】:
- Marca: FOSMET | Modelo: G58
- Posicionamiento: Reloj inteligente de moda diseñado exclusivamente para mujeres, combinando elegancia femenina, salud y vida inteligente
- Pantalla: Táctil HD de 1.27 pulgadas, resolución 390×390, ratio pantalla-cuerpo del 98%, cristal de alta dureza con revestimiento antihuellas
- Correas intercambiables: Incluye 2 correas (Malla Milanesa de acero inoxidable + Silicona suave) para adaptarse a cualquier atuendo (Atuendo / OOTD)
- Salud de la mujer: Gestión integral del ciclo menstrual, registro de periodo, días fértiles, ovulación, recordatorios y seguimiento de embarazo
- Salud 24/7: Monitoreo continuo de ritmo cardíaco, oxígeno SpO2, presión arterial, análisis de sueño profundo/ligero (21:30 a 12:00), estrés y ejercicios de respiración
- Deportes: 120+ modos deportivos (pasos, distancia, calorías, yoga, running, fitness)
- Llamadas y conectividad: Bluetooth 5.3 con altavoz integrado, marcación directa, teclado numérico, almacenamiento de 100 contactos favoritos
- Funciones prácticas: Asistente de voz con doble clic en la corona, botón de emergencia SOS (pulsación larga), control remoto de fotos del móvil (agitar o tocar), música, tiempo, IP68 impermeable, GloryFit App

【Reglas estrictas】:
1. Cada título DEBE incluir obligatoriamente "FOSMET" y "G58" de forma natural y atractiva.
2. Crea ganchos breves, dinámicos e irresistibles en español (aprox. 40-75 caracteres antes de los hashtags), orientados a moda, estilo, salud femenina y practicidad diaria.
3. Cada título DEBE terminar obligatoriamente con estos 5 hashtags exactos:
   ${targetHashtags}
4. Devuelve exactamente ${count} títulos en formato JSON sin repeticiones.
${customKeyword ? `※ Palabra clave a destacar: "${customKeyword}"` : ""}`;

          userPrompt = `Categoría: ${selectedCategoryDesc}
Tono: ${tone}
Petición: Genera 50 títulos virales en español para FOSMET G58 en TikTok que terminen en: ${targetHashtags}`;
        }
      } else if (isI228) {
        categoryPromptMap = {
          all_mixed: "Diseño elegante y femenino, pantalla táctil HD de 1.27\" 390×390 con 98% de ratio de pantalla, doble correa milanesa y silicona para cualquier atuendo, gestión completa del ciclo menstrual y salud de la mujer, llamadas Bluetooth 5.3, 120+ deportes e impermeabilidad IP68",
          pain_point: "【Dolor y Estilo】Cansada de relojes inteligentes toscos que arruinan tu atuendo, olvidos del ciclo menstrual y ovulación, no escuchar llamadas en el bolso, gastar fortunas en marcas sin funciones",
          efficiency: "【Salud de la Mujer y Llamadas HD】Gestión de periodo y ovulación, responder llamadas y mensajes en tu muñeca con Bluetooth 5.3, 120+ deportes, salud biométrica 24/7 (SpO2, ritmo cardíaco y fases del sueño)",
          gadget: "【Doble Correa Milanesa/Silicona y Pantalla HD 1.27\"】Malla milanesa elegante + silicona suave, pantalla táctil 390×390 con 98% de pantalla y cristal antihuellas, diseño ultraligero y esferas personalizables",
          ai_power: "【Asistente de Voz y Monitoreo Inteligente】Asistente de voz en la muñeca, 100 contactos y teclado numérico, análisis de sueño profundo/ligero, control de música y disparo de fotos remoto",
          secret_hack: "【Secreto de Moda y Estilo】El secreto de las chicas con más estilo para combinar accesorios y atuendos, cambio de correa en segundos, disparo de selfies a distancia agitando la muñeca",
          question: "【Pregunta y Debate】¿Es este el smartwatch para mujer más bonito y completo de 2026? ¿Prefieres correa milanesa o de silicona para tu outfit?",
          spec_power: "【Especificaciones Prémium】Pantalla 1.27\" 390×390 HD, Bluetooth 5.3 llamadas, 100 contactos, 120+ modos deportivos, IP68 impermeable, cristal resistente antihuellas",
        };

        const selectedCategoryDesc = categoryPromptMap[category] || categoryPromptMap.all_mixed;

        systemInstruction = `Eres un estratega experto en marketing de contenidos y creador de títulos virales para TikTok especializado en moda femenina, estilo de vida y tecnología en español.
Crea títulos de alto impacto y ganchos (hooks) en español para el nuevo reloj inteligente para mujer "FOSMET I228".

【Datos del Producto FOSMET I228】:
- Marca: FOSMET | Modelo: I228
- Posicionamiento: Reloj inteligente de moda diseñado exclusivamente para mujeres. Integra elegancia femenina, gestión de salud y funciones inteligentes de vida diaria.
- Pantalla y Diseño: Pantalla táctil HD de 1.27 pulgadas, resolución 390×390, ratio de pantalla de aproximadamente 98%, cristal de alta dureza con revestimiento antihuellas. Aspecto ligero y elegante.
- Doble Correa Intercambiable: Incluye correa milanesa de acero inoxidable y correa de silicona suave para intercambiar libremente según cada atuendo u ocasión (oficina, fiesta, deporte).
- Salud Femenina Integral: Gestión del ciclo fisiológico de la mujer (registro de menstruación, período de ovulación, período seguro, recordatorios de ciclo menstrual y registro de embarazo).
- Monitoreo de Salud 24/7: Frecuencia cardíaca continua, oxígeno en sangre (SpO₂), análisis científico del sueño (sueño profundo, sueño ligero, tiempo de vigilia).
- Deportes y Fitness: Más de 120 modos de entrenamiento (pasos, distancia, calorías quemadas para running, yoga, gimnasio, etc.).
- Llamadas y Conectividad: Bluetooth 5.3 llamadas nítidas en la muñeca, altavoz integrado, almacenamiento de 100 contactos, teclado numérico de marcación y asistente de voz.
- Funciones Prácticas Diarias: Pronóstico del tiempo, control de reproducción de música, alarma, cronómetro, disparador remoto de cámara del móvil, buscar teléfono, resistencia al agua IP68.

【Reglas de Generación (Estricto Cumplimiento)】:
1. Cada título DEBE incluir de forma natural y atractiva la marca "FOSMET" y el modelo "I228".
2. Redacta ganchos (hooks) virales en español con alta tasa de clics y retención (entre 40 y 85 caracteres) que conecten de inmediato con el público femenino (moda, salud, estética, practicidad).
3. Cada título DEBE terminar OBLIGATORIAMENTE con estos 5 hashtags exactos separados por espacios:
   ${targetHashtags}
4. Genera exactamente ${count} títulos únicos en formato de arreglo JSON. ¡Sin duplicados!
${customKeyword ? `※ Palabra clave especial para incluir en algunos títulos: "${customKeyword}"` : ""}`;

        userPrompt = `Categoría: ${selectedCategoryDesc}
Tono: ${tone}
Solicitud: Crea ${count} títulos virales en español para TikTok para FOSMET I228 que incluyan "FOSMET", "I228" y terminen con los hashtags: ${targetHashtags}`;
      } else if (isKt80) {
        if (isGerman) {
          categoryPromptMap = {
            all_mixed: "800 mAh Riesenakku-Laufzeit, 5ATM Tauch-Wasserdichtigkeit, extrem helle integrierte LED-Taschenlampe per Knopfdruck, massives silbernes Metallgehäuse mit 1,46 Zoll HD-Touchscreen und 100+ Sportmodi im perfekten Mix",
            pain_point: "【Schmerzpunkte & Schock】Tägliches Laden nervt, Angst vor Wasserschaden beim Duschen/Schwimmen, teure 600€ Outdoor-Uhren entlarvt, ohne Licht im Dunkeln gestrandet",
            efficiency: "【800mAh & Bluetooth-Anrufe】Wochenlange Akkulaufzeit ohne Steckdose, HD-Telefonate direkt am Handgelenk, 100+ Sportmodi, 24/7 Vitaldaten",
            gadget: "【Silber-Metall & LED-Licht】Massives silbernes Metallgehäuse, 1,46\" HD Display, seitliche LED-Taschenlampe für Nacht und Outdoor, unzerstörbares Design",
            ai_power: "【Smart Tool & EDC】Echte LED-Powerlampe per Tastendruck, Schweizer Taschenmesser am Handgelenk, präzise SpO2- und Pulssensoren",
            secret_hack: "【Geheimtipp & Enthüllung】Warum Handwerker und Outdoor-Profis diese Uhr feiern, Top-Technik ohne Marken-Aufpreis",
            question: "【Fragen & Interaktion】Würdest du mit dieser Uhr 50m tauchen? Was ist cooler: 800 mAh Akku oder die LED-Taschenlampe?",
            spec_power: "【Monster-Specs】800 mAh Akku, 5ATM wasserdicht, 1,46\" HD-Screen, Bluetooth-Anrufe, 100+ Sportarten",
          };

          const selectedCategoryDesc = categoryPromptMap[category] || categoryPromptMap.all_mixed;

          systemInstruction = `Du bist ein professioneller deutscher TikTok & E-Commerce Marketing-Direktor.
Erstelle hochkonvertierende deutsche TikTok-Videotitel / Hooks für die neue Outdoor- & Allround-Smartwatch "FOSMET KT80".

【Produktdaten FOSMET KT80】:
- Marke: FOSMET | Modell: KT80
- Gehäuse: Massives, extrem robustes silbernes Metallgehäuse
- Display: 1,46 Zoll Ultra-HD-Touchscreen
- Akku: Gigantischer 800 mAh Akku für extreme Akkulaufzeit (wochenlang ohne Laden)
- Wasserdichtigkeit: Echte 5ATM Tauchwasserbeständigkeit (Schwimmen, Duschen, Starkregen)
- Highlight-Tool: Integrierte, extrem helle LED-Taschenlampe an der Gehäuseseite (per Knopfdruck sofort einsatzbereit)
- Kommunikation: Kristallklare HD-Bluetooth-Anrufe (Freisprechen und Wählen direkt über die Uhr)
- Gesundheit & Sport: 24/7 kontinuierliche Herzfrequenz-, SpO2-Blutsauerstoff- und Schlafüberwachung, über 100 Sportmodi

【Regeln】:
1. Jeder Titel MUSS zwingend "FOSMET" und "KT80" natürlich und ansprechend enthalten.
2. Formuliere packende, virale deutsche TikTok-Hooks (ca. 40-75 Zeichen), die sofort Neugier wecken.
3. Jeder Titel MUSS am Ende EXAKT die folgenden Hashtags enthalten:
   ${targetHashtags}
4. Gib genau ${count} individuelle Titel als JSON-Array aus. Keine Duplikate!
${customKeyword ? `※ Besonderes Keyword zum Einbauen: "${customKeyword}"` : ""}`;

          userPrompt = `Kategorie: ${selectedCategoryDesc}
Tonalität: ${tone}
Aufgabe: Erstelle 50 packende, abwechslungsreiche deutsche TikTok-Titel für FOSMET KT80 mit den Hashtags: ${targetHashtags}`;
        } else {
          // Spanish (Default for KT80)
          categoryPromptMap = {
            all_mixed: "Batería bestial de 800 mAh, certificación 5ATM sumergible para buceo/natación, linterna LED ultrabrillante integrada en el lateral, cuerpo de metal plateado macizo con pantalla táctil HD de 1.46 pulgadas y más de 100 deportes",
            pain_point: "【Dolor y Mitos】Cansado de cargar el reloj todos los días, miedo a mojarlo en la ducha o piscina, sobreprecios de marcas caras, quedarse a oscuras en la montaña",
            efficiency: "【800mAh y Llamadas Bluetooth】Batería para semanas de aventura, responder llamadas HD desde la muñeca mientras entrenas, 100+ modos deportivos y salud 24/7",
            gadget: "【Metal Plateado y Linterna LED】Armadura metálica indestructible, pantalla HD de 1.46\", linterna LED lateral de un toque, tacto prémium y táctico",
            ai_power: "【Herramienta Total y Linterna】La navaja suiza digital en tu muñeca, linterna potente para emergencias, algoritmos de pulso y oxígeno SpO2 en tiempo real",
            secret_hack: "【Secreto y Tendencia】El reloj todoterreno viral de TikTok que los guías de montaña recomiendan, calidad de 500€ a precio justo",
            question: "【Pregunta y Debate】¿Te atreverías a sumergirlo 50 metros? ¿Prefieres los 800 mAh o la linterna LED lateral? Deja tu comentario",
            spec_power: "【Ficha Técnica Brutal】800 mAh, 5ATM sumergible, pantalla táctil 1.46\" HD, llamadas Bluetooth, 100+ deportes",
          };

          const selectedCategoryDesc = categoryPromptMap[category] || categoryPromptMap.all_mixed;

          systemInstruction = `Eres un estratega experto en marketing de contenidos y creador de títulos virales para TikTok en España y Latinoamérica.
Crea títulos de alto impacto y ganchos (hooks) en español para el nuevo reloj inteligente todoterreno "FOSMET KT80".

【Información del producto FOSMET KT80】:
- Marca: FOSMET | Modelo: KT80
- Cuerpo: Metal plateado macizo de alta resistencia y durabilidad extrema
- Pantalla: Táctil Ultra HD de 1.46 pulgadas
- Batería: Batería monstruosa de 800 mAh para autonomía récord (olvídate de cargarlo a diario)
- Resistencia al agua: 5ATM real de grado buceo (apto para ducha, natación y deportes acuáticos)
- Herramienta destacada: Linterna LED ultrabrillante integrada en el lateral (activación instantánea con un botón)
- Conectividad: Llamadas Bluetooth en alta definición (marcar y contestar directamente desde el reloj)
- Salud y deportes: Monitoreo 24/7 de ritmo cardíaco, SpO2 (oxígeno en sangre), sueño continuo y más de 100 modos deportivos

【Reglas estrictas】:
1. Cada título DEBE incluir obligatoriamente "FOSMET" y "KT80" de forma natural y atractiva.
2. Crea ganchos breves, dinámicos e irresistibles en español (aprox. 40-75 caracteres antes de los hashtags).
3. Cada título DEBE terminar obligatoriamente con estos 5 hashtags exactos:
   ${targetHashtags}
4. Devuelve exactamente ${count} títulos en formato JSON sin repeticiones.
${customKeyword ? `※ Palabra clave a destacar: "${customKeyword}"` : ""}`;

          userPrompt = `Categoría: ${selectedCategoryDesc}
Tono: ${tone}
Petición: Genera 50 títulos virales en español para FOSMET KT80 en TikTok que terminen en: ${targetHashtags}`;
        }
      } else if (isT20) {
        categoryPromptMap = {
          all_mixed: "マルチGNSS脱机測位・電子コンパス気圧高度計型、スマート物理排水型、100+種スポーツ・Bluetooth通話型、24h健康・睡眠タフネス型の黄金比率ミックス",
          pain_point: "【反常識・痛点フック】「10万円のアウトドア時計買うな」「雨や水没で壊れたトラウマ」「スマホ持って走るの重い」「道に迷う恐怖」など固定観念破壊・トラブル解消型",
          efficiency: "【100+種スポーツ＆Bluetooth通話型】「専用スポーツボタン1プッシュで即記録」「手首で電話発信・着信」「音声アシスタント」「LINE・SNS通知一括管理」など実用性型",
          gadget: "【多星GNSS＆電子コンパス・気圧高度計型】「スマホ不要の独立ルート記録」「手首に本格計器」「過去24h気圧変化で天候察知」「軍規級タフネスデザイン」など本格ギア型",
          ai_power: "【スマート物理排水＆新機能型】「水泳・大雨後に高頻度振動で一瞬排水」「音声アシスタント対話」「遠隔カメラ・音楽操作」など革新技術型",
          secret_hack: "【暴露・男のロマン裏技型】「アウトドア上級者がこっそり使う神コスパ時計」「10万円級の機能が全部入り」など好奇心刺激型",
          question: "【疑問・コメント誘導型】「時計から水が飛び出すスマート排水知ってる？」「アウトドア時計に求める機能は何？」など視聴者巻き込み型",
          spec_power: "【24hバイタル・睡眠・タフネス型】「24h心拍＆血中酸素」「過負荷警告」「深浅睡眠分析」「呼吸トレーニング」「女性周期管理」など安心健康型",
        };

        const selectedCategoryDesc = categoryPromptMap[category] || categoryPromptMap.all_mixed;

        systemInstruction = `あなたはTikTok日区（日本市場）のトップECマーケター兼ショート動画クリエイティブディレクターです。
現在、アウトドア愛好家やアクティブパーソンの間で大注目の本格派スマートウォッチ「FOSMET T20 (C32 Pro)」のTikTok動画タイトルを作成します。

【商品「FOSMET T20」の核心情報】
- ブランド名：FOSMET（フォスメット）
- モデル名：T20（ティーニジュウ / C32 Pro）
- ポジショニング：アウトドア探索＆ハードコアスポーツ専用の本格派スマートウォッチ（腕上のプロ級計器）
- 独立ナビ・センサー：高精度電子コンパス（方位角）、気圧＆高度センサー（過去24時間の気圧変化を記録・天候予測）、スマホ不要の「多星GNSS（マルチGNSS）」測位システムで高精度なオフラインルート追跡
- 驚きのスマート排水機能：水泳・激しい運動・大雨の後に、物理的高周波振動によってマイクやスピーカー内部の水を一瞬で排出する自己防衛機能
- スポーツ対応：100種類以上のスポーツモード。専用スポーツボタンを1プッシュするだけで即座に運動計測画面へ
- 24時間健康＆睡眠：終日連続心拍数モニタリング、血中酸素測定、ストレス測定、呼吸トレーニング、女性周期リマインダー、深浅睡眠・睡眠スコア分析
- 全能通信＆便利機能：Bluetooth 5.3通話、AI音声アシスタント、LINE/メール/SNS/SMS通知

【生成ルール（厳格順守）】
1. 生成する各タイトルのテキスト本体には、必ずブランド名「FOSMET」と型番「T20」の両方を自然かつキャッチーに含めること。
2. タイトルは長すぎず、TikTokの画面で一目でインパクトが伝わる簡潔で強烈なフック（日本語で20〜45文字程度が理想）にすること。
3. すべてのタイトルには必ず、末尾に以下の固定5大タグをこの順番で厳格に付与すること：
   ${targetHashtags}
4. 出力は合計${count}個のタイトル配列（JSON形式）として出力してください。
${customKeyword ? `※特別強調キーワード: 「${customKeyword}」を一部のタイトルに取り入れてください。` : ""}`;

        userPrompt = `カテゴリ指定: ${selectedCategoryDesc}
トーン指定: ${tone}
依頼: TikTok日区で今すぐバズるFOSMET T20のアウトドア＆スポーツ日本語タイトルを【必ず50個】作成してください。
各タイトルは必ず「FOSMET」と「T20」を含み、末尾は必ず「${targetHashtags}」で終わること。`;
      } else if (isQs40) {
        categoryPromptMap = {
          all_mixed: "文字入力の不満解消・ChatGPT手首音声型、9.8mm洗練シルバー高級感型、1万円以下価格破壊型、昼寝仮眠まで追跡する健康管理型、30分急速充電型の黄金比率ミックス",
          pain_point: "【反常識・痛点フック】「スマートウォッチの文字入力イラついてる人集合」「まだ10万円の時計買ってるの？」「充電毎日するの疲れた…」など固定観念破壊型",
          efficiency: "【効率・ChatGPT音声型】「手首に話しかけるだけで秒回答」「調べる前に聞く」「LINE・メール通知腕で一括管理」などタイパ特化型",
          gadget: "【洗練デザイン・AMOLED型】「厚さわずか9.8mm・超軽量32.3g」「アジア人の手首に神フィット」「1400nit高輝度AMOLED」「AI音声で文字盤自動生成」などハードウェア魅力型",
          ai_power: "【ChatGPT対話型AI機能型】「腕上の専属AI相棒」「英語学習計画・天気・ニュース即時回答」「AI文字盤生成」など次世代AI機能直球型",
          secret_hack: "【暴露・高見え裏技型】「仕事ができる男がこっそり着けてるコレ」「1万円以下に見えない高級時計の正体」など好奇心刺激型",
          question: "【疑問・コメント誘導型】「手首にChatGPTついてたら何聞く？」「これ1万円以下って信じられる？」など視聴者巻き込み型",
          spec_power: "【健康管理・急速充電・スポーツ型】「24h心拍＆血中酸素」「昼寝まで測れる精密睡眠」「30分で55%急速充電」「150+種スポーツ＆3ATM防水」など安心機能型",
        };

        const selectedCategoryDesc = categoryPromptMap[category] || categoryPromptMap.all_mixed;

        systemInstruction = `あなたはTikTok日区（日本市場）のトップECマーケター兼ショート動画クリエイティブディレクターです。
現在、大ヒット中の次世代AIスマートウォッチ「FOSMET QS40（Series III）」のTikTok動画タイトルを作成します。

【商品「FOSMET QS40」の核心情報】
- ブランド名：FOSMET（フォスメット）
- モデル名：QS40（キューエスフォーティー / Series III）
- デザイン・外観：極薄9.8mm、超軽量32.3g、洗練された高級感あるシルバー/ブラックメタルボディ
- ChatGPT音声機能：文字入力の悩みを完全解消！手首に話しかけるだけで秒回答
- 画面＆AI文字盤：1400nit最大輝度 AMOLEDディスプレイ、461 PPI
- バッテリー＆充電：出勤前30分で55%急速充電、通常使用8〜10日
- 24時間健康＆睡眠：24時間休息を見守る科学（仮眠まで逃さず計測）

【生成ルール（厳格順守）】
1. 生成する各タイトルのテキスト本体には、必ずブランド名「FOSMET」と型番「QS40」の両方を自然かつキャッチーに含めること。
2. すべてのタイトルには必ず、末尾に以下の固定5大タグをこの順番で厳格に付与すること：
   ${targetHashtags}
3. 出力は合計${count}個のタイトル配列（JSON形式）として出力してください。
${customKeyword ? `※特別強調キーワード: 「${customKeyword}」を一部のタイトルに取り入れてください。` : ""}`;

        userPrompt = `カテゴリ指定: ${selectedCategoryDesc}
トーン指定: ${tone}
依頼: TikTok日区で今すぐバズるFOSMET QS40の日本語タイトルを【必ず50個】作成してください。
各タイトルは必ず「FOSMET」と「QS40」を含み、末尾は必ず「${targetHashtags}」で終わること。`;
      } else if (isE12) {
        categoryPromptMap = {
          all_mixed: "オープンイヤー開放型ゼロプレッシャー、16mm大口径HiFi高音質、内蔵SONY 800万画素カメラによる手ぶら日常Vlog、OpenAI音声対話・AI写真識物「これ何？」、リアルタイム同時通訳の黄金比率ミックス",
          pain_point: "【痛点反転・脱スマホ撮影】「スマホを構えてVlog撮るのが恥ずかしい・危ない」「重いアクションカメラは邪魔」「耳を塞ぐイヤホンの圧迫感・耳の疲れ」「決定的瞬間を逃した」など固定観念破壊・悩み解消型",
          efficiency: "【音声操作・デイリーレコード】「Hi Luma、写真撮って」「ボタン2回で即1080PフルHD動画」「手ぶらで料理・DIY・愛犬散歩POV動画」「Wi-Fi即時転送」などタイパ・日常記録型",
          gadget: "【16mm大口径HiFi ＆ SONY 800万画素カメラ】「オープンイヤーなのに鳥肌レベルの重低音」「イヤホンにSONY IMX219カメラ内蔵の近未来感」「プライバシーLEDランプ安心設計」などハードウェア直球型",
          ai_power: "【OpenAI搭載・AI写真識物・同時通訳】「これ何？と聞くだけでAIが即座に解説」「多言語リアルタイム同時通訳」「会議メモ録音」など最新AI機能特化型",
          secret_hack: "【クリエイター裏技・神ギア】「TikTokerがこっそり使う手ぶら一人称POV撮影ギア」「スマートグラスより手軽で高音質」など好奇心刺激・バズ裏技型",
          question: "【疑問・コメント欄誘導】「イヤホンで動画撮れる時代、知ってた？」「16mm高音質と800万画素カメラ、どっちが欲しい？」など視聴者巻き込み型",
          spec_power: "【SONY IMX219・1080P・16mmスピーカー・8GB内蔵】「SONY製800万画素」「1080P 30fps」「アレイ3マイク」「8GBストレージ」「220mAhバッテリー」などハイスペック信頼型",
        };

        const selectedCategoryDesc = categoryPromptMap[category] || categoryPromptMap.all_mixed;

        systemInstruction = `あなたはTikTok日区（日本市場）のトップECマーケター兼ショート動画クリエイティブディレクターです。
現在、大注目のカメラ内蔵次世代AIオープンイヤーヘッドホン「FOSMET E12」のTikTok動画タイトルを作成します。

【商品「FOSMET E12」の核心情報】
- ブランド名：FOSMET（フォスメット）
- モデル名：E12（イーチュウニ / E-Twelve）
- 商品カテゴリ：AI搭載スポーツヘッドホン（カメラ付き） / オープンイヤーAIイヤホン
- オーディオ：16mm 超大口径 HiFi 振膜スピーカー、オープンイヤー開放型で一日中耳が痛くならないゼロプレッシャー装着感
- カメラ＆映像：SONY IMX219 800万画素カメラ内蔵、1080P 30fps フルHD動画、ソフトウェア電子手ブレ補正、8GB内蔵ストレージ
- スーパーAIアシスタント：OpenAI 連携、音声喚起「Hi Luma」、音声写真撮影「写真を撮って」、AI写真識物「これ何？」、多言語リアルタイム同時通訳、会話翻訳、会議メモ
- 物理操作＆安心：物理ボタン（1押し写真 / 2押し動画 / 3押し録音）、タッチFPCスワイプ音量調整、プライバシー白色撮影LEDランプ搭載、2PIN磁気急速充電

【生成ルール（厳格順守）】
1. 生成する各タイトルのテキスト本体には、必ずブランド名「FOSMET」と型番「E12」の両方を自然かつキャッチーに含めること。
2. すべてのタイトルには必ず、末尾に以下の固定5大タグをこの順番で厳格に付与すること：
   ${targetHashtags}
3. 出力は合計${count}個のタイトル配列（JSON形式）として出力してください。
${customKeyword ? `※特別強調キーワード: 「${customKeyword}」を一部のタイトルに取り入れてください。` : ""}`;

        userPrompt = `カテゴリ指定: ${selectedCategoryDesc}
トーン指定: ${tone}
依頼: TikTok日区で今すぐバズるFOSMET E12の日本語タイトルを【必ず50個】作成してください。
各タイトルは必ず「FOSMET」と「E12」を含み、末尾は必ず「${targetHashtags}」で終わること。`;
      } else if (isE05) {
        categoryPromptMap = {
          all_mixed: "指先4段階調光エレクトロクロミック変色、TR90超軽量＆極簡コーデ美学、AI知能問答・リアルタイム同時通訳、ENCデュアルマイクノイズキャンセリング通話、8時間連続再生・7日待機の黄金比率ミックス",
          pain_point: "【痛点反転・メガネとサングラス2本持ち解消】「まだ室内外でサングラス掛け替えてるの？」「耳を塞ぐイヤホンの圧迫感・耳詰まり」「重いスマートグラスで鼻が痛い」「海外旅行で言葉が通じない恐怖」など悩み解消型",
          efficiency: "【タイパ・服装コーデ・ハンズフリー】「テンプル前後スワイプで秒速音量調整」「どんな服装・コーデにも一瞬で垢抜ける極簡デザイン」「手ぶらでAI即時質問」「8h連続再生で1日中安心」など効率・スマートライフ型",
          gadget: "【4段階エレクトロクロミック調光 ＆ TR90超軽量フレーム】「指先ワンタップで4段階に瞬時変色するSF感」「羽のように軽いTR90素材」「指向性スピーカーで音漏れ低減」「IP65防塵防水タフネス」などハードウェア魅力直球型",
          ai_power: "【内蔵AI知能問答 ＆ リアルタイム多言語同時通訳】「耳元で外国語が即座に日本語に通訳」「言葉の壁を完全破壊」「ENCデュアルマイクAI降噪で騒音下でも美声通話」などAI知能特化型",
          secret_hack: "【服装コーデ裏技・モテアイテム】「お洒落な人がこっそりかけてる4段階変色メガネ」「イヤホンをやめてこれ1本に統合したミニマリストの結論」「街でサングラスどこの？と聞かれる神ギア」など好奇心刺激型",
          question: "【疑問・コメント欄巻き込み】「タップで色が変わるスマートメガネ、正直欲しい？」「4段階調光とAI同時通訳、どっちが気になる？」「イヤホン派？メガネ派？」など視聴者巻き込み型",
          spec_power: "【4段階変色・TR90・ENC双マイク・8h再生・IP65】「TR90超軽量素材」「8時間音楽連続再生」「待機7日以上」「ENCデュアルマイク」「IP65防塵防水」などハイスペック信頼型",
        };

        const selectedCategoryDesc = categoryPromptMap[category] || categoryPromptMap.all_mixed;

        systemInstruction = `あなたはTikTok日区（日本市場）のトップECマーケター兼ショート動画クリエイティブディレクターです。
現在、極簡コーデと最先端テクノロジーが融合した4段階調光スマートオーディオグラス「FOSMET E05」のTikTok動画タイトルを作成します。

【商品「FOSMET E05」の核心情報】
- ブランド名：FOSMET（フォスメット）
- モデル名：E05（イーゼロゴ / E-Zero-Five）
- 商品カテゴリ：4段階調光スマートオーディオグラス / AIスマートメガネ
- 核心調光機能：エレクトロクロミックレンズ（4段階調光）、指先の調光タッチエリアに触れるだけで瞬時にレンズ濃度が4段階にシルキーチェンジ（室内クリア〜屋外サングラス）
- デザイン・材質：極めて軽量で装着感抜群のTR90フレーム＆テンプル、極簡穿搭（ミニマルコーデ）美学にマッチする高颜值ファッション単体
- AI知能＆翻訳：強力なAI知能音声問答 ＆ 多言語リアルタイム同時通訳機能（言葉の壁を打破）
- 音声＆通話：ENCデュアルマイクノイズキャンセリング（周囲の雑音をカットし超クリア通話）、オープンイヤー高音質スピーカー
- 触控操作：テンプルをスワイプして音量調整（前スワイプ音量UP/後ろスワイプ音量DOWN）、タップで曲送り・再生一時停止・電話応答
- バッテリー＆タフネス：音楽連続再生8時間、超長待機7日以上、IP65級防塵防水防汗（スポーツや雨天も安心）

【生成ルール（厳格順守）】
1. 生成する各タイトルのテキスト本体には、必ずブランド名「FOSMET」と型番「E05」の両方を自然かつキャッチーに含めること。
2. タイトルはTikTok視聴者の目を一瞬で惹きつける強力なフック（日本語で25〜45文字程度）にすること。
3. すべてのタイトルには必ず、末尾に以下の固定5大タグをこの順番で厳格に付与すること：
   ${targetHashtags}
4. 出力は合計${count}個のタイトル配列（JSON形式）として出力してください。
${customKeyword ? `※特別強調キーワード: 「${customKeyword}」を一部のタイトルに取り入れてください。` : ""}`;

        userPrompt = `カテゴリ指定: ${selectedCategoryDesc}
トーン指定: ${tone}
依頼: TikTok日区で今すぐバズるFOSMET E05の日本語タイトルを【必ず50個】作成してください。
各タイトルは必ず「FOSMET」と「E05」を含み、末尾は必ず「${targetHashtags}」で終わること。`;
      } else if (isE09) {
        categoryPromptMap = {
          all_mixed: "SONY 800万画素POVカメラ、40g極軽量PC+ABS＆透明ブルーライトカット、専用物理ボタン10分動画録画、デュアルスピーカー＆アレイマイク、4タップAI対話の黄金比率ミックス",
          pain_point: "【痛点反転・スマホ手持ち撮影＆入耳イヤホン解放】「まだスマホ構えて動画撮ってるの？」「耳を塞ぐイヤホンの圧迫感」「重いアクションカメラで首が疲れる」「決定的瞬間を撮り逃す悔しさ」など悩み解消型",
          efficiency: "【タイパ・物理ボタン1発操作・手ぶら生活】「物理ボタン1押しで0.5秒即撮影」「最大10分連続ビデオ録画」「テンプル前後スワイプで秒速音量調整」「4タップでAI音声アシスタント起動」など効率・スマートライフ型",
          gadget: "【SONY 800万画素 ✕ 40g極軽量 ✕ PC+ABS強靭ボディ】「わずか40gの伊達メガネにSONY製800万画素カメラ内蔵」「透明ブルーライトカットレンズ標準搭載」「ソフトウェア電子手ブレ補正」「スパイ道具のような極小ステルス構造」などハードウェア魅力直球型",
          ai_power: "【AI対話アシスタント ＆ アレイマイク高音質】「4回タップで手ぶらAI検索・即時回答」「アレイマイクによる指向性ノイズ低減で騒音下でもクリア通話」「3回押しで大事な会議を高音質ボイス録音」などAI・スマート機能型",
          secret_hack: "【服装コーデ裏技・日常Vlog神ギア】「お洒落な人がこっそりかけてる黒縁メガネ、実はカメラ内蔵」「旅行の思い出を見たままの景色で残すチート技」「どんな服装にも馴染む極簡ミニマルデザイン」など好奇心刺激型",
          question: "【疑問・コメント欄巻き込み】「普通のメガネに見えて実は動画が撮れるの知ってた？」「目線そのまま動画が撮れるメガネがあったら何撮りたい？」「40gでカメラとスピーカー搭載ってヤバくない？」など視聴者巻き込み型",
          spec_power: "【SONY IMX219・1080P 30fps・40g・10分録画・電子防振】「SONY IMX219 800万画素」「1080P 30fps」「ソフトウェア電子防振」「透明防ブルーライト」「開放型デュアルスピーカー」などハイスペック信頼型",
        };

        const selectedCategoryDesc = categoryPromptMap[category] || categoryPromptMap.all_mixed;

        systemInstruction = `あなたはTikTok日区（日本市場）のトップECマーケター兼ショート動画クリエイティブディレクターです。
現在、極簡軽量デザインと硬核映像テクノロジーが融合したカメラ搭載スマートグラス「FOSMET E09」のTikTok動画タイトルを作成します。

【商品「FOSMET E09」の核心情報】
- ブランド名：FOSMET（フォスメット）
- モデル名：E09（イーゼロキュウ / E-Zero-Nine）
- 商品カテゴリ：カメラ搭載スマートグラス / AI録画撮影メガネ / ウェアラブルスマートグラス
- 重量・材質：裸機わずか40gの超軽量設計、PC+ABS軽量高耐久フレーム＆テンプル、透明ブルーライトカットレンズ標準装備（極めて快適な無感装着＆アイケア）
- カメラ＆映像：SONY IMX219 800万画素高清カメラ内蔵、1080P 30fps動画撮影、ソフトウェア電子手ブレ補正、目線そのまま第一人称POV撮影
- 物理操作ボタン：専用物理ボタン（1回押し: 写真撮影 / 2回押し: 動画録画 最大10分連続 / 3回押し: ボイス録音 / 長押し: 電源オンオフ）
- 音声・通話・AI：開放型デュアルスピーカー（耳を塞がず快適リスニング）＆ 指向性アレイマイク（クリアな通話＆録音）、テンプル4回タップでスマホAI対話アシスタント（ChatGPT/AI会話）即時起動
- 触控操作：テンプルタッチ操作（タップで再生/一時停止/通話、前後スワイプで音量調整、ダブル/トリプルタップで曲送り・曲戻し）
- 用途：両手を完全に解放し、日常Vlog、散歩、サイクリング、料理、DIY、育児、旅行、仕事と生活をシームレスに記録

【生成ルール（厳格順守）】
1. 生成する各タイトルのテキスト本体には、必ずブランド名「FOSMET」と型番「E09」の両方を自然かつキャッチーに含めること。
2. タイトルはTikTok視聴者の目を一瞬で惹きつける強力なフック（日本語で25〜45文字程度）にすること。
3. すべてのタイトルには必ず、末尾に以下の固定5大タグをこの順番で厳格に付与すること：
   ${targetHashtags}
4. 出力は合計${count}個のタイトル配列（JSON形式）として出力してください。
${customKeyword ? `※特別強調キーワード: 「${customKeyword}」を一部のタイトルに取り入れてください。` : ""}`;

        userPrompt = `カテゴリ指定: ${selectedCategoryDesc}
トーン指定: ${tone}
依頼: TikTok日区で今すぐバズるFOSMET E09の日本語タイトルを【必ず50個】作成してください。
各タイトルは必ず「FOSMET」と「E09」を含み、末尾は必ず「${targetHashtags}」で終わること。`;
      } else if (isG2) {
        categoryPromptMap = {
          all_mixed: "女性の健康・月経周期管理、120+種運動モード、Bluetooth 5.3クリア通話、心拍・血中酸素・睡眠モニタリング、IP68防水・ファッション服装コーデの黄金比率ミックス",
          pain_point: "【痛点反転・生理周期＆体調管理】「手帳への手入力が面倒」「毎日の体調変化に気づけない」「スマホをカバンに入れて着信に気づかない」「ゴツい時計で服装に合わない」など女性の悩み解消型",
          ai_power: "【女性の健康 ✕ FitCloudPro連携】「手首で月経周期・排卵期をスマート予測」「深睡眠浅睡眠の質を可視化」「呼吸トレーニングでリフレッシュ」「FitCloudProアプリで詳細ヘルスデータ分析」など健康・ヘルスケア型",
          efficiency: "【Bluetooth 5.3通話 ✕ LINE・SNS通知】「家事や運動中も手首でクリア通話」「LINE・メール・SNS着信を即座に腕で確認」「スマホ探索・電卓・アラーム機能」などタイパ・スマート生活型",
          gadget: "【文字盤着せ替え ✕ 腕上げ点灯 ✕ IP68防水】「その日の気分や服装に合わせて自由自在に着せ替え」「手首を上げるだけでパッと画面点灯」「手洗いや雨でも安心のIP68防水防塵」などハードウェア魅力型",
          spec_power: "【120+種運動 ✕ 24hバイタル計測】「内蔵8+1＋追加112種＝120+種スポーツ対応」「歩数・距離・消費カロリー自動記録」「リアルタイム心拍＆血中酸素測定」などフィットネス型",
          secret_hack: "【服装コーデ・高見え秘密アイテム】「どんなコーデにも自然に馴染む洗練デザイン」「お洒落女子がこっそり愛用するQOL爆上げ神ウォッチ」「プチプラなのに高級感抜群」など好奇心刺激・OOTD型",
          question: "【疑問・共感コメント誘導】「生理周期や睡眠まで測れる神時計知ってる？」「スマートウォッチ持ってる女子、何機能一番使ってる？」「服装に合う可愛いスマートウォッチ探してない？」など視聴者巻き込み型",
        };

        const selectedCategoryDesc = categoryPromptMap[category] || categoryPromptMap.all_mixed;

        systemInstruction = `あなたはTikTok日区（日本市場）のトップECマーケター兼ショート動画クリエイティブディレクターです。
現在、健康モニタリング・運動管理・スマート生活を兼ね備えた女性向け多機能スマートウォッチ「FOSMET G2」のTikTok動画タイトルを作成します。

【商品「FOSMET G2」の核心情報】
- ブランド名：FOSMET（フォスメット）
- モデル名：G2（ジーツー）
- 商品カテゴリ：多機能スマートウォッチ / 女性健康スマートウォッチ
- 接続＆アプリ：Bluetooth 5.3搭載、FitCloudPro Appと連携して詳細な健康データを管理
- 健康モニタリング：心拍数、血中酸素（SpO2）、睡眠モニタリング（深睡眠・浅睡眠・総睡眠時間の自動記録）、月経周期トラッキング機能（女性の日常健康管理）、呼吸リラクゼーション
- 運動＆スポーツ管理：内蔵8+1種運動モード ＋ FitCloudProアプリから追加112種運動モードを選択可能（合計120+種。ウォーキング、ランニング、サイクリング、バスケ、サッカー、バドミントン、縄跳び等）。歩数・運動距離・消費カロリーをリアルタイム記録
- スマート生活機能：Bluetoothクリア通話、音声アシスタント、LINE・SNS・着信通知、文字盤着せ替え、腕上げ点灯、スマホ探索、電卓、天気予報、IP68防水防塵
- デザイン＆ファッション：どんな服装やファッションコーデにも溶け込む洗練されたデザイン

【生成ルール（厳格順守）】
1. 生成する各タイトルのテキスト本体には、必ずブランド名「FOSMET」と型番「G2」の両方を自然かつキャッチーに含めること。
2. タイトルはTikTok視聴者（特に健康やファッションに関心のある女性や若者）の目を一瞬で惹きつける強力なフック（日本語で25〜45文字程度）にすること。
3. すべてのタイトルには必ず、末尾に以下の固定5大タグをこの順番で厳格に付与すること：
   ${targetHashtags}
4. 出力は合計${count}個のタイトル配列（JSON形式）として出力してください。
${customKeyword ? `※特別強調キーワード: 「${customKeyword}」を一部のタイトルに取り入れてください。` : ""}`;

        userPrompt = `カテゴリ指定: ${selectedCategoryDesc}
トーン指定: ${tone}
依頼: TikTok日区で今すぐバズるFOSMET G2の日本語タイトルを【必ず50個】作成してください。
各タイトルは必ず「FOSMET」と「G2」を含み、末尾は必ず「${targetHashtags}」で終わること。`;
      } else if (isFos10) {
        categoryPromptMap = {
          all_mixed: "10.66mm極薄・14.9g超軽量、女性の健康・心拍・血中酸素・睡眠サイクル・呼吸トレ、100+文字盤DIY・写真/フォント自由カスタマイズ、100+種運動モード、IP68防水・Bluetooth5.3通知の黄金比率ミックス",
          pain_point: "【痛点反転・14.9g超軽量＆女性の健康】「時計が重くて手首が疲れる」「生理前の体調変化に気づかない」「寝る時に時計が邪魔」「スマホ通知を見逃す」など女性の悩み解消・超軽量解放型",
          gadget: "【10.66mm極薄＆14.9g ✕ 100+文字盤DIY】「厚さ10.66mm・重さ14.9gの羽のような軽さ」「100+款の文字盤選び放題」「スマホの写真や推し画像を文字盤にDIY」「フォントカラー自由設定」などポータブル＆デザイン魅力型",
          ai_power: "【女性の健康 ✕ 精密バイタル＆睡眠分析】「女性の健康リズム管理」「24時間心拍＆血中酸素常時モニタリング」「睡眠時間・深度・周期を精密記録」「深呼吸トレーニングで日常ストレス軽減」などヘルスケア・コンディション管理型",
          efficiency: "【Bluetooth 5.3 ✕ LINE/SNS通知 ✕ スマート生活】「LINE・Facebook・SMSを腕で即確認」「Bluetooth 5.3高速安定接続」「Android/iOS両対応」「歩数・距離・カロリー秒速確認」などタイパ・スマート生活型",
          spec_power: "【100+種運動モード ✕ IP68防水 ✕ 耐久仕様】「ヨガ・ランニングなど100+種スポーツ対応」「歩数・距離・消費カロリー高精度記録」「IP68防塵防水で手洗い・雨天・汗でも安心」などフィットネス・スペック型",
          secret_hack: "【服装コーデ＆推し活DIY裏技】「薄型だから袖口に引っかからない美シルエット」「推し写真×好みのフォントで自分だけのお守りウォッチ」「女子のQOL爆上げポータブル神機」など好奇心刺激・OOTD型",
          question: "【疑問・共感コメント誘導】「14.9gの超軽量スマートウォッチ、着けてみたくない？」「文字盤は毎日変える派？推し写真にする派？」「生理周期や睡眠まで測れるポータブル時計知ってる？」など視聴者巻き込み型",
        };

        const selectedCategoryDesc = categoryPromptMap[category] || categoryPromptMap.all_mixed;

        systemInstruction = `あなたはTikTok日区（日本市場）のトップECマーケター兼ショート動画クリエイティブディレクターです。
現在、軽薄佩戴・健康モニタリング・運動管理・スマートライフを兼ね備えた女性向けポータブルスマートウォッチ「FOSMET FOS10」のTikTok動画タイトルを作成します。

【商品「FOSMET FOS10」の核心情報】
- ブランド名：FOSMET（フォスメット）
- モデル名：FOS10（エフオーエステン / フォステン）
- 商品カテゴリ：超薄型軽量ポータブルスマートウォッチ / 女性健康スマートウォッチ
- 厚み・重量：機身厚さわずか10.66mm、重量約14.9g（羽のように軽やかで快適、全天候・睡眠時も無感佩戴）
- 文字盤DIY：100+款の個性派文字盤が選び放題、スマホアプリから好きな写真（推し・ペット・旅行）や背景、フォントカラーを自由にDIYカスタマイズ可能
- 女性健康＆ヘルスケア：女性の健康管理、心拍数モニタリング、血中酸素（SpO2）測定、睡眠モニタリング（睡眠時間・睡眠深度・睡眠周期の記録・App同期）、呼吸トレーニング機能
- 運動管理：100+種運動モード対応、運動状態・歩数・移動距離・消費カロリーを正確に記録
- スマート生活＆接続：Bluetooth 5.3、LINE・Facebook・SMS・着信通知、IP68防塵防水、Android 8.0以上 / iOS 10.0以上対応

【生成ルール（厳格順守）】
1. 生成する各タイトルのテキスト本体には、必ずブランド名「FOSMET」と型番「FOS10」の両方を自然かつキャッチーに含めること。
2. タイトルはTikTok視聴者（特に体調管理や推し活・ファッションに関心のある女性や若者、軽量派）の目を一瞬で惹きつける強力なフック（日本語で25〜45文字程度）にすること。
3. すべてのタイトルには必ず、末尾に以下の固定5大タグをこの順番で厳格に付与すること：
   ${targetHashtags}
4. 出力は合計${count}個のタイトル配列（JSON形式）として出力してください。
${customKeyword ? `※特別強調キーワード: 「${customKeyword}」を一部のタイトルに取り入れてください。` : ""}`;

        userPrompt = `カテゴリ指定: ${selectedCategoryDesc}
トーン指定: ${tone}
依頼: TikTok日区で今すぐバズるFOSMET FOS10の日本語タイトルを【必ず50個】作成してください。
各タイトルは必ず「FOSMET」と「FOS10」を含み、末尾は必ず「${targetHashtags}」で終わること。`;
      } else {
        // REC10
        categoryPromptMap = {
          all_mixed: "反常シック痛点型、残業ゼロ効率化型、名刺サイズガジェット型、商談・会議即時議事録型、ChatGPT×Gemini神要約型の黄金比率ミックス",
          pain_point: "【反常識・痛点フック】「まだ手書きでメモ取ってるの？」「ノート取る人ほど仕事が遅い理由」など視聴者の固定観念を壊す煽り型",
          efficiency: "【効率結果前置型】「1時間の会議が3秒で議事録に」「残業ゼロになった理由これ」など圧倒的時短・成果を即座に見せる型",
          gadget: "【名刺サイズ・無劇情ハードウェア型】「スマホにペタッと磁吸」「厚さ数ミリの極薄アルミボディ」「机に堂々と置ける」などモノの魅力直球型",
          ai_power: "【ChatGPT×Gemini AI機能型】「録音と同時にマインドマップ完成」「双AIモデルで要約が的確すぎる」「31種類の業界テンプレート」などAI革命型",
          secret_hack: "【暴露・裏技型】「仕事がデキる人の机にあるコレ何？」「会議で絶対バレないチート技」「社内トップ営業の秘密兵器」など好奇心刺激型",
          question: "【疑問・問いかけ型】「この薄いカード何に使うと思う？」「会議の議事録係、まだやってるの？」などコメント欄が湧く問いかけ型",
          spec_power: "【35hバッテリー・64GB・タフスペック型】「35時間連続録音」「待機66日」「デュアルマイク」など安心感型",
        };

        const selectedCategoryDesc = categoryPromptMap[category] || categoryPromptMap.all_mixed;

        systemInstruction = `あなたはTikTok日区（日本市場）のトップECマーケター兼ショート動画クリエイティブディレクターです。
現在、ビジネスパーソンや学生の間で大注目のAIボイスレコーダー「FOSMET REC10」のTikTok動画タイトルを作成します。

【商品「FOSMET REC10」の核心情報】
- ブランド名：FOSMET（フォスメット）
- モデル名：REC10（アールイーシーテン）
- ポジショニング：名刺サイズに偽装した超小型AI議事録カード
- 核心AI機能：ChatGPT ＆ Gemini 双AIモデル連携（DOWAYアプリ）による高精度文字起こし・秒速要約・マインドマップ自動生成
- ハードウェア：厚さわずか数ミリの極薄航空アルミ合金、MagSafe磁気吸着＆机上平置き、35時間連続録音、64GB大容量メモリ

【生成ルール（厳格順守）】
1. 生成する各タイトルのテキスト本体には、必ずブランド名「FOSMET」と型番「REC10」の両方を自然かつキャッチーに含めること。
2. すべてのタイトルには必ず、末尾に以下の固定5大タグをこの順番で厳格に付与すること：
   ${targetHashtags}
3. 出力は合計${count}個のタイトル配列（JSON形式）として出力してください。
${customKeyword ? `※特別強調キーワード: 「${customKeyword}」を一部のタイトルに取り入れてください。` : ""}`;

        userPrompt = `カテゴリ指定: ${selectedCategoryDesc}
トーン指定: ${tone}
依頼: TikTok日区で今すぐバズるFOSMET REC10の日本語タイトルを【必ず50個】作成してください。
各タイトルは必ず「FOSMET」と「REC10」を含み、末尾は必ず「${targetHashtags}」で終わること。`;
      }

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: userPrompt,
        config: {
          systemInstruction,
          temperature: 0.85,
          topP: 0.95,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              titles: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    title: {
                      type: Type.STRING,
                      description: `The full TikTok title string including hook and ending tags ${targetHashtags}`,
                    },
                    hook: {
                      type: Type.STRING,
                      description: "The pure hook part before hashtags",
                    },
                    angle: {
                      type: Type.STRING,
                      description: "Angle category name",
                    },
                    targetAudience: {
                      type: Type.STRING,
                      description: "Target viewer",
                    },
                    translationZh: {
                      type: Type.STRING,
                      description: "Accurate, fluent Chinese translation of the title hook for easy reference by Chinese marketing operators",
                    },
                  },
                  required: ["title", "hook", "angle"],
                },
              },
            },
            required: ["titles"],
          },
        },
      });

      const responseText = response.text || "{}";
      const parsedData = JSON.parse(responseText);
      let titles = parsedData.titles || [];

      // Validate and enforce formatting
      titles = titles.map((item: any, idx: number) => {
        let fullTitle = item.title ? item.title.trim() : "";
        let hook = item.hook ? item.hook.trim() : "";

        // Ensure brand and model in hook
        if (!hook.includes(targetBrand) || !hook.includes(targetModel)) {
          if (!hook.includes(targetBrand) && !hook.includes(targetModel)) {
            hook = isKt80 ? `【${targetBrand} ${targetModel}】 ${hook}` : `【${targetBrand} ${targetModel}】${hook}`;
          } else if (!hook.includes(targetBrand)) {
            hook = hook.replace(targetModel, `${targetBrand} ${targetModel}`);
          } else if (!hook.includes(targetModel)) {
            hook = hook.replace(targetBrand, `${targetBrand} ${targetModel}`);
          }
        }

        // Ensure fixed hashtags at the end
        if (!fullTitle.endsWith(targetHashtags)) {
          const cleanHook = fullTitle.replace(/#.*$/, "").trim() || hook;
          fullTitle = `${cleanHook} ${targetHashtags}`;
        }

        return {
          id: `ai-${productId}-${language}-${Date.now()}-${idx + 1}`,
          productId,
          title: fullTitle,
          hook: hook || fullTitle.replace(targetHashtags, "").trim(),
          angle: item.angle || (isGerman ? "Highlight" : (isKt80 || isG58 || isI228) ? "Destacado" : "AIおすすめ"),
          targetAudience: item.targetAudience || (isGerman ? "Damen & Alltag" : (isKt80 || isG58 || isI228) ? "Mujeres & Moda" : "ターゲット層"),
          translationZh: item.translationZh || "",
          charCount: fullTitle.length,
          language: (isKt80 || isG58) ? (isGerman ? "de" : "es") : isI228 ? "es" : "ja",
          createdAt: new Date().toISOString(),
        };
      });

      res.json({
        success: true,
        productId,
        count: titles.length,
        category,
        language: (isKt80 || isG58) ? (isGerman ? "de" : "es") : isI228 ? "es" : "ja",
        titles,
      });
    } catch (err: any) {
      console.error("Error generating titles via Gemini:", err);
      res.status(500).json({
        success: false,
        error: err.message || "Failed to generate titles",
      });
    }
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`FOSMET Matrix Title Generator running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
