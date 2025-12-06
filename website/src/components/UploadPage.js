import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UploadPage() {
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleNext = () => {
    navigate('/recipient');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Upload Photos</h2>
      <p>Please select your photos. Only 4x6 prints are accepted.</p>
      <input type="file" multiple onChange={handleChange} />
      {files.length > 0 && <p>{files.length} photo(s) selected.</p>}
      <button onClick={handleNext} style={{ marginTop: '1rem' }}>Next</button>
    </div>
  );
}
