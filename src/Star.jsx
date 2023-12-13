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
          originX:'1230px',
          y: ['-600px','-600px','-100px','-100px','-600px'],
          x: ['1230px','230px','230px','1230px','1230px'],
        };
        starControls.start(starAnimation);
        
       
      } else {
        const stopAnimation = {
            y: '-600px',
            x: '1230px',
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
     

     //RECUERDA QUE LA CLASE PUNTO ES DISPLAY NONE EN 1080px
     
     

  return (
    <>
        <motion.div className="col-xl-6 col-lg-12 mt-sm-5 mt-md-5 d-flex flex-column text-center justify-content-center"
                     ref={ref}
                       initial={{  x: 1230, y: -600 }}
                       animate={starControls}
                       transition={ {ease: "easeOut", duration: 10, repeat: Infinity} }>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 1024 768"><path fill="#ccff00" d="M512 640q-139 0-257-21.5T68.5 560T0 479.5t69.5-80T256 342v-86q0-106 75-181T512 0t181 75t75 181v86q117 21 186.5 57.5t69.5 80t-68.5 80.5T769 618.5T512 640zm192-367q0-86-56-147.5T512 64t-136 61.5T320 273v68q90 43 192 43t192-43v-68zm254 349q-15 62-143 104t-303 42t-303-42T66 622q67 38 186 60t260 22t260-22t186-60z"/></svg>
        </motion.div>

        
    </>
  )
}


