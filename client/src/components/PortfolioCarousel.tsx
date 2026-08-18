import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

interface PortfolioItem {
  id: string;
  title: string;
  image: string;
}

interface PortfolioCarouselProps {
  items: PortfolioItem[];
  accentColor?: string;
}

export default function PortfolioCarousel({
  items,
  accentColor = '#b8ff00',
}: PortfolioCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = () => {
    if (!emblaApi) return;
    const selectedSnap = emblaApi.selectedScrollSnap();
    setSelectedIndex(selectedSnap);
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  };

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="portfolio-carousel">
      <div className="portfolio-carousel__container">
        <div className="portfolio-carousel__viewport" ref={emblaRef}>
          <div className="embla__container">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`embla__slide${index === selectedIndex ? " is-selected" : ""}`}
              >
                <figure className="portfolio-carousel__slide">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="portfolio-carousel__image"
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                  <figcaption className="portfolio-carousel__caption">
                    <span>{String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")} · Selected project</span>
                    <strong>{item.title}</strong>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          className="portfolio-carousel__button portfolio-carousel__button--prev"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          aria-label="Previous slide"
          style={{
            borderColor: canScrollPrev ? accentColor : 'rgba(255, 255, 255, 0.1)',
            color: canScrollPrev ? accentColor : 'rgba(255, 255, 255, 0.3)',
          }}
        >
          <ChevronLeft size={20} />
        </button>

        <button
          className="portfolio-carousel__button portfolio-carousel__button--next"
          onClick={scrollNext}
          disabled={!canScrollNext}
          aria-label="Next slide"
          style={{
            borderColor: canScrollNext ? accentColor : 'rgba(255, 255, 255, 0.1)',
            color: canScrollNext ? accentColor : 'rgba(255, 255, 255, 0.3)',
          }}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="portfolio-carousel__pagination">
        {items.map((_, index) => (
          <button
            key={index}
            className={`portfolio-carousel__dot ${
              index === selectedIndex ? 'is-active' : ''
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            style={{
              backgroundColor:
                index === selectedIndex ? accentColor : 'rgba(255, 255, 255, 0.2)',
            }}
          />
        ))}
      </div>
    </div>
  );
}
