import Button from "../Button";
import { BsWhatsapp } from "react-icons/bs";
import Image from "next/image";
import AnimatedWifi from "../AnimatedWifi";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-black_gray text-white pb-8 p-4 pt-12 bg-[url('/png/HeroBackground.png')] bg-cover">
      {/* Justify top */}
      <div className="flex row justify-between">
        <div className="flex row justify-start align-top w-fit max-w-[800px] ">
          {/* <Image src={"/png/Tank.png"} alt="" width={800} height={800} /> */}
          <img src={"/png/Tank.png"} alt="" width={"80%"} />
          <div className="w-4 sm:w-8 md:w-16 h-fit -ml-6">
            <AnimatedWifi />
          </div>
        </div>
        <div className="flex row justify-end align-top w-fit max-w-[800px] ">
          <div className="w-4 sm:w-8 md:w-16 h-fit mr-4 rotate-[260deg]">
            <AnimatedWifi />
          </div>
          {/* <Image src={"/png/Iphone.png"} alt="" width={400} height={400} /> */}
          <img src={"/png/Iphone.png"} alt="" width={"50%"} />
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-xl sm:text-4xl font-bold tracking-wide">
          {"Water monitoring made easy"}
        </h1>
        <h2 className="text-sm sm:text-lg tracking-wider">
          {"Control your water usage from your phone"}
        </h2>
      </div>
      <div className="w-fit mx-auto ">
        <Link href={`https://wa.me/+96170097533?text=I want to buy `}>
          <Button text="Order Yours Now" icon={<BsWhatsapp />} />
        </Link>
      </div>
    </div>
  );
}
