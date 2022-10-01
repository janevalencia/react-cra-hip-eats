import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

// Render Layout component.
const Layout = ( { children } : { children: React.ReactNode } ) => {
    return (
        <>
            <Header>
                <Navbar />
            </Header>
            { children }
            <Footer />
        </>
    );
}

export default Layout;