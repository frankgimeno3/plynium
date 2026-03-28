'use client';

import React, { ReactNode } from 'react';
 
interface LoggedLayoutProps {
  children: ReactNode;
}

const LoggedLayout = ({ children }: LoggedLayoutProps) => {
  return (
    <div className="flex h-full flex-row bg-gray-100 text-gray-900" style={{ paddingTop: '78px' }}>
       <div className="flex flex-col min-h-screen p-12 w-full">
        {children}
      </div>
    </div>
  );
};

export default LoggedLayout;
