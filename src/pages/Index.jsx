import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WildMarquee from "@/components/WildMarquee";
import LogoMarquee from "@/components/LogoMarquee";
import Services from "@/components/Services";
import SEODetail from "@/components/SEODetail";
import PPCDetail from "@/components/PPCDetail";
import SocialDetail from "@/components/SocialDetail";
import CTABox from "@/components/CTABox";
import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Index() {
  return (
    <div className="bg-background bg-grid-pattern text-foreground antialiased min-h-screen">
      <Navigation />
      <main>
        <h1 className="sr-only">UDM Techno Solutions — Digital Marketing Agency in Indore</h1>
        <Hero />
        <WildMarquee />
        <LogoMarquee />
        <Services />
        <SEODetail />
        <PPCDetail />
        <SocialDetail />
        <CTABox />
        <CaseStudies />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
