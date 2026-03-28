"use client"
import Link from 'next/link';
import React, { FC } from 'react';

interface FooterProps {
}

const Footer: FC<FooterProps> = ({ }) => {

  return (
    <footer className='flex flex-row justify-between p-5 bg-black text-white px-24 py-16 z-50 relative '>
        <div className='flex flex-col w-1/4'>
          <p className='text-xl font-bold '>Plynium</p>
          <p>Dirección</p>
        </div>
        <div className='flex flex-row justify-between w-full px-24'>
          <div className='flex flex-col gap-2'>
            <p className='text-xl font-bold '>Legal</p>
            <Link href="/legal/legalnotice" className='text-gray-300 hover:text-white text-sm'>Legal Notice</Link>
            <Link href="/legal/privacypolicy" className='text-gray-300 hover:text-white text-sm'>Privacy Policy</Link>
            <Link href="/legal/cookies" className='text-gray-300 hover:text-white text-sm'>Cookies Policy</Link>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-xl font-bold '>Social</p>
            <span className='text-gray-300 text-sm'>Instagram</span>
            <span className='text-gray-300 text-sm'>Linkedin</span>
            <span className='text-gray-300 text-sm'>X</span>
            <span className='text-gray-300 text-sm'>Youtube</span>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
