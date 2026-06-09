import { Home, TrendingUp, Building2, KeyRound, Briefcase } from "lucide-react";

const clients = [
  {
    icon: Home,
    label: "Homeowners",
    tag: "Upgrading & Modernising",
    desc: "Helping families transform outdated spaces into homes they're proud of — on time and on budget.",
  },
  {
    icon: TrendingUp,
    label: "Property Investors",
    tag: "Improving Rental Value",
    desc: "Smart upgrades that maximise returns and keep investment properties competitive in the market.",
  },
  {
    icon: Building2,
    label: "Developers",
    tag: "Subdivisions & New Builds",
    desc: "End-to-end delivery for developers completing subdivisions, townhouses, and new build projects.",
  },
  {
    icon: KeyRound,
    label: "Real Estate Clients",
    tag: "Preparing for Sale",
    desc: "Pre-sale renovations and presentation upgrades that add real value before listing day.",
  },
  {
    icon: Briefcase,
    label: "Commercial Clients",
    tag: "Maintenance & Upgrades",
    desc: "Reliable maintenance and fit-out upgrades for commercial spaces that need minimal disruption.",
  },
];

export default function WorkedWith() {
  return (
    <section id="worked-with" style={{ background: "#0d0d0d", padding: "96px 0", position: "relative", overflow: "hidden" }}>

      {/* Section separator top */}
      <div className="section-sep" />

      {/* Subtle background accent */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 700, height: 700,
        background: "radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", position: "relative" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-chip-2">
            <Briefcase size={13} /> Who We Work With
          </div>
          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "#fff",
            marginBottom: 16,
          }}>
            Built for <span className="gold-text">Every Client</span>
          </h2>
          <div style={{ width: 60, height: 3, background: "linear-gradient(90deg,#D4AF37,#FFD700)", borderRadius: 2, margin: "0 auto 20px" }} />
          <p style={{ color: "#9ca3af", fontSize: "1.05rem", maxWidth: 560, margin: "0 auto" }}>
            From first homes to full developments — we bring the same standard of care to every client and every project.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 20,
          marginBottom: 56,
        }}>
          {clients.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.label} className="why-card" style={{ flexDirection: "column", gap: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div className="why-icon">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem" }}>{c.label}</div>
                    <div style={{
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      letterSpacing: "0.07em",
                      textTransform: "uppercase",
                      color: "#D4AF37",
                      marginTop: 2,
                    }}>{c.tag}</div>
                  </div>
                </div>
                <p style={{ fontSize: "0.85rem", color: "#9ca3af", lineHeight: 1.65 }}>{c.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div style={{
          textAlign: "center",
          padding: "32px 24px",
          borderRadius: 16,
          background: "rgba(212,175,55,0.05)",
          border: "1px solid rgba(212,175,55,0.18)",
          maxWidth: 760,
          margin: "0 auto",
        }}>
          <div style={{ width: 36, height: 3, background: "linear-gradient(90deg,#D4AF37,#FFD700)", borderRadius: 2, margin: "0 auto 20px" }} />
          <p style={{
            color: "#e5e7eb",
            fontSize: "1.05rem",
            lineHeight: 1.75,
            fontStyle: "italic",
          }}>
            "Every project — big or small — receives the same level of care, planning, and attention to detail."
          </p>
          <div style={{ marginTop: 16, color: "#D4AF37", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            — S-Con Limited, Auckland
          </div>
        </div>

      </div>
    </section>
  );
}
