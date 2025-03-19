import React, { useEffect, useRef } from "react";
import {motion, useInView, useAnimation} from "framer-motion";
import { EngSkillCard } from "./components/EngSkillCard";



export const AboutEng = () => {

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
      id="aboutmetwo">
        <div className="row text-white font-weight-bold d-flex justify-content-center animate__animated animate__slideInDown mb-5">
            <h2>SKILLS</h2>
        </div>

        <EngSkillCard />

        
    </motion.div>
            
        
            
    </>
  )
}
 

