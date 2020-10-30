import React from 'react';
import errorImage from '../../assets/errorPage.png';
import './error.scss';

const Error = () => (
  <div className='error-detail'>
    <img src={errorImage} alt='error' />
    <p>Error server</p>
  </div>
);

export default Error;
