import React from 'react';
// import Navbar from './Header_nav';
import Banner from './Header_banner';
import NavHeaderComponent from '../containers/NavHeaderComponent';



function Header() {
    return (
        <header>
           <NavHeaderComponent />
           <Banner />
        </header>
    );
}

export default Header;
