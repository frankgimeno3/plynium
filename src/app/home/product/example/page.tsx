import React, { FC } from 'react';
import Image from 'next/image';

interface ExampleProps {
  
}

const Example: FC<ExampleProps> = ({ }) => {
  return (
    <div>
        <p>Product Example Title</p>
        <p>Product brief description</p>
        <div>
        <Image src="/panel.png" height={500} width={500} alt="BIM" className='mx-auto ' />
        </div>
        <p>Title again</p>
        <p>Brand</p>
        <p>Categories list</p>
        <p>Manufacturer company name</p>
        <p>Manufacturer country</p>
        <p>Description introduction</p>
        <p>Full description</p>
        <p>Ask for a custom quote</p>
        <p>Benchmark for this product</p>
    </div>
  );
};

export default Example;