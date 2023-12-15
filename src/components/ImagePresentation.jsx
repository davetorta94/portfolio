import React, { useEffect, useRef } from "react";
import {motion, useInView, useAnimation} from "framer-motion";
import profilepic from '../images/fotoperfil.jpg';


export const ImagePresentation = () => {

  const ref = useRef(null);
  const isInView = useInView(ref);
  const photoControls = useAnimation(); 

  useEffect(() => {
    if(isInView){
      photoControls.start("shown");
    } else {
      photoControls.start("hidden");
    }
  
    
  }, [isInView])
  

  return (
    <motion.div className="col-xl-4 col-lg-12 col-md-12 mb-sm-5 d-flex justify-content-center"
                ref={ref}
                variants={{
                  hidden: {opacity: 0, x: 100},
                  shown: {opacity: 1, x: 0},
                }}
                initial="hidden"
                animate={photoControls}
                transition={ {ease: "easeOut", duration: 2} }>
               <div>
                 <img src={profilepic} className='profilepic' alt="foto"></img>
                    {/*<div className="card-body fondo-card text-white border-top-1">
                       <p className="card-text">David Torta Olah</p>
                     </div>*/}
                 </div>
    </motion.div>
  )
}
