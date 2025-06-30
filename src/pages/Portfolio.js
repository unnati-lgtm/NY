import React from 'react';

const gallery = {
  Wedding: [
    '/images/couple.jpg',
    '/images/IMG_8974.JPG',
    '/images/456.jpg',
    '/images/b12.JPG',
  ],
  Portrait: [
    '/images/b8.JPG',
    '/images/b45.JPG',
    '/images/b3.JPG',
        '/images/m1.JPG',

  ],
  Fashion: [
    '/images/fashion.jpg',
    '/images/1234.jpg',
    '/images/5678.jpg',
        '/images/823.jpg',

  ],
  Product: [
    '/images/aq.JPEG',
    '/images/p4.JPG',
    '/images/p7.JPG',
  ],
};

// Flatten all images with their category
const allImages = Object.entries(gallery).flatMap(([category, images]) =>
  images.map((src) => ({ src, category }))
);

const Portfolio = () => {
  return (
    <div style={{
      background: 'linear-gradient(to right, #1f1c2c, #928dab)',
      color: '#fff',
      padding: '80px 20px',
      minHeight: '100vh',
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#ffdd99',
          marginBottom: '20px',
        }}>
          Our Complete Portfolio
        </h1>
        <p style={{
          fontSize: '1.2rem',
          maxWidth: '800px',
          margin: '0 auto',
          color: '#ddd',
          lineHeight: '1.8',
        }}>
          From Wedding to Fashion, here’s a visual gallery of our finest moments captured with heart.
        </p>
      </div>

      {/* Unified Image Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '25px',
        padding: '0 20px',
      }}>
        {allImages.map(({ src, category }, i) => (
          <div key={i} style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '12px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.5)',
          }}>
            <img
              src={src}
              alt={`${category}-${i}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.4s ease',
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
            <div style={{
              position: 'absolute',
              bottom: '0',
              width: '100%',
              background: 'rgba(0,0,0,0.6)',
              color: '#fff',
              padding: '10px',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '1rem',
            }}>
              {category}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
