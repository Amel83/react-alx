// src/Notifications.js
import React from 'react';
import './Notifications.css'; // Import CSS file
// Import the close icon image
import { getLatestNotification } from './utils'; // Import the function

export default function Notifications() {
  const handleClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <button
        onClick={handleClick}
        aria-label="Close"
        style={{
          background: 'none',
          border: 'none',
          position: 'absolute',
          top: '10px',
          right: '10px',
          cursor: 'pointer',
        }}
      >
      
      </button>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}
