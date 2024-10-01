import React, { useEffect, useRef } from "react";
import {motion, useInView, useAnimation} from "framer-motion";



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
      transition={ {ease: "easeOut", duration: 1} }
      id="sobremidos">
        <div className="row text-white d-flex justify-content-center animate__animated animate__slideInDown">
            <h4>SOBRE MÍ</h4>
        </div>

        <div className="row bg-about text-white d-flex justify-content-around mt-2 mb-5 pt-2 sombrita animate__animated animate__slideInDown">
          <div className="col-lg-4 col-md-8 col-sm-10 pt-2 about-text"><p>¡Hola que tal! Me llamo David Torta. <br /> <br /> Mi experiencia con el desarrollo web comienza con la pandemia, momento en el que me apunté a un curso de programación financiado por la Unión Europea. Fue entonces cuando descubrí mi pasión por este mundillo, y desde entonces no he parado de formarme en él.</p> <br /> <p>Antes de ello me licencié en Publicidad y Relaciones Públicas, ya que antes de descubrir la programación, queria dedicarme plenamente a la comunicación. <br /> <br /> Gracias a los conocimientos que fuí adquiriendo con el tiempo, ya fuese con trabajo, como con cursos y prácticas, he llegado a un punto en el que creo que puedo ser una buena baza para cualquier empresa o cliente, ya que no solo puedo adaptar los mensajes y el contenido de las webs al público objetivo, sino que además puedo también materializar estas páginas, ya sea con gestor de contenidos como con código, ya sea en front-end (lado del cliente), como back-end (lado del servidor y base de datos). Si has llegado hasta aquí, te agradezco el haber dedicado algo de tu tiempo en conocerme, y si te interesaria trabajar conmigo, no dudes en contactarme por LinkedIn o Gmail (enlaces abajo).</p>
          </div>
          {/*<ImagePresentation />*/}
        </div>
    </motion.div>
            
        
            
    </>
  )
}
 