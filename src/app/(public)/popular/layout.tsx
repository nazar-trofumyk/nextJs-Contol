import {Metadata} from "next";
import React from "react";


export const metadata:Metadata ={
    title:'Popular movies '
}
type Props = {children:React.ReactNode}

const PopularMoviesLayout = ({children}:Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default PopularMoviesLayout;
