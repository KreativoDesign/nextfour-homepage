# Open V Business Solutions — cPanel Production Deployment Allowlist

This allowlist is for the static OpenV website and its PHP contact handler. Upload only these items to the cPanel document root after backing up the existing live site.

## Required root files

```text
.htaccess
index.html
team.html
thank-you.html
contact-error.html
paia-manual.html
whistleblower-policy.html
terms-conditions.html
contact.php
robots.txt
sitemap.xml
```

## Required service pages

```text
services/manage.html
services/connect.html
services/secure.html
services/grow.html
```

## Required local assets

```text
assets/css/styles.css
assets/js/main.js
assets/img/logo.png
assets/img/hero-core.png
assets/img/og-image.png
assets/img/partners/acronis.png
assets/img/partners/brother.png
assets/img/partners/cisco.png
assets/img/partners/dahua.png
assets/img/partners/dell.png
assets/img/partners/ecn.png
assets/img/partners/ers.png
assets/img/partners/eset.png
assets/img/partners/fortinet.png
assets/img/partners/hp.png
assets/img/partners/microsoft.png
assets/img/partners/mitel.png
assets/img/partners/mtn.png
assets/img/partners/siemon.png
assets/img/partners/unifi.png
assets/img/partners/vodacom.png
assets/img/partners/vox.png
```

The Team page currently has no approved JPG photographs in `assets/img/team/`; its initials fallback is the approved current state. If approved photographs are later supplied, upload only those original-convention JPGs into that directory.

## Do not upload

Do not upload the inherited NextFour development scaffold or its tooling, including `client/`, `server/`, `shared/`, `drizzle/`, `node_modules/`, `package.json`, `pnpm-lock.yaml`, `vite.config.ts`, `vitest.config.ts`, TypeScript configuration, `.github/`, `.vscode/`, `components.json`, `template.json`, `patches/`, development notes, task reports, or sandbox scripts.

Do not upload the unused `assets/img/logo-white.png` or the unused local `assets/video/openv-hero-supplied.mp4`. The approved homepage uses the two verified remote hero-video URLs and the local poster asset `assets/img/hero-core.png`.

Do not upload test artifacts, `.env` files, credentials, build output, repository metadata, or local QA screenshots.

## Document root

Use the cPanel domain’s actual public document root, normally `public_html/` for the primary domain or the configured addon/subdomain document root. Confirm the existing live site backup and document root with the hosting owner before replacing files.
