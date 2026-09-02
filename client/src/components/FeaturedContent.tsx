import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { featuredContent } from "@/lib/featured-content";

export default function FeaturedContent() {
  return (
    <section
      id="featured"
      className="featured-content-section"
      aria-labelledby="featured-content-heading"
    >
      <div className="nf-container">
        <div className="featured-content-section__intro">
          <div>
            <p className="eyebrow eyebrow--circuit">Featured capabilities</p>
            <h2 id="featured-content-heading">
              The right move starts with a clearer view.
            </h2>
          </div>
          <p className="featured-content-section__summary">
            Explore a few of the ways NextFour brings strategy, creativity, and
            technology together to move ambitious businesses forward.
          </p>
        </div>

        <div className="featured-content-grid">
          {featuredContent.map((item, index) => {
            const { service } = item;
            const Icon = service.icon;
            const styles = {
              "--featured-accent": service.color,
              "--featured-glow": service.glow,
              animationDelay: `${100 + index * 85}ms`,
            } as CSSProperties;

            return (
              <Link
                href={service.route}
                className="featured-content-card"
                style={styles}
                key={service.title}
              >
                <img
                  className="featured-content-card__art"
                  src={service.image}
                  alt={service.imageAlt}
                  loading="lazy"
                  decoding="async"
                />
                <div
                  className="featured-content-card__wash"
                  aria-hidden="true"
                />
                <div className="featured-content-card__content">
                  <div className="featured-content-card__topline">
                    <span
                      className="featured-content-card__icon"
                      aria-hidden="true"
                    >
                      <Icon size={22} strokeWidth={1.55} />
                    </span>
                    <span className="featured-content-card__index">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="featured-content-card__eyebrow">
                    {item.eyebrow}
                  </p>
                  <h3 id={`featured-content-title-${index}`}>{item.title}</h3>
                  <p className="featured-content-card__description">
                    {item.description}
                  </p>
                  <span className="featured-content-card__action">
                    <span>{item.action}</span>
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
