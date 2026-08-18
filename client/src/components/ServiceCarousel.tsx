/**
 * NextFour design reminder: Treat the carousel as a tactile horizontal service rail.
 * Its controls and staggered glass cards should signal calm, premium exploration.
 */
import { useCallback, useEffect, useState, type KeyboardEvent, type WheelEvent } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { services } from "@/lib/nextfour-data";
import { getLoopingIndex } from "@/lib/carousel";
import ServiceCard from "@/components/ServiceCard";

export default function ServiceCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    containScroll: false,
    duration: 32,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(services.length);

  const updateSelection = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setSnapCount(emblaApi.scrollSnapList().length);
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

  const scrollByDirection = useCallback((direction: 1 | -1) => {
    if (!emblaApi) return;
    const snapList = emblaApi.scrollSnapList();
    if (!snapList.length) return;

    const currentIndex = emblaApi.selectedScrollSnap();
    const nextIndex = getLoopingIndex(currentIndex, direction, snapList.length);
    emblaApi.scrollTo(nextIndex);
  }, [emblaApi]);

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    const delta = Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
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
    <section id="services" className="services-section" aria-label="Explore NextFour services">
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
            {services.map((service, index) => (
              <div
                className={`carousel-slide${index === selectedIndex ? " is-selected" : ""}`}
                data-selected={index === selectedIndex ? "true" : "false"}
                key={service.title}
              >
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-edge-controls" aria-label="Carousel directional controls">
          <button className="carousel-arrow carousel-arrow--edge" type="button" onClick={() => scrollByDirection(-1)} aria-label="Previous service">
            <ChevronLeft size={23} strokeWidth={1.45} aria-hidden="true" />
          </button>
          <button className="carousel-arrow carousel-arrow--edge" type="button" onClick={() => scrollByDirection(1)} aria-label="Next service">
            <ChevronRight size={23} strokeWidth={1.45} aria-hidden="true" />
          </button>
        </div>
        <div className="carousel-controls">
          <button className="carousel-arrow carousel-arrow--inline" type="button" onClick={() => scrollByDirection(-1)} aria-label="Previous service">
            <ChevronLeft size={23} strokeWidth={1.45} aria-hidden="true" />
          </button>
          <div className="carousel-dots" role="tablist" aria-label="Choose a service">
            {Array.from({ length: snapCount }).map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === selectedIndex ? "is-active" : ""}`}
                type="button"
                role="tab"
                aria-selected={index === selectedIndex}
                aria-label={`Go to service ${index + 1}`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
          <button className="carousel-arrow carousel-arrow--inline" type="button" onClick={() => scrollByDirection(1)} aria-label="Next service">
            <ChevronRight size={23} strokeWidth={1.45} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
