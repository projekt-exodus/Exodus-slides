import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay },
});

const team = [
  {
    name: "Hannah Haslhofer",
    role: "CEO · Operations",
    location: "Linz, OÖ",
    desc: "FH Gesundheitsberufe OÖ, Physiotherapie. Klinisches Gespür und operative Stärke.",
    color: "amber",
    skills: ["Physiotherapie", "Operatives", "Teamkoordination"],
    linkedin: null,
  },
  {
    name: "Paula Mittermayr",
    role: "Sales · Medizintechnik",
    location: "Puchenau, OÖ",
    desc: "JKU Linz, Medical Engineering. SANTESIS GmbH. Kepler Uniklinikum-Praktika.",
    color: "rose",
    skills: ["C · C# · Python", "Medizintechnik", "Sensorik"],
    linkedin: "https://www.linkedin.com/in/paula-mittermayr-a36064328",
  },
  {
    name: "Felix Ratzenböck",
    role: "COO · Sales",
    location: "Linz, OÖ",
    desc: "FH Gesundheitsberufe OÖ, Physiotherapie. LASK-Akademie. Rettungssanitäter.",
    color: "green",
    skills: ["Sport & Leistungsmedizin", "Physiotherapie", "Sales"],
    linkedin: null,
  },
  {
    name: "Martin Hausleitner",
    role: "CTO",
    location: "Linz, OÖ",
    desc: "JKU Linz, Artificial Intelligence. CEO von servas.ai (KI-Agentur, seit Apr 2024).",
    color: "blue",
    skills: ["App-Entwicklung", "KI-Agenten", "Full Stack"],
    linkedin: "https://www.linkedin.com/in/martin-hausleitner",
  },
];

export default function Slide07() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-16 py-16 max-w-6xl mx-auto">
      <motion.p {...anim(0)} className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40 mb-4">
        07 — Team · Felix
      </motion.p>

      <motion.h2 {...anim(0.05)} className="text-3xl sm:text-4xl font-bold tracking-tight mb-2 max-w-3xl leading-tight">
        Vier aus Linz. Alle aus Überzeugung.
      </motion.h2>
      <motion.p {...anim(0.08)} className="text-base text-muted-foreground mb-8 max-w-2xl">
        Wir kommen alle aus OÖ. Wir studieren alle an Institutionen aus Linz.
        Und wir nutzen alle das Produkt selbst — weil es unser Problem ist.
      </motion.p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.12 + i * 0.08 }}
            className="p-5 border border-border/70 bg-card"
          >
            <div className="flex items-start justify-between gap-2 mb-0.5">
              <h4 className="text-sm font-normal">{member.name}</h4>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
            <p className="text-xs font-mono uppercase tracking-wider mb-0.5" style={{ color: `var(--accent-${member.color})` }}>
              {member.role}
            </p>
            <p className="text-[10px] font-mono text-muted-foreground/60 tracking-wide mb-3">{member.location}</p>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">{member.desc}</p>
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/50">
              {member.skills.map((skill, j) => (
                <span key={j} className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 border border-border/60 text-muted-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div {...anim(0.5)} className="flex items-center gap-6 flex-wrap">
        <div className="flex items-center gap-2 px-4 py-2 border border-border/70 bg-card">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--accent-violet)" }} />
          <div>
            <p className="text-xs font-normal">David Kraus</p>
            <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground" style={{ color: "var(--accent-violet)" }}>
              Beratung · Cybersecurity
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="text-[10px] font-mono text-muted-foreground/50 uppercase tracking-wider">LOIs:</span>
          {["JKU Medizin", "Kepler Uniklinikum", "FH Gesundheitsberufe OÖ", "tech2b"].map((partner) => (
            <span key={partner} className="text-[10px] font-mono px-2 py-0.5 border border-border text-muted-foreground bg-card">{partner}</span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
