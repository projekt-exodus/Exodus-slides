import { motion } from "framer-motion";
import { PhaseCard, SectionLabel } from "./helpers";

export default function SectionHero() {
  return (
    <section id="hero" className="min-h-[85vh] flex flex-col justify-center pt-24 pb-16">
      <SectionLabel num={1} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-tight" data-testid="text-main-title">
          Project Exodus
        </h1>
        <p className="text-lg sm:text-2xl lg:text-3xl font-medium text-muted-foreground mb-8 leading-snug max-w-2xl tracking-tight">
          Länger leben. Gesünder altern.<br className="hidden sm:block" /> Präventive Gesundheit für alle.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-wrap gap-3 mb-8"
      >
        {["Souverän", "KI-gestützt", "Klinisch fundiert"].map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-medium tracking-[0.12em] uppercase px-3 py-1 border border-border/60 text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="text-base sm:text-lg font-medium leading-relaxed text-muted-foreground max-w-2xl mb-14"
      >
        Wir bauen die Infrastruktur für <strong className="text-foreground font-normal">präventive Gesundheit und Longevity</strong>:
        Alle Gesundheitsdaten an einem Ort, verständlich aufbereitet, mit KI-Unterstützung und ärztlicher Qualitätssicherung.
        Unser Ziel: Jeden Menschen dabei unterstützen, <strong className="text-foreground font-normal">lange gesund zu bleiben</strong> und
        selbstbestimmt die besten Entscheidungen für ein langes, vitales Leben zu treffen.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-14"
      >
        <PhaseCard color="blue" label="Phase 1" text="Daten sammeln, strukturieren, anzeigen" testId="card-phase1" />
        <PhaseCard color="green" label="Sicherheit" text="Lokal verschlüsselt, optionaler EU-Sync" testId="card-security" />
        <PhaseCard color="violet" label="Phase 2" text="Evidence-to-Plan mit Clinician-in-the-Loop" testId="card-phase2" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="border border-border/70 bg-card p-5 sm:p-6 mb-8"
        data-testid="quicknav"
      >
        <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-4">Direkt zu</p>
        <div className="flex flex-wrap gap-2">
          {[
            { label: "Vision & USP", href: "#vision", color: "var(--accent-blue)" },
            { label: "Team", href: "#team", color: "var(--accent-green)" },
            { label: "Problem & Lösung", href: "#problem", color: "var(--accent-amber)" },
            { label: "So funktioniert's", href: "#how", color: "var(--accent-violet)" },
            { label: "Produktpfade", href: "#product", color: "var(--accent-blue)" },
            { label: "Revenue", href: "#revenue", color: "var(--accent-green)" },
            { label: "Technologie", href: "#tech", color: "var(--accent-green)" },
            { label: "Sicherheit", href: "#security", color: "var(--accent-rose)" },
            { label: "Regulatorik", href: "#regulation", color: "var(--accent-amber)" },
            { label: "Roadmap", href: "#roadmap", color: "var(--accent-violet)" },
            { label: "Risiken", href: "#risks", color: "var(--accent-rose)" },
            { label: "FAQ", href: "#faq", color: "var(--accent-blue)" },
            { label: "Kontakt", href: "#contact", color: "var(--accent-green)" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex items-center gap-1.5 pl-2.5 pr-3 py-1.5 text-xs font-mono border border-border border-l-2 hover:bg-muted transition-colors"
              style={{ borderLeftColor: item.color }}
              data-testid={`quicknav-${item.href.slice(1)}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Hero Visual - Live App Demo */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="border border-border/70 bg-[var(--diagram-bg)] p-6 sm:p-8 mb-8"
        data-testid="hero-visual"
      >
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
            <div className="flex-1 text-center sm:text-left">
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-3">Live App Demo</p>
              <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-md">
                Alle deine Gesundheitsdaten auf einen Blick: Laborwerte, Arztbriefe, Wearable-Daten — strukturiert als Timeline, verständlich aufbereitet und immer in deiner Kontrolle.
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-4">
                {["Labor", "Fitness", "Arztbriefe", "Wearables"].map((tag) => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-0.5 border border-border bg-card">{tag}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="w-[320px] sm:w-[360px] mx-auto">
            <div className="relative mx-auto border-[3px] border-foreground rounded-[40px] p-[7px] bg-foreground shadow-2xl" style={{ height: '762px' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-[24px] bg-foreground rounded-b-2xl z-10" />
              <div className="w-full h-full rounded-[33px] overflow-hidden bg-white relative">
                <iframe
                              src="https://exodus-demo-app.vercel.app"
                  title="Project Exodus App Demo"
                  className="border-0 origin-top-left"
                  style={{
                    width: '390px',
                    height: '844px',
                    transform: `scale(${(360 - 14) / 390})`,
                    transformOrigin: 'top left',
                    pointerEvents: 'auto',
                  }}
                  allow="accelerometer; gyroscope"
                  loading="lazy"
                  data-testid="hero-app-iframe"
                />
              </div>
              <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 w-14 h-1 bg-white/30 rounded-full" />
            </div>
          </div>
        </div>
      </motion.div>


    </section>
  );
}
