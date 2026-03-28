import Link from 'next/link';
import React, { FC } from 'react';

interface JoinTeamProps {}

const JoinTeam: FC<JoinTeamProps> = () => {
  return (
    <section className="bg-[#DA6D00] px-4 py-16 text-center font-sans text-white sm:px-6 sm:py-20 md:py-28 lg:py-36">
      <div className="mx-auto max-w-5xl text-left">
        <h2 className="mb-4 text-2xl font-semibold sm:text-3xl md:text-4xl">Join Our Team</h2>
        <p className="mb-8 max-w-full text-sm leading-relaxed sm:text-base md:text-lg">
          We are a new and fast-growing company looking for talented professionals in Digital Marketing, Web Development,
          and those with knowledge or interest in Industrial, Software, or Technology sectors.
        </p>
        <div className="my-6 flex w-full min-w-0 flex-col">
          <p className="mb-1 text-left">Do you want to join us?</p>
          <input placeholder="Name and surnames" className="my-2 w-full min-w-0 rounded border border-gray-100 bg-white/10 px-4 py-2.5 placeholder:text-white/80" />
          <input placeholder="Your email here" className="my-2 w-full min-w-0 rounded border border-gray-100 bg-white/10 px-4 py-2.5 placeholder:text-white/80" />
          <input placeholder="Your linkedin profile link here" className="my-2 w-full min-w-0 rounded border border-gray-100 bg-white/10 px-4 py-2.5 placeholder:text-white/80" />
          <textarea placeholder="Why do you want to join us?" rows={4} className="my-2 w-full min-w-0 resize-y rounded border border-gray-100 bg-white/10 px-4 py-2.5 placeholder:text-white/80" />
        </div>
        <Link
          href="/home/contact"
          className="inline-flex rounded-md bg-white px-7 py-3 text-gray-700 transition hover:opacity-90"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default JoinTeam;
