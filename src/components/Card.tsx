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
    return (
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-xl px-3 pt-4'>{title}</p>
                <p className='px-3'>{subtitle}</p>
                <button 
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