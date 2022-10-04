import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="max-w-[1640px] mx-auto p-4">
            <h2 className="text-2xl font-bold">404: Page Not Found</h2>
            <p className="text-sm leading-8">The page you are trying to access is unavailable.</p>
            <p className="text-sm leading-8">Please check the address URL you input.</p>
            <p className="text-lg mt-8">Return to <Link to={`/`} className="font-bold underline cursor-pointer">Homepage</Link></p>
        </div>
    );
}

export default NotFound;