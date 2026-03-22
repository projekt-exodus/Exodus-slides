import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Database, Mic, Stethoscope, Pill, Zap, Target, Globe,
  CheckCircle2, ChevronDown, X
} from "lucide-react";
import { useRef, useState } from "react";
import { SectionLabel } from "./helpers";
import {
  AppleIcon, WHOOPIcon, FitbitIcon, GoogleHealthIcon,
} from "@/components/brand-icons";

const competitors = [
  {
    name: "Exodus",
    label: "AT · Open Core",
    desc: "Österreichisches Start-up. Integrierte End-to-End Gesundheitsplattform — Labordaten, Wearables, KI-Erklärungen, Supplement-Shop und ärztliche Freigabe in einer App. Open Core: der Health Vault wird Open Source, der KI-Layer bleibt proprietär. Lokal-first, EU-DSGVO-konform.",
    logo: null,
  },
  {
    name: "Apple Health",
    label: "US · Big Tech",
    desc: "Apples integrierter Gesundheitsdaten-Aggregator für iOS und Apple Watch. Starke Wearable-Integration und Privacy-Features (lokal-first), aber keine personalisierten KI-Empfehlungen, kein Lab-Import und keine Arzt-Anbindung. US-Konzern, iCloud-Abhängigkeit.",
    logo: <AppleIcon size={13} />,
  },
  {
    name: "WHOOP",
    label: "US · Hardware-Wearable",
    desc: "US-Wearable fokussiert auf Erholung, Schlaf und Belastungssteuerung für Sportler. Starke KI-Insights für Sport-Performance und Abo-Modell ohne Gerätekauf. Kein Lab-Daten-Import, keine Supplement-Integration, kein EU-Datenschutz.",
    logo: <WHOOPIcon size={13} />,
  },
  {
    name: "Superpower",
    label: "US · Longevity",
    desc: "US-Longevity-Start-up mit Fokus auf umfassende Labortests und ärztliche Auswertung. Bietet personalisierte Gesundheitspläne und Arzt-Validierung, jedoch kein eigenes Wearable und eingeschränkte EU-Verfügbarkeit.",
    logo: null,
  },
  {
    name: "Function Health",
    label: "US · Lab-Fokus",
    desc: "US-Plattform für 160+ Biomarker-Labortests mit Arztbegleitung. Sehr tiefe Labordiagnostik, aber keine Wearable-Integration, kein Supplement-Shop und ausschließlich auf den US-Markt ausgerichtet.",
    logo: null,
  },
  {
    name: "Guava Health",
    label: "US · Aggregator",
    desc: "Gesundheitsdaten-Aggregator, der Labordaten, Wearables und Dokumente verbindet. Früh-Phase Start-up mit starker Datenintegration, aber noch ohne eigene KI-Empfehlungsschicht oder Supplement-Integration.",
    logo: null,
  },
  {
    name: "Heads Up Health",
    label: "US · Daten-Hub",
    desc: "Plattform zur Aggregation von Gesundheitsdaten aus 100+ Quellen (Wearables, Labs, EHRs). Stärke liegt in der Datenvisualisierung und Quantified-Self-Community, nicht in personalisierten Empfehlungen.",
    logo: null,
  },
  {
    name: "OneTwenty",
    label: "US · Prävention",
    desc: "Integriert Labordaten und Supplement-Empfehlungen mit Fokus auf Langlebigkeit und Prävention. Arztanbindung vorhanden, aber insgesamt weniger ganzheitlich und breiter Markt als Exodus.",
    logo: null,
  },
  {
    name: "Empirical Health",
    label: "US · Evidenz",
    desc: "Evidenzbasierte Gesundheitsoptimierung mit Fokus auf Biomarker-Tracking und ärztlicher Validierung. Trainingsplanung vorhanden, kein Supplement-Shop, kein EU-Datenschutz.",
    logo: null,
  },
  {
    name: "DontDie",
    label: "US · Longevity Community",
    desc: "Bryan Johnsons Longevity-Plattform und Community rund um extreme Prävention und Biohacking. Inspirierende Bewegung mit öffentlicher Transparenz, aber noch keine breite App-Plattform für Endnutzer.",
    logo: null,
  },
  {
    name: "Fitbit",
    label: "US · Consumer Wearable",
    desc: "Google-Wearable-Plattform mit breiter Nutzerbasis und Fokus auf Schritt-, Schlaf- und Fitnessdaten. Keine Laborintegration, keine medizinischen Features, US-Cloud-Abhängigkeit.",
    logo: <FitbitIcon size={13} />,
  },
];

const rows = [
  {
    feature: "Labordaten & Arztbriefe",
    tag: "Datenhaltung",
    glossDef: "Die F\u00e4higkeit, unstrukturierte medizinische Dokumente (PDFs, Scans) mittels KI zu digitalisieren, Biomarker zu extrahieren und longitudinale Trends \u00fcber Jahre hinweg zu visualisieren.",
    vals: [true,"partial",false,"partial","partial",true,true,"partial","partial",false,false],
  },
  {
    feature: "Wearable-Integration",
    tag: "Biometrie",
    glossDef: "Nahtlose Aggregation von Echtzeit-Biometrie (HRV, VO\u2082 Max, Schlafstadien) von verschiedenen Hardware-Anbietern in ein zentrales Dashboard.",
    vals: [true,true,true,false,"partial",true,true,true,true,true,true],
  },
  {
    feature: "KI-Erkl\u00e4rungen",
    tag: "XAI",
    glossDef: "Einsatz erkl\u00e4rbarer KI (Explainable AI), die Kausalzusammenh\u00e4nge zwischen Lebensstil und Laborwerten aufzeigt, anstatt nur isolierte Datenpunkte zu liefern.",
    vals: [true,false,true,false,false,false,false,false,false,false,false],
  },
  {
    feature: "\u00c4rztliche Freigabe",
    tag: "Medizin",
    glossDef: "Ein Prozess, bei dem generierte Gesundheitspl\u00e4ne oder Laboranalysen von approbierten Medizinern gepr\u00fcft und f\u00fcr den Nutzer freigegeben werden.",
    vals: [true,false,false,"partial",false,false,false,false,true,false,false],
  },
  {
    feature: "Supplements integriert",
    tag: "Shop / Rx",
    glossDef: "Ein direkt in die App integrierter Marktplatz f\u00fcr personalisierte N\u00e4hrstoffe oder klinische Medikamente (z. B. Peptide, HRT), basierend auf den individuellen Daten.",
    vals: [true,false,false,"partial","partial",false,false,"partial",false,false,false],
  },
  {
    feature: "Trainingspl\u00e4ne & Fitness",
    tag: "Sportwissenschaft",
    glossDef: "Bereitstellung von sportwissenschaftlich fundierten Programmen, die Belastungs- und Erholungsdaten (RHR, HRV) dynamisch in die Workout-Steuerung einbeziehen.",
    vals: [true,false,true,false,"partial",false,false,false,"partial","partial",true],
  },
  {
    feature: "Lokal-first / Privacy",
    tag: "Architektur",
    glossDef: "Eine Architektur, bei der die sensiblen Gesundheitsdaten prim\u00e4r auf dem Ger\u00e4t des Nutzers verschl\u00fcsselt gespeichert und verarbeitet werden.",
    vals: [true,"partial",false,false,false,false,false,false,false,false,false],
  },
  {
    feature: "KI-Wahl",
    tag: "Technologie",
    glossDef: "Die technologische Freiheit, zwischen verschiedenen KI-Modellen (z.\u00a0B. lokale LLMs f\u00fcr maximale Privacy vs. leistungsstarke Cloud-Modelle) zu wechseln.",
    vals: [true,false,false,false,false,false,false,false,false,false,false],
  },
  {
    feature: "EU-DSGVO",
    tag: "Compliance",
    glossDef: "Nachweisbare Einhaltung europ\u00e4ischer Datenschutzstandards, inklusive Serverstandorten in der EU und dem Verzicht auf unautorisierte Drittanbieter-Weitergaben.",
    vals: [true,"partial",false,false,false,false,false,false,false,false,false],
  },
] as { feature: string; tag: string; glossDef: string; vals: (boolean | "partial")[] }[];

export default function SectionVision() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCol, setActiveCol] = useState<number | null>(null);
  const [activeRow, setActiveRow] = useState<number | null>(null);

  function toggleCol(i: number) {
    setActiveCol(prev => (prev === i ? null : i));
  }

  function toggleRow(i: number) {
    setActiveRow(prev => (prev === i ? null : i));
  }

  const activeCompetitor = activeCol !== null ? competitors[activeCol] : null;
  const activeGloss = activeRow !== null ? rows[activeRow] : null;

  return (
    <section id="vision" className="py-24 border-t border-border scroll-mt-8 section-alt">
      <SectionLabel num={2} />
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-5">
        Warum Exodus?{" "}
        <span className="text-muted-foreground font-medium">Eine Plattform statt zehn Apps.</span>
      </h2>
      <p className="text-muted-foreground mb-12 max-w-2xl text-base leading-relaxed">
        Heute brauchst du eine App für Labor, eine für Fitness, eine für Supplements, eine für den Arzt.
        Exodus bringt alles zusammen — <strong className="text-foreground font-normal">ganzheitlich, verständlich und sicher</strong>.
      </p>

      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {[
          {
            icon: <Database className="w-5 h-5" />,
            title: "Health Vault / Data Wall",
            desc: "Laborbefunde, Arztbriefe, Trainings- und Wearable-Daten — alles importiert, strukturiert und als Timeline visualisiert.",
            color: "blue",
          },
          {
            icon: <Mic className="w-5 h-5" />,
            title: "Simpel wie Instagram",
            desc: "Voice-first Bedienung. Zugänglich auch für Ältere — per SMS oder Anruf nutzbar.",
            color: "green",
          },
          {
            icon: <Stethoscope className="w-5 h-5" />,
            title: "Arzt-/HCP-Dashboard",
            desc: "Ärzte und Therapeuten sehen relevante Daten, prüfen KI-Vorschläge und geben Pläne frei.",
            color: "violet",
          },
          {
            icon: <Pill className="w-5 h-5" />,
            title: "Supplement-Ökosystem",
            desc: "Eigener Supplement-Hersteller mit Custom-Abfüllung, Kooperationen (z.B. Biogena) und In-App-Kauf — personalisiert auf dein Profil.",
            color: "amber",
          },
          {
            icon: <Zap className="w-5 h-5" />,
            title: "KI-gestützte Analysen",
            desc: "Schrittweise: von allgemeinen Erklärungen bis hin zu personalisierten Trainings- und Gesundheitsplänen.",
            color: "rose",
          },
          {
            icon: <Target className="w-5 h-5" />,
            title: "Kern-USP",
            desc: "Ganzheitliche Abdeckung: Labor + Fitness + Supplements + ärztliche Betreuung — statt Insellösungen.",
            color: "blue",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35, delay: i * 0.08 }}
            className="p-6 border border-border/70 bg-card"
            data-testid={`card-vision-${i}`}
          >
            <div className="mb-3" style={{ color: `var(--accent-${item.color})` }}>{item.icon}</div>
            <h3 className="text-sm font-normal mb-2">{item.title}</h3>
            <p className="text-xs text-muted-foreground font-light leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="p-6 border-2 flex items-start gap-4" style={{ borderColor: "var(--accent-blue)", backgroundColor: "var(--accent-blue-bg)" }}>
        <Globe className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "var(--accent-blue)" }} />
        <div>
          <p className="font-normal text-sm mb-1.5">Differenzierung</p>
          <p className="text-sm font-light text-muted-foreground">
            Im Gegensatz zu tandemhealth.ai, Oura, Apple Health, Whoop oder spezialisierten Einzel-Apps
            bietet Exodus eine <strong className="text-foreground font-medium">integrierte End-to-End Plattform</strong>: von der Datenerfassung über KI-Analyse bis zur ärztlichen Freigabe.
          </p>
        </div>
      </div>

      {/* Competitive Comparison Matrix */}
      <div className="mt-14">
        <h3 className="text-xl font-semibold tracking-tight mb-5">Wettbewerbsvergleich</h3>
        <p className="text-sm text-muted-foreground mb-6 max-w-2xl leading-relaxed">
          Wie unterscheidet sich Exodus von bestehenden Lösungen? Ein Überblick über die wichtigsten Dimensionen — verglichen mit 10 Wettbewerbern.
          <span className="block mt-1 text-xs text-muted-foreground/60 font-mono">
            Spaltenheader anklicken für Anbieter-Details · Feature-Label anklicken für Glossar-Definition.
          </span>
        </p>

        {/* Competitor column detail panel — above the scrollable table */}
        <AnimatePresence>
          {activeCompetitor && (
            <motion.div
              key={`col-${activeCol}`}
              initial={{ height: 0, opacity: 0, scale: 0.97 }}
              animate={{ height: "auto", opacity: 1, scale: 1 }}
              exit={{ height: 0, opacity: 0, scale: 0.97, transition: { ease: "easeIn", duration: 0.15 } }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              style={{ overflow: "hidden" }}
              className="mb-3"
              data-testid="panel-competitor-detail"
            >
            <div className="p-4 border border-border/70 bg-card flex gap-4 items-start max-h-40 overflow-y-auto">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span
                    className="text-sm font-normal"
                    style={activeCol === 0 ? { color: "var(--accent-blue)" } : undefined}
                  >
                    {activeCompetitor.name}
                  </span>
                  <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 border border-border/60 text-muted-foreground">
                    {activeCompetitor.label}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  {activeCompetitor.desc}
                </p>
              </div>
              <button
                onClick={() => setActiveCol(null)}
                className="shrink-0 text-muted-foreground/50 hover:text-foreground transition-colors mt-0.5"
                aria-label="Schließen"
                data-testid="button-close-col-detail"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="overflow-x-auto -mx-1 px-1">
          <table className="border-collapse text-left min-w-[980px] w-full" data-testid="table-competitive">
            <thead>
              <tr className="border-b-2 border-foreground">
                <th className="py-3 px-3 font-medium text-xs sticky left-0 bg-background z-10 min-w-[160px]">Feature</th>
                {competitors.map((c, ci) => (
                  <th
                    key={ci}
                    className="py-0 px-0 min-w-[64px]"
                    style={ci === 4 ? { minWidth: 72 } : ci === 6 || ci === 7 || ci === 8 ? { minWidth: 68 } : undefined}
                  >
                    <button
                      onClick={() => toggleCol(ci)}
                      data-testid={`button-col-${ci}`}
                      aria-expanded={activeCol === ci}
                      className="w-full flex flex-col items-center justify-center gap-0.5 py-2 px-2 group transition-colors"
                      style={{
                        color: ci === 0
                          ? "var(--accent-blue)"
                          : activeCol === ci
                          ? "var(--foreground)"
                          : undefined,
                      }}
                    >
                      {c.logo && (
                        <span
                          className="mb-0.5 text-muted-foreground/60 group-hover:text-muted-foreground transition-colors"
                          style={activeCol === ci ? { color: "var(--foreground)" } : undefined}
                        >
                          {c.logo}
                        </span>
                      )}
                      <span
                        className={
                          ci === 0
                            ? "font-semibold text-xs"
                            : "font-mono font-normal text-[10px] text-muted-foreground group-hover:text-foreground transition-colors"
                        }
                        style={activeCol === ci && ci !== 0 ? { color: "var(--foreground)" } : undefined}
                      >
                        {c.name}
                      </span>
                      <ChevronDown
                        className="w-2.5 h-2.5 shrink-0 transition-transform text-muted-foreground/40 group-hover:text-muted-foreground"
                        style={{
                          transform: activeCol === ci ? "rotate(180deg)" : "rotate(0deg)",
                          color: activeCol === ci ? "var(--foreground)" : undefined,
                        }}
                      />
                    </button>
                    {activeCol === ci && (
                      <div
                        className="h-0.5 w-full"
                        style={{
                          backgroundColor: ci === 0 ? "var(--accent-blue)" : "var(--foreground)",
                        }}
                      />
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr
                  key={ri}
                  className="border-b border-border transition-colors"
                  style={
                    activeRow === ri
                      ? { backgroundColor: "color-mix(in srgb, var(--muted-foreground) 5%, transparent)" }
                      : undefined
                  }
                >
                  {/* Clickable feature label cell */}
                  <td className="py-0 px-0 sticky left-0 bg-background z-10">
                    <button
                      onClick={() => toggleRow(ri)}
                      data-testid={`button-row-${ri}`}
                      aria-expanded={activeRow === ri}
                      className="w-full flex items-center gap-1.5 py-2.5 px-3 text-left group transition-colors hover:text-foreground"
                    >
                      <span
                        className="text-xs font-normal leading-snug flex-1"
                        style={activeRow === ri ? { textDecoration: "underline", textUnderlineOffset: "3px" } : undefined}
                      >
                        {row.feature}
                      </span>
                      <ChevronDown
                        className="w-2.5 h-2.5 shrink-0 text-muted-foreground/30 group-hover:text-muted-foreground transition-colors"
                        style={{
                          transform: activeRow === ri ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s",
                          color: activeRow === ri ? "var(--foreground)" : undefined,
                        }}
                      />
                    </button>
                  </td>
                  {row.vals.map((val, ci) => (
                    <td
                      key={ci}
                      className="py-2.5 px-2 text-center transition-colors"
                      style={{
                        backgroundColor: ci === 0
                          ? "var(--accent-blue)08"
                          : activeCol === ci
                          ? "color-mix(in srgb, var(--muted-foreground) 6%, transparent)"
                          : undefined,
                      }}
                    >
                      {val === true ? (
                        <CheckCircle2
                          className="w-3.5 h-3.5 inline-block"
                          style={{ color: "var(--accent-green)" }}
                        />
                      ) : val === "partial" ? (
                        <span className="text-[10px] font-mono text-muted-foreground">teilw.</span>
                      ) : (
                        <span className="text-muted-foreground/30 text-sm">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Glossary row detail panel — below the scrollable table */}
        <AnimatePresence>
          {activeGloss && (
            <motion.div
              key={`row-${activeRow}`}
              initial={{ height: 0, opacity: 0, scale: 0.97, y: 6 }}
              animate={{ height: "auto", opacity: 1, scale: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, scale: 0.97, y: 6, transition: { ease: "easeIn", duration: 0.15 } }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              style={{ overflow: "hidden" }}
              className="mt-3"
              data-testid="panel-glossary-detail"
            >
            <div className="p-4 border border-border/70 bg-card flex gap-4 items-start max-h-40 overflow-y-auto">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-sm font-normal">{activeGloss.feature}</span>
                  <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 border border-border/60 text-muted-foreground">
                    {activeGloss.tag}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  {activeGloss.glossDef}
                </p>
              </div>
              <button
                onClick={() => setActiveRow(null)}
                className="shrink-0 text-muted-foreground/50 hover:text-foreground transition-colors mt-0.5"
                aria-label="Schließen"
                data-testid="button-close-row-detail"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-xs text-muted-foreground mt-4">
          Stand: März 2026. Vergleich basiert auf öffentlich verfügbaren Produktinformationen.
          „teilw." = Funktion vorhanden, aber eingeschränkt oder ohne zentrale Integration.
          Quellen: Produktwebsites, App Stores, öffentliche Dokumentation der jeweiligen Anbieter.
        </p>
      </div>
    </section>
  );
}
