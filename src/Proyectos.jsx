import { Parallax } from 'react-scroll-parallax';
import todopic from './images/captura-todo.png'
import myfpic from './images/captura-myf.png'

export const Proyectos = () => {

  return (
    <>
    
   
      <div className="container-fluid fondo-hor animate__animated animate__fadeInLeft  mt-4 mx-xs-0 mb-lg-5 mb-md-0" id='proyectos'>
      <div className="row d-flex justify-content-center mt-4 text-center text-white pt-4 pb-0 mb-0">

              <h4>ALGUNOS DE MIS PROYECTOS</h4>

      </div>
      <div className="row project-images mx-xl-5 pb-5 mx-sm-4 mx-md-4 mt-5 pt-2">

            <div className="col-lg-12 text-white text-center mx-lg-5 mx-md-0 mt-md-2 pt-3">
          <Parallax scale={[1,1.5]}>
                <h4 className='pb-2'>Agencia Marketing</h4>
                <a href="https://aesthetic-faloodeh-62b027.netlify.app/" target='_blank'><img src={myfpic} alt="captura enlace de proyecto de agencia de marketing" className='linkpic' ></img></a>
          </Parallax>
            </div>

            <div className="col-lg-12 text-white text-center mx-lg-5 mx-md-0 mt-md-5 pt-3">
          <Parallax scale={[1,1.5]}>
                <h4 className='pb-2'>App de Tareas</h4>
                <a href="https://sparkling-panda-572dfa.netlify.app/?" target='_blank'><img src={todopic} alt="captura enlace de proyecto de app de tareas" className='linkpic' ></img></a>
          </Parallax>
            </div>
          
          
          
      </div>
      </div>
    
    
   
    </>
  )
}

