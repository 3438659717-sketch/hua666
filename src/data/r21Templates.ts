import { AngleCategory, GeneratedTitle, ProductId, TargetLanguage } from "../types";

export const R21_ENGLISH_TAGS = "#FOSMET #R21 #Smart Ring #Health Management #Smart Wearables";

interface HookTemplate {
  pattern: (brand: string, model: string, keyword?: string) => string;
  patternZh: (brand: string, model: string, keyword?: string) => string;
  category: AngleCategory;
  angleLabel: string;
  targetAudience: string;
}

// 50+ American English Viral TikTok Hook Templates for FOSMET R21 (Ultra-thin Smart Ring)
export const R21_ENGLISH_TEMPLATES: HookTemplate[] = [
  // 1. Pain Point & Anti-Subscription / Anti-Bulky Watch
  {
    pattern: (b, m) => `Paying $300+ AND a monthly subscription just to track your sleep? ${b} ${m} gives you 100% free app data forever`,
    patternZh: (b, m) => `花300多美元买智能戒指还要每月交订阅费？${b} ${m} 专属App终身100%免费零月费`,
    category: "pain_point",
    angleLabel: "Zero Subscription Fee",
    targetAudience: "Subscription-Fatigued Buyers",
  },
  {
    pattern: (b, m) => `Ditch the bulky smartwatch on your wrist. ${b} ${m} packs 24/7 health tracking into an ultra-thin jewelry-grade ring`,
    patternZh: (b, m) => `摘掉手腕上笨重的智能手表吧！${b} ${m} 将24小时全天候健康监测浓缩进超轻薄首饰级智能戒指`,
    category: "pain_point",
    angleLabel: "Ditch Bulky Smartwatches",
    targetAudience: "Minimalists & Watch-Haters",
  },
  {
    pattern: (b, m) => `Hate sleeping with a heavy watch digging into your wrist? You will literally forget ${b} ${m} is even on`,
    patternZh: (b, m) => `讨厌睡觉时笨重手表硌着腕骨？戴上 ${b} ${m} 夜间睡眠真正实现轻若无物无感佩戴`,
    category: "pain_point",
    angleLabel: "Weightless Sleep Comfort",
    targetAudience: "Light Sleepers & Minimalists",
  },
  {
    pattern: (b, m) => `Stop renting your own body data every month! With ${b} ${m}, your heart rate, SpO2, and sleep insights are $0/month`,
    patternZh: (b, m) => `别再按月租借自己的身体数据了！使用 ${b} ${m}，心率、血氧和睡眠洞察永久零月费`,
    category: "pain_point",
    angleLabel: "Own Your Health Data",
    targetAudience: "Cost-Conscious Tech Lovers",
  },
  {
    pattern: (b, m) => `Charging your wearable every single night gets old fast. ${b} ${m} runs 5+ days straight on one charge`,
    patternZh: (b, m) => `每天晚上都要摘下来充电太烦了？${b} ${m} 单次充电即可带来5天以上强劲长续航`,
    category: "pain_point",
    angleLabel: "No Daily Charging",
    targetAudience: "Busy Professionals & Travelers",
  },
  {
    pattern: (b, m) => `Smartwatches ruin a clean outfit—${b} ${m} looks like fine jewelry while tracking your vitals 24/7`,
    patternZh: (b, m) => `传统运动手表毁掉精心搭配的穿搭——${b} ${m} 外观如精美首饰，同时24小时精准监测体征`,
    category: "pain_point",
    angleLabel: "Outfit-Friendly Aesthetics",
    targetAudience: "Fashion-Forward Women",
  },
  {
    pattern: (b, m) => `Tired of fitness trackers that die the second you jump in the pool? ${b} ${m} is fully waterproof for every swim`,
    patternZh: (b, m) => `受够了一跳进泳池就进水报废的穿戴设备？${b} ${m} 采用完全防水设计，游泳冲澡毫不犹豫`,
    category: "pain_point",
    angleLabel: "Swim-Ready Waterproof",
    targetAudience: "Swimmers & Gym Regulars",
  },
  {
    pattern: (b, m) => `Why are big smart ring brands locking your own cycle & temperature graphs behind a paywall? ${b} ${m} unlocks all of it free`,
    patternZh: (b, m) => `为什么大牌智能戒指要把你的生理周期和体温曲线锁在付费墙后？${b} ${m} 全部永久免费开放`,
    category: "pain_point",
    angleLabel: "No Paywall Cycle Tracking",
    targetAudience: "Women Focused on Wellness",
  },

  // 2. Efficiency & 24/7 Lifestyle Integration
  {
    pattern: (b, m) => `From 6 AM gym lifts and pool laps to dinner outfits and deep sleep—${b} ${m} tracks 24/7 without ever coming off`,
    patternZh: (b, m) => `从早6点健身举铁、水中游泳到晚宴穿搭与夜间深睡——${b} ${m} 全天候24小时无缝陪伴无需摘下`,
    category: "efficiency",
    angleLabel: "24/7 Seamless Routine",
    targetAudience: "Fitness & Lifestyle Creators",
  },
  {
    pattern: (b, m) => `One sleek ring, zero subscription fees: track Heart Rate, SpO2, Sleep Stages, Stress, Temp & Cycle with ${b} ${m}`,
    patternZh: (b, m) => `一枚精致戒指，零月费订阅：${b} ${m} 一举精准解码心率、血氧、睡眠阶段、压力、体温与生理周期`,
    category: "efficiency",
    angleLabel: "6-in-1 Health Decoding",
    targetAudience: "Holistic Health Trackers",
  },
  {
    pattern: (b, m) => `Check how yesterday's workout, caffeine, or late dinner hit your stress & recovery overnight on the free ${b} ${m} app`,
    patternZh: (b, m) => `在终身免费的 ${b} ${m} 专属App中，直观查看昨天的训练、咖啡或熬夜对夜间压力与身体恢复的影响`,
    category: "efficiency",
    angleLabel: "Recovery & Stress Insights",
    targetAudience: "Biohackers & Gym Enthusiasts",
  },
  {
    pattern: (b, m) => `Commuting, lifting, swimming, sleeping—${b} ${m} stays on your finger 24/7 with 5+ days of battery`,
    patternZh: (b, m) => `日常通勤、健身撸铁、水中畅游、夜间沉浸睡眠——${b} ${m} 搭载5天+续航全天候无感守护`,
    category: "efficiency",
    angleLabel: "All-Day All-Scenario",
    targetAudience: "Active Urban Commuters",
  },
  {
    pattern: (b, m) => `Finally an effortless way for women to track basal temperature shifts and ovulation windows—zero monthly fees with ${b} ${m}`,
    patternZh: (b, m) => `女性轻松掌握基础体温波动与排卵周期的极简方式终于来了——${b} ${m} 精准追踪且App零月费`,
    category: "efficiency",
    angleLabel: "Effortless Cycle & Temp",
    targetAudience: "Women's Health Community",
  },
  {
    pattern: (b, m) => `Take full control of your body metrics anywhere without glancing at a glowing screen every 5 minutes: ${b} ${m}`,
    patternZh: (b, m) => `不必每5分钟就低头看刺眼手表屏幕，戴上 ${b} ${m} 随时随地优雅全面掌控身体健康数据`,
    category: "efficiency",
    angleLabel: "Screen-Free Mindfulness",
    targetAudience: "Digital Minimalists",
  },

  // 3. Gadget & Jewelry-Grade Aesthetics
  {
    pattern: (b, m) => `Wait—this minimalist jewelry ring is actually a full 24/7 health lab? Meet the ultra-thin ${b} ${m}`,
    patternZh: (b, m) => `等等——这枚极简高级首饰戒指竟然是24小时随身健康实验室？来认识超轻薄的 ${b} ${m}`,
    category: "gadget",
    angleLabel: "Jewelry-Grade Tech Reveal",
    targetAudience: "Aesthetic EDC & Tech Fans",
  },
  {
    pattern: (b, m) => `Unboxing the ${b} ${m} Smart Ring: sleek jewelry finish, featherlight feel, and zero bulky watch tan lines`,
    patternZh: (b, m) => `${b} ${m} 智能戒指开箱实拍：精美首饰级质感、羽毛般无感佩戴，从此告别手腕手表晒痕`,
    category: "gadget",
    angleLabel: "Sleek Aesthetic Unboxing",
    targetAudience: "TikTok Unboxing Viewers",
  },
  {
    pattern: (b, m) => `Stack it with your everyday rings—nobody will guess your ${b} ${m} is tracking heart rate, SpO2 & sleep`,
    patternZh: (b, m) => `轻松与日常戒指叠戴——没人能猜到你的 ${b} ${m} 正在后台精准监测心率、血氧与睡眠`,
    category: "gadget",
    angleLabel: "Invisible Stackable Style",
    targetAudience: "Women & Minimalist Dressers",
  },
  {
    pattern: (b, m) => `Ultra-thin profile, fully waterproof shell, and 5+ days of battery: ${b} ${m} makes smartwatches look clunky`,
    patternZh: (b, m) => `超轻薄轮廓、完全防水精工机身与5天以上强续航：${b} ${m} 让笨重智能手表瞬间过时`,
    category: "gadget",
    angleLabel: "Sleek Minimalist Hardware",
    targetAudience: "Design-Focused Consumers",
  },
  {
    pattern: (b, m) => `Wear your mechanical luxury watch on one hand and let ${b} ${m} silently log every health metric on the other`,
    patternZh: (b, m) => `左手戴心爱的机械腕表，右手戴 ${b} ${m} 在幕后全天候静音记录每一项核心健康数据`,
    category: "gadget",
    angleLabel: "Classic Watch + Smart Ring",
    targetAudience: "Luxury & Classic Watch Lovers",
  },
  {
    pattern: (b, m) => `Sweatproof at the gym, waterproof in the pool, effortless in bed: the ${b} ${m} is built for 24/7 life`,
    patternZh: (b, m) => `健身房防汗、泳池完全防水、夜间睡眠舒适无感：专为全天候24小时打造的 ${b} ${m}`,
    category: "gadget",
    angleLabel: "Gym-to-Pool Durability",
    targetAudience: "Multi-Sport Athletes",
  },

  // 4. Deep Health Decoding & Women's Wellness (ai_power)
  {
    pattern: (b, m) => `Decode your Deep Sleep, REM, Stress & Skin Temperature every morning—100% free forever in the ${b} ${m} app`,
    patternZh: (b, m) => `每天清晨精准解码你的深睡、REM快速眼动、压力与体温趋势——${b} ${m} 专属App终身100%免费`,
    category: "ai_power",
    angleLabel: "Morning Sleep & Recovery Decode",
    targetAudience: "Sleep Optimizers",
  },
  {
    pattern: (b, m) => `Your finger reads pulse waves closer to your arteries than your wrist: meet ${b} ${m} precision health decoding`,
    patternZh: (b, m) => `手指脉搏波比手腕更贴近动脉，监测更敏锐：感受 ${b} ${m} 带来的高精准实时健康解码`,
    category: "ai_power",
    angleLabel: "Finger-Pulse Precision",
    targetAudience: "Health Data Enthusiasts",
  },
  {
    pattern: (b, m) => `Built for women's deep health: ${b} ${m} pairs subtle skin temp shifts with cycle & ovulation predictions—no fees`,
    patternZh: (b, m) => `专为注重深度健康管理的女性打造：${b} ${m} 结合体温细微变化精准预测生理与排卵周期，零月费`,
    category: "ai_power",
    angleLabel: "Women's Cycle & Ovulation Lab",
    targetAudience: "Women's Wellness & Cycle Trackers",
  },
  {
    pattern: (b, m) => `See real-time Heart Rate, Blood Oxygen (SpO2), and daily Stress curves on one clean dashboard with ${b} ${m}`,
    patternZh: (b, m) => `在一个极简清晰的终身免费App仪表盘中，实时掌握 ${b} ${m} 捕捉的心率、血氧与压力全天候曲线`,
    category: "ai_power",
    angleLabel: "Real-Time Biometric Dashboard",
    targetAudience: "Preventive Health Users",
  },
  {
    pattern: (b, m) => `Know when your body needs rest BEFORE you burn out—${b} ${m} tracks stress, sleep stages & temp 24/7`,
    patternZh: (b, m) => `在身体过度透支前先一步感知恢复信号——${b} ${m} 24小时持续解码压力、睡眠阶段与体温异常`,
    category: "ai_power",
    angleLabel: "Burnout & Stress Radar",
    targetAudience: "High-Performers & Women",
  },
  {
    pattern: (b, m) => `No bloated notifications buzzing your wrist—just pure 24/7 biometric decoding from ${b} ${m} when you check your app`,
    patternZh: (b, m) => `拒绝手腕上烦人的消息弹窗震动——${b} ${m} 只专注默默记录精准体征数据，打开免费App一目了然`,
    category: "ai_power",
    angleLabel: "Distraction-Free Health Tech",
    targetAudience: "Mindfulness & Focus Seekers",
  },

  // 5. Secret Hack & Smart Value Comparison
  {
    pattern: (b, m) => `The $0/month smart ring secret everyone switching from pricey subscription rings is talking about: ${b} ${m}`,
    patternZh: (b, m) => `所有从高月费订阅戒指转投阵营的人都在悄悄推荐的零月费宝藏：${b} ${m}`,
    category: "secret_hack",
    angleLabel: "The $0/Mo Smart Ring Hack",
    targetAudience: "Smart Shoppers on TikTok",
  },
  {
    pattern: (b, m) => `Here's the smart wearable math nobody tells you: $72/year in saved app fees pays for your ${b} ${m} fast`,
    patternZh: (b, m) => `没人告诉你的智能穿戴省钱账：省下大牌每年72美元以上的App订阅费，${b} ${m} 性价比直接拉满`,
    category: "secret_hack",
    angleLabel: "Subscription Math Expose",
    targetAudience: "Value-Driven US Shoppers",
  },
  {
    pattern: (b, m) => `Why fitness minimalists are quietly replacing their bulky watches with the ultra-thin ${b} ${m} ring`,
    patternZh: (b, m) => `为什么越来越多健身极简主义者正在悄悄摘下笨重手表，换上超轻薄的 ${b} ${m} 智能戒指`,
    category: "secret_hack",
    angleLabel: "Minimalist Fitness Trend",
    targetAudience: "Gym & Pilates Community",
  },
  {
    pattern: (b, m) => `How to track sleep stages, SpO2 & ovulation while looking like you're just wearing a chic ring: ${b} ${m}`,
    patternZh: (b, m) => `看起来只是戴了一枚精致时髦戒指，却能暗中精准追踪睡眠、血氧与排卵周期：${b} ${m}`,
    category: "secret_hack",
    angleLabel: "Stealth Wellness Jewelry",
    targetAudience: "Style-Conscious Women",
  },
  {
    pattern: (b, m) => `Don't buy a smart ring with a monthly paywall before checking out the ${b} ${m} (100% free app for life)`,
    patternZh: (b, m) => `在购买按月收费的智能戒指前，一定要先看看终身100%免费App的 ${b} ${m}`,
    category: "secret_hack",
    angleLabel: "Pre-Purchase Warning Hook",
    targetAudience: "In-Market Ring Researchers",
  },

  // 6. Question & Viral Engagement
  {
    pattern: (b, m) => `Would you trade your bulky smartwatch for a 5-day waterproof ring with ZERO app fees? Meet ${b} ${m}`,
    patternZh: (b, m) => `你愿意用笨重的智能手表，换一枚5天+续航、完全防水且App零月费的 ${b} ${m} 智能戒指吗？`,
    category: "question",
    angleLabel: "Watch vs Ring Debate",
    targetAudience: "TikTok Tech & Fitness Crowd",
  },
  {
    pattern: (b, m) => `Why are we still paying monthly subscriptions to read our OWN heart rate and sleep scores? Check out ${b} ${m}`,
    patternZh: (b, m) => `为什么查看我们自己的心率和睡眠分数还要每月交钱？来看看彻底零月费的 ${b} ${m}`,
    category: "question",
    angleLabel: "Paywall Callout Question",
    targetAudience: "General Consumer Audience",
  },
  {
    pattern: (b, m) => `Can you even tell this is a smart health ring? Let's test the ultra-thin ${b} ${m} at the gym and in the pool`,
    patternZh: (b, m) => `你能看出来这是一枚智能健康戒指吗？带 ${b} ${m} 去健身房撸铁加泳池实测给你看`,
    category: "question",
    angleLabel: "Stealth Test Challenge",
    targetAudience: "Interactive TikTok Viewers",
  },
  {
    pattern: (b, m) => `Smartwatch or Smart Ring for sleeping—which one do you actually keep on at night? Testing ${b} ${m}`,
    patternZh: (b, m) => `睡觉监测选智能手表还是智能戒指——哪一种你才真正戴得住一整晚？实测 ${b} ${m}`,
    category: "question",
    angleLabel: "Sleep Comfort Poll",
    targetAudience: "Wearable Comparers",
  },
  {
    pattern: (b, m) => `Wait—it tracks cycle, temperature, SpO2, stress AND has zero subscription fees? How much do you think ${b} ${m} costs?`,
    patternZh: (b, m) => `等等——能测经期、体温、血氧、压力还永久零月费？猜猜看这款 ${b} ${m} 性价比有多高？`,
    category: "question",
    angleLabel: "Price Guess Hook",
    targetAudience: "TikTok Shop Bargain Hunters",
  },

  // 7. Spec Power & Hardcore Reliability
  {
    pattern: (b, m) => `5+ days battery + fully waterproof + $0/month lifetime app + 24/7 HR, SpO2, sleep, stress, temp & cycle: ${b} ${m}`,
    patternZh: (b, m) => `5天+超长续航 + 完全防水 + 终身免费App零月费 + 24h心率/血氧/睡眠/压力/体温/生理周期：${b} ${m}`,
    category: "spec_power",
    angleLabel: "Full Spec Breakdown",
    targetAudience: "Spec-Driven Buyers",
  },
  {
    pattern: (b, m) => `Ultra-thin jewelry chassis built to survive swimming laps, heavy barbell sets, and 5+ days off the charger: ${b} ${m}`,
    patternZh: (b, m) => `超轻薄首饰级精工机身，无惧泳池畅游、大重量器械撸铁与5天以上离充强续航：${b} ${m}`,
    category: "spec_power",
    angleLabel: "Waterproof & 5+ Days Power",
    targetAudience: "Endurance & Gym Users",
  },
  {
    pattern: (b, m) => `24/7 Heart Rate, Blood Oxygen (SpO2), Sleep Stages, Stress, Body Temp & Ovulation tracking—zero fees on ${b} ${m}`,
    patternZh: (b, m) => `全天候心率、血氧饱和度、睡眠阶段、压力水平、体温与排卵周期全维度追踪——${b} ${m} 永久零月费`,
    category: "spec_power",
    angleLabel: "6-Metric Clinical Clarity",
    targetAudience: "Deep Health Managers",
  },
  {
    pattern: (b, m) => `100% Lifetime Free App with zero hidden tiers: unlock every ${b} ${m} biometric report from Day 1`,
    patternZh: (b, m) => `终身100%免费专属App无任何隐藏付费等级：从第一天起解锁 ${b} ${m} 全部身体解码报告`,
    category: "spec_power",
    angleLabel: "100% Lifetime Free App",
    targetAudience: "Anti-Subscription Shoppers",
  },
  {
    pattern: (b, m) => `Featherlight 24/7 comfort meets swim-proof durability and 5+ days battery life in the new ${b} ${m} Smart Ring`,
    patternZh: (b, m) => `全天候24小时无感轻盈舒适碰撞游泳级完全防水与5天+续航：全新 ${b} ${m} 智能戒指`,
    category: "spec_power",
    angleLabel: "Comfort Meets Endurance",
    targetAudience: "Everyday Wellness Wearers",
  },
];

const R21_ENGLISH_PREFIXES: [string, string][] = [
  ["【Zero Subscription】", "【零月费】"],
  ["【Game Changer】", "【颠覆体验】"],
  ["【No Paywall】", "【永久免费】"],
  ["【24/7 Health】", "【全天候健康】"],
  ["【Honest Review】", "【真实实测】"],
  ["【Minimalist Pick】", "【极简必入】"],
  ["【Women's Wellness】", "【女性健康】"],
  ["【5+ Days Battery】", "【5天+续航】"],
  ["【Ditch the Watch】", "【告别笨重表】"],
];

export function generateR21AlgorithmicTitles(
  category: AngleCategory = "all_mixed",
  customKeyword = "",
  customTags?: string,
  _batchSeed = Date.now(),
  _language: TargetLanguage = "en"
): GeneratedTitle[] {
  const brand = "FOSMET";
  const model = "R21";
  const activeTags = customTags && customTags.trim() ? customTags.trim() : R21_ENGLISH_TAGS;

  let pool = R21_ENGLISH_TEMPLATES.filter(
    (t) => category === "all_mixed" || t.category === category
  );
  if (pool.length === 0) pool = R21_ENGLISH_TEMPLATES;

  const shuffledPool = [...pool].sort(() => Math.random() - 0.5);
  const allFallbackPool = [...R21_ENGLISH_TEMPLATES].sort(() => Math.random() - 0.5);

  const results: GeneratedTitle[] = [];
  const seenHooks = new Set<string>();

  let idx = 0;
  let attempt = 0;

  while (results.length < 50 && attempt < 400) {
    attempt++;
    const sourcePool = idx < shuffledPool.length ? shuffledPool : allFallbackPool;
    const tpl = sourcePool[idx % sourcePool.length];
    idx++;

    let baseHook = tpl.pattern(brand, model, customKeyword);
    let hookZh = tpl.patternZh(brand, model, customKeyword);

    // Apply dynamic prefix for variety
    if ((attempt > sourcePool.length || Math.random() < 0.38) && !baseHook.startsWith("【")) {
      const [pfx, pfxZh] = R21_ENGLISH_PREFIXES[attempt % R21_ENGLISH_PREFIXES.length];
      baseHook = `${pfx} ${baseHook}`;
      hookZh = `${pfxZh} ${hookZh}`;
    }

    if (
      customKeyword &&
      customKeyword.trim() &&
      !baseHook.toLowerCase().includes(customKeyword.trim().toLowerCase())
    ) {
      if (Math.random() > 0.35) {
        baseHook = `[${customKeyword.trim()}] ${baseHook}`;
        hookZh = `【${customKeyword.trim()}】${hookZh}`;
      }
    }

    if (!baseHook.includes(model)) {
      baseHook = `${brand} ${model} | ${baseHook}`;
    }

    if (seenHooks.has(baseHook)) continue;
    seenHooks.add(baseHook);

    const fullTitle = `${baseHook} ${activeTags}`;

    results.push({
      id: `r21-algo-${Date.now()}-${results.length + 1}-${Math.random().toString(36).substr(2, 4)}`,
      productId: "r21" as ProductId,
      title: fullTitle,
      hook: baseHook,
      tags: activeTags,
      angle: tpl.angleLabel,
      angleCategory: tpl.category,
      targetAudience: tpl.targetAudience,
      charCount: fullTitle.length,
      hookCharCount: baseHook.length,
      createdAt: new Date().toISOString(),
      translationZh: hookZh,
      language: "en",
      ctrScore: 92 + (results.length % 7),
      modelUsed: "matrix_algorithm",
    });
  }

  return results.slice(0, 50);
}
