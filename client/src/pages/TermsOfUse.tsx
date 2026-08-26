/* We Deliver IT — Uslovi korišćenja: pravna stranica sa sekcijama */
import { ArrowLeft, Scale } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfUse() {
  const { t } = useLanguage();
  const p = t.termsPage;

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

        <div className="container relative max-w-3xl">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-royal transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {p.back}
          </a>

          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-brand/20 to-royal/10 border border-white shadow-sm shrink-0">
              <Scale className="text-royal w-7 h-7" />
            </div>
            <h1 className="text-3xl lg:text-[38px] font-extrabold leading-tight text-navy tracking-tight">
              {p.label}
            </h1>
          </div>
          <p className="text-xs text-muted-foreground mb-8">{p.updated}</p>

          <p className="text-lg text-navy/80 leading-relaxed">{p.intro}</p>

          <div className="mt-10 flex flex-col gap-10">
            {p.sections.map((section) => (
              <div key={section.heading} className="pt-8 border-t border-border/60">
                <h2 className="text-lg font-extrabold text-navy mb-3">{section.heading}</h2>
                <p className="text-base text-navy/80 leading-relaxed">{section.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-border/60">
            <h2 className="text-lg font-extrabold text-navy mb-3">{p.contactTitle}</h2>
            <p className="text-base text-navy/80 leading-relaxed">{p.contactText}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
