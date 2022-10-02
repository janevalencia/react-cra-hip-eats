import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { Search } from "./";

const Navbar = () => {
    return (
        <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
            {/* Left-side: Hamburger, Brand, Delivery/Pickup */}
            <div className="flex items-center gap-x-2">
                <div className="cursor-pointer">
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">Hip
                    <span className="font-bold"> Eats</span>
                </h1>
                <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
                    <p className="bg-black text-white rounded-full p-2">Delivery</p>
                    <p className="p-2">Pickup</p>
                </div>
            </div>

            {/* Search Bar */}
            <Search />

            {/* Cart Menu */}
            <div className="bg-black text-white rounded-full py-2">
                <button className="flex items-center gap-x-2 border-none">
                    <BsFillCartFill />
                    <span className="hidden lg:block">Cart</span>
                </button>
            </div>

            {/* Mobile Nav */}
            <div>
                Mobile Menu Overlay
            </div>
        </div>
    );
}

export default Navbar;