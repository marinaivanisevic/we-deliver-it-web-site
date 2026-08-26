/* We Deliver IT — Footer: logo, kolone linkova, copyright */
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import { toast } from "sonner";

const LOGO = "/images/logo.png";

const linkedServiceSlugs = [
  "it-consulting",
  "software-development",
  "online-store",
  "elearning-platform",
  "ai-blockchain",
  "design-qa",
];

export default function Footer() {
  const { t, lang } = useLanguage();

  const comingSoon = () => toast.info(lang === "sr" ? "Uskoro dostupno" : "Feature coming soon");

  const columns: { title: string; links: { label: string; href?: string }[] }[] = [
    {
      title: t.footer.company,
      links: t.footer.companyLinks.map((label, i) => ({
        label,
        href:
          i === 0
            ? "/about"
            : i === 1
              ? "/careers"
              : i === t.footer.companyLinks.length - 1
                ? "/contact"
                : undefined,
      })),
    },
    {
      title: t.footer.legal,
      links: t.footer.legalLinks.map((label, i) => ({
        label,
        href: ["/privacy-policy", "/terms-of-use", "/cookie-policy"][i],
      })),
    },
    {
      title: t.footer.services,
      links: t.whatWeDo.services.map((s) => ({
        label: s.title,
        href: linkedServiceSlugs.includes(s.slug) ? `/services/${s.slug}` : undefined,
      })),
    },

    //{ title: t.footer.resources, links: t.footer.resourcesLinks },
  ];

  return (
    <footer className="pt-12 pb-8 border-t border-border/60 mt-8 bg-cloud">
      <div className="container">
        <div className="grid lg:grid-cols-[240px_1fr_180px] gap-10">
          {/* Logo */}
          <div>
            <Link href="/" className="inline-flex">
              <img src={LOGO} alt="We Deliver IT" className="h-20 w-auto" />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-[220px] leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:ml-40">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-[18px] font-extrabold text-navy mb-4">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.links.map((item) =>
                    item.href ? (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="text-[14px] text-muted-foreground hover:text-royal transition-colors text-left"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ) : (
                      <li key={item.label}>
                        <button
                          onClick={comingSoon}
                          className="text-[14px] text-muted-foreground hover:text-royal transition-colors text-left"
                        >
                          {item.label}
                        </button>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col items-start gap-3">
            <Link href="/contact" className="text-[18px] font-bold text-navy hover:text-royal transition-colors">
              {t.footer.letsTalk}
            </Link>
            <Link
              href="/contact"
              className="btn-press flex items-center gap-2 border-2 border-navy/15 text-navy font-bold text-[13px] px-4 py-2 rounded-full hover:border-navy/40 transition-all"
            >
              {t.footer.bookCall}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/60">
          <p className="text-xs text-muted-foreground">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
