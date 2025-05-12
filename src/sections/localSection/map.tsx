import React from "react";
import Location from "./location";
import SectionTitle from "../../components/sectionTitle/sectionTitle";
import { motion } from "framer-motion";

const MapSection: React.FC = () => {
  return (
    <section className="map-section my-8 relative">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <SectionTitle sectionTitle="Cerimônia" subTitle="Local do casamento" />
      </motion.div>

      <motion.div
        className="map-container border-2 border-gray-300 rounded-lg overflow-hidden"
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
