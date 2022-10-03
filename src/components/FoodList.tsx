import React, { useState } from "react";
import { data } from "../data/sample.js";
import { FoodType } from "../types";
import { Food } from "./";

// Render FoodList component.
const FoodList = () => {
  // Manage foods data state.
  const [foods, setFoods] = useState<FoodType[] | []>(data);

  // Render.
  return (
    <div className="max-w-[1640px] m-auto p-4">
      <h1 className="text-lime-600 font-bold text-4xl text-center">
        Top Rated HIP-Food
      </h1>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row justify-between py-2">
        {/* Fliter By Food Type */}
        <div className="mb-2">
          <p className="font-bold text-gray-700 mb-1">Filter By Type</p>
          <div className="flex justfiy-start gap-2 flex-wrap">
            <button className="border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white">
              All
            </button>
            <button className="border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white">
              Burgers
            </button>
            <button className="border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white">
              Italian
            </button>
            <button className="border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white">
              Salad
            </button>
            <button className="border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white">
              Chicken
            </button>
          </div>
        </div>

        {/* Filter By Food Price */}
        <div className="mb-2">
          <p className="font-bold text-gray-700 mb-1">Filter By Price</p>
          <div className="flex justify-start gap-2 max-w-[390px]">
            <button className="border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white">
              $
            </button>
            <button className="border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white">
              $$
            </button>
            <button className="border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white">
              $$$
            </button>
            <button className="border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white">
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((food) => (
          <Food key={food.id} item={food} />
        ))}
      </div>
    </div>
  );
};

export default FoodList;
