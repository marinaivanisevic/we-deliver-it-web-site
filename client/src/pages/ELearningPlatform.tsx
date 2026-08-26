/* We Deliver IT — Izrada platforme za daljinsko učenje: posebno dizajnirana stranica (feature ikonice, portfolio) */
import { ArrowLeft, ArrowRight, Check, GraduationCap, FileVideo, Users, ClipboardCheck, TrendingUp, Layers, Award } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const featureIcons = [FileVideo, Users, ClipboardCheck, TrendingUp, Layers, Award];

const portfolioImages = [
  { src: "/images/work/upstrivesystem.jpg", url: "https://upstrive.de" },
  { src: "/images/work/mindmotions.jpg", url: "https://mindmotions.com/" },
];

export default function ELearningPlatform() {
  const { t } = useLanguage();
  const p = t.elearningPage;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[420px] pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 blur-3xl"
            style={{
              background:
                "radial-gradient(circle at 80% 10%, rgba(23,53,224,0.12) 0%, rgba(234,245,255,0.5) 40%, transparent 70%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, transparent 0%, transparent 40%, white 100%)",
            }}
          />
        </div>

        <div className="container relative max-w-6xl">
          <a
            href="/#services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-royal transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {p.back}
          </a>

          {/* Hero */}
          <div className="flex items-center gap-4 mb-12">
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-brand/20 to-royal/10 border border-white shadow-sm shrink-0">
              <GraduationCap className="text-royal w-7 h-7" />
            </div>
            <h1 className="text-3xl lg:text-[38px] font-extrabold leading-tight text-navy tracking-tight">
              {p.label}
            </h1>
          </div>
          <p className="text-base lg:text-lg text-navy/80 leading-relaxed">{p.intro}</p>

          {/* Feature grid: 6 LMS features */}
          <div className="mt-14">
            <h2 className="text-xl font-extrabold text-navy mb-6">{p.featuresGridTitle}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {p.featureCards.map((feature, i) => {
                const Icon = featureIcons[i];
                return (
                  <div key={feature.title} className="rounded-2xl p-6 border border-border/60 bg-cloud flex flex-col">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-brand/20 to-royal/10 border border-white shadow-sm mb-4">
                      <Icon className="text-royal w-5 h-5" />
                    </div>
                    <h3 className="text-base font-extrabold text-navy mb-1.5">{feature.title}</h3>
                    <p className="text-sm text-navy/70 leading-relaxed flex-1">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Process / brand callout */}
          <div className="mt-10 rounded-2xl p-6 lg:p-8 bg-cyan-brand/10 border border-cyan-brand/25">
            <h2 className="text-lg font-extrabold text-navy mb-2">{p.processTitle}</h2>
            <p className="text-base text-navy/80 leading-relaxed">{p.processText}</p>
          </div>

          {/* Our services list */}
          <div className="mt-12 pt-10 border-t border-border/60">
            <h2 className="text-xl font-extrabold text-navy mb-5">{p.servicesTitle}</h2>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {p.servicesList.map((service) => (
                <li key={service} className="flex items-start gap-2.5 text-sm text-navy/80">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-cyan-brand/15 shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-royal" />
                  </span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Portfolio */}
          <div className="mt-16 pt-10 border-t border-border/60">
            <h2 className="text-xl font-extrabold text-navy mb-6">{p.portfolioTitle}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {portfolioImages.map((item) => (
                <a
                  key={item.src}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl overflow-hidden border border-border/60 aspect-[4/3]"
                >
                  <img
                    src={item.src}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 pt-10 border-t border-border/60 flex flex-wrap items-center justify-between gap-6">
            <h2 className="text-xl font-extrabold text-navy">{p.ctaTitle}</h2>
            <Link
              href="/contact"
              className="btn-press flex items-center gap-2 bg-cyan-brand text-navy font-bold text-sm px-6 py-3.5 rounded-full hover:brightness-105 transition-all shadow-lg shadow-cyan-brand/25"
            >
              {p.ctaButton}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
