import React from "react";
import Image from "next/image";
import SectionHeader from "../SectionHeader";

const teamMembers = [
  {
    name: "Yasser Shkeir",
    image: "/jpg/yasser.jpg",
    role: "Sales & Communication",
  },
  {
    name: "Hadi Darwish",
    image: "/jpg/hadid.jpg",
    role: "Product Developer",
  },
  {
    name: "Ali Haidar",
    image: "/jpg/ali.jpg",
    role: "Software Developer",
  },
  {
    name: "Helena Ghanem",
    image: "/jpg/helena.jpg",
    role: "Sales & Business Developer",
  },
  {
    name: "Hussien Reda",
    image: "/jpg/hussein.jpg",
    role: "Software Developer",
  },
  {
    name: "Rayan Kabalan",
    image: "/jpg/rayan.jpg",
    role: "Sales Representative",
  },
  {
    name: "Hussam Kak",
    image: "/jpg/hussam.jpg",
    role: "3D Modeler",
  },
];

function TeamMember({ image, name, role }: any) {
  return (
    <div className="bg-primary_100 rounded-lg p-2 text-white h-auto">
      <div className="w-full h-36 sm:h-40 md:h-64 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="filter grayscale object-cover w-full rounded-lg"
        />
      </div>
      <div className="pt-2 md:pt-4 px-1 md:px-4">
        <h3 className="font-bold text-sm sm:text-xl">{name}</h3>
        <p className="text-xs sm:text-lg">{role}</p>
      </div>
    </div>
  );
}

export default function AmazingPeople() {
  return (
    <div className="py-16">
      <SectionHeader text="Amazing People Were Team Member" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            image={member.image}
            role={member.role}
          />
        ))}
      </div>
    </div>
  );
}
