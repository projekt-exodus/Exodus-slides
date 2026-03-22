import { FAQItem, SectionLabel } from "./helpers";

export default function SectionFAQ() {
  const faqs = [
    { q: "Wo liegen meine Daten?", a: "Standardmäßig lokal im Vault (Endgerät). Optional kann Sync aktiviert werden — du wählst selbst, welche Cloud du nutzt (unsere, deine eigene, oder andere Anbieter). In jedem Fall werden die Daten verschlüsselt gespeichert." },
    { q: "Muss ich eure Cloud benutzen?", a: "Nein. Du kannst jede beliebige Cloud nutzen oder ganz ohne Sync arbeiten. Der Schlüssel bleibt immer bei dir." },
    { q: "Gehen Daten automatisch an KI-Modelle?", a: "Nein. Analysen sind nur nach expliziter Freigabe möglich, mit klarer Begrenzung: Datentyp, Zeitraum, Zweck und Dauer." },
    { q: "Können Betreiber meine Gesundheitsdaten ansehen?", a: "Zielbild: so wenig wie möglich. Betreiberzugriffe sind nicht 'Standard', sondern müssen technisch und organisatorisch streng begrenzt sein." },
    { q: "Was passiert bei Geräteverlust?", a: "Ohne Sync kann es Datenverlust geben. Mit Sync ist Wiederherstellung möglich. Dieser Trade-off wird transparent gemacht." },
    { q: "Was bedeutet 'Clinician-in-the-Loop'?", a: "Personalisierte Pläne werden nicht ungeprüft ausgespielt. Eine Fachperson prüft und gibt frei." },
    { q: "Diagnostiziert die App Krankheiten?", a: "Nein, nicht in Phase 1. Fokus: sammeln, strukturieren, anzeigen, allgemein erklären." },
    { q: "Kann ich meine Daten exportieren/löschen?", a: "Ja. Portabilität und Löschung sind Kernprinzipien (Details werden im Produkt konkretisiert)." },
    { q: "Was unterscheidet Exodus von Oura, Apple Health oder Whoop?", a: "Einzelne Apps decken jeweils nur einen Bereich ab (Fitness, Schlaf, Labor). Exodus ist eine integrierte End-to-End Plattform: Labor + Fitness + Supplements + ärztliche Betreuung in einer App." },
    { q: "Braucht die App ein Medizinprodukt-Zertifikat (CE)?", a: "Phase 1 (Health Data Wall) ist ein Informationssystem — kein MDR nötig. Erst wenn personalisierte Therapie-/Gesundheitspläne durch KI erstellt werden (Phase 2), brauchen wir eine CE-Kennzeichnung nach MDR IIa." },
    { q: "Was ist mit Supplements?", a: "Supplements sind ein paralleler Revenue-Stream: eigene Produkte und Kooperationen (z.B. mit Biogena). Kauf direkt in der App möglich." },
    { q: "Wie wird das Projekt finanziert?", a: "Rein förderfinanzierter Aufbau über eine Förderkaskade aus FFG, aws, tech2b und OÖ-Landesmitteln: FFG Projekt.Start (6.000 €) → FFG Innovationsscheck (max. 10.000 €, 80 %) → aws First Incubator (55.000 €, 100 % durch Gender-Bonus) → tech2b ACTIVATE (5.000 € Barzuschuss) → FFG Kleinprojekt (max. 88.500 €, bis 70 % durch Forschungskooperation mit JKU/Kepler Uniklinikum) → tech2b INCUBATE (bis 25.000 € Darlehen) → FFG Impact Innovation (max. 105.000 €, 70 % als Social Innovation) → FFG Basisprogramm (bis 70 % KMU + Forschungspartner). Ergänzend: OÖ. Gründerfonds (stille Beteiligung bis 150.000 €), OÖ Start-up-Prämie (bis 10.000 €). Kumuliertes Potenzial: über 400.000 €." },
  ];

  return (
    <section id="faq" className="py-24 border-t border-border scroll-mt-8">
      <SectionLabel num={16} />
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-5">
        Häufige Fragen
      </h2>
      <p className="text-muted-foreground mb-12 max-w-2xl text-base leading-relaxed">
        Die wichtigsten Fragen zu Datenschutz, Produkt, Regulatorik und Finanzierung — kurz beantwortet.
      </p>

      <div className="space-y-0 border-t border-border" data-testid="faq-list">
        {faqs.map((faq, i) => (
          <FAQItem key={i} question={faq.q} answer={faq.a} index={i} />
        ))}
      </div>
    </section>
  );
}
