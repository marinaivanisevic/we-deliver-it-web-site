/* We Deliver IT — What we do: grid kartica usluga */
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";
import { iconBySlug, iconColorBySlug } from "@/lib/serviceIcons";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-16 lg:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6 items-end mb-10 lg:mb-14">
          <div>
            <p className="section-label mb-3">{t.whatWeDo.label}</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-navy tracking-tight max-w-md">
              {t.whatWeDo.title}
            </h2>
          </div>
          <p className="text-base lg:text-lg font-semibold text-navy max-w-sm lg:justify-self-end leading-relaxed">
            {t.whatWeDo.description}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.whatWeDo.services.map((service) => {
            const Icon = iconBySlug[service.slug] ?? iconBySlug["it-consulting"];
            const iconColor = iconColorBySlug[service.slug] ?? "#1735e0";
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-cloud rounded-2xl border border-border/60 shadow-lg shadow-navy/8 p-7 hover:shadow-xl hover:shadow-navy/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-border/60 shrink-0 group-hover:border-royal/30 transition-colors">
                    <Icon className="w-[26px] h-[26px]" style={{ color: iconColor }} />
                  </div>
                  <h3 className="text-xl font-extrabold text-navy leading-snug">
                    {service.title}
                  </h3>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed mb-5">
                  {service.description}
                </p>
                <div className="flex justify-end">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full border border-navy/15 group-hover:bg-navy group-hover:border-navy transition-all">
                    <ArrowRight className="w-4 h-4 text-navy group-hover:text-white transition-colors" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
