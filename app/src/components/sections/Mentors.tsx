import React from "react";
import SectionHeader from "../SectionHeader";

const partners = [
  {
    name: "Talal and Madiha Zein AUB Innovation Park",
    logo: "/jpg/aub.jpg",
    link: "https://sites.aub.edu.lb/ipark/",
  },
  {
    name: "Cewas",
    logo: "/png/cewas.png",
    link: "https://www.cewas.org/",
  },
  {
    name: "Start Mashreq",
    logo: "/png/startmashreq.png",
    link: "https://www.startmashreq.com/en/",
  },
  {
    name: "Jusoor",
    logo: "/png/jusoor.png",
    link: "https://www.jusoor.ngo/",
  },
];

const Mentors = () => {
  return (
    <div className="rounded-xl border border-primary_60 py-4 bg-gray-100">
      <SectionHeader text="Our Mentors" />
      <div className="flex flex-wrap justify-center gap-4">
        {partners.map((partner, i) => (
          <div key={i}>
            <a href={partner.link} target="_blank" rel="noreferrer">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-36 w-auto object-contain mx-auto rounded-md border border-primary_100"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentors;
