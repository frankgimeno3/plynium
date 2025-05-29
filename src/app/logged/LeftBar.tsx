import React, { FC, useState } from 'react';

interface LeftbarProps {
  
}

const Leftbar: FC<LeftbarProps> = ({ }) => {
    const [leftBarState, setLeftBarState] = useState()
  return (
    <div className='flex flex-col h-full max-w-2xl'>
        <div className='w-full bg-white bg-opacity-5 hover:bg-opacity-10 text-gray-700  '>
            <p>Dashboard principal</p>
        </div>
            <p>Plynium Agency</p>
            <p>Portales</p>
            <p>Buildinformer</p>
            <p>Fenestrator</p>
            <p>Sunshaders</p>
            <p>PVCProfiles</p>
            <p>AluminiumProfiles</p>
    </div>
  );
};

export default Leftbar;