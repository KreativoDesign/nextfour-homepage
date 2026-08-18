/**
 * ServiceDetailContent: Modular content sections for service detail pages.
 * Supports flexible layout with color-keyed accents and consistent typography.
 */
import type { CSSProperties } from "react";

interface ContentSection {
  title: string;
  description: string;
  items?: string[];
}

interface ServiceDetailContentProps {
  sections: ContentSection[];
  color: string;
}

export default function ServiceDetailContent({
  sections,
  color,
}: ServiceDetailContentProps) {
  return (
    <section
      id="service-overview"
      className="service-detail-content"
      style={{ "--service-accent": color } as CSSProperties}
      aria-label="Service approach and deliverables"
    >
      <div className="service-detail-content__container">
        {sections.map((section, idx) => (
          <article key={section.title} className="service-detail-content__section">
            <div className="service-detail-content__section-meta" aria-hidden="true">
              <span>{String(idx + 1).padStart(2, "0")}</span>
              <span className="service-detail-content__section-line" />
            </div>
            <h2 className="service-detail-content__section-title" style={{ color }}>
              {section.title}
            </h2>
            <p className="service-detail-content__section-description">
              {section.description}
            </p>
            {section.items && section.items.length > 0 && (
              <ul className="service-detail-content__list">
                {section.items.map((item) => (
                  <li key={item} className="service-detail-content__list-item">
                    <span className="service-detail-content__list-marker" style={{ backgroundColor: color }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
