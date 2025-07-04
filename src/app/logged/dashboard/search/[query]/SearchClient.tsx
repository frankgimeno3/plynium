'use client';

import { useRouter } from 'next/navigation';
import React, { FC, useState, useEffect } from 'react';

interface SearchClientProps {
  query: string;
}

const SearchClient: FC<SearchClientProps> = ({ query }) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentQuery, setCurrentQuery] = useState('');

  useEffect(() => {
    const decoded = decodeURIComponent(query || '');
    setSearchQuery(decoded);
    setCurrentQuery(decoded);
  }, [query]);

  const handleRedirection = () => {
    if (!searchQuery.trim()) return;
    const encodedQuery = encodeURIComponent(searchQuery.trim());
    router.push(`/search/${encodedQuery}`);
  };

  return (
    <div className="max-w-6xl mx-auto pt-36 px-4 bg-gray-600">
      <div className="flex flex-row items-end gap-2 mb-4">
        <h1 className="text-8xl text-[#DA6D00] font-bold">Plynium</h1>
        <p className="text-white text-3xl pb-2">Europe</p>
      </div>

      <h2 className="text-2xl my-8">
        All-in-one platform for construction products and technical solutions — built for architects, builders, engineers, and on-site professionals looking for products, prices and quotes for their projects.
      </h2>

      <div className="flex flex-row w-full mb-12">
        <input
          placeholder="Search, explore, benchmark, compare"
          className="rounded bg-white bg-opacity-10 border border-gray-100 px-4 mr-1 w-full max-w-[1005px]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleRedirection();
          }}
        />
        <button
          className="p-3 px-5 bg-gray-200 rounded hover:bg-white hover:text-black transition-colors w-max text-gray-700 flex items-center justify-center"
          style={{ width: '60px' }}
          onClick={handleRedirection}
        >
          <img src="/magnifying-glass.svg" alt="Search" className="w-6 h-6" />
        </button>
      </div>

      {currentQuery && (
        <div>
          <h3 className="text-3xl font-semibold mb-4">Search results for: "{currentQuery}"</h3>
          <ul className="space-y-4">
            <li className="p-4 bg-white bg-opacity-10 border border-gray-600 rounded">🔍 Result for "{currentQuery}" #1</li>
            <li className="p-4 bg-white bg-opacity-10 border border-gray-600 rounded">🔍 Result for "{currentQuery}" #2</li>
            <li className="p-4 bg-white bg-opacity-10 border border-gray-600 rounded">🔍 Result for "{currentQuery}" #3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchClient;
