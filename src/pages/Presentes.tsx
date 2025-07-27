import giftsData from "../helpers/gifts.json";
import Navbar from "../components/navbar/navbar";
import { useState } from "react";


type Gift = {
  id: number;
  name: string;
  price: string;
  image: string;
  badge?: string;
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
      <h1 className="mt-10 text-gray-800 text-5xl mb-20">Ainda estamos ajustando esta página :(</h1>
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
          memórias inesquecíveis. Basta clicar em um dos cartões abaixo! 💝
        </p>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex gap-2 mb-4 md:mb-0">
              <button
                className={`px-4 py-2 rounded-lg border font-semibold ${
                  sortType === "price"
                    ? "bg-up-medium-orange text-white"
                    : "bg-white text-up-medium-orange border-up-medium-orange"
                } transition`}
                onClick={() => setSortType("price")}
              >
                Ordenar por valor
              </button>
              <button
                className={`px-4 py-2 rounded-lg border font-semibold ${
                  sortType === "name"
                    ? "bg-up-medium-orange text-white"
                    : "bg-white text-up-medium-orange border-up-medium-orange"
                } transition`}
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
                className="group flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 bg-white border border-up-medium-orange/40 h-full"
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
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300" // Adicionado zoom no hover
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
                    <p className="text-2xl font-extrabold" style={{ color: "#b97a56" }}>
                      {gift.price}
                    </p>
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
