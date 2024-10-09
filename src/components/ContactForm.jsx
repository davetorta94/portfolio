import React from 'react'

export const ContactForm = ({handleSubmit, onInputChange, name, email, handleLanguage, spanish}) => {
  return (
    <>
        {
            spanish ? (

                <div className="container contenedor-formulario">

                <div className="row d-flex justify-content-center align-content-center">
                <div className='borde-formulario col-lg-10 col-sm-12'>
                      <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-lg-3 titulo-formulario d-flex justify-content-center">
                            <h4>CONTÁCTAME</h4>
                        </div>
                      </div>

                <div className='row d-flex justify-content-center'>
                    <div className="col-6 px-0 text-center">        
                    <form className='d-flex flex-column justify-content-center' id='formulario' autoComplete='on' onSubmit={handleSubmit}>
                                <input type="text" name='name' value={name} placeholder='  nombre' autoComplete='name'onChange={onInputChange} className='method-input justify-content-center'/>
                                <input type="email" name='email' value={email} placeholder='  email'  autoComplete='email'onChange={onInputChange} className='method-input justify-content-center'/>     
                                    <div className='text-white d-flex justify-content-between'>
                                  </div>
                                  <div className='d-flex justify-content-center'>
                                      <input type="submit" name='boton' className='boton-formulario mb-3' placeholder='enviar'/>
                                  </div>
                            </form> 
                    </div>
                </div>
            </div>
            </div>
             </div>

            )

            

            :

            (

            <div className="container contenedor-formulario">

                <div className="row d-flex justify-content-center align-content-center">
                <div className='borde-formulario col-lg-10 col-sm-12'>
                      <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-lg-3 titulo-formulario d-flex justify-content-center">
                            <h4>CONTACT</h4>
                        </div>
                      </div>
                
                <div className='row d-flex justify-content-center'>
                    <div className="col-6 px-0 text-center">        
                    <form className='d-flex flex-column justify-content-center' id='formulario' autoComplete='on' onSubmit={handleSubmit}>
                                <input type="text" name='name' value={name} placeholder='  name' autoComplete='name'onChange={onInputChange} className='method-input justify-content-center'/>
                                <input type="email" name='email' value={email} placeholder='  email'  autoComplete='email'onChange={onInputChange} className='method-input justify-content-center'/>     
                                    <div className='text-white d-flex justify-content-between'>
                                  </div>
                                  <div className='d-flex justify-content-center'>
                                      <input type="submit" name='boton' className='boton-formulario mb-3' placeholder='enviar'/>
                                  </div>
                            </form> 
                    </div>
                </div>
                </div>
                </div>
                </div>

            )


        }
        
    
    </>
  )
}
