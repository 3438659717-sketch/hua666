import { AngleCategory, GeneratedTitle, TargetLanguage } from "../types";

export const V17MAX_FIXED_TAGS_DE = "#DyMona #V17MAX #staubsauger #putztipps #haushaltshelfer #tiktokshop";
export const V17MAX_FIXED_TAGS_ES = "#DyMona #V17MAX #aspiradora #hogargrande #limpiezahogar #tiktokshop #mascotas";
export const V17MAX_FIXED_TAGS = V17MAX_FIXED_TAGS_DE;

interface HookTemplate {
  pattern: (brand: string, model: string, keyword?: string) => string;
  patternZh: (brand: string, model: string, keyword?: string) => string;
  category: AngleCategory;
  angleLabel: string;
  targetAudience: string;
}

export const V17MAX_HOOK_TEMPLATES_DE: HookTemplate[] = [
  // 1. 痛点反转・大户型电量焦虑＆频繁倒垃圾＆毛发缠绕型 (Pain Point & 150min Dual Battery & 2L Dustbin)
  {
    pattern: (b, m) => `Schluss mit ständigem Nachladen bei großen Häusern: ${b} ${m} hält mit Dual-Akku bis zu 150 Minuten durch`,
    patternZh: (b, m) => `大户型打扫再也不用频繁停下来充电：配备双电池的 ${b} ${m} 拥有长达 150 分钟超长续航`,
    category: "pain_point",
    angleLabel: "150分钟告别电量焦虑",
    targetAudience: "大户型・复式楼・别墅家庭",
  },
  {
    pattern: (b, m) => `Keine Lust auf ständiges Mülleimer-Entleeren? Der 2L XXL-Behälter des ${b} ${m} reicht für 3 Monate`,
    patternZh: (b, m) => `受够了每次吸两下就要跑去倒垃圾？${b} ${m} 的 2L 超大集尘桶足以支撑 3 个月免倒垃圾`,
    category: "pain_point",
    angleLabel: "2L超大尘桶免倒垃圾",
    targetAudience: "家庭主妇・大空间家庭",
  },
  {
    pattern: (b, m) => `Tierhaare blockieren deine Bürste? Die 25,5cm V-Anti-Tangle-Bürste des ${b} ${m} verhindert jedes Verheddern`,
    patternZh: (b, m) => `宠物毛发总是死死缠在滚刷上？${b} ${m} 的 25.5cm 加宽 V 型防缠绕地刷彻底告别手动清理`,
    category: "pain_point",
    angleLabel: "V型防缠绕地刷",
    targetAudience: "养宠家庭・长发人群",
  },
  {
    pattern: (b, m) => `Stauballergie beim Saugen? Das HEPA H14-System des ${b} ${m} filtert 99,99% aller Feinstaubpartikel`,
    patternZh: (b, m) => `吸尘时总担心扬尘引发过敏？${b} ${m} 搭载 HEPA H14 级滤网，99.99% 深度锁住 0.3 微米微尘`,
    category: "pain_point",
    angleLabel: "HEPA H14级医疗级过滤",
    targetAudience: "易敏体质・母婴家庭",
  },
  {
    pattern: (b, m) => `Maisonette-Wohnung mit 500m² Fläche? Warum der ${b} ${m} der ultimative Staubsauger für Großräume ist`,
    patternZh: (b, m) => `面对 500㎡ 复式豪宅无从下手？为什么说 ${b} ${m} 是大空间深度清洁的终极神器`,
    category: "pain_point",
    angleLabel: "500㎡大户型全屋覆盖",
    targetAudience: "大平层业主・高端家庭",
  },
  {
    pattern: (b, m) => `Alte Staubsauger verlieren nach 10 Minuten die Kraft – nicht der ${b} ${m} mit 58 kPa Saugleistung`,
    patternZh: (b, m) => `老式吸尘器开 10 分钟吸力就衰减？拥有 58 kPa 极限怪兽吸力的 ${b} ${m} 从始至终吸力持久不衰`,
    category: "pain_point",
    angleLabel: "58kPa持久不衰吸力",
    targetAudience: "注重吸力品质的人群",
  },

  // 2. 效率前置・58kPa怪兽吸力＆25.5cm加宽刷头＆省时型 (Efficiency & 58 kPa Monster Suction)
  {
    pattern: (b, m) => `58 kPa Monster-Saugleistung: Wie der ${b} ${m} Teppiche und Ritzen in Rekordzeit porentief reinigt`,
    patternZh: (b, m) => `58 kPa 极限怪兽吸力！看 ${b} ${m} 如何在创纪录的时间内将地毯与缝隙深层污垢一吸而净`,
    category: "efficiency",
    angleLabel: "58kPa怪兽级深层吸力",
    targetAudience: "效率党・高要求保洁",
  },
  {
    pattern: (b, m) => `Mit 25,5 cm extra breiter Bürste reinigt der ${b} ${m} 500m² in der halben Zeit`,
    patternZh: (b, m) => `配备 25.5 cm 超宽滚刷，${b} ${m} 让你清洁 500㎡ 大户型所花费的时间直接减半`,
    category: "efficiency",
    angleLabel: "25.5cm加宽清洁覆盖",
    targetAudience: "大空间高效率清洁人群",
  },
  {
    pattern: (b, m) => `1-Klick-Entleerung und 90° Freistehend: So mühelos funktioniert moderne Hausarbeit mit ${b} ${m}`,
    patternZh: (b, m) => `一键倾倒垃圾 ✕ 90° 随处自立停放：使用 ${b} ${m} 让现代家庭保洁变得毫不费力`,
    category: "efficiency",
    angleLabel: "1键倒尘/自立停放",
    targetAudience: "家务效率达人",
  },
  {
    pattern: (b, m) => `Das smarte LED-Display des ${b} ${m} zeigt Akku & Saugleistung auf die Sekunde genau an`,
    patternZh: (b, m) => `${b} ${m} 搭载清晰智能 LED 大屏，实时精准显示剩余电量百分比与实时工作状态`,
    category: "efficiency",
    angleLabel: "清晰LED智能大屏",
    targetAudience: "科技家电爱好者",
  },
  {
    pattern: (b, m) => `Von Decke bis Auto: Mit 3 flexiblen Ladeoptionen und 2-in-1 Aufsätzen meistert der ${b} ${m} alles`,
    patternZh: (b, m) => `从天花板、缝隙到汽车座椅：标配二合一刷头与 3 种灵活充电模式的 ${b} ${m} 搞定一切场景`,
    category: "efficiency",
    angleLabel: "多功能全场景覆盖",
    targetAudience: "全能家电追求者",
  },

  // 3. 硬件工业美学・650W电机＆90°自立＆双电快充型 (Gadget & Flagship Engineering)
  {
    pattern: (b, m) => `650W bürstenloser Motor & Dual-Akku-Technologie: Der ${b} ${m} setzt neue Maßstäbe`,
    patternZh: (b, m) => `650W 大功率无刷电机 ✕ 双电池并联技术：${b} ${m} 重新定义旗舰无线吸尘器行业标杆`,
    category: "gadget",
    angleLabel: "650W无刷电机工业美学",
    targetAudience: "数码硬件极客・测评博主",
  },
  {
    pattern: (b, m) => `2L XXL-Behälter mit antibakterieller Versiegelung: Premium-Technik im ${b} ${m}`,
    patternZh: (b, m) => `2L 巨量集尘筒搭配严密抗菌密封系统：${b} ${m} 展现德系精工级别的硬件工艺`,
    category: "gadget",
    angleLabel: "2L巨无霸集尘结构",
    targetAudience: "品质生活家・细节控",
  },
  {
    pattern: (b, m) => `3 vielseitige Lade-Optionen für maximale Flexibilität: So schlau ist der ${b} ${m}`,
    patternZh: (b, m) => `整机座充/电池单独充/机身直充 3 种灵活充电方式：${b} ${m} 让大空间用电自由随心`,
    category: "gadget",
    angleLabel: "3种灵活充电模式",
    targetAudience: "科技生活追求者",
  },

  // 4. 深度健康・HEPA H14医疗级过滤型 (AI / Health & H14 Medical Grade)
  {
    pattern: (b, m) => `HEPA H14 filtert 99,995% bis 0,3µm: Der ${b} ${m} ist ideal für Allergiker & Haustierbesitzer`,
    patternZh: (b, m) => `HEPA H14 级医疗滤网过滤 99.995% 微尘与过敏原：${b} ${m} 守护母婴与养宠家庭空气健康`,
    category: "ai_power",
    angleLabel: "HEPA H14医疗级抗敏",
    targetAudience: "过敏体质・高端母婴",
  },
  {
    pattern: (b, m) => `Tiefenreinigung für Polster und Matratzen: Beseitigt Milben mit 58 kPa Unterdruck im ${b} ${m}`,
    patternZh: (b, m) => `58 kPa 极限真空负压直透床垫被褥拔除深层螨虫与皮屑，${b} ${m} 全方位净化家居生态`,
    category: "ai_power",
    angleLabel: "床褥织物深层除螨",
    targetAudience: "除螨健康倡导者",
  },
  {
    pattern: (b, m) => `Reine Ausblasluft dank 6-Stufen-Zyklon: Atme auf beim Saugen mit dem ${b} ${m}`,
    patternZh: (b, m) => `6 重多锥气旋密封分离技术，排气洁净度超越日常空气，让使用 ${b} ${m} 成为享受`,
    category: "ai_power",
    angleLabel: "多锥气旋洁净排气",
    targetAudience: "注重空气品质人群",
  },

  // 5. 硬核参数・58kPa极限吸力＆650W大功率型 (Spec Power & 58 kPa)
  {
    pattern: (b, m) => `58 kPa Saugleistung & 650W Power: Warum der ${b} ${m} jeden Schmutz im Nu eliminiert`,
    patternZh: (b, m) => `58 kPa 极限真空吸力 ✕ 650W 澎湃动力：为什么说 ${b} ${m} 能瞬间粉碎各种顽固垃圾`,
    category: "spec_power",
    angleLabel: "58kPa/650W性能怪兽",
    targetAudience: "硬核数据党・测评发烧友",
  },
  {
    pattern: (b, m) => `Dual-Akku für 150 Minuten Nonstop-Einsatz: Der ${b} ${m} bricht alle Ausdauer-Rekorde`,
    patternZh: (b, m) => `双电池系统实现 150 分钟无中断极限续航：${b} ${m} 打破同级别无线吸尘器续航纪录`,
    category: "spec_power",
    angleLabel: "150分钟超长续航",
    targetAudience: "大平层业主・长续航刚需",
  },
  {
    pattern: (b, m) => `25,5 cm V-Walzenbürste: Optimale Strömungsmechanik im ${b} ${m} für rückstandslose Sauberkeit`,
    patternZh: (b, m) => `25.5 cm 加宽 V 型滚刷与流体动力风道设计：${b} ${m} 实现真正的一吸即净零残留`,
    category: "spec_power",
    angleLabel: "25.5cm防缠绕空气动力学",
    targetAudience: "参数党・机械美学爱好者",
  },

  // 6. 秘密技巧・大户型家务极速流 (Secret Hack & Big House Routine)
  {
    pattern: (b, m) => `【Villa-Putzroutine】Wie man 500m² in 30 Minuten sauber hält mit dem ${b} ${m}`,
    patternZh: (b, m) => `【大宅保洁秘诀】如何用 ${b} ${m} 在 30 分钟内高效打理完 500㎡ 别墅复式空间`,
    category: "secret_hack",
    angleLabel: "大户型30分钟极速保洁",
    targetAudience: "别墅业主・多层住宅家庭",
  },
  {
    pattern: (b, m) => `Keine Tierhaare mehr an der Bürste: Der geniale V-Form Trick des ${b} ${m}`,
    patternZh: (b, m) => `滚刷从此告别宠物毛发缠绕：揭秘 ${b} ${m} 独家 V 型螺旋结构的防缠绕神奇妙用`,
    category: "secret_hack",
    angleLabel: "防缠毛发隐藏技巧",
    targetAudience: "猫狗宠物博主・铲屎官",
  },
  {
    pattern: (b, m) => `【Kaufberatung 2026】Warum der ${b} ${m} teure Marken-Sauger mühelos schlägt`,
    patternZh: (b, m) => `【2026选购指南】为什么配置拉满的 ${b} ${m} 能在大户型深度清洁中完胜高价大牌`,
    category: "secret_hack",
    angleLabel: "高性价比旗舰选购",
    targetAudience: "精明买手・理性消费者",
  },

  // 7. 互动提问・引发高讨论度型 (Question & Community Engagement)
  {
    pattern: (b, m) => `Reicht dir die Akkulaufzeit deines Saugers? Teste 150 Minuten mit ${b} ${m}`,
    patternZh: (b, m) => `你家吸尘器平时充满电能吸多久？来看看拥有 150 分钟双电续航的 ${b} ${m} 表现`,
    category: "question",
    angleLabel: "续航焦虑互动提问",
    targetAudience: "TikTok德语区观众",
  },
  {
    pattern: (b, m) => `Hundehaare oder Katzenhaare? Wir testen die Anti-Tangle-Bürste des ${b} ${m}`,
    patternZh: (b, m) => `狗狗掉毛还是猫咪换毛？实测 ${b} ${m} 的防缠绕 V 刷面对满地毛发究竟缠不缠`,
    category: "question",
    angleLabel: "宠物毛发防缠挑战",
    targetAudience: "养宠人群・测试围观者",
  },
  {
    pattern: (b, m) => `58 kPa Saugleistung: Schafft der ${b} ${m} schwere Kaffeebohnen & Schrauben?`,
    patternZh: (b, m) => `58 kPa 极限怪兽吸力！带你实测 ${b} ${m} 连咖啡豆、硬币螺丝都能瞬间吸入吗`,
    category: "question",
    angleLabel: "极限颗粒硬核吸力测试",
    targetAudience: "猎奇观众・评测达人",
  },
];

export const V17MAX_HOOK_TEMPLATES_ES: HookTemplate[] = [
  // 1. 痛点反转・大户型电量焦虑＆频繁倒垃圾＆毛发缠绕型 (Pain Point & 150min Dual Battery - Spanish)
  {
    pattern: (b, m) => `¿Cansado de recargar la aspiradora a mitad de la limpieza? ${b} ${m} dura hasta 150 minutos con batería dual`,
    patternZh: (b, m) => `大户型打扫再也不用频繁停下来充电：配备双电池的 ${b} ${m} 拥有长达 150 分钟超长续航`,
    category: "pain_point",
    angleLabel: "150分钟告别电量焦虑",
    targetAudience: "大户型・复式楼・别墅家庭",
  },
  {
    pattern: (b, m) => `¿Harto de vaciar el depósito a cada rato? El tanque XXL de 2L en ${b} ${m} dura hasta 3 meses`,
    patternZh: (b, m) => `受够了每次吸两下就要跑去倒垃圾？${b} ${m} 的 2L 超大集尘桶足以支撑 3 个月免倒垃圾`,
    category: "pain_point",
    angleLabel: "2L超大尘桶免倒垃圾",
    targetAudience: "家庭主妇・大空间家庭",
  },
  {
    pattern: (b, m) => `¿Pelos de mascota atascados en el cepillo? El cabezal en V de 25.5cm de ${b} ${m} nunca se enreda`,
    patternZh: (b, m) => `宠物毛发总是死死缠在滚刷上？${b} ${m} 的 25.5cm 加宽 V 型防缠绕地刷彻底告别手动清理`,
    category: "pain_point",
    angleLabel: "V型防缠绕地刷",
    targetAudience: "养宠家庭・长发人群",
  },
  {
    pattern: (b, m) => `¿Alergias al polvo en casa? El filtro HEPA H14 de ${b} ${m} atrapa el 99.99% de micropartículas`,
    patternZh: (b, m) => `吸尘时总担心扬尘引发过敏？${b} ${m} 搭载 HEPA H14 级滤网，99.99% 深度锁住 0.3 微米微尘`,
    category: "pain_point",
    angleLabel: "HEPA H14级医疗级过滤",
    targetAudience: "易敏体质・母婴家庭",
  },
  {
    pattern: (b, m) => `¿Casa de más de 300m²? Por qué ${b} ${m} es la aspiradora definitiva para casas grandes`,
    patternZh: (b, m) => `面对 500㎡ 复式豪宅无从下手？为什么说 ${b} ${m} 是大空间深度清洁的终极神器`,
    category: "pain_point",
    angleLabel: "500㎡大户型全屋覆盖",
    targetAudience: "大平层业主・高端家庭",
  },

  // 2. 效率前置・58kPa怪兽吸力＆25.5cm加宽刷头＆省时型 (Efficiency & 58 kPa - Spanish)
  {
    pattern: (b, m) => `58 kPa de succión monstruosa: Mira cómo ${b} ${m} limpia alfombras y ranuras en tiempo récord`,
    patternZh: (b, m) => `58 kPa 极限怪兽吸力！看 ${b} ${m} 如何在创纪录的时间内将地毯与缝隙深层污垢一吸而净`,
    category: "efficiency",
    angleLabel: "58kPa怪兽级深层吸力",
    targetAudience: "效率党・高要求保洁",
  },
  {
    pattern: (b, m) => `Con su cepillo extra ancho de 25.5 cm, ${b} ${m} limpia 500m² en la mitad de tiempo`,
    patternZh: (b, m) => `配备 25.5 cm 超宽滚刷，${b} ${m} 让你清洁 500㎡ 大户型所花费的时间直接减半`,
    category: "efficiency",
    angleLabel: "25.5cm加宽清洁覆盖",
    targetAudience: "大空间高效率清洁人群",
  },
  {
    pattern: (b, m) => `Vaciado en 1 clic y se sostiene sola a 90°: la limpieza moderna sin esfuerzo con ${b} ${m}`,
    patternZh: (b, m) => `一键倾倒垃圾 ✕ 90° 随处自立停放：使用 ${b} ${m} 让现代家庭保洁变得毫不费力`,
    category: "efficiency",
    angleLabel: "1键倒尘/自立停放",
    targetAudience: "家务效率达人",
  },
  {
    pattern: (b, m) => `La pantalla LED inteligente de ${b} ${m} muestra la batería y potencia al segundo`,
    patternZh: (b, m) => `${b} ${m} 搭载清晰智能 LED 大屏，实时精准显示剩余电量百分比与实时工作状态`,
    category: "efficiency",
    angleLabel: "清晰LED智能大屏",
    targetAudience: "科技家电爱好者",
  },

  // 3. 硬件工业美学・650W电机＆双电快充 (Gadget & Flagship - Spanish)
  {
    pattern: (b, m) => `Motor de 650W y batería dual intercambiable: ${b} ${m} redefine la gama alta`,
    patternZh: (b, m) => `650W 大功率无刷电机 ✕ 双电池并联技术：${b} ${m} 重新定义旗舰无线吸尘器行业标杆`,
    category: "gadget",
    angleLabel: "650W无刷电机工业美学",
    targetAudience: "数码硬件极客・测评博主",
  },
  {
    pattern: (b, m) => `Depósito gigante de 2L con sellado antibacteriano: la tecnología prémium de ${b} ${m}`,
    patternZh: (b, m) => `2L 巨量集尘筒搭配严密抗菌密封系统：${b} ${m} 展现高端精工级别的硬件工艺`,
    category: "gadget",
    angleLabel: "2L巨无霸集尘结构",
    targetAudience: "品质生活家・细节控",
  },

  // 4. 深度健康・HEPA H14医疗级过滤型 (AI / Health - Spanish)
  {
    pattern: (b, m) => `Filtro HEPA H14 médico al 99.99%: ${b} ${m} es perfecta para hogares con mascotas y alergias`,
    patternZh: (b, m) => `HEPA H14 级医疗滤网过滤 99.995% 微尘与过敏原：${b} ${m} 守护母婴与养宠家庭空气健康`,
    category: "ai_power",
    angleLabel: "HEPA H14医疗级抗敏",
    targetAudience: "过敏体质・高端母婴",
  },
  {
    pattern: (b, m) => `Elimina ácaros y suciedad profunda en colchones con los 58 kPa de succión de ${b} ${m}`,
    patternZh: (b, m) => `58 kPa 极限真空负压直透床垫被褥拔除深层螨虫与皮屑，${b} ${m} 全方位净化家居生态`,
    category: "ai_power",
    angleLabel: "床褥织物深层除螨",
    targetAudience: "除螨健康倡导者",
  },

  // 5. 硬核参数・58kPa极限吸力＆650W大功率 (Spec Power - Spanish)
  {
    pattern: (b, m) => `58 kPa de pura potencia y 650W: Por qué ${b} ${m} supera a cualquier aspiradora del mercado`,
    patternZh: (b, m) => `58 kPa 极限真空吸力 ✕ 650W 澎湃动力：为什么说 ${b} ${m} 能瞬间粉碎各种顽固垃圾`,
    category: "spec_power",
    angleLabel: "58kPa/650W性能怪兽",
    targetAudience: "硬核数据党・测评发烧友",
  },
  {
    pattern: (b, m) => `Batería dual para 150 minutos de autonomía: el récord imbatible de ${b} ${m}`,
    patternZh: (b, m) => `双电池系统实现 150 分钟无中断极限续航：${b} ${m} 打破同级别无线吸尘器续航纪录`,
    category: "spec_power",
    angleLabel: "150分钟超长续航",
    targetAudience: "大平层业主・长续航刚需",
  },

  // 6. 秘密技巧・大户型家务极速流 (Secret Hack - Spanish)
  {
    pattern: (b, m) => `【Rutina de limpieza】Cómo limpiar una casa de 500m² en 30 minutos con ${b} ${m}`,
    patternZh: (b, m) => `【大宅保洁秘诀】如何用 ${b} ${m} 在 30 分钟内高效打理完 500㎡ 别墅复式空间`,
    category: "secret_hack",
    angleLabel: "大户型30分钟极速保洁",
    targetAudience: "别墅业主・多层住宅家庭",
  },
  {
    pattern: (b, m) => `El truco definitivo para pelos de perro y gato: el cepillo en V de ${b} ${m}`,
    patternZh: (b, m) => `滚刷从此告别宠物毛发缠绕：揭秘 ${b} ${m} 独家 V 型螺旋结构的防缠绕神奇妙用`,
    category: "secret_hack",
    angleLabel: "防缠毛发隐藏技巧",
    targetAudience: "猫狗宠物博主・铲屎官",
  },

  // 7. 互动提问・引发高讨论度型 (Question - Spanish)
  {
    pattern: (b, m) => `¿Cuánto dura la batería de tu aspiradora? Mira lo que duran 150 minutos en ${b} ${m}`,
    patternZh: (b, m) => `你家吸尘器平时充满电能吸多久？来看看拥有 150 分钟双电续航的 ${b} ${m} 表现`,
    category: "question",
    angleLabel: "续航焦虑互动提问",
    targetAudience: "TikTok西语区观众",
  },
  {
    pattern: (b, m) => `¿Pelos de mascota en la alfombra? Pusimos a prueba el cepillo anti-enredo de ${b} ${m}`,
    patternZh: (b, m) => `地毯上的厚重宠物毛发怎么清？实测 ${b} ${m} 防缠绕滚刷能否一扫而空`,
    category: "question",
    angleLabel: "宠物毛发防缠挑战",
    targetAudience: "养宠人群・测试围观者",
  },
];

const V17MAX_PREFIX_PAIRS_DE: [string, string][] = [
  ["【58 kPa Monster-Sauger】", "【58kPa怪兽级旗舰】"],
  ["【150 Min Dual-Akku】", "【150分钟双电超长续航】"],
  ["【500m² Großraum-Tipp】", "【500㎡大户型清洁神器】"],
  ["【Keine verhedderten Haare】", "【彻底告别毛发缠绕】"],
  ["【2L XXL-Behälter】", "【2L巨无霸免倒尘桶】"],
  ["【HEPA H14 Medizin-Filter】", "【HEPA H14医疗级过滤】"],
  ["【Echter Härtetest 2026】", "【2026硬核实测】"],
  ["【Flaggschiff-Sauger】", "【旗舰顶配天花板】"],
];

const V17MAX_SUFFIX_PAIRS_DE: [string, string][] = [
  [" – das beste Großraum-Upgrade für 2026!", "，堪称 2026 年大户型清洁的最强升级！"],
  [" – saugen ohne Ladepause für das ganze Haus!", "，全屋清洁一气呵成无需中途充电！"],
  [" – kein Haar verheddert sich mehr in der Bürste!", "，滚刷再也不会缠满恼人的长毛发！"],
  [" – 3 Monate staubsaugen ohne Müll zu entleeren!", "，长达 3 个月无需倒垃圾脏手！"],
  [" – Teppiche werden tiefenrein wie am ersten Tag!", "，地毯深层微尘瞬间吸净如新！"],
];

const V17MAX_PREFIX_PAIRS_ES: [string, string][] = [
  ["¡58 kPa de potencia monstruo!", "【58kPa怪兽级旗舰】"],
  ["¡150 min de batería dual!", "【150分钟双电超长续航】"],
  ["¡Para casas de más de 300m²!", "【大户型豪宅清洁神器】"],
  ["¡Cero pelos enredados!", "【彻底告别毛发缠绕】"],
  ["¡Depósito XXL de 2 Litros!", "【2L巨无霸免倒尘桶】"],
  ["¡Filtro médico HEPA H14!", "【HEPA H14医疗级过滤】"],
  ["¡Top 1 para hogares grandes!", "【大空间清洁口碑榜首】"],
];

const V17MAX_SUFFIX_PAIRS_ES: [string, string][] = [
  [" ¡la mejor compra para casas grandes en 2026!", "，堪称 2026 年大户型清洁的最强升级！"],
  [" ¡limpia toda la casa sin parar a cargar!", "，全屋清洁一气呵成无需中途充电！"],
  [" ¡los pelos de mascota ya no son un problema!", "，滚刷再也不会缠满恼人的长毛发！"],
  [" ¡3 meses aspirando sin vaciar el depósito!", "，长达 3 个月无需倒垃圾脏手！"],
  [" ¡las alfombras quedan como nuevas en 1 pasada!", "，地毯深层微尘瞬间吸净如新！"],
];

export function generateV17maxAlgorithmicTitles(
  category: AngleCategory = "all_mixed",
  customKeyword?: string,
  customTags?: string,
  batchSeed = Date.now(),
  language: TargetLanguage = "de"
): GeneratedTitle[] {
  const brand = "DyMona";
  const model = "V17 MAX";
  const isGerman = language === "de";

  const defaultTags = isGerman ? V17MAX_FIXED_TAGS_DE : V17MAX_FIXED_TAGS_ES;
  const activeTags = (customTags && customTags.trim()) ? customTags.trim() : defaultTags;
  const results: GeneratedTitle[] = [];
  const seenHooks = new Set<string>();

  const baseTemplates = isGerman ? V17MAX_HOOK_TEMPLATES_DE : V17MAX_HOOK_TEMPLATES_ES;
  const prefixPairs = isGerman ? V17MAX_PREFIX_PAIRS_DE : V17MAX_PREFIX_PAIRS_ES;
  const suffixPairs = isGerman ? V17MAX_SUFFIX_PAIRS_DE : V17MAX_SUFFIX_PAIRS_ES;

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
      id: `v17max-algo-${language}-${batchSeed}-${results.length + 1}-${Math.random().toString(36).substr(2, 4)}`,
      productId: "v17max",
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
