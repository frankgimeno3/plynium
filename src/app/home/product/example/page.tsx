import React, { FC } from 'react';
import Image from 'next/image';

interface ExampleProps {
  
}

const Example: FC<ExampleProps> = ({ }) => {
  return (
    <div className='mx-auto max-w-3xl px-4 pb-16 pt-36 text-gray-800'>
        <h1 className="text-3xl font-bold text-[#DA6D00]">Product Example Title</h1>
        <p className="mt-2 leading-relaxed">Product brief description</p>
        <div>
        <Image src="/panel.png" height={500} width={500} alt="BIM" className='mx-auto ' />
        </div>
        <p className="mt-6 font-semibold text-gray-900">Title again</p>
        <p className="mt-2">Brand</p>
        <p className="mt-2">Categories list</p>
        <p className="mt-2">Manufacturer company name</p>
        <p className="mt-2">Manufacturer country</p>
        <p className="mt-2">Description introduction</p>
        <p className="mt-2 leading-relaxed">Full description</p>
        <p className="mt-4">Ask for a custom quote</p>
        <p className="mt-2">Benchmark for this product</p>
    </div>
  );
};

export default Example;