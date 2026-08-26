/* We Deliver IT — O nama: ko smo, zašto nas biraju, zaključna izjava */
import { ArrowLeft, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  const { t } = useLanguage();
  const p = t.aboutPage;

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

        <div className="container relative max-w-4xl">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-royal transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {p.back}
          </a>

          <div className="flex items-center gap-4 mb-12">
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-brand/20 to-royal/10 border border-white shadow-sm shrink-0">
              <Users className="text-royal w-7 h-7" />
            </div>
            <h1 className="text-3xl lg:text-[38px] font-extrabold leading-tight text-navy tracking-tight">
              {p.title}
            </h1>
          </div>

          <p className="text-lg lg:text-xl font-semibold text-navy leading-snug">{p.intro}</p>

          <div className="mt-12 pt-10 border-t border-border/60">
            <h2 className="text-xl font-extrabold text-navy mb-4">{p.whyTitle}</h2>
            <p className="text-base text-navy/80 leading-relaxed">{p.whyText}</p>
          </div>

          <div className="mt-12 pt-10 border-t border-border/60">
            <p className="text-2xl lg:text-3xl font-extrabold text-navy leading-tight tracking-tight">
              {p.closingStatement}
            </p>
            <p className="mt-5 text-base text-navy/80 leading-relaxed">{p.closingText}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
