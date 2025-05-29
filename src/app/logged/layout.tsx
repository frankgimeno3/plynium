'use client';

import React, { ReactNode } from 'react';
import Leftbar from './LeftBar';

interface LoggedLayoutProps {
  children: ReactNode;
}

const LoggedLayout = ({ children }: LoggedLayoutProps) => {
  return (
    <div className="flex flex-row text-gray-500 bg-gray-100 h-full" style={{ paddingTop: '78px' }}>
      <Leftbar />
      <div className="flex flex-col min-h-screen p-12 w-full">
        {children}
      </div>
    </div>
  );
};

export default LoggedLayout;
