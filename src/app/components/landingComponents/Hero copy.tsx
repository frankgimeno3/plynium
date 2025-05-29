import { useRouter } from 'next/navigation';
import React, { FC } from 'react';
import { useUI } from '../context/UIContext';

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  const router = useRouter();
  const { setSection } = useUI();

  const handleRedirection = (redirection: string, newSection: string) => {
    router.push(redirection);
    setSection(newSection);
  };

  return (
    <div className="relative flex flex-col min-h-screen w-full text-white mb-12 max-w-5xl mx-auto">
      <div className="relative z-10 p-8 mx-auto flex flex-col justify-center flex-grow">
        <h1 className="text-6xl font-bold">
          Specialized news for professionals and industries worldwide
        </h1>
        <h2 className="text-2xl my-8">
          We inform, connect, and support decision-makers worldwide with timely and relevant insights.
        </h2>
        <p className='font-bold pb-2'>Do you want to improve communication for your company?</p>
        <div className='flex flex-row w-full'>
          <input
            placeholder='Your email here'
            className='rounded bg-white bg-opacity-10 border border-gray-100 px-4 w-96 mr-4'
          />
          <button
            className="p-3 px-5 bg-gray-200 rounded-r-xl hover:bg-white hover:text-black transition-colors w-max text-gray-700"
            style={{ width: "220px" }}
            onClick={() => {
              handleRedirection('/en/contact', 'contact');
            }}
          >
            Book your consultancy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
