"use client";

import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import oryolLogo from "../../public/images/oryol_logo_transparent.png";

export default function Footer() {
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <h3 className="footer-logo">
              <img 
                src={oryolLogo.src}
                alt="Oryol Logo"
                style={{ 
                  height: '55px', 
                  width: 'auto', 
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)'
                }}
              />
            </h3>
            <p style={{ color: "var(--text-muted)", marginBottom: "2rem", maxWidth: "400px", lineHeight: "1.6" }}>
              The premium Operating System for modern Educational Institutions and Enterprises. Unify your workflows, automate complex processes, and unlock unprecedented growth with our state-of-the-art, secure SaaS platform.
            </p>
          </div>

          {/* Links Columns */}
          <div className="footer-links">
            <h3>Product</h3>
            <ul>
              <li><a href="#features" onClick={(e) => handleLinkClick(e, '#features')}>Features</a></li>
              <li><a href="#integrations" onClick={(e) => handleLinkClick(e, '#integrations')}>Integrations</a></li>
              <li><a href="#security" onClick={(e) => handleLinkClick(e, '#security')}>Security</a></li>
              <li><a href="#impact" onClick={(e) => handleLinkClick(e, '#impact')}>Impact & Scale</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Company</h3>
            <ul>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')}>About Us</a></li>
              <li><a href="#testimonials" onClick={(e) => handleLinkClick(e, '#testimonials')}>Success Stories</a></li>
              <li><a href="#faq" onClick={(e) => handleLinkClick(e, '#faq')}>FAQ</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook size={20} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={20} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"><FaXTwitter size={20} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube size={20} /></a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp size={20} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Oryol Technologies Pvt Ltd. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          border-top: 1px solid var(--glass-border);
          background: var(--bg-alpha-light);
          padding: 6rem 0 2rem;
          margin-top: 4rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bg-alpha-light);
          color: var(--text-color);
          transition: all 0.2s;
        }

        .social-links a:hover {
          background: var(--primary);
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 240, 255, 0.4);
        }

        .footer-links h3 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: var(--text-color);
        }

        .footer-links ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links a {
          color: var(--text-muted);
          transition: color 0.2s;
          cursor: pointer;
        }

        .footer-links a:hover {
          color: var(--primary);
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid var(--glass-border);
          text-align: center;
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
          .footer-brand {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </footer>
  );
}
