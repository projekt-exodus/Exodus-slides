import { Sun, Moon } from "lucide-react";
import { lazy, Suspense, useState, useEffect, useRef, type ReactNode } from "react";
import { TableOfContents } from "@/components/TableOfContents";
import { MobileNav } from "@/components/MobileNav";
import { PrivacyNotice } from "@/components/PrivacyNotice";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ReadingProgress } from "@/components/ReadingProgress";

import SectionHero from "@/components/sections/SectionHero";
const SectionVision = lazy(() => import("@/components/sections/SectionVision"));
const SectionTeam = lazy(() => import("@/components/sections/SectionTeam"));
const SectionMarket = lazy(() => import("@/components/sections/SectionMarket"));
const SectionProblem = lazy(() => import("@/components/sections/SectionProblem"));
const SectionHow = lazy(() => import("@/components/sections/SectionHow"));
const SectionProduct = lazy(() => import("@/components/sections/SectionProduct"));
const SectionAgentLayer = lazy(() => import("@/components/sections/SectionAgentLayer"));
const SectionAIChoice = lazy(() => import("@/components/sections/SectionAIChoice"));
const SectionRevenue = lazy(() => import("@/components/sections/SectionRevenue"));
const SectionTech = lazy(() => import("@/components/sections/SectionTech"));
const SectionSecurity = lazy(() => import("@/components/sections/SectionSecurity"));
const SectionRegulation = lazy(() => import("@/components/sections/SectionRegulation"));
const SectionRoadmap = lazy(() => import("@/components/sections/SectionRoadmap"));
const SectionRisks = lazy(() => import("@/components/sections/SectionRisks"));
const SectionFAQ = lazy(() => import("@/components/sections/SectionFAQ"));
const SectionContact = lazy(() => import("@/components/sections/SectionContact"));

function SectionPlaceholder({ minHeight = 320 }: { minHeight?: number }) {
  return (
    <div aria-hidden="true" className="py-24 border-t border-border scroll-mt-8">
      <div
        className="w-full rounded-md border border-border/40 bg-muted/20 animate-pulse"
        style={{ minHeight }}
      />
    </div>
  );
}

function DeferredSection({
  anchorId,
  children,
  minHeight,
}: {
  anchorId: string;
  children: ReactNode;
  minHeight?: number;
}) {
  const [shouldRender, setShouldRender] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (shouldRender) return;

    const node = containerRef.current;
    if (!node) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setShouldRender(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: "500px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldRender]);

  return (
    <div ref={containerRef} id={shouldRender ? undefined : anchorId}>
      {shouldRender ? (
        <Suspense fallback={<SectionPlaceholder minHeight={minHeight} />}>
          {children}
        </Suspense>
      ) : (
        <SectionPlaceholder minHeight={minHeight} />
      )}
    </div>
  );
}

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;

    const storedTheme = localStorage.getItem("exodus-theme");
    if (storedTheme) return storedTheme === "dark";

    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("exodus-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <button
      type="button"
      data-testid="button-dark-mode-toggle"
      onClick={() => setIsDark((prev) => !prev)}
      aria-pressed={isDark}
      aria-label={isDark ? "Zum hellen Modus wechseln" : "Zum dunklen Modus wechseln"}
      className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase border border-border px-3 py-1.5 bg-background hover:bg-muted transition-colors duration-300"
    >
      {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
      {isDark ? "Light" : "Dark"}
    </button>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-foreground">
      <div className="fixed top-6 right-6 z-50 xl:right-40">
        <ThemeToggle />
      </div>

      <ReadingProgress />
      <TableOfContents />
      <MobileNav />
      <ScrollToTop />
      <PrivacyNotice />

      <main className="max-w-4xl mx-auto px-6 sm:px-12 xl:pr-24">
        <SectionHero />
        <DeferredSection anchorId="vision" minHeight={560}>
          <SectionVision />
        </DeferredSection>
        <DeferredSection anchorId="ai-choice" minHeight={460}>
          <SectionAIChoice />
        </DeferredSection>
        <DeferredSection anchorId="team" minHeight={460}>
          <SectionTeam />
        </DeferredSection>
        <DeferredSection anchorId="market" minHeight={380}>
          <SectionMarket />
        </DeferredSection>
        <DeferredSection anchorId="problem" minHeight={360}>
          <SectionProblem />
        </DeferredSection>
        <DeferredSection anchorId="how" minHeight={360}>
          <SectionHow />
        </DeferredSection>
        <DeferredSection anchorId="product" minHeight={420}>
          <SectionProduct />
        </DeferredSection>
        <DeferredSection anchorId="agent" minHeight={460}>
          <SectionAgentLayer />
        </DeferredSection>
        <DeferredSection anchorId="revenue" minHeight={360}>
          <SectionRevenue />
        </DeferredSection>
        <DeferredSection anchorId="tech" minHeight={420}>
          <SectionTech />
        </DeferredSection>
        <DeferredSection anchorId="security" minHeight={380}>
          <SectionSecurity />
        </DeferredSection>
        <DeferredSection anchorId="regulation" minHeight={360}>
          <SectionRegulation />
        </DeferredSection>
        <DeferredSection anchorId="roadmap" minHeight={520}>
          <SectionRoadmap />
        </DeferredSection>
        <DeferredSection anchorId="risks" minHeight={340}>
          <SectionRisks />
        </DeferredSection>
        <DeferredSection anchorId="faq" minHeight={360}>
          <SectionFAQ />
        </DeferredSection>
        <DeferredSection anchorId="contact" minHeight={260}>
          <SectionContact />
        </DeferredSection>
      </main>

      <footer className="max-w-4xl mx-auto px-6 sm:px-12 xl:pr-24 py-12 border-t border-border mt-16 text-sm text-muted-foreground">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <p className="font-medium text-foreground mb-1">Project Exodus</p>
            <p>Kontakt: exodus@servas.ai</p>
          </div>
          <div>
            <p className="font-medium text-foreground mb-1">Forschungspartner</p>
            <p>JKU Medizin · Kepler Uniklinikum · FH Gesundheitsberufe OÖ · tech2b</p>
          </div>
          <div>
            <p className="font-medium text-foreground mb-1">Dokument</p>
            <p>Stand: März 2026 · v3.0</p>
            <p className="text-xs mt-1 text-muted-foreground/70">Dokumentationsseite (kein Verkaufs-Funnel)</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
