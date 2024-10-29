import React, { useEffect, useRef } from "react";
import {motion, useInView, useAnimation} from "framer-motion";
import profilepic from '../images/fotoperfil.webp';
import { ContactButton } from "./ContactButton";


export const ImagePresentation = ({isBannerVisible, privacyAccepted}) => {

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
    <>

    
        <motion.div className="col-xl-4 col-lg-12 col-md-12 profilepic-container d-flex justify-content-center"
                      ref={ref}
                      variants={{
                        hidden: {opacity: 0, y: 100},
                        shown: {opacity: 1, y: 0},
                      }}
                      initial="hidden"
                      animate={photoControls}
                      transition={ {ease: "easeOut", duration: 2} }>
                      <div>
                       <img src={profilepic} className='profilepic' alt="foto"></img>

                       {
                        isBannerVisible ? (

                          <></>

                        )
                        :
                        (
                          <div className="mt-2 d-flex justify-content-center">
                           <ContactButton privacyAccepted={privacyAccepted}/>
                          </div>
                        )
                       }
                       
                      </div>
          </motion.div>
    

    
      
          
    
    </>
    
  )
}

// <ContactButton />