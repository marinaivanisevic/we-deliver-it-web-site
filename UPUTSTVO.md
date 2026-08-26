# We Deliver IT — Uputstvo za pokretanje (npm verzija)

Ovo je samostalna verzija projekta — sve slike su lokalne, radi bilo gde.

## Preduslovi
- Node.js 20+ (preporučeno 22) — https://nodejs.org

## Pokretanje (razvoj)
```bash
npm install
npm run dev
```
Sajt će biti dostupan na http://localhost:3000

## Build za produkciju
```bash
npm run build
```
Gotovi fajlovi se nalaze u `dist/public/` — možete ih postaviti na bilo koji hosting (Netlify, Vercel, cPanel...).

Za lokalni pregled build verzije:
```bash
npm run preview
```

## Struktura projekta
```
client/
  public/images/          — sve slike (logo, avion, case study slike)
  src/
    pages/Home.tsx        — glavna stranica (sklapa sve sekcije)
    components/
      Header.tsx          — navigacija + prekidač jezika (EN/SR)
      Hero.tsx            — hero sekcija sa avionom
      TrustedBy.tsx       — logotipi klijenata
      Stats.tsx           — statistike (15+ godina, 100+ projekata...)
      Services.tsx        — grid usluga (3x2)
      Work.tsx            — case study kartice
      Technologies.tsx    — traka tehnologija
      CTA.tsx             — plava CTA sekcija sa kancelarijama
      Footer.tsx          — futer sa linkovima
    contexts/LanguageContext.tsx — logika za jezik (EN/SR)
    lib/translations.ts   — SVI TEKSTOVI na oba jezika (ovde menjate sadržaj!)
    index.css             — boje i globalni stilovi
```

## Izmena sadržaja
- **Tekstovi**: sve je u `client/src/lib/translations.ts` (i engleski i srpski)
- **Slike**: zamenite fajlove u `client/public/images/` (zadržite iste nazive)
- **Boje**: promenljive na vrhu `client/src/index.css` (--navy, --cyan-brand, --royal)
