import profilepic from './images/fotoperfil.jpg'
import { IconContext } from "react-icons"
import { GoMarkGithub } from "react-icons/go";
import { IoLogoLinkedin } from "react-icons/io";


export const About = () => {
  return (
    <>
    <div className="container-fluid mt-5 mx-xs-0">
        <div className="row text-white d-flex justify-content-center animate__animated animate__slideInDown">
            <h4>SOBRE MÍ</h4>
        </div>

        <div className="row fondo-hor text-white d-flex justify-content-center mt-2 mb-5 pt-2 sombrita animate__animated animate__slideInDown" id="sobremi">
          <div className="col-lg-4 col-md-8 col-sm-10 pt-2"><p>Me llamo David Torta. <br /> <br /> Mi experiencia con el desarrollo web comienza con la pandemía, momento en el que me apunté a un curso de programación financiado por la Unión Europea. Fue entonces cuando descubrí mi pasión por este mundillo, y desde entonces he estado formándome en él.</p> <br /> <p>Antes de ello me licencié en el Grado de Publicidad y Relaciones Públicas de la Universidad de Alicante, ya que antes de descubrir la programación, queria dedicarme a la comunicación. <br /> <br /> Gracias a los conocimientos que adquirí en la carrera, más los que he ido sumando a mi repertorio a través de los cursos de programación y la práctica, creo que puedo ser una buena baza para cualquier empresa, ya que no solo puedo adaptar los mensajes y el contenido de las webs al target, sino que además puedo también materializar estas páginas, utilizando HTML5, CSS, JavaScript, Bootstrap y React. Este portfolio está hecho con Bootstrap y React <br /><br /> Actualmente me estoy formando en Node.js y MERN</p>
          </div>
        </div>
    </div>
            
        <div className="container">
        <div className="row text-white d-flex justify-content-center mt-4">
            <h4>ENLACES DE INTERÉS</h4>
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
 