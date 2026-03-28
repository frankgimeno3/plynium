import React, { FC } from 'react';

interface BenchmarkingProps {
  
}

const Benchmarking: FC<BenchmarkingProps> = ({ }) => {
  return (
    <div className='mx-auto max-w-3xl px-4 pb-16 pt-36 text-gray-800'>
        <h1 className="text-4xl font-bold text-[#DA6D00]">Benchmarking</h1>
        <p className="mt-4 leading-relaxed">Explicación de cómo funciona</p>
        <p className="mt-3 leading-relaxed">Redirección a quotes</p>
        <p className="mt-3 leading-relaxed">Botón de crear cuenta</p>
    </div>
  );
};

export default Benchmarking;