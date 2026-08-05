/**
 * ServiceDetailContent: Modular content sections for service detail pages.
 * Supports flexible layout with color-keyed accents and consistent typography.
 */

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
    <section className="service-detail-content">
      <div className="service-detail-content__container">
        {sections.map((section, idx) => (
          <div key={idx} className="service-detail-content__section">
            <h2 className="service-detail-content__section-title" style={{ color }}>
              {section.title}
            </h2>
            <p className="service-detail-content__section-description">
              {section.description}
            </p>
            {section.items && section.items.length > 0 && (
              <ul className="service-detail-content__list">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="service-detail-content__list-item">
                    <span className="service-detail-content__list-marker" style={{ backgroundColor: color }} />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
