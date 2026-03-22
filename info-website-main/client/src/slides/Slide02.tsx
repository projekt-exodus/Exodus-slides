import { FileText, Heart, Watch, Stethoscope, Unlink, ShieldCheck, Bell, LayoutDashboard, Activity, Pill, Dumbbell, ChevronRight, Wifi } from "lucide-react";

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
  { value: "~5,6 Mio.", label: "Chronisch Erkrankte (AT)", color: "var(--accent-amber)" },
  { value: "€ 57,8 Mrd.", label: "Gesundheitsausgaben 2024", color: "var(--accent-violet)" },
  { value: "$ 549 Mrd.", label: "Digital Health Markt 2028", color: "var(--accent-blue)" },
  { value: "€ 61 Mrd.", label: "EU Digital Health 2035", color: "var(--accent-green)" },
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
        padding: "48px 88px",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground/40 mb-4">
        02 — Problem · Felix
      </p>
      <h2 className="text-6xl font-bold tracking-tight mb-2 leading-tight">Das Problem.</h2>
      <p className="text-2xl font-medium text-muted-foreground mb-8">
        Das Problem ist, dass sie nicht reden.
      </p>

      <div className="grid grid-cols-2 gap-6 mb-5" style={{ flex: "0 0 auto" }}>

        {/* LEFT — Silos */}
        <div className="flex flex-col" style={{ borderTop: "2px solid var(--accent-amber)" }}>
          <div className="flex items-center gap-2 pt-3 pb-4">
            <Unlink className="w-3.5 h-3.5" style={{ color: "var(--accent-amber)" }} />
            <p className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--accent-amber)" }}>
              Heute — Silos
            </p>
          </div>
          <div className="space-y-2">
            {silos.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-2.5 border border-dashed border-border/60"
                style={{ backgroundColor: "var(--diagram-bg)" }}
              >
                <span className="text-muted-foreground/40">{item.icon}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium leading-tight">{item.label}</p>
                  <p className="text-xs text-muted-foreground/50">{item.sub}</p>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-border/60 shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — App UI Mockup */}
        <div className="flex flex-col rounded-lg overflow-hidden border border-border/70 shadow-lg" style={{ background: "var(--diagram-bg)" }}>

          {/* Window chrome */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-border/50" style={{ background: "var(--card)" }}>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
            </div>
            <div className="flex items-center gap-1 px-3 py-0.5 rounded border border-border/50 text-xs font-mono text-muted-foreground/50" style={{ background: "var(--diagram-bg)" }}>
              exodus.health / vault
            </div>
            <div className="flex items-center gap-2 text-muted-foreground/40">
              <Wifi className="w-3 h-3" />
              <ShieldCheck className="w-3 h-3" style={{ color: "var(--accent-green)" }} />
              <Bell className="w-3 h-3" />
            </div>
          </div>

          {/* App nav tabs */}
          <div className="flex items-center gap-0 border-b border-border/40 px-3" style={{ background: "var(--card)" }}>
            {[
              { icon: <LayoutDashboard className="w-3 h-3" />, label: "Dashboard" },
              { icon: <ShieldCheck className="w-3 h-3" />, label: "Vault", active: true },
              { icon: <Activity className="w-3 h-3" />, label: "Trends" },
            ].map((tab, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono border-b-2 transition-colors"
                style={{
                  borderBottomColor: tab.active ? "var(--accent-blue)" : "transparent",
                  color: tab.active ? "var(--accent-blue)" : "var(--muted-foreground)",
                  opacity: tab.active ? 1 : 0.5,
                }}
              >
                {tab.icon}
                {tab.label}
              </div>
            ))}
            <div className="ml-auto text-xs font-mono text-muted-foreground/30 py-2 flex items-center gap-1">
              <ShieldCheck className="w-2.5 h-2.5" style={{ color: "var(--accent-green)" }} />
              lokal · verschlüsselt
            </div>
          </div>

          {/* Vault entries */}
          <div className="flex flex-col divide-y divide-border/30 overflow-hidden">
            {vault.map((item, i) => (
              <div key={i} className="flex items-center gap-3 px-3 py-2 bg-card/50 hover:bg-card/80 relative">
                <div className="w-0.5 self-stretch rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                <div style={{ color: item.color }} className="shrink-0">{item.icon}</div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold leading-tight">{item.label}</p>
                  <p className="text-xs text-muted-foreground/50 leading-tight">{item.sub}</p>
                </div>
                <span
                  className="text-xs font-mono px-1.5 py-0.5 rounded shrink-0"
                  style={{ backgroundColor: `${item.color}18`, color: item.color, fontSize: "0.6rem" }}
                >
                  {item.tag}
                </span>
                <ChevronRight className="w-3 h-3 text-muted-foreground/20 shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-3">
        {stats.map((s, i) => (
          <div key={i} className="px-4 py-3 border border-border/50 bg-card relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ backgroundColor: s.color }} />
            <p className="text-lg font-bold tracking-tight leading-none mb-1" style={{ color: s.color }}>{s.value}</p>
            <p className="text-xs text-muted-foreground leading-snug">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
