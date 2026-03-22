import { motion } from "framer-motion";
import { Mail, QrCode, MapPin } from "lucide-react";

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const roadmapItems = [
  { label: "Linz hACkT Pitch", date: "März 2026", done: true, color: "var(--accent-green)" },
  { label: "FFG Kleinprojekt", date: "Mai 2026", done: false, color: "var(--accent-amber)" },
  { label: "tech2b Accelerator", date: "Sommer 2026", done: false, color: "var(--accent-blue)" },
  { label: "Geschlossene Beta", date: "Q3 2026", done: false, color: "var(--accent-violet)" },
  { label: "Public Launch", date: "2027", done: false, color: "var(--accent-rose)" },
];

export default function Slide10() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-16 py-20 max-w-6xl mx-auto">
      <motion.p {...anim(0)} className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40 mb-6">
        10 — Closing · Felix
      </motion.p>

      <motion.h2 {...anim(0.05)} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 max-w-3xl leading-tight">
        Linz ist nicht die Folie.
      </motion.h2>
      <motion.p {...anim(0.1)} className="text-3xl font-medium text-muted-foreground mb-8 max-w-2xl">
        Linz ist der Plan.
      </motion.p>

      <motion.p {...anim(0.15)} className="text-base text-muted-foreground max-w-2xl leading-relaxed mb-10">
        Wir bauen nicht die nächste App. Wir bauen die Infrastruktur, auf der KI-Agenten für dich arbeiten
        können — mit deinen Daten, unter deiner Kontrolle. Aus Linz. Für alle.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <motion.div {...anim(0.2)} className="flex flex-col gap-4">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/50">Roadmap</p>
          <div className="space-y-2">
            {roadmapItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.25 + i * 0.07 }}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                <div className="flex items-center justify-between flex-1 gap-4 border border-border/50 bg-card px-4 py-2.5">
                  <p className={`text-sm ${item.done ? "text-foreground" : "text-muted-foreground"}`}>{item.label}</p>
                  <span className="text-[10px] font-mono text-muted-foreground/60 whitespace-nowrap">{item.date}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/50 w-full">Partner in Vorbereitung:</p>
            {["FH Gesundheitsberufe OÖ", "Kepler Uniklinikum", "JKU Linz", "tech2b"].map((p) => (
              <span key={p} className="text-[10px] font-mono border border-border px-2.5 py-1 text-muted-foreground bg-card">
                {p}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div {...anim(0.3)} className="flex flex-col gap-6">
          <div className="p-8 border-2 flex flex-col items-center justify-center gap-3" style={{ borderColor: "var(--accent-blue)" }}>
            <a
              href="https://exodus-demo.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-mono text-muted-foreground/60 hover:text-muted-foreground transition-colors"
            >
              <QrCode className="w-5 h-5" />
              exodus-demo.vercel.app
            </a>
            <div
              className="w-32 h-32 border-2 flex items-center justify-center"
              style={{ borderColor: "var(--accent-blue)" }}
            >
              <div className="grid grid-cols-5 grid-rows-5 gap-0.5">
                {Array.from({ length: 25 }).map((_, i) => {
                  const qrPattern = [1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1];
                  return (
                    <div
                      key={i}
                      className={`w-4 h-4 ${qrPattern[i] ? "bg-foreground" : "bg-transparent"}`}
                    />
                  );
                })}
              </div>
            </div>
            <p className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "var(--accent-blue)" }}>
              Demo scannen
            </p>
          </div>

          <div className="space-y-2.5">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Mail className="w-4 h-4 shrink-0" style={{ color: "var(--accent-violet)" }} />
              <a href="mailto:exodus@servas.ai" className="font-mono hover:text-foreground transition-colors">
                exodus@servas.ai
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 shrink-0" style={{ color: "var(--accent-rose)" }} />
              <span>Linz, Oberösterreich, Österreich</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
