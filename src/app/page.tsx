"use client";

 import Hero from "./components/landingComponents/Hero";
import JoinTeam from "./components/landingComponents/JoinTeam";
import Image from "next/image";
// import { useEffect, useRef } from "react";

export default function Home() {
  // const videoRef = useRef<HTMLVideoElement>(null);

  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.playbackRate = 0.9;
  //   }
  // }, []);

  return (
    <div className="relative mx-auto z-10">
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
        <JoinTeam />
      </div>
    </div>
  );
}
