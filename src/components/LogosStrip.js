"use client";

import { motion } from "framer-motion";
import { Building2, Landmark, GraduationCap, Hospital, Hotel, Plane } from "lucide-react";

export default function LogosStrip() {
  const logos = [
    { name: "Apollo Hospitals", icon: <Hospital size={24} /> },
    { name: "Delhi Public School", icon: <GraduationCap size={24} /> },
    { name: "Taj Hotels", icon: <Hotel size={24} /> },
    { name: "HDFC Bank", icon: <Landmark size={24} /> },
    { name: "TATA Motors", icon: <Building2 size={24} /> },
    { name: "IndiGo", icon: <Plane size={24} /> },
  ];

  return (
    <section className="logos-section">
      <div className="container">
        <p className="logos-label">TRUSTED BY INDUSTRY LEADERS ACROSS INDIA</p>
        <div className="logos-row">
          {logos.map((logo, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="logo-pill"
            >
              <span className="logo-icon">{logo.icon}</span>
              <span className="logo-name">{logo.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .logos-section {
          padding: 3rem 2rem;
          background: var(--bg-alpha-light);
          border-top: 1px solid var(--glass-border);
          border-bottom: 1px solid var(--glass-border);
        }
        
        .logos-label {
          text-align: center;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
          letter-spacing: 0.1em;
          font-weight: 600;
        }

        .logos-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .logo-pill {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.5rem;
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid var(--glass-border);
          border-radius: 100px;
          color: var(--text-muted);
          transition: all 0.3s ease;
          cursor: default;
        }

        .logo-pill:hover {
          color: var(--text-color);
          border-color: rgba(99, 102, 241, 0.4);
          transform: translateY(-2px);
          background: rgba(15, 23, 42, 0.7);
        }

        .logo-icon {
          display: flex;
          align-items: center;
          color: var(--primary);
        }

        .logo-name {
          font-size: 0.95rem;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .logos-row {
            gap: 1rem;
          }
          .logo-pill {
            padding: 0.5rem 1rem;
          }
        }
      `}</style>
    </section>
  );
}
