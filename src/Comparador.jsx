import React, { useRef, useState } from 'react';
import { Comparar } from './hooks/Comparar';
import 'animate.css';

export const Comparador = () => {
    const endOfPageRef = useRef(null);
    const [visibilidad, setVisibilidad] = useState(false);
    const [archivo1, setArchivo1] = useState(null);
    const [archivo2, setArchivo2] = useState(null);  

    const handleArchivoSeleccionado = (event) => {
        const archivoSeleccionado = event.target.files[0];
            if(archivoSeleccionado.type === 'text/csv' || archivoSeleccionado.type === 'text/plain'){
                setArchivo1(archivoSeleccionado);
            } 
            else{
                alert("las unicas extenciones aceptadas son: TXT & CSV");
            }
    };

    const handlerchivoSeleccionado2 = (event) => {
        const archivoSeleccionado2 = event.target.files[0];
            if(archivoSeleccionado2.type === 'text/csv' || archivoSeleccionado2.type === 'text/plain'){
                setArchivo2(archivoSeleccionado2);
            } 
            else{
                alert("las unicas extenciones aceptadas son: TXT & CSV");
            }
    };

    const visibilidadResultados = () => {
        setVisibilidad(true);
        
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
            <br /><br />
            <div className='container'>
                <div>
                    <div className='text-center m-3 animate__animated animate__rubberBand'>
                        <h1>Comparador de Registros</h1>
                        <span>Compara registros entre 2 documentos..</span>
                    </div>
                    <div className="text-success">
                        <hr/>
                    </div>
                    <br />
                    <h5 className='animate__animated animate__backInLeft'>Formatos Soportados: TXT & CSV</h5>
                    <br />

                    <div className='row'>
                        <div className='col-6'>
                            <h3 className='animate__animated animate__backInLeft'>Insertar Archivo 1:</h3>
                            <input 
                                className='form-control animate__animated animate__backInLeft '
                                type="file" 
                                id="miArchivo1" 
                                onChange={handleArchivoSeleccionado} 
                            /> 
                            <br />

                            <h3 className='animate__animated animate__backInLeft animate__faster'>Insertar Archivo 2:</h3>
                            <input 
                                className='form-control animate__animated animate__backInLeft animate__faster'
                                type="file" 
                                id="miArchivo2" 
                                onChange={handlerchivoSeleccionado2} 
                            />
                        </div>
                        
                        <div className='col-6 text-center animate__animated animate__flash'>
                            <img id='engranaje' src="https://firebasestorage.googleapis.com/v0/b/comparadorregistros.appspot.com/o/ComparadorRegistros%2FmichiTrabajando.gif?alt=media&token=589fe6f1-1b8e-4885-88ef-b9464c819816" alt="MichiTrabajando" />
                        </div>
                    </div>
                </div>                
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
                    <hr className='' />
                </div>
            </div>
            
            <div className='m-3'>
                {(visibilidad) && (<Comparar archivo1={archivo1} archivo2={archivo2}/>)}
            </div>

            <div className='container animate__animated animate__backInUp'>
                <div className='text-center m-5'>
                    <div className='svg'>
                        <h5>David Soto</h5>
                        <a                         
                            href="https://linkedin.com/in/david-soto-068716220" 
                            target="_blank">
                                <img src="https://firebasestorage.googleapis.com/v0/b/comparadorregistros.appspot.com/o/ComparadorRegistros%2Flinkedin.svg?alt=media&token=a86cf294-fbf0-4688-b332-d8e97770f624" alt="Linkedin"/>
                        </a>

                        <a  
                            href="https://github.com/davidsototest/ComparadorRegistros" 
                            target="_blank">
                                <img src="https://firebasestorage.googleapis.com/v0/b/comparadorregistros.appspot.com/o/ComparadorRegistros%2Fgithub.svg?alt=media&token=06f70328-e3c8-4412-b230-3f8d1fd05fe7" alt="Github"/>
                        </a>

                        <a  
                            href="https://davidsoto.page" 
                            target="_blank">
                                <img src="https://firebasestorage.googleapis.com/v0/b/comparadorregistros.appspot.com/o/ComparadorRegistros%2Fweb.svg?alt=media&token=9278afac-0628-4635-b9e8-de3b4cacf893" alt="Portfolio"/>
                        </a>
                    </div>                    
                </div>
            </div>
            
        </>
    );
}
    
