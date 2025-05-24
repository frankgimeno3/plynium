import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface JoinTeamProps {}

const JoinTeam: FC<JoinTeamProps> = () => {
  const router = useRouter();

  const handleContactClick = () => {
    router.push('/en/contact');
  };

  return (
    <section className=" px-4 text-center font-sans text-white bg-white bg-opacity-20">
      <div className='max-w-5xl mx-auto py-44 '>
      <h2 className="text-3xl md:text-4xl font-semibold mb-4 max-w-5xl text-left">Join Our Team</h2>
      <p className="text-base md:text-lg mb-8 leading-relaxed max-w-5xl text-left">
        We are a new and fast-growing company looking for talented professionals in Digital Marketing, Web Development,
        and those with knowledge or interest in Industrial, Software, or Technology sectors.
      </p>
      <div className='flex flex-col my-6'>
        <p className='text-left'>Do you want to join us?</p>
        <input placeholder='Name and surnames' className=' rounded bg-white bg-opacity-10 border border-gray-100 px-4 py-2 my-2 w-full'/>
        <input placeholder='Your email here' className=' rounded bg-white bg-opacity-10 border border-gray-100 px-4 py-2 my-2 w-full'/>
        <input placeholder='Your linkedin profile link here' className=' rounded bg-white bg-opacity-10 border border-gray-100 px-4 py-2 my-2 w-full'/>
        <textarea placeholder='Why do you want to join us?' className=' rounded bg-white bg-opacity-10 border border-gray-100 px-4 py-2 my-2 w-full'/>
      </div>
      <button
        onClick={handleContactClick}
        className="flex bg-white text-gray-700 px-7 py-3 rounded-md   hover:opacity-90 transition"
      >
        Contact Us
      </button>
      </div>
    </section>
  );
};

export default JoinTeam;
