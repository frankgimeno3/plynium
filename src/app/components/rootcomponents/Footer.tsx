import React, { FC } from 'react';

interface FooterProps {
  
}

const Footer: FC<FooterProps> = ({ }) => {
  return (
    <footer className='flex flex-row justify-between p-5 bg-black text-white p-12 px-24 p-12 z-50 relative '>
        <div className='flex flex-col w-1/4'>
          <p>Plynium</p>
          <p>Dirección</p>
        </div>
        <div className='flex flex-row justify-between w-full'>
          <div className='flex flex-col'>
            <p>LEGAL</p>
            <p>Legal Notice</p>
            <p>Privacy Policy</p>
            <p>Cookies Policy</p>
          </div>
          <div className='flex flex-col'>
            <p>OUR MEDIA</p>
            <p>BuildInformer.global</p>
            <p>GlassInformer.global</p>
            <p>Fenestrator.global</p>
            <p>SunShaders.global</p>
            <p>PvcProfiles.global</p>
            <p>AluminiumProfiles.global</p>
          </div>
          <div className='flex flex-col'>
            <p>SOCIAL</p>
            <p>Instagram</p>
            <p>Linkedin</p>
            <p>X</p>
            {/* <p>TikTok</p> */}
            <p>Youtube</p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;