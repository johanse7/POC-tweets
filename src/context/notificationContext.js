import React, { useState } from 'react';

const Context = React.createContext({});

export function NotificationContextProvider({ children }) {
  const [notification, setNotification] = useState(null);
  return <Context.Provider value={{ notification, setNotification }}>{children}</Context.Provider>;
}

export default Context;
