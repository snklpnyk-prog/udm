import ServicePage from "@/components/ServicePage";

export default function GoogleAdsPage() {
  return (
    <ServicePage
      icon="solar:mouse-circle-linear"
      badge="Google Ads"
      title="Google Ads that turn searches into sales"
      tagline="We help businesses appear on top of Google and generate consistent leads."
      description="Search, Performance Max, YouTube and Display — our Google Ads team architects campaigns that turn buying-intent traffic into booked calls, demos and purchases."
      benefits={[
        "Higher quality score & lower CPC",
        "Intent-based lead generation",
        "Advanced conversion tracking",
        "Performance Max & Search synergy",
        "Weekly optimisation sprints",
        "Transparent reporting dashboard",
      ]}
      process={[
        { title: "Keyword Research", text: "Buyer-intent keywords, negatives and SQR analysis." },
        { title: "Campaign Build", text: "Tightly themed ad groups, RSA copy, extensions and landing pages." },
        { title: "Tracking Setup", text: "GA4 + Google Ads + server-side tracking for clean data." },
        { title: "Optimise & Scale", text: "Bid strategy tuning, creative refresh and budget scaling." },
      ]}
      caseStudy={[
        { metric: "-48%", label: "Cost per Lead" },
        { metric: "3.7x", label: "ROAS" },
        { metric: "+264%", label: "Conversions" },
        { metric: "8.9", label: "Avg Quality Score" },
      ]}
      caseStudyText="A B2B services company cut CPL by 48% in 60 days after we restructured their Google Ads with intent-based keywords and a new landing page funnel."
      requirement="Google Ads"
      keyword="Google Ads India / PPC Agency"
    />
  );
}
