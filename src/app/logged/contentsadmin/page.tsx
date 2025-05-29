'use client';

import React, { useState } from 'react';

type Item = {
  id: number;
  name: string;
  dateHour: string; // ISO string o similar para ordenar fechas
  media: string;
};

const initialData: Item[] = [
  { id: 1, name: 'Alpha', dateHour: '2025-05-28T15:30:00', media: 'Video' },
  { id: 2, name: 'Bravo', dateHour: '2025-05-29T12:00:00', media: 'Audio' },
  { id: 3, name: 'Charlie', dateHour: '2025-05-27T09:45:00', media: 'Image' },
  { id: 4, name: 'Delta', dateHour: '2025-05-29T16:00:00', media: 'Text' },
];

type SortColumn = 'id' | 'name' | 'dateHour' | 'media' | null;
type SortDirection = 'asc' | 'desc';

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

const TableComponent = () => {
  // Orden inicial: dateHour descendente
  const [sortColumn, setSortColumn] = useState<SortColumn>('dateHour');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  // Función para ordenar datos según columna y dirección
  const sortedData = React.useMemo(() => {
    const dataCopy = [...initialData];
    if (!sortColumn) return dataCopy;

    return dataCopy.sort((a, b) => {
      let aVal = a[sortColumn];
      let bVal = b[sortColumn];

      // Para dateHour, convertir a fecha para comparar
      if (sortColumn === 'dateHour') {
        aVal = new Date(aVal as string).getTime();
        bVal = new Date(bVal as string).getTime();
      }

      if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [sortColumn, sortDirection]);

  // Manejador para click en encabezado de columna
  const onHeaderClick = (column: SortColumn) => {
    if (sortColumn === column) {
      // Si hacemos click en la misma columna, toggle dirección
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      // Si es una columna distinta, activar esa columna con orden ascendente
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  // Renderizado de encabezados con triángulo condicional
  // Solo se muestra triángulo en la columna activa, excepto inicialmente en dateHour (lo controlamos con sortColumn)
  // El triángulo apunta según sortDirection
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

  return (
    <>
      <p className="text-xl font-semibold mb-4">Contents administrator</p>

      <div className='flex flex-row w-full justify-between mb-8 w-full bg-white shadow border border-gray-100 text-xs p-6'>
        <div className='flex flex-col'>
          <p>Buscar contenidos</p>
          <div className='flex flex-row py-4'>
          <input className='px-2 py-1 border border-gray-100 rounded' style={{"width":"400px"}}
          placeholder='Buscar contenidos'/>
                  <button className='bg-white shadow border border-gray-100 text-xs px-3 py-2 rounded hover:text-gray-700 h-8 w-24 ml-5'>
          Buscar
        </button>
          </div>
        </div>
        <button className='bg-white shadow border border-gray-100 text-xs px-3 py-2 rounded hover:text-gray-700 h-8'>
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
            {sortedData.map(({ id, name, dateHour, media }) => (
              <tr key={id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{id}</td>
                <td className="py-2 px-4 border-b">{name}</td>
                <td className="py-2 px-4 border-b">{new Date(dateHour).toLocaleString()}</td>
                <td className="py-2 px-4 border-b">{media}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-white px-3 py-1 text-xs hover:bg-gray-100 border border-gray-100 shadow rounded"
                    type="button"
                  >
                    Action
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>

  );
};

export default TableComponent;
