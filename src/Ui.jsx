import React, { useState } from 'react'
import { About } from './About'
import {AboutEng} from './AboutEng'
import { Proyectos } from './Proyectos'
import { Navbar } from './Navbar'
import { ProyectosEng } from './ProyectosEng'
import { Home } from './Home'
import { HomeEng } from './HomeEng'
import { NavbarEng } from './NavbarEng'
import {ParticleBackground} from './ParticleBackground'
import { Tecnologias } from './Tecnologias'

export const Ui = () => {

  const [spanish, setSpanish] = useState(true)


  const handleLanguage = () => {
    if (spanish){
      setSpanish(false)
    } else {
      setSpanish(true)
    }
  }

  return (
    <>  
          {
            spanish ? 
            <>
            <div className='container-fluid bg-dark'>
              <Navbar handleLanguage={handleLanguage}/>
            </div>

            <div className='container-fluid p-0'>
              <ParticleBackground />
              <Home />
              <Tecnologias />
              <Proyectos />
              <About />
            </div>
            </>
            :
            <>
            <div className='container-fluid bg-dark'>
              <NavbarEng handleLanguage={handleLanguage}/>
            </div>

            <div className='container-fluid p-0'>
            <ParticleBackground />
              <HomeEng />
              <ProyectosEng />
              <AboutEng />
            </div>
            </>
          }
        
    </>
  )
}
