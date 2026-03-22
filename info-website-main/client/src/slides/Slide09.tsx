import { useState } from "react";
import { BadgeCheck, Clock } from "lucide-react";

export const notes =
  "Während Felix den Prototyp gebaut und getestet hat, haben wir parallel die Förderstruktur aufgesetzt. aws First Incubator: eingereicht. FFG Projekt.Start: eingereicht. FFG Kleinprojekt: Deadline 10. Mai — das ist in wenigen Wochen. Kumuliertes Potenzial: über 400.000 Euro. tech2b in der Tabakfabrik Linz ist unser geplanter nächster Schritt. Felix, bring das jetzt nach Hause.";

const funding = [
  { program: "aws First Incubator", amount: "5.000 €", rate: "100 %", status: "✅ Eingereicht", statusColor: "var(--accent-green)" },
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

const partnersText = ["JKU Linz", "Kepler Uniklinikum", "tech2b"];

function FHLogo() {
  const [failed, setFailed] = useState(false);
  return (
    <div className="flex flex-col items-start gap-1">
      {failed ? (
        <span className="text-[9px] font-mono border border-border px-2 py-1 text-muted-foreground bg-card">
          FH Gesundheitsberufe OÖ
        </span>
      ) : (
        <img
          src="https://www.fhgooe.ac.at/fileadmin/fh_gooe/Logo/FHG_Logo_RGB_farbe.png"
          alt="FH Gesundheitsberufe OÖ"
          height={28}
          className="h-7 object-contain grayscale opacity-60"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export default function Slide09() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-16 py-16 max-w-6xl mx-auto">
      <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40 mb-4">
        09 — Traction & Förderungen · Martin
      </p>

      <h2 className="text-4xl font-bold tracking-tight mb-2 max-w-3xl leading-tight">
        Wir stehen nicht am Anfang.
      </h2>
      <p className="text-base text-muted-foreground mb-2 max-w-2xl">
        aws eingereicht ✅ · FFG läuft ✅ · über 400.000 € Potenzial · 10. Mai Deadline · tech2b Linz
      </p>
      <p className="text-xs font-mono text-muted-foreground/50 mb-6">Schritt für Schritt.</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/50 mb-3">Förderungen</p>
          <div className="border border-border/70 overflow-hidden bg-card">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[var(--diagram-bg)] border-b border-border">
                  <th className="text-left p-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/60">Programm</th>
                  <th className="text-right p-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/60">Betrag</th>
                  <th className="text-right p-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/60">Rate</th>
                  <th className="p-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/60">Status</th>
                </tr>
              </thead>
              <tbody>
                {funding.map((row, i) => (
                  <tr key={i} className="border-b border-border/50 last:border-0">
                    <td className="p-3 font-medium text-foreground">{row.program}</td>
                    <td className="p-3 text-right font-mono" style={{ color: "var(--accent-green)" }}>{row.amount}</td>
                    <td className="p-3 text-right font-mono text-muted-foreground">{row.rate}</td>
                    <td className="p-3">
                      <span className="text-[10px] font-mono px-2 py-0.5 whitespace-nowrap" style={{ color: row.statusColor, backgroundColor: `${row.statusColor}15` }}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/50 mb-3">Status-Timeline</p>
            <div className="space-y-2">
              {timeline.map((m, i) => (
                <div key={i} className="flex items-center gap-3">
                  {m.done ? (
                    <BadgeCheck className="w-4 h-4 shrink-0" style={{ color: "var(--accent-green)" }} />
                  ) : (
                    <Clock className="w-4 h-4 shrink-0" style={{ color: "var(--accent-amber)" }} />
                  )}
                  <div className="flex items-center justify-between flex-1 gap-4 border border-border/50 bg-card px-4 py-2.5">
                    <p className={`text-sm ${m.done ? "text-foreground" : "text-muted-foreground"}`}>{m.label}</p>
                    <span className="text-[10px] font-mono" style={{ color: m.done ? "var(--accent-green)" : "var(--accent-amber)" }}>
                      {m.done ? "✅" : "🔜"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/50 mb-3">Kooperations-Logos</p>
            <div className="flex flex-wrap gap-2 items-center">
              {partnersText.map((p) => (
                <div key={p} className="px-4 py-2 border border-border/60 bg-card">
                  <span className="text-xs font-mono text-muted-foreground">{p}</span>
                </div>
              ))}
              <div className="px-3 py-2 border border-border/60 bg-card flex flex-col items-start gap-1">
                <FHLogo />
              </div>
            </div>
            <p className="text-[10px] text-muted-foreground/60 mt-3 leading-relaxed">
              Für FFG: "wirksame Kooperation" — mind. 10 % der förderbaren Kosten bei Forschungseinrichtungen,
              Kooperationsbonus bis 70 %.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
