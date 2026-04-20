export default function LogoMarquee() {
  const Row = () => (
    <div className="animate-marquee-slow flex justify-around items-center w-1/2 grayscale hover:grayscale-0 transition-all duration-500">
      <span className="text-5xl font-black tracking-tighter text-[#E50914] scale-y-110 mx-10">NETFLIX</span>
      <span className="text-5xl font-bold tracking-tighter text-[#2D8CFF] lowercase mx-10">zoom</span>
      <div className="flex flex-col items-center mx-10">
        <span className="text-5xl font-semibold tracking-tighter text-black lowercase leading-none">amazon</span>
        <svg viewBox="0 0 100 20" className="w-24 text-[#FF9900] -mt-1">
          <path fill="currentColor" d="M10,10 Q50,25 90,5 Q70,20 10,10 Z" />
        </svg>
      </div>
      <span
        className="text-4xl font-black tracking-widest text-[#EA4C89] italic mx-10"
        style={{ fontFamily: "Georgia, serif" }}
      >
        dribbble
      </span>
      <span className="text-5xl font-black tracking-tighter text-[#1DB954] mx-10">Spotify</span>
      <span className="text-5xl font-bold tracking-tighter text-black mx-10">Uber</span>
      <span className="text-5xl font-black tracking-tighter text-[#0061FF] mx-10">Dropbox</span>
    </div>
  );

  return (
    <section className="py-16 bg-white border-b-4 border-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 text-center mb-10">
        <p className="text-sm font-bold tracking-widest uppercase text-zinc-500">
          Trusted by industry leaders
        </p>
      </div>

      <div className="flex whitespace-nowrap w-[200%] opacity-80 hover:opacity-100 transition-opacity duration-300">
        <Row />
        <Row />
      </div>
    </section>
  );
}
