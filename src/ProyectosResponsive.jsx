//import { Parallax } from 'react-scroll-parallax';
import amandapic from './images/captura-web-amanda-weslyn.webp'
import myfpic from './images/captura-myf.webp'
import { Link } from 'react-router-dom'

export const ProyectosResponsive = () => {
  return (
    <>
    
   
      <div className="container-fluid fondo-hor mt-4 mx-xs-0" id='proyectos'>
      <div className="row d-flex justify-content-center mt-4 text-center text-white mb-4 pt-4">

              <h4>ALGUNOS DE MIS PROYECTOS</h4>

      </div>
      <div className="row project-images mx-xl-5 pb-5 mx-sm-4 mx-md-4">

            <div className="col-lg-12 text-white text-center mx-lg-5 mx-md-0 mt-md-3 mt-sm-3 pt-2">
          
                <h4 className='pb-2'>Agencia Marketing</h4>
                <a href="https://myf-agency.netlify.app/" target='_blank'><img src={myfpic} alt="" className='linkpic' ></img></a>
          
            </div>

            <div className="col-lg-12 col-md-12 text-white text-center mx-lg-5 mx-md-0 mt-md-3 mt-sm-3">
          
                <Link to="/detour">
                    <h4 className='pb-2 text-white'>Artista Amanda Weslyn</h4>
                    <a href="#" target='_blank'><img src={amandapic} alt="captura enlace a web de cantante Amanda Weslyn" className='linkpic' ></img></a>
                </Link>
          
            </div>
          
          
          
      </div>
      </div>
    
    
   
    </>
  )
}
