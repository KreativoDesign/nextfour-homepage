/**
 * NextFour design reminder: Follow the supplied mockup's focused four-part homepage.
 * The hero leads to a full-width service rail, then the partner strip closes the journey.
 */
import Hero from "@/components/Hero";
import PartnerStrip from "@/components/PartnerStrip";
import ServiceCarousel from "@/components/ServiceCarousel";
import SiteHeader from "@/components/SiteHeader";

export default function Home() {
  return (
    <div className="nextfour-page">
      <div className="ambient ambient--one" aria-hidden="true" />
      <div className="ambient ambient--two" aria-hidden="true" />
      <div className="page-grid" aria-hidden="true" />
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <ServiceCarousel />
        <PartnerStrip />
      </main>
    </div>
  );
}
