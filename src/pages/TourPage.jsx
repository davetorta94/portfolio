import { useParams } from 'react-router-dom';
import { ParticleBackground } from '../ParticleBackground'
import { ContactNavbar } from '../components/ContactNavbar'
import { Cellphone } from '../components/Cellphone';

export const TourPage = ({ projects, handleLanguage, spanish }) => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!id) {
    return <h2>Selecciona un proyecto para ver los detalles.</h2>;
  }

  if (!project) {
    return <h2>Proyecto no encontrado</h2>;
  }

  return (
    <>
    <ContactNavbar 
                    handleLanguage={handleLanguage}
                    spanish={spanish} />

    <ParticleBackground />

    <div className='container-fluid d-flex justify-content-center'>
        
        <div className='row'>
          
              <div className="col-12 d-flex flex-column mt-5 pt-5 align-items-center">
                <Cellphone project={project} spanish={spanish}/>
              </div>
            
           
          
        
        </div>
      </div>
    </>
  );
};

{/*<div className="row">
              <div className="col-12 d-flex flex-column mt-5 pt-5 align-items-center">
                  <h1 className='text-light'>{project.name}</h1>
                  <img src={myfgif} alt="gif" className='gif'/>
                  <p><a href={project.url} target="_blank" rel="noopener noreferrer">Visitar Proyecto</a></p>
              </div>
        </div>*/}