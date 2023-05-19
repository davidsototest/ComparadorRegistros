
import React, { useEffect, useState } from 'react'
import { Spinner } from './Spinner';

export const Comparar = ({archivo1, archivo2}) => {

    const [doc1, setDoc1] = useState([]);
    const [doc2, setDoc2] = useState([]);
    const [cantidad1, setCantidad1] = useState(null);
    const [cantidad2, setCantidad2] = useState(null);
    const [loading, setLoading] = useState(false);
    const [iguales, setIguales] = useState(false);
    const [docRegistros1, setDocRegistros1] = useState(0);
    const [docRegistros2, setDocRegistros2] = useState(0);

    //toda la logica de la app
    const compareFiles = () => {
        setLoading(true);
        // Lee el contenido de ambos archivos
        const reader = new FileReader();
        reader.readAsText(archivo1);
        reader.onload = () => {
          const content1 = reader.result;
          const reader2 = new FileReader();
          reader2.readAsText(archivo2);
          reader2.onload = () => {
            const content2 = reader2.result;
      
            // Separa el contenido de ambos archivos por líneas
            const lines1 = content1.split('\n');
            const lines2 = content2.split('\n');
      
            // Verifica si todos los registros del archivo 1 están en el archivo 2
            for (let i = 0; i < lines1.length; i++) {
              if (!lines2.includes(lines1[i])) {
                setCantidad1(prevCantidad => prevCantidad + 1);
                setDoc1(prevDoc1 => [...prevDoc1, lines1[i]]);
              } else{setCantidad1(prevCantidad => prevCantidad + 1);}
            }
      
            // Verifica si todos los registros del archivo 2 están en el archivo 1
            for (let i = 0; i < lines2.length; i++) {
              if (!lines1.includes(lines2[i])) {
                setCantidad2(prevCantidad => prevCantidad + 1);
                setDoc2(prevDoc2 => [...prevDoc2, lines2[i]]);
              } else{setCantidad2(prevCantidad => prevCantidad + 1);}
            }
              setLoading(false);     
          };         
        }        
      }

      useEffect(() => {
        setDocRegistros1(doc1.length);
      }, [doc1]);
  
      useEffect(() => {
        setDocRegistros2(doc2.length);
      }, [doc2]);

      useEffect(() => {
          compareFiles();
      }, [archivo1, archivo2]);

      useEffect(() => {
        if ( loading !== true && docRegistros1 === 0 && docRegistros2 === 0 ){
          setIguales(true);
        } else{
          setIguales(false);
        } 
      }, [loading, docRegistros1, docRegistros2]);

  return (
    <>
        <div>
            {(loading) && (<Spinner/>)}            
        </div> <br />

        <div className='card text-center mb-5'>
            <div className='row m-3'>
                <div className='col'>
                    <h3>Documento 1</h3>
                    <h6>Cant. registros totales: {cantidad1}</h6>
                    <h6>Cant. de Registros no encontrados: {docRegistros1}</h6>
                    <br />
                    {
                      (docRegistros1 > 0) && (<h6>Registros No encontrados:</h6>)
                    }
                    <ul>
                        {doc1.map((item, index) => (
                            <li key={index}>{item}</li>
                    ))}
                    </ul>
                
                
                </div>


                <div className='col'>
                    <h3>Documento 2</h3>
                    <h6>Cant. registros totales: {cantidad2}</h6>
                    <h6>Cant. de Registros no encontrados: {docRegistros2}</h6>
                    <br />
                      {
                        (docRegistros2 > 0) && (<h6>Registros No encontrados:</h6>)
                      }

                    <ul>
                        {doc2.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
            
                </div>
            </div>
            <div className='container'>
              <div className='row m-3'>
                {
                  (iguales) && (<h1>Los registros en ambos documentos son iguales...!</h1>)
                }
              </div>
        </div>         
      </div>  
    </>
  )
}
