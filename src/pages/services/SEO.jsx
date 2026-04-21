import ServicePage from "@/components/ServicePage";

export default function SEOPage() {
  return (
    <ServicePage
      icon="solar:magnifer-zoom-in-linear"
      badge="SEO Services"
      title="SEO Services that rank you on Page 1"
      tagline="We help businesses rank in Top 10 on Google & generate consistent leads."
      description="Our full-funnel SEO strategy combines technical audits, on-page optimisation, authority link building and local SEO to move your business to the top of Google results — where buyers actually click."
      benefits={[
        "Rank on page 1 for high-intent keywords",
        "Drive consistent organic leads month over month",
        "Outrank competitors with authority backlinks",
        "Faster site speed and Core Web Vitals",
        "Local SEO for Bhopal, Indore & India",
        "Transparent monthly reporting",
      ]}
      process={[
        { title: "Audit & Research", text: "Deep technical audit, competitor analysis and keyword mapping." },
        { title: "On-Page SEO", text: "Title tags, meta, schema, content optimisation and internal links." },
        { title: "Authority Building", text: "High-quality backlinks, citations and off-page signals." },
        { title: "Track & Scale", text: "Monthly reporting, ranking tracking and content scaling." },
      ]}
      caseStudy={[
        { metric: "+312%", label: "Organic Traffic" },
        { metric: "Top 3", label: "Google Rankings" },
        { metric: "4.8x", label: "Lead Growth" },
        { metric: "90+", label: "Keywords on Page 1" },
      ]}
      caseStudyText="A local services brand in Indore jumped from page 4 to the top 3 rankings in 5 months with our SEO, producing a 4.8x increase in qualified inbound leads."
      requirement="SEO"
      keyword="SEO Services India / Bhopal"
    />
  );
}
