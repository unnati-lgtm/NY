import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  { type: 'image', src: '/images/gh.JPG' },
  { type: 'video', src: '/images/gn2.MP4' },
  { type: 'image', src: '/images/hu.jpg' },
  { type: 'image', src: '/images/b5.JPG' },
];

const categories = [
  { name: 'Weddings', image: '/images/b9.jpg', link: '/portfolio?category=Wedding' },
  { name: 'Portraits', image: '/images/b7.jpg', link: '/portfolio?category=Portrait' },
  { name: 'Fashion', image: '/images/fashion.jpg', link: '/portfolio?category=Fashion' },
  { name: 'Products', image: '/images/p4.jpg', link: '/portfolio?category=Product' },
];



const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: '#f8f9fa', color: '#212529', minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{ padding: '80px 20px' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {/* Text */}
          <div style={{ flex: '1 1 500px', paddingRight: '20px' }}>
            <p style={{
              color: '#0d6efd',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              letterSpacing: '2px',
              marginBottom: '10px',
            }}>
              Welcome To NY Studio
            </p>
            <h1 style={{ fontSize: '2.8rem', fontWeight: 'bold', marginBottom: '20px' }}>
              Framing Your Forever <span style={{ color: '#0d6efd' }}>—</span> One Shot at a Time
            </h1>
            <p style={{ fontSize: '1.1rem', marginBottom: '30px' }}>
              From emotional weddings to expressive portraits, we bring your moments to life with
              artistic elegance and creative storytelling. Based in Uttar Pradesh, trusted by hundreds.
            </p>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <a href="#about-section" style={{
                backgroundColor: '#0d6efd',
                color: '#fff',
                padding: '12px 24px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: '500',
              }}>
                Explore More
              </a>
              <Link to="/contact" style={{
                border: '2px solid #212529',
                padding: '12px 24px',
                borderRadius: '30px',
                textDecoration: 'none',
                color: '#212529',
                fontWeight: '500',
              }}>
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Slideshow */}
          <div style={{
            flex: '1 1 500px',
            marginTop: '30px',
            display: 'flex',
            justifyContent: 'center',
          }}>
            <div style={{
              width: '100%',
              maxWidth: '600px',
              backgroundColor: '#000',
              padding: '10px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            }}>
              {slides[index].type === 'image' ? (
                <img
                  src={slides[index].src}
                  alt={`Slide ${index}`}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    borderRadius: '8px',
                  }}
                />
              ) : (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    borderRadius: '8px',
                  }}
                >
                  <source src={slides[index].src} type="video/mp4" />
                  Your browser does not support video.
                </video>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about-section" style={{ backgroundColor: '#fff', padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
            About NY Studio
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
            <strong>NY Studio</strong> was founded by <strong>Akaram Pravaej</strong> in 2014 with a
            simple yet powerful vision: to capture the most precious moments in people’s lives with
            heart, creativity, and authenticity. What began as a small passion project in Uttar Pradesh
            has today grown into a full-service photography studio known for its unique storytelling
            style and client-centric approach.
            <br /><br />
            Over the years, we’ve had the privilege to shoot countless weddings, portraits, fashion
            campaigns, and commercial projects — each with its own story to tell. Our mission is to
            create timeless visuals that you'll cherish forever.
          </p>
        </div>
      </div>

      {/* Categories Section */}
      <div style={{ backgroundColor: '#f1f1f1', padding: '60px 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.3rem', marginBottom: '40px', color: '#0d6efd' }}>
          Explore Our Photography Styles
        </h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          justifyContent: 'center',
        }}>
          {categories.map((cat, i) => (
            <Link key={i} to={cat.link} style={{
              textDecoration: 'none',
              color: '#000',
              width: '250px',
              textAlign: 'center',
              backgroundColor: '#fff',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s',
            }}>
              <div>
                <img
                  src={cat.image}
                  alt={cat.name}
                  style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                />
                <h4 style={{ margin: '15px 0', fontWeight: '600' }}>{cat.name}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
