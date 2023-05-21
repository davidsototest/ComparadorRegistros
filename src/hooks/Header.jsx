import React from 'react'

export const Header = () => {

  return (
    <>
        <header className='header'>
            <div className='container'>
                <div className='text-center m-3 animate__animated animate__rubberBand'>
                    <h1><span>Comparador de <span className='colorTitulo'>Registros</span></span></h1>
                    <span>Comparación de registros entre 2 documentos</span>
                </div>
                
            </div>
                <div className="text-success">
                    <hr className='border border-primary border-1 opacity-30'/>
                </div>
        </header>
    </>
  )
}
