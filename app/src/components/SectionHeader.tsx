import React from "react";

interface SectionHeaderProps {
  text: string;
}

const SectionHeader = ({ text }: SectionHeaderProps) => {
  return (
    <h1 className="text-2xl sm:text-4xl font-bold tracking-wide text-primary_100 px-2 pb-6 text-center ">
      {text}
    </h1>
  );
};

export default SectionHeader;
