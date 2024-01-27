// Alert.jsx
import React from 'react';

const Alert = ({ message, color }) => {
  const alertStyle = {
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '4px',
    color: '#fff',
    backgroundColor: color === 'success' ? '#28a745' : '#dc3545',
  };

  return (
    <div style={alertStyle}>
    <p>{message}</p>  
    </div>
  );
};

export default Alert;
