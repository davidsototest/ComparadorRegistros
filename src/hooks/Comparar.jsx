
import React, { useEffect, useState } from 'react'
import { Spinner } from './Spinner';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LineaProgreso } from './LineaProgreso';
import { Grid, Typography } from '@mui/material';

export const Comparar = ({archivo1, archivo2, nameDoc1, nameDoc2}) => {

    const [doc1, setDoc1] = useState([]);
    const [doc2, setDoc2] = useState([]);
    const [cantidad1, setCantidad1] = useState(null);
    const [cantidad2, setCantidad2] = useState(null);
    const [loading, setLoading] = useState(false);
    const [iguales, setIguales] = useState(false);
    const [docRegistros1, setDocRegistros1] = useState(0);
    const [docRegistros2, setDocRegistros2] = useState(0);

    useEffect(() => {
      // Toda la lógica de la app
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
    
            // Proceso para comparar registros archivo 1 en el archivo 2
            let i = 0;
            const compareNextLine = () => {
              const line = lines1[i].trim();
              if (line !== "") {
                setCantidad1(prevCantidad1 => prevCantidad1 + 1);
                if (!lines2.map(l => l.trim()).includes(line)) {
                  setDoc1(prevDoc1 => [...prevDoc1, line]);
                }
              }
    
              i++;
              if (i < lines1.length) {
                // Si aún hay líneas en el archivo 1, programar la comparación de la siguiente línea
                setTimeout(compareNextLine, 0);
              } else {
                // Si ya se han comparado todas las líneas del archivo 1, actualizar el estado de carga y finalizar
              }
            };
    
            // Iniciar la comparación de líneas del archivo 1
            compareNextLine();
    
            // Proceso para comparar registros archivo 2 en el archivo 1
            let l = 0;
            const compareNextLine2 = () => {
              const line = lines2[l].trim();
              if (line !== "") {
                setCantidad2(prevCantidad2 => prevCantidad2 + 1);
                if (!lines1.map(l => l.trim()).includes(line)) {
                  setDoc2(prevDoc2 => [...prevDoc2, line]);
                }
              }
    
              l++;
              if (l < lines2.length) {
                // Si aún hay líneas en el archivo 2, programar la comparación de la siguiente línea
                setTimeout(compareNextLine2, 0);
              } else {
                // Si ya se han comparado todas las líneas del archivo 2, actualizar el estado de carga y finalizar
                setLoading(false);
              }
            };
    
            // Iniciar la comparación de líneas del archivo 2
            compareNextLine2();
          };
        };
      };
    
      compareFiles();
    }, []);
    

      useEffect(() => {
        setDocRegistros1(doc1.length);
      }, [doc1]);
  
      useEffect(() => {
        setDocRegistros2(doc2.length);
      }, [doc2]);

      useEffect(() => {
        if ( loading !== true && docRegistros1 === 0 && docRegistros2 === 0 ){
          setIguales(true);
        } else{
          setIguales(false);
        } 
      }, [loading, docRegistros1, docRegistros2]);     

  return (
    <>
        <div className='mb-5'>
          <div>
              {loading && (
                <Grid 
                  container
                  alignContent="center"
                  justifyContent="center"
                >
                  <Grid 
                    item
                    alignContent="center"
                    justifyContent="center"
                    xs={11}
                  >
                    {/* <Typography>
                      Trabajando, Por favor espere . . .
                    </Typography> */}
                    <Spinner/>
                  </Grid>
                </Grid>
              
              )}            
          </div> <br />

          <div className='card text-center mb-5'>
              <div className='row m-3'>
                  <div className='col'>
                      <h3>Documento 1</h3>
                      <h3 className='colorTitulo'> { nameDoc1 } </h3>
                      <h6><span>Total de Registros: <span className='colorTitulo'>{cantidad1}</span></span></h6>
                      <h6><span>Registros no encontrados: <span className='colorTitulo'>{docRegistros1}</span></span></h6>
                      <br />
                      {
                        (docRegistros1 > 0) && (<h6>Lista de Registros:</h6>)
                      }
                      <ul>
                          {doc1.map((item, index) => (
                              <li key={index}>{item}</li>
                      ))}
                      </ul>
                  
                  
                  </div>


                  <div className='col'>
                      <h3>Documento 2</h3>
                      <h3 className='colorTitulo'> { nameDoc2 } </h3>
                      <h6><span>Total de Registros: <span className='colorTitulo'>{cantidad2}</span></span></h6>
                      <h6><span>Registros no encontrados: <span className='colorTitulo'>{docRegistros2}</span></span></h6>
                      <br />
                        {
                          (docRegistros2 > 0) && (<h6>Lista de Registros:</h6>)
                        }

                      <ul>
                          {doc2.map((item, index) => (
                              <li key={index}>{item}</li>
                          ))}
                      </ul>
              
                  </div>
              </div>
              <div className='container mb-3'>
                <div className='row m-3'>
                  {
                    (iguales) && (<h1 className='colorTitulo'>Los registros en ambos documentos son iguales...!</h1>)
                  }
                </div>
          </div>         
        </div>   
        </div> <br /><br />
    </>
  )
}
