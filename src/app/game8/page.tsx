"use client";

import Image from "next/image";
import { useState } from "react";

const foodList = [
  {
    id: 1,
    name: "Buttermilk Pancake",
    description:
      "I&apos;m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    type: "Breakfast",
    price: "$15.99",
    imgUrl: "https://loremflickr.com/320/240/Buttermilk%20Pancake",
  },
  {
    id: 2,
    name: "Diner Double",
    description:
      "I&apos;m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    type: "Lunch",
    price: "$13.99",
    imgUrl: "https://loremflickr.com/320/240/Diner%20Double",
  },
  {
    id: 3,
    name: "Godzilla Milkshake",
    description:
      "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    type: "Shakes",
    price: "$6.99",
    imgUrl: "https://loremflickr.com/320/240/Godzilla%20Milkshake",
  },
  {
    id: 4,
    name: "Country Delight",
    description:
      "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin normcore meh, williamsburg before they sold out organic pop-up.",
    type: "Breakfast",
    price: "$12.99",
    imgUrl: "https://loremflickr.com/320/240/Country%20Delight",
  },
  {
    id: 5,
    name: "Egg Attack",
    description:
      "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90&apos;s pop-up",
    type: "Lunch",
    price: "$22.99",
    imgUrl: "https://loremflickr.com/320/240/Egg%20Attack",
  },
  {
    id: 6,
    name: "Oreo Dream",
    description:
      "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
    type: "Shakes",
    price: "$18.99",
    imgUrl: "https://loremflickr.com/320/240/Oreo%20Dream",
  },
  {
    id: 7,
    name: "Bacon Overflow",
    description:
      "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
    type: "Breakfast",
    price: "$8.99",
    imgUrl: "https://loremflickr.com/320/240/Bacon%20Overflow",
  },
  {
    id: 8,
    name: "American Classic",
    description:
      "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
    type: "Lunch",
    price: "$12.99",
    imgUrl: "https://loremflickr.com/320/240/American%20Classic",
  },
  {
    id: 9,
    name: "Quarantine Buddy",
    description:
      "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    type: "Shakes",
    price: "$16.99",
    imgUrl: "https://loremflickr.com/320/240/Quarantine%20Buddy",
  },
  {
    id: 10,
    name: "Bison Steak",
    description: "echo park exercitation, selvage scenester",
    type: "Dinner",
    price: "$22.99",
    imgUrl: "https://loremflickr.com/320/240/Bison%20Steak",
  },
];

const navName = ["All", "Breakfast", "Lunch", "Shakes", "Dinner"];

export default function Page() {
  const [currentType, setCurrentType] = useState("All");

  const filteredList = foodList.filter((food) =>
    currentType !== "All" ? food.type === currentType : food
  );

  return (
    <div className="flex flex-col gap-10 justify-center items-center pt-10 bg-gray-100 ">
      <h2 className="text-4xl font-bold w-fit border-b-4 border-yellow-600">
        Our Menu
      </h2>
      <ul className="flex gap-5">
        {navName.map((list, index) => (
          <li
            key={index}
            className={`cursor-pointer p-1 border-2 border-yellow-500 rounded-md shadow-md ${
              currentType === list && "bg-slate-200"
            }`}
            onClick={() => setCurrentType(list)}
          >
            {list}
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-2 gap-5">
        {filteredList.map((food) => (
          <div key={food.id} className="flex gap-3">
            <span className="relative flex-auto min-w-[150px] w-36 h-24 border-2 overflow-hidden rounded-md border-yellow-600">
              <Image
                src={`https://loremflickr.com/320/240`}
                alt="picture"
                fill
                className="object-cover"
              />
            </span>
            <div className="max-w-[300px]">
              <h3 className="flex justify-between mb-5 pb-2 border-b border-b-gray-400 font-semibold">
                {food.name}
                <span className="text-yellow-600">{food.price}</span>
              </h3>
              <p>{food.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
