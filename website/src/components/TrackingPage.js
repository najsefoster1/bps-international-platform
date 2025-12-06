import React from 'react';

function TrackingPage() {
  // Sample statuses; in a real app these would come from backend based on order ID
  const statuses = [
    'Order Received',
    'Compliance Review',
    'Printing',
    'Preparing for Mailing',
    'Shipped',
    'Delivered'
  ];

  return (
    <div className="container">
      <h2>Order Tracking</h2>
      <ol>
        {statuses.map((status, index) => (
          <li key={index}>{status}</li>
        ))}
      </ol>
    </div>
  );
}

export default TrackingPage;
