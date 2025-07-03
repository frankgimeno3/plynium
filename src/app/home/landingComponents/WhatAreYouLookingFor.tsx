import React, { FC } from 'react';

interface WhatAreYouLookingForProps {

}

const WhatAreYouLookingFor: FC<WhatAreYouLookingForProps> = ({ }) => {
    return (
        <div className='flex flex-col pt-12 text-gray-600 gap-6  '>
            <h1 className="text-6xl text-[#DA6D00] font-bold  ">
                What are you looking for?
            </h1>
            <div className='flex flex-row bg-white rounded shadow p-5 hover:bg-gray-100/50 border border-gray-100 cursor-pointer'>
                <p className='bg-[#DA6D00] text-white text-3xl items-center p-5 rounded-xl shadow-lg px-7 font-bold '>&gt;</p>
                <div className='flex flex-col pl-6'>
                    <p className='font-bold text-lg max-h-8'>Products and Providers</p>
                    <p>Exploring alternatives to current providers by comparing prices and product features.</p>
                    <p>Finding new suppliers for my existing product needs.</p>
                </div>
            </div>
            <div className='flex flex-row bg-white rounded shadow p-5 hover:bg-gray-100/50 border border-gray-100 cursor-pointer'>
                <p className='bg-[#DA6D00] text-white text-3xl items-center p-5 rounded-xl shadow-lg px-7 font-bold'>&gt;</p>
                <div className='flex flex-col pl-6'>
                    <p className='font-bold text-lg max-h-8'>Tailored Quotes for My Projects</p>
                    <p>Evaluating options beyond current providers by reviewing prices and specifications.</p>
                    <p>Seeking customized solutions that require specialized pricing based on specific needs.</p>
                </div>
            </div>
        </div>
    );
};

export default WhatAreYouLookingFor;