/* We Deliver IT — Hero: naslov levo, veliki origami avion desno */
import { ArrowRight, Play } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

const HERO_PLANE = "/images/plane-hires.png";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden">
      {/* Background glow — confined to top portion only, never reaches section bottom */}
      <div className="absolute top-0 left-0 right-0 h-[85%] max-h-[700px] pointer-events-none overflow-hidden">
        {/* Soft radial glow, top right */}
        <div
          className="absolute inset-0 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 75% 20%, rgba(20,201,186,0.10) 0%, rgba(234,245,255,0.45) 40%, transparent 70%)",
          }}
        />

        {/* Diagonal light streak */}
        <div
          className="absolute inset-0 opacity-60 translate-x-8"
          style={{
            background:
              "linear-gradient(115deg, transparent 20%, rgba(255,255,255,0.9) 35%, rgba(200,230,255,0.5) 45%, transparent 60%)",
          }}
        />

        {/* Subtle secondary streak for depth */}
        <div
          className="absolute inset-0 opacity-40 translate-x-8"
          style={{
            background:
              "linear-gradient(105deg, transparent 30%, rgba(20,201,186,0.15) 42%, transparent 55%)",
          }}
        />

        {/* Fade this whole block into white before it reaches the bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, transparent 55%, white 100%)",
          }}
        />
      </div>

      <div className="container relative grid lg:grid-cols-2 gap-10 lg:gap-6 items-center">
        {/* Left: text */}
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.1] text-navy tracking-tight">
            {t.hero.titleLine1}
            <br />
            {t.hero.titleLine2}
            <br />
            {t.hero.titleLine3}
            <br />
            <span className="text-cyan-brand" style={{ color: "#14c9ba" }}>{t.hero.titleAccent}</span>
          </h1>
          <p className="mt-6 text-base lg:text-lg text-muted-foreground max-w-md leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="btn-press flex items-center gap-2 bg-cyan-brand text-navy font-bold text-sm px-6 py-3.5 rounded-full hover:brightness-105 transition-all shadow-lg shadow-cyan-brand/25"
            >
              {t.hero.bookCall}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-press flex items-center gap-2 border-2 border-navy/15 text-navy font-bold text-sm px-6 py-3.5 rounded-full hover:border-navy/40 transition-all bg-white"
            >
              {t.hero.exploreWork}
              <span className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-navy/30">
                <Play className="w-2.5 h-2.5 fill-navy text-navy" />
              </span>
            </button>
          </div>
        </div>

        {/* Right: airplane */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[520px]">
            <div className="absolute -inset-16 bg-gradient-to-br from-cyan-brand/20 via-royal/10 to-transparent blur-[80px] rounded-full" />
            <div className="absolute top-1/4 -left-8 w-4/5 h-4/5 bg-gradient-to-tr from-royal/15 via-cyan-brand/8 to-transparent blur-[60px] rounded-full" />
            <div className="absolute -bottom-10 right-0 w-2/3 h-2/3 bg-cyan-brand/12 blur-[70px] rounded-full" />
            <img
              src={HERO_PLANE}
              alt="Origami paper plane"
              className="relative w-full h-auto animate-[float_6s_ease-in-out_infinite]"
              style={{ filter: "drop-shadow(0 0 24px rgba(15,23,42,0.18))" }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @media (prefers-reduced-motion: reduce) {
          img[alt="Origami paper plane"] { animation: none !important; }
        }
      `}</style>
    </section>
  );
}