import { motion, useInView } from "framer-motion";
import { Database, Pill, TrendingUp, Repeat, Stethoscope, ArrowRightLeft } from "lucide-react";
import { useRef } from "react";
import { SectionLabel } from "./helpers";

export default function SectionRevenue() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="revenue" className="py-24 border-t border-border scroll-mt-8">
      <SectionLabel num={10} />
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-5">
        Revenue-Modell
      </h2>
      <p className="text-muted-foreground mb-12 max-w-2xl text-base leading-relaxed">
        Drei Einnahmequellen, die sich gegenseitig verstärken: ein Abo-Modell für den Health Data Vault,
        ärztliche Beratung und Heilpläne sowie der Verkauf von Supplements und Longevity-Produkten.
      </p>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="p-6 border-2 bg-card"
          style={{ borderColor: "var(--accent-blue)" }}
          data-testid="card-revenue-subscription"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 flex items-center justify-center" style={{ color: "var(--accent-blue)", backgroundColor: "var(--accent-blue-bg)" }}>
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-base tracking-tight">Abo-Subscription</h3>
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Health Data Vault</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Monatliches oder jährliches Abo für den vollen Zugang zum Health Data Vault:
            Dokumente importieren, strukturieren, KI-Erklärungen, Timeline-Ansicht und optionaler Cloud-Sync.
          </p>
          <div className="space-y-2">
            {[
              { label: "Free Tier", desc: "Begrenzter Import, allgemeine Übersicht", icon: <Database className="w-3.5 h-3.5" /> },
              { label: "Premium", desc: "Unbegrenzter Import, KI-Erklärungen, Cloud-Sync, Wearable-Integration", icon: <TrendingUp className="w-3.5 h-3.5" /> },
              { label: "Family", desc: "Mehrere Profile, geteilte Verwaltung (z.B. für Eltern/Kinder)", icon: <Repeat className="w-3.5 h-3.5" /> },
            ].map((tier, i) => (
              <div key={i} className="flex items-start gap-2.5 p-3 bg-[var(--diagram-bg)] border border-border">
                <div className="mt-0.5" style={{ color: "var(--accent-blue)" }}>{tier.icon}</div>
                <div>
                  <p className="text-xs font-medium">{tier.label}</p>
                  <p className="text-[11px] text-muted-foreground font-light">{tier.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="p-6 border-2 bg-card"
          style={{ borderColor: "var(--accent-violet)" }}
          data-testid="card-revenue-consulting"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 flex items-center justify-center" style={{ color: "var(--accent-violet)", backgroundColor: "var(--accent-violet-bg)" }}>
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-base tracking-tight">Arzt-Beratung & Heilpläne</h3>
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Plattform-Vermittlung</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Ärzte erstellen auf Basis der Gesundheitsdaten individuelle Heilpläne und Beratungen.
            Exodus ist die Schnittstelle zwischen Patient und Arzt und verdient an jeder Vermittlung.
          </p>
          <div className="space-y-2">
            {[
              { label: "Heilplan-Erstellung", desc: "Ärzte erstellen personalisierte Gesundheitspläne auf Datenbasis", icon: <Stethoscope className="w-3.5 h-3.5" /> },
              { label: "Beratungsgespräche", desc: "Video- oder Chat-Beratung mit Fachärzten über die Plattform", icon: <ArrowRightLeft className="w-3.5 h-3.5" /> },
              { label: "Provision", desc: "Exodus als Vermittler erhält einen Anteil pro Beratung", icon: <TrendingUp className="w-3.5 h-3.5" /> },
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="p-6 border-2 bg-card"
          style={{ borderColor: "var(--accent-green)" }}
          data-testid="card-revenue-supplements"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 flex items-center justify-center" style={{ color: "var(--accent-green)", backgroundColor: "var(--accent-green-bg)" }}>
              <Pill className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-base tracking-tight">Supplements & Longevity</h3>
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Produkt-Verkauf</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Eigene Supplements und Longevity-Produkte, personalisiert auf Basis deiner Gesundheitsdaten.
            Direkt in der App bestellbar — plus Kooperationen mit etablierten Herstellern.
          </p>
          <div className="space-y-2">
            {[
              { label: "Eigene Produkte", desc: "Custom-Abfüllung, personalisierte Zusammenstellung", icon: <Pill className="w-3.5 h-3.5" /> },
              { label: "Kooperationen", desc: "z.B. Biogena, weitere Premium-Hersteller", icon: <TrendingUp className="w-3.5 h-3.5" /> },
              { label: "In-App-Kauf", desc: "Nahtlose Bestellung direkt aus der App heraus", icon: <Repeat className="w-3.5 h-3.5" /> },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5 p-3 bg-[var(--diagram-bg)] border border-border">
                <div className="mt-0.5" style={{ color: "var(--accent-green)" }}>{item.icon}</div>
                <div>
                  <p className="text-xs font-medium">{item.label}</p>
                  <p className="text-[11px] text-muted-foreground font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="p-5 border border-border/70 bg-[var(--diagram-bg)] flex items-start gap-3">
        <TrendingUp className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "var(--accent-violet)" }} />
        <p className="text-xs text-muted-foreground font-light leading-relaxed">
          <strong className="text-foreground font-medium">Synergie:</strong> Die Abo-Plattform liefert die Datengrundlage für ärztliche Heilpläne und personalisierte Supplement-Empfehlungen.
          Ärzte nutzen die strukturierten Daten für bessere Beratung, Supplements generieren wiederkehrenden Umsatz — alles über eine zentrale Schnittstelle.
        </p>
      </div>
    </section>
  );
}
