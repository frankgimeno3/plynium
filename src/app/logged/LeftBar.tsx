'use client';

import { useRouter } from 'next/navigation';
import React, { FC, useEffect, useState } from 'react';
import { useUI } from '@/app/components/context/UIContext';

const mediaSections = [
  'aluminiumprofiles',
  'buildinformer',
  'fenestrator',
  'glassinformer',
  'pvcprofiles',
  'sunshaders',
];

const Leftbar: FC = () => {
  const router = useRouter();
  const { leftBarSection, setLeftBarSection } = useUI();

  const [isMediaOpen, setIsMediaOpen] = useState(false);

  useEffect(() => {
    if (mediaSections.includes(leftBarSection)) {
      setIsMediaOpen(true);
    }
  }, [leftBarSection]);

  const handleRedirection = (ubi: string, sectionName: string) => {
    setLeftBarSection(sectionName.toLowerCase());
    router.push(ubi);
  };

  const getMenuItemClasses = (sectionName: string) =>
    `w-full bg-white cursor-pointer ${leftBarSection === sectionName ? 'bg-opacity-5' : 'bg-opacity-0'
    } hover:bg-opacity-10`;

  return (
    <div className="flex flex-col max-w-2xl bg-zinc-500 text-white " style={{ width: '360px' }}>
      <p className="font-bold pb-6 text-xl p-8 pr-16 ml-3">Panel de control</p>
      <div className="flex flex-col text-sm ">
        <div
          className={getMenuItemClasses('dashboard')}
          onClick={() => handleRedirection('/logged/dashboard', 'dashboard')}
        >
          <p className="py-3 px-8 pr-16 ml-3">Notifications Dashboard</p>
        </div>
        <div
          className={getMenuItemClasses('contentsadmin')}
          onClick={() => handleRedirection('/logged/contentsadmin', 'contentsadmin')}
        >
          <p className="py-3 px-8 pr-16 ml-3">Contents administrator</p>
        </div>
        <div
          className={getMenuItemClasses('quotesadmin')}
          onClick={() => handleRedirection('/logged/quotesadmin', 'quotesadmin')}
        >
          <p className="py-3 px-8 pr-16 ml-3">Quotes administrator</p>
        </div>

        <div
          className={getMenuItemClasses('agencyadmin')}
          onClick={() => handleRedirection('/logged/agencyadmin', 'agencyadmin')}
        >
          <p className="py-3 px-8 pr-16 ml-3">Agency administrator</p>
        </div>

        {/* MEDIA administrator */}
        <div
          onClick={() => setIsMediaOpen(!isMediaOpen)}
          className="w-full   bg-white bg-opacity-0  flex items-center justify-between px-8 pr-4 py-3 "
        >
{ !isMediaOpen &&         <p className='pl-3'>Media administrator</p> } 
{ isMediaOpen &&         <p className='pl-3 font-bold'>Media administrator</p> } 
         <div className='pr-12'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 transform transition-transform duration-200 ${isMediaOpen ? 'rotate-180 fill-white' : 'rotate-0 fill-none'
              }`}
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth="2"
            fill="none"
          >
            <path d="M6 15l6-6 6 6" />
          </svg>
          </div>
        </div>

        {isMediaOpen && (
          <div className="p-3 pl-6">
            {mediaSections.map((section) => (
              <div key={section} className={getMenuItemClasses(section)}>
                <p
                  className="py-2 px-8 pl-6 text-xs  cursor-pointer"
                  onClick={() =>
                    handleRedirection(`/logged/mediaadmin/${section}`, section)
                  }
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Leftbar;
