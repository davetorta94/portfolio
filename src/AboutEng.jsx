import { IconContext } from "react-icons"
import { GoMarkGithub } from "react-icons/go";
import { IoLogoLinkedin } from "react-icons/io";


export const AboutEng = () => {
  return (
    <>

      <div className="container-fluid mt-5">
        <div className="row text-white d-flex justify-content-center animate__animated animate__slideInDown">
            <h4>ABOUT ME</h4>
        </div>

        <div className="row fondo-hor text-white d-flex justify-content-center mt-2 mb-5 sombrita animate__animated animate__slideInDown" id="sobremi">
          <div className="col-lg-4 col-md-8 col-sm-10 pt-2"><p>My name is David Torta. <br /> <br />
            My experience with web development begins with the pandemic, when I signed up for a programming course funded by the European Union. It was then when I discovered my passion for this world, and since then I have been training in it.
            <br /><br />
            Before that I graduated in Advertising and Public Relations at the University of Alicante, because before discovering programming, I wanted to dedicate myself to communication. <br /> <br />
            Thanks to the knowledge I acquired in my degree, plus the ones I have been adding to my repertoire through programming courses and practice, I think I can be a good asset for any company, since I can not only adapt the messages and content of the webs to the target, but I can also materialize these pages, using HTML5, CSS, JavaScript, Bootstrap and React. This portfolio has been made with Bootstrap and React <br /> <br /> Currently I am learning Node.js and MERN</p>
            </div>
        </div>
      </div>
    
        <div className="container">
        <div className="row text-white d-flex justify-content-center mt-4">
            <h4>PROFESSIONAL LINKS</h4>
        </div>
        <div className="row bg-dark text-white justify-content-center mt-2 sombrita animate__animated animate__slideInDown sombrita">
          <div className="col-1">
                <a href="https://github.com/davetorta94" target='_blank'><IconContext.Provider value={{size: "2em"}}><GoMarkGithub /></IconContext.Provider></a>
            </div>
          <div className="col-1">
            <a href="https://www.linkedin.com/in/david-torta-b50b4819b/" target='_blank'><IconContext.Provider value={{size: "2em"}}><IoLogoLinkedin /></IconContext.Provider></a>
            </div>
        </div>
    </div>
        
            
            
    </>
  )
}