/**
 * NextFour design reminder: Preserve the reference's restrained floating header;
 * use Signal Green only for purposeful states and add glass density only on scroll.
 */
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { navItems } from "@/lib/nextfour-data";

const markUrl = "/manus-storage/nextfour-logo_e4958a45.png";

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 16);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  const handleNav = (item: string) => {
    setMobileOpen(false);
    if (item === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (item === "Services") {
      document.querySelector("#services")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    toast("This destination is being connected to the wider NextFour site.");
  };

  const showContactMessage = () => {
    setMobileOpen(false);
    toast("The NextFour contact journey is ready to connect to your preferred enquiry channel.");
  };

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="nf-container site-header__inner">
        <a className="brand-lockup" href="#home" aria-label="NextFour home" onClick={() => handleNav("Home")}>
          <img className="brand-lockup__mark" src={markUrl} alt="NextFour" />
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map((item) => {
            const isHidden = item === "About Us" || item === "Blog";
            return (
              <button
                className={`site-nav__link ${item === "Home" ? "is-active" : ""}`}
                key={item}
                type="button"
                onClick={() => handleNav(item)}
                style={{ display: isHidden ? 'none' : 'block' }}
              >
                {item}
              </button>
            );
          })}
        </nav>

        <div className="site-header__actions">
          <button className="header-cta" type="button" onClick={showContactMessage}>
            <span>Get in touch</span>
            <ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.7} />
          </button>
          <button
            className="menu-trigger"
            type="button"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="nextfour-mobile-menu"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X aria-hidden="true" size={25} /> : <Menu aria-hidden="true" size={27} />}
          </button>
        </div>
      </div>

      <div id="nextfour-mobile-menu" className={`mobile-menu ${mobileOpen ? "is-open" : ""}`} aria-hidden={!mobileOpen}>
        <div className="mobile-menu__surface">
          <span className="mobile-menu__eyebrow">Navigate NextFour</span>
          <nav aria-label="Mobile navigation">
            {navItems.map((item, index) => (
              <button
                key={item}
                type="button"
                className="mobile-menu__link"
                tabIndex={mobileOpen ? 0 : -1}
                onClick={() => handleNav(item)}
                style={{ transitionDelay: mobileOpen ? `${70 + index * 45}ms` : "0ms" }}
              >
                <span>{item}</span>
                <ArrowUpRight aria-hidden="true" size={20} />
              </button>
            ))}
          </nav>
          <button className="mobile-menu__contact" type="button" tabIndex={mobileOpen ? 0 : -1} onClick={showContactMessage}>
            Start a conversation <ArrowUpRight aria-hidden="true" size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
