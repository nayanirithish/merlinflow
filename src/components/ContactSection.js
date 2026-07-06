"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      // Using FormSubmit.co free AJAX API to send emails directly
      const response = await fetch("https://formsubmit.co/ajax/oryoltechnologies@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          e.target.reset();
        }, 5000);
      } else {
        alert("Oops! Something went wrong while sending your message.");
      }
    } catch (error) {
      alert("Oops! A network error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
            Ready to transform your operations? We're here to help.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3 }}
            className="contact-info"
          >
            <div className="info-card glass-panel">
              <MapPin size={24} color="var(--primary)" />
              <div>
                <h3>Headquarters</h3>
                <a href="https://maps.google.com/?q=Oryol+Technologies+Pvt+Ltd,+Warangal,+Telangana" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <p>Oryol Technologies Pvt Ltd<br/>Warangal, Telangana</p>
                </a>
              </div>
            </div>

            <div className="info-card glass-panel">
              <Phone size={24} color="var(--accent-1)" />
              <div>
                <h3>Phone</h3>
                <a href="tel:+918374373753" className="contact-link">
                  <p>+91 83743 73753<br/>Mon-Fri, 9am - 6pm</p>
                </a>
              </div>
            </div>

            <div className="info-card glass-panel">
              <Mail size={24} color="var(--accent-2)" />
              <div>
                <h3>Email</h3>
                <a href="mailto:oryoltechnologies@gmail.com" className="contact-link">
                  <p>oryoltechnologies@gmail.com</p>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.5 }}
            className="form-wrapper glass-panel"
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="success-state"
              >
                <CheckCircle size={64} color="var(--primary)" style={{ marginBottom: "1.5rem" }} />
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out to Oryol Technologies. Our team will get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <input type="hidden" name="_subject" value="New Contact Form Submission - Oryol Technologies" />
                <input type="hidden" name="_captcha" value="false" />
                
                <div className="input-group">
                  <label>Full Name</label>
                  <input type="text" name="name" placeholder="John Doe" required />
                </div>
                
                <div className="input-group">
                  <label>Work Email</label>
                  <input type="email" name="email" placeholder="john@school.edu" required />
                </div>

                <div className="input-group">
                  <label>Interest</label>
                  <select name="interest" required>
                    <option value="">Select an option</option>
                    <option value="Education ERP">Education ERP</option>
                    <option value="Healthcare Solutions">Healthcare Solutions</option>
                    <option value="Hospitality Management">Hospitality Management</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="input-group align-top">
                  <label>Message</label>
                  <textarea name="message" rows="4" placeholder="Tell us about your needs..." required></textarea>
                </div>

                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : <>Send Message <Send size={18} /></>}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .section-container {
          padding: 6rem 2rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .info-card {
          padding: 2rem;
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }

        .info-card h3 {
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
        }

        .info-card p {
          color: var(--text-muted);
          line-height: 1.5;
        }

        .form-wrapper {
          padding: 3rem;
          min-height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .success-state {
          text-align: center;
          padding: 2rem;
        }

        .success-state h3 {
          font-size: 1.75rem;
          color: var(--text-color);
          margin-bottom: 1rem;
        }

        .success-state p {
          color: var(--text-muted);
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .contact-link {
          text-decoration: none;
          color: inherit;
          transition: opacity 0.2s, color 0.2s;
          display: block;
        }

        .contact-link:hover {
          opacity: 0.8;
          color: var(--primary);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .input-group {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .input-group.align-top {
          align-items: flex-start;
        }

        .input-group label {
          width: 95px;
          flex-shrink: 0;
          text-align: left;
          font-weight: 500;
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        .input-group.align-top label {
          margin-top: 1rem;
        }

        .input-group input,
        .input-group select,
        .input-group textarea {
          flex: 1;
          width: 100%;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          color: var(--text-color);
          font-family: inherit;
          font-size: 1rem;
          outline: none;
          transition: all 0.2s ease;
        }

        .input-group input::placeholder,
        .input-group textarea::placeholder {
           color: rgba(255, 255, 255, 0.4);
        }

        .input-group input:focus,
        .input-group select:focus,
        .input-group textarea:focus {
          border-color: var(--primary);
          background: rgba(255, 255, 255, 0.06);
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.15);
        }

        .submit-btn {
          margin-top: 1rem;
          margin-left: calc(95px + 1rem);
          width: calc(100% - 95px - 1rem);
          padding: 1rem;
          background: var(--primary);
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.2s ease;
        }

        .submit-btn:hover:not(:disabled) {
          background: var(--primary-hover);
          transform: translateY(-2px);
        }
        
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .input-group {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          .input-group label {
            width: auto;
            text-align: left;
          }
          .input-group.align-top label {
            margin-top: 0;
          }
          .submit-btn {
            margin-left: 0;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
