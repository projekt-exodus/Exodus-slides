import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FigureCaption, SectionLabel, StatusBadge } from "./helpers";

export default function SectionRegulation() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="regulation" className="py-24 border-t border-border scroll-mt-8 section-alt">
      <SectionLabel num={13} />
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-5">
        Regulatorik: Wir starten bewusst "unterhalb" der Medizinprodukt-Schwelle.
      </h2>
      <p className="text-muted-foreground mb-12 max-w-2xl text-base leading-relaxed">
        In der EU hängt viel an der Zweckbestimmung ("Intended Purpose"). Darum trennen wir Funktionen modular
        und starten mit einem <strong className="text-foreground font-normal">Informationssystem</strong>: sammeln, strukturieren, anzeigen — plus allgemeine Erklärungen.
      </p>

      <div ref={ref} className="overflow-x-auto mb-8 -mx-1 px-1">
        <table className="w-full border-collapse text-left min-w-0" data-testid="table-regulatory">
          <thead>
            <tr className="border-b-2 border-foreground">
              <th className="py-3 px-2 sm:px-4 font-medium text-xs sm:text-sm">Funktion</th>
              <th className="py-3 px-2 sm:px-4 font-medium text-xs sm:text-sm" style={{ color: "var(--accent-blue)" }}>Phase 1</th>
              <th className="py-3 px-2 sm:px-4 font-medium text-xs sm:text-sm" style={{ color: "var(--accent-violet)" }}>Phase 2</th>
            </tr>
          </thead>
          <tbody>
            {[
              { func: "Daten speichern/anzeigen", p1: "check", p2: "check" },
              { func: "Dokumente strukturieren (OCR)", p1: "check", p2: "check" },
              { func: "Allgemeine Erklärungen", p1: "check", p2: "check" },
              { func: "Personalisierte Pläne", p1: "warn", p1note: "nur als Entwurf + Arzt-Freigabe", p2: "check", p2note: "mit klinischer Evidenz" },
              { func: "Diagnose/Therapie automatisch", p1: "no", p2: "warn", p2note: "nur mit MDR-Pfad" },
            ].map((row, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="border-b border-border hover:bg-muted/30 transition-colors"
              >
                <td className="py-3.5 px-2 sm:px-4 text-xs sm:text-sm">{row.func}</td>
                <td className="py-3.5 px-2 sm:px-4"><StatusBadge status={row.p1} note={row.p1note} /></td>
                <td className="py-3.5 px-2 sm:px-4"><StatusBadge status={row.p2} note={row.p2note} /></td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-muted-foreground">
        Diese Seite ist keine Rechtsberatung. MDR/AI-Act Einordnung wird im Projekt mit Expert:innen geprüft.
      </p>

      <FigureCaption number={4} title="Regulatorische Einordnung: Phase 1 (Informationssystem) vs. Phase 2 (MDR-Pfad)" />
    </section>
  );
}
