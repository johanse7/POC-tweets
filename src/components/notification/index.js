import React, { useContext, useEffect } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { VscError } from 'react-icons/vsc/';
import Contex from '../../context/notificationContext';
import './notification.scss';

export default function Notification({ title, message, success, delay = 3000 }) {
  const { setNotification } = useContext(Contex);

  useEffect(() => {
    const timeout = setTimeout(() => setNotification(null), delay);
    return () => clearTimeout(timeout);
  }, []);

  const handleCloseNotification = () => {
    setNotification(null);
  };

  return (
    <section className='content-notfication '>
      <div className={`notification ${!success ? `error-notify` : ''} `}>
        <div
          className='close-notification'
          role='button'
          tabIndex='0'
          onClick={handleCloseNotification}
        >
          x
        </div>
        <div className='notification-title'>
          {success ? <AiOutlineCheckCircle className='success' /> : <VscError className='error' />}
          {title}
        </div>
        <div className='notification-message'>{message}</div>
      </div>
    </section>
  );
}
