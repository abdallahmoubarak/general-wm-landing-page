import React from "react";
import Image from "next/image";

function TeamMember({ image, name, role }: any) {
  return (
    <div className="bg-primary_100 rounded-lg p-2 text-white">
      <div className="w-full max-h-64 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="filter grayscale object-cover w-full"
        />
      </div>
      <div className="pt-4 px-4 ">
        <h3 className="font-bold text-xl">{name}</h3>
        <p>{role}</p>
      </div>
    </div>
  );
}

export default function TeamMembers() {
  return (
    <div className="py-16">
      <h1 className="text-2xl sm:text-4xl font-bold tracking-wide text-primary_100 px-2 pb-6 text-center ">
        Meet the Team
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
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

const teamMembers = [
  {
    name: "Abdallah Moubarak",
    image: "/jpg/abdallah.jpg",
    role: "Founder & CEO",
  },

  {
    name: "Yasser Shkeir",
    image: "/jpg/yasser.jpg",
    role: "Sales & Communication",
  },
  {
    name: "Hadi Darwish",
    image: "/jpg/hadid.jpg",
    role: "Hardware & Software Developer",
  },
  {
    name: "Maha Khalaf",
    image: "/jpg/maha.jpg",
    role: "Digital Marketing ",
  },
  {
    name: "Hussam Kak",
    image: "/jpg/hussam.jpg",
    role: "Hardware & Software Developer",
  },
  {
    name: "Ali Haidar",
    image: "/jpg/ali.jpg",
    role: "Hardware & Software Developer",
  },
  {
    name: "Maya Bittar",
    image: "/jpg/maya.jpg",
    role: "Graphic Designer",
  },
];
