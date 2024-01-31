import React, { useEffect, useRef } from "react";
import {motion, useInView, useAnimation} from "framer-motion";

export const NavbarEng = ({handleLanguage}) => {
  

    return (
      <div className="container-fluid d-flex justify-content-lg-center mx-xs-0">
      <div className="row">
       
       <nav className="navbar bg-navbar fixed-top">
       <div className="col-1 p-0">
         <a className="navbar-brand" href="#">Portfolio David Torta Olah</a>
       </div>
       <div className="col-1 text-white responsive-navbar">
         <a href="#home">Home</a>
       </div>
       <div className="col-1 text-white responsive-navbar">
         <a href="#projects">Projects</a>
       </div>
       <div className="col-1 text-white responsive-navbar">
         <a href="#about">About</a>
       </div>

       <button className="dropdown navbar-toggler boton-responsive">
       
           <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
           </a>
           <div className="dropdown-menu fondo-card">
             <a className="dropdown-item text-white" href="#home">Home</a>
             <a className="dropdown-item text-white" href="#projects">Projects</a>
             <a className="dropdown-item text-white" href="#aboutmetwo">About</a>
             <a className="dropdown-item button px-3 pb-1 mx-3" href="#" role="button" onClick={handleLanguage}>ESP</a>
       </div>
     </button>
       
       <div className="col-1 p-0 responsive-navbar">
         <button className="button" onClick={handleLanguage}>ESP</button>
       </div>

       {/** BOTON QUE APARECE CUANDO LA PANTALLA ES MUY PEQUEÑA*/}

   <div className="col-12 d-flex justify-content-center">
   <button className="dropdown navbar-toggler mini-boton-responsive">
       
       <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
       </a>
       <div className="dropdown-menu fondo-card">
         <a className="dropdown-item text-white" href="#home">Home</a>
         <a className="dropdown-item text-white" href="#projects">Projects</a>
         <a className="dropdown-item text-white" href="#aboutmetwo">About</a>
         <a className="dropdown-item button px-3 pb-1 mx-3" href="#" role="button" onClick={handleLanguage}>ESP</a>
   </div>
 </button>
   </div>
   </nav>
       
     
   </div>
   
   </div>
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