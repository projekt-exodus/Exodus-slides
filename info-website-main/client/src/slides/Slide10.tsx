import { Mail, Globe } from "lucide-react";

export const notes =
  "Wir bauen nicht die nächste App. Wir bauen die Infrastruktur, auf der KI-Agenten für dich arbeiten können — mit deinen Daten, unter deiner Kontrolle. FH Gesundheitsberufe, Kepler, JKU, tech2b — alles hier. Prototype läuft. Förderungen laufen. Team steht. Scannt den QR-Code. Schreibt uns. Wir sind bereit.";

const roadmapItems = [
  { label: "Q3 2026", desc: "Health Data Vault · Beta", color: "var(--accent-blue)" },
  { label: "Q4 2026", desc: "Klinik-Pilot · Arzt-Beratung", color: "var(--accent-violet)" },
  { label: "2027", desc: "Agentic Layer · Supplement-Shop", color: "var(--accent-green)" },
  { label: "2029", desc: "Longevity-Zentren · EU-Expansion", color: "var(--accent-amber)" },
];

export default function Slide10() {
  return (
    <div
      className="fixed inset-0 flex flex-col justify-center px-16 py-12"
      style={{ width: "100%", height: "100%" }}
    >
      <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40 mb-8">
        10 — Closing · Felix
      </p>

      <div className="flex items-start gap-16 w-full">
        <div className="flex-1 min-w-0">
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-3 leading-tight">
            Wir sind bereit.
          </h2>
          <p className="text-4xl font-medium text-muted-foreground mb-8 leading-tight">
            Bist du dabei?
          </p>

          <p className="text-base text-muted-foreground max-w-lg leading-relaxed mb-8">
            Aus Linz. Für alle. — Wir bauen die Infrastruktur für präventive Gesundheit,
            auf der KI-Agenten mit deinen Daten, unter deiner Kontrolle, arbeiten können.
          </p>

          <div className="mb-6">
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50 mb-3">
              Roadmap
            </p>
            <div className="flex gap-3 flex-wrap">
              {roadmapItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 border border-border/50 bg-card px-3 py-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                  <div>
                    <p className="text-xs font-mono font-medium text-foreground leading-none">{item.label}</p>
                    <p className="text-[10px] text-muted-foreground/70 leading-none mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Mail className="w-4 h-4 shrink-0" style={{ color: "var(--accent-violet)" }} />
              <a href="mailto:exodus@servas.ai" className="font-mono hover:text-foreground transition-colors">
                exodus@servas.ai
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Globe className="w-4 h-4 shrink-0" style={{ color: "var(--accent-blue)" }} />
              <a
                href="https://exodus-demo-app.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono hover:text-foreground transition-colors"
              >
                exodus-demo-app.vercel.app
              </a>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 flex flex-col items-center gap-4">
          <div
            className="p-6 border-2 flex flex-col items-center gap-4"
            style={{ borderColor: "var(--accent-blue)" }}
          >
            <p className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "var(--accent-blue)" }}>
              Mehr informieren
            </p>
            <a href="https://exodus-demo-app.vercel.app" target="_blank" rel="noopener noreferrer">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https%3A%2F%2Fexodus-demo-app.vercel.app&bgcolor=ffffff&color=000000&margin=8"
                alt="QR Code: exodus-demo-app.vercel.app"
                width={180}
                height={180}
                className="border border-border"
              />
            </a>
            <p className="text-xs font-mono text-muted-foreground/60 text-center">
              Demo scannen
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 justify-center max-w-[220px]">
            {["FH Gesundheitsberufe OÖ", "Kepler Uniklinikum", "JKU Linz", "tech2b"].map((p) => (
              <span key={p} className="text-[10px] font-mono border border-border px-2 py-0.5 text-muted-foreground bg-card">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
