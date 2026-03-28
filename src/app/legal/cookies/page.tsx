import React, { FC } from 'react';

interface CookiesProps {
  
}

const Cookies: FC<CookiesProps> = ({ }) => {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-36 text-gray-900">
      <h1 className="text-3xl font-bold text-[#DA6D00]">Cookies</h1>
      <p className="mt-6 leading-relaxed text-gray-800">Cookies policy content goes here.</p>
    </div>
  );
};

export default Cookies;