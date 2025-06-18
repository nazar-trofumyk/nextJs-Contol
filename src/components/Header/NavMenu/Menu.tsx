import React from 'react';
import Link from "next/link";

const Menu = () => {
    return (
        <ul>
            <li><Link href={'/public'}>Home</Link></li>
            <li><Link href={'/upcoming'}>Upcoming movies</Link></li>
            <li><Link href={'/popular'}>Popular movies</Link></li>
            <li><Link href={'/top_rated'}>Top rated movies</Link></li>
        </ul>
    );
};

export default Menu;