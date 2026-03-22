import { FileText, Heart, Watch, Stethoscope, Unlink, ShieldCheck, Activity, Pill, Dumbbell, ChevronRight, Users, BarChart3, Globe, TrendingUp } from "lucide-react";

export const notes =
  "Arztbrief vom Kepler Uniklinikum: PDF irgendwo. Laborwerte: ausgedruckt in einem Ordner. Schlafdaten: in einer US-Cloud, der ich nie zugestimmt habe. Beim nächsten Arzttermin — fangen wir wieder von vorne an. Fünf Millionen Menschen in Österreich haben chronische Erkrankungen. Nicht weil es zu wenig Daten gibt — sondern weil die Daten nirgendwo zusammenarbeiten. Martin, was haben wir gebaut?";

const silos = [
  { icon: <FileText className="w-4 h-4" />, label: "Arztbrief", sub: "PDF irgendwo" },
  { icon: <Watch className="w-4 h-4" />, label: "Wearable-App", sub: "eigene US-Cloud" },
  { icon: <Heart className="w-4 h-4" />, label: "Labor", sub: "Ausdruck im Ordner" },
  { icon: <Stethoscope className="w-4 h-4" />, label: "Klinik-System", sub: "kein Zugriff" },
];

const vault = [
  { icon: <Activity className="w-3.5 h-3.5" />, label: "Vitamin D Trend", sub: "↗ 28 → 45 ng/ml", tag: "Labor", color: "var(--accent-green)" },
  { icon: <Heart className="w-3.5 h-3.5" />, label: "Blutdruck-Verlauf", sub: "140/90 → 128/82 mmHg", tag: "Vital", color: "var(--accent-blue)" },
  { icon: <FileText className="w-3.5 h-3.5" />, label: "Arztbrief: Endokrinologie", sub: "TSH 2.4 mU/L — erklärt", tag: "Arztbrief", color: "var(--accent-violet)" },
  { icon: <Activity className="w-3.5 h-3.5" />, label: "Endometriose", sub: "Schmerztagebuch · Zyklus", tag: "Chronisch", color: "#f43f5e" },
  { icon: <Dumbbell className="w-3.5 h-3.5" />, label: "Trainingsplan", sub: "KI-angepasst · laufend", tag: "Fitness", color: "var(--accent-amber)" },
  { icon: <Pill className="w-3.5 h-3.5" />, label: "Supplementenplan", sub: "Omega-3 · Mg · Vit D", tag: "Supplemente", color: "var(--accent-green)" },
];

const stats = [
  { value: "~5,6 Mio.", label: "Chronisch Erkrankte (AT)", sub: "~66 % ab 15 J.", icon: <Users className="w-5 h-5" />, color: "var(--accent-amber)" },
  { value: "€ 57,8 Mrd.", label: "Gesundheitsausgaben 2024", sub: "Tendenz steigend", icon: <BarChart3 className="w-5 h-5" />, color: "var(--accent-violet)" },
  { value: "$ 549 Mrd.", label: "Digital Health Markt 2028", sub: "CAGR ~25 %", icon: <Globe className="w-5 h-5" />, color: "var(--accent-blue)" },
  { value: "€ 61 Mrd.", label: "EU Digital Health 2035", sub: "CAGR ~15,1 %", icon: <TrendingUp className="w-5 h-5" />, color: "var(--accent-green)" },
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
        padding: "56px 144px",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground/40 mb-3">
        02 — Problem · Felix
      </p>
      <h2 className="text-5xl font-bold tracking-tight mb-2 leading-tight">Das Problem.</h2>
      <p className="text-xl font-medium text-muted-foreground" style={{ marginBottom: "40px" }}>
        Das Problem ist, dass sie nicht reden.
      </p>

      <div className="grid grid-cols-2 gap-6 mb-5" style={{ flex: "0 0 auto" }}>

        {/* LEFT — Silos */}
        <div className="flex flex-col min-h-0">
          <div className="flex items-center gap-2 pt-3 pb-3 shrink-0">
            <Unlink className="w-3.5 h-3.5" style={{ color: "var(--accent-amber)" }} />
            <p className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--accent-amber)" }}>
              Heute — Silos
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {silos.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-3 border border-dashed border-border/60"
                style={{ backgroundColor: "var(--diagram-bg)" }}
              >
                <span className="text-muted-foreground/40 shrink-0">{item.icon}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium leading-tight">{item.label}</p>
                  <p className="text-xs text-muted-foreground/50">{item.sub}</p>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-border/60 shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Mobile App UI */}
        <div className="flex flex-col min-h-0 rounded-lg overflow-hidden" style={{ border: "2px solid var(--accent-blue)" }}>
          <div className="flex items-center gap-2 px-4 py-3 shrink-0" style={{ background: "color-mix(in srgb, var(--accent-blue) 5%, var(--card))", borderBottom: "1px solid color-mix(in srgb, var(--accent-blue) 30%, transparent)" }}>
            <ShieldCheck className="w-3.5 h-3.5" style={{ color: "var(--accent-blue)" }} />
            <p className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--accent-blue)" }}>
              Morgen — Exodus Health Vault
            </p>
            <span className="ml-auto text-xs font-mono px-2 py-0.5 rounded-full" style={{ background: "color-mix(in srgb, var(--accent-green) 12%, transparent)", color: "var(--accent-green)" }}>
              lokal · sicher
            </span>
          </div>

          {/* App frame */}
          <div className="flex flex-col" style={{ background: "var(--card)" }}>

            {/* Section label */}
            <div className="px-4 py-2 shrink-0" style={{ borderBottom: "1px solid var(--border)" }}>
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground/40">Alle Einträge</p>
            </div>

            {/* Entries */}
            <div className="flex flex-col divide-y divide-border/40 overflow-hidden">
              {vault.map((item, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-2.5 shrink-0" style={{ background: i % 2 === 0 ? "var(--card)" : "var(--diagram-bg)" }}>
                  <div className="w-0.5 self-stretch rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                  <div className="shrink-0" style={{ color: item.color }}>{item.icon}</div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold leading-tight truncate">{item.label}</p>
                    <p className="text-xs text-muted-foreground/50 leading-tight truncate">{item.sub}</p>
                  </div>
                  <span
                    className="text-xs font-mono px-1.5 py-0.5 rounded shrink-0"
                    style={{ backgroundColor: `color-mix(in srgb, ${item.color} 12%, transparent)`, color: item.color, fontSize: "0.6rem" }}
                  >
                    {item.tag}
                  </span>
                  <ChevronRight className="w-3 h-3 text-muted-foreground/20 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-3 shrink-0">
        {stats.map((s, i) => (
          <div key={i} className="px-4 py-3 border border-border/50 bg-card relative overflow-hidden flex items-center gap-3">
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ backgroundColor: s.color }} />
            <div className="shrink-0" style={{ color: s.color }}>{s.icon}</div>
            <div className="min-w-0">
              <p className="text-base font-bold tracking-tight leading-none mb-0.5" style={{ color: s.color }}>{s.value}</p>
              <p className="text-xs text-foreground leading-snug">{s.label}</p>
              <p className="text-xs text-muted-foreground/50 leading-snug">{s.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
