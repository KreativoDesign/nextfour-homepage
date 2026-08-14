import { CheckCircle2, Database, UsersRound } from "lucide-react";
import { trinityFeatureGroups } from "@/lib/trinity";

interface TrinityCrmSectionProps {
  color: string;
}

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
      </div>
    </section>
  );
}
