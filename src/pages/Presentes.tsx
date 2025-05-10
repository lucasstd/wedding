import { FaGift } from "react-icons/fa";

const gifts = [
  {
    id: 1,
    name: "Jantar Romântico",
    price: "R$ 150,00",
    image: "https://images.unsplash.com/photo-1510626176961-4bfb7b41c1f4?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    name: "Noite em Hotel",
    price: "R$ 300,00",
    image: "https://images.unsplash.com/photo-1582719478170-2fe9c197f27e?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Passeio de Balão",
    price: "R$ 500,00",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
  },
];

export default function Presentes() {
  const qrCodeLink = "https://nubank.com.br/cobrar/h2ej3/68178723-7c78-4001-bb12-5286eadf226a";
  const pixKey = "00020126330014BR.GOV.BCB.PIX0114+55819999999952040000530398654041.005802BR5920Casal Exemplo6009SAO PAULO";

  return (
    <div className="min-h-screen bg-[#e5f5f9] container mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <p className="text-blue-500 tracking-widest uppercase text-sm font-semibold">
          Galeria
        </p>
        <h1
          className="text-5xl md:text-6xl text-gray-800 mt-2"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Lista de Presentes
        </h1>
        <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
      </div>

      <p className="text-center text-lg text-gray-700 mb-10">
        Com muito carinho, selecionamos algumas ideias de presentes simbólicos. Caso deseje nos presentear, basta clicar em um dos cartões abaixo.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {gifts.map((gift) => (
          <a
            key={gift.id}
            href={qrCodeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 bg-white"
          >
            <img
              src={gift.image}
              alt={gift.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-1">
                <FaGift className="text-blue-500" /> {gift.name}
              </h3>
              <p className="text-sm text-gray-600">{gift.price}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
