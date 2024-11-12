import React, { createContext, useState, useContext, ReactNode } from 'react';

interface MyContextType {
  gasVolume: number;
  setGasVolume: (value: number) => void;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

interface MyProviderProps {
  children: ReactNode;
}

export const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [gasVolume, setGasVolume] = useState<number>(20);

  return (
    <MyContext.Provider value={{ gasVolume, setGasVolume }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = (): MyContextType => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext deve ser usado dentro de um MyProvider');
  }
  return context;
};