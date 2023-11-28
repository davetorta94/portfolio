import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import cohete from '../images/cohete-sinbg.png'


export const Cohete = () => {

    const planetControls1 = useAnimation();

  useEffect(() => {
    const orbitAnimation1 = {
      
      //rotate: [0,-360],
      originY:'30px',
      originX:'500px',
      y: ['30px','150px'],
      x: ['-350px','-800px'],
      transition: {
        duration: 30,
        repeat: Infinity,
        ease: "linear",
        width: 2,
      } 
    };


    planetControls1.start(orbitAnimation1);
    
  }, [planetControls1]);

  return (
    <>
        <motion.div className=' col-lg-4 col-md-10 astronauta'
                    initial={{x: 0}}
                    animate={planetControls1}
                    transition={ {ease: "easeOut", duration: 2} }>
                    <img src={cohete} alt="cohete flotando en el espacio" />
        </motion.div>
    </>
  )
}
