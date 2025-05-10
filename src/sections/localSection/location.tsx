import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

import local1 from "../../assets/local1.png";
import local2 from "../../assets/local2.png";
import local3 from "../../assets/local3.png";
import local4 from "../../assets/local4.png";

const images = [local1, local2, local3, local4];

const Location: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row bg-slate-100 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 w-full md:w-1/2">
          {images.map((src, index) => (
            <div
              key={index}
              className="bg-slate-600 rounded-md shadow-md overflow-hidden"
            >
              <img
                src={src}
                alt={`Imagem ${index + 1}`}
                loading="lazy"
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center md:items-start gap-4 p-4 w-full md:w-1/2">
          <div className="flex items-center gap-2 p-3 bg-white border-l-4 border-indigo-600 rounded-md shadow-sm w-full">
            <FaMapMarkerAlt className="text-indigo-600" size={20} />
            <span className="text-gray-700 text-sm font-medium">
              Rod. Admar Gonzaga, 4720 B - Lagoa da Conceição - Florianópolis/SC
              - CEP 88.062-001
            </span>
          </div>

          <div className="w-full h-64 bg-gray-200 rounded-md shadow-md flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.748917758073!2d-48.48452212485731!3d-27.60131292232618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952739344495a781%3A0x82865aa1ea31c01!2sRod.%20Admar%20Gonzaga%2C%204720B%20-%20Itacorubi%2C%20Florian%C3%B3polis%20-%20SC!5e0!3m2!1spt-BR!2sbr!4v1730251989483!5m2!1spt-BR!2sbr"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
