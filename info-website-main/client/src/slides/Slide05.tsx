export const notes =
  "Stell 4 Supplement-Röhrchen auf den Tisch! Zwei vor dem Training morgen Mittag. Zwei vor dem Schlafengehen. Die hat unsere KI auf Basis meines Blutbilds empfohlen. Custom abgefüllt. Von mir persönlich getestet. Jetzt live durch die App führen — exodus-demo.vercel.app ist auf dem Bildschirm.";

export default function Slide05() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <iframe
        src="https://exodus-demo.vercel.app"
        title="Exodus App Demo"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
        }}
        allow="accelerometer; gyroscope"
      />
    </div>
  );
}
