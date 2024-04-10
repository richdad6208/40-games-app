"use client";

import Image from "next/image";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  format,
} from "date-fns";
import { useEffect, useState } from "react";

const fixedTime = new Date(2024, 4, 20, 11, 30);

export default function Page() {
  const [timeLeft, setTimeLeft] = useState<number>(
    differenceInSeconds(fixedTime, Date.now())
  );

  useEffect(() => {
    setInterval(
      () => setTimeLeft(differenceInSeconds(fixedTime, Date.now())),
      1000
    );
  }, [timeLeft]);

  function formatter(time: number, type: "dd" | "hh" | "mm" | "ss") {
    let halfNumber = 1;
    switch (type) {
      case "dd":
        halfNumber = 1;
      case "hh":
        halfNumber = 24;
      case "mm":
        halfNumber = 60;
      case "ss":
        halfNumber = 60;
      default:
    }

    const left: number = Number(format(time, type));
    return left % halfNumber;
  }

  return (
    <div className="flex bg-gray-300 p-10">
      <div className="relative w-1/2 h-[300px] ">
        <Image src={"/images/phone.jpg"} alt="phone" fill />
      </div>
      <div className="w-2/3 p-6">
        <h2 className="mb-2 font-semibold text-xl">OLD IPHONE GIVEAWAY</h2>
        <p className="mb-5 font-medium text-sm">
          Giveaway Ends On Friday, 2 Aprill 2021 11:30am
        </p>
        <p className="mb-6 text-xs">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut maxime
          adipisci aspernatur repellendus accusantium, sequi numquam deleniti
          ipsa hic quas corporis, inventore sint at soluta nisi natus ad
          perferendis eum!
        </p>
        <div className="flex gap-3">
          <span className="flex flex-col justify-center items-center w-16 h-16 text-white bg-slate-700">
            <p className="text-3xl font-bold">
              {differenceInDays(fixedTime, Date.now())}
            </p>
            <p className="text-xs ">DAYS</p>
          </span>
          <span className="flex flex-col justify-center items-center w-16 h-16 text-white bg-slate-700">
            <p className="text-3xl font-bold">
              {differenceInHours(fixedTime, Date.now()) % 24}
            </p>
            <p className="text-xs ">HOURS</p>
          </span>
          <span className="flex flex-col justify-center items-center w-16 h-16 text-white bg-slate-700">
            <p className="text-3xl font-bold">
              {differenceInMinutes(fixedTime, Date.now()) % 60}
            </p>
            <p className="text-xs ">MINS</p>
          </span>
          <span className="flex flex-col justify-center items-center w-16 h-16 text-white bg-slate-700">
            <p className="text-3xl font-bold">
              {differenceInSeconds(fixedTime, Date.now()) % 60}
            </p>
            <p className="text-xs ">SECS</p>
          </span>
        </div>
      </div>
    </div>
  );
}
