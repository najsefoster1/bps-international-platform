import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import facilities from '../data/facilities';

function EnhancedCheckoutPage() {
  const navigate = useNavigate();
  const [photos, setPhotos] = useState([]);
  const [creditsNeeded, setCreditsNeeded] = useState(0);
  const [creditsBalance, setCreditsBalance] = useState(40);
  const [paymentOption, setPaymentOption] = useState('credits');
  const [facility, setFacility] = useState(null);
  const [recipient, setRecipient] = useState(null);
  const perPicturePrice = 0.5; // cost per photo in dollars for pay-per-picture
  const shippingTime = '5-7 business days';

  useEffect(() => {
    const uploadedPhotos = JSON.parse(localStorage.getItem('uploadedPhotos')) || [];
    setPhotos(uploadedPhotos);
    setCreditsNeeded(uploadedPhotos.length);
    const rec = JSON.parse(localStorage.getItem('recipient')) || {};
    setRecipient(rec);
    const fac = facilities.find((f) => f.id === rec.facility);
    setFacility(fac);
    const storedCredits = parseInt(localStorage.getItem('creditsBalance')) || creditsBalance;
    setCreditsBalance(storedCredits);
  }, []);

  const handlePurchase = () => {
    // In a real app, handle payment (credits or per-picture) via backend
    if (paymentOption === 'credits') {
      const newBalance = creditsBalance - creditsNeeded;
      localStorage.setItem('creditsBalance', newBalance);
    }
    // Navigate to order tracking page
    navigate('/tracking');
  };

  const totalPerPicturePrice = (photos.length * perPicturePrice).toFixed(2);

  return (
    <div className="container">
      <h2>Checkout</h2>
      {facility && (
        <div className="facility-summary">
          <h3>Facility rules for {facility.name}</h3>
          <ul>
            <li>Max photos per mailing: {facility.maxPhotosPerMailing}</li>
            <li>Photo size: {facility.photoSize}</li>
            <li>{facility.colorAllowed ? 'Color allowed' : 'Only black & white'}</li>
            <li>{facility.allowCollages ? 'Collages allowed' : 'No collages'}</li>
            <li>Max mailings per week: {facility.maxMailingsPerWeek}</li>
            {facility.notes && <li>{facility.notes}</li>}
          </ul>
        </div>
      )}
      <p>Number of Photos: {photos.length}</p>
      <p>Credits Needed: {creditsNeeded}</p>
      <h3>Choose Payment Method</h3>
      <div className="payment-options">
        <label>
          <input
            type="radio"
            name="payment"
            value="credits"
            checked={paymentOption === 'credits'}
            onChange={() => setPaymentOption('credits')}
            disabled={creditsBalance < creditsNeeded}
          />
          Use credits ({creditsNeeded} credits)
          {creditsBalance < creditsNeeded ? ' (Insufficient credits)' : ''}
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="payment"
            value="perPicture"
            checked={paymentOption === 'perPicture'}
            onChange={() => setPaymentOption('perPicture')}
          />
          Pay per picture (${totalPerPicturePrice})
        </label>
      </div>
      <p>Estimated turnaround: {shippingTime}</p>
      <button onClick={handlePurchase}>Complete Purchase</button>
    </div>
  );
}

export default EnhancedCheckoutPage;
