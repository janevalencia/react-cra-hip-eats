import React from "react";

// Define Card props.
type CardProps = {
    title: string,
    subtitle?: string,
    ctaText: string,
    imageUrl: string
}

// Render Card component.
const Card = ({title, subtitle, ctaText, imageUrl} : CardProps) => {
    
    // Save item to localStorage to be displayed on Cart.
    const addToCart = () => {
        let storage = localStorage.getItem('orders');
        if (storage) {
            // Parsing the localStorage into JS Object.
            let storedCart : string[] = JSON.parse(storage);

            // Push new item to storedCart.
            storedCart.push(title);

            // Save back the localStorage.
            localStorage.setItem('orders', JSON.stringify(storedCart));
        } else {
            // Create new localStorage item called orders.
            let orders : string[] = [];

            // Push new item to storedCart.
            orders.push(title);

            // Save back the localStorage.
            localStorage.setItem('orders', JSON.stringify(orders));
        }

        window.location.reload();
    }

    // Render.
    return (
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-xl px-3 pt-4'>{title}</p>
                <p className='px-3'>{subtitle}</p>
                <button 
                    onClick={addToCart}
                    className='absolute border-white bg-white text-black mx-3 bottom-4 rounded-full py-2 hover:bg-transparent hover:text-white duration-500'
                >
                    {ctaText}
                </button>
            </div>

            {/* Card Image */}
            <img
                className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                src={imageUrl}
                alt={title}
            />
        </div>
    );
}

export default Card;