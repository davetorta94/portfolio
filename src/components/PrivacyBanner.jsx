import React from 'react';

export const PrivacyBanner = ({ acceptPrivacyPolicy, onCancel }) => {
  return (
    <div style={bannerStyle}>
      <p>
        Usamos cookies para mejorar su experiencia. Al pulsar "Aceptar", acepta la{' '}
        <a href="/politica-de-privacidad" target="_blank" rel="noopener noreferrer">
          Política de Privacidad
        </a>.
      </p>
      <button onClick={acceptPrivacyPolicy} style={buttonStyle}>Aceptar</button>
      <button onClick={onCancel} style={cancelButtonStyle}>Cancelar</button>
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



