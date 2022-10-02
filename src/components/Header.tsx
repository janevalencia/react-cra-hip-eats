import React from "react";

// Define Header props.
type HeaderProps = {children? : React.ReactNode};

// Render Header component.
const Header = ({children} : HeaderProps) => {
    return (
        <header>
            <div>
                {children}
            </div>
        </header>
    );
}

export default Header;