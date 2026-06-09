import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

const contacts = [
  { icon: Phone, label: "Phone", value: "+64 22 532 9942", sub: "Call us for a free quote", href: "tel:+64225329942" },
  { icon: Mail, label: "Email", value: "Sconltd@outlook.co.nz", sub: "We respond within 24 hours", href: "mailto:Sconltd@outlook.co.nz" },
  { icon: MapPin, label: "Location", value: "Auckland, New Zealand", sub: "Serving all Auckland regions", href: "https://maps.google.com/?q=Auckland,New+Zealand" },
  { icon: Clock, label: "Working Hours", value: "Mon – Fri: 8am – 5pm", sub: "Sunday by appointment", href: null },
];

export default function Contact() {
  return (
    <section id="contact" style={{ background: "#0f0f0f", padding: "96px 0" }}>
      <div className="section-sep" />
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 24px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 64, alignItems: "start" }}>

          {/* Left: Info */}
          <div>
            <div className="section-chip">
              <MessageSquare size={13} /> Get In Touch
            </div>
            <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", lineHeight: 1.15, marginBottom: 16 }}>
              Let's Build<br /><span className="gold-text">Something Great</span>
            </h2>
            <div className="gold-bar" style={{ marginBottom: 28 }} />
            <p style={{ color: "#9ca3af", fontSize: "1rem", lineHeight: 1.8, marginBottom: 40 }}>
              Ready to start your next construction or renovation project? Contact us today for a free, no-obligation quote. We'd love to hear about your vision.
            </p>

            {/* Contact cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 14, marginBottom: 36 }}>
              {contacts.map(c => {
                const Icon = c.icon;
                const inner = (
                  <>
                    <div className="contact-icon"><Icon size={19} /></div>
                    <div>
                      <div style={{ fontSize: "0.72rem", color: "#6b7280", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>{c.label}</div>
                      <div style={{ color: "#fff", fontWeight: 600, fontSize: "0.95rem" }}>{c.value}</div>
                      <div style={{ color: "#6b7280", fontSize: "0.78rem", marginTop: 2 }}>{c.sub}</div>
                    </div>
                  </>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} className="contact-card" target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                    {inner}
                  </a>
                ) : (
                  <div key={c.label} className="contact-card">{inner}</div>
                );
              })}
            </div>

            {/* CTA buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <a href="tel:+64225329942" className="btn-gold"><Phone size={16} /> Call Now</a>
              <a href="mailto:Sconltd@outlook.co.nz" className="btn-outline"><Mail size={16} /> Send Email</a>
            </div>
          </div>

          {/* Right: Map */}
          <div>
            <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid rgba(212,175,55,0.2)", boxShadow: "0 8px 40px rgba(0,0,0,0.4)" }}>
              <iframe
                title="S-Con Limited Auckland"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d409765.4!2d174.4956753!3d-36.8484597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47fb5a9ce6fb%3A0x500ef6143a29917!2sAuckland%2C%20New%20Zealand!5e0!3m2!1sen!2s!4v1700000000000"
                width="100%"
                height="420"
                style={{ border: 0, display: "block", filter: "invert(90%) hue-rotate(190deg) saturate(0.5) brightness(0.9)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            {/* Map label */}
            <div style={{
              marginTop: 16, display: "flex", alignItems: "center", gap: 12,
              padding: "16px 20px", background: "rgba(212,175,55,0.06)",
              border: "1px solid rgba(212,175,55,0.2)", borderRadius: 12,
            }}>
              <div style={{ width: 38, height: 38, borderRadius: 9, background: "rgba(212,175,55,0.12)", border: "1px solid rgba(212,175,55,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <MapPin size={17} color="#D4AF37" />
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#fff" }}>S-Con Limited</div>
                <div style={{ fontSize: "0.78rem", color: "#9ca3af" }}>Auckland, New Zealand · Serving all regions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
