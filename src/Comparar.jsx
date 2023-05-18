
import React from 'react'

export const comparar = (file1 = {}, file2 = {}) => {

    const compareFiles = () => {
        // Lee el contenido de ambos archivos
        const reader = new FileReader();
        reader.readAsText(file1);
        reader.onload = () => {
          const content1 = reader.result;
          const reader2 = new FileReader();
          reader2.readAsText(file2);
          reader2.onload = () => {
            const content2 = reader2.result;
      
            // Separa el contenido de ambos archivos por líneas
            const lines1 = content1.split('\n');
            const lines2 = content2.split('\n');
      
            // Verifica si todos los registros del archivo 1 están en el archivo 2
            const missingIn2 = [];
            for (let i = 0; i < lines1.length; i++) {
              if (!lines2.includes(lines1[i])) {
                missingIn2.push(lines1[i]);
              }
            }
      
            // Verifica si todos los registros del archivo 2 están en el archivo 1
            const missingIn1 = [];
            for (let i = 0; i < lines2.length; i++) {
              if (!lines1.includes(lines2[i])) {
                missingIn1.push(lines2[i]);
              }
            }
      
            // Devuelve los registros faltantes en cada archivo
            console.table(`archivo 1: ${missingIn1}`);
            console.table(`archivo 2: ${missingIn2}`);
    
            // const doc1 = lines1.length();
            // const doc2 = lines2.length();                  
                        
                      
        };
        }
      }
    

  return (
    <>
        <div className='row'>
            <div className='col'>
                {
                    (missingIn1 !== null) && (<ol><li>21</li></ol>)
                }
            </div>

            <div className='col'>

            </div>

        </div>
    </>
  )
}
