/* We Deliver IT — Svi naši projekti: grid svih case studija */
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const caseImages = [
  "/images/work/upstrivesystem.jpg",
  "/images/work/intersect.jpg",
  "/images/work/lemit.jpg",
  "/images/work/mindmotions.jpg",
  "/images/work/eman.jpg",
  "/images/work/caffe-confetti.jpg",
  "/images/work/synergy.jpg",
  "/images/work/gorsen.jpg",
  "/images/work/xenonas.jpg",
  "/images/work/ograde-vestacka-trava.jpg",
  "/images/work/itema.jpg",
  "/images/work/limen.jpg",
];

export default function Projects() {
  const { t } = useLanguage();
  const p = t.projectsPage;

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

        <div className="container relative max-w-6xl">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-royal transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {p.back}
          </a>

          <h1 className="text-3xl lg:text-[42px] font-extrabold leading-tight text-navy tracking-tight">
            {p.title}
          </h1>
          <p className="mt-4 text-base lg:text-lg text-navy/80 leading-relaxed max-w-2xl">{p.subtitle}</p>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.work.cases.map((c, i) => (
              <article
                key={c.title}
                className="group rounded-2xl overflow-hidden flex flex-col"
                style={{ backgroundColor: "#0a1233" }}
              >
                <div className="overflow-hidden">
                  <img
                    src={caseImages[i]}
                    alt={c.title}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.15em] mb-3"
                    style={{ color: "#2ee6d6" }}
                  >
                    {c.category}
                  </p>
                  <h3 className="text-lg font-extrabold text-white leading-snug mb-3">{c.title}</h3>
                  <p className="text-[13px] text-white/60 leading-relaxed mb-6 flex-1">{c.description}</p>
                  {c.url && (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[13px] font-bold text-white hover:text-cyan-brand transition-colors w-fit"
                    >
                      {t.work.viewCase}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
