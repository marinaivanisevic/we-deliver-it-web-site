/* We Deliver IT — Technologies traka sa logoima */
import { useLanguage } from "@/contexts/LanguageContext";
import {
  SiWordpress,
  SiDocker,
  SiNestjs,
  SiReact,
  SiPostgresql,
  SiDotnet,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGraphql,
  SiKubernetes,
  SiRedis,
  SiMongodb,
} from "react-icons/si";
import { FaAws, FaMicrosoft } from "react-icons/fa6";

const techs = [
  { name: "WordPress", color: "#21759B", Icon: SiWordpress },
  { name: "Docker", color: "#2496ED", Icon: SiDocker },
  { name: "Nest.js", color: "#E0234E", Icon: SiNestjs },
  { name: "React", color: "#61DAFB", Icon: SiReact },
  { name: "PostgreSQL", color: "#4169E1", Icon: SiPostgresql },
  { name: ".NET", color: "#512BD4", Icon: SiDotnet },
  { name: "React Native", color: "#61DAFB", Icon: SiReact },
  { name: "Next.js", color: "#111111", Icon: SiNextdotjs },
  { name: "TypeScript", color: "#3178C6", Icon: SiTypescript },
  { name: "Tailwind CSS", color: "#06B6D4", Icon: SiTailwindcss },
  { name: "GraphQL", color: "#E10098", Icon: SiGraphql },
  { name: "Kubernetes", color: "#326CE5", Icon: SiKubernetes },
  { name: "AWS", color: "#FF9900", Icon: FaAws },
  { name: "Azure", color: "#0078D4", Icon: FaMicrosoft },
  { name: "Redis", color: "#DC382D", Icon: SiRedis },
  { name: "MongoDB", color: "#47A248", Icon: SiMongodb },
];

export default function Technologies() {
  const { t } = useLanguage();
  return (
    <section className="py-8">
      <div className="container">
        <div className="bg-cloud rounded-2xl border border-border/60 py-6 overflow-hidden">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-navy/50 px-6 lg:px-8 mb-4">
            {t.tech.label}
          </p>
          <div className="relative overflow-hidden">
            <div className="flex w-max gap-3 pl-6 lg:pl-8 animate-[marquee_45s_linear_infinite] hover:[animation-play-state:paused]">
              {[...techs, ...techs].map((tech, i) => (
                <div
                  key={`${tech.name}-${i}`}
                  className="flex items-center gap-2 text-navy shrink-0 px-4 py-2 rounded-full border"
                  style={{ backgroundColor: `${tech.color}14`, borderColor: `${tech.color}33` }}
                >
                  <tech.Icon className="w-5 h-5 shrink-0" style={{ color: tech.color }} />
                  <span className="text-sm font-bold">{tech.name}</span>
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-cloud to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-cloud to-transparent" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          section .animate-\\[marquee_28s_linear_infinite\\] { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
