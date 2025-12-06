import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import UploadPage from './components/UploadPage';
import RecipientPage from './components/RecipientPage';
import ReviewPage from './components/ReviewPage';
import EnhancedRecipientPage from './components/EnhancedRecipientPage';
import EnhancedCheckoutPage from './components/EnhancedCheckoutPage';
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
        <Route path="/recipient" element={<EnhancedRecipientPage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/checkout" element={<EnhancedCheckoutPage />} />
        <Route path="/track/:id" element={<TrackingPage />} />
      </Routes>
    </Router>
  );
}
