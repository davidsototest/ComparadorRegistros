import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';
import React from 'react'
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
              <br />
              <h5>Trabajando, Por favor espere . . .</h5>
              <br />
              <ClipLoader color="#6C63FF" loading={true} css={override} size={50} />
          </div>
      </div>
    </>
  )
}
