"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Server, FileDigit, CloudLightning, ActivitySquare } from "lucide-react";
import Image from "next/image";

export default function SecuritySection() {
  const securityFeatures = [
    { title: "HIPAA Compliant", desc: "Strict adherence to health data privacy for clinical environments.", icon: <FileDigit size={32} /> },
    { title: "End-to-End Encryption", desc: "Military-grade AES-256 encryption for data at rest and in transit.", icon: <Lock size={32} /> },
    { title: "99.99% Guaranteed Uptime", desc: "Redundant cloud architecture ensures you never go offline.", icon: <CloudLightning size={32} /> },
    { title: "SOC 2 Type II Certified", desc: "Audited operational security for enterprise peace of mind.", icon: <ShieldCheck size={32} /> },
    { title: "Automated Backups", desc: "Geographically distributed daily backups prevent data loss.", icon: <Server size={32} /> },
    { title: "Real-time Threat Monitoring", desc: "AI-driven anomaly detection stops breaches before they happen.", icon: <ActivitySquare size={32} /> },
  ];

  return (
    <section id="security" className="security-section">
      <div className="container">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="section-header-top"
        >
          <div className="badge">Enterprise Security</div>
          <h2 style={{ fontSize: "3rem", fontWeight: 700, marginBottom: "1rem" }}>
            Your data is our <span className="text-gradient">Fort Knox.</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto 2rem auto", lineHeight: "1.6" }}>
            Whether you are managing sensitive patient records, student financial data, or high-volume hotel transactions, Oryol ERP provides uncompromising, world-class security infrastructure out of the box.
          </p>
        </motion.div>

        <div className="layout-grid">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="image-column"
          >
            <div style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid var(--glass-border)", boxShadow: "var(--neon-glow)", maxWidth: "400px", margin: "0 auto" }}>
              <Image 
                src="/images/neon_security.png" 
                alt="Neon Cyber Security Shield" 
                width={500} 
                height={500} 
                style={{ width: "100%", height: "auto", display: "block" }} 
              />
            </div>
          </motion.div>

          <div className="features-grid">
            {securityFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="sec-feature"
              >
                <div className="sec-icon">{feature.icon}</div>
                <div>
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .security-section {
          padding: 4rem 2rem;
          background: transparent;
          border-top: 1px solid var(--glass-border);
          border-bottom: 1px solid var(--glass-border);
        }

        .section-header-top {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 5rem;
        }

        .layout-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .badge {
          display: inline-block;
          background: rgba(0, 240, 255, 0.1);
          color: var(--primary);
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(0, 240, 255, 0.2);
        }

        .text-gradient {
          background: linear-gradient(135deg, var(--primary), var(--accent-1));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .sec-feature {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .sec-icon {
          color: var(--primary);
          background: rgba(0, 240, 255, 0.1);
          padding: 1rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sec-feature h4 {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-color);
          margin-bottom: 0.5rem;
        }

        .sec-feature p {
          font-size: 0.9rem;
          color: #94a3b8;
          line-height: 1.5;
        }

        .primary-btn {
          background: var(--primary);
          color: #000000;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          box-shadow: var(--neon-glow);
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
        }

        .primary-btn:hover {
          background: var(--primary-hover);
          transform: translateY(-2px);
          box-shadow: var(--neon-glow-hover);
        }

        @media (max-width: 1024px) {
          .layout-grid {
            grid-template-columns: 1fr;
          }
          .text-content {
            text-align: center;
          }
        }
        
        @media (max-width: 640px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
