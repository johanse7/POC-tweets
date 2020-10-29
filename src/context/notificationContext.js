import React, { useState } from 'react';

const Context = React.createContext({});

export function ContextProvider({ children }) {
  const [notification, setNotification] = useState(null);
  const [loading, setLoading] = useState(false);
  return (
    <Context.Provider value={{ notification, setNotification, loading, setLoading }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
