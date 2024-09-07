import React from "react";


export const Navbar = ({handleLanguage}) => {

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
              <a className="nav-link text-white" href="#about">
                About
              </a>
            </li>
            {/* Language Toggle Button */}
            <li className="nav-item">
              <button className="btn btn-primary" onClick={handleLanguage}>
                ENG
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>


    </>
  )
}




//{/*<div className="container-fluid d-flex justify-content-lg-center mx-xs-0">
//       <div className="row d-flex">
//        
//        <nav className="navbar bg-navbar fixed-top">
//        <div className="col-1 p-0">
//          <a className="navbar-brand" href="#">Portfolio David Torta Olah</a>
//        </div>
//        <div className="col-1 text-white responsive-navbar">
//          <a href="#inicio">Inicio</a>
//        </div>
//        <div className="col-1 text-white responsive-navbar">
//          <a href="#proyectos">Proyectos</a>
//        </div>
//        <div className="col-1 text-white responsive-navbar">
//          <a href="#sobremi">Sobre mi</a>
//        </div>
//
//        <button className="dropdown navbar-toggler boton-responsive">
//        
//            <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
//            </a>
//            <div className="dropdown-menu fondo-card">
//              <a className="dropdown-item text-white" href="#inicio">Inicio</a>
//              <a className="dropdown-item text-white" href="#proyectos">Proyectos</a>
//              <a className="dropdown-item text-white" href="#sobremidos">Sobre mi</a>
//              <a className="dropdown-item button px-3 pb-1 mx-3" href="#" role="button" onClick={handleLanguage}>ENG</a>
//        </div>
//      </button>
//        
//        <div className="col-1 p-0 responsive-navbar">
//          <button className="button" onClick={handleLanguage}>ENG</button>
//        </div>
//
//        {/** BOTON QUE APARECE CUANDO LA PANTALLA ES MUY PEQUEÑA*/}
//
//    <div className="col-12 d-flex justify-content-center">
//    <button className="dropdown navbar-toggler nav-toggler-icon mini-boton-responsive">
//        
//        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
//        </a>
//        <div className="dropdown-menu fondo-card">
//          <a className="dropdown-item text-white" href="#home">Inicio</a>
//          <a className="dropdown-item text-white" href="#proyectos">Proyectos</a>
//          <a className="dropdown-item text-white" href="#sobremi">Sobre mi</a>
//          <a className="dropdown-item button px-3 pb-1 mx-3" href="#" role="button" onClick={handleLanguage}>ENG</a>
//    </div>
//  </button>
//    </div>
//    </nav>
//        
//      
//    </div>
//    
//    </div>*/}