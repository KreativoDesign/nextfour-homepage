/**
 * Business Technology service detail page.
 * Showcases NextFour's expertise in connected systems and automation.
 */
import ServiceDetailCTA from "@/components/ServiceDetailCTA";
import ServiceDetailContent from "@/components/ServiceDetailContent";
import ServiceDetailHero from "@/components/ServiceDetailHero";
import SiteHeader from "@/components/SiteHeader";
import { Network } from "lucide-react";

export default function ServiceBusiness() {
  const serviceColor = "#FF8A24";
  const serviceGlow = "rgba(255, 138, 36, 0.3)";

  const contentSections = [
    {
      title: "Our Approach",
      description:
        "Operational complexity doesn't have to slow you down. We analyze your workflows, identify inefficiencies, and implement connected systems that turn complexity into momentum.",
      items: [
        "Process analysis and optimization",
        "Systems integration planning",
        "Custom software development",
        "Automation strategy and implementation",
      ],
    },
    {
      title: "What We Deliver",
      description:
        "From internal tools to customer-facing platforms, we build technology solutions that streamline operations and drive growth.",
      items: [
        "Custom business applications",
        "Workflow automation and integration",
        "Data management and analytics",
        "CRM and ERP implementations",
        "Cloud infrastructure setup",
        "Security and compliance solutions",
      ],
    },
    {
      title: "Why Choose NextFour",
      description:
        "We understand that technology is a means to an end. Our solutions are built around your business goals, not the other way around.",
      items: [
        "Deep industry expertise",
        "Scalable, future-proof solutions",
        "Dedicated technical support",
        "Continuous improvement and optimization",
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
          title="Business Technology"
          subtitle="Connected systems and automation that turn operational complexity into momentum."
          color={serviceColor}
          glow={serviceGlow}
          icon={Network}
        />
        
        <ServiceDetailContent sections={contentSections} color={serviceColor} />
        
        <ServiceDetailCTA
          title="Simplify Your Operations"
          description="Let's build the technology infrastructure that powers your business forward."
          color={serviceColor}
          glow={serviceGlow}
        />
      </main>
    </div>
  );
}
