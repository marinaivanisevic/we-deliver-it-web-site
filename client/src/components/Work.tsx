/* We Deliver IT — Our work: tamne case study kartice u karuselu */
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";
import { useEffect, useRef, useState } from "react";
import CaseImage from "@/components/CaseImage";

export default function Work() {
  const { t, lang } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollPrev(el.scrollLeft > 4);
    setCanScrollNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  const arrowClass = (enabled: boolean) =>
    `btn-press flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${
      enabled
        ? "border-navy/15 text-navy hover:border-navy/40 hover:bg-navy hover:text-white"
        : "border-navy/10 text-navy/25 cursor-not-allowed"
    }`;

  return (
    <section id="work" className="relative py-16 lg:py-24 overflow-hidden">
      <div
        className="absolute top-1/4 -left-24 w-96 h-96 rounded-full blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(23,53,224,0.10) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-[90px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(20,201,186,0.12) 0%, transparent 70%)" }}
      />
      <div className="container relative">
        <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-start">
          {/* Left: heading */}
          <div className="lg:sticky lg:top-28">
            <p className="section-label mb-3">{t.work.label}</p>
            <h2 className="text-3xl lg:text-[42px] font-extrabold text-navy tracking-tight mb-8 leading-tight">
              {t.work.title}
            </h2>
            <Link
              href="/projects"
              className="btn-press flex items-center gap-2 border-2 border-navy/15 text-navy font-bold text-sm px-5 py-3 rounded-full hover:border-navy/40 transition-all bg-white w-fit"
            >
              {t.work.viewAll}
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Carousel arrows */}
            <div className="hidden lg:flex gap-2 mt-8">
              <button
                onClick={() => scroll(-1)}
                disabled={!canScrollPrev}
                className={arrowClass(canScrollPrev)}
                aria-label="Previous"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll(1)}
                disabled={!canScrollNext}
                className={arrowClass(canScrollNext)}
                aria-label="Next"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: dark cards */}
          <div className="relative min-w-0">
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto pb-1 scrollbar-none snap-x snap-mandatory"
              style={{ scrollbarWidth: "none" }}
            >
              {t.work.cases.map((c, i) => (
                <article
                  key={c.title}
                  className="group w-[280px] sm:w-[320px] shrink-0 snap-start rounded-2xl overflow-hidden flex flex-col"
                  style={{ backgroundColor: "#0a1233" }}
                >
                  <div className="overflow-hidden">
                    <CaseImage
                      index={i}
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
                    <h3 className="text-lg font-extrabold text-white leading-snug mb-3">
                      {c.title}
                    </h3>
                    <p className="text-[13px] text-white/60 leading-relaxed mb-6 flex-1">
                      {c.description}
                    </p>
                    {c.url ? (
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[13px] font-bold text-white hover:text-cyan-brand transition-colors w-fit"
                      >
                        {t.work.viewCase}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <button
                        onClick={() => toast.info(lang === "sr" ? "Uskoro dostupno" : "Feature coming soon")}
                        className="flex items-center gap-2 text-[13px] font-bold text-white hover:text-cyan-brand transition-colors w-fit"
                      >
                        {t.work.viewCase}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {/* Right-edge fade to hint more content */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

            {/* Mobile arrows */}
            <div className="flex lg:hidden gap-2 mt-4">
              <button
                onClick={() => scroll(-1)}
                disabled={!canScrollPrev}
                className={arrowClass(canScrollPrev)}
                aria-label="Previous"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll(1)}
                disabled={!canScrollNext}
                className={arrowClass(canScrollNext)}
                aria-label="Next"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
