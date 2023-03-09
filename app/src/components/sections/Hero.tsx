import Button from "../Button";
import { BsWhatsapp } from "react-icons/bs";
import Image from "next/image";
import AnimatedWifi from "../AnimatedWifi";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-black_gray text-white pb-8 p-3 pt-10 bg-[url('/png/HeroBackground.png')] bg-cover">
      <div className=" ">
        <div className="float-left">
          <Image
            src={"/png/PhoneNContainer.png"}
            alt=""
            width={1400}
            height={400}
          />
        </div>
      </div>
      <div className="absolute left-[35%] w-4 sm:w-16">
        <AnimatedWifi />
      </div>
      <div className="absolute right-[28%] w-4 sm:w-16 rotate-[260deg]">
        <AnimatedWifi />
      </div>
      <div className="text-center -mt-2 md:-mt-12">
        <h1 className="text-xl sm:text-4xl font-bold tracking-wide">
          {"Water monitoring made easy"}
        </h1>
        <h2 className="text-sm sm:text-lg tracking-wider md:mt-2">
          {"We aim to keep the clean water flowing"}
        </h2>
      </div>
      <div className="w-fit mx-auto mt-3">
        <Link href={`https://wa.me/+96170097533?text=I want to buy `}>
          <Button text="Order Yours Now" icon={<BsWhatsapp />} />
        </Link>
      </div>
    </div>
  );
}
