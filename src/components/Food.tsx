import React from "react";
import { FoodType } from "../types";

// Define Food props.
type FoodProps = {
    item: FoodType
}

// Render Food component.
const Food = ({item} : FoodProps) => {
    return (
        <div className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
            {/* Image Thumbnail */}
            <img
                src={item.image}
                alt={item.name}
                className='w-full h-[200px] object-cover rounded-t-lg'
            />

            {/* Food Description */}
            <div className='flex justify-between px-2 py-4'>
                <p className='font-bold'>{item.name}</p>
                <p>
                    <span className='bg-lime-500 text-white p-1 rounded-full'>
                        {item.price}
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Food;