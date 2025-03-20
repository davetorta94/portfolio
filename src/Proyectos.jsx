import { Parallax } from 'react-scroll-parallax';
import amandapic from './images/captura-web-amanda-weslyn.webp'
import myfpic from './images/captura-myf.webp'
import { Link } from 'react-router-dom';

export const Proyectos = () => {

  return (
    <>
    
   
      <div className="container-fluid fondo-hor animate__animated animate__fadeInLeft  mt-5 pt-5 mx-xs-0 mb-lg-5 mb-md-0" id='proyectos'>
      <div className="row d-flex justify-content-center mt-4 text-center text-white pt-4 pb-0 mb-0">

              <h2>ALGUNOS DE MIS PROYECTOS</h2>

      </div>
      <div className="row project-images mx-xl-5 pb-5 mx-sm-4 mx-md-4 mt-3 pt-2">

            <div className="col-lg-12 text-white text-center mx-lg-5 mx-md-0 mt-md-2 pt-3">
          <Parallax scale={[1,1.5]}>
                <h4 className='pb-2'>Agencia de marketing myf</h4>
                <a href="https://myf-agency.netlify.app/" target='_blank'><img src={myfpic} alt="captura enlace de proyecto de agencia de marketing" className='linkpic' ></img></a>
          </Parallax>
            </div>

            <div className="col-lg-12 text-white text-center mx-lg-5 mx-md-0 mt-md-5 pt-3">
          <Parallax scale={[1,1.5]}>
            <Link to="/detour">
                <h4 className='pb-2 text-white'>Amanda Weslyn Artista</h4>
                <a href="#" target='_blank'><img src={amandapic} alt="captura enlace a web de cantante Amanda Weslyn" className='linkpic' ></img></a>
            </Link>
                
          </Parallax>
            </div>
          
          
          
      </div>
      </div>
    
    
   
    </>
  )
}

