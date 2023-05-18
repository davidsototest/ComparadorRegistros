import React, { useState } from 'react';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';
// import { compareFiles } from './compara';

export const Comparador = () => {

    const [loading, setLoading] = useState(false);

    const [archivo, setArchivo] = useState(null);
    const [archivo2, setArchivo2] = useState(null);
    const [doc1, setDoc1] = useState([]);
    const [doc2, setDoc2] = useState([]);
    let docRegistros1 = doc1.length;
    let docRegistros2 = doc2.length;

    const [cantidad1, setCantidad1] = useState(0);
    const [cantidad2, setCantidad2] = useState(0);

    // const [repetidos1, setRepetidos1] = useState([]);
    // const [repetidos2, setRepetidos2] = useState([]);
    // let repetidosUno = repetidos1.length;
    // let repetidosDos = repetidos2.length;
    

    const handleArchivoSeleccionado = (event) => {
        const archivoSeleccionado = event.target.files[0];
            if(archivoSeleccionado.type === 'text/csv' || archivoSeleccionado.type === 'text/plain'){
                setArchivo(archivoSeleccionado);
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

        let missingIn1 = [];
        let missingIn2 = [];
        let lines1 = [];
        let lines2 = [];

    //toda la logica de la app
        const compareFiles = () => {
            setLoading(true);
            // Lee el contenido de ambos archivos
            const reader = new FileReader();
            reader.readAsText(archivo);
            reader.onload = () => {
              const content1 = reader.result;
              const reader2 = new FileReader();
              reader2.readAsText(archivo2);
              reader2.onload = () => {
                const content2 = reader2.result;
          
                // Separa el contenido de ambos archivos por líneas
                lines1 = content1.split('\n');
                lines2 = content2.split('\n');
          
                // Verifica si todos los registros del archivo 1 están en el archivo 2
                // const missingIn2 = [];
                for (let i = 0; i < lines1.length; i++) {
                  if (!lines2.includes(lines1[i])) {
                    setCantidad1(prevCantidad => prevCantidad + 1);
                    setDoc1(prevDoc1 => [...prevDoc1, lines1[i]]);
                  } else{setCantidad1(prevCantidad => prevCantidad + 1);}
                //   else{
                //     setRepetidos1(prevRepetidos1 => [...prevRepetidos1, lines1[i]]);
                //   }
                }
          
                // Verifica si todos los registros del archivo 2 están en el archivo 1
                // const missingIn1 = [];
                for (let i = 0; i < lines2.length; i++) {
                  if (!lines1.includes(lines2[i])) {
                    setCantidad2(prevCantidad => prevCantidad + 1);
                    setDoc2(prevDoc2 => [...prevDoc2, lines2[i]]);
                  } else{setCantidad2(prevCantidad => prevCantidad + 1);}
                //   else {}
                //   else{
                //     setRepetidos2(prevRepetidos2 => [...prevRepetidos2, lines2[i]]);
                //   }
                }
                setLoading(false);
          
                // Devuelve los registros faltantes en cada archivo
                // console.table(`archivo 1: ${doc1}`);
                // console.table(`archivo 2: ${missingIn2}`);
                // console.log(missingIn1.length);
        
                // const doc1 = lines1.length();
                // const doc2 = lines2.length();
        
                // return (
                //     {
                //         missingIn1: missingIn1,
                //         missingIn2: missingIn2
                //     }
                            
                // )
                            
                            
                          
                };
            }
          }

          const resetearPagina = () => {
            window.location.reload();
          }
    
          const override = css`
            display: block;
            margin: 0 auto;
            border-color: red;
            `;

   

    return (
        <>
            <br /><br />
            <div className='container'>
                <div>
                    <h1>Comparador de archivos</h1>
                    <div className="text-success">
                        <hr className='border border-danger border-2 opacity-50' />
                    </div>

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
                        </div>
                        
                        <div className='col-6'>
                            <h3>Insertar Archivo 2:</h3>
                            <input 
                                className='form-control'
                                type="file" 
                                id="miArchivo2" 
                                onChange={handlerchivoSeleccionado2} 
                            />
                        </div>
                    </div>
                </div>                
            </div>

            <div className='container'>
                <div className='col text-center mt-4'>
                    <button 
                        className='btn btn-primary px-4 m-3'
                        onClick={compareFiles}
                        >
                        COMPARAR
                    </button>

                    <button 
                        className='btn btn-outline-secondary px-3'
                        onClick={resetearPagina}
                    >
                       Reset
                    </button>
                    <br /><br /><br />
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col text-center'>
                        {(loading) && (<img id='engranaje' src="src\assets\work.gif" alt="" />)}
                        <br />
                        {(loading) && (<h5>Trabajando, Por favor espere . . .</h5>)}
                        <br />
                        <ClipLoader color="#123abc" loading={loading} css={override} size={35} />
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className="text-success">
                    <hr className='border border-danger border-2 opacity-50' />
                </div>
            </div><br />
            

                <div className='m-3'>
                    <div className='card mb-5'>
                        <div className='row m-3'>
                            <div className='col'>
                                <h3>Documento 1</h3>
                                <h6>Cant. registros totales: {cantidad1}</h6>
                                <h6>Cant. de Registros no encontrados: {docRegistros1}</h6>
                                <h6>Lista No encontrados:</h6>
                                <ul>
                                    {doc1.map((item, index) => (
                                        <li key={index}>{item}</li>
                                ))}
                                </ul>
                            
                            <br /><br />

                        {/* <h4>Registros repetidos: {repetidosUno}</h4>
                        <h5>Lista:</h5>
                            <ol>
                                {repetidos1.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ol> */}
                            </div>
                

                        <div className='col'>
                            <h3>Documento 2</h3>
                            <h6>Cant. registros totales: {cantidad2}</h6>
                            <h6>Cant. de Registros no encontrados: {docRegistros2}</h6>
                            <h6>Lista No encontrados:</h6>
                            <ul>
                                {doc2.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        
                        <br /><br />

{/*                         
                        <h4>Registros repetidos: {repetidosDos}</h4>
                        <h5>Lista:</h5>
                            <ol>
                                {repetidos2.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ol> */}
                    </div>

             </div>
        </div>
    </div>


           
        </>
    );
}
    
