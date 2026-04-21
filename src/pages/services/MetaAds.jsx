import ServicePage from "@/components/ServicePage";

export default function MetaAdsPage() {
  return (
    <ServicePage
      icon="solar:smartphone-update-linear"
      badge="Meta Ads"
      title="Meta Ads — Facebook & Instagram Ads that convert"
      tagline="We generate consistent leads & sales through creative-first Meta Ads."
      description="From scroll-stopping creatives to rigorous audience testing and conversion optimisation, our Meta Ads team builds profitable funnels on Facebook and Instagram."
      benefits={[
        "Lower CPL & higher ROAS",
        "Scroll-stopping ad creatives & UGC",
        "Laser-targeted audiences",
        "Retargeting funnels that close",
        "Daily budget monitoring",
        "Weekly performance reports",
      ]}
      process={[
        { title: "Strategy", text: "Offer, audience research and full funnel design." },
        { title: "Creative", text: "High-converting videos, carousels and static ads." },
        { title: "Launch & Test", text: "A/B testing creatives, audiences and placements." },
        { title: "Scale", text: "Scale winners vertically & horizontally with clean data." },
      ]}
      caseStudy={[
        { metric: "6.4x", label: "ROAS" },
        { metric: "₹32", label: "Cost per Lead" },
        { metric: "+412%", label: "Revenue Lift" },
        { metric: "2.1M", label: "Qualified Reach" },
      ]}
      caseStudyText="A D2C brand scaled from ₹2L to ₹28L monthly ad spend while maintaining 6.4x ROAS, using our creative-first Meta Ads system."
      requirement="Meta Ads"
      keyword="Meta Ads / Facebook Ads / Instagram Ads"
    />
  );
}
