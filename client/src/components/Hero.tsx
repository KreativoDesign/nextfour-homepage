import type { CSSProperties } from "react";
import {
  ArrowRight,
  Check,
  LayoutPanelTop,
  Maximize2,
  PanelsTopLeft,
} from "lucide-react";
import { useState } from "react";
import OpenVBrandBlocks from "@/components/OpenVBrandBlocks";
import editorialOffice from "@/assets/openv-hero-office-editorial.jpg";
import executiveOffice from "@/assets/openv-hero-office-executive.jpg";
import systemsOffice from "@/assets/openv-hero-office-systems.jpg";

type HeroVariant = "editorial" | "executive" | "systems";
type HeroOption = {
  id: HeroVariant;
  label: string;
  title: string;
  lead: string;
  image: string;
  icon: typeof LayoutPanelTop;
};

const options: HeroOption[] = [
  {
    id: "editorial",
    label: "Editorial Split",
    title: "Three specialist brands. One powerful group.",
    lead: "An editorial, image-led introduction that puts people, place and perspective behind the OpenV Group story.",
    image: editorialOffice,
    icon: PanelsTopLeft,
  },
  {
    id: "executive",
    label: "Executive Focus",
    title: "Technology that moves business forward.",
    lead: "A more assured boardroom composition for a group that brings strategic clarity to complex business decisions.",
    image: executiveOffice,
    icon: Maximize2,
  },
  {
    id: "systems",
    label: "Systems Grid",
    title: "Connected expertise. Clearer momentum.",
    lead: "A structured systems view that makes the relationship between managed technology, digital growth and operations explicit.",
    image: systemsOffice,
    icon: LayoutPanelTop,
  },
];

export default function Hero() {
  const [activeId, setActiveId] = useState<HeroVariant>("editorial");
  const active = options.find(option => option.id === activeId) ?? options[0];
  const ActiveIcon = active.icon;

  return (
    <section
      id="home"
      className={`openv-hero openv-hero--${active.id}`}
      style={{ "--openv-hero-image": `url(${active.image})` } as CSSProperties}
      aria-labelledby="hero-heading"
    >
      <div className="openv-hero__backdrop" aria-hidden="true" />
      <div className="nf-container openv-hero__inner">
        <div className="openv-hero__copy" key={active.id}>
          <div className="openv-hero__eyebrow">
            <span /> OpenV Group / Hero direction
          </div>
          <h1 id="hero-heading">{active.title}</h1>
          <p className="openv-hero__lead">{active.lead}</p>
          <div className="openv-hero__actions">
            <a className="openv-hero__primary" href="#brands">
              Explore the group <ArrowRight size={17} />
            </a>
            <span className="openv-hero__meta">
              <Check size={16} /> Three specialist teams, one accountable
              partner
            </span>
          </div>
        </div>
        <div className="openv-hero__signal" aria-hidden="true">
          <ActiveIcon size={20} strokeWidth={1.5} />
          <span>
            Direction 0
            {options.findIndex(option => option.id === active.id) + 1}
          </span>
        </div>
      </div>
      <div id="brands" className="nf-container openv-hero__brands-wrap">
        <div className="openv-hero__brands-heading">
          <span>OpenV Group</span>
          <small>Three specialist brands / one connected view</small>
        </div>
        <OpenVBrandBlocks variant={active.id} />
      </div>
      <div
        className="nf-container openv-hero__options"
        aria-label="Hero design options"
      >
        <span className="openv-hero__options-label">Review hero direction</span>
        <div
          className="openv-hero__option-list"
          role="tablist"
          aria-label="Choose a hero direction"
        >
          {options.map((option, index) => (
            <button
              type="button"
              role="tab"
              aria-selected={activeId === option.id}
              className={`openv-hero__option ${activeId === option.id ? "is-active" : ""}`}
              onClick={() => setActiveId(option.id)}
              key={option.id}
            >
              <span className="openv-hero__option-number">0{index + 1}</span>
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
