import React from 'react';
import Logo from "@/components/Header/Logo/Logo";
import Menu from "@/components/Header/NavMenu/Menu";
import './Header.css'
import SearchForm from "@/components/Header/SearchFilm/SearchForm";
const HeaderComponent = () => {
    return (
        <header>
            <Logo/>
            <Menu/>
            <SearchForm/>
        </header>
    );
};

export default HeaderComponent;