import { motion } from "framer-motion";
import { Eye } from "lucide-react";

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay },
});

function ExplainerCard({
  title,
  value,
  status,
  statusColor,
  explanation,
  observation,
}: {
  title: string;
  value: string;
  status: string;
  statusColor: string;
  explanation: string;
  observation: string;
}) {
  return (
    <div className="p-5 border border-border/70 bg-card flex-1">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h4 className="text-sm font-normal">{title}</h4>
          <p className="text-lg font-semibold mt-0.5" style={{ color: statusColor }}>{value}</p>
        </div>
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
    </div>
  );
}

export default function Slide05() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-16 py-16 max-w-6xl mx-auto">
      <motion.p {...anim(0)} className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40 mb-4">
        05 — Demo · Felix
      </motion.p>

      <motion.h2 {...anim(0.05)} className="text-3xl sm:text-4xl font-bold tracking-tight mb-2 max-w-3xl leading-tight">
        Das sind meine echten Daten.
      </motion.h2>
      <motion.p {...anim(0.08)} className="text-base text-muted-foreground mb-8 max-w-xl">
        Das sind echte Supplements. Custom abgefüllt. Von mir persönlich getestet.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div {...anim(0.12)} className="flex flex-col gap-4">
          <div className="border border-border/70 bg-[var(--diagram-bg)] p-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {["Labor", "Fitness", "Arztbriefe", "Wearables"].map((tab, i) => (
                <span
                  key={tab}
                  className={`text-[10px] font-mono px-3 py-1.5 border cursor-pointer ${
                    i === 0
                      ? "border-[var(--accent-blue)] text-[var(--accent-blue)] bg-[var(--accent-blue)]/10"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {tab}
                </span>
              ))}
            </div>
            <div className="relative w-full" style={{ paddingBottom: "56.25%", minHeight: 280 }}>
              <iframe
                src="https://exodus-demo.vercel.app"
                title="Exodus App Demo"
                className="absolute inset-0 w-full h-full border-0"
                style={{ pointerEvents: "auto" }}
                allow="accelerometer; gyroscope"
                loading="lazy"
              />
            </div>
          </div>
          <a
            href="https://exodus-demo.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-muted-foreground/60 hover:text-muted-foreground transition-colors text-center"
          >
            exodus-demo.vercel.app →
          </a>
        </motion.div>

        <motion.div {...anim(0.2)} className="flex flex-col gap-4 justify-center">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/50 mb-2">Erklärkarten</p>
          <ExplainerCard
            title="Vitamin D"
            value="28 ng/ml"
            status="Suboptimal"
            statusColor="var(--accent-amber)"
            explanation="Vitamin D ist essenziell für Immunfunktion, Knochengesundheit und Stimmungsregulation. Werte unter 30 ng/ml gelten als suboptimal."
            observation="Beobachte: Tageslicht erhöhen, Supplementierung nach ärztlicher Rücksprache"
          />
          <ExplainerCard
            title="TSH (Schilddrüse)"
            value="2.4 mU/L"
            status="Im Referenzbereich"
            statusColor="var(--accent-green)"
            explanation="TSH kontrolliert die Schilddrüsenaktivität. Dein Wert liegt gut im Normalbereich (0.4–4.0 mU/L)."
            observation="Kein Handlungsbedarf — nächste Kontrolle in 12 Monaten"
          />
        </motion.div>
      </div>
    </div>
  );
}
