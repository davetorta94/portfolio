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
    <div className="container-fluid pt-sm-1 mx-0 mx-xs-0" id='home'>

        <motion.div className="row home black text-white d-flex justify-content-center"
                    ref={ref}
                    variants={{
                      hide: { opacity: 0},
                      nohide: { opacity: 1}
                    }}
                      initial="hide"
                      animate={pageControls}
                      transition={ {ease: "easeOut", duration: 2} }>
            <div className="col-xl-6 col-lg-12 mt-sm-5 mt-md-5 d-flex flex-column text-center justify-content-center">
            <TypeAnimation
                      sequence={[
                        "¡Hola! Me llamo David Torta",
                        1000,
                        "y soy un programador de front-end especializado en React",
                        1000,
                        "¿En que puedo ayudarte?",
                        1000,
                      ]}
                      speed={50}
                      
                      className="type-animation-font"
                    />
              
              {/*<h2>¡Hola! Me llamo David Torta</h2>
              <p>y soy un programador de front-end especializado en React</p>*/}
            </div>
            {/*<ImagePresentation />*/}
        </motion.div>
      </div>
    

    </>
  )
}

