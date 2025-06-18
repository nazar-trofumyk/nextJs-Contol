import React from 'react';
import Link from "next/link";
import './NavMenu.css'
const Menu = () => {
    return (
        <ul>
            <li><Link className={'link'} href={'/'}>Home</Link></li>
            <li><Link className={'link'} href={'/upcoming'}>Upcoming movies</Link></li>
            <li><Link className={'link'} href={'/popular'}>Popular movies</Link></li>
            <li><Link className={'link'} href={'/top_rated'}>Top rated movies</Link></li>
        </ul>
    );
};

export default Menu;