import React from 'react';
import error from '../../assets/error.png';
import './error.scss';

const Error = () => (
  <div className='error-detail'>
    <img src={error} alt='error' />
  </div>
);

export default Error;
