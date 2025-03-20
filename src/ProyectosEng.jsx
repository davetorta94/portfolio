import { Parallax } from 'react-scroll-parallax';
import amandapic from './images/captura-web-amanda-weslyn.webp'
import myfpic from './images/captura-myf.webp';
import { Link } from 'react-router-dom';


export const ProyectosEng = () => {
  return (
    <>
    
    <div className="container-fluid fondo-hor animate__animated animate__fadeInLeft mt-5 mb-lg-5 mb-md-0 mx-xs-0" id='projects'>
      <div className="row d-flex justify-content-center mt-4 text-center text-white pt-4 pb-0 mb-0">

              <h2>SOME OF MY PROJECTS</h2>

      </div>
      <div className="row project-images mx-xl-5 pb-5 mx-sm-4 mx-md-4 mt-3 pt-2">

            <div className="col-lg-12 text-white text-center mx-lg-5 mx-md-0 mt-md-2 pt-3">
          <Parallax scale={[1,1.5]}>
                <h4 className='pb-2'>Marketing Agency</h4>
                <a href="https://myf-agency.netlify.app/" target='_blank'><img src={myfpic} alt="" className='linkpic' ></img></a>
          </Parallax>
            </div>

            <div className="col-lg-12 text-white text-center mx-lg-5 mx-md-0 mt-md-5 pt-3">
          <Parallax scale={[1,1.5]}>
              <Link to="/detour">
                  <h4 className='pb-2 text-white'>Artist Amanda Weslyn</h4>
                  <a href="#" target='_blank'><img src={amandapic} alt="captura enlace a web de cantante Amanda Weslyn" className='linkpic' ></img></a>
              </Link>
          </Parallax>
            </div>
          
          
          
      </div>
      </div>
        
        
    </>
  )
}

//<div className="container-fluid fondo-hor animate__animated animate__fadeInLeft  mt-4 mx-xs-0" id='projects'>
//      <div className="row d-flex justify-content-center mt-4 text-center text-white pt-4 pb-0 mb-0">
//
//              <h4>SOME OF MY PROJECTS</h4>
//
//      </div>
//      <div className="row project-images mx-xl-5 pb-5 mx-sm-4 mx-md-4 mt-5 pt-2">
//
//            <div className="col-lg-12 text-white text-center mx-lg-5 mx-md-0 mt-md-2 pt-3">
//          <Parallax scale={[1,1.5]}>
//                <h4 className='pb-2'>Marketing Agency</h4>
//                <a href="https://65cbb1260aab9905f227bee6--aesthetic-faloodeh-62b027.netlify.app/" target='_blank'><img src={myfpic} alt="" className='linkpic' ></img></a>
//          </Parallax>
//            </div>
//
//            <div className="col-lg-12 text-white text-center mx-lg-5 mx-md-0 mt-md-5 pt-3">
//          <Parallax scale={[1,1.5]}>
//                <h4 className='pb-2'>Todo App</h4>
//                <a href="https://sparkling-panda-572dfa.netlify.app/?" target='_blank'><img src={todopic} alt="" className='linkpic' ></img></a>
//          </Parallax>
//            </div>
//          
//          
//      </div>
//      </div>