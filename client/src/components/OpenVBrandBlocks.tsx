import type { CSSProperties } from "react";
import { ArrowUpRight, BarChart3, Cloud, Workflow } from "lucide-react";

type BrandBlock = {
  name: string;
  descriptor: string;
  description: string;
  tags: string[];
  accent: string;
  icon: typeof Cloud;
};

const brands: BrandBlock[] = [
  {
    name: "coerv",
    descriptor: "BUSINESS SOLUTIONS",
    description:
      "Managed IT, cybersecurity, cloud and connectivity — proactive, modern and SLA-backed.",
    tags: ["Managed IT", "Cybersecurity", "Cloud"],
    accent: "#13C46B",
    icon: Cloud,
  },
  {
    name: "NEXT4",
    descriptor: "DIGITAL GROWTH",
    description:
      "Web, marketing, brand and CRM — built to turn visibility into measurable growth.",
    tags: ["Web & CRM", "Marketing", "Brand"],
    accent: "#1B8EFF",
    icon: BarChart3,
  },
  {
    name: "SHIFTBRIDGE",
    descriptor: "CONNECTED OPERATIONS",
    description:
      "CRM, quoting, jobs, invoicing and automation — one clear view of your operation.",
    tags: ["Business OS", "Job Management", "Automation"],
    accent: "#8B7CFF",
    icon: Workflow,
  },
];

export default function OpenVBrandBlocks({
  variant,
}: {
  variant: "editorial" | "executive" | "systems";
}) {
  return (
    <div
      className={`openv-brand-blocks openv-brand-blocks--${variant}`}
      aria-label="OpenV Group specialist brands"
    >
      {brands.map((brand, index) => {
        const Icon = brand.icon;
        return (
          <article
            className="openv-brand-block"
            style={{ "--brand-accent": brand.accent } as CSSProperties}
            key={brand.name}
          >
            <div className="openv-brand-block__topline">
              <span className="openv-brand-block__index">0{index + 1}</span>
              <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
            </div>
            <div className="openv-brand-block__identity">
              <span className="openv-brand-block__name">{brand.name}</span>
              <span className="openv-brand-block__descriptor">
                {brand.descriptor}
              </span>
            </div>
            <p>{brand.description}</p>
            <div className="openv-brand-block__tags">
              {brand.tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <span className="openv-brand-block__link" aria-hidden="true">
              <ArrowUpRight size={18} />
            </span>
          </article>
        );
      })}
    </div>
  );
}
