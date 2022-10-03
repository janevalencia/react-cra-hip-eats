import React, {useState} from "react";
import { FeaturedItem } from "../types";
import { Card } from "./";
import { featured } from "../data/sample.js";

const FeaturedGrid = () => {
    const [items, setItems] = useState<FeaturedItem[] | []>(featured);

    return (
        <div className="max-w-[1640px] mx-auto grid md:grid-cols-3 gap-6 p-4">
            {
                items.map(item => 
                    <Card 
                        key={item.id}
                        title={item.title} 
                        subtitle={item.subtitle} 
                        imageUrl={item.image} 
                        ctaText="Order Now" /> 
                )
            }
        </div>
    );
}

export default FeaturedGrid;