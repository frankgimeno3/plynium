"use client"
import Showroom from '@/app/home/landingComponents/Showroom';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface DashboardProps {

}

const Dashboard: FC<DashboardProps> = ({ }) => {
  const router = useRouter()
  const handleRedirection = (path: string) => {
    router.push(path)
  }
  return (
    <div>
      <h1 className="text-6xl text-[#DA6D00] font-bold  ">
        Dashboard
      </h1>
      <div className='flex flex-row bg-white rounded shadow p-5 hover:bg-gray-100/50 border border-gray-100 cursor-pointer my-2'
        onClick={() => { handleRedirection('/home/benchmarking') }}>
        <p className='bg-[#DA6D00] text-white text-3xl items-center p-5 rounded-xl shadow-lg px-7 font-bold '>&gt;</p>
        <div className='flex flex-col pl-6'>
          <p className='font-bold text-lg max-h-8'>Quotes</p>
          <p>Exploring alternatives to current providers by comparing prices and product features.</p>
          <p>Finding new suppliers for my existing product needs.</p>
        </div>
      </div>
      <div className='flex flex-row bg-white rounded shadow p-5 hover:bg-gray-100/50 border border-gray-100 cursor-pointer my-2'
        onClick={() => { handleRedirection('/home/quotes') }}>
        <p className='bg-[#DA6D00] text-white text-3xl items-center p-5 rounded-xl shadow-lg px-7 font-bold'>&gt;</p>
        <div className='flex flex-col pl-6'>
          <p className='font-bold text-lg max-h-8'>Offers</p>
          <p>Evaluating options beyond current providers by reviewing prices and specifications.</p>
          <p>Seeking customized solutions that require specialized pricing based on specific needs.</p>
        </div>
      </div>
      <div className='flex flex-row bg-white rounded shadow p-5 hover:bg-gray-100/50 border border-gray-100 cursor-pointer my-2'
        onClick={() => { handleRedirection('/home/quotes') }}>
        <p className='bg-[#DA6D00] text-white text-3xl items-center p-5 rounded-xl shadow-lg px-7 font-bold'>&gt;</p>
        <div className='flex flex-col pl-6'>
          <p className='font-bold text-lg max-h-8'>Studies</p>
          <p>Evaluating options beyond current providers by reviewing prices and specifications.</p>
          <p>Seeking customized solutions that require specialized pricing based on specific needs.</p>
        </div>
      </div>
      <div className='flex flex-row items-center justify-between pt-12'>
        <p className="text-6xl text-[#DA6D00] font-bold  "> Productos recomendados </p>
        <div className='flex flex-row items-center gap-3'>
          <button className='bg-[#DA6D00] text-white shadow-xl rounded-lg p-5 cursor-pointer w-56'>Gestionar suscripciones</button>
          <button className='bg-[#DA6D00] text-white shadow-xl rounded-lg p-5 cursor-pointer w-56'>Gestionar preferencias</button>
          <button className='bg-[#DA6D00] text-white shadow-xl rounded-lg p-5 cursor-pointer w-56'>Explorar</button>
        </div>
      </div>
                  <button className='bg-[#DA6D00] text-white shadow-xl rounded-lg p-5 cursor-pointer w-56 mt-5'>Aplicar filtros</button>
    
  <Showroom/>    
</div>
  );
};

export default Dashboard;