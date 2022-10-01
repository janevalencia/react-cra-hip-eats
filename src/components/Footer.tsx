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
const Footer = ( {author, year} : FooterProps ) => {
    return (
        <footer>
            {/* Author, Copyright, Brand */}
            <div className="footer__brand-copyright">
                <span>Hip Eats</span>
                <p>Copyright &copy; { year } { author }. All rights reserved.</p>
            </div>
        </footer>
    );
}
Footer.defaultProps = defaultFooterProps;

export default Footer;