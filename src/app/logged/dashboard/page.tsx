"use client"
import React, { FC } from 'react';
import Leftbar from '../LeftBar';

interface DashboardProps {
  
}

const Dashboard: FC<DashboardProps> = ({ }) => {
  return (
    <div className='flex flex-row text-gray-500 bg-gray-100  h-full' style={{"paddingTop":"78px"}}>
      <Leftbar/>
    <div className='flex flex-col  min-h-screen p-12'>
      <p>Dashboard de notificaciones</p>
      <p>Aqui tienen que haber notificaciones para no tener que ir a cada media en concreto</p>
    </div>
  
    </div>
    );
};

export default Dashboard;