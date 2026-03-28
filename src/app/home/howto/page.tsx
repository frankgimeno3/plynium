import React, { FC } from 'react';

interface HowToProps {
  
}

const HowTo: FC<HowToProps> = ({ }) => {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-36 text-gray-900">
        <h1 className="text-4xl font-bold text-[#DA6D00]">How to use plynium?</h1>
        <p className="mt-4 leading-relaxed">AQUI TENDRIAN QUE HABER REDIRECCIONES A PRODUCT Y A BENCHMARK</p>
        <p className="mt-3 leading-relaxed">Plynium is a platform for professionals who take decisions on the purchasing process of companies</p>
        <p className="mt-3 leading-relaxed">We offer tools to improve your purchasing on the costs side and on the features side</p>
        <div className='mt-8 rounded-lg border border-gray-200 bg-white p-8 shadow-sm'>
            <p className="font-semibold text-gray-900">There are two ways of doing this</p>
            <p className="mt-2 text-gray-800">1- Look for products in our database, ask them for prices, and compare to your current ones </p>
            <p className="mt-2 text-gray-800">2- Upload your product needs and     </p>
        </div>
        <p className="mt-8 leading-relaxed text-gray-800">Also, if you have a specific project, plynium allows you to publish your needs </p>
    </div>
  );
};

export default HowTo;