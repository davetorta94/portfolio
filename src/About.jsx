import React, { useEffect, useRef } from "react";
import {motion, useInView, useAnimation} from "framer-motion";
import { PresentationCard } from "./components/PresentationCard"



export const About = () => {

  //const { id, name, description, experience, icon} = skills

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
    <motion.div className="container-fluid mt-5 mb-5 pb-5 pt-5 mx-xs-0"
    ref={ref}
    variants={{
      hide: { opacity: 0, y: 100, scale:0.5},
      nohide: { opacity: 1 ,y: 0, scale: 1 }
    }}
      initial="hide"
      animate={aboutControls}
      transition={ {ease: "easeOut", duration: 1} }
      id="sobremidos">
        <div className="row text-white font-weight-bold d-flex justify-content-center animate__animated animate__slideInDown mb-5">
            <h2>SKILLS</h2>
        </div>

        <PresentationCard/>

            {/*<SkillCard />*/}
          
    </motion.div>
            
        
            
    </>
  )
}
 
//key={id} name={name} description={description} experience={experience} icon={icon}