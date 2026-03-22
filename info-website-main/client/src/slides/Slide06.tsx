import { motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay },
});

const matrix = [
  { feature: "Lokal-first KI (default)", exodus: true, appleHealth: false, whoop: false, oura: false },
  { feature: "Bring Your Own AI", exodus: true, appleHealth: false, whoop: false, oura: false },
  { feature: "Offener Agentic Layer", exodus: true, appleHealth: false, whoop: false, oura: false },
  { feature: "Labor + Wearables + Arztbriefe", exodus: true, appleHealth: "partial", whoop: false, oura: false },
  { feature: "EU-DSGVO als Architektur", exodus: true, appleHealth: false, whoop: false, oura: false },
  { feature: "Supplement-Kanal", exodus: true, appleHealth: false, whoop: false, oura: false },
  { feature: "Open Source", exodus: true, appleHealth: false, whoop: false, oura: false },
];

const usps = [
  "Lokal-first KI — deine Daten, dein Gerät, dein Modell",
  "Bring Your Own AI — Llama, Mistral, Apple Intelligence, eigener Endpoint",
  "Offener Agentic Layer — KI-Agenten können mit Freigabe für dich handeln",
  "Labor + Wearables + Arztbriefe + Supplements — alles in einer Timeline",
  "EU-DSGVO als Architektur, nicht als Checkbox",
  "Open Source bevorzugt — kein Vendor Lock-in",
];

function Cell({ value }: { value: boolean | "partial" }) {
  if (value === true) return <CheckCircle2 className="w-4 h-4 mx-auto" style={{ color: "var(--accent-green)" }} />;
  if (value === "partial") return <span className="text-xs text-muted-foreground mx-auto block text-center">~</span>;
  return <X className="w-4 h-4 mx-auto text-muted-foreground/30" />;
}

export default function Slide06() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-16 py-16 max-w-6xl mx-auto">
      <motion.p {...anim(0)} className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40 mb-4">
        06 — USP & Wettbewerb · Felix + Martin
      </motion.p>

      <motion.h2 {...anim(0.05)} className="text-3xl sm:text-4xl font-bold tracking-tight mb-2 max-w-3xl leading-tight">
        Das gibt es so kein zweites Mal.
      </motion.h2>
      <motion.p {...anim(0.08)} className="text-base text-muted-foreground mb-8 max-w-2xl">
        Kein anderer Anbieter weltweit kombiniert lokale KI by default, offenen Agentic Layer,
        EU-DSGVO als Architektur und den Supplement-Kanal in einer Plattform.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div {...anim(0.12)}>
          <div className="border border-border/70 overflow-hidden bg-card">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[var(--diagram-bg)] border-b border-border/70">
                  <th className="text-left p-3 font-mono text-muted-foreground/60 uppercase tracking-wider text-[10px] w-1/2">Feature</th>
                  <th className="p-2 font-mono text-[10px] uppercase tracking-wider" style={{ color: "var(--accent-blue)" }}>Exodus</th>
                  <th className="p-2 font-mono text-[10px] uppercase text-muted-foreground/50">Apple H.</th>
                  <th className="p-2 font-mono text-[10px] uppercase text-muted-foreground/50">WHOOP</th>
                  <th className="p-2 font-mono text-[10px] uppercase text-muted-foreground/50">Oura</th>
                </tr>
              </thead>
              <tbody>
                {matrix.map((row, i) => (
                  <tr key={i} className="border-b border-border/50 last:border-0">
                    <td className="p-3 text-muted-foreground">{row.feature}</td>
                    <td className="p-2"><Cell value={row.exodus} /></td>
                    <td className="p-2"><Cell value={row.appleHealth} /></td>
                    <td className="p-2"><Cell value={row.whoop} /></td>
                    <td className="p-2"><Cell value={row.oura} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div {...anim(0.2)} className="flex flex-col gap-2 justify-center">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/50 mb-3">Was kein anderer bietet:</p>
          {usps.map((usp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.25 + i * 0.06 }}
              className="flex items-start gap-3 p-3 border border-border/50 bg-card"
            >
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "var(--accent-green)" }} />
              <p className="text-sm text-muted-foreground">{usp}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
