import type { CSSProperties } from "react";

interface DigitalMarketingShowcaseProps {
  color: string;
}

export default function DigitalMarketingShowcase({ color }: DigitalMarketingShowcaseProps) {
  const showcaseItems = [
    {
      title: "Campaign Analytics",
      description: "Real-time performance tracking and data visualization across all marketing channels.",
      image: "/manus-storage/digital-marketing-analytics-natural_b19e594b.png",
      imageAlt: "Close-up of a marketer reviewing printed campaign performance sheets with trend lines and tabs",
      objectPosition: "center 52%",
      imageScale: "scale-[1.16]",
      hoverImageScale: "group-hover:scale-[1.23]",
    },
    {
      title: "Social Media Excellence",
      description: "Engaging content strategies that drive audience growth and meaningful interactions.",
      image: "/manus-storage/digital-marketing-social-natural_35cb34cf.png",
      imageAlt: "Close-up of hands arranging printed social campaign cards and product photography prints",
      objectPosition: "center 50%",
      imageScale: "scale-[1.18]",
      hoverImageScale: "group-hover:scale-[1.25]",
    },
    {
      title: "Team Collaboration",
      description: "Strategic planning and creative execution working seamlessly together for results.",
      image: "/manus-storage/digital-marketing-team-natural_6d084159.png",
      imageAlt: "Close-up of several hands arranging a campaign moodboard and color swatches together",
      objectPosition: "center 48%",
      imageScale: "scale-[1.16]",
      hoverImageScale: "group-hover:scale-[1.23]",
    },
  ];

  return (
    <section
      id="marketing-showcase"
      className="nf-section service-visual-showcase"
      style={{ "--showcase-accent": color } as CSSProperties}
      aria-labelledby="marketing-showcase-title"
    >
      <div className="nf-container">
        <div className="service-visual-showcase__header text-center mb-12">
          <span className="service-section-kicker">Strategy in action</span>
          <h2 id="marketing-showcase-title" className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Digital Marketing Work</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From strategic planning to execution and optimization, we deliver comprehensive digital marketing solutions that move the needle for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item) => (
            <article
              key={item.title}
              tabIndex={0}
              className="group service-visual-showcase__card relative overflow-hidden rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden bg-gray-900">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  style={{ objectPosition: item.objectPosition }}
                  className={`service-visual-showcase__image w-full h-full object-cover ${item.imageScale} ${item.hoverImageScale} transition-transform duration-700`}
                />
                <div className="service-visual-showcase__overlay absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent transition-opacity duration-300" />
              </div>

              <div className="service-visual-showcase__copy absolute bottom-0 left-0 right-0 p-6 transition-transform duration-300">
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="service-visual-showcase__description text-sm text-gray-300 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
