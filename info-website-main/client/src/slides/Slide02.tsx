import { FileText, Heart, Watch, Stethoscope, ArrowRight, Users, BarChart3, Globe, TrendingUp, Unlink, Sparkles } from "lucide-react";

export const notes =
  "Arztbrief vom Kepler Uniklinikum: PDF irgendwo. Laborwerte: ausgedruckt in einem Ordner. Schlafdaten: in einer US-Cloud, der ich nie zugestimmt habe. Beim nächsten Arzttermin — fangen wir wieder von vorne an. Fünf Millionen Menschen in Österreich haben chronische Erkrankungen. Nicht weil es zu wenig Daten gibt — sondern weil die Daten nirgendwo zusammenarbeiten. Martin, was haben wir gebaut?";

const silos = [
  { icon: <FileText className="w-5 h-5" />, label: "Arztbrief", sub: "PDF irgendwo" },
  { icon: <Watch className="w-5 h-5" />, label: "Wearable-App", sub: "eigene US-Cloud" },
  { icon: <Heart className="w-5 h-5" />, label: "Labor", sub: "Ausdruck im Ordner" },
  { icon: <Stethoscope className="w-5 h-5" />, label: "Klinik-System", sub: "kein Zugriff" },
];

const vault = [
  { label: "Vitamin D Trend", sub: "↗ 28 → 45 ng/ml (6 Mo.)", color: "var(--accent-green)" },
  { label: "Blutdruck-Verlauf", sub: "140/90 → 128/82 mmHg", color: "var(--accent-blue)" },
  { label: "Arztbrief: Endokrinologie", sub: "TSH 2.4 mU/L — erklärt", color: "var(--accent-violet)" },
  { label: "Endometriose", sub: "Schmerztagebuch · Zyklus-Korrelation", color: "var(--accent-rose, #f43f5e)" },
];

const stats = [
  { value: "~5,6 Mio.", label: "Chronisch Erkrankte in Österreich", sub: "~66 % der Bevölkerung ab 15 J.", icon: <Users className="w-6 h-6" />, color: "var(--accent-amber)" },
  { value: "€ 57,8 Mrd.", label: "Gesundheitsausgaben Österreich 2024", sub: "Laufende Ausgaben · Tendenz steigend", icon: <BarChart3 className="w-6 h-6" />, color: "var(--accent-violet)" },
  { value: "$ 549 Mrd.", label: "Globaler Digital Health Markt 2028", sub: "Basis: 180 Mrd. USD (2023) · CAGR ~25 %", icon: <Globe className="w-6 h-6" />, color: "var(--accent-blue)" },
  { value: "€ 61 Mrd.", label: "EU Digital Health 2035", sub: "von € 11 Mrd. (2023) · CAGR ~15,1 %", icon: <TrendingUp className="w-6 h-6" />, color: "var(--accent-green)" },
];

export default function Slide02() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "52px 96px",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground/40 mb-5">
        02 — Problem · Felix
      </p>

      <h2 className="text-6xl font-bold tracking-tight mb-3 leading-tight">
        Das Problem ist nicht zu wenig Apps.
      </h2>
      <p className="text-2xl font-medium text-muted-foreground mb-10">
        Das Problem ist, dass sie nicht reden.
      </p>

      <div className="grid grid-cols-2 gap-8 mb-7" style={{ flex: "0 0 auto" }}>
        {/* LEFT — Silos */}
        <div className="flex flex-col" style={{ borderTop: "2px solid var(--accent-amber)" }}>
          <div className="flex items-center gap-2 pt-4 pb-5">
            <Unlink className="w-4 h-4" style={{ color: "var(--accent-amber)" }} />
            <p className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--accent-amber)" }}>
              Heute — Silos
            </p>
          </div>
          <div className="space-y-2">
            {silos.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 px-4 py-3 border border-dashed border-border/60"
                style={{ backgroundColor: "var(--diagram-bg)" }}
              >
                <span className="text-muted-foreground/50">{item.icon}</span>
                <div className="min-w-0">
                  <p className="text-base font-medium leading-tight">{item.label}</p>
                  <p className="text-xs text-muted-foreground/60">{item.sub}</p>
                </div>
                <div className="ml-auto w-2 h-2 rounded-full bg-border" />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Health Vault */}
        <div className="flex flex-col" style={{ borderTop: "2px solid var(--accent-blue)" }}>
          <div className="flex items-center gap-2 pt-4 pb-5">
            <Sparkles className="w-4 h-4" style={{ color: "var(--accent-blue)" }} />
            <p className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--accent-blue)" }}>
              Morgen — Exodus Health Vault
            </p>
          </div>
          <div className="space-y-2">
            {vault.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 px-4 py-3 border border-border/40 bg-card relative overflow-hidden"
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-0.5"
                  style={{ backgroundColor: item.color }}
                />
                <div className="min-w-0 flex-1 pl-1">
                  <p className="text-base font-semibold leading-tight">{item.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.sub}</p>
                </div>
                <div
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: item.color }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="px-5 py-4 border border-border/60 bg-card flex flex-col gap-2 relative overflow-hidden"
          >
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{ backgroundColor: s.color }}
            />
            <div style={{ color: s.color }}>{s.icon}</div>
            <p className="text-xl font-bold tracking-tight leading-none" style={{ color: s.color }}>{s.value}</p>
            <p className="text-xs font-medium leading-snug text-foreground">{s.label}</p>
            <p className="text-xs text-muted-foreground/60 leading-snug">{s.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
