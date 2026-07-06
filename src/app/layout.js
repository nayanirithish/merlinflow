import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AccessibilityWidget from "../components/AccessibilityWidget";

import Preloader from "../components/Preloader";

export const metadata = {
  title: "Oryol Technologies | Premium SaaS Solutions",
  description: "Next-generation ERP solutions for Education, Health, and Hospitality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'light' || theme === 'dark') {
                  document.documentElement.setAttribute('data-theme', theme);
                }
              } catch (e) {}
            `,
          }}
        />
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
