'use client';
import Link from 'next/link';
import React, { FC, useEffect } from 'react';
import { useUI } from '@/app/components/context/UIContext';

const BigMenu: FC = () => {
  const { setIsMenuOpen, section, setSection } = useUI();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsMenuOpen]);

  return (
    <div className="fixed top-16 left-0 w-full h-full text-white z-50 flex" style={{ marginTop: '13px' }}>
      <div
        className="bg-transparent"
      >
       
      </div>

      <div className="flex-[1] w-full flex flex-col items-center space-y-3 bg-zinc-900">
        <p className="font-bold text-xl md:text-4xl p-5 pl-12 text-left pt-24 w-full text-[#DA6D00]">Menu</p>

        <MenuItem label="Home" sectionKey="home" path="/" setSection={setSection} setIsMenuOpen={setIsMenuOpen} section={section} />
        <MenuItem label="Our portals" sectionKey="portals" path="/home/portals" setSection={setSection} setIsMenuOpen={setIsMenuOpen} section={section} />
        <MenuItem label="Products directory" sectionKey="products" path="/home/products" setSection={setSection} setIsMenuOpen={setIsMenuOpen} section={section} />
        <MenuItem label="Companies directory" sectionKey="companies" path="/home/companies" setSection={setSection} setIsMenuOpen={setIsMenuOpen} section={section} />
        <MenuItem label="How to use plynium?" sectionKey="howto" path="/home/howto" setSection={setSection} setIsMenuOpen={setIsMenuOpen} section={section} />
        <MenuItem label="Contact us" sectionKey="contact" path="/home/contact" setSection={setSection} setIsMenuOpen={setIsMenuOpen} section={section} />
      </div>
    </div>
  );
};

function MenuItem({
  label,
  sectionKey,
  path,
  section,
  setSection,
  setIsMenuOpen,
}: {
  label: string;
  sectionKey: string;
  path: string;
  section: string;
  setSection: (s: string) => void;
  setIsMenuOpen: (v: boolean) => void;
}) {
  const isActive = section === sectionKey;
  return (
    <Link
      href={path}
      onClick={() => {
        setIsMenuOpen(false);
        setSection(sectionKey);
      }}
      className={`text-lg pt-3 pb-3 pl-12 text-left w-full transition-colors block
        ${isActive ? 'bg-white text-gray-800' : 'text-zinc-100 hover:bg-[#DA6D00] hover:text-white'}`}
      style={{ transitionDuration: '1200ms' }}
    >
      <p>{label}</p>
    </Link>
  );
}

export default BigMenu;
