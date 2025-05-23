'use client';
import React, { FC  } from 'react';
import { useRouter } from 'next/navigation';
import { useUI } from '@/app/components/context/UIContext';  

const BigMenu: FC = () => {
  const { setIsMenuOpen, section, setSection } = useUI();  
   const router = useRouter();

  const handleRedirection = (redirection: string, newSection:string) => {
    router.push(redirection);
    setIsMenuOpen(false);
    setSection(newSection)
  };

  return (
    <div className="fixed top-14 mt-3 left-0 w-full h-full text-white z-50 flex">
      <div
        className="flex flex-col flex-[3] w-full items-center justify-center border-r border-gray-500"
        style={{ backgroundColor: 'rgba(23, 23, 23, 0.99)' }}
      >
        <h1 className="text-4xl font-bold">HOME</h1>
        <h1 className="text-lg text-center pt-5">Who we are, and what we do</h1>
      </div>

      <div className="flex-[1] w-full flex flex-col items-center justify-center space-y-6 bg-zinc-900">
        <p className="font-bold text-xl md:text-4xl p-5 ">MENÚ</p>

        <div
          className={`text-xs md:text-lg hover:bg-zinc-500 hover:bg-opacity-10 pt-6 pb-5 px-3 text-center cursor-pointer w-full
             ${section === 'home' ? 'text-gray-500 bg-white' : 'opacity-50 hover:opacity-100'}`}
          onClick={() => handleRedirection('/', 'home')}
          style={{ transitionDuration: '1200ms' }}
        >
          <p>Home</p>
        </div>

        <div
          className={`text-xs md:text-lg hover:bg-zinc-500 hover:bg-opacity-70 pt-6 pb-5 px-3 text-center cursor-pointer w-full
             ${section === 'media' ? 'text-gray-500 bg-white' : 'opacity-50 hover:opacity-100'}`}
          onClick={() => handleRedirection('/media', 'media')}
          style={{ transitionDuration: '1200ms' }}
        >
          <p>Our media</p>
        </div>

        <div
          className={`text-xs md:text-lg hover:bg-zinc-500 hover:bg-opacity-70 pt-6 pb-5 px-3 text-center cursor-pointer w-full
             ${section === 'contact' ? 'text-gray-500 bg-white' : 'opacity-50 hover:opacity-100'}`}
          onClick={() => handleRedirection('/contact', 'contact')}
          style={{ transitionDuration: '1200ms' }}
        >
          <p>Contact us</p>
        </div>
 
      </div>
    </div>
  );
};

export default BigMenu;
