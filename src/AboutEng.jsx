import React, { useEffect, useRef } from "react";
import {motion, useInView, useAnimation} from "framer-motion";



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
        <div className="row text-white d-flex justify-content-center animate__animated animate__slideInDown">
            <h4>ABOUT ME</h4>
        </div>

        <div className="row bg-about text-white d-flex justify-content-around mt-2 mb-5 pt-2 sombrita animate__animated animate__slideInDown" id="sobremi">
          <div className="col-lg-4 col-md-8 col-sm-10 pt-2"><p>My name is David Torta. <br /> <br />
            My experience with web development begins with the pandemic, when I signed up for a programming course funded by the European Union. It was then when I discovered my passion for this world, and since then I have been training in it.
            <br /><br />
            Before that I graduated in Advertising and Public Relations at the University of Alicante, because before discovering programming, I wanted to dedicate myself to communication. <br /> <br />
            Thanks to the knowledge I acquired in my degree, plus the ones I have been adding to my repertoire through programming courses and practice, I think I can be a good asset for any company, since I can not only adapt the messages and content of the webs to the target, but I can also materialize these pages, using HTML5, CSS, JavaScript, Bootstrap and React. This portfolio has been made with Bootstrap and React.</p>
            </div>
        
          {/*<ImagePresentation />*/}
        </div>
    </motion.div>
            
        
            
    </>
  )
}
 

