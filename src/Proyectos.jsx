import { Parallax } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';
import { projects } from './data/data';

export const Proyectos = () => {

  return (
    <>
    
   
      <div className="container-fluid fondo-hor animate__animated animate__fadeInLeft  mt-5 pt-5 mx-xs-0 mb-lg-5 mb-md-0" id='proyectos'>
      <div className="row d-flex justify-content-center mt-4 text-center text-white pt-4 pb-0 mb-0">

              <h2>ALGUNOS DE MIS PROYECTOS</h2>

      </div>
      <div className="row project-images mx-xl-5 pb-5 mx-sm-4 mx-md-4 mt-3 pt-2">


        {    
          projects.map((project) => (
            <div className="col-lg-12 text-white text-center mx-lg-5 mx-md-0 mt-md-2 pt-3" key={project.id}>
            <Parallax scale={[1,1.5]}>
                  <h4 className='pb-2'>{project.name}</h4>
                  <Link to={`/tour/${project.id}`} key={project.id}>
                    <img src={project.image} alt={project.alt} className='linkpic' />
                  </Link>
            </Parallax>
              </div>
          ))
          
            
        }
          
      </div>
      </div>
    
    
   
    </>
  )
}

 {/*<div className="col-lg-12 text-white text-center mx-lg-5 mx-md-0 mt-md-5 pt-3">
          <Parallax scale={[1,1.5]}>
            <Link to="/detour">
                <h4 className='pb-2 text-white'>Amanda Weslyn Artista</h4>
                <a href="#" target='_blank'><img src={amandapic} alt="captura enlace a web de cantante Amanda Weslyn" className='linkpic' ></img></a>
            </Link>
                
          </Parallax>
            </div>*/}