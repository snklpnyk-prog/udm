import FadeUp from "./FadeUp";

export default function SEODetail() {
  return (
    <section
      id="seo"
      className="max-w-7xl mx-auto px-6 py-24 border-t-4 border-black border-dashed"
    >
      <FadeUp className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative h-[400px]">
          <div className="absolute inset-0 bg-white border-4 border-black rounded-[30px] brutalist-shadow p-8 flex flex-col justify-between z-10">
            <div className="w-full h-1/2 bg-zinc-100 border-4 border-black rounded-xl p-4 flex gap-4">
              <div className="w-12 h-12 bg-zinc-300 rounded-full border-2 border-black shrink-0" />
              <div className="flex-1 space-y-3">
                <div className="w-3/4 h-4 bg-zinc-300 rounded" />
                <div className="w-1/2 h-4 bg-zinc-300 rounded" />
              </div>
            </div>
            <div className="w-full h-[40%] bg-brand text-white border-4 border-black rounded-xl p-4 flex items-center justify-between">
              <span className="text-2xl font-black uppercase tracking-tighter">Rank #1</span>
              <iconify-icon icon="solar:medal-star-linear" className="text-4xl" />
            </div>
          </div>
          <div className="absolute inset-0 bg-black border-4 border-black rounded-[30px] translate-x-4 translate-y-4" />
        </div>
        <div className="order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 bg-black text-brand font-bold px-4 py-2 border-2 border-black rounded-full mb-6">
            <iconify-icon icon="solar:magnifer-zoom-in-linear" /> SEO Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter leading-tight mb-6">
            Dominate search results and capture high-intent traffic.
          </h2>
          <p className="text-xl text-zinc-700 font-medium mb-8">
            We use data-driven strategies, technical audits, and high-quality link
            building to push your website to the top of Google. Stop hiding on page two.
          </p>
          <ul className="space-y-4 mb-10 font-bold text-lg">
            {["Technical SEO Audits", "On-Page Optimization", "Authority Link Building"].map(
              (i) => (
                <li key={i} className="flex items-center gap-3">
                  <iconify-icon
                    icon="solar:check-circle-linear"
                    className="text-2xl text-brand bg-black rounded-full"
                  />
                  {i}
                </li>
              ),
            )}
          </ul>
          <button
            type="button"
            className="bg-brand text-brand-foreground text-xl font-bold px-8 py-4 rounded-xl brutalist-shadow border-2 border-black hover:bg-black transition-colors"
          >
            Get a Free SEO Audit
          </button>
        </div>
      </FadeUp>
    </section>
  );
}
