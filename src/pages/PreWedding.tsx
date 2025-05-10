import Navbar from "../components/navbar/navbar";

function PreWedding() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-slate-800 to-gray-900 text-white">
        <div className="relative text-center p-8 bg-white bg-opacity-20 rounded-lg shadow-lg max-w-md">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 border-8 border-t-8 border-blue-300 border-solid rounded-full animate-spin"></div>
          </div>

          <h1 className="text-3xl font-semibold mb-4 text-white">Ainda não tiramos as fotos</h1>
          <p className="text-lg mb-6 text-white">Mas fique ligado que logo vamos tirar. 👌😁</p>
          
        </div>
      </div>
    </>
  );
}

export default PreWedding;
