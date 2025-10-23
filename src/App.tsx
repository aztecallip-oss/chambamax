import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { HowItWorks } from "./components/HowItWorks";
import { Banner } from "./components/Banner";
import { Features } from "./components/Features";
import { Testimonials } from "./components/Testimonials";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Helmet } from "react-helmet";

export default function App() {
  return (
    <>
      <Helmet>
        <title>ChambaMax® - Conectando talento con oportunidades | Empleos Internacionales</title>
        <meta name="description" content="ChambaMax® conecta personas con empleos nacionales e internacionales. Ofrecemos asesoría legal, apoyo en trámites migratorios y hospedaje para extranjeros y nómadas digitales." />
        <meta name="keywords" content="empleos internacionales, trabajo en el extranjero, asesoría migratoria, visas de trabajo, nómadas digitales, hospedaje extranjeros, empleos globales, ChambaMax" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chambamax.com/" />
        <meta property="og:title" content="ChambaMax® - Conectando talento con oportunidades" />
        <meta property="og:description" content="Encuentra empleos internacionales con asesoría legal completa y apoyo migratorio. Tu próxima oportunidad sin fronteras." />
        <meta property="og:image" content="https://chambamax.com/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://chambamax.com/" />
        <meta property="twitter:title" content="ChambaMax® - Conectando talento con oportunidades" />
        <meta property="twitter:description" content="Encuentra empleos internacionales con asesoría legal completa y apoyo migratorio." />
        <meta property="twitter:image" content="https://chambamax.com/og-image.jpg" />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />
        <meta name="author" content="ChambaMax®" />
        <link rel="canonical" href="https://chambamax.com/" />
      </Helmet>

      <div className="min-h-screen bg-[#0B0F14]">
        <Header />
        <main>
          <Hero />
          <Services />
          <HowItWorks />
          <Banner />
          <Features />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}