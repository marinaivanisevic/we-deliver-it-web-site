/* We Deliver IT — Hero: naslov levo, mreža povezanih čvorova desno */
import { ArrowRight, Play } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

/* Čvorovi mreže: pozicija, poluprečnik i boja (royal/cyan/narandžasta — brend paleta). */
const NET_NODES = [
  { id: "n1", cx: 250, cy: 130, r: 40, color: "#1735e0", delay: "0s" },
  { id: "n2", cx: 110, cy: 190, r: 22, color: "#2ee6d6", delay: "0.4s" },
  { id: "n3", cx: 390, cy: 170, r: 26, color: "#f5820a", delay: "0.8s" },
  { id: "n4", cx: 90, cy: 330, r: 16, color: "#2ee6d6", delay: "1.2s" },
  { id: "n5", cx: 300, cy: 310, r: 30, color: "#1735e0", delay: "0.2s" },
  { id: "n6", cx: 420, cy: 300, r: 14, color: "#2ee6d6", delay: "1.6s" },
  { id: "n7", cx: 200, cy: 400, r: 18, color: "#f5820a", delay: "0.6s" },
  { id: "n8", cx: 350, cy: 410, r: 16, color: "#1735e0", delay: "1s" },
] as const;

/* Linije koje povezuju čvorove — svaka nasleđuje boju svog izvornog čvora. */
const NET_EDGES: [string, string][] = [
  ["n1", "n2"],
  ["n1", "n3"],
  ["n1", "n5"],
  ["n2", "n4"],
  ["n5", "n3"],
  ["n5", "n6"],
  ["n5", "n7"],
  ["n7", "n8"],
  ["n3", "n6"],
];

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

        {/* Right: network graph */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[520px] aspect-square">
            <svg viewBox="0 0 500 500" className="relative w-full h-full">
              {/* Linije — prate "tok" animacijom isprekidane linije */}
              <g fill="none" strokeLinecap="round">
                {NET_EDGES.map(([fromId, toId], i) => {
                  const from = NET_NODES.find((n) => n.id === fromId)!;
                  const to = NET_NODES.find((n) => n.id === toId)!;
                  return (
                    <line
                      key={i}
                      x1={from.cx}
                      y1={from.cy}
                      x2={to.cx}
                      y2={to.cy}
                      stroke={from.color}
                      strokeOpacity={0.35}
                      strokeWidth={2}
                      strokeDasharray="6 10"
                      className="net-edge"
                      style={{ animationDelay: `${i * 0.3}s` }}
                    />
                  );
                })}
              </g>

              {/* Čvorovi — meki sjaj iza + puni krug, svaki lagano pulsira */}
              <g>
                {NET_NODES.map((n) => (
                  <g key={n.id} className="net-node" style={{ animationDelay: n.delay }}>
                    <circle cx={n.cx} cy={n.cy} r={n.r * 1.6} fill={n.color} opacity={0.15} style={{ filter: "blur(6px)" }} />
                    <circle cx={n.cx} cy={n.cy} r={n.r} fill={n.color} />
                  </g>
                ))}
              </g>
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        .hero-float {
          animation: float 6s ease-in-out infinite;
        }

        /* Čvorovi lagano pulsiraju oko sopstvenog centra (fill-box da se ne skaliraju
           od (0,0) ugla celog SVG-a), a linije "teku" isprekidanom animacijom. */
        @keyframes netPulse {
          0%, 100% { opacity: 0.85; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.12); }
        }
        .net-node {
          transform-box: fill-box;
          transform-origin: center;
          animation: netPulse 3.2s ease-in-out infinite;
        }
        @keyframes netFlow {
          to { stroke-dashoffset: -160; }
        }
        .net-edge {
          animation: netFlow 3.5s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-float, .net-node, .net-edge { animation: none !important; }
        }
      `}</style>
    </section>
  );
}