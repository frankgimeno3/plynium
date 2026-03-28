import React, { FC } from 'react';

interface SkeletonProps {
  industryElement:string
}

const Skeleton: FC<SkeletonProps> = ({industryElement}) => {
  return (
    <div className='mx-auto max-w-6xl px-4 py-24 text-lg text-gray-800 sm:py-32 md:py-44'>
      <p className="text-4xl font-bold text-[#DA6D00] sm:text-5xl md:text-6xl">
        Are you looking for products, providers or prices regarding <span className='text-gray-900 md:text-7xl'>{industryElement}</span>?
      </p>
      <p className='pt-12 text-lg text-gray-800'>In Plynium we offer solutions to help you with your purchases:</p>
      <ul className='flex flex-col gap-2 pl-5'>
        <li className='flex flex-row cursor-pointer'>
          <div className='bg-[#DA6D00] text-white px-2 rounded-md shadow-lg '>&gt;</div>
          <p className='pl-3 text-gray-900'>Finding alternatives to your current providers</p></li>
        <li className='flex flex-row cursor-pointer'>
          <div className='bg-[#DA6D00] text-white px-2 rounded-md shadow-lg '>&gt;</div>
          <p className='pl-3 text-gray-900'>Comparing your current purchasing costs to the market price</p></li>
        <li className='flex flex-row cursor-pointer'>
          <div className='bg-[#DA6D00] text-white px-2 rounded-md shadow-lg '>&gt;</div>
          <p className='pl-3 text-gray-900'>Looking for distributors or mantainance in your country</p></li>
      </ul>
      <button className='mt-12 p-3 rounded-xl shadow-lg hover:shadow-xl bg-[#DA6D00] text-white cursor-pointer 
      hover:bg-[#DA6D00]/90'>
        Create an account to start 
      </button>
      <p className="pt-24 text-4xl font-bold text-[#DA6D00] sm:text-5xl md:text-6xl">
        Do you want to offer services as a provider instead?
      </p>
      <p className="text-gray-800">In plynium you can look for providers and offer products yourself with the same account</p>

            <button className='mt-12 p-3 rounded-xl shadow-lg hover:shadow-xl bg-[#DA6D00] text-white cursor-pointer 
      hover:bg-[#DA6D00]/90'>
        Create an account to start 
      </button>
    </div>
      );
};

export default Skeleton;