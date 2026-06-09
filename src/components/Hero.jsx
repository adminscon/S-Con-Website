import { useEffect, useRef, useState } from "react";
import { ChevronRight, Phone, ArrowDown, Building2, HardHat, Star } from "lucide-react";
import img13 from "../assets/Cover Image.jpg";
import img14 from "../assets/Cover Pho.jpg";
import img15 from "../assets/Cover Photo.avif";

function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = end / (duration / 16);
        const t = setInterval(() => {
          start += step;
          if (start >= end) { setCount(end); clearInterval(t); }
          else setCount(Math.floor(start));
        }, 16);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end, duration]);
  return [ref, count];
}

function Stat({ num, suffix, label, icon: Icon }) {
  const [ref, count] = useCountUp(num);
  return (
    <div ref={ref} className="stat-card">
      <Icon size={22} color="#D4AF37" style={{ margin: "0 auto 10px" }} />
      <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 900, fontSize: "2rem", color: "#fff" }}>
        {count}{suffix}
      </div>
      <div style={{ fontSize: "0.8rem", color: "#9ca3af", marginTop: 4, fontWeight: 500 }}>{label}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      {/* Background image */}
      <img
        src={img14}
        alt="Construction site"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
      />
      {/* Dark overlay */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(10,10,10,0.93) 0%, rgba(10,10,10,0.80) 50%, rgba(10,10,10,0.60) 100%)" }} />
      {/* Gold accent line top */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,transparent,#D4AF37 30%,#FFD700 50%,#D4AF37 70%,transparent)" }} />

      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 1280, margin: "0 auto", padding: "120px 24px 80px" }}>
        <div style={{ maxWidth: 720 }}>
          {/* Chip */}
          <div className="section-chip anim-fadeup" style={{ animationDelay: "0.1s" }}>
            <Star size={12} fill="#D4AF37" /> Auckland's Trusted Construction Partner
          </div>

          {/* Headline */}
          <h1
            className="anim-fadeup"
            style={{
              fontFamily: "'Montserrat',sans-serif", fontWeight: 900,
              fontSize: "clamp(2.6rem, 6vw, 4.5rem)", lineHeight: 1.1,
              color: "#fff", marginBottom: 24, animationDelay: "0.2s"
            }}
          >
            Building <span className="shimmer-text">Excellence</span><br />
            From The <span className="gold-text">Ground Up</span>
          </h1>

          {/* Sub */}
          <p className="anim-fadeup" style={{ fontSize: "1.1rem", color: "#d1d5db", lineHeight: 1.75, marginBottom: 40, maxWidth: 540, animationDelay: "0.3s" }}>
            S-Con Limited delivers premium construction, renovation, and design services across Auckland — built on quality, trust, and craftsmanship.
          </p>

          {/* CTAs */}
          <div className="anim-fadeup" style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 64, animationDelay: "0.4s" }}>
            <a href="#contact" onClick={e => { e.preventDefault(); document.querySelector("#contact").scrollIntoView({ behavior: "smooth" }); }} className="btn-gold">
              Get A Free Quote <ChevronRight size={16} />
            </a>
            <a href="#services" onClick={e => { e.preventDefault(); document.querySelector("#services").scrollIntoView({ behavior: "smooth" }); }} className="btn-outline">
              Our Services
            </a>
            <a href="tel:+64225329942" className="btn-outline" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
              <Phone size={15} /> +64 22 532 9942
            </a>
          </div>

          {/* Stats */}
          <div className="anim-fadeup" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, maxWidth: 480, animationDelay: "0.55s" }}>
            {/* <Stat num={200} suffix="+" label="Projects Done" icon={Building2} /> */}
            <Stat num={6} suffix="+" label="Years Experience" icon={HardHat} />
            <Stat num={12} suffix="" label="Services Offered" icon={Star} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-bounce" style={{ position: "absolute", bottom: 30, left: "50%", transform: "translateX(-50%)", color: "#D4AF37" }}>
        <ArrowDown size={24} />
      </div>
    </section>
  );
}
