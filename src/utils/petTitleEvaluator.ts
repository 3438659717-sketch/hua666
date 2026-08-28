// Real-time TikTok Marketing Hook Diagnostic & Title Quality Evaluator

export interface TitleEvaluationResult {
  score: number; // 0-100
  grade: "S+" | "S" | "A" | "B" | "C";
  metrics: {
    hookStrength: number;     // 0-100
    painPointMatch: number;   // 0-100
    specClarity: number;      // 0-100
    tagOptimization: number;  // 0-100
    viralPotential: number;   // 0-100
  };
  pros: string[];
  suggestions: string[];
  estimatedRetentionRate: string;
}

export function evaluateTikTokTitle(text: string, currentProductId?: string): TitleEvaluationResult {
  if (!text || text.trim().length === 0) {
    return {
      score: 50,
      grade: "C",
      metrics: {
        hookStrength: 40,
        painPointMatch: 40,
        specClarity: 40,
        tagOptimization: 30,
        viralPotential: 40,
      },
      pros: ["输入文本为空，请粘贴或输入任意文案进行诊断"],
      suggestions: ["请输入包含前置悬念词与核心痛点的文案"],
      estimatedRetentionRate: "N/A",
    };
  }

  const clean = text.trim();
  const hasBrackets = /【.*?】|\[.*?\]|「.*?」|『.*?』/g.test(clean);
  const hasNumbers = /\d+(\.\d+)?(g|mAh|ATM|mm|%|倍|分|秒|日|h)/i.test(clean) || /\d+/.test(clean);
  const hasQuestion = /[?？何なぜどうしてwhyhow]/i.test(clean);
  const hasExclamation = /[!！🔥⚡💥😱✨]/i.test(clean);
  const hasTags = /#[^\s#]+/g.test(clean);
  const tagCount = (clean.match(/#[^\s#]+/g) || []).length;
  
  // Power words Japanese / Spanish / English
  const powerWords = [
    "神すぎる", "ヤバい", "衝撃", "爆売れ", "後悔", "即買い", "絶対", "裏技", "注意",
    "increíble", "secreto", "brutal", "urgente", "locura", "cuidado", "truco",
    "secret", "insane", "viral", "warning", "must-have", "game changer"
  ];
  const hasPowerWord = powerWords.some(pw => clean.toLowerCase().includes(pw.toLowerCase()));

  // Tech keywords
  const techWords = [
    "14.9g", "800mAh", "GPS", "5ATM", "ChatGPT", "AMOLED", "POV", "SONY",
    "防水", "録音", "AI", "変色", "チタン", "スピーカー", "骨伝導", "通話"
  ];
  const hasTechWord = techWords.some(tw => clean.toLowerCase().includes(tw.toLowerCase()));

  // Score calculations
  let hookStrength = 55;
  if (hasBrackets) hookStrength += 15;
  if (hasPowerWord) hookStrength += 15;
  if (hasExclamation) hookStrength += 10;
  if (hasQuestion) hookStrength += 10;
  hookStrength = Math.min(100, Math.max(30, hookStrength));

  let painPointMatch = 60;
  if (clean.length >= 25 && clean.length <= 130) painPointMatch += 20;
  if (hasQuestion || /困|悩|失|漏|遅|疲|痛|忘|雨|重|problema|error|olvidar|cansado/i.test(clean)) painPointMatch += 15;
  painPointMatch = Math.min(100, Math.max(35, painPointMatch));

  let specClarity = 50;
  if (hasNumbers) specClarity += 20;
  if (hasTechWord) specClarity += 25;
  specClarity = Math.min(100, Math.max(30, specClarity));

  let tagOptimization = 40;
  if (tagCount >= 3 && tagCount <= 7) tagOptimization = 95;
  else if (tagCount > 0) tagOptimization = 70;
  else tagOptimization = 35;

  let viralPotential = Math.round(
    hookStrength * 0.35 +
    painPointMatch * 0.25 +
    specClarity * 0.2 +
    tagOptimization * 0.2
  );

  const overallScore = Math.min(99, Math.max(45, viralPotential));

  let grade: "S+" | "S" | "A" | "B" | "C" = "B";
  if (overallScore >= 92) grade = "S+";
  else if (overallScore >= 85) grade = "S";
  else if (overallScore >= 75) grade = "A";
  else if (overallScore >= 60) grade = "B";
  else grade = "C";

  const pros: string[] = [];
  const suggestions: string[] = [];

  if (hasBrackets) pros.push("前置粗括号【强视觉锚点】极大增强了信息停留度");
  if (hasPowerWord) pros.push("包含高唤醒度心理暗示词，有效触发用户好奇心");
  if (hasNumbers || hasTechWord) pros.push("量化参数突出品质可信度，击中极客与实用党");
  if (tagCount >= 3) pros.push(`附带 ${tagCount} 个垂直标签，利于 TikTok 推荐算法精准推流`);

  if (!hasBrackets) suggestions.push("建议在开头加入【3秒高能】或【神すぎる】等视觉聚焦点");
  if (!hasNumbers && !hasTechWord) suggestions.push("加入具体量化指标（如 14.9g、800mAh、5ATM），转化率可再提升 30%");
  if (tagCount === 0) suggestions.push("缺少标签！建议挂载 #FOSMET #スマートウォッチ 等 3~5 个黄金标签");
  if (clean.length > 150) suggestions.push("文案略长，建议控制在 80~120 字符内，避免在手机屏幕被截断折叠");
  if (pros.length === 0) pros.push("基础句式通顺，具备良好阐述框架");
  if (suggestions.length === 0) suggestions.push("文案结构极佳，符合百万播放爆款模型！直接发布测试！");

  let estimatedRetentionRate = "42% ~ 58%";
  if (overallScore >= 90) estimatedRetentionRate = "68% ~ 85% (爆款潜力)";
  else if (overallScore >= 80) estimatedRetentionRate = "55% ~ 68% (优秀基准)";
  else if (overallScore >= 70) estimatedRetentionRate = "45% ~ 55% (稳定平准)";

  return {
    score: overallScore,
    grade,
    metrics: {
      hookStrength,
      painPointMatch,
      specClarity,
      tagOptimization,
      viralPotential,
    },
    pros,
    suggestions,
    estimatedRetentionRate,
  };
}
