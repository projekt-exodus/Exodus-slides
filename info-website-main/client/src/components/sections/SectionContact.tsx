import { ContactForm } from "@/components/ContactForm";
import { SectionLabel } from "./helpers";

export default function SectionContact() {
  return (
    <section id="contact" className="py-24 border-t border-border scroll-mt-8">
      <SectionLabel num={17} />
      <div className="max-w-2xl">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-5">
          Kontakt
        </h2>
        <p className="text-muted-foreground mb-10 text-base leading-relaxed">
          Wenn du Interesse an Pilotprojekten, Forschungspartnerschaften oder frühen Produktzugängen hast,
          schreib uns direkt über das Formular.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
