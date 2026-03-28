"use client";
import Showroom from "@/app/home/landingComponents/Showroom";
import Link from "next/link";
import React, { FC } from "react";

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => {
  return (
    <div>
      <h1 className="text-6xl font-bold text-[#DA6D00]">Dashboard</h1>
      <Link
        href="/home/benchmarking"
        className="my-2 flex cursor-pointer flex-row rounded border border-gray-100 bg-white p-5 shadow hover:bg-gray-100/50"
      >
        <p className="items-center rounded-xl bg-[#DA6D00] px-7 p-5 text-3xl font-bold text-white shadow-lg">&gt;</p>
        <div className="flex flex-col pl-6 text-gray-800">
          <p className="max-h-8 text-lg font-bold text-gray-900">Quotes</p>
          <p>Exploring alternatives to current providers by comparing prices and product features.</p>
          <p>Finding new suppliers for my existing product needs.</p>
        </div>
      </Link>
      <Link
        href="/home/quotes"
        className="my-2 flex cursor-pointer flex-row rounded border border-gray-100 bg-white p-5 shadow hover:bg-gray-100/50"
      >
        <p className="items-center rounded-xl bg-[#DA6D00] px-7 p-5 text-3xl font-bold text-white shadow-lg">&gt;</p>
        <div className="flex flex-col pl-6 text-gray-800">
          <p className="max-h-8 text-lg font-bold text-gray-900">Offers</p>
          <p>Evaluating options beyond current providers by reviewing prices and specifications.</p>
          <p>Seeking customized solutions that require specialized pricing based on specific needs.</p>
        </div>
      </Link>
      <Link
        href="/home/quotes"
        className="my-2 flex cursor-pointer flex-row rounded border border-gray-100 bg-white p-5 shadow hover:bg-gray-100/50"
      >
        <p className="items-center rounded-xl bg-[#DA6D00] px-7 p-5 text-3xl font-bold text-white shadow-lg">&gt;</p>
        <div className="flex flex-col pl-6 text-gray-800">
          <p className="max-h-8 text-lg font-bold text-gray-900">Studies</p>
          <p>Evaluating options beyond current providers by reviewing prices and specifications.</p>
          <p>Seeking customized solutions that require specialized pricing based on specific needs.</p>
        </div>
      </Link>
      <div className="flex flex-row items-center justify-between pt-12">
        <p className="text-6xl font-bold text-[#DA6D00]"> Productos recomendados </p>
        <div className="flex flex-row items-center gap-3">
          <button type="button" className="w-56 cursor-pointer rounded-lg bg-[#DA6D00] p-5 text-white shadow-xl">
            Gestionar suscripciones
          </button>
          <button type="button" className="w-56 cursor-pointer rounded-lg bg-[#DA6D00] p-5 text-white shadow-xl">
            Gestionar preferencias
          </button>
          <button type="button" className="w-56 cursor-pointer rounded-lg bg-[#DA6D00] p-5 text-white shadow-xl">
            Explorar
          </button>
        </div>
      </div>
      <button type="button" className="mt-5 w-56 cursor-pointer rounded-lg bg-[#DA6D00] p-5 text-white shadow-xl">
        Aplicar filtros
      </button>

      <Showroom />
    </div>
  );
};

export default Dashboard;
