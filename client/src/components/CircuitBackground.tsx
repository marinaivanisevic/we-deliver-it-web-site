/* We Deliver IT — pozadinski sloj: samo tihi "treperući" krugovi (glow blobs) u brend bojama,
   raspoređeni po fiksnim pozicijama preko cele stranice. Nema statične linijske/dot teksture —
   svaki krug lagano pulsira (pojavljuje se i gasi) nezavisno, sa različitim tajmingom. */
/* Čvorovi koji tiho pulsiraju — fiksne pozicije (% viewporta), različiti tajminzi
   da ne "trepere" svi u istom ritmu. */
const AMBIENT_NODES = [
  { top: "16%", left: "10%", size: 170, delay: "0s", duration: "6.5s", color: "#1735e0" },
  { top: "58%", left: "82%", size: 190, delay: "1.6s", duration: "7.5s", color: "#2ee6d6" },
  { top: "36%", left: "52%", size: 150, delay: "3.2s", duration: "6s", color: "#f5820a" },
  { top: "80%", left: "20%", size: 180, delay: "4.4s", duration: "7s", color: "#2ee6d6" },
  { top: "48%", left: "6%", size: 165, delay: "5.1s", duration: "7.2s", color: "#f5820a" },
  { top: "70%", left: "48%", size: 175, delay: "0.9s", duration: "6.2s", color: "#1735e0" },
];

export default function CircuitBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {AMBIENT_NODES.map((n, i) => (
        <div
          key={i}
          className="circuit-ambient-node absolute rounded-full"
          style={{
            top: n.top,
            left: n.left,
            width: n.size,
            height: n.size,
            marginLeft: -n.size / 2,
            marginTop: -n.size / 2,
            background: `radial-gradient(circle, ${n.color}55 0%, ${n.color}00 70%)`,
            animationDelay: n.delay,
            animationDuration: n.duration,
          }}
        />
      ))}
    </div>
  );
}
