import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import StickyCTA from "./StickyCTA";

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background bg-grid-pattern text-foreground antialiased min-h-screen">
      <Navigation />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
      <StickyCTA />
    </div>
  );
}
