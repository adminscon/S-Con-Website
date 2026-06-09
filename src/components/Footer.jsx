import { Phone, Mail, MapPin } from "lucide-react";

// const FacebookSVG = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
//     <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//   </svg>
// );
const InstagramSVG = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
// const LinkedinSVG = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
//     <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//     <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
//   </svg>
// );

const footerLinks = [
  { heading: "Quick Links", items: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Our Services", href: "#services" },
    { label: "Who We Work With", href: "#worked-with" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ]},
  { heading: "Services", items: [
    { label: "New Builds & Extensions", href: "#services" },
    { label: "Full Home Renovations", href: "#services" },
    { label: "Kitchen & Bathroom Upgrades", href: "#services" },
    { label: "Decks, Fences & Outdoor Living", href: "#services" },
    { label: "Driveways & Retaining Walls", href: "#services" },
    { label: "Landscaping", href: "#services" },
    { label: "Interior Fit-Outs & Carpentry", href: "#services" },
    { label: "Painting, Plastering & Cladding", href: "#services" },
    { label: "Plumbing, Electrical & Insulation", href: "#services" },
    { label: "Property Maintenance", href: "#services" },
    { label: "Garden Maintenance", href: "#services" },
    { label: "Site Cleaning", href: "#services" },
  ]},
];

function scrollTo(href) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer style={{ background: "#060606", borderTop: "1px solid rgba(255,255,255,0.06)", position: "relative" }}>
      {/* Gold accent top */}
      <div style={{ height: 2, background: "linear-gradient(90deg,transparent,#D4AF37 30%,#FFD700 50%,#D4AF37 70%,transparent)" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        {/* Main grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 48, padding: "64px 0 48px" }}>

          {/* Brand column */}
          <div style={{ gridColumn: "span 1" }}>
            <button onClick={() => scrollTo("#home")} style={{ display: "flex", alignItems: "center", gap: 12, background: "none", border: "none", cursor: "pointer", marginBottom: 20 }}>
              <svg width="38" height="38" viewBox="0 0 44 44" fill="none">
                <rect width="44" height="44" rx="8" fill="rgba(212,175,55,0.1)" />
                <g stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round">
                  <line x1="8" y1="34" x2="8" y2="20" /><line x1="8" y1="20" x2="14" y2="14" />
                  <line x1="14" y1="14" x2="14" y2="34" /><line x1="14" y1="22" x2="20" y2="16" />
                  <line x1="20" y1="16" x2="20" y2="34" /><line x1="20" y1="18" x2="27" y2="10" />
                  <line x1="27" y1="10" x2="27" y2="34" /><line x1="27" y1="14" x2="34" y2="19" />
                  <line x1="34" y1="19" x2="34" y2="34" /><line x1="6" y1="34" x2="38" y2="34" />
                </g>
              </svg>
              <div>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: "1.05rem", color: "#fff" }}>S-CON LIMITED</div>
                <div style={{ fontSize: "0.62rem", color: "#D4AF37", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" }}>Auckland · NZ</div>
              </div>
            </button>
            <p style={{ color: "#6b7280", fontSize: "0.875rem", lineHeight: 1.75, maxWidth: 260, marginBottom: 24 }}>
              Auckland's trusted construction partner. Quality craftsmanship and reliable service on every project.
            </p>
            {/* Contact mini */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { icon: Phone, label: "+64 22 532 9942", href: "tel:+64225329942" },
                { icon: Mail, label: "Sconltd@outlook.co.nz", href: "mailto:Sconltd@outlook.co.nz" },
                { icon: MapPin, label: "Auckland, New Zealand", href: null },
              ].map(({ icon: Icon, label, href }) =>
                href ? (
                  <a key={label} href={href} style={{ display: "flex", alignItems: "center", gap: 10, color: "#6b7280", fontSize: "0.82rem", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.color="#D4AF37"}
                    onMouseLeave={e => e.currentTarget.style.color="#6b7280"}>
                    <Icon size={13} color="#D4AF37" /> {label}
                  </a>
                ) : (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, color: "#6b7280", fontSize: "0.82rem" }}>
                    <Icon size={13} color="#D4AF37" /> {label}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map(col => (
            <div key={col.heading}>
              <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 20, height: 2, background: "#D4AF37", borderRadius: 1, display: "inline-block" }} />
                {col.heading}
              </h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {col.items.map(item => (
                  <li key={item.label}>
                    <button
                      onClick={() => scrollTo(item.href)}
                      style={{ background: "none", border: "none", color: "#6b7280", fontSize: "0.875rem", cursor: "pointer", display: "flex", alignItems: "center", gap: 7, transition: "color 0.2s" }}
                      onMouseEnter={e => e.currentTarget.style.color="#D4AF37"}
                      onMouseLeave={e => e.currentTarget.style.color="#6b7280"}
                    >
                      <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(212,175,55,0.5)", display: "inline-block" }} />
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "24px 0", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <p style={{ color: "#4b5563", fontSize: "0.82rem" }}>
            © {new Date().getFullYear()} S-Con Limited. All rights reserved. Auckland, New Zealand.
          </p>
          {/* Social icons */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#4b5563", letterSpacing: "0.06em", textTransform: "uppercase" }}>Follow Us</span>
            <span style={{ width: 20, height: 1, background: "rgba(212,175,55,0.3)", display: "inline-block" }} />
            {[
              // { icon: FacebookSVG, href: "#", label: "Facebook" },
              { icon: InstagramSVG, href: "https://www.instagram.com/scon_limited/", label: "Instagram" },
              // { icon: LinkedinSVG, href: "#", label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href !== "#" ? "_blank" : undefined}
                rel={href !== "#" ? "noopener noreferrer" : undefined}
                style={{ width: 34, height: 34, borderRadius: 8, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#6b7280", textDecoration: "none", transition: "color 0.2s, border-color 0.2s, background 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.color="#D4AF37"; e.currentTarget.style.borderColor="rgba(212,175,55,0.4)"; e.currentTarget.style.background="rgba(212,175,55,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.color="#6b7280"; e.currentTarget.style.borderColor="rgba(255,255,255,0.08)"; e.currentTarget.style.background="rgba(255,255,255,0.04)"; }}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
