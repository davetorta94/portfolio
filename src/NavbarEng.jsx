

export const NavbarEng = ({handleLanguage}) => {
  

    return (
      <div className="container-fluid d-flex justify-content-lg-center mx-xs-0">
        <div className="row">
        <nav className="navbar navbar-dark bg-dark fixed-top navbarwidth">
        
          <div className="col-lg-2 p-0">
            <a className="navbar-brand" href="#">Portfolio David Torta Olah</a>
          </div>
          <div className="col-1 text-white responsive-navbar">
            <a href="#home">Home</a>
          </div>
          <div className="col-1 text-white responsive-navbar">
            <a href="#proyectos">Projects</a>
          </div>
          <div className="col-1 text-white responsive-navbar">
            <a href="#sobremi">About</a>
          </div>

          <button className="dropdown boton-responsive button">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
            </a>
            <div className="dropdown-menu bg-dark">
              <a className="dropdown-item text-white" href="#home">Home</a>
              <a className="dropdown-item text-white" href="#proyectos">Projects</a>
              <a className="dropdown-item text-white" href="#sobremi">About</a>
              <button className="dropdown-item button px-3 pb-1 mx-3" onClick={handleLanguage}>ESP</button>
            </div>
          </button>
          
          <div className="col-1 p-0 responsive-navbar">
            <button className="button" onClick={handleLanguage}>ESP</button>
          </div>
  
        
      </nav>
      </div>
      </div>
    )
  }