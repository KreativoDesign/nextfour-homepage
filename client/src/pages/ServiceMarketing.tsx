/**
 * Digital Marketing service detail page.
 * Showcases NextFour's expertise in data-driven campaigns.
 */
import ServiceDetailCTA from "@/components/ServiceDetailCTA";
import ServiceDetailContent from "@/components/ServiceDetailContent";
import ServiceDetailHero from "@/components/ServiceDetailHero";
import SiteHeader from "@/components/SiteHeader";
import { Megaphone } from "lucide-react";
import SocialPostShowcase from "@/components/SocialPostShowcase";
import DigitalMarketingShowcase from "@/components/DigitalMarketingShowcase";
import DigitalMarketingPricingTiers from "@/components/DigitalMarketingPricingTiers";

export default function ServiceMarketing() {
  const serviceColor = "#20B8FF";
  const serviceGlow = "rgba(32, 184, 255, 0.3)";

  const contentSections = [
    {
      title: "Our Approach",
      description:
        "Effective marketing starts with data and insight. We combine strategic planning, creative storytelling, and continuous optimization to move your audience from awareness to action.",
      items: [
        "Market research and audience analysis",
        "Data-driven campaign strategy",
        "Creative content development",
        "Performance tracking and optimization",
      ],
    },
    {
      title: "What We Deliver",
      description:
        "From social media to paid advertising, we create integrated campaigns that deliver measurable results.",
      items: [
        "Social media strategy and management",
        "Content marketing and copywriting",
        "Paid advertising (Google, Meta, LinkedIn)",
        "Email marketing campaigns",
        "SEO and organic growth strategies",
        "Analytics and reporting",
      ],
    },
    {
      title: "Why Choose NextFour",
      description:
        "We don't believe in vanity metrics. Our campaigns are built on clear objectives, real data, and a commitment to driving business growth.",
      items: [
        "Proven ROI on marketing investments",
        "Strategic thinking and creative execution",
        "Transparent reporting and insights",
        "Ongoing optimization and improvement",
      ],
    },
  ];

  return (
    <div className="nextfour-page">
      <div className="ambient ambient--one" aria-hidden="true" />
      <div className="ambient ambient--two" aria-hidden="true" />
      <div className="page-grid" aria-hidden="true" />
      
      <SiteHeader />
      
      <main id="main-content">
        <ServiceDetailHero
          title="Digital Marketing"
          subtitle="Data-informed campaigns designed to move audiences from attention to action."
          color={serviceColor}
          glow={serviceGlow}
          icon={Megaphone}
        />
        
        <ServiceDetailContent sections={contentSections} color={serviceColor} />
        
        <DigitalMarketingShowcase color={serviceColor} />

        <DigitalMarketingPricingTiers color={serviceColor} />

        <ServiceDetailCTA
          title="Ready to Grow Your Audience?"
          description="Let's build a marketing strategy that drives real business results."
          color={serviceColor}
          glow={serviceGlow}
        />
      </main>
    </div>
  );
}
