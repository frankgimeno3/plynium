"use client"

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const footerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null); // ← Referencia al video
  const [isNearFooter, setIsNearFooter] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;
      const footerTop = footerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      setIsNearFooter(footerTop < windowHeight + 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5
    }
  }, []);
  
  return (
    <div className="relative flex flex-col min-h-screen w-full bg-gray-800 text-white opacity-90">
      <video
        ref={videoRef}  
        src="/abstract.mp4"
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-zinc-900 opacity-70 z-10" />
    </div>
  );
}
