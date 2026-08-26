/* We Deliver IT — Glavna stranica: sklapanje svih sekcija po redosledu templejta */
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Technologies from "@/components/Technologies";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <Stats />
        <Services />
        <Work />
        <Testimonials />
        <Technologies />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

