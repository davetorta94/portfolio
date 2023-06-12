import profilepic from './images/fotoperfil.jpg'



export const HomeEng = () => {
    return (
      <>
      <div className="container-fluid home mt-5" id='home'>
          <div className="row black text-white animate__animated animate__fadeIn">
            <div className="col-xl-6 col-lg-12 d-flex flex-column text-center justify-content-center">
              <h2>Hi! My name is David Torta</h2>
              <p>and I am a frontend developer specialized in React</p>
            </div>
            <div className="col-xl-4 col-lg-12">
               <div className="card bg-dark sombrita">
                 <img src={profilepic} className='profilepic' alt="foto"></img>
                 <div className="card-body bg-dark text-white border-top-1">
                       <p className="card-text">David Torta Olah</p>
                     </div>
                 </div>
               </div>
            
          </div>
        </div>
      
  
      </>
    )
  }