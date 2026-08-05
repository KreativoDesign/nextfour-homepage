/**
 * ServiceDetailCTA: Color-keyed call-to-action section for service detail pages.
 * Encourages user engagement with consistent NextFour visual language.
 */
import { ArrowRight } from "lucide-react";

interface ServiceDetailCTAProps {
  title: string;
  description: string;
  color: string;
  glow: string;
}

export default function ServiceDetailCTA({
  title,
  description,
  color,
  glow,
}: ServiceDetailCTAProps) {
  return (
    <section className="service-detail-cta">
      <div className="service-detail-cta__ambient" style={{ background: glow }} aria-hidden="true" />
      
      <div className="service-detail-cta__content">
        <h2 className="service-detail-cta__title" style={{ color }}>
          {title}
        </h2>
        <p className="service-detail-cta__description">{description}</p>
        <a href="/#contact" className="service-detail-cta__button" style={{ borderColor: color, color }}>
          Get in Touch
          <ArrowRight size={18} className="service-detail-cta__button-icon" />
        </a>
      </div>
    </section>
  );
}
