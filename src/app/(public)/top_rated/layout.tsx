import {Metadata} from "next";
import React from "react";


export const metadata:Metadata ={
    title:'Top rated movies Layout metadata'
}
type Props = {children:React.ReactNode}

const TopRatedMoviesLayout = ({children}:Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default TopRatedMoviesLayout;
