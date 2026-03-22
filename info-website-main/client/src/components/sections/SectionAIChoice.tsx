import { motion, useInView } from "framer-motion";
import { Monitor, Smartphone, Cloud, ShieldCheck, Wifi, Lock } from "lucide-react";
import { useRef } from "react";
import { SectionLabel } from "./helpers";

const categories = [
  {
    id: "local-mac",
    icon: <Monitor className="w-5 h-5" />,
    title: "Lokal auf Mac / PC",
    badge: "Maximale Privatsphäre",
    claim: "Daten verlassen nie dein Gerät",
    claimIcon: <Lock className="w-3.5 h-3.5" />,
    models: [
      { name: "Claude", provider: "via OpenClaw", privacy: "lokal", logo: "🤖" },
      { name: "Llama 3", provider: "via Ollama", privacy: "lokal", logo: "🦙" },
      { name: "LM Studio", provider: "lokale Modelle", privacy: "lokal", logo: "🖥" },
      { name: "Mistral", provider: "via Ollama", privacy: "lokal", logo: "🌬" },
    ],
    color: "var(--accent-violet)",
  },
  {
    id: "local-phone",
    icon: <Smartphone className="w-5 h-5" />,
    title: "Lokal auf dem Smartphone",
    badge: "On-Device · Empfohlen",
    claim: "Keine Internetverbindung nötig",
    claimIcon: <Wifi className="w-3.5 h-3.5" />,
    models: [
      { name: "Apple Intelligence", provider: "on-device", privacy: "lokal", logo: "🍎" },
      { name: "Gemma", provider: "Google · on-device", privacy: "lokal", logo: "💎" },
      { name: "Phi-3 Mini", provider: "Microsoft · on-device", privacy: "lokal", logo: "Φ" },
      { name: "Llama 3.2", provider: "Meta · on-device", privacy: "lokal", logo: "🦙" },
    ],
    color: "var(--accent-green)",
  },
  {
    id: "cloud",
    icon: <Cloud className="w-5 h-5" />,
    title: "Cloud-Modelle (opt-in)",
    badge: "Opt-in · Du entscheidest",
    claim: "Volle Kontrolle — du entscheidest wann und was geteilt wird",
    claimIcon: <ShieldCheck className="w-3.5 h-3.5" />,
    models: [
      { name: "GPT-4o", provider: "OpenAI", privacy: "cloud-opt-in", logo: "⚡" },
      { name: "Claude API", provider: "Anthropic", privacy: "cloud-opt-in", logo: "🤖" },
      { name: "Gemini Pro", provider: "Google", privacy: "cloud-opt-in", logo: "✦" },
      { name: "Eigenes Modell", provider: "Custom Endpoint", privacy: "cloud-opt-in", logo: "⚙" },
    ],
    color: "var(--accent-amber)",
  },
];

const privacyColors: Record<string, string> = {
  lokal: "var(--accent-green)",
  "cloud-opt-in": "var(--accent-amber)",
};

export default function SectionAIChoice() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ai-choice" className="py-24 border-t border-border scroll-mt-8">
      <SectionLabel num={3} />
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-5">
        Bring your own AI{" "}
        <span className="text-muted-foreground font-normal">Du wählst deine KI</span>
      </h2>

      <p className="text-muted-foreground mb-12 max-w-2xl text-base leading-relaxed">
        Exodus ist keine geschlossene Black Box. Der Health Vault ist eine offene Schnittstelle —
        du bestimmst selbst, welches KI-Modell deine Gesundheitsdaten analysiert:
        lokal auf deinem Mac, direkt auf dem Smartphone, oder cloud-basiert wenn du es explizit freigibst.
        Das ist datenschutzrechtlich entscheidend und technisch einzigartig.
      </p>

      <div
        className="inline-flex items-center gap-2 px-4 py-2 border-2 mb-10 text-sm font-medium"
        style={{ borderColor: "var(--accent-green)", color: "var(--accent-green)", backgroundColor: "var(--accent-green)0d" }}
        data-testid="badge-default-local"
      >
        <ShieldCheck className="w-4 h-4 shrink-0" />
        Default: 100% lokal — kein Cloud-Zwang
      </div>

      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: ci * 0.1 }}
            className="border border-border/70 bg-card flex flex-col"
            style={{ borderTopColor: cat.color, borderTopWidth: "3px" }}
            data-testid={`card-ai-category-${cat.id}`}
          >
            <div className="p-5 border-b border-border/70">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 flex items-center justify-center border shrink-0"
                  style={{ color: cat.color, borderColor: `${cat.color}40`, backgroundColor: `${cat.color}0d` }}
                >
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-sm font-normal leading-tight">{cat.title}</h3>
                  <span
                    className="text-[9px] font-mono uppercase tracking-wider mt-0.5 inline-block"
                    style={{ color: cat.color }}
                    data-testid={`badge-category-${cat.id}`}
                  >
                    {cat.badge}
                  </span>
                </div>
              </div>
              <div
                className="flex items-center gap-1.5 text-[11px] font-light px-3 py-1.5 border"
                style={{ color: cat.color, borderColor: `${cat.color}40`, backgroundColor: `${cat.color}08` }}
                data-testid={`claim-${cat.id}`}
              >
                <span className="shrink-0">{cat.claimIcon}</span>
                {cat.claim}
              </div>
            </div>

            <div className="p-5 flex-1">
              <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground/60 mb-3">
                Unterstützte Modelle
              </p>
              <div className="space-y-2">
                {cat.models.map((model, mi) => (
                  <div
                    key={mi}
                    className="flex items-center justify-between gap-2"
                    data-testid={`model-${cat.id}-${mi}`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span
                        className="shrink-0 w-6 h-6 flex items-center justify-center text-sm border"
                        style={{ borderColor: `${cat.color}30`, backgroundColor: `${cat.color}08` }}
                        aria-hidden="true"
                      >
                        {model.logo}
                      </span>
                      <div className="min-w-0">
                        <p className="text-[12px] font-normal leading-tight truncate">{model.name}</p>
                        <p className="text-[10px] text-muted-foreground font-light truncate">{model.provider}</p>
                      </div>
                    </div>
                    <span
                      className="text-[8px] font-mono uppercase tracking-wider px-1.5 py-0.5 border shrink-0"
                      style={{
                        color: privacyColors[model.privacy],
                        borderColor: `${privacyColors[model.privacy]}40`,
                        backgroundColor: `${privacyColors[model.privacy]}0d`,
                      }}
                      data-testid={`privacy-label-${cat.id}-${mi}`}
                    >
                      {model.privacy}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {[
          {
            icon: <Lock className="w-4 h-4" />,
            title: "DSGVO-konform",
            desc: "Daten gehen nur an die von dir gewählte KI — nie automatisch in die Cloud.",
            color: "violet",
          },
          {
            icon: <ShieldCheck className="w-4 h-4" />,
            title: "Du entscheidest",
            desc: "Modell jederzeit wechselbar. Zugriff pro Analyse explizit steuerbar.",
            color: "green",
          },
          {
            icon: <Smartphone className="w-4 h-4" />,
            title: "Lokal first",
            desc: "Default ist immer lokal. Cloud ist explizites Opt-in — kein heimliches Teilen.",
            color: "blue",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35, delay: 0.4 + i * 0.08 }}
            className="flex gap-3 p-4 border border-border/70 bg-card items-start"
            data-testid={`privacy-point-${i}`}
          >
            <span className="mt-0.5 shrink-0" style={{ color: `var(--accent-${item.color})` }}>
              {item.icon}
            </span>
            <div>
              <p className="text-[12px] font-normal mb-0.5">{item.title}</p>
              <p className="text-[11px] text-muted-foreground font-light leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div
        className="p-4 border-l-2 text-xs text-muted-foreground font-light leading-relaxed"
        style={{ borderColor: "var(--accent-blue)60", backgroundColor: "var(--accent-blue)06" }}
        data-testid="note-ai-choice"
      >
        <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: "var(--accent-blue)" }}>
          Technische Basis
        </span>
        <p className="mt-1">
          Der Health Vault implementiert ein offenes{" "}
          <strong className="text-foreground font-normal">API-Interface (MCP-kompatibel)</strong> — 
          jedes kompatible KI-Modell kann als Analyse-Engine eingebunden werden. 
          Die Daten verlassen den Vault nur mit expliziter Freigabe; 
          lokale Modelle erhalten direkten On-Device-Zugriff ohne Netzwerkkommunikation. 
          Details zum Sicherheitsmodell und den MCP-Skills:{" "}
          <button
            onClick={() => document.getElementById("agent")?.scrollIntoView({ behavior: "smooth" })}
            className="underline underline-offset-2 hover:text-foreground transition-colors cursor-pointer"
            data-testid="link-to-agent"
          >
            Agentic Layer
          </button>{" "}
          und{" "}
          <button
            onClick={() => document.getElementById("tech")?.scrollIntoView({ behavior: "smooth" })}
            className="underline underline-offset-2 hover:text-foreground transition-colors cursor-pointer"
            data-testid="link-to-tech"
          >
            Technologie
          </button>.
        </p>
      </div>
    </section>
  );
}
