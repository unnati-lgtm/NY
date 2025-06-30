import React from 'react';

const blogPosts = [
  {
    title: 'Capturing Moments that Last Forever',
    image: '/images/456.jpg',
    description:
      'Photography is more than just clicking a button. It’s about freezing time, telling a story, and capturing the emotion behind every frame. At NY Studio, we strive to find magic in every moment.',
    date: 'June 2025',
  },
  {
    title: ' Wedding Photography ',
    image: '/images/b11.jpg',
    description:
      'From lighting to location, here are our favorite tips for photographing weddings. Learn how we capture those once-in-a-lifetime vows and candid smiles with ease and elegance.',
    date: 'May 2025',
  },
  {
    title: 'Why Portrait Photography is Powerful',
    image: '/images/pio.jpg',
    description:
      'A great portrait can say more than a thousand words. Discover how we use light, mood, and expression to create portraits that tell a unique story.',
    date: 'April 2025',
  },
];

const Blog = () => {
  return (
    <div style={{
      background: 'linear-gradient(to right, #f8f9fa, #e9ecef)',
      padding: '80px 20px',
      minHeight: '100vh',
    }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#343a40',
        }}>
          NY Studio Photography Blog
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#555',
          maxWidth: '800px',
          margin: '10px auto 0',
        }}>
          Stories, tips, and behind-the-scenes moments from our lens. Dive into the world of professional photography with our hand-crafted blog posts.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {blogPosts.map((post, index) => (
          <div key={index} style={{
            background: '#fff',
            borderRadius: '16px',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            transition: 'transform 0.3s',
          }}>
            <img
              src={post.image}
              alt={post.title}
              style={{ width: '100%', height: '220px', objectFit: 'cover' }}
            />
            <div style={{ padding: '20px' }}>
              <h3 style={{ color: '#0d6efd', marginBottom: '10px' }}>{post.title}</h3>
              <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6' }}>
                {post.description}
              </p>
              <p style={{ fontSize: '0.85rem', color: '#999', marginTop: '10px' }}>
                📅 {post.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
