import { FileText, Heart, Watch, Stethoscope, ArrowRight, Users, BarChart3, Globe, TrendingUp } from "lucide-react";

export const notes =
  "Arztbrief vom Kepler Uniklinikum: PDF irgendwo. Laborwerte: ausgedruckt in einem Ordner. Schlafdaten: in einer US-Cloud, der ich nie zugestimmt habe. Beim nächsten Arzttermin — fangen wir wieder von vorne an. Fünf Millionen Menschen in Österreich haben chronische Erkrankungen. Nicht weil es zu wenig Daten gibt — sondern weil die Daten nirgendwo zusammenarbeiten. Martin, was haben wir gebaut?";

const stats = [
  {
    value: "~5,6 Mio.",
    label: "Chronisch Erkrankte in Österreich",
    sub: "~66 % der Bevölkerung ab 15 J.",
    icon: <Users className="w-5 h-5" />,
    color: "var(--accent-amber)",
  },
  {
    value: "€ 57,8 Mrd.",
    label: "Gesundheitsausgaben Österreich 2024",
    sub: "Laufende Ausgaben gesamt · Tendenz steigend",
    icon: <BarChart3 className="w-5 h-5" />,
    color: "var(--accent-violet)",
  },
  {
    value: "$ 549 Mrd.",
    label: "Globaler Digital Health Markt 2028",
    sub: "Basis: 180 Mrd. USD (2023) · CAGR ~25 %",
    icon: <Globe className="w-5 h-5" />,
    color: "var(--accent-blue)",
  },
  {
    value: "€ 61 Mrd.",
    label: "EU Digital Health 2035",
    sub: "von € 11 Mrd. (2023) · CAGR ~15,1 %",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "var(--accent-green)",
  },
];

export default function Slide02() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-16 py-20 max-w-6xl mx-auto">
      <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40 mb-6">
        02 — Problem · Felix
      </p>

      <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-3 max-w-3xl leading-tight">
        Das Problem ist nicht zu wenig Apps.
      </h2>
      <p className="text-2xl font-medium text-muted-foreground mb-10 max-w-2xl">
        Das Problem ist, dass sie nicht reden.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <div className="flex flex-col gap-4">
          <div className="p-6 border border-border bg-[var(--diagram-bg)]">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Heute — Silos</p>
            <div className="space-y-2.5">
              {[
                { icon: <FileText className="w-4 h-4" />, label: "Arztbrief (PDF irgendwo)" },
                { icon: <Watch className="w-4 h-4" />, label: "Wearable-App (eigene Cloud)" },
                { icon: <Heart className="w-4 h-4" />, label: "Labor (Ausdruck im Ordner)" },
                { icon: <Stethoscope className="w-4 h-4" />, label: "Klinik-System (kein Zugriff)" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-2.5 border border-dashed border-border bg-card">
                  <span className="text-muted-foreground">{item.icon}</span>
                  <span className="text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 mb-2">
            <ArrowRight className="w-6 h-6" style={{ color: "var(--accent-blue)" }} />
            <span className="text-sm font-medium" style={{ color: "var(--accent-blue)" }}>Exodus löst das</span>
          </div>
          <div className="p-6 border-2 bg-card" style={{ borderColor: "var(--accent-blue)" }}>
            <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "var(--accent-blue)" }}>
              Morgen — Health Data Wall
            </p>
            <div className="space-y-2.5">
              {[
                { label: "Vitamin D Trend", sub: "↗ 28 → 45 ng/ml (6 Mo.)", color: "var(--accent-green)" },
                { label: "Blutdruck-Verlauf", sub: "140/90 → 128/82 mmHg", color: "var(--accent-blue)" },
                { label: "Arztbrief: Endokrinologie", sub: "TSH 2.4 mU/L — erklärt", color: "var(--accent-violet)" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-2.5 bg-[var(--diagram-bg)] border border-border">
                  <div className="w-1 h-8 rounded-full" style={{ backgroundColor: item.color }} />
                  <div>
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="p-4 border border-border/70 bg-card flex flex-col gap-1">
            <div style={{ color: s.color }}>{s.icon}</div>
            <p className="text-xl font-semibold tracking-tight" style={{ color: s.color }}>{s.value}</p>
            <p className="text-xs font-normal leading-snug">{s.label}</p>
            <p className="text-[10px] text-muted-foreground leading-snug">{s.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
