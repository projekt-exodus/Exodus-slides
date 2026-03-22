import { MemberCard, TeamMember } from "@/components/sections/SectionTeam";

export const notes =
  "Wir kommen alle aus OÖ. Wir studieren alle an Institutionen aus Linz. Und wir nutzen alle das Produkt selbst — weil es unser Problem ist. Hannah: CEO & Operations. Paula: Sales & Medizintechnik. Felix: COO & Sales. Martin: CTO. Plus David Kraus für Cybersecurity. LOIs in Vorbereitung: JKU, Kepler, FH Gesundheitsberufe OÖ.";

const team: TeamMember[] = [
  {
    name: "Hannah Haslhofer",
    role: "CEO · Sales",
    location: "Linz, OÖ",
    desc: "Physiotherapie-Studentin an der FH Gesundheitsberufe OÖ. Klinisches Gespür, operative Stärke, koordiniert alles im Hintergrund.",
    timeline: [
      { label: "BAfEP Bischofshofen", sub: "Elementarpädagogik · Matura" },
      { label: "FH Gesundheitsberufe OÖ", sub: "Physiotherapie (BSc) · laufend", current: true },
    ],
    skills: ["Physiotherapie", "Operatives", "Teamkoordination"],
    linkedin: null,
    color: "amber",
  },
  {
    name: "Paula Mittermayr",
    role: "Sales · Medizintechnik",
    location: "Puchenau, OÖ",
    desc: "JKU Linz, Medical Engineering. SANTESIS GmbH. Kepler Uniklinikum-Praktika. Forschungsprojekt zu intelligenter Hautsensorik.",
    timeline: [
      { label: "HTBLA Leonding", sub: "Medizintechnik · Matura mit Auszeichnung" },
      { label: "SANTESIS GmbH", sub: "Medizintechnikerin (Teilzeit)" },
      { label: "JKU Linz", sub: "Medical Engineering (BSc) · laufend", current: true },
    ],
    skills: ["C · C# · Python", "Medizintechnik", "Sensorik"],
    linkedin: "https://www.linkedin.com/in/paula-mittermayr-a36064328",
    color: "rose",
  },
  {
    name: "Felix Ratzenböck",
    role: "COO · Sales",
    location: "Linz, OÖ",
    desc: "LASK-Akademie. Rettungssanitäter. Physiotherapie-Studium. Jahrelanger Hochleistungssport — er kennt den Körper von innen.",
    timeline: [
      { label: "LASK-Akademie", sub: "U14 bis Kampfmannschaft" },
      { label: "Rettungssanitäter", sub: "Ausbildung Hörsching · Bundesheer" },
      { label: "FH Gesundheitsberufe OÖ", sub: "Physiotherapie (BSc) · laufend", current: true },
    ],
    skills: ["Sport & Leistungsmedizin", "Physiotherapie", "Sales"],
    linkedin: null,
    color: "green",
  },
  {
    name: "Martin Hausleitner",
    role: "CTO",
    location: "Linz, OÖ",
    desc: "JKU Linz, Artificial Intelligence. CEO von servas.ai (KI-Agentur, seit April 2024). Architekt hinter der Exodus-Plattform.",
    timeline: [
      { label: "HTL Leonding", sub: "Informatik · Matura" },
      { label: "JKU Linz", sub: "Artificial Intelligence" },
      { label: "servas.ai", sub: "CEO & Founder · KI-Agentur (seit Apr 2024)", current: true },
    ],
    skills: ["App-Entwicklung", "KI-Agenten", "Full Stack Development"],
    linkedin: "https://www.linkedin.com/in/martin-hausleitner",
    color: "blue",
  },
];

const advisor: TeamMember = {
  name: "David Kraus",
  role: "Beratung · Cybersecurity",
  location: "Oberösterreich",
  desc: "Unterstützt Exodus in Datensicherheit, Datenschutz und Cybersecurity. Essentielle Expertise für eine DSGVO-konforme Gesundheitsplattform.",
  timeline: [
    { label: "Datenschutz & IT-Security", sub: "Beratende Funktion", current: true },
  ],
  skills: ["Datensicherheit", "Datenschutz", "Cybersecurity"],
  linkedin: null,
  color: "violet",
  advisor: true,
};

export default function Slide07() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-16 py-16 max-w-6xl mx-auto">
      <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40 mb-4">
        07 — Team · Felix
      </p>

      <h2 className="text-4xl font-bold tracking-tight mb-2 max-w-3xl leading-tight">
        Vier aus Linz. Alle aus Überzeugung.
      </h2>
      <p className="text-base text-muted-foreground mb-8 max-w-2xl">
        Wir kommen alle aus OÖ. Wir studieren alle an Institutionen aus Linz.
        Und wir nutzen alle das Produkt selbst — weil es unser Problem ist.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-5">
        {team.map((member, i) => (
          <MemberCard key={i} member={member} i={i} inView={true} />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <MemberCard member={advisor} i={team.length} inView={true} />
        <div className="p-4 border border-border/50 bg-[var(--diagram-bg)] flex flex-col justify-center gap-2">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/50">Kooperationen (LOIs)</p>
          {["JKU Medizin", "Kepler Uniklinikum", "FH Gesundheitsberufe OÖ", "tech2b"].map((partner) => (
            <span key={partner} className="text-[10px] font-mono px-2 py-0.5 border border-border text-muted-foreground bg-card self-start">{partner}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
