

export const Navbar = ({handleLanguage}) => {
  

  return (
    <div className="row">
      <nav className="navbar navbar-dark bg-dark fixed-top navbarwidth">
      <div className="container-fluid d-flex justify-content-center">
        <div className="col-4">
          <a className="navbar-brand" href="#">Portfolio David Torta Olah</a>
        </div>
        <div className="col-1 text-white responsive-navbar">
          <a href="#home">Inicio</a>
        </div>
        <div className="col-1 text-white responsive-navbar">
          <a href="#proyectos">Proyectos</a>
        </div>
        <div className="col-1 text-white responsive-navbar">
          <a href="#sobremi">Sobre mi</a>
        </div>

        <button className="dropdown boton-responsive button">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
        </a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#home">Inicio</a>
          <a className="dropdown-item" href="#proyectos">Proyectos</a>
          <a className="dropdown-item" href="#sobremi">Sobre mi</a>
        </div>
      </button>
        
        <div className="col-1 p-0 responsive-navbar">
          <button className="button" onClick={handleLanguage}>ENG</button>
        </div>
        
        

      </div>
    </nav>
    </div>
  )
}


//<button className="navbar-toggler boton-responsive" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//          </button>