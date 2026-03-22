import { motion, useInView } from "framer-motion";
import { Lock, Bot, Smartphone, ShoppingCart, FileCheck, ArrowDown, ShieldCheck, RotateCcw, UserCheck } from "lucide-react";
import { useRef } from "react";
import { SectionLabel } from "./helpers";

const flowSteps = [
  {
    icon: <Lock className="w-5 h-5" />,
    label: "Exodus Vault",
    sub: "Gesundheitsdaten, Laborwerte und Supplement-History liegen lokal verschlüsselt — kein Cloud-Zwang",
    color: "violet",
  },
  {
    icon: <Bot className="w-5 h-5" />,
    label: "Exodus Skill-Pack (MCP-Server)",
    sub: "Exodus stellt dem Agenten typsichere Funktionen bereit — OpenClaw bekommt ausschließlich explizit freigegebene Daten, niemals Rohdaten oder direkten Datenbankzugriff",
    color: "blue",
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    label: "OpenClaw Agent (lokal beim Nutzer)",
    sub: "Läuft auf dem eigenen Gerät oder Server — empfängt Befehle per WhatsApp, Telegram oder iMessage und führt sie autonom aus",
    color: "blue",
  },
  {
    icon: <ShoppingCart className="w-5 h-5" />,
    label: "Supplement-Shop (z.B. Biogena)",
    sub: "Browser-Automation: Agent öffnet den Shop, legt die empfohlenen Produkte in den Warenkorb — Bestellung wird erst nach Nutzer-Bestätigung ausgelöst",
    color: "green",
  },
  {
    icon: <FileCheck className="w-5 h-5" />,
    label: "Bestätigung & Vault-Log",
    sub: "Bestellbestätigung und Rechnung werden automatisch im Vault gespeichert — lückenlose Historie, jederzeit einsehbar",
    color: "violet",
  },
];

const skills = [
  {
    fn: "get_recommendations()",
    desc: "Liefert aktuelle, KI-generierte Supplement-Empfehlungen aus dem Vault — abgestimmt auf das persönliche Gesundheitsprofil",
    access: "read-only",
  },
  {
    fn: "get_health_context()",
    desc: "Gibt dem Agenten nur explizit freigegebene Gesundheitsdaten (z.B. spezifische Biomarker, Laborwerte) — kein Vollzugriff",
    access: "read-only",
  },
  {
    fn: "compare_supplements()",
    desc: "Vergleicht verfügbare Supplemente anhand freigegebener Laborwerte — gibt konkrete Empfehlung mit Begründung zurück (z.B. \u201eWelches Magnesium passt zu meinen aktuellen Blutwerten?\u201c)",
    access: "read-only",
  },
  {
    fn: "check_stock()",
    desc: "Prüft verfügbare und bereits bestellte Supplemente im Nutzerprofil — verhindert Doppelbestellungen",
    access: "read-only",
  },
  {
    fn: "place_order()",
    desc: "Löst Browser-Automation aus — öffnet den konfigurierten Shop und bereitet die Bestellung vor. Wird erst nach Nutzer-Bestätigung finalisiert",
    access: "action",
  },
  {
    fn: "log_to_vault()",
    desc: "Schreibt Bestätigung, Rechnung und Agenten-Aktionslog sicher in den Vault zurück",
    access: "write",
  },
];

export default function SectionAgentLayer() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="agent" className="py-24 border-t border-border scroll-mt-8 section-alt">
      <SectionLabel num={9} />
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-5">
        Agentic Layer{" "}
        <span className="text-muted-foreground font-medium">OpenClaw Integration</span>
      </h2>

      <div className="max-w-2xl mb-4">
        <p className="text-muted-foreground text-base leading-relaxed mb-3">
          <strong className="text-foreground font-medium">OpenClaw</strong> ist ein viraler Open-Source-KI-Agent
          des österreichischen Entwicklers Peter Steinberger — 100.000+ GitHub Stars in wenigen Wochen,
          eines der am schnellsten wachsenden Open-Source-Projekte überhaupt. Er läuft lokal auf dem
          eigenen Gerät und lässt sich per WhatsApp, Telegram oder iMessage steuern.
        </p>
        <p className="text-muted-foreground text-base leading-relaxed">
          Exodus wird als offizielles <strong className="text-foreground font-normal">OpenClaw Skill-Pack</strong> über
          ClawHub veröffentlicht — mit gesundheitsbezogenen Fähigkeiten für den Agenten, ohne dass OpenClaw
          je Rohdaten aus dem Vault zu sehen bekommt. Welches KI-Modell dabei zum Einsatz kommt, bleibt
          frei wählbar — lokal auf dem Gerät oder cloud-basiert per opt-in (
          <button
            onClick={() => document.getElementById("ai-choice")?.scrollIntoView({ behavior: "smooth" })}
            className="underline underline-offset-2 hover:text-foreground transition-colors"
            data-testid="link-agent-to-ai-choice"
          >
            Bring your own AI
          </button>
          ).
        </p>
      </div>

      <p className="text-xs font-mono text-muted-foreground/60 mb-12 uppercase tracking-wider">
        Geplant: Phase 2 (2027) · Konzeptuell / Pilotphase
      </p>

      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
        <div>
          <h3 className="font-semibold text-base tracking-tight mb-6">Datenfluss</h3>
          <div className="flex flex-col">
            {flowSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.35, delay: i * 0.1 }}
              >
                <div
                  className="flex gap-4 p-4 border border-border/70 bg-card"
                  data-testid={`flow-step-${i}`}
                >
                  <div
                    className="shrink-0 w-9 h-9 flex items-center justify-center border"
                    style={{
                      color: `var(--accent-${step.color})`,
                      borderColor: `var(--accent-${step.color})40`,
                      backgroundColor: `var(--accent-${step.color})08`,
                    }}
                  >
                    {step.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-normal leading-tight mb-0.5">{step.label}</p>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">{step.sub}</p>
                  </div>
                </div>
                {i < flowSteps.length - 1 && (
                  <div className="flex items-center justify-start pl-[18px] py-1">
                    <ArrowDown className="w-3 h-3 text-muted-foreground/40" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h3 className="font-semibold text-base tracking-tight mb-6">Skills (MCP-Tools)</h3>
            <div className="border border-border/70 overflow-hidden">
              <div className="px-4 py-2 bg-[var(--diagram-bg)] border-b border-border/70 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                <span className="text-[10px] font-mono text-muted-foreground/60 ml-2">exodus_skill_pack.ts</span>
              </div>
              <div className="bg-[var(--diagram-bg)] p-4 space-y-3">
                {skills.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.07 }}
                    className="flex flex-col gap-0.5"
                    data-testid={`skill-row-${i}`}
                  >
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className="text-[11px] font-mono"
                        style={{
                          color: s.access === "read-only"
                            ? "var(--accent-blue)"
                            : s.access === "write"
                            ? "var(--accent-violet)"
                            : "var(--accent-green)",
                        }}
                      >
                        {s.fn}
                      </span>
                      <span
                        className="text-[8px] font-mono uppercase tracking-wider px-1.5 py-0.5 border"
                        style={{
                          color: s.access === "read-only"
                            ? "var(--accent-blue)"
                            : s.access === "write"
                            ? "var(--accent-violet)"
                            : "var(--accent-green)",
                          borderColor: s.access === "read-only"
                            ? "var(--accent-blue)40"
                            : s.access === "write"
                            ? "var(--accent-violet)40"
                            : "var(--accent-green)40",
                        }}
                      >
                        {s.access}
                      </span>
                    </div>
                    <p className="text-[10px] text-muted-foreground/70 font-light leading-snug">
                      {s.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-5 border border-border/70 bg-card">
            <h3 className="font-semibold text-sm tracking-tight mb-4">Sicherheitsmodell</h3>
            <div className="space-y-3">
              {[
                {
                  icon: <ShieldCheck className="w-4 h-4 shrink-0" />,
                  text: "OpenClaw läuft lokal beim Nutzer — persönliche Daten verlassen das Gerät nicht. Exodus' Vault liefert nur explizit freigegebene Daten über MCP; kein Direktzugriff auf die Datenbank.",
                  color: "violet",
                },
                {
                  icon: <RotateCcw className="w-4 h-4 shrink-0" />,
                  text: "Jede Agenten-Aktion wird im Vault geloggt und kann vom Nutzer eingesehen, storniert oder rückgängig gemacht werden — vollständige Transparenz.",
                  color: "blue",
                },
                {
                  icon: <UserCheck className="w-4 h-4 shrink-0" />,
                  text: "Bestellungen werden vorbereitet, aber erst nach expliziter Nutzer-Bestätigung ausgelöst (opt-in). Kein autonomes Bestellen ohne Freigabe.",
                  color: "green",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span style={{ color: `var(--accent-${item.color})` }} className="mt-0.5">{item.icon}</span>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="p-5 border-l-2 text-xs text-muted-foreground font-light leading-relaxed"
        style={{ borderColor: "var(--accent-violet)60", backgroundColor: "var(--accent-violet)06" }}
      >
        <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: "var(--accent-violet)" }}>
          Technische Basis &amp; Distribution
        </span>
        <p className="mt-1">
          Exodus implementiert einen <strong className="text-foreground font-normal">MCP-Server</strong> (Model Context Protocol) —
          die standardisierte Schnittstelle zwischen KI-Agenten und externen Tools. Das Skill-Pack wird
          über <strong className="text-foreground font-normal">ClawHub</strong> (das offizielle OpenClaw Skill-Verzeichnis mit 5.400+ Skills)
          veröffentlicht und ist per <code className="font-mono">clawhub install exodus</code> in Minuten installiert.
          Der Agent authentifiziert sich mit einem nutzerspezifischen Token — kein direkter Datenbankzugriff,
          keine Rohdaten, nur explizit definierte Funktionsaufrufe.
        </p>
      </div>
    </section>
  );
}
