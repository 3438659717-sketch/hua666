import React from "react";
import { Check, AlertCircle, Info, X } from "lucide-react";

export interface ToastMessage {
  id: string;
  type: "success" | "error" | "info";
  message: string;
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`pointer-events-auto flex items-center justify-between p-3.5 rounded-xl shadow-2xl backdrop-blur-xl border text-xs font-semibold animate-in slide-in-from-bottom-3 fade-in duration-200 ${
            t.type === "success"
              ? "bg-[#141620]/95 text-white border-emerald-500/30 ring-1 ring-emerald-500/20"
              : t.type === "error"
              ? "bg-[#1f1316]/95 text-rose-200 border-rose-500/30 ring-1 ring-rose-500/20"
              : "bg-[#131724]/95 text-blue-200 border-blue-500/30 ring-1 ring-blue-500/20"
          }`}
        >
          <div className="flex items-center gap-2.5 mr-2">
            {t.type === "success" && <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />}
            {t.type === "error" && <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />}
            {t.type === "info" && <Info className="w-4 h-4 text-blue-400 flex-shrink-0" />}
            <span className="leading-snug">{t.message}</span>
          </div>

          <button
            onClick={() => onDismiss(t.id)}
            className="p-1 rounded-md text-white/40 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
};
