import React, { FC } from 'react';
import { useRouter } from 'next/navigation';

interface ButtonItem {
  label: string;
  path: string;
}

const OrangeButton: FC<{ label: string; path: string; onClick: (path: string) => void }> = ({ label, path, onClick }) => (
  <button
    className="bg-[#DA6D00] hover:bg-[#DA6D00]/80 text-white 
    px-4 py-2 rounded-md w-64 h-12 text-lg transition-colors duration-300"
    onClick={() => onClick(path)}
  >
    {label}
  </button>
);

const ButtonsRow: FC = () => {
  const router = useRouter();
  const handleRedirection = (path: string) => {
    router.push(path);
  };

  const firstRowButtons: ButtonItem[] = [
    { label: 'Materials', path: '/search/industries/materials' },
    { label: 'Outdoor solutions', path: '/search/industries/outdoorSolutions' },
    { label: 'Tools', path: '/search/industries/tools' },
    { label: 'Fenestration', path: '/search/industries/fenestration' },
  ];

  const secondRowButtons: ButtonItem[] = [
    { label: 'Structural components', path: '/search/industries/structuralComponents' },
    { label: 'Machinery', path: '/search/industries/machinery' },
    { label: 'Architectural Glass', path: '/search/industries/architecturalGlass' },
    { label: 'Software', path: '/search/industries/software' },
  ];

  return (
    <div className="flex flex-col gap-4 py-12">
      <div className="flex flex-row gap-4">
        {firstRowButtons.map((button) => (
          <OrangeButton
            key={button.path}
            label={button.label}
            path={button.path}
            onClick={handleRedirection}
          />
        ))}
      </div>
      <div className="flex flex-row gap-4">
        {secondRowButtons.map((button) => (
          <OrangeButton
            key={button.path}
            label={button.label}
            path={button.path}
            onClick={handleRedirection}
          />
        ))}
      </div>
    </div>
  );
};

export default ButtonsRow;
