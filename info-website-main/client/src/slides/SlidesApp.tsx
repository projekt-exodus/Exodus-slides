import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Sun, Moon } from "lucide-react";
import { Link } from "wouter";

import Slide01 from "./Slide01";
import Slide02 from "./Slide02";
import Slide03 from "./Slide03";
import Slide04 from "./Slide04";
import Slide05 from "./Slide05";
import Slide06 from "./Slide06";
import Slide07 from "./Slide07";
import Slide08 from "./Slide08";
import Slide09 from "./Slide09";
import Slide10 from "./Slide10";

const SLIDES = [
  { component: Slide01, title: "Opener", speaker: "Felix", notes: "Ich komme aus dem Leistungssport. LASK-Akademie. Dann Bundesheer, Rettungssanitäter. Jetzt studiere ich Physiotherapie an der FH Gesundheitsberufe OÖ. Ich habe Blutbilder. Arztbriefe. Wearable-Daten. Trainingslogs. Und keinen einzigen Ort, wo das alles zusammenkommt. Wenn das mir passiert — jemandem mit medizinischem Hintergrund — was passiert dann mit allen anderen?" },
  { component: Slide02, title: "Problem", speaker: "Felix", notes: "Arztbrief vom Kepler Uniklinikum: PDF irgendwo. Laborwerte: ausgedruckt in einem Ordner. Schlafdaten: in einer US-Cloud, der ich nie zugestimmt habe. Beim nächsten Arzttermin — fangen wir wieder von vorne an. Fünf Millionen Menschen in Österreich haben chronische Erkrankungen. Nicht weil es zu wenig Daten gibt — sondern weil die Daten nirgendwo zusammenarbeiten. Martin, was haben wir gebaut?" },
  { component: Slide03, title: "Lösung & USPs", speaker: "Martin", notes: "Wir bauen keine neue Gesundheits-App. Wir bauen den Ort, an dem alle anderen zusammenkommen. USP 1: Alles an einem Ort. USP 2: Bring Your Own AI — du wählst, welche KI deine Daten analysiert. Standard ist immer lokal. USP 3: Persönlicher Gesundheits-Agent — OpenClaw arbeitet für dich, nicht für uns." },
  { component: Slide04, title: "Connections", speaker: "Martin", notes: "Wearables & Fitness: Apple Health, WHOOP, Oura Ring, Garmin, Dexcom CGM. Labor & Befunde: ELGA, FHIR R4, Spike API, e-Befund. Klinische Systeme: Arztbriefe, Medikationspläne via HL7. KI-Agenten: OpenClaw lokal. Wissen & Evidenz: PubMed, Cochrane Library, SNOMED CT. Protokolle: MCP, REST API, OAuth 2.0. Felix, zeig ihnen jetzt, was das in der Praxis bedeutet." },
  { component: Slide05, title: "Demo", speaker: "Felix", notes: "Stell 4 Supplement-Röhrchen auf den Tisch! Zwei vor dem Training morgen Mittag. Zwei vor dem Schlafengehen. Die hat unsere KI auf Basis meines Blutbilds empfohlen. Custom abgefüllt. Von mir persönlich getestet. Jetzt App öffnen: Health Data Wall, Labor-Tab, Erklärkarte Vitamin D, dann die Empfehlung." },
  { component: Slide06, title: "USP & Wettbewerb", speaker: "Felix + Martin", notes: "Felix: Ich habe Apple Health. Ich habe WHOOP. Ich habe Oura. Die reden alle nicht miteinander. Keine zeigt mir Laborwerte. Keine hat ärztliche Freigabe. Und bei keiner darf ich selbst entscheiden, welche KI meine Daten sieht. Martin (15 Sekunden): Kein anderer Anbieter weltweit kombiniert lokale KI by default, offenen Agentic Layer, EU-DSGVO als Architektur und den Supplement-Kanal in einer Plattform." },
  { component: Slide07, title: "Team", speaker: "Felix", notes: "Wir kommen alle aus OÖ. Wir studieren alle an Institutionen aus Linz. Und wir nutzen alle das Produkt selbst — weil es unser Problem ist. Hannah: CEO & Operations. Paula: Sales & Medizintechnik. Felix: COO & Sales. Martin: CTO. Plus David Kraus für Cybersecurity. LOIs in Vorbereitung: JKU, Kepler, FH Gesundheitsberufe OÖ." },
  { component: Slide08, title: "Revenue", speaker: "Felix", notes: "Die ersten Connections sind kostenlos — erste Wearables, erste Laborwerte. Wer mehr verbinden will, mehr automatisieren, mehr Agenten nutzen — zahlt monatlich. Und der Preis wächst mit dem Wert. Dazu: Supplements, personalisiert aus dem Profil — Röhrchen kurz zeigen — und ärztliche Beratung auf Datenbasis." },
  { component: Slide09, title: "Traction & Förderungen", speaker: "Martin", notes: "Während Felix den Prototyp gebaut und getestet hat, haben wir parallel die Förderstruktur aufgesetzt. aws First Incubator: eingereicht. FFG Projekt.Start: eingereicht. FFG Kleinprojekt: Deadline 10. Mai — das ist in wenigen Wochen. Kumuliertes Potenzial: über 400.000 Euro. tech2b in der Tabakfabrik Linz ist unser geplanter nächster Schritt. Felix, bring das jetzt nach Hause." },
  { component: Slide10, title: "Closing & QR-Code", speaker: "Felix", notes: "Wir bauen nicht die nächste App. Wir bauen die Infrastruktur, auf der KI-Agenten für dich arbeiten können — mit deinen Daten, unter deiner Kontrolle. FH Gesundheitsberufe, Kepler, JKU, tech2b — alles hier. Prototype läuft. Förderungen laufen. Team steht. Supplements liegen auf dem Tisch. Scannt den QR-Code. Schreibt uns." },
];

export default function SlidesApp() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return true;
    const stored = localStorage.getItem("exodus-theme");
    if (stored) return stored === "dark";
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("exodus-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const goNext = useCallback(() => {
    if (current < SLIDES.length - 1) {
      setDirection(1);
      setCurrent((c) => c + 1);
    }
  }, [current]);

  const goPrev = useCallback(() => {
    if (current > 0) {
      setDirection(-1);
      setCurrent((c) => c - 1);
    }
  }, [current]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "s" || e.key === "S") {
        setShowNotes((v) => !v);
      } else if (e.key === "Escape") {
        setShowNotes(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  const slide = SLIDES[current];
  const SlideComponent = slide.component;

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div className="fixed inset-0 bg-background text-foreground overflow-hidden select-none">
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="absolute inset-0 overflow-auto"
        >
          <SlideComponent />
        </motion.div>
      </AnimatePresence>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">
        <button
          onClick={goPrev}
          disabled={current === 0}
          className="w-9 h-9 flex items-center justify-center border border-border bg-background/90 hover:bg-muted transition-colors disabled:opacity-30"
          aria-label="Vorherige Folie"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <span className="text-xs font-mono text-muted-foreground bg-background/90 px-3 py-1.5 border border-border">
          {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
        </span>
        <button
          onClick={goNext}
          disabled={current === SLIDES.length - 1}
          className="w-9 h-9 flex items-center justify-center border border-border bg-background/90 hover:bg-muted transition-colors disabled:opacity-30"
          aria-label="Nächste Folie"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="fixed top-4 right-4 flex items-center gap-2 z-50">
        <button
          onClick={() => setIsDark((d) => !d)}
          className="w-8 h-8 flex items-center justify-center border border-border bg-background/90 hover:bg-muted transition-colors text-muted-foreground"
          aria-label="Theme wechseln"
        >
          {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
        </button>
        <button
          onClick={() => setShowNotes((v) => !v)}
          className="text-[10px] font-mono uppercase tracking-widest border border-border bg-background/90 hover:bg-muted transition-colors text-muted-foreground px-2.5 py-1.5"
          title="Speaker Notes (S)"
        >
          Notes
        </button>
        <Link href="/">
          <button className="w-8 h-8 flex items-center justify-center border border-border bg-background/90 hover:bg-muted transition-colors text-muted-foreground">
            <X className="w-3.5 h-3.5" />
          </button>
        </Link>
      </div>

      <div className="fixed top-4 left-4 z-50">
        <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50">
          {slide.speaker}
        </span>
      </div>

      {showNotes && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-20 left-4 right-4 max-w-2xl mx-auto z-50"
        >
          <div className="bg-background border-2 border-[var(--accent-amber)] p-4 shadow-2xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "var(--accent-amber)" }}>
                Speaker Notes — {slide.title} ({slide.speaker})
              </span>
              <button onClick={() => setShowNotes(false)} className="text-muted-foreground hover:text-foreground">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{slide.notes}</p>
          </div>
        </motion.div>
      )}

      <div className="fixed bottom-6 right-4 z-50">
        <span className="text-[9px] font-mono text-muted-foreground/30 uppercase tracking-widest">
          ← → Space · S=Notes
        </span>
      </div>
    </div>
  );
}
