import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useRef, useState } from "react";
import { SectionLabel } from "./helpers";

export interface TimelineEntry {
  label: string;
  sub?: string;
  current?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  location: string;
  desc: string;
  timeline: TimelineEntry[];
  skills: string[];
  linkedin: string | null;
  color: string;
  advisor?: boolean;
  photo?: string;
  photoPosition?: string;
}

export default function SectionTeam() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const team: TeamMember[] = [
    {
      name: "Hannah Haslhofer",
      role: "CEO · Sales",
      location: "Linz, OÖ",
      desc: "Hannah sorgt dafür, dass im Hintergrund alles läuft. Ihre Ausbildung in Elementarpädagogik und Erfahrung in der Betreuungsarbeit geben ihr ein feines Gespür für Menschen und Prozesse. Als Physio-Studentin bringt sie zusätzlich klinische Perspektive in die tägliche Koordination.",
      timeline: [
        { label: "BAfEP Bischofshofen", sub: "Elementarpädagogik · Matura" },
        { label: "Bad Gastein", sub: "Kinderbetreuung · Skischule · Alpina Spa Hotel" },
        { label: "FH Gesundheitsberufe OÖ", sub: "Physiotherapie (BSc) · laufend", current: true },
      ],
      skills: ["Physiotherapie", "Operatives", "Teamkoordination"],
      linkedin: null,
      color: "amber",
    },
    {
      name: "Paula Mittermayr",
      role: "Sales",
      location: "Puchenau, OÖ",
      desc: "Paula verbindet technisches Medizintechnik-Know-how mit klinischer Praxis aus Praktika am Kepler Uniklinikum und der JKU. Ihr Forschungsprojekt zur intelligenten Hautsensorik zeigt, dass sie komplexe biomedizinische Systeme versteht, genau das, was Exodus für eine glaubwürdige Produktentwicklung braucht.",
      timeline: [
        { label: "HTBLA Leonding", sub: "Medizintechnik · Matura mit Auszeichnung" },
        { label: "Praktika", sub: "Kepler Uniklinikum · JKU · Radiologie Urfahr" },
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
      desc: "Felix kennt Leistung, Regeneration und den menschlichen Körper aus jahrelangem Hochleistungssport auf Akademieniveau. Als ausgebildeter Rettungssanitäter und angehender Physiotherapeut versteht er die medizinische Praxis von innen und kann Investoren, Partnern und Nutzern auf Augenhöhe begegnen.",
      timeline: [
        { label: "BORG Linz", sub: "Leistungssportzweig · Matura" },
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
      desc: "Martin baut seit Jahren KI-Agenten und Full-Stack-Produkte, von der App bis zur eigenen KI-Agentur. Mit servas.ai hat er gezeigt, dass er ein Tech-Unternehmen aufbauen und betreiben kann. Er ist der Architekt hinter der Exodus-Plattform und verantwortet KI, Infrastruktur und Entwicklung.",
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
      name: "David Kraus",
      role: "Beratung · Cybersecurity",
      location: "Oberösterreich",
      desc: "David unterstützt Exodus in den Bereichen Datensicherheit, Datenschutz und Cybersecurity. Er ist kein Gründungsmitglied, bringt aber gezielt Expertise ein, die für eine DSGVO-konforme Gesundheitsplattform essenziell ist.",
      timeline: [
        { label: "Datenschutz & IT-Security", sub: "Beratende Funktion", current: true },
      ],
      skills: ["Datensicherheit", "Datenschutz", "Cybersecurity"],
      linkedin: null,
      color: "violet",
      advisor: true,
    },
  ];

  const coreTeam = team.filter((m) => !m.advisor);
  const advisors = team.filter((m) => m.advisor);

  return (
    <section id="team" className="py-24 border-t border-border scroll-mt-8">
      <SectionLabel num={4} />
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-5">
        Team & Partnernetzwerk
      </h2>
      <p className="text-muted-foreground mb-12 max-w-2xl text-base leading-relaxed">
        Vier Gründer aus Linz / OÖ, Medizintechnik, KI, Sport und Operations.
        Starkes Netzwerk aus Forschung, Klinik und Industrie.
      </p>

      <h3 className="text-lg font-semibold tracking-tight mb-2">Kernteam</h3>
      <p className="text-xs text-muted-foreground mb-6">
        Alle Gründer sind sportlich aktiv und begeisterte Gym-Gänger — das Produkt entsteht aus echter persönlicher Überzeugung.
      </p>
      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
        {coreTeam.map((member, i) => (
          <MemberCard key={i} member={member} i={i} inView={inView} />
        ))}
      </div>

      <h3 className="text-lg font-semibold tracking-tight mb-6">Unterstützung</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
        {advisors.map((member, i) => (
          <MemberCard key={i} member={member} i={coreTeam.length + i} inView={inView} />
        ))}
      </div>

      <p className="text-xs text-muted-foreground">
        Kooperationslogik: LOIs, dokumentierte Experteninterviews mit JKU Medizin, Kepler Uniklinikum und FH Gesundheitsberufe OÖ.
        Für FFG: "wirksame Kooperation" (mind. 10 % der förderbaren Kosten bei Forschungseinrichtungen, Kooperationsbonus bis 70 %).
      </p>
    </section>
  );
}

function MemberAvatar({ member }: { member: TeamMember }) {
  const [failed, setFailed] = useState(false);
  const initials = member.name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  if (!member.photo || failed) {
    return (
      <div
        className="w-40 h-40 rounded-full flex items-center justify-center text-xl font-mono font-semibold shrink-0"
        style={{ backgroundColor: `var(--accent-${member.color})20`, color: `var(--accent-${member.color})`, border: `2px solid var(--accent-${member.color})40` }}
      >
        {initials}
      </div>
    );
  }
  return (
    <img
      src={member.photo}
      alt={member.name}
      className="w-40 h-40 rounded-full object-cover shrink-0"
      style={{ border: `2px solid var(--accent-${member.color})40`, objectPosition: member.photoPosition ?? "center" }}
      onError={() => setFailed(true)}
    />
  );
}

export function MemberCard({ member, i, inView }: { member: TeamMember; i: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.35, delay: i * 0.1 }}
      className="p-4 border border-border/70 bg-card flex flex-col gap-2"
      data-testid={`card-team-${i}`}
    >
      <div>
        <div className="flex items-start justify-between gap-2 mb-2">
          <MemberAvatar member={member} />
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`link-linkedin-${i}`}
              className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
              aria-label={`LinkedIn von ${member.name}`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
        <div className="mb-0.5">
          <h4 className="text-sm font-normal">{member.name}</h4>
        </div>
        <p className="text-xs font-mono uppercase tracking-wider mb-0.5" style={{ color: `var(--accent-${member.color})` }}>
          {member.role}
        </p>
        <p className="text-[10px] font-mono text-muted-foreground/60 tracking-wide">{member.location}</p>
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed">
        {member.desc}
      </p>

      {member.timeline.length > 1 && (
        <div className="flex flex-col gap-0">
          {member.timeline.map((entry, j) => (
            <div key={j} className="flex gap-3 relative">
              <div className="flex flex-col items-center shrink-0" style={{ width: 10 }}>
                <div
                  className="w-2.5 h-2.5 rounded-full border-2 shrink-0 z-10"
                  style={{
                    borderColor: `var(--accent-${member.color})`,
                    backgroundColor: entry.current
                      ? `var(--accent-${member.color})`
                      : "var(--background)",
                  }}
                />
                {j < member.timeline.length - 1 && (
                  <div
                    className="flex-1 w-px mt-0.5"
                    style={{
                      backgroundColor: `var(--accent-${member.color})`,
                      opacity: 0.25,
                      minHeight: 20,
                    }}
                  />
                )}
              </div>
              <div className="pb-3 last:pb-0 min-w-0">
                <p
                  className="text-[11px] font-normal leading-tight"
                  style={{ color: entry.current ? `var(--accent-${member.color})` : undefined }}
                >
                  {entry.label}
                </p>
                {entry.sub && (
                  <p className="text-[10px] text-muted-foreground/70 font-light leading-snug mt-0.5">
                    {entry.sub}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/50 mt-auto">
        {member.skills.map((skill, j) => (
          <span
            key={j}
            className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 border border-border/60 text-muted-foreground"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
