

export const Navbar = ({handleLanguage}) => {
  

  return (
    <div className="container-fluid d-flex justify-content-lg-center mx-xs-0">
       <div className="row">
      <nav className="navbar navbar-dark bg-dark fixed-top navbarwidth">
        <div className="col-lg-2 p-0">
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

        <button className="dropdown boton-responsive button col-md-1">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
        </a>
        <div className="dropdown-menu bg-dark">
          <a className="dropdown-item text-white" href="#home">Inicio</a>
          <a className="dropdown-item text-white" href="#proyectos">Proyectos</a>
          <a className="dropdown-item text-white" href="#sobremi">Sobre mi</a>
          <a className="dropdown-item button px-3 pb-1 mx-3" href="#" role="button">ENG</a>
        </div>
      </button>
        
        <div className="col-1 p-0 responsive-navbar">
          <button className="button" onClick={handleLanguage}>ENG</button>
        </div>
    </nav>
    </div>
    </div>
  )
}


