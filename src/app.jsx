import React, { useContext } from 'react';
import Home from './containers/home';
import { ContextProvider } from './context/notificationContext';

export default function App() {
  return (
    <ContextProvider>
      <Home />
    </ContextProvider>
  );
}
