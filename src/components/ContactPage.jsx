import React from 'react'
import { Navbar } from '../Navbar'
import { ParticleBackground } from '../ParticleBackground'
import { ContactForm } from './ContactForm'
import { NavbarEng } from '../NavbarEng'

export const ContactPage = ({handleSubmit, onInputChange, name, email, message, handleLanguage, spanish}) => {


  return (
    <>
        {
            spanish ? (
                
                <>
                <Navbar 
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
                <NavbarEng 
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
