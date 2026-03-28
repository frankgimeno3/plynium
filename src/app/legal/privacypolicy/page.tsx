import React, { FC } from 'react';

interface PrivacyPolicyProps {
  
}

const PrivacyPolicy: FC<PrivacyPolicyProps> = ({ }) => {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-36 text-gray-900">
      <h1 className="text-3xl font-bold text-[#DA6D00]">Privacy policy</h1>
      <p className="mt-6 leading-relaxed text-gray-800">Privacy policy content goes here.</p>
    </div>
  );
};

export default PrivacyPolicy;