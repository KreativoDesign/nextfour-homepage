/**
 * ServiceDetailCTA: Color-keyed call-to-action section for service detail pages.
 * Encourages user engagement with consistent NextFour visual language.
 */
import type { CSSProperties } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

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
    <section
      id="service-contact"
      className="service-detail-cta"
      style={{ "--service-accent": color, "--service-glow": glow } as CSSProperties}
    >
      <div className="service-detail-cta__ambient" style={{ background: glow }} aria-hidden="true" />
      <div className="service-detail-cta__grid" aria-hidden="true" />
      
      <div className="service-detail-cta__content">
        <span className="service-detail-cta__eyebrow" style={{ color }}>
          <Sparkles size={15} aria-hidden="true" />
          Start a conversation
        </span>
        <h2 className="service-detail-cta__title" style={{ color }}>
          {title}
        </h2>
        <p className="service-detail-cta__description">{description}</p>
        <a href="/#contact" className="service-detail-cta__button" style={{ borderColor: color, color }}>
          Get in Touch
          <ArrowRight size={18} className="service-detail-cta__button-icon" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
