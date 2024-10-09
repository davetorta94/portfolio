import React, { useState, useEffect } from 'react'
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
import { Footer } from './Footer'
import { ResponsiveTechnologies } from './ResponsiveTechnologies'
import { MobileTechonologies } from './MobileTechonologies'
import { Technologies } from './Technologies'
import { EngResponsiveTechnologies } from './EngResponsiveTechnologies'
import { EngMobileTechonologies } from './EngMobileTechnologies'
import { FooterEng } from './FooterEng'
import {PrivacyBanner} from './components/PrivacyBanner'
import {PrivacyBannerEng} from './components/PrivacyBannerEng'

export const Ui = ({ handleLanguage, spanish }) => {


  const [isBannerVisible, setIsBannerVisible] = useState(false);

  // Comprobar si el usuario ya ha aceptado la política de privacidad
  useEffect(() => {
    const privacyAccepted = localStorage.getItem('privacyAccepted') === 'true';
    if (!privacyAccepted) {
      setIsBannerVisible(true);
    }
  }, []);

  // Función para aceptar la política y ocultar el banner
  const acceptPrivacyPolicy = () => {
    localStorage.setItem('privacyAccepted', 'true');
    setIsBannerVisible(false);
  };

  
  

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
              <Home isBannerVisible={isBannerVisible}/>
              <Tecnologias/>
              <ResponsiveTechnologies />
              <MobileTechonologies />
              <About />
              <Proyectos />
              <Footer />
              {isBannerVisible && (
                <PrivacyBanner acceptPrivacyPolicy={acceptPrivacyPolicy} />
              )}
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
              <HomeEng isBannerVisible={isBannerVisible}/>
              <Technologies />
              <EngResponsiveTechnologies />
              <EngMobileTechonologies />
              <AboutEng />
              <ProyectosEng />
              <FooterEng />
              {isBannerVisible && (
                <PrivacyBannerEng acceptPrivacyPolicy={acceptPrivacyPolicy} />
              )}
            </div>
            </>
          }
        
    </>
  )
}
