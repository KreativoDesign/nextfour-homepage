import { useState } from "react";
import { Check, Target, TrendingUp, BarChart3, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import InquiryModal from "./InquiryModal";

interface PricingTier {
  name: string;
  description: string;
  price: string;
  setupFee?: string;
  priceLabel?: string;
  cta: string;
  features: string[];
  icon: React.ReactNode;
  borderColor: string;
  accentColor: string;
  ctaColor: string;
}

interface DigitalMarketingPricingTiersProps {
  color: string;
}

export default function DigitalMarketingPricingTiers({
  color,
}: DigitalMarketingPricingTiersProps) {
  const [selectedTier, setSelectedTier] = useState<{ name: string; price: string; accentColor: string } | null>(null);
  const pricingTiers: PricingTier[] = [
    {
      name: "FOUNDATION",
      description: "Build a professional digital presence.",
      price: "R2,500",
      setupFee: "R2,500",
      cta: "GET STARTED",
      features: [
        "Establish your brand online",
        "Engage your audience with quality content",
        "Lay the foundation for growth",
      ],
      icon: <Target className="w-12 h-12" />,
      borderColor: "border-lime-500",
      accentColor: "text-lime-500",
      ctaColor: "bg-lime-500 hover:bg-lime-600 text-black",
    },
    {
      name: "MOMENTUM",
      description: "Generate leads and accelerate your growth.",
      price: "R5,500",
      setupFee: "R3,500",
      cta: "GROW MY BUSINESS",
      features: [
        "Generate quality leads",
        "Increase brand visibility",
        "Data-driven campaigns",
        "Stronger customer engagement",
      ],
      icon: <TrendingUp className="w-12 h-12" />,
      borderColor: "border-cyan-500",
      accentColor: "text-cyan-500",
      ctaColor: "bg-cyan-500 hover:bg-cyan-600 text-black",
    },
    {
      name: "ACCELERATE",
      description: "Scale with performance marketing & automation.",
      price: "R9,500",
      setupFee: "R5,500",
      cta: "ACCELERATE GROWTH",
      features: [
        "Maximise ROI",
        "Advanced automation",
        "Conversion optimisation",
        "Strategic growth partner",
      ],
      icon: <BarChart3 className="w-12 h-12" />,
      borderColor: "border-lime-400",
      accentColor: "text-lime-400",
      ctaColor: "bg-lime-400 hover:bg-lime-500 text-black",
    },
    {
      name: "GROWTH PARTNER",
      description: "Your outsourced marketing department.",
      price: "CUSTOM / CONTACT US",
      priceLabel: "CUSTOMIZE",
      cta: "LET'S SCALE TOGETHER",
      features: [
        "Full-service marketing department",
        "Custom strategy & execution",
        "Multi-channel integrated campaigns",
        "Executive reporting & support",
      ],
      icon: <Handshake className="w-12 h-12" />,
      borderColor: "border-purple-500",
      accentColor: "text-purple-500",
      ctaColor: "bg-purple-500 hover:bg-purple-600 text-white",
    },
  ];

  return (
    <section className="nf-section py-16 md:py-24">
      <div className="nf-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Tailored Packages,</span>
            <br />
            <span className="text-lime-500">Measurable Growth.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We partner with businesses at every stage of their journey with strategic
            marketing, powerful execution and clear results.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 pb-12 border-b border-white/10">
          <div className="text-center">
            <div className="mb-3 flex justify-center">
              <Target className="w-8 h-8 text-lime-500" />
            </div>
            <h3 className="text-lime-500 font-bold mb-2">STRATEGY</h3>
            <p className="text-gray-400 text-sm">built for growth</p>
          </div>
          <div className="text-center">
            <div className="mb-3 flex justify-center">
              <TrendingUp className="w-8 h-8 text-cyan-500" />
            </div>
            <h3 className="text-cyan-500 font-bold mb-2">DATA-DRIVEN</h3>
            <p className="text-gray-400 text-sm">decision making</p>
          </div>
          <div className="text-center">
            <div className="mb-3 flex justify-center">
              <BarChart3 className="w-8 h-8 text-lime-500" />
            </div>
            <h3 className="text-lime-500 font-bold mb-2">MEASURABLE</h3>
            <p className="text-gray-400 text-sm">real results</p>
          </div>
          <div className="text-center">
            <div className="mb-3 flex justify-center">
              <Handshake className="w-8 h-8 text-purple-500" />
            </div>
            <h3 className="text-purple-500 font-bold mb-2">PARTNERSHIP</h3>
            <p className="text-gray-400 text-sm">long-term success</p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border-2 ${tier.borderColor} bg-black/40 backdrop-blur p-8 hover:bg-black/60 transition-all duration-300 flex flex-col`}
            >
              {/* Icon */}
              <div className={`mb-6 ${tier.accentColor}`}>{tier.icon}</div>

              {/* Tier Name */}
              <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>

              {/* Description */}
              <p className={`${tier.accentColor} text-sm mb-6 leading-relaxed`}>
                {tier.description}
              </p>

              {/* Divider */}
              <div className={`border-t ${tier.borderColor} my-6`} />

              {/* Pricing */}
              <div className="mb-6">
                <p className="text-gray-400 text-xs uppercase mb-1">{tier.priceLabel ?? "FROM"}</p>
                <p className={`text-3xl font-bold ${tier.accentColor} mb-2`}>
                  {tier.price}
                </p>
                {tier.setupFee && (
                  <p className="text-gray-500 text-xs">
                    + Once-off setup fee from {tier.setupFee}
                  </p>
                )}
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 ${tier.accentColor} flex-shrink-0 mt-0.5`} />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                onClick={() => setSelectedTier({ name: tier.name, price: tier.price, accentColor: tier.accentColor })}
                className={`w-full font-bold text-sm py-3 rounded-lg transition-all duration-300 ${tier.ctaColor}`}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-gray-500 text-xs">
          Ad spend is paid directly to the platforms (Meta, Google) and is NOT included in the monthly management fee.
        </p>
      </div>

      {/* Inquiry Modal */}
      {selectedTier && (
        <InquiryModal
          isOpen={!!selectedTier}
          onClose={() => setSelectedTier(null)}
          packageName={selectedTier.name}
          packagePrice={selectedTier.price}
          accentColor={selectedTier.accentColor}
        />
      )}
    </section>
  );
}
