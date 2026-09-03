import { AngleCategory, GeneratedTitle } from "../types";

export const V17MAX_FIXED_TAGS = "#DyMona #V17MAX #staubsauger #putztipps #haushaltshelfer #tiktokshop";

interface HookTemplate {
  pattern: (brand: string, model: string, keyword?: string) => string;
  patternZh: (brand: string, model: string, keyword?: string) => string;
  category: AngleCategory;
  angleLabel: string;
  targetAudience: string;
}

export const V17MAX_HOOK_TEMPLATES: HookTemplate[] = [
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
    targetAudience: "科技数码极客・测评博主",
  },
  {
    pattern: (b, m) => `Parken ohne Wandhalterung: Das 90° selbststehende Design des ${b} ${m} begeistert jeden`,
    patternZh: (b, m) => `无需靠墙或打孔固定：${b} ${m} 创新的 90° 自由站立停放设计随时随地随停随用`,
    category: "gadget",
    angleLabel: "90°免打孔独立自立",
    targetAudience: "空间设计与收纳控",
  },
  {
    pattern: (b, m) => `3 flexible Ladeoptionen inklusive Wandhalterung: Das durchdachte Ladekonzept des ${b} ${m}`,
    patternZh: (b, m) => `支持独立电池充、机身直充与壁挂充 3 种模式：${b} ${m} 的充电体系兼具美观与便利`,
    category: "gadget",
    angleLabel: "3种灵活快充体系",
    targetAudience: "便利生活追求者",
  },
  {
    pattern: (b, m) => `Metallverstärktes Teleskoprohr und V-Bürste: Die hochwertige Haptik des ${b} ${m}`,
    patternZh: (b, m) => `金属加固可伸缩延长管 ✕ 特种 V 型滚刷：${b} ${m} 带来无可挑剔的德系质感做工`,
    category: "gadget",
    angleLabel: "金属伸缩质感做工",
    targetAudience: "品质生活鉴赏家",
  },

  // 4. 深度健康・HEPA H14与母婴级防微尘型 (Health & HEPA H14 Clean Air)
  {
    pattern: (b, m) => `HEPA H14 Filterstufe: Wie der ${b} ${m} 99,99% der Allergene für gesunde Raumluft einfängt`,
    patternZh: (b, m) => `HEPA H14 医疗级超净过滤：${b} ${m} 紧锁 99.99% 隐蔽过敏原，还全家清新健康的室内空气`,
    category: "ai_power",
    angleLabel: "HEPA H14母婴级净化",
    targetAudience: "健康生活家庭・过敏体质",
  },
  {
    pattern: (b, m) => `Tiefenreinigung für Matratzen und Sofas: Der ${b} ${m} zieht jeden Milbenkot aus den Polstern`,
    patternZh: (b, m) => `床垫与布艺沙发的深层净化：${b} ${m} 以 58 kPa 负压吸力将微尘皮屑连根拔起`,
    category: "ai_power",
    angleLabel: "深层织物除螨杀菌",
    targetAudience: "家庭除螨・精致生活",
  },
  {
    pattern: (b, m) => `Der 2L Staubbehälter versiegelt Feinstaub absolut geruchsdicht – ideal für Haustierbesitzer: ${b} ${m}`,
    patternZh: (b, m) => `2L 大容量集尘系统紧密密封粉尘与异味，${b} ${m} 堪称养宠家庭最值得拥有的空气卫士`,
    category: "ai_power",
    angleLabel: "密封锁味防溢出",
    targetAudience: "宠物家庭・爱宠人士",
  },

  // 5. 硬核参数・650W电机＆58kPa超强吸力型 (Spec Power & 58 kPa Monster)
  {
    pattern: (b, m) => `650W Motor & 58 kPa: Wir testen die maximale Saugleistung des ${b} ${m} im Härtetest`,
    patternZh: (b, m) => `650W 动力核心 ✕ 58 kPa 极限负压：极限严苛实测 ${b} ${m} 的恐怖吸力表现`,
    category: "spec_power",
    angleLabel: "650W/58kPa极限实测",
    targetAudience: "硬核数码评测观众",
  },
  {
    pattern: (b, m) => `150 Minuten Non-Stop-Laufzeit: Der ${b} ${m} schlägt fast jeden Akku-Staubsauger am Markt`,
    patternZh: (b, m) => `长达 150 分钟不间断续航！${b} ${m} 在续航能力上直接超越市面绝大多数无线吸尘器`,
    category: "spec_power",
    angleLabel: "150分钟续航天花板",
    targetAudience: "参数党・大户型业主",
  },
  {
    pattern: (b, m) => `4 Stunden Schnellladung für zwei Akkus: Die smarte Power-Technologie des ${b} ${m}`,
    patternZh: (b, m) => `仅需 4 小时即可完成双电池极速快充：${b} ${m} 的先进电源管理让清洁无需漫长等待`,
    category: "spec_power",
    angleLabel: "4h双电极速快充",
    targetAudience: "高效快节奏人群",
  },

  // 6. 秘密技巧・大户型保洁秘密＆高性价比神机 (Secret Hack & Großraum-Wunder)
  {
    pattern: (b, m) => `【Geheimtipp】Wie du ein 300m² Haus in unter 30 Minuten blitzsauber hältst mit ${b} ${m}`,
    patternZh: (b, m) => `【清洁秘籍】如何用 ${b} ${m} 在不到 30 分钟内把 300㎡ 豪宅打理得锃亮一尘不染`,
    category: "secret_hack",
    angleLabel: "30分钟大户型速成秘籍",
    targetAudience: "德国大户型中产家庭",
  },
  {
    pattern: (b, m) => `Warum Profi-Reiniger auf den 2L Staubbehälter des ${b} ${m} schwören`,
    patternZh: (b, m) => `为什么经验丰富的保洁达人对 ${b} ${m} 的 2L 超大集尘桶赞不绝口？揭秘大容量真相`,
    category: "secret_hack",
    angleLabel: "保洁达人真实推荐",
    targetAudience: "居家清洁达人",
  },
  {
    pattern: (b, m) => `Top-Tier Saugleistung ohne 800€ Marken-Aufpreis: Der ${b} ${m} ist der Preis-Leistungs-Sieger`,
    patternZh: (b, m) => `无需为动辄几千上万的大牌溢价买单：${b} ${m} 凭借旗舰吸力与配置成为真正的性价比王者`,
    category: "secret_hack",
    angleLabel: "性价比屠夫破局者",
    targetAudience: "务实中产・比价达人",
  },

  // 7. 互动提问・激发德国观众评论区热议型 (Question & Community Viral)
  {
    pattern: (b, m) => `58 kPa Saugleistung vs. Hundehaare im dicken Teppich: Schafft der ${b} ${m} den Extremtest?`,
    patternZh: (b, m) => `58 kPa 极限吸力挑战厚地毯里的顽固狗毛：看 ${b} ${m} 能否顺利通过这项极限测试！`,
    category: "question",
    angleLabel: "地毯狗毛极限挑战",
    targetAudience: "TikTok德国受众",
  },
  {
    pattern: (b, m) => `Würdest du deinen alten Staubsauger für 150 Minuten Akkulaufzeit eintauschen? Der ${b} ${m} im Check`,
    patternZh: (b, m) => `面对 150 分钟超长续航你会换掉家里的老吸尘器吗？带你看实测 ${b} ${m} 的惊艳表现`,
    category: "question",
    angleLabel: "150分钟续航互动",
    targetAudience: "德国TikTok观众",
  },
  {
    pattern: (b, m) => `2 Liter Staubbehälter – wie oft musst du wirklich leeren? Wir testen den ${b} ${m}`,
    patternZh: (b, m) => `2 升超大集尘桶到底多久才需要倒一次？实测记录 ${b} ${m} 的真实容纳量`,
    category: "question",
    angleLabel: "2L集尘真实容量挑战",
    targetAudience: "好奇心受众・生活类博主",
  },
];

const V17MAX_PREFIX_PAIRS: [string, string][] = [
  ["【Saugungeheuer 2026】", "【2026极限吸力怪兽】"],
  ["【Nie wieder täglich laden】", "【彻底告别天天充电】"],
  ["【Der Retter für Großhäuser】", "【大户型豪宅清洁救星】"],
  ["【Echter 58 kPa Härtetest】", "【真实58kPa吸力实测】"],
  ["【Schluss mit Tierhaaren】", "【彻底终结宠物掉毛缠绕】"],
  ["【Geheimtipp für den Haushalt】", "【现代家庭必备神器】"],
  ["【150 Minuten Power-Akku】", "【150分钟超强双电池】"],
  ["【2L XXL Staubbehälter】", "【2L超大尘桶省心利器】"],
  ["【Der Preis-Leistungs-King】", "【旗舰级性能性价比之王】"],
  ["【Putztipp für große Wohnungen】", "【大平层超实用保洁技巧】"],
];

const V17MAX_SUFFIX_PAIRS: [string, string][] = [
  [" – das musst du gesehen haben!", "，这效果必须亲眼看看！"],
  [" – der Boden war noch nie so sauber!", "，家里地面从来没这么透亮干净过！"],
  [" – absolute Kaufempfehlung für 2026!", "，2026年绝对值得闭眼入手的家电！"],
  [" – Hausarbeit war noch nie so schnell erledigt!", "，做家务从未如此神速轻松！"],
  [" – der Härtetest hat alle überrascht!", "，严苛实测效果震撼全场！"],
  [" – so macht Putzen endlich Spaß!", "，从此做打扫都变成一种享受！"],
];

export function generateV17maxAlgorithmicTitles(
  category: AngleCategory = "all_mixed",
  customKeyword?: string,
  customTags?: string,
  batchSeed = Date.now()
): GeneratedTitle[] {
  const brand = "DyMona";
  const model = "V17 MAX";
  const activeTags = (customTags && customTags.trim()) ? customTags.trim() : V17MAX_FIXED_TAGS;
  const results: GeneratedTitle[] = [];
  const seenHooks = new Set<string>();

  // Filter templates by category
  let pool = V17MAX_HOOK_TEMPLATES.filter(
    (t) => category === "all_mixed" || t.category === category
  );
  if (pool.length === 0) pool = V17MAX_HOOK_TEMPLATES;

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
    if (styleRoll < 0.28 && !baseHook.startsWith("【") && !baseHook.startsWith("¿") && !baseHook.startsWith("!")) {
      const [pfx, pfxZh] = V17MAX_PREFIX_PAIRS[Math.floor(Math.random() * V17MAX_PREFIX_PAIRS.length)];
      baseHook = `${pfx} ${baseHook}`;
      baseZh = `${pfxZh} ${baseZh}`;
    } else if (styleRoll > 0.72 && baseHook.length < 70 && !baseHook.endsWith("!") && !baseHook.endsWith("?")) {
      const [sfx, sfxZh] = V17MAX_SUFFIX_PAIRS[Math.floor(Math.random() * V17MAX_SUFFIX_PAIRS.length)];
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
      id: `v17max-algo-${batchSeed}-${results.length + 1}-${Math.random().toString(36).substr(2, 4)}`,
      productId: "v17max",
      title: fullTitle,
      hook: baseHook,
      tags: activeTags,
      angle: tpl.angleLabel,
      angleCategory: tpl.category,
      targetAudience: tpl.targetAudience,
      charCount: fullTitle.length,
      hookCharCount: baseHook.length,
      language: "de",
      translationZh: baseZh,
      isFavorite: false,
      createdAt: new Date().toISOString(),
    });
  }

  return results.slice(0, 50);
}
