"use client";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { faker } from "@faker-js/faker";
import Image from "next/image";
import { useState } from "react";

const mockData = [
  { id: 1, username: faker.internet.userName(), avatar: faker.image.avatar() },
  { id: 2, username: faker.internet.userName(), avatar: faker.image.avatar() },
  { id: 3, username: faker.internet.userName(), avatar: faker.image.avatar() },
  { id: 4, username: faker.internet.userName(), avatar: faker.image.avatar() },
];

export default function Page() {
  const [reviewerNumber, setReviewerNumber] = useState(0);
  const COUNT_MOCKDATA = mockData.length - 1;

  function getRandomNumber(max: number) {
    return Math.floor(Math.random() * (max + 1));
  }

  function handleCountUp() {
    if (reviewerNumber < COUNT_MOCKDATA) setReviewerNumber((prev) => prev + 1);
  }

  function handleCountDown() {
    if (reviewerNumber > 0) setReviewerNumber((prev) => prev - 1);
  }

  return (
    <div className="flex flex-col justify-center items-center h-full bg-slate-100">
      <h2 className="relative mb-20 text-5xl font-bold">
        Our Reviews
        <span className="absolute bottom-[-20px] left-28 bg-blue-400 w-20 h-1"></span>
      </h2>
      <div className="w-4/5 bg-white p-10 text-center space-y-2">
        <span className="relative rounded-full overflow-hidden">
          <span className="absolute z-10 left-[-40px] top-[-5px] w-24 h-24 rounded-full bg-blue-400 "></span>
          <span className="relative top-0 z-20">
            <img
              src={mockData[reviewerNumber].avatar}
              alt={mockData[reviewerNumber].username}
              width={100}
              height={100}
              className="mx-auto rounded-full overflow-hidden"
            />
          </span>
          <span className="z-30 absolute left-[-60px] top-0 inline-flex justify-center items-center bg-blue-400 rounded-full w-8 h-8 ">
            <Image
              src={"/images/quotes.png"}
              alt="quotes"
              width={20}
              height={20}
            />
          </span>
        </span>
        <p className="font-bold">{mockData[reviewerNumber].username}</p>
        <p className="font-light text-blue-500 text-sm">WEB DEVELOPER</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          suscipit magni reiciendis, ipsum sint libero nisi eligendi nulla
          consectetur odit rem quos odio beatae numquam? Vero earum nesciunt
          accusamus culpa!
        </p>
        <div className="flex justify-center gap-5">
          <span
            className="cursor-pointer p-2 hover:bg-slate-200 rounded-full"
            onClick={handleCountDown}
          >
            <IoIosArrowBack />
          </span>
          <span
            className="cursor-pointer p-2 hover:bg-slate-200 rounded-full"
            onClick={handleCountUp}
          >
            <IoIosArrowForward />
          </span>
        </div>
        <button
          onClick={() => setReviewerNumber(getRandomNumber(COUNT_MOCKDATA))}
          className="bg-sky-100 hover:bg-sky-300 border-blue-400 border-2 p-1 rounded-md shadow-xl text-blue-300 hover:text-white"
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
}
