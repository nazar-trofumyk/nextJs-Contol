import {Metadata} from "next";
import React from "react";


export const metadata:Metadata ={
    title:'Upcoming movies Layout metadata'
}
type Props = {children:React.ReactNode}

const UpcomingMoviesLayout = ({children}:Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default UpcomingMoviesLayout;
