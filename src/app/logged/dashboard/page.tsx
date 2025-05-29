'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useUI } from '@/app/components/context/UIContext';

const DashboardPage = () => {
  const router = useRouter();
  const { setLeftBarSection } = useUI();

  const sections = [
    { label: 'Quotes administrator', path: '/logged/quotesadmin', section: 'quotesadmin' },
    { label: 'Agency administrator', path: '/logged/agencyadmin', section: 'agencyadmin' },
    { label: 'Aluminiumprofiles', path: '/logged/mediaadmin/aluminiumprofiles', section: 'aluminiumprofiles' },
    { label: 'Buildinformer', path: '/logged/mediaadmin/buildinformer', section: 'buildinformer' },
    { label: 'Fenestrator', path: '/logged/mediaadmin/fenestrator', section: 'fenestrator' },
    { label: 'Glassinformer', path: '/logged/mediaadmin/glassinformer', section: 'glassinformer' },
    { label: 'Pvcprofiles', path: '/logged/mediaadmin/pvcprofiles', section: 'pvcprofiles' },
    { label: 'Sunshaders', path: '/logged/mediaadmin/sunshaders', section: 'sunshaders' },
  ];

  const handleRedirection = (ubi: string, sectionName: string) => {
    setLeftBarSection(sectionName.toLowerCase());
    router.push(ubi);
  };

  return (
    <>
      <p className="text-xl font-semibold mb-4">Dashboard de notificaciones</p>
      <p className="mb-6 text-gray-700">Aquí tienen que haber notificaciones para no tener que ir a cada media en concreto</p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left ">
              <th className="py-2 px-4 border-b">Sección</th>
              <th className="py-2 px-4 border-b">Nº tickets por gestionar</th>
              <th className="py-2 px-4 border-b">Nuevos tickets</th>
              <th className="py-2 px-4 border-b">Acción</th>
            </tr>
          </thead>
          <tbody>
            {sections.map(({ label, path, section }) => (
              <tr key={section} className="hover:bg-gray-50 ">
                <td className="py-2 px-4 border-b">{label}</td>
                <td className="py-2 px-4 border-b text-center">--</td>
                <td className="py-2 px-4 border-b text-center">--</td>
                <td className="py-2 px-4 border-b ">
                  <button
                    onClick={() => handleRedirection(path, section)}
                    className="bg-white hover:bg-gray-100 hover:bg-opacity-20
                     border border-gray-200 text-gray-500 px-4 py-1 rounded text-sm"
                  >
                    Ver todo
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

export default DashboardPage;
