/* We Deliver IT — i18n context (EN/SR)

   Izbor jezika, po prioritetu:
   1. Jezik koji je korisnik ranije ručno izabrao (localStorage)
   2. Jezik podešen u pregledaču — ako je sa naših prostora, ide srpski
   3. Engleski kao rezerva */
import { createContext, useContext, useState, ReactNode } from "react";
import { translations, Lang, TranslationKeys } from "@/lib/translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/* Kodovi jezika za koje prikazujemo srpsku verziju.
   sr = srpski, hr = hrvatski, bs = bosanski, cnr/me = crnogorski,
   sh = staro označavanje srpskohrvatskog (još uvek postoji u nekim sistemima). */
const REGIONAL_LANGS = ["sr", "hr", "bs", "cnr", "me", "sh"];

function detectLang(): Lang {
  if (typeof window === "undefined") return "en";

  /* navigator.languages vraća sve jezike koje je korisnik podesio, po prioritetu.
     Gledamo samo deo pre crtice: "sr-Latn-RS" -> "sr", "en-US" -> "en". */
  const candidates =
    navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language];

  for (const entry of candidates) {
    const base = entry.toLowerCase().split("-")[0];
    if (REGIONAL_LANGS.includes(base)) return "sr";
    if (base === "en") return "en";
  }

  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("wdi-lang") : null;
    if (saved === "sr" || saved === "en") return saved;
    return detectLang();
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("wdi-lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
