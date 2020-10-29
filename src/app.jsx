import React, { useContext } from 'react';
import Home from './containers/home';
import { NotificationContextProvider } from './context/notificationContext';

export default function App() {
  return (
    <NotificationContextProvider>
      <Home />
    </NotificationContextProvider>
  );
}
