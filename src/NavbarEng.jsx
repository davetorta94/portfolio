

export const NavbarEng = ({handleLanguage}) => {
  

    return (
      <div className="row">
        <nav className="navbar navbar-dark bg-dark fixed-top navbarwidth">
        <div className="container-fluid d-flex justify-content-center">
          <div className="col-4">
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
          <button className="navbar-toggler boton-responsive" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="col-1 p-0 responsive-navbar">
            <button className="button" onClick={handleLanguage}>ESP</button>
          </div>
          
  
        </div>
      </nav>
      </div>
    )
  }