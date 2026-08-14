import { Database } from "lucide-react";
import ServiceDetailHero from "@/components/ServiceDetailHero";
import ServiceDetailContent from "@/components/ServiceDetailContent";
import ServiceDetailCTA from "@/components/ServiceDetailCTA";
import TrinityCrmSection from "@/components/TrinityCrmSection";
import CrmPlatformLogos from "@/components/CrmPlatformLogos";

export default function ServiceCRM() {
  const service = {
    title: "CRM Management Systems",
    subtitle: "Stop losing leads between the cracks. We implement and configure the systems that track every prospect from first click to closed deal, so your team spends time selling, not searching spreadsheets.",
    color: "#20B8FF",
    glow: "rgba(32, 184, 255, 0.3)",
    icon: Database,
  };

  return (
    <div className="service-detail-page">
      <ServiceDetailHero
        title={service.title}
        subtitle={service.subtitle}
        color={service.color}
        glow={service.glow}
        icon={service.icon}
      />

      <ServiceDetailContent
        color={service.color}
        sections={[
          {
            title: "Our Approach",
            description: "We combine strategic thinking, CRM expertise, and technical excellence to build customer relationship systems that work as hard as you do. Every implementation begins with understanding your sales process and business goals.",
            items: [
              "Sales pipeline optimization and automation",
              "Lead scoring and qualification workflows",
              "Integration with your existing tools and systems",
              "Team training and ongoing support",
            ],
          },
          {
            title: "What We Deliver",
            description: "From initial assessment to launch, we handle the complete CRM implementation lifecycle with precision and care.",
            items: [
              "Salesforce, HubSpot, Pipedrive, or custom CRM configuration",
              "Automated lead routing and nurturing sequences",
              "Custom dashboards and reporting for real-time visibility",
              "Data migration and system integration",
              "Ongoing optimization and support",
            ],
          },
          {
            title: "Why Choose NextFour",
            description: "We don't just implement CRM software—we build the systems that drive revenue growth. Our team brings years of experience across industries, from startups to enterprise organizations.",
            items: [
              "Proven track record of successful implementations",
              "Sales-first mindset focused on revenue impact",
              "Transparent communication throughout the process",
              "Post-launch support and continuous optimization",
            ],
          },
        ]}
      />

      <CrmPlatformLogos />

      <TrinityCrmSection color={service.color} />

      <ServiceDetailCTA
        title="Ready to Stop Losing Leads?"
        description="Let's discuss how a properly configured CRM can transform your sales process and help your team close more deals."
        color={service.color}
        glow={service.glow}
      />
    </div>
  );
}
