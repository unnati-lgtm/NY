import React, { useState } from 'react';

const gallery = {
  Wedding: [
    '/images/couple.jpg',
    '/images/IMG_8974.JPG',
    '/images/456.jpg'
  ],
  Portrait: [
    '/images/IMG_6979.JPG',
    '/images/IMG_8974.JPG',
    '/images/IMG_9100.JPEG.jpg'
  ],
  Fashion: [
    '/images/fashion.jpg',
    '/images/1234.jpg',
    '/images/5678.jpg'
  ],
  Product: [
    '/images/seasoning_food.jpg',
    '/images/789.jpg',
    '/images/IMG_2030.JPG'
  ]
};

const Services = () => {
  const [selected, setSelected] = useState('Wedding');

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Our Services</h1>
      <div style={{ marginBottom: '30px' }}>
        {Object.keys(gallery).map((category) => (
          <button
            key={category}
            onClick={() => setSelected(category)}
            style={{
              margin: '10px',
              padding: '10px 20px',
              backgroundColor: selected === category ? '#333' : '#777',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background 0.3s'
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}
      >
        {gallery[selected].map((src, i) => (
          <div key={i} style={{ borderRadius: '8px', overflow: 'hidden' }}>
            <img
              src={src}
              alt={`${selected} ${i + 1}`}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
