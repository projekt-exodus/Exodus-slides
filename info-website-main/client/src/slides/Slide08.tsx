import { Database, Stethoscope, Pill, TrendingUp, Repeat, ArrowRightLeft } from "lucide-react";

export const notes =
  "Die ersten Connections sind kostenlos — erste Wearables, erste Laborwerte. Wer mehr verbinden will, mehr automatisieren, mehr Agenten nutzen — zahlt monatlich. Und der Preis wächst mit dem Wert. Dazu: Supplements, personalisiert aus dem Profil — Röhrchen kurz zeigen — und ärztliche Beratung auf Datenbasis.";

export default function Slide08() {
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
        08 — Revenue · Martin
      </p>

      <h2 className="text-6xl font-bold tracking-tight mb-2 leading-tight">
        Wir verkaufen keine App.
      </h2>
      <p className="text-3xl font-medium text-muted-foreground mb-16">
        Wir verkaufen Connections.
      </p>

      <div className="grid grid-cols-3 gap-7 mb-7">
        <div className="p-7 border-2 bg-card" style={{ borderColor: "var(--accent-blue)" }}>
          <p className="text-xs font-mono uppercase tracking-widest mb-4 font-bold" style={{ color: "var(--accent-blue)" }}>Phase 1</p>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 flex items-center justify-center" style={{ color: "var(--accent-blue)", backgroundColor: "var(--accent-blue)15" }}>
              <Database className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-semibold text-xl tracking-tight">Abo-Subscription</h3>
              <p className="text-sm font-mono uppercase tracking-wider text-muted-foreground">Health Data Vault</p>
            </div>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Die ersten Connections kostenlos. Wer mehr verbinden will — zahlt monatlich.
          </p>
          <div className="space-y-2.5">
            {[
              { icon: <Database className="w-5 h-5" />, label: "Free", desc: "2 Connections + 5 Labortests (PDF-Upload)" },
              { icon: <TrendingUp className="w-5 h-5" />, label: "Premium", desc: "Mehr Connections, KI-Erklärungen, Agentic Layer + Beratungsgespräche" },
              { icon: <Repeat className="w-5 h-5" />, label: "Family", desc: "Mehrere Profile, eigene KI-Endpunkte" },
            ].map((tier, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-[var(--diagram-bg)] border border-border">
                <div className="mt-0.5" style={{ color: "var(--accent-blue)" }}>{tier.icon}</div>
                <div>
                  <p className="text-base font-medium">{tier.label}</p>
                  <p className="text-sm text-muted-foreground font-light">{tier.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-7 border-2 bg-card" style={{ borderColor: "var(--accent-violet)" }}>
          <p className="text-xs font-mono uppercase tracking-widest mb-4 font-bold" style={{ color: "var(--accent-violet)" }}>Phase 2</p>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 flex items-center justify-center" style={{ color: "var(--accent-violet)", backgroundColor: "var(--accent-violet)15" }}>
              <Stethoscope className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-semibold text-xl tracking-tight">Arzt-Beratung & Heilpläne</h3>
              <p className="text-sm font-mono uppercase tracking-wider text-muted-foreground">Plattform-Vermittlung</p>
            </div>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Personalisierte Pläne auf Datenbasis. Clinician-in-the-Loop: KI schlägt vor — Arzt gibt frei.
          </p>
          <div className="space-y-2.5">
            {[
              { icon: <Stethoscope className="w-5 h-5" />, label: "Heilplan-Erstellung" },
              { icon: <ArrowRightLeft className="w-5 h-5" />, label: "Beratungsgespräche (Chat)" },
              { icon: <TrendingUp className="w-5 h-5" />, label: "Provision pro Beratung" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-[var(--diagram-bg)] border border-border">
                <div style={{ color: "var(--accent-violet)" }}>{item.icon}</div>
                <p className="text-base">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-7 border-2 bg-card" style={{ borderColor: "var(--accent-green)" }}>
          <p className="text-xs font-mono uppercase tracking-widest mb-4 font-bold" style={{ color: "var(--accent-green)" }}>Phase 3</p>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 flex items-center justify-center" style={{ color: "var(--accent-green)", backgroundColor: "var(--accent-green)15" }}>
              <Pill className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-semibold text-xl tracking-tight">Supplements & Longevity</h3>
              <p className="text-sm font-mono uppercase tracking-wider text-muted-foreground">Produkt-Verkauf</p>
            </div>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Personalisiert auf Gesundheitsprofil. Biogena · Custom-Abfüllung · In-App oder via Agent.
          </p>
          <div className="space-y-2.5">
            {[
              { icon: <Pill className="w-5 h-5" />, label: "Eigene Produkte", desc: "Custom-Abfüllung" },
              { icon: <TrendingUp className="w-5 h-5" />, label: "Kooperationen", desc: "z.B. Biogena" },
              { icon: <Repeat className="w-5 h-5" />, label: "In-App-Kauf", desc: "KI empfiehlt → Agent bestellt → du bestätigst" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-[var(--diagram-bg)] border border-border">
                <div className="mt-0.5" style={{ color: "var(--accent-green)" }}>{item.icon}</div>
                <div>
                  <p className="text-base font-medium">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-5 border border-border/70 bg-[var(--diagram-bg)] flex items-start gap-4">
        <TrendingUp className="w-6 h-6 shrink-0 mt-0.5" style={{ color: "var(--accent-violet)" }} />
        <p className="text-lg text-muted-foreground font-light leading-relaxed">
          <strong className="text-foreground font-medium">Synergie:</strong>{" "}
          Mehr Daten → bessere Pläne → passendere Supplements → mehr Vertrauen → mehr Connections
        </p>
      </div>
    </div>
  );
}
