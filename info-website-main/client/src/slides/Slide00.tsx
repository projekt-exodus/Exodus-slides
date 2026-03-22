import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import ShaderBackground, { ShaderBackgroundHandle } from "./ShaderBackground";

export const notes =
  "Willkommen zu EXODUS — Länger leben. Gesünder altern. Präventive Gesundheit für alle.";

export interface Slide00Handle {
  onEnter: () => void;
}

const Slide00 = forwardRef<Slide00Handle>(function Slide00(_props, ref) {
  const rootRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const shaderRef = useRef<ShaderBackgroundHandle>(null);
  const burstActiveRef = useRef(false);
  const burstTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const section = el.closest("section");
    if (section) {
      section.setAttribute("data-background-color", "#ffffff");
    }
    const timer = setTimeout(() => setVisible(true), 100);
    return () => {
      clearTimeout(timer);
      if (section) section.removeAttribute("data-background-color");
    };
  }, []);

  function triggerBurstAnimation() {
    shaderRef.current?.triggerBurst();
    const logo = logoRef.current;
    if (logo) {
      if (burstTimeoutRef.current !== null) {
        clearTimeout(burstTimeoutRef.current);
        burstTimeoutRef.current = null;
      }
      burstActiveRef.current = true;
      logo.style.transform = "";
      logo.classList.remove("logo-burst");
      void logo.offsetWidth;
      logo.classList.add("logo-burst");
      burstTimeoutRef.current = setTimeout(() => {
        burstActiveRef.current = false;
        burstTimeoutRef.current = null;
        if (logo) logo.classList.remove("logo-burst");
      }, 1500);
    }
  }

  useImperativeHandle(ref, () => ({
    onEnter: triggerBurstAnimation,
  }));

  useEffect(() => {
    return () => {
      if (burstTimeoutRef.current !== null) {
        clearTimeout(burstTimeoutRef.current);
      }
    };
  }, []);

  const onScale = useCallback((scale: number) => {
    if (logoRef.current && !burstActiveRef.current) {
      logoRef.current.style.transform = `scale(${scale})`;
    }
  }, []);

  return (
    <div
      ref={rootRef}
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: "#ffffff",
      }}
    >
      <ShaderBackground ref={shaderRef} onScale={onScale} />
      <img
        ref={logoRef}
        src="/exodus-logo-transparent.png"
        alt="Exodus Logo"
        style={{
          width: 220,
          height: 220,
          objectFit: "contain",
          position: "relative",
          zIndex: 1,
          marginBottom: "1rem",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.8s ease-out",
          willChange: "transform",
        }}
      />
      <h1
        className="font-black tracking-tighter leading-none mb-8 text-center"
        style={{
          fontSize: "clamp(6rem, 18vw, 14rem)",
          letterSpacing: "-0.04em",
          position: "relative",
          zIndex: 1,
          color: "#0A0A0A",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        }}
      >
        EXODUS
      </h1>
      <div
        className="flex flex-col items-center gap-3"
        style={{ position: "relative", zIndex: 1 }}
      >
        {["Länger leben.", "Gesünder altern.", "Präventive Gesundheit für alle."].map(
          (text, i) => (
            <p
              key={i}
              className="text-xl font-medium tracking-tight"
              style={{
                color: "rgba(0, 0, 0, 0.45)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.7s ease-out ${0.3 + i * 0.15}s, transform 0.7s ease-out ${0.3 + i * 0.15}s`,
              }}
            >
              {text}
            </p>
          )
        )}
      </div>
    </div>
  );
});

export default Slide00;
