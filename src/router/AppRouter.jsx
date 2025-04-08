import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Ui } from '../Ui';
import { ContactPage } from '../components/ContactPage';
import emailjs from 'emailjs-com';
import { getEnvVariables } from '../helpers/getEnvVariables';
import { useForm } from '../hooks/useForm';
import { TourPage } from '../pages/TourPage';
import { projects } from '../data/data';


// Desestructuramos las variables de entorno
const { YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_USER_ID } = getEnvVariables();

// Inicializamos los campos del formulario de contacto
const contactFields = {
  name: '',
  email: '',
  message: '',
};

export const AppRouter = () => {
  const [spanish, setSpanish] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  // Utilizamos el hook useForm para manejar los campos del formulario
  const { onInputChange, name, email, message } = useForm(contactFields);

  // Cambiar idioma
  const handleLanguage = () => {
    setSpanish(!spanish);
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validamos que todos los campos estén completos
    if (!name || !email || !message) {
      alert('Por favor, rellena todos los campos antes de enviar.');
      return;
    }

    // Definimos los parámetros del template de email
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    // Enviamos el correo usando emailjs
    emailjs
      .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams, YOUR_USER_ID)
      .then((result) => {
        console.log('Correo enviado:', result.text);
        alert('Correo enviado correctamente');
        setSubmitted(true);
      })
      .catch((error) => {
        console.log('Error al enviar el correo:', error.text);
        alert('Hubo un error al enviar el correo');
      });
  };

  return (
    <>
      <Routes>
        {/* Ruta principal */}
        <Route
          path='/'
          element={<Ui handleLanguage={handleLanguage} spanish={spanish} />}
        />

        {/* Ruta para el contacto */}
        <Route
          path='/contact'
          element={
            <ContactPage
              handleSubmit={handleSubmit}
              handleLanguage={handleLanguage}
              spanish={spanish}
              submitted={submitted}
              onInputChange={onInputChange}
              name={name}
              email={email}
              message={message}
            />
          }
          
        />

        

          <Route path='/tour' element={<TourPage projects={projects} spanish={spanish} handleLanguage={handleLanguage} />} />
          <Route path='/tour/:id' element={<TourPage projects={projects} spanish={spanish} handleLanguage={handleLanguage} />} />


      </Routes>
    </>
  );
};
