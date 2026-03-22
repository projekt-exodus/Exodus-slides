import { motion } from "framer-motion";
import { Lock, Bot, Smartphone, ShoppingCart, FileCheck, ArrowDown, Monitor, Cloud, ShieldCheck, Wifi, X } from "lucide-react";

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay },
});

export default function Slide03() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-16 py-16 max-w-6xl mx-auto">
      <motion.p {...anim(0)} className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40 mb-4">
        03 — Lösung & USPs · Martin
      </motion.p>

      <motion.h2 {...anim(0.05)} className="text-3xl sm:text-4xl font-bold tracking-tight mb-2 max-w-3xl leading-tight">
        Eine Plattform. Alle Daten. Deine KI.
      </motion.h2>
      <motion.p {...anim(0.08)} className="text-base text-muted-foreground mb-8 max-w-2xl">
        Wir bauen keine neue Gesundheits-App. Wir bauen den Ort, an dem alle anderen zusammenkommen.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
        <motion.div {...anim(0.12)} className="p-5 border-2 bg-card" style={{ borderColor: "var(--accent-blue)" }}>
          <p className="text-[10px] font-mono uppercase tracking-widest mb-2" style={{ color: "var(--accent-blue)" }}>USP 1</p>
          <h3 className="text-sm font-semibold mb-2">Alles an einem Ort</h3>
          <div className="flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
            {["Import", "→", "Verstehen", "→", "Freigabe"].map((s, i) => (
              <span key={i} className={s === "→" ? "text-muted-foreground/40" : "px-2 py-0.5 bg-[var(--diagram-bg)] border border-border"}>
                {s}
              </span>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
            Labor · Schlaf · Arztbrief · Training — strukturierte Timeline, KI erklärt in normaler Sprache.
          </p>
        </motion.div>

        <motion.div {...anim(0.18)} className="p-5 border-2 bg-card" style={{ borderColor: "var(--accent-violet)" }}>
          <p className="text-[10px] font-mono uppercase tracking-widest mb-2" style={{ color: "var(--accent-violet)" }}>USP 2</p>
          <h3 className="text-sm font-semibold mb-2">Bring Your Own AI</h3>
          <div className="space-y-1.5">
            {[
              { icon: <Monitor className="w-3.5 h-3.5" />, label: "Mac/PC", sub: "Llama, Mistral — lokal", color: "var(--accent-violet)" },
              { icon: <Smartphone className="w-3.5 h-3.5" />, label: "Smartphone", sub: "Apple Intelligence, Gemma", color: "var(--accent-green)" },
              { icon: <Cloud className="w-3.5 h-3.5" />, label: "Cloud (opt-in)", sub: "GPT-4o, Claude — nur wenn du willst", color: "var(--accent-amber)" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 p-1.5 border border-border/50 bg-[var(--diagram-bg)]">
                <span style={{ color: item.color }}>{item.icon}</span>
                <div className="min-w-0">
                  <p className="text-[11px] font-medium">{item.label}</p>
                  <p className="text-[10px] text-muted-foreground">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[10px] font-mono mt-2 px-2 py-1 border" style={{ color: "var(--accent-green)", borderColor: "var(--accent-green)40", backgroundColor: "var(--accent-green)08" }}>
            Standard ist immer lokal.
          </p>
        </motion.div>

        <motion.div {...anim(0.24)} className="p-5 border-2 bg-card" style={{ borderColor: "var(--accent-green)" }}>
          <p className="text-[10px] font-mono uppercase tracking-widest mb-2" style={{ color: "var(--accent-green)" }}>USP 3</p>
          <h3 className="text-sm font-semibold mb-2">Persönlicher Health-Agent</h3>
          <div className="space-y-1 mb-3">
            {[
              { icon: <Lock className="w-3.5 h-3.5" />, label: "Exodus Vault" },
              { icon: <Bot className="w-3.5 h-3.5" />, label: "MCP Skill-Pack" },
              { icon: <Smartphone className="w-3.5 h-3.5" />, label: "OpenClaw Agent" },
              { icon: <ShoppingCart className="w-3.5 h-3.5" />, label: "Shop → Warenkorb" },
              { icon: <FileCheck className="w-3.5 h-3.5" />, label: "Bestätigung durch dich" },
            ].map((step, i) => (
              <div key={i}>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span style={{ color: "var(--accent-green)" }}>{step.icon}</span>
                  {step.label}
                </div>
                {i < 4 && <div className="ml-1.5 w-px h-2 bg-border my-0.5" />}
              </div>
            ))}
          </div>
          <p className="text-[10px] text-muted-foreground font-mono">
            Dein Agent arbeitet für dich. Nur mit deiner Freigabe.
          </p>
        </motion.div>
      </div>

      <motion.div {...anim(0.35)} className="flex flex-wrap gap-3">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/50 mr-2">Was Exodus NICHT ist:</p>
        {[
          "Kein weiteres Silo",
          "Keine Black Box",
          "Kein US-Cloud-Zwang",
          "Keine App, die deine Daten besitzt",
        ].map((item) => (
          <span key={item} className="flex items-center gap-1 text-xs text-muted-foreground border border-border/50 px-2.5 py-1">
            <X className="w-3 h-3 text-muted-foreground/50" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
