import React, { useEffect, useRef } from "react";
import {motion, useInView, useAnimation} from "framer-motion";
import profilepic from './images/fotoperfil.jpg'



export const HomeEng = () => {

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
      <div className="container-fluid home pt-sm-1 mx-0 mx-xs-0" id='home'>
      <motion.div className="row black text-white"
                    ref={ref}
                    variants={{
                      hide: { opacity: 0, y: 100},
                      nohide: { opacity: 1 ,y: 0 }
                    }}
                      initial="hide"
                      animate={pageControls}
                      transition={ {ease: "easeOut", duration: 2} }>
        <div className="col-xl-6 col-lg-12 mt-sm-5 mt-md-5 d-flex flex-column text-center justify-content-center">
              <h2>Hi! My name is David Torta</h2>
              <p>and I am a frontend developer specialized in React</p>
            </div>
            <div className="col-xl-4 col-lg-12 col-md-12 d-md-flex justify-content-md-center">
               <div className="card fondo-card sombrita">
                 <img src={profilepic} className='profilepic' alt="foto"></img>
                 <div className="card-body fondo-card text-white border-top-1">
                       <p className="card-text">David Torta Olah</p>
                     </div>
                 </div>
               </div>
        </motion.div>
      </div>

  
      </>
    )
  }

 