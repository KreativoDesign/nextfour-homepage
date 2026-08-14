interface WebDesignShowcaseProps {
  color: string;
}

export default function WebDesignShowcase({ color }: WebDesignShowcaseProps) {
  const showcaseItems = [
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed with user experience at the core of every decision.",
      image: "/manus-storage/web-design-uiux-natural_0ffbc6ee.png",
      imageAlt: "Close-up of hands arranging paper wireframes and typography samples on a design desk",
      objectPosition: "center 54%",
      imageScale: "scale-[1.16]",
      hoverImageScale: "group-hover:scale-[1.23]",
    },
    {
      title: "SEO",
      description: "We optimize every page for discoverability, stronger rankings, and sustainable organic growth.",
      image: "/manus-storage/web-design-seo-discovery-natural_cf5fd3f4.png",
      imageAlt: "Close-up of hands studying a local business directory, map route, and search content plan",
      objectPosition: "center 50%",
      imageScale: "scale-[1.16]",
      hoverImageScale: "group-hover:scale-[1.23]",
    },
    {
      title: "Responsive Design",
      description: "Seamless experiences across all devices, from desktop to mobile, ensuring your site works everywhere.",
      image: "/manus-storage/web-design-responsive-natural_89c517a5.png",
      imageAlt: "Close-up of three paper compositions arranged in mobile, tablet, and desktop proportions",
      objectPosition: "center 50%",
      imageScale: "scale-[1.38]",
      hoverImageScale: "group-hover:scale-[1.48]",
    },
  ];

  return (
    <section className="nf-section" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
      <div className="nf-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Web Design Excellence</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We craft digital experiences that combine stunning design with powerful functionality, delivering websites that engage users and drive business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden bg-gray-900">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  style={{ objectPosition: item.objectPosition }}
                  className={`w-full h-full object-cover ${item.imageScale} ${item.hoverImageScale} transition-transform duration-700`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
