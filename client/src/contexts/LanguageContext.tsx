/* We Deliver IT — i18n context (EN/SR) */
import { createContext, useContext, useState, ReactNode } from "react";
import { translations, Lang, TranslationKeys } from "@/lib/translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("wdi-lang") : null;
    return saved === "sr" ? "sr" : "en";
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
