import { Mail, QrCode, MapPin } from "lucide-react";

export const notes =
  "Wir bauen nicht die nächste App. Wir bauen die Infrastruktur, auf der KI-Agenten für dich arbeiten können — mit deinen Daten, unter deiner Kontrolle. FH Gesundheitsberufe, Kepler, JKU, tech2b — alles hier. Prototype läuft. Förderungen laufen. Team steht. Supplements liegen auf dem Tisch. Scannt den QR-Code. Schreibt uns.";

const roadmapItems = [
  { label: "Q3 2026 — Vault", desc: "Health Data Vault live, erste Beta-Nutzer", done: false, color: "var(--accent-blue)" },
  { label: "Q4 2026 — Pilot", desc: "Pilot mit Klinik-Partner, Arzt-Beratung", done: false, color: "var(--accent-violet)" },
  { label: "2027 — OpenClaw live", desc: "Agentic Layer öffentlich, Supplement-Shop", done: false, color: "var(--accent-green)" },
  { label: "2029 — Longevity-Zentren", desc: "Stationäre Kooperationen, EU-Expansion", done: false, color: "var(--accent-amber)" },
];

export default function Slide10() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-16 py-20 max-w-6xl mx-auto">
      <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40 mb-6">
        10 — Closing · Felix
      </p>

      <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-4 max-w-3xl leading-tight">
        Linz ist nicht die Folie.
      </h2>
      <p className="text-3xl font-medium text-muted-foreground mb-8 max-w-2xl">
        Linz ist der Plan.
      </p>

      <p className="text-base text-muted-foreground max-w-2xl leading-relaxed mb-10">
        Wir bauen nicht die nächste App. Wir bauen die Infrastruktur, auf der KI-Agenten für dich arbeiten
        können — mit deinen Daten, unter deiner Kontrolle. Aus Linz. Für alle.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/50">
            Roadmap: Q3 2026 → Q4 2026 → 2027 → 2029
          </p>
          <div className="space-y-2">
            {roadmapItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full shrink-0 mt-2" style={{ backgroundColor: item.color }} />
                <div className="flex flex-col flex-1 border border-border/50 bg-card px-4 py-3">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground font-medium">{item.label}</p>
                    <span className="text-[10px] font-mono text-muted-foreground/50">🔜</span>
                  </div>
                  <p className="text-xs text-muted-foreground/60 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/50 w-full">Partner in Vorbereitung:</p>
            {["FH Gesundheitsberufe OÖ", "Kepler Uniklinikum", "JKU Linz", "tech2b"].map((p) => (
              <span key={p} className="text-[10px] font-mono border border-border px-2.5 py-1 text-muted-foreground bg-card">
                {p}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="p-8 border-2 flex flex-col items-center justify-center gap-3" style={{ borderColor: "var(--accent-blue)" }}>
            <a
              href="https://exodus-demo.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-mono text-muted-foreground/60 hover:text-muted-foreground transition-colors"
            >
              <QrCode className="w-5 h-5" />
              exodus-demo.vercel.app
            </a>
            <a href="https://exodus-demo.vercel.app" target="_blank" rel="noopener noreferrer">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=https%3A%2F%2Fexodus-demo.vercel.app&bgcolor=ffffff&color=000000&margin=6"
                alt="QR Code: exodus-demo.vercel.app"
                width={140}
                height={140}
                className="border border-border"
              />
            </a>
            <p className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "var(--accent-blue)" }}>
              Demo scannen
            </p>
          </div>

          <div className="space-y-2.5">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Mail className="w-4 h-4 shrink-0" style={{ color: "var(--accent-violet)" }} />
              <a href="mailto:exodus@servas.ai" className="font-mono hover:text-foreground transition-colors">
                exodus@servas.ai
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 shrink-0" style={{ color: "var(--accent-rose)" }} />
              <span>Linz, Oberösterreich, Österreich</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
