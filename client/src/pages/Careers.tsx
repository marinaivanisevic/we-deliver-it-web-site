/* We Deliver IT — Karijera: jednostavna stranica bez trenutno otvorenih pozicija */
import { ArrowLeft, Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Careers() {
  const { t } = useLanguage();

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
            {t.careersPage.back}
          </a>

          <div className="flex items-center gap-4 mb-12">
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-brand/20 to-royal/10 border border-white shadow-sm shrink-0">
              <Briefcase className="text-royal w-7 h-7" />
            </div>
            <h1 className="text-3xl lg:text-[38px] font-extrabold leading-tight text-navy tracking-tight">
              {t.careersPage.title}
            </h1>
          </div>

          <p className="rounded-2xl p-6 text-base lg:text-lg text-navy/80 leading-relaxed bg-cyan-brand/10 border border-cyan-brand/25">
            {t.careersPage.messageBefore}
            <a href="mailto:office@we-deliver.io" className="font-semibold text-royal hover:underline">
              office@we-deliver.io
            </a>
            {t.careersPage.messageAfter}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
