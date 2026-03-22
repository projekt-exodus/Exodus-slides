import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "hero", label: "Überblick", num: 1 },
  { id: "vision", label: "Vision & USP", num: 2 },
  { id: "ai-choice", label: "KI-Wahl", num: 3 },
  { id: "team", label: "Team", num: 4 },
  { id: "market", label: "Markt & Impact", num: 5 },
  { id: "problem", label: "Problem", num: 6 },
  { id: "how", label: "So funktioniert's", num: 7 },
  { id: "product", label: "Produktpfade", num: 8 },
  { id: "agent", label: "Agentic Layer", num: 9 },
  { id: "revenue", label: "Revenue", num: 10 },
  { id: "tech", label: "Technologie", num: 11 },
  { id: "security", label: "Sicherheit", num: 12 },
  { id: "regulation", label: "Regulatorik", num: 13 },
  { id: "roadmap", label: "Roadmap", num: 14 },
  { id: "risks", label: "Risiken", num: 15 },
  { id: "faq", label: "FAQ", num: 16 },
  { id: "contact", label: "Kontakt", num: 17 },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0 && visible[0].target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <div className="xl:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 text-xs font-mono tracking-widest uppercase border border-border px-3 py-1.5 bg-background hover:bg-muted transition-colors duration-300"
        aria-label={open ? "Navigation schließen" : "Navigation öffnen"}
        data-testid="button-mobile-nav"
      >
        {open ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
        {open ? "Schließen" : "Menü"}
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -200 }}
              transition={{ duration: 0.25 }}
              className="fixed top-0 left-0 bottom-0 z-40 w-64 bg-card border-r border-border pt-20 px-6 overflow-y-auto"
              data-testid="nav-mobile"
            >
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-4">Navigation</p>
              <div className="space-y-1">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => handleClick(s.id)}
                    className={`w-full text-left px-3 py-2 text-sm transition-colors flex items-center gap-2 ${
                      activeId === s.id
                        ? "text-foreground font-medium bg-muted"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                    data-testid={`mobile-nav-${s.id}`}
                  >
                    <span className="text-[10px] font-mono text-muted-foreground/40 shrink-0 w-5 text-right">
                      {String(s.num).padStart(2, "0")}
                    </span>
                    {s.label}
                  </button>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
