import React from 'react'
import { ParticleBackground } from '../ParticleBackground'
import { ContactNavbar } from '../components/ContactNavbar'

export const DetourPage = ({spanish, handleLanguage}) => {

  return (
    <>
        <ContactNavbar 
                handleLanguage={handleLanguage}
                spanish={spanish} />
        <ParticleBackground />

        {
            spanish ?
                     <div className="container-fluid margin-per mx-xs-0">
                     <div className="row text-white d-flex justify-content-center animate__animated animate__slideInDown">
                         <h4>AVISO</h4>
                     </div>

                     <div className="row bg-about text-white d-flex justify-content-around mt-2 mb-5 pt-2 sombrita animate__animated animate__slideInDown">
                       <div className="col-lg-4 col-md-8 col-sm-10 pt-2 about-text"><p>Por decisión personal de la clienta, ésta página web permanecerá en modo mantenimiento por un tiempo limitado. Sin embargo ha concedido permiso para desactivar este modo y mostrar así su contenido bajo un periodo límitado y bajo mi supervisión.</p>
                       </div>
                     </div>
                 </div>
            :
                        <div className="container-fluid margin-per mx-xs-0">
                    <div className="row text-white d-flex justify-content-center animate__animated animate__slideInDown">
                        <h4>WARNING</h4>
                    </div>

                    <div className="row bg-about text-white d-flex justify-content-around mt-2 mb-5 pt-2 sombrita animate__animated animate__slideInDown">
                      <div className="col-lg-4 col-md-8 col-sm-10 pt-2 about-text"><p>Due to the client's personal decision, this website will remain in maintenance mode for a limited time. However, she has granted permission to temporarily disable this mode and display its content for a limited period under my supervision.</p>
                      </div>
                    </div>
                </div>
        }
        
        
    </>
  )
}
