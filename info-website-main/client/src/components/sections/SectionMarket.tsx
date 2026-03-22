import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, Globe, BarChart3, ExternalLink } from "lucide-react";
import { useRef } from "react";
import { SectionLabel } from "./helpers";

function Src({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-0.5 text-[9px] font-mono text-muted-foreground/60 hover:text-muted-foreground transition-colors underline underline-offset-2"
    >
      {label}
      <ExternalLink className="w-2 h-2" />
    </a>
  );
}

export default function SectionMarket() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="market" className="py-24 border-t border-border scroll-mt-8 section-alt">
      <SectionLabel num={5} />
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-5">
        Markt & Impact
      </h2>
      <p className="text-muted-foreground mb-12 max-w-2xl text-base leading-relaxed">
        Der Digital-Health-Markt wächst rasant. Chronische Erkrankungen, fragmentierte Daten und steigende Gesundheitskosten
        schaffen enormen Bedarf für integrierte Lösungen.
      </p>

      <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {[
          {
            value: "$ 549 Mrd.",
            label: "Globaler Digital Health Markt 2028",
            sub: "Basis: 180 Mrd. USD (2023) · CAGR ~25 %",
            icon: <Globe className="w-5 h-5" />,
            color: "var(--accent-blue)",
            srcLabel: "MarketsandMarkets 2024",
            srcHref: "https://www.marketsandmarkets.com/Market-Reports/digital-health-market-203656451.html",
          },
          {
            value: "€ 11 Mrd.",
            label: "EU Digital Health 2023 → € 61 Mrd. (2035)",
            sub: "CAGR ~15,1 % · Prognose EU-Kommission",
            icon: <TrendingUp className="w-5 h-5" />,
            color: "var(--accent-green)",
            srcLabel: "EU-Kommission 2026",
            srcHref: "https://health.ec.europa.eu/ehealth-interoperability-standards/overview_en",
          },
          {
            value: "~5,6 Mio.",
            label: "Chronisch Erkrankte in Österreich",
            sub: "~66 % der Bev. ab 15 J. · Statistik Austria",
            icon: <Users className="w-5 h-5" />,
            color: "var(--accent-amber)",
            srcLabel: "Gesundheitsbericht AT 2024",
            srcHref: "https://www.statistik.at/statistiken/bevoelkerung-und-soziales/gesundheit",
          },
          {
            value: "€ 57,8 Mrd.",
            label: "Gesundheitsausgaben Österreich 2024",
            sub: "Laufende Ausgaben gesamt · Tendenz steigend",
            icon: <BarChart3 className="w-5 h-5" />,
            color: "var(--accent-violet)",
            srcLabel: "Statistik Austria 2024",
            srcHref: "https://www.statistik.at/statistiken/bevoelkerung-und-soziales/gesundheit/gesundheitsausgaben",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35, delay: i * 0.08 }}
            className="p-5 border border-border/70 bg-card flex flex-col gap-2"
            data-testid={`card-market-${i}`}
          >
            <div style={{ color: item.color }}>{item.icon}</div>
            <p className="text-xl sm:text-2xl font-semibold tracking-tight" style={{ color: item.color }}>{item.value}</p>
            <p className="text-xs font-normal leading-snug">{item.label}</p>
            <p className="text-[10px] text-muted-foreground leading-snug">{item.sub}</p>
            <Src label={item.srcLabel} href={item.srcHref} />
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-6 border border-border/70 bg-card">
          <h3 className="font-semibold text-base tracking-tight mb-3">Adressierbarer Markt (Österreich)</h3>
          <div className="space-y-3">
            {[
              { label: "TAM", desc: "Gesamtmarkt Digital Health AT", value: "~€ 1,2 Mrd.", color: "var(--accent-blue)" },
              { label: "SAM", desc: "Health-Data + Supplement-Segment", value: "~€ 180 Mio.", color: "var(--accent-green)" },
              { label: "SOM", desc: "Erreichbar in 3–5 Jahren", value: "~€ 5–15 Mio.", color: "var(--accent-violet)" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-[var(--diagram-bg)] border border-border">
                <div className="w-1 h-10 rounded-full" style={{ backgroundColor: item.color }} />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider" style={{ color: item.color }}>{item.label}</span>
                    <span className="text-xs text-muted-foreground font-light">{item.desc}</span>
                  </div>
                  <p className="text-base font-semibold mt-0.5">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 border border-border/70 bg-card">
          <h3 className="font-semibold text-base tracking-tight mb-3">Bedarfsindikatoren</h3>
          <div className="space-y-3">
            {[
              {
                stat: "66 %",
                desc: "der Österreicher:innen ab 15 J. haben mind. eine chronische Erkrankung oder ein Gesundheitsproblem",
                srcLabel: "Statistik Austria / Gesundheitsbericht 2024",
                srcHref: "https://www.statistik.at/statistiken/bevoelkerung-und-soziales/gesundheit",
              },
              {
                stat: "~2 Mio.",
                desc: "Personen mit Beschwerden am Bewegungsapparat in Österreich (mind. 1× jährlich)",
                srcLabel: "Statistik Austria",
                srcHref: "https://www.statistik.at/statistiken/bevoelkerung-und-soziales/gesundheit/beschwerden-und-erkrankungen",
              },
              {
                stat: "€ 3,5+ Mrd.",
                desc: "Wertschöpfungsverlust durch Präsentismus und arbeitsbedingte Erkrankungen in Österreich",
                srcLabel: "WIFO-Studie 2017",
                srcHref: "https://www.wifo.ac.at/publikationen/wifo_working_papers?detail-view=yes&publikation_id=60586",
              },
              {
                stat: "€ 57,8 Mrd.",
                desc: "Laufende Gesundheitsausgaben Österreich 2024 — Tendenz stark steigend",
                srcLabel: "Statistik Austria 2024",
                srcHref: "https://www.statistik.at/statistiken/bevoelkerung-und-soziales/gesundheit/gesundheitsausgaben",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-base font-semibold shrink-0 w-20 text-right" style={{ color: "var(--accent-rose)" }}>{item.stat}</span>
                <div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  <Src label={item.srcLabel} href={item.srcHref} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
