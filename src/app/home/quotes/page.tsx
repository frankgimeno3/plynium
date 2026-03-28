import React, { FC } from 'react';

interface QuotesProps {
  
}

const Quotes: FC<QuotesProps> = ({ }) => {
  return (
    <div className='mx-auto max-w-3xl px-4 pb-16 pt-36 text-gray-800'>
        <h1 className="text-4xl font-bold text-[#DA6D00]">Quotes</h1>
        <p className="mt-4 leading-relaxed">Explicación de cómo funcionan las quotes</p>
        <p className="mt-3 leading-relaxed">Redirección a benchmarking</p>
        <p className="mt-3 leading-relaxed">Botón de crear cuenta</p>
    </div>
  );
};

export default Quotes;