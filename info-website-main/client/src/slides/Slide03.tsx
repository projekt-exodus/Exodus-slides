import { Lock, Bot, Smartphone, ShoppingCart, FileCheck, Monitor, Cloud, X, HardDrive, Shield, CheckCircle2, Code2 } from "lucide-react";

export const notes =
  "Wir bauen keine neue Gesundheits-App. Wir bauen den Ort, an dem alle anderen zusammenkommen. USP 1: Alles an einem Ort. USP 2: Bring Your Own AI — du wählst, welche KI deine Daten analysiert. Standard ist immer lokal. USP 3: Persönlicher Gesundheits-Agent — OpenClaw arbeitet für dich, nicht für uns.";

export default function Slide03() {
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
        03 — Lösung & USPs · Martin
      </p>

      <h2 className="text-6xl font-bold tracking-tight mb-3 leading-tight">
        Eine Plattform. Alle Daten. Deine KI.
      </h2>
      <p className="text-2xl text-muted-foreground" style={{ marginBottom: "40px" }}>
        Wir bauen keine neue Gesundheits-App. Wir bauen den Ort, an dem alle anderen zusammenkommen.
      </p>

      <div className="grid grid-cols-3 gap-7 mb-7">
        <div className="p-7 border-2 bg-card flex flex-col" style={{ borderColor: "var(--accent-blue)" }}>
          <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "var(--accent-blue)" }}>USP 1</p>
          <h3 className="text-xl font-semibold mb-1">Health Vault</h3>
          <p className="text-sm text-muted-foreground mb-5">Deine Daten. Du wählst wo.</p>

          {/* Storage option 1 — Gerät (selected) */}
          <div className="flex items-center gap-3 px-3 py-3 mb-2 border-2 rounded-sm" style={{ borderColor: "var(--accent-blue)", backgroundColor: "color-mix(in srgb, var(--accent-blue) 6%, transparent)" }}>
            <HardDrive className="w-5 h-5 shrink-0" style={{ color: "var(--accent-blue)" }} />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold leading-tight">Gerät</p>
              <p className="text-xs text-muted-foreground">Nur auf deinem Handy</p>
            </div>
            <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: "var(--accent-blue)" }} />
          </div>

          {/* Storage option 2 — Exodus Cloud */}
          <div className="flex items-center gap-3 px-3 py-3 mb-2 border border-border/60 rounded-sm bg-[var(--diagram-bg)]">
            <Shield className="w-5 h-5 shrink-0" style={{ color: "var(--accent-green)" }} />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold leading-tight">Exodus Cloud</p>
              <p className="text-xs text-muted-foreground">DSGVO-konform · EU-Server</p>
            </div>
            <span className="text-xs font-mono px-1.5 py-0.5 rounded" style={{ color: "var(--accent-green)", backgroundColor: "color-mix(in srgb, var(--accent-green) 12%, transparent)" }}>EU</span>
          </div>

          {/* Storage option 3 — Eigene Cloud */}
          <div className="flex items-center gap-3 px-3 py-3 mb-2 border border-border/60 rounded-sm bg-[var(--diagram-bg)]">
            <Cloud className="w-5 h-5 shrink-0 text-muted-foreground/60" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold leading-tight">Eigene Cloud</p>
              <p className="text-xs text-muted-foreground">iCloud · OneDrive · Dropbox</p>
            </div>
          </div>

          {/* Storage option 4 — Open Source */}
          <div className="flex items-center gap-3 px-3 py-3 border border-border/60 rounded-sm bg-[var(--diagram-bg)]">
            <Code2 className="w-5 h-5 shrink-0" style={{ color: "var(--accent-amber)" }} />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold leading-tight">Open Source</p>
              <p className="text-xs text-muted-foreground">Self-hosted · Vollständig prüfbar</p>
            </div>
            <span className="text-xs font-mono px-1.5 py-0.5 rounded" style={{ color: "var(--accent-amber)", backgroundColor: "color-mix(in srgb, var(--accent-amber) 12%, transparent)" }}>OSS</span>
          </div>
        </div>

        <div className="p-7 border-2 bg-card" style={{ borderColor: "var(--accent-violet)" }}>
          <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "var(--accent-violet)" }}>USP 2</p>
          <h3 className="text-xl font-semibold mb-3">Bring Your Own AI</h3>
          <div className="space-y-3 mb-4">
            {[
              { icon: <Monitor className="w-5 h-5" />, label: "Lokal", sub: "z.B. Ollama", color: "var(--accent-violet)" },
              { icon: <Smartphone className="w-5 h-5" />, label: "Smartphone", sub: "Apple Intelligence, Gemma", color: "var(--accent-green)" },
              { icon: <Cloud className="w-5 h-5" />, label: "Cloud optional", sub: "ChatGPT, Claude oder Gemini", color: "var(--accent-amber)" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-2.5 border border-border/50 bg-[var(--diagram-bg)]">
                <span style={{ color: item.color }}>{item.icon}</span>
                <div className="min-w-0">
                  <p className="text-base font-medium">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm font-mono px-3 py-1.5 border" style={{ color: "var(--accent-green)", borderColor: "var(--accent-green)40", backgroundColor: "var(--accent-green)08" }}>
            Standard ist immer lokal.
          </p>
        </div>

        <div className="p-7 border-2 bg-card relative overflow-hidden" style={{ borderColor: "var(--accent-green)" }}>
          <img
            src="/openclaw-logo.png"
            alt="OpenClaw"
            className="absolute top-3 right-3 opacity-90"
            style={{ width: 56, height: 56, objectFit: "contain" }}
          />
          <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "var(--accent-green)" }}>USP 3</p>
          <h3 className="text-xl font-semibold mb-3">Persönlicher Health-Agent</h3>
          <div className="space-y-2 mb-4">
            {[
              { icon: <Lock className="w-5 h-5" />, label: "Exodus Vault" },
              { icon: <Bot className="w-5 h-5" />, label: "MCP Skill-Pack" },
              { icon: <Smartphone className="w-5 h-5" />, label: "OpenClaw Agent" },
              { icon: <ShoppingCart className="w-5 h-5" />, label: "Shop → Warenkorb" },
              { icon: <FileCheck className="w-5 h-5" />, label: "Bestätigung durch dich" },
            ].map((step, i) => (
              <div key={i}>
                <div className="flex items-center gap-3 text-base text-muted-foreground">
                  <span style={{ color: "var(--accent-green)" }}>{step.icon}</span>
                  {step.label}
                </div>
                {i < 4 && <div className="ml-2.5 w-px h-2.5 bg-border my-1" />}
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground font-mono">
            Dein Agent arbeitet für dich. Nur mit deiner Freigabe.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 items-center">
        <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground/50 mr-2">Was Exodus NICHT ist:</p>
        {[
          "Kein weiteres Silo",
          "Keine Black Box",
          "Kein US-Cloud-Zwang",
          "Keine App, die deine Daten besitzt",
        ].map((item) => (
          <span key={item} className="flex items-center gap-1.5 text-sm text-muted-foreground border border-border/50 px-3 py-1.5">
            <X className="w-4 h-4 text-muted-foreground/50" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
