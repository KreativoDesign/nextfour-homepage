import { useEffect, useState, type CSSProperties } from "react";

import FeaturedContent from "@/components/FeaturedContent";
import Hero from "@/components/Hero";
import PartnerStrip from "@/components/PartnerStrip";
import ServiceCarousel from "@/components/ServiceCarousel";
import SiteHeader from "@/components/SiteHeader";
import { useTheme } from "@/contexts/ThemeContext";
import {
  getHomepageGridOpacity,
  HOMEPAGE_GRID_FADE_DISTANCE,
} from "@/lib/homepage-motion";

/**
 * NextFour design reminder: Follow the supplied mockup's focused four-part homepage.
 * The hero leads to a full-width service rail, then the partner strip closes the journey.
 */
export default function Home() {
  const { theme } = useTheme();
  const [gridScrollOpacity, setGridScrollOpacity] = useState(1);

  useEffect(() => {
    const hero = document.getElementById("home");
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let heroBottom = 0;
    let frame = 0;

    const setCurrentOpacity = (nextOpacity: number) => {
      setGridScrollOpacity(currentOpacity =>
        Math.abs(currentOpacity - nextOpacity) < 0.002
          ? currentOpacity
          : nextOpacity
      );
    };

    const measureHero = () => {
      if (!hero) return;
      heroBottom = hero.getBoundingClientRect().bottom + window.scrollY;
    };

    const updateOpacity = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        if (mediaQuery.matches || !hero) {
          setCurrentOpacity(1);
          return;
        }

        setCurrentOpacity(
          getHomepageGridOpacity(
            window.scrollY,
            heroBottom,
            HOMEPAGE_GRID_FADE_DISTANCE
          )
        );
      });
    };

    const handleMotionPreference = () => {
      if (!mediaQuery.matches) {
        measureHero();
      }
      updateOpacity();
    };

    const handleResize = () => {
      measureHero();
      updateOpacity();
    };

    measureHero();
    updateOpacity();
    window.addEventListener("scroll", updateOpacity, { passive: true });
    window.addEventListener("resize", handleResize);
    mediaQuery.addEventListener?.("change", handleMotionPreference);

    return () => {
      window.removeEventListener("scroll", updateOpacity);
      window.removeEventListener("resize", handleResize);
      mediaQuery.removeEventListener?.("change", handleMotionPreference);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const gridBaseOpacity = theme === "light" ? 0.16 : 0.32;
  const gridStyle: CSSProperties = {
    opacity: gridBaseOpacity * gridScrollOpacity,
  };

  return (
    <div className="nextfour-page">
      <div className="ambient ambient--one" aria-hidden="true" />
      <div className="ambient ambient--two" aria-hidden="true" />
      <div
        className="page-grid page-grid--homepage"
        style={gridStyle}
        aria-hidden="true"
      />
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <FeaturedContent />
        <ServiceCarousel />
        <PartnerStrip />
      </main>
    </div>
  );
}
