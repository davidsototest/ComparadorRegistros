
import React from 'react'

export const Footer = () => {
  return (
    <>
        <footer className='footer'>
            <div className="text-success">
                <hr className='border border-primary border-1 opacity-20'/>
            </div>
            <div className='container animate__animated animate__backInUp'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <a 
                            className='svg'                      
                            href="https://linkedin.com/in/david-soto-068716220" 
                            target="_blank">
                                <img src="https://firebasestorage.googleapis.com/v0/b/comparadorregistros.appspot.com/o/ComparadorRegistros%2Flinkedin.svg?alt=media&token=a86cf294-fbf0-4688-b332-d8e97770f624" alt="Linkedin"/>
                        </a>

                        <a  
                            className='svg'
                            href="https://github.com/davidsototest/ComparadorRegistros" 
                            target="_blank">
                                <img src="https://firebasestorage.googleapis.com/v0/b/comparadorregistros.appspot.com/o/ComparadorRegistros%2Fgithub.svg?alt=media&token=06f70328-e3c8-4412-b230-3f8d1fd05fe7" alt="Github"/>
                        </a>

                        <a  
                            className='svg'
                            href="https://davidsoto.page" 
                            target="_blank">
                                <img src="https://firebasestorage.googleapis.com/v0/b/comparadorregistros.appspot.com/o/ComparadorRegistros%2Fweb.svg?alt=media&token=9278afac-0628-4635-b9e8-de3b4cacf893" alt="Portfolio"/>
                        </a>
                    </div>
                </div>  
            </div>
        </footer>
    </>
  )
}
