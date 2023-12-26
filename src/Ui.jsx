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
import { Draw } from './Draw'
import { Footer } from './Footer'
import { ResponsiveTechnologies } from './ResponsiveTechnologies'
import { MobileTechonologies } from './MobileTechonologies'
import { Technologies } from './Technologies'
import { EngResponsiveTechnologies } from './EngResponsiveTechnologies'
import { EngMobileTechonologies } from './EngMobileTechnologies'

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

            <div className='container-fluid p-0 responsive-background'>
              <div className='particles'>
              <ParticleBackground />
              </div>
              <Home />
              <Tecnologias/>
              <ResponsiveTechnologies />
              <MobileTechonologies />
              <About />
              <Proyectos />
              <Footer />
            </div>
            </>
            :
            <>
            <div className='container-fluid bg-dark'>
              <NavbarEng handleLanguage={handleLanguage}/>
            </div>

            <div className='container-fluid p-0 responsive-background'>
            <div className='particles'>
              <ParticleBackground />
              </div>
              <HomeEng />
              <Technologies />
              <EngResponsiveTechnologies />
              <EngMobileTechonologies />
              <AboutEng />
              <ProyectosEng />
              <Footer />
            </div>
            </>
          }
        
    </>
  )
}
