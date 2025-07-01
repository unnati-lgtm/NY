import React, { useState } from 'react';

const gallery = {
  Wedding: [
    '/images/couple.jpg',
    '/images/IMG_8974.JPG',
    '/images/456.jpg',
  ],
  Portrait: [
    '/images/b8.JPG',
    '/images/b45.JPG',
    '/images/b3.JPG',
  ],
  Fashion: [
    '/images/gh.jpg',
    '/images/1234.jpg',
    '/images/87l.jpg',
  ],
  Product: [
    '/images/aq.JPEG',
    '/images/p4.JPG',
    '/images/p7.JPG',
  ],
};

const Portfolio = () => {
  const [selected, setSelected] = useState('Wedding');

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
          Explore Our Portfolio
        </h1>
        <p style={{
          fontSize: '1.2rem',
          maxWidth: '800px',
          margin: '0 auto',
          color: '#ddd',
          lineHeight: '1.8',
        }}>
          Discover our creative journey through lenses. From emotional weddings to stylish fashion shoots, each image in our portfolio reflects a story, a moment, and a masterpiece.
        </p>
      </div>

      {/* Category Buttons */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: '40px',
        gap: '12px',
      }}>
        {Object.keys(gallery).map((category) => (
          <button
            key={category}
            onClick={() => setSelected(category)}
            style={{
              padding: '12px 24px',
              borderRadius: '30px',
              backgroundColor: selected === category ? '#ffdd99' : '#333',
              color: selected === category ? '#222' : '#fff',
              border: 'none',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: selected === category ? '0 4px 12px rgba(255,221,153,0.4)' : 'none',
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '25px',
        padding: '0 20px',
      }}>
        {gallery[selected].map((src, i) => (
          <div key={i} style={{
            overflow: 'hidden',
            borderRadius: '12px',
            position: 'relative',
            boxShadow: '0 8px 25px rgba(0,0,0,0.5)',
            transition: 'transform 0.3s ease-in-out',
          }}>
            <img
              src={src}
              alt={`${selected} ${i + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease, filter 0.3s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.filter = 'brightness(1.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.filter = 'brightness(1)';
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
