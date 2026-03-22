import { ExplainCard } from "@/components/sections/helpers";

export const notes =
  "Stell 4 Supplement-Röhrchen auf den Tisch! Zwei vor dem Training morgen Mittag. Zwei vor dem Schlafengehen. Die hat unsere KI auf Basis meines Blutbilds empfohlen. Custom abgefüllt. Von mir persönlich getestet. Jetzt App öffnen: Health Data Wall, Labor-Tab, Erklärkarte Vitamin D, dann die Empfehlung.";

export default function Slide05() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-16 py-16 max-w-6xl mx-auto">
      <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40 mb-4">
        05 — Demo · Felix
      </p>

      <h2 className="text-4xl font-bold tracking-tight mb-2 max-w-3xl leading-tight">
        Das sind meine echten Daten.
      </h2>
      <p className="text-base text-muted-foreground mb-8 max-w-xl">
        Das sind echte Supplements. Custom abgefüllt. Von mir persönlich getestet.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <div className="border border-border/70 bg-[var(--diagram-bg)] p-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {["Labor", "Fitness", "Arztbriefe", "Wearables"].map((tab, i) => (
                <span
                  key={tab}
                  className={`text-[10px] font-mono px-3 py-1.5 border cursor-pointer ${
                    i === 0
                      ? "border-[var(--accent-blue)] text-[var(--accent-blue)] bg-[var(--accent-blue)]/10"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {tab}
                </span>
              ))}
            </div>
            <div style={{ position: "relative", paddingBottom: "56.25%", minHeight: 260 }}>
              <iframe
                src="https://exodus-demo.vercel.app"
                title="Exodus App Demo"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                allow="accelerometer; gyroscope"
                loading="lazy"
              />
            </div>
          </div>
          <a
            href="https://exodus-demo.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-muted-foreground/60 hover:text-muted-foreground transition-colors text-center"
          >
            exodus-demo.vercel.app →
          </a>
        </div>

        <div className="flex flex-col gap-4 justify-center">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/50 mb-2">Erklärkarten</p>
          <ExplainCard
            title="Vitamin D"
            status="Suboptimal"
            statusColor="var(--accent-amber)"
            explanation="Vitamin D ist essenziell für Immunfunktion, Knochengesundheit und Stimmungsregulation. Werte unter 30 ng/ml gelten als suboptimal. Aktueller Wert: 28 ng/ml."
            observation="Beobachte: Tageslicht erhöhen, Supplementierung nach ärztlicher Rücksprache"
            testId="slide05-vitamin-d"
          />
          <ExplainCard
            title="TSH (Schilddrüse)"
            status="Im Referenzbereich"
            statusColor="var(--accent-green)"
            explanation="TSH kontrolliert die Schilddrüsenaktivität. Dein Wert liegt gut im Normalbereich (0.4–4.0 mU/L). Aktueller Wert: 2.4 mU/L."
            observation="Kein Handlungsbedarf — nächste Kontrolle in 12 Monaten"
            testId="slide05-tsh"
          />
        </div>
      </div>
    </div>
  );
}
