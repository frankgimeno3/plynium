"use client"
import { useRouter } from 'next/navigation';
import React, { FC, useEffect, useState } from 'react';
import { useUI } from '../context/UIContext';
import BigMenu from './BigMenu';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({ }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  const router = useRouter();
  const { isMenuOpen, setIsMenuOpen } = useUI();

  const handleRedirection = () => {
    if (isAuthenticated) {
      router.push('/logged/dashboard');
    } else {
      router.push('/');
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch('/api/validate-token', {
          method: 'POST',
        });

        if (res.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
    }

    checkAuth();
  }, []);

  if (isAuthenticated === null) return null;

  const handleMenuToggle = ()=>{
    if(isMenuOpen){setIsMenuOpen(false)}
  }

  return (
    <>
     {isMenuOpen && (
        <BigMenu isAuthenticated={isAuthenticated} />
      )}
 <nav className='flex flex-row py-8 px-12 justify-between bg-black text-white fixed top-0 left-0 w-full z-50 shadow-md' 
    onClick={()=>handleMenuToggle()}>
     
      <p onClick={handleRedirection}>
        Plynium
      </p>

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
</>
   
  );
};

export default Navbar;
