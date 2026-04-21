import { Link } from "react-router-dom";
import PageShell from "@/components/sociospark/PageShell";
import team from "../assets/Team.jpeg";
import team1 from "../assets/Team1.jpeg";

export default function About() {
  return (
    <PageShell>
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="inline-block bg-brand text-brand-foreground font-black px-3 py-1 border-2 border-black rounded-lg text-sm -rotate-2 mb-4">
          About UDM Techno
        </div>
        <h1 className="text-4xl lg:text-6xl font-black tracking-tighter mb-5 leading-[1.05]">
          We help businesses rank in Top 10 on Google & generate consistent leads.
        </h1>
        <p className="text-lg text-zinc-700 max-w-3xl leading-relaxed">
          UDM Techno Solutions is a full-stack digital marketing agency based in Indore, India. For the past several years we have partnered with ambitious brands to scale their SEO, paid ads, social media and websites — profitably.
        </p>
      </section>

      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border-4 border-brand bg-zinc-900">
            <img
              src={team}
              alt="UDM Techno Team"
              className="w-full h-full max-h-[520px] object-cover object-center"
            />
          </div>
          <div className="lg:col-span-5 text-white">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 tracking-tighter">Our Team</h2>
            <p className="text-lg text-zinc-300 mb-4 leading-relaxed">
              A crew of strategists, performance marketers, designers, SEO specialists and engineers — obsessed with results for your business.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              We operate on action. You need us at 3 AM? We're already on the way. No questions asked.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
        {[
          { icon: "solar:target-linear", title: "Our Mission", text: "Make digital growth accessible and profitable for every ambitious business in India." },
          { icon: "solar:medal-ribbons-star-linear", title: "Our Values", text: "Transparency, obsession with results, creative excellence and zero fluff." },
          { icon: "solar:rocket-linear", title: "Our Promise", text: "We bring enterprise-grade marketing to local businesses at SMB-friendly budgets." },
        ].map((v) => (
          <div key={v.title} className="bg-white border-2 border-black rounded-3xl p-6 brutalist-shadow">
            <iconify-icon icon={v.icon} className="text-4xl text-brand mb-3" />
            <h3 className="text-2xl font-black mb-2">{v.title}</h3>
            <p className="text-zinc-700">{v.text}</p>
          </div>
        ))}
      </section>

      <section className="bg-zinc-100 border-y-4 border-black py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 rounded-3xl overflow-hidden border-2 border-black brutalist-shadow">
            <img src={team1} alt="Team at work" className="w-full h-full max-h-[480px] object-cover" />
          </div>
          <div className="lg:col-span-6">
            <h2 className="text-4xl font-black mb-4 tracking-tighter">Why brands pick us</h2>
            <ul className="space-y-3">
              {[
                "Full-stack team under one roof — no agency ping-pong",
                "Data-driven decisions, creative execution",
                "Clear reporting and weekly check-ins",
                "Proven playbooks for local & national brands",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-lg font-semibold text-zinc-800">
                  <iconify-icon icon="solar:check-circle-bold" className="text-2xl text-brand shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>
            <Link
              to="/get-proposal"
              className="inline-block mt-8 bg-black text-brand border-2 border-black rounded-xl px-6 py-3 font-black brutalist-shadow"
            >
              Get Your Free Growth Plan Today
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
