import { motion } from "framer-motion";
import { Database, Stethoscope, Pill, TrendingUp, Repeat, ArrowRightLeft } from "lucide-react";

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay },
});

export default function Slide08() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-16 py-16 max-w-6xl mx-auto">
      <motion.p {...anim(0)} className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40 mb-4">
        08 — Revenue · Felix
      </motion.p>

      <motion.h2 {...anim(0.05)} className="text-3xl sm:text-4xl font-bold tracking-tight mb-2 max-w-3xl leading-tight">
        Wir verkaufen keine App.
      </motion.h2>
      <motion.p {...anim(0.08)} className="text-2xl font-medium text-muted-foreground mb-8">
        Wir verkaufen Connections.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
        <motion.div {...anim(0.12)} className="p-5 border-2 bg-card" style={{ borderColor: "var(--accent-blue)" }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 flex items-center justify-center" style={{ color: "var(--accent-blue)", backgroundColor: "var(--accent-blue)15" }}>
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-sm tracking-tight">Abo-Subscription</h3>
              <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Health Data Vault</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed mb-3">
            Die ersten Connections kostenlos. Wer mehr verbinden will — zahlt monatlich.
          </p>
          <div className="space-y-1.5">
            {[
              { label: "Free", desc: "Erste Wearables + 1 Labor" },
              { label: "Premium", desc: "Unbegrenzt, KI-Erklärungen, Agentic Layer" },
              { label: "Family", desc: "Mehrere Profile, eigene KI-Endpunkte" },
            ].map((tier, i) => (
              <div key={i} className="flex items-start gap-2 p-2 bg-[var(--diagram-bg)] border border-border">
                <div className="mt-0.5" style={{ color: "var(--accent-blue)" }}>
                  {i === 0 ? <Database className="w-3.5 h-3.5" /> : i === 1 ? <TrendingUp className="w-3.5 h-3.5" /> : <Repeat className="w-3.5 h-3.5" />}
                </div>
                <div>
                  <p className="text-[11px] font-medium">{tier.label}</p>
                  <p className="text-[10px] text-muted-foreground font-light">{tier.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...anim(0.18)} className="p-5 border-2 bg-card" style={{ borderColor: "var(--accent-violet)" }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 flex items-center justify-center" style={{ color: "var(--accent-violet)", backgroundColor: "var(--accent-violet)15" }}>
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-sm tracking-tight">Arzt-Beratung & Heilpläne</h3>
              <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Plattform-Vermittlung</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed mb-3">
            Personalisierte Pläne auf Datenbasis. Clinician-in-the-Loop: KI schlägt vor — Arzt gibt frei.
          </p>
          <div className="space-y-1.5">
            {[
              { icon: <Stethoscope className="w-3.5 h-3.5" />, label: "Heilplan-Erstellung" },
              { icon: <ArrowRightLeft className="w-3.5 h-3.5" />, label: "Beratungsgespräche (Video/Chat)" },
              { icon: <TrendingUp className="w-3.5 h-3.5" />, label: "Provision pro Beratung" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 p-2 bg-[var(--diagram-bg)] border border-border">
                <div style={{ color: "var(--accent-violet)" }}>{item.icon}</div>
                <p className="text-[11px]">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...anim(0.24)} className="p-5 border-2 bg-card" style={{ borderColor: "var(--accent-green)" }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 flex items-center justify-center" style={{ color: "var(--accent-green)", backgroundColor: "var(--accent-green)15" }}>
              <Pill className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-sm tracking-tight">Supplements & Longevity</h3>
              <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Produkt-Verkauf</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed mb-3">
            Personalisiert auf Gesundheitsprofil. Biogena · Custom-Abfüllung · In-App oder via Agent.
          </p>
          <div className="space-y-1.5">
            {[
              { icon: <Pill className="w-3.5 h-3.5" />, label: "Eigene Produkte", desc: "Custom-Abfüllung" },
              { icon: <TrendingUp className="w-3.5 h-3.5" />, label: "Kooperationen", desc: "z.B. Biogena" },
              { icon: <Repeat className="w-3.5 h-3.5" />, label: "In-App-Kauf", desc: "KI empfiehlt → Agent bestellt → du bestätigst" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 p-2 bg-[var(--diagram-bg)] border border-border">
                <div className="mt-0.5" style={{ color: "var(--accent-green)" }}>{item.icon}</div>
                <div>
                  <p className="text-[11px] font-medium">{item.label}</p>
                  <p className="text-[10px] text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div {...anim(0.35)} className="p-4 border border-border/70 bg-[var(--diagram-bg)] flex items-start gap-3">
        <TrendingUp className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "var(--accent-violet)" }} />
        <p className="text-xs text-muted-foreground font-light leading-relaxed">
          <strong className="text-foreground font-medium">Synergie:</strong>{" "}
          Mehr Daten → bessere Pläne → passendere Supplements → mehr Vertrauen → mehr Connections
        </p>
      </motion.div>
    </div>
  );
}
