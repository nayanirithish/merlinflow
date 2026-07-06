"use client";

import { motion } from "framer-motion";
import { Users, Target, Rocket } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="section-container">
      <div className="container">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="section-header-top"
        >
          <div className="badge">Our Story</div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1rem" }}>
            Democratizing <span className="text-gradient">Enterprise Software.</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
            Oryol Technologies was founded with a single vision: to democratize premium, enterprise-grade software for institutions of all sizes. We believe that whether you run a single school or a global hotel chain, you deserve access to world-class tools.
          </p>
        </motion.div>

        <div className="about-grid-main">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="about-image-wrapper"
          >
            <Image 
              src="/images/1000173938-removebg-preview.png" 
              alt="Oryol Cloud Infrastructure" 
              width={600} 
              height={600} 
              className="about-image"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="image-overlay"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="about-text-content"
          >
            <div className="features-list">
              <div className="feature-item">
                <Target color="var(--primary)" size={24} />
                <div>
                  <h4>Our Mission</h4>
                  <p>Streamline operations and maximize revenue through intelligent design.</p>
                </div>
              </div>
              <div className="feature-item">
                <Rocket color="var(--accent-1)" size={24} />
                <div>
                  <h4>Our Approach</h4>
                  <p>Intuitive, powerful ERP models built from the ground up to reduce friction.</p>
                </div>
              </div>
              <div className="feature-item">
                <Users color="var(--accent-2)" size={24} />
                <div>
                  <h4>The Team</h4>
                  <p>Passionate engineers and industry veterans pushing boundaries.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      <style jsx>{`
        .section-container {
          padding: 4rem 2rem;
          position: relative;
          background: linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.02));
        }

        .about-grid-main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .section-header-top {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 5rem;
        }

        .badge {
          display: inline-block;
          background: rgba(59, 130, 246, 0.1);
          color: var(--primary);
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .about-image-wrapper {
          position: relative;
        }

        .about-image {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s ease;
        }

        .about-image-wrapper:hover .about-image {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top right, var(--bg-alpha-light), transparent);
          pointer-events: none;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .feature-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          padding: 1.5rem;
          background: var(--bg-alpha-light);
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          transition: background 0.3s, transform 0.3s;
        }

        .feature-item:hover {
          background: var(--bg-alpha-hover);
          transform: translateX(10px);
        }

        .feature-item h4 {
          color: var(--text-color);
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .feature-item p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .about-grid-main {
            grid-template-columns: 1fr;
          }
          .about-image-wrapper {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}
