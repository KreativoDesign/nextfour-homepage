import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { crmPlatforms } from "@/lib/crm-platforms";

export default function CrmPlatformLogos() {
  return (
    <section className="crm-platforms" aria-labelledby="crm-platforms-title">
      <div className="crm-platforms__container">
        <div className="crm-platforms__intro">
          <span className="crm-platforms__eyebrow">CRM SYSTEMS WE CONFIGURE</span>
          <h2 id="crm-platforms-title">The right system for your sales process.</h2>
          <p>
            Trinity is one of our featured systems. We also configure leading CRM
            platforms and connect them to the workflows, reporting, and tools your
            team already uses.
          </p>
        </div>

        <div className="crm-platforms__grid" aria-label="Supported CRM platforms">
          {crmPlatforms.map((platform) => (
            <article className="crm-platforms__card" key={platform.name}>
              <div className="crm-platforms__logo-wrap">
                <img
                  src={platform.src}
                  alt={platform.alt}
                  className={`crm-platforms__logo crm-platforms__logo--${platform.name.toLowerCase()}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="crm-platforms__card-copy">
                <div className="crm-platforms__card-title">
                  <h3>{platform.name}</h3>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </div>
                <p>{platform.description}</p>
                <span className="crm-platforms__card-status">
                  <CheckCircle2 size={15} aria-hidden="true" />
                  Configure &amp; integrate
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
