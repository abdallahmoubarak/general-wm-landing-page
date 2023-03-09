import { ReactNode } from "react";

export default function Button({ text = "button", icon }: buttonProps) {
  return (
    <button className="flex items-center justify-center bg-primary_100 text-white text-sm rounded-full py-3 px-4 hover:bg-primary_80 hover:text-black_gray transition-all duration-200 ease-in-out md:min-w-[240px] md:text-xl md:py-4 md:px-8">
      <span className="mr-2">{icon}</span>
      <span>{text}</span>
    </button>
  );
}

interface buttonProps {
  text: string;
  icon: ReactNode;
}
