interface DigitalMarketingShowcaseProps {
  color: string;
}

export default function DigitalMarketingShowcase({ color }: DigitalMarketingShowcaseProps) {
  const showcaseItems = [
    {
      title: "Campaign Analytics",
      description: "Real-time performance tracking and data visualization across all marketing channels.",
      image: "/manus-storage/digital-marketing-campaign_e1326e03.png",
    },
    {
      title: "Social Media Excellence",
      description: "Engaging content strategies that drive audience growth and meaningful interactions.",
      image: "/manus-storage/digital-marketing-product-showcase_2060daf2.png",
    },
    {
      title: "Team Collaboration",
      description: "Strategic planning and creative execution working seamlessly together for results.",
      image: "/manus-storage/digital-marketing-team_309cb9be.png",
    },
  ];

  return (
    <section className="nf-section" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <div className="nf-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Digital Marketing Work</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From strategic planning to execution and optimization, we deliver comprehensive digital marketing solutions that move the needle for your business.
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
