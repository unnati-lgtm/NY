import React from 'react';

const clients = [
  {
    name: 'Sunbeam Group of Educational Institutions',
    logo: '/images/sm.JPEG', // Replace with actual logo path
    review: "Capturing our institutional moments with elegance — NY Studio has an incredible sense of timing and creativity. They made every event timeless.",
  },
  {
    name: 'Sellers Giant',
    logo: '/images/sel.PNG', // Replace with actual logo path
    review: "Our brand never looked this good! The team at NY Studio brought out the essence of our products with stunning visuals and precision.",
  },
  {
    name: 'Supplement Zone',
    logo: '/images/sz.JPG', // Replace with actual logo path
    review: "From fitness shoots to product photography, NY Studio nailed every detail. They made our brand shine with powerful imagery.",
  },
];

const Clients = () => {
  return (
    <div style={{
      background: 'linear-gradient(to right, #232526, #414345)',
      color: '#fff',
      padding: '80px 20px',
      minHeight: '100vh',
    }}>
      <h1 style={{
        textAlign: 'center',
        fontSize: '3rem',
        color: '#ffdd99',
        marginBottom: '40px',
      }}>
        Trusted By Our Clients
      </h1>

      <p style={{
        textAlign: 'center',
        maxWidth: '700px',
        margin: '0 auto 60px',
        fontSize: '1.2rem',
        color: '#ccc',
        lineHeight: '1.8',
      }}>
        We’ve had the honor of working with some amazing clients, capturing stories and visuals that elevate their brands and memories. Here's what they have to say.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        padding: '0 20px',
      }}>
        {clients.map((client, idx) => (
          <div key={idx} style={{
            background: '#2c2c2c',
            borderRadius: '16px',
            padding: '30px',
            textAlign: 'center',
            boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
            transition: 'transform 0.3s ease',
          }}>
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              style={{
                height: '80px',
                marginBottom: '20px',
                objectFit: 'contain',
                filter: 'brightness(1.1)',
              }}
            />
            <h3 style={{ color: '#ffdd99', marginBottom: '15px' }}>{client.name}</h3>
            <p style={{ fontStyle: 'italic', color: '#ddd', lineHeight: '1.6' }}>
              "{client.review}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
