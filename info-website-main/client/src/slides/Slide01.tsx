import { PhaseCard } from "@/components/sections/helpers";

export const notes =
  "Ich komme aus dem Leistungssport. LASK-Akademie. Dann Bundesheer, Rettungssanitäter. Jetzt studiere ich Physiotherapie an der FH Gesundheitsberufe OÖ. Ich habe Blutbilder. Arztbriefe. Wearable-Daten. Trainingslogs. Und keinen einzigen Ort, wo das alles zusammenkommt. Wenn das mir passiert — jemandem mit medizinischem Hintergrund — was passiert dann mit allen anderen?";

export default function Slide01() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-16 py-20 max-w-6xl mx-auto">
      <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40 mb-6">
        01 — Opener · Felix
      </p>

      <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight max-w-3xl">
        Ich bin Felix.<br />
        <span className="text-muted-foreground font-medium">Und das war mein Problem.</span>
      </h1>

      <p className="text-2xl font-medium text-muted-foreground mb-8 leading-snug max-w-2xl tracking-tight">
        Länger leben. Gesünder altern.<br />Präventive Gesundheit für alle.
      </p>

      <div className="flex flex-wrap gap-3 mb-10">
        {["Souverän", "KI-gestützt", "Klinisch fundiert"].map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-medium tracking-[0.12em] uppercase px-3 py-1 border border-border/60 text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <PhaseCard
          color="blue"
          label="Phase 1"
          text="Daten sammeln, strukturieren, anzeigen"
          testId="slide01-phase1"
        />
        <PhaseCard
          color="green"
          label="Sicherheit"
          text="Lokal verschlüsselt, optionaler EU-Sync"
          testId="slide01-security"
        />
        <PhaseCard
          color="violet"
          label="Phase 2"
          text="Evidence-to-Plan mit Clinician-in-the-Loop"
          testId="slide01-phase2"
        />
      </div>

      <div className="flex items-center gap-3">
        <div className="w-1 h-8 rounded-full bg-[var(--accent-blue)]" />
        <p className="text-lg font-medium text-muted-foreground">
          Aus Linz. Für alle.
        </p>
      </div>
    </div>
  );
}
