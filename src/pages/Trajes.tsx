import React from 'react';
import Navbar from "../components/navbar/navbar";
import trajeImage from "../assets/traje2.jpg";

const Trajes: React.FC = () => {
  return (
    <>
    <Navbar forceBackground />
    <div className="mt-10 min-h-screen bg-[#e5e7eb] text-gray-800">

      <div className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h1
          className="text-5xl md:text-6xl text-gray-800"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Dicas de Traje
        </h1>
        <div className="w-20 h-1 bg-teal-500 mx-auto mt-4 rounded-full mb-10" />

        <div className="mt-12 mb-12 bg-[#e8c3c3] bg-opacity-50 p-8 rounded-md shadow-lg text-center">
          <p className="text-xl">
            <strong className="text-rose-400">Atenção:</strong> Pedimos que as mulheres evitem roupas brancas.
          </p>
        </div>

        <div className="bg-white bg-opacity-5 p-8 rounded-xl shadow-xl flex flex-col md:flex-row gap-10 items-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full md:w-1/2">
            <img
              src={trajeImage}
              alt="Exemplo de trajes para o casamento"
              className="rounded-lg object-cover w-full h-auto shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-15410996491d21f3246?afit=crop&w=600&q=60"
              alt="Vestido"
              className="rounded-lg object-cover h-72 w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1532339142462-f30ae6f1c49afit=crop&w=600&q=60"
              alt="Macacão sofisticado"
              className="rounded-lg object-cover h-72 w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1610553256854-e29e0&fit=crop&w=600&q=60"
              alt="Homem com camisa casual e calça de sarja"
              className="rounded-lg object-cover h-72 w-full"
            />
            <img
              src="https://images.unsplash.com/photo-15734962fit=crop&w=600&q=60"
              alt="Blazer opcional em look masculino"
              className="rounded-lg object-cover h-72 w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1616486094format&fit=crop&w=600&q=60"
              alt="Homem com camisa azul esporte fino"
              className="rounded-lg object-cover h-72 w-full"
            />
          </div>

          <div className="text-left md:w-1/2">
            <p className="text-lg mb-6">
              Escolhemos o <strong className="text-rose-400">traje esporte fino</strong> para o nosso casamento. Isso significa um estilo elegante, mas sem exageros.
            </p>

            <p className="mb-4">
              <strong className="text-rose-300">Homens:</strong> Camisa, calça de sarja ou social, blazer opcional, sapato ou tênis mais arrumado. Evite roupas muito casuais, como camisetas ou chinelos.
            </p>

            <p>
              <strong className="text-rose-300">Mulheres:</strong> Vestidos leves (curtos ou longos), saias, macacões ou pantalonas. Não é necessário ser extremamente formal, mas evite roupas muito simples. Capriche no charme sem perder o conforto!
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Trajes;
