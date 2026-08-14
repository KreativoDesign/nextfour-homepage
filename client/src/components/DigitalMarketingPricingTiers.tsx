import { useState } from "react";
import { Check, Target, TrendingUp, BarChart3, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getPricingLabel, shouldShowSetupFee } from "@/lib/pricing";
import InquiryModal from "./InquiryModal";

interface InclusionItem {
  label: string;
  value: string;
}

interface InclusionSection {
  category: string;
  items: InclusionItem[];
}

interface PricingTier {
  name: string;
  description: string;
  price: string;
  setupFee?: string;
  priceLabel?: string;
  cta: string;
  features: string[];
  includedSections: InclusionSection[];
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
  const [selectedTier, setSelectedTier] = useState<{
    name: string;
    price: string;
    accentColor: string;
  } | null>(null);
  const [selectedIncludedTier, setSelectedIncludedTier] = useState<PricingTier | null>(null);

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
      includedSections: [
        {
          category: "Strategy",
          items: [
            { label: "Marketing Strategy & Plan", value: "Included" },
            { label: "Monthly Strategy Call", value: "30 min" },
          ],
        },
        {
          category: "Social Media",
          items: [
            { label: "Social Media Management", value: "Included" },
            { label: "Monthly Social Posts", value: "8" },
            { label: "Reels / Short Videos", value: "2" },
            { label: "Stories (Monthly)", value: "8" },
            { label: "Community Management", value: "Included" },
            { label: "Graphic Design", value: "Included" },
          ],
        },
        {
          category: "Advertising",
          items: [
            { label: "Meta Ads Management", value: "Optional" },
            { label: "Recommended Meta Ad Spend", value: "R1,000 – R2,500" },
          ],
        },
        {
          category: "Website & SEO",
          items: [
            { label: "SEO (Search Engine Optimisation)", value: "Basic" },
            { label: "Website Maintenance", value: "Optional" },
            { label: "Landing Pages", value: "1 / quarter" },
          ],
        },
        {
          category: "Content & CRM",
          items: [{ label: "Blog Content", value: "1 / quarter" }],
        },
        {
          category: "Reporting & Growth",
          items: [
            { label: "Monthly Reporting", value: "Included" },
            { label: "Analytics Dashboard / KPI Dashboard", value: "Basic" },
          ],
        },
        {
          category: "Support",
          items: [{ label: "Support Level", value: "Standard" }],
        },
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
      includedSections: [
        {
          category: "Strategy",
          items: [
            { label: "Marketing Strategy & Plan", value: "Included" },
            { label: "Monthly Strategy Call", value: "60 min" },
          ],
        },
        {
          category: "Social Media",
          items: [
            { label: "Social Media Management", value: "Included" },
            { label: "Monthly Social Posts", value: "12" },
            { label: "Reels / Short Videos", value: "4" },
            { label: "Stories (Monthly)", value: "12" },
            { label: "Community Management", value: "Included" },
            { label: "Graphic Design", value: "Included" },
          ],
        },
        {
          category: "Advertising",
          items: [
            { label: "Meta Ads Management", value: "Included" },
            { label: "Recommended Meta Ad Spend", value: "R2,500 – R5,000" },
            { label: "Google Ads Management", value: "Optional" },
            { label: "Recommended Google Ad Spend", value: "R1,000 – R2,500" },
          ],
        },
        {
          category: "Website & SEO",
          items: [
            { label: "SEO (Search Engine Optimisation)", value: "Local SEO" },
            { label: "Website Maintenance", value: "Included" },
            { label: "Landing Pages", value: "1 / month" },
          ],
        },
        {
          category: "Content & CRM",
          items: [
            { label: "Blog Content", value: "2 / month" },
            { label: "Email Marketing", value: "Included" },
            { label: "CRM Integration", value: "Optional" },
          ],
        },
        {
          category: "Automation & AI",
          items: [{ label: "AI-Assisted Marketing", value: "Basic" }],
        },
        {
          category: "Reporting & Growth",
          items: [
            { label: "Monthly Reporting", value: "Included" },
            { label: "Analytics Dashboard / KPI Dashboard", value: "Advanced" },
            { label: "Quarterly Business Review", value: "Included" },
          ],
        },
        {
          category: "Support",
          items: [{ label: "Support Level", value: "Priority" }],
        },
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
      includedSections: [
        {
          category: "Strategy",
          items: [
            { label: "Marketing Strategy & Plan", value: "Included" },
            { label: "Monthly Strategy Call", value: "60 min" },
          ],
        },
        {
          category: "Social Media",
          items: [
            { label: "Social Media Management", value: "Included" },
            { label: "Monthly Social Posts", value: "16" },
            { label: "Reels / Short Videos", value: "6" },
            { label: "Stories (Monthly)", value: "16" },
            { label: "Community Management", value: "Included" },
            { label: "Graphic Design", value: "Included" },
          ],
        },
        {
          category: "Advertising",
          items: [
            { label: "Meta Ads Management", value: "Included" },
            { label: "Recommended Meta Ad Spend", value: "R5,000 – R10,000+" },
            { label: "Google Ads Management", value: "Included" },
            { label: "Recommended Google Ad Spend", value: "R3,000 – R7,500+" },
          ],
        },
        {
          category: "Website & SEO",
          items: [
            { label: "SEO (Search Engine Optimisation)", value: "Advanced" },
            { label: "Website Maintenance", value: "Included" },
            { label: "Landing Pages", value: "2 / month" },
          ],
        },
        {
          category: "Content & CRM",
          items: [
            { label: "Blog Content", value: "4 / month" },
            { label: "Email Marketing", value: "Included" },
            { label: "CRM Integration", value: "Optional" },
          ],
        },
        {
          category: "Automation & AI",
          items: [
            { label: "Marketing Automation", value: "Optional" },
            { label: "AI-Assisted Marketing", value: "Included" },
          ],
        },
        {
          category: "Reporting & Growth",
          items: [
            { label: "Monthly Reporting", value: "Included" },
            { label: "Analytics Dashboard / KPI Dashboard", value: "Advanced + KPI" },
            { label: "Quarterly Business Review", value: "Included" },
          ],
        },
        {
          category: "Support",
          items: [
            { label: "Dedicated Account Manager", value: "Included" },
            { label: "Support Level", value: "Priority Plus" },
          ],
        },
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
      includedSections: [
        {
          category: "Strategy",
          items: [
            { label: "Marketing Strategy & Plan", value: "Included" },
            { label: "Monthly Strategy Call", value: "90 min" },
          ],
        },
        {
          category: "Social Media",
          items: [
            { label: "Social Media Management", value: "Included" },
            { label: "Monthly Social Posts", value: "20+" },
            { label: "Reels / Short Videos", value: "8+" },
            { label: "Stories (Monthly)", value: "20+" },
            { label: "Community Management", value: "Included" },
            { label: "Graphic Design", value: "Included" },
          ],
        },
        {
          category: "Advertising",
          items: [
            { label: "Meta Ads Management", value: "Included" },
            { label: "Recommended Meta Ad Spend", value: "R10,000+" },
            { label: "Google Ads Management", value: "Included" },
            { label: "Recommended Google Ad Spend", value: "R7,500+" },
          ],
        },
        {
          category: "Website & SEO",
          items: [
            { label: "SEO (Search Engine Optimisation)", value: "Enterprise" },
            { label: "Website Maintenance", value: "Included" },
            { label: "Landing Pages", value: "4+ / month" },
          ],
        },
        {
          category: "Content & CRM",
          items: [
            { label: "Blog Content", value: "8+ / month" },
            { label: "Email Marketing", value: "Included" },
            { label: "CRM Integration", value: "Included" },
          ],
        },
        {
          category: "Automation & AI",
          items: [
            { label: "Marketing Automation", value: "Included" },
            { label: "AI-Assisted Marketing", value: "Included" },
          ],
        },
        {
          category: "Reporting & Growth",
          items: [
            { label: "Monthly Reporting", value: "Included" },
            { label: "Analytics Dashboard / KPI Dashboard", value: "Executive Dashboard" },
            { label: "Quarterly Business Review", value: "Included" },
          ],
        },
        {
          category: "Support",
          items: [
            { label: "Dedicated Account Manager", value: "Included" },
            { label: "Support Level", value: "Premium" },
          ],
        },
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

        {/* Mobile package navigation */}
        <nav
          aria-label="Package section navigation"
          className="sticky top-16 z-20 mb-6 grid grid-cols-2 gap-2 rounded-full border border-white/10 bg-black/85 p-1 backdrop-blur-xl md:hidden"
        >
          <a
            href="#package-features"
            className="rounded-full px-3 py-2 text-center text-xs font-semibold uppercase tracking-[0.12em] text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            Features
          </a>
          <a
            href="#package-pricing"
            className="rounded-full px-3 py-2 text-center text-xs font-semibold uppercase tracking-[0.12em] text-lime-400 transition-colors hover:bg-lime-400/10 hover:text-lime-300"
          >
            Pricing
          </a>
        </nav>

        {/* Key Benefits */}
        <div id="package-features" className="scroll-mt-24 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-white/10">
          <div className="text-center">
            <div className="mb-3 flex justify-center">
              <Target tabIndex={0} aria-label="Strategy: built for growth" className="key-benefit-icon w-8 h-8 text-lime-500" />
            </div>
            <h3 className="text-lime-500 font-bold mb-2">STRATEGY</h3>
            <p className="text-gray-400 text-sm">built for growth</p>
          </div>
          <div className="text-center">
            <div className="mb-3 flex justify-center">
              <TrendingUp tabIndex={0} aria-label="Data-driven decision making" className="key-benefit-icon w-8 h-8 text-cyan-500" />
            </div>
            <h3 className="text-cyan-500 font-bold mb-2">DATA-DRIVEN</h3>
            <p className="text-gray-400 text-sm">decision making</p>
          </div>
          <div className="text-center">
            <div className="mb-3 flex justify-center">
              <BarChart3 tabIndex={0} aria-label="Measurable real results" className="key-benefit-icon w-8 h-8 text-lime-500" />
            </div>
            <h3 className="text-lime-500 font-bold mb-2">MEASURABLE</h3>
            <p className="text-gray-400 text-sm">real results</p>
          </div>
          <div className="text-center">
            <div className="mb-3 flex justify-center">
              <Handshake tabIndex={0} aria-label="Partnership and long-term success" className="key-benefit-icon w-8 h-8 text-purple-500" />
            </div>
            <h3 className="text-purple-500 font-bold mb-2">PARTNERSHIP</h3>
            <p className="text-gray-400 text-sm">long-term success</p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div id="package-pricing" className="scroll-mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
                <p className="text-gray-400 text-xs uppercase mb-1">{getPricingLabel(tier.priceLabel)}</p>
                <p className={`text-3xl font-bold ${tier.accentColor} mb-2`}>
                  {tier.price}
                </p>
                {shouldShowSetupFee(tier.setupFee) && (
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

              {/* Included Details */}
              <Button
                type="button"
                variant="link"
                onClick={() => setSelectedIncludedTier(tier)}
                className={`self-start mb-6 h-auto p-0 text-sm font-semibold underline-offset-4 hover:underline ${tier.accentColor}`}
              >
                What’s Included
              </Button>

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

      {selectedIncludedTier && (
        <Dialog open={!!selectedIncludedTier} onOpenChange={() => setSelectedIncludedTier(null)}>
          <DialogContent className="max-h-[85vh] overflow-y-auto bg-black/95 border border-white/10 text-white sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle className={selectedIncludedTier.accentColor}>
                What’s Included in {selectedIncludedTier.name}
              </DialogTitle>
              <DialogDescription className="text-gray-400">
                {selectedIncludedTier.description}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-5 pt-2">
              {selectedIncludedTier.includedSections.map((section) => (
                <section key={section.category}>
                  <h4 className={`mb-2 text-xs font-bold uppercase tracking-[0.18em] ${selectedIncludedTier.accentColor}`}>
                    {section.category}
                  </h4>
                  <div className="overflow-hidden rounded-lg border border-white/10">
                    {section.items.map((item) => (
                      <div
                        key={`${section.category}-${item.label}`}
                        className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 border-b border-white/10 bg-white/5 px-3 py-2.5 last:border-b-0"
                      >
                        <div className="flex items-start gap-2 text-sm leading-relaxed text-gray-200">
                          <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${selectedIncludedTier.accentColor}`} />
                          <span>{item.label}</span>
                        </div>
                        <span className={`text-right text-sm font-semibold ${selectedIncludedTier.accentColor}`}>
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
