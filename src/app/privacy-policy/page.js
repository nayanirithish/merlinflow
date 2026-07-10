export default function PrivacyPolicy() {
  return (
    <div className="container" style={{ paddingTop: '10rem', paddingBottom: '4rem', minHeight: '80vh' }}>
      <h1 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '2rem', textAlign: 'center' }}>Privacy Policy</h1>
      <div className="glass-panel" style={{ padding: '3rem', borderRadius: '16px', maxWidth: '900px', margin: '0 auto', textAlign: 'left' }}>
        <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
          <strong>Last updated:</strong> {new Date().toLocaleDateString()}
        </p>
        
        <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-color)' }}>1. Introduction</h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
          Welcome to MerlinFlow Technologies Pvt Ltd. We respect your privacy and are committed to protecting your personal data. 
          This privacy policy will inform you as to how we look after your personal data when you visit our website 
          and tell you about your privacy rights.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-color)' }}>2. Data We Collect</h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
          We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          <br /><br />
          &bull; <strong>Identity Data:</strong> includes first name, last name, or similar identifier.<br />
          &bull; <strong>Contact Data:</strong> includes billing address, email address, and telephone numbers.<br />
          &bull; <strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting, and location.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-color)' }}>3. How We Use Your Data</h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
          We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to provide our ERP software services, manage your account, or to communicate with you regarding updates, support, and live demo bookings.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-color)' }}>4. Data Security</h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
          We have put in place appropriate, enterprise-grade security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. We limit access to your personal data to those employees, agents, contractors and other third parties who have a strict business need to know.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-color)' }}>5. Contact Us</h2>
        <p style={{ marginBottom: '0', lineHeight: 1.6, color: 'var(--text-muted)' }}>
          If you have any questions about this privacy policy or our privacy practices, please contact us via the contact form on our website or directly at our registered office.
        </p>
      </div>
    </div>
  );
}
