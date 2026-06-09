import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Who We Work With", href: "#worked-with" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(href) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    scrollTo(href);
  };

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        transition: "all 0.35s ease",
        background: scrolled ? "rgba(10,10,10,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(212,175,55,0.12)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.5)" : "none",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 76 }}>

          {/* ── Logo ── */}
          <button onClick={() => handleNav("#home")} style={{ display: "flex", alignItems: "center", gap: 12, background: "none", border: "none", cursor: "pointer" }}>
            <svg width="42" height="42" viewBox="0 0 44 44" fill="none">
              <rect width="44" height="44" rx="8" fill="rgba(212,175,55,0.1)" />
              <g stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round">
                <line x1="8" y1="34" x2="8" y2="20" /><line x1="8" y1="20" x2="14" y2="14" />
                <line x1="14" y1="14" x2="14" y2="34" /><line x1="14" y1="22" x2="20" y2="16" />
                <line x1="20" y1="16" x2="20" y2="34" /><line x1="20" y1="18" x2="27" y2="10" />
                <line x1="27" y1="10" x2="27" y2="34" /><line x1="27" y1="14" x2="34" y2="19" />
                <line x1="34" y1="19" x2="34" y2="34" /><line x1="6" y1="34" x2="38" y2="34" />
              </g>
            </svg>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "#fff", letterSpacing: "0.06em" }}>S-CON LIMITED</div>
              <div style={{ fontSize: "0.65rem", color: "#D4AF37", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" }}>Auckland · NZ</div>
            </div>
          </button>

          {/* ── Desktop Nav ── */}
          <nav className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: 36 }}>
            {navLinks.map(l => (
              <button key={l.label} onClick={() => handleNav(l.href)} className="nav-link">{l.label}</button>
            ))}
          </nav>

          {/* ── Desktop CTA ── */}
          <a href="tel:+64225329942" className="btn-gold hide-mobile pulse-ring" style={{ padding: "10px 22px", fontSize: "0.88rem" }}>
            <Phone size={14} /> +64 22 532 9942
          </a>

          {/* ── Mobile Hamburger ── */}
          <button
            className="hide-desktop"
            onClick={() => setOpen(!open)}
            style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: 6 }}
            aria-label="Toggle menu"
          >
            {open ? <X size={26} color="#D4AF37" /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {navLinks.map(l => (
          <button key={l.label} onClick={() => handleNav(l.href)}>{l.label}</button>
        ))}
        <a href="tel:+64225329942" className="mobile-cta">
          <Phone size={15} /> Call Us: +64 22 532 9942
        </a>
        <div style={{ padding: "8px 28px 0", display: "flex", gap: 10 }}>
          <a href="mailto:Sconltd@outlook.co.nz" style={{ color: "#9ca3af", fontSize: "0.82rem" }}>Sconltd@outlook.co.nz</a>
        </div>
      </div>
    </header>
  );
}
