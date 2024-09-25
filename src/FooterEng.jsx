import { IconContext } from "react-icons"
import { GoMarkGithub } from "react-icons/go";
import { IoLogoLinkedin } from "react-icons/io";
import { SiGmail } from "react-icons/si";

export const FooterEng = () => {
  return (
    <div className="container-fluid">

        <div className="row">
          <div className="col-12 d-flex justify-content-center text-center text-white pt-5 px-0 pb-2">
            <h2>Contact</h2>
          </div>
        </div>
        
        <div className="row fondo-card text-light justify-content-around mt-2 sombrita animate__animated animate__slideInDown sombrita">
          <div className="col-1">
                <a href="https://github.com/davetorta94" target='_blank'>
                <IconContext.Provider value={{size: "2em"}}>
                  <GoMarkGithub />
                </IconContext.Provider></a>
            </div>
          <div className="col-1">
            <a href="https://www.linkedin.com/in/david-torta-olah-b50b4819b/" target='_blank'>
            <IconContext.Provider value={{size: "2em"}}>
              <IoLogoLinkedin />
            </IconContext.Provider></a>
          </div>
          <div className="col-1">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=david.torta.olah@gmail.com&su=Shall%20we%20work%20together?&body=Hi,%20I%20would%20like%20to%20contact%20you." target='_blank'>
            <IconContext.Provider value={{size: "2em"}}>
                <SiGmail />
            </IconContext.Provider></a>
          </div>
        </div>
    </div>
  )
}