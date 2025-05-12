import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import "./styles.css";

function PreWedding() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-slate-800 to-gray-900 text-white">
        <div className="relative text-center p-8 backdrop-blur-md bg-white/10 border border-white/30 rounded-lg shadow-lg max-w-md animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full animate-spin border-8 border-t-transparent border-blue-400 border-opacity-50 border-solid"></div>
          </div>

          <h1 className="text-3xl font-semibold mb-4 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            Ainda não tiramos as fotos
          </h1>
          <p className="text-lg mb-6 text-white drop-shadow-sm">
            Mas fique ligado que logo vamos tirar. 👌😁
          </p>

          <Link
            to="/"
            className="inline-block mt-4 px-6 py-2 rounded-full bg-pink-300 hover:bg-pink-200 text-white font-semibold transition duration-300 transform hover:scale-105"
          >
            Voltar
          </Link>
        </div>
      </div>
    </>
  );
}

export default PreWedding;
