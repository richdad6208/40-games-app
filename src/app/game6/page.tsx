"use client";

import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

export default function Page() {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div className="relative bg-blue-100 h-full flex flex-col justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-4/5 mx-auto py-16 flex flex-col justify-center text-center">
        <h2 className="text-5xl font-bold mb-5">Modal Project</h2>
        <button
          onClick={() => setOpen(!isOpen)}
          className="w-fit mx-auto py-1 px-2 rounded-md text-white bg-blue-400"
        >
          OpenModal
        </button>
      </div>
      <div
        className={`absolute inset-0 w-full flex justify-center items-center bg-gray-400 bg-opacity-50 py-16 text-center  mx-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="relative rounded-lg shadow-xl w-1/2 flex justify-center items-center bg-white h-1/2">
          <span
            className="absolute top-0 right-0 p-2 cursor-pointer "
            onClick={() => setOpen(!isOpen)}
          >
            <IoCloseSharp />
          </span>
          <p className="font-bold">Modal Content</p>
        </div>
      </div>
    </div>
  );
}
