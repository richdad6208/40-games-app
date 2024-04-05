"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Page() {
  const { ref: startDivRef, inView } = useInView({ threshold: 0 });
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    if (inView) {
      setActive(true);
      return;
    }

    setActive(false);
  }, [inView]);

  return (
    <section>
      <div ref={startDivRef}></div>
      <header
        className={`fixed top-0 left-0 right-0 z-30 flex justify-between items-center px-5 ${
          isActive ? "bg-transparent" : "bg-white"
        }`}
      >
        <h1 className={`py-5 text-black text-3xl `}>로고임당</h1>
        <nav>
          <ul className="flex">
            <li className="cursor-pointer p-3">
              <a href="#s1">Home</a>
            </li>
            <li className="cursor-pointer p-3">
              <a href="#s2">About</a>
            </li>
            <li className="cursor-pointer p-3">
              <a href="#s3">Service</a>
            </li>
            <li className="cursor-pointer p-3">
              <a href="#s4">Tours</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="relative w-full h-[100dvh] mt-16" id="s1">
        <Image src={"/images/bg.jpg"} alt="bg" fill className="object-cover" />
      </div>
      <div
        className="bg-sky-200 h-[100dvh] flex justify-center items-center"
        id="s2"
      >
        About
      </div>
      <div
        className="bg-pink-200 h-[100dvh] flex justify-center items-center"
        id="s3"
      >
        Service
      </div>
      <div
        className="bg-amber-500 h-[100dvh] flex justify-center items-center"
        id="s4"
      >
        Tours
      </div>
    </section>
  );
}
