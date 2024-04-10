"use client";

import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [title, setTitle] = useState<"History" | "Vision" | "Goals">("History");
  const content =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa facilis a, est eos recusandae, alias, repellat veniam doloremque laboriosam dolor quaerat. Dicta impedit sed quisquam officia qui repellat maiores praesentium!";
  const contentTitle = {
    History: { title: "History", content },
    Vision: { title: "Vision", content },
    Goals: { title: "Goals", content },
  };
  return (
    <div className="h-[100dvh] bg-gray-200">
      <h2 className="mb-4 font-bold text-center text-ellipsis text-4xl">
        About
      </h2>
      <p className="text-center mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta enim
        deleniti
      </p>
      <div className="flex px-7 gap-5">
        <div className="flex-auto relative w-full h-[300px] rounded-md overflow-hidden">
          <Image
            src="/images/mountain.jpg"
            alt="산"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-auto bg-white rounded-md ">
          <div
            className="flex cursor-pointer bg-gray-300
          "
          >
            <div
              onClick={() => setTitle("History")}
              className={`flex-auto text-center py-2 ${
                title === "History" && "bg-white border border-blue-400"
              }`}
            >
              History
            </div>
            <div
              onClick={() => setTitle("Vision")}
              className={`flex-auto text-center py-2 ${
                title === "Vision" && "bg-white border border-blue-400"
              }`}
            >
              Vision
            </div>
            <div
              onClick={() => setTitle("Goals")}
              className={`flex-auto text-center py-2 ${
                title === "Goals" && "bg-white border border-blue-400"
              }`}
            >
              Goals
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-bold mb-3">{contentTitle[title].title}</h3>
            <p>{contentTitle[title].content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
