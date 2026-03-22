import { motion, useInView } from "framer-motion";
import {
  Cpu, Server, Eye, FileText, Smartphone, Layers,
  Database, Lock, ArrowRight, ArrowDown, Shield, EyeOff,
  BarChart3, FlaskConical, BookOpen, GraduationCap, Link2, Network
} from "lucide-react";
import { useRef } from "react";
import { SectionLabel } from "./helpers";
import {
  OpenAIIcon, AnthropicIcon, GeminiIcon, MetaIcon, MistralIcon,
  AppleIcon, GoogleHealthIcon, WHOOPIcon, OuraIcon, GarminIcon,
  StravaIcon, WithingsIcon, FitbitIcon, PolarIcon, DexcomIcon,
} from "@/components/brand-icons";

export default function SectionTech() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="tech" className="py-24 border-t border-border scroll-mt-8 section-alt">
      <SectionLabel num={11} />
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-5">
        Technologie & Infrastruktur
      </h2>
      <p className="text-muted-foreground mb-12 max-w-2xl text-base leading-relaxed">
        Entwicklung mit modernsten KI-Methoden, EU-konformes Hosting und volle Transparenz durch Explainable AI.
      </p>

      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {[
          { icon: <Cpu className="w-5 h-5" />, title: "KI-/Vibe-Coding", desc: "Entwicklung über Agent-Swarm: 20–30 KI-Agents arbeiten parallel an verschiedenen Modulen.", color: "blue" },
          { icon: <Server className="w-5 h-5" />, title: "EU-Hosting (DSGVO)", desc: "Netcup/Hetzner als Hosting-Partner. Kryptographische Datenspeicherung. Keine US-Cloud als Default.", color: "green" },
          { icon: <Eye className="w-5 h-5" />, title: "Erklärbare KI (EU-konform)", desc: "Jede KI-Empfehlung ist nachvollziehbar: \"Warum dieser Vorschlag?\" Open-Source-Modelle (Mistral, Llama 3, Gemma 2) — EU-gehostet, DSG-konform, kein US-Anbieter als Default.", color: "violet" },
          { icon: <FileText className="w-5 h-5" />, title: "Datenintegration", desc: "Import über Spike API, OCR/NLP-Pipeline. Audit-Logs für jede Datenverarbeitung.", color: "amber" },
          { icon: <Smartphone className="w-5 h-5" />, title: "Lokale KI-Modelle", desc: "On-Device KI: Modelle laufen direkt auf dem Gerät — deine Daten verlassen nie das Smartphone, maximale Privatsphäre.", color: "rose" },
          { icon: <Layers className="w-5 h-5" />, title: "KI frei wählbar", desc: "Lokal, on-device oder cloud-basiert — du wählst dein KI-Modell. Details im Abschnitt \"Bring your own AI\".", color: "blue" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35, delay: i * 0.08 }}
            className="p-6 border border-border/70 bg-card"
            data-testid={`card-tech-${i}`}
          >
            <div className="mb-3" style={{ color: `var(--accent-${item.color})` }}>{item.icon}</div>
            <h3 className="text-sm font-normal mb-2">{item.title}</h3>
            <p className="text-xs text-muted-foreground font-light leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="p-6 sm:p-8 border border-border/70 bg-[var(--diagram-bg)] mb-8" data-testid="diagram-extensions">
        <h3 className="font-semibold text-base tracking-tight mb-3">KI-Extensions: Offene Schnittstelle, kontrollierter Zugriff</h3>
        <p className="text-xs text-muted-foreground leading-relaxed mb-6 max-w-2xl">
          Der Vault funktioniert wie ein App-Store für KI: Verschiedene KI-Apps können als Extensions angebunden werden.
          Jede Extension bekommt nur die Daten, die du explizit freigibst — mit klarer Begrenzung nach Typ, Zeitraum und Zweck.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 max-w-3xl mx-auto">
          <div className="border-2 border-foreground p-4 bg-card w-full md:w-auto md:min-w-[160px] text-center shrink-0">
            <Database className="w-6 h-6 mx-auto mb-2" />
            <p className="text-sm font-medium">Health Vault</p>
            <p className="text-[10px] text-muted-foreground font-mono mt-1">Deine Daten</p>
          </div>

          <div className="flex flex-col items-center gap-1 shrink-0">
            <ArrowRight className="w-6 h-6 hidden md:block" style={{ color: "var(--accent-green)" }} />
            <ArrowDown className="w-6 h-6 md:hidden" style={{ color: "var(--accent-green)" }} />
            <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 border border-border bg-card">API</span>
            <Lock className="w-3 h-3" style={{ color: "var(--accent-green)" }} />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full">
            {[
              { name: "ChatGPT", sub: "OpenAI", color: "var(--accent-green)", logo: <OpenAIIcon size={16} /> },
              { name: "Claude", sub: "Anthropic", color: "var(--accent-violet)", logo: <AnthropicIcon size={16} /> },
              { name: "Gemini", sub: "Google", color: "var(--accent-blue)", logo: <GeminiIcon size={16} /> },
              { name: "Llama", sub: "Lokal/On-Device", color: "var(--accent-amber)", logo: <MetaIcon size={16} /> },
              { name: "Mistral", sub: "EU-hosted", color: "var(--accent-rose)", logo: <MistralIcon size={16} /> },
              { name: "Eigene KI", sub: "Custom Model", color: "var(--accent-blue)", logo: null },
            ].map((ext, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 px-3 py-2 border border-border bg-card"
                data-testid={`ext-${i}`}
              >
                <div className="shrink-0 flex items-center justify-center w-4 h-4" style={{ color: ext.color }}>
                  {ext.logo ?? <div className="w-2 h-2 rounded-full" style={{ backgroundColor: ext.color }} />}
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-medium leading-tight truncate">{ext.name}</p>
                  <p className="text-[9px] text-muted-foreground truncate">{ext.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-col sm:flex-row gap-3">
          {[
            { icon: <Shield className="w-3.5 h-3.5" />, text: "Jede Extension braucht deine Freigabe" },
            { icon: <Eye className="w-3.5 h-3.5" />, text: "Du siehst, welche Daten geteilt werden" },
            { icon: <EyeOff className="w-3.5 h-3.5" />, text: "Zugriff jederzeit widerrufbar" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-[10px] text-muted-foreground">
              <span style={{ color: "var(--accent-green)" }}>{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 sm:p-8 border border-border/70 bg-[var(--diagram-bg)] mb-8" data-testid="diagram-integrations">
        <h3 className="font-semibold text-base tracking-tight mb-3">Anbindungen & Schnittstellen</h3>
        <p className="text-xs text-muted-foreground leading-relaxed mb-8 max-w-2xl">
          Der Health Vault verbindet sich mit Wearables, KIS/ERP-Systemen, klinischen Standards, Forschungspartnern, wissenschaftlichen Datenbanken und offenen Protokollen.
        </p>

        <div className="flex flex-col items-center mb-10">
          <div className="w-24 h-24 border-2 border-foreground bg-card flex flex-col items-center justify-center">
            <Database className="w-7 h-7 mb-1" />
            <p className="text-[11px] font-medium">Health Vault</p>
            <p className="text-[8px] text-muted-foreground font-mono">Zentrale</p>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground">
            <span className="w-6 h-px bg-border" />
            <span>Anbindungen</span>
            <span className="w-6 h-px bg-border" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              key: "wearable",
              label: "Wearables & Fitness",
              color: "var(--accent-green)",
              items: [
                { name: "Apple Health", icon: <AppleIcon size={14} /> },
                { name: "Health Connect", icon: <GoogleHealthIcon size={14} /> },
                { name: "WHOOP", icon: <WHOOPIcon size={14} /> },
                { name: "Oura Ring", icon: <OuraIcon size={14} /> },
                { name: "Garmin Connect", icon: <GarminIcon size={14} /> },
                { name: "Strava", icon: <StravaIcon size={14} /> },
                { name: "Withings", icon: <WithingsIcon size={14} /> },
                { name: "Fitbit", icon: <FitbitIcon size={14} /> },
                { name: "Polar", icon: <PolarIcon size={14} /> },
                { name: "Dexcom CGM", icon: <DexcomIcon size={14} /> },
              ],
            },
            {
              key: "kis",
              label: "KIS & ERP-Systeme",
              color: "var(--accent-rose)",
              items: [
                { name: "CGM Clinical", icon: null },
                { name: "ORBIS (Dedalus)", icon: null },
                { name: "Meierhofer MCC", icon: null },
                { name: "medico (CGM)", icon: null },
                { name: "SAP IS-H", icon: null },
              ],
            },
            {
              key: "clinical",
              label: "Klinische Standards",
              color: "var(--accent-blue)",
              items: [
                { name: "ELGA", icon: null },
                { name: "FHIR R4", icon: null },
                { name: "HL7 v2 / CDA", icon: null },
                { name: "Spike API", icon: null },
                { name: "Laborsysteme (LIS)", icon: null },
                { name: "e-Medikation", icon: null },
                { name: "e-Befund", icon: null },
              ],
            },
            {
              key: "research",
              label: "Forschung & Bildung",
              color: "var(--accent-violet)",
              items: [
                { name: "JKU Medizin", icon: null },
                { name: "FH GBB OÖ", icon: null },
                { name: "Kepler Uniklinikum", icon: null },
              ],
            },
            {
              key: "evidence",
              label: "Wissen & Evidenz",
              color: "var(--accent-blue)",
              items: [
                { name: "PubMed / MEDLINE", icon: null },
                { name: "ClinicalTrials.gov", icon: null },
                { name: "Cochrane Library", icon: null },
                { name: "OpenAlex API", icon: null },
                { name: "Semantic Scholar", icon: null },
                { name: "Europe PMC", icon: null },
                { name: "SNOMED CT", icon: null },
                { name: "LOINC (Laborcodes)", icon: null },
                { name: "DrugBank / OpenFDA", icon: null },
                { name: "ICD-10 / ICD-11", icon: null },
                { name: "WHO IRIS", icon: null },
                { name: "Leitlinien.de (AWMF)", icon: null },
              ],
            },
            {
              key: "protocol",
              label: "Protokolle & Schnittstellen",
              color: "var(--accent-amber)",
              items: [
                { name: "MCP Protocol", icon: null },
                { name: "REST API", icon: null },
                { name: "Webhooks", icon: null },
                { name: "On-Device SDK", icon: null },
                { name: "OAuth 2.0 / SMART", icon: null },
              ],
            },
          ].map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: ci * 0.08 }}
              className="border border-border/70 bg-card p-6"
              style={{ borderLeftColor: cat.color, borderLeftWidth: "3px" }}
              data-testid={`cat-node-${cat.key}`}
            >
              <div className="flex items-center gap-2.5 mb-5">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />
                <h4 className="text-[11px] font-mono uppercase tracking-wider font-medium" style={{ color: cat.color }}>{cat.label}</h4>
              </div>
              <div className="space-y-1.5">
                {cat.items.map((item, ii) => (
                  <div key={ii} className="flex items-center gap-2" data-testid={`integration-${ci}-${ii}`}>
                    {item.icon && (
                      <span className="shrink-0 text-muted-foreground/70">{item.icon}</span>
                    )}
                    <p className="text-xs text-muted-foreground">{item.name}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="p-6 border border-border/70 bg-[var(--diagram-bg)]" data-testid="box-opendata">
        <div className="flex items-center gap-3 mb-4">
          <BarChart3 className="w-5 h-5" style={{ color: "var(--accent-green)" }} />
          <h3 className="text-sm font-normal">Open-Data-Substanz (data.gv.at)</h3>
        </div>
        <p className="text-xs text-muted-foreground font-light leading-relaxed mb-3">
          Öffentliche Datensätze als Bedarfs- und Impact-Beleg: chronische Erkrankungen, muskuloskelettale Beschwerden, Diabetes-Trend, Präsentismus.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Geo-/Infrastrukturdaten", "Sportstätten/Spielplätze", "basemap.at", "ELGA-nahe Strukturen", "Klima/Umwelt (Pollen)"].map((tag, i) => (
            <span key={i} className="text-[10px] font-mono px-2 py-0.5 border border-border bg-card">{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
