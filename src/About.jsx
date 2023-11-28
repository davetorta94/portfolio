import React, { useEffect, useRef } from "react";
import {motion, useInView, useAnimation} from "framer-motion";
import { IconContext } from "react-icons"
import { GoMarkGithub } from "react-icons/go";
import { IoLogoLinkedin } from "react-icons/io";
import { ImagePresentation } from "./components/ImagePresentation";


export const About = () => {

  const ref = useRef(null);
    const isInView = useInView(ref);
    const aboutControls = useAnimation();

    useEffect(() => {
      if (isInView) {
       aboutControls.start("nohide");
       
      } else {
       aboutControls.start("hide");
      }
     }, [isInView])

  return (
    <>
    <motion.div className="container-fluid mt-5 mx-xs-0"
    ref={ref}
    variants={{
      hide: { opacity: 0, y: 100, scale:0.5},
      nohide: { opacity: 1 ,y: 0, scale: 1 }
    }}
      initial="hide"
      animate={aboutControls}
      transition={ {ease: "easeOut", duration: 1} }>
        <div className="row text-white d-flex justify-content-center animate__animated animate__slideInDown">
            <h4>SOBRE MÍ</h4>
        </div>

        <div className="row bg-about text-white d-flex justify-content-around mt-2 mb-5 pt-2 sombrita animate__animated animate__slideInDown" id="sobremi">
          <div className="col-lg-4 col-md-8 col-sm-10 pt-2"><p>Me llamo David Torta. <br /> <br /> Mi experiencia con el desarrollo web comienza con la pandemía, momento en el que me apunté a un curso de programación financiado por la Unión Europea. Fue entonces cuando descubrí mi pasión por este mundillo, y desde entonces he estado formándome en él.</p> <br /> <p>Antes de ello me licencié en el Grado de Publicidad y Relaciones Públicas de la Universidad de Alicante, ya que antes de descubrir la programación, queria dedicarme a la comunicación. <br /> <br /> Gracias a los conocimientos que adquirí en la carrera, más los que he ido sumando a mi repertorio a través de los cursos de programación y la práctica, creo que puedo ser una buena baza para cualquier empresa, ya que no solo puedo adaptar los mensajes y el contenido de las webs al target, sino que además puedo también materializar estas páginas, utilizando HTML5, CSS, JavaScript, Bootstrap y React. Este portfolio está hecho con Bootstrap y React <br /><br /> Actualmente me estoy formando en Node.js y MERN</p>
          </div>
          <ImagePresentation />
        </div>
    </motion.div>
            
        
            
    </>
  )
}
 