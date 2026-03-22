export const notes =
  "Live durch die App führen — exodus-demo-app.vercel.app ist auf dem Bildschirm. WHOOP-Daten, Blutbild als PDF, KI-Auswertung zeigen. Stell die Supplementröhrchen auf den Tisch.";

export default function Slide05() {
  const border = 3;
  const padding = 7;
  const phoneWidth = 260;
  const innerWidth = phoneWidth - 2 * (border + padding);
  const scale = innerWidth / 390;
  const phoneHeight = Math.ceil(844 * scale + 2 * (border + padding));

  return (
    <div
      className="fixed inset-0 flex items-center justify-center px-16 py-10"
      style={{ width: "100%", height: "100%" }}
    >
      <div className="flex items-center gap-10 w-full max-w-5xl">
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40 mb-8">
            05 — Demo · Live
          </p>
          <h2 className="text-5xl font-bold tracking-tight mb-4 leading-tight">
            Exodus.<br />
            <span className="text-muted-foreground font-medium">Live.</span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-sm">
            Alle Gesundheitsdaten auf einen Blick — Laborwerte, Arztbriefe,
            Wearable-Daten. Strukturiert. Verständlich. Unter deiner Kontrolle.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Labor", "Fitness", "Arztbriefe", "Wearables"].map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2.5 py-1 border border-border bg-card text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href="https://exodus-demo-app.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https%3A%2F%2Fexodus-demo-app.vercel.app&bgcolor=ffffff&color=000000&margin=4"
              alt="QR Code: exodus-demo-app.vercel.app"
              width={80}
              height={80}
              className="border border-border shrink-0"
            />
            <p className="text-[10px] font-mono text-muted-foreground/60 group-hover:text-muted-foreground transition-colors">
              exodus-demo-app.vercel.app
            </p>
          </a>
        </div>

        <div className="flex-shrink-0">
          <div
            className="relative mx-auto border-foreground rounded-[40px] bg-foreground shadow-2xl"
            style={{ width: `${phoneWidth}px`, height: `${phoneHeight}px`, borderWidth: `${border}px`, borderStyle: 'solid', padding: `${padding}px` }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[20px] bg-foreground rounded-b-2xl z-10" />
            <div className="w-full h-full rounded-[33px] overflow-hidden bg-white relative">
              <iframe
                src="https://exodus-demo-app.vercel.app"
                title="Exodus App Demo"
                className="border-0"
                style={{
                  width: "390px",
                  height: "844px",
                  transform: `scale(${scale})`,
                  transformOrigin: "top left",
                  pointerEvents: "auto",
                }}
                allow="accelerometer; gyroscope"
              />
            </div>
            <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2 w-12 h-1 bg-white/30 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
