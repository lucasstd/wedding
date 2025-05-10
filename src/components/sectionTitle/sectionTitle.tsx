import React from "react";
import upIcon from "../../assets/up.png";

interface SectionTitleProps {
  sectionTitle: string;
  subTitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ sectionTitle, subTitle }) => {
  return (
    <div className="flex flex-col items-center justify-center my-12">
      <h3 className="text-sm font-semibold uppercase text-green-600 tracking-widest">
        {sectionTitle}
      </h3>

      <h1 className="text-4xl md:text-4xl font-serif font-bold text-gray-800 my-2">
        {subTitle}
      </h1>

      <div className="flex items-center justify-center">
        <div className="w-20 h-0.5 bg-green-600"></div>
        <span className="mx-3 text-gray-700 text-lg md:text-xl"><img src={upIcon} width="50px"alt="Up Icon" /></span>
        <div className="w-20 h-0.5 bg-green-600"></div>
      </div>
    </div>
  );
};

export default SectionTitle;
