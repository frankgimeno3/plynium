'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type UIContextType = {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  section: string;
  setSection: (value: string) => void;
  leftBarSection: string;
  setLeftBarSection: (value: string) => void;
};

// Crear el contexto con un valor inicial opcional
const UIContext = createContext<UIContextType | undefined>(undefined);

// Proveedor del contexto
export const UIProvider = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [section, setSection] = useState('home');
  const [leftBarSection, setLeftBarSection] = useState('dashboard'); // ✅ Nuevo estado

  return (
    <UIContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        section,
        setSection,
        leftBarSection,
        setLeftBarSection, // ✅ Nuevo setter
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useUI = (): UIContextType => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('useUI debe ser usado dentro de un UIProvider');
  }
  return context;
};
