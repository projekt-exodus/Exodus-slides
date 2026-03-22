import { motion } from "framer-motion";
import { Watch, Heart, FileText, Bot, BookOpen, Network } from "lucide-react";

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay },
});

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
      <motion.p {...anim(0)} className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40 mb-4">
        04 — Connections · Martin
      </motion.p>

      <motion.h2 {...anim(0.05)} className="text-3xl sm:text-4xl font-bold tracking-tight mb-2 max-w-3xl leading-tight">
        Was Exodus verbindet — konkret.
      </motion.h2>
      <motion.p {...anim(0.08)} className="text-base text-muted-foreground mb-8 max-w-2xl">
        Alles auf offenen Standards. Kein proprietärer Lock-in.
      </motion.p>

      <motion.div {...anim(0.12)} className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {connections.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.12 + i * 0.06 }}
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
          </motion.div>
        ))}
      </motion.div>

      <motion.div {...anim(0.5)} className="flex items-center gap-3 flex-wrap">
        <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50">Offene Standards:</span>
        {protocolBadges.map((badge) => (
          <span
            key={badge}
            className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 border border-border/60 text-muted-foreground bg-card"
          >
            {badge}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
