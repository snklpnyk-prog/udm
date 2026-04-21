import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Footer() {
  const footerRef = useScrollReveal<HTMLDivElement>({
    className: "is-running",
    once: true,
    threshold: 0.1,
  });

  return (
    <footer className="bg-black pt-20 pb-10" id="footer">
      <div
        ref={footerRef}
        className="animate-on-scroll max-w-7xl mx-auto px-6"
        style={{ animation: "fadeSlideIn 0.8s ease-out 0.1s both" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-8 mb-16 w-full">
          <div
            className="col-span-1 md:col-span-12 flex gap-3 md:gap-5 animate-on-scroll pb-4 items-baseline"
            style={{
              animation: "fadeSlideIn 1s ease-out 0.2s both",
              animationPlayState: "inherit",
            }}
          >
            <h2 className="text-6xl md:text-9xl lg:text-[10rem] leading-[0.8] tracking-tighter font-black text-white select-none">
              UDM Techno
            </h2>
            <span className="text-xl md:text-3xl font-bold text-brand tracking-tighter relative -top-1 md:-top-3 border-2 border-brand px-3 py-1 rounded-full rotate-3">
              SOLUTIONS
            </span>
          </div>

          <div
            className="col-span-1 md:col-span-12 grid grid-cols-1 lg:grid-cols-12 animate-on-scroll mt-2 gap-x-12 gap-y-12 border-t-4 border-zinc-800 pt-16"
            style={{
              animation: "fadeSlideIn 0.8s ease-out 0.3s both",
              animationPlayState: "inherit",
            }}
          >
            <div className="col-span-1 lg:col-span-5 flex flex-col items-start justify-between gap-10">
              <p className="text-2xl text-zinc-400 font-bold tracking-tight leading-relaxed max-w-md">
                Indore's trusted digital marketing partner. Let's grow your brand together.
              </p>

              <div className="not-italic text-zinc-300 font-medium text-base leading-relaxed space-y-3">
                <div className="flex items-start gap-3">
                  <iconify-icon icon="solar:map-point-linear" className="text-2xl text-brand mt-1 shrink-0" />
                  <span>
                    Shagun Tower, Office No.508, Plot No. 7 PU4, AB Rd,<br />
                    above Apna Sweets, Vijay Nagar, Scheme No 54,<br />
                    Indore, Madhya Pradesh 452010
                  </span>
                </div>
                <a href="tel:+919993663668" className="flex items-center gap-3 hover:text-brand transition-colors">
                  <iconify-icon icon="solar:phone-linear" className="text-2xl text-brand" />
                  099936 63668
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/919993663668"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand hover:bg-white text-white hover:text-black px-6 py-4 rounded-xl text-base font-black transition-colors duration-300 border-4 border-brand hover:border-white tracking-tighter"
                >
                  Chat on WhatsApp
                </a>
                <a
                  href="https://calendly.com/udmtechnosolution/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-6 py-4 rounded-xl text-base font-black border-4 border-white hover:border-brand hover:text-brand transition-colors tracking-tighter"
                >
                  Schedule a 15-min Call
                </a>
                <a
                  href="tel:+919993663668"
                  aria-label="Call us"
                  className="w-14 h-14 rounded-xl bg-zinc-800 hover:bg-brand text-white flex items-center justify-center transition-colors duration-300 group border-4 border-zinc-800 hover:border-brand"
                >
                  <iconify-icon
                    icon="solar:phone-calling-linear"
                    className="text-2xl group-hover:rotate-12 transition-transform"
                  />
                </a>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-10 lg:pl-10 w-full">
              {[
                { title: "Sitemap", links: [["Home", "/"], ["About", "/about"], ["Blog", "/blog"], ["Get Proposal", "/get-proposal"]] },
                { title: "Services", links: [["SEO", "/services/seo"], ["Google My Business", "/services/google-my-business"], ["Meta Ads", "/services/meta-ads"], ["Google Ads", "/services/google-ads"], ["Website", "/services/website"], ["Social Media", "/services/social-media"]] },
                { title: "Social", links: [["Instagram", "https://instagram.com"], ["LinkedIn", "https://linkedin.com"], ["Facebook", "https://facebook.com"]] },
                { title: "Legal", links: [["Privacy Policy", "/privacy"], ["Terms & Conditions", "/terms"]], muted: true },
              ].map((col) => (
                <div key={col.title} className="flex flex-col gap-6">
                  <span className="text-[13px] uppercase tracking-widest text-brand font-black border-b-2 border-zinc-800 pb-2">
                    {col.title}
                  </span>
                  <ul className="flex flex-col gap-4">
                    {col.links.map(([label, href]) => {
                      const isInternal = href.startsWith("/");
                      const cls = `text-lg font-bold tracking-tight transition-colors ${
                        col.muted
                          ? "text-zinc-500 hover:text-white"
                          : "text-white hover:text-brand"
                      }`;
                      return (
                        <li key={label}>
                          {isInternal ? (
                            <Link to={href} className={cls}>
                              {label}
                            </Link>
                          ) : (
                            <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
                              {label}
                            </a>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row animate-on-scroll border-t-4 border-zinc-900 pt-8 gap-4 items-center justify-between"
          style={{
            animation: "fadeSlideIn 1s ease-out 0.5s both",
            animationPlayState: "inherit",
          }}
        >
          <p className="text-base text-zinc-500 font-bold tracking-tight">
            © 2024 UDM Techno Solutions. All rights reserved. Indore, MP.
          </p>
          <div className="flex gap-6">
            {["solar:planet-linear", "solar:global-linear", "solar:chat-round-dots-linear"].map(
              (icon) => (
                <a
                  key={icon}
                  href="#"
                  aria-label={icon}
                  className="text-white hover:text-brand transition-transform hover:scale-110"
                >
                  <iconify-icon icon={icon} className="text-3xl" />
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
