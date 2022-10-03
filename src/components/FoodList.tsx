import React, { useState } from "react";
import { data } from "../data/sample.js";
import { FoodType } from "../types";
import { Food } from "./";

// Render FoodList component.
const FoodList = () => {
  // Manage foods data state.
  const [foods, setFoods] = useState<FoodType[] | []>(data);

  // Filter food by category.
  const filterCategory = (category: string) => {
    setFoods(
      data.filter((food) => food.category === category)
    );
  };

  // Filter food by price.
  const filterPrice = (price: string) => {
    setFoods(
      data.filter((food) => food.price === price)
    );
  };

  // Reset filter.
  const filterReset = () => {
    setFoods(data);
  };

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
          <p className="font-bold text-gray-700 mb-2">Filter By Category</p>
          <div className="flex justfiy-start gap-2 flex-wrap">
            <button
              onClick={filterReset}
              className="border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterCategory("burger")}
              className="border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white"
            >
              Burger
            </button>
            <button
              onClick={() => filterCategory("chicken")}
              className="border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white"
            >
              Chicken
            </button>
            <button
              onClick={() => filterCategory("italian")}
              className="border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white"
            >
              Italian
            </button>
            <button
              onClick={() => filterCategory("salad")}
              className="border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white"
            >
              Salad
            </button>
          </div>
        </div>

        {/* Filter By Food Price */}
        <div className="mb-2">
          <p className="font-bold text-gray-700 mb-2">Filter By Price</p>
          <div className="flex justify-start gap-2 max-w-[390px]">
            <button
              onClick={() => filterPrice("$")}
              className="border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white"
            >
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
