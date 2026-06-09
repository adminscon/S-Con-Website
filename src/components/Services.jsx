import { HardHat, Wrench, UtensilsCrossed, Fence, Construction, Trees, Ruler, PaintBucket, Plug, Settings2, Leaf, Sparkles, Hammer } from "lucide-react";

import img1 from "../assets/1. New Builds .jpg";
import img2 from "../assets/2. Home renovation.jpg";
import img3 from "../assets/3.kitchen and bathroom Upgrades.png";
import img4 from "../assets/4. Decks, Fences & Outdoor Living.avif";
import img5 from "../assets/5. Driveways, Retaining Walls &  Landscaping.jpeg";
import img6 from "../assets/6. landscaping.jpg";
import img7 from "../assets/7 .Interior Fit‑Outs & Carpentry.avif";
import img8 from "../assets/8. Painting, Plastering & Cladding.png";
import img9 from "../assets/9.Plumbing, Electrical & Insulation.webp";
import img10 from "../assets/10.Property maintenance.jpg";
import img11 from "../assets/11. Garden Maintainance.jpg";
import img12 from "../assets/12.site-clearance.jpg";

const services = [
  {
    icon: HardHat,
    title: "New Builds & Extensions",
    desc: "From the ground up — we manage new home builds and seamless extensions with expert craftsmanship and full project oversight.",
    img: img1,
  },
  {
    icon: Wrench,
    title: "Full Home Renovations",
    desc: "Breathe new life into your home with comprehensive renovations that modernise every room while preserving what matters most.",
    img: img2,
  },
  {
    icon: UtensilsCrossed,
    title: "Kitchen & Bathroom Upgrades",
    desc: "Precision upgrades to kitchens and bathrooms — functional layouts, quality finishes, and lasting results you'll love every day.",
    img: img3,
  },
  {
    icon: Fence,
    title: "Decks, Fences & Outdoor Living",
    desc: "Custom-built decks, fences, and outdoor living spaces designed to extend your home and elevate your lifestyle.",
    img: img4,
  },
  {
    icon: Construction,
    title: "Driveways & Retaining Walls",
    desc: "Durable driveways and engineered retaining walls that combine kerb appeal with structural integrity for any property.",
    img: img5,
  },
  {
    icon: Trees,
    title: "Landscaping",
    desc: "Professional landscaping that transforms outdoor spaces — from planting and grading to irrigation and feature design.",
    img: img6,
  },
  {
    icon: Ruler,
    title: "Interior Fit-Outs & Carpentry",
    desc: "Bespoke interior fit-outs and custom carpentry — wardrobes, cabinetry, shelving, and joinery tailored to your space.",
    img: img7,
  },
  {
    icon: PaintBucket,
    title: "Painting, Plastering & Cladding",
    desc: "Flawless interior and exterior finishes — skilled plastering, quality painting, and modern cladding solutions for every home.",
    img: img8,
  },
  {
    icon: Plug,
    title: "Plumbing, Electrical & Insulation",
    desc: "Certified tradespeople delivering safe, compliant plumbing, electrical wiring, and high-performance insulation installations.",
    img: img9,
  },
  {
    icon: Settings2,
    title: "Property Maintenance",
    desc: "Reliable ongoing property maintenance to keep your home or investment in peak condition throughout the year.",
    img: img10,
  },
  {
    icon: Leaf,
    title: "Garden Maintenance",
    desc: "Regular garden upkeep including mowing, pruning, weeding, and seasonal care to keep your outdoor spaces immaculate.",
    img: img11,
  },
  {
    icon: Sparkles,
    title: "Site Cleaning",
    desc: "Thorough post-construction and pre-handover site cleaning — leaving every project spotless and ready to occupy.",
    img: img12,
  },
];


export default function Services() {
  return (
    <section id="services" style={{ background: "#0a0a0a", padding: "96px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-chip" style={{ margin: "0 auto 20px" }}>
            <Hammer size={13} /> What We Do
          </div>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", marginBottom: 16 }}>
            Our <span className="gold-text">Services</span>
          </h2>
          <div style={{ width: 60, height: 3, background: "linear-gradient(90deg,#D4AF37,#FFD700)", borderRadius: 2, margin: "0 auto 20px" }} />
          <p style={{ color: "#9ca3af", fontSize: "1.05rem", maxWidth: 560, margin: "0 auto" }}>
            From structural foundations to interior finishes — we cover every aspect of construction and renovation.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 24 }}>
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="service-card">
                {/* Service image */}
                <div style={{ overflow: "hidden", position: "relative" }}>
                  <img src={s.img} alt={s.title} loading="lazy" />
                  {/* Gold overlay on image */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.1) 60%)" }} />
                </div>
                {/* Card body */}
                <div className="card-body">
                  <div className="card-icon"><Icon size={20} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: 56 }}>
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); document.querySelector("#contact").scrollIntoView({ behavior: "smooth" }); }}
            className="btn-gold"
          >
            Get A Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
