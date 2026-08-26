/* We Deliver IT — Stranica pojedinačne usluge: hero, opis, šta uključuje, CTA */
import { useLayoutEffect, useRef, useState } from "react";
import { useParams, Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight, Check, Code2, Smartphone, Cloud, Cpu, PenTool, ShieldCheck } from "lucide-react";
import NotFound from "@/pages/NotFound";

const icons = [Code2, Smartphone, Cloud, Cpu, PenTool, ShieldCheck];

export default function ServiceDetail() {
  const { slug } = useParams();
  const { t } = useLanguage();

  const index = t.whatWeDo.services.findIndex((s) => s.slug === slug);
  if (index === -1) return <NotFound />;

  const service = t.whatWeDo.services[index];
  const Icon = icons[index];
  const stepIcons: Record<number, string> =
    service.slug === "it-consulting"
      ? { 1: "/images/services/coding.png", 2: "/images/services/administrator.png" }
      : {};
  const hasStepIcons = Object.keys(stepIcons).length > 0;

  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [iconTops, setIconTops] = useState({ first: 0, second: 0 });

  useLayoutEffect(() => {
    if (!hasStepIcons) return;
    const measure = () => {
      const row1 = rowRefs.current[0];
      const row3 = rowRefs.current[2];
      if (!row1 || !row3) return;
      setIconTops({ first: row1.offsetTop, second: row3.offsetTop });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [hasStepIcons, service]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[420px] pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 blur-3xl"
            style={{
              background:
                "radial-gradient(circle at 20% 15%, rgba(20,201,186,0.14) 0%, rgba(234,245,255,0.5) 40%, transparent 70%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, transparent 0%, transparent 40%, white 100%)",
            }}
          />
        </div>

        <div className="container relative max-w-5xl">
          <a
            href="/#services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-royal transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.serviceDetail.back}
          </a>

          <div className="flex items-center gap-4 mb-12">
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-brand/20 to-royal/10 border border-white shadow-sm shrink-0">
              <Icon className="text-royal w-7 h-7" />
            </div>
            <h1 className="text-3xl lg:text-[38px] font-extrabold leading-tight text-navy tracking-tight">
              {service.title}
            </h1>
          </div>
          <p className="mt-4 rounded-2xl p-6 text-base lg:text-lg text-navy/80 leading-relaxed bg-cyan-brand/10 border border-cyan-brand/25">
            {service.description}
          </p>

          <div className="mt-10">
            <p className="text-lg lg:text-xl font-semibold text-navy leading-snug">
              {service.longDescription[0]}
            </p>
            {service.longDescription.length > 1 && (
              <div className={`mt-8 flex flex-col gap-3 relative ${hasStepIcons ? "pl-32 lg:pl-36" : ""}`}>
                {service.longDescription.slice(1).map((paragraph, i) => (
                  <div
                    key={i}
                    ref={(el) => {
                      rowRefs.current[i] = el;
                    }}
                    className="flex items-start gap-4"
                  >
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-brand/15 text-royal font-extrabold text-sm shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-base text-navy/80 leading-relaxed pt-1">{paragraph}</p>
                  </div>
                ))}
                {stepIcons[1] && (
                  <div
                    aria-hidden
                    className="absolute left-0 w-28 h-28"
                    style={{
                      top: iconTops.first,
                      backgroundColor: "#0e1e56",
                      WebkitMaskImage: `url(${stepIcons[1]})`,
                      maskImage: `url(${stepIcons[1]})`,
                      WebkitMaskSize: "contain",
                      maskSize: "contain",
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                    }}
                  />
                )}
                {stepIcons[2] && (
                  <div
                    aria-hidden
                    className="absolute left-0 w-28 h-28"
                    style={{
                      top: iconTops.second,
                      backgroundColor: "#0e1e56",
                      WebkitMaskImage: `url(${stepIcons[2]})`,
                      maskImage: `url(${stepIcons[2]})`,
                      WebkitMaskSize: "contain",
                      maskSize: "contain",
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                    }}
                  />
                )}
              </div>
            )}
          </div>

          <div className="mt-12 pt-10 border-t border-border/60">
            <h2 className="text-xl font-extrabold text-navy mb-5">{t.serviceDetail.featuresTitle}</h2>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-navy/80">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-cyan-brand/15 shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-royal" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 pt-10 border-t border-border/60 flex flex-wrap items-center justify-between gap-6">
            <h2 className="text-xl font-extrabold text-navy">{t.serviceDetail.ctaTitle}</h2>
            <Link
              href="/contact"
              className="btn-press flex items-center gap-2 bg-cyan-brand text-navy font-bold text-sm px-6 py-3.5 rounded-full hover:brightness-105 transition-all shadow-lg shadow-cyan-brand/25"
            >
              {t.serviceDetail.ctaButton}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
