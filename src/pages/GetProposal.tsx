import PageShell from "@/components/sociospark/PageShell";
import LeadForm from "@/components/sociospark/LeadForm";

export default function GetProposal() {
  return (
    <PageShell>
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-6">
          <div className="inline-block bg-brand text-brand-foreground font-black px-3 py-1 border-2 border-black rounded-lg text-sm -rotate-2 mb-4">
            Get Free Proposal
          </div>
          <h1 className="text-4xl lg:text-6xl font-black tracking-tighter mb-5 leading-[1.05]">
            Get Your Free Growth Plan Today.
          </h1>
          <p className="text-lg text-zinc-700 mb-6 leading-relaxed">
            Tell us a bit about your business and we'll send over a custom plan to rank in Top 10 on Google and generate consistent leads.
          </p>
          <div className="bg-black text-white rounded-3xl border-2 border-black p-6 brutalist-shadow">
            <h3 className="text-xl font-black mb-3">Prefer a 15-minute call?</h3>
            <p className="text-zinc-300 mb-4">
              Schedule a strategy call with our team — no pressure, just value.
            </p>
            <a
              href="https://calendly.com/udmtechnosolution/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand text-brand-foreground border-2 border-brand rounded-xl px-6 py-3 font-black"
            >
              Schedule a Call
            </a>
          </div>
        </div>
        <div className="lg:col-span-6">
          <LeadForm />
        </div>
      </section>
    </PageShell>
  );
}
