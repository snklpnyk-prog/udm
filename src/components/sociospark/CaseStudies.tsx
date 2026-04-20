import { useState, useEffect } from "react";
import FadeUp from "./FadeUp";
import gmb from "../../assets/gmb.png";
import seo from "../../assets/seo_result.png";
import socialpro from "../../assets/social_media_profile.png";
import social from "../../assets/social.png";
import google from "../../assets/googleranking.png";
import team from "../../assets/Team.jpeg";
import website from "../../assets/website.png";
import youtube from "../../assets/youtubeManagement.png";

export default function CaseStudies() {
  const [index, setIndex] = useState(0);

  const cards = [
    { title: "GMB PERFORMANCE", img: gmb, icon: "logos:google-ads" },
    { title: "WEB", img: website, icon: "logos:html-5" },
    { title: "SEO RESULTS", img: seo, icon: "logos:google" },
    { title: "SOCIAL MEDIA PROFILE", img: socialpro, icon: "logos:facebook" },
    { title: "GOOGLE RANKING", img: google, icon: "logos:google" },
    { title: "SOCIAL RESULTS", img: social, icon: "logos:instagram-icon" },
    { title: "YOUTUBE MANAGEMENT", img: youtube, icon: "logos:youtube-icon" },
  ];

  const maxIndex = cards.length - 2;

  const next = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  // 🔥 TEXT ANIMATION
  const words = ["Relentless", "Creative", "Savage", "Aggressive", "Strategic"];
  const [text, setText] = useState(words[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setSubIndex((prev) => prev + 1);
        if (subIndex === currentWord.length) setDeleting(true);
      } else {
        setSubIndex((prev) => prev - 1);
        if (subIndex === 0) {
          setDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, 80);

    setText(currentWord.substring(0, subIndex));
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, wordIndex]);

  return (
    <>
      {/* ================= TEAM ================= */}
     <section className="w-600">
  <div className="relative bg-black overflow-hidden">

    {/* IMAGE */}
    <img
      src={team}
      alt="Our Team"
      className="w-full ml-40 h-[300px] object-contain bg-black mr-[10px]"
    />

    {/* TEXT OVERLAY */}
    <div className="absolute inset-0 flex flex-col justify-center items-start px-6 lg:px-20 text-white max-w-3xl">
      
      <h2 className="text-3xl lg:text-5xl font-black mb-6">
        OUR TEAM
      </h2>

      <h3 className="text-2xl lg:text-4xl font-black mb-6 relative pl-6">
        <span className="absolute left-0 top-0 w-1 h-full bg-brand"></span>

        <span className="inline-block">
          {text}
          <span className="border-r-2 border-white ml-1 animate-pulse"></span>
        </span>
      </h3>

      <h4 className="text-2xl lg:text-3xl font-bold mb-6">
        We operate on action.
      </h4>

      <p className="text-lg text-zinc-300 max-w-lg">
        You need us at 3 AM? We’re already on the way. No questions asked.
      </p>

    </div>
  </div>
</section>

      {/* ================= CASE STUDIES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t-4 border-black">
  <FadeUp className="mb-24">

    <h2 className="text-4xl lg:text-5xl font-black mb-10">
      We let the data speak for itself.
    </h2>

    <div className="flex items-center gap-4">
      <button onClick={prev} className="w-14 h-14 border-2 border-black rounded-full bg-white text-2xl">
        ←
      </button>

     <div className="overflow-hidden flex-1  -mt-4 pt-4">
        <div
          className="flex gap-10 transition-transform duration-500"
          style={{
            transform: `translateX(calc(-${index * 50}% - ${index * 20}px))`,
          }}
        >
          {cards.map((c) => (
            <div
              key={c.title}
              className="min-w-[calc(50%-20px)] bg-zinc-100 p-6 rounded-[30px] border-4 border-black 
              transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01] 
              hover:shadow-[12px_12px_0_0_hsl(var(--brand))] group"
            >

              {/* TITLE + ICON */}
              <h4 className="text-2xl font-bold mb-6 flex items-center gap-3 
              group-hover:text-brand transition-colors duration-300">
                {c.title}
                <iconify-icon
                  icon={c.icon}
                  className="text-3xl shrink-0 
                  transition-transform duration-300 
                  group-hover:rotate-12 group-hover:scale-110"
                />
              </h4>

              {/* IMAGE BLOCK */}
              <div className="relative h-[300px] bg-white rounded-[20px] overflow-hidden group cursor-pointer">

                {/* IMAGE */}
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-contain p-3 
                  transition-all duration-700 ease-out 
                  group-hover:scale-110 group-hover:rotate-[1deg]"
                />

                {/* 🔥 UPDATED OVERLAY (from Code 1 effect) */}
                <div className="absolute inset-0 
                  bg-black/60 
                  backdrop-blur-sm
                  opacity-0 
                  group-hover:opacity-100
                  transition-opacity duration-500 
                  flex flex-col items-center justify-center gap-3">

                  <iconify-icon
                    icon="solar:eye-linear"
                    className="text-4xl text-white animate-pulse"
                  />

                  <span className="bg-brand text-brand-foreground px-6 py-3 font-bold rounded-lg border-2 border-black -rotate-2 text-lg">
                    View Details
                  </span>

                </div>

              </div>

            </div>
          ))}
        </div>
      </div>

      <button onClick={next} className="w-14 h-14 border-2 border-black rounded-full bg-white text-2xl">
        →
      </button>
    </div>

  </FadeUp>
</section>
    </>
  );
}