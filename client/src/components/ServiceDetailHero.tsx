/**
 * ServiceDetailHero: Color-keyed hero section for service detail pages.
 * Inherits the service's accent color, glow, and establishes the page's visual identity.
 */
import { ChevronRight } from "lucide-react";

interface ServiceDetailHeroProps {
  title: string;
  subtitle: string;
  color: string;
  glow: string;
  icon: React.ComponentType<{ size: number; className: string }>;
}

export default function ServiceDetailHero({
  title,
  subtitle,
  color,
  glow,
  icon: Icon,
}: ServiceDetailHeroProps) {
  return (
    <section className="service-detail-hero">
      <div className="service-detail-hero__ambient" style={{ background: glow }} aria-hidden="true" />
      
      <div className="service-detail-hero__content">
        <div className="service-detail-hero__breadcrumb">
          <a href="/" className="service-detail-hero__breadcrumb-link">
            Home
          </a>
          <ChevronRight size={16} className="service-detail-hero__breadcrumb-sep" />
          <a href="/#services" className="service-detail-hero__breadcrumb-link">
            Services
          </a>
          <ChevronRight size={16} className="service-detail-hero__breadcrumb-sep" />
          <span className="service-detail-hero__breadcrumb-current">{title}</span>
        </div>

        <div className="service-detail-hero__header">
          <div className="service-detail-hero__icon-wrap" style={{ color }}>
            <Icon size={56} className="service-detail-hero__icon" />
          </div>
          <h1 className="service-detail-hero__title" style={{ color }}>
            {title}
          </h1>
        </div>

        <p className="service-detail-hero__subtitle">{subtitle}</p>
      </div>
    </section>
  );
}
