import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AccessibilityWidget from "../components/AccessibilityWidget";

import Preloader from "../components/Preloader";

export const metadata = {
  title: "MerlinFlow Technologies | Premium SaaS Solutions",
  description: "Next-generation ERP solutions for Education, Health, and Hospitality.",
};

export const viewport = {
  themeColor: '#f8fafc',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>

      </head>
      <body>
        <Preloader />
        <div id="main-content">
          <Navbar />
          {children}
          <Footer />
        </div>
        
        {/* Global Floating Widgets */}
        <AccessibilityWidget />

      </body>
    </html>
  );
}
