import { ShieldCheck, Clock, DollarSign, Users, Award, Handshake } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Reliable & Professional", desc: "We show up, follow through, and make every interaction easy — from first call to final handover." },
  { icon: DollarSign, title: "Clear Pricing, No Surprises", desc: "Honest, itemised quotes with no hidden costs. What we quote is what you pay." },
  { icon: Award, title: "Quality Workmanship", desc: "Years of hands-on experience behind every job — high standards on every project, no exceptions." },
  { icon: Clock, title: "Fast Response & Flexible Scheduling", desc: "Quick turnaround on enquiries and scheduling that works around you, not the other way around." },
  { icon: Handshake, title: "Free, No-Obligation Quotes", desc: "Get a full project quote at no cost. No pressure, no commitment — just straight answers." },
  { icon: Users, title: "We Care About Your Project", desc: "This isn't just a job to us. We treat every project like it's our own and every client like a long-term partner." },
];

export default function WhyUs() {
  return (
    <section id="why-us" style={{ padding: "96px 0", position: "relative", overflow: "hidden" }}>
      {/* Background */}
      <div style={{ position: "absolute", inset: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1590725140246-20acddc1ec6d?w=1920&q=70&auto=format&fit=crop"
          alt="Construction team"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(13,27,53,0.97) 0%, rgba(10,10,10,0.93) 100%)" }} />
      </div>

      <div className="section-sep" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />
      <div className="section-sep" style={{ position: "absolute", bottom: 0, left: 0, right: 0 }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-chip" style={{ margin: "0 auto 20px" }}>
            <Award size={13} /> Why Choose Us
          </div>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", marginBottom: 16 }}>
            The <span className="gold-text">S-Con</span> Difference
          </h2>
          <div style={{ width: 60, height: 3, background: "linear-gradient(90deg,#D4AF37,#FFD700)", borderRadius: 2, margin: "0 auto 20px" }} />
          <p style={{ color: "#9ca3af", fontSize: "1.05rem", maxWidth: 500, margin: "0 auto" }}>
            Professionalism, craftsmanship, and genuine care on every project we take on.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 20 }}>
          {reasons.map(r => {
            const Icon = r.icon;
            return (
              <div key={r.title} className="why-card">
                <div className="why-icon"><Icon size={22} /></div>
                <div>
                  <h3 style={{ fontWeight: 600, fontSize: "1rem", color: "#fff", marginBottom: 8 }}>{r.title}</h3>
                  <p style={{ fontSize: "0.875rem", color: "#9ca3af", lineHeight: 1.65 }}>{r.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust bar */}
        <div style={{
          marginTop: 56, padding: "28px 36px",
          background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.2)",
          borderRadius: 16, display: "flex", flexWrap: "wrap", alignItems: "center",
          justifyContent: "space-between", gap: 20,
        }}>
          <div>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: "1.2rem", color: "#fff" }}>
              Ready to start your project?
            </div>
            <div style={{ color: "#9ca3af", fontSize: "0.9rem", marginTop: 4 }}>
              Get a free, no-obligation quote from our team today.
            </div>
          </div>
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); document.querySelector("#contact").scrollIntoView({ behavior: "smooth" }); }}
            className="btn-gold"
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
