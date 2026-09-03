# Open V Business Solutions — Task 06 Technical Hardening & Production Readiness Report

**Date:** 3 September 2026  
**Scope:** Technical hardening, production-readiness audit, contact form security, SEO, accessibility, performance, security headers, and cross-page regression  
**Status:** Complete; ready for final production QA and deployment preparation

## 1. Technical changes

The following files were modified or created:

| File | Change |
|---|---|
| `contact.php` | Added strict POST-only handling, bounded field extraction, server-side required-field and email validation, honeypot handling, newline/header safety, safe plain-text body construction, and truthful `mail()` return-value handling. |
| `contact-error.html` | Added a shared-design, noindex failure state for rejected validation or mail-transport acceptance failures. It exposes no PHP errors, paths, mail configuration, or internal details. |
| `index.html` | Added matching form `maxlength` hints and `preload="metadata"` to the existing approved hero video. No video source, copy, layout, or design was replaced. |
| `assets/js/main.js` | Added reduced-motion handling that pauses the hero video and keeps the poster fallback for users requesting reduced motion. Existing null guards, navigation behavior, reveal fallback, counters, and video error fallback remain intact. |
| `thank-you.html` | Added canonical and `noindex, nofollow` metadata because this is a transactional confirmation page, and aligned its mobile navigation with the shared Clients and FAQ links. |
| `sitemap.xml` | Removed `thank-you.html`; retained only the homepage, Team page, and four service pages that are intended to be indexable. Legal placeholders and contact-error are excluded. |
| `.htaccess` | Prepared conservative cPanel Apache hardening: directory-index protection, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, and same-origin frame protection. HSTS remains commented until HTTPS is confirmed on every production hostname. |

No frontend framework, build system, new visual section, approved copy, hero asset, service layout, or Team layout was changed.

The repository also contains the inherited NextFour application scaffold (`client/`, `server/`, `package.json`, and related development files) alongside the static cPanel website. Those files are not referenced by the static production pages. The deployment package should use an explicit allowlist of the static website files and should not expose the inherited development scaffold on the public document root.

## 2. Form and PHP

The form remains POST-only and retains its existing honeypot. Name, email, company, industry, and message values are extracted only as strings, trimmed, bounded by server-side length limits, and validated before processing. Email is checked with `FILTER_VALIDATE_EMAIL`. Newline characters are removed from header-bound values, and body values are normalized to plain text. The allowed form fields are used explicitly; unexpected POST fields are ignored.

The `Reply-To` header is constructed only after newline sanitization. The previous `X-Mailer` header and `phpversion()` disclosure were removed. The message body is plain text and contains no HTML output path, so no browser XSS response is produced.

The critical success behavior is corrected. The script now redirects to `thank-you.html` only when native `mail()` returns `true`, meaning the configured local mail transport accepted the message. A `true` result does not guarantee final delivery. Invalid input and a false `mail()` result redirect to `contact-error.html`; the honeypot exits without sending an enquiry. Non-POST requests redirect back to the homepage.

PHP CLI is not installed in the sandbox, so PHP syntax and runtime behavior could not be executed locally. The implementation remains lightweight and cPanel-compatible, but it must be tested on the actual host. Production testing should submit a valid enquiry, invalid/missing name, invalid email, over-limit fields, a populated honeypot, and a simulated or observed `mail()` failure. Confirm HTTP 303 behavior, verify that the thank-you page is reached only after transport acceptance, inspect the mail logs, and distinguish transport acceptance from final delivery.

## 3. SEO

The sitemap now contains six indexable public URLs: the homepage, Team page, and four service pages. The transactional thank-you page, contact-error page, and three legal pages awaiting official content are excluded. No placeholder Insights URLs were added. The sitemap decision was finalized only for the current page state; future official legal or Insights pages require a later review.

`robots.txt` continues to allow normal crawling and references `https://www.openv.co.za/sitemap.xml`. It does not block CSS, JavaScript, or important images and does not expose a development path.

All 11 production HTML pages have a title, description, canonical, English-ZA language declaration, shared CSS, and shared JavaScript. The three legal structural notices remain `noindex, follow`. Thank-you and contact-error remain non-indexable transactional states.

All retained JSON-LD blocks parse successfully. The homepage retains `ProfessionalService` and `FAQPage`; the four service pages retain `Service`; the Team page retains `WebPage` and `Organization` with all 24 employee records. No fabricated review, rating, person, service, location, claim, image, or Article schema was introduced.

## 4. Accessibility

Shared keyboard navigation remains in place for the Services dropdown, including Enter/Space, ArrowDown, ArrowUp, Escape, focus return, and focus-out behavior. Mobile menu and mobile Services submenu ARIA states remain connected to their controls. Existing visible focus styling and semantic FAQ disclosure behavior were preserved.

The contact form retains labels, required Name and Email fields, the hidden honeypot label, and native email validation. Server rejection now has a useful user-facing page without exposing implementation details. Team fallback initials retain their explicit accessible image role and accessible name.

The existing reduced-motion CSS remains active for smooth scrolling, animation, transitions, HUD chips, and decorative motion. The JavaScript now also pauses the hero video and shows the poster fallback when `prefers-reduced-motion: reduce` is active. The site remains usable if JavaScript is unavailable because primary content, links, form submission, and native FAQ disclosure do not depend on JavaScript.

The visual system continues to use the existing contrast-safe palette and typography. No restrictive Content Security Policy was added because the site uses external Google Fonts, remote hero video, inline structured data, and external review/privacy destinations; a CSP should be introduced only after a complete production resource inventory.

## 5. Performance

The measured shared CSS is approximately 39.5 KB and shared JavaScript approximately 6.0 KB. The homepage HTML is approximately 50.3 KB. The hero poster is approximately 323 KB, the logo approximately 23 KB, and the OG image approximately 23 KB. The supplied local hero MP4 is approximately 7.1 MB but is not the active homepage source; the approved remote desktop and mobile URLs returned HTTP 200 with `video/mp4` responses. The remote desktop asset reported approximately 13.0 MB and the mobile asset approximately 67.8 MB during HEAD verification, making the mobile video the primary production bandwidth consideration.

The hero retains autoplay, muted, loop, playsinline, poster, object-fit layering, pointer-event behavior, and both approved responsive sources. `preload="metadata"` was added to avoid requesting the full video as a render-blocking resource. Existing video error and play-rejection fallbacks remain. Remote-video loading can prevent bounded Chromium screenshot completion in the sandbox; this was treated as an environment/performance limitation, not a layout failure.

Images use dimensions where supplied and lazy loading on below-fold imagery. Fonts use preconnect and deferred shared scripts. The site remains buildless and cPanel-compatible. No aggressive image or video replacement was performed because the supplied visual assets are approved.

## 6. Security

The PHP form now has server-side length limits, type checks, required-field validation, email validation, honeypot protection, header injection protection, plain-text body handling, and a checked mail return value. The failed-send path does not expose server paths, PHP warnings, configuration, or internal implementation details.

`.htaccess` prepares `Options -Indexes`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, a restrictive `Permissions-Policy` for camera/microphone/geolocation, and `X-Frame-Options: SAMEORIGIN`. The file is a hosting-level configuration and its effect was not testable in the static sandbox. HSTS is intentionally commented until HTTPS is confirmed for every production hostname and subdomain. Deployment should verify the response headers with `curl -I` after Apache activation.

No restrictive CSP was added blindly. The production host should consider a CSP after enumerating all inline and external dependencies, especially Google Fonts, remote MP4 sources, Google review links, and any analytics or form resources added later.

## 7. Regression

All 11 production HTML pages were parsed successfully and served over local HTTP. The audited page families are homepage, Manage, Connect, Secure, Grow, Team, thank-you, PAIA, Whistleblower, Terms & Conditions, and contact-error. Shared CSS and JavaScript paths resolve, local references resolve apart from the intentionally absent approved Team photographs, and JavaScript syntax validation passes.

Mobile screenshots were generated at 375×812 for Team, all four service pages, thank-you, contact-error, and all three legal pages. The header, mobile menu, hero/notice content, CTAs, typography, spacing, cards, and footer remained contained without observed horizontal scrolling or overlap. The homepage endpoint continues to serve its approved hero markup, desktop and mobile video sources, poster, CTA structure, Insights section, FAQ, and footer. The approved service and Team layouts were not redesigned. Existing JSON-LD remained valid after parsing.

The homepage remote video can exceed the bounded automated screenshot window in this sandbox. The video URLs themselves returned HTTP 200 with the expected `video/mp4` content type, and the poster/fallback/reduced-motion paths were statically verified.

## 8. Outstanding client requirements

The following genuinely require Open V or hosting-owner input: official PAIA Manual content or URL; official Whistleblower Policy content or URL; official Terms & Conditions content or URL; confirmation whether the Privacy Policy should remain the Cookie Policy destination or a distinct official Cookie Policy should be supplied; approved Insights articles or URLs; the 24 approved Team photographs; confirmation of business proof statistics and review figures; and production mail/SMTP or cPanel mail routing details.

## 9. Production deployment requirements

Deploy only the static website allowlist and the required `contact.php`, not the inherited development scaffold. Confirm the production document root, PHP version, Apache `mod_headers` availability, `.htaccess` activation, HTTPS redirect/certificate, and mail transport configuration. Test the valid, invalid, over-limit, honeypot, and mail-failure form paths on the host. Verify 303 redirects, mail logs, and that transport acceptance is not described as delivery.

After deployment, check response headers for the `.htaccess` rules, run a real crawler/link check against every public route, verify both remote hero-video sources from production, test keyboard and mobile navigation on real browsers, and decide whether HSTS and a CSP are appropriate. Do not publish the three legal pages as indexable substantive policies until official Open V source content is supplied. Do not add placeholder Insights URLs to the sitemap.

No deployment was performed in this task.

**PHASE 6 TECHNICAL HARDENING COMPLETE — READY FOR FINAL PRODUCTION QA AND DEPLOYMENT PREPARATION**
