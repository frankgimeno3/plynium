import React, { FC } from 'react';

interface HeroProps {
  
}

const Hero: FC<HeroProps> = ({ }) => {
  return (
    <div>
        <h1>Strategic Digital Marketing That Drives Business Growth</h1>
        <h2>Digital marketing agency specialized in technical media</h2>
        <button className='p-3 px-5'>Book your consultancy</button>
    </div>
  );
};

export default Hero;