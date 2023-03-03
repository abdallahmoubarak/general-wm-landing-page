import { BiDollarCircle } from "react-icons/bi";
import Button from "@/components/Button";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex items-center justify-between gap-2 py-4">
      <div>
        <Image src="svg/Logo.svg" alt="Water Monster" width={130} height={40} />
      </div>
      <Button text="Invest in the project" icon={<BiDollarCircle />} />
    </div>
  );
}
