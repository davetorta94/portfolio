import { useParams } from 'react-router-dom';
import { ParticleBackground } from '../ParticleBackground'
import { ContactNavbar } from '../components/ContactNavbar'

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

    <div>
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.alt} className='linkpic' />
      <p><a href={project.url} target="_blank" rel="noopener noreferrer">Visitar Proyecto</a></p>
    </div>
    </>
  );
};

