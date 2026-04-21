import { Link, useParams } from "react-router-dom";
import PageShell from "@/components/PageShell";

export const BLOGS = [
  {
    slug: "rank-business-on-google-2026",
    title: "How to Rank Your Business on Google in 2026",
    excerpt: "A practical 10-step playbook to rank on page 1 of Google and dominate your local market.",
    category: "SEO",
    content: [
      "Ranking on Google in 2026 is part art, part engineering. The brands that win combine sharp content, technical excellence and strong local signals.",
      "1. Nail search intent — map every target keyword to a clear intent (informational, navigational, transactional) before you write.",
      "2. Optimise your Google Business Profile — it is now the single biggest local ranking factor for service businesses.",
      "3. Build fast pages — Core Web Vitals directly affect rankings. Aim for LCP under 2s.",
      "4. Use topical clusters — publish hub-and-spoke content that builds authority on a topic.",
      "5. Earn backlinks from relevant publishers, directories and partners.",
      "6. Use schema markup (Local, Service, FAQ, Product) on every page.",
      "7. Refresh existing content quarterly to keep rankings fresh.",
      "8. Monitor branded search — it is a huge trust signal.",
      "9. Track rankings with geogrid tools for local intent.",
      "10. Measure leads, not just traffic — revenue is the only metric that matters.",
    ],
  },
  {
    slug: "google-my-business-optimization-guide",
    title: "Google My Business Optimisation Guide",
    excerpt: "The complete GMB setup & optimisation checklist to rank in the Map Pack.",
    category: "Local SEO",
    content: [
      "Your Google Business Profile (GMB) is the most important asset for local SEO. Here's how to make it bulletproof.",
      "Claim and verify your listing, then complete every field — categories, services, products, attributes and hours.",
      "Upload 20+ high-quality images with geotag data.",
      "Post weekly updates — offers, events, announcements.",
      "Build a review generation system: ask happy customers within 48 hours of service.",
      "Respond to every review within 24 hours.",
      "Add FAQs using your best support questions.",
      "Use UTM-tagged website links for analytics.",
      "Run geogrid rank tracking to see how you rank across your city.",
    ],
  },
  {
    slug: "seo-vs-google-ads",
    title: "SEO vs Google Ads — What Works Better?",
    excerpt: "The honest comparison of SEO and Google Ads for small and medium businesses.",
    category: "Strategy",
    content: [
      "The answer is: both. But the order matters.",
      "Google Ads give you instant traffic and data. Use them to validate offers, keywords and landing pages.",
      "SEO compounds over time. Once you rank, the leads become essentially free.",
      "Our recommendation: start with Google Ads for month 1-3 while SEO builds, then gradually shift budget as rankings climb.",
    ],
  },
  {
    slug: "generate-leads-online",
    title: "How to Generate Leads Online",
    excerpt: "A modern, multi-channel lead generation playbook for 2026.",
    category: "Lead Generation",
    content: [
      "Generating leads online in 2026 requires a layered approach.",
      "Channels: SEO, Google Ads, Meta Ads, WhatsApp, content marketing and referrals.",
      "Offer: your lead magnet must be specific, valuable and instant.",
      "Landing page: one goal, clean design, mobile-first, 3-field form.",
      "Follow-up: WhatsApp within 5 minutes wins deals.",
    ],
  },
  {
    slug: "social-media-strategy-local-business",
    title: "Best Social Media Strategy for Local Business",
    excerpt: "How a local business should actually use Instagram, Facebook and WhatsApp.",
    category: "Social Media",
    content: [
      "Stop posting random content. Build pillars: authority, community, offers, behind-the-scenes.",
      "Reels beat images. Post 3 reels + 2 carousels per week minimum.",
      "Geo-location tags in every post and story.",
      "Use WhatsApp Business and Instagram DMs as your primary sales channels.",
      "Run small retargeting campaigns to website visitors.",
    ],
  },
  {
    slug: "meta-ads-creative-framework",
    title: "The Meta Ads Creative Framework That Prints ROAS",
    excerpt: "The exact creative system we use to scale Meta Ads profitably.",
    category: "Meta Ads",
    content: [
      "Creative is now 80% of Meta Ads performance.",
      "Framework: Hook (3s) → Problem → Solution → Proof → CTA.",
      "Test 5-10 creatives weekly. Scale winners, kill losers fast.",
      "UGC outperforms studio content 4:1 in most verticals.",
    ],
  },
  {
    slug: "website-speed-conversions",
    title: "Why Website Speed Determines Your Conversions",
    excerpt: "Every 100ms of latency costs you leads. Here's how to fix it.",
    category: "Web Dev",
    content: [
      "A 1-second delay drops conversions by ~7%.",
      "Compress images, use modern formats (WebP/AVIF), lazy load everything below the fold.",
      "Use a CDN and edge caching.",
      "Measure with PageSpeed Insights and real-user monitoring.",
    ],
  },
  {
    slug: "youtube-management-growth",
    title: "YouTube Management for Business Growth",
    excerpt: "Turn YouTube into your #1 long-term lead source.",
    category: "YouTube",
    content: [
      "YouTube is the world's second-biggest search engine.",
      "Long-form videos rank for buying-intent keywords for years.",
      "Combine long-form (educational) with Shorts (discovery).",
      "Pair every video with a clear CTA to your lead magnet.",
    ],
  },
  {
    slug: "local-seo-bhopal-indore",
    title: "Local SEO for Bhopal & Indore Businesses",
    excerpt: "A local SEO playbook tailored for central India businesses.",
    category: "Local SEO",
    content: [
      "Start with GMB optimisation and local citations.",
      "Build city-specific landing pages for every service.",
      "Get listed in Indian directories: Justdial, Sulekha, IndiaMart.",
      "Earn backlinks from local press and business associations.",
    ],
  },
  {
    slug: "influencer-marketing-india",
    title: "Influencer Marketing in India — What Actually Works",
    excerpt: "How to pick the right influencers and measure ROI, not vanity.",
    category: "Influencer",
    content: [
      "Micro (10k-100k) influencers consistently outperform mega influencers on ROI.",
      "Always ask for engagement screenshots, not just follower counts.",
      "Use trackable links or promo codes for every campaign.",
      "Long-term partnerships beat one-off posts.",
    ],
  },
];

export default function Blogs() {
  return (
    <PageShell>
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="inline-block bg-brand text-brand-foreground font-black px-3 py-1 border-2 border-black rounded-lg text-sm -rotate-2 mb-4">
          Blog
        </div>
        <h1 className="text-4xl lg:text-6xl font-black tracking-tighter mb-3 leading-[1.05]">
          Insights to grow your business.
        </h1>
        <p className="text-lg text-zinc-700 max-w-3xl mb-10">
          Practical guides on SEO, paid ads, social media and lead generation for Indian businesses.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOGS.map((b) => (
            <Link
              key={b.slug}
              to={`/blog/${b.slug}`}
              className="bg-white border-2 border-black rounded-3xl p-6 brutalist-shadow hover:-translate-y-1 transition-transform block"
            >
              <div className="inline-block bg-black text-brand font-black px-2 py-1 border-2 border-black rounded text-xs mb-3">
                {b.category}
              </div>
              <h2 className="text-xl font-black mb-2 tracking-tight leading-snug">{b.title}</h2>
              <p className="text-zinc-700 text-sm leading-relaxed">{b.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-brand font-black">
                Read Article <iconify-icon icon="solar:arrow-right-up-linear" className="text-lg" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

export function BlogPost() {
  const { slug } = useParams();
  const post = BLOGS.find((b) => b.slug === slug);
  if (!post) {
    return (
      <PageShell>
        <section className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-black mb-4">Post not found</h1>
          <Link to="/blog" className="text-brand font-bold underline">
            Back to Blog
          </Link>
        </section>
      </PageShell>
    );
  }
  return (
    <PageShell>
      <article className="max-w-3xl mx-auto px-6 py-12">
        <Link to="/blog" className="text-sm font-black text-zinc-600 hover:text-brand">
          ← All articles
        </Link>
        <div className="inline-block bg-brand text-brand-foreground font-black px-2 py-1 border-2 border-black rounded text-xs mt-4 mb-3">
          {post.category}
        </div>
        <h1 className="text-4xl lg:text-5xl font-black tracking-tighter mb-4 leading-[1.1]">{post.title}</h1>
        <p className="text-xl text-zinc-700 mb-8">{post.excerpt}</p>
        <div className="prose max-w-none text-lg text-zinc-800 space-y-4">
          {post.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-10 bg-black text-white rounded-3xl border-2 border-black p-6 brutalist-shadow">
          <h3 className="text-2xl font-black mb-2">Get Your Free Growth Plan Today</h3>
          <p className="text-zinc-300 mb-4">We help businesses rank in Top 10 on Google & generate consistent leads.</p>
          <Link
            to="/contact"
            className="inline-block bg-brand text-brand-foreground border-2 border-brand rounded-xl px-6 py-3 font-black"
          >
            Contact Our Team
          </Link>
        </div>
      </article>
    </PageShell>
  );
}
