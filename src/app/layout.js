import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AccessibilityWidget from "../components/AccessibilityWidget";
import Chatbot from "../components/Chatbot";
import Preloader from "../components/Preloader";

export const metadata = {
  title: "Oryol Technologies | Premium SaaS Solutions",
  description: "Next-generation ERP solutions for Education, Health, and Hospitality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Preloader />
        <div id="main-content">
          <Navbar />
          {children}
          <Footer />
        </div>
        
        {/* Global Floating Widgets */}
        <AccessibilityWidget />
        <Chatbot />
      </body>
    </html>
  );
}
