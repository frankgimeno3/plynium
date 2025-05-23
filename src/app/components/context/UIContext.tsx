'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type UIContextType = {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  section: string;
  setSection: (value: string) => void;
};

// Creamos el contexto
const UIContext = createContext<UIContextType | undefined>(undefined);

// Componente proveedor del contexto
export const UIProvider = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  
  const [section, setSection] = useState('home');

  return (
    <UIContext.Provider value={{ isMenuOpen, setIsMenuOpen, section, setSection }}>
      {children}
    </UIContext.Provider>
  );
};

// Hook para usar el contexto
export const useUI = (): UIContextType => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('useUI debe ser usado dentro de un UIProvider');
  }
  return context;
};
