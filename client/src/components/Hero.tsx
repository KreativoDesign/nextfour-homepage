/**
 * NextFour design reminder: The hero is an asymmetric declaration, not a centered banner.
 * Give the green-to-cyan result line the only large color moment on the page.
 */
import type { CSSProperties } from "react";
import { homepageHeadlineLines, homepageHeadlineText } from "@/lib/homepage-motion";

export default function Hero() {
  return (
    <section id="home" className="hero-section" aria-labelledby="hero-heading">
      <div className="nf-container hero-section__inner">
        <div className="hero-section__copy">
          <p className="eyebrow eyebrow--circuit hero-animate hero-animate--one">What we do best</p>
          <h1 id="hero-heading" className="hero-heading" aria-label={homepageHeadlineText}>
            {homepageHeadlineLines.map((line) => (
              <span
                className={`hero-heading__line hero-heading__line--motion${line.accent ? " hero-heading__result" : ""}`}
                aria-hidden="true"
                key={line.id}
              >
                {line.words.map((word, index) => (
                  <span className="hero-heading__word" key={`${line.id}-${word}`}>
                    <span
                      style={{ "--word-index": line.startIndex + index } as CSSProperties}
                    >
                      {word}
                    </span>
                  </span>
                ))}
              </span>
            ))}
          </h1>
        </div>
        <div className="hero-section__support hero-animate hero-animate--four">
          <p>
            We combine strategy, creativity and technology to help businesses launch, grow and scale with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
