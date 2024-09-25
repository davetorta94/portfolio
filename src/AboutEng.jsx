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
          <div className="col-lg-4 col-md-8 col-sm-10 pt-2 about-text"><p>Hello World! My name is David Torta. <br /> <br />
            My experience with web development began during the pandemic, when I signed up for a programming course funded by the European Union. It was then when I discovered my passion for this world, and since then I haven't stopped learning from it.
            <br /><br />
            Before that I graduated in Advertising and Public Relations at the University of Alicante, because before discovering programming, I wanted to dedicate myself fully to communication. <br /> <br />
            Thanks to the knowledge I've gained over time, whether through work, courses, or practical experience, I've reached a point where I believe I can be a valuable asset to any company or client. Not only can I tailor messages and website content to the target audience, but I can also bring these pages to life, whether using content management systems or coding, whether it's on the front-end (client-side) or back-end (server-side and databases). If you've made it this far, I appreciate you taking the time to get to know me, and if you're interested in working with me, don't hesitate to contact me via LinkedIn or Gmail (links below).</p>
            </div>
        
          {/*<ImagePresentation />*/}
        </div>
    </motion.div>
            
        
            
    </>
  )
}
 

