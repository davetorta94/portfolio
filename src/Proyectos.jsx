import { Parallax } from 'react-scroll-parallax';
import todopic from './images/captura-todo.png'
import playerpic from './images/captura-reproductor.png'
import myfpic from './images/captura-myf.png'

export const Proyectos = () => {

  return (
    <>
    
   
      <div className="container-fluid fondo-hor animate__animated animate__fadeInLeft  mt-4 mx-xs-0" id='proyectos'>
      <div className="row d-flex justify-content-center mt-4 text-center text-white mb-4 pt-4">

              <h4>ALGUNOS DE MIS PROYECTOS</h4>

      </div>
      <div className="row project-images mx-xl-5 pb-5 mx-sm-4 mx-md-4">

            <div className="col-lg-12 text-white text-center mx-lg-5 mx-md-0 mt-md-2 mt-sm-2">
          <Parallax scale={[1,1.75]}>
                <h4 className='pb-2'>Web Agencia</h4>
                <a href="https://65cbb1260aab9905f227bee6--aesthetic-faloodeh-62b027.netlify.app/" target='_blank'><img src={myfpic} alt="" className='linkpic' ></img></a>
          </Parallax>
            </div>

            <div className="col-lg-4 col-md-12 text-white text-center mx-lg-5 mx-md-0 mt-md-2 mt-sm-2">
          <Parallax scale={[1,1.5]}>
                <h4 className='pb-2'>App de Tareas</h4>
                <a href="https://sparkling-panda-572dfa.netlify.app/?" target='_blank'><img src={todopic} alt="" className='linkpic' ></img></a>
          </Parallax>
            </div>
          
          <div className="col-lg-4 col-md-12 text-white text-center mx-md-5 mt-md-2 second-project-pic">
              <Parallax scale={[1,1.5]}>
              <h4 className='pb-2'>Reproductor de Música</h4>
              <a href="https://chipper-sorbet-86ac03.netlify.app/" target='_blank'><img src={playerpic} alt="" className='linkpic' ></img></a>
              </Parallax>
          </div>
      </div>
      </div>
    
    
   
    </>
  )
}

// he quitado la clase sombrita del primer div y he comentado en styles la de fondo-hor
