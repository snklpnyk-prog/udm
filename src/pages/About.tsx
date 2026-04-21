import { Link } from "react-router-dom";
import PageShell from "@/components/sociospark/PageShell";
import team from "../assets/Team.jpeg";
import team1 from "../assets/Team1.jpeg";

const STATS = [
  { metric: "150+", label: "Happy Clients" },
  { metric: "8+", label: "Years of Expertise" },
  { metric: "2.4M+", label: "Leads Generated" },
  { metric: "98%", label: "Client Retention" },
];

const VALUES = [
  {
    icon: "solar:target-linear",
    title: "Our Mission",
    text: "Make digital growth accessible and profitable for every ambitious business in India.",
  },
  {
    icon: "solar:medal-ribbons-star-linear",
    title: "Our Values",
    text: "Transparency, obsession with results, creative excellence and zero fluff.",
  },
  {
    icon: "solar:rocket-linear",
    title: "Our Promise",
    text: "Enterprise-grade marketing for local businesses at SMB-friendly budgets.",
  },
];

const LEADERS = [
  {
    name: "Ankit Sharma",
    role: "Founder & Growth Strategist",
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Priya Verma",
    role: "Head of SEO",
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Rahul Mehta",
    role: "Performance Marketing Lead",
    img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Neha Kapoor",
    role: "Creative Director",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const MILESTONES = [
  { year: "2018", title: "Founded in Indore", text: "Started with a team of 3 and a mission to bring enterprise marketing to local businesses." },
  { year: "2020", title: "Scaled to 10+ industries", text: "Expanded into healthcare, D2C, real estate, education and professional services." },
  { year: "2022", title: "₹15Cr+ ad spend managed", text: "Managed profitable performance campaigns across Meta and Google for 80+ brands." },
  { year: "2026", title: "Full-stack agency", text: "SEO, paid media, websites, content and influencer under one roof serving India." },
];

export default function About() {
  return (
    <PageShell>
      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-10 pb-14 lg:pt-16 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="inline-block bg-brand text-brand-foreground font-black px-3 py-1 border-2 border-black rounded-lg text-sm -rotate-2 mb-5">
              About UDM Techno
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-[1.02] mb-6">
              We help businesses rank in <span className="text-brand">Top 10 on Google</span> &amp; generate consistent leads.
            </h1>
            <p className="text-base md:text-lg text-zinc-700 max-w-2xl leading-relaxed">
              UDM Techno Solutions is a full-stack digital marketing agency based in Indore, India. We partner with ambitious brands to scale SEO, paid ads, social media and websites — profitably, measurably, and with zero fluff.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s) => (
                <div key={s.label} className="bg-white border-2 border-black rounded-2xl p-5 brutalist-shadow">
                  <div className="text-3xl md:text-4xl font-black tracking-tighter">{s.metric}</div>
                  <div className="text-zinc-600 font-bold text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden border-4 border-brand bg-zinc-900">
              <img
                src={team}
                alt="UDM Techno team group"
                className="block w-full h-auto md:h-[480px] object-cover object-center"
              />
            </div>
          </div>
          <div className="lg:col-span-5 text-white">
            <div className="inline-block bg-brand text-brand-foreground font-black px-3 py-1 border-2 border-brand rounded-lg text-xs -rotate-2 mb-4">
              Our Team
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-5 tracking-tighter leading-[1.05]">
              A crew obsessed with results.
            </h2>
            <p className="text-base md:text-lg text-zinc-300 mb-4 leading-relaxed">
              Strategists, performance marketers, designers, SEO specialists and engineers — all under one roof. No agency ping-pong, no delays, just clean execution.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              We operate on action. You need us at 3 AM? We're already on the way. No questions asked.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-14 md:py-20">
        <h2 className="text-3xl md:text-5xl font-black mb-3 tracking-tighter">Meet the leadership</h2>
        <p className="text-zinc-700 mb-10 max-w-2xl">The humans who build strategy, run ops and make sure your growth plan actually ships.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {LEADERS.map((m) => (
            <div
              key={m.name}
              className="bg-white border-2 border-black rounded-3xl brutalist-shadow overflow-hidden hover:-translate-y-1 transition-transform"
            >
              <div className="aspect-[4/5] overflow-hidden bg-zinc-100 border-b-2 border-black">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-black leading-tight">{m.name}</h3>
                <p className="text-sm font-semibold text-zinc-600 mt-0.5">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-14 md:pb-20 grid md:grid-cols-3 gap-5">
        {VALUES.map((v) => (
          <div key={v.title} className="bg-white border-2 border-black rounded-3xl p-6 brutalist-shadow">
            <iconify-icon icon={v.icon} className="text-4xl text-brand mb-3" />
            <h3 className="text-2xl font-black mb-2 tracking-tight">{v.title}</h3>
            <p className="text-zinc-700 leading-relaxed">{v.text}</p>
          </div>
        ))}
      </section>

      <section className="bg-zinc-100 border-y-4 border-black py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 rounded-3xl overflow-hidden border-2 border-black brutalist-shadow">
            <img
              src={team1}
              alt="Team at work"
              className="block w-full h-auto md:h-[480px] object-cover object-center"
            />
          </div>
          <div className="lg:col-span-6">
            <h2 className="text-3xl md:text-5xl font-black mb-5 tracking-tighter leading-[1.05]">
              Why brands pick us
            </h2>
            <ul className="space-y-3">
              {[
                "Full-stack team under one roof — no agency ping-pong",
                "Data-driven decisions, creative execution",
                "Clear reporting and weekly check-ins",
                "Proven playbooks for local & national brands",
                "Local SEO expertise for Bhopal, Indore & India",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-base md:text-lg font-semibold text-zinc-800">
                  <iconify-icon icon="solar:check-circle-bold" className="text-2xl text-brand shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="inline-block mt-8 bg-black text-brand border-2 border-black rounded-xl px-6 py-3 font-black brutalist-shadow"
            >
              Get Your Free Growth Plan Today
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-14 md:py-20">
        <h2 className="text-3xl md:text-5xl font-black mb-3 tracking-tighter">Milestones</h2>
        <p className="text-zinc-700 mb-10 max-w-2xl">A quick look at the road so far.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {MILESTONES.map((m) => (
            <div key={m.year} className="bg-white border-2 border-black rounded-2xl p-5 brutalist-shadow">
              <div className="text-brand font-black text-2xl mb-1">{m.year}</div>
              <h3 className="font-black text-lg mb-1 tracking-tight">{m.title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">{m.text}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
