import todopic from './images/captura-todo.png'
import playerpic from './images/captura-reproductor.png'

export const Proyectos = () => {
  return (
    <>
    <div className="container-fluid fondo animate__animated animate__fadeInLeft sombrita mt-4" id='proyectos'>
    <div className="row d-flex justify-content-center mt-4 text-white mb-4 pt-4">
            
            <h4>ALGUNOS DE MIS PROYECTOS</h4>
        
    </div>
    <div className="row d-flex justify-content-center mx-xl-5 pb-5 mx-sm-4 mx-md-4">
        <div className="col-lg-4 col-md-12 text-white text-center mx-md-5 mb-4">
            <h4 className='pb-2'>App de Tareas</h4>
            <a href="https://sparkling-panda-572dfa.netlify.app/?" target='_blank'><img src={todopic} alt="" className='linkpic' ></img></a>
        </div>
        <div className="col-lg-4 col-md-12 text-white text-center mx-md-5 mt-md-2 mt-sm-2">
            <h4 className='pb-2'>Reproductor de Música</h4>
            <a href="https://chipper-sorbet-86ac03.netlify.app/" target='_blank'><img src={playerpic} alt="" className='linkpic' ></img></a>
        </div>
    </div>
    </div>
        

    
        
        
    </>
  )
}

