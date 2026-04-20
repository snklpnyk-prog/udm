// import { useEffect } from "react";
import FadeUp from "./FadeUp";

export default function PPCDetail() {

  

   

  return (
    <section
      id="ppc"
      className="max-w-7xl mx-auto px-6 py-24 bg-zinc-100 rounded-[50px] my-10 border-4 border-black brutalist-shadow"
    >
      <FadeUp className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <div className="inline-flex items-center gap-2 bg-brand text-brand-foreground font-bold px-4 py-2 border-2 border-black rounded-full mb-6">
            <iconify-icon icon="solar:mouse-circle-linear" /> PPC Campaigns
          </div>

          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter leading-tight mb-6">
            Maximize your ad spend with precision targeting.
          </h2>

          <p className="text-xl text-zinc-700 font-medium mb-8">
            Stop wasting money on clicks that don't convert. We build hyper-targeted
            ad campaigns on Google and Meta that turn your budget into measurable revenue.
          </p>

          <ul className="space-y-4 mb-10 font-bold text-lg">
            {[
              "Google Ads Management",
              "Retargeting Campaigns",
              "Conversion Rate Optimization",
            ].map((i) => (
              <li key={i} className="flex items-center gap-3">
                <iconify-icon
                  icon="solar:check-circle-linear"
                  className="text-2xl text-brand bg-black rounded-full"
                />
                {i}
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="bg-black text-white text-xl font-bold px-8 py-4 rounded-xl brutalist-shadow border-2 border-black hover:bg-zinc-800 transition-colors"
          >
            Start Advertising
          </button>
        </div>

        {/* RIGHT CARD */}
        <div className="relative h-[400px]">
          <div className="absolute inset-0 bg-white border-4 border-black rounded-[30px] brutalist-shadow p-8 flex flex-col justify-center gap-6 z-10">
            
            <div className="flex justify-between items-center border-b-4 border-black pb-4">
              <span className="text-xl font-bold uppercase">ROI Tracker</span>
              <span className="bg-brand text-brand-foreground px-3 py-1 rounded border-2 border-black font-bold">
                Live
              </span>
            </div>

            <div className="flex items-end gap-2 h-40">
              <div className="w-1/4 bg-zinc-200 h-[20%] border-2 border-black rounded-t" />
              <div className="w-1/4 bg-zinc-300 h-[40%] border-2 border-black rounded-t" />
              <div className="w-1/4 bg-zinc-800 h-[60%] border-2 border-black rounded-t" />
              <div className="w-1/4 bg-brand h-[100%] border-2 border-black rounded-t relative">
                <iconify-icon
                  icon="solar:cursor-click-linear"
                  className="absolute -top-10 left-1/2 -translate-x-1/2 text-3xl"
                />
              </div>
            </div>

          </div>

          <div className="absolute inset-0 bg-brand border-4 border-black rounded-[30px] translate-x-4 translate-y-4" />
        </div>

      </FadeUp>

      

    </section>
  );
}