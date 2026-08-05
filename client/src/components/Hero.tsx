/**
 * NextFour design reminder: The hero is an asymmetric declaration, not a centered banner.
 * Give the green-to-cyan result line the only large color moment on the page.
 */
export default function Hero() {
  return (
    <section id="home" className="hero-section" aria-labelledby="hero-heading">
      <div className="nf-container hero-section__inner">
        <div className="hero-section__copy">
          <p className="eyebrow eyebrow--circuit hero-animate hero-animate--one">What we do best</p>
          <h1 id="hero-heading" className="hero-heading">
            <span className="hero-heading__line hero-animate hero-animate--two">One Partner. Every Solution.</span>
            <span className="hero-heading__line hero-heading__result hero-animate hero-animate--three">Real Results.</span>
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
