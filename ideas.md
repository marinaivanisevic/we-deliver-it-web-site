# We Deliver IT — Dizajn specifikacija (replikacija templejta)

## Referenca kao izvor istine
Korisnik je dostavio gotov dizajn templejt (ChatGPT Image 20. jul 2026) koji treba VERNO replicirati u React kodu. Ovo NIJE slobodna kreacija — referenca je ground-truth spec.

## Ključne karakteristike reference

### Boje
- Tamno plava (navy): #0B1B4D / #101E5A — naslovi, tekst, footer CTA pozadina
- Cyan/tirkizna: #22D1C6 / #2EE6D6 — akcenat ("real impact.", dugmad "Book a call")
- Kraljevsko plava: #1735E0 / #2447F0 — avion, ikonice
- Svetlo siva/bela pozadina: #FFFFFF, kartice #F7F9FC
- CTA sekcija: tamno plavi gradijent (navy → plava)

### Tipografija
- Sans-serif, bold za naslove (izgleda kao Manrope/Plus Jakarta Sans)
- Naslovi tamno navy, vrlo bold (700-800)
- Mali label naslovi sekcija: uppercase, plavi, mali font, letter-spacing

### Struktura stranice (odozgo nadole)
1. **Header**: logo levo (avion ikona + WE DELIVER IT), nav sredina (Services, Solutions, Industries, Case Studies, Company, Resources — sa dropdown strelicama), "Book a call" cyan dugme desno
2. **Hero**: levo naslov "We build software solutions that drive real impact." (real impact. u cyan), podnaslov, 2 dugmeta (Book a call - cyan, Explore our work - outline); desno veliki 3D origami avion
3. **Trusted by**: label "TRUSTED BY INNOVATIVE COMPANIES" + 5 logotipa (Nordeus, Atlassian, hive freedom, dataplor, PRODAFT)
4. **Stats bar**: kartica sa 4 statistike (15+ Years, 100+ Projects, 2 Offices, 50+ Experts) sa plavim ikonicama
5. **What we do**: label "WHAT WE DO", naslov "Digital solutions built around your goals", desno opis; grid 3x2 kartica usluga (Custom Software Development, Mobile App Development, Cloud & DevOps, AI & Emerging Tech, Product Design & UX/UI, QA & Software Testing) — svaka sa ikonom, naslovom, opisom, strelicom
6. **Our work**: label "OUR WORK", naslov "Solutions we're proud of", dugme "View all case studies"; desno 3 tamne kartice case studija (Investment Platform Redesign, Smart Delivery Management System, Cardano Staking Dashboard) sa slikama dashboard-a, kategorijom, naslovom, opisom i "View case study" linkom; strelice za carousel
7. **Technologies**: traka sa logoima (Laravel, React, Flutter, AWS, Azure, Python, Docker, Kubernetes)
8. **CTA sekcija**: tamno plavi gradijent, "Let's create digital solutions that drive results.", "Let's talk" dugme; EU Office (Novi Sad, Serbia), US Office (Wilmington, DE, USA), email hello@we-deliver.io, social ikone; mali avion desno
9. **Footer**: logo, kolone linkova (Services, Solutions, Company, Resources), "Let's talk"/"Book a call" desno; copyright + Privacy Policy/Terms

### Assets
- Logo: korisnikov fajl logo_WeDeliverIT_1.png (avion + WE DELIVER IT tekst)
- Avion ikona: logo_WeDeliverIT_avion.png (mala verzija za header)
- Veliki hero avion: airplane_transparent.png (izdvojen iz templejta)
- Case study slike: generisati ili koristiti tamne dashboard mockup-e

### Interakcije
- Suptilni hover efekti na karticama (podizanje, senka)
- Smooth scroll navigacija
- Fade-in animacije pri skrolovanju (blage, ispod 300ms za UI)
