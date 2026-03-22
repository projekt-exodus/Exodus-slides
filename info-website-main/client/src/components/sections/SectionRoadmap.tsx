import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Circle, CalendarClock } from "lucide-react";
import { useRef } from "react";
import { FigureCaption, SectionLabel } from "./helpers";

type MilestoneStatus = "done" | "active" | "pending" | "soon" | "planned";

interface NearTermMilestone {
  date: string;
  title: string;
  desc: string;
  status: MilestoneStatus;
}

interface LongTermMilestone {
  date: string;
  title: string;
  desc: string;
  color: string;
}

const statusConfig: Record<MilestoneStatus, { label: string; color: string; bg: string; border: string }> = {
  done: {
    label: "Erledigt",
    color: "var(--accent-green)",
    bg: "var(--accent-green-bg, rgba(34,197,94,0.08))",
    border: "var(--accent-green)",
  },
  active: {
    label: "Jetzt",
    color: "var(--accent-blue)",
    bg: "var(--accent-blue-bg, rgba(59,130,246,0.08))",
    border: "var(--accent-blue)",
  },
  pending: {
    label: "Ausstehend",
    color: "var(--accent-amber)",
    bg: "var(--accent-amber-bg, rgba(245,158,11,0.08))",
    border: "var(--accent-amber)",
  },
  soon: {
    label: "Bald",
    color: "var(--accent-rose)",
    bg: "var(--accent-rose-bg, rgba(244,63,94,0.08))",
    border: "var(--accent-rose)",
  },
  planned: {
    label: "Geplant",
    color: "var(--accent-violet)",
    bg: "var(--accent-violet-bg, rgba(139,92,246,0.08))",
    border: "var(--accent-violet)",
  },
};

function StatusIcon({ status }: { status: MilestoneStatus }) {
  const cfg = statusConfig[status];
  if (status === "done") return <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: cfg.color }} />;
  if (status === "active") return <Clock className="w-4 h-4 shrink-0 mt-0.5" style={{ color: cfg.color }} />;
  if (status === "soon") return <CalendarClock className="w-4 h-4 shrink-0 mt-0.5" style={{ color: cfg.color }} />;
  return <Circle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: cfg.color }} />;
}

export default function SectionRoadmap() {
  const nearRef = useRef<HTMLDivElement>(null);
  const longRef = useRef<HTMLDivElement>(null);
  const nearInView = useInView(nearRef, { once: true, margin: "-50px" });
  const longInView = useInView(longRef, { once: true, margin: "-50px" });

  const nearTermMilestones: NearTermMilestone[] = [
    {
      date: "März 2026",
      title: "FFG Projekt.Start — Einreichung",
      desc: "Vollständiges Dossier v1 + Demo-Prototype eingereicht. Erste Förderweiche gestellt.",
      status: "done",
    },
    {
      date: "April 2026",
      title: "Funktionsfähiger Prototype",
      desc: "Zwei parallele Prototype-Stränge: (1) Mockup-Klick-Prototyp zur visuellen Darstellung der UX, (2) konzeptioneller Prototyp, der Gesundheitsdaten zusammenführt und via umfangreichem System-Prompt einer KI die grundlegende Funktionslogik demonstriert.",
      status: "done",
    },
    {
      date: "März – Mai 2026",
      title: "Experteninterviews & Mentoring",
      desc: "10–15 Interviews mit Klinikern, Longevity-Experten und potenziellen Partnern. LOI-Anbahnung läuft.",
      status: "active",
    },
    {
      date: "Eingereicht",
      title: "aws First Incubator",
      desc: "Bewerbung bereits abgegeben — mit Unterstützung von FH-Studierenden, Ärzten, FH Gesundheitsberufe OÖ und Longevity-Kliniken. Entscheidung ausstehend.",
      status: "pending",
    },
    {
      date: "10. Mai 2026",
      title: "FFG Kleinprojekt — Einreichung",
      desc: "Nächste Fördereinreichung: bis 60.000 € bei bis zu 70 % Zuschuss. Deadline fix.",
      status: "soon",
    },
    {
      date: "Nach Förderzusage",
      title: "Firmengründung (GmbH)",
      desc: "Gesellschaftsgründung nach Erhalt der ersten Förderzusage — kapitalschonende, geordnete Struktur.",
      status: "planned",
    },
  ];

  const longTermMilestones: LongTermMilestone[] = [
    {
      date: "Juni 2026",
      title: "Projektstart & weitere Einreichungen",
      desc: "FFG Projekt.Start läuft, FFG Innovationsscheck einreichen, Infrastruktur-Setup.",
      color: "var(--accent-violet)",
    },
    {
      date: "Q3 2026",
      title: "Offline-Vault stabil",
      desc: "Data Wall 'Happy Path' vollständig funktionsfähig, erste Nutzertests.",
      color: "var(--accent-amber)",
    },
    {
      date: "Q4 2026",
      title: "Clinician-Review & Pilot",
      desc: "Erster Pilot-Scope mit Klinikpartner (Kepler Uniklinikum / JKU Medizin).",
      color: "var(--accent-rose)",
    },
    {
      date: "2027",
      title: "Evidence-to-Plan",
      desc: "RAG-System + Erklärkarten, klinische Validierung, erste Publikationen.",
      color: "var(--accent-violet)",
    },
    {
      date: "2027–2028",
      title: "Partnerschaften & Infrastruktur",
      desc: "Laborpartnerschaften, CRT-/CT-/MRT-Analysezentren anbinden, Custom-Supplement-Hersteller.",
      color: "var(--accent-green)",
    },
    {
      date: "2028–2029",
      title: "Longevity-Zentren",
      desc: "Eigene physische Standorte: Diagnostik, Beratung und personalisierte Gesundheitsprogramme unter einem Dach.",
      color: "var(--accent-amber)",
    },
    {
      date: "2029+",
      title: "Expansion & Plattform-Ökosystem",
      desc: "Skalierung der Zentren, internationaler Rollout, vollständiges Longevity-Ökosystem — von App bis Standort.",
      color: "var(--accent-blue)",
    },
  ];

  return (
    <section id="roadmap" className="py-24 border-t border-border scroll-mt-8">
      <SectionLabel num={14} />
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-5">
        Fahrplan: Jetzt → Gründung → Plattform → Longevity-Zentren
      </h2>
      <p className="text-muted-foreground mb-14 max-w-2xl text-base leading-relaxed">
        Linz, April 2026. Prototype fertig, FFG eingereicht, AWS Incubator beworben.
        FFG Kleinprojekt-Einreichung am 10. Mai. Firmengründung nach erster Förderzusage —
        dann schrittweiser Aufbau eines vollständigen Gesundheits-Ökosystems.
      </p>

      <div className="mb-4">
        <h3 className="text-lg font-semibold tracking-tight mb-1">Jetzt & Nächste Schritte</h3>
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-8">
          Stand März – Mai 2026
        </p>
      </div>

      <div ref={nearRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
        {nearTermMilestones.map((m, i) => {
          const cfg = statusConfig[m.status];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={nearInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              data-testid={`milestone-near-${i}`}
              className="p-4 border bg-card flex gap-3"
              style={{
                borderColor: m.status === "done" || m.status === "active" ? cfg.color : undefined,
                borderWidth: m.status === "done" || m.status === "active" ? "1.5px" : undefined,
              }}
            >
              <StatusIcon status={m.status} />
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                    {m.date}
                  </span>
                  <span
                    className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 border"
                    style={{ color: cfg.color, borderColor: cfg.border, backgroundColor: cfg.bg }}
                  >
                    {cfg.label}
                  </span>
                </div>
                <h4 className="text-sm font-normal leading-snug" style={{ color: cfg.color }}>
                  {m.title}
                </h4>
                <p className="text-xs text-muted-foreground font-light mt-1 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold tracking-tight mb-1">Langzeit-Roadmap</h3>
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-8">
          Juni 2026 → 2029+
        </p>
      </div>

      <div ref={longRef} className="relative pl-10 mb-14">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
        {longTermMilestones.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={longInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            data-testid={`milestone-long-${i}`}
            className="relative py-6 flex gap-5"
          >
            <div
              className="absolute top-7 w-3.5 h-3.5 rounded-full border-2 z-10 bg-background"
              style={{ borderColor: m.color, left: "-1.5rem", transform: "translateX(-50%)" }}
            />
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                {m.date}
              </span>
              <h4 className="font-normal text-sm mt-1.5" style={{ color: m.color }}>
                {m.title}
              </h4>
              <p className="text-sm text-muted-foreground font-light mt-0.5 leading-relaxed">
                {m.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <FigureCaption number={5} title="Roadmap: Jetzt → Gründung → Plattform → Partnerschaften → Longevity-Zentren → Expansion" />

      <div className="mt-14">
        <h3 className="text-xl font-semibold tracking-tight mb-5">Förderstrategie (Stufenplan)</h3>
        <p className="text-sm text-muted-foreground mb-6 max-w-2xl leading-relaxed">
          Rein förderfinanzierter Aufbau — von niedrigschwellig bis substantiell. Jede Stufe baut auf der vorherigen auf. Kumulierte potenzielle Fördersumme: über 400.000 € (FFG + aws + tech2b + OÖ).
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { label: "FFG Projekt.Start", active: true },
            { label: "FFG Innovationsscheck", active: false },
            { label: "aws First Incubator", active: true },
            { label: "tech2b ACTIVATE", active: true },
            { label: "FFG Kleinprojekt", active: true },
            { label: "tech2b INCUBATE", active: false },
            { label: "FFG Impact Innovation", active: false },
            { label: "FFG Basisprogramm", active: false },
          ].map((item, i, arr) => (
            <div key={i} className="flex items-center gap-1.5">
              <span
                className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 border ${
                  item.active
                    ? "border-[var(--accent-blue)] text-[var(--accent-blue)] bg-[var(--accent-blue-bg)]"
                    : "border-border text-muted-foreground"
                }`}
              >
                {item.label}
              </span>
              {i < arr.length - 1 && <ArrowRight className="w-3 h-3 text-muted-foreground/50" />}
            </div>
          ))}
        </div>

        <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">FFG & aws — Bundesebene</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {[
            {
              name: "FFG Projekt.Start",
              amount: "max. 6.000 €",
              rate: "Pauschaler Zuschuss",
              note: "Vorbereitungsinstrument; schafft methodische Grundlage für alle nachfolgenden Einreichungen",
              color: "var(--accent-blue)",
              active: true,
            },
            {
              name: "FFG Innovationsscheck",
              amount: "max. 10.000 €",
              rate: "80 % Quote",
              note: "Kooperation mit Uni/FH: Mittel fließen direkt an Forschungspartner → 20 % Selbstbehalt entfällt für eigene Personalkosten",
              color: "var(--accent-green)",
              active: false,
            },
            {
              name: "FFG Kleinprojekt",
              amount: "max. 88.500 €",
              rate: "bis 70 % (Forschungskooperation)",
              note: "Standard 45–60 %; durch Kooperation mit JKU / Kepler Uniklinikum / FH auf bis zu 70 % steigerbar (AGVO-Bonus für Verbundprojekte)",
              color: "var(--accent-violet)",
              active: true,
            },
            {
              name: "aws First Incubator",
              amount: "55.000 €",
              rate: "100 % (Gender-Bonus aktiv)",
              note: "Gender-Bonus greift bei ≥ 25 % Frauenanteil in Geschäftsführung → volle Kosten gedeckt, kein Eigenanteil",
              color: "var(--accent-amber)",
              active: true,
            },
            {
              name: "FFG Impact Innovation",
              amount: "max. 105.000 €",
              rate: "bis 70 % (Social Innovation)",
              note: "Health-/Longevity-Ansatz zählt als soziale Innovation → 70 % Quote statt 50 % regulär; 7 Entscheidungsrunden/Jahr",
              color: "var(--accent-rose)",
              active: false,
            },
            {
              name: "FFG Basisprogramm",
              amount: "ab 100.000 € Kosten",
              rate: "bis 70 % (KMU + Forschungspartner)",
              note: "KMU-Bonus + Kooperationszuschlag mit Forschungseinrichtung ermöglicht bis 70 % auf experimentelle Entwicklung",
              color: "var(--accent-blue)",
              active: false,
            },
          ].map((item, i) => (
            <div
              key={i}
              data-testid={`foerder-card-${i}`}
              className={`p-4 border bg-card ${item.active ? "border-2" : "border-border/70"}`}
              style={item.active ? { borderColor: item.color } : {}}
            >
              <p className="text-xs font-mono uppercase tracking-wider mb-1" style={{ color: item.color }}>
                {item.name}
              </p>
              <p className="text-lg font-semibold">{item.amount}</p>
              <p className="text-xs text-muted-foreground font-light mt-0.5">{item.rate}</p>
              {item.note && (
                <p className="text-[10px] text-muted-foreground/70 font-light mt-1.5 leading-relaxed border-t border-border/50 pt-1.5">
                  {item.note}
                </p>
              )}
            </div>
          ))}
        </div>

        <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">tech2b & OÖ — Regionale Ebene (Oberösterreich)</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {[
            {
              name: "tech2b IDEATE",
              amount: "Sachleistung",
              rate: "De-minimis",
              note: "Mentoring, Netzwerk, Flex-Desk (Tabakfabrik Linz, OIC, techcEnter) — kein Barauszahlung",
              color: "var(--accent-green)",
              active: false,
            },
            {
              name: "tech2b ACTIVATE",
              amount: "5.000 €",
              rate: "100 % Barzuschuss",
              note: "Nicht rückzahlbar, 6 Monate Laufzeit + externer Mentor, BIZTrain-Coaching",
              color: "var(--accent-blue)",
              active: true,
            },
            {
              name: "tech2b INCUBATE",
              amount: "bis 25.000 €",
              rate: "Cash Advance / Darlehen",
              note: "15 Monate, 2 Senior-Mentoren, hochkompetitiv; Voraussetzung: ACTIVATE oder aws First",
              color: "var(--accent-violet)",
              active: false,
            },
            {
              name: "OÖ. Gründerfonds",
              amount: "max. 150.000 €",
              rate: "Stille Beteiligung",
              note: "Echtes Eigenkapital (handelsrechtlich), bei Med-Tech/Green-Tech 100 % der Projektkosten",
              color: "var(--accent-amber)",
              active: false,
            },
            {
              name: "OÖ Start-up-Prämie (SPW)",
              amount: "max. 10.000 €",
              rate: "Investitionszuschuss",
              note: "Gekoppelt an aws erp-Kredit mit Gründer-Sonderkonditionen, gültig bis 31.12.2026",
              color: "var(--accent-rose)",
              active: false,
            },
          ].map((item, i) => (
            <div
              key={i}
              data-testid={`tech2b-card-${i}`}
              className={`p-4 border bg-card ${item.active ? "border-2" : "border-border/70"}`}
              style={item.active ? { borderColor: item.color } : {}}
            >
              <p className="text-xs font-mono uppercase tracking-wider mb-1" style={{ color: item.color }}>
                {item.name}
              </p>
              <p className="text-lg font-semibold">{item.amount}</p>
              <p className="text-xs text-muted-foreground font-light mt-0.5">{item.rate}</p>
              {item.note && (
                <p className="text-[10px] text-muted-foreground/70 font-light mt-1.5 leading-relaxed border-t border-border/50 pt-1.5">
                  {item.note}
                </p>
              )}
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          Wichtig für FFG-Einreichungen: häufigster Ablehnungsgrund ist "zu wenig Entwicklungsrisiko" — das technische Risiko muss klar herausgearbeitet werden.
          De-minimis-Konto beachten: max. 300.000 € in 3 Steuerjahren (Innovationsscheck, SPW und OÖ. Gründerfonds zählen dazu; FFG Kleinprojekt/Basisprogramm laufen über AGVO).
        </p>
      </div>
    </section>
  );
}
