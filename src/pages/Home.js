// src/pages/Home.js
import React, { useEffect, useState } from 'react';

const images = [
  '/images/couple.jpg',
  '/images/IMG_8974.JPG',
  '/images/fashion.jpg',
  '/images/seasoning_food.jpg',
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
      setImageLoaded(false); // reset on image change
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        height: '90vh',
        backgroundColor: '#000', // fallback
        backgroundImage: imageLoaded ? `url(${images[index]})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        color: 'white',
        textAlign: 'center',
        padding: '0 20px',
        textShadow: '2px 2px 10px #000',
      }}
    >
      <img
        src={images[index]}
        alt="slideshow"
        style={{ display: 'none' }}
        onLoad={() => setImageLoaded(true)}
        onError={() => console.error('Image not found:', images[index])}
      />

      <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Welcome to NY Studio</h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '1.5rem', maxWidth: '600px' }}>
        Capturing Moments That Last a Lifetime — From Weddings to Portraits, Every Frame Tells a Story.
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
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#1EBE5B')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#25D366')}
      >
        Book on WhatsApp
      </a>
    </div>
  );
};

export default Home;
