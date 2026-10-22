import React from "react";
import { Zap, Activity, Cpu, Sparkles, CheckCircle2 } from "lucide-react";

interface ModelStatusBadgeProps {
  modelUsed?: string;
  latencyMs?: number;
  source?: "algorithm" | "gemini_ai";
  isGenerating?: boolean;
}

export function ModelStatusBadge({
  modelUsed = "gemini-3.8-flash",
  latencyMs,
  source = "gemini_ai",
  isGenerating = false,
}: ModelStatusBadgeProps) {
  const isPrimary = modelUsed.includes("3.8") || modelUsed.includes("gemini");
  const isAlgo = source === "algorithm" || modelUsed.includes("matrix") || modelUsed.includes("algorithm");

  const displayModelName = isAlgo
    ? "高速矩阵算法引擎"
    : modelUsed.includes("3.8")
    ? "Gemini 3.8 Flash (主力)"
    : modelUsed.includes("3.7")
    ? "Gemini 3.7 Flash (降级级联)"
    : "Gemini Flash 智能引擎";

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#090d19]/80 backdrop-blur-md border border-cyan-500/25 shadow-[0_0_20px_rgba(6,182,212,0.12)] text-xs font-mono">
      {/* Pulse Status Dot */}
      <span className="relative flex h-2 w-2">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
            isGenerating ? "bg-amber-400" : isAlgo ? "bg-cyan-400" : "bg-emerald-400"
          }`}
        />
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            isGenerating ? "bg-amber-500" : isAlgo ? "bg-cyan-500" : "bg-emerald-500"
          }`}
        />
      </span>

      {/* Model Name */}
      <div className="flex items-center gap-1 text-slate-200 font-semibold tracking-tight">
        {isAlgo ? (
          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
        ) : (
          <Zap className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
        )}
        <span>{displayModelName}</span>
      </div>

      {/* Latency ms */}
      {latencyMs !== undefined && latencyMs > 0 && (
        <span className="text-[10px] text-slate-400 font-normal pl-1 border-l border-white/10 flex items-center gap-0.5">
          <Activity className="w-3 h-3 text-cyan-400/80" />
          {latencyMs}ms
        </span>
      )}

      {/* Smart Fallback Protection Tag */}
      <span className="hidden sm:inline-flex items-center gap-1 text-[10px] px-1.5 py-0.2 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
        智能降级兜底保活
      </span>
    </div>
  );
}
