"use client";

import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <div className="bg-gray-200 h-full">
      <div
        className={`flex justify-between items-center py-5 shadow-md  bg-white ${
          isToggle && "shadow-md"
        }`}
      >
        <h1 className="font-bold text-3xl">Coding Addict</h1>
        <nav className="bg-white ">
          <ul className="gap-5 hidden sm:flex">
            <li className="cursor-pointer p-3">Home</li>
            <li className="cursor-pointer p-3">About</li>
            <li className="cursor-pointer p-3">Projects</li>
            <li className="cursor-pointer p-3">Contact</li>
          </ul>
          <div
            onClick={() => setIsToggle(!isToggle)}
            className="block sm:hidden text-right "
          >
            <Image
              src="/images/hamburger.png"
              alt="menu"
              width={24}
              height={24}
              className="inline-flex mr-5"
            />
          </div>
        </nav>
      </div>
      <nav
        className={`sm:hidden transition origin-top bg-white shadow-md ${
          isToggle ? "scale-y-100" : "scale-y-0 flex"
        }`}
      >
        <ul className={` flex-col `}>
          <li className="cursor-pointer p-3">Home</li>
          <li className="cursor-pointer p-3">About</li>
          <li className="cursor-pointer p-3">Projects</li>
          <li className="cursor-pointer p-3">Contact</li>
        </ul>
      </nav>
    </div>
  );
}
