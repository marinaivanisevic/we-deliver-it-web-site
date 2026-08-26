/* We Deliver IT — Slika case studije sa rezervom ako fajl ne postoji.
   NOVI FAJL → snimi kao: client/src/components/CaseImage.tsx

   Redosled u caseImages mora da prati redosled u t.work.cases (translations.ts).
   Ako neka slika nedostaje, umesto slomljene ikonice prikazuje se
   tamni brendirani blok sa inicijalom, pa sajt i dalje izgleda uredno. */
import { useState } from "react";

export const caseImages = [
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

export default function CaseImage({
  index,
  alt,
  className = "",
}: {
  index: number;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const src = caseImages[index];

  if (!src || failed) {
    return (
      <div
        className={`flex items-center justify-center ${className}`}
        style={{ background: "linear-gradient(135deg, #0a1233 0%, #0e1e56 60%, #1735e0 100%)" }}
        aria-label={alt}
        role="img"
      >
        <span className="text-3xl font-extrabold" style={{ color: "#2ee6d6" }}>
          {alt.trim().charAt(0).toUpperCase()}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
