import { motion, useInView } from "framer-motion";
import { FileText, Heart, Watch, Stethoscope, ArrowRight, ArrowDown } from "lucide-react";
import { useRef } from "react";
import { FigureCaption, SectionLabel } from "./helpers";

export default function SectionProblem() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="problem" className="py-24 border-t border-border scroll-mt-8">
      <FigureCaption number={1} title="Problem: Fragmentierte Gesundheitsdaten" />
      <SectionLabel num={6} />
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-5">
        Heute: Daten überall.{" "}
        <span className="text-muted-foreground font-medium">Morgen: eine Timeline, die Sinn ergibt.</span>
      </h2>

      <p className="text-muted-foreground mb-12 max-w-2xl text-base leading-relaxed">
        Gesundheitsdaten liegen oft verteilt: PDFs, Arztbriefe, Laborwerte, Wearable-Apps.
        Dadurch fehlt der Überblick, Trends gehen unter und Entscheidungen werden schwer.
        Project Exodus bringt diese Informationen in eine <strong className="text-foreground font-normal">strukturierte Timeline</strong> ("Health Data Wall").
      </p>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="p-6 border border-border bg-[var(--diagram-bg)]"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Heute — Silos</p>
          <div className="space-y-2.5">
            {[
              { icon: <FileText className="w-4 h-4" />, label: "Arztbrief (PDF irgendwo)", color: "text-muted-foreground" },
              { icon: <Watch className="w-4 h-4" />, label: "Wearable-App (eigene Cloud)", color: "text-muted-foreground" },
              { icon: <Heart className="w-4 h-4" />, label: "Labor (Ausdruck im Ordner)", color: "text-muted-foreground" },
              { icon: <Stethoscope className="w-4 h-4" />, label: "Klinik-System (kein Zugriff)", color: "text-muted-foreground" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="flex items-center gap-3 p-2.5 border border-dashed border-border bg-card"
              >
                <span className={item.color}>{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="flex justify-center"
        >
          <ArrowRight className="w-8 h-8 text-[var(--accent-blue)] hidden md:block" />
          <ArrowDown className="w-8 h-8 text-[var(--accent-blue)] md:hidden" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-6 border-2 bg-card"
          style={{ borderColor: "var(--accent-blue)" }}
        >
          <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "var(--accent-blue)" }}>
            Morgen — Health Data Wall
          </p>
          <div className="space-y-2.5">
            {[
              { label: "Vitamin D Trend", sub: "↗ 28 → 45 ng/ml (6 Mo.)", color: "var(--accent-green)" },
              { label: "Blutdruck-Verlauf", sub: "140/90 → 128/82 mmHg", color: "var(--accent-blue)" },
              { label: "Arztbrief: Endokrinologie", sub: "TSH 2.4 mU/L — erklärt", color: "var(--accent-violet)" },
              { label: "Mental Health Tagebuch", sub: "Stimmung · Schlaf · Stress — täglich", color: "var(--accent-amber)" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-3 p-2.5 bg-[var(--diagram-bg)] border border-border"
              >
                <div className="w-1 h-8 rounded-full" style={{ backgroundColor: item.color }} />
                <div>
                  <p className="text-sm font-medium">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
