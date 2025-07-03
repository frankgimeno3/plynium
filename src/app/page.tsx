"use client";


import Image from "next/image";
import Hero from "./home/landingComponents/Hero";
import WhatAreYouLookingFor from "./home/landingComponents/WhatAreYouLookingFor";
import Showroom from "./home/landingComponents/Showroom";
import JoinTeam from "./home/landingComponents/JoinTeam";

export default function Home() {

  return (
    <div className="relative mx-auto z-10 bg-white">
      <Image src="/Hero.png" alt="hero" width={1000} height={1000} className="w-full  absolute  " />
      <div className="relative z-10 text-white">
        <Hero />
        <div className="bg-gray-100  "
          style={{
            position: "relative",
            zIndex: 10,
            borderTopLeftRadius: "50% 100px",
            borderTopRightRadius: "50% 100px",
          }} >
        </div>

          <div className="flex flex-col  mx-auto max-w-6xl py-24">
            <WhatAreYouLookingFor />
            <Showroom />
          </div>
          <JoinTeam />
      </div>

    </div>
  );
}
