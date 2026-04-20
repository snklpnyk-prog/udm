export default function WildMarquee() {
  const baseItems = [
    "Digital Strategy",
    "Social Media",
    "SEO",
    "Web Development",
    "Content Creation",
    "Google Ranking",
  ];

  // Duplicate items for seamless loop
  const items = [...baseItems, ...baseItems];

  return (
    <div className="w-full overflow-hidden bg-blue-600 border-y-4 border-black py-4 mt-12 -rotate-1 relative z-20 shadow-[0_8px_0_0_black]">
      
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((label, i) => (
          <span
            key={i}
            className="flex items-center gap-10 text-3xl md:text-5xl font-black tracking-tighter uppercase text-white shrink-0 px-6"
          >
            {label}
            <span className="text-black text-2xl md:text-4xl">★</span>
          </span>
        ))}
      </div>

    </div>
  );
}