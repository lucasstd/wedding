import { useState } from "react";

export default function ConfirmacaoPresenca() {
  const [nome, setNome] = useState("");
  const [confirmado, setConfirmado] = useState<boolean | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nome.trim() !== "") {
      setConfirmado(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl max-w-md w-full p-8 text-center">
        <h1
          className="text-4xl font-semibold text-gray-800 mb-2"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Lucas & Anne
        </h1>
        <p className="text-sm text-gray-600 uppercase tracking-widest mb-6">
          Confirmação de Presença
        </p>

        {confirmado ? (
          <div className="text-green-600 text-lg font-medium">
            Obrigado por confirmar, {nome.split(" ")[0]}! 💕
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg transition duration-200"
            >
              Confirmar presença
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
