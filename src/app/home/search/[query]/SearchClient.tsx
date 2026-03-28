"use client";

import { RotatingRegionLabel } from "@/app/components/RotatingRegionLabel";
import Link from "next/link";
import React, { FC, useEffect, useRef, useState } from "react";

interface SearchClientProps {
  query: string;
  pathPrefix?: string;
}

const SearchClient: FC<SearchClientProps> = ({ query, pathPrefix = "/home/search" }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentQuery, setCurrentQuery] = useState("");
  const searchLinkRef = useRef<HTMLAnchorElement>(null);
  const trimmed = searchQuery.trim();
  const canSearch = trimmed.length > 0;
  const searchHref = `${pathPrefix}/${encodeURIComponent(trimmed)}`;

  useEffect(() => {
    const decoded = decodeURIComponent(query || "");
    setSearchQuery(decoded);
    setCurrentQuery(decoded);
  }, [query]);

  return (
    <div className="min-h-screen w-full bg-gray-700 text-gray-50">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-36">
        <div className="mb-4 flex flex-row items-end gap-2">
          <h1 className="text-5xl font-bold text-[#DA6D00] sm:text-6xl md:text-7xl lg:text-8xl">Plynium</h1>
          <RotatingRegionLabel className="inline-block min-w-[9rem] pb-2 text-2xl text-white sm:min-w-[11rem] sm:text-3xl" />
        </div>

        <h2 className="my-8 text-xl leading-snug text-white sm:text-2xl">
          All-in-one platform for construction products and technical solutions — built for architects, builders, engineers,
          and on-site professionals looking for products, prices and quotes for their projects.
        </h2>

        <div className="mb-12 flex w-full flex-row">
          <input
            placeholder="Search, explore, benchmark, compare"
            className="mr-1 w-full max-w-[1005px] rounded border border-white/30 bg-white/15 px-4 py-3 text-white placeholder:text-white/65"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
              className="flex h-[52px] w-[60px] max-w-[60px] shrink-0 items-center justify-center rounded bg-gray-200 p-3 text-gray-800 transition-colors hover:bg-white hover:text-black"
              aria-label="Search"
            >
              <img src="/magnifying-glass.svg" alt="" className="h-6 w-6" />
            </Link>
          ) : (
            <span
              className="flex h-[52px] w-[60px] max-w-[60px] shrink-0 cursor-not-allowed items-center justify-center rounded bg-gray-400/50 p-3 text-gray-500"
              aria-hidden
            >
              <img src="/magnifying-glass.svg" alt="" className="h-6 w-6 opacity-60" />
            </span>
          )}
        </div>

        {currentQuery && (
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-white sm:text-3xl">Search results for: &quot;{currentQuery}&quot;</h3>
            <ul className="space-y-4">
              <li className="rounded border border-white/20 bg-white/10 p-4 text-gray-50">🔍 Result for &quot;{currentQuery}&quot; #1</li>
              <li className="rounded border border-white/20 bg-white/10 p-4 text-gray-50">🔍 Result for &quot;{currentQuery}&quot; #2</li>
              <li className="rounded border border-white/20 bg-white/10 p-4 text-gray-50">🔍 Result for &quot;{currentQuery}&quot; #3</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchClient;
