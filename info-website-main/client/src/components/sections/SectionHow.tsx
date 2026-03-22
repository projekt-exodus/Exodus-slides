import { motion, useInView } from "framer-motion";
import {
  Import, BookOpen, UserCheck, AlertTriangle, Eye,
  Search, Layers, Zap
} from "lucide-react";
import { useRef } from "react";
import { ExplainCard, FigureCaption, SectionLabel } from "./helpers";

export default function SectionHow() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how" className="py-24 border-t border-border scroll-mt-8 section-alt">
      <SectionLabel num={7} />
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-5">
        Import → Verstehen → Freigabe
      </h2>
      <p className="text-muted-foreground mb-12 max-w-2xl text-base leading-relaxed">
        In drei einfachen Schritten: Daten rein, verstehen, und bei Bedarf ärztlich freigeben lassen.
      </p>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          {
            step: "01",
            icon: <Import className="w-6 h-6" />,
            title: "Import",
            desc: "Dokumente (PDF/Scan) und Wearable-Daten werden in den Vault übernommen und geordnet.",
            color: "blue",
          },
          {
            step: "02",
            icon: <BookOpen className="w-6 h-6" />,
            title: "Verstehen",
            desc: "Die App übersetzt Werte in klare Erklärungen: Was ist das? Warum relevant? Was könnte ich beobachten?",
            color: "green",
          },
          {
            step: "03",
            icon: <UserCheck className="w-6 h-6" />,
            title: "Freigabe",
            desc: "Wenn personalisierte Pläne entstehen, prüft ein Arzt/Therapeut sie und gibt sie frei.",
            color: "violet",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.12 }}
            className="p-6 border border-border/70 bg-card relative"
            data-testid={`card-step-${item.step}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-muted-foreground">{item.step}</span>
              <div style={{ color: `var(--accent-${item.color})` }}>{item.icon}</div>
            </div>
            <h3 className="font-semibold text-base tracking-tight mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 border-2 flex items-start gap-4"
        style={{ borderColor: "var(--accent-amber)", backgroundColor: "var(--accent-amber-bg)" }}
        data-testid="callout-safety"
      >
        <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "var(--accent-amber)" }} />
        <div>
          <p className="font-normal text-sm mb-1.5">Safety-Prinzip</p>
          <p className="text-sm font-light text-muted-foreground">
            KI darf vorschlagen — <strong className="text-foreground font-medium">aber nicht ungeprüft entscheiden.</strong> Keine Diagnose, kein "Therapie-Befehl".
          </p>
        </div>
      </motion.div>

      <FigureCaption number={2} title="Dreistufiger Datenfluss: Import → Verstehen → Freigabe" />

      <div className="mt-14">
        <h3 className="text-xl font-semibold tracking-tight mb-5">Beispiel: Erklärkarten</h3>
        <p className="text-sm text-muted-foreground mb-6 max-w-2xl leading-relaxed">
          Statt kryptischer Laborwerte bekommst du verständliche Karten, die erklären:
          Was wurde gemessen? Was bedeutet der Wert? Was könnte ich beobachten?
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <ExplainCard
            title="Vitamin D — 28 ng/ml"
            status="Niedrig-normal"
            statusColor="var(--accent-amber)"
            explanation="Vitamin D unterstützt Knochen, Immunsystem und Stimmung. Dein Wert liegt im unteren Bereich."
            observation="Beobachte: Müdigkeit, Infektanfälligkeit im Winter. Ein Trend über mehrere Messungen ist aussagekräftiger als ein Einzelwert."
            testId="card-explain-vitd"
          />
          <ExplainCard
            title="TSH — 2.4 mU/L"
            status="Normalbereich"
            statusColor="var(--accent-green)"
            explanation="TSH steuert die Schilddrüse. Dein Wert liegt im Normalbereich (0.4–4.0 mU/L)."
            observation="Kein Handlungsbedarf. Bei Symptomen wie Gewichtsveränderung oder Kälteempfinden: Arzt konsultieren."
            testId="card-explain-tsh"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-4 border border-border bg-[var(--diagram-bg)] flex items-start gap-3"
        >
          <Eye className="w-4 h-4 shrink-0 mt-0.5 text-muted-foreground" />
          <p className="text-xs text-muted-foreground font-light leading-relaxed">
            <strong className="text-foreground font-medium">Wichtig:</strong> Erklärkarten liefern allgemeine Informationen — keine individuelle Diagnose.
            Sie helfen dir, deine Werte besser zu verstehen und gezielt mit deinem Arzt zu besprechen.
          </p>
        </motion.div>
      </div>

      <div className="mt-14 p-8 border border-border/70 bg-card">
        <div className="flex items-center gap-3 mb-5">
          <Zap className="w-5 h-5" style={{ color: "var(--accent-violet)" }} />
          <h3 className="font-semibold text-base tracking-tight">Phase 2 Vision: Evidence-to-Plan</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          In Phase 2 wird aus dem reinen Informationssystem ein Unterstützungssystem:
          Die App kann auf Basis wissenschaftlicher Evidenz (Studien, Leitlinien) <strong className="text-foreground font-normal">personalisierte Entwürfe</strong> erstellen —
          zum Beispiel Ernährungsanpassungen oder Monitoring-Vorschläge.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { icon: <Search className="w-4 h-4" />, label: "Evidenz finden", desc: "RAG durchsucht medizinische Literatur" },
            { icon: <Layers className="w-4 h-4" />, label: "Plan-Entwurf", desc: "KI erstellt personalisierten Vorschlag" },
            { icon: <UserCheck className="w-4 h-4" />, label: "Arzt-Freigabe", desc: "Fachperson prüft und gibt frei" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2.5 p-3 bg-[var(--diagram-bg)] border border-border">
              <div className="mt-0.5" style={{ color: "var(--accent-violet)" }}>{item.icon}</div>
              <div>
                <p className="text-xs font-medium">{item.label}</p>
                <p className="text-[11px] text-muted-foreground font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          Phase 2 erfordert MDR-Konformität und klinische Validierung. Bis dahin: nur allgemeine Informationen.
        </p>
      </div>
    </section>
  );
}
