import Link from 'next/link';
import React, { FC } from 'react';

interface WhatAreYouLookingForProps {}

const WhatAreYouLookingFor: FC<WhatAreYouLookingForProps> = () => {
    return (
        <div className="flex w-full min-w-0 flex-col gap-6 pt-8 text-gray-800 sm:pt-12">
            <h1 className="text-3xl font-bold text-[#DA6D00] sm:text-4xl md:text-5xl lg:text-6xl">
                What are you looking for?
            </h1>
            <Link
                href="/home/benchmarking"
                className="flex flex-col gap-4 rounded border border-gray-100 bg-white p-4 shadow hover:bg-gray-100/50 sm:flex-row sm:items-stretch sm:gap-0 sm:p-5"
            >
                <p className="flex w-12 shrink-0 items-center justify-center self-start rounded-xl bg-[#DA6D00] px-4 py-3 text-2xl font-bold text-white shadow-lg sm:w-auto sm:self-stretch sm:px-6 sm:py-5 sm:text-3xl">&gt;</p>
                <div className="flex min-w-0 flex-col gap-2 pl-0 sm:pl-6">
                    <p className="text-lg font-bold leading-tight">Products and Providers</p>
                    <p className="text-sm leading-relaxed text-gray-800 sm:text-base">Exploring alternatives to current providers by comparing prices and product features.</p>
                    <p className="text-sm leading-relaxed text-gray-800 sm:text-base">Finding new suppliers for my existing product needs.</p>
                </div>
            </Link>
            <Link
                href="/home/quotes"
                className="flex flex-col gap-4 rounded border border-gray-100 bg-white p-4 shadow hover:bg-gray-100/50 sm:flex-row sm:items-stretch sm:gap-0 sm:p-5"
            >
                <p className="flex w-12 shrink-0 items-center justify-center self-start rounded-xl bg-[#DA6D00] px-4 py-3 text-2xl font-bold text-white shadow-lg sm:w-auto sm:self-stretch sm:px-6 sm:py-5 sm:text-3xl">&gt;</p>
                <div className="flex min-w-0 flex-col gap-2 pl-0 sm:pl-6">
                    <p className="text-lg font-bold leading-tight">Tailored Quotes for My Projects</p>
                    <p className="text-sm leading-relaxed text-gray-800 sm:text-base">Evaluating options beyond current providers by reviewing prices and specifications.</p>
                    <p className="text-sm leading-relaxed text-gray-800 sm:text-base">Seeking customized solutions that require specialized pricing based on specific needs.</p>
                </div>
            </Link>
        </div>
    );
};

export default WhatAreYouLookingFor;
