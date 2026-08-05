/**
 * Web Design & Development service detail page.
 * Showcases NextFour's expertise in custom digital experiences.
 */
import ServiceDetailCTA from "@/components/ServiceDetailCTA";
import ServiceDetailContent from "@/components/ServiceDetailContent";
import ServiceDetailHero from "@/components/ServiceDetailHero";
import SiteHeader from "@/components/SiteHeader";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import { MonitorCog } from "lucide-react";

export default function ServiceWebDesign() {
  const serviceColor = "#B8FF00";
  const serviceGlow = "rgba(184, 255, 0, 0.3)";

  const portfolioItems = [
    {
      id: "eezi-kitchens",
      title: "Eezi Kitchens",
      image: "/manus-storage/carousel-eezi-kitchens_de918fd4.jpg",
    },
    {
      id: "shift-bridge",
      title: "ShiftBridge",
      image: "/manus-storage/carousel-shiftbridge_85049ac7.jpg",
    },
    {
      id: "clure-projects",
      title: "Clure Projects",
      image: "/manus-storage/carousel-clure-projects_0ccc3a8e.jpg",
    },
    {
      id: "clure-projects-website",
      title: "Clure Projects Website",
      image: "/manus-storage/carousel-clure-projects-website_bd49e9c8.jpg",
    },
  ];

  const contentSections = [
    {
      title: "Our Approach",
      description:
        "We combine strategic thinking, creative design, and technical excellence to build digital experiences that feel effortless and drive measurable results. Every project begins with understanding your audience and business goals.",
      items: [
        "User-centered design methodology",
        "Performance-optimized development",
        "Responsive across all devices",
        "Accessibility-first implementation",
      ],
    },
    {
      title: "What We Deliver",
      description:
        "From concept to launch, we handle the complete web development lifecycle with precision and care.",
      items: [
        "Custom website design and development",
        "E-commerce platforms and integrations",
        "Progressive web applications",
        "API development and backend systems",
        "Ongoing maintenance and optimization",
      ],
    },
    {
      title: "Why Choose NextFour",
      description:
        "We don't just build websites—we build digital assets that work as hard as you do. Our team brings years of experience across industries, from startups to enterprise organizations.",
      items: [
        "Award-winning design and development",
        "Proven track record of success",
        "Transparent communication throughout",
        "Post-launch support and optimization",
      ],
    },
  ];

  return (
    <div className="nextfour-page">
      <div className="ambient ambient--one" aria-hidden="true" />
      <div className="ambient ambient--two" aria-hidden="true" />
      <div className="page-grid" aria-hidden="true" />
      
      <SiteHeader />
      
      <main id="main-content">
        <ServiceDetailHero
          title="Web Design & Development"
          subtitle="Custom digital experiences that feel effortless and convert with clarity."
          color={serviceColor}
          glow={serviceGlow}
          icon={MonitorCog}
        />
        
        <ServiceDetailContent sections={contentSections} color={serviceColor} />
        
        <section className="portfolio-section">
          <div className="nf-container">
            <div className="portfolio-section__header">
              <h2 className="portfolio-section__title">Recent Projects</h2>
              <p className="portfolio-section__subtitle">
                Explore some of our latest web design and development work
              </p>
            </div>
            <PortfolioCarousel items={portfolioItems} accentColor={serviceColor} />
          </div>
        </section>
        
        <ServiceDetailCTA
          title="Ready to Build Something Great?"
          description="Let's discuss how we can create a digital experience that moves your business forward."
          color={serviceColor}
          glow={serviceGlow}
        />
      </main>
    </div>
  );
}
