import Image from "next/image";

export default function Specifics() {
  return (
    <div className="py-8">
      <div className="text-center pt-8 pb-20 px-4">
        <h1 className="text-xl sm:text-4xl font-bold tracking-wide text-primary_100 pb-4">
          All in one water controlling
        </h1>
        <h2 className=" tracking-wider text-black_gray sm:px-20">
          Monitor water levels in real-time, track usage, and receive low level
          alerts. Water Monster also provides valuable water quality
          information.
        </h2>
      </div>
      <div className="flex gap-[3rem] flex-wrap mx-auto w-fit px-2">
        {cards.map((card, i) => (
          <div
            key={i}
            className="relative border-4 border-primary_100 pt-6 pb-2 px-2 w-56 flex-auto"
          >
            <div className="absolute top-[-2rem] bg-white">
              <Image src={card.icon} alt={card.name} width={50} height={50} />
            </div>
            <div className="text-3xl font-bold px-2 text-black_gray pb-2 text-justify">
              {card.name}
            </div>
            <div className="font-bold text-primary_100 px-2 text-justify">
              {card.details}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
const cards = [
  {
    name: "Monitor",
    details: "By tracking the water usage while managing your house chores.",
    icon: "/svg/monitor.svg",
  },
  {
    name: "Conservation",
    details: "Prevent water shortage by planning ahead.",
    icon: "/svg/conservation.svg",
  },
  {
    name: "Usage",
    details:
      "Detect water leaks with the power of our AI & track your water quality.",
    icon: "/svg/usage.svg",
  },
];
