import { useState, useEffect } from "react";

interface TocSection {
  id: string;
  label: string;
  num: number;
}

const sections: TocSection[] = [
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

export function TableOfContents() {
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
    }
  };

  return (
    <nav
      className="fixed right-6 xl:right-10 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-1"
      data-testid="nav-toc"
    >
      <div className="relative flex flex-col items-end">
        <div className="absolute right-[5px] top-2 bottom-2 w-px bg-border" />

        {sections.map((s) => {
          const isActive = activeId === s.id;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => handleClick(s.id)}
              className="group flex items-center gap-3 py-2 relative"
              data-testid={`toc-link-${s.id}`}
            >
              <span
                className={`text-[11px] font-mono tracking-wide whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "text-foreground font-medium"
                    : "text-muted-foreground/50 group-hover:text-muted-foreground"
                }`}
              >
                <span className="text-muted-foreground/40 mr-1">{String(s.num).padStart(2, "0")}·</span>
                {s.label}
              </span>

              <div
                className={`relative z-10 w-[11px] h-[11px] rounded-full border-2 transition-all duration-300 ${
                  isActive
                    ? "scale-110 border-transparent"
                    : "bg-background border-border group-hover:border-muted-foreground"
                }`}
                style={
                  isActive
                    ? { backgroundColor: "var(--accent-blue)", borderColor: "var(--accent-blue)" }
                    : undefined
                }
              />
            </button>
          );
        })}
      </div>
    </nav>
  );
}
