import {
  CheckCircle2,
  Database,
  Headphones,
  PlugZap,
  Rocket,
  UsersRound,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { trinityFeatureGroups } from "@/lib/trinity";
import { trinityDetails, trinityScreenshots } from "@/lib/trinity-showcase";

interface TrinityCrmSectionProps {
  color: string;
}

const detailIcons = {
  onboarding: Rocket,
  integrations: PlugZap,
  support: Headphones,
} as const;

export default function TrinityCrmSection({ color }: TrinityCrmSectionProps) {
  return (
    <section className="trinity-crm" aria-labelledby="trinity-crm-title">
      <div className="trinity-crm__container">
        <div className="trinity-crm__intro">
          <div className="trinity-crm__eyebrow" style={{ color }}>
            <Database size={18} aria-hidden="true" />
            <span>CRM SYSTEM SPOTLIGHT</span>
          </div>
          <h2 id="trinity-crm-title" className="trinity-crm__title">
            Meet Trinity CRM
          </h2>
          <p className="trinity-crm__description">
            A customer relationship management system built around the details,
            relationships, and account intelligence your team needs to serve
            customers with confidence.
          </p>
        </div>

        <div className="trinity-crm__groups">
          {trinityFeatureGroups.map((group, index) => (
            <article className="trinity-crm__group" key={group.title}>
              <div className="trinity-crm__group-heading">
                {index === 0 ? (
                  <Database size={22} aria-hidden="true" />
                ) : (
                  <UsersRound size={22} aria-hidden="true" />
                )}
                <h3>{group.title}</h3>
              </div>
              <p className="trinity-crm__group-description">
                {group.description}
              </p>
              <ul className="trinity-crm__list">
                {group.items.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={17} aria-hidden="true" style={{ color }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="trinity-crm__gallery" aria-label="Trinity CRM screenshots">
          {trinityScreenshots.map((screenshot) => (
            <figure
              className={`trinity-crm__gallery-item${screenshot.featured ? " trinity-crm__gallery-item--featured" : ""}`}
              key={screenshot.src}
            >
              <div className="trinity-crm__gallery-media">
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption>
                <strong>{screenshot.title}</strong>
                <span>{screenshot.description}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="trinity-crm__details" aria-labelledby="trinity-crm-details-title">
          <div className="trinity-crm__details-heading">
            <span className="trinity-crm__eyebrow" style={{ color }}>
              <Database size={18} aria-hidden="true" />
              <span>MAKE IT WORK FOR YOUR TEAM</span>
            </span>
            <h2 id="trinity-crm-details-title">From setup to steady support</h2>
            <p>
              Explore how we help your team get more value from Trinity before,
              during, and after launch.
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            defaultValue="onboarding"
            className="trinity-crm__accordion"
          >
            {trinityDetails.map((detail) => {
              const Icon = detailIcons[detail.value];
              return (
                <AccordionItem value={detail.value} key={detail.value}>
                  <AccordionTrigger>
                    <span className="trinity-crm__accordion-trigger">
                      <Icon size={20} aria-hidden="true" style={{ color }} />
                      <span>{detail.title}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="trinity-crm__accordion-content">
                      <p>{detail.content}</p>
                      <ul>
                        {detail.points.map((point) => (
                          <li key={point}>
                            <CheckCircle2 size={16} aria-hidden="true" style={{ color }} />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
