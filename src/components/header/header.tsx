import React from 'react';
import CountdownTimer from './countdown/countdown';
import './styles.css';

const Header: React.FC = () => {
  const targetDate = '2025-11-30T13:59:59';

  return (
    <section id="header" className="outlined relative bg-cover bg-center h-screen flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-gray-700 opacity-20"></div>
      
      <div className="relative z-10 mt-20 text-white p-5 md:p-12 shadow-title container">
        <h1 className="font-dancing-script text-4xl font-bold mb-4">Dois Corações, Uma Jornada: O Casamento de Anne & Lucas</h1>
        <p className="text-lg md:text-2xl mb-2">Contando os dias para o grande evento no dia 30/11/2025:</p>
        <CountdownTimer targetDate={targetDate} />
      </div>
    </section>
  );
};

export default Header;
