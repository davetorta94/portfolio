import { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Ui } from '../Ui'
import { ContactPage } from '../components/ContactPage'
import { useForm } from '../hooks/useForm'


const contactFields = {
    name: '',
    email: ''
  }



export const AppRouter = () => {

    const [spanish, setSpanish] = useState(true);

    const {onInputChange, name, email} = useForm(contactFields);




 const handleLanguage = () => {
   if (spanish){
     setSpanish(false)
   } else {
     setSpanish(true)
   }
 }

    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) =>{
        e.preventDefault();
        setSubmitted(true);     
    }



  return (
    <>
    
    <Routes>

            <Route path='/' element={ <Ui handleLanguage={handleLanguage} spanish={spanish}/>}/>
            <Route path="/contact" element={<ContactPage handleSubmit={handleSubmit} handleLanguage={handleLanguage} spanish={spanish} submitted={submitted} onInputChange={onInputChange} name={name} email={email}/>} />

    </Routes>
    
    
    
    </>
)
}
