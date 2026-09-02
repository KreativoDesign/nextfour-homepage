/**
 * NextFour design reminder: Treat the carousel as a tactile horizontal service rail.
 * Its controls and staggered glass cards should signal calm, premium exploration.
 */
import {
  useCallback,
  useEffect,
  useState,
  type KeyboardEvent,
  type WheelEvent,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { services } from "@/lib/nextfour-data";
import { createLoopingItems, getCarouselScrollDuration } from "@/lib/carousel";
import ServiceCard from "@/components/ServiceCard";

const LOOPED_SERVICES = createLoopingItems(services, 3);

export default function ServiceCarousel() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const scrollDuration = getCarouselScrollDuration(prefersReducedMotion);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    containScroll: false,
    // Embla uses this duration for both programmatic snaps and drag settling.
    duration: scrollDuration,
    startIndex: services.length,
  });
  const [selectedSnap, setSelectedSnap] = useState(services.length);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener?.("change", updatePreference);
    return () => mediaQuery.removeEventListener?.("change", updatePreference);
  }, []);

  const updateSelection = useCallback(() => {
    if (!emblaApi) return;
    const currentSnap = emblaApi.selectedScrollSnap();
    setSelectedSnap(currentSnap);
    setSelectedIndex(currentSnap % services.length);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateSelection();
    emblaApi.on("select", updateSelection);
    emblaApi.on("reInit", updateSelection);
    return () => {
      emblaApi.off("select", updateSelection);
      emblaApi.off("reInit", updateSelection);
    };
  }, [emblaApi, updateSelection]);

  const scrollByDirection = useCallback(
    (direction: 1 | -1) => {
      if (!emblaApi) return;
      if (direction === 1) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollPrev();
      }
    },
    [emblaApi]
  );

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    const delta =
      Math.abs(event.deltaY) >= Math.abs(event.deltaX)
        ? event.deltaY
        : event.deltaX;
    if (Math.abs(delta) < 3) return;
    event.preventDefault();
    scrollByDirection(delta > 0 ? 1 : -1);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollByDirection(1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollByDirection(-1);
    }
  };

  return (
    <section
      id="services"
      className="services-section"
      aria-label="Explore NextFour services"
    >
      <div className="nf-container services-section__shell">
        <div
          className="carousel-viewport"
          ref={emblaRef}
          onWheel={handleWheel}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          aria-label="Looping service carousel. Use the mouse wheel, touchpad, drag, or left and right arrow keys to move through services."
        >
          <div className="carousel-track">
            {LOOPED_SERVICES.map(({ item: service }, index) => (
              <div
                className={`carousel-slide ${index === selectedSnap ? "is-selected" : ""}`}
                key={`${service.title}-${index}`}
              >
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </div>
        </div>

        <div
          className="carousel-edge-controls"
          aria-label="Carousel directional controls"
        >
          <button
            className="carousel-arrow carousel-arrow--edge"
            type="button"
            onClick={() => scrollByDirection(-1)}
            aria-label="Previous service"
          >
            <ChevronLeft size={23} strokeWidth={1.45} aria-hidden="true" />
          </button>
          <button
            className="carousel-arrow carousel-arrow--edge"
            type="button"
            onClick={() => scrollByDirection(1)}
            aria-label="Next service"
          >
            <ChevronRight size={23} strokeWidth={1.45} aria-hidden="true" />
          </button>
        </div>
        <div className="carousel-controls">
          <button
            className="carousel-arrow carousel-arrow--inline"
            type="button"
            onClick={() => scrollByDirection(-1)}
            aria-label="Previous service"
          >
            <ChevronLeft size={23} strokeWidth={1.45} aria-hidden="true" />
          </button>
          <div
            className="carousel-dots"
            role="tablist"
            aria-label="Choose a service"
          >
            {services.map((service, index) => (
              <button
                key={service.title}
                className={`carousel-dot ${index === selectedIndex ? "is-active" : ""}`}
                type="button"
                role="tab"
                aria-selected={index === selectedIndex}
                aria-label={`Go to ${service.title}`}
                onClick={() => emblaApi?.scrollTo(services.length + index)}
              />
            ))}
          </div>
          <button
            className="carousel-arrow carousel-arrow--inline"
            type="button"
            onClick={() => scrollByDirection(1)}
            aria-label="Next service"
          >
            <ChevronRight size={23} strokeWidth={1.45} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
