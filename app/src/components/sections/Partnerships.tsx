import React from "react";
import SectionHeader from "../SectionHeader";

const partners = [
  {
    name: "Talal and Madiha Zein AUB Innovation Park",
    logo: "/jpg/aub.jpg",
    link: "https://sites.aub.edu.lb/ipark/",
  },
  {
    name: "Jusoor",
    logo: "/png/jusoor.png",
    link: "https://www.jusoor.ngo/",
  },
];

const Partnerships = () => {
  const numItems = partners.length;
  const numCols = numItems > 4 ? 4 : numItems;

  return (
    <div className="container mx-auto">
      <SectionHeader text="Our Partnerships" />
      <div className={`grid grid-cols-2 sm:grid-cols-${numCols} gap-4`}>
        {partners.map((partner, index) => (
          <div key={index} className="mx-auto">
            <a href={partner.link} target="_blank" rel="noreferrer">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-36 w-auto object-contain mx-auto"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partnerships;
