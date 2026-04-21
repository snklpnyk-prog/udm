import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import About from "./pages/About.tsx";
import Blogs, { BlogPost } from "./pages/Blogs.tsx";
import { PrivacyPolicy, Terms } from "./pages/Legal.tsx";
import CaseStudiesPage, { CaseStudyDetail } from "./pages/CaseStudiesPage.tsx";
import Contact from "./pages/Contact.tsx";
import ScrollToTop from "./components/sociospark/ScrollToTop.tsx";
import SEOPage from "./pages/services/SEO.tsx";
import GMBPage from "./pages/services/GMB.tsx";
import MetaAdsPage from "./pages/services/MetaAds.tsx";
import GoogleAdsPage from "./pages/services/GoogleAds.tsx";
import WebsitePage from "./pages/services/Website.tsx";
import SocialMediaPage from "./pages/services/SocialMedia.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/services/seo" element={<SEOPage />} />
          <Route path="/services/google-my-business" element={<GMBPage />} />
          <Route path="/services/meta-ads" element={<MetaAdsPage />} />
          <Route path="/services/google-ads" element={<GoogleAdsPage />} />
          <Route path="/services/website" element={<WebsitePage />} />
          <Route path="/services/social-media" element={<SocialMediaPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
