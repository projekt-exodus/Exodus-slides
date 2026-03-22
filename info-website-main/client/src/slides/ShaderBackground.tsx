import { useEffect, useRef } from "react";

const DOT_SPACING = 28;
const DOT_RADIUS = 1.5;
const DOT_COLOR = "rgba(0, 0, 0, 0.12)";
const WAVE_AMPLITUDE = 0.9;
const WAVE_SCALE = 0.006;

const BEAT_PERIOD = 1600; // ms — synced with CSS pulse-beat

export default function ShaderBackground({ onScale }: { onScale?: (s: number) => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId: number;
    let w = 0;
    let h = 0;

    function resize() {
      if (!canvas || !ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    resize();

    function render(time: number) {
      if (!ctx) return;

      // Beat phase: 0→1→0 every BEAT_PERIOD ms (sine wave, same as CSS scale animation)
      const beatPhase = (Math.sin((time / BEAT_PERIOD) * Math.PI * 2 - Math.PI / 2) + 1) / 2;
      // beatPhase goes 0→1→0 per period

      // Emit scale for parent to sync heart image
      const scale = 1 + beatPhase * 0.12;
      onScale?.(scale);

      // Wave speed locked to beat period
      const WAVE_SPEED = (Math.PI * 2) / BEAT_PERIOD;
      const tScaled = time * WAVE_SPEED;

      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;

      const cols = Math.ceil(w / DOT_SPACING) + 2;
      const rows = Math.ceil(h / DOT_SPACING) + 2;
      const offsetX = ((w % DOT_SPACING) / 2) - DOT_SPACING;
      const offsetY = ((h % DOT_SPACING) / 2) - DOT_SPACING;
      const TAU = Math.PI * 2;

      // Pulse amplitude in sync with beat
      const amplitude = WAVE_AMPLITUDE * (0.4 + beatPhase * 1.2);
      const baseRadius = DOT_RADIUS * (0.8 + beatPhase * 0.5);

      for (let row = 0; row < rows; row++) {
        const y = offsetY + row * DOT_SPACING;
        const dy = y - cy;
        const dy2 = dy * dy;
        for (let col = 0; col < cols; col++) {
          const x = offsetX + col * DOT_SPACING;
          const dx = x - cx;
          const dist = Math.sqrt(dx * dx + dy2);

          const r = baseRadius + Math.sin(dist * WAVE_SCALE - tScaled) * amplitude;

          if (r > 0.2) {
            ctx.beginPath();
            ctx.arc(x, y, r, 0, TAU);
            ctx.fillStyle = DOT_COLOR;
            ctx.fill();
          }
        }
      }

      rafId = requestAnimationFrame(render);
    }

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
    };
  }, [onScale]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "block",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
