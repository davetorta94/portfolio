import React from 'react'
import { AppRouter } from './router/AppRouter'
import { BrowserRouter } from 'react-router-dom'
//import { Ui } from './Ui'

export const App = () => {
  return (
    <>
      <BrowserRouter>
       <AppRouter />
      </BrowserRouter>
    </>
  )
}
