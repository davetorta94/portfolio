import React from 'react';

export const PrivacyBannerEng = ({ acceptPrivacyPolicy, onCancel }) => {
  return (
    <div style={bannerStyle}>
      <p>
        We use cookies to improve your experience. If you press "Accept" you agree with our{' '}
        <a href="/politica-de-privacidad" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>.
      </p>
      <button onClick={acceptPrivacyPolicy} style={buttonStyle}>Accept</button>
      <button onClick={onCancel} style={cancelButtonStyle}>Decline</button>
    </div>
  );
};

// Estilos en línea para el banner y los botones
const bannerStyle = {
  position: 'fixed',
  bottom: '0',
  width: '100%',
  backgroundColor: '#333',
  color: 'white',
  padding: '10px',
  textAlign: 'center',
  zIndex: '1000',
};

const buttonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  cursor: 'pointer',
  marginLeft: '20px',
};

const cancelButtonStyle = {
  ...buttonStyle, // Copia los estilos básicos del botón
  backgroundColor: '#f44336', // Cambia el color de fondo a rojo
  marginLeft: '10px',
};




