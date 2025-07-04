"use client"
import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react';

interface SearchProps {

}

const Search: FC<SearchProps> = ({ }) => {
    const router = useRouter();
    const [searchcontent, setsearchcontent] = useState('')



    const handleRedirection = () => {
        router.push(`/search/${searchcontent}`);
    };


    return (
        <div className="min-h-screen w-full bg-gray-600">
            <div className='max-w-6xl mx-auto pt-36 px-4 '>

                    <h1 className="text-8xl text-[#DA6D00] font-bold">Search</h1>

                <h2 className="text-2xl my-8">
                    Please write what you are looking for and press search
                </h2>

                <div className="flex flex-row w-full mb-12">
                    <input
                        placeholder="Search, explore, benchmark, compare"
                        className="rounded bg-white bg-opacity-10 border border-gray-100 px-4 mr-1 w-full max-w-[1005px]"
                        onChange={(e) => setsearchcontent(e.target.value)}
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
            </div>
        </div>
    );
};

export default Search;