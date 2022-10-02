import React from "react";

// Default Footer props.
const defaultFooterProps = {
    author: 'Jane Valencia',
    year: new Date().getFullYear().toString(),
}

type FooterProps = {
    author: string,
    year: string
} & typeof defaultFooterProps;

// Render Footer component.
const Footer = ({author, year} : FooterProps) => {
    return (
        <footer className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
            {/* Author, Copyright, Brand */}
            <div>
                <h3 className="text-lg md:text-xl py-1">Hip<span className="font-bold"> Eats</span></h3>
                <p className="text-sm">&copy; {year} {author}. All rights reserved.</p>
            </div>
        </footer>
    );
}
Footer.defaultProps = defaultFooterProps;

export default Footer;