import { useState } from "react";
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
    logo: "https://www.fhgooe.ac.at/fileadmin/fh_gooe/Logo/FHG_Logo_RGB_farbe.png",
  },
  {
    name: "Business Upper Austria",
    logo: "https://www.biz-up.at/fileadmin/user_upload/biz-up_logo.png",
  },
];

function PartnerLogo({ name, logo }: { name: string; logo: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex flex-col items-center gap-2">
      {failed ? (
        <span className="text-sm font-mono border border-border px-3 py-1.5 text-muted-foreground bg-card">
          {name}
        </span>
      ) : (
        <img
          src={logo}
          alt={name}
          height={36}
          className="h-9 object-contain grayscale opacity-60"
          onError={() => setFailed(true)}
        />
      )}
      <p className="text-xs font-mono text-muted-foreground/50 text-center max-w-[120px] leading-tight">
        {name}
      </p>
    </div>
  );
}

export default function Slide10() {
  return (
    <div
      className="fixed inset-0 flex flex-col justify-center px-20 py-12"
      style={{ width: "100%", height: "100%" }}
    >
      <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground/40 mb-6">
        10 — Closing · Felix
      </p>

      <div className="flex items-start gap-16 w-full">
        {/* Left: headline + timeline + contact */}
        <div className="flex-1 min-w-0">
          <h2 className="text-6xl font-bold tracking-tight mb-3 leading-tight">
            Wir möchten die Gesundheit<br />revolutionieren.
          </h2>
          <p className="text-3xl font-medium text-muted-foreground mb-8 leading-tight">
            Wir möchten die Linzer und Europäer gesünder machen.
          </p>

          {/* Vertical timeline roadmap */}
          <div className="mb-8">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground/50 mb-4">
              Roadmap
            </p>
            <div className="relative pl-6">
              <div
                className="absolute left-[9px] top-2 bottom-2 w-px"
                style={{ backgroundColor: "var(--border)" }}
              />
              <div className="flex flex-col gap-5">
                {roadmapItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 relative">
                    <div
                      className="w-4 h-4 rounded-full shrink-0 mt-0.5 ring-2 ring-background"
                      style={{ backgroundColor: item.color }}
                    />
                    <div className="flex items-baseline gap-3">
                      <span
                        className="text-base font-mono font-semibold"
                        style={{ color: item.color }}
                      >
                        {item.label}
                      </span>
                      <span className="text-xl text-foreground">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-4 text-xl text-muted-foreground">
            <Mail className="w-6 h-6 shrink-0" style={{ color: "var(--accent-violet)" }} />
            <a href="mailto:exodus@servas.ai" className="font-mono hover:text-foreground transition-colors">
              exodus@servas.ai
            </a>
          </div>
        </div>

        {/* Right: two QR codes + partner logos */}
        <div className="flex-shrink-0 flex flex-col items-center gap-8">
          {/* Two QR codes side by side */}
          <div className="flex gap-8">
            {qrCodes.map((qr) => (
              <a
                key={qr.url}
                href={qr.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 border border-border hover:border-foreground/30 transition-colors"
              >
                <p
                  className="text-sm font-mono uppercase tracking-widest"
                  style={{ color: "var(--accent-blue)" }}
                >
                  {qr.title}
                </p>
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qr.encoded}&bgcolor=ffffff&color=000000&margin=6`}
                  alt={`QR Code: ${qr.label}`}
                  width={200}
                  height={200}
                  className="border border-border/40"
                />
                <p className="text-sm font-mono text-muted-foreground/60 text-center">
                  {qr.label}
                </p>
              </a>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
