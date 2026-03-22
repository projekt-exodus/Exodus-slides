import { motion, AnimatePresence } from "framer-motion";
import {
  Eye, CheckCircle2, AlertTriangle, ChevronDown, XCircle
} from "lucide-react";
import { useState } from "react";

export function ExplainCard({
  title, status, statusColor, explanation, observation, testId
}: {
  title: string; status: string; statusColor: string;
  explanation: string; observation: string; testId: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-5 border border-border/70 bg-card"
      data-testid={testId}
    >
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-normal">{title}</h4>
        <span
          className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5"
          style={{ color: statusColor, backgroundColor: `${statusColor}15` }}
        >
          {status}
        </span>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed mb-3">{explanation}</p>
      <div className="flex items-start gap-2 p-2.5 bg-[var(--diagram-bg)] border border-border/70">
        <Eye className="w-3 h-3 shrink-0 mt-0.5 text-muted-foreground" />
        <p className="text-[11px] text-muted-foreground leading-relaxed">{observation}</p>
      </div>
    </motion.div>
  );
}

export function SectionLabel({ num }: { num: number }) {
  return (
    <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40 mb-2 select-none">
      {String(num).padStart(2, "0")}
    </p>
  );
}

export function FigureCaption({ number, title }: { number: number; title: string }) {
  return (
    <p className="text-xs text-muted-foreground font-mono mt-6 mb-2" data-testid={`fig-caption-${number}`}>
      Fig. {number} — {title}
    </p>
  );
}

export function PhaseCard({ color, label, text, testId }: { color: string; label: string; text: string; testId: string }) {
  const dotColors: Record<string, string> = {
    blue: "bg-[var(--accent-blue)]",
    green: "bg-[var(--accent-green)]",
    violet: "bg-[var(--accent-violet)]",
  };

  return (
    <div className="flex-1 border border-border px-4 py-3 bg-card" data-testid={testId}>
      <div className="flex items-center gap-2 mb-1">
        <div className={`w-2 h-2 rounded-full ${dotColors[color]}`} />
        <span className="text-xs font-medium uppercase tracking-[0.12em]">{label}</span>
      </div>
      <p className="text-sm">{text}</p>
    </div>
  );
}

export function StatusBadge({ status, note }: { status: string; note?: string }) {
  if (status === "check") {
    return (
      <div className="flex items-center gap-2">
        <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: "var(--accent-green)" }} aria-hidden="true" />
        <span className="sr-only">Erlaubt</span>
        {note && <span className="text-xs text-muted-foreground">{note}</span>}
      </div>
    );
  }
  if (status === "warn") {
    return (
      <div className="flex items-center gap-2">
        <AlertTriangle className="w-4 h-4 shrink-0" style={{ color: "var(--accent-amber)" }} aria-hidden="true" />
        <span className="sr-only">Eingeschränkt</span>
        {note && <span className="text-xs text-muted-foreground">{note}</span>}
      </div>
    );
  }
  return (
    <div className="flex items-center gap-2">
      <XCircle className="w-4 h-4 shrink-0" style={{ color: "var(--accent-red, #ef4444)" }} aria-hidden="true" />
      <span className="sr-only">Nicht vorgesehen</span>
      {note && <span className="text-xs text-muted-foreground">{note}</span>}
    </div>
  );
}

export function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border" data-testid={`faq-item-${index}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left group"
        data-testid={`faq-toggle-${index}`}
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="flex items-center gap-3">
          <span className="text-xs font-mono text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
          <span className="text-sm sm:text-base font-medium group-hover:text-foreground transition-colors">{question}</span>
        </span>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id={`faq-answer-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
            role="region"
          >
            <p className="text-sm text-muted-foreground leading-relaxed pb-4 pl-9">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
