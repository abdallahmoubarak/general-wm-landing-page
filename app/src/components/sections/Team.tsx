import React from "react";
import Image from "next/image";
import SectionHeader from "../SectionHeader";

const teamMembers = [
  {
    name: "Abdallah Moubarak",
    image: "/jpg/abdallah.jpg",
    role: "Founder & CEO",
  },
  {
    name: "Maha Khalaf",
    image: "/jpg/maha.jpg",
    role: "Business Developer",
  },
  {
    name: "Mohammad Ayash",
    image: "/jpg/ayash.jpg",
    role: "CTO & Product Developer",
  },
  {
    name: "Fatima Kabalan",
    image: "/jpg/fatima.jpg",
    role: "Software Developer",
  },
  {
    name: "Jad Sayegh",
    image: "/jpg/jad.jpg",
    role: "Community Developer",
  },
  // {
  //   name: "Aya Bitar",
  //   image: "/jpg/maya.jpg",
  //   role: "Marketing",
  // },
  {
    name: "Sadiq Taqi",
    image: "/jpg/sadiq.jpg",
    role: "Sales Representative",
  },
  {
    name: "Maya Bitar",
    image: "/jpg/maya.jpg",
    role: "Graphic Designer",
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

export default function TeamMembers() {
  return (
    <div className="py-16">
      <SectionHeader text="Meet the Team" />
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
