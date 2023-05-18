import React, { useState } from 'react';
import { Spinner } from './hooks/Spinner';
import { Comparar } from './hooks/Comparar';

export const Comparador = () => {

    const [visibilidad, setVisibilidad] = useState(false)

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
    }

    const resetearPagina = () => {
        window.location.reload();
    }   

    return (
        <>
            <br /><br />
            <div className='container'>
                <div>
                    <div className='text-center m-3'>
                        <h1>Comparador de Registros</h1>
                        <span>Compara registros entre 2 documentos..</span>
                    </div>
                    <div className="text-success">
                        <hr/>
                    </div>
                    <br />
                    <h5>Formatos Soportados: TXT & CSV</h5>
                    <br />

                    <div className='row'>
                        <div className='col-6'>
                            <h3>Insertar Archivo 1:</h3>
                            <input 
                                className='form-control'
                                type="file" 
                                id="miArchivo1" 
                                onChange={handleArchivoSeleccionado} 
                            /> 
                            <br />

                            <h3>Insertar Archivo 2:</h3>
                            <input 
                                className='form-control'
                                type="file" 
                                id="miArchivo2" 
                                onChange={handlerchivoSeleccionado2} 
                            />
                        </div>
                        
                        <div className='col-6 text-center'>
                            <img id='engranaje' src="https://firebasestorage.googleapis.com/v0/b/frontendportfolio-e949c.appspot.com/o/ComparadorRegistros%2FmichiTrabajando.gif?alt=media&token=dcf9e48c-9ebb-4dbe-bdc2-5b13c85bd8be" alt="MichiTrabajando" />
                        </div>
                    </div>
                </div>                
            </div>

            <div className='container'>
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

            <div className='container'>
                <div className='text-center m-5'>
                    <div className='svg'>
                        <h5>David Soto</h5>
                        <a                         
                            href="https://linkedin.com/in/david-soto-068716220" 
                            target="_blank">
                                <img src="https://firebasestorage.googleapis.com/v0/b/frontendportfolio-e949c.appspot.com/o/ComparadorRegistros%2Flinkedin.svg?alt=media&token=8336955c-3526-464a-a1f4-a2abb3673397" alt="Linkedin"/>
                        </a>

                        <a  
                            href="https://github.com/davidsototest/ComparadorRegistros" 
                            target="_blank">
                                <img src="https://firebasestorage.googleapis.com/v0/b/frontendportfolio-e949c.appspot.com/o/ComparadorRegistros%2Fgithub.svg?alt=media&token=8f238b03-23d6-4a96-8347-59cbc3d37de1" alt="Github"/>
                        </a>

                        <a  
                            href="https://davidsoto.page" 
                            target="_blank">
                                <img src="https://firebasestorage.googleapis.com/v0/b/frontendportfolio-e949c.appspot.com/o/ComparadorRegistros%2Fweb.svg?alt=media&token=30786a30-db96-40ef-998c-4a7bb65efe3a" alt="Github"/>
                        </a>
                    </div>                    
                </div>
            </div>
        </>
    );
}
    
