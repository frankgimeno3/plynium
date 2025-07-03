import React, { FC } from 'react';

interface SkeletonProps {
  industryElement:string
}

const Skeleton: FC<SkeletonProps> = ({industryElement}) => {
  return (
    <div className='py-44 text-gray-600 max-w-6xl mx-auto text-xl'>
      <p className="text-[#DA6D00] font-bold text-6xl ">
        Are you looking for products, providers or prices regarding <span className='text-gray-600 text-7xl '>{industryElement}</span>?
      </p>
      <p className='text-gray-600 text-lg pt-12'>In Plynium we offer solutions to help you:</p>
      <ul className='flex flex-col gap-2 pl-5'>
        <li className='flex flex-row cursor-pointer'>
          <div className='bg-[#DA6D00] text-white px-2 rounded-md shadow-lg '>&gt;</div>
          <p className='pl-3'>Finding alternatives to your current providers</p></li>
        <li className='flex flex-row cursor-pointer'>
          <div className='bg-[#DA6D00] text-white px-2 rounded-md shadow-lg '>&gt;</div>
          <p className='pl-3'>Comparing your current purchasing costs to the market price</p></li>
        <li className='flex flex-row cursor-pointer'>
          <div className='bg-[#DA6D00] text-white px-2 rounded-md shadow-lg '>&gt;</div>
          <p className='pl-3'>Looking for distributors or mantainance in your country</p></li>
      </ul>
      <button className='mt-12 p-3 rounded-xl shadow-lg hover:shadow-xl bg-[#DA6D00] text-white cursor-pointer 
      hover:bg-[#DA6D00]/90'>
        Create an account to start 
      </button>
      <p className="text-6xl text-[#DA6D00] font-bold  pt-24">
        Do you want to offer services as a provider instead?
      </p>
      <p>In plynium you can look for providers and offer products yourself with the same account</p>

            <button className='mt-12 p-3 rounded-xl shadow-lg hover:shadow-xl bg-[#DA6D00] text-white cursor-pointer 
      hover:bg-[#DA6D00]/90'>
        Create an account to start 
      </button>
    </div>
      );
};

export default Skeleton;