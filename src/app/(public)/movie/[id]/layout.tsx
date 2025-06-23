import {Metadata} from "next";
import React from "react";


export const metadata:Metadata ={
    title:'MovieId Layout metadata'
}
type Props = {children:React.ReactNode}

const MovieIdLayout = ({children}:Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default MovieIdLayout;
