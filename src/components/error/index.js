import React from 'react';
import errorImage from '../../assets/errorPage.png';
import './error.scss';

const Error = () => (
  <div className='error-detail'>
    <img src={errorImage} alt='error' />
  </div>
);

export default Error;
