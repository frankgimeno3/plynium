'use client';
import React, { FC, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUI } from '@/app/components/context/UIContext';

const BigMenu: FC = () => {
  const { setIsMenuOpen, section, setSection } = useUI();  
  const router = useRouter();

  const handleRedirection = (redirection: string, newSection: string) => {
    router.push(redirection);
    setIsMenuOpen(false);
    setSection(newSection);
  };

  const renderLeftPanel = () => {
    switch (section) {
      case 'home': return ['HOME', 'Who we are, and what we do'];
      case 'media': return ['MEDIA', 'Our media'];
      case 'contact': return ['CONTACT', 'Contact us'];
      case 'newsroom': return ['NEWSROOM', 'Weekly updates about the digital marketing world'];
      default: return ['MENU', 'Select an option'];
    }
  };

  const [title, subtitle] = renderLeftPanel();

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

        {/* Solo menú para usuarios NO autenticados */}
        <MenuItem label="Home" sectionKey="home" path="/" />
        <MenuItem label="Our media" sectionKey="media" path="/en/media" />
        <MenuItem label="How to use plynium?" sectionKey="howto" path="/en/agency" />
        <MenuItem label="Language" sectionKey="newsroom" path="/en/newsroom" />
        <MenuItem label="Contact us" sectionKey="contact" path="/en/contact" />
      </div>
    </div>
  );

  function MenuItem({
    label,
    sectionKey,
    path,
    onClick,
  }: {
    label: string;
    sectionKey: string;
    path?: string;
    onClick?: () => void;
  }) {
    const isActive = section === sectionKey;
    return (
      <div
        className={`text-lg hover:bg-[#DA6D00] hover:text-white pt-3 pb-3 pl-12 text-left cursor-pointer w-full
          ${isActive ? 'text-gray-500 bg-white' : 'opacity-50 hover:opacity-100'}`}
        onClick={() => {
          if (onClick) onClick();
          else if (path) handleRedirection(path, sectionKey);
        }} style={{ transitionDuration: '1200ms' }}
      >
        <p>{label}</p>
      </div>
    );
  }
};

export default BigMenu;
