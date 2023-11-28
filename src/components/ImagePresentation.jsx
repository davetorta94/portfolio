import React from 'react';
import profilepic from '../images/fotoperfil.jpg';


export const ImagePresentation = () => {
  return (
    <div className="col-xl-4 col-lg-12 col-md-12 d-md-flex justify-content-md-center">
               <div>
                 <img src={profilepic} className='profilepic' alt="foto"></img>
                    {/*<div className="card-body fondo-card text-white border-top-1">
                       <p className="card-text">David Torta Olah</p>
                     </div>*/}
                 </div>
    </div>
  )
}
