import React, { FC, useState } from 'react';

interface LeftbarProps {}

const Leftbar: FC<LeftbarProps> = ({ }) => {
  const [isMediaOpen, setIsMediaOpen] = useState(false);

  const toggleMedia = () => setIsMediaOpen(!isMediaOpen);

  return (
    <div className='flex flex-col max-w-2xl bg-zinc-500 text-white'>
      <p className='font-bold pb-6 text-xl p-8 pr-16'>Panel de control</p>
      <div className='flex flex-col text-sm'>

        <div className='w-full bg-white bg-opacity-0 hover:bg-opacity-10'>
          <p className='py-3 px-8 pr-16'>Notifications Dashboard</p>
        </div>

        <div className='w-full bg-white bg-opacity-0 hover:bg-opacity-10'>
          <p className='py-3 px-8 pr-16'>QUOTES administrator</p>
        </div>

        <div className='w-full bg-white bg-opacity-0 hover:bg-opacity-10'>
          <p className='py-3 px-8 pr-16'>NEWSROOM administrator</p>
        </div>

        <div className='w-full bg-white bg-opacity-0 hover:bg-opacity-10'>
          <p className='py-3 px-8 pr-16'>AGENCY administrator</p>
        </div>

        {/* MEDIA administrator con toggle */}
        <div
          onClick={toggleMedia}
          className='w-full cursor-pointer bg-white bg-opacity-0 hover:bg-opacity-10 flex items-center justify-between px-8 pr-4 py-3'
        >
          <p>MEDIA administrator</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 transform transition-transform duration-200 ${
              isMediaOpen ? 'rotate-180 fill-white' : 'rotate-0 fill-none'
            }`}
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth="2"
            fill="none"
          >
            <path d="M6 15l6-6 6 6" />
          </svg>
        </div>

        {/* Opciones adicionales al expandir MEDIA */}
        {isMediaOpen && (
          <div className='p-3'>
            <div className='w-full bg-white bg-opacity-0 hover:bg-opacity-10'>
              <p className='py-3 px-8 pr-16'>Plynium Agency</p>
            </div>
            <div className='w-full bg-white bg-opacity-0 hover:bg-opacity-10'>
              <p className='py-3 px-8 pr-16'>Portales</p>
            </div>
            <div className='w-full bg-white bg-opacity-0 hover:bg-opacity-10'>
              <p className='py-3 px-8 pr-16'>Buildinformer</p>
            </div>
            <div className='w-full bg-white bg-opacity-0 hover:bg-opacity-10'>
              <p className='py-3 px-8 pr-16'>Fenestrator</p>
            </div>
            <div className='w-full bg-white bg-opacity-0 hover:bg-opacity-10'>
              <p className='py-3 px-8 pr-16'>Sunshaders</p>
            </div>
            <div className='w-full bg-white bg-opacity-0 hover:bg-opacity-10'>
              <p className='py-3 px-8 pr-16'>PVCProfiles</p>
            </div>
            <div className='w-full bg-white bg-opacity-0 hover:bg-opacity-10'>
              <p className='py-3 px-8 pr-16'>AluminiumProfiles</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Leftbar;
