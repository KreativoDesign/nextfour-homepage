/**
 * Startup Support service detail page.
 * Showcases NextFour's expertise in strategic, creative, and technical foundations.
 */
import ServiceDetailCTA from "@/components/ServiceDetailCTA";
import ServiceDetailContent from "@/components/ServiceDetailContent";
import ServiceDetailHero from "@/components/ServiceDetailHero";
import SiteHeader from "@/components/SiteHeader";
import { Rocket } from "lucide-react";
import { servicePageQuickLinks } from "@/lib/service-page-navigation";

export default function ServiceStartup() {
  const serviceColor = "#F551B7";
  const serviceGlow = "rgba(245, 81, 183, 0.32)";

  const contentSections = [
    {
      title: "Our Approach",
      description:
        "Launching a startup requires more than a great idea. We provide the strategic clarity, creative direction, and technical foundation ambitious founders need to turn vision into reality.",
      items: [
        "Business strategy and positioning",
        "Brand identity development",
        "MVP and product strategy",
        "Go-to-market planning",
      ],
    },
    {
      title: "What We Deliver",
      description:
        "We're your strategic partner from concept to launch, handling the full spectrum of startup needs.",
      items: [
        "Business model and strategy development",
        "Brand identity and positioning",
        "Website and digital presence",
        "Product development and MVP",
        "Marketing and launch strategy",
        "Investor pitch materials and support",
      ],
    },
    {
      title: "Why Choose NextFour",
      description:
        "We've worked with dozens of startups. We understand the unique challenges you face and bring both strategic thinking and hands-on execution to accelerate your growth.",
      items: [
        "Startup-focused experience and expertise",
        "Flexible, scalable engagement models",
        "Network of investors and advisors",
        "Ongoing support and guidance",
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
          title="Startup Support"
          subtitle="The strategic, creative, and technical foundations ambitious launches need."
          color={serviceColor}
          glow={serviceGlow}
          icon={Rocket}
          quickLinks={servicePageQuickLinks.startup}
        />
        
        <ServiceDetailContent sections={contentSections} color={serviceColor} />
        
        <ServiceDetailCTA
          title="Let's Launch Your Vision"
          description="We're excited to partner with ambitious founders building the future."
          color={serviceColor}
          glow={serviceGlow}
        />
      </main>
    </div>
  );
}
