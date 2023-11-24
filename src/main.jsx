import React from 'react'
import ReactDOM from 'react-dom/client'
import { ParallaxProvider} from 'react-scroll-parallax';
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>,
)
