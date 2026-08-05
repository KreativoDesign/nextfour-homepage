/**
 * NextFour design reminder: The partner strip ends the short homepage quietly.
 * It stays monochrome by default and earns color only through deliberate focus or hover.
 */
import { Boxes, Cloud, Infinity, ShoppingBag, Store } from "lucide-react";

const partners = [
  { name: "Meta", qualifier: "Business Partner", icon: Infinity, className: "partner-logo--meta" },
  { name: "Google", qualifier: "Partner", icon: Cloud, className: "partner-logo--google" },
  { name: "Microsoft", qualifier: "Partner", icon: Boxes, className: "partner-logo--microsoft" },
  { name: "aws", qualifier: "partner network", icon: Cloud, className: "partner-logo--aws" },
  { name: "WooCommerce", qualifier: "Experts", icon: ShoppingBag, className: "partner-logo--woo" },
  { name: "shopify", qualifier: "partners", icon: Store, className: "partner-logo--shopify" },
];

export default function PartnerStrip() {
  return (
    <section className="partners-section" aria-label="Trusted partner platforms">
      <div className="nf-container partners-section__inner">
        <p className="visually-hidden">Partner platforms</p>
        <div className="partner-strip">
          {partners.map((partner) => {
            const Icon = partner.icon;
            return (
              <button key={partner.name} className={`partner-logo ${partner.className}`} type="button" aria-label={`${partner.name} ${partner.qualifier}`}>
                <Icon className="partner-logo__icon" size={26} strokeWidth={1.65} aria-hidden="true" />
                <span className="partner-logo__text">
                  <strong>{partner.name}</strong>
                  <small>{partner.qualifier}</small>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
