import React, { useEffect, useRef } from "react";
import {motion, useInView, useAnimation} from "framer-motion";

export const Star = () => {

    const ref = useRef(null);
    const isInView = useInView(ref);
    const starControls = useAnimation();

    useEffect(() => {
      if (isInView) {
        const starAnimation = {
            originY:'-600px',
          originX:'1100px',
          y: ['-600px','-600px','-330px','-330px','-600px'],
          x: ['1100px','230px','230px','1100px','1100px'],
          //transition: {
          //  duration: 10,
          //  repeat: Infinity,
          //  ease: "linear",
          //} 
        };
        starControls.start(starAnimation)
       
      } else {
        const stopAnimation = {
            y: '-600px',
            x: '1100px',
        }
       starControls.start(stopAnimation);
      }
     }, [isInView])

     //useEffect(() => {
     //   const starAnimation = {
     //       originY:'-700px',
     //     originX:'1000px',
     //     y: ['-700px','0px'],
     //     x: ['170px','170px'],
     //     transition: {
     //       duration: 10,
     //       repeat: Infinity,
     //       ease: "linear",
     //     } 
     //   };
//
     //   starControls.start(starAnimation)
     //}, [starControls])
     

     
     

  return (
    <>
        <motion.div className="punto col-xl-6 col-lg-12 mt-sm-5 mt-md-5 d-flex flex-column text-center justify-content-center"
                     ref={ref}
                       initial={{  x: 1100, y: -600 }}
                       animate={starControls}
                       transition={ {ease: "easeOut", duration: 10, repeat: Infinity} }>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2"><path d="M0 0h24v24H0z"/><path fill="#ffffff" d="M12 7a5 5 0 1 1-4.995 5.217L7 12l.005-.217A5 5 0 0 1 12 7z"/></g></svg>
        </motion.div>
    </>
  )
}
