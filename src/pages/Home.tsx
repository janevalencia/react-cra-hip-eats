import React from "react";
import { Hero, FeaturedGrid, FoodList, Deals } from "../components";

// Render Home or Index page.
const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedGrid />
      <FoodList />
      <Deals />
    </>
  );
};

export default Home;
