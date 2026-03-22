import { motion, useInView } from "framer-motion";
import { AlertOctagon, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { SectionLabel } from "./helpers";

export default function SectionRisks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="risks" className="py-24 border-t border-border scroll-mt-8 section-alt">
      <SectionLabel num={15} />
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-5">
        Hauptrisiken & Gegenstrategie
      </h2>
      <p className="text-muted-foreground mb-12 max-w-2xl text-base leading-relaxed">
        Wir benennen Risiken offen und haben für jedes eine klare Gegenstrategie.
      </p>

      <div ref={ref} className="space-y-3" data-testid="risk-list">
        {[
          { risk: "MDR-/Benannte-Stellen-Komplexität", counter: "Wellness-first Start, modulare Zweckbestimmung, MDR-Pfad erst in Phase 2", color: "var(--accent-rose)" },
          { risk: "Datenzugang (Kepler Uniklinikum)", counter: "LOIs, Pilotprojekt mit klarer Abgrenzung, dokumentierte Kooperation", color: "var(--accent-amber)" },
          { risk: "Halluzinationen / KI-Bias", counter: "Clinician-in-the-Loop, erklärbare KI (EU-konform), Safety Layer, keine automatischen Empfehlungen", color: "var(--accent-violet)" },
          { risk: "Cybersecurity", counter: "Privacy-by-Design, kryptographische Speicherung, EU-Hosting, Security Audits", color: "var(--accent-blue)" },
          { risk: "Finanzierungslücke", counter: "Stufenplan: FFG Projekt.Start → Innovationsscheck → Kleinprojekt → aws First Incubator → Impact Innovation → Basisprogramm", color: "var(--accent-green)" },
          { risk: "AI Act Compliance", counter: "Frühzeitige Einordnung, Erklärbarkeits-Anforderungen (Art. 13 EU AI Act) von Beginn an, Open-Source-Modelle bevorzugt", color: "var(--accent-amber)" },
          { risk: "Ärztliche Akzeptanz", counter: "Clinician-in-the-Loop (Arzt behält Kontrolle), HCP-Dashboard, Pilotstudien", color: "var(--accent-green)" },
          { risk: "Interoperabilität", counter: "Spike API, ELGA-nahe Strukturen, offene Standards", color: "var(--accent-blue)" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: i * 0.06 }}
            className="flex items-start gap-3 p-5 border border-border/70 bg-card"
            data-testid={`risk-item-${i}`}
          >
            <AlertOctagon className="w-4 h-4 shrink-0 mt-0.5" style={{ color: item.color }} />
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <p className="text-sm font-normal">{item.risk}</p>
                <ArrowRight className="w-3 h-3 text-muted-foreground hidden sm:block shrink-0" />
                <p className="text-xs text-muted-foreground font-light">{item.counter}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-xs text-muted-foreground mt-6">
        Weitere Risiken: Haftung, Ethik/Adhärenz, GPU-Kosten. Gegenstrategien: Patent-/IP-Plan, Gamification, Partnernetzwerk.
      </p>
    </section>
  );
}
