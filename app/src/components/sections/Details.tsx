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
    title: "Track Water Usage & Plan Your Chores Efficiently",
    img: "/png/track.png",
    text: "Keep a close eye on your water usage and receive timely notifications when water levels in your tanks run low. With this information, you can plan your chores more efficiently and save water.",
    left: true,
  },
  {
    title: "Prevent Water Shortages on a Large Scale",
    img: "/png/waterlack.png",
    text: "We collaborate with governments, municipalities, and NGOs to implement our wide network tracking plans, which provide valuable insights and ample time to plan ahead, and prevent water shortages.",
    left: false,
  },
  {
    title: "Detect Water Leaks Before It's Too Late",
    text: "Our advanced AI technology can detect even the slightest of leaks by analyzing your usage patterns. You'll receive instant alerts, so you can take prompt action to fix the problem before it becomes a bigger issue.",
    img: "/png/alert.png",
    left: true,
  },
];
