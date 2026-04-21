import ServicePage from "@/components/ServicePage";

export default function SocialMediaPage() {
  return (
    <ServicePage
      icon="solar:chat-round-dots-linear"
      badge="Social Media Management"
      title="Social Media Management that builds brands"
      tagline="We build communities and generate consistent leads on Instagram, Facebook & LinkedIn."
      description="End-to-end social media management — strategy, content, design, reels, community management and performance reporting. We turn your feed into a lead machine."
      benefits={[
        "Consistent premium content calendar",
        "High-retention reels & carousels",
        "Community engagement & DMs",
        "Hashtag & trend strategy",
        "Brand voice & design system",
        "Monthly growth reports",
      ]}
      process={[
        { title: "Strategy", text: "Audience, tone of voice, pillars and content plan." },
        { title: "Create", text: "Shoots, reels, carousels and static content." },
        { title: "Publish & Engage", text: "Scheduled posts, community management & DMs." },
        { title: "Analyse", text: "Monthly analytics, iteration & growth sprints." },
      ]}
      caseStudy={[
        { metric: "+48k", label: "Followers Added" },
        { metric: "7.2%", label: "Engagement Rate" },
        { metric: "12M", label: "Reels Views" },
        { metric: "+3.1x", label: "Inbound DMs" },
      ]}
      caseStudyText="A restaurant brand scaled from 2k to 50k followers in 6 months with our reels-first social strategy, tripling inbound reservation DMs."
      requirement="Social Media Handling"
      keyword="Social Media Marketing Agency"
    />
  );
}
