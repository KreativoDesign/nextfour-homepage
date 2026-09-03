from pathlib import Path

root = Path(__file__).resolve().parents[1]
index = root / 'index.html'
css = root / 'assets/css/styles.css'
js = root / 'assets/js/main.js'

html = index.read_text()
needle = '''    <section class="hero">\n      <div class="wrap hero-grid">'''
replacement = '''    <section class="hero">\n      <video class="hero-video" autoplay muted loop playsinline poster="assets/img/hero-core.png" aria-hidden="true">\n        <source src="https://www.openv.co.za/wp-content/uploads/2025/06/Webvid.mp4" type="video/mp4" media="(min-width: 881px)">\n        <source src="https://www.openv.co.za/wp-content/uploads/2025/07/web-mobile-opv-vid.mp4" type="video/mp4" media="(max-width: 880px)">\n      </video>\n      <div class="hero-video-overlay" aria-hidden="true"></div>\n      <div class="wrap hero-grid">'''
if needle not in html:
    raise SystemExit('hero insertion point not found')
html = html.replace(needle, replacement, 1)
index.write_text(html)

styles = css.read_text()
needle = '''  .hero{\n    padding:156px 0 100px;\n    position:relative;\n    border-bottom:1px solid var(--border-soft);\n    overflow:hidden;\n  }'''
replacement = '''  .hero{\n    padding:156px 0 100px;\n    position:relative;\n    border-bottom:1px solid var(--border-soft);\n    overflow:hidden;\n    isolation:isolate;\n    background:var(--bg);\n  }\n  .hero-video{\n    position:absolute; inset:0; z-index:-2; width:100%; height:100%;\n    object-fit:cover; object-position:center; pointer-events:none;\n    background:var(--bg) url('../img/hero-core.png') center / min(42vw,520px) no-repeat;\n  }\n  .hero-video-overlay{\n    position:absolute; inset:0; z-index:-1; pointer-events:none;\n    background:linear-gradient(90deg, rgba(255,255,255,.96) 0%, rgba(255,255,255,.86) 42%, rgba(255,255,255,.52) 100%),\n      linear-gradient(180deg, rgba(255,255,255,.18), rgba(255,255,255,.78));\n  }'''
if needle not in styles:
    raise SystemExit('hero css insertion point not found')
styles = styles.replace(needle, replacement, 1)
styles = styles.replace('''  .hud-wrap{position:relative; aspect-ratio:1/1; max-width:440px; margin:0 auto;}''', '''  .hud-wrap{position:relative; aspect-ratio:1/1; max-width:440px; margin:0 auto;}\n  .hud-wrap::before{content:""; position:absolute; inset:8%; border:1px solid rgba(255,255,255,.72); border-radius:50%; background:rgba(255,255,255,.18); backdrop-filter:blur(2px); z-index:1; pointer-events:none;}''', 1)
styles = styles.replace('''  .hud-wrap svg{width:100%; height:100%; position:relative; z-index:2; overflow:visible;}''', '''  .hud-wrap svg{width:100%; height:100%; position:relative; z-index:2; overflow:visible;}''', 1)
styles = styles.replace('''  @media (max-width:880px){\n    .hero-grid{grid-template-columns:1fr;}''', '''  @media (max-width:880px){\n    .hero-video-overlay{background:linear-gradient(180deg, rgba(255,255,255,.94) 0%, rgba(255,255,255,.70) 56%, rgba(255,255,255,.90) 100%);}\n    .hero-video{object-position:center; background-size:min(80vw,420px);}\n    .hero-grid{grid-template-columns:1fr;}''', 1)
css.write_text(styles)

scripts = js.read_text()
needle = '''  // Reveal-on-scroll\n  const revealObserver = new IntersectionObserver((entries) => {\n    entries.forEach(entry => {\n      if (entry.isIntersecting) {\n        entry.target.classList.add('in');\n        revealObserver.unobserve(entry.target);\n      }\n    });\n  }, { threshold: 0.15 });\n  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));'''
replacement = '''  // Hero video fallback\n  document.querySelectorAll('.hero-video').forEach((video) => {\n    video.addEventListener('error', () => video.classList.add('video-fallback'), { once: true });\n    const playAttempt = video.play();\n    if (playAttempt && typeof playAttempt.catch === 'function') {\n      playAttempt.catch(() => video.classList.add('video-fallback'));\n    }\n  });\n\n  // Reveal-on-scroll, with a visible-content fallback for older browsers.\n  const revealElements = Array.from(document.querySelectorAll('.reveal'));\n  if ('IntersectionObserver' in window) {\n    const revealObserver = new IntersectionObserver((entries) => {\n      entries.forEach(entry => {\n        if (entry.isIntersecting) {\n          entry.target.classList.add('in');\n          revealObserver.unobserve(entry.target);\n        }\n      });\n    }, { threshold: 0.15 });\n    revealElements.forEach(el => revealObserver.observe(el));\n  } else {\n    revealElements.forEach(el => el.classList.add('in'));\n  }'''
if needle not in scripts:
    raise SystemExit('reveal block not found')
scripts = scripts.replace(needle, replacement, 1)
js.write_text(scripts)

print('Task 02 homepage changes applied.')
print('Modified:', index.relative_to(root), css.relative_to(root), js.relative_to(root))
print('Added: approved desktop/mobile hero video sources, visual overlay, poster fallback, autoplay error fallback, IntersectionObserver fallback.')
