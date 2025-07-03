import React, { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ShowroomElementProps {
    path: string;
    onClick: (path: string) => void;
}

const ShowroomElement: FC<ShowroomElementProps> = ({ path, onClick }) => (
    <div
        className="hover:shadow-xl bg-gray-100 hover:bg-white text-[#DA6D00] shadow-md hover:shadow-3xl border 
        border-gray-100 rounded-md text-lg transition-colors duration-300 cursor-pointer transition-transform 
        duration-300 hover:scale-105" 
        style={{ "width": "300px", "height": "400px" }}
        onClick={() => onClick(path)}
    >
        <Image src="/panel.png" height={500} width={500} alt="BIM" className='mx-auto ' />
    </div>
);

const Showroom: FC = () => {
    const router = useRouter();

    const handleRedirection = (path: string) => {
        router.push(path);
    };

    return (
        <div>
            <h1 className="text-6xl text-[#DA6D00] font-bold py-24">
                Products Showroom
            </h1>

            <div className="flex flex-col gap-12">
                <div className="flex flex-row gap-12 mx-auto">
                    <ShowroomElement path="/home/product/example" onClick={handleRedirection} />
                    <ShowroomElement path="/home/product/example" onClick={handleRedirection} />
                    <ShowroomElement path="/home/product/example" onClick={handleRedirection} />
                </div>
                <div className="flex flex-row gap-12 mx-auto">
                    <ShowroomElement path="/home/product/example" onClick={handleRedirection} />
                    <ShowroomElement path="/home/product/example" onClick={handleRedirection} />
                    <ShowroomElement path="/home/product/example" onClick={handleRedirection} />
                </div>
            </div>
        </div>
    );
};

export default Showroom;
