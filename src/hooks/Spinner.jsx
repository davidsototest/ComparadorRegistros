import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';
import React from 'react'
import 'animate.css';

export const Spinner = () => {

    const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    `;

  return (
    <>
      <div className='row'>
          <div className='col text-center'>
              <img id='engranaje' src="https://firebasestorage.googleapis.com/v0/b/comparadorregistros.appspot.com/o/ComparadorRegistros%2Fwork.gif?alt=media&token=dd8fe469-5052-41b6-a149-3000a5d0ec11" alt="MichiTrabajando" />
              <br />
              <h5>Trabajando, Por favor espere . . .</h5>
              <br />
              <ClipLoader color="#5C469C" loading={true} css={override} size={35} />
          </div>
      </div>
    </>
  )
}
