"use client"
import React, { FC } from 'react';

interface ContactProps {
  
}

const Contact: FC<ContactProps> = ({ }) => {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-36 text-gray-900">
      <h1 className="text-4xl font-bold text-[#DA6D00]">Contact</h1>
      <p className="mt-4 text-gray-800 leading-relaxed">Contact page content goes here.</p>
    </div>
  );
};

export default Contact;