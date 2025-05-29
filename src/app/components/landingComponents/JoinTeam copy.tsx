import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface JoinTeamProps {}

const JoinTeam: FC<JoinTeamProps> = () => {
  const router = useRouter();

  const handleContactClick = () => {
    router.push('/en/contact');
  };

  return (
    <section className="  px-4 text-center font-sans text-white bg-white bg-opacity-20">
      <div className='max-w-5xl mx-auto py-80 '>
      <h2 className="text-3xl md:text-4xl font-semibold mb-4 max-w-5xl text-left">Join Our Team</h2>
      <p className="text-base md:text-lg mb-8 leading-relaxed max-w-5xl text-left">
        We are a new and fast-growing company looking for talented professionals in Digital Marketing, Web Development,
        and those with knowledge or interest in Industrial, Software, or Technology sectors.
      </p>
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
