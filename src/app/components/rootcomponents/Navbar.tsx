"use client"
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';
import { useUI } from '../context/UIContext';
import BigMenu from './BigMenu';

interface NavbarProps {
  
}

const Navbar: FC<NavbarProps> = ({ }) => {
    const router = useRouter();
  const { isMenuOpen, setIsMenuOpen } = useUI();

  const handleRedirection = (redirection: string) => {
    router.push(redirection);
    setIsMenuOpen(false);
  };
  
  return (
    <nav className='flex flex-row p-5 justify-between bg-black text-white fixed top-0 left-0 w-full z-50 shadow-md" '>
      {isMenuOpen && (
        <BigMenu />
      )}
        <p  onClick={() => handleRedirection('/')}>Plynium</p>
      <button className="text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        )}
      </button>
    </nav>
  );
};

export default Navbar;