import React, { useEffect, useRef } from "react";
import {motion, useInView, useAnimation} from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { ImagePresentation } from "./components/ImagePresentation";
import { Cohete } from "./components/Cohete";
import { Draw } from "./Draw";
import { Star } from "./Star";
import { ResponsiveStar } from "./ResponsiveStar";


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
            <motion.div className="type-animation col-xl-6 col-lg-12 d-flex flex-column text-center justify-content-center">

              <div className="animacion-grande">
                <h2>
                    <TypeAnimation
                      sequence={[
                        "¡Hola! Me llamo David Torta",
                        1000,
                        "y soy un  front-end dev especializado en React",
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
                      sequence={[
                        "¡Hola! Me llamo David Torta",
                        1000,
                        "y soy un  front-end dev especializado en React",
                        1000,
                        "¿En que puedo ayudarte?",
                        1000,
                      ]}
                      speed={50}
                      
                      className="type-animation-font"
                    />
                </h4>
              </div>
            
              
              {/*<h2>¡Hola! Me llamo David Torta</h2>
              <p>y soy un programador de front-end especializado en React</p>*/}
            </motion.div>
            
           
              {/*<Cohete />*/}
              
              {/*<Draw />/*}
            
            {/*<ImagePresentation />*/}
        </motion.div>
        <div className="row punto"> 

           <Star />    
         {/* <ResponsiveStar />*/}
          {/*<MobileStar />*/}
        </div>
      </div>
    

    </>
  )
}

