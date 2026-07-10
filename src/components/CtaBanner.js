"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="cta-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="cta-card glass-panel"
        >
          <div className="cta-content">
            <h2 className="cta-title">
              Ready to transform your operations?
            </h2>
            <p className="cta-desc">
              Join hundreds of enterprises across India scaling effortlessly with MerlinFlow's intelligent OS.
            </p>
            <div className="cta-buttons">
              <a href="#contact" className="btn btn-primary">
                Book a Free Demo <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Sales
              </a>
            </div>
          </div>
          
          {/* Decorative background glow */}
          <div className="cta-glow"></div>
        </motion.div>
      </div>

      <style jsx>{`
        .cta-section {
          padding: 4rem 2rem 6rem 2rem;
          background: transparent;
          position: relative;
        }

        .cta-card {
          max-width: 1000px;
          margin: 0 auto;
          padding: 5rem 2rem;
          border-radius: 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
        }

        .cta-content {
          position: relative;
          z-index: 2;
        }

        .cta-title {
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 800;
          color: var(--text-color);
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .cta-desc {
          font-size: 1.1rem;
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto 2.5rem auto;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .cta-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 60%);
          z-index: 1;
          pointer-events: none;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background: var(--primary);
          color: white;
          border: 1px solid var(--primary);
          box-shadow: var(--neon-glow);
        }

        .btn-primary:hover {
          background: var(--primary-hover);
          box-shadow: var(--neon-glow-hover);
          transform: translateY(-2px);
        }

        .btn-outline {
          background: var(--bg-alpha-light);
          color: var(--text-color);
          border: 1px solid var(--glass-border);
        }

        .btn-outline:hover {
          background: var(--bg-alpha-hover);
          border-color: var(--primary);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
