import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
    return (
        <div className="flex items-center gap-x-2 px-2 w-[200px] sm:w-[400px] lg:w-[500px] bg-gray-200 rounded-full">
            <AiOutlineSearch size={25} />
            <input 
                className="bg-transparent p-2 w-full rounded-full focus:outline-none"
                type="text"
                placeholder="Search foods..." />
        </div>
    );
}

export default Search;