import { Database } from "lucide-react";
import ServiceDetailHero from "@/components/ServiceDetailHero";
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
