/* We Deliver IT — CTA sekcija: tamno plavi gradijent, kancelarije, avion */
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Linkedin, Twitter, Instagram, Github, Mail } from "lucide-react";
import { Link } from "wouter";

const PLANE = "/images/plane-icon.png";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-8 lg:py-12">
      <div className="container">
        <div
          className="relative rounded-3xl overflow-hidden px-7 lg:px-14 py-12 lg:py-16"
          style={{
            background:
              "linear-gradient(115deg, #0a1233 0%, #0e1e56 45%, #1735e0 100%)",
          }}
        >
          {/* Decorative glow */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-cyan-brand/20 rounded-full blur-3xl pointer-events-none" />

          {/* Plane decoration */}
          <img
            src={PLANE}
            alt=""
            aria-hidden
            className="absolute right-8 lg:right-16 top-8 lg:top-1/2 lg:-translate-y-1/2 w-20 lg:w-32 h-auto opacity-90 rotate-12 pointer-events-none drop-shadow-2xl"
          />

          <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <div>
              <h2 className="text-2xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight max-w-md">
                {t.cta.title}
              </h2>
              <Link
                href="/contact"
                className="btn-press mt-7 w-fit flex items-center gap-2 bg-cyan-brand text-navy font-bold text-sm px-6 py-3.5 rounded-full hover:brightness-105 transition-all"
                style={{ backgroundColor: "#2ee6d6", color: "#0e1e56" }}
              >
                {t.cta.button}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:pr-24">
              <div className="grid grid-cols-2 gap-6 pb-6 border-b border-white/15">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-1.5">
                    {t.cta.euOffice}
                  </p>
                  <p className="text-sm font-semibold text-white">{t.cta.euCity}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-1.5">
                    {t.cta.usOffice}
                  </p>
                  <p className="text-sm font-semibold text-white">{t.cta.usCity}</p>
                </div>
              </div>
              <div className="pt-6 grid grid-cols-2 gap-6">
                <a
                  href="mailto:office@we-deliver.io"
                  className="flex items-center gap-2 text-sm font-semibold text-white hover:text-cyan-brand transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  office@we-deliver.io
                </a>
                <div className="flex items-center gap-3">
                  <span className="text-[14px] font-semibold text-white/50">{t.cta.followUs}</span>
                  {[Linkedin].map((Icon, i) => (
                    <a
                      key={i}
                      
                      href="https://www.linkedin.com/company/we-deliver-it/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 text-white hover:bg-white hover:text-navy transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
