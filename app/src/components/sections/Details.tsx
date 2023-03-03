import Image from "next/image";

export default function Details() {
  return (
    <div>
      {sections.map((section, i) => (
        <div
          key={i}
          className={`flex items-center justify-between gap-4 px-2 py-6  ${
            section.left ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-black_gray">
              {section.title}
            </h1>
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
    left: true,
  },
  {
    title: "Prevent Water Shortages, by Planning Ahead",
    img: "/png/waterlack.png",
    left: false,
  },
  {
    title: "Detect Water Leaks, With the Power of AI",
    img: "/png/alert.png",
    left: true,
  },
];
