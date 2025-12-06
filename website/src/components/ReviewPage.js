import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ReviewPage() {
  const navigate = useNavigate();
  const [photos, setPhotos] = useState([]);
  const [recipient, setRecipient] = useState(null);

  useEffect(() => {
    const uploadedPhotos = JSON.parse(localStorage.getItem('uploadedPhotos')) || [];
    const rec = JSON.parse(localStorage.getItem('recipient')) || null;
    setPhotos(uploadedPhotos);
    setRecipient(rec);
  }, []);

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="container">
      <h2>Review Order</h2>
      {recipient && (
        <div className="recipient-info">
          <p>Recipient: {recipient.inmateName} ({recipient.inmateId})</p>
          <p>Facility: {recipient.facility}</p>
        </div>
      )}
      <div className="photos-preview">
        {photos.map((photo, index) => (
          <div key={index} className="photo-item">
            {/* In a real app, previewUrl would refer to a local object or blob; here we just show the index */}
            <p>Photo {index + 1}</p>
            <p>Risk Score: {photo.riskScore || 0}%</p>
          </div>
        ))}
      </div>
      <p>Total Credits: {photos.length}</p>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

export default ReviewPage;
