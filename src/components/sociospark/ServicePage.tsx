import { useState } from "react";
import { Link } from "react-router-dom";
import PageShell from "./PageShell";
import LeadForm from "./LeadForm";
import portfolioPDF from "../../assets/portfolio.pdf";

export interface ServicePageProps {
  icon: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  process: { title: string; text: string }[];
  caseStudy: { metric: string; label: string }[];
  caseStudyText: string;
  requirement: string;
  keyword: string;
}

export default function ServicePage(props: ServicePageProps) {
  const [showPDF, setShowPDF] = useState(false);

  return (
    <PageShell>
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-brand text-brand-foreground border-2 border-black px-3 py-1 rounded-full font-black text-xs -rotate-2 mb-4">
              <iconify-icon icon={props.icon} className="text-lg" />
              {props.badge}
            </div>
            <h1 className="text-4xl lg:text-6xl font-black tracking-tighter leading-[1.05] mb-5">
              {props.title}
            </h1>
            <p className="text-xl font-bold text-zinc-800 mb-4">{props.tagline}</p>
            <p className="text-lg text-zinc-700 leading-relaxed mb-6">{props.description}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/get-proposal"
                className="bg-black text-brand border-2 border-black rounded-xl px-6 py-3 font-black brutalist-shadow"
              >
                Get Your Free Growth Plan Today
              </Link>
              <button
                onClick={() => setShowPDF(true)}
                className="bg-white text-black border-2 border-black rounded-xl px-6 py-3 font-black brutalist-shadow"
              >
                View Our Portfolio (PDF)
              </button>
            </div>
            <p className="text-xs text-zinc-500 mt-3">
              Targeted keyword: <span className="font-bold text-zinc-700">{props.keyword}</span> · Local SEO: Bhopal / Indore / India
            </p>
          </div>
          <div className="lg:col-span-5">
            <LeadForm defaultRequirement={props.requirement} />
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 border-y-4 border-black py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-black mb-8">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {props.benefits.map((b) => (
              <div
                key={b}
                className="bg-white border-2 border-black rounded-2xl p-5 brutalist-shadow flex items-start gap-3"
              >
                <iconify-icon icon="solar:check-circle-bold" className="text-2xl text-brand shrink-0 mt-0.5" />
                <p className="font-bold text-zinc-800 leading-snug">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl lg:text-4xl font-black mb-8">Our Process</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {props.process.map((p, i) => (
            <div key={p.title} className="bg-black text-white border-2 border-black rounded-2xl p-5">
              <div className="text-brand font-black text-3xl mb-2">0{i + 1}</div>
              <h3 className="font-black text-xl mb-2">{p.title}</h3>
              <p className="text-zinc-300 text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand border-y-4 border-black py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-black mb-8 text-brand-foreground">Case Study & Results</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {props.caseStudy.map((c) => (
              <div key={c.label} className="bg-white border-2 border-black rounded-2xl p-5 brutalist-shadow">
                <div className="text-4xl font-black tracking-tighter">{c.metric}</div>
                <div className="font-bold text-zinc-600 text-sm mt-1">{c.label}</div>
              </div>
            ))}
          </div>
          <p className="text-lg font-bold text-brand-foreground max-w-3xl">{props.caseStudyText}</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl lg:text-5xl font-black tracking-tighter mb-4">
          Ready to grow? Get Your Free Growth Plan Today.
        </h2>
        <p className="text-lg text-zinc-700 mb-6">
          We rank businesses in the Top 10 on Google and generate consistent leads.
        </p>
        <Link
          to="/get-proposal"
          className="inline-block bg-black text-brand border-2 border-black rounded-xl px-8 py-4 font-black brutalist-shadow text-lg"
        >
          Get Free Proposal
        </Link>
      </section>

      {showPDF && (
        <div className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-12 bg-zinc-900 flex items-center justify-between px-4 text-white text-sm font-semibold">
            <span>Portfolio Preview</span>
            <button
              onClick={() => setShowPDF(false)}
              className="bg-white text-black w-8 h-8 rounded-full border-2 border-black flex items-center justify-center"
            >
              ✕
            </button>
          </div>
          <div className="w-[95%] h-[80%] mt-12 bg-white border-2 border-black rounded-xl overflow-hidden">
            <iframe src={portfolioPDF} title="Portfolio PDF" className="w-full h-full" />
          </div>
        </div>
      )}
    </PageShell>
  );
}
