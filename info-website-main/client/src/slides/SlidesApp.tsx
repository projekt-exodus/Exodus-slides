import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import "reveal.js/reveal.css";
import "./slides.css";

import Slide00Content, { notes as notes00, Slide00Handle } from "./Slide00";
import Slide01Content, { notes as notes01 } from "./Slide01";
import Slide02Content, { notes as notes02 } from "./Slide02";
import Slide03Content, { notes as notes03 } from "./Slide03";
import Slide04Content, { notes as notes04 } from "./Slide04";
import Slide05Content, { notes as notes05 } from "./Slide05";
import Slide06Content, { notes as notes06 } from "./Slide06";
import Slide07Content, { notes as notes07 } from "./Slide07";
import Slide08Content, { notes as notes08 } from "./Slide08";
import Slide09Content, { notes as notes09 } from "./Slide09";
import Slide10Content, { notes as notes10 } from "./Slide10";

export default function SlidesApp() {
  const deckRef = useRef<HTMLDivElement>(null);
  const deckInstance = useRef<InstanceType<typeof Reveal> | null>(null);
  const slide00Ref = useRef<Slide00Handle>(null);

  useEffect(() => {
    if (!deckRef.current || deckInstance.current) return;

    const loadNotes = async () => {
      const NotesPlugin = (await import("reveal.js/plugin/notes")).default;

      const deck = new Reveal(deckRef.current!, {
        plugins: [NotesPlugin],
        hash: false,
        keyboard: true,
        controls: true,
        progress: true,
        center: false,
        transition: "slide",
        transitionSpeed: "default",
        backgroundTransition: "fade",
        slideNumber: "c/t",
        showSlideNumber: "all",
        embedded: false,
        width: 1920,
        height: 1080,
        margin: 0,
        minScale: 0.2,
        maxScale: 2.0,
      });

      await deck.initialize();
      deckInstance.current = deck;

      // Fire burst on initial ready if starting on Slide 00
      let initialBurstFired = false;
      const indices = deck.getIndices();
      if (indices.h === 0) {
        initialBurstFired = true;
        slide00Ref.current?.onEnter();
      }

      // Fire burst whenever navigation lands on Slide 00
      // Guard against potential duplicate slidechanged on init
      deck.on("slidechanged", (event: unknown) => {
        const e = event as { indexh: number; indexv: number };
        if (e.indexh === 0) {
          if (initialBurstFired) {
            initialBurstFired = false;
            return;
          }
          slide00Ref.current?.onEnter();
        }
      });
    };

    loadNotes();

    return () => {
      if (deckInstance.current) {
        deckInstance.current.destroy();
        deckInstance.current = null;
      }
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-background"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div ref={deckRef} className="reveal" style={{ width: "100%", height: "100%" }}>
        <div className="slides">
          <section style={{ height: "100%", width: "100%" }}>
            <Slide00Content ref={slide00Ref} />
            <aside className="notes">{notes00}</aside>
          </section>
          {[
            { Component: Slide01Content, notes: notes01 },
            { Component: Slide02Content, notes: notes02 },
            { Component: Slide03Content, notes: notes03 },
            { Component: Slide04Content, notes: notes04 },
            { Component: Slide05Content, notes: notes05 },
            { Component: Slide06Content, notes: notes06 },
            { Component: Slide07Content, notes: notes07 },
            { Component: Slide08Content, notes: notes08 },
            { Component: Slide09Content, notes: notes09 },
            { Component: Slide10Content, notes: notes10 },
          ].map(({ Component, notes }, index) => (
            <section key={index + 1} style={{ height: "100%", width: "100%" }}>
              <Component />
              <aside className="notes">{notes}</aside>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
