import { motion } from "framer-motion";

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export default function Slide01() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-16 py-20 max-w-6xl mx-auto">
      <motion.p {...anim(0)} className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40 mb-6">
        01 — Opener · Felix
      </motion.p>

      <motion.h1 {...anim(0.05)} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight max-w-3xl">
        Ich bin Felix.<br />
        <span className="text-muted-foreground font-medium">Und das war mein Problem.</span>
      </motion.h1>

      <motion.p {...anim(0.15)} className="text-xl sm:text-2xl font-medium text-muted-foreground mb-8 leading-snug max-w-2xl tracking-tight">
        Länger leben. Gesünder altern.<br />Präventive Gesundheit für alle.
      </motion.p>

      <motion.div {...anim(0.2)} className="flex flex-wrap gap-3 mb-10">
        {["Souverän", "KI-gestützt", "Klinisch fundiert"].map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-medium tracking-[0.12em] uppercase px-3 py-1 border border-border/60 text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </motion.div>

      <motion.div {...anim(0.3)} className="flex flex-col sm:flex-row gap-4 mb-12">
        {[
          { color: "var(--accent-blue)", dot: "bg-[var(--accent-blue)]", label: "Phase 1", text: "Daten sammeln, strukturieren, anzeigen" },
          { color: "var(--accent-green)", dot: "bg-[var(--accent-green)]", label: "Sicherheit", text: "Lokal verschlüsselt, optionaler EU-Sync" },
          { color: "var(--accent-violet)", dot: "bg-[var(--accent-violet)]", label: "Phase 2", text: "Evidence-to-Plan mit Clinician-in-the-Loop" },
        ].map((card) => (
          <div key={card.label} className="flex-1 border border-border px-4 py-3 bg-card">
            <div className="flex items-center gap-2 mb-1">
              <div className={`w-2 h-2 rounded-full ${card.dot}`} />
              <span className="text-xs font-medium uppercase tracking-[0.12em]">{card.label}</span>
            </div>
            <p className="text-sm">{card.text}</p>
          </div>
        ))}
      </motion.div>

      <motion.div {...anim(0.4)} className="flex items-center gap-3">
        <div className="w-1 h-8 rounded-full bg-[var(--accent-blue)]" />
        <p className="text-lg font-medium text-muted-foreground">
          Aus Linz. Für alle.
        </p>
      </motion.div>
    </div>
  );
}
