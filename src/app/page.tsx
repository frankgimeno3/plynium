"use client";


import Image from "next/image";
import Hero from "./home/landingComponents/Hero";
import WhatAreYouLookingFor from "./home/landingComponents/WhatAreYouLookingFor";
import Showroom from "./home/landingComponents/Showroom";
import JoinTeam from "./home/landingComponents/JoinTeam";

// import { useEffect, useRef } from "react";

export default function Home() {
  // const videoRef = useRef<HTMLVideoElement>(null);

  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.playbackRate = 0.9;
  //   }
  // }, []);

  return (
    <div className="relative mx-auto z-10 bg-white">
      {/* <video
        ref={videoRef}
        src="/abstract.mp4"
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-screen h-screen object-cover z-0"
      /> */}
      <Image src="/Hero.png" alt="hero" width={1000} height={1000} className="w-full  absolute  " />
      <div className="relative z-10 text-white">
        <Hero />
        <div
          className="bg-gray-100  "
          style={{
            position: "relative",
            zIndex: 10,
            borderTopLeftRadius: "50% 100px",
            borderTopRightRadius: "50% 100px",

          }}
        >
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
