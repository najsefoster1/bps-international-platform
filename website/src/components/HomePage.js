import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Send love. We'll handle the rest.</h1>
      <p>Upload your photos and we'll make sure they follow the rules.</p>
      <Link to="/upload" style={{ padding: '1rem 2rem', background: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>Get Started</Link>
    </div>
  );
}
