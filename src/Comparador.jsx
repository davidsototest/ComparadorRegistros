import React, { useRef, useState } from 'react';
import { Comparar } from './hooks/Comparar';
import 'animate.css';
import Swal from 'sweetalert2';

export const Comparador = () => {
    const endOfPageRef = useRef(null);
    const [visibilidad, setVisibilidad] = useState(false);
    const [archivo1, setArchivo1] = useState(null);
    const [archivo2, setArchivo2] = useState(null);  
    const [nameDoc1, setNameDoc1] = useState("Doc 1");
    const [nameDoc2, setNameDoc2] = useState("Doc 2");
    const [visibilidadImputs, setVisibilidadImputs] = useState(true);

    const handleArchivoSeleccionado = (event) => {
        const archivoSeleccionado = event.target.files[0];
            if(archivoSeleccionado.type === 'text/csv' || archivoSeleccionado.type === 'text/plain'){
                setArchivo1(archivoSeleccionado);
                setNameDoc1(archivoSeleccionado.name);
            } 
            else{
                Swal.fire({
                    title: 'Error!',
                    text: 'Las unicas extenciones soportadas son: TXT & CSV',
                    icon: 'error',
                    buttonsStyling: false,
                    confirmButtonText: 'Aceptar',
                    customClass: {
                        title: 'colorTitulo',
                        confirmButton: 'btn btn-primary m-3'
                      }
                  }).then(() => {
                    // limpio el input
                    event.target.value = '';
                  });
            }
    };

    const handlerchivoSeleccionado2 = (event) => {
        const archivoSeleccionado2 = event.target.files[0];
            if(archivoSeleccionado2.type === 'text/csv' || archivoSeleccionado2.type === 'text/plain'){
                setArchivo2(archivoSeleccionado2);
                setNameDoc2(archivoSeleccionado2.name);
            } 
            else{
                Swal.fire({
                    title: 'Error!',
                    text: 'Las unicas extenciones soportadas son: TXT & CSV',
                    icon: 'error',
                    buttonsStyling: false,
                    confirmButtonText: 'Aceptar',
                    customClass: {
                        title: 'colorTitulo',
                        confirmButton: 'btn btn-primary m-3'
                      }
                  }).then(() => {
                    // limpio el input
                    event.target.value = '';
                  });
            }
    };

    const visibilidadResultados = () => {
        setVisibilidad(true);
        setVisibilidadImputs(false);
        
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
          });
    }

    const resetearPagina = () => {
        window.location.reload();
    }   

    return (
        <>
            <br /><br /><br /><br /><br />
            <div className='container'>
                    
                

                {visibilidadImputs ? (
                <>
                    <br />
                    <h5 className='animate__animated animate__backInLeft'>Formatos Soportados: TXT & CSV</h5>
                    <br />

                    <div className='row ms-3'>
                    <div className='col-6'>
                        <h3 className='animate__animated animate__backInLeft'>Insertar documento <span className='colorTitulo'>1</span>:</h3>
                        <input 
                            className='form-control mb-3 animate__animated animate__backInLeft'
                            type="file" 
                            id="miArchivo1" 
                            onChange={handleArchivoSeleccionado} 
                            disabled={visibilidad} 
                        /> 
                        <br />

                        <h3 className='animate__animated animate__backInLeft animate__faster'>Insertar documento <span className='colorTitulo'>2</span>:</h3>
                        <input 
                            className='form-control animate__animated animate__backInLeft animate__faster'
                            type="file" 
                            id="miArchivo2" 
                            onChange={handlerchivoSeleccionado2}
                            disabled={visibilidad}  
                        />
                    </div>
                    
                    <div className='col-6 text-center animate__animated animate__flash'>
                        <img id='engranaje' src="https://firebasestorage.googleapis.com/v0/b/comparadorregistros.appspot.com/o/ComparadorRegistros%2Fcomparar.svg?alt=media&token=c9962d1a-71f0-4eaf-8eac-47feb9d3f898" alt="MichiTrabajando" />
                    </div>
                </div> 
            </>
                ) : null }               
            </div>

            <div className="container">
                <div className='col text-center mt-4'>
                    {(!visibilidad && archivo1 !== null && archivo2 !== null) && (
                        <button 
                            className='btn btn-primary m-3'
                            onClick={visibilidadResultados}
                        >
                            COMPARAR
                        </button>
                        )}

                        {(archivo1 !== null || archivo2 !== null) && (
                            <button 
                                className='btn btn-outline-secondary m-3'
                                onClick={resetearPagina}
                            >
                                Reset
                            </button>
                        )}
                    <br />
                </div>
            </div>

            <div className='container'>
                <div className="text-success">
                    <hr className="border border-primary border-1 opacity-30"/>
                </div>
            </div>
            
            <div className='m-3'>
                {(visibilidad) && (<Comparar archivo1={archivo1} archivo2={archivo2} nameDoc1={nameDoc1} nameDoc2={nameDoc2}/>)}
            </div>         
        </>
    );
}
    
