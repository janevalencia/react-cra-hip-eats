import React, { useState } from "react";
import { categories } from "../data/sample.js";
import { Deal } from "../types";

// Render Deals component.
const Deals = () => {
  // Manage deals state.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [deals, setDeals] = useState<Deal[] | []>(categories);

  // Render.
  return (
    <div className="max-w-[1640px] m-auto p-4">
      <h1 className="text-lime-600 font-bold text-4xl text-center mb-2">
        Find Out More
      </h1>
      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-4">
        {deals.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-4 flex justify-between items-center cursor-pointer"
          >
            <h2 className="font-bold sm:text-xl">{item.name}</h2>
            <img src={item.image} alt={item.name} className="w-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;
