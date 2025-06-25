import {Metadata} from "next";
import React from "react";


export const metadata:Metadata ={
    title:'GenreId Layout metadata'
}
type Props = {children:React.ReactNode}

const GenreIdLayout = ({children}:Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default GenreIdLayout;
