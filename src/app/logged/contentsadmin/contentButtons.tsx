import React, { FC } from 'react';

interface ContentButtonsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const ContentButtons: FC<ContentButtonsProps> = ({ currentPage, totalPages, onPageChange }) => {
  // Generar array de páginas para mostrar, simplificado (mostrar todas)
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="inline-flex items-center space-x-1">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-2 py-1 border rounded disabled:opacity-50"
      >
        Prev
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 border rounded ${
            page === currentPage ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-2 py-1 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default ContentButtons;
