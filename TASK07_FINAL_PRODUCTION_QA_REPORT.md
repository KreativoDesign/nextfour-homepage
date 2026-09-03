# Open V Business Solutions — Task 07 Final Production QA Report

**Date:** 3 September 2026  
**Scope:** Final independent production QA and deployment preparation  
**Decision:** **GO FOR DEPLOYMENT**, subject to the explicitly listed cPanel, HTTPS, mail-transport, and client-content requirements below. No deployment was performed.

## 1. Overall status

The approved Vanilla HTML/CSS/JavaScript website is technically ready for deployment preparation. The final QA found no accidental broken internal production links, no remaining published Insights scaffold links, no invalid indexable legal placeholders, no broken retained JSON-LD, and no new visual defect caused by the hardening work. The remaining requirements are host-side verification and client-supplied content, not a known implementation blocker.

The inherited NextFour application scaffold remains in the repository for development/history, but it must not be copied into the cPanel public document root. The exact deployment package is defined in [DEPLOYMENT_ALLOWLIST.md](DEPLOYMENT_ALLOWLIST.md).

## 2. Production file allowlist

Upload the following root files: `.htaccess`, `index.html`, `team.html`, `thank-you.html`, `contact-error.html`, `paia-manual.html`, `whistleblower-policy.html`, `terms-conditions.html`, `contact.php`, `robots.txt`, and `sitemap.xml`.

Upload `services/manage.html`, `services/connect.html`, `services/secure.html`, and `services/grow.html`.

Upload `assets/css/styles.css`, `assets/js/main.js`, the referenced local logo, poster, OG image, and the 18 referenced partner PNGs listed in the allowlist. The Team JPG directory currently has no approved photos; the initials fallback is the intended state. Do not upload the inherited `client/`, `server/`, `shared/`, `drizzle/`, Node project files, build tooling, task reports, development notes, scripts, screenshots, repository metadata, credentials, or unused `logo-white.png` and local hero MP4.

The correct cPanel document root is the domain’s configured public root, normally `public_html/` for the primary domain or the configured addon/subdomain document root. Confirm this with the hosting owner before upload.

## 3. Technical validation

All 11 production HTML pages parse successfully: homepage, Team, thank-you, contact-error, PAIA, Whistleblower, Terms & Conditions, and four services. Shared CSS and JavaScript references resolve. JavaScript passed `node --check`. All retained JSON-LD blocks parse as JSON and retain the required schema types.

The local asset audit confirms the active logo, poster, OG image, partner PNGs, CSS, and JavaScript. The supplied local hero MP4 remains retained outside the production allowlist because the approved homepage uses the verified remote desktop and mobile sources. The 24 missing Team photographs remain an intentional initials-fallback state; no replacement photographs were created.

The local HTTP server successfully served every audited route and all referenced static files during the QA sweep. The cPanel `.htaccess` rules cannot be activated or tested by the sandbox’s Python server and require post-deployment Apache verification.

## 4. URL audit

The following required routes returned successfully from the local static server. Relative-path checks were also performed from the service-page directory.

| URL | Source/destination | HTTP result | Status | Notes |
|---|---|---:|---|---|
| `/` | Homepage | 200 | Valid internal | Approved hero, CTAs, Insights, FAQ, and footer retained |
| `/team.html` | Leadership | 200 | Valid internal | 24 members, five groups, initials fallback |
| `/services/manage.html` | Manage | 200 | Valid internal | Shared navigation and Service schema |
| `/services/connect.html` | Connect | 200 | Valid internal | Shared navigation and Service schema |
| `/services/secure.html` | Secure | 200 | Valid internal | Shared navigation and Service schema |
| `/services/grow.html` | Grow | 200 | Valid internal | Shared navigation and Service schema |
| `/thank-you.html` | Successful form destination | 200 | Valid internal | Transactional `noindex, nofollow`; excluded from sitemap |
| `/contact-error.html` | Failed form destination | 200 | Valid internal | Transactional `noindex, nofollow`; no server details exposed |
| `/paia-manual.html` | Footer legal destination | 200 | Valid internal | `noindex, follow`; official source required |
| `/whistleblower-policy.html` | Footer legal destination | 200 | Valid internal | `noindex, follow`; official source required |
| `/terms-conditions.html` | Footer legal destination | 200 | Valid internal | `noindex, follow`; official source required |
| `contact.php` | Form POST handler | Not runtime-testable locally | Host verification required | GET behavior and source checks reviewed; PHP CLI unavailable |
| `https://www.openv.co.za/privacy-policy/` | Privacy and current Cookie destination | 200 externally | Valid external | Verified official OpenV privacy destination |
| Google review search URL | Homepage review CTA | 200 externally | Valid external | External search destination; not treated as a fabricated review claim |

All primary navigation, Services dropdown, mobile Services submenu, Leadership, Clients, FAQ, assessment CTAs, service-page CTAs, legal footer links, privacy destination, and homepage anchors were checked for valid destinations. No production CTA leads to `#`, localhost, a development URL, or an unresolved local page.

## 5. Anchor and navigation QA

Homepage anchors `#why`, `#services`, `#trust`, `#team`, `#cases`, `#portfolio`, `#faq`, `#insights`, and `#contact` exist in the intended page structure. Existing section spacing and Team intro header-clearance correction remain intact. The service pages correctly use `../index.html#...` paths and sibling service-page paths.

Desktop navigation retains Why Open V, Services, Overview, Manage, Connect, Secure, Grow, Security, Insights, Leadership, Portfolio, and Assessment. Mobile navigation retains the hamburger, Services submenu, Clients, FAQ, Leadership, and Assessment. Existing keyboard handlers retain Tab focus flow, Enter/Space dropdown activation, ArrowUp/ArrowDown movement, and Escape close/focus-return behavior. The browser connector was unavailable for interactive console control in this session, so post-deployment real-browser keyboard confirmation remains part of the required host QA.

## 6. Forms

`contact.php` is POST-only and retains the honeypot. It applies server-side type and length limits, required name and email validation, email-format validation, header newline protection, plain-text body construction, safe redirects, and a checked `mail()` return value. Successful redirect occurs only after the configured mail transport accepts the message. The code does not claim final delivery.

Validation failures and false `mail()` return values route to `contact-error.html`; the honeypot sends no message. No PHP errors, server paths, mail configuration, or internal details are shown to visitors.

PHP CLI is unavailable in the sandbox. On cPanel, run `php -l contact.php` if shell access exists, then perform the following tests: a valid enquiry must return HTTP 303 to `thank-you.html` only when `mail()` accepts the message; missing name and invalid email must return `contact-error.html` with no email; over-limit fields must be rejected; a populated honeypot must send no message and must not produce successful submission; and a simulated mail-transport failure must return `contact-error.html`. Verify mailbox receipt and mail logs separately because transport acceptance is not proof of delivery.

## 7. SEO and structured data

Every production HTML page has a title, description, canonical, English-ZA language declaration, and shared styles/scripts. Transactional pages are noindex. Legal structural pages remain `noindex, follow` and contain no fabricated legal wording.

The sitemap is valid XML and contains only these six intended indexable URLs: homepage, Team, Manage, Connect, Secure, and Grow. It excludes thank-you, contact-error, legal placeholders, and planned Insights URLs. `robots.txt` allows normal crawling and references the correct sitemap without blocking CSS, JavaScript, or important images.

The homepage retains `ProfessionalService` and `FAQPage`; service pages retain `Service`; Team retains `WebPage` and `Organization`. All JSON-LD blocks parse successfully and no Article schema was added to planned Insights content.

## 8. Accessibility

The existing navigation buttons and dropdowns retain ARIA state, controls, roles, and keyboard behavior. Forms retain visible labels and required Name/Email fields. The contact-error state is readable and actionable. Team initials fallbacks retain accessible image roles and names. FAQ items use native disclosure semantics. Important content and navigation remain available without JavaScript.

Reduced-motion CSS remains active for smooth scrolling, animations, transitions, orbit motion, and decorative effects. JavaScript pauses the hero video and keeps the poster fallback for users requesting reduced motion. The existing palette, borders, typography, and focus treatment were not redesigned.

## 9. Performance

Measured sizes are approximately 39.5 KB CSS, 6.0 KB JavaScript, 50.3 KB homepage HTML, 323 KB hero poster, 23 KB logo, and 23 KB OG image. The approved remote desktop video returned HTTP 200 with `video/mp4` and approximately 13.0 MB content length; the mobile source returned HTTP 200 and approximately 67.8 MB content length. The mobile source is the principal bandwidth risk.

The approved video sources were not replaced. The hero retains poster fallback and now uses `preload="metadata"` to avoid eagerly requesting the complete media as a rendering dependency. Below-fold imagery retains lazy loading and dimensions where supplied. The local automated browser can time out while waiting on the remote video; bounded non-video page screenshots and local route checks passed. A future hosting/asset-optimization review should consider server-side video encoding/CDN strategy without changing the approved visual until approved.

## 10. Security

`.htaccess` prepares directory-index disabling, MIME sniffing protection, strict-origin referrer policy, restrictive camera/microphone/geolocation permissions, and same-origin frame protection. HSTS remains commented until HTTPS is confirmed for every production hostname. A restrictive CSP was intentionally not added because the website depends on Google Fonts, remote video, external privacy/review destinations, and existing inline resources; introduce CSP only after a complete production resource inventory and browser test.

After upload, verify headers with `curl -I https://www.openv.co.za/` and confirm no 500 errors are caused by Apache module availability. Confirm HTTPS redirect and certificate coverage before enabling HSTS.

## 11. Responsive QA

Mobile screenshots were generated at 375×812 for the homepage route where feasible, all four service pages, Team, thank-you, contact-error, and all three legal pages. Service, Team, legal, transactional, header, CTA, card, footer, and mobile-menu layouts remained contained without observed horizontal scrolling or overlap. Desktop Team visual QA at 1440×900 and prior approved desktop/service QA remain valid because the Task 07 changes do not alter those approved layout systems.

The intended responsive breakpoints remain active for 1440, 1280, 1024, 768, 600, 480, 390, 375, and 360-width behavior. Final production QA should repeat a quick real-browser pass at those widths after upload, particularly for the remote video and cPanel headers.

## 12. Outstanding client requirements

Open V must still supply approved PAIA, Whistleblower, and Terms & Conditions documents or authoritative URLs; decide whether a separate Cookie Policy exists; supply approved Insights articles or URLs; supply the 24 approved Team photographs if replacing initials; and confirm business proof statistics and review figures. No such content was fabricated.

## 13. Outstanding hosting requirements

The hosting owner must confirm the cPanel document root, PHP availability/version, Apache `mod_headers`, HTTPS and certificate coverage, mail routing/SMTP or `mail()` configuration, and mailbox/log access. The host must run the PHP syntax/runtime and form tests, verify `.htaccess` headers, verify remote video playback, and perform real-browser keyboard/mobile checks.

## 14. Deployment procedure

First export or snapshot the current live website and retain the rollback copy. Confirm the cPanel domain document root. Upload only the files in [DEPLOYMENT_ALLOWLIST.md](DEPLOYMENT_ALLOWLIST.md), preserving the `services/` and `assets/` paths. Set normal web-readable permissions for HTML, CSS, JavaScript, images, `.htaccess`, `robots.txt`, `sitemap.xml`, and `contact.php`; do not expose repository or environment files.

Enable or confirm HTTPS before enabling HSTS. Confirm PHP execution for `contact.php`, configure the recipient/mail transport, and run the six form tests. Verify `.htaccess` headers with `curl -I`, check the homepage and every route, test desktop and mobile navigation, inspect the browser console, verify hero-video playback/fallback, and submit the sitemap in the appropriate search-console property. Keep the legal placeholders noindex until official content is supplied.

## 15. Rollback procedure

If PHP, video, navigation, `.htaccess`, or hosting configuration fails, disable the new `.htaccess` temporarily if it causes a server error, restore the backed-up document-root files and previous contact handler, and re-test the existing live form before retrying. Preserve the previous sitemap and robots files until the replacement passes validation. Roll back by restoring the dated backup as a complete package rather than deleting individual files, then inspect Apache/PHP/mail logs before another attempt.

**FINAL PRODUCTION QA COMPLETE — GO FOR DEPLOYMENT**
