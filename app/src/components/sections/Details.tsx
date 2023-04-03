import Image from "next/image";

export default function Details() {
  return (
    <div>
      {sections.map((section, i) => (
        <div
          key={i}
          className={`flex items-center justify-between gap-8 px-2 py-6  ${
            section.left ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div className="flex-[1_1_30%]">
            <h1 className="text-xl sm:text-2xl font-bold text-black_gray">
              {section.title}
            </h1>
            <p className="py-8 px-1 max-w-[85%] text-justify">{section.text}</p>
          </div>
          <div>
            <Image src={section.img} alt="" width={600} height={600} />
          </div>
        </div>
      ))}
    </div>
  );
}

const sections = [
  {
    title: "Track Water Usage & Plan Your House Chores",
    img: "/png/track.png",
    text: "Track the amount of water being used and receive notifications when the water levels in your tanks is low, allowing you to plan your house chores accordingly.",
    left: true,
  },
  {
    title: "Prevent Water Shortages, by Planning Ahead",
    img: "/png/waterlack.png",
    text: "We assist NGOs by implementing our Wide Network Tracking Plans in Refugee camps, giving NGOs enough time to plan ahead, and prevent water shortages.",
    left: false,
  },
  {
    title: "Detect Water Leaks, With the Power of AI",
    text: "Our AI is able to detect even the slightest of leaks, by analyzing your usage patterns,ensuring that you can take action to fix the problem before it becomes a bigger issue.",
    img: "/png/alert.png",
    left: true,
  },
];
