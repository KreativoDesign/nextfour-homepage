# NextFour Homepage — Ground-Truth Design Specification

## Reference Fidelity Commitment

The supplied NextFour homepage mockup is the **ground-truth visual specification** for this implementation. The work will preserve its strong, left-led hero composition, near-black canvas, neon-green brand presence, five-card portfolio-carousel moment, restrained header, and monochrome trusted-partner footer strip. The objective is not to redesign the homepage; it is to elevate its responsive behavior, interaction quality, animation timing, semantic markup, and code modularity while retaining the mockup's immediate visual logic.

## Chosen Direction: Precision Luminous Interface

**Design movement.** A refined dark-mode technology interface influenced by contemporary digital-product landing pages and premium creative studios, expressed through precise luminance, measured glass surfaces, and restrained kinetic feedback.

**Core principles.** The composition remains asymmetrical and horizontal-first, using the hero to set a confident narrative before the carousel begins. Ambient atmosphere stays subordinate to hierarchy: black and graphite establish calm, while neon accents identify actions and individual services. Every interaction should feel physical but controlled, driven primarily by opacity and transforms. Visual interest comes from the contrast of large negative space, vivid service-color lighting, and carefully layered card depth rather than from extra sections or decoration.

**Color philosophy.** Graphite and deep black preserve a luxury, gallery-like stage for the work. Electric green is the unifying brand signal and is reserved for the active navigation state, primary call to action, eyebrow line, and initial service emphasis. Each service owns a discrete color family so the carousel reads as a system of business divisions, while the green-to-cyan gradient on “Real Results.” provides the hero's single high-energy focal point.

**Layout paradigm.** The page is a cinematic horizontal rail rather than a conventional vertically stacked marketing page. The hero uses an offset two-column rhythm: declarative type anchors the left, while concise proof copy balances it at the right. Below it, a full-width draggable service track intentionally reaches toward the viewport edges, visually signalling exploration and avoiding a conventional centered-card grid.

**Signature elements.** A fine neon circuit trace beside the eyebrow, translucent dark service panels with colored edge-lighting, and an understated constellation of glowing pagination nodes appear throughout the experience. A soft radial ambient wash and nearly imperceptible technical grid provide depth without competing with content.

**Interaction philosophy.** Motion is purposeful and modest. The header acquires glass density only after scrolling, service cards lift and brighten when examined, and carousel controls provide immediate directional feedback. Keyboard and touch exploration should feel as intentional as pointer interaction; reduced-motion users see the same hierarchy without decorative movement.

**Animation.** Hero copy enters in a brief, sequenced upward fade. Cards reveal with a 70–100 ms stagger and use a 300–350 ms custom ease for hover elevation, art translation, border intensification, and arrow shift. The carousel snaps smoothly but never auto-advances, so the visitor remains in control. Animations are limited to `transform` and `opacity` wherever possible and are disabled or reduced when the visitor requests reduced motion.

**Typography system.** Urbanist is the high-impact display face for navigation, hero typography, service names, and calls to action. Inter supports long-form supporting copy at generous line-height. Display hierarchy prioritizes heavy 700–800 weights and restrained letter spacing; body text stays clear and warm white rather than pure white.

**Brand essence.** NextFour is the integrated South African technology partner for ambitious companies that want strategy, design, growth, and operational technology to move as one. **Confident, luminous, considered.**

**Brand voice.** Headlines are concise, declarative, and outcome-led; CTAs are active but calm, never salesy. Example lines: “Build the business people choose.” and “See what a connected partner can unlock.”

**Wordmark and logo.** The reference logo composition remains the starting point: a technical wordmark supported by a strong “4” symbol. The functional site mark will use a geometric electric-green four-part signal glyph on a transparent background, deliberately distinct from generic lettermark treatment and visible at a confident scale in the header and favicon.

**Signature brand color.** **NextFour Signal Green — `#B8FF00`**. This is the ownable action color against the graphite environment.

## Phase 1 + Phase 2 Brief Review

| Brief area | Accepted implementation decision | Review note |
| --- | --- | --- |
| Homepage scope | Navigation, hero, service carousel, trusted partner strip only | The short, focused journey is preserved; additional marketing sections will not be introduced. |
| Reference hierarchy | Header → asymmetric hero → five visual cards → partner logos | The supplied desktop mockup remains the design source of truth. |
| Service cards | One reusable `ServiceCard` component driven by a typed data array | Artwork is isolated in the data model so it can be replaced later without layout changes. |
| Carousel | Embla-based draggable rail with buttons, dots, pointer dragging, wheel support, keyboard support, and responsive breakpoints | Desktop prioritizes five cards, tablet three cards, and mobile one card with deliberate gutters. |
| Service content | Web Design, Branding, Digital Marketing, Business Technology, and Startup Support | The mockup's fourth E-commerce card is treated as a visual reference; the written brief's “Business Technology” label takes precedence for production content. |
| Premium effects | Ambient radial glow, subtle grid/noise, glass surfaces, colored borders, and contained shadows | Effects support legibility and will not introduce distracting animation or low-contrast text. |
| Navigation | Transparent first paint, then sticky semi-opaque glass on scroll; desktop links plus accessible compact mobile menu | The reference proportions and CTA treatment are retained while the interaction becomes responsive. |
| Partners | Monochrome branded wordmarks with focus and hover colorization | These are presented as partnership claims from the supplied brief, without inventing reviews, ratings, or testimonials. |
| Accessibility | Semantic landmark structure, real buttons, keyboard carousel controls, visible focus states, ARIA labels, and reduced-motion support | Meets the brief's usability goals without sacrificing the visual tone. |
| Performance | CSS-led atmosphere, lazy-loaded card art, no autoplay, lean component structure | The implementation favors GPU-friendly transitions and avoids unnecessary runtime work. |

## Responsive Acceptance Criteria

| Viewport | Desired behavior |
| --- | --- |
| Desktop (≥1280 px) | Full navigation is visible; hero has the reference's two-column tension; the carousel presents five narrow but readable cards. |
| Tablet (768–1279 px) | Navigation reduces gracefully; hero retains contrast and reading order; carousel reveals approximately three cards with pull-forward affordance. |
| Mobile (<768 px) | Compact header and menu; type is scaled, not simply stacked; carousel exposes one centered card with a visible next-card cue and natural touch dragging. |

## Implementation Guardrails

The final interface must not rely on a standard centered landing-page template, large generic gradients, excessive rounded pills, or repeated imagery. Decorative card artwork is prepared as independently replaceable assets rather than embedded layout. Every choice should be checked against one question: **does this reinforce the supplied NextFour reference rather than dilute it?**

## Style Decisions

- Desktop navigation uses the full link set and CTA as a single restrained control system. The hamburger belongs only to compact navigation states.
- The service area behaves and looks like a horizontal rail: its controls sit at the directional edges, its track reaches toward the viewport, and the subdued edge masks signal continuation without obscuring the five reference cards.
- The technical atmosphere is a durable part of the brand system, expressed through a visible fine circuit trace, soft graphite grid, and focused Signal Green edge-lighting rather than through decorative clutter.
