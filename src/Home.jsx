import profilepic from './images/fotoperfil.jpg'

export const Home = () => {
  return (
    <>
    <div className="container-fluid home mt-lg-5 pt-sm-1 mx-0 mx-xs-0" id='home'>

        <div className="row black text-white">
        <div className="col-xl-6 col-lg-12 mt-sm-5 mt-md-5 d-flex flex-column text-center justify-content-center">
              <h2>¡Hola! Me llamo David Torta</h2>
              <p>y soy un programador de front-end especializado en React</p>
            </div>
            <div className="col-xl-4 col-lg-12 col-md-12 d-md-flex justify-content-md-center">
               <div className="card fondo-card sombrita">
                 <img src={profilepic} className='profilepic' alt="foto"></img>
                 <div className="card-body fondo-card text-white border-top-1">
                       <p className="card-text">David Torta Olah</p>
                     </div>
                 </div>
               </div>
        </div>
      </div>
    

    </>
  )
}

