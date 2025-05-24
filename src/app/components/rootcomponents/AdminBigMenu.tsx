'use client';
import React, { FC  } from 'react';
import { useRouter } from 'next/navigation';
import { useUI } from '@/app/components/context/UIContext';  
import AuthenticationService from '@/app/components/service/AuthenticationService';  

const AdminBigMenu: FC = () => {
  const { setIsMenuOpen, section, setSection } = useUI();  
   const router = useRouter();

  const handleRedirection = (redirection: string, newSection:string) => {
    router.push(redirection);
    setIsMenuOpen(false);
    setSection(newSection)
  };
   const handleLogout = async () => {
    try {
      await AuthenticationService.logout();
      setIsMenuOpen(false);
      setSection('');
      router.push('/');
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <div className="fixed top-14 mt-3 left-0 w-full h-full text-white z-50 flex">
      <div
        className="flex flex-col flex-[3] w-full items-center justify-center border-r border-gray-500"
        style={{ backgroundColor: 'rgba(23, 23, 23)' }}
      >
         <h1 className="text-4xl font-bold">MENU</h1>
        <h1 className="text-lg text-center pt-5">Select an option to continue</h1> 
                
      </div>

      <div className="flex-[1] w-full flex flex-col items-center justify-center space-y-6 bg-zinc-900">
        <p className="font-bold text-xl md:text-4xl p-5 ">MENÚ</p>

        <div
          className={`text-xs md:text-lg hover:bg-zinc-500 hover:bg-opacity-10 pt-6 pb-5 px-3 text-center cursor-pointer w-full
             ${section === 'dashboard' ? 'text-gray-500 bg-white' : 'opacity-50 hover:opacity-100'}`}
          onClick={() => handleRedirection('/logged/dashboard', 'dashboard')}
          style={{ transitionDuration: '1200ms' }}
        >
          <p>Dashboard</p>
        </div>

        <div
          className={`text-xs md:text-lg hover:bg-zinc-500 hover:bg-opacity-70 pt-6 pb-5 px-3 text-center cursor-pointer w-full
             ${section === 'quotes' ? 'text-gray-500 bg-white' : 'opacity-50 hover:opacity-100'}`}
          onClick={() => handleRedirection('/quotesadmin', 'quotes')}
          style={{ transitionDuration: '1200ms' }}
        >
          <p>QUOTES administrator</p>
        </div>

        <div
          className={`text-xs md:text-lg hover:bg-zinc-500 hover:bg-opacity-70 pt-6 pb-5 px-3 text-center cursor-pointer w-full
             ${section === 'newsroom' ? 'text-gray-500 bg-white' : 'opacity-50 hover:opacity-100'}`}
          onClick={() => handleRedirection('/blogadmin', 'newsroom')}
          style={{ transitionDuration: '1200ms' }}
        >
          <p>NEWSROOM administrator</p>
        </div>
        <div
          className={`text-xs md:text-lg hover:bg-zinc-500 hover:bg-opacity-70 pt-6 pb-5 px-3 text-center cursor-pointer w-full
             ${section === 'agency' ? 'text-gray-500 bg-white' : 'opacity-50 hover:opacity-100'}`}
          onClick={() => handleRedirection('/agencyadmin', 'agency')}
          style={{ transitionDuration: '1200ms' }}
        >
          <p>AGENCY administrator</p>
        </div> 
                <div
          className={`text-xs md:text-lg hover:bg-zinc-500 hover:bg-opacity-70 pt-6 pb-5 px-3 text-center cursor-pointer w-full
             ${section === 'media' ? 'text-gray-500 bg-white' : 'opacity-50 hover:opacity-100'}`}
          onClick={() => handleRedirection('/mediaadmin', 'media')}
          style={{ transitionDuration: '1200ms' }}
        >
          <p>MEDIA administrator</p>
        </div> 
       <div
          className={`text-xs md:text-lg hover:bg-zinc-500 hover:bg-opacity-70 pt-6 pb-5 px-3 text-center cursor-pointer w-full opacity-50 hover:opacity-100`}
          onClick={handleLogout}
          style={{ transitionDuration: '1200ms' }}
        >
          <p>Log out</p>
        </div>
      </div>
    </div>
  );
};

export default AdminBigMenu;
