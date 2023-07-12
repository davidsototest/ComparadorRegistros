import React from 'react'
import ReactDOM from 'react-dom/client'
import { Comparador } from './Comparador.jsx'
import { Header } from './hooks/Header'
import { Footer } from './hooks/Footer'
import './styles/custom.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    <>
      <Header/> 
        <Comparador/>
      <Footer/>
    </>    
  </React.StrictMode>
)
