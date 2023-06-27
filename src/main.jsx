import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import { Comparador } from './Comparador.jsx'
import { Header } from './hooks/Header'
import { Footer } from './hooks/Footer'
import './styles/custom.css';
import { LineaProgreso } from './hooks/LineaProgreso.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  
  <>
    <Header/> 
      <Comparador/>
    <Footer/>
  </>,
    
  {/* </React.StrictMode>, */}
)
