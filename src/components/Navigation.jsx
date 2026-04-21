import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center relative z-50">
      <Link to="/" className="flex items-center gap-2">
        <span className="text-4xl font-bold tracking-tighter">UDM Techno</span>
      </Link>

      <div className="hidden lg:flex items-center gap-8 text-base font-bold text-zinc-800 bg-white px-8 py-3 rounded-full border-2 border-black brutalist-shadow">
        <Link to="/" className="hover:text-brand transition-colors">Home</Link>
        <Link to="/about" className="hover:text-brand transition-colors">About</Link>
        <div className="relative group">
          <button className="hover:text-brand transition-colors flex items-center gap-1">
            Services
            <iconify-icon icon="solar:alt-arrow-down-linear" className="text-base" />
          </button>
          <div className="absolute left-0 top-full pt-3 hidden group-hover:block">
            <div className="bg-white border-2 border-black rounded-2xl brutalist-shadow p-3 w-64">
              {[
                ["SEO Services", "/services/seo"],
                ["Google My Business", "/services/google-my-business"],
                ["Meta Ads", "/services/meta-ads"],
                ["Google Ads", "/services/google-ads"],
                ["Website Development", "/services/website"],
                ["Social Media", "/services/social-media"],
              ].map(([label, href]) => (
                <Link key={href} to={href} className="block px-3 py-2 rounded-lg hover:bg-brand hover:text-black font-bold">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Link to="/case-studies" className="hover:text-brand transition-colors">Case Studies</Link>
        <Link to="/blog" className="hover:text-brand transition-colors">Blog</Link>
        <Link to="/contact" className="hover:text-brand transition-colors">Contact</Link>
      </div>

      <div className="hidden lg:block">
        <a
          href="tel:+919993663668"
          className="bg-brand text-brand-foreground border-2 border-black rounded-xl px-6 py-3 font-bold text-base brutalist-shadow inline-block"
        >
          Call Us
        </a>
      </div>

      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setOpen(!open)}
        className="lg:hidden text-black bg-white p-2 border-2 border-black rounded-lg brutalist-shadow"
      >
        <iconify-icon icon={open ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} className="text-3xl" />
      </button>

      {open && (
        <div className="lg:hidden absolute top-full right-6 mt-2 bg-white border-2 border-black rounded-2xl brutalist-shadow p-4 w-64 flex flex-col gap-2">
          <Link to="/" onClick={() => setOpen(false)} className="font-bold px-3 py-2 rounded-lg hover:bg-brand">Home</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="font-bold px-3 py-2 rounded-lg hover:bg-brand">About</Link>
          <Link to="/services/seo" onClick={() => setOpen(false)} className="font-bold px-3 py-2 rounded-lg hover:bg-brand">SEO</Link>
          <Link to="/services/google-my-business" onClick={() => setOpen(false)} className="font-bold px-3 py-2 rounded-lg hover:bg-brand">GMB</Link>
          <Link to="/services/meta-ads" onClick={() => setOpen(false)} className="font-bold px-3 py-2 rounded-lg hover:bg-brand">Meta Ads</Link>
          <Link to="/services/google-ads" onClick={() => setOpen(false)} className="font-bold px-3 py-2 rounded-lg hover:bg-brand">Google Ads</Link>
          <Link to="/services/website" onClick={() => setOpen(false)} className="font-bold px-3 py-2 rounded-lg hover:bg-brand">Website</Link>
          <Link to="/services/social-media" onClick={() => setOpen(false)} className="font-bold px-3 py-2 rounded-lg hover:bg-brand">Social Media</Link>
          <Link to="/case-studies" onClick={() => setOpen(false)} className="font-bold px-3 py-2 rounded-lg hover:bg-brand">Case Studies</Link>
          <Link to="/blog" onClick={() => setOpen(false)} className="font-bold px-3 py-2 rounded-lg hover:bg-brand">Blog</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="font-bold px-3 py-2 rounded-lg hover:bg-brand">Contact</Link>
          <a
            href="tel:+919993663668"
            onClick={() => setOpen(false)}
            className="bg-brand text-brand-foreground border-2 border-black rounded-xl px-4 py-2 font-black text-center"
          >
            Call Us
          </a>
        </div>
      )}
    </nav>
  );
}
