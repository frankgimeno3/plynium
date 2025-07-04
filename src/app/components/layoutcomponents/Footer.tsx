import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface FooterProps {
  
}

const Footer: FC<FooterProps> = ({ }) => {
  const router = useRouter()

  const handleRedirection = (path:string)=>{
    router.push(path)
  }

  return (
    <footer className='flex flex-row justify-between p-5 bg-black text-white px-24 py-16 z-50 relative '>
        <div className='flex flex-col w-1/4'>
          <p className='text-xl font-bold '>Plynium</p>
          <p>Dirección</p>
        </div>
        <div className='flex flex-row justify-between w-full px-24'>
          <div className='flex flex-col gap-2'>
            <p className='text-xl font-bold '>Legal</p>
            <p className='text-gray-400 hover:text-gray-100 cursor-pointer text-sm'
            onClick={()=>{handleRedirection('/footer/legalnotice')}}>Legal Notice</p>
            <p className='text-gray-400 hover:text-gray-100 cursor-pointer text-sm'
            onClick={()=>{handleRedirection('/footer/privacypolicy')}}>Privacy Policy</p>
            <p className='text-gray-400 hover:text-gray-100 cursor-pointer text-sm'
            onClick={()=>{handleRedirection('/footer/cookies')}}>Cookies Policy</p>
          </div>
          {/* <div className='flex flex-col gap-2'>
            <p className='text-xl font-bold '>Our media</p>
            <p className='text-gray-400 hover:text-gray-100 cursor-pointer text-sm '>BuildInformer.global</p>
            <p className='text-gray-400 hover:text-gray-100 cursor-pointer text-sm '>GlassInformer.global</p>
            <p className='text-gray-400 hover:text-gray-100 cursor-pointer text-sm '>Fenestrator.global</p>
            <p className='text-gray-400 hover:text-gray-100 cursor-pointer text-sm '>SunShaders.global</p>
            <p className='text-gray-400 hover:text-gray-100 cursor-pointer text-sm '>PvcProfiles.global</p>
            <p className='text-gray-400 hover:text-gray-100 cursor-pointer text-sm '>AluminiumProfiles.global</p>
          </div> */}
          <div className='flex flex-col gap-2'>
            <p className='text-xl font-bold '>Social</p>
            <p className='text-gray-400 hover:text-gray-100 cursor-pointer text-sm '>Instagram</p>
            <p className='text-gray-400 hover:text-gray-100 cursor-pointer text-sm '>Linkedin</p>
            <p className='text-gray-400 hover:text-gray-100 cursor-pointer text-sm '>X</p>
            {/* <p>TikTok</p> */}
            <p className='text-gray-400 hover:text-gray-100 cursor-pointer text-sm '>Youtube</p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;