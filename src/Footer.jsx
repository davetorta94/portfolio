import { IconContext } from "react-icons"
import { GoMarkGithub } from "react-icons/go";
import { IoLogoLinkedin } from "react-icons/io";

export const Footer = () => {
  return (
    <div className="container-fluid">
        <div className="row text-light d-flex justify-content-center mt-4">
            <h4>ENLACES DE INTERÉS</h4>
        </div>
        <div className="row fondo-card text-light justify-content-center mt-2 sombrita animate__animated animate__slideInDown sombrita">
          <div className="col-1">
                <a href="https://github.com/davetorta94" target='_blank'><IconContext.Provider value={{size: "2em"}}><GoMarkGithub /></IconContext.Provider></a>
            </div>
          <div className="col-1">
            <a href="https://www.linkedin.com/in/david-torta-olah-b50b4819b/" target='_blank'><IconContext.Provider value={{size: "2em"}}><IoLogoLinkedin /></IconContext.Provider></a>
            </div>
        </div>
    </div>
  )
}
