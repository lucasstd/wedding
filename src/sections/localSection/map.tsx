import React from 'react';
import Location from './location';
import SectionTitle from '../../components/sectionTitle/sectionTitle';

const MapSection: React.FC = () => {
  return (
    <section className="map-section my-8 relative">
      <SectionTitle sectionTitle="Cerimônia" subTitle="Local do casamento" />

      <div className="map-container border-2 border-gray-300 rounded-lg overflow-hidden">
        <Location />
      </div>
    </section>
  );
};

export default MapSection;
