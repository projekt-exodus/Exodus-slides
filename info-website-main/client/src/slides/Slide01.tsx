export const notes =
  "Das ist Exodus — live. Links das Produkt, rechts die Vision. Alle Gesundheitsdaten an einem Ort, unter deiner Kontrolle.";

export default function Slide01() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {/* LEFT — Branding */}
      <div
        style={{
          flex: "0 0 50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 80px",
          gap: "32px",
          background: "#ffffff",
          borderRight: "1px solid var(--border)",
        }}
      >
        <img
          src="/exodus-logo-transparent.png"
          alt="Exodus Logo"
          style={{
            width: 180,
            height: 180,
            objectFit: "contain",
          }}
        />
        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              fontSize: "7rem",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              color: "#0A0A0A",
              marginBottom: "1.5rem",
            }}
          >
            EXODUS
          </h1>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "center" }}>
            {["Länger leben.", "Gesünder altern.", "Präventive Gesundheit für alle."].map((text, i) => (
              <p
                key={i}
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  color: "rgba(0,0,0,0.4)",
                  margin: 0,
                }}
              >
                {text}
              </p>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center", marginTop: "8px" }}>
          {["Souverän", "KI-gestützt", "Klinisch fundiert"].map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "0.7rem",
                fontFamily: "monospace",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "6px 14px",
                border: "1px solid rgba(0,0,0,0.15)",
                color: "rgba(0,0,0,0.45)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* RIGHT — Phone Mockup */}
      <div
        style={{
          flex: "0 0 50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
          background: "var(--diagram-bg, #f8f8f8)",
        }}
      >
        <div
          style={{
            aspectRatio: "9/19.5",
            height: "88%",
            maxHeight: "880px",
            background: "#0a0a0a",
            borderRadius: "52px",
            padding: "12px",
            boxShadow:
              "0 0 0 1px #444, 0 0 0 3px #111, 0 40px 100px rgba(0,0,0,0.35), inset 0 0 0 1px #222",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Dynamic island */}
          <div
            style={{
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: "100px",
                height: "24px",
                background: "#000",
                borderRadius: "20px",
              }}
            />
          </div>

          {/* Screen */}
          <div
            style={{
              flex: 1,
              borderRadius: "36px",
              overflow: "hidden",
              background: "#fff",
            }}
          >
            <iframe
              src="https://exodus-demo-app.vercel.app"
              title="Exodus App Demo"
              style={{ width: "100%", height: "100%", border: "none", display: "block" }}
              allow="accelerometer; gyroscope"
            />
          </div>

          {/* Home indicator */}
          <div
            style={{
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: "110px",
                height: "4px",
                background: "#444",
                borderRadius: "4px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
