import ServicePage from "@/components/ServicePage";

export default function GMBPage() {
  return (
    <ServicePage
      icon="solar:map-point-linear"
      badge="Google My Business"
      title="Google My Business Optimisation"
      tagline="We help businesses rank in Top 10 on Google Maps & generate consistent local leads."
      description="Dominate the Google Map Pack with a fully optimised GMB profile — images, posts, Q&A, reviews, geotagging and local citations that make your business the obvious choice in your area."
      benefits={[
        "Rank in the Google Map 3-Pack",
        "More calls, direction requests & walk-ins",
        "Consistent 5-star review strategy",
        "Geotagged photos & weekly posts",
        "NAP consistency across 50+ directories",
        "Monthly insights report",
      ]}
      process={[
        { title: "Profile Audit", text: "Complete GMB audit and competitor mapping in your area." },
        { title: "Optimisation", text: "Categories, services, description, media, FAQs, products." },
        { title: "Reviews & Posts", text: "Review generation system, weekly posts & offers." },
        { title: "Rank & Report", text: "Geogrid tracking, keyword rankings, monthly insights." },
      ]}
      caseStudy={[
        { metric: "+540%", label: "Profile Views" },
        { metric: "+230%", label: "Calls from GMB" },
        { metric: "#1", label: "Map Pack Ranking" },
        { metric: "4.9★", label: "Avg Rating" },
      ]}
      caseStudyText="A multi-location clinic went from invisible on Maps to #1 in the Map Pack for 18 keywords across their service areas — driving a 230% increase in direct calls."
      requirement="Google My Business"
      keyword="Google My Business Optimisation"
    />
  );
}
