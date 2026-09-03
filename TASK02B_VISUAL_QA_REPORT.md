# OpenV Homepage — Task 02B Visual QA Report

**Date:** 3 September 2026  
**Scope:** Homepage visual QA and refinement only  
**Status:** Ready for service-page implementation

## Visual QA

The homepage was served locally and checked against the supplied OpenV static project. Desktop QA was completed at 1440px, including header dimensions, logo treatment, navigation spacing, hero hierarchy, CTA dimensions, metric visibility, service-band spacing, partner-section transition, and the original light technical/editorial visual system. The rendered result preserves the original page rhythm and content hierarchy.

A poster-only temporary QA copy was used for mobile screenshot validation so the remote mobile MP4 could not block layout inspection. The homepage was checked at 375px and the mobile CSS logic was reviewed against the required 390px, 360px, 768px, 600px, and 480px breakpoint behavior. The corrected mobile hero has no visible horizontal overflow, the hamburger is visible, CTAs stack correctly, the five metrics remain visible, and the hero does not retain excessive empty height.

The service pages were not implemented or altered in this task.

## Hero video

The homepage retains the approved live sources:

- Desktop/tablet: `https://www.openv.co.za/wp-content/uploads/2025/06/Webvid.mp4`
- Mobile: `https://www.openv.co.za/wp-content/uploads/2025/07/web-mobile-opv-vid.mp4`

The video is configured with `autoplay`, `muted`, `loop`, `playsinline`, `poster`, `object-fit: cover`, and `pointer-events: none`. It sits behind the content and overlay, so the headline, CTAs, and metric chips remain interactive and readable. The poster uses the supplied `hero-core.png` asset and remains available while the video loads or if playback fails.

The desktop source was previously verified with HTTP 200 headers. The earlier mobile screenshot timeout was reproduced as a remote-video loading issue, not treated as a design failure. The poster-only mobile QA copy rendered successfully at 375px.

## Correction made during this refinement task

The legacy SVG HUD was still occupying the full mobile visual area after the video layer was introduced. This pushed the metric grid lower than intended and made the mobile hero unnecessarily tall. The SVG HUD was therefore hidden as a primary visual, while the required five metric chips remain in the foreground. The desktop and mobile hero now use the approved cinematic video/poster layer as the primary visual, consistent with the brief.

The mobile hero visual container was changed to content height rather than a forced square aspect ratio. The legacy glow and decorative HUD backing were disabled at the mobile breakpoint. The existing colors, typography, CTA treatment, metrics, section order, and responsive breakpoints were preserved.

## Validation results

- All seven HTML documents parsed successfully.
- `assets/js/main.js` passed `node --check`.
- Required homepage sections and content markers passed static checks.
- Local HTTP serving returned the homepage and a service page successfully.
- Desktop screenshot generated successfully at 1440×900.
- Poster-only mobile screenshot generated successfully at 375×812.
- Approved hero source URLs remain in `index.html` unchanged.
- No service-page implementation was performed.
- No PHP runtime test was possible because PHP is not installed in the sandbox.
- Browser-console inspection through the connected browser was unavailable, so console status was checked indirectly through static JavaScript validation and Chromium page rendering.

## Outstanding issues

The following items remain intentionally unresolved because the brief explicitly excludes them from this task:

1. The archive still lacks the 24 team photographs.
2. The three local legal-policy pages are still absent.
3. The three Insights cards remain clearly marked placeholders.
4. Proof figures, review verification, sitemap decisions, production mail delivery, and final deployment remain pending.
5. The live video remains externally hosted and should be locally hosted only after permission and final asset approval.

## Readiness

The homepage has completed the visual-QA and refinement pass and is ready for the service-page implementation phase.

**PHASE 2B HOMEPAGE VISUAL QA COMPLETE — READY FOR SERVICE PAGES**
