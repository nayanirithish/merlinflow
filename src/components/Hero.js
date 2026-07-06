"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-container">
      <div className="container hero-grid" style={{ position: "relative", zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-text-content"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "backOut" }}
            style={{ marginBottom: "2rem", display: "inline-block" }}
          >
            <span className="glass-panel" style={{ padding: "0.5rem 1rem", fontSize: "0.875rem", fontWeight: 500, letterSpacing: "1px", textTransform: "uppercase", color: "var(--primary)" }}>
              Introducing Oryol Technologies
            </span>
          </motion.div>

          <h1 style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "1.5rem" }}>
            Innovation at <span className="text-gradient">every step.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            style={{ fontSize: "clamp(1.125rem, 1.5vw, 1.25rem)", color: "var(--text-muted)", maxWidth: "650px", marginBottom: "3rem", lineHeight: 1.6 }}
          >
            The premium Operating System for modern Educational Institutions and Enterprises. Unify your workflows, automate complex processes, and unlock unprecedented growth with our state-of-the-art, secure SaaS platform.
          </motion.p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ delay: 0.4, duration: 1, type: "spring" }}
          className="hero-image-wrapper"
        >
          <Image 
            src="/images/hero_illustration_new.png" 
            alt="Corporate Hero Illustration" 
            width={650} 
            height={650} 
            className="hero-image"
            priority
            style={{ borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
          />
        </motion.div>
      </div>

      <style jsx>{`
        .hero-container {
          min-height: 95vh;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding-top: 5rem;
          background: transparent;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
        }
        
        .hero-container::before {
          content: '';
          position: absolute;
          top: -20%;
          left: -10%;
          width: 50%;
          height: 50%;
          background: radial-gradient(circle, var(--primary) 0%, transparent 70%);
          opacity: 0.15;
          filter: blur(100px);
          animation: float 10s infinite alternate ease-in-out;
        }

        .hero-container::after {
          content: '';
          position: absolute;
          bottom: -20%;
          right: -10%;
          width: 50%;
          height: 50%;
          background: radial-gradient(circle, var(--accent-1) 0%, transparent 70%);
          opacity: 0.15;
          filter: blur(100px);
          animation: float-reverse 12s infinite alternate ease-in-out;
        }

        .hero-image-wrapper {
          position: relative;
          perspective: 1000px;
        }

        .hero-image {
          position: relative;
          z-index: 1;
          width: 100%;
          height: auto;
          filter: var(--image-filter) drop-shadow(0 25px 50px rgba(0,0,0,0.2));
          mix-blend-mode: var(--image-blend);
          transform: scaleX(-1); /* Flips the eagle from right to left */
          animation: levitate 6s ease-in-out infinite;
          transition: filter 0.3s ease, mix-blend-mode 0.3s ease;
        }

        .btn-primary {
          background: var(--primary);
          color: #ffffff;
          border: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          box-shadow: var(--neon-glow);
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
        }

        .btn-primary:hover {
          background: var(--primary-hover);
          transform: translateY(-2px);
          box-shadow: var(--neon-glow-hover);
        }

        .btn-secondary {
          background: transparent;
          color: var(--text-color);
          border: 1px solid var(--glass-border);
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
          backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
          background: var(--glass-bg);
          border-color: var(--text-muted);
        }

        @keyframes float {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @keyframes float-reverse {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-50px, -50px); }
        }

        @keyframes levitate {
          0%, 100% { transform: translateY(0) scaleX(-1); }
          50% { transform: translateY(-20px) scaleX(-1); }
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-buttons {
            justify-content: center;
          }
          .hero-text-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}
