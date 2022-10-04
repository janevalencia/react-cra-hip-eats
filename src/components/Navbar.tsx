import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Search, Sidebar } from "./";

// Default Brand props.
const defaultBrandProp = {
  brand: (
    <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
      Hip<span className="font-bold"> Eats</span>
    </h1>
  ),
};

// Render Navbar component.
const Navbar = ({brand} : typeof defaultBrandProp) => {
  // Manage Sidebar menu state.
  const [showNav, setShowNav] = useState<boolean>(false);

  // Manage Cart amount.
  const [cartNo, setCartNo] = useState<number>(0);

  // Fetch Cart amount from localStorage if any.
  useEffect(() => {
    let storage = localStorage.getItem('orders');
    if (storage) {
      const orders : string[] = JSON.parse(storage);
      setCartNo(orders.length);
    }
  }, [cartNo]);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      
      {/* Left-side: Hamburger, Brand, Delivery/Pickup */}
      <div className="flex items-center gap-x-2">
        <div 
            className="cursor-pointer"
            onClick={() => setShowNav(!showNav)}
        >
          <AiOutlineMenu size={30} />
        </div>
        <Link to={`/`}>{brand}</Link>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      {/* Search Bar */}
      <Search />

      {/* Cart Menu */}
      <div className="bg-black text-white rounded-full py-2">
        <Link to={`/orders`}>
          <button className="flex items-center gap-x-1 border-none">
            <BsFillCartFill />
            <span className="hidden lg:inline">Cart</span>
            {cartNo > 0 && <span>{`(${cartNo})`}</span>}
          </button>
        </Link>
      </div>

      {/* Mobile Nav */}
      <Sidebar isShown={showNav} setShown={setShowNav} brand={brand} />
    </div>
  );
};
Navbar.defaultProps = defaultBrandProp;

export default Navbar;
