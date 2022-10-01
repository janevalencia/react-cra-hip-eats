import React from "react";

// Define default Brand / Logo props.
const defaultBrandProp = {
    brand: <h1>Hip Eats</h1>,
};

// Define Header props.
type HeaderProps = { children? : React.ReactNode } & typeof defaultBrandProp;

// Render Header component.
const Header = ({children, brand} : HeaderProps) => {
    return (
        <header>
            {brand}
            <div>
                {children}
            </div>
        </header>
    );
}
Header.defaultProps = defaultBrandProp;

export default Header;