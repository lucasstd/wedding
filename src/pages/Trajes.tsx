import React from 'react';
import Navbar from "../components/navbar/navbar";

const Trajes: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 to-gray-900 text-white">
      <div className="sticky top-0 z-50 bg-gray-800 bg-opacity-90 shadow-lg">
        <Navbar />
      </div>

      <div className="max-w-4xl mx-auto py-16 px-6 text-center">
        <h1 className="text-5xl font-bold text-white tracking-wide">
          Orientações para Trajes
        </h1>
        <p className="mt-6 text-lg text-gray-300">
          Pedimos que sigam as orientações abaixo para garantir harmonia no evento:
        </p>

        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-200 mb-6">
            Cores permitidas
          </h2>
          <div className="flex justify-center gap-6">
            <div className="h-28 w-28 rounded-full bg-rose-400 shadow-md transform hover:scale-105 transition"></div>
            <div className="h-28 w-28 rounded-full bg-sky-400 shadow-md transform hover:scale-105 transition"></div>
            <div className="h-28 w-28 rounded-full bg-emerald-400 shadow-md transform hover:scale-105 transition"></div>
            <div className="h-28 w-28 rounded-full bg-yellow-400 shadow-md transform hover:scale-105 transition"></div>
          </div>
        </div>

        <div className="mt-12 bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg">
          <p className="text-xl">
            <strong className="text-rose-400">Atenção:</strong> Solicitamos que as mulheres não utilizem roupas brancas.
          </p>
        </div>

        <div className="mt-12">
          <img
            src="https://via.placeholder.com/600x300"
            alt="Ilustração de trajes"
            className="rounded-lg shadow-lg mx-auto transform hover:scale-105 transition"
          />
        </div>
      </div>
    </div>
  );
};

export default Trajes;
