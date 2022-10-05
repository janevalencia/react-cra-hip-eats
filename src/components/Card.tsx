import React from "react";
import { useNavigate } from "react-router-dom";

// Define Card props.
type CardProps = {
    title: string;
    subtitle?: string;
    ctaText: string;
    imageUrl: string;
};

// Render Card component.
const Card = ({ title, subtitle, ctaText, imageUrl }: CardProps) => {
    
    // React-routing navigate.
    let navigate = useNavigate();

    // Save item to localStorage to be displayed on Cart.
    const addToCart = () => {
        let orders: string[] = [];
        let storage = localStorage.getItem("orders");

        // If storage exists, parsing the localStorage into JS Object.
        if (storage) {
            orders = JSON.parse(storage);
        }

        // Push new item to orders.
        orders.push(title);

        // Save orders back the localStorage.
        localStorage.setItem("orders", JSON.stringify(orders));

        // Refresh routing.
        navigate('/');
    };

    // Render.
    return (
        <div className="rounded-xl relative">
            {/* Overlay */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                <p className="font-bold text-xl px-3 pt-4">{title}</p>
                <p className="px-3">{subtitle}</p>
                <button
                    onClick={addToCart}
                    className="absolute border-white bg-white text-black mx-3 bottom-4 rounded-full py-2 hover:bg-transparent hover:text-white duration-500"
                >
                    {ctaText}
                </button>
            </div>

            {/* Card Image */}
            <img
                className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                src={imageUrl}
                alt={title}
            />
        </div>
    );
};

export default Card;
