import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CheckoutPage() {
  const navigate = useNavigate();
  const [photos, setPhotos] = useState([]);
  const [credits, setCredits] = useState(0);

  useEffect(() => {
    const uploadedPhotos = JSON.parse(localStorage.getItem('uploadedPhotos')) || [];
    setPhotos(uploadedPhotos);
    // For simplicity, assume 1 credit per photo
    setCredits(uploadedPhotos.length);
  }, []);

  const handlePurchase = () => {
    // In a real app, handle payment processing here
    // After purchase, navigate to tracking or confirmation page
    navigate('/tracking');
  };

  return (
    <div className="container">
      <h2>Checkout</h2>
      <p>Number of Photos: {photos.length}</p>
      <p>Credits Needed: {credits}</p>
      <button onClick={handlePurchase}>Complete Purchase</button>
    </div>
  );
}

export default CheckoutPage;
