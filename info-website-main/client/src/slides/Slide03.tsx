import { Lock, Bot, Smartphone, ShoppingCart, FileCheck, Monitor, Cloud, X } from "lucide-react";

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
      <p className="text-2xl text-muted-foreground mb-20">
        Wir bauen keine neue Gesundheits-App. Wir bauen den Ort, an dem alle anderen zusammenkommen.
      </p>

      <div className="grid grid-cols-3 gap-7 mb-7">
        <div className="p-7 border-2 bg-card" style={{ borderColor: "var(--accent-blue)" }}>
          <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "var(--accent-blue)" }}>USP 1</p>
          <h3 className="text-xl font-semibold mb-3">Alles an einem Ort</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap mb-4">
            {["Import", "→", "Verstehen", "→", "Freigabe"].map((s, i) => (
              <span key={i} className={s === "→" ? "text-muted-foreground/40" : "px-3 py-1 bg-[var(--diagram-bg)] border border-border"}>
                {s}
              </span>
            ))}
          </div>
          <p className="text-base text-muted-foreground leading-relaxed mb-3">
            Labor · Schlaf · Arztbrief · Training — strukturierte Timeline, KI erklärt in normaler Sprache.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Lokal gespeichert", dot: true },
              { label: "Health Vault optional" },
              { label: "KI optional" },
            ].map((b, i) => (
              <span
                key={i}
                className="flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full border"
                style={{ color: "var(--accent-green)", borderColor: "color-mix(in srgb, var(--accent-green) 35%, transparent)", backgroundColor: "color-mix(in srgb, var(--accent-green) 8%, transparent)" }}
              >
                {b.dot && <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--accent-green)" }} />}
                {b.label}
              </span>
            ))}
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
