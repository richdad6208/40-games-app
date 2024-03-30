"use client";

import { useState } from "react";

export default function Page() {
  const [currentNumber, setCurrentNumber] = useState(0);

  const setNumberUP = () => {
    setCurrentNumber((prev) => prev + 1);
  };
  const setNumberDown = () => {
    setCurrentNumber((prev) => prev - 1);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10 bg-slate-100 h-full">
      <h2 className="text-7xl">Counter</h2>
      <p className="text-7xl text-green-700 font-bold">{currentNumber}</p>
      <div className="flex gap-5">
        <button
          onClick={setNumberUP}
          className="border-2 border-black p-2 rounded-xl"
        >
          DECREASE
        </button>
        <button
          onClick={() => setCurrentNumber(0)}
          className="border-2 border-black p-2 rounded-xl"
        >
          RESET
        </button>
        <button
          onClick={setNumberDown}
          className="border-2 border-black p-2 rounded-xl"
        >
          INCREASE
        </button>
      </div>
    </div>
  );
}
