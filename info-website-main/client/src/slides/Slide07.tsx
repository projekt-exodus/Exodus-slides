import { MemberCard, TeamMember } from "@/components/sections/SectionTeam";

export const notes =
  "Wir kommen alle aus OÖ. Wir studieren alle an Institutionen aus Linz. Und wir nutzen alle das Produkt selbst — weil es unser Problem ist. Felix & Martin: Gründer. Hannah: CEO & Operations. Paula: Sales & Medizintechnik. Plus David Kraus für Cybersecurity. LOIs in Vorbereitung: JKU, Kepler, FH Gesundheitsberufe OÖ.";

const team: TeamMember[] = [
  {
    name: "Felix Ratzenböck",
    role: "Physiotherapie",
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
    role: "Fullstack Softwareentwickler",
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
  {
    name: "Hannah Haslhofer",
    role: "Physiotherapie",
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
    role: "Medizintechnik",
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
];

const advisor: TeamMember = {
  name: "David Kraus",
  role: "Cybersecurity",
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

const accentColorMap: Record<string, string> = {
  blue: "var(--accent-blue)",
  green: "var(--accent-green)",
  amber: "var(--accent-amber)",
  rose: "var(--accent-rose)",
  violet: "var(--accent-violet)",
};

const highlightedNames = ["Felix Ratzenböck", "Martin Hausleitner"];

export default function Slide07() {
  return (
    <div
      className="fixed inset-0 flex flex-col px-12 py-6 overflow-hidden"
      style={{ width: "100%", height: "100%" }}
    >
      <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40 mb-2">
        07 — Team · Felix
      </p>

      <h2 className="text-3xl font-bold tracking-tight mb-1 leading-tight">
        Vier aus Linz. Alle aus Überzeugung.
      </h2>
      <p className="text-sm text-muted-foreground mb-3 max-w-2xl">
        Wir kommen alle aus OÖ. Wir studieren alle an Institutionen aus Linz.
        Und wir nutzen alle das Produkt selbst — weil es unser Problem ist.
      </p>

      <div className="grid grid-cols-4 gap-3 mb-3 flex-shrink-0">
        {team.map((member, i) => {
          const isHighlighted = highlightedNames.includes(member.name);
          const accentColor = accentColorMap[member.color] ?? "var(--accent-blue)";
          return (
            <div
              key={i}
              style={
                isHighlighted
                  ? {
                      outline: `2px solid ${accentColor}`,
                      outlineOffset: "2px",
                    }
                  : {}
              }
            >
              <MemberCard member={member} i={i} inView={true} />
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-3 flex-shrink-0">
        <MemberCard member={advisor} i={team.length} inView={true} />
        <div className="p-3 border border-border/50 bg-[var(--diagram-bg)] flex flex-col justify-center gap-2">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/50">Kooperationen (LOIs)</p>
          {["JKU Medizin", "Kepler Uniklinikum", "FH Gesundheitsberufe OÖ", "tech2b"].map((partner) => (
            <span key={partner} className="text-[10px] font-mono px-2 py-0.5 border border-border text-muted-foreground bg-card self-start">{partner}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
