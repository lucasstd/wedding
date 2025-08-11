import giftsData from "../helpers/gifts.json";
import Navbar from "../components/navbar/navbar";
import { useState } from "react";


type Gift = {
  id: number;
  name: string;
  price: string;
  image: string;
  badge?: string;
  objectFit?: 'cover' | 'contain';
};

export default function Presentes() {
  const [sortType, setSortType] = useState<"price" | "name">("price");
  const [filterText, setFilterText] = useState("");

  // Converta giftsData para o tipo Gift[]
  const gifts: Gift[] = giftsData;

  const parsePrice = (price: string) =>
    Number(price?.replace(/[^\d,]/g, "").replace(",", "."));

  const filteredGifts = gifts
    .filter(
      (gift) =>
        gift.name?.toLowerCase().includes(filterText.toLowerCase()) ||
        gift.price?.toLowerCase().includes(filterText.toLowerCase())
    )
    .sort((a, b) => {
      if (sortType === "price") {
        return parsePrice(a.price) - parsePrice(b.price);
      }
      return a.name.localeCompare(b.name);
    });

  const qrCodeLink =
    "https://nubank.com.br/cobrar/h2ej3/68178723-7c78-4001-bb12-5286eadf226a";

  return (
    <>
      <Navbar forceBackground />
      <div className="mt-10 min-h-screen w-full py-14 px-6 bg-up-light-orange font-sans">
        <div className="text-center">
          <h2
            className="text-5xl md:text-6xl text-gray-800 mt-2"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Nossos Sonhos de Presente
          </h2>
          <div className="w-24 h-1.5 bg-up-medium-orange mx-auto mt-1 rounded-full" />
        </div>
        <p className="text-center text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
          Com muito carinho, selecionamos algumas ideias de presentes simbólicos
          para nossa nova jornada. Cada contribuição nos ajudará a construir
          memórias inesquecíveis. Basta clicar em um dos cartões abaixo!
        </p>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex gap-3 mb-4 md:mb-0">
              <button
                className={`px-5 py-2 rounded-full font-bold shadow-md border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 hover:scale-105 
                  ${sortType === "price"
                    ? "bg-emerald-600 text-white border-emerald-600"
                    : "bg-white text-emerald-600 border-emerald-600 hover:bg-emerald-50"}
                `}
                onClick={() => setSortType("price")}
              >
                Ordenar por valor
              </button>
              <button
                className={`px-5 py-2 rounded-full font-bold shadow-md border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 hover:scale-105 
                  ${sortType === "name"
                    ? "bg-emerald-600 text-white border-emerald-600"
                    : "bg-white text-emerald-600 border-emerald-600 hover:bg-emerald-50"}
                `}
                onClick={() => setSortType("name")}
              >
                Ordenar por nome
              </button>
            </div>
            <input
              type="text"
              placeholder="Filtrar por nome ou valor..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="border border-up-medium-orange rounded-lg px-4 py-2 w-full md:w-1/2"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
            {filteredGifts.map((gift) => (
              <a
                key={gift.id}
                href={qrCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl overflow-hidden shadow-lg bg-white border border-up-medium-orange/40 h-full transition-all duration-300 cursor-pointer
                  hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:border-emerald-400/70 hover:ring-4 hover:ring-emerald-100/60
                  focus:-translate-y-2 focus:scale-105 focus:shadow-2xl focus:border-emerald-400/70 focus:ring-4 focus:ring-emerald-100/60
                  active:-translate-y-2 active:scale-105 active:shadow-2xl active:border-emerald-400/70 active:ring-4 active:ring-emerald-100/60"
              >
                <div className="relative flex-grow">
                  {gift.badge && (
                    <span className="absolute top-2 left-2 bg-up-medium-orange text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
                      {gift.badge}
                    </span>
                  )}
                  <img
                    loading="lazy"
                    src={gift.image}
                    alt={gift.name}
                    className={`w-full h-52 bg-white group-hover:scale-105 transition-transform duration-300 ${gift.objectFit === 'contain' ? 'object-contain' : 'object-cover'}`}
                    style={{ maxHeight: 210, maxWidth: '100%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>{" "}
                </div>

                <div className="p-5 flex flex-col justify-between flex-grow-0">
                  <div>
                    <h3 className="text-xl text-center font-semibold text-gray-800 flex items-center gap-2 mb-2">
                      {gift.name}
                    </h3>
                  </div>
                  <div className="mt-auto text-center pt-3 border-t border-gray-100">
                    <span
                      className="inline-block px-8 py-2 rounded-lg font-bold shadow border border-[#b7eac2] bg-[#e6fbe9] text-[#09cb26] text-2xl mt-2 mb-1 select-none"
                      style={{ letterSpacing: "0.5px" }}
                    >
                      {gift.price}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
