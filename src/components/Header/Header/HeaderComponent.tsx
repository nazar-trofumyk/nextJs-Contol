import React from 'react';
import Logo from "@/components/Header/Logo/Logo";
import Menu from "@/components/Header/NavMenu/Menu";
import './Header.css'
const HeaderComponent = () => {
    return (
        <header>
            <Logo/>
            <Menu/>
        </header>
    );
};

export default HeaderComponent;