'use client';

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useUI } from "../context/UIContext";
import BigMenu from "./BigMenu";
import AuthenticationService from "../service/AuthenticationService";

interface NavbarProps { }

/** Logo: keycap look — raised shadow; hover/active simulates press */
const logoKeyClasses =
  "inline-flex select-none items-center justify-center bg-[#DA6D00] text-white font-bold cursor-pointer p-3 rounded-3xl px-5 text-5xl italic " +
  "shadow-[0_5px_0_0_#a84800,0_6px_16px_-2px_rgba(0,0,0,0.22)] " +
  "transition-[transform,box-shadow] duration-150 ease-out " +
  "hover:translate-y-[3px] hover:shadow-[0_2px_0_0_#a84800,0_3px_10px_-2px_rgba(0,0,0,0.18)] " +
  "active:translate-y-[5px] active:shadow-[0_1px_0_0_#8f3d00,0_1px_6px_-1px_rgba(0,0,0,0.15)] " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DA6D00]";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
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

  const handleMenuToggle = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const handleLogout = async (event: React.MouseEvent) => {
    event.stopPropagation();
    try {
      await AuthenticationService.logout();
      setIsAuthenticated(false);
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
        {isAuthenticated === true ? (
          <Link
            href="/logged/dashboard"
            onClick={() => setIsMenuOpen(false)}
            className={logoKeyClasses}
          >
            P
          </Link>
        ) : (
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className={logoKeyClasses}
          >
            P
          </Link>
        )}

        {isAuthenticated === null && <div style={{ width: 30, height: 30 }} />}

        {isAuthenticated === false && (
          <div
            className="flex flex-row items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <Link
              href="/home/auth/login"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 text-sm font-medium px-3 py-1.5 rounded border border-gray-300 hover:bg-gray-50"
            >
              Log in
            </Link>
            <Link
              href="/home/auth/signup"
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-sm font-medium px-3 py-1.5 rounded bg-[#DA6D00] hover:bg-[#c25f00] shadow-sm"
            >
              Sign up
            </Link>
            <button
              type="button"
              className="text-white p-1"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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
          </div>
        )}

        {isAuthenticated === true && (
          <div
            className="flex flex-row items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleLogout}
              className="text-gray-700 text-sm font-medium px-3 py-1.5 rounded border border-gray-300 bg-white hover:bg-gray-50 shadow-sm"
            >
              Log out
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
