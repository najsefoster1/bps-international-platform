import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RecipientPage() {
  const navigate = useNavigate();
  const [recipient, setRecipient] = useState({
    inmateName: '',
    inmateId: '',
    facility: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setRecipient(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    // Save to localStorage or context for later steps
    localStorage.setItem('recipient', JSON.stringify(recipient));
    navigate('/review');
  };

  return (
    <div className="container">
      <h2>Add Recipient</h2>
      <div className="form-group">
        <label>Inmate Name</label>
        <input type="text" name="inmateName" value={recipient.inmateName} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Inmate ID</label>
        <input type="text" name="inmateId" value={recipient.inmateId} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Facility</label>
        <input type="text" name="facility" value={recipient.facility} onChange={handleChange} />
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default RecipientPage;
