import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import UploadPage from './components/UploadPage';
import RecipientPage from './components/RecipientPage';
import ReviewPage from './components/ReviewPage';
import CheckoutPage from './components/CheckoutPage';
import TrackingPage from './components/TrackingPage';

export default function App() {
  return (
    <Router>
      <nav style={{ padding: '1rem', background: '#f5f5f5' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/upload">Upload</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/recipient" element={<RecipientPage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/track/:id" element={<TrackingPage />} />
      </Routes>
    </Router>
  );
}
