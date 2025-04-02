import React from 'react';
import { useNavigate } from 'react-router-dom';



export const ContactButton = ({ privacyAccepted }) => {
  
  if (!privacyAccepted) {
    return null; // Si no se acepta la privacidad, no mostramos el botón
  }
  
  const navigate = useNavigate();

    const handleClick = () => {
      navigate('/contact'); // Redirige a la ruta de la página de contacto
    };
  
    return (
      <button onClick={handleClick} style={styles.button}>
        Contact
      </button>
    );
  };
  
  const styles = {
    button: {
      padding: '10px 20px',
      backgroundColor: '#CCFF00',
      color: 'black',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    }
}

