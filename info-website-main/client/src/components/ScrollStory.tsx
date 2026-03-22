import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

interface StoryStep {
  label: string;
  subtitle: string;
}

interface ScrollStoryProps {
  steps: StoryStep[];
  currentStep: number;
  onStepChange: (step: number) => void;
  children: React.ReactNode;
}

export function ScrollStory({ steps, currentStep, onStepChange, children }: ScrollStoryProps) {
  return (
    <div className="relative">
      {/* Mobile: diagram on top (static, not sticky), steps below */}
      <div className="lg:hidden">
        <div className="mb-8">
          {children}
        </div>
        <div className="relative pl-8 border-l border-border ml-4">
          {steps.map((step, i) => (
            <ScrollStoryStep
              key={i}
              index={i}
              label={step.label}
              subtitle={step.subtitle}
              isActive={currentStep === i}
              isPast={currentStep > i}
              onEnter={() => onStepChange(i)}
            />
          ))}
        </div>
      </div>

      {/* Desktop: two-column — steps LEFT, diagram sticky RIGHT */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_1fr] lg:gap-12 xl:gap-16">
        <div className="relative pl-8 border-l border-border ml-4">
          {steps.map((step, i) => (
            <ScrollStoryStep
              key={i}
              index={i}
              label={step.label}
              subtitle={step.subtitle}
              isActive={currentStep === i}
              isPast={currentStep > i}
              onEnter={() => onStepChange(i)}
            />
          ))}
        </div>

        <div className="relative">
          <div className="sticky top-28" style={{ maxHeight: "calc(100vh - 8rem)" }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function ScrollStoryStep({
  index,
  label,
  subtitle,
  isActive,
  isPast,
  onEnter,
}: {
  index: number;
  label: string;
  subtitle: string;
  isActive: boolean;
  isPast: boolean;
  onEnter: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-35% 0px -35% 0px", once: false });

  useEffect(() => {
    if (isInView) {
      onEnter();
    }
  }, [isInView]);

  return (
    <div ref={ref} className="min-h-[35vh] lg:min-h-[45vh] flex items-start pt-8 relative" data-testid={`story-step-${index}`}>
      <div
        className={`absolute -left-[calc(1rem+4.5px)] top-8 w-[9px] h-[9px] rounded-full border-2 transition-all duration-500 ${
          isActive
            ? "bg-foreground border-foreground scale-125"
            : isPast
            ? "bg-foreground/40 border-foreground/40"
            : "bg-card border-border"
        }`}
      />

      <motion.div
        animate={{
          opacity: isActive ? 1 : isPast ? 0.4 : 0.25,
          y: isActive ? 0 : 8,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-md"
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-muted-foreground tracking-widest">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className={`font-mono text-xs uppercase tracking-widest transition-colors duration-500 ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
            {label}
          </span>
        </div>
        <p className={`text-base sm:text-lg lg:text-[1.15rem] font-light leading-relaxed transition-colors duration-500 ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      </motion.div>
    </div>
  );
}