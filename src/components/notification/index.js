import React, { useContext, useEffect } from 'react';
import { FiPaperclip } from 'react-icons/fi';
import './notification.scss';
import Contex from '../../context/notificationContext';

export default function Notification({ title, message, delay = 3000 }) {
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
      <div className='notification'>
        <div
          className='close-notification'
          role='button'
          tabIndex='0'
          onClick={handleCloseNotification}
        >
          x
        </div>
        <div className='notification-title'>
          <FiPaperclip />
          {title}
        </div>
        <div className='notification-message'>{message}</div>
      </div>
    </section>
  );
}
