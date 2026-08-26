/* We Deliver IT — Klijenti: recenzije/testimonijali */
import { useLanguage } from "@/contexts/LanguageContext";
import { Quote } from "lucide-react";

const cardStyles = [
  "bg-cyan-brand/10 border-cyan-brand/25",
  "bg-royal/8 border-royal/20",
  "bg-navy/5 border-navy/15",
];

const avatarStyles = ["bg-cyan-brand text-navy", "bg-royal text-white", "bg-navy text-white"];

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts[parts.length - 1]?.[0] ?? "";
  return `${first}${last}`.toUpperCase();
}

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-start">
          {/* Left: heading */}
          <div className="lg:sticky lg:top-28">
            <p className="section-label mb-3">{t.testimonials.label}</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-navy tracking-tight leading-tight">
              {t.testimonials.title}
            </h2>
          </div>

          {/* Testimonial cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.testimonials.items.map((item, i) => (
              <div
                key={item.name}
                className={`rounded-2xl border shadow-lg shadow-navy/8 p-7 flex flex-col ${cardStyles[i % cardStyles.length]}`}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/70 mb-5">
                  <Quote className="w-5 h-5 text-royal" />
                </div>
                <p className="text-sm text-navy/80 leading-relaxed flex-1">"{item.quote}"</p>
                <div className="mt-6 pt-5 border-t border-navy/10 flex items-center gap-3">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full font-extrabold text-sm shrink-0 ${avatarStyles[i % avatarStyles.length]}`}
                  >
                    {getInitials(item.name)}
                  </div>
                  <div>
                    <p className="text-base font-extrabold text-navy leading-snug">{item.name}</p>
                    <p className="text-xs text-navy/60 mt-0.5">
                      {item.role} ·{" "}
                      <a
                        href={item.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-navy/20 hover:text-royal hover:decoration-royal transition-colors"
                      >
                        {item.company}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
