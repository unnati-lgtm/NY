import React, { useState, useEffect } from 'react';

const images = [
  '/images/78.jpg',
  '/images/45.jpg',
  '/images/ch.jpg',
];

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        background: 'linear-gradient(to right, #f5f7fa, #c3cfe2)',
        color: '#333',
        padding: '80px 20px',
      }}
    >
      {/* About Section */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px',
          marginBottom: '80px',
        }}
      >
        {/* Text */}
        <div style={{ flex: 1, minWidth: '300px', maxWidth: '600px' }}>
          <h1
            style={{
              fontSize: '3rem',
              color: '#ff7e5f',
              marginBottom: '1rem',
              fontWeight: '700',
            }}
          >
            About NY Studio
          </h1>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1rem' }}>
            Established in <strong>2014</strong>, <strong>NY Studio</strong> is a premier photography
            studio based in Varanasi, committed to capturing life's most treasured moments with
            artistic flair and technical precision.
          </p>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1rem' }}>
            From intimate weddings and stylish portraits to high-end fashion shoots and grand events,
            we bring a unique creative perspective to every project.
          </p>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1rem' }}>
            What sets us apart is our ability to blend emotion, elegance, and storytelling in every
            frame. Our team forms personal connections to translate your vision into timeless imagery.
          </p>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
            Whether you're looking to preserve memories or craft a standout portfolio, we’re here to
            make every shot unforgettable — with passion, precision, and magic.
          </p>
        </div>

        {/* Slideshow */}
        <div
          style={{
            flex: 1,
            minWidth: '280px',
            maxWidth: '400px',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <img
            src={images[currentImage]}
            alt="NY Studio"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '12px',
              transition: 'opacity 0.6s ease-in-out',
            }}
          />
        </div>
      </div>

      {/* Founder Section */}
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#5f72be', marginBottom: '20px' }}>Founder’s Vision</h2>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#444' }}>
          <strong>Chand Sonkar</strong>, the founder of NY Studio, is a passionate storyteller and a
          visionary photographer with a Master’s degree in Mass Communication. His journey began with
          a simple dream: to capture authentic, emotional moments that go beyond the lens.
          <br /><br />
          With deep roots in media, storytelling, and artistic direction, Chand leads the team with
          creativity, discipline, and a heartfelt connection to every project. His belief in
          authenticity and his eye for detail are what make NY Studio a trusted name today.
        </p>
      </div>
    </div>
  );
};

export default About;
