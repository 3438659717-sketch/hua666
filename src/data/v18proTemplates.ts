import { AngleCategory, GeneratedTitle, TargetLanguage } from "../types";

export const V18PRO_FIXED_TAGS_ES = "#DyMona #V18PRO #aspiradora #limpiezahogar #tiktokshop #hogarlimpio";
export const V18PRO_FIXED_TAGS_DE = "#DyMona #V18PRO #staubsauger #haushaltshelfer #putztipps #tiktokshop";
export const V18PRO_FIXED_TAGS = V18PRO_FIXED_TAGS_ES;

interface HookTemplate {
  pattern: (brand: string, model: string, keyword?: string) => string;
  patternZh: (brand: string, model: string, keyword?: string) => string;
  category: AngleCategory;
  angleLabel: string;
  targetAudience: string;
}

export const V18PRO_HOOK_TEMPLATES_ES: HookTemplate[] = [
  // 1. 痛点反转・免弯腰＆折叠臂＆告别重型吸尘器型 (Pain Point & 65cm Foldable Wand)
  {
    pattern: (b, m) => `¿Cansado de agacharte para limpiar debajo de la cama? El brazo plegable de ${b} ${m} es un salvavidas`,
    patternZh: (b, m) => `受够了每次弯腰费劲清扫床底和沙发底？${b} ${m} 的 65cm 折叠臂简直是家务救星`,
    category: "pain_point",
    angleLabel: "免弯腰折叠臂",
    targetAudience: "腰痛持ち・主妇・多忙ワーカー",
  },
  {
    pattern: (b, m) => `¿Tu aspiradora vieja pesa demasiado y no aspira nada? Con ${b} ${m} de solo 1.4 kg y 50 kPa todo cambia`,
    patternZh: (b, m) => `你家老式吸尘器又笨重又吸不干净？仅重 1.4 kg 却有 50 kPa 强劲吸力的 ${b} ${m} 彻底改变清洁体验`,
    category: "pain_point",
    angleLabel: "1.4kg羽量告别笨重",
    targetAudience: "女性・一人暮らし・家庭主妇",
  },
  {
    pattern: (b, m) => `El polvo oculto en las esquinas ya no es problema: el cabezal de borde 0mm de ${b} ${m} lo atrapa todo`,
    patternZh: (b, m) => `踢脚线和墙角的陈年死角灰尘不再是难题：${b} ${m} 的 0mm 极致贴边设计全部一网打尽`,
    category: "pain_point",
    angleLabel: "0mm贴边死角清洁",
    targetAudience: "洁癖党・精细清洁人群",
  },
  {
    pattern: (b, m) => `¿El ruido de la aspiradora asusta a tus mascotas? ${b} ${m} funciona a solo 60 dB ultra silencioso`,
    patternZh: (b, m) => `吸尘器噪音总是把家里的猫咪狗狗吓得乱窜？${b} ${m} 仅 60 dB 超低音运行温柔不扰宠`,
    category: "pain_point",
    angleLabel: "60dB低音静音运行",
    targetAudience: "养宠家庭・有宝宝家庭",
  },
  {
    pattern: (b, m) => `¿Alergias en casa por polvo fino? La filtración de 7 etapas al 99.99% de ${b} ${m} cuida tus pulmones`,
    patternZh: (b, m) => `家里微尘导致频繁鼻炎打喷嚏？${b} ${m} 配备 7 重高效过滤拦截 99.99% 0.3微米微尘呵护呼吸`,
    category: "pain_point",
    angleLabel: "7重过滤防过敏",
    targetAudience: "易敏体质・母婴家庭",
  },
  {
    pattern: (b, m) => `Limpiar debajo del sofá sin mover los muebles ahora es real gracias a ${b} ${m}`,
    patternZh: (b, m) => `不用费力搬动沙发茶几就能彻底清扫沙发底，${b} ${m} 的折叠金属管轻松搞定`,
    category: "pain_point",
    angleLabel: "家具底部深度清洁",
    targetAudience: "家庭大扫除・日常保洁",
  },

  // 2. 效率前置・绿光显尘＆50kPa飓风吸力＆省时型 (Efficiency & Green Light 2.0)
  {
    pattern: (b, m) => `¡La luz verde 2.0 de ${b} ${m} revela hasta el polvo que tus ojos no ven! Limpieza en la mitad de tiempo`,
    patternZh: (b, m) => `【绿光显尘2.0】${b} ${m} 照亮肉眼看不见的微尘！135°超广角让清洁效率直接翻倍`,
    category: "efficiency",
    angleLabel: "绿光显尘2.0超广角",
    targetAudience: "效率党・TikTok种草族",
  },
  {
    pattern: (b, m) => `De 50 minutos de batería a 0 esfuerzo: ${b} ${m} hace que limpiar toda tu casa sea un paseo`,
    patternZh: (b, m) => `长达 50 分钟持久续航 ✕ 零负担清洁：${b} ${m} 让全屋大扫除变得像散步一样轻松惬意`,
    category: "efficiency",
    angleLabel: "50分钟持久续航",
    targetAudience: "大户型・日常快扫族",
  },
  {
    pattern: (b, m) => `Con el motor de 650W y 50 kPa de ${b} ${m}, una sola pasada basta para dejar el suelo impecable`,
    patternZh: (b, m) => `凭借 650W 强劲电机与 50 kPa 飓风吸力，${b} ${m} 轻轻推过一遍地面瞬间一尘不染`,
    category: "efficiency",
    angleLabel: "650W/50kPa一推即净",
    targetAudience: "追求高效的上班族",
  },
  {
    pattern: (b, m) => `La pantalla digital LED de ${b} ${m} te dice la batería y potencia al instante sin sorpresas`,
    patternZh: (b, m) => `清晰数字大屏实时显示剩余电量与清洁档位，使用 ${b} ${m} 再也不怕吸到一半突然断电`,
    category: "efficiency",
    angleLabel: "智能数字LED大屏",
    targetAudience: "科技家居爱好者",
  },
  {
    pattern: (b, m) => `Del suelo al techo y al coche en segundos: el diseño 7 en 1 de ${b} ${m} lo limpia absolutamente todo`,
    patternZh: (b, m) => `从地板、沙发缝隙到天花板甚至车内：${b} ${m} 的 7 合 1 多刷头设计秒速应对全场景`,
    category: "efficiency",
    angleLabel: "7合1多场景全能清扫",
    targetAudience: "车主・全屋清洁党",
  },

  // 3. 硬件工业美学・65cm折叠臂＆自立停放＆壁挂型 (Gadget & Foldable Hardware)
  {
    pattern: (b, m) => `El brazo plegable metálico de 65cm en ${b} ${m} es la mejor innovación para el hogar de 2026`,
    patternZh: (b, m) => `65cm 一键弯折金属臂！${b} ${m} 带来 2026 年现代家居最具颠覆性的结构创新`,
    category: "gadget",
    angleLabel: "65cm折叠金属臂结构",
    targetAudience: "数码家居博主・极客",
  },
  {
    pattern: (b, m) => `Se sostiene sola en 90° y ocupa cero espacio: el diseño autoportante de ${b} ${m} es genial`,
    patternZh: (b, m) => `随手一立即可 90° 自立停放无需靠墙！${b} ${m} 的收纳与站立设计极具工业美感`,
    category: "gadget",
    angleLabel: "90°免打孔自立停放",
    targetAudience: "收纳控・小户型用户",
  },
  {
    pattern: (b, m) => `Cuerpo ultra ligero de 1.4 kg con soporte de pared con carga: la elegancia de ${b} ${m}`,
    patternZh: (b, m) => `仅 1.4 kg 的羽量级机身搭配壁挂充电一体收纳基座：${b} ${m} 尽显高端轻奢质感`,
    category: "gadget",
    angleLabel: "壁挂充电收纳美学",
    targetAudience: "高端审美人群・品质生活家",
  },
  {
    pattern: (b, m) => `135° de ángulo y 300cm de alcance en luz verde: la óptica de precisión de ${b} ${m}`,
    patternZh: (b, m) => `135° 超大广角 ✕ 300cm 超远照射显尘绿光：${b} ${m} 的光学透镜让隐形灰尘彻底现形`,
    category: "gadget",
    angleLabel: "300cm光学级显尘",
    targetAudience: "硬核测品爱好者",
  },

  // 4. 深度健康・7重过滤99.99%微尘拦截型 (AI / Health & Deep Clean)
  {
    pattern: (b, m) => `99.99% de micropartículas de 0.3 micras eliminadas: ${b} ${m} purifica el aire mientras aspiras`,
    patternZh: (b, m) => `99.99% 拦截小至 0.3 微米微尘：${b} ${m} 边吸尘边排出洁净空气，真正杜绝二次污染`,
    category: "ai_power",
    angleLabel: "7重HEPA级微尘过滤",
    targetAudience: "健康生活倡导者・母婴",
  },
  {
    pattern: (b, m) => `Adiós a los ácaros en colchones y sofás con la potencia profunda de ${b} ${m}`,
    patternZh: (b, m) => `凭借 50 kPa 超强真空负压深入沙发与床褥除螨除尘，${b} ${m} 为全家筑牢健康防线`,
    category: "ai_power",
    angleLabel: "床褥织物深层除螨",
    targetAudience: "家庭除螨・精致生活",
  },
  {
    pattern: (b, m) => `Control inteligente en tiempo real con la pantalla digital de ${b} ${m} para una limpieza perfecta`,
    patternZh: (b, m) => `数字智能大屏实时掌握机器运转状态与吸力档位，体验 ${b} ${m} 带来的智慧清洁新境界`,
    category: "ai_power",
    angleLabel: "智能数字交互",
    targetAudience: "智能家电爱好者",
  },

  // 5. 硬核参数・650W电机＆50kPa飓风吸力型 (Spec Power & 50 kPa Suction)
  {
    pattern: (b, m) => `650W de potencia bruta y 50 kPa de succión: ${b} ${m} destroza cualquier suciedad en alfombras`,
    patternZh: (b, m) => `650W 大功率无刷电机 ✕ 50 kPa 强劲吸力：${b} ${m} 轻松卷吸地毯深层颗粒与毛发`,
    category: "spec_power",
    angleLabel: "650W/50kPa地毯克星",
    targetAudience: "铺设地毯家庭・重度清洁",
  },
  {
    pattern: (b, m) => `3 modos de potencia inteligentes y hasta 50 minutos sin parar con ${b} ${m}`,
    patternZh: (b, m) => `节能/标准/强力 3 档智能功率调节，最长 50 分钟连续清扫，实测 ${b} ${m} 硬核续航`,
    category: "spec_power",
    angleLabel: "3档智能功率调节",
    targetAudience: "数码参数党",
  },
  {
    pattern: (b, m) => `Borde 0mm exacto: ${b} ${m} no deja ni un milímetro sin aspirar junto a los rodapiés`,
    patternZh: (b, m) => `真正 0mm 贴边滚刷结构：${b} ${m} 紧贴墙边缝隙，不留一毫米卫生死角`,
    category: "spec_power",
    angleLabel: "0mm贴边硬核结构",
    targetAudience: "严苛测评博主",
  },

  // 6. 秘密技巧・OOTD生活方式＆高性价比秘密 (Secret Hack & Home Lifestyle)
  {
    pattern: (b, m) => `【El secreto】Cómo mantener tu casa impecable en 10 minutos al día con ${b} ${m}`,
    patternZh: (b, m) => `【独家秘诀】每天只需 10 分钟就能让全屋纤尘不染，秘密全在 ${b} ${m} 的轻量折叠设计里`,
    category: "secret_hack",
    angleLabel: "10分钟极速保洁法",
    targetAudience: "独居青年・极简生活家",
  },
  {
    pattern: (b, m) => `Todos mis invitados preguntan qué aspiradora uso: el diseño futurista de ${b} ${m} impresiona`,
    patternZh: (b, m) => `每次朋友来家里都问这是什么神仙吸尘器：${b} ${m} 绿光显尘与金属质感高级感直接拉满`,
    category: "secret_hack",
    angleLabel: "高颜值出圈单品",
    targetAudience: "家居博主・年轻租房族",
  },
  {
    pattern: (b, m) => `【Hack de limpieza】Plegar el tubo de ${b} ${m} para aspirar el coche sin esfuerzo`,
    patternZh: (b, m) => `【实用技巧】巧妙拆装折叠管让 ${b} ${m} 秒变随身车载吸尘器，车座缝隙一吸即净`,
    category: "secret_hack",
    angleLabel: "车载清洁隐藏玩法",
    targetAudience: "爱车一族・自驾游达人",
  },

  // 7. 互动提问・引发评论区共鸣型 (Question & Community Engagement)
  {
    pattern: (b, m) => `¿Todavía te agachas para limpiar debajo del sofá? Mira cómo lo hace ${b} ${m}`,
    patternZh: (b, m) => `打扫沙发底你还在费力弯腰趴在地上？看看 ${b} ${m} 怎么优雅一秒折叠清扫`,
    category: "question",
    angleLabel: "弯腰清洁痛点互动",
    targetAudience: "TikTok西班牙语受众",
  },
  {
    pattern: (b, m) => `¿Verde o normal? Mira cuánto polvo invisible revela la luz de ${b} ${m}`,
    patternZh: (b, m) => `肉眼干净 vs 绿光显尘！带你实测 ${b} ${m} 到底能照出多少平时看不见的地板微尘`,
    category: "question",
    angleLabel: "绿光显尘对比挑战",
    targetAudience: "测评爱好者・猎奇观众",
  },
  {
    pattern: (b, m) => `¿50 kPa de succión por este precio? Pusimos a prueba la potencia extrema de ${b} ${m}`,
    patternZh: (b, m) => `百元级价格真能有 50 kPa 超大吸力？极限实测 ${b} ${m} 强力吸走各种顽固垃圾`,
    category: "question",
    angleLabel: "吸力极限挑战",
    targetAudience: "网购比价族・家庭采购",
  },
];

export const V18PRO_HOOK_TEMPLATES_DE: HookTemplate[] = [
  // 1. 痛点反转・免弯腰＆折叠臂＆告别重型吸尘器型 (Pain Point & 65cm Foldable Wand - German)
  {
    pattern: (b, m) => `Keine Lust mehr aufs Bücken beim Saugen unter dem Sofa? Der 65cm Klapparm des ${b} ${m} rettet deinen Rücken`,
    patternZh: (b, m) => `再也不用费力弯腰趴在地上打扫沙发底：${b} ${m} 的 65cm 折叠金属臂拯救腰椎健康`,
    category: "pain_point",
    angleLabel: "65cm折叠臂免弯腰",
    targetAudience: "腰痛困扰・家庭主妇・上班族",
  },
  {
    pattern: (b, m) => `Alter Staubsauger viel zu schwer? Mit nur 1,4 kg und 50 kPa Saugleistung macht ${b} ${m} Putzen zum Kinderspiel`,
    patternZh: (b, m) => `老式吸尘器太沉又费力？仅 1.4 kg 却有 50 kPa 强劲吸力的 ${b} ${m} 让打扫宛如游戏般轻松`,
    category: "pain_point",
    angleLabel: "1.4kg轻量告别笨重",
    targetAudience: "独居女性・长辈・家庭日常",
  },
  {
    pattern: (b, m) => `Staub in schwer erreichbaren Ecken? Die 0mm Kantenbürste des ${b} ${m} saugt Leisten millimetergenau sauber`,
    patternZh: (b, m) => `墙角踢脚线总是吸不干净？${b} ${m} 的 0mm 贴边滚刷结构紧密贴合边缘毫厘不漏`,
    category: "pain_point",
    angleLabel: "0mm贴边死角清洁",
    targetAudience: "严谨洁癖党・精细打扫族",
  },
  {
    pattern: (b, m) => `Hunde und Katzen haben Angst vor lauten Saugern? Der ${b} ${m} läuft mit flüsterleisen 60 dB sanft und leise`,
    patternZh: (b, m) => `宠物总被轰鸣的吸尘器吓飞？${b} ${m} 运行噪音低至 60 dB 温和静音不惊扰毛孩子`,
    category: "pain_point",
    angleLabel: "60dB低噪温和运行",
    targetAudience: "养宠家庭・有婴儿家庭",
  },
  {
    pattern: (b, m) => `Allergie-Alarm durch Feinstaub? Die 7-fache 99,99% Filtration des ${b} ${m} schützt deine Raumluft`,
    patternZh: (b, m) => `吸尘扬尘总是引发喷嚏鼻炎？${b} ${m} 的 7 重过滤系统以 99.99% 效率牢牢锁死微尘`,
    category: "pain_point",
    angleLabel: "7重高效过滤抗敏",
    targetAudience: "易过敏体质・母婴人群",
  },

  // 2. 效率前置・绿光显尘＆50kPa飓风吸力＆省时型 (Efficiency & Green Light 2.0 - German)
  {
    pattern: (b, m) => `Grünes Licht 2.0: Wie der ${b} ${m} unsichtbaren Staub aufdeckt und deine Putzzeit halbiert`,
    patternZh: (b, m) => `【绿光显尘2.0】${b} ${m} 照亮肉眼看不见的微尘！135°广角让清洁效率直接翻倍`,
    category: "efficiency",
    angleLabel: "绿光显尘2.0广角照明",
    targetAudience: "效率达人・TikTok种草族",
  },
  {
    pattern: (b, m) => `Bis zu 50 Minuten Power ohne Pause: Mit ${b} ${m} schaffst du die ganze Wohnung im Handumdrehen`,
    patternZh: (b, m) => `长达 50 分钟充沛续航：使用 ${b} ${m} 一气呵成搞定全屋大扫除无需频繁等待`,
    category: "efficiency",
    angleLabel: "50分钟持久续航",
    targetAudience: "大空间・日常快扫族",
  },
  {
    pattern: (b, m) => `650W Motor & 50 kPa Saugleistung: Ein Zug mit dem ${b} ${m} und der Boden ist blitzblank`,
    patternZh: (b, m) => `650W 强劲电机配合 50 kPa 飓风吸力，${b} ${m} 推过之处即刻洁净如新`,
    category: "efficiency",
    angleLabel: "650W/50kPa一推即净",
    targetAudience: "追求高效的上班族",
  },
  {
    pattern: (b, m) => `Das smarte LED-Display des ${b} ${m} zeigt Akkustand und Saugstufe in Echtzeit für volle Kontrolle`,
    patternZh: (b, m) => `高清智能 LED 数字屏幕实时显示电量与吸力模式，${b} ${m} 掌控全局不慌不乱`,
    category: "efficiency",
    angleLabel: "智能数字LED大屏",
    targetAudience: "科技家居发烧友",
  },
  {
    pattern: (b, m) => `Vom Boden bis zur Decke und fürs Auto: Das 7-in-1 Design des ${b} ${m} reinigt absolut jede Ecke`,
    patternZh: (b, m) => `从木地板、高处天花板到车载内饰：${b} ${m} 7 合 1 多功能配件轻松覆盖全场景`,
    category: "efficiency",
    angleLabel: "7合1多场景全能清扫",
    targetAudience: "爱车一族・全屋大扫除",
  },

  // 3. 硬件工业美学・65cm折叠臂＆自立停放 (Gadget & Foldable Hardware - German)
  {
    pattern: (b, m) => `Der 65cm Klapparm des ${b} ${m} ist die beste Haushaltserfindung für 2026`,
    patternZh: (b, m) => `65cm 一键弯折金属臂！${b} ${m} 带来 2026 年现代家电中最亮眼的结构创新`,
    category: "gadget",
    angleLabel: "65cm折叠金属臂结构",
    targetAudience: "数码达人・智能家居博主",
  },
  {
    pattern: (b, m) => `Steht von alleine im 90° Winkel: Das freistehende Design des ${b} ${m} spart Platz und Nerven`,
    patternZh: (b, m) => `随手一立即可 90° 稳稳自立！${b} ${m} 免打孔不倒伏的自立设计省心又美观`,
    category: "gadget",
    angleLabel: "90°免打孔自立停放",
    targetAudience: "收纳达人・精致小户型",
  },
  {
    pattern: (b, m) => `Nur 1,4 kg leicht mit Wandhalterung inklusive Ladefunktion: Eleganz pur mit dem ${b} ${m}`,
    patternZh: (b, m) => `仅 1.4 kg 羽量机身配有一体式壁挂充电收纳架：${b} ${m} 兼具轻巧与现代优雅`,
    category: "gadget",
    angleLabel: "壁挂充电收纳美学",
    targetAudience: "高端审美・品质生活",
  },

  // 4. 深度健康・7重过滤99.99%微尘拦截型 (AI / Health & Deep Clean - German)
  {
    pattern: (b, m) => `99,99% Partikelfiltration bis 0,3 Mikrometer: Der ${b} ${m} reinigt auch die Atemluft im Raum`,
    patternZh: (b, m) => `99.99% 过滤小至 0.3 微米颗粒：${b} ${m} 边除尘边净化排气，呵护室内健康呼吸`,
    category: "ai_power",
    angleLabel: "7重HEPA级微尘过滤",
    targetAudience: "健康生活・母婴家庭",
  },
  {
    pattern: (b, m) => `Tiefenreinigung für Matratzen und Sofas: So beseitigt der ${b} ${m} Milben und Tiefenstaub`,
    patternZh: (b, m) => `强力真空负压直达床垫与沙发深层除螨除尘，${b} ${m} 为全家人守住健康防线`,
    category: "ai_power",
    angleLabel: "床褥织物深层除螨",
    targetAudience: "家庭除螨・精致生活",
  },

  // 5. 硬核参数・650W电机＆50kPa飓风吸力型 (Spec Power & 50 kPa - German)
  {
    pattern: (b, m) => `650W Brushless-Motor & 50 kPa Power: Der ${b} ${m} zieht jeden Schmutz aus dicken Teppichen`,
    patternZh: (b, m) => `650W 无刷大电机 ✕ 50 kPa 飓风吸力：${b} ${m} 连厚重地毯深层的碎屑毛发都能吸净`,
    category: "spec_power",
    angleLabel: "650W/50kPa地毯克星",
    targetAudience: "铺设地毯家庭・重度清洁",
  },
  {
    pattern: (b, m) => `3 intelligente Saugstufen und 50 Minuten Dauerpower im ${b} ${m} Praxistest`,
    patternZh: (b, m) => `节能/标准/强劲 3 档智能切换，长达 50 分钟连续强劲运行，${b} ${m} 实测表现惊艳`,
    category: "spec_power",
    angleLabel: "3档智能功率调节",
    targetAudience: "参数党・硬核测评",
  },

  // 6. 秘密技巧・省时生活方式 (Secret Hack - German)
  {
    pattern: (b, m) => `【Haushalts-Hack】In nur 10 Minuten täglich die ganze Wohnung sauber halten mit ${b} ${m}`,
    patternZh: (b, m) => `【家务秘诀】每天只需 10 分钟全屋光洁如新，秘诀就在轻巧折叠的 ${b} ${m}`,
    category: "secret_hack",
    angleLabel: "10分钟极速保洁法",
    targetAudience: "独居青年・极简生活",
  },
  {
    pattern: (b, m) => `Futuristisches Design mit grünem Licht: Warum jeder Gast nach dem ${b} ${m} fragt`,
    patternZh: (b, m) => `绿光显尘与高端金属机身：为什么每个来家里的朋友都对 ${b} ${m} 赞不绝口`,
    category: "secret_hack",
    angleLabel: "高颜值出圈单品",
    targetAudience: "家居博主・年轻家庭",
  },

  // 7. 互动提问・引发评论区共鸣型 (Question - German)
  {
    pattern: (b, m) => `Bückst du dich noch beim Saubermachen? Schau dir an, wie einfach es mit ${b} ${m} geht`,
    patternZh: (b, m) => `打扫低矮缝隙你还在费力弯腰？快看 ${b} ${m} 怎样一键折叠轻松滑入清扫`,
    category: "question",
    angleLabel: "弯腰清洁痛点互动",
    targetAudience: "TikTok德语受众",
  },
  {
    pattern: (b, m) => `Grünes Licht vs normales Licht: Wie viel unsichtbaren Staub deckt der ${b} ${m} bei dir auf?`,
    patternZh: (b, m) => `普通光线 vs 绿光显尘！来看看 ${b} ${m} 到底能照出多少隐藏在地板上的微尘`,
    category: "question",
    angleLabel: "绿光显尘对比挑战",
    targetAudience: "测评爱好者・猎奇观众",
  },
  {
    pattern: (b, m) => `50 kPa Saugleistung zum Spitzenpreis? Wir haben den ${b} ${m} auf Herz und Nieren getestet`,
    patternZh: (b, m) => `超高性价比真能拥有 50 kPa 怪兽级吸力？极限实测 ${b} ${m} 到底有多能吸`,
    category: "question",
    angleLabel: "吸力极限挑战",
    targetAudience: "比价买手・家庭采购",
  },
];

const V18PRO_PREFIX_PAIRS_ES: [string, string][] = [
  ["¡Top 1 en limpieza!", "【全网清洁榜Top1】"],
  ["¡Adiós al dolor de espalda!", "【彻底告别腰酸背痛】"],
  ["¡El secreto para tu hogar!", "【精致家居秘密好物】"],
  ["¡Revisión 100% honesta!", "【真实无滤镜实测】"],
  ["¡50 kPa de pura potencia!", "【50kPa怪兽级吸力】"],
  ["¡Diseño plegable viral!", "【火爆全网折叠黑科技】"],
  ["¡Luz verde 2.0 brutal!", "【绿光显尘2.0太强了】"],
  ["¡Must-have para el hogar!", "【2026现代家庭必备】"],
  ["¡Solo 1.4 kg ultra ligera!", "【1.4kg羽量级机身】"],
  ["¡Limpieza profunda total!", "【全屋无死角深度除尘】"],
];

const V18PRO_SUFFIX_PAIRS_ES: [string, string][] = [
  [" ¡y mi casa nunca estuvo tan limpia!", "，家里从来没这么一尘不染过！"],
  [" ¡limpiar nunca fue tan fácil y rápido!", "，做家务从未如此轻松高效！"],
  [" ¡vas a querer tirar tu vieja aspiradora!", "，用过之后只想扔掉老式吸尘器！"],
  [" ¡la mejor compra para el hogar de 2026!", "，堪称 2026 年最值回票价的家电！"],
  [" ¡y la luz verde te dejará sin palabras!", "，绿光显尘效果绝对让你惊叹！"],
  [" ¡el cambio en tu rutina diaria es radical!", "，彻底拯救你的每日清洁打扫！"],
];

const V18PRO_PREFIX_PAIRS_DE: [string, string][] = [
  ["【Bestseller】", "【热销爆款推荐】"],
  ["【Rücken-Retter】", "【告别弯腰神器】"],
  ["【Putz-Tipp 2026】", "【2026清洁必看】"],
  ["【Echter Härtetest】", "【真实极限实测】"],
  ["【50 kPa Monster-Power】", "【50kPa怪兽吸力】"],
  ["【Klapparm-Innovation】", "【折叠臂黑科技】"],
  ["【Grünes Licht 2.0】", "【绿光显尘2.0】"],
  ["【Nur 1,4 kg leicht】", "【1.4kg羽量轻巧】"],
];

const V18PRO_SUFFIX_PAIRS_DE: [string, string][] = [
  [" – das Haus war noch nie so sauber!", "，家里从来没这么一尘不染过！"],
  [" – Putzen war noch nie so entspannt!", "，做家务打扫从未如此轻松惬意！"],
  [" – du wirst deinen alten Sauger nie wieder nutzen!", "，用过它直接告别笨重老式吸尘器！"],
  [" – das beste Upgrade für dein Zuhause 2026!", "，堪称 2026 年最值当的家居升级！"],
  [" – der grüne Licht-Effekt ist unglaublich!", "，绿光显尘效果绝对让你大吃一惊！"],
];

export function generateV18proAlgorithmicTitles(
  category: AngleCategory = "all_mixed",
  customKeyword?: string,
  customTags?: string,
  batchSeed = Date.now(),
  language: TargetLanguage = "es"
): GeneratedTitle[] {
  const brand = "DyMona";
  const model = "V18 PRO";
  const isGerman = language === "de";

  const defaultTags = isGerman ? V18PRO_FIXED_TAGS_DE : V18PRO_FIXED_TAGS_ES;
  const activeTags = (customTags && customTags.trim()) ? customTags.trim() : defaultTags;
  const results: GeneratedTitle[] = [];
  const seenHooks = new Set<string>();

  const baseTemplates = isGerman ? V18PRO_HOOK_TEMPLATES_DE : V18PRO_HOOK_TEMPLATES_ES;
  const prefixPairs = isGerman ? V18PRO_PREFIX_PAIRS_DE : V18PRO_PREFIX_PAIRS_ES;
  const suffixPairs = isGerman ? V18PRO_SUFFIX_PAIRS_DE : V18PRO_SUFFIX_PAIRS_ES;

  // Filter templates by category
  let pool = baseTemplates.filter(
    (t) => category === "all_mixed" || t.category === category
  );
  if (pool.length === 0) pool = baseTemplates;

  // Shuffle pool
  const shuffledPool = [...pool].sort(() => Math.random() - 0.5);

  let templateIdx = 0;
  let attempt = 0;

  while (results.length < 50 && attempt < 300) {
    attempt++;
    const tpl = shuffledPool[templateIdx % shuffledPool.length];
    templateIdx++;

    let baseHook = tpl.pattern(brand, model, customKeyword);
    let baseZh = tpl.patternZh(brand, model, customKeyword);

    // Apply smart permutations for rich uniqueness with paired translations
    const styleRoll = Math.random();
    if (styleRoll < 0.28 && !baseHook.startsWith("¡") && !baseHook.startsWith("¿") && !baseHook.startsWith("【")) {
      const [pfx, pfxZh] = prefixPairs[Math.floor(Math.random() * prefixPairs.length)];
      baseHook = `${pfx} ${baseHook}`;
      baseZh = `${pfxZh} ${baseZh}`;
    } else if (styleRoll > 0.72 && baseHook.length < 70 && !baseHook.endsWith("!") && !baseHook.endsWith("?")) {
      const [sfx, sfxZh] = suffixPairs[Math.floor(Math.random() * suffixPairs.length)];
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
      id: `v18pro-algo-${language}-${batchSeed}-${results.length + 1}-${Math.random().toString(36).substr(2, 4)}`,
      productId: "v18pro",
      title: fullTitle,
      hook: baseHook,
      tags: activeTags,
      angle: tpl.angleLabel,
      angleCategory: tpl.category,
      targetAudience: tpl.targetAudience,
      charCount: fullTitle.length,
      hookCharCount: baseHook.length,
      language: language,
      translationZh: baseZh,
      isFavorite: false,
      createdAt: new Date().toISOString(),
    });
  }

  return results.slice(0, 50);
}
