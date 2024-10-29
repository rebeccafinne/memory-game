import React, { createContext, useContext, useState } from 'react';

// Skapa Context
const PlayerNameContext = createContext();

// Skapa en Provider-komponent
export const PlayerNameProvider = ({ children }) => {
  const [state, setState] = useState({
    playerOneName: '',
    playerTwoName: '',
  });

  return (
    <PlayerNameContext.Provider value={{ state, setState }}>
      {children}
    </PlayerNameContext.Provider>
  );
};

// Skapa en custom hook för att använda Context
export const usePlayerNameContext = () => useContext(PlayerNameContext);
