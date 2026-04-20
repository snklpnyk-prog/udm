import FadeUp from "./FadeUp";

interface ServiceCardProps {
  icon: string;
  title: string;
  href: string;
  variant: "light" | "brand" | "dark";
}

function ServiceCard({ icon, title, href, variant }: ServiceCardProps) {
  const styles = {
    light:
      "bg-zinc-100 text-black hover:bg-brand hover:text-white",
    brand:
      "bg-brand text-white hover:bg-black hover:text-white",
    dark: "bg-black text-white hover:bg-zinc-800",
  }[variant];

  const iconColor =
    variant === "dark"
      ? "text-brand"
      : variant === "brand"
      ? "text-white"
      : "text-black group-hover:text-white";

  const arrowWrap =
    variant === "dark"
      ? "border-zinc-700 bg-zinc-900 group-hover:border-brand"
      : variant === "brand"
      ? "border-black bg-white text-black group-hover:border-white"
      : "border-black bg-white group-hover:bg-black group-hover:text-brand";

  const linkColor =
    variant === "dark"
      ? "text-brand"
      : variant === "brand"
      ? "text-white"
      : "text-black group-hover:text-white";

  return (
    <div
      className={`${styles} p-5 rounded-[22px] border-2 border-black brutalist-shadow flex flex-col justify-between min-h-[230px] group transition-colors h-full`}
    >
      <div>
        <iconify-icon
          icon={icon}
          className={`text-[2.2rem] mb-3 ${iconColor} group-hover:rotate-12 transition-transform inline-block`}
        />
        <h3 className="text-xl font-black tracking-tight leading-snug mb-2 whitespace-pre-line">
          {title}
        </h3>
      </div>

      <a
        href={href}
        className={`flex items-center gap-2 text-base font-bold mt-auto ${linkColor}`}
      >
        <span
          className={`w-9 h-9 rounded-full border ${arrowWrap} flex items-center justify-center transition-colors`}
        >
          <iconify-icon icon="solar:arrow-right-up-linear" className="text-lg" />
        </span>
        Learn more
      </a>
    </div>
  );
}

export default function Services() {
  const services: ServiceCardProps[] = [
    { icon: "solar:magnifer-zoom-in-linear", title: "Google My Business\noptimization", href: "#go", variant: "light" },
    { icon: "solar:mouse-circle-linear", title: "Meta & Google\nads", href: "#mga", variant: "brand" },
    { icon: "solar:smartphone-update-linear", title: "Social Media\nMarketing", href: "#social", variant: "dark" },
    { icon: "solar:letter-opened-linear", title: "Search engine\noptimization", href: "#seo", variant: "light" },
    { icon: "solar:pen-new-square-linear", title: "Content\nCreation", href: "#content", variant: "brand" },
    { icon: "solar:chart-square-linear", title: "YouTube\nManagement", href: "#analytics", variant: "dark" },
  ];

  return (
    <section id="services" className="max-w-7xl mx-auto px-4 py-10">
      
      <FadeUp className="grid lg:grid-cols-12 gap-6 items-center mb-8">
        
        <div className="lg:col-span-8">
          <div className="inline-block bg-brand text-brand-foreground font-bold px-3 py-1 border-2 border-black rounded-lg mb-3 text-sm -rotate-2">
            Our Services
          </div>

          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight leading-snug">
            At our digital marketing agency, we offer a range of services to help
            businesses grow and succeed online.
          </h2>
        </div>

        <div className="lg:col-span-4 flex justify-center lg:justify-end relative">
          
          <div className="w-32 h-32 bg-white border-2 border-black rounded-full brutalist-shadow flex items-center justify-center relative z-10 group">
            <iconify-icon
              icon="solar:target-linear"
              className="text-[3rem] text-black group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          <div className="absolute w-32 h-32 bg-brand border-2 border-black rounded-full translate-x-3 translate-y-3" />

          <iconify-icon
            icon="solar:star-fall-linear"
            className="absolute -top-2 right-6 text-2xl text-black rotate-12 z-20 animate-pulse"
          />
        </div>

      </FadeUp>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s) => (
          <FadeUp key={s.title}>
            <ServiceCard {...s} />
          </FadeUp>
        ))}
      </div>

    </section>
  );
}