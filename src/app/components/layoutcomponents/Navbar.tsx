'use client';

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useUI } from "../context/UIContext";
import BigMenu from "./BigMenu";
import AuthenticationService from "../service/AuthenticationService";

interface NavbarProps { }

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();
  const { isMenuOpen, setIsMenuOpen } = useUI();

  useEffect(() => {
    async function checkAuth() {
      try {
        const response = await fetch("/api/validate-token", {
          method: "POST",
          credentials: "include",
        });
        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
        console.log("Error: ", error);
      }
    }
    checkAuth();
  }, []);

  const handleRedirection = () => {
    if (isAuthenticated) {
      router.push("/logged/dashboard");
    } else {
      router.push("/");
    }
    setIsMenuOpen(false);
  };

  const handleMenuToggle = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const handleLogout = async (event: React.MouseEvent) => {
    event.stopPropagation();
    try {
      await AuthenticationService.logout();
      setIsMenuOpen(false);
      window.location.href = "/";
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <>
      {isMenuOpen && <BigMenu />}
      <nav
        className="flex flex-row py-6 px-12 justify-between bg-white text-gray-800 fixed top-0 left-0 w-full z-50 shadow-md"
        onClick={() => handleMenuToggle()}
      >
        <p className="bg-[#DA6D00] text-white  font-bold cursor-pointer p-3 rounded-xl shadow-xl
        px-5 text-5xl italic"
          onClick={handleRedirection} >
          P
        </p>

        {isAuthenticated === null && <div style={{ width: 30, height: 30 }} />}

        {isAuthenticated === false && (
          <button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
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
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        )}

        {isAuthenticated === true && (
          <button
            onClick={handleLogout}
            className="text-gray-500 cursor-pointer border rounded px-3 py-1 text-sm shadow bg-white hover:bg-gray-100 hover:bg-opacity-20"
          >
            Logout
          </button>
        )}
      </nav>
    </>
  );
};

export default Navbar;
