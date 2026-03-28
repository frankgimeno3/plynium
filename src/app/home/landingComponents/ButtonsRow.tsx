import Link from 'next/link';
import React, { FC } from 'react';

interface ButtonItem {
  label: string;
  path: string;
}

const OrangeLink: FC<{ label: string; path: string }> = ({ label, path }) => (
  <Link
    href={path}
    className="flex h-12 w-full items-center justify-center rounded-md bg-[#DA6D00] px-4 py-2 text-base text-white transition-colors duration-300 hover:bg-[#DA6D00]/80 sm:w-56 md:w-64 md:text-lg"
  >
    {label}
  </Link>
);

const ButtonsRow: FC = () => {
  const firstRowButtons: ButtonItem[] = [
    { label: 'Materials', path: '/home/search/industries/materials' },
    { label: 'Outdoor solutions', path: '/home/search/industries/outdoorSolutions' },
    { label: 'Tools', path: '/home/search/industries/tools' },
    { label: 'Fenestration', path: '/home/search/industries/fenestration' },
  ];

  const secondRowButtons: ButtonItem[] = [
    { label: 'Structural components', path: '/home/search/industries/structuralComponents' },
    { label: 'Machinery', path: '/home/search/industries/machinery' },
    { label: 'Architectural Glass', path: '/home/search/industries/architecturalGlass' },
    { label: 'Software', path: '/home/search/industries/software' },
  ];

  return (
    <div className="flex w-full min-w-0 flex-col gap-3 py-8 sm:gap-4 sm:py-10 md:py-12">
      <div className="flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-3 md:gap-4">
        {firstRowButtons.map((button) => (
          <OrangeLink key={button.path} label={button.label} path={button.path} />
        ))}
      </div>
      <div className="flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-3 md:gap-4">
        {secondRowButtons.map((button) => (
          <OrangeLink key={button.path} label={button.label} path={button.path} />
        ))}
      </div>
    </div>
  );
};

export default ButtonsRow;
