import { useState } from "react";
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
    photo: "/team/felix.png",
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
    photo: "/team/martin.jpg",
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
    photo: "/team/hannah.png",
    photoPosition: "top",
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
    photo: "/team/paula.jpg",
  },
];

const advisor: TeamMember = {
  name: "David Kraus",
  role: "Cybersecurity & CEO Servasia Flexco",
  location: "Oberösterreich",
  desc: "Unterstützt Exodus in Datensicherheit, Datenschutz und Cybersecurity. Essentielle Expertise für eine DSGVO-konforme Gesundheitsplattform.",
  timeline: [
    { label: "HT Leonding", sub: "Informatik" },
    { label: "FH Hagenberg", sub: "Cyber Security" },
    { label: "Servasia Flexco", sub: "CEO & Gründer", current: true },
  ],
  skills: ["Datensicherheit", "Datenschutz", "Cybersecurity"],
  linkedin: null,
  color: "violet",
  advisor: true,
  photo: "/team/david.jpg",
};

const accentColorMap: Record<string, string> = {
  blue: "var(--accent-blue)",
  green: "var(--accent-green)",
  amber: "var(--accent-amber)",
  rose: "var(--accent-rose)",
  violet: "var(--accent-violet)",
};

const highlightedNames = ["Felix Ratzenböck", "Martin Hausleitner"];

function FHLogo() {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <span className="text-[9px] font-mono border border-border px-2 py-1 text-muted-foreground bg-card">
      FH Gesundheitsberufe OÖ
    </span>
  ) : (
    <img
      src="https://www.fhgooe.ac.at/fileadmin/fh_gooe/Logo/FHG_Logo_RGB_farbe.png"
      alt="FH Gesundheitsberufe OÖ"
      height={28}
      className="h-7 object-contain grayscale opacity-60"
      onError={() => setFailed(true)}
    />
  );
}

export default function Slide07() {
  return (
    <div
      className="fixed inset-0 flex flex-col justify-center px-20 py-10 overflow-hidden"
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
        <div className="p-3 border border-border/50 bg-[var(--diagram-bg)] flex flex-col justify-center gap-3">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/50">Kooperationen (LOIs)</p>
          <div className="flex flex-col gap-3">
            <img
              src="/logos/fh-gesundheitsberufe.png"
              alt="FH Gesundheitsberufe OÖ"
              className="h-8 object-contain object-left grayscale opacity-60"
            />
            <img
              src="/logos/jku.png"
              alt="JKU Linz"
              className="h-8 object-contain object-left grayscale opacity-60"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
