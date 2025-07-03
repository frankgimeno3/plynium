import React, { FC } from 'react';

interface BenchmarkingProps {
  
}

const Benchmarking: FC<BenchmarkingProps> = ({ }) => {
  return (
    <div className='pt-36 text-gray-600'>
        <p>Benchmarking</p>
        <p>Explicación de cómo funciona</p>
        <p>Redirección a quotes</p>
        <p>Botón de crear cuenta</p>
    </div>
  );
};

export default Benchmarking;