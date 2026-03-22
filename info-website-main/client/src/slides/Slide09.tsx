import { useState } from "react";
import { BadgeCheck, Clock } from "lucide-react";

function JKULogo() {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <span className="text-xl font-semibold tracking-tight" style={{ color: "var(--accent-blue)" }}>JKU Linz</span>
  ) : (
    <img
      src="/logos/jku.png"
      alt="JKU Linz"
      className="h-16 object-contain"
      onError={() => setFailed(true)}
    />
  );
}

export const notes =
  "Während Felix den Prototyp gebaut und getestet hat, haben wir parallel die Förderstruktur aufgesetzt. aws First Incubator: eingereicht. FFG Projekt.Start: eingereicht. FFG Kleinprojekt: Deadline 10. Mai — das ist in wenigen Wochen. Kumuliertes Potenzial: über 400.000 Euro. tech2b in der Tabakfabrik Linz ist unser geplanter nächster Schritt. Felix, bring das jetzt nach Hause.";

const funding = [
  { program: "aws First Incubator", amount: "55.000 €", rate: "100 %", status: "✅ Eingereicht", statusColor: "var(--accent-green)" },
  { program: "FFG Projekt.Start", amount: "6.000 €", rate: "—", status: "✅ Eingereicht", statusColor: "var(--accent-green)" },
  { program: "FFG Kleinprojekt", amount: "bis 88.500 €", rate: "bis 70 %", status: "🔜 10. Mai", statusColor: "var(--accent-amber)" },
  { program: "tech2b ACTIVATE", amount: "5.000 €", rate: "100 %", status: "🔜 Geplant", statusColor: "var(--accent-amber)" },
  { program: "FFG Impact Innovation", amount: "bis 105.000 €", rate: "70 %", status: "🔜 Nächste Runde", statusColor: "var(--accent-blue)" },
];

const timeline = [
  { label: "März — Linz hACkT Pitch", done: true },
  { label: "April — aws & FFG eingereicht", done: true },
  { label: "10. Mai — FFG Kleinprojekt Deadline", done: false },
  { label: "Firmengründung", done: false },
];

function FHLogo() {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <span className="text-xl font-semibold tracking-tight" style={{ color: "var(--accent-green)" }}>FH Gesundheitsberufe OÖ</span>
  ) : (
    <img
      src="/logos/fh-gesundheitsberufe.png"
      alt="FH Gesundheitsberufe OÖ"
      className="h-16 object-contain"
      onError={() => setFailed(true)}
    />
  );
}

export default function Slide09() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "60px 100px",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground/40 mb-4">
        09 — Traction & Förderungen · Martin
      </p>

      <h2 className="text-6xl font-bold tracking-tight mb-10 leading-tight">
        Wir stehen nicht am Anfang.
      </h2>

      <div className="grid grid-cols-2 gap-10">
        <div>
          <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground/50 mb-3">Förderungen</p>
          <div className="border border-border/70 overflow-hidden bg-card">
            <table className="w-full text-base">
              <thead>
                <tr className="bg-[var(--diagram-bg)] border-b border-border">
                  <th className="text-left p-4 font-mono text-sm uppercase tracking-wider text-muted-foreground/60">Programm</th>
                  <th className="text-right p-4 font-mono text-sm uppercase tracking-wider text-muted-foreground/60">Betrag</th>
                  <th className="p-4 font-mono text-sm uppercase tracking-wider text-muted-foreground/60">Status</th>
                </tr>
              </thead>
              <tbody>
                {funding.map((row, i) => (
                  <tr key={i} className="border-b border-border/50 last:border-0">
                    <td className="p-4 font-medium text-foreground">{row.program}</td>
                    <td className="p-4 text-right font-mono" style={{ color: "var(--accent-green)" }}>{row.amount}</td>
                    <td className="p-4">
                      <span className="text-sm font-mono px-2.5 py-1 whitespace-nowrap" style={{ color: row.statusColor, backgroundColor: `${row.statusColor}15` }}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground/50 mb-3">Status-Timeline</p>
            <div className="space-y-3">
              {timeline.map((m, i) => (
                <div key={i} className="flex items-center gap-4">
                  {m.done ? (
                    <BadgeCheck className="w-6 h-6 shrink-0" style={{ color: "var(--accent-green)" }} />
                  ) : (
                    <Clock className="w-6 h-6 shrink-0" style={{ color: "var(--accent-amber)" }} />
                  )}
                  <div className="flex items-center justify-between flex-1 gap-4 border border-border/50 bg-card px-5 py-3">
                    <p className={`text-lg ${m.done ? "text-foreground" : "text-muted-foreground"}`}>{m.label}</p>
                    <span className="text-sm font-mono" style={{ color: m.done ? "var(--accent-green)" : "var(--accent-amber)" }}>
                      {m.done ? "✅" : "🔜"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground/50 mb-3">Kooperationen</p>
            <div className="flex flex-col gap-4">
              <div className="px-5 py-5 border border-border/60 bg-card flex items-center justify-center min-h-[80px]">
                <FHLogo />
              </div>
              <div className="px-5 py-5 border border-border/60 bg-card flex items-center justify-center min-h-[80px]">
                <JKULogo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
