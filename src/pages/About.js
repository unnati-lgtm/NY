import React from 'react';

const About = () => {
  return (
    <div
      style={{
        minHeight: '90vh',
        backgroundImage: 'url("/images/about.jpeg")', // 🔁 Replace with your actual image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '60px 20px',
        textAlign: 'center',
        textShadow: '2px 2px 10px #000',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>About NY Studio</h1>
      <p style={{ fontSize: '1.4rem', maxWidth: '700px', marginBottom: '1.5rem' }}>
        Since <strong>2014</strong>, NY Studio has been turning fleeting moments into timeless masterpieces. Whether it’s a wedding, a portrait, or a fashion shoot, our lens tells your story in the most breathtaking way.
      </p>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px' }}>
        With a passion for visual storytelling and a team of creative professionals, we bring emotion, elegance, and authenticity to every frame.
      </p>
    </div>
  );
};

export default About;
