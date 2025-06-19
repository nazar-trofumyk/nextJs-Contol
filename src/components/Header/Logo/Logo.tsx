import React from 'react';
import logoImage from "./Img/Logo.png"
import Image from "next/image";
const Logo = () => {
    return (
        <div>
            <Image src={logoImage} alt={"Logo"} width={120} height={100}/>
        </div>
    );
};

export default Logo;