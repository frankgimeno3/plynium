

'use client';

import React, { useState } from 'react';
import ContentButtons from './contentButtons';

type Item = {
  id: number;
  name: string;
  dateHour: string;
  media: string;
};

const extendedData: Item[] = Array.from({ length: 50 }, (_, i) => {
  const baseDate = new Date('2025-05-28T12:00:00');
  baseDate.setDate(baseDate.getDate() + (i % 10));
  return {
    id: i + 1,
    name: `Item ${i + 1}`,
    dateHour: baseDate.toISOString(),
    media: ['Video', 'Audio', 'Image', 'Text'][i % 4],
  };
});

type SortColumn = 'id' | 'name' | 'dateHour' | 'media' | null;
type SortDirection = 'asc' | 'desc';

const TableComponent = () => {
  const [sortColumn, setSortColumn] = useState<SortColumn>('dateHour');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const sortedData = React.useMemo(() => {
    const dataCopy = [...extendedData];
    if (!sortColumn) return dataCopy;

    return dataCopy.sort((a, b) => {
      let aVal = a[sortColumn];
      let bVal = b[sortColumn];

      if (sortColumn === 'dateHour') {
        aVal = new Date(aVal as string).getTime();
        bVal = new Date(bVal as string).getTime();
      }

      if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [sortColumn, sortDirection]);

  const paginatedData = React.useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(start, start + itemsPerPage);
  }, [sortedData, currentPage]);

  const onHeaderClick = (column: SortColumn) => {
    if (sortColumn === column) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
    setCurrentPage(1);
  };

  const renderHeader = (label: string, column: SortColumn) => (
    <th
      className="py-2 px-4 border-b cursor-pointer select-none"
      onClick={() => onHeaderClick(column)}
      style={{ userSelect: 'none' }}
    >
      <p className="inline-flex items-center font-medium text-gray-700">
        {label}
        {sortColumn === column && (
          <TriangleIcon direction={sortDirection === 'asc' ? 'up' : 'down'} />
        )}
      </p>
    </th>
  );

  const TriangleIcon = ({ direction }: { direction: 'up' | 'down' }) => (
    <svg
      className="inline-block ml-1 w-3 h-3 text-gray-600"
      fill="currentColor"
      viewBox="0 0 320 512"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: direction === 'up' ? 'rotate(0deg)' : 'rotate(180deg)' }}
    >
      <path d="M96 192h128c17.67 0 26.54 21.54 14.14 34.14L177.4 319.4c-7.81 7.81-20.47 7.81-28.28 0L81.86 226.1C69.46 213.5 78.33 192 96 192z" />
    </svg>
  );

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  return (
    <>
      <p className="text-xl font-semibold mb-4">Contents administrator</p>

      <div className='flex flex-row w-full justify-between mb-8 w-full bg-white shadow border border-gray-100 text-xs p-6'>
        <div className='flex flex-col'>
          <p>Buscar contenidos</p>
          <div className='flex flex-row py-4'>
          <input className='px-2 py-1 border border-gray-100 rounded' style={{"width":"200px"}}
          placeholder='Buscar contenidos'/>
          </div>
        </div>
        <button className='bg-white shadow border border-gray-100 text-xs px-3 py-2 rounded hover:text-gray-700 h-'>
          + Nuevo contenido
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              {renderHeader('ID', 'id')}
              {renderHeader('Name', 'name')}
              {renderHeader('Date - Hour', 'dateHour')}
              {renderHeader('Media', 'media')}
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map(({ id, name, dateHour, media }) => (
              <tr key={id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{id}</td>
                <td className="py-2 px-4 border-b">{name}</td>
                <td className="py-2 px-4 border-b">{new Date(dateHour).toLocaleString()}</td>
                <td className="py-2 px-4 border-b">{media}</td>
                <td className="py-2 px-4 border-b">
                  {/* Aquí solo un botón "Action" por fila */}
                  <button
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={() => alert(`Acción para item ${id}`)}
                  >
                    Action
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Botones con números para cambiar página abajo */}
      <div className="mt-4 flex justify-center gap-2">
     

        <ContentButtons
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
 
      </div>
    </>
  );
};

export default TableComponent;
