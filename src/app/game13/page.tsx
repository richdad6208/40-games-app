import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="bg-gray-200 p-10 text-center">
      <h2 className="font-bold text-3xl uppercase mb-7">
        tired of boring lorem ipsum
      </h2>
      <label className="flex justify-center items-center gap-2">
        <span className="font-medium text-xl">Paragraphs: </span>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="w-14 rounded-md py-2"
        />
        <button className="bg-blue-300 p-2 border-2 rounded-md border-blue-500">
          GENERATE
        </button>
      </label>
      <p></p>
    </div>
  );
}
