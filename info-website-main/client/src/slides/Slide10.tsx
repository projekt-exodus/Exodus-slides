import { Mail } from "lucide-react";

export const notes =
  "Wir bauen nicht die nächste App. Wir bauen die Infrastruktur für präventive Gesundheit — mit deinen Daten, unter deiner Kontrolle. Q3 2026 Prototyp, Q4 Gründung, 2027 Markt, 2028 Supplements. FH Gesundheitsberufe, Business Upper Austria. Scannt die QR-Codes. Schreibt uns. Wir sind bereit.";

const roadmapItems = [
  { label: "Q3 2026", desc: "Prototyp fertig", color: "var(--accent-blue)" },
  { label: "Q4 2026", desc: "Unternehmen gründen", color: "var(--accent-violet)" },
  { label: "2027", desc: "An den Markt gehen", color: "var(--accent-green)" },
  { label: "2028", desc: "Eigene Supplement-Marke", color: "var(--accent-amber)" },
];

const qrCodes = [
  {
    title: "App Demo",
    url: "https://exodus-demo-app.vercel.app",
    label: "exodus-demo-app.vercel.app",
    encoded: "https%3A%2F%2Fexodus-demo-app.vercel.app",
  },
  {
    title: "Webseite",
    url: "https://exodus-demo.vercel.app",
    label: "exodus-demo.vercel.app",
    encoded: "https%3A%2F%2Fexodus-demo.vercel.app",
  },
];

const partners = [
  {
    name: "FH Gesundheitsberufe OÖ",
    logo: "https://logo.clearbit.com/fhgooe.ac.at",
  },
  {
    name: "Business Upper Austria",
    logo: "https://logo.clearbit.com/biz-up.at",
  },
];

function PartnerLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <img
        src={logo}
        alt={name}
        height={28}
        className="h-7 object-contain grayscale opacity-60"
        onError={(e) => {
          const el = e.currentTarget as HTMLImageElement;
          el.style.display = "none";
          const fallback = el.nextSibling as HTMLElement | null;
          if (fallback) fallback.style.display = "block";
        }}
      />
      <span
        className="text-[9px] font-mono border border-border px-1.5 py-0.5 text-muted-foreground bg-card"
        style={{ display: "none" }}
      >
        {name}
      </span>
      <p className="text-[9px] font-mono text-muted-foreground/50 text-center max-w-[80px] leading-tight">
        {name}
      </p>
    </div>
  );
}

export default function Slide10() {
  return (
    <div
      className="fixed inset-0 flex flex-col justify-center px-14 py-10"
      style={{ width: "100%", height: "100%" }}
    >
      <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40 mb-6">
        10 — Closing · Felix
      </p>

      <div className="flex items-start gap-14 w-full">
        {/* Left: headline + timeline + contact */}
        <div className="flex-1 min-w-0">
          <h2 className="text-5xl font-bold tracking-tight mb-2 leading-tight">
            Wir sind bereit.
          </h2>
          <p className="text-3xl font-medium text-muted-foreground mb-6 leading-tight">
            Bist du dabei?
          </p>

          <p className="text-sm text-muted-foreground max-w-md leading-relaxed mb-6">
            Aus Linz. Für alle. — Wir bauen die Infrastruktur für präventive Gesundheit,
            auf der KI-Agenten mit deinen Daten, unter deiner Kontrolle, arbeiten können.
          </p>

          {/* Vertical timeline roadmap */}
          <div className="mb-6">
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50 mb-3">
              Roadmap
            </p>
            <div className="relative pl-5">
              <div
                className="absolute left-[7px] top-2 bottom-2 w-px"
                style={{ backgroundColor: "var(--border)" }}
              />
              <div className="flex flex-col gap-3">
                {roadmapItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 relative">
                    <div
                      className="w-3 h-3 rounded-full shrink-0 mt-0.5 ring-2 ring-background"
                      style={{ backgroundColor: item.color }}
                    />
                    <div className="flex items-baseline gap-2">
                      <span
                        className="text-xs font-mono font-semibold"
                        style={{ color: item.color }}
                      >
                        {item.label}
                      </span>
                      <span className="text-sm text-foreground">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Mail className="w-4 h-4 shrink-0" style={{ color: "var(--accent-violet)" }} />
            <a href="mailto:exodus@servas.ai" className="font-mono hover:text-foreground transition-colors">
              exodus@servas.ai
            </a>
          </div>
        </div>

        {/* Right: two QR codes + partner logos */}
        <div className="flex-shrink-0 flex flex-col items-center gap-5">
          {/* Two QR codes side by side */}
          <div className="flex gap-4">
            {qrCodes.map((qr) => (
              <a
                key={qr.url}
                href={qr.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 border border-border hover:border-foreground/30 transition-colors"
              >
                <p
                  className="text-[10px] font-mono uppercase tracking-widest"
                  style={{ color: "var(--accent-blue)" }}
                >
                  {qr.title}
                </p>
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=${qr.encoded}&bgcolor=ffffff&color=000000&margin=6`}
                  alt={`QR Code: ${qr.label}`}
                  width={130}
                  height={130}
                  className="border border-border/40"
                />
                <p className="text-[9px] font-mono text-muted-foreground/60 text-center">
                  {qr.label}
                </p>
              </a>
            ))}
          </div>

          {/* Partner logos */}
          <div className="flex flex-col items-center gap-2 w-full">
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40">
              Kooperationen
            </p>
            <div className="flex gap-6 items-center justify-center">
              {partners.map((p) => (
                <PartnerLogo key={p.name} name={p.name} logo={p.logo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
