import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';
import React, { useState } from 'react'

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
              <img id='engranaje' src="https://firebasestorage.googleapis.com/v0/b/frontendportfolio-e949c.appspot.com/o/ComparadorRegistros%2Fwork.gif?alt=media&token=5fdc31f2-5b85-45f0-8c58-59eb47bdf980" alt="MichiTrabajando" />
              <br />
              <h5>Trabajando, Por favor espere . . .</h5>
              <br />
              <ClipLoader color="#5C469C" loading={true} css={override} size={35} />
          </div>
      </div>
    </>
  )
}
