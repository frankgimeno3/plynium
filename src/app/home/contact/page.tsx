"use client";

import React, { FC, FormEvent } from "react";

const Contact: FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="min-h-screen bg-[#DA6D00] px-4 pb-16 pt-36 text-center font-sans text-white sm:px-6 sm:pb-20 sm:pt-40 md:pb-28 md:pt-44 lg:pb-36 lg:pt-48">
      <div className="mx-auto max-w-5xl text-left">
        <h1 className="mb-4 text-2xl font-semibold sm:text-3xl md:text-4xl">Contact</h1>
        <p className="mb-8 max-w-full text-sm leading-relaxed sm:text-base md:text-lg">
          Questions, demos, or partnerships — send us a message and we will get back to you.
        </p>
        <form onSubmit={handleSubmit} className="my-6 flex w-full min-w-0 flex-col">
          <p className="mb-1 text-left">How can we help?</p>
          <input
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Name and surnames"
            className="my-2 w-full min-w-0 rounded border border-gray-100 bg-white/10 px-4 py-2.5 placeholder:text-white/80"
          />
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Your email here"
            className="my-2 w-full min-w-0 rounded border border-gray-100 bg-white/10 px-4 py-2.5 placeholder:text-white/80"
          />
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            className="my-2 w-full min-w-0 rounded border border-gray-100 bg-white/10 px-4 py-2.5 placeholder:text-white/80"
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows={4}
            className="my-2 w-full min-w-0 resize-y rounded border border-gray-100 bg-white/10 px-4 py-2.5 placeholder:text-white/80"
          />
          <button
            type="submit"
            className="mt-4 inline-flex w-fit rounded-md bg-white px-7 py-3 text-gray-700 transition hover:opacity-90"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
