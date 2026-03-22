import { motion, useInView } from "framer-motion";
import {
  Database, Smartphone, Stethoscope, ShieldCheck,
  Server, FlaskConical
} from "lucide-react";
import { useRef } from "react";
import { SectionLabel } from "./helpers";

export default function SectionProduct() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="product" className="py-24 border-t border-border scroll-mt-8">
      <SectionLabel num={8} />
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-5">
        Drei Produktpfade — ein Stufenmodell
      </h2>
      <p className="text-muted-foreground mb-12 max-w-2xl text-base leading-relaxed">
        Wir starten pragmatisch (Wellness-App) und bauen schrittweise klinische Funktionen aus.
        Jeder Pfad hat eine klare regulatorische Abgrenzung.
      </p>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          {
            step: "Pfad 1",
            title: "Health Data Wall",
            desc: "Dokumente importieren, strukturieren, anzeigen. Wellness-first, kein MDR notwendig.",
            tags: ["Kein MDR", "Sofort möglich"],
            color: "blue",
            icon: <Database className="w-5 h-5" />,
          },
          {
            step: "Pfad 2 ★",
            title: "Evidence-to-Plan",
            desc: "Literatur-RAG + Clinician-in-the-Loop. Arzt kann KI-Entwürfe freigeben, ändern oder ablehnen. \"Warum das?\"-Erklärkarten mit Safety-Logik.",
            tags: ["Empfohlen", "MDR IIa nötig"],
            color: "green",
            icon: <FlaskConical className="w-5 h-5" />,
          },
          {
            step: "Pfad 3",
            title: "Sovereign Health AI Stack",
            desc: "EU-/On-Prem LLM, De-Identification, Policy Engine, Audit-Logs. Volle digitale Souveränität.",
            tags: ["Langfristig", "Hohe Komplexität"],
            color: "violet",
            icon: <Server className="w-5 h-5" />,
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`p-6 border bg-card relative ${i === 1 ? "border-2" : "border-border/70"}`}
            style={i === 1 ? { borderColor: `var(--accent-${item.color})` } : {}}
            data-testid={`card-product-${i}`}
          >
            <div className="flex items-center gap-2 mb-4">
              <div style={{ color: `var(--accent-${item.color})` }}>{item.icon}</div>
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{item.step}</span>
            </div>
            <h3 className="font-semibold text-base tracking-tight mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag, ti) => (
                <span
                  key={ti}
                  className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <h3 className="text-xl font-semibold tracking-tight mb-6">Go-to-Market: Drei Phasen</h3>
      <div className="space-y-4 mb-6">
        {[
          {
            phase: "Phase 1",
            title: "Consumer App (Wellness/Vault)",
            desc: "Schneller Start, kein MDR. Export, Kommunikation, \"Arzt kontaktieren\". Supplements als paralleler Revenue-Stream.",
            color: "var(--accent-blue)",
            icon: <Smartphone className="w-4 h-4" />,
          },
          {
            phase: "Phase 2",
            title: "HCP-Modul (Physios/Ärzte)",
            desc: "KI-Planvorschläge nur mit ärztlicher Freigabe. Klinische Evidenz als Grundlage.",
            color: "var(--accent-green)",
            icon: <Stethoscope className="w-4 h-4" />,
          },
          {
            phase: "Phase 3",
            title: "Voll zertifiziertes MDR-Produkt",
            desc: "Perspektivisch erstattungsfähig. Vollständige klinische Validierung und CE-Kennzeichnung.",
            color: "var(--accent-violet)",
            icon: <ShieldCheck className="w-4 h-4" />,
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-start gap-4 p-5 border border-border/70 bg-card"
          >
            <div className="flex items-center justify-center w-8 h-8 border-2 rounded-full shrink-0" style={{ borderColor: item.color, color: item.color }}>
              {item.icon}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{item.phase}</span>
              </div>
              <h4 className="text-sm font-normal" style={{ color: item.color }}>{item.title}</h4>
              <p className="text-xs text-muted-foreground mt-1.5">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
