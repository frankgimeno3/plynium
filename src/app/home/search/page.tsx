"use client";

import Link from "next/link";
import React, { FC, useRef, useState } from "react";

const Search: FC = () => {
  const [searchcontent, setsearchcontent] = useState("");
  const searchLinkRef = useRef<HTMLAnchorElement>(null);
  const trimmed = searchcontent.trim();
  const canSearch = trimmed.length > 0;
  const searchHref = `/home/search/${encodeURIComponent(trimmed)}`;

  return (
    <div className="min-h-screen w-full bg-gray-700 text-gray-50">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-36">
        <h1 className="text-5xl font-bold text-[#DA6D00] sm:text-6xl md:text-7xl lg:text-8xl">Search</h1>

        <h2 className="my-8 text-xl text-white sm:text-2xl">Please write what you are looking for and press search</h2>

        <div className="mb-12 flex w-full flex-row">
          <input
            placeholder="Search, explore, benchmark, compare"
            className="mr-1 w-full max-w-[1005px] rounded border border-white/30 bg-white/15 px-4 py-3 text-white placeholder:text-white/65"
            value={searchcontent}
            onChange={(e) => setsearchcontent(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && canSearch) {
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
              className="flex w-[60px] shrink-0 items-center justify-center rounded bg-gray-200 p-3 text-gray-800 transition-colors hover:bg-white hover:text-black"
              aria-label="Search"
            >
              <img src="/magnifying-glass.svg" alt="" className="h-6 w-6" />
            </Link>
          ) : (
            <span
              className="flex w-[60px] shrink-0 cursor-not-allowed items-center justify-center rounded bg-gray-400/50 p-3 text-gray-500"
              aria-hidden
            >
              <img src="/magnifying-glass.svg" alt="" className="h-6 w-6 opacity-60" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
