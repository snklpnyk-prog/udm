import ServicePage from "@/components/ServicePage";

export default function WebsitePage() {
  return (
    <ServicePage
      icon="solar:laptop-linear"
      badge="Website Development"
      title="Website Development that sells 24x7"
      tagline="Modern, fast, SEO-ready websites that rank in Top 10 on Google & convert visitors."
      description="We design and develop premium websites on modern stacks — optimised for Core Web Vitals, SEO and conversions. Every pixel and every millisecond is engineered to turn visitors into customers."
      benefits={[
        "Mobile-first, lightning-fast performance",
        "SEO-ready structure from day one",
        "Premium design & micro-interactions",
        "CMS that is easy to manage",
        "Integrated analytics & lead capture",
        "Ongoing support & maintenance",
      ]}
      process={[
        { title: "Discovery", text: "Business goals, user journeys, content architecture." },
        { title: "Design", text: "Wireframes, brand system and pixel-perfect UI." },
        { title: "Development", text: "Clean, performant code with SEO best practices." },
        { title: "Launch & Grow", text: "QA, go-live, analytics, CRO and iteration." },
      ]}
      caseStudy={[
        { metric: "100/100", label: "PageSpeed Score" },
        { metric: "+186%", label: "Conversion Rate" },
        { metric: "< 1.2s", label: "LCP Time" },
        { metric: "14 days", label: "Avg Launch Time" },
      ]}
      caseStudyText="We rebuilt a local retailer's website achieving a 100 PageSpeed score, <1.2s LCP and a 186% increase in conversions within the first 90 days."
      requirement="Website"
      keyword="Website Development Company India"
    />
  );
}
