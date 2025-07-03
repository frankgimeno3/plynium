import { useRouter } from 'next/navigation';
import React, { FC } from 'react';
import { useUI } from '../context/UIContext';
import ButtonsRow from './ButtonsRow';
import WhatAreYouLookingFor from './WhatAreYouLookingFor';

interface HeroProps { }

const Hero: FC<HeroProps> = () => {
  const router = useRouter();
  const { setSection } = useUI();

  const handleRedirection = (redirection: string, newSection: string) => {
    router.push(redirection);
    setSection(newSection);
  };

  return (
    <div className="relative flex flex-col min-h-screen w-full text-white mb-12 max-w-6xl mx-auto pt-36">
      <div className="relative z-10  mx-auto flex flex-col justify-center flex-grow">
        <div className='flex flex-row items-end gap-2'>
          <h1 className="text-8xl text-[#DA6D00] font-bold  ">
            Plynium
          </h1>
          <p className='text-white text-3xl pb-2'>Europe</p>
        </div>
        <h2 className="text-2xl   my-8  ">
          All-in-one platform for construction products and technical solutions — built for architects, builders, engineers, and on-site professionals looking for products, prices and quotes for their projects.
        </h2>
        <div className='flex flex-row w-full  '>
          <input placeholder='Search, explore, benchmark, compare' className=' rounded bg-white bg-opacity-10 border border-gray-100 px-4 mr-1'
            style={{ width: "1005px" }} />
          <button
            className="p-3 px-5 bg-gray-200 rounded hover:bg-white hover:text-black transition-colors w-max text-gray-700 flex items-center justify-center"
            style={{ width: "60px" }}
            onClick={() => {
              handleRedirection('/en/contact', 'contact');
            }}
          >
            <img src="/magnifying-glass.svg" alt="Search" className="w-6 h-6" />
          </button>
        </div>
        <ButtonsRow />
      </div>
    </div>
  );
};

export default Hero;
