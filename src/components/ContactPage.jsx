import React from 'react'
import { ParticleBackground } from '../ParticleBackground'
import { ContactForm } from './ContactForm'
import { ContactNavbar } from './ContactNavbar'

export const ContactPage = ({handleSubmit, onInputChange, name, email, message, handleLanguage, spanish}) => {


  return (
    <>
        {
            spanish ? (
                
                <>
                <ContactNavbar 
                handleLanguage={handleLanguage}
                spanish={spanish}/>
                <ParticleBackground />
                <ContactForm handleSubmit={handleSubmit}
                    handleLanguage={handleLanguage}
                    spanish={spanish}
                    onInputChange={onInputChange}
                    name={name}
                    email={email}
                    message={message}/>
                </>
            )

            : (

                <>
                <ContactNavbar 
                handleLanguage={handleLanguage}
                spanish={spanish}/>
                <ParticleBackground />
                <ContactForm handleSubmit={handleSubmit}
                    handleLanguage={handleLanguage}
                    spanish={spanish}
                    onInputChange={onInputChange}
                    name={name}
                    email={email}
                    message={message}/>
                </>

            )
        }
        
    </>
  )
}
