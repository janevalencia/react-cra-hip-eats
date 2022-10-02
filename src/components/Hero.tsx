import React from "react";

const Hero = () => {
    return (
        <div className="max-w-[1640px] mx-auto p-4">
            <div className="max-h-[500px] relative">
                <div className="absolute bg-black/40 w-full h-full flex items-center p-8">
                    <h1 className="text-gray-200 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Order <span className="text-lime-500">HIP-food</span> to your door</h1>
                </div>
                <img 
                    className="w-full max-h-[500px] object-cover"
                    src="https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="hero-header" 
                />
            </div>
        </div>
    );
}

export default Hero;