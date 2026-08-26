/* We Deliver IT — Naši partneri: traka sa logoima klijenata koja se pomera */
import { useLanguage } from "@/contexts/LanguageContext";

const partners = [
  { name: "Continents Apart", logo: "/images/partners/continents-apart.png", url: "https://www.continentsapart.com/" },
  { name: "UpStrive", logo: "/images/partners/upstrive.png", url: "https://upstrivesystem.com" },
  { name: "Unival Logistic", logo: "/images/partners/unival-logistic.png", url: "https://unival-logistics.com/" },
  { name: "Emilia Ohrtmann", logo: "/images/partners/emilia-ohrtmann.png", url: "https://emiliaohrtmann.com/" },
  { name: "Mind Motions", logo: "/images/partners/mind-motions.png", url: "https://www.mindmotions.com/" },
  { name: "Advanced Technologies", logo: "/images/partners/advanced-technologies.png", url: "https://www.atadv.net/" },
  { name: "Udekom", logo: "/images/partners/udekom.png", url: "https://udekom.org.rs/home.html" },
  { name: "GIZ", logo: "/images/partners/giz.png", url: "https://nemackasaradnja.rs/giz/" },
  { name: "AIO Pro", logo: "/images/partners/aio-pro.png", url: "https://www.aio.rs/" },
  { name: "Gorsen", logo: "/images/partners/gorsen.png", url: "https://gorsen.rs/" },
  { name: "Avan i Tučak", logo: "/images/partners/avan-i-tucak.png", url: "https://avanitucak.rs/" },
  { name: "Intersect", logo: "/images/partners/intersect.png", url: "https://intersectmbo.org/" },
  { name: "Lemit", logo: "/images/partners/lemit.png", url: "https://lemit.rs" },
];

export default function TrustedBy() {
  const { t } = useLanguage();
  return (
    <section className="py-8">
      <div className="container">
        <div className="relative py-2 overflow-hidden">
          <p className="relative text-[10px] font-bold uppercase tracking-[0.15em] text-navy/50 px-6 lg:px-8 mb-4">
            {t.trusted.label}
          </p>
          <div className="relative overflow-hidden">
            <div className="flex w-max gap-4 pl-6 lg:pl-8 animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
              {[...partners, ...partners].map((p, i) => (
                <a
                  key={`${p.name}-${i}`}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center shrink-0 w-40 h-20 rounded-xl bg-white border border-border/60 px-5 grayscale-0 opacity-100 hover:grayscale hover:opacity-70 transition-all"
                >
                  <img src={p.logo} alt={p.name} className="max-w-full max-h-10 object-contain" />
                </a>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          section .animate-\\[marquee_40s_linear_infinite\\] { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
