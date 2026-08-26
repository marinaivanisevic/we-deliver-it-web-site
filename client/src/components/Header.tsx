/* We Deliver IT — Header: logo levo, nav sredina, jezik + Book a call desno */
import { useState, useEffect, useRef } from "react";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

const LOGO = "/images/logo.png";

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [location, setLocation] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!servicesOpen) return;
    const onClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [servicesOpen]);

  useEffect(() => {
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  const navItems = [
    { id: "services", label: t.nav.services, dropdown: true, href: "#services" },
    { id: "solutions", label: t.nav.solutions, dropdown: false, href: "#work" },
    //{ label: t.nav.industries, dropdown: true, href: "#work" },
    //{ label: t.nav.caseStudies, dropdown: false, href: "#work" },
   // { label: t.nav.company, dropdown: true, href: "#contact" },
    { id: "contact", label: t.nav.contact, dropdown: false, href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (item: { id: string; href: string }) => {
    if (location !== "/") {
      if (item.id === "contact") {
        setMobileOpen(false);
        setLocation("/contact");
        return;
      }
      if (item.id === "solutions") {
        setMobileOpen(false);
        setLocation("/projects");
        return;
      }
    }
    scrollTo(item.href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-xl shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 lg:h-[72px]">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center shrink-0"
          onClick={(e) => {
            if (location === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <img src={LOGO} alt="We Deliver IT" className="h-9 lg:h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) =>
            item.id === "services" ? (
              <div key={item.label} ref={servicesRef} className="relative">
                <button
                  onClick={() => {
                    if (location === "/") scrollTo(item.href);
                    setServicesOpen((v) => !v);
                  }}
                  className="flex items-center gap-1 text-[18px] font-semibold text-navy hover:text-royal transition-colors"
                >
                  {item.label}
                  <ChevronDown
                    className={`w-3.5 h-3.5 opacity-60 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-3 w-72 rounded-2xl border border-border/60 bg-white shadow-xl shadow-navy/10 p-2 z-50">
                    {t.whatWeDo.services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={() => setServicesOpen(false)}
                        className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-navy hover:bg-cloud hover:text-royal transition-colors"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className="flex items-center gap-1 text-[18px] font-semibold text-navy hover:text-royal transition-colors"
              >
                {item.label}
                {item.dropdown && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
              </button>
            )
          )}
        </nav>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language switcher */}
          <div className="flex items-center rounded-full border border-border p-0.5 bg-white/70">
            {(["en", "sr"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide transition-colors ${
                  lang === l ? "bg-navy text-white" : "text-navy/60 hover:text-navy"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <Link
            href="/contact"
            className="btn-press flex items-center gap-2 bg-cyan-brand text-navy font-bold text-[13px] px-5 py-2.5 rounded-full hover:brightness-105 transition-all"
          >
            {t.nav.bookCall}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-2">
          <div className="flex items-center rounded-full border border-border p-0.5 bg-white/70">
            {(["en", "sr"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-0.5 rounded-full text-[11px] font-bold uppercase ${
                  lang === l ? "bg-navy text-white" : "text-navy/60"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-navy"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-lg">
          <nav className="container py-4 flex flex-col gap-1">
            {navItems.map((item) =>
              item.id === "services" ? (
                <div key={item.label}>
                  <button
                    onClick={() => {
                      if (location === "/") scrollTo(item.href);
                      setMobileServicesOpen((v) => !v);
                    }}
                    className="w-full flex items-center justify-between text-left py-2.5 px-2 text-sm font-semibold text-navy hover:text-royal transition-colors"
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 opacity-60 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-4 flex flex-col gap-0.5 pb-2">
                      {t.whatWeDo.services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileServicesOpen(false);
                          }}
                          className="text-left py-2 px-2 text-sm text-navy/80 hover:text-royal transition-colors"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="text-left py-2.5 px-2 text-sm font-semibold text-navy hover:text-royal transition-colors"
                >
                  {item.label}
                </button>
              )
            )}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-press mt-2 flex items-center justify-center gap-2 bg-cyan-brand text-navy font-bold text-sm px-5 py-3 rounded-full"
            >
              {t.nav.bookCall}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
