import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ShowroomElementProps {
    path: string;
}

const ShowroomElement: FC<ShowroomElementProps> = ({ path }) => (
    <Link
        href={path}
        className="mx-auto flex w-full max-w-[280px] flex-col rounded-md border border-gray-100 bg-gray-100 text-lg text-[#DA6D00] shadow-md transition-colors duration-300 hover:bg-white hover:shadow-xl sm:max-w-[300px] md:hover:scale-[1.02]"
    >
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md">
            <Image src="/panel.png" fill sizes="(max-width: 640px) 90vw, 300px" alt="" className="object-contain p-2" />
        </div>
    </Link>
);

const Showroom: FC = () => {
    return (
        <div className="w-full min-w-0">
            <h1 className="py-12 text-3xl font-bold text-[#DA6D00] sm:py-16 sm:text-4xl md:py-20 md:text-5xl lg:text-6xl">
                Products Showroom
            </h1>

            <div className="flex flex-col gap-10 sm:gap-12">
                <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 sm:flex-row sm:flex-wrap sm:justify-center md:gap-10 lg:gap-12">
                    <ShowroomElement path="/home/product/example" />
                    <ShowroomElement path="/home/product/example" />
                    <ShowroomElement path="/home/product/example" />
                </div>
                <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 sm:flex-row sm:flex-wrap sm:justify-center md:gap-10 lg:gap-12">
                    <ShowroomElement path="/home/product/example" />
                    <ShowroomElement path="/home/product/example" />
                    <ShowroomElement path="/home/product/example" />
                </div>
                <Link
                    href="/home/search"
                    className="mx-auto block w-full max-w-md rounded-xl bg-[#DA6D00] p-4 text-center text-white shadow-xl hover:bg-[#DA3D00]/80 sm:p-5"
                >
                    Search for more products here
                </Link>
            </div>
        </div>
    );
};

export default Showroom;
