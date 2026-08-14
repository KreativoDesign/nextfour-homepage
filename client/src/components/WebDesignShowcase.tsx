interface WebDesignShowcaseProps {
  color: string;
}

export default function WebDesignShowcase({ color }: WebDesignShowcaseProps) {
  const showcaseItems = [
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed with user experience at the core of every decision.",
      image: "/manus-storage/web-design-ui-showcase_c24f724e.png",
    },
    {
      title: "SEO",
      description: "We optimize every page for discoverability, stronger rankings, and sustainable organic growth.",
      image: "/manus-storage/web-design-seo-optimization_cbd37efa.png",
    },
    {
      title: "Responsive Design",
      description: "Seamless experiences across all devices, from desktop to mobile, ensuring your site works everywhere.",
      image: "/manus-storage/web-design-responsive_a04b106b.png",
    },
  ];

  return (
    <section className="nf-section" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <div className="nf-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Web Design Excellence</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We craft digital experiences that combine stunning design with powerful functionality, delivering websites that engage users and drive business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden bg-gray-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
