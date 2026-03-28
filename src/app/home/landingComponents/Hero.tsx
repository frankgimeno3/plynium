import { RotatingRegionLabel } from '@/app/components/RotatingRegionLabel';
import Link from 'next/link';
import React, { FC, useRef, useState } from 'react';
import ButtonsRow from './ButtonsRow';

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const searchLinkRef = useRef<HTMLAnchorElement>(null);
  const trimmed = searchQuery.trim();
  const canSearch = trimmed.length > 0;
  const searchHref = `/home/search/${encodeURIComponent(trimmed)}`;

  return (
    <div className="relative mx-auto mb-8 flex min-h-[calc(100dvh-5rem)] w-full max-w-6xl flex-col px-4 pt-28 text-white sm:px-6 sm:pt-32 md:mb-12 md:pt-36">
      <div className="relative z-10 mx-auto flex w-full min-w-0 flex-grow flex-col justify-center">
        <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-end sm:gap-2">
          <h1 className="text-5xl font-bold text-[#DA6D00] sm:text-6xl md:text-7xl lg:text-8xl">Plynium</h1>
          <RotatingRegionLabel className="inline-block min-w-[7.5rem] text-lg text-white sm:min-w-[10rem] sm:pb-1 sm:text-2xl md:min-w-[11rem] md:pb-2 md:text-3xl" />
        </div>
        <h2 className="my-6 max-w-full text-base leading-snug text-white/95 sm:my-8 sm:text-lg md:text-xl lg:text-2xl">
          All-in-one platform for construction products and technical solutions — built for architects, builders, engineers, and on-site professionals looking for products, prices and quotes for their projects.
        </h2>
        <div className="flex w-full min-w-0 flex-row items-stretch gap-2">
          <input
            placeholder="Search, explore, benchmark, compare"
            className="min-h-11 min-w-0 flex-1 rounded border border-gray-100 bg-white/10 px-3 py-3 text-white placeholder:text-white/70 sm:px-4 sm:py-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && canSearch) {
                e.preventDefault();
                searchLinkRef.current?.click();
              }
            }}
          />
          {canSearch ? (
            <Link
              ref={searchLinkRef}
              href={searchHref}
              prefetch={false}
              className="flex h-11 w-12 shrink-0 items-center justify-center self-stretch rounded bg-gray-200 text-gray-700 transition-colors hover:bg-white sm:w-14 md:w-[60px]"
              aria-label="Search"
            >
              <img src="/magnifying-glass.svg" alt="" className="h-6 w-6" />
            </Link>
          ) : (
            <span
              className="flex h-11 w-12 shrink-0 cursor-not-allowed items-center justify-center self-stretch rounded bg-gray-400/50 text-gray-500 sm:w-14 md:w-[60px]"
              aria-hidden
            >
              <img src="/magnifying-glass.svg" alt="" className="h-6 w-6 opacity-60" />
            </span>
          )}
        </div>
        <ButtonsRow />
      </div>
    </div>
  );
};

export default Hero;
