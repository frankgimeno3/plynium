"use client";


import Image from "next/image";
import Hero from "./home/landingComponents/Hero";
import WhatAreYouLookingFor from "./home/landingComponents/WhatAreYouLookingFor";
import Showroom from "./home/landingComponents/Showroom";
import JoinTeam from "./home/landingComponents/JoinTeam";

export default function Home() {

  return (
    <div className="relative z-10 mx-auto w-full max-w-[100vw] overflow-x-hidden bg-white">
      {/* Altura = contenido del Hero (título, búsqueda, botones); la imagen rellena todo el bloque */}
      <section className="relative w-full">
        <Image
          src="/Hero.png"
          alt=""
          fill
          className="pointer-events-none object-cover object-[center_20%] sm:object-[center_top]"
          sizes="100vw"
          priority
        />
        <div className="relative z-10 text-white">
          <Hero />
        </div>
      </section>

      <div className="relative z-10 text-white">
        <div
          className="relative z-10 bg-gray-100 [border-top-left-radius:50%_40px] [border-top-right-radius:50%_40px] sm:[border-top-left-radius:50%_72px] sm:[border-top-right-radius:50%_72px] md:[border-top-left-radius:50%_100px] md:[border-top-right-radius:50%_100px]"
        />

        <div className="mx-auto flex w-full max-w-6xl flex-col px-4 py-12 sm:px-6 sm:py-16 md:py-24">
          <WhatAreYouLookingFor />
          <Showroom />
        </div>
        <JoinTeam />
      </div>

    </div>
  );
}
