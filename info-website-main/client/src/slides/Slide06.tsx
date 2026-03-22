import { CheckCircle2 } from "lucide-react";
import { StatusBadge } from "@/components/sections/helpers";

export const notes =
  "Felix: Ich habe Apple Health. Ich habe WHOOP. Ich habe Oura. Die reden alle nicht miteinander. Keine zeigt mir Laborwerte. Keine hat ärztliche Freigabe. Und bei keiner darf ich selbst entscheiden, welche KI meine Daten sieht. Martin (15 Sekunden): Kein anderer Anbieter weltweit kombiniert lokale KI by default, offenen Agentic Layer, EU-DSGVO als Architektur und den Supplement-Kanal in einer Plattform.";

const matrix = [
  { feature: "Lokal-first KI (default)", exodus: "check", andere: "none" },
  { feature: "Bring Your Own AI", exodus: "check", andere: "none" },
  { feature: "Offener Agentic Layer", exodus: "check", andere: "none" },
  { feature: "Labor + Wearables + Arztbriefe", exodus: "check", andere: "warn" },
  { feature: "EU-DSGVO als Architektur", exodus: "check", andere: "none" },
  { feature: "Supplement-Kanal", exodus: "check", andere: "none" },
  { feature: "Open Source bevorzugt", exodus: "check", andere: "none" },
];

const usps = [
  "Lokal-first KI — deine Daten, dein Gerät, dein Modell",
  "Bring Your Own AI — Llama, Mistral, Apple Intelligence, eigener Endpoint",
  "Offener Agentic Layer — KI-Agenten können mit Freigabe für dich handeln",
  "Labor + Wearables + Arztbriefe + Supplements — alles in einer Timeline",
  "EU-DSGVO als Architektur, nicht als Checkbox",
  "Open Source bevorzugt — kein Vendor Lock-in",
];

export default function Slide06() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-16 py-16 max-w-6xl mx-auto">
      <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40 mb-4">
        07 — USP & Wettbewerb · Felix + Martin
      </p>

      <h2 className="text-4xl font-bold tracking-tight mb-2 max-w-3xl leading-tight">
        Das gibt es so kein zweites Mal.
      </h2>
      <p className="text-base text-muted-foreground mb-8 max-w-2xl">
        Kein anderer Anbieter weltweit kombiniert lokale KI by default, offenen Agentic Layer,
        EU-DSGVO als Architektur und den Supplement-Kanal in einer Plattform.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="border border-border/70 overflow-hidden bg-card">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[var(--diagram-bg)] border-b border-border/70">
                  <th className="text-left p-3 font-mono text-muted-foreground/60 uppercase tracking-wider text-[10px] w-1/2">Feature</th>
                  <th className="p-3 font-mono text-[10px] uppercase tracking-wider" style={{ color: "var(--accent-blue)" }}>Exodus</th>
                  <th className="p-3 font-mono text-[10px] uppercase text-muted-foreground/50">Andere</th>
                </tr>
              </thead>
              <tbody>
                {matrix.map((row, i) => (
                  <tr key={i} className="border-b border-border/50 last:border-0">
                    <td className="p-3 text-muted-foreground">{row.feature}</td>
                    <td className="p-3 text-center"><StatusBadge status={row.exodus} /></td>
                    <td className="p-3 text-center"><StatusBadge status={row.andere} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-2 justify-center">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/50 mb-3">Was kein anderer bietet:</p>
          {usps.map((usp, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-3 border border-border/50 bg-card"
            >
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "var(--accent-green)" }} />
              <p className="text-sm text-muted-foreground">{usp}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
