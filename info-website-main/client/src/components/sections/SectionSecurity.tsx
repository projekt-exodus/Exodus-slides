import { motion } from "framer-motion";
import {
  Smartphone, Cloud, Shield, Lock, Wifi, WifiOff, Key,
  Database, Layers, RefreshCw, Search, Eye, EyeOff
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { FigureCaption, SectionLabel } from "./helpers";

export default function SectionSecurity() {
  const [syncOn, setSyncOn] = useState(false);
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = diagramRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { setSyncOn(entry.isIntersecting); },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="security" className="py-24 border-t border-border scroll-mt-8">
      <SectionLabel num={12} />
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-5">
        Datenschutz durch Architektur — nicht nur durch Text.
      </h2>
      <p className="text-muted-foreground mb-12 max-w-2xl text-base leading-relaxed">
        Gesundheitsdaten sind hochsensibel. Unser Grundprinzip: <strong className="text-foreground font-normal">Daten bleiben beim Nutzer</strong>.
        Synchronisation und Weitergabe passieren nur, wenn du es aktiv erlaubst.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {[
          { icon: <Smartphone className="w-6 h-6" />, title: "Lokal-by-Default", desc: "Daten werden primär lokal gespeichert (verschlüsselt). Die App bleibt auch offline nutzbar.", color: "blue" },
          { icon: <Cloud className="w-6 h-6" />, title: "Jede Cloud — deine Wahl", desc: "Sync ist optional. Du wählst selbst, welche Cloud du nutzt — unsere, deine eigene oder gar keine. Die Daten werden dort verschlüsselt gespeichert.", color: "green" },
          { icon: <Shield className="w-6 h-6" />, title: "Kontrollierte Freigaben", desc: "Datentyp, Zeitraum, Zweck, Dauer. Freigaben sind widerrufbar und nachvollziehbar.", color: "violet" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="p-6 border border-border/70 bg-card"
            data-testid={`card-security-${i}`}
          >
            <div className="mb-3" style={{ color: `var(--accent-${item.color})` }}>{item.icon}</div>
            <h3 className="font-semibold text-base tracking-tight mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div ref={diagramRef} className="border border-border bg-[var(--diagram-bg)] p-6 sm:p-8" data-testid="diagram-sync">
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Wo liegen die Daten?</p>
          <button
            onClick={() => setSyncOn(!syncOn)}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider border transition-all ${
              syncOn
                ? "border-[var(--accent-green)] text-[var(--accent-green)] bg-[var(--accent-green-bg)]"
                : "border-border text-muted-foreground hover:border-foreground/30"
            }`}
            data-testid="button-sync-toggle"
            aria-pressed={syncOn}
            aria-label={syncOn ? "Sync deaktivieren" : "Sync aktivieren"}
          >
            {syncOn ? <Wifi className="w-3.5 h-3.5" /> : <WifiOff className="w-3.5 h-3.5" />}
            Sync {syncOn ? "An" : "Aus"}
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 max-w-xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-20 h-28 border-2 border-foreground rounded-xl flex flex-col items-center justify-center bg-card">
              <Smartphone className="w-7 h-7 mb-1" strokeWidth={1.2} />
              <Database className="w-3.5 h-3.5 text-muted-foreground" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest mt-2">Dein Gerät</span>
            <span className="text-[10px] text-[var(--accent-green)] font-mono mt-0.5">Verschlüsselt</span>
          </div>

          <div className="flex-1 flex flex-col sm:flex-row items-center justify-center min-h-[40px] sm:min-h-0">
            <div className="hidden sm:block w-full h-px relative">
              <div className="absolute inset-0 transition-colors duration-500" style={{ backgroundColor: syncOn ? "var(--accent-green)" : "var(--border)" }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--diagram-bg)] px-2">
                {syncOn ? <Wifi className="w-4 h-4" style={{ color: "var(--accent-green)" }} /> : <WifiOff className="w-4 h-4 text-muted-foreground" />}
              </div>
            </div>
            <div className="sm:hidden w-px h-8 relative">
              <div className="absolute inset-0 w-px transition-colors duration-500" style={{ backgroundColor: syncOn ? "var(--accent-green)" : "var(--border)" }} />
            </div>
          </div>

          <motion.div animate={{ opacity: syncOn ? 1 : 0.3 }} transition={{ duration: 0.4 }} className="flex flex-col items-center">
            <div className="flex flex-col gap-2">
              {[
                { label: "Exodus Cloud", sub: "EU-hosted" },
                { label: "Eigene Cloud", sub: "self-hosted" },
                { label: "iCloud", sub: "Apple" },
                { label: "Google Drive", sub: "Google" },
                { label: "OneDrive", sub: "Microsoft" },
                { label: "Andere Cloud", sub: "AWS, Azure …" },
              ].map((cloud, ci) => (
                <motion.div
                  key={ci}
                  initial={{ opacity: 0, x: 8 }}
                  animate={syncOn ? { opacity: 1, x: 0 } : { opacity: 0.3, x: 0 }}
                  transition={{ duration: 0.3, delay: syncOn ? ci * 0.08 : 0 }}
                  className={`flex items-center gap-2 px-3 py-1.5 border rounded-lg bg-card transition-colors duration-500 ${syncOn ? "border-foreground/30" : "border-border/30"}`}
                >
                  <Cloud className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                  <div className="min-w-0">
                    <p className="text-[11px] font-medium leading-tight">{cloud.label}</p>
                    <p className="text-[9px] text-muted-foreground">{cloud.sub}</p>
                  </div>
                  {syncOn && <Lock className="w-3 h-3 shrink-0" style={{ color: "var(--accent-green)" }} />}
                </motion.div>
              ))}
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest mt-2">Deine Wahl</span>
            {syncOn && (
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] font-mono mt-0.5 flex items-center gap-1" style={{ color: "var(--accent-green)" }}>
                <Key className="w-3 h-3" /> Schlüssel bleibt lokal
              </motion.span>
            )}
          </motion.div>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-6">
          Du entscheidest, wo deine Daten gespeichert werden. Der Schlüssel bleibt immer bei dir.
        </p>
      </div>

      <FigureCaption number={3} title="Datenfluss: Device Vault → beliebige Cloud (Schlüssel bleibt lokal)" />

      <div className="mt-14">
        <h3 className="text-xl font-semibold tracking-tight mb-5">Wie funktionieren Freigaben?</h3>
        <p className="text-sm text-muted-foreground mb-6 max-w-2xl leading-relaxed">
          Wenn du Daten teilen möchtest — z.B. mit deinem Arzt oder einem Forschungsprojekt —
          kontrollierst du genau, was geteilt wird. Jede Freigabe ist granular und widerrufbar.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {[
            { label: "Datentyp", desc: "Welche Werte?", example: "z.B. nur Laborwerte", icon: <Layers className="w-4 h-4" /> },
            { label: "Zeitraum", desc: "Welcher Zeitraum?", example: "z.B. letzte 6 Monate", icon: <RefreshCw className="w-4 h-4" /> },
            { label: "Zweck", desc: "Wofür?", example: "z.B. Zweitmeinung", icon: <Search className="w-4 h-4" /> },
            { label: "Dauer", desc: "Wie lange gültig?", example: "z.B. 30 Tage", icon: <EyeOff className="w-4 h-4" /> },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-4 border border-border/70 bg-card text-center"
            >
              <div className="flex justify-center mb-2 text-muted-foreground">{item.icon}</div>
              <p className="text-xs font-normal mb-0.5">{item.label}</p>
              <p className="text-[10px] text-muted-foreground">{item.desc}</p>
              <p className="text-[10px] text-muted-foreground mt-1">{item.example}</p>
            </motion.div>
          ))}
        </div>

        <div className="p-4 border border-border/70 bg-[var(--diagram-bg)] flex items-start gap-3">
          <EyeOff className="w-4 h-4 shrink-0 mt-0.5 text-muted-foreground" />
          <p className="text-xs text-muted-foreground font-light leading-relaxed">
            <strong className="text-foreground font-medium">Widerruf jederzeit:</strong> Du kannst jede Freigabe jederzeit zurückziehen.
            Freigegebene Daten werden beim Empfänger als "nicht mehr verfügbar" markiert.
          </p>
        </div>
      </div>
    </section>
  );
}
