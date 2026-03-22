import { BadgeCheck, Clock, Circle } from "lucide-react";

export const notes =
  "Während Felix den Prototyp gebaut und getestet hat, haben wir parallel die Förderstruktur aufgesetzt. aws First Incubator: eingereicht. FFG Projekt.Start: eingereicht. FFG Kleinprojekt: Deadline 10. Mai — das ist in wenigen Wochen. Kumuliertes Potenzial: über 400.000 Euro. tech2b in der Tabakfabrik Linz ist unser geplanter nächster Schritt. Felix, bring das jetzt nach Hause.";

const funding = [
  { program: "aws First Incubator", amount: "5.000 €", type: "Cash-Zuschuss (+ 5.000 Sachleistung)", status: "eingereicht", statusColor: "var(--accent-amber)" },
  { program: "FFG Projekt.Start", amount: "bis 20.000 €", type: "Coaching + Sachleistung", status: "eingereicht", statusColor: "var(--accent-amber)" },
  { program: "FFG Kleinprojekt", amount: "bis 10.000 €", type: "Förderbar., Deadline: 10. Mai", status: "in Vorbereitung", statusColor: "var(--accent-violet)" },
  { program: "FFG FemPower", amount: "bis 200.000 €", type: "Förderung, 75 % Rate", status: "Research-Phase", statusColor: "var(--accent-blue)" },
  { program: "Klima- und Energiefonds", amount: "bis 200.000 €", type: "DSGVO-Gesundheitsinfrastruktur", status: "Research-Phase", statusColor: "var(--accent-blue)" },
];

const milestones = [
  { label: "Team gebildet", date: "Frühjahr 2025", done: true },
  { label: "Prototyp gebaut", date: "Sommer 2025", done: true },
  { label: "Felix testet echte Daten", date: "Herbst 2025", done: true },
  { label: "Supplements custom abgefüllt", date: "Winter 2025", done: true },
  { label: "Förderanträge gestellt", date: "Q1 2026", done: true },
  { label: "Linz hACkT Pitch", date: "März 2026", done: true },
  { label: "tech2b Accelerator", date: "Geplant", done: false },
  { label: "Beta-Start", date: "Q3 2026", done: false },
];

export default function Slide09() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-16 py-16 max-w-6xl mx-auto">
      <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40 mb-4">
        09 — Traction & Förderungen · Martin
      </p>

      <h2 className="text-4xl font-bold tracking-tight mb-2 max-w-3xl leading-tight">
        Wir stehen nicht am Anfang.
      </h2>
      <p className="text-base text-muted-foreground mb-8 max-w-2xl">
        Kumuliertes Förderpotenzial: <strong className="text-foreground">über 400.000 Euro</strong>
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/50 mb-3">Förderungen</p>
          <div className="border border-border/70 overflow-hidden bg-card">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[var(--diagram-bg)] border-b border-border">
                  <th className="text-left p-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/60">Programm</th>
                  <th className="text-right p-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/60">Betrag</th>
                  <th className="p-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/60">Status</th>
                </tr>
              </thead>
              <tbody>
                {funding.map((row, i) => (
                  <tr key={i} className="border-b border-border/50 last:border-0">
                    <td className="p-3">
                      <p className="font-medium text-foreground">{row.program}</p>
                      <p className="text-[10px] text-muted-foreground leading-snug mt-0.5">{row.type}</p>
                    </td>
                    <td className="p-3 text-right font-mono font-medium" style={{ color: "var(--accent-green)" }}>{row.amount}</td>
                    <td className="p-3">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5" style={{ color: row.statusColor, backgroundColor: `${row.statusColor}15` }}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/50 mb-3">Status-Timeline</p>
          <div className="space-y-1.5">
            {milestones.map((m, i) => (
              <div key={i} className="flex items-center gap-3">
                {m.done ? (
                  <BadgeCheck className="w-4 h-4 shrink-0" style={{ color: "var(--accent-green)" }} />
                ) : (
                  <Circle className="w-4 h-4 shrink-0 text-muted-foreground/40" />
                )}
                <div className="flex items-center justify-between w-full gap-4 py-2 px-3 border border-border/50 bg-card">
                  <p className={`text-xs ${m.done ? "text-foreground" : "text-muted-foreground"}`}>{m.label}</p>
                  <span className="text-[10px] font-mono text-muted-foreground/60 whitespace-nowrap">{m.date}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 border border-border/50 bg-[var(--diagram-bg)] flex items-center gap-2">
            <Clock className="w-4 h-4 shrink-0" style={{ color: "var(--accent-violet)" }} />
            <p className="text-xs text-muted-foreground">
              <strong className="text-foreground">FFG Kleinprojekt Deadline: 10. Mai 2026</strong> — wenige Wochen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
