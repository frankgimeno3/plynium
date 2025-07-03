import React, { FC } from 'react';

interface QuotesProps {
  
}

const Quotes: FC<QuotesProps> = ({ }) => {
  return (
    <div className='pt-36 text-gray-600'>
        <p>Quotes</p>
        <p>Explicación de cómo funcionan las quotes</p>
        <p>Redirección a benchmarking</p>
        <p>Botón de crear cuenta</p>
    </div>
  );
};

export default Quotes;