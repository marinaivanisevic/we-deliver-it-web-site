/* We Deliver IT — Stats bar: 4 statistike u kartici */
import { useLanguage } from "@/contexts/LanguageContext";
import { ShieldCheck, FolderCheck, Globe, Users } from "lucide-react";

export default function Stats() {
  const { t } = useLanguage();

  const stats = [
    { value: "15+", label: t.stats.years, Icon: ShieldCheck },
    { value: "50+", label: t.stats.projects, Icon: FolderCheck },
    { value: "20+", label: t.stats.offices, Icon: Globe },
    { value: "10+", label: t.stats.experts, Icon: Users },
  ];

  const chipColors = ["#2ee6d6", "#1735e0", "#2ee6d6", "#1735e0"];

  return (
    <section className="py-6">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl px-6 lg:px-10 py-8 grid grid-cols-2 lg:grid-cols-4 divide-x divide-border/60 bg-cloud border border-border/60">
          {stats.map(({ value, label, Icon }, i) => (
            <div key={label} className="relative flex items-center gap-4 px-6 first:pl-0 last:pr-0">
              <div
                className="flex items-center justify-center w-14 h-14 rounded-xl shrink-0"
                style={{ backgroundColor: `${chipColors[i]}1f` }}
              >
                <Icon className="w-7 h-7" style={{ color: chipColors[i] }} />
              </div>
              <div>
                <div className="text-4xl font-extrabold text-navy leading-none">{value}</div>
                <div className="text-base text-navy/60 mt-1.5 font-medium">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

