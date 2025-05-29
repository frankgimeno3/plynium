"use client"
import React, { FC } from 'react';
import Leftbar from '../LeftBar';

interface DashboardProps {
  
}

const Dashboard: FC<DashboardProps> = ({ }) => {
  return (
    <div className='flex flex-row text-gray-500 pt-24'>
      <Leftbar/>
    <div className='flex flex-col'>
      <p>Dashboard</p>
      <p>Aqui tienen que haber notificaciones para no tener que ir a cada media en concreto</p>
    </div>
  
    </div>
    );
};

export default Dashboard;