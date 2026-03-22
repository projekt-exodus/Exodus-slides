export const notes =
  "Live durch die App führen — exodus-demo-app.vercel.app ist auf dem Bildschirm. WHOOP-Daten, Blutbild als PDF, KI-Auswertung zeigen. Stell die Supplementröhrchen auf den Tisch.";

export default function Slide05() {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center px-12 py-8"
      style={{ width: "100%", height: "100%" }}
    >
      <div className="flex items-center justify-center gap-16 w-full h-full">

        {/* Left: text + QR */}
        <div className="flex flex-col justify-center" style={{ width: "340px", flexShrink: 0 }}>
          <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground/40 mb-6">
            05 — Demo · Live
          </p>
          <h2 className="text-6xl font-bold tracking-tight mb-4 leading-tight">
            Exodus.<br />
            <span className="text-muted-foreground font-medium">Live.</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed" style={{ marginBottom: "40px" }}>
            Alle Gesundheitsdaten auf einen Blick — Laborwerte, Arztbriefe,
            Wearable-Daten. Strukturiert. Verständlich. Unter deiner Kontrolle.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {["Labor", "Fitness", "Arztbriefe", "Wearables"].map((tag) => (
              <span
                key={tag}
                className="text-sm font-mono px-3 py-1.5 border border-border bg-card text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href="https://exodus-demo-app.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-start gap-3 group"
          >
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https%3A%2F%2Fexodus-demo-app.vercel.app&bgcolor=ffffff&color=000000&margin=4"
              alt="QR Code: exodus-demo-app.vercel.app"
              width={200}
              height={200}
              className="border border-border shrink-0"
            />
            <p className="text-sm font-mono text-muted-foreground/60 group-hover:text-muted-foreground transition-colors">
              exodus-demo-app.vercel.app
            </p>
          </a>
        </div>

        {/* Phone mockup — centered, large */}
        <div className="flex items-center justify-center h-full py-2" style={{ flex: 1 }}>
          <div
            style={{
              aspectRatio: "9/19.5",
              height: "100%",
              maxHeight: "100%",
              background: "#0a0a0a",
              borderRadius: "52px",
              padding: "12px",
              boxShadow: "0 0 0 1px #444, 0 0 0 3px #111, 0 40px 100px rgba(0,0,0,0.7), inset 0 0 0 1px #222",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Dynamic island */}
            <div style={{ height: "40px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <div style={{ width: "100px", height: "24px", background: "#000", borderRadius: "20px" }} />
            </div>

            {/* Screen */}
            <div style={{ flex: 1, borderRadius: "36px", overflow: "hidden", background: "#fff" }}>
              <iframe
                src="https://exodus-demo-app.vercel.app"
                title="Exodus App Demo"
                style={{ width: "100%", height: "100%", border: "none", display: "block" }}
                allow="accelerometer; gyroscope"
              />
            </div>

            {/* Home indicator */}
            <div style={{ height: "32px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <div style={{ width: "110px", height: "4px", background: "#444", borderRadius: "4px" }} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
