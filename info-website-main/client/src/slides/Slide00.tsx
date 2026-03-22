export const notes =
  "Willkommen zu EXODUS — Länger leben. Gesünder altern. Präventive Gesundheit für alle.";

export default function Slide00() {
  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center"
      style={{ background: "var(--background)", width: "100%", height: "100%" }}
    >
      <h1
        className="font-black tracking-tighter leading-none mb-8 text-center"
        style={{ fontSize: "clamp(6rem, 18vw, 14rem)", letterSpacing: "-0.04em" }}
      >
        EXODUS
      </h1>
      <div className="flex flex-col items-center gap-3">
        <p className="text-xl font-medium tracking-tight text-muted-foreground">Länger leben.</p>
        <p className="text-xl font-medium tracking-tight text-muted-foreground">Gesünder altern.</p>
        <p className="text-xl font-medium tracking-tight text-muted-foreground">Präventive Gesundheit für alle.</p>
      </div>
    </div>
  );
}
