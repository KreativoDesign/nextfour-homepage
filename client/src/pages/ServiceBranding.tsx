/**
 * Branding & Graphic Design service detail page.
 * Showcases NextFour's expertise in distinctive identity systems.
 */
import ServiceDetailCTA from "@/components/ServiceDetailCTA";
import ServiceDetailContent from "@/components/ServiceDetailContent";
import ServiceDetailHero from "@/components/ServiceDetailHero";
import SiteHeader from "@/components/SiteHeader";
import { PenTool } from "lucide-react";

export default function ServiceBranding() {
  const serviceColor = "#C56CFF";
  const serviceGlow = "rgba(197, 108, 255, 0.3)";

  const contentSections = [
    {
      title: "Our Approach",
      description:
        "Strong brands start with clarity. We work deeply to understand your vision, values, and market position, then translate that into a visual identity that resonates and endures.",
      items: [
        "Brand strategy and positioning",
        "Visual identity development",
        "Comprehensive brand guidelines",
        "Consistent application across touchpoints",
      ],
    },
    {
      title: "What We Deliver",
      description:
        "From logo design to complete brand systems, we create identities that stand out and stick with your audience.",
      items: [
        "Logo design and variations",
        "Color palettes and typography systems",
        "Brand guidelines and documentation",
        "Marketing collateral design",
        "Packaging and environmental design",
        "Digital asset creation",
      ],
    },
    {
      title: "Why Choose NextFour",
      description:
        "Our branding work goes beyond aesthetics. We create identity systems that communicate your unique value and build lasting connections with your audience.",
      items: [
        "Strategic brand thinking",
        "Award-winning design execution",
        "Attention to detail and craft",
        "Long-term brand partnership",
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
          title="Branding & Graphic Design"
          subtitle="Distinctive identity systems that make a lasting, recognisable impression."
          color={serviceColor}
          glow={serviceGlow}
          icon={PenTool}
        />
        
        <ServiceDetailContent sections={contentSections} color={serviceColor} />
        
        <ServiceDetailCTA
          title="Let's Create Your Brand Story"
          description="We're ready to develop an identity that captures your essence and resonates with your audience."
          color={serviceColor}
          glow={serviceGlow}
        />
      </main>
    </div>
  );
}
