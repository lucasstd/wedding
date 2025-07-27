import React from "react";
import Location from "./location";
import SectionTitle from "../../components/sectionTitle/sectionTitle";
import { motion } from "framer-motion";

const MapSection: React.FC = () => {
  return (
    <section className="map-section my-8 relative px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <SectionTitle sectionTitle="Cerimônia" subTitle="Local do casamento" />
      </motion.div>

      <p className="!text-gray-500 text-lg mb-6 text-center max-w-3xl mx-auto">
        Escolhemos com carinho um cantinho especial para viver esse momento ao
        lado de quem amamos. Um cenário leve, acolhedor e cheio de boas energias
        — perfeito para celebrar o amor e criar memórias inesquecíveis com
        vocês.
      </p>
      <div className="text-center mb-6">
        <a
          href="https://www.google.com/calendar/render?action=TEMPLATE&text=Casamento+Kay+e+Bruno&dates=20251122T180000Z/20251122T220000Z&details=Nosso+casamento+%E2%9D%A4+Esperamos+voc%C3%AA+para+celebrar+com+a+gente%21&location=Mirante+da+Lagoa,+Indai%C3%A1,+Florian%C3%B3polis&sf=true&output=xml"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-emerald-200 text-emerald-900 text-sm md:text-base font-semibold px-6 py-3 rounded-full border border-emerald-300 hover:bg-emerald-300 transition-all duration-300 shadow-sm"
        >
          Adicionar ao Calendário
        </a>
      </div>

      <motion.div
        className="map-container border-2 border-gray-300 rounded-lg overflow-hidden shadow-md"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Location />
      </motion.div>
    </section>
  );
};

export default MapSection;
