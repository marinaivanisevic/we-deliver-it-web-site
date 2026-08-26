/* We Deliver IT — Kontakt stranica: levo podaci firme, desno forma za poruku (Web3Forms) */
import { useState } from "react";
import { ArrowLeft, ArrowRight, Mail, MapPin, Hash, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LOGO = "/images/logo.png";
const WEB3FORMS_ACCESS_KEY = "537dc987-4c3e-4c61-9254-7562a5403765";

export default function Contact() {
  const { t, lang } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: form.name ? `Poruka sa sajta od ${form.name}` : "Poruka sa sajta",
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success(lang === "sr" ? "Poruka je poslata!" : "Message sent!");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error(lang === "sr" ? "Slanje nije uspelo, pokušajte ponovo." : "Sending failed, please try again.");
      }
    } catch {
      toast.error(lang === "sr" ? "Slanje nije uspelo, pokušajte ponovo." : "Sending failed, please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[420px] pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 blur-3xl"
            style={{
              background:
                "radial-gradient(circle at 20% 15%, rgba(20,201,186,0.14) 0%, rgba(234,245,255,0.5) 40%, transparent 70%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, transparent 0%, transparent 40%, white 100%)",
            }}
          />
        </div>

        <div className="container relative max-w-5xl">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-royal transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.contactPage.back}
          </a>

          <h1 className="text-3xl lg:text-[42px] font-extrabold leading-tight text-navy tracking-tight">
            {t.contactPage.title}
          </h1>
          <p className="mt-3 text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed">
            {t.contactPage.subtitle}
          </p>

          <div className="mt-12 grid lg:grid-cols-[1fr_1.2fr] gap-10 items-stretch">
            {/* Left: company info */}
            <div
              className="relative rounded-3xl p-8 lg:p-10 overflow-hidden"
              style={{
                background:
                  "radial-gradient(circle 900px at 10% 0%, #4dfff0 0%, #2ee6d6 10%, #14c9ba 22%, rgba(20,201,186,0.5) 38%, rgba(20,201,186,0.1) 55%, transparent 70%), linear-gradient(135deg, #060a24 0%, #0a1233 25%, #0e1e56 55%, #101b45 100%)",
              }}
            >
              <img src={LOGO} alt="We Deliver IT" className="relative h-10 w-auto" />
              <h2 className="relative mt-6 text-xl font-extrabold text-white">{t.contactPage.companyName}</h2>
              <p className="relative mt-3 text-sm text-white/70 leading-relaxed">
                {t.contactPage.companyDescription}
              </p>

              <div className="relative mt-8 flex flex-col gap-5 pt-6 border-t border-white/15">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-cyan-brand shrink-0 mt-0.5" style={{ color: "#2ee6d6" }} />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                      {t.contactPage.addressLabel}
                    </p>
                    <p className="text-sm text-white mt-0.5">{t.contactPage.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Hash className="w-4 h-4 text-cyan-brand shrink-0 mt-0.5" style={{ color: "#2ee6d6" }} />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                      {t.contactPage.regNumberLabel}
                    </p>
                    <p className="text-sm text-white mt-0.5">{t.contactPage.regNumber}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-4 h-4 text-cyan-brand shrink-0 mt-0.5" style={{ color: "#2ee6d6" }} />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                      {t.contactPage.taxIdLabel}
                    </p>
                    <p className="text-sm text-white mt-0.5">{t.contactPage.taxId}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-cyan-brand shrink-0 mt-0.5" style={{ color: "#2ee6d6" }} />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                      {t.contactPage.emailLabel}
                    </p>
                    <a
                      href="mailto:office@we-deliver.io"
                      className="text-sm text-white mt-0.5 hover:text-cyan-brand transition-colors block"
                    >
                      office@we-deliver.io
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: message form */}
            <div className="rounded-3xl p-8 lg:p-10 border border-border/60 bg-cloud">
              <h2 className="text-xl font-extrabold text-navy mb-6">{t.contactPage.formTitle}</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-navy mb-1.5">
                    {t.contactPage.nameLabel}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange("name")}
                    placeholder={t.contactPage.namePlaceholder}
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-brand/40 transition-shadow"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-navy mb-1.5">
                    {t.contactPage.emailFieldLabel}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange("email")}
                    placeholder={t.contactPage.emailPlaceholder}
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-brand/40 transition-shadow"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-navy mb-1.5">
                    {t.contactPage.messageLabel}
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    maxLength={1000}
                    value={form.message}
                    onChange={handleChange("message")}
                    placeholder={t.contactPage.messagePlaceholder}
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-brand/40 transition-shadow resize-none"
                  />
                  <p className="mt-1.5 text-right text-xs text-muted-foreground">{form.message.length}/1000</p>
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-press w-fit flex items-center gap-2 bg-cyan-brand text-navy font-bold text-sm px-6 py-3.5 rounded-full hover:brightness-105 transition-all shadow-lg shadow-cyan-brand/25 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {t.contactPage.submit}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
