import { BiDollarCircle } from "react-icons/bi";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center justify-between gap-2 py-4">
      <a href="#">
        <Image src="svg/Logo.svg" alt="Water Monster" width={130} height={40} />
      </a>
      <Link
        href={`https://wa.me/+96170097533?text=I want to invest with you, my investment amount is:`}
      >
        <Button text="Invest in the project" icon={<BiDollarCircle />} />
      </Link>
    </div>
  );
}
