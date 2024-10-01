import React, { useEffect, useRef } from "react";
import {motion, useInView, useAnimation} from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { ImagePresentation } from "./components/ImagePresentation";


export const Home = () => {

    const ref = useRef(null);
    const isInView = useInView(ref);
    const pageControls = useAnimation();
   

    useEffect(() => {
      if (isInView) {
       pageControls.start("nohide");
       
      } else {
       pageControls.start("hide");
      }
     }, [isInView])

  return (
    <>
    <div className="container-fluid pt-sm-1 mt-5" id='inicio'>

        

        <motion.div className="row home black text-white d-flex justify-content-center"
                    ref={ref}
                    variants={{
                      hide: { opacity: 0},
                      nohide: { opacity: 1}
                    }}
                      initial="hide"
                      animate={pageControls}
                      transition={ {ease: "easeOut", duration: 2} }>
            <motion.div className="type-animation col-xl-6 col-lg-12 d-flex flex-column text-center justify-content-center">

              <div className="animacion-grande">
                <h2>
                    <TypeAnimation
                      style={{
                        display: 'block',
                        height: '100px',
                        marginBottom: '0px',
                        paddingBottom: '0px',
                      }}
                      sequence={[
                        "¡Hola! Me llamo David Torta",
                        1000,
                        "y soy desarrollador web",
                        1000,
                        "¿En que puedo ayudarte?",
                        1000,
                      ]}
                      speed={50}
                      
                      className="type-animation-font"
                    />
                </h2>
              </div>

              <div className="animacion-responsive">
                <h4>
                    <TypeAnimation
                      style={{
                        display: 'block',
                        height: '100px',
                        marginTop: '100px',
                        
                      }}
                      sequence={[
                        "¡Hola! Me llamo David Torta",
                        1000,
                        "y soy desarrollador web",
                        1000,
                        "¿En qué puedo ayudarte?",
                        1000,
                      ]}
                      speed={50}
                      
                      className="type-animation-font"
                    />
                </h4>
              </div>
            
              
  
            </motion.div>
            
            <ImagePresentation />
           
             
            
        </motion.div>
        <div className="row punto"> 

          {/* <Star />*/}    
         {/* <ResponsiveStar />*/}
          {/*<MobileStar />*/}
        </div>
      </div>
    

    </>
  )
}

