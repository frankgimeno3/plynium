'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';

type UIContextType = {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  section: string;
  setSection: (value: string) => void;
  leftBarSection: string;
  setLeftBarSection: (value: string) => void;
};

const UIContext = createContext<UIContextType | undefined>(undefined);

export const UIProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  const getInitialLeftBarSection = () => {
    const parts = pathname?.split('/') || [];
    if (parts.length >= 3) {
      if (parts[2] === 'mediaadmin' && parts.length >= 4) {
        return parts[3].toLowerCase();
      } else {
        return parts[2].toLowerCase();
      }
    }
    return 'dashboard'; // valor por defecto
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [section, setSection] = useState('home');
  const [leftBarSection, setLeftBarSection] = useState(getInitialLeftBarSection());

  // Opcional: si el pathname cambia, sincronizamos leftBarSection (por si el router no remonta el provider)
  useEffect(() => {
    const current = getInitialLeftBarSection();
    if (current !== leftBarSection) {
      setLeftBarSection(current);
    }
  }, [pathname]);

  return (
    <UIContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        section,
        setSection,
        leftBarSection,
        setLeftBarSection,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUI = (): UIContextType => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('useUI debe ser usado dentro de un UIProvider');
  }
  return context;
};
