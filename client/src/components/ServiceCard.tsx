/**
 * NextFour design reminder: Service cards are dark glass objects with individual accent-light.
 * Keep copy high contrast and let replaceable artwork float through the lower portion.
 */
import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import type { Service } from "@/lib/nextfour-data";

type ServiceCardProps = {
  service: Service;
  index: number;
};

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;
  const styles = {
    "--service-accent": service.color,
    "--service-glow": service.glow,
    animationDelay: `${120 + index * 90}ms`,
  } as CSSProperties;

  return (
    <Link
      href={service.route}
      className="service-card"
      style={styles}
      aria-labelledby={`service-title-${index}`}
    >
      <div className="service-card__wash" aria-hidden="true" />
      <div className="service-card__content">
        <div className="service-card__icon" aria-hidden="true">
          <Icon size={34} strokeWidth={1.65} />
        </div>
        <h2 id={`service-title-${index}`} className="service-card__title">{service.title}</h2>
        <p className="service-card__description">{service.description}</p>
      </div>
      <div className="service-card__art-wrap" aria-hidden="true">
        <img
          className="service-card__art"
          src={service.image}
          alt={service.imageAlt}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
        />
      </div>
      <span className="service-card__cta" aria-hidden="true">
        <span>View more</span>
        <ArrowRight size={20} strokeWidth={1.45} />
      </span>
    </Link>
  );
}

