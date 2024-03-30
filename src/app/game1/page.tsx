"use client";

import { useRef, useState } from "react";

const colorModeMap: { [key: number]: string } = {
  1: "red",
  2: "blue",
  3: "black",
  4: "orange",
  5: "amber",
  6: "yellow",
  7: "lime",
  8: "emerald",
};

export default function Page() {
  const [colorMode, setColorMode] = useState<boolean>(true);
  const [currentHex, setCurrentHex] = useState<string>("");
  const [currentColorNumber, setCurrentColorNumber] = useState<number>();
  const changeColorDiv = useRef<HTMLDivElement | null>(null);

  function getRandomNumber() {
    let randomNumber = null;
    randomNumber = Math.floor(Math.random() * 8) + 1;

    if (changeColorDiv.current) {
      setCurrentColorNumber(randomNumber);
      changeColorDiv.current.style.backgroundColor = colorModeMap[randomNumber];
    }
  }

  function getRandomHexClass() {
    let hex = "#";
    const hexValues = "0123456789ABCDEF";

    for (let i = 0; i < 6; i++) {
      hex += hexValues[Math.floor(Math.random() * 16)];
    }

    if (changeColorDiv.current)
      changeColorDiv.current.style.backgroundColor = hex;
    setCurrentHex(hex);
  }

  return (
    <div ref={changeColorDiv} className={`flex flex-col h-full`}>
      <div className="flex pb-3 bg-white text-center">
        <div
          className={`cursor-pointer flex-auto ${
            colorMode && "border-b-2 border-black"
          }`}
          onClick={() => setColorMode(true)}
        >
          Color Flipper
        </div>
        <div
          className={`cursor-pointer flex-auto ${
            !colorMode && "border-b-2 border-black"
          }`}
          onClick={() => setColorMode(false)}
        >
          Simple Hex
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <span className="mb-5 bg-[#222222] text-white p-2 rounded-xl">
          {colorMode ? (
            <span>
              Background Color:
              {currentColorNumber &&
                colorModeMap[currentColorNumber].toUpperCase()}
            </span>
          ) : (
            <span>Background Hex: {currentHex}</span>
          )}
        </span>
        <button
          onClick={() => {
            if (!colorMode) getRandomHexClass();
            if (colorMode) getRandomNumber();
          }}
          className="border border-white rounded-md p-2 bg-white"
        >
          CLICK ME
        </button>
      </div>
    </div>
  );
}
