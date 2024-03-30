"use client";

import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="bg-gray-100 h-full relative">
      <div
        className={`bg-white absolute top-0 bottom-0 left-0 w-2/5 transition origin-left ${
          isOpen ? "scale-x-100" : "scale-x-0"
        }`}
      >
        <h1 className="text-2xl mb-5 pl-5">CodingAddict</h1>
        <nav>
          <ul>
            <li className="hover:bg-gray-100 cursor-pointer py-2 pl-5">Home</li>
            <li className="hover:bg-gray-100 cursor-pointer py-2 pl-5">
              About
            </li>
            <li className="hover:bg-gray-100 cursor-pointer py-2 pl-5">
              Projects
            </li>
            <li className="hover:bg-gray-100 cursor-pointer py-2 pl-5">
              Contact
            </li>
          </ul>
        </nav>
      </div>
      <span
        onClick={() => setIsOpen(!isOpen)}
        className="absolute right-5 top-5"
      >
        <Image
          src={"/images/hamburger.png"}
          alt="menu"
          width={24}
          height={24}
        />
      </span>
    </div>
  );
}
