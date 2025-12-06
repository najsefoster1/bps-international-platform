import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import facilities from '../data/facilities';
import '../styles.css';

function EnhancedRecipientPage() {
  const navigate = useNavigate();
  const [recipient, setRecipient] = useState({ name: '', id: '', facility: '' });
  const [selectedFacility, setSelectedFacility] = useState(null);

  useEffect(() => {
    const savedRecipient = localStorage.getItem('recipient');
    if (savedRecipient) {
      const parsed = JSON.parse(savedRecipient);
      setRecipient(parsed);
      const fac = facilities.find(f => f.id === parsed.facility);
      setSelectedFacility(fac);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipient(prev => ({ ...prev, [name]: value }));
  };

  const handleFacilityChange = (e) => {
    const facilityId = e.target.value;
    setRecipient(prev => ({ ...prev, facility: facilityId }));
    const fac = facilities.find(f => f.id === facilityId);
    setSelectedFacility(fac);
  };

  const handleNext = () => {
    if (recipient.name && recipient.id && recipient.facility) {
      localStorage.setItem('recipient', JSON.stringify(recipient));
      navigate('/review');
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="container">
      <h2>Add Recipient</h2>
      <div className="form-group">
        <label htmlFor="name">Inmate Name</label>
        <input type="text" id="name" name="name" value={recipient.name} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="id">Inmate ID</label>
        <input type="text" id="id" name="id" value={recipient.id} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="facility">Facility</label>
        <select id="facility" value={recipient.facility} onChange={handleFacilityChange}>
          <option value="">Select a facility</option>
          {facilities.map(f => (
            <option key={f.id} value={f.id}>
              {f.name} ({f.state})
            </option>
          ))}
        </select>
      </div>
      {selectedFacility && (
        <div className="facility-rules">
          <h4>Facility Rules</h4>
          <ul>
            <li>Max photos per mailing: {selectedFacility.maxPhotosPerMailing}</li>
            <li>Photo size: {selectedFacility.photoSize}</li>
            <li>Color allowed: {selectedFacility.colorAllowed ? 'Yes' : 'No'}</li>
            <li>Collages allowed: {selectedFacility.allowCollages ? 'Yes' : 'No'}</li>
            <li>Max mailings per week: {selectedFacility.maxMailingsPerWeek}</li>
            {selectedFacility.notes && <li>Notes: {selectedFacility.notes}</li>}
          </ul>
        </div>
      )}
      <button className="primary" onClick={handleNext}>Next</button>
    </div>
  );
}

export default EnhancedRecipientPage;
