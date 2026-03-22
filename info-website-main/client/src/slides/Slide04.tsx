import { Watch, Heart, FileText, Bot, BookOpen, Network } from "lucide-react";

export const notes =
  "Wearables & Fitness: Apple Health, WHOOP, Oura Ring, Garmin, Dexcom CGM. Labor & Befunde: ELGA, FHIR R4, Spike API, e-Befund. Klinische Systeme: Arztbriefe, Medikationspläne via HL7. KI-Agenten: OpenClaw lokal. Wissen & Evidenz: PubMed, Cochrane Library, SNOMED CT. Protokolle: MCP, REST API, OAuth 2.0. Felix, zeig ihnen jetzt, was das in der Praxis bedeutet.";

const connections = [
  {
    label: "Wearables & Fitness",
    icon: <Watch className="w-7 h-7" />,
    color: "var(--accent-green)",
    items: ["Apple Health", "WHOOP", "Oura Ring", "Garmin", "Dexcom CGM"],
  },
  {
    label: "Labor & Befunde",
    icon: <Heart className="w-7 h-7" />,
    color: "var(--accent-blue)",
    items: ["ELGA", "FHIR R4", "Spike API", "e-Befund"],
  },
  {
    label: "Klinische Systeme",
    icon: <FileText className="w-7 h-7" />,
    color: "var(--accent-rose)",
    items: ["Arztbriefe", "Medikationspläne", "Entlassbriefe via HL7"],
  },
  {
    label: "KI-Agenten",
    icon: <Bot className="w-7 h-7" />,
    color: "var(--accent-violet)",
    items: ["OpenClaw lokal", "Eigene KI-Instanz", "Custom Endpoint"],
  },
  {
    label: "Wissen & Evidenz",
    icon: <BookOpen className="w-7 h-7" />,
    color: "var(--accent-amber)",
    items: ["PubMed", "Cochrane Library", "SNOMED CT"],
  },
  {
    label: "Protokolle",
    icon: <Network className="w-7 h-7" />,
    color: "var(--accent-blue)",
    items: ["MCP Protocol", "REST API", "OAuth 2.0", "On-Device SDK"],
  },
];

const protocolBadges = ["MCP", "FHIR R4", "REST API", "OAuth 2.0", "HL7", "SNOMED CT", "On-Device SDK"];

export default function Slide04() {
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
        04 — Connections · Martin
      </p>

      <h2 className="text-6xl font-bold tracking-tight mb-3 leading-tight">
        Was Exodus verbindet — konkret.
      </h2>
      <p className="text-2xl text-muted-foreground mb-16">
        Alles auf offenen Standards. Kein proprietärer Lock-in.
      </p>
      <div className="grid grid-cols-3 gap-6 mb-8">
        {connections.map((cat, i) => (
          <div
            key={i}
            className="p-6 border border-border/70 bg-card"
            style={{ borderLeftColor: cat.color, borderLeftWidth: "4px" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span style={{ color: cat.color }}>{cat.icon}</span>
              <h4 className="text-base font-mono uppercase tracking-wider font-medium" style={{ color: cat.color }}>
                {cat.label}
              </h4>
            </div>
            <div className="space-y-2">
              {cat.items.map((item, j) => (
                <p key={j} className="text-base text-muted-foreground">{item}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4 flex-wrap">
        <span className="text-sm font-mono uppercase tracking-widest text-muted-foreground/50">Offene Standards:</span>
        {protocolBadges.map((badge) => (
          <span
            key={badge}
            className="text-sm font-mono uppercase tracking-wider px-3 py-1.5 border border-border/60 text-muted-foreground bg-card"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}
