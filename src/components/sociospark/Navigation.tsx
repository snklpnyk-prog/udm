export default function Navigation() {
  return (
    <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center relative z-50">
      <div className="flex items-center gap-2">
        <span className="text-4xl font-bold tracking-tighter">UDM Techno</span>
      </div>

      <div className="hidden lg:flex items-center gap-10 text-lg font-bold text-zinc-800 bg-white px-8 py-3 rounded-full border-2 border-black brutalist-shadow">
        <a href="#services" className="hover:text-brand transition-colors">Services</a>
        <a href="#seo" className="hover:text-brand transition-colors">SEO</a>
        <a href="#ppc" className="hover:text-brand transition-colors">PPC</a>
        <a href="#case-studies" className="hover:text-brand transition-colors">Case Studies</a>
      </div>

      <div className="hidden lg:block">
        <a
          href="https://wa.me/919993663668"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand text-brand-foreground border-2 border-black rounded-xl px-8 py-4 font-bold text-lg brutalist-shadow inline-block"
        >
          Get Started
        </a>
      </div>

      <button
        type="button"
        aria-label="Open menu"
        className="lg:hidden text-black bg-white p-2 border-2 border-black rounded-lg brutalist-shadow"
      >
        <iconify-icon icon="solar:hamburger-menu-linear" className="text-3xl" />
      </button>
    </nav>
  );
}
