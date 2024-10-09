//import { Parallax } from 'react-scroll-parallax';
import todopic from './images/captura-todo.webp'
import myfpic from './images/captura-myf.webp'

export const ProyectosResponsive = () => {
  return (
    <>
    
   
      <div className="container-fluid fondo-hor mt-4 mx-xs-0" id='proyectos'>
      <div className="row d-flex justify-content-center mt-4 text-center text-white mb-4 pt-4">

              <h4>ALGUNOS DE MIS PROYECTOS</h4>

      </div>
      <div className="row project-images mx-xl-5 pb-5 mx-sm-4 mx-md-4">

            <div className="col-lg-12 text-white text-center mx-lg-5 mx-md-0 mt-md-3 mt-sm-3 pt-2">
          
                <h4 className='pb-2'>Web Agencia</h4>
                <a href="https://65cbb1260aab9905f227bee6--aesthetic-faloodeh-62b027.netlify.app/" target='_blank'><img src={myfpic} alt="" className='linkpic' ></img></a>
          
            </div>

            <div className="col-lg-12 col-md-12 text-white text-center mx-lg-5 mx-md-0 mt-md-3 mt-sm-3">
          
                <h4 className='pb-2'>App de Tareas</h4>
                <a href="https://sparkling-panda-572dfa.netlify.app/?" target='_blank'><img src={todopic} alt="" className='linkpic' ></img></a>
          
            </div>
          
          
          
      </div>
      </div>
    
    
   
    </>
  )
}
