export const notes =
  "Live durch die App führen — exodus-demo-app.vercel.app ist auf dem Bildschirm. WHOOP-Daten, Blutbild als PDF, KI-Auswertung zeigen. Stell die Supplementröhrchen auf den Tisch.";

export default function Slide05() {
  return (
    <div
      className="fixed inset-0 flex items-center px-16 py-10"
      style={{ width: "100%", height: "100%" }}
    >
      <div className="flex items-stretch gap-10 w-full h-full">
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40 mb-6">
            05 — Demo · Live
          </p>
          <h2 className="text-4xl font-bold tracking-tight mb-3 leading-tight">
            Exodus.<br />
            <span className="text-muted-foreground font-medium">Live.</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-sm">
            Alle Gesundheitsdaten auf einen Blick — Laborwerte, Arztbriefe,
            Wearable-Daten. Strukturiert. Verständlich. Unter deiner Kontrolle.
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
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
            className="flex flex-col items-start gap-2 group"
          >
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https%3A%2F%2Fexodus-demo-app.vercel.app&bgcolor=ffffff&color=000000&margin=4"
              alt="QR Code: exodus-demo-app.vercel.app"
              width={160}
              height={160}
              className="border border-border shrink-0"
            />
            <p className="text-[10px] font-mono text-muted-foreground/60 group-hover:text-muted-foreground transition-colors">
              exodus-demo-app.vercel.app
            </p>
          </a>
        </div>

        <div
          className="flex-shrink-0 rounded-sm overflow-hidden shadow-2xl border border-border"
          style={{ width: "48%", height: "100%" }}
        >
          <iframe
            src="https://exodus-demo-app.vercel.app"
            title="Exodus App Demo"
            className="border-0"
            style={{
              width: "100%",
              height: "100%",
              display: "block",
            }}
            allow="accelerometer; gyroscope"
          />
        </div>
      </div>
    </div>
  );
}
