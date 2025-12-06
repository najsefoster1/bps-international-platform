import React from 'react';
import { Link } from 'react-router-dom';
impor '../styles.css';

export default function HomePage() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Send Love Through Photos</h1>
          <p className="hero-subtitle">Upload your photos and we'll make sure they follow facility rules.</p>
          <Link to="/upload" className="cta-button">Get Started</Link>
        </div>
      </section>
      <section className="info-section">
        <h2>How It Works</h2>
        <p>Buy credits, upload your memories, pick your loved one's facility, and we'll handle the rest.</p>
      </section>
    </div>
  );
}
