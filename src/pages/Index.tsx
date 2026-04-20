import Navigation from "@/components/sociospark/Navigation";
import Hero from "@/components/sociospark/Hero";
import WildMarquee from "@/components/sociospark/WildMarquee";
import LogoMarquee from "@/components/sociospark/LogoMarquee";
import Services from "@/components/sociospark/Services";
import SEODetail from "@/components/sociospark/SEODetail";
import PPCDetail from "@/components/sociospark/PPCDetail";
import SocialDetail from "@/components/sociospark/SocialDetail";
import CTABox from "@/components/sociospark/CTABox";
import CaseStudies from "@/components/sociospark/CaseStudies";
import Footer from "@/components/sociospark/Footer";
import WhatsAppButton from "@/components/sociospark/WhatsAppButton";

const Index = () => {
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
};

export default Index;
