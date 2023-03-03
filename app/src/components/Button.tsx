import { ReactNode } from "react";

export default function Button({ text = "button", icon }: buttonProps) {
  return (
    <button className="flex gap-2 items-center bg-primary_100 text-white py-2 px-4 rounded-full hover:bg-primary_80 hover:text-black_gray whitespace-nowrap">
      <span>{icon}</span>
      <span>{text}</span>
    </button>
  );
}

interface buttonProps {
  text: string;
  icon: ReactNode;
}
