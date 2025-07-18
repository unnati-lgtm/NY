import React from 'react';

const Contact = () => {
  return (
    <div
      style={{
        padding: '60px 20px',
        textAlign: 'center',
        backgroundImage: 'url(/images/b2.jpg)', // Replace with your desired image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white',
        minHeight: '100vh',
        backdropFilter: 'brightness(0.5)',
      }}
    >
      {/* Overlay to enhance readability */}
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          padding: '60px 20px',
          borderRadius: '12px',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        <h1 style={{ fontSize: '2.8rem', marginBottom: '1rem', color: '#ffdd99' }}>
          Let’s Connect
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
          Have a moment to capture? Reach out to NY Studio for personalized photography services
          in Varanasi and beyond. We’ll make your memories unforgettable.
        </p>

        <a
          href="https://wa.me/919277182420"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#25D366',
            color: 'white',
            padding: '12px 25px',
            borderRadius: '30px',
            fontWeight: 'bold',
            fontSize: '1rem',
            textDecoration: 'none',
            transition: 'background 0.3s',
            display: 'inline-block',
            marginBottom: '30px',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#1EBE5B')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#25D366')}
        >
          📞 Book Now on WhatsApp
        </a>

        <div style={{ marginTop: '30px', fontSize: '1rem', lineHeight: '1.8' }}>
          <p>
            <strong>Email:</strong> Brothesrvideovivid@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +91 92771 82420
          </p>
          <p>
            <strong>Location:</strong> Varanasi, Uttar Pradesh, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
