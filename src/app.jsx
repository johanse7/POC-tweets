import React, { useContext } from 'react';
import Home from './containers/home';
import { ContextProvider } from './context/ContextApp';

export default function App() {
  return (
    <ContextProvider>
      <Home />
    </ContextProvider>
  );
}
