import React from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Abdallah Moubarak",
    image: "/jpg/abdallah.jpg",
    role: "Founder and CEO",
  },
  {
    name: "Yasser Shkeir",
    image: "/jpg/yasser.jpg",
    role: "Communication and Operations Specialist",
  },
  {
    name: "Hadi Darwish",
    image: "/jpg/hadi.jpg",
    role: "Hardware and Software Engineer",
  },
];

function TeamMember(props: any) {
  return (
    <div className="bg-primary_100 rounded-lg p-2 text-white">
      <div className="w-full h-52 rounded-lg overflow-hidden">
        <Image
          src={props.image}
          alt={props.name}
          width={300}
          height={300}
          className="filter grayscale object-cover w-full"
        />
      </div>
      <h3 className="font-bold mt-4">{props.name}</h3>
      <p>{props.role}</p>
    </div>
  );
}

export default function TeamMembers() {
  return (
    <div className="py-16">
      <h1 className="text-xl sm:text-4xl font-bold tracking-wide text-primary_100 pb-4">
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
