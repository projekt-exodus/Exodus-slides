import { Watch, Heart, FileText, Bot, BookOpen, Network } from "lucide-react";

export const notes =
  "Wearables & Fitness: Apple Health, WHOOP, Oura Ring, Garmin, Dexcom CGM. Labor & Befunde: ELGA, FHIR R4, Spike API, e-Befund. Klinische Systeme: Arztbriefe, Medikationspläne via HL7. KI-Agenten: OpenClaw lokal. Wissen & Evidenz: PubMed, Cochrane Library, SNOMED CT. Protokolle: MCP, REST API, OAuth 2.0. Felix, zeig ihnen jetzt, was das in der Praxis bedeutet.";

const connections = [
  {
    label: "Wearables & Fitness",
    icon: <Watch className="w-4 h-4" />,
    color: "var(--accent-green)",
    items: ["Apple Health", "WHOOP", "Oura Ring", "Garmin", "Dexcom CGM"],
  },
  {
    label: "Labor & Befunde",
    icon: <Heart className="w-4 h-4" />,
    color: "var(--accent-blue)",
    items: ["ELGA", "FHIR R4", "Spike API", "e-Befund"],
  },
  {
    label: "Klinische Systeme",
    icon: <FileText className="w-4 h-4" />,
    color: "var(--accent-rose)",
    items: ["Arztbriefe", "Medikationspläne", "Entlassbriefe via HL7"],
  },
  {
    label: "KI-Agenten",
    icon: <Bot className="w-4 h-4" />,
    color: "var(--accent-violet)",
    items: ["OpenClaw lokal", "Eigene KI-Instanz", "Custom Endpoint"],
  },
  {
    label: "Wissen & Evidenz",
    icon: <BookOpen className="w-4 h-4" />,
    color: "var(--accent-amber)",
    items: ["PubMed", "Cochrane Library", "SNOMED CT"],
  },
  {
    label: "Protokolle",
    icon: <Network className="w-4 h-4" />,
    color: "var(--accent-blue)",
    items: ["MCP Protocol", "REST API", "OAuth 2.0", "On-Device SDK"],
  },
];

const protocolBadges = ["MCP", "FHIR R4", "REST API", "OAuth 2.0", "HL7", "SNOMED CT", "On-Device SDK"];

export default function Slide04() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-16 py-16 max-w-6xl mx-auto">
      <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40 mb-4">
        04 — Connections · Martin
      </p>

      <h2 className="text-4xl font-bold tracking-tight mb-2 max-w-3xl leading-tight">
        Was Exodus verbindet — konkret.
      </h2>
      <p className="text-base text-muted-foreground mb-4 max-w-2xl">
        Alles auf offenen Standards. Kein proprietärer Lock-in.
      </p>
      <div className="flex items-start gap-3 mb-6 p-3 border border-border/70 bg-[var(--diagram-bg)]">
        <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50 shrink-0 mt-0.5">Beispiel:</span>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Felix verbindet seinen <strong className="text-foreground font-medium">WHOOP</strong> — Schlafdaten fließen automatisch ein. Dazu fotografiert er seinen <strong className="text-foreground font-medium">Laborbefund</strong> (Blutbild als PDF) und lädt ihn direkt hoch. Beides landet strukturiert in seiner Timeline.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {connections.map((cat, i) => (
          <div
            key={i}
            className="p-4 border border-border/70 bg-card"
            style={{ borderLeftColor: cat.color, borderLeftWidth: "3px" }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span style={{ color: cat.color }}>{cat.icon}</span>
              <h4 className="text-[11px] font-mono uppercase tracking-wider font-medium" style={{ color: cat.color }}>
                {cat.label}
              </h4>
            </div>
            <div className="space-y-1">
              {cat.items.map((item, j) => (
                <p key={j} className="text-xs text-muted-foreground">{item}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50">Offene Standards:</span>
        {protocolBadges.map((badge) => (
          <span
            key={badge}
            className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 border border-border/60 text-muted-foreground bg-card"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}
