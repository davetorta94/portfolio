import React from "react";


export const NavbarEng = ({handleLanguage}) => {
  

    return (
      <>

      <nav className="navbar navbar-expand-lg navbar-light bg-navbar fixed-top">
            <div className="container-fluid">
              {/* Branding */}
              <a className="navbar-brand text-white" href="#">
                Portfolio David Torta Olah
              </a>
      
              {/* Responsive Toggle Button */}
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
      
              {/* Menu Items */}
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav w-100 justify-content-around">
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#projects">
                      Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#aboutmetwo">
                      About
                    </a>
                  </li>
                  {/* Language Toggle Button */}
                  <li className="nav-item text-white">
                    <button className="btn btn-primary" onClick={handleLanguage}>
                      ESP
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
      
      
          </>
    )
  }

//  <div className="container-fluid d-flex justify-content-lg-center mx-xs-0">
//  <div className="row">
//  <nav className="navbar bg-navbar fixed-top">
//  
//    <div className="col-lg-2 p-0">
//      <a className="navbar-brand" href="#">Portfolio David Torta Olah</a>
//    </div>
//    <div className="col-1 text-white responsive-navbar">
//      <a href="#home">Home</a>
//    </div>
//    <div className="col-1 text-white responsive-navbar">
//      <a href="#proyectos">Projects</a>
//    </div>
//    <div className="col-1 text-white responsive-navbar">
//      <a href="#sobremi">About</a>
//    </div>
//
//    <button className="dropdown boton-responsive button">
//      <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
//      </a>
//      <div className="dropdown-menu fondo-card">
//        <a className="dropdown-item text-white" href="#home">Home</a>
//        <a className="dropdown-item text-white" href="#proyectos">Projects</a>
//        <a className="dropdown-item text-white" href="#sobremi">About</a>
//        <button className="dropdown-item button px-3 pb-1 mx-3" onClick={handleLanguage}>ESP</button>
//      </div>
//    </button>
//    
//    <div className="col-1 p-0 responsive-navbar">
//      <button className="button" onClick={handleLanguage}>ESP</button>
//    </div>
//
//  
//</nav>
//</div>
//</div>