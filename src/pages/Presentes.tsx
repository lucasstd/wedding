import { FaGift } from "react-icons/fa";
import { gifts } from "../helpers/linksHelper";
import Navbar from "../components/navbar/navbar";

export default function Presentes() {
  const qrCodeLink = "https://nubank.com.br/cobrar/h2ej3/68178723-7c78-4001-bb12-5286eadf226a";

  return (
    <>
    <Navbar forceBackground />
    <div className="mt-10 min-h-screen bg-[#e5e7eb] w-full py-14 px-6">
      <div className="relative w-full h-[450px] mb-16 rounded-xl overflow-hidden shadow-md">
        <img
          src="https://media.istockphoto.com/id/515679204/pt/foto/bal%C3%B5es-de-cora%C3%A7%C3%A3o-voando-no-c%C3%A9u.jpg"
          alt="Banner de Balões"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 flex items-center justify-center text-white text-center px-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Lista de Presentes</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Estamos animados para compartilhar nosso casamento com vocês! Optamos por uma lista de contribuições para nossa lua de mel, pensando nos momentos especiais que teremos juntos.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-5xl md:text-6xl text-gray-800 mt-2"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Lista de Presentes
          </h2>
          <div className="w-20 h-1 bg-pink-400 mx-auto mt-4 rounded-full" />
        </div>

        <p className="text-center text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Com muito carinho, selecionamos algumas ideias de presentes simbólicos. Caso deseje nos presentear, basta clicar em um dos cartões abaixo. 💝
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {gifts.map((gift) => (
            <a
              key={gift.id}
              href={qrCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 bg-white border border-gray-100"
            >
              <img
                src={gift.image}
                alt={gift.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-2">
                  <FaGift className="text-pink-400" /> {gift.name}
                </h3>
                <p className="text-sm text-gray-600">{gift.price}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
